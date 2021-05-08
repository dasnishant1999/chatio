import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useChatContext } from "../../contexts/ChatProvider";
import Chatlist from "../Chatlist/Chatlist";
import CreateAccountModal from "./CreateAccountModal";

function Sidebar() {
  const { myChats } = useChatContext();

  useEffect(() => {
    console.log(myChats);
    return () => {};
  }, [myChats]);

  return (
    <div className="left-rail">
      {myChats ? (
        <>
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
