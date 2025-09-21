// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Chatbot from "./Chatbot.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/chatbot", element: <Chatbot /> }
]);

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}
