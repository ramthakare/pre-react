function MyFirst(props){
    console.log(props);
    const{name, age ,ParentComponentName}=props;
   {/* const{name1}=props;*/}
    console.log(name);
{/*console.log(name1);*/}
    
return(
<>   
<h2> Hello I AM {name},I am{age} years old anf   I MY FIRST MyFirstComponent</h2>
{/*<h2> Hello I AM {name1},I am{age} years old anf   I MY FIRST MyFirstComponent</h2>*/}
{ParentComponentName}
</>
);
};
export default MyFirst;