import { createContext } from "react";

const UserContext = createContext({
  user: {
    token: "",
    isAlumni: false,
    events: [],
  },
});

export default UserContext;
