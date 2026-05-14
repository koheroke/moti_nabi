

const testDB: { [key: string]: string } = {};
export const DBdriver = {
  saveSecretToDB: (userId: string, secretBase32: string) => {
    testDB[userId] = secretBase32;
  },
  getSecretToDB: (userId: string) => {
    return testDB[userId]
  }
}