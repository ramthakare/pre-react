import PropTypes from "prop-types";

function PropsValidate(props)
{
  const {name, age}=props;
    return(
        <>
<h2>Name: {name}</h2>
<h2>Age: {age}</h2>       
 <h2>After 5 years my age will be:{age + 5}</h2>
        </>
    );
}

PropsValidate.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired,
    renderable: PropTypes.node,
    rollNumber: PropTypes.oneOfType([PropTypes.string,
        PropTypes.number]),
    remark: PropTypes.any,
    myArr :PropTypes.arrayOf(PropTypes.number),
   // myObject :PropTypes.shape({name:PropTypes.string, age:PropTypes.number})
   myObject :PropTypes.exact({name:PropTypes.string, age:PropTypes.number})
};
export default PropsValidate;