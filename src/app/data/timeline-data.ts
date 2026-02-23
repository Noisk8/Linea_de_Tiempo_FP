export type TimelineSource = {
  label: string;
  url: string;
};

export type TimelineEntry = {
  id: string;
  year: string;
  termStartYear: string;
  termEndYear: string;
  name: string;
  name_en?: string;
  shortDescription: string;
  shortDescription_en?: string;
  image: string;
  paragraphs: string[];
  paragraphs_en?: string[];
  editorialImage?: {
    url: string;
    caption: string;
    caption_en?: string;
    credit?: string;
  };
  editorialGallery?: {
    url: string;
    caption: string;
    caption_en?: string;
    credit?: string;
  }[];
  editorialImageAfterIndex?: number;
  sources: TimelineSource[];
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "rafael-nunez-1886",
    year: "1886",
    termStartYear: "1886",
    termEndYear: "1894",
    name: "Rafael Nuñez",
    shortDescription: "Regeneracion, Constitucion de 1886 y beisbol en Cartagena.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Rafael_N%C3%BA%C3%B1ez%2C_ca.1885.jpg/640px-Rafael_N%C3%BA%C3%B1ez%2C_ca.1885.jpg",
    paragraphs: [
      "El perfil lo presenta como poeta frustrado: Rafael nuñez fue el ultimo presidente de los Estados Unidos de Colombia y el primero de la Republica de Colombia; se le atribuye la letra del Himno Nacional.",
      "En la revolucion de 1885 se le volteo a los liberales y termino gobernando con el Partido Conservador; ese giro marca el arranque de la Regeneracion y el impulso a la Constitucion de 1886.",
      "En El Cabrero, frente a su casa en Cartagena, se registra un hito del beisbol: el <strong>20 de julio de 1897</strong> se juega por primera vez en la ciudad, segun el historiador y periodista Raul Porto Cabrales en su libro sobre la memoria historica del beisbol de Bolivar y Cartagena.",
      "Porto cuenta que jovenes cartageneros observaron a estudiantes de Cuba y Panama, quienes trajeron los implementos y ensenaron el juego.",
      "Tambien menciona un antecedente no confirmado: en 1874 el cubano Francisco Balmaceda habria instalado un ingenio azucarero cerca de Marialabaja con un campo de beisbol para sus trabajadores, lo que sugiere un contacto temprano con la pelota caliente."
    ],
    editorialImage: {
      url: "https://primertiempo.co/wp-content/uploads/2021/07/Historia-del-beisbol.jpg",
      caption: "La prensa local recuerda el primer partido de beisbol en Cartagena, 1897.",
      credit: "primertiempo.co",
      caption_en: "The local press remembers the first baseball game in Cartagena, 1897."
    },
    editorialImageAfterIndex: 5,
    sources: [
      {
        label: "Rafael nuñez (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Rafael_N%C3%BA%C3%B1ez"
      },
      {
        label: "Constitucion de 1886 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Constituci%C3%B3n_de_1886"
      },
      {
        label: "Baseball in Colombia (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Baseball_in_Colombia"
      },
      {
        label: "Hace 124 anos se jugo beisbol en Cartagena (El Universal)",
        url: "https://www.eluniversal.com.co/cartagena/2021/07/20/hace-124-anos-se-jugo-por-primera-vez-beisbol-en-cartagena/"
      },
      {
        label: "Memoria historica del beisbol de Bolivar y Cartagena (Scribd)",
        url: "https://es.scribd.com/document/517296226/historia-del-beisbol"
      },
      {
        label: "124 anos de beisbol en Cartagena (Primertiempo)",
        url: "https://primertiempo.co/beisbol/124-anos-de-beisbol-en-cartagena/"
      },
      {
        label: "Historia del beisbol en Colombia (FCF)",
        url: "https://fcb.com.co/historia.php"
      }
    ],
    name_en: "Rafael Nuñez",
    shortDescription_en: "Regeneration, 1886 Constitution, and baseball in Cartagena.",
    paragraphs_en: [
      "The profile presents him as a frustrated poet: Rafael Nuñez was the last president of the United States of Colombia and the first of the Republic of Colombia; he is attributed with the lyrics of the National Anthem.",
      "In the revolution of 1885 he turned to the liberals and ended up governing with the Conservative Party; that shift marks the beginning of the Regeneration and the drive for the 1886 Constitution.",
      "In El Cabrero, in front of his house in Cartagena, a baseball milestone is recorded: on <strong>July 20, 1897</strong> it was played for the first time in the city, according to historian and journalist Raul Porto Cabrales in his book on the historical memory of baseball in Bolivar and Cartagena.",
      "Porto says that young Cartagenans observed students from Cuba and Panama, who brought the equipment and taught the game.",
      "He also mentions an unconfirmed precedent: in 1874 the Cuban Francisco Balmaceda would have installed a sugar mill near Marialabaja with a baseball field for his workers, suggesting an early contact with the hot-corner sport."
    ]
  },
  {
    id: "miguel-antonio-caro-1892",
    year: "1892",
    termStartYear: "1892",
    termEndYear: "1898",
    name: "Miguel Antonio Caro",
    shortDescription: "Primer partido registrado y origen disciplinario del futbol.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Miguel_Antonio_Caro_2.jpg",
    paragraphs: [
      "Miguel Antonio Caro dejo una frase: <strong>Colombia solo puede ser catolica</strong> porque de lo contrario caeria en la barbarie; la sentencia resume la <strong>hegemonia conservadora</strong> en su forma mas dura.",
      "Durante su gobierno se realizo el <strong>primer partido de futbol</strong> del que hay registro en Colombia. <strong>Henry Rowan Lemly</strong> era un coronel gringo obsesionado con los metodos de entrenamiento de las <strong>universidades britanicas</strong>, donde nacieron los deportes modernos: reglamentos del <strong>rugby</strong>, del <strong>futbol</strong>, del <strong>tenis</strong> y del <strong>criquet</strong>.",
      "Ese fenomeno del siglo XIX buscaba organizar, normalizar y civilizar los enfrentamientos, y en Colombia se tradujo en la reorganizacion de la nacion y la creacion de la <strong>escuela militar</strong>.",
      "<strong>Lemly</strong> llevo los reglamentos del futbol de <strong>Inglaterra</strong> y los aplico en Colombia; lo unico que tenia de futbol era que era <strong>11 contra 11</strong>. Llevo futbol, gimnasia y tenis, y queda como una linea rarisima en el origen de los deportes en el pais.",
      "El relato sostiene que hubo precedentes: en <strong>Puerto Colombia</strong> o en <strong>Cartagena</strong>, marinos britanicos se bajaron, inflaron una tripa de un animal y los estibadores del puerto habrian dicho: ¿que es esta monda?, y asi habria empezado el futbol.",
      "En <strong>junio de 1892</strong>, el vicepresidente de la republica, presidente de verdad, fue testigo de ese partido y de esa exhibicion de moderno entrenamiento. El futbol nacio oficialmente en Colombia para un presidente."
    ],
    sources: [
      {
        label: "Miguel Antonio Caro (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Miguel_Antonio_Caro"
      },
      {
        label: "El primer partido de futbol en Colombia (El Malpensante)",
        url: "https://elmalpensante.com/articulo/4005/el-primer-partido-de-futbol-en-colombia"
      },
      {
        label: "Henry Rowan Lemly, el pionero (El Espectador)",
        url: "https://www.elespectador.com/deportes/henry-rowan-lemly-el-pionero/"
      },
      {
        label: "Registro visual Henry Rowan Lemly (Pinterest)",
        url: "https://kr.pinterest.com/pin/653373858440393548/"
      }
    ],
    editorialImage: {
      url: "https://elmalpensante.com/sites/default/files/images/articulos/Primer_partido_nuevas_voces_el_malpensante.png",
      caption: "El primer partido registrado en Colombia, segun el relato de El Malpensante.",
      credit: "elmalpensante.com",
      caption_en: "The first registered match in Colombia, according to El Malpensante's story."
    },
    editorialGallery: [
      {
        url: "/Henry.avif",
        caption: "Henry Rowan Lemly y la llegada de los reglamentos.",
        credit: "Archivo"
      },
      {
        url: "/46ec559c6a552125cea948e0537106ec.jpg",
        caption: "Registro visual asociado a los primeros partidos.",
        credit: "Archivo"
      }
    ],
    name_en: "Miguel Antonio Caro",
    shortDescription_en: "First recorded match and disciplinary origin of football.",
    paragraphs_en: [
      "Miguel Antonio Caro left a quote: <strong>Colombia can only be Catholic</strong> because otherwise it would fall into barbarity; the sentence summarizes the <strong>conservative hegemony</strong> in its harshest form.",
      "During his government, the <strong>first football match</strong> in Colombia on record took place. <strong>Henry Rowan Lemly</strong> was an American colonel obsessed with the training methods of <strong>British universities</strong>, where modern sports were born: regulations for <strong>rugby</strong>, <strong>football</strong>, <strong>tennis</strong>, and <strong>cricket</strong>.",
      "That 19th-century phenomenon sought to organize, normalize, and civilize confrontations, and in Colombia, it translated into the reorganization of the nation and the creation of the <strong>military school</strong>.",
      "<strong>Lemly</strong> brought the football rules from <strong>England</strong> and applied them in Colombia; the only thing identifying it as football was that it was <strong>11 against 11</strong>. He brought football, gymnastics, and tennis, establishing a bizarre line in the origin of sports in the country.",
      "The story holds there were precedents: in <strong>Puerto Colombia</strong> or <strong>Cartagena</strong>, British sailors got off, inflated an animal gut, and the port stevedores supposedly said, \"What is this nonsense?\", and that's how football started.",
      "In <strong>June 1892</strong>, the vice president of the republic, the effective president, witnessed that game and that exhibition of modern training. Football officially born in Colombia for a president."
    ]
  },
  {
    id: "jose-manuel-marroquin-1904",
    year: "1904",
    termStartYear: "1900",
    termEndYear: "1904",
    name: "Jose Manuel Marroquin",
    shortDescription: "Educacion fisica como politica estatal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Jos%C3%A9_Manuel_Marroqu%C3%ADn.jpg",
    paragraphs: [
      "Durante el gobierno de Jose Manuel Marroquin se establecio por primera vez en la historia del pais el termino <strong>educacion fisica</strong>, en un contexto de <em>Regeneracion</em> que buscaba reorganizar la nacion.",
      "En <strong>1904</strong> se expidio el <strong>Decreto 419 del 3 de julio</strong>, que reglamento la Ley 39 y la ensenanza en general. En su capitulo V, paragrafo 4, se definio formalmente la educacion fisica.",
      "Los articulos 60 a 63 ordenaron correccion en el vestido, aseo riguroso y postura natural durante las lecciones. La calistenia y la gimnasia se hicieron obligatorias, y cada dos semanas se destino medio dia a paseos higienicos y recreativos.",
      "El modelo respondia al ideal de “mente sana en cuerpo sano” y tomaba como referencia las practicas europeas, en particular las britanicas, donde la educacion fisica se entendia como herramienta de orden social."
    ],
    editorialImage: {
      url: "/leyley.png",
      caption: "Decreto 419 (1904): educacion fisica como politica estatal.",
      credit: "Ilustracion editorial",
      caption_en: "Decree 419 (1904): physical education as a state policy."
    },
    sources: [
      {
        label: "Jose Manuel Marroquin (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Jos%C3%A9_Manuel_Marroqu%C3%ADn"
      },
      {
        label: "Educacion fisica (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Educaci%C3%B3n_f%C3%ADsica"
      },
      {
        label: "Historia de la educacion fisica en Colombia (EFDeportes)",
        url: "https://www.efdeportes.com/efd17/efcolom.htm"
      },
      {
        label: "Los primeros torneos de futbol en Colombia (Daniel Polania)",
        url: "https://danielpolania.wordpress.com/2018/12/03/los-primeros-torneos-de-futbol-en-colombia/"
      }
    ],
    name_en: "Jose Manuel Marroquin",
    shortDescription_en: "Physical education as a state policy.",
    paragraphs_en: [
      "During the government of Jose Manuel Marroquin, the term <strong>physical education</strong> was established for the first time in the country's history, within a <em>Regeneration</em> context that sought to reorganize the nation.",
      "In <strong>1904</strong>, <strong>Decree 419 of July 3</strong> was issued, regulating Law 39 and general teaching. In Chapter V, paragraph 4, physical education was formally defined.",
      "Articles 60 to 63 ordered correct attire, rigorous cleanliness, and natural posture during lessons. Calisthenics and gymnastics became mandatory, and every two weeks, half a day was dedicated to hygienic and recreational walks.",
      "The model responded to the ideal of \"a sound mind in a sound body\" and took European practices as a reference, particularly British ones, where physical education was understood as a tool for social order."
    ]
  },
  {
    id: "carlos-e-restrepo-1912",
    year: "1912",
    termStartYear: "1910",
    termEndYear: "1914",
    name: "Carlos Eugenio Restrepo",
    shortDescription: "Primer campeonato: Copa Carlos E. Restrepo.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Carlos_Eugenio_Restrepo%2C_1918.jpg",
    paragraphs: [
      "Desde la presidencia, Carlos Eugenio Restrepo impulso la organizacion de campeonatos deportivos en un contexto donde el futbol era practicamente una actividad de clubes sociales.",
      "En <strong>1912</strong> se realizo el <strong>primer campeonato de futbol del pais</strong>, la <strong>Copa Carlos E. Restrepo</strong>, considerada la primera competencia estructurada del futbol colombiano.",
      "El torneo lo gano el <strong>Polo Club de Bogota</strong>, el primer equipo organizado del pais. Su sede estaba en el sector que luego dio nombre al barrio El Polo, donde funciono una de las primeras canchas de futbol de la ciudad.",
      "Durante varios anos el Polo Club domino la escena bogotana hasta ser desplazado por clubes emergentes como Bartolino y la Facultad de Medicina de la Universidad Nacional.",
      "El episodio confirma que el futbol temprano fue un deporte de <em>elites urbanas</em>, articulado a clubes como el Polo Club y el Club Colombia, mientras surgian instituciones regionales que despues se convertirian en referentes del futbol nacional."
    ],
    editorialImage: {
      url: "/polofc.jpg",
      caption: "Polo Club de Bogota, campeon de la Copa Carlos E. Restrepo (1912).",
      credit: "Bogota Antigua · Gloria Botero · 28 de noviembre de 2024",
      caption_en: "Polo Club de Bogota, champion of the Copa Carlos E. Restrepo (1912)."
    },
    editorialGallery: [
      {
        url: "/imagesdv6pf38x.jpg",
        caption: "Registro visual adicional del primer campeonato.",
        credit: "Archivo"
      }
    ],
    sources: [
      {
        label: "Carlos Eugenio Restrepo (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Carlos_Eugenio_Restrepo"
      },
      {
        label: "Los primeros torneos de futbol en Colombia (Daniel Polania)",
        url: "http://danielpolania.wordpress.com/2018/12/03/los-primeros-torneos-de-futbol-en-colombia/"
      },
      {
        label: "Futbol en Colombia (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/F%C3%BAtbol_en_Colombia"
      }
    ],
    name_en: "Carlos Eugenio Restrepo",
    shortDescription_en: "First championship: Copa Carlos E. Restrepo.",
    paragraphs_en: [
      "From the presidency, Carlos Eugenio Restrepo promoted the organization of sports championships in a context where football was practically an activity for social clubs.",
      "In <strong>1912</strong>, the <strong>first football championship in the country</strong>, the <strong>Copa Carlos E. Restrepo</strong>, took place, considered the first structured competition in Colombian football.",
      "The tournament was won by the <strong>Polo Club de Bogota</strong>, the first organized team in the country. Its headquarters were in the sector that later gave its name to the El Polo neighborhood, where one of the first football fields in the city operated.",
      "For several years, the Polo Club dominated the Bogota scene until it was displaced by emerging clubs like Bartolino and the Faculty of Medicine of the National University.",
      "The episode confirms that early football was a sport of <em>urban elites</em>, articulated around clubs like the Polo Club and Club Colombia, while regional institutions emerged that would later become national football benchmarks."
    ]
  },
  {
    id: "pedro-nel-ospina-1920s",
    year: "1922",
    termStartYear: "1922",
    termEndYear: "1926",
    name: "Pedro Nel Ospina",
    shortDescription: "Ley 80 y futbol de elites en canchas privadas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg",
    paragraphs: [
      "Pedro Nel Ospina, presidente de la decada de 1920, aparece retratado con equipos de futbol de la epoca, con uniforme de gala, posando con clubes de la alta sociedad en la cancha de <strong>La Merced</strong>, hoy <strong>San Bartolome de La Merced</strong>.",
      "Las fotografias evidencian el caracter <em>elitista</em> del futbol temprano y el interes politico por el estatus social que rodeaba estos escenarios.",
      "En <strong>1925</strong> se firma la <strong>Ley 80</strong>, que crea las <em>Comisiones Nacionales de Educacion Fisica</em>, antecedente de Coldeportes y del actual Ministerio del Deporte.",
      "El deporte organizado se movia en circuitos urbanos cerrados, con poca llegada a sectores populares."
    ],
    editorialImage: {
      url: "/equipos1923.png",
      caption: "Pedro Nel Ospina con equipos de la alta sociedad en La Merced.",
      credit: "Archivo fotográfico",
      caption_en: "Pedro Nel Ospina with high society teams in La Merced."
    },
    sources: [
      {
        label: "Pedro Nel Ospina (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Pedro_Nel_Ospina"
      },
      {
        label: "Ley 80 de 1925 (SUIN-Juriscol)",
        url: "https://www.suin-juriscol.gov.co/viewDocument.asp?id=1625996"
      },
      {
        label: "Instituto Colombiano del Deporte (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Instituto_Colombiano_del_Deporte"
      }
    ],
    name_en: "Pedro Nel Ospina",
    shortDescription_en: "Law 80 and elite football on private fields.",
    paragraphs_en: [
      "Pedro Nel Ospina, president in the 1920s, is portrayed with football teams of the time in full dress uniform, posing with elite social clubs on the <strong>La Merced</strong> field, today <strong>San Bartolome de La Merced</strong>.",
      "The photographs evidence the <em>elitist</em> nature of early football and the political interest in the social status that surrounded these scenarios.",
      "In <strong>1925</strong>, <strong>Law 80</strong> was signed, creating the <em>National Physical Education Commissions</em>, predecessor of Coldeportes and the current Ministry of Sports.",
      "Organized sports moved within closed urban circuits, with little reach to popular sectors."
    ]
  },
  {
    id: "miguel-abadia-1926",
    year: "1926",
    termStartYear: "1926",
    termEndYear: "1930",
    name: "Miguel Abadia Mendez",
    shortDescription: "Masacre de las bananeras y Juegos Nacionales.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Miguel_Abad%C3%ADa_M%C3%A9ndez.jpg",
    paragraphs: [
      "Las medidas de educacion fisica impulsaron las <strong>primeras Olimpiadas Colombianas</strong>, que despues se llamarian <strong>Juegos Nacionales</strong>.",
      "Estas competencias se realizaron entre <strong>diciembre de 1928</strong> y <strong>enero de 1929</strong> en Cali, ciudad que se consolida como referente olimpico y, mas tarde, sede de los Panamericanos de 1971.",
      "En futbol no existian selecciones departamentales ni ligas formales. El equipo que represento al <strong>Magdalena</strong> fue campeon y se le reconoce como el <em>primer campeon nacional</em> de este tipo de competencias.",
      "Al regresar a Santa Marta, el equipo recibio un homenaje frente al gobernador militar <strong>Cortes Vargas</strong> y alli se pidio un minuto de silencio por las victimas de la <strong>masacre de las bananeras</strong>, un episodio que el propio Cortes Vargas habia negado.",
      "La prensa de la epoca registro que algunos jugadores eran familiares de victimas, y ese clima social y politico acelero el fin de la hegemonia conservadora: los liberales regresaron al poder en <strong>1930</strong> con Enrique Olaya Herrera."
    ],
    editorialImage: {
      url: "/abadia.jpeg",
      caption: "Miguel Abadia Mendez en su periodo presidencial.",
      credit: "Archivo fotografico",
      caption_en: "Miguel Abadia Mendez during his presidential term."
    },
    sources: [
      {
        label: "Miguel Abadia Mendez (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Miguel_Abad%C3%ADa_M%C3%A9ndez"
      },
      {
        label: "Masacre de las bananeras (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Masacre_de_las_bananeras"
      },
      {
        label: "Primeros Juegos Nacionales en Cali (Museo Nacional)",
        url: "https://www.museonacional.gov.co/noticias/Paginas/Olimpicos.aspx#:~:text=Entre%20el%2020%20de%20diciembre,75)."
      },
      {
        label: "Juegos Deportivos Nacionales (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Juegos_Deportivos_Nacionales_de_Colombia"
      }
    ],
    name_en: "Miguel Abadia Mendez",
    shortDescription_en: "Banana massacre and National Games.",
    paragraphs_en: [
      "The physical education measures spurred the <strong>first Colombian Olympics</strong>, which would later be called the <strong>National Games</strong>.",
      "These competitions were held between <strong>December 1928</strong> and <strong>January 1929</strong> in Cali, a city that solidified itself as an Olympic reference and, later, host of the 1971 Pan American Games.",
      "In football, there were no formal departmental teams or leagues. The team representing <strong>Magdalena</strong> became the champion and is recognized as the <em>first national champion</em> of such competitions.",
      "Upon returning to Santa Marta, the team received a tribute in front of the military governor <strong>Cortes Vargas</strong>, where a minute of silence was requested for the victims of the <strong>banana massacre</strong>, an episode that Cortes Vargas himself had denied.",
      "The press of the time noted that some players were relatives of victims, and that social and political climate accelerated the end of the conservative hegemony: the liberals returned to power in <strong>1930</strong> with Enrique Olaya Herrera."
    ]
  },
  {
    id: "enrique-olaya-1930",
    year: "1930",
    termStartYear: "1930",
    termEndYear: "1934",
    name: "Enrique Olaya Herrera",
    shortDescription: "Republica Liberal y masificacion de estadios.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Enrique_Olaya_Herrera_by_Benjam%C3%ADn_de_la_Calle_%281910%29.jpg",
    paragraphs: [
      "Enrique Olaya Herrera encabeza la <strong>Republica Liberal</strong> (1930-1945). Durante su gobierno se consolida la <strong>construccion de estadios</strong> en el pais.",
      "Antes de 1930 solo existia un estadio en Colombia: el <strong>Julio Torres</strong>, luego <em>Estadio Moderno</em>, construido en Barranquilla en 1922. El resto de actividades deportivas se realizaban en canchas con tribunas improvisadas y condiciones poco seguras para el publico. Con la Republica Liberal comienza la <strong>masificacion del deporte</strong>.",
      "Bajo Olaya Herrera se levantan escenarios clave: el <strong>Romelio Martinez</strong> (1934), el <strong>Alfonso Lopez</strong> de la Universidad Nacional (1936) y el <strong>Pascual Guerrero</strong> (1937). Con esta infraestructura se abre la etapa del llamado <em>futbol marron</em>, aun sin profesionalismo ni campeonato unificado, pero con pagos informales y competiciones locales que dieron origen a muchos de los clubes tradicionales."
    ],
    editorialImage: {
      url: "/C6.jpg",
      caption: "Infraestructura deportiva durante la Republica Liberal.",
      credit: "Archivo fotografico",
      caption_en: "Sports infrastructure during the Liberal Republic."
    },
    sources: [
      {
        label: "Enrique Olaya Herrera (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Enrique_Olaya_Herrera"
      },
      {
        label: "Estadio Romelio Martinez (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Estadio_Romelio_Mart%C3%ADnez"
      },
      {
        label: "Estadio Alfonso Lopez (Bogota) (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Estadio_Alfonso_L%C3%B3pez_(Bogot%C3%A1)"
      },
      {
        label: "Estadio Pascual Guerrero (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Estadio_Pascual_Guerrero"
      },
      {
        label: "Estadios de Colombia (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Anexo:Estadios_de_Colombia"
      },
      {
        label: "Archivo El Tiempo sobre estadios",
        url: "https://www.eltiempo.com/archivo/documento/cms-4432862"
      },
      {
        label: "Estadio Romelio Martinez (ArchDaily)",
        url: "https://www.archdaily.cl/cl/917321/estadio-romelio-martinez-el-equipo-mazzanti"
      }
    ],
    name_en: "Enrique Olaya Herrera",
    shortDescription_en: "Liberal Republic and the massification of stadiums.",
    paragraphs_en: [
      "Enrique Olaya Herrera leads the <strong>Liberal Republic</strong> (1930-1945). During his government, the <strong>construction of stadiums</strong> in the country is consolidated.",
      "Before 1930, there was only one stadium in Colombia: the <strong>Julio Torres</strong>, later the <em>Modern Stadium</em>, built in Barranquilla in 1922. All other sports activities took place on fields with makeshift grandstands and unsafe conditions for the public. With the Liberal Republic begins the <strong>massification of sports</strong>.",
      "Under Olaya Herrera, key venues are erected: the <strong>Romelio Martinez</strong> (1934), the <strong>Alfonso Lopez</strong> at the National University (1936), and the <strong>Pascual Guerrero</strong> (1937). This infrastructure opens the era of so-called <em>brown football</em>, still without professionalism or a unified championship, but with informal payments and local competitions that gave rise to many traditional clubs."
    ]
  },
  {
    id: "mariano-ospina-1948",
    year: "1946",
    termStartYear: "1946",
    termEndYear: "1950",
    name: "Mariano Ospina Perez",
    shortDescription: "Bogotazo, Dimayor y futbol profesional.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Mariano_Ospina_P%C3%A9rez.jpg/640px-Mariano_Ospina_P%C3%A9rez.jpg",
    paragraphs: [
      "Mariano Ospina Perez llego al poder en <strong>1946</strong> tras vencer a <strong>Jorge Eliecer Gaitan</strong> en unas elecciones marcadas por la division liberal. Sumados, <em>Gaitan y Echandia</em> obtenian mas votos que Ospina, pero por separado el candidato conservador se impuso y el partido regreso al gobierno.",
      "El asesinato de Gaitan en <strong>1948</strong> desato el <strong>Bogotazo</strong>. La violencia se extendio por el pais y en algunas regiones, como Barrancabermeja, los obreros tomaron el control por varias semanas. El episodio marco el inicio de un ciclo de venganzas y persecuciones politicas.",
      "Tras el Bogotazo se impuso toque de queda y se prohibieron reuniones de mas de dos personas. Hubo dos excepciones oficiales: <strong>cine</strong> y <strong>futbol</strong>. En ese contexto, Alfonso Senior, dirigente de Millonarios, impulso la creacion de la <strong>Dimayor</strong> en junio y el inicio del campeonato profesional en agosto de 1948.",
      "El futbol se consolido como espacio de reunion social en medio de la censura. La prensa, restringida por el <em>censor nacional</em>, encontro en el deporte un tema permitido para cubrir y comentar."
    ],
    editorialImage: {
      url: "/mariano_gaitan.jpeg",
      caption: "Mariano Ospina Perez y Jorge Eliecer Gaitan en campana.",
      credit: "Archivo fotografico",
      caption_en: "Mariano Ospina Perez and Jorge Eliecer Gaitan on the campaign trail."
    },
    sources: [
      {
        label: "Mariano Ospina Perez (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Mariano_Ospina_P%C3%A9rez"
      },
      {
        label: "Jorge Eliecer Gaitan (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Jorge_Eli%C3%A9cer_Gait%C3%A1n"
      },
      {
        label: "Bogotazo (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Bogotazo"
      },
      {
        label: "Campeonato Profesional Colombiano 1948 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Campeonato_de_F%C3%BAtbol_Profesional_Colombiano_1948"
      }
    ],
    name_en: "Mariano Ospina Perez",
    shortDescription_en: "Bogotazo, Dimayor, and professional football.",
    paragraphs_en: [
      "Mariano Ospina Perez came to power in <strong>1946</strong> after defeating <strong>Jorge Eliecer Gaitan</strong> in elections marked by liberal divisions. Together, <em>Gaitan and Echandia</em> garnered more votes than Ospina, but separately the conservative candidate prevailed, returning his party to power.",
      "The assassination of Gaitan in <strong>1948</strong> unleashed the <strong>Bogotazo</strong>. Violence spread throughout the country, and in some regions like Barrancabermeja, workers took control for several weeks. The episode marked the beginning of a cycle of revenge and political persecution.",
      "Following the Bogotazo, a curfew was imposed, and gatherings of more than two people were banned. There were two official exceptions: <strong>cinema</strong> and <strong>football</strong>. In that context, Alfonso Senior, a Millonarios executive, pushed for the creation of <strong>Dimayor</strong> in June and the start of the professional championship in August 1948.",
      "Football consolidated itself as a social gathering space amid censorship. The press, restricted by the <em>national censor</em>, found in sports a permissible topic to cover and comment on."
    ]
  },
  {
    id: "laureano-gomez-1950",
    year: "1950",
    termStartYear: "1950",
    termEndYear: "1953",
    name: "Laureano Gomez",
    shortDescription: "El Dorado y futbol como espectaculo politico.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Laureano_G%C3%B3mez_%28c._1925-1926%29.jpg/640px-Laureano_G%C3%B3mez_%28c._1925-1926%29.jpg",
    paragraphs: [
      "Laureano Gomez fue un dirigente conservador de linea dura. Habia sido senador y canciller de Mariano Ospina antes de llegar a la presidencia en <strong>1950</strong>.",
      "Su periodo coincide con la era de <em>El Dorado</em>, cuando el futbol colombiano vive una bonanza marcada por la llegada de figuras como <strong>Adolfo Pedernera</strong> y <strong>Alfredo Di Stefano</strong>. La atencion publica se desplaza hacia el espectaculo deportivo en un contexto de violencia politica.",
      "El ciclo de El Dorado se explica por la ruptura institucional entre la <strong>Dimayor</strong> y la autoridad federativa (<strong>Adefutbol/FIFA</strong>), lo que permitio contratar estrellas sin el marco regular de transferencias internacionales. El resultado fue un campeonato de enorme convocatoria y una burbuja deportiva y economica.",
      "La normalizacion internacional llega con el <strong>Pacto de Lima (1951)</strong>, que establecio condiciones para cerrar el ciclo y ordenar la devolucion de jugadores. Ese hito ocurre durante el periodo Laureano/Urdaneta.",
      "En medio de <em>La Violencia</em>, el futbol funciono como <em>valvula de escape</em>. Archivos de la epoca resaltan la asistencia masiva a partidos mientras el orden publico se deterioraba; en 1953 Laureano cae, Rojas Pinilla lo tumba y la superestrella del circo, Di Stefano, se va para Espana."
    ],
    editorialImage: {
      url: "/Millonarios-Campeon-en-1951.jpg",
      caption: "Millonarios campeon en 1951, simbolo de la era de El Dorado.",
      credit: "Archivo fotografico",
      caption_en: "Millonarios champion in 1951, symbol of the El Dorado era."
    },
    sources: [
      {
        label: "Laureano Gomez (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Laureano_G%C3%B3mez"
      },
      {
        label: "Gobierno de Laureano Gomez (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Gobierno_de_Laureano_G%C3%B3mez"
      },
      {
        label: "Roberto Urdaneta (Senal Memoria)",
        url: "https://www.senalmemoria.co/articulos/roberto-urdaneta"
      },
      {
        label: "El Dorado y la prensa (El Tiempo)",
        url: "https://www.eltiempo.com/archivo/documento/mam-950339"
      },
      {
        label: "El Dorado y profesionalismo (UFPR)",
        url: "https://revistas.ufpr.br/alesde/article/download/20967/15144"
      }
    ],
    name_en: "Laureano Gomez",
    shortDescription_en: "El Dorado and football as a political spectacle.",
    paragraphs_en: [
      "Laureano Gomez was a hardline conservative leader. He had been a senator and chancellor under Mariano Ospina before becoming president in <strong>1950</strong>.",
      "His term coincides with the era of <em>El Dorado</em>, when Colombian football experienced a boom marked by the arrival of stars like <strong>Adolfo Pedernera</strong> and <strong>Alfredo Di Stefano</strong>. Public attention shifted toward the sports spectacle amid political violence.",
      "The El Dorado cycle is explained by the institutional rupture between <strong>Dimayor</strong> and the federative authority (<strong>Adefutbol/FIFA</strong>), allowing the signing of stars outside the regular international transfer framework. The result was a massively attended championship creating a sports and economic bubble.",
      "International normalization came with the <strong>Lima Pact (1951)</strong>, which set conditions to end the cycle and mandate the return of players. This milestone occurs during the Laureano/Urdaneta period.",
      "Amidst <em>The Violence</em>, football functioned as an <em>escape valve</em>. Archives highlight massive attendance at matches while public order deteriorated; in 1953 Laureano falls, Rojas Pinilla overthrows him, and the circus superstar, Di Stefano, leaves for Spain."
    ]
  },
  {
    id: "gustavo-rojas-pinilla-1953",
    year: "1953",
    termStartYear: "1953",
    termEndYear: "1957",
    name: "Gustavo Rojas Pinilla",
    shortDescription: "Fin del Dorado futbolístico y primer proceso de paz.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Gurropin_tras_asumir_la_presidencia_con_un_golpe_de_estado.jpg",
    paragraphs: [
      "En <strong>1953</strong> el general Gustavo Rojas Pinilla alcanza el poder mediante golpe de Estado, poniendo fin al gobierno conservador de Laureano Gomez.",
      "Ese mismo año termina la epoca conocida como <strong>\"El Dorado\"</strong> del futbol colombiano. A instancias de la FIFA se acuerda que los futbolistas que \"piratearon\" en Colombia regresaran a sus equipos de origen, o en su defecto, como sucedio con <strong>Alfredo Di Stefano</strong>, fueron transferidos a Europa.",
      "El Dorado futbolístico (1949-1953) habia sido una epoca dorada donde el peso tenia casi el mismo poder adquisitivo que el dolar, y los equipos colombianos contrataron a estrellas sudamericanas como Adolfo Pedernera, Alfredo Di Stefano y Néstor Raúl Rossi, quienes conformaron el legendario \"Ballet Azul\" de Millonarios.",
      "Rojas Pinilla firma el <strong>primer proceso de paz</strong> del pais, que concluyo con la desmovilizacion de <strong>3.500 guerrilleros</strong> que se alzaron en armas tras la muerte de Jorge Eliecer Gaitan en 1948.",
      "Durante su dictadura, el futbol se convirtio en una <strong>vitrina popular</strong> y antídoto contra la violencia que habia estallado tras el Bogotazo. El Estado apoyo la construccion de estadios y el fortalecimiento del deporte como mecanismo de cohesion social.",
      "El relato lo presenta como un presidente considerado entre los mejores de la historia del pais, quien supo usar el futbol como herramienta de unificacion nacional en tiempos de crisis."
    ],
    editorialImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Gurropin_tras_asumir_la_presidencia_con_un_golpe_de_estado.jpg",
      caption: "Rojas Pinilla tras asumir la presidencia en 1953.",
      credit: "Wikimedia Commons"
    },
    sources: [
      {
        label: "Gustavo Rojas Pinilla (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Gustavo_Rojas_Pinilla"
      },
      {
        label: "Golpe de Estado en Colombia (1953) (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Colombia_de_1953"
      },
      {
        label: "Polémica en Colombia por la relación entre el narco y el fútbol (Cosecha Roja)",
        url: "https://www.cosecharoja.org/polemica-en-colombia-por-la-relacion-entre-el-narco-y-el-futbol/"
      },
      {
        label: "El Dorado y profesionalismo (UFPR)",
        url: "https://revistas.ufpr.br/alesde/article/download/20967/15144"
      },
      {
        label: "Ballet Azul de Millonarios (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Ballet_Azul"
      }
    ],
    name_en: "Gustavo Rojas Pinilla",
    shortDescription_en: "End of the football Dorado and the first peace process.",
    paragraphs_en: [
      "In <strong>1953</strong>, General Gustavo Rojas Pinilla seized power through a coup d'état, ending Laureano Gomez's conservative government.",
      "That same year, the era known as the <strong>\"El Dorado\"</strong> of Colombian football came to an end. At FIFA's behest, it was agreed that the footballers who \"pirated\" in Colombia would return to their original teams, or alternatively, as with <strong>Alfredo Di Stefano</strong>, were transferred to Europe.",
      "The football Dorado (1949-1953) had been a golden era where the peso had almost the same purchasing power as the dollar, and Colombian teams signed South American stars like Adolfo Pedernera, Alfredo Di Stefano, and Nestor Raul Rossi, forming Millonarios' legendary \"Blue Ballet\".",
      "Rojas Pinilla signs the country's <strong>first peace process</strong>, concluding with the demobilization of <strong>3,500 guerrillas</strong> who had taken up arms after Gaitan's death in 1948.",
      "During his dictatorship, football became a <strong>popular showcase</strong> and an antidote to the violence that erupted after the Bogotazo. The State supported stadium construction and bolstered sports as a mechanism for social cohesion.",
      "The narrative presents him as a president considered among the best in the country's history, who knew how to use football as a tool for national unification in times of crisis."
    ]
  },
  {
    id: "alberto-lleras-1962",
    year: "1962",
    termStartYear: "1958",
    termEndYear: "1962",
    name: "Alberto Lleras Camargo",
    shortDescription: "Primer Mundial y disputa simbolica en la Guerra Fria.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alberto_Lleras_Camargo%2C_Presidente_da_Col%C3%B4mbia.tif/lossy-page1-640px-Alberto_Lleras_Camargo%2C_Presidente_da_Col%C3%B4mbia.tif.jpg",
    paragraphs: [
      "La <strong>Seleccion Colombia</strong> clasifica a su primer <strong>Mundial</strong> con <strong>Adolfo Pedernera</strong> como tecnico y figura del <em>Dorado</em>.",
      "En la eliminatoria vence a <strong>Peru</strong> y viaja a <strong>Arica</strong>, sede inicialmente asignada al rival y ciudad fronteriza entre <strong>Chile</strong> y <strong>Peru</strong>.",
      "El partido mas recordado es el <strong>4-4</strong> contra la <strong>URSS</strong>, campeon de Europa: Colombia le marca cuatro goles a <strong>Lev Yashin</strong>, el mejor arquero del momento. En una epoca en que la sigla <strong>CCCP</strong> (Union Sovietica) era leida popularmente como <em>Con Colombia Casi Perdemos</em>, la seleccion colombiana estuvo a punto de imponerse en un encuentro que trascendio lo deportivo. En el siguiente partido, <strong>Yugoslavia</strong>, tambien comunista, nos derrotaria <strong>5-0</strong>, cerrando una participacion marcada por el contraste entre la gesta frente a la URSS y la dura realidad contra otro bloque del Este.",
      "En plena <strong>Guerra Fria</strong>, la prensa y las caricaturas convierten el encuentro en un <strong>relato politico</strong> de Colombia frente al comunismo, y el Estado se apropia de la hazana deportiva para reforzar su proyecto."
    ],
    editorialImage: {
      url: "/lleras-urrsss.png",
      caption: "Caricatura sobre el 4-4 con la URSS y la lectura politica del partido.",
      credit: "Historias Secretas"
    },
    editorialGallery: [
      {
        url: "/COL-VS-RUSIA.jpeg",
        caption: "Colombia vs. URSS en el Mundial de 1962.",
        credit: "Historias Secretas"
      },
      {
        url: "/COL-VS-YUGO.jpeg",
        caption: "Colombia vs. Yugoslavia en el Mundial de 1962.",
        credit: "Historias Secretas"
      }
    ],
    editorialImageAfterIndex: 2,
    sources: [
      {
        label: "Alberto Lleras Camargo (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Alberto_Lleras_Camargo"
      },
      {
        label: "Copa Mundial de Futbol 1962 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1962"
      }
    ],
    name_en: "Alberto Lleras Camargo",
    shortDescription_en: "First World Cup and symbolic dispute in the Cold War.",
    paragraphs_en: [
      "The <strong>Colombian National Team</strong> qualifies for its first <strong>World Cup</strong> with <strong>Adolfo Pedernera</strong>, a star from the <em>Dorado</em>, as coach.",
      "In the qualifiers, they defeated <strong>Peru</strong> and traveled to <strong>Arica</strong>, a venue initially assigned to their rival and a border city between <strong>Chile</strong> and <strong>Peru</strong>.",
      "The most remembered match is the <strong>4-4</strong> against the <strong>USSR</strong>, the European champion: Colombia scores four goals against <strong>Lev Yashin</strong>, the best goalkeeper at the time. In an era when the acronym <strong>CCCP</strong> (Soviet Union) was popularly read as <em>Con Colombia Casi Perdemos (With Colombia We Almost Lost)</em>, the Colombian team nearly prevailed in a match that transcended sports. In the next game, <strong>Yugoslavia</strong>, also communist, defeated us <strong>5-0</strong>, putting an end to a run defined by the stark contrast between the feat against the USSR and the harsh reality against another Eastern Bloc nation.",
      "Amidst the <strong>Cold War</strong>, the press and cartoons turned the match into a <strong>political narrative</strong> of Colombia standing against communism, and the State appropriated the sports achievement to bolster its project."
    ]
  },
  {
    id: "carlos-lleras-1968",
    year: "1968",
    termStartYear: "1966",
    termEndYear: "1970",
    name: "Carlos Lleras Restrepo",
    shortDescription: "Coldeportes y ciclo Panamericanos.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Carlos_L._Restrepo.jpg/640px-Carlos_L._Restrepo.jpg",
    paragraphs: [
      "En 1968, en el <strong>Frente Nacional</strong>, Carlos Lleras Restrepo impulsa la <strong>modernizacion del Estado</strong> y crea institutos; ese ano nace <strong>Coldeportes</strong>, el <em>Instituto Colombiano del Deporte y la Recreacion</em>.",
      "La creacion de Coldeportes responde a una necesidad concreta: Colombia habia ganado la sede de los <strong>Juegos Panamericanos de Cali 1971</strong>, pero la organizacion deportiva seguia rezagada, y el instituto se plantea <strong>ordenar el sistema</strong> y preparar el pais para <strong>competir</strong> y <strong>organizar</strong>.",
      "De ese ciclo surge el uniforme naranja conocido como <strong>zapote mecanico (1971-1979)</strong>. El color se asocia al <strong>logo de Coldeportes</strong> y se extiende a diferentes disciplinas deportivas de la decada.",
      "En esa narrativa, el Estado construye <strong>identidad deportiva</strong> desde la <strong>imagen</strong> y el <strong>evento</strong>, mas que desde el <strong>bienestar social</strong> o la <strong>formacion de base</strong>."
    ],
    editorialGallery: [
      {
        url: "/1971_Pan_American_Games_logo.svg",
        caption: "Logo de los Juegos Panamericanos de Cali 1971.",
        credit: "Archivo"
      },
      {
        url: "/colombiazapote2.jpg",
        caption: "Uniforme zapote asociado al ciclo Coldeportes.",
        credit: "Archivo"
      },
      {
        url: "/periodico1971.jpg",
        caption: "Registro de prensa sobre los Panamericanos de 1971.",
        credit: "Archivo"
      }
    ],
    sources: [
      {
        label: "Carlos Lleras Restrepo (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Carlos_Lleras_Restrepo"
      },
      {
        label: "Instituto Colombiano del Deporte (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Instituto_Colombiano_del_Deporte"
      },
      {
        label: "Juegos Panamericanos 1971 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Juegos_Panamericanos_de_1971"
      },
      {
        label: "La camiseta zapote de Colombia (En una baldosa)",
        url: "https://enunabaldosa.com/2014/02/19/en-el-placard-la-camiseta-zapote-de-colombia-1971-1984/"
      },
      {
        label: "Cuando Colombia organizo los Panamericanos de 1971 (Senal Colombia)",
        url: "https://www.senalcolombia.tv/deportes/cuando-colombia-organizo-los-panamericanos-en-1971"
      }
    ],
    name_en: "Carlos Lleras Restrepo",
    shortDescription_en: "Coldeportes and the Pan American cycle.",
    paragraphs_en: [
      "In 1968, during the <strong>National Front</strong>, Carlos Lleras Restrepo drove the <strong>modernization of the State</strong> and created institutes; that year marks the birth of <strong>Coldeportes</strong>, the <em>Colombian Institute of Sports and Recreation</em>.",
      "The creation of Coldeportes responded to a concrete need: Colombia had won the bid to host the <strong>1971 Pan American Games in Cali</strong>, but its sports organization remained backward. The institute aimed to <strong>organize the system</strong> and prepare the country to <strong>compete</strong> and <strong>host</strong>.",
      "From this cycle emerged the orange uniform known as the <strong>zapote mecanico (1971-1979)</strong>. The color was associated with the <strong>Coldeportes logo</strong> and extended to various sports disciplines of the decade.",
      "Within that narrative, the State builds <strong>sports identity</strong> through <strong>image</strong> and the <strong>event</strong>, rather than through <strong>social well-being</strong> or <strong>grassroots development</strong>."
    ]
  },
  {
    id: "belisario-betancur-1983",
    year: "1983",
    termStartYear: "1982",
    termEndYear: "1986",
    name: "Belisario Betancur",
    shortDescription: "Mundial 1986, narcotráfico en el fútbol y cambio de uniforme.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Belisario_Betancur_2012.jpg/640px-Belisario_Betancur_2012.jpg",
    paragraphs: [
      "Colombia habia ganado la sede del <strong>Mundial de 1986</strong>, pero en <strong>1983</strong> el gobierno de <strong>Belisario Betancur</strong> renuncia a organizarlo. En una <em>locucion presidencial</em> se justifica la decision por <strong>costos</strong> y <strong>exigencias de la FIFA</strong> y sus socios comerciales.",
      "El episodio se convierte en un <strong>debate nacional</strong>: para muchos, Colombia fue el unico pais que <strong>rechazo un Mundial</strong>; para otros, fue una decision frente a <strong>prioridades internas</strong> en un contexto economico <em>proteccionista</em>.",
      "Durante su gobierno el ministro de Justicia, <strong>Rodrigo Lara Bonilla</strong>, se atreve a denunciar lo que era <em>vox populi</em>: la presencia de dineros del <strong>narcotráfico</strong> en equipos del futbol colombiano. En una famosa conferencia de prensa, Lara acuso a <strong>Atlético Nacional, Millonarios, Santa Fe, Deportivo Independiente Medellín, América y Deportivo Pereira</strong> de tener dineros provenientes del narcotráfico.",
      "Este fue el inicio del llamado <strong>\"segundo Dorado\"</strong> del futbol colombiano, una época en que los equipos pudieron contratar a jugadores de talla mundial gracias al dinero del narcotráfico. En 1983, <strong>Gonzalo Rodríguez Gacha</strong> aparecio en televisión admitiendo ser el tercer socio en el paquete accionario de Millonarios, aunque su fachada de ganadero se derrumbo cuando se comprobo que era miembro del Cartel de Medellín.",
      "Posteriormente, decisiones judiciales sustentaron las denuncias de Lara. <strong>Hernán Botero</strong>, uno de los principales accionistas de Nacional, fue extraditado a Estados Unidos por lavado de dinero durante este gobierno.",
      "En <strong>1985</strong> una <em>comision de notables</em> impulsa el cambio de uniforme de la <strong>Seleccion Colombia</strong>. Se mencionan nombres como <strong>Daniel Samper Pizano</strong>, <strong>Alberto Casas</strong> y <strong>Carlos Cure</strong>, y el <strong>tricolor amarillo, azul y rojo</strong> se presenta oficialmente el <strong>8 de febrero de 1985</strong> con fotos publicas.",
      "El lanzamiento queda asociado a <strong>Amparo Grisales</strong>, recordada como la primera figura en posar con la nueva camiseta, y el diseno del uniforme fue de la disenadora Maria Elvira Pardo, en un contexto donde el gobierno oscila entre <strong>control moral</strong> del futbol y <strong>uso simbolico</strong> del deporte para construir <strong>identidad nacional</strong>, mientras el narcotráfico comienza a permear las estructuras del futbol profesional."
    ],
    editorialGallery: [
      {
        url: "/amparo1.jpeg",
        caption: "Amparo Grisales con el nuevo uniforme tricolor de la Seleccion.",
        credit: "Historias Secretas"
      },
      {
        url: "/amparo2.jpeg",
        caption: "Imagen de lanzamiento del uniforme de 1985.",
        credit: "Historias Secretas"
      },
      {
        url: "/col-1985.jpeg",
        caption: "Registro visual de la presentacion del uniforme en 1985.",
        credit: "Historias Secretas"
      }
    ],
    sources: [
      {
        label: "Belisario Betancur (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Belisario_Betancur"
      },
      {
        label: "Copa Mundial 1986 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1986"
      },
      {
        label: "Rodrigo Lara Bonilla (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Rodrigo_Lara_Bonilla"
      },
      {
        label: "Influencia del narcotráfico en el fútbol colombiano (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Influencia_del_narcotr%C3%A1fico_en_el_f%C3%BAtbol_colombiano"
      },
      {
        label: "Polémica en Colombia por la relación entre el narco y el fútbol (Cosecha Roja)",
        url: "https://www.cosecharoja.org/polemica-en-colombia-por-la-relacion-entre-el-narco-y-el-futbol/"
      },
      {
        label: "Gonzalo Rodríguez Gacha, \"El Mexicano\" (Noticias Caracol)",
        url: "https://www.noticiascaracol.com/golcaracol/gonzalo-rodriguez-gacha-el-mexicano-ese-fantasma-que-paso-por-millonarios"
      },
      {
        label: "Seleccion de futbol de Colombia (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Colombia"
      }
    ],
    name_en: "Belisario Betancur",
    shortDescription_en: "1986 World Cup, narco-trafficking in football, and uniform change.",
    paragraphs_en: [
      "Colombia had won the bid for the <strong>1986 World Cup</strong>, but in <strong>1983</strong>, the government of <strong>Belisario Betancur</strong> relinquishes the right to host it. In a <em>presidential address</em>, the decision is justified by <strong>costs</strong> and <strong>FIFA's demands</strong> along with those of its commercial partners.",
      "The episode becomes a <strong>national debate</strong>: for many, Colombia was the only country to ever <strong>reject a World Cup</strong>; for others, it was a practical decision facing <strong>internal priorities</strong> within a <em>protectionist</em> economic context.",
      "During his government, the Minister of Justice, <strong>Rodrigo Lara Bonilla</strong>, dared to denounce what was <em>vox populi</em>: the presence of <strong>narco-trafficking</strong> money in Colombian football teams. In a famous press conference, Lara accused <strong>Atlético Nacional, Millonarios, Santa Fe, Deportivo Independiente Medellín, América, and Deportivo Pereira</strong> of receiving narco-funds.",
      "This marked the beginning of the so-called <strong>\"second Dorado\"</strong> of Colombian football, an era where teams could sign world-class players thanks to cartel money. In 1983, <strong>Gonzalo Rodríguez Gacha</strong> appeared on television admitting to being the third partner in Millonarios' shareholding package, although his rancher facade collapsed when he was proven to be a member of the Medellín Cartel.",
      "Subsequently, judicial decisions backed Lara's claims. <strong>Hernán Botero</strong>, a principal shareholder of Nacional, was extradited to the United States for money laundering during this administration.",
      "In <strong>1985</strong>, a <em>commission of notables</em> pushed to change the <strong>Colombian National Team's</strong> uniform. Names like <strong>Daniel Samper Pizano</strong>, <strong>Alberto Casas</strong>, and <strong>Carlos Cure</strong> are mentioned, and the <strong>tricolor yellow, blue, and red</strong> is officially presented on <strong>February 8, 1985</strong> with public photos.",
      "The launch is forever linked with <strong>Amparo Grisales</strong>, remembered as the first figure to pose wearing the new jersey, designed by Maria Elvira Pardo, in a context where the government oscillates between <strong>moral control</strong> over football and the <strong>symbolic use</strong> of sports to build <strong>national identity</strong>, just as narco-trafficking began permeating the structures of professional football."
    ]
  },
  {
    id: "virgilio-barco-1986",
    year: "1986",
    termStartYear: "1986",
    termEndYear: "1990",
    name: "Virgilio Barco",
    shortDescription: "Narcoterrorismo, fútbol y gloria en medio de la violencia.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Virgilio_Barco_Vargas.jpg/640px-Virgilio_Barco_Vargas.jpg",
    paragraphs: [
      "Virgilio Barco asume la presidencia en un contexto de <strong>crisis y violencia politica</strong>, y el relato lo presenta como un mandatario mayor, con un <strong>problema cerebrovascular</strong> que afecto su salud durante el gobierno.",
      "La conduccion politica queda marcada por el protagonismo del <strong>ministro de gobierno</strong> (hoy Interior), y en esa transicion gana relevancia <strong>Cesar Gaviria</strong> como actor clave.",
      "Durante su gobierno, el pais vivio los momentos mas criticos del <strong>narcoterrorismo</strong> relacionados con el futbol. En <strong>1988</strong>, el arbitro antioqueño <strong>Armando Perez</strong> (quien llego a ser juez de linea en la final del mundial de Italia 90) fue <strong>secuestrado</strong> en plenas finales del año. El réferi aparecio dias despues portando un mensaje \"si los arbitros siguen parcializados, seran borrados\".",
      "En <strong>diciembre de 1989</strong>, el arbitro <strong>Alvaro Ortega</strong> fue <strong>asesinado</strong> de nueve disparos en el pecho luego de oficiar como juez de linea en un partido en que <strong>Independiente Medellín</strong> y <strong>América</strong> empataron en el Atanasio Girardot.",
      "El campeonato de 1989 inicio solo hasta marzo, luego que el Gobierno exigiera de la Superintendencia de Sociedades un informe sobre el manejo financiero de los equipos. Informe que revelo irregularidades, pero que no fue obstaculo para que la pelota no se detuviera.",
      "A pesar de la violencia, esta fue la epoca de mayor gloria futbolistica: <strong>América de Cali</strong> obtuvo los títulos del 82 al 86 y tres subtítulos de Libertadores; <strong>Nacional</strong> la <strong>Copa Libertadores de América en 1989</strong>, y <strong>Millonarios</strong> las estrellas del <strong>87 y 88</strong>. Los hermanos <strong>Gilberto y Miguel Rodríguez Orejuela</strong>, fundadores del Cartel de Cali, figuraron como accionistas principales del América y fueron capturados en los años 90.",
      "La <strong>continuidad de elites politicas</strong> limita reformas de fondo mientras el futbol se mantiene como escenario simbolico de cohesion, incluso en los momentos mas oscuros del narcoterrorismo."
    ],
    editorialGallery: [
      {
        url: "https://futbolete.com/wp-content/uploads/2019/07/armstrong-y-gordon-santa-fe-america-en-el-estadio-el-campin.jpg",
        caption: "Armstrong y Gordon Santa Fe vs America en el Estadio El Campin",
        credit: "Futbolete"
      },
      {
        url: "https://www.eltiempo.com/files/article_content/uploads/2019/11/15/5d4a6a4f5a225_0.jpeg",
        caption: "Álvaro Ortega, árbitro asesinado en diciembre de 1989",
        credit: "El Tiempo - Archivo"
      }
    ],
    sources: [
      {
        label: "Virgilio Barco (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Virgilio_Barco"
      },
      {
        label: "Cesar Gaviria (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/C%C3%A9sar_Gaviria"
      },
      {
        label: "Álvaro Ortega - Wikipedia",
        url: "https://es.wikipedia.org/wiki/%C3%81lvaro_Ortega"
      },
      {
        label: "Cuando el narcotráfico asesinó a un árbitro (Infobae)",
        url: "https://www.infobae.com/america/colombia/2020/09/30/cuando-el-narcotrafico-asesino-a-un-arbitro-y-dejo-sin-campeon-al-futbol-profesional-colombiano/"
      },
      {
        label: "Polémica en Colombia por la relación entre el narco y el fútbol (Cosecha Roja)",
        url: "https://www.cosecharoja.org/polemica-en-colombia-por-la-relacion-entre-el-narco-y-el-futbol/"
      },
      {
        label: "Influencia del narcotráfico en el fútbol colombiano (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Influencia_del_narcotr%C3%A1fico_en_el_f%C3%BAtbol_colombiano"
      },
      {
        label: "Armstrong y Gordon Santa Fe vs America en el Estadio El Campin",
        url: "https://futbolete.com/wp-content/uploads/2019/07/armstrong-y-gordon-santa-fe-america-en-el-estadio-el-campin.jpg"
      },
      {
        label: "Armstrong y Gordon Santa Fe vs America en el Estadio El Campin",
        url: " https://canal1.com.co/noticias/uno-dos-tres/uno-la-relacion-que-existe-entre-el-futbol-colombiano-y-el-hombre-en-la-luna/"
      }
    ],
    name_en: "Virgilio Barco",
    shortDescription_en: "Narco-terrorism, football, and glory amid violence.",
    paragraphs_en: [
      "Virgilio Barco assumes the presidency in a context of <strong>crisis and political violence</strong>, and the accounts present him as an aging leader suffering from a <strong>cerebrovascular problem</strong> that affected his health during his tenure.",
      "Political leadership is strongly marked by the prominence of the <strong>Minister of Government</strong> (now Interior), and in that transition, <strong>Cesar Gaviria</strong> gains relevance as a key actor.",
      "During his government, the country experienced the most critical moments of <strong>narco-terrorism</strong> related to football. In <strong>1988</strong>, the Antioquian referee <strong>Armando Perez</strong> (who would become a linesman in the Italy 90 World Cup final) was <strong>kidnapped</strong> right during the year-end finals. The ref appeared days later carrying a message: \"if referees remain biased, they will be eliminated\".",
      "In <strong>December 1989</strong>, referee <strong>Alvaro Ortega</strong> was <strong>assassinated</strong> with nine shots to the chest after officiating as a linesman in a match where <strong>Independiente Medellín</strong> and <strong>América</strong> tied at the Atanasio Girardot.",
      "The 1989 championship was delayed until March, after the Government demanded a report from the Superintendency of Companies regarding the financial management of the teams. The report revealed irregularities but did not stop the ball from rolling.",
      "Despite the violence, this was the era of greatest football glory: <strong>América de Cali</strong> won titles from 82 to 86 and three Libertadores runner-ups; <strong>Nacional</strong> won the <strong>Copa Libertadores de América in 1989</strong>, and <strong>Millonarios</strong> claimed the stars of <strong>87 and 88</strong>. Brothers <strong>Gilberto and Miguel Rodríguez Orejuela</strong>, founders of the Cali Cartel, were listed as the main shareholders of América and were captured in the 90s.",
      "The <strong>continuity of political elites</strong> limited substantive reforms while football remained a symbolic arena of cohesion, even in the darkest moments of narco-terrorism."
    ]
  },
  {
    id: "cesar-gaviria-1993",
    year: "1990",
    termStartYear: "1990",
    termEndYear: "1994",
    name: "Cesar Gaviria",
    shortDescription: "El 5-0 y condecoraciones a la Seleccion.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/C%C3%A9sar_Gaviria.jpg/640px-C%C3%A9sar_Gaviria.jpg",
    paragraphs: [
      "El asesinato de <strong>Luis Carlos Galan</strong> abre el camino politico que lleva a <strong>Cesar Gaviria</strong> a la presidencia.",
      "Su gobierno impulsa la <strong>Constitucion de 1991</strong>, con un enfoque <strong>multicultural</strong> y <strong>neoliberal</strong>, pero aun <strong>centralista</strong>.",
      "La relacion con el futbol es cercana y su mandato coincide con un momento de gloria de la Seleccion: <strong>Italia 90</strong> y, sobre todo, las eliminatorias de <strong>1993</strong> que culminan con el <strong>5-0</strong> en Buenos Aires. En Copa America 1993, Colombia llega a semifinales y cae con Argentina en penales.",
      "Tras el 5-0, el presidente otorga la <strong>Cruz de Boyaca</strong> a <strong>Pacho Maturana</strong> y a los jugadores, gesto que se vuelve simbolo de cohesion nacional aunque se trata de una condecoracion por un partido y no por un titulo.",
      "Gaviria tambien interviene mediaticamente: llama a tecnicos y jugadores y sus conversaciones salen al aire en radio, y la gloria deportiva se usa para <strong>legitimar gobiernos</strong> y desplazar debates estructurales."
    ],
    editorialGallery: [
      {
        url: "/cafe-italia-90-7859805091-3314993185.jpg",
        caption: "Italia 90 como momento de auge de la Seleccion.",
        credit: "Archivo"
      },
      {
        url: "/5d405abc41280.jpeg",
        caption: "Registro visual del contexto del 5-0.",
        credit: "Archivo"
      },
      {
        url: "/655a1927480401d5270cce9f25b4821c.jpg",
        caption: "Homenajes y simbolos posteriores a la victoria.",
        credit: "Archivo"
      },
      {
        url: "/17207325130120.jpg",
        caption: "Imagen adicional del ciclo 1993-1994.",
        credit: "Archivo"
      }
    ],
    sources: [
      {
        label: "Cesar Gaviria (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/C%C3%A9sar_Gaviria"
      },
      {
        label: "La historica goleada 5-0 (Panorama Cultural)",
        url: "https://panoramacultural.com.co/ocio-y-sociedad/8829/la-historica-goleada-de-colombia-a-argentina-el-5-0-que-nadie-olvida"
      },
      {
        label: "Video 5-0 Colombia vs Argentina (YouTube)",
        url: "https://www.youtube.com/watch?v=F4Lj7CShT0E&t=119s"
      },
      {
        label: "Se cumplen 26 anos del 5-0 (El Tiempo)",
        url: "https://www.eltiempo.com/deportes/futbol-internacional/se-cumplen-26-anos-del-5-0-de-colombia-a-argentina-409110"
      },
      {
        label: "La Cruz de Boyaca y deportistas condecorados (El Tiempo)",
        url: "https://www.eltiempo.com/deportes/otros-deportes/los-deportistas-que-recibieron-la-cruz-de-boyaca-ahora-la-recibira-egan-bernal-395012"
      },
      {
        label: "Colombia vs Argentina 5-0 (Vavel)",
        url: "https://www.vavel.com/colombia/futbol-colombiano/2014/06/11/358535.html"
      }
    ],
    name_en: "Cesar Gaviria",
    shortDescription_en: "The 5-0 and honors to the National Team.",
    paragraphs_en: [
      "The assassination of <strong>Luis Carlos Galan</strong> paves the political road that brings <strong>Cesar Gaviria</strong> to the presidency.",
      "His government championed the <strong>1991 Constitution</strong>, emphasizing a <strong>multicultural</strong> and <strong>neoliberal</strong> focus, though remaining <strong>centralist</strong>.",
      "His relationship with football is close, and his term coincides with the National Team's peak glory: <strong>Italy 90</strong> and, above all, the <strong>1993 qualifiers</strong> culminating in the <strong>5-0</strong> in Buenos Aires. In the 1993 Copa America, Colombia reached the semifinals, losing to Argentina on penalties.",
      "Following the 5-0, the president awards the <strong>Cross of Boyaca</strong> to <strong>Pacho Maturana</strong> and the players, a gesture that becomes a symbol of national cohesion even though it was an honor for a single match and not a championship.",
      "Gaviria also intervenes through the media: he calls coaches and players, their conversations air on the radio, and sporting glory is used to <strong>legitimize governments</strong> and displace structural debates."
    ]
  },
  {
    id: "ernesto-samper-1994",
    year: "1994",
    termStartYear: "1994",
    termEndYear: "1998",
    name: "Ernesto Samper",
    shortDescription: "Proceso 8000 y federacion bajo presion del narco.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ernesto_Samper.jpg/640px-Ernesto_Samper.jpg",
    paragraphs: [
      "En <strong>1994</strong>, Ernesto Samper gana las elecciones frente a <strong>Andres Pastrana</strong>. La campana queda marcada por las denuncias de <strong>financiacion del cartel de Cali</strong>, lo que desemboca en el <strong>Proceso 8000</strong>.",
      "El relato vincula esa crisis politica con el futbol: en 1994 Colombia fracasa en el Mundial y se reafirma la relacion entre seleccion, dirigencia y mafias. Se afirma que la <strong>Federación Colombiana de Futbol</strong> estaba bajo la influencia del cartel.",
      "En ese contexto, <strong>Miguel Rodriguez Orejuela</strong> convoca a la Seleccion a su finca y ofrece incentivos economicos. La influencia se explica porque el presidente de la Federación era <strong>Juan Jose Bellini</strong>, señalado como testaferro del capo.",
      "Bellini es detenido en <strong>1995</strong> por sus vinculos con el cartel de Cali y por <strong>lavado de activos</strong>. Tras salir de la carcel, vuelve como asesor en el futbol y mantiene influencia en clubes y directivos.",
      "La politica deportiva queda atravesada por flujos ilegales de dinero y poder, con efectos duraderos en la institucionalidad del futbol."
    ],
    editorialGallery: [
      {
        url: "/7G5LUER3FND3VNQKIU3JDHGEHU.avif",
        caption: "Registro visual asociado al Proceso 8000.",
        credit: "Archivo"
      },
      {
        url: "/5b70bcda4d169.jpeg",
        caption: "Imagen del contexto politico y futbolero de 1994.",
        credit: "Archivo"
      },
      {
        url: "/juan-jose-belliini1.jpg",
        caption: "Juan Jose Bellini y el entorno dirigencial.",
        credit: "Archivo"
      }
    ],
    sources: [
      {
        label: "Ernesto Samper (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Ernesto_Samper"
      },
      {
        label: "Proceso 8000 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Proceso_8000"
      },
      {
        label: "Cartel de Cali (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Cartel_de_Cali"
      },
      {
        label: "El Proceso 8000 (Comision de la Verdad)",
        url: "https://www.comisiondelaverdad.co/el-proceso-8000"
      },
      {
        label: "Proceso 8000 (El Tiempo)",
        url: "https://www.eltiempo.com/noticias/proceso-8000/2"
      },
      {
        label: "Influencia del narcotrafico en el futbol colombiano (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Influencia_del_narcotr%C3%A1fico_en_el_f%C3%BAtbol_colombiano"
      },
      {
        label: "El narcotrafico en el futbol profesional colombiano (Futbolred)",
        url: "https://www.futbolred.com/futbol-colombiano/liga-aguila/el-narcotrafico-en-la-historia-del-futbol-profesional-colombiano-87039"
      },
      {
        label: "El regreso de Juan Jose Bellini (Las2orillas)",
        url: "https://www.las2orillas.co/el-regreso-de-juan-jose-bellini-el-exitoso-dirigente-que-termino-enredado-con-el-cartel-de-cali/"
      }
    ],
    name_en: "Ernesto Samper",
    shortDescription_en: "Process 8000 and a federation under narco pressure.",
    paragraphs_en: [
      "In <strong>1994</strong>, Ernesto Samper wins the elections against <strong>Andres Pastrana</strong>. The campaign is marred by allegations of <strong>funding from the Cali cartel</strong>, leading to the <strong>Process 8000</strong>.",
      "The story links this political crisis with football: in 1994, Colombia flops at the World Cup, reaffirming the relationship between the national team, the leadership, and the mafias. It is asserted that the <strong>Colombian Football Federation</strong> was heavily influenced by the cartel.",
      "In that context, <strong>Miguel Rodriguez Orejuela</strong> summons the National Team to his estate, offering economic incentives. His influence is explained by the fact that the Federation's president was <strong>Juan Jose Bellini</strong>, identified as a frontman for the kingpin.",
      "Bellini is arrested in <strong>1995</strong> for his ties to the Cali cartel and for <strong>money laundering</strong>. After leaving prison, he returns as an advisor in football, maintaining influence over clubs and executives.",
      "Sports politics is thoroughly permeated by illegal cash flows and power, with lasting effects on football's institutions."
    ]
  },
  {
    id: "andres-pastrana-2001",
    year: "1998",
    termStartYear: "1998",
    termEndYear: "2002",
    name: "Andres Pastrana",
    shortDescription: "Copa America 2001 como proyecto politico.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Andr%C3%A9s_Pastrana%2C_2009.jpg/640px-Andr%C3%A9s_Pastrana%2C_2009.jpg",
    paragraphs: [
      "El gobierno de <strong>Andres Pastrana</strong> llega en <strong>1998</strong> con la <strong>paz</strong> como objetivo central, marcado por el <strong>Caguan</strong>.",
      "Para lograrla necesitaba un simbolo que conectara con la gente, y su gran proyecto de gobierno se llamo la <strong>Copa America 2001</strong>.",
      "El relato insiste: la peleo y la lagartio; viajo a <strong>Paraguay</strong>, convencio a todo el mundo y solo no pudo convencer a los <strong>argentinos</strong> porque en ese momento el pais vivia una crisis de violencia y conflicto peor aun que la actual.",
      "En ese contexto secuestraron al vicepresidente de la <strong>Federacion Colombiana de Futbol</strong> y hubo un <strong>atentado</strong>; <strong>Argentina</strong> dijo que no venia.",
      "Finalmente se le otorgo a <strong>Colombia</strong> la <strong>Copa America</strong> y la gano: es la <strong>unica Copa America</strong> que ha ganado, aunque algunos la desdenan porque no estuvo <strong>Argentina</strong>.",
      "El titulo se obtiene con <strong>Oscar Cordoba</strong> con el arco invicto y con <strong>Victor Hugo Aristizabal</strong> como goleador de la Copa America.",
      "La final se resuelve ante <strong>Mexico</strong> <strong>1-0</strong> con gol de <strong>Ivan Ramiro Cordoba</strong>, y la celebracion deja escenas ya clasicas: Pastrana con camiseta que dice <strong>Andres Pastrana</strong>, como si no lo reconocieran, recibiendo medalla junto a <strong>Antanas Mockus</strong>, alcalde de <strong>Bogota</strong>.",
      "La imagen mas recordada es <strong>Pastrana</strong> levantando el <strong>trofeo</strong> que le pasa <strong>Ivan Ramiro Cordoba</strong>; el triunfo deportivo se convierte en el mayor logro simbolico del gobierno y en un intento por cambiar su imagen."
    ],
    editorialGallery: [
      {
        url: "/pastrana1.jpg",
        caption: "Pastrana en el entorno de la Copa America 2001.",
        credit: "Archivo"
      },
      {
        url: "/pastrana2.jpg",
        caption: "Celebracion y simbolos del titulo continental.",
        credit: "Archivo"
      },
      {
        url: "/PASTRANA3.webp",
        caption: "Pastrana y la Seleccion en el contexto del 2001.",
        credit: "Archivo"
      },
      {
        url: "/COPAMERICA1.avif",
        caption: "Registro de la Copa America 2001.",
        credit: "Archivo"
      },
      {
        url: "/pastrana5.jpg",
        caption: "Imagen adicional del ciclo Pastrana.",
        credit: "Archivo"
      }
    ],
    sources: [
      {
        label: "Andres Pastrana (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Andr%C3%A9s_Pastrana_Arango"
      },
      {
        label: "Copa America 2001 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Copa_Am%C3%A9rica_2001"
      },
      {
        label: "Copa de la Paz y Copa America 2001 (Vavel)",
        url: "https://www.vavel.com/colombia/futbol-colombiano/2015/07/29/519048-colombia-logro-ganar-la-copa-de-la-paz-pero-no-la-paz.html"
      },
      {
        label: "Conmebol cancela la Copa America 2001 (Infobae)",
        url: "https://www.infobae.com/america/colombia/2021/05/20/la-vez-que-la-conmebol-cancelo-la-copa-america-de-2001-en-colombia-organizada-por-andres-pastrana/"
      },
      {
        label: "Archivo El Tiempo sobre Copa America 2001",
        url: "https://www.eltiempo.com/archivo/documento/mam-434658"
      }
    ],
    name_en: "Andres Pastrana",
    shortDescription_en: "Copa America 2001 as a political project.",
    paragraphs_en: [
      "The government of <strong>Andres Pastrana</strong> arrived in <strong>1998</strong> with <strong>peace</strong> as its central goal, marked by the <strong>Caguán</strong> dialogues.",
      "To achieve context, he needed a symbol that connected with the people, and his major governmental project became the <strong>2001 Copa America</strong>.",
      "The narrative insists: he fought for it and lobbied relentlessly; he traveled to <strong>Paraguay</strong>, convinced everyone, and only failed to persuade the <strong>Argentines</strong> because, at that time, Colombia was experiencing a crisis of violence and conflict even worse than the current one.",
      "In that context, the vice president of the <strong>Colombian Football Federation</strong> was kidnapped and there was a <strong>terrorist attack</strong>; <strong>Argentina</strong> declared they wouldn't attend.",
      "Finally, <strong>Colombia</strong> was granted the <strong>Copa America</strong> and won it: it is the <strong>only Copa America</strong> Colombia has ever won, although some dismiss it because <strong>Argentina</strong> wasn't there.",
      "The title is secured with <strong>Oscar Cordoba</strong> maintaining a clean sheet and <strong>Victor Hugo Aristizabal</strong> as the tournament's top scorer.",
      "The final is decided against <strong>Mexico</strong> <strong>1-0</strong> with a goal by <strong>Ivan Ramiro Cordoba</strong>, and the celebration yields classic scenes: Pastrana wearing a jersey that reads <strong>Andres Pastrana</strong>, as if they wouldn't recognize him, receiving a medal alongside <strong>Antanas Mockus</strong>, mayor of <strong>Bogotá</strong>.",
      "The most iconic image is <strong>Pastrana</strong> lifting the <strong>trophy</strong> passed to him by <strong>Ivan Ramiro Cordoba</strong>; the sporting triumph becomes the government's greatest symbolic achievement and an attempt to revamp its image."
    ]
  },
  {
    id: "alvaro-uribe-2002",
    year: "2002",
    termStartYear: "2002",
    termEndYear: "2010",
    name: "Alvaro Uribe Velez",
    shortDescription: "Eventos deportivos y diplomacia futbolera.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%C3%81lvaro_Uribe_V%C3%A9lez.png/640px-%C3%81lvaro_Uribe_V%C3%A9lez.png",
    paragraphs: [
      "Se recuerdan menos imagenes de <strong>Uribe</strong> metiendose con el futbol que de <strong>Gaviria</strong>, <strong>Pastrana</strong> o <strong>Belisario</strong>, pero el relato subraya que <strong>Uribe</strong> si tuvo mucho que ver con el deporte.",
      "Durante su gestion se hicieron los <strong>Juegos Bolivarianos 2005</strong>, los <strong>Centroamericanos y del Caribe 2006</strong> y los <strong>Suramericanos 2010</strong>, todos en <strong>Medellin</strong>, con balance exitoso; aun asi, parecia que Uribe no tenia nada que ver con el futbol.",
      "La imagen clave es <strong>2010</strong>: el presidente Uribe recibiendo la camiseta del <strong>Real Madrid</strong>.",
      "La escena sugiere que quien la entrega es <strong>Florentino Perez</strong> como presidente, cuando en ese momento era el <strong>maximo accionista</strong>.",
      "El relato explica que <strong>Alvaro Uribe Velez</strong> abrio la puerta para que los negocios de la empresa <strong>Actividades de Construccion y Servicios (ACS)</strong> crecieran en Colombia; el dueno de ACS es <strong>Florentino Perez</strong>.",
      "Desde <strong>1997</strong>, cuando Uribe era gobernador de <strong>Antioquia</strong>, Florentino Perez empezo a invertir en infraestructura en el pais.",
      "Para <strong>2013</strong>, tenia una licitacion de <strong>setenta millones de euros</strong> para construir la doble calzada <strong>Conexion Pacifico Medellin-Bolombolo</strong>, la ruta <strong>Medellin-Buenaventura</strong>, una concesion por <strong>25 anos</strong> y una bolsa de <strong>mil millones de pesos</strong>.",
      "Por eso aun se ve a Uribe visitando constantemente y no solamente Uribe, tambien <strong>Pastrana</strong> y <strong>Santos</strong>; despues de Uribe vino Santos, y no es por hinchas del <strong>Real Madrid</strong> ni por corazon blanco.",
      "La razon es que <strong>Florentino Perez</strong> tiene plata en Colombia: esta metido en muchas concesiones y su empresa hace parte de un consorcio que se llama <strong>COMSA</strong> con <strong>WM</strong>, para que no lo confundan con el COMSA espanol, responsable de buena parte de las dobles calzadas del pais.",
      "En esa logica, el futbol funciona como vitrina de <strong>poder economico</strong> y relaciones, mas que como politica deportiva de base."
    ],
    editorialGallery: [
      {
        url: "/alvaro-uribe-sorprende-al-referirse-al-real-madrid-y-su-decimoquinta-champions-league.jpg",
        caption: "Florentino Perez entrega la camiseta del Real Madrid a Alvaro Uribe.",
        credit: "Archivo"
      }
    ],
    sources: [
      {
        label: "Alvaro Uribe (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/%C3%81lvaro_Uribe_V%C3%A9lez"
      },
      {
        label: "Juegos Bolivarianos 2005 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Juegos_Bolivarianos_de_2005"
      },
      {
        label: "Juegos Centroamericanos 2006 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Juegos_Centroamericanos_y_del_Caribe_de_2006"
      },
      {
        label: "Juegos Suramericanos 2010 (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Juegos_Suramericanos_de_2010"
      },
      {
        label: "Florentino Perez (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Florentino_P%C3%A9rez"
      },
      {
        label: "ACS (empresa) (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/ACS_(empresa)"
      }
    ],
    name_en: "Alvaro Uribe Velez",
    shortDescription_en: "Sporting events and football diplomacy.",
    paragraphs_en: [
      "Fewer images are remembered of <strong>Uribe</strong> dealing directly with football than of <strong>Gaviria</strong>, <strong>Pastrana</strong>, or <strong>Belisario</strong>, but the narrative stresses that <strong>Uribe</strong> indeed had much to do with sports.",
      "During his administration, the <strong>2005 Bolivarian Games</strong>, the <strong>2006 Central American and Caribbean Games</strong>, and the <strong>2010 South American Games</strong> were held, all in <strong>Medellín</strong>, with successful outcomes; yet, it seemed Uribe had nothing to do with football.",
      "The key image is from <strong>2010</strong>: President Uribe receiving a <strong>Real Madrid</strong> jersey.",
      "The scene suggests the one handing it over is <strong>Florentino Perez</strong> as president, when at that time he was merely the <strong>largest shareholder</strong>.",
      "The story explains that <strong>Alvaro Uribe Velez</strong> opened the door for the businesses of the company <strong>Actividades de Construcción y Servicios (ACS)</strong> to grow in Colombia; the owner of ACS is <strong>Florentino Perez</strong>.",
      "Since <strong>1997</strong>, when Uribe was governor of <strong>Antioquia</strong>, Florentino Perez began investing in infrastructure in the country.",
      "By <strong>2013</strong>, he held a <strong>seventy-million euro</strong> contract to build the <strong>Medellín-Bolombolo Pacific Connection</strong> dual carriageway and the <strong>Medellín-Buenaventura</strong> route, a <strong>25-year concession</strong> with a budget of <strong>one billion pesos</strong>.",
      "That is why Uribe is still seen constantly visiting, and not only Uribe, but also <strong>Pastrana</strong> and <strong>Santos</strong>. After Uribe came Santos, and it's not because they are <strong>Real Madrid</strong> fans or have a white heart.",
      "The reason is that <strong>Florentino Perez</strong> has money in Colombia: he is involved in many concessions and his company is part of a consortium called <strong>COMSA</strong> with <strong>WM</strong> (so it is not confused with the Spanish COMSA) responsible for a large part of the country's major highways.",
      "In this logic, football serves as a showcase for <strong>economic power</strong> and relationships, rather than a grassroots sports policy."
    ]
  },
  {
    id: "juan-manuel-santos-2011",
    year: "2010",
    termStartYear: "2010",
    termEndYear: "2018",
    name: "Juan Manuel Santos",
    shortDescription: "Mundial Sub-20, crisis del Bolillo y llegada de Pekerman.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Juan_Manuel_Santos_and_Lula_%28cropped%29.jpg/640px-Juan_Manuel_Santos_and_Lula_%28cropped%29.jpg",
    paragraphs: [
      "La foto fue con <strong>Ramon Calderon</strong>, pero el relato subraya que el socio mayoritario ya era <strong>Florentino Perez</strong>.",
      "El proceso entre <strong>Santos</strong> y el futbol se describe como especialmente revelador, mas alla de la correlación con los negocios de Florentino.",
      "En <strong>2011</strong>, con Santos en la presidencia, Colombia fue anfitriona del <strong>Mundial Juvenil Sub-20</strong>; la foto de ese año muestra a Santos junto a <strong>Seth Blatter</strong> y <strong>Luis Bedoya</strong>, protagonistas del <strong>FIFA Gate</strong>.",
      "Ese encuentro fue en <strong>El Campin</strong> y en ese Mundial Colombia se quedo pronto.",
      "El 2011 deja otra crisis: la eliminación del Sub-20 y el escandalo de violencia de genero del <strong>Bolillo</strong>.",
      "Tras ese episodio, Santos llama a <strong>Luis Bedoya</strong> y plantea la necesidad de un tecnico serio; mueve fichas políticas y billetera para traer a <strong>Nestor Pekerman</strong>, con recursos que llegan a las federaciones y no solo al futbol.",
      "La era <strong>Pekerman</strong> se atribuye a Santos: presiona y convence para su llegada y luego intenta mantenerlo cuando <strong>Jesurum</strong> busca sacarlo tras la salida de Bedoya.",
      "Ese pulso termina con el cierre del gobierno Santos en <strong>2018</strong>, cuando llega el gobierno de <strong>Ivan Duque</strong>, el mejor cabeceador de veintiuna que se ha sentado en la Casa de Narino."
    ],
    editorialGallery: [
      {
        url: "https://www.semana.com/resizer/v2/BNM7NXPEIFC7BKC6IWVQBCU4TM.jpg?smart=true&auth=382403f02a95e2467de929b1f49998c264ae6e24cff417e99e0206da945ff289&width=980&height=551",
        caption: "En julio de 2011, el presidente Juan Manuel Santos inauguró en el Estadio El Campín de Bogotá el mundial juvenil. En la imagen con el entonces presidente de la Fifa, Seph Blatter, y el de la Fedefútbol Luis Bedoya. Foto: Juan Carlos Sierra",
        credit: "Semana"
      },
      {
        url: "https://media.gettyimages.com/id/121591179/es/foto/bogota-colombia-fifa-president-joseph-s-blatter-shakes-hands-with-colombian-president-juan.jpg?s=2048x2048&w=gi&k=20&c=pWAZS61wRej-Lcfecz8aJ2CqX3zAqL4hhayu8vHUQmY=",
        caption: "Juan Manuel Santos con Joseph Blatter",
        credit: "Getty Images"
      },
      {
        url: "http://media.cubadebate.cu/wp-content/uploads/2012/04/futbol-evo-santos5-580x453.jpg",
        caption: "Juan Manuel Santos con Joseph Blatter",
        credit: "Cuba Debate"
      },
      {
        url: "https://www.eje21.com.co/site/wp-content/uploads/2018/05/Santos-condecora-a-Pekerman.jpg",
        caption: "La Selección Colombiana de Fútbol, con el ‘Profe’ José Pekerman a la cabeza, llegó este jueves a la Casa de Nariño para recibir el Tricolor Nacional de manos del Presidente Santos, antes de viajar al Mundial de Rusia 2018.",
        credit: "Eje 21"
      }
    ],
    sources: [
      {
        label: "Semana -“Que no nos vuelva a suceder esa vergüenza”: Santos sobre Luis Bedoya ",
        url: "https://www.semana.com/nacion/articulo/juan-manuel-santos-califica-de-verguenza-situacion-de-bedoya/472550/"
      },
      {
        label: "Santos condecora a Pekerman con la Cruz de Boyacá y abandera a Colombia",
        url: "https://www.eje21.com.co/2018/05/santos-condecora-a-pekerman-con-la-cruz-de-boyaca-y-abandera-a-colombia/"
      }
    ],
    name_en: "Juan Manuel Santos",
    shortDescription_en: "U-20 World Cup, Bolillo's crisis, and Pekerman's arrival.",
    paragraphs_en: [
      "The photo was taken with <strong>Ramon Calderon</strong>, but the story underscores that the majority partner was already <strong>Florentino Perez</strong>.",
      "The dynamic between <strong>Santos</strong> and football is described as especially revealing, beyond the correlation with Florentino's businesses.",
      "In <strong>2011</strong>, with Santos occupying the presidency, Colombia hosted the <strong>U-20 Youth World Cup</strong>; the photo from that year shows Santos alongside <strong>Sepp Blatter</strong> and <strong>Luis Bedoya</strong>, protagonists of the <strong>FIFA Gate</strong> scandal.",
      "That meeting took place in <strong>El Campin</strong>, and Colombia exited early from that tournament.",
      "The year 2011 leaves another crisis: the elimination of the U-20 team and the gender violence scandal involving <strong>Bolillo</strong>.",
      "Following that episode, Santos contacted <strong>Luis Bedoya</strong>, stressing the need for a serious coach. He pulled political and financial strings to bring in <strong>Nestor Pekerman</strong>, moving resources into federation coffers, not just into football itself.",
      "The <strong>Pekerman</strong> era is attributed to Santos: he pressured and brokered his arrival, and later sought to retain him when <strong>Jesurum</strong> tried to oust him after Bedoya's departure.",
      "That tug-of-war ended alongside the Santos administration in <strong>2018</strong>, handing governance to <strong>Ivan Duque</strong>, dubbed the finest user of the \"21 header keepie-uppies\" ever to sit in the Casa de Nariño."
    ]
  },
  {
    id: "ivan-duque-2018",
    year: "2018",
    termStartYear: "2018",
    termEndYear: "2022",
    name: "Ivan Duque",
    shortDescription: "Cabecitas, FIFA Gate y un cierre de investigaciones.",
    image: "https://static01.nyt.com/images/2021/08/30/world/30colombia-duque-1-esp-1/30colombia-duque-1-superJumbo.jpg",
    paragraphs: [
      "La imagen publica de <strong>Ivan Duque</strong> se puebla de cabecitas: fotos con el <strong>Real Madrid</strong>, con <strong>Suso el Pazpi</strong>, en una escuela o en cualquier escenario.",
      "El relato insiste en que Duque no podia ver un balon sin mostrar que era capaz de dormirla en la cabeza, una obsesion rara en su puesta en escena.",
      "Se le califica como un “imbarroquin” y se le disputa un lugar entre los peores presidentes; Marroquin aparece como antecedente, pero Duque, el aprendiz, queda como caso extremo.",
      "Mas alla de las cabecitas, se afirma que desperdicio una posibilidad historica: el <strong>FIFA Gate</strong> de <strong>2015</strong> abrio la puerta para que los gobiernos intervinieran un futbol visto como corrupto.",
      "Duque comenzo pretendiendo controlarlo con el <strong>Ministerio del Deporte</strong>, con <strong>Lucena</strong>, y pidiendo la cabeza de <strong>Ramon Jesurum</strong>, senalado como organizador de un cartel de reventa de loterias.",
      "Hoy Duque hace parte de la Junta de la <strong>Fundacion FIFA</strong>.",
      "En los ultimos veintiun dias de su gobierno, Duque recibe a <strong>Gianni Infantino</strong>, presidente de la FIFA.",
      "La cercania se explica por <strong>Ramon Jesurum</strong>: habia colado una ficha en el comite de etica y el voto decisivo de <strong>Maria Clara Rojas</strong> evito la salida de Infantino; por eso, se dice, Infantino le debe el puesto y el sombrero.",
      "Con Jesurum al borde, por el cartel de reventa de boleteria, el caso de <strong>Acolfutpro</strong> en el <strong>Ministerio del Trabajo</strong> y procesos en la <strong>SIC</strong>, la visita de Infantino abre un giro.",
      "Primero, la <strong>Superintendencia de Industria y Comercio</strong> deja quietas las investigaciones por vetos a futbolistas y cartelizacion de la Liga Femenina.",
      "Segundo, el <strong>Ministerio del Trabajo</strong> cierra el caso sobre derechos laborales de futbolistas; el jefe directo del ministerio es el presidente.",
      "Tercero, Duque entrega el poder y a los 15 dias termina con Infantino; hoy juega futbol con viejas glorias y hace sus cabecitas.",
      "La conclusion editorial es clara: meterse con el futbol puede dar votos y poder, pero casi siempre termina alineando a los gobiernos del lado del futbol."
    ],
    editorialGallery: [
      {
        url: "https://lachachara.org/wp-content/uploads/2019/06/20190405193048.jpg",
        caption: "Ernesto Lucen, Iván Duque y Ramón Jesurum"
      },
      {
        url: "https://www.infobae.com/resizer/v2/BVINHWW6VFGVRIX7UVWYSCX53A.jpg?auth=5345ad33d7d4640839b876c8f0cf101320638876d736bd209a711fd533db473e&smart=true&width=992&height=558&quality=85",
        caption: "Presidente Iván Duque festejó el título del América y Rafael Pardo le respondió",
        credit: "Infobae"
      }
    ],
    sources: [
      {
        label: "Ivan Duque (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Iv%C3%A1n_Duque_M%C3%A1rquez"
      },
      {
        label: "Caso de corrupcion en la FIFA (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Caso_de_corrupci%C3%B3n_en_la_FIFA"
      },
      {
        label: "Ministerio del Deporte (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Ministerio_del_Deporte_(Colombia)"
      },
      {
        label: "La final de la Copa América 2020 se disputará en Colombia",
        url: "https://lachachara.org/la-final-de-la-copa-america-2020-se-disputara-en-colombia/"
      },
      {
        label: "Ministerio del Trabajo reversa decisión del Gobierno Duque y ordena diálogo entre Dimayor, FCF y Acolfutpro",
        url: "https://www.infobae.com/america/colombia/2022/10/31/ministerio-del-trabajo-reversa-decision-del-gobierno-duque-y-ordena-dialogo-entre-dimayor-fcf-y-acolfutpro/"
      }
    ],
    name_en: "Ivan Duque",
    shortDescription_en: "Keepie-uppies, FIFA Gate, and an end to investigations.",
    paragraphs_en: [
      "The public image of <strong>Ivan Duque</strong> is littered with keepie-uppies (\"cabecitas\"): photos with <strong>Real Madrid</strong>, with comedian <strong>Suso el Pazpi</strong>, at a school, or anywhere else.",
      "The narrative insists that Duque couldn't spot a ball without demonstrating he could balance it on his head, an odd obsession in his public staging.",
      "He is sometimes compared to \"imbarroquin\" and competes for a spot among the worst presidents; Marroquin acts as a precedent, but Duque, the apprentice, is framed as an extreme case.",
      "Beyond the headers, it is claimed he squandered a historic opportunity: the <strong>2015 FIFA Gate</strong> opened the door for governments to intervene in a football establishment perceived as corrupt.",
      "Duque started off seeking to rein it in through the <strong>Ministry of Sports</strong> under <strong>Lucena</strong>, demanding the resignation of <strong>Ramon Jesurum</strong>, accused of running a ticket-scalping cartel.",
      "Today, Duque happens to sit on the Board of the <strong>FIFA Foundation</strong>.",
      "In the final twenty-one days of his administration, Duque hosted <strong>Gianni Infantino</strong>, the president of FIFA.",
      "The coziness is explained by <strong>Ramon Jesurum</strong>: he had placed a pawn on the ethics committee, and the deciding vote of <strong>Maria Clara Rojas</strong> prevented Infantino's ouster; therefore, they say, Infantino owes him his position.",
      "With Jesurum on the brink—over the ticketing cartel, the <strong>Acolfutpro</strong> case in the <strong>Ministry of Labor</strong>, and the <strong>SIC</strong> processes—Infantino's visit triggered a pivotal shift.",
      "First, the <strong>Superintendency of Industry and Commerce</strong> froze its investigations into bans against footballers and the cartelization of the Women's League.",
      "Second, the <strong>Ministry of Labor</strong> closed the case regarding footballers' labor rights; the direct boss of the ministry is the president.",
      "Third, Duque hands over power and 15 days later ends up with Infantino; today he plays football with former legends and continues doing his keepie-uppies.",
      "The editorial conclusion is clear: meddling with football can yield votes and power, but it almost always ends up aligning governments with the side of the football establishment."
    ]
  },
  {
    id: "gustavo-petro-2022",
    year: "2022",
    termStartYear: "2022",
    termEndYear: "2026",
    name: "Gustavo Petro",
    shortDescription: "Divorcio con los dirigentes y disputa en TV abierta.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/01_Gustavo_Petro.jpg",
    paragraphs: [
      "El relato sostiene que <strong>Petro</strong> es el unico que esta en divorcio con los dirigentes del futbol, una rareza en esta historia.",
      "La columna afirma tener fuentes directas sobre un episodio en el <strong>Ministerio del Interior</strong>.",
      "En esa reunion, los representantes del futbol le dicen al gobierno que no los aprieten tanto porque les organizan un “fuera Petro”.",
      "Ese “fuera Petro” sale por television y lo ve todo el mundo porque la seleccion convoca a todo el pais.",
      "Es la primera vez que los dirigentes no tienen a un gobierno de su lado.",
      "Tal vez el unico que no habia estado de su lado era <strong>Belisario</strong>, que termino estando de su lado de todas formas."
    ],
    sources: [
      {
        label: "Gustavo Petro (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Gustavo_Petro"
      },
      {
        label: "Presidencia de Gustavo Petro (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Presidencia_de_Gustavo_Petro"
      }
    ],
    name_en: "Gustavo Petro",
    shortDescription_en: "Divorce from executives and an open TV dispute.",
    paragraphs_en: [
      "The story argues that <strong>Petro</strong> is the only one truly divorced from football's top executives, a rarity in this history.",
      "The column boasts direct sources recounting an episode at the <strong>Ministry of the Interior</strong>.",
      "During that meeting, football representatives warned the government not to squeeze them so hard, or they would organize an \"Out with Petro\" (\"fuera Petro\") campaign.",
      "That \"fuera Petro\" was broadcast on open television, seen by everyone because the national team draws the entire country.",
      "It is the first time the executives do not have a government squarely on their side.",
      "Perhaps the only other one not initially on their side was <strong>Belisario</strong>, who ended up falling in line anyway."
    ]
  }
];
