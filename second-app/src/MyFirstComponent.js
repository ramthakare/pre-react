import FirstChild1 from "./FirstChild1";
import SecondChild2 from "./SecondChild2";
import ThirdChild3 from "./ThirdChild3";

function MyFirstComponent(props){
  const{Children}=props;
  
  return(
  <>   
  <h2> Hello My First Component called from </h2>
  {Children}
  <FirstChild1 ParentComponentName={"MyFirstComponent"}/>
  
  <SecondChild2 ParentComponentName={"MyFirstComponent"}/>
  
  <ThirdChild3 ParentComponentName={"MyFirstComponent"}/>
  </>
  );
};
export default MyFirstComponent;