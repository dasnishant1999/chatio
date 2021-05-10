import React, { createContext, useContext, useEffect, useState } from "react";
import { newChat, getMessages } from "react-chat-engine";
import { db } from "../config/firebase";
import { useAuth } from "./AuthProvider";

const ChatContext = createContext();

export function useChatContext() {
  return useContext(ChatContext);
}

function ChatProvider({ children }) {
  const [myChats, setmyChats] = useState();
  const [chatConfig, setchatConfig] = useState();
  const [selectedChat, setselectedChat] = useState();

  const { currentUser } = useAuth();

  useEffect(() => {
    db.collection("chatUsers")
      .doc(currentUser.uid)
      .onSnapshot((snap) => {
        setchatConfig({
          projectID: "32ddddc3-a03c-46ab-97bb-9d1fd0edbd27",
          userName: snap.data().userName,
          userSecret: currentUser.uid,
        });
      });
    return () => {};
  }, [currentUser.uid, selectedChat]);

  const createNewChat = () => {
    const chatObject = { title: "Chat Title" };
    const callback = (data) => console.log(data);
    newChat(chatConfig, chatObject, callback);
  };

  const selectChat = (chat) => {
    console.log(chat);
    setselectedChat({ ...chat, messages: null });
    const callback = (chatID, messages) => {
      setselectedChat({ ...chat, messages: messages });
    };
    getMessages(chatConfig, chat.id, callback);
  };

  const value = {
    myChats,
    setmyChats,
    chatConfig,
    setchatConfig,
    selectedChat,
    setselectedChat,
    createNewChat,
    selectChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export default ChatProvider;
