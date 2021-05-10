import React from "react";
import { useChatContext } from "../../contexts/ChatProvider";
import { notMe } from "../../helpers";

function Chatlist() {
  const { myChats, selectedChat, selectChat, chatConfig } = useChatContext();

  return (
    <>
      {myChats.length ? (
        <div className="chat-list-container">
          {myChats.map((chat) => {
            let notMeUserName = notMe(chatConfig, chat);
            return (
              <div
                key={chat.id}
                className={`chat-list-item ${
                  selectedChat?.id === chat.id ? "selected-chat-item" : ""
                } `}
                onClick={() => selectChat(chat)}
              >
                <div className="chat-list-item-content">
                  <p>{notMeUserName}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="chat-list-container no-chats-yet">
          <h3>No Chats Yet</h3>
        </div>
      )}
    </>
  );
}

export default Chatlist;
