import Tarjeta from "../../Componentes/Tarjeta";
import imagenEjemplo from "../../imagenes/logo512.png";

   


const Linea1 = () => {
  return (
    <div>
      
      <Tarjeta 
        imagen= "https://upload.wikimedia.org/wikipedia/commons/5/5c/Miguel_Antonio_Caro_2.jpg"
        titulo="Hola" 
        parrafos={["Este es el primer párrafo.Este es el primer párrafo. Este es el primer párrafo. Este es el primer párrafo. Este es el primer párrafo.", "Este es el segundo párrafo."]} 
      />
    </div>
  );
}

export default Linea1;
