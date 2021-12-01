import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './compoment/Test'
import Example from './compoment/Example'
import Code from './compoment/Code'
import ButtonClick from './compoment/ButtonClick'
import Login from './compoment/Login'
import Counter from './compoment/Counter'
import TypeWrite from './compoment/TypeWrite'
import ButtonCustom from './compoment/ButtonCustom'
function App() {

  const person =[
    {
      first :'linh',
      last : 'nguyen'
    },
    {
      first :'manh',
      last : 'duc'
    },
    {
      first :'ngoc',
      last : 'mi'
    }
  ]

  const handleButton =(event:string,i:string)=>{

  }
  return (
    <div className="App">
      <Counter></Counter>
      <ButtonCustom>
      haha
      </ButtonCustom>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       
          {/* <Test name={person}>hahahah</Test> */}
        <Code name='linh'></Code>
          <Example>
           <Test name={person}>hahahah</Test> 
          </Example>
          <ButtonClick 
          
          styles={{color:'red'}}
          clickk ={(event,i)=>{
            console.log(event,i);
            
          }}
            value='123'
            changee={(event)=>{
              console.log('kq:',event.target.value);
              
            }}
          ></ButtonClick>
        <Login></Login>
        <TypeWrite position={'right-center'}></TypeWrite>
      </header>
    </div>
  );
}

export default App;
