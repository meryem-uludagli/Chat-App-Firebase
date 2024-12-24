import { auth } from "../firebase";
import generateColor from "../utils/generateColor";

const Message = ({ data }) => {
  if (auth.currentUser.uid === data.author.id) {
    return <div className="msg-user">{data.text}</div>;
  }
  return (
    <div className="msg-other">
      <img src={data.author.photo} />
      <div>
        <span>{data.author.name}</span>

        <p
          style={{ background: generateColor(data.author.id) }}
          className="msg-text"
        >
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
