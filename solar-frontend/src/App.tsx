import { Grid, GridItem } from "@chakra-ui/layout";
import "./App.css";
import { Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import WeatherGrid from "./components/WeatherGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav">
        <NavigationBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="side">Side</GridItem>
      </Show>
      <GridItem area="main">
        <WeatherGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
