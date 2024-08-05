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
import Ebinding3 from './Component/EventBindings/Ebinding3';
import EBinding4 from './Component/EventBindings/EBinding4';
import ParentComp from './Component/PassingMethodAsProps/ParentComp';
import CRender1 from './Component/ConditionalRendring/CRender1';
import CRender2 from './Component/ConditionalRendring/CRender2';
import CRender3 from './Component/ConditionalRendring/CRender3';
import CRender4 from './Component/ConditionalRendring/CRender4';
import Array1 from './Component/ArrayMapMethod/Array1';
import Array2 from './Component/ArrayMapMethod/Array2';
import Array3 from './Component/ArrayMapMethod/Array3';
import CSSDemo1 from './Component/CSS/CSSDemo1';
import CSSDemo2 from './Component/CSS/CSSDemo2';
import CSSDemo3 from './Component/CSS/CSSDemo3';
import Form1 from './Component/FormHandling/Form1';
import Form2 from './Component/FormHandling/Form2';
import Table from './Component/Fragment/Table';
import PotalDemo from './Component/Portal/PotalDemo';
import PHeader from './Component/Portal/PHeader';
import Pfooter from './Component/Portal/Pfooter';
import Pbody from './Component/Portal/Pbody';
import ComponentA from './Component/LifeCycleHooks/ComponentA';
import RegularComp from './Component/PureComponent/RegularComp';
import SamplePureComp from './Component/PureComponent/SamplePureComp';
import Parent1 from './Component/MemoComponent/Parent1';
import RefDemo from './Component/Refs/RefDemo';
import ProductComponent from './Component/ErrorHandling/ProductComponent';
import ErrorHandler from './Component/ErrorHandling/ErrorHandler';

function App() {
  return (
  <div className="App">
     {/*<h1>Hello Anshul</h1>
     <Demo/>
     <Greet/>
     <Democlass/>
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
     <hr/>
     <Ebinding3/>
     <hr/>
     <EBinding4/>
     <hr/>
     <ParentComp/>
     <hr/>
     <CRender1/>
     <hr/>
     <CRender2/>
     <hr/>
     <CRender3/>
     <hr/>
     <CRender4/>
     <hr/>
     <Array1/>
     <hr/>
     <Array2/>
     <hr/>
     <Array3/>
     <hr/>
     <CSSDemo1/>
     <hr/>
     <CSSDemo2/>
     <hr/>
     <CSSDemo3/>
     <hr/> 
     <Form1/>
     <hr/> 
     <Form2/> 
     <Table/>
     <PotalDemo/>
     <PHeader/>
     <Pbody/>
     <Pfooter/>  
     <ComponentA /> 
     <RegularComp />
     <hr/>
     <SamplePureComp/> 
     <Parent1 /> 
     <RefDemo /> */}
     <ErrorHandler>
     <ProductComponent ProductName="Iphone" Category="Electronic"/>
     </ErrorHandler>

     <ErrorHandler>
     <ProductComponent ProductName="Nexon" Category="AutoMobile"/>
     </ErrorHandler>
  </div>
  );
}
export default App;
