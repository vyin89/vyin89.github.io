import { Chip, Group, List, Paper, Text, Title } from "@mantine/core";
import type { SelectedData } from "../../Pages/Home/Experience";
import { Fade } from "react-awesome-reveal";

export const ExperienceItem = ({
  selectedData,
}: {
  selectedData: SelectedData;
}) => {
  return (
    <Paper withBorder shadow="xs" p="md">
      <Title order={3}>
        {selectedData.title} @ {selectedData.company}
      </Title>
      <Text c="dimmed" size="xs" mt={4}>
        {selectedData.start} - {selectedData.end}
      </Text>
      <List pt="md" size="sm">
        <Fade cascade triggerOnce duration={100}>
          {selectedData.achievements?.map((ach, i) => (
            <List.Item key={i}>{ach}</List.Item>
          ))}
        </Fade>
      </List>
      <Group pt="xl" gap={2}>
        {selectedData?.tags?.map((tag) => (
          <Chip size={"xs"} key={tag} variant="light">
            {tag}
          </Chip>
        ))}
      </Group>
    </Paper>
  );
};
