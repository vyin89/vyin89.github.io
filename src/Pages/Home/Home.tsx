import { AppShell, Container, rem } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutMe from "./AboutMe";
import { Achievements } from "./Achievements/Achievements";
import Experience from "./Experience";
import Skills from "./Skills";

export function Home() {
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <AppShell
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
      header={{ height: 60, collapsed: !pinned, offset: false }}
      footer={{ height: 44, collapsed: pinned }}
    >
      <Container>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main pt={`calc(${rem(40)} + var(--mantine-spacing-md))`}>
          <Fade cascade triggerOnce delay={150}>
            <AboutMe />
            <Experience />
            <Achievements />
            <Skills />
          </Fade>
        </AppShell.Main>
        <AppShell.Footer withBorder={false} bg="transparent">
          <Footer />
        </AppShell.Footer>
      </Container>
    </AppShell>
  );
}
