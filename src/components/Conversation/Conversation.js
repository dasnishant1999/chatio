import React from "react";
import ChatInput from "./ChatInput";
import ConversationHeader from "./ConversationHeader";
import MessageList from "./MessageList";

function Conversation() {
  return (
    <div className="chat">
      <ConversationHeader />
      <MessageList />
      <ChatInput />
    </div>
  );
}

export default Conversation;
