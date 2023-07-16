import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "@fontsource/inter";
import React from "react";
import RootLayout from "./layouts/RootLayout";
import CreateProject from "./pages/Create";
import MyProjects from "./pages/MyProjects";
import GlobalProjects from "./pages/GlobalProjects";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UsersProvider } from "./context/usersProvider";

const config = {
  initialColorMode: "dark", // 'dark' | 'light'
  useSystemColorMode: false,
};
const colors = {
  brand: {
    800: "#00131a",
    600: "#025291",
    400: "#0283c4",
    200: "#01aaef",
    100: "#C2FBEF", //background color when light theme
  },
};
// V2
// const colors = {
//   brand: {
//     800: "#182825",
//     600: "#6D8EA0",
//     400: "#016FB9",
//     300: "#AFA98D",
//     200: "#22AED1",
//   },
// };

const fonts = {
  body: "Inter",
  heading: "Inter",
};
const theme = extendTheme({ config, colors, fonts });
//   styles: {
//     global: {
//       body: {
//         // color: "white",
//         // fontFamily: ["Inter", "FontAwesome"],
//       },
//     },
//   },
//   colors: {
//     pm: {
//       //definition of pm color palette (pm stands for pro mates (without prefix))
//       dark: "#3D4E8C",
//       bright: "#5D74B7",
//       dblue: "#4C4E9E",
//     },
//   },
// });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/my-projects" element={<MyProjects />} />
      <Route path="/global-projects" element={<GlobalProjects />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <UsersProvider>
        <RouterProvider router={router} />
      </UsersProvider>
    </ChakraProvider>
  );
}

export default App;
