import Markdown from "react-markdown";
import styles from "./Chat.module.css";

const WELCOME_MESSAGE = {
  role: "assistant",
  content: "Des questions sur nos produits ou nos commandes ? Posez-votre question à notre chatbot !",
};

export function Chat({ messages }) {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div
          className={`${styles.Message} ${styles[role]}`}
          key={index}
          data-role={role}
        >
          <Markdown>{content}</Markdown>
        </div>
      ))}
    </div>
  );
}
