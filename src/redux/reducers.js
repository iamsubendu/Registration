import {
  REGISTER_USER,
  LOGIN_USER,
  APPROVE_ORG,
  LOGOUT_USER,
  CREATE_EMPLOYEE,
} from "./actions";

const storedUsers = JSON.parse(localStorage.getItem("users")) || [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin",
    role: "admin",
    approved: true,
  },
];

const initialState = {
  users: storedUsers,
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      const newUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(newUsers));
      return { ...state, users: newUsers };
    case LOGIN_USER:
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user && user.approved) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        return { ...state, loggedInUser: user };
      } else {
        return { ...state, loggedInUser: null };
      }
    case LOGOUT_USER:
      localStorage.removeItem("loggedInUser");
      return { ...state, loggedInUser: null };
    case APPROVE_ORG:
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload ? { ...user, approved: true } : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return { ...state, users: updatedUsers };
    case CREATE_EMPLOYEE:
      const updatedUsersWithEmployee = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsersWithEmployee));
      return { ...state, users: updatedUsersWithEmployee };
    default:
      return state;
  }
}
