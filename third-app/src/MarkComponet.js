import react,{Component} from "react";


export default class MarkComponent extends Component{


    state =
    {
          
           persentage:0,
          result:"Invalid",
         color :"White",
      
          
    };
    onCalculateHandler =(event) =>
    {
        console.log("In Handler");
        this.setState({persentage :event.target.value});
    };

    onClickHandler =()=>
    {
        console.log("Clicke");

        const {result,color}=this.calculateResult(this.state.persentage);
       // this.setState({result:this.calculateResult(this.state.persentage)});
       this.setState({result,color});
    };

   
    calculateResult=(persentage) =>
    {
        //let result="Invalid";

        let resultObject ={
            result:"Invalid",
            color:"White",
        };

        if(persentage>=0 && persentage<35)
        {
            resultObject ={
                result:"Fail",
                color:"red",
            };
        }
        else if(persentage >=35 && persentage<=50)
        {
            resultObject ={
                result:"Just Pass",
                color:"Orange",
            };
        }
        else if(persentage >50 && persentage <=60)
        {
            resultObject ={
                result:"First Class",
                color:"Green",
            };
        }
        else if(persentage >60 && persentage <=70)
        {
            resultObject ={
                result:"Second Class",
                color:"Yellow",
            };
        }
        else if(persentage >70 && persentage <=100)
        {
            resultObject ={
                result:"Destination",
                color:"pink",
            };
        }

        return resultObject;


    };
    render()
    {
        return(

            <>
           <h1>Result Calculate</h1>
           <input 
                value={this.state.persentage} 
                onChange={this.onCalculateHandler} />
        
               <button onClick={this.onClickHandler}>submit</button>
        
               <div style={{backgroundColor:this.state.color}}>
                  Your Result is: {this.state.result}
        </div>
        
       
                
                
            </>
           
        );
    }
    


}