import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useChatContext } from "../../contexts/ChatProvider";

function SidebarHeader() {
  const { logout } = useAuth();
  const { chatConfig } = useChatContext();

  return (
    <div className="left-rail-header">
      <div className="current-username">@{chatConfig.userName}</div>
      <button
        className='logout-button'
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default SidebarHeader;
