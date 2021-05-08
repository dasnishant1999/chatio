import React from "react";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

function Conversation() {
  return (
    <div className="chat">
      <MessageList />
      <ChatInput />
    </div>
  );
}

export default Conversation;
