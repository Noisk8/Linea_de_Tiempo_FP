import { useState } from "react";


const Contador = () => {

const [contador, setContador] = useState(0);

const sumar = () => {
  setContador(contador + 1);
}

  const restar = () => {    
    setContador(contador - 1);
  } 


return (
 
<div className="flex flex-col items-center justify-center  bg-gray-100 m-2 p-8">
    <h1 className="text-4xl font-bold mb-4">Contador</h1>
    <h2 className="text-2xl mb-4">{contador}</h2>
    <div className="space-x-4">
        <button onClick={sumar} className="px-4 py-2 rounded-xl border bg-blue-500 text-white hover:bg-blue-700 transition duration-300">Sumar</button>
        <button onClick={restar} className="px-4 py-2 rounded-xl border bg-red-500 text-white hover:bg-red-700 transition duration-300">Restar</button>
    </div>
</div>
);  

}
export default Contador;