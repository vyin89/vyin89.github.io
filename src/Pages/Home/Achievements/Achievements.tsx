import { Paper, SimpleGrid, Title } from "@mantine/core";
import { AchievementCard } from "../../../components/Card/Card";
import { Fade } from "react-awesome-reveal";

export function Achievements() {
  return (
    <Paper id="projects">
      <Title pt={20} pb={20}>
        Projects
      </Title>
      <SimpleGrid cols={3} spacing="xl" verticalSpacing="xl">
        {/* // create an array that we map to return 9 divs */}
        <Fade cascade triggerOnce delay={100}>
          {Array.from({ length: 6 }).map((_, i) => (
            <AchievementCard key={i} />
          ))}
        </Fade>
      </SimpleGrid>
    </Paper>
  );
}
