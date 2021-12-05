import {createStore} from "redux";

const initialState={
   personList:[],
   couresList :[],
}


const reducer=(state=initialState,action) =>
{
  const {type,payload}=action;
  switch(type)
  {
      case "PERSON_ADD":
          console.log(payload);
          const personListCopy=[...state.personList];
          personListCopy.push(payload);
          return{
              ...state,
              personList:personListCopy,
          };
          
          case "PERSON_DELETE":
            console.log(payload);
             const personListCopyDel=[...state.personList];
             personListCopyDel.splice(payload,1);
            alert("Deleted");
            // const newState ={
                return{
                    ...state,
                    personList:personListCopyDel,
                }
            //     personList:personListCopy,
         
            case "FROM_ADD":
                console.log(payload);
                const coureListCopy=[...state.couresList];
                coureListCopy.push(payload);
                return{
                    ...state,
                    couresList:coureListCopy,
                };

                case "FROM_DELETE":
                    console.log(payload);
                    const couresListCopyDel=[...state.couresList];
                    couresListCopyDel.splice(payload,1);
                    alert("Deleted");
                    return{
                        ...state,
                    couresList :couresListCopyDel,

                    }
          default:
              return state;
  }
};




const Store=createStore(reducer);


export default Store;
