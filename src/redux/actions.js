export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const APPROVE_ORG = "APPROVE_ORG";
export const LOGOUT_USER = "LOGOUT_USER";
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const loginUser = (credentials) => ({
  type: LOGIN_USER,
  payload: credentials,
});

export const approveOrganization = (orgId) => ({
  type: APPROVE_ORG,
  payload: orgId,
});

export const logout = () => ({
  type: LOGOUT_USER,
});

export const createEmployee = (employee) => {
  return {
    type: CREATE_EMPLOYEE,
    payload: employee,
  };
};
