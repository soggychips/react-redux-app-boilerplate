import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const action = { type: "LOGIN", uid: "testuid" };
  const state = authReducer({}, action);
  expect(state.uid).toBe("testuid");
});

test("should clear uid for logout", () => {
  const action = { type: "LOGOUT" };
  const state = authReducer({ uid: "whatever" }, action);
  expect(state.uid).toBe(undefined);
});
