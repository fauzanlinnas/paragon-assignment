export type AuthAction = LoginAction | LogoutAction;

export const login = (): AuthAction => ({
  type: "LOGIN",
});

export const logout = (): AuthAction => ({
  type: "LOGOUT",
});

interface LoginAction {
  type: "LOGIN";
}

interface LogoutAction {
  type: "LOGOUT";
}
