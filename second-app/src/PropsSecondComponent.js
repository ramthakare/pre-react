function PropsSecondComponent(props)
{
    const{name, age }=props;
console.log(name);
    console.log(age);
    return(
    <>   
    <h2> Hello I AM {name},I am{age} years old and   I MY FIRST MyPropsComponentComponent</h2>
    </>
  );
};
export default PropsSecondComponent;