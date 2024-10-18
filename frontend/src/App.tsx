import { useState } from "react"
import Navbar from "./components/Navbar";


function App() {

  const [todos, setTodos] = useState<string[]>([]);

  function handleClick(){
    let value:string = (document.getElementById("input") as HTMLInputElement).value;
    setTodos([...todos,value])
  }

  function handleClickEnter(e : React.KeyboardEvent<HTMLInputElement>){
    if(e.key === 'Enter'){
      handleClick();
    }
  }

  return (
  <div>
    <Navbar/>
    <div className="box-border h-screen w-full flex justify-center items-center flex-col gap-5">
      <div className=" border-gray-100 border-4 px-10 py-20 bg-gray-300 rounded-lg">
        <div className="font-bold text-5xl border text-center mb-8 py-2">Todo</div>
        <input id="input" onKeyDown={handleClickEnter} className="m-3 rounded-full focus:border-2 px-3 py-3 text-xl" type="text" placeholder="Enter Todo"/>
        <div className="flex justify-center items-center">
          <button className="border-2 mx-auto p-3 rounded-full bg-green-400 hover:bg-green-500" onClick={handleClick}>Add todo</button>
        </div>
      </div>
      <div className="grid grid-cols-2">{todos.map(todo => <div className="p-2 border-2 m-2 rounded-full">
        {todo}
        <input className="mx-3 " type="checkbox" />
      </div>)}</div>
    </div>
  </div>
  )
}

export default App
