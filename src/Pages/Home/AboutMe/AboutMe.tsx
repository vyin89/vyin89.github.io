import { Flex, Image, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import AboutImage from "./about.png";
import { data, person } from "./data";
import { Fade } from "react-awesome-reveal";

export function AboutMe() {
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  return (
    <>
      <Title pt={20} pb={20} id="about-me">
        About me
      </Title>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ base: "center", sm: "space-between" }}
        style={{ padding: "20px 0" }}
      >
        <div style={{ width: isMobile ? "100%" : "50%" }}>
          <Stack gap="lg">
            <Title order={2}>{person.name}</Title>
            <Title order={3}>{person.title}</Title>
            <Text>{person.subtitle}</Text>
            <Image h={200} radius="md" src={AboutImage} />
          </Stack>
        </div>
        <div style={{ width: isMobile ? "100%" : "50%" }}>
          <Stack gap="lg">
            <Fade cascade triggerOnce delay={100}>
              {data.map((item) => (
                <Text key={item.gist}>
                  {item.text}
                  {item.extra}
                </Text>
              ))}
            </Fade>
          </Stack>
        </div>
      </Flex>
    </>
  );
}
