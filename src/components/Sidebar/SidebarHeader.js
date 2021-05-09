import React from "react";
import { IconGroup } from "semantic-ui-react";
import { useAuth } from "../../contexts/AuthProvider";
import { useChatContext } from "../../contexts/ChatProvider";

function SidebarHeader() {
  const { logout } = useAuth();
  const { chatConfig } = useChatContext();

  return (
    <div className="left-rail-header">
      <div className="current-username">@{chatConfig.userName}</div>
      <button
        style={{ marginLeft: "auto", color: "white", backgroundColor: "red" }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default SidebarHeader;
