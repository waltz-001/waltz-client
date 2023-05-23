import { createContext } from "react";

const AlertContext = createContext({
  alert: {
    isShow: false,
    message: null,
  },
});

export default AlertContext;
