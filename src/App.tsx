import { MantineProvider, createTheme } from "@mantine/core";
import Home from "./Pages/Home";

function App() {
  const theme = createTheme({
    primaryColor: "violet",
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Home />
    </MantineProvider>
  );
}

export default App;
