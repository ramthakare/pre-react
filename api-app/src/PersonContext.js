
import React from "react";

//create a new contexrt
const personContext = React.createContext();

//Provider
 const PersonProvider = personContext.Provider;

 //consumer

const PersoConsumer = personContext.Consumer;

//expose object                                 
export { PersonProvider, PersoConsumer};