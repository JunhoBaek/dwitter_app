let users = [
  {
    id: 0,
    username: "bob",
    ///abc123 salt 10
    password: "$2b$10$bMw..hP.BNgM24xWnuPAx.adEkYTvWM/F/Rxkr5SwOM2A82hMxzfe",
    email: "bob@naver.com",
  },
];

const priv = "51D!sGnC#2K9zYz4TFh5COrFIofL4VLs";

export async function getUser(username) {
  return users.find((user) => user.username === username);
}

export async function create(username, password, email) {
  const userData = {
    id: new Date().getTime(),
    username,
    password,
    email,
  };
  users = [userData, ...users];
}

export async function getKey() {
  return priv;
}
