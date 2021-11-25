function MyForthComponent(props){
    console.log(props);
    const{name, age ,children,parentComponentName}=props;
   {/* const{name1}=props;*/}
    console.log(name);
    console.log(age);
    {/*console.log(name1);*/}
    
    return(
    <>  
    <h2>
        I am Inside MyThirdComponent from{parentComponentName}
    </h2>
    <h2> Hello I AM {name},I am{age} years old anf   I MY Inside MyFourthComponent</h2>
    {/*<h2> Hello I AM {name1},I am{age} years old anf   I MY FIRST MyFirstComponent</h2>*/}
    {children}
    </>
  );
};
export default MyForthComponent;