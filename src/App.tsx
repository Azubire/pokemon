import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/root";
import ThemeProvider from "./components/ThemeProvider";
import { useAppSelector } from "./hooks/redux.ts";
// render the app passing in the root router
const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
