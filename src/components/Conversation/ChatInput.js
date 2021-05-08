import React, { useState } from "react";
import { sendMessage } from "react-chat-engine";
import { Icon } from "semantic-ui-react";
import { useChatContext } from "../../contexts/ChatProvider";

function ChatInput() {
  const { chatConfig, selectedChat } = useChatContext();
  const [chatInputText, setchatInputText] = useState("");

  const sendChatMessage = () => {
    if (selectedChat && chatInputText.trim()) {
      setchatInputText("");
      sendMessage(chatConfig, selectedChat.id, {
        text: chatInputText,
        files: [],
      });
    }
  };

  return (
    <div className="chat-controls">
      <input
        type="text"
        value={chatInputText}
        className="chat-input"
        placeholder="Enter message"
        onChange={(e) => setchatInputText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendChatMessage();
          }
        }}
      />
      <div className="send-message-icon" onClick={sendChatMessage}>
        <Icon name="send" color="grey"></Icon>
      </div>
    </div>
  );
}

export default ChatInput;
