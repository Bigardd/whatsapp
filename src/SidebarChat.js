import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import { useState, useEffect } from "react";
import db from "./firebase";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";

export default function SidebarChat({ id, name, addNewChat, onClick }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      // DO SOME CLEVER SJHIT
      db.collection("rooms").add({
        name: roomName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };
  return !addNewChat ? (
    <Link onClick={onClick} to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add new chat</h2>
    </div>
  );
}
