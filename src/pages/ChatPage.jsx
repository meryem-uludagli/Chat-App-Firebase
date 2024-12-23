import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Main from "../components/Main";

const ChatPage = ({ room, setRoom }) => {
  const [text, setText] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const messagesCol = collection(db, "messages");

    await addDoc(messagesCol, {
      text,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };
  return (
    <div className="chat-room">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Different Room</button>
      </header>

      <Main room={room} />

      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          placeholder="Write your message."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
