import React from "react";
import { Loader } from "semantic-ui-react";
import { useChatContext } from "../../contexts/ChatProvider";
import Chatlist from "./Chatlist";
import CreateAccountModal from "./CreateAccountModal";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  const { myChats } = useChatContext();

  return (
    <div className="left-rail">
      {myChats ? (
        <>
          <SidebarHeader />
          <Chatlist />
          <CreateAccountModal />
        </>
      ) : (
        <div className="chats-loading">
          <Loader active size="huge" />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
