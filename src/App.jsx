import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ChatPage from "./pages/ChatPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const [room, setRoom] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user);
    });
  }, []);
  if (!isAuth) return <LoginPage />;

  return (
    <div className="container">
      {room ? (
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        <RoomPage setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
