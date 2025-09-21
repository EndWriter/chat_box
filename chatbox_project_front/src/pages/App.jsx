// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Chatbot from "./Chatbot.jsx";
import Login from "./Login.jsx";
import Inscription from "./Inscription.jsx";
import Command from "./Command.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/inscription", element: <Inscription /> },
  { path: "/command", element: <Command /> },
  { path: "/chatbot", element: <Chatbot /> },
  { path: "*", element: <NotFound /> }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
