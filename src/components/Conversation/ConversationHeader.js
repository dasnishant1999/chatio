import React from "react";
import { useChatContext } from "../../contexts/ChatProvider";
import { notMe } from "../../helpers";

function ConversationHeader() {
    const {selectedChat,chatConfig}= useChatContext();
  return (
    <div className="chat-toolbar">
      <div className="chat-header-text">{notMe( chatConfig,selectedChat)}</div>
    </div>
  );
}

export default ConversationHeader;
