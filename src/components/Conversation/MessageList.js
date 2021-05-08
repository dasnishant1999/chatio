import React, { useEffect } from "react";
import { useChatContext } from "../../contexts/ChatProvider";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";

function MessageList() {
  const { selectedChat } = useChatContext();

  useScrollToBottom(selectedChat, "chat-messages");

  useEffect(() => {
    selectedChat.messages.map((m) => {
      // console.log(m)
    });

    return () => {};
  }, [selectedChat]);

  return (
    <div className="chat-messages">
      {true ? (
        selectedChat.messages.map((m, index) => {
          return (
            <div key={index} className="chat-message">
              <div className="chat-message-header">
                <p>{m.sender.username}</p>
              </div>
              <div className="message-content">
                <div className="message-text">{m.text}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="no-messages-yet">No messages yet</div>
      )}
    </div>
  );
}

export default MessageList;
