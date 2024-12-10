import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import ClickCounterComp from './components/ClickCounterComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import CssComp from './components/CssComp';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import EventComp from './components/EventComp';
import FuncComp from './components/FuncComp';
import HoverCounterComp from './components/HoverCounterComp';
import MyImagesComp from './components/MyImagesComp';
import MyStateComp from './components/MyStateComp';
import UserComp from './components/UserComp';
import VirtualDOM from './components/VirtualDOM';
import CountComp from './task/CountComp';
import DhanushComp from './task/DhanushComp';
import EmpDetails from './task/EmpDetails';
import MultipleImgComp from './task/MultipleImgComp';
import ParentComp from './task/ParentComp';
import ToggleImageComp from './task/ToggleImageComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      {/* <h1>Welcome to React Count Project</h1> */}
      {/* <FuncComp fname="dhanush" post="Fullstack developer" />  */}
       {/* <ClassComp lname="rahul" lpost="Java developer" />  */}
       {/* <DhanushComp fname="Dhanush" lname="V R" sal={10000} gender="male" address="perambalur"/>  */}
       {/* <EventComp />  */}
       {/* <MyStateComp />  */}
       {/* <ConditionalRenComp />  */}
       {/* <CssComp /> */}
      {/* <CountComp /> */}
      {/* <ParentComp gender="male" contact="4444444"/> */}
      {/* <ClickCounterComp /> */}
      {/* <HoverCounterComp /> */}
      {/* <MyImagesComp /> */}
      {/* <UserComp ename="Muruga" role="Avenger" /> */}
      {/* <ErrorBoundaryComp>
        <UserComp user="muruga" />
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <UserComp user="thor" />
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <UserComp user="Arun" />
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <UserComp user="dhanush" />
      </ErrorBoundaryComp> */}
      {/* <VirtualDOM /> */}
      {/* <EmpDetails /> */}
      {/* <MultipleImgComp /> */}
      {/* <ToggleImageComp /> */}
    </div>

  );
}
export default App;
