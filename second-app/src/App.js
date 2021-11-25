//import logo from './logo.svg';
//import './App.css';
//import MyFirstComponent from './MyFirstComponent';
// import MySecondComponent from './MySecondComponent';

// import MyFirst from "./MyFirst";
// import MyFirstComponent from "./MyFirstComponent";
// import PropsComponent from "./PropsComponent";
// import PropsSecondComponent from "./PropsSecondComponent";


//  import MyThirdComponent from "./MyThirdComponent";
//  import MyForthComponent from "./MyForthComponent";


//import PropsValidate from "./PropsValidate";
//import MyFirstClassComponent from "./MyFirstClassComponent";
//import MySecondClassComponent from "./MySecondClassComponent";
//import ParentComponent from "./ParentComponent";
//import MySecondComponent from "../../first-app/src/MySecondComponent";
import FromComponent from "./FromComponent";
import PersonComponent from "./PersonComopnet";
import SmParentComponent from "./SmParentComponet";
function App() 
{
   const name="Ram";
    {/*const name1="krushna";*/}
   return (
      <div>
      {/* <MySecondClassComponent  name={"Krushna"} age={23} accountNumber={"HDFS"}/> 
     <MySecondClassComponent  name={"Ram"} age={24} accountNumber={"SBI"}/> */}
     {/* <SmParentComponent /> */}
     {/* <FromComponent /> */}
     <PersonComponent />

         {/* <PropsValidate name={"Ram"} age={23} renderable={"Some String" }
         rollNumber={"10"}
         remark={"some Remark"}
         myArr={[1,2,3,4,5]}
         myObject={{name:"Ram",age:29,}}>
           
            <h2>
               Hello All
            </h2> */}
         {/* </PropsValidate> */}
   {/* //    <h1>Hello {name && name.length ? name: "word"}</h1>
     
   //  <div>
   //     <MyFirstComponent parentComponentName={"App"}/>
   //  </div>
   //  <div>
   //     <MySecondComponent parentComponentName={"App"}/>
   //  <div></div>
   //  <div>
   //     <MyThirdComponent name={name} age={29} parentComponentName={"App"}/>
   //     <h2>Child of Third Component</h2>
   //  </div>
    
   //     <MyForthComponent name={name} age={23} parentComponentName={"App"}/>
   //  </div> */}
   


{/*<h2>Hii {name1 && name1.length ? name: "word"}</h2>*/}
    { /*<MyFirstComponent  name={name} age={25}/>
   //   <MySecondComponent />*/}
         {/*<PropsComponent name={name} age={25} ParentComponent="App">
   //           <h2>Some data pass from App Component</h2>
   // </PropsComponent>*/}
         { /* <PropsSecondComponent name={name1} age={29}/>*/}

      
       {/* <header className="App-header">
//       //   <img src={logo} className="App-logo" alt="logo" />
//       //   <p>
//       //     Edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       //   <a
//       //     className="App-link"
//       //     href="https://reactjs.org"
//       //     target="_blank"
//       //     rel="noopener noreferrer"
//       //   >
//       //     Learn React
//       //   </a>
// // </header> */}
    </div>
   );
};

export default App;
