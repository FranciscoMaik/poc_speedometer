import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSpeedometer,{ Transition } from 'react-d3-speedometer';

function App() {
  const [contage, setContage] = useState([
    {maxValue: 1000, minValue: 0, value: 300, label: 'Sharpe'},
    {maxValue: 400, minValue: 0, value: 300, label: 'Volatilidade'},
    {maxValue: 100, minValue: 0, value: 50, label: 'Previsibilidade'},
  ]);
  return (
    <div className="App">
      <div className='center'>
        {contage.map((item,index) => (
          <ReactSpeedometer 
            key={index}
            minValue={item.minValue}
            maxValue={item.maxValue}
            value={item.value}
            startColor='#ff5252'
            endColor='#52eb7d'
            width={250}
            height={250}
            ringWidth={24}
            maxSegmentLabels={0}
            segments={1000}
            needleHeightRatio={0.6}
            needleColor='#ffffff'
            needleTransition={Transition.easeElasticOut}
            needleTransitionDuration={5000}
            textColor='#ffffff'
            forceRender
            currentValueText={`${item.label}: ${item.value}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
