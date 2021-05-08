export const notMe = (chatConfig, chat) => {
  if (chatConfig.userName === chat.people[0].person.username) {
    return chat.people[1].person.username;
  }

  return chat.people[0].person.username;
};
