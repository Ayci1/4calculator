import React, { useState } from 'react';
import './App.css';




function App() {

  const [value, setValue] = useState('0');

  return (
    <div className="container">
      <div className='calculator'>
        <form action="">
          <div className='display' id="display">
            {value}
          </div>
          <div>
            <input type="button" value="AC" id="clear" onClick={e => setValue('0')} />
            
            <input type="button" value="." id="decimal" 
            onClick={() => {
              const lastNumber = value.split(/[\+\-\*\/]/).pop();
              if (!lastNumber.includes('.')) {
                setValue(value === "0" ? "0." : value + ".");
              }
            }}/>
            <input type="button" value="/" id="divide" onClick={e => {
                const op = e.target.value;
                setValue(prev => {
                  if (/[\+\*\/]$/.test(prev)) {
                    return prev.slice(0, -1) + op;
                  }
                  if (/[\+\*\/]-$/.test(prev) && op !== '-') {
                    return prev.slice(0, -2) + op;
                  }
                  return prev + op;
                });
              }} />
          </div>
          <div>
            <input type="button" value="7" id="seven" onClick={e => setValue(prev => (prev === '0' ? '7' : prev + e.target.value))}/>
            <input type="button" value="8" id="eight" onClick={e => setValue(prev => (prev === '0' ? '8' : prev + e.target.value))}/>
            <input type="button" value="9" id="nine" onClick={e => setValue(prev => (prev === '0' ? '9' : prev + e.target.value))}/>
            <input type="button" value="*" id="multiply" onClick={e => {
              const op = e.target.value;
              setValue(prev => {
                if (/[\+\*\/]$/.test(prev)) {
                  return prev.slice(0, -1) + op;
                }
                if (/[\+\*\/]-$/.test(prev) && op !== '-') {
                  return prev.slice(0, -2) + op;
                }
                return prev + op;
              });
            }} />
          </div>
          <div>
            <input type="button" value="4" id="four" onClick={e => setValue(prev => (prev === '0' ? '4' : prev + e.target.value))}/>
            <input type="button" value="5" id="five" onClick={e => setValue(prev => (prev === '0' ? '5' : prev + e.target.value))}/>
            <input type="button" value="6" id="six" onClick={e => setValue(prev => (prev === '0' ? '6' : prev + e.target.value))}/>
            <input type="button" value="+" id="add" onClick={e => {
                const op = e.target.value;
                setValue(prev => {
                  if (/[\+\*\/]$/.test(prev)) {
                    return prev.slice(0, -1) + op;
                  }
                  if (/[\+\*\/]-$/.test(prev) && op !== '-') {
                    return prev.slice(0, -2) + op;
                  }
                  return prev + op;
                });
              }} />
          </div>
          <div>
            <input type="button" value="1" id="one" onClick={e => setValue(prev => (prev === '0' ? '1' : prev + e.target.value))}/>
            <input type="button" value="2" id="two" onClick={e => setValue(prev => (prev === '0' ? '2' : prev + e.target.value))}/>
            <input type="button" value="3" id="three" onClick={e => setValue(prev => (prev === '0' ? '3' : prev + e.target.value))}/>
            <input type="button" value="-" id="subtract" onClick={e => {
                const op = e.target.value;
                setValue(prev => {
                  if (/[\+\*\/]$/.test(prev) && op !== '-') {
                    return prev.slice(0, -1) + op;
                  }
                  return prev + op;
                });
              }}/>
          </div>
          <div>
            <input type="button" value="0" id="zero" onClick={e => setValue(prev => (prev === '0' ? '0' : prev + e.target.value))}/>
            <input type="button" value="=" id="equals" onClick={() => {
              try {
                const result = eval(value);
                setValue(String(result));
              } catch {
                setValue('Error');
              }
                }} />
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default App;
