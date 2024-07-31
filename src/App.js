import logo from './logo.svg';
import './App.css';
import Demo from './FunComp/Demo';
import Greet from './FunComp/Greet';
import Democlass from './ClasComp/Democlass';
import Employee from './Component/Props/Employee';
import Prod from './Component/Props/Prod';
import { StateDemo } from './Component/State/StateDemo';
import { StateCounter } from './Component/State/StateCounter';
import StateCounter1 from './Component/State/StateCounter1';
import DestructDemo from './Component/Destructing/DestructDemo';
import StateDemoFun from './Component/State/StateDemoFun';
import DestructDemoFun from './Component/Destructing/DestructDemoFun';
import StateDemoFun1 from './Component/State/StateDemoFun1';
import EBinding1 from './Component/EventBindings/EBinding1';
import EBinding2 from './Component/EventBindings/EBinding2';

function App() {
  return (
  <div className="App">
     {/*<h1>Hello Anshul</h1>
     <Demo/>
     <Greet/>
     <Democlass/>*/}
     <Prod id="1" name="iphone" price="140000">
     Category:Electronic
     </Prod>
     <hr/>
     <Prod id="1" name="Samsung" price="140000">
      Category:Electronic
      </Prod>
     <hr/>
     <Prod id="1" name="Blackberry" price="140000">
      Category:Electronic
      </Prod>
     <hr/>
     <Employee id="5650" name="Anshul"/>
     <hr/>
     <Employee id="5651" name="Rahul"/>
     <hr/>
     <StateDemo/>
     <hr/>
     <StateCounter/>
     <hr/>
     <StateCounter1/>
     <hr/>
     <DestructDemo id='21' Fname='Anshul Sharma' city='Guna'/>
     <hr/>
     <DestructDemoFun id="1" name="Samsung" price="140000"/>
     <hr/> 
     <StateDemoFun/>
     <hr/>
     <StateDemoFun1/>
     <hr/>
     <EBinding1/>
     <hr/>
     <EBinding2/>
  </div>
  );
}
export default App;
