import { login, logout } from "../../actions/auth";

test("should set up login action", () => {
  const uid = "testuid";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("should set up logout action", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
