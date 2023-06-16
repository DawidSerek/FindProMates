import { Route, Routes } from "react-router-dom";
import "@fontsource/inter";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"1fr 6fr calc(5vh)"}
      gridTemplateColumns={"150px 1fr"}
      h="calc(100vh)"
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"nav"}>
        <Sidebar />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* rest of applicatin */}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
