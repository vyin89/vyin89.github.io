import { MantineProvider } from "@mantine/core";
import Home from "./Pages/Home";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Home />
    </MantineProvider>
  );
}

export default App;
