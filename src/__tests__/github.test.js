/* eslint-env jest */
const github = require("../github");

// A simple example test
describe("#getUser() using Promises", () => {
  it("should load user data", async () => {
    return await github.handleUserRequest("choksi215").then((data) => {
      expect(data).toBeDefined();
      expect(data.name).toEqual("Atif Choksi");
    });
  });
});

describe("#getRepo() using Promises", () => {
  it("should load repository data", async () => {
    return await github.handleRepoRequest("zefiroProject").then((data) => {
      expect(data).toBeDefined();
      expect(data.items[0].name).toEqual("zefiroProject");
    });
  });
});
