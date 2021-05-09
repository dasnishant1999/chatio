import React, { useRef, useState } from "react";
import { getOrCreateChat } from "react-chat-engine";
import { Button, Modal } from "semantic-ui-react";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthProvider";
import { useChatContext } from "../../contexts/ChatProvider";

function CreateAccountModal() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const { chatConfig, setmyChats, myChats, selectChat } = useChatContext();

  const emailRef = useRef();
  const createAccount = async () => {
    try {
      const emailContact = emailRef.current.value;

      if (emailContact === currentUser.email) {
        return setError("You cannot add yourself");
      }

      const chatUserData = await db
        .collection("chatUsers")
        .where("email", "==", emailContact)
        .get();
      const contactuserName = chatUserData.docs[0].data().userName;
      // console.log(chatUserData.docs[0].data(), contactuserName);

      const authObject = {
        projectID: "32ddddc3-a03c-46ab-97bb-9d1fd0edbd27",
        userName: chatConfig.userName,
        userSecret: currentUser.uid,
      };
      const chat = { usernames: [contactuserName] };

      getOrCreateChat(authObject, chat, (chat) => {
        setmyChats([...myChats, chat]);
        selectChat(chat);
      });

      setOpen(false);
    } catch (error) {
      console.log(error);
      setError("There is no such user");
    }
  };

  return (
    <div>
      <Modal
        onClose={() => {
          setError("");
          setOpen(false);
        }}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<button className="create-chat-button">Add Contact</button>}
      >
        <Modal.Header>Add Contact</Modal.Header>
        <Modal.Content>
          <div className="chat-controls">
            <input
              type="text"
              ref={emailRef}
              className="chat-input"
              placeholder="Enter email of user you want to chat with"
            />
          </div>
          {error && <p style={{color:'red'}} >{error}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Cancel"
            onClick={() => {
              setError("");
              setOpen(false);
            }}
          />
          <Button
            content="Add"
            labelPosition="right"
            icon="checkmark"
            onClick={createAccount}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default CreateAccountModal;
