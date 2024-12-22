import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user);
    });
  }, []);
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  return (
    <div className="container">
      <RoomPage />
    </div>
  );
};

export default App;
