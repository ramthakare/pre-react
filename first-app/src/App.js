import './App.css';
// import ConditionalComponet from './ConditionalComponent';
// import FalseComponet from './FalseComponet';
 import ListComponent from './ListComponent';
// import MyFirstComponent from './MyFirstComponent';
// import MySecondComponent from './MySecondComponent';
// import SmParentComponent from '../../second-app/src/SmParentComponet';
// import ParentComponent from './ParentComponent';
// import TrueComponent from './TrueComponent';

function App() 
{
  // const name ="Ram";
  return (
  <div>

 <h1>
   From App

 </h1>
 {/* {name==="Ram" ? <TrueComponent /> : <FalseComponet/>}
 { name==="Rama                      " && <TrueComponent />} */}
{/* < ConditionalComponet /> */}
<ListComponent />
  </div>

 
  );
}

export default App;
