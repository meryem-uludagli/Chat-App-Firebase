import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/index";

const LoginPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Room</h1>
        <p>Log in to continue</p>

        <button onClick={handleClick}>
          <img src="google.png" alt="google logo" width={30} />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
