const redux=require("redux");

//console.log(redux);


//create base state object

const initialState= {
    counter:0,
};


//create a new reducer


 const reducer=(state=initialState,action) =>{
    const {value,type}=action;;
    // switch(action.type)
    switch(type)
    {
     case "increment" :
    {
        return{
            counter:state.counter+value,
        };
        
    }
    case "decrement" :
    {
        return{
            counter:state.counter-value,
        };
        
    }
    case  "Multiplication" :
    {
        return{
            counter:state.counter*value,
        };
        
    }
    case  "division" :
    {
        return{
            counter:state.counter/value,
        };
    }

    default :
    {
        return state;
    }
};
}

//Create a new Store


const store=redux.createStore(reducer);


console.log(store);


//subscription handler


const storeSubscriber =() =>{
    const currentState=store.getState();
    console.log(currentState);
};


//subsribe to store
store.subscribe(storeSubscriber);



//Dispatch



store.dispatch({type :"increment", value:5
});
store.dispatch({type :"increment", value:1
});

store.dispatch({type :"decrement",value :1
 });

store.dispatch({type :"Multiplication", value:2
});

store.dispatch({type :"division", value:2
});