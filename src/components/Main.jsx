import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";

const Main = ({ room }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesCol = collection(db, "messages");
    const unsub = onSnapshot(messagesCol, (data) => {
      const temp = [];
      data.docs.forEach((doc) => temp.push(doc.data()));

      setMessages(temp);
    });

    return () => unsub();
  }, []);
  return (
    <main>
      {messages.length < 1 ? (
        <div className="warn">
          <p>Send the first message to the chat!</p>
        </div>
      ) : (
        messages.map((i) => <Message key={i.id} />)
      )}
    </main>
  );
};

export default Main;
