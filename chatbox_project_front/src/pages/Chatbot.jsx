import { useState } from "react";
import { Assistant } from "../assistants/openai";
import { Chat } from "../components/Chat/Chat";
import { Controls } from "../components/Controls/Controls";
import { Loader } from "../components/Loader/loader";
import styles from "../assets/css/App.module.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footers.jsx";

const MESSAGES = [];

function Chatbot() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState(MESSAGES);
  const [loading, setLoading] = useState(false);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setLoading(true);

    try {
      const response = await assistant.chat(content, messages);
      addMessage({ content: response, role: "assistant" });
    } catch (error) {
      console.error("Erreur Gemini :", error);
      addMessage({
        content: "Désolé, je n'ai pas pu traiter votre demande.",
        role: "system",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Header/>
    <div className={styles.App}>
      {loading && <Loader />}

      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" alt="logo" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} disabled={loading} />
    </div>
    <Footer/>
    </>
  );
}

export default Chatbot;
