// App.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footers.jsx";
import Home from "./Home.jsx";
import Chatbot from "./Chatbot.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/chatbot", element: <Chatbot /> }
]);

export default function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
