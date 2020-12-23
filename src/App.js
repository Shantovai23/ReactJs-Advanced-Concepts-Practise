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
import MemoA from './Components/MemoA'
import Portals from './Components/Portals'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'
import User from './Components/User'
import ClickCounter2 from './Components/ClickCounter2'
import HoverCounter2 from './Components/HoverCounter2'
import ComOne from './Components/ComOne'
import {UserProvider} from './Components/UserContext'
import Posts from './Components/Posts'
import PostForm from './Components/PostForm'
import HookCounter from './Components/HookCounter'
import ObjectWithHook from './Components/ObjectWithHook'
import ArrayWithHook from './Components/ArrayWithHook'
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
     {/* <PureCom/> */}
     {/* <MemoA/> */}
     {/* <Portals/> */}
     {/* <ClickCounter name='Hasibul'/>
     <HoverCounter name ='Hasan'/> */}
     {/* <User render={(value,handle)=>(<ClickCounter2 value={value} handle={handle}/>)}/>
     <User render={(value,handle)=>(<HoverCounter2 value={value} handle={handle}/>)}/> */}
     {/* <UserProvider value='Shanto'><ComOne /></UserProvider> */}
     {/* <Posts/> */}
     {/* <PostForm/> */}
     {/* <HookCounter/> */}
     {/* <ObjectWithHook/> */}
     <ArrayWithHook/>
    </div>
  );
}

export default App;
