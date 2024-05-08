import {
  Flex,
  Paper,
  Stack,
  Text,
  Timeline,
  Title,
  Transition,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import type { SelectedData } from ".";
import ExperienceItem from "../../../components/ExperienceItem";
import { data } from "./data";

export function Experience() {
  const [selected, setSelected] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const [selectedData, setSelectedData] = useState<SelectedData>(data[0]);

  const smallScreen = useMediaQuery(`(max-width: 768px)`);

  useEffect(() => {
    setFade(false);
    setTimeout(() => {
      setSelectedData(data[selected]);
      setFade(true);
    }, 300);
  }, [selected]);

  if (smallScreen) {
    return (
      <Paper id="experience">
        <Title pt={20} pb={20}>
          Experience
        </Title>
        <Stack gap="sm">
          {data.map((d) => (
            <ExperienceItem selectedData={d} />
          ))}
        </Stack>
      </Paper>
    );
  }

  return (
    <Paper id="experience">
      <Title pt={20} pb={20}>
        Experience
      </Title>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ sm: "center" }}
        id="experience"
        style={{ padding: "10px 0" }}
      >
        <Stack style={{ width: "50%" }}>
          <Timeline
            bulletSize={36}
            lineWidth={2}
            active={data.length - selected - 1}
            reverseActive
          >
            {
              // Can't break this out to another file for some reason?
              data.map(
                ({ icon, title, start, end, company, description }, index) => (
                  <Timeline.Item
                    key={company}
                    bullet={icon}
                    title={company}
                    lineVariant="dashed"
                    onClick={() => {
                      setSelected(index);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Text>{title}</Text>
                    <Text c="dimmed" size="xs" mt={4}>
                      {start} - {end}
                    </Text>
                    <Text size="sm">{description}</Text>
                  </Timeline.Item>
                )
              )
            }
          </Timeline>
        </Stack>

        <Stack style={{ width: "50%" }}>
          <Transition
            mounted={fade}
            transition="fade"
            duration={150}
            timingFunction="ease"
          >
            {(styles) => (
              <div style={styles}>
                {selectedData && <ExperienceItem selectedData={selectedData} />}
              </div>
            )}
          </Transition>
        </Stack>
      </Flex>
    </Paper>
  );
}
