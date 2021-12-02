import React from "react";



//create a new contexrt
const userContext = React.createContext();

//Provider
 const UserProvider = userContext.Provider;

 //consumer

const UserConsumer = userContext.Consumer;

//expose object                                 
export { UserProvider, UserConsumer};

