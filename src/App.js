import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "@fontsource/inter";
import RootLayout from "./layouts/RootLayout";
import CreateProject from "./pages/Create";
import MyProjects from "./pages/MyProjects";
import GlobalProjects from "./pages/GlobalProjects";
import Profile from "./pages/Profile";
import Dashboard, { projectsLoader } from "./pages/Dashboard";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
        fontFamily: ["Inter", "FontAwesome"],
      },
    },
  },
});
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={projectsLoader} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/my-projects" element={<MyProjects />} />
      <Route path="/global-projects" element={<GlobalProjects />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <UserProvider> */}
        <RouterProvider router={router} />;
      {/* </UserProvider> */}
    </ChakraProvider>
  );
}

export default App;
