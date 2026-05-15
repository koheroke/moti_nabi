

const testUser = {
  id: 1,
  name: "azumax",
  email: "kouhei_24s1101798@nnn.ed.jp",
}
const testDB: { [key: string]: string } = {};
export const DBdriver = {
  saveSecretToDB: (userId: string, secretBase32: string) => {
    testDB[userId] = secretBase32;
  },
  getSecretToDB: (userId: string) => {
    return testDB[userId]
  },
  getUserToDB
    : (userId: string) => {
      return testUser
    }
}

