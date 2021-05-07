import axios from "axios";

const createUser = async (req, res) => {
  const { userId, userName } = req.body;

  axios
    .post(
      "  https://api.chatengine.io/users/",
      // "https://api.chatengine.io/projects/people"
      {
        username: userName,
        secret: userId,
      },
      { headers: { "Private-Key": "56be0faa-8576-46fd-9d7f-7bb5571d1b3b" } }
    )
    .then((apiRes) => {
      res.json({
        body: apiRes.body,
        error: null,
      });
    })
    .catch(() => {
      res.json({
        body: null,
        error: "Error in creating user",
      });
    });
};

export default createUser;
