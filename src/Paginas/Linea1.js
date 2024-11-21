import Tarjeta from "../Componentes/Tarjeta";


  

const Linea1 = () => {
  return (
    <div>
      
      <Tarjeta 
        imagen= "https://upload.wikimedia.org/wikipedia/commons/5/5c/Miguel_Antonio_Caro_2.jpg"
        titulo="Miguel Antonio Caro" 
        parrafos={[
          " <strong>El primer partido de fútbol en Colombia </strong> El 22 de junio de 1892, en Bogotá, se llevó a cabo el primer encuentro futbolístico registrado en Colombia. Este evento, organizado por el coronel estadounidense Henry Rown Lemly, director de la Escuela Militar, contó con la asistencia de Miguel Antonio Caro, quien para entonces era vicepresidente electo.",
          "Por esa epoca <strong>1896</strong> se crean las <em>escuelas militares</em>",
          "Dejó una frase en la <a href='/constituyente'>Constituyente de 1886</a> para la historia",
          "La elección de la Escuela Militar como escenario no fue casual. Lemly, conocedor del fútbol, introdujo este deporte en la institución y estableció un reglamento basado en las normas inglesas. Caro, al asistir al partido, no solo respaldaba esta iniciativa, sino que también se mostraba interesado en las nuevas tendencias deportivas que llegaban al país.",
          "La <strong>hegemonia conservadora</strong> 1886 - 1930"
        ]}
        imagenesAdicionales={["https://elmalpensante.com/sites/default/files/images/articulos/Primer_partido_nuevas_voces_el_malpensante.png", "https://elmalpensante.com/sites/default/files/images/articulos/Primer_partido_nuevas_voces_el_malpensante.png"]}
        descripcionesAdicionales={["Primer partido de futból en Colombia"]}
        links={["https://elmalpensante.com/articulo/4005/el-primer-partido-de-futbol-en-colombia"]}
        />
    </div>
  );
}

export default Linea1;
