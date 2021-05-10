import React, { useEffect } from "react";
import { ChatEngineWrapper, getChats, Socket } from "react-chat-engine";
import { useChatContext } from "../../contexts/ChatProvider";
import Conversation from "../Conversation/Conversation";
import Sidebar from "../Sidebar/Sidebar";

function Dashboard() {
  const {
    myChats,
    setmyChats,
    chatConfig,
    selectedChat,
    setselectedChat,
  } = useChatContext();

  useEffect(() => {
    return () => {};
  }, [chatConfig]);

  return (
    <>
      <Sidebar></Sidebar>
      {chatConfig && (
        <ChatEngineWrapper>
          <Socket
            projectID={chatConfig.projectID}
            userName={chatConfig.userName}
            userSecret={chatConfig.userSecret}
            onConnect={() => {
              getChats(chatConfig, (chats) => setmyChats(chats));
            }}
            onNewMessage={(chatId, message) => {
              if (selectedChat && chatId === selectedChat.id) {
                setselectedChat({
                  ...selectedChat,
                  messages: [...selectedChat.messages, message],
                });

                const chatThatMessageBelongsTo = myChats.find(
                  (c) => c.id === chatId
                );
                const filteredChats = myChats.filter((c) => c.id !== chatId);
                const updatedChat = {
                  ...chatThatMessageBelongsTo,
                  last_message: message,
                };
                setmyChats([updatedChat, ...filteredChats]);
              }
            }}
          />
        </ChatEngineWrapper>
      )}

      <div className="chat-container">
        <div className="current-chat">
          {selectedChat ? (
            <Conversation />
          ) : (
            <div className="no-chat-selected">
              <img
                src="/images/selectChat.svg"
                alt="selectChat"
                className="point-left"
              />
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}

export default Dashboard;
