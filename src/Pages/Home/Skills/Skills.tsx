import { Grid, Paper, SimpleGrid, Title } from "@mantine/core";
import { data } from "./data";
import { JackInTheBox } from "react-awesome-reveal";

export function Skills() {
  return (
    <Paper id="skills">
      <Title pt={20} pb={20}>
        Skills
      </Title>
      <SimpleGrid cols={5} spacing="xl" verticalSpacing="xl">
        <JackInTheBox
          cascade
          triggerOnce
          delay={100}
          duration={1000}
          damping={0.1}
        >
          {data.map((d) => (
            <Grid justify="center" key={d}>
              {d}
            </Grid>
          ))}
        </JackInTheBox>
      </SimpleGrid>
    </Paper>
  );
}
