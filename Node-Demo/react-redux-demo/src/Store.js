import {createStore} from "redux"

const initaialState=
{
    counter:0,
}

const reducer=(state =initaialState,action) => {
    const {type}=action;;
    // switch(action.type)
    switch(type)
    {
     case "increment" :
    {
        return{
            counter:state.counter+1,
        };
        
    }
    case "decrement" :
    {
        return{
            counter:state.counter-1,
        };
        
    }
    case  "Multiplication" :
    {
        return{
            counter:state.counter*2,
        };
        
    }
    case  "division" :
    {
        return{
            counter:state.counter/2,
        };
    }

    default :
    {
        return state;
    }
};
}
    



const Store=createStore(reducer);


export default Store;




