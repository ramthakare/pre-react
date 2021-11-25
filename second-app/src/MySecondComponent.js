import FirstChild1 from "./FirstChild1";
import SecondChild2 from "./SecondChild2";
import ThirdChild3 from "./ThirdChild3";

function MySecondComponent(props){
  const{ParentComponentName}=props;
  return(
  <>   
  <h2> Hello From MySecondComponent Called from{ParentComponentName}</h2>
  <FirstChild1 ParentComponentName={"MySecondComponent"}/>
  <SecondChild2 ParentComponentName={"MySecondComponent"}/>
  <ThirdChild3 ParentComponentName={"MySecondComponent"}/>
  </>
  );
};
export default MySecondComponent;