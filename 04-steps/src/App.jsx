import { useState } from "react";

const messages = [
  "Learn React ⚛️", // 0
  "Apply for Job 💼", // 1
  "Invest your new income 🤑" // 2
];

export default function App() {
  const [step, setStep] = useState(1);
  // const step = 1; 
  
  function handlePrevious() {
    if(step > 1) setStep(step - 1);
  };

  function handleNext() {
    if(step < 3) setStep(step + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        {/* Coloquei o ">" pq os anteriores tem que ficar ativos ao passar por eles */}
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <div className="message">Step {step}: {messages[step - 1]}</div>

      <div className="buttons">
        <button 
          style={{ backgroundColor: "#7950F2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button 
          style={{ backgroundColor: "#7950F2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}
