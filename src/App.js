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
    light: {
      500: "#97bae0",
      400: "#adc8e6",
      300: "#c1d5ed",
      200: "#d6e3f3",
      100: "#e8f1fc", //background color when light theme
      0: "#eff6fe"
    },
    dark: {
        500: "#0c2e51",
        400: "#123457",
        300: "#234568",
        200: "#345679",
        100: "#45678a",
    }
  }
};


const fonts = {
  body: "Inter",
  heading: "Inter",
};
const theme = extendTheme({ config, colors, fonts });


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

// V2
// const colors = {
//   brand.light: {
//     800: "#182825",
//     600: "#6D8EA0",
//     400: "#016FB9",
//     300: "#AFA98D",
//     200: "#22AED1",
//   },
// };

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
