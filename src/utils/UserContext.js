import { createContext } from "react";

const UserContext = createContext({
  user: {
    token: "",
    isAlumni: false,
    events: null,
    gallery: null,
  },
});

export default UserContext;
