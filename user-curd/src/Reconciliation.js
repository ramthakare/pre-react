import { useEffect, useState } from "react";

export default () => {
  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("hii");
  //     setValue(value + 1);
  //   }, 2000);
  // });

  // //   return value % 2 ? <h1>In Reconciliation</h1> : <div> n Reconciliation</div>;

  // return (
  //   <h1 style={{ backgroundColor: value % 2 ? "red" : "green" }}>
  //     In Reconciliation
  //   </h1>
  // );

  const [myArr, setMyArr] = useState(["a", "b", "c", "d"]);

  const addElementHandler = () => {
    setMyArr(["e", ...myArr]);
  };

  return (
    <>
      <h1>In Reconciliation</h1>
      <>
        {myArr.map((elemet) => {
          return <div key={elemet}>{elemet}</div>;
        })}
      </>
      <button onClick={addElementHandler}>ADD</button>
    </>
  );
};
