import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello'
import Welcome from './Components/Welcome'
import CarOne from './Components/CarOne'
import CarTwo from './Components/CarTwo'
import ClickOne from './Components/ClickOne'
import ClickTwo from './Components/ClickTwo'
import Show from './Components/Show'
import BindEvent from './Components/BindEvent'
import Parent from './Components/ParentClass'
import Condition from './Components/Condition'
import List from './Components/List'
import './Components/mystyle.css'
import ComA from './Components/ComA.jsx'
import Update from './Components/Update'
import UnmountA from './Components/UnmountA'
import PureCom from './Components/PureCom'

function App() {
  // let clam={
  //   color:'blue'
  // }
  // let flag=false
  return (
    <div className="App">
    {/* <h2 className={flag?'recheck':'check'}>Helllo User</h2> */}
    {/* <h2 style={clam}>Helllo User</h2> */}
     {/* <Hello name='Hasibul'>This is Children text man!</Hello>
     <Hello name="Hasan"/>
     <Hello name="Shanto"/> */}
     {/* <Welcome flag={3}/> */}
     {/* <CarOne name="Hasibul Hasn" program="BSC in CSe"/> */}
     {/* <CarTwo position="CGPA" CGPA="3.50"/> */}
     {/* <ClickOne/>
     <ClickTwo/> */}
     {/* <Show/> */}
     {/* <BindEvent/> */}
     {/* <Parent/> */}
     {/* <Condition/> */}
     {/* <List/> */}
     {/* <ComA/> */}
     {/* <Update/> */}
     {/* <UnmountA/> */}
     <PureCom/>
    </div>
  );
}

export default App;
