import React from "react";
import { Loader } from "semantic-ui-react";
import { useChatContext } from "../../contexts/ChatProvider";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";

function MessageList() {
  const { selectedChat, chatConfig } = useChatContext();

  useScrollToBottom(selectedChat, "chat-messages");

  return (
    <div className="chat-messages">
      {selectedChat.messages ? (
        selectedChat.messages.length ? (
          selectedChat.messages.map((m, index) => {
            const sender = m.sender.username;
            const myUsername = chatConfig.userName;
            let classname = sender === myUsername ? "sent" : "recieve";
            return (
              <div key={index} className="chat-message">
                <div className={classname}>
                  <div className={`message   ${classname}-color `}>
                    <p>{m.text}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-messages-yet">No messages yet</div>
        )
      ) : (
        <Loader active size="large" />
      )}
    </div>
  );
}

export default MessageList;
