import { useState } from "react";
import { auth } from "../firebase";

const ChatPage = ({ room, setRoom }) => {
  const [text, setText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;
    alert("Sent");
  };
  return (
    <div className="chat-room">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Different Room</button>
      </header>

      <main>
        <div className="warn">
          <p>Send the first message to the chat!</p>
        </div>
      </main>

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
