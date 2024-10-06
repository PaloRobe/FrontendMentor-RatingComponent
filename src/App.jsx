import { useRef, useState } from "react"
import Rating from "./components/Rating"
import Result from "./components/Result";

const App = () => {

  const [value,setValue]=useState();
  const [submit,setIsSubmit]=useState(false)
  
  function valueButtonHandler(value) {
    setValue(value);
  }

  function submitHandler() {
    setIsSubmit(!!value)
  }

  return (
    <>
    <main className="mx-6 max-w-[390px]">
    {!submit && <Rating  onValueButton={valueButtonHandler} submitValue={submitHandler} selectedValue={value}/>}
    {submit && <Result result={value}/>}
    </main>
     <div className="text-white text-sm text-center mt-2">
     Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-orange-700">Frontend Mentor </a>. 
     Coded by <a href="https://github.com/PaloRobe/" className="text-orange-700">PaloRobe</a>.
   </div>
   </>
  )
}

export default App