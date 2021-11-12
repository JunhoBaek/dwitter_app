///TODO   id 숫자 말고 문자열로 수정!

let idx = 1;
let users = [
  {
    id: 0,
    username: "bob",
    ///abc123 salt 10
    password: "$2b$10$bMw..hP.BNgM24xWnuPAx.adEkYTvWM/F/Rxkr5SwOM2A82hMxzfe",
    email: "bob@naver.com",
  },
];

export async function getUserById(id) {
  const result = users.find((user) => user.id === id);
  return result;
}

export async function getUser(username) {
  const result = users.find((user) => user.username === username);
  return result;
}

export async function create(username, password, email) {
  const userData = {
    id: idx,
    username,
    password,
    email,
  };
  users = [userData, ...users];
  idx++;
  return userData.id;
}
