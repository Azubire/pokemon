import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/root";

// render the app passing in the root router
const App = () => <RouterProvider router={routes} />;

export default App;
