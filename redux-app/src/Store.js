import { createStore } from "redux";

const initialState = {
  personList: [],
  couresList: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const personListCopy = [...state.personList];
  switch (type) {
    case "PERSON_ADD":
      const id = payload.id ? payload.id : state.personList.length + 1;
      personListCopy.push({ ...payload, id });

      return {
        personList: personListCopy,
      };

    case "PERSON_UPDATED":
      let objectToBeUpdatedIndex = personListCopy.findIndex(
        (person) => person.id === payload.id
      );
      personListCopy[objectToBeUpdatedIndex] = {
        ...personListCopy[objectToBeUpdatedIndex],
        ...payload,
      };
      return {
        ...state,
        personList: personListCopy,
      };

    case "PERSON_DELETE":
      console.log(payload);
      const personListCopyDel = [...state.personList];
      personListCopyDel.splice(payload, 1);
      alert("Deleted");
      // const newState ={
      return {
        ...state,
        personList: personListCopyDel,
      };

    //     personList:personListCopy,

    // case "FROM_ADD":
    //   console.log(payload);

    //   const id = payload.id ? payload.id : state.personList.length + 1;
    //   const coureListCopy = [...state.couresList];
    //   coureListCopy.push({ ...payload, id });
    //   return {
    //     // ...state,
    //     couresList: coureListCopy,
    //   };

    case "FROM_DELETE":
      console.log(payload);
      const couresListCopyDel = [...state.couresList];
      couresListCopyDel.splice(payload, 1);
      alert("Deleted");
      return {
        ...state,
        couresList: couresListCopyDel,
      };
    default:
      return state;
  }
};

const Store = createStore(reducer);

export default Store;
