import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const RoomPage = ({ setRoom }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const room = e.target[0].value.toLowerCase();
    setRoom(room);
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>
      <p>Which room would you like to join?</p>
      <input type="text" placeholder="Chat" required />
      <button>Enter a Room</button>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </form>
  );
};

export default RoomPage;
