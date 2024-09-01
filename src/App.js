import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register/> },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
