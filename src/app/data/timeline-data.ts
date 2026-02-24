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
    shortDescription: "Regeneración, Constitución de 1886 y la llegada del fútbol.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Rafael_N%C3%BA%C3%B1ez%2C_ca.1885.jpg/640px-Rafael_N%C3%BA%C3%B1ez%2C_ca.1885.jpg",
    paragraphs: [
      "El perfil lo presenta como poeta frustrado: Rafael Núñez fue el último presidente de los Estados Unidos de Colombia y el primero de la República de Colombia; se le atribuye la letra del Himno Nacional<sup>1</sup>.",
      "En la revolución de 1885 se le volteó a los liberales y terminó gobernando con el Partido Conservador; ese giro marca el arranque de la Regeneración y el impulso a la Constitución de 1886<sup>2</sup>.",
      "Durante la consolidación de su gobierno centralista, el país experimentó el desarrollo de importantes obras de infraestructura. A finales del siglo XIX y a principios del XX, ingenieros y marineros británicos encargados de construir redes ferroviarias (como el Ferrocarril de Bolívar y el muelle de Puerto Colombia) empezaron a practicar un deporte desconocido: el 'football'<sup>3,4</sup>.",
      "Los trabajadores locales y estibadores observaron estos partidos informales, adaptando el juego. Así, mientras Núñez moldeaba la nación desde la política, el fútbol entraba silenciosamente por los puertos del Caribe, echando raíces entre la clase obrera antes de saltar a las élites bogotanas.",
      "En El Cabrero, frente a su casa en Cartagena, se registra paralelamente un hito del béisbol: el <strong>20 de julio de 1897</strong> se juega por primera vez en la ciudad, mostrando cómo los puertos eran la principal vía de entrada del deporte moderno<sup>5</sup>."
    ],
    editorialImage: {
      url: "https://primertiempo.co/wp-content/uploads/2021/07/Historia-del-beisbol.jpg",
      caption: "La prensa local recuerda el primer partido de béisbol en Cartagena, 1897.",
      credit: "primertiempo.co",
      caption_en: "The local press remembers the first baseball game in Cartagena, 1897."
    },
    editorialGallery: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Puerto-a%C3%B1os20.jpg",
        caption: "El Muelle de Puerto Colombia (construido entre 1888 y 1893), principal puerto marítimo de la época y vía de entrada del fútbol por influencia británica.",
        credit: "Wikimedia Commons",
        caption_en: "The Puerto Colombia Pier (built between 1888 and 1893), the main seaport of the time and the gateway for football due to British influence."
      }
    ],
    editorialImageAfterIndex: 4,
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
        label: "La llegada del fútbol a Colombia (Univ. del Norte)",
        url: "https://www.uninorte.edu.co/web/grupo-prensa/noticia?articleId=14590396"
      },
      {
        label: "Muelle de Puerto Colombia (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Muelle_de_Puerto_Colombia"
      },
      {
        label: "Hace 124 años se jugó beisbol en Cartagena (El Universal)",
        url: "https://www.eluniversal.com.co/cartagena/2021/07/20/hace-124-anos-se-jugo-por-primera-vez-beisbol-en-cartagena/"
      },
      {
        label: "Memoria historica del beisbol de Bolivar y Cartagena (Scribd)",
        url: "https://es.scribd.com/document/517296226/historia-del-beisbol"
      }
    ],
    name_en: "Rafael Nuñez",
    shortDescription_en: "Regeneration, 1886 Constitution, and the arrival of football.",
    paragraphs_en: [
      "The profile presents him as a frustrated poet: Rafael Nuñez was the last president of the United States of Colombia and the first of the Republic of Colombia; he is attributed with the lyrics of the National Anthem.<sup>1</sup>",
      "In the revolution of 1885 he turned to the liberals and ended up governing with the Conservative Party; that shift marks the beginning of the Regeneration and the drive for the 1886 Constitution.<sup>2</sup>",
      "During the consolidation of his centralist government, the country experienced the development of important infrastructure works. In the late 19th and early 20th centuries, British engineers and sailors in charge of building railway networks (such as the Bolívar Railway and the Puerto Colombia pier) began to practice an unknown sport: 'football'.<sup>3,4</sup>",
      "Local workers and stevedores observed these informal matches, adapting the game. Thus, while Nuñez shaped the nation through politics, football silently entered through the Caribbean ports, taking root among the working class before jumping to the Bogota elites.",
      "In El Cabrero, in front of his house in Cartagena, a baseball milestone is recorded in parallel: on <strong>July 20, 1897</strong> it was played for the first time in the city, showing how ports were the main point of entry for modern sports.<sup>5</sup>"
    ]
  },
  {
    id: "miguel-antonio-caro-1892",
    year: "1892",
    termStartYear: "1892",
    termEndYear: "1898",
    name: "Miguel Antonio Caro",
    shortDescription: "Primer partido registrado y origen disciplinario del fútbol.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Miguel_Antonio_Caro_2.jpg",
    paragraphs: [
      "Miguel Antonio Caro dejo una frase: <strong>Colombia solo puede ser católica</strong> porque de lo contrario caería en la barbarie; la sentencia resume la <strong>hegemonía conservadora</strong> en su forma más dura<sup>1</sup>.",
      "Durante su gobierno se realizó el <strong>primer partido de fútbol</strong> del que hay registro en Colombia<sup>2</sup>. Se jugó en <strong>La Sabana de Bogotá (Escuela Militar)</strong>, estableciendo a la capital y al entorno militar como focos de origen, a pesar del mito costero. <strong>Henry Rowan Lemly</strong> era un coronel gringo obsesionado con los métodos de entrenamiento de las <strong>universidades británicas</strong>, donde nacieron los deportes modernos: reglamentos del <strong>rugby</strong>, del <strong>fútbol</strong>, del <strong>tenis</strong> y del <strong>críquet</strong><sup>3</sup>.",
      "Ese fenomeno del siglo XIX buscaba organizar, normalizar y civilizar los enfrentamientos, y en Colombia se tradujo en la reorganizacion de la nación y la creación de la <strong>escuela militar</strong>.",
      "<strong>Lemly</strong> llevó los reglamentos del fútbol de <strong>Inglaterra</strong> y los aplico en Colombia; lo único que tenía de fútbol era que era <strong>11 contra 11</strong>. Llevo fútbol, gimnasia y tenis, y queda como una línea rarísima en el origen de los deportes en el país.",
      "El relato sostiene que hubo precedentes: en <strong>Puerto Colombia</strong> o en <strong>Cartagena</strong>, marinos britanicos se bajaron, inflaron una tripa de un animal y los estibadores del puerto habrian dicho: ¿que es esta monda?, y así habría empezado el fútbol.",
      "En <strong>junio de 1892</strong>, el vicepresidente de la república, presidente de verdad, fue testigo de ese partido y de esa exhibición de moderno entrenamiento. El fútbol nació oficialmente en Colombia para un presidente<sup>4</sup>."
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
      caption: "El primer partido registrado en Colombia, según el relato de El Malpensante.",
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
      "Miguel Antonio Caro left a quote: <strong>Colombia can only be Catholic</strong> because otherwise it would fall into barbarity; the sentence summarizes the <strong>conservative hegemony</strong> in its harshest form.<sup>1</sup>",
      "During his government, the <strong>first football match</strong> in Colombia on record took place.<sup>2</sup> It was played in <strong>La Sabana de Bogotá (Military School)</strong>, establishing the capital and the military environment as foci of origin, despite the coastal myth. <strong>Henry Rowan Lemly</strong> was an American colonel obsessed with the training methods of <strong>British universities</strong>, where modern sports were born: regulations for <strong>rugby</strong>, <strong>football</strong>, <strong>tennis</strong>, and <strong>cricket</strong>.<sup>3</sup>",
      "That 19th-century phenomenon sought to organize, normalize, and civilize confrontations, and in Colombia, it translated into the reorganization of the nation and the creation of the <strong>military school</strong>.",
      "<strong>Lemly</strong> brought the football rules from <strong>England</strong> and applied them in Colombia; the only thing identifying it as football was that it was <strong>11 against 11</strong>. He brought football, gymnastics, and tennis, establishing a bizarre line in the origin of sports in the country.",
      "The story holds there were precedents: in <strong>Puerto Colombia</strong> or <strong>Cartagena</strong>, British sailors got off, inflated an animal gut, and the port stevedores supposedly said, \"What is this nonsense?\", and that's how football started.",
      "In <strong>June 1892</strong>, the vice president of the republic, the effective president, witnessed that game and that exhibition of modern training. Football officially born in Colombia for a president.<sup>4</sup>"
    ]
  },
  {
    id: "jose-manuel-marroquin-1904",
    year: "1904",
    termStartYear: "1900",
    termEndYear: "1904",
    name: "Jose Manuel Marroquin",
    shortDescription: "Educacion fisica como política estatal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Jos%C3%A9_Manuel_Marroqu%C3%ADn.jpg",
    paragraphs: [
      "Durante el gobierno de José Manuel Marroquin se estableció por primera vez en la historia del país el terminó <strong>educación fisica</strong>, en un contexto de <em>Regeneración</em> que buscaba reorganizar la nación.",
      "En <strong>1904</strong> se expidió el <strong>Decreto 419 del 3 de julio</strong>, que reglamento la Ley 39 y la ensenanza en general. En su capitulo V, parágrafo 4, se definio formalmente la educación fisica<sup>1</sup>.",
      "Los articulos 60 a 63 ordenaron correccion en el vestido, aseo riguroso y postura natural durante las lecciones. La calistenia y la gimnasia se hicieron obligatorias, y cada dos semanas se destino medio dia a paseos higienicos y recreativos.",
      "El modelo respondia al ideal de “mente sana en cuerpo sano” y tomaba como referencia las prácticas europeas, en particular las británicas, donde la educación fisica se entendia como herramienta de orden social<sup>3</sup>.",
      "Esta gimnasia reglamentada abrió la puerta a los deportes de conjunto en los años siguientes. Colegios religiosos de élite como San Bartolomé y el Colegio de la Presentación adoptaron rápidamente estas prácticas como método disciplinario durante y después de la Guerra de los Mil Días, sembrando la semilla para los futuros torneos intercolegiados."
    ],
    editorialImage: {
      url: "/leyley.png",
      caption: "Decreto 419 (1904): educación fisica como política estatal.",
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
      "In <strong>1904</strong>, <strong>Decree 419 of July 3</strong> was issued, regulating Law 39 and general teaching. In Chapter V, paragraph 4, physical education was formally defined.<sup>1</sup>",
      "Articles 60 to 63 ordered correct attire, rigorous cleanliness, and natural posture during lessons. Calisthenics and gymnastics became mandatory, and every two weeks, half a day was dedicated to hygienic and recreational walks.",
      "The model responded to the ideal of \"a sound mind in a sound body\" and took European practices as a reference, particularly British ones, where physical education was understood as a tool for social order.<sup>3</sup>"
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
      "Desde la presidencia, Carlos Eugenio Restrepo impulso la organizacion de campeonatos deportivos en un contexto donde el fútbol era practicamente una actividad de clubes sociales<sup>1</sup>.",
      "En <strong>1912</strong> se realizó el <strong>primer campeonato de fútbol del país</strong>, la <strong>Copa Carlos E. Restrepo</strong>, considerada la primera competencia estructurada del fútbol colombiano<sup>2</sup>.",
      "El torneo lo ganó el <strong>Polo Club de Bogotá</strong>, el primer equipo organizado del país. Su sede estaba en el sector que luego dio nombre al barrio El Polo, donde funcionó una de las primeras canchas de fútbol de la ciudad.",
      "Durante varios años el Polo Club domino la escena bogotana hasta ser desplazado por clubes emergentes como Bartolino y la Facultad de Medicina de la Universidad Nacional.",
      "El episodio confirma que el fútbol temprano fue un deporte de <em>élites urbanas</em>, articulado a clubes como el Polo Club y el Club Colombia, mientras surgian instituciones regionales que después se convertirian en referentes del fútbol nacional<sup>3</sup>."
    ],
    editorialImage: {
      url: "/polofc.jpg",
      caption: "Polo Club de Bogotá, campeón de la Copa Carlos E. Restrepo (1912).",
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
      "From the presidency, Carlos Eugenio Restrepo promoted the organization of sports championships in a context where football was practically an activity for social clubs.<sup>1</sup>",
      "In <strong>1912</strong>, the <strong>first football championship in the country</strong>, the <strong>Copa Carlos E. Restrepo</strong>, took place, considered the first structured competition in Colombian football.<sup>2</sup>",
      "The tournament was won by the <strong>Polo Club de Bogota</strong>, the first organized team in the country. Its headquarters were in the sector that later gave its name to the El Polo neighborhood, where one of the first football fields in the city operated.",
      "For several years, the Polo Club dominated the Bogota scene until it was displaced by emerging clubs like Bartolino and the Faculty of Medicine of the National University.",
      "The episode confirms that early football was a sport of <em>urban elites</em>, articulated around clubs like the Polo Club and Club Colombia, while regional institutions emerged that would later become national football benchmarks.<sup>3</sup>"
    ]
  },
  {
    id: "pedro-nel-ospina-1920s",
    year: "1922",
    termStartYear: "1922",
    termEndYear: "1926",
    name: "Pedro Nel Ospina",
    shortDescription: "Ley 80 y descentralización del fútbol.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg",
    paragraphs: [
      "Pedro Nel Ospina, presidente de la década de 1920, aparece retratado con equipos de fútbol de la época, con uniforme de gala, posando con clubes de la alta sociedad en la cancha de <strong>La Merced</strong>, hoy <strong>San Bartolome de La Merced</strong>.",
      "Sin embargo, su periodo también marca la descentralización del deporte, que sale de los exclusivos clubes bogotanos hacia la costa Caribe. El <strong>12 de octubre de 1924</strong> se fundó la <strong>Liga de Fútbol del Atlántico</strong>, la primera liga organizada del país.",
      "En el ámbito institucional, durante su presidencia en <strong>1925</strong> se firma la <strong>Ley 80</strong>, que crea las <em>Comisiones Nacionales de Educacion Fisica</em>, antecedente de Coldeportes y del actual Ministerio del Deporte<sup>2</sup>."
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
      },
      {
        label: "Liga de Fútbol del Atlántico (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Liga_de_f%C3%BAtbol_del_Atl%C3%A1ntico"
      }
    ],
    name_en: "Pedro Nel Ospina",
    shortDescription_en: "Law 80 and the decentralization of football.",
    paragraphs_en: [
      "Pedro Nel Ospina, president in the 1920s, is portrayed with football teams of the time in full dress uniform, posing with elite social clubs on the <strong>La Merced</strong> field, today <strong>San Bartolome de La Merced</strong>.",
      "However, his period also marks the decentralization of the sport, which moved out of exclusive Bogota clubs toward the Caribbean coast. On <strong>October 12, 1924</strong>, the <strong>Atlantico Football League</strong> was founded, the first organized league in the country.",
      "In the institutional sphere, during his presidency in <strong>1925</strong>, <strong>Law 80</strong> was signed, creating the <em>National Physical Education Commissions</em>, predecessor of Coldeportes and the current Ministry of Sports.<sup>2</sup>"
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
      "Las medidas de educación fisica impulsaron las <strong>primeras Olimpiadas Colombianas</strong>, que después se llamarian <strong>Juegos Nacionales</strong><sup>4</sup>.",
      "Estas competencias se realizaron entre <strong>diciembre de 1928</strong> y <strong>enero de 1929</strong> en Cali, ciudad que se consolida como referente olímpico y, más tarde, sede de los Panamericanos de 1971<sup>3</sup>.",
      "En fútbol no existian selecciones departamentales ni ligas formales. El equipo que represento al <strong>Magdalena</strong> fue campeón y se le reconoce como el <em>primer campeón nacional</em> de este tipo de competencias.",
      "Al regresar a Santa Marta, el equipo recibió un homenaje frente al gobernador militar <strong>Cortes Vargas</strong> y alli se pidio un minuto de silencio por las victimas de la <strong>masacre de las bananeras</strong>, un episodio que el propio Cortes Vargas había negado<sup>2</sup>.",
      "La prensa de la época registro que algunos jugadores eran familiares de victimas, y ese clima social y político acelero el fin de la hegemonía conservadora: los liberales regresaron al poder en <strong>1930</strong> con Enrique Olaya Herrera."
    ],
    editorialImage: {
      url: "/abadia.jpeg",
      caption: "Miguel Abadia Méndez en su periodo presidencial.",
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
      "The physical education measures spurred the <strong>first Colombian Olympics</strong>, which would later be called the <strong>National Games</strong>.<sup>4</sup>",
      "These competitions were held between <strong>December 1928</strong> and <strong>January 1929</strong> in Cali, a city that solidified itself as an Olympic reference and, later, host of the 1971 Pan American Games.<sup>3</sup>",
      "In football, there were no formal departmental teams or leagues. The team representing <strong>Magdalena</strong> became the champion and is recognized as the <em>first national champion</em> of such competitions.",
      "Upon returning to Santa Marta, the team received a tribute in front of the military governor <strong>Cortes Vargas</strong>, where a minute of silence was requested for the victims of the <strong>banana massacre</strong>, an episode that Cortes Vargas himself had denied.<sup>2</sup>",
      "The press of the time noted that some players were relatives of victims, and that social and political climate accelerated the end of the conservative hegemony: the liberals returned to power in <strong>1930</strong> with Enrique Olaya Herrera."
    ]
  },
  {
    id: "enrique-olaya-1930",
    year: "1930",
    termStartYear: "1930",
    termEndYear: "1934",
    name: "Enrique Olaya Herrera",
    shortDescription: "República Liberal, masificación popular y estadios.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Enrique_Olaya_Herrera_by_Benjam%C3%ADn_de_la_Calle_%281910%29.jpg",
    paragraphs: [
      "Enrique Olaya Herrera encabeza la <strong>República Liberal</strong> (1930-1945). Diferente a la hegemonía conservadora que asociaba el deporte a la élite y la disciplina militar, los liberales fomentaron el <strong>deporte masivo para la clase obrera</strong> con eventos como las Olimpiadas Nacionales de 1932 y 1935.",
      "Antes de 1930 solo existia un estadio en Colombia: el <strong>Julio Torres</strong>, luego <em>Estadio Moderno</em>, construido en Barranquilla en 1922. El resto de actividades deportivas se realizaban en canchas con tribunas improvisadas y condiciones poco seguras para el público. Con este giro político comienza la <strong>masificación del deporte</strong>.",
      "Bajo Olaya Herrera se levantan escenarios clave: el <strong>Romelio Martinez</strong> (1934)<sup>2,7</sup>, el <strong>Alfonso Lopez</strong> de la Universidad Nacional (1936)<sup>3</sup> y el <strong>Pascual Guerrero</strong> (1937)<sup>4</sup>. Con esta infraestructura se abre la etapa del llamado <em>fútbol marron</em>, aún sin profesionalismo ni campeonato unificado, pero con pagos informales y competiciones locales que dieron origen a muchos de los clubes tradicionales."
    ],
    editorialImage: {
      url: "/C6.jpg",
      caption: "Infraestructura deportiva durante la República Liberal.",
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
      "Enrique Olaya Herrera leads the <strong>Liberal Republic</strong> (1930-1945). During his government, the <strong>construction of stadiums</strong> in the country is consolidated.<sup>5</sup>",
      "Before 1930, there was only one stadium in Colombia: the <strong>Julio Torres</strong>, later the <em>Modern Stadium</em>, built in Barranquilla in 1922. All other sports activities took place on fields with makeshift grandstands and unsafe conditions for the public. With the Liberal Republic begins the <strong>massification of sports</strong>.",
      "Under Olaya Herrera, key venues are erected: the <strong>Romelio Martinez</strong> (1934)<sup>2,7</sup>, the <strong>Alfonso Lopez</strong> at the National University (1936)<sup>3</sup>, and the <strong>Pascual Guerrero</strong> (1937)<sup>4</sup>. This infrastructure opens the era of so-called <em>brown football</em>, still without professionalism or a unified championship, but with informal payments and local competitions that gave rise to many traditional clubs."
    ]
  },
  {
    id: "mariano-ospina-1948",
    year: "1946",
    termStartYear: "1946",
    termEndYear: "1950",
    name: "Mariano Ospina Perez",
    shortDescription: "Bogotazo, Dimayor y fútbol profesional.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Mariano_Ospina_P%C3%A9rez.jpg/640px-Mariano_Ospina_P%C3%A9rez.jpg",
    paragraphs: [
      "Mariano Ospina Pérez llegó al poder en <strong>1946</strong> tras vencer a <strong>Jorge Eliécer Gaitan</strong> en unas elecciones marcadas por la division liberal. Sumados, <em>Gaitan y Echandia</em> obtenian más votos que Ospina, pero por separado el candidato conservador se impuso y el partido regreso al gobierno<sup>2</sup>.",
      "El asesinato de Gaitan en <strong>1948</strong> desató el <strong>Bogotazo</strong>. La violencia se extendió por el país y en algunas regiones, como Barrancabermeja, los obreros tomaron el control por varias semanas. El episodio marco el inicio de un ciclo de venganzas y persecuciones políticas<sup>3</sup>.",
      "Tras el Bogotazo se impuso toque de queda y se prohibieron reuniones de más de dos personas. Hubo dos excepciones oficiales: <strong>cine</strong> y <strong>fútbol</strong>. En ese contexto, dirigentes como Alfonso Senior (fundador de Millonarios) se acercaron estratégicamente al gobierno conservador para garantizar que el espectáculo deportivo siguiera funcionando. Impulsaron la creación de la <strong>Dimayor</strong> en junio y el inicio del campeonato profesional en agosto de 1948<sup>4</sup>.",
      "El fútbol se consolido como espacio de reunión social en medio de la censura. La prensa, restringida por el <em>censor nacional</em>, encontro en el deporte un tema permitido para cubrir y comentar."
    ],
    editorialImage: {
      url: "/mariano_gaitan.jpeg",
      caption: "Mariano Ospina Pérez y Jorge Eliécer Gaitan en campaña.",
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
      "Mariano Ospina Perez came to power in <strong>1946</strong> after defeating <strong>Jorge Eliecer Gaitan</strong> in elections marked by liberal divisions. Together, <em>Gaitan and Echandia</em> garnered more votes than Ospina, but separately the conservative candidate prevailed, returning his party to power.<sup>2</sup>",
      "The assassination of Gaitan in <strong>1948</strong> unleashed the <strong>Bogotazo</strong>. Violence spread throughout the country, and in some regions like Barrancabermeja, workers took control for several weeks. The episode marked the beginning of a cycle of revenge and political persecution.<sup>3</sup>",
      "Following the Bogotazo, a curfew was imposed, and gatherings of more than two people were banned. There were two official exceptions: <strong>cinema</strong> and <strong>football</strong>. In that context, directors like Alfonso Senior (founder of Millonarios) strategically approached the conservative government to ensure the sports spectacle kept running. They pushed for the creation of <strong>Dimayor</strong> in June and the start of the professional championship in August 1948.<sup>4</sup>",
      "Football consolidated itself as a social gathering space amid censorship. The press, restricted by the <em>national censor</em>, found in sports a permissible topic to cover and comment on."
    ]
  },
  {
    id: "laureano-gomez-1950",
    year: "1950",
    termStartYear: "1950",
    termEndYear: "1953",
    name: "Laureano Gomez",
    shortDescription: "El Dorado y fútbol como espectáculo político.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Laureano_G%C3%B3mez_%28c._1925-1926%29.jpg/640px-Laureano_G%C3%B3mez_%28c._1925-1926%29.jpg",
    paragraphs: [
      "Laureano Gómez fue un dirigente conservador de línea dura. Habia sido senador y canciller de Mariano Ospina antes de llegar a la presidencia en <strong>1950</strong><sup>1</sup>.",
      "Su periodo coincide con la era de <em>El Dorado</em>, cuando el fútbol colombiano vive una bonanza marcada por la llegada de figuras como <strong>Adolfo Pedernera</strong> y <strong>Alfredo Di Stefano</strong>. La atención publica se desplaza hacia el espectáculo deportivo en un contexto de violencia política aguda<sup>4</sup>.",
      "El ciclo de El Dorado se explica por la ruptura institucional entre la <strong>Dimayor</strong> y la autoridad federativa (<strong>Adefutbol/FIFA</strong>), lo que permitió contratar estrellas sin el marco regular de transferencias internacionales. El resultado fue un campeonato de enorme convocatoria y una burbuja deportiva y economica<sup>5</sup>.",
      "La prensa gráfica y los semanarios de la época marcaban un crudo contraste social: en sus páginas se reportaban masacres de chusmeros en el campo, mientras a pocas páginas de diferencia se publicaban fotos de El Campín lleno a reventar. ",
      "La normalizacion internacional llega con el <strong>Pacto de Lima (1951)</strong>, que estableció condiciones para cerrar el ciclo y ordenar la devolucion de jugadores. Ese hito ocurre durante el periodo Laureano/Urdaneta<sup>3</sup>.",
      "En medio de <em>La Violencia</em>, el fútbol funcionó como <em>válvula de escape</em>; en 1953 Laureano cae, Rojas Pinilla lo tumba y la superestrella del circo, Di Stefano, se va para Espana<sup>2</sup>."
    ],
    editorialImage: {
      url: "/Millonarios-Campeon-en-1951.jpg",
      caption: "Millonarios campeón en 1951, simbolo de la era de El Dorado.",
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
      "Laureano Gomez was a hardline conservative leader. He had been a senator and chancellor under Mariano Ospina before becoming president in <strong>1950</strong>.<sup>1</sup>",
      "His term coincides with the era of <em>El Dorado</em>, when Colombian football experienced a boom marked by the arrival of stars like <strong>Adolfo Pedernera</strong> and <strong>Alfredo Di Stefano</strong>. Public attention shifted toward the sports spectacle amid acute political violence.<sup>4</sup>",
      "The El Dorado cycle is explained by the institutional rupture between <strong>Dimayor</strong> and the federative authority (<strong>Adefutbol/FIFA</strong>), allowing the signing of stars outside the regular international transfer framework. The result was a massively attended championship creating a sports and economic bubble.<sup>5</sup>",
      "The graphic press and weeklies of the time marked a stark social contrast: their pages reported massacres in the countryside, while just a few pages away, photos of a jam-packed El Campin stadium were published.",
      "International normalization came with the <strong>Lima Pact (1951)</strong>, which set conditions to end the cycle and mandate the return of players. This milestone occurs during the Laureano/Urdaneta period.<sup>3</sup>",
      "Amidst <em>The Violence</em>, football functioned as an <em>escape valve</em>; in 1953 Laureano falls, Rojas Pinilla overthrows him, and the circus superstar, Di Stefano, leaves for Spain.<sup>2</sup>"
    ]
  },
  {
    id: "gustavo-rojas-pinilla-1953",
    year: "1953",
    termStartYear: "1953",
    termEndYear: "1957",
    name: "Gustavo Rojas Pinilla",
    shortDescription: "Fin del Dorado futbolístico, amnistía y televisión.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Gurropin_tras_asumir_la_presidencia_con_un_golpe_de_estado.jpg",
    paragraphs: [
      "En <strong>1953</strong> el general Gustavo Rojas Pinilla alcanza el poder mediante golpe de Estado, poniendo fin al gobierno conservador de Laureano Gómez<sup>2</sup>.",
      "Ese mismo año termina la época conocida como <strong>\"El Dorado\"</strong> del fútbol colombiano. Tras el Pacto de Lima, los futbolistas que \"piratearon\" debían regresar a sus ligas, o en su defecto, ser transferidos legalmente a Europa, como ocurrió con <strong>Alfredo Di Stefano</strong> recalando en el Real Madrid<sup>4</sup>.",
      "Rojas Pinilla, de evidente corte populista, comprendió el poder de las masas. Al traer oficialmente la televisión a Colombia en 1954, la usó estratégicamente para transmitir grandes eventos y deportes. También intentó crear un equipo oficial propio fundando el <strong>Club Deportivo Fuerzas Armadas</strong>, que compitió brevemente pero terminó extinguiéndose.",
      "El presidente firmó una amnistía que desmovilizó a unos <strong>3.500 guerrilleros</strong> liberales que se habían alzado tras la muerte de Gaitán.",
      "Durante su dictadura, el fútbol fue promovido desde el Estado. Aunque las estrellas extranjeras se marcharon, se impulsó la construcción de nuevos escenarios y el deporte operó como herramienta clave de cohesión antes del inicio del Frente Nacional."
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
    shortDescription_en: "End of the football Dorado, amnesty, and television.",
    paragraphs_en: [
      "In <strong>1953</strong>, General Gustavo Rojas Pinilla seized power through a coup d'état, ending Laureano Gomez's conservative government.<sup>2</sup>",
      "That same year, the era known as the <strong>\"El Dorado\"</strong> of Colombian football came to an end. Following the Lima Pact, the footballers who \"pirated\" had to return to their leagues, or failing that, be legally transferred to Europe, as happened with <strong>Alfredo Di Stefano</strong> ending up at Real Madrid.<sup>4</sup>",
      "Rojas Pinilla, with an evident populist streak, understood the power of the masses. Upon officially bringing television to Colombia in 1954, he strategically used it to broadcast major events and sports. He also attempted to create his own official team by founding the <strong>Club Deportivo Fuerzas Armadas</strong>, which competed briefly before dying out.",
      "The president signed an amnesty that demobilized some <strong>3,500 liberal guerrillas</strong> who had taken up arms after Gaitan's death.",
      "During his dictatorship, football was promoted by the State. Although foreign stars departed, the construction of new venues was encouraged, and sports operated as a key cohesion tool before the beginning of the National Front."
    ]
  },
  {
    id: "alberto-lleras-1962",
    year: "1962",
    termStartYear: "1958",
    termEndYear: "1962",
    name: "Alberto Lleras Camargo",
    shortDescription: "Primer Mundial y disputa simbólica en la Guerra Fria.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alberto_Lleras_Camargo%2C_Presidente_da_Col%C3%B4mbia.tif/lossy-page1-640px-Alberto_Lleras_Camargo%2C_Presidente_da_Col%C3%B4mbia.tif.jpg",
    paragraphs: [
      "La <strong>Seleccion Colombia</strong> clasifica a su primer <strong>Mundial</strong> con <strong>Adolfo Pedernera</strong> como tecnico y figura del <em>Dorado</em><sup>2</sup>.",
      "En la eliminatoria vence a <strong>Peru</strong> y viaja a <strong>Arica</strong>, sede inicialmente asignada al rival y ciudad fronteriza entre <strong>Chile</strong> y <strong>Peru</strong>.",
      "El partido más recordado es el <strong>4-4</strong> contra la <strong>URSS</strong>, campeón de Europa: Colombia le marca cuatro goles a <strong>Lev Yashin</strong>, el mejor arquero del momento. En una época en que la sigla <strong>CCCP</strong> (Union Sovietica) era leida popularmente como <em>Con Colombia Casi Perdemos</em>, la seleccion colombiana estuvo a punto de imponerse en un encuentro que trascendio lo deportivo. En el siguiente partido, <strong>Yugoslavia</strong>, también comunista, nos derrotaria <strong>5-0</strong>, cerrando una participación marcada por el contraste entre la gesta frente a la URSS y la dura realidad contra otro bloque del Este.",
      "En plena <strong>Guerra Fria</strong>, la prensa y las caricaturas convierten el encuentro en un <strong>relato político</strong> de Colombia frente al comunismo, y el Estado se apropia de la hazaña deportiva para reforzar su proyecto."
    ],
    editorialImage: {
      url: "/lleras-urrsss.png",
      caption: "Caricatura sobre el 4-4 con la URSS y la lectura política del partido.",
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
      "The <strong>Colombian National Team</strong> qualifies for its first <strong>World Cup</strong> with <strong>Adolfo Pedernera</strong>, a star from the <em>Dorado</em>, as coach.<sup>2</sup>",
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
    shortDescription: "Coldeportes y modernización deportiva.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Carlos_L._Restrepo.jpg/640px-Carlos_L._Restrepo.jpg",
    paragraphs: [
      "En 1968, en pleno <strong>Frente Nacional</strong>, Carlos Lleras Restrepo impulsa la <strong>modernización del Estado</strong> y crea distintos institutos. En ese año nace <strong>Coldeportes</strong>, el <em>Instituto Colombiano del Deporte y la Recreacion</em><sup>2</sup>.",
      "La creación de Coldeportes responde a una necesidad concreta: Colombia había ganado en 1967 la sede de los <strong>Juegos Panamericanos de Cali 1971</strong>, pero la organización deportiva nacional seguía muy rezagada, casi amateur. El instituto se plantea <strong>ordenar el sistema</strong>, brindar presupuesto estatal sostenido y preparar al país para <strong>competir</strong> y <strong>organizar</strong> eventos internacionales<sup>3,5</sup>.",
      "De este ciclo institucional, ya bajo el posterior gobierno de Pastrana, surge el célebre uniforme naranja de la Selección Colombia conocido como <strong>zapote mecanico (1971-1979)</strong>. El color se asocia directamente al <strong>logo de Coldeportes</strong> y se extiende a casi todas las disciplinas deportivas que representaban al país en esa década<sup>4</sup>.",
      "En esa narrativa, el Estado asume finalmente el control y construye una verdadera <strong>identidad deportiva estatal</strong>, apoyándose en la <strong>imagen</strong> y en los grandes <strong>eventos</strong>, centralizando el apoyo que antes dependía de ligas privadas o iniciativas aisladas."
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
    shortDescription_en: "Coldeportes and sports modernization.",
    paragraphs_en: [
      "In 1968, in the midst of the <strong>National Front</strong>, Carlos Lleras Restrepo drove the <strong>modernization of the State</strong> and created various institutes. That year, <strong>Coldeportes</strong>, the <em>Colombian Institute of Sports and Recreation</em>, was born.<sup>2</sup>",
      "The creation of Coldeportes responded to a concrete need: Colombia had won the bid to host the <strong>1971 Pan American Games in Cali</strong> in 1967, but its national sports organization remained terribly backward, almost entirely amateur. The institute aimed to <strong>organize the system</strong>, provide sustained state budgets, and prepare the country to <strong>compete</strong> and <strong>host</strong> international events.<sup>3,5</sup>",
      "From this institutional cycle, later under the Pastrana government, emerged the famous orange uniform of the Colombian National Team known as the <strong>zapote mecanico (1971-1979)</strong>. The color was directly associated with the <strong>Coldeportes logo</strong> and was extended to almost all sports disciplines representing the country in that decade.<sup>4</sup>",
      "Within that narrative, the State finally assumes control and builds a true <strong>state sports identity</strong>, relying on <strong>image</strong> and massive <strong>events</strong>, centralizing the support that previously depended on private leagues or isolated initiatives."
    ]
  },
  {
    id: "belisario-betancur-1983",
    year: "1983",
    termStartYear: "1982",
    termEndYear: "1986",
    name: "Belisario Betancur",
    shortDescription: "Renuncia al Mundial 86, Rodrigo Lara y el narcofútbol.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Belisario_Betancur_2012.jpg/640px-Belisario_Betancur_2012.jpg",
    paragraphs: [
      "En <strong>1974</strong> de la mano de Alfonso Senior, Colombia había ganado en FIFA la sede del <strong>Mundial de 1986</strong>. Pero en <strong>1983</strong> el gobierno de <strong>Belisario Betancur</strong> renuncia a organizarlo. En una dramática <em>locución presidencial</em> por televisión, justifica su histórica decisión argumentando que los <strong>costos desmedidos</strong> exigidos por la FIFA no debían pagarse en un país que requería escuelas y hospitales<sup>2</sup>.",
      "El episodio se convierte en un profundo <strong>debate nacional</strong>: para muchos, fue una vergüenza ser el único país en claudicar ante un Mundial asignado; para otros, una postura loable de dignidad nacional frente a imposiciones y <strong>prioridades internas</strong>.",
      "Durante su gobierno, el valiente ministro de Justicia, <strong>Rodrigo Lara Bonilla</strong>, se atreve a denunciar lo que en la calle ya era <em>vox populi</em>: la masiva penetración de dineros del <strong>narcotráfico</strong> en los equipos del fútbol colombiano. En una célebre conferencia de prensa, Lara acusa a equipos como <strong>Atlético Nacional, Millonarios, Santa Fe, Medellín, América y Pereira</strong> de recibir dineros sucios<sup>3,4,5</sup>.",
      "Iniciaba así el llamado <strong>\"segundo Dorado\"</strong> o <strong>narcofútbol</strong>, una época brutal donde los capos lavaban dinero, competían inflando nóminas y gozaban del favor popular en los estadios. <strong>Gonzalo Rodríguez Gacha</strong> financió a Millonarios, y <strong>Hernán Botero</strong>, histórico accionista de Nacional, se convirtió durante este cuatrienio en el primer colombiano extraditado a Estados Unidos<sup>6</sup>.",
      "Como un intento de lavar la mancha internacional tras renunciar al Mundial, en <strong>1985</strong> el periodismo (liderado por figuras como Daniel Samper Pizano) promovió enérgicamente que la Selección abandonara el color \"zapote\" para vestirse con los colores patrios. Así, la icónica camiseta <strong>tricolor (amarillo, azul y rojo)</strong> fue presentada oficialmente el <strong>8 de febrero de 1985</strong>, curiosamente modelada en su lanzamiento por la actriz <strong>Amparo Grisales</strong>, inaugurando el moderno nacionalismo futbolero colombiano<sup>7</sup>."
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
    shortDescription_en: "Rejection of the '86 World Cup, Rodrigo Lara, and narco-football.",
    paragraphs_en: [
      "In <strong>1974</strong>, through Alfonso Senior's efforts, Colombia had won FIFA's bid to host the <strong>1986 World Cup</strong>. But in <strong>1983</strong>, the government of <strong>Belisario Betancur</strong> relinquished the right to organize it. In a dramatic televised <em>presidential address</em>, he justified his historic decision by arguing that the <strong>excessive costs</strong> demanded by FIFA should not be paid in a country that needed schools and hospitals.<sup>2</sup>",
      "The episode became a profound <strong>national debate</strong>: for many, it was a shameful disgrace to be the only country to ever back down from hosting a World Cup; for others, a laudable stance of national dignity against international impositions and regarding <strong>internal priorities</strong>.",
      "During his government, the brave Minister of Justice, <strong>Rodrigo Lara Bonilla</strong>, dared to denounce what was already <em>vox populi</em> on the streets: the massive penetration of <strong>narco-trafficking</strong> money into Colombian football teams. In a famous press conference, Lara directly accused teams like <strong>Atlético Nacional, Millonarios, Santa Fe, Medellín, América, and Pereira</strong> of receiving dirty cartel money.<sup>3,4,5</sup>",
      "Thus began the so-called <strong>\"second Dorado\"</strong> or <strong>narco-football</strong>, a brutal era where mobsters laundered money, competed by inflating rosters, and enjoyed popular favor in stadiums. <strong>Gonzalo Rodríguez Gacha</strong> financed Millonarios, and <strong>Hernán Botero</strong>, a historic shareholder of Nacional, became the first Colombian extradited to the United States for money laundering during this four-year term.<sup>6</sup>",
      "As an attempt to wash away the international stain after rejecting the World Cup, in <strong>1985</strong> sports journalism (led by figures like Daniel Samper Pizano) strongly promoted that the National Team abandon the orange color to dress in the colors of the national flag. Thus, the iconic <strong>tricolor jersey (yellow, blue, and red)</strong> was officially presented on <strong>February 8, 1985</strong>, curiously modeled at its launch by actress <strong>Amparo Grisales</strong>, inaugurating modern Colombian football nationalism.<sup>7</sup>"
    ]
  },
  {
    id: "virgilio-barco-1986",
    year: "1986",
    termStartYear: "1986",
    termEndYear: "1990",
    name: "Virgilio Barco",
    shortDescription: "Narcoterrorismo, clímax de los carteles y gloria internacional.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Virgilio_Barco_Vargas.jpg/640px-Virgilio_Barco_Vargas.jpg",
    paragraphs: [
      "Virgilio Barco asume la presidencia en el contexto de mayor derramamiento de sangre por causas del <strong>narcoterrorismo</strong> en la historia del país, enfrentándose directamente a los capos tras la ola de magnicidios.",
      "Su mandato atestiguó cómo los carteles escalaron su guerra hacia la sociedad civil y también hacia las canchas de fútbol, dominando los equipos. En <strong>1988</strong>, el árbitro antioqueño <strong>Armando Pérez</strong> fue <strong>secuestrado</strong> durante 20 horas en plenas finales y dejado en libertad con un mensaje macabro de los capos a los referís: \"Si los árbitros siguen parcializados, serán borrados\"<sup>4,5</sup>.",
      "La advertencia se cumplió trágicamente. En <strong>noviembre de 1989</strong>, tras un pito polémico en Medellín donde empataron el local (DIM) y el visitante (América de Cali, de propiedad confesa del Cartel de Cali), sicarios asesinaron con nueve disparos al árbitro asistente <strong>Alvaro Ortega</strong>. Tras este asesinato, el presidente de la Dimayor y el Gobierno tomaron la decisión de <strong>suspender indefinidamente el campeonato profesional de 1989 y declararlo desierto</strong>, en un hecho inédito y triste.<sup>3</sup>",
      "Dolorosamente, este cuatrienio bañado en sangre coincidió milimétricamente con el momento de mayor gloria histórica del país a nivel de clubes y mayores gestas de la selección. En ese mismo y lúgubre <strong>1989</strong>, <strong>Atlético Nacional</strong> logró la primera <strong>Copa Libertadores de América</strong> para Colombia. A las pocas semanas, la Selección Colombia se ganaba su boleto para  Mundial de Italia 90, quebrando una racha de 28 años seguidos de frustraciones dolorosas.",
      "El fútbol se transfiguró así bajo Virgilio Barco: por un lado era la expresión máxima del triunfo frente a un pueblo anestesiado por el dolor para alegrar las almas el fin de semana, pero a la vez operó como la fachada más cínica para el lavado de dinero y la demostración de invencibilidad y medir egos entre los narcotraficantes antioqueños y caleños que desangraban al país."
    ],
    editorialGallery: [
      {
        url: "https://futbolete.com/wp-content/uploads/2019/07/armstrong-y-gordon-santa-fe-america-en-el-estadio-el-campin.jpg",
        caption: "Armstrong y Gordon Santa Fe vs América en el Estadio El Campin",
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
    shortDescription_en: "Narco-terrorism, climax of the cartels, and international glory.",
    paragraphs_en: [
      "Virgilio Barco assumes the presidency in the context of the greatest bloodbath caused by <strong>narco-terrorism</strong> in the country's history, directly confronting the capos following a wave of magnicidios.",
      "His term witnessed how the cartels escalated their war against civil society and also into football stadiums, dominating the teams. In <strong>1988</strong>, the Antioquian referee <strong>Armando Perez</strong> was <strong>kidnapped</strong> for 20 hours in the middle of the championship finals, only to be released with a macabre message from the capos to all referees: \"If referees remain biased, they will be eliminated\".<sup>4,5</sup>",
      "The warning was tragically fulfilled. In <strong>November 1989</strong>, after a controversial call in a match in Medellin where the home team (DIM) tied the visitors (América de Cali, admittedly owned by the Cali Cartel), hitmen assassinated linesman <strong>Alvaro Ortega</strong> with nine shots. Following this murder, the president of Dimayor and the government took the unheralded and sad decision to <strong>indefinitely suspend the 1989 professional championship and declare it vacant</strong>.<sup>3</sup>",
      "Painfully, this blood-soaked four-year period coincided millimeter by millimeter with the country's greatest historical sporting glory. In that very same grim year of <strong>1989</strong>, <strong>Atlético Nacional</strong> won the very first <strong>Copa Libertadores de America</strong> for Colombia. Within a few weeks, the Colombian National Team earned its ticket to the Italy 90 World Cup, breaking a streak of 28 consecutive years of painful frustrations.",
      "Football thus transfigured itself under Virgilio Barco: on one hand, it was the ultimate expression of triumph to bring joy on the weekends to a public anesthetized by grief, but at the same time, it operated as the most cynical front for money laundering and massive ego battles among the narco-criminals from Cali and Medellín who were bleeding the country dry."
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
      "El asesinato de <strong>Luis Carlos Galan</strong> abre el camino político que lleva a <strong>Cesar Gaviria</strong> a la presidencia.",
      "Su gobierno impulsa la <strong>Constitución de 1991</strong>, con un enfoque <strong>multicultural</strong> y <strong>neoliberal</strong>, pero aún <strong>centralista</strong>.",
      "La relacion con el fútbol es cercana y su mandato coincide con un momento de gloria de la Seleccion: <strong>Italia 90</strong> y, sobre todo, las eliminatorias de <strong>1993</strong> que culminan con el <strong>5-0</strong> en Buenos Aires. En Copa América 1993, Colombia llega a semifinales y cae con Argentina en penales.",
      "Tras el 5-0, el presidente otorga la <strong>Cruz de Boyaca</strong> a <strong>Pacho Maturana</strong> y a los jugadores, gesto que se vuelve simbolo de cohesión nacional aunque se trata de una condecoracion por un partido y no por un titulo.",
      "Gaviria también interviene mediaticamente: llama a tecnicos y jugadores y sus conversaciones salen al aire en radio, y la gloria deportiva se usa para <strong>legitimar gobiernos</strong> y desplazar debates estructurales."
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
      "Following the 5-0, the president awards the <strong>Cross of Boyaca</strong> to <strong>Pacho Maturana</strong> and the players, a gesture that becomes a symbol of national cohesion even though it was an honor for a single match and not a championship.<sup>5</sup>",
      "Gaviria also intervenes through the media: he calls coaches and players, their conversations air on the radio, and sporting glory is used to <strong>legitimize governments</strong> and displace structural debates."
    ]
  },
  {
    id: "ernesto-samper-1994",
    year: "1994",
    termStartYear: "1994",
    termEndYear: "1998",
    name: "Ernesto Samper",
    shortDescription: "Proceso 8000, los carteles, Bellini y la caída deportiva.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ernesto_Samper.jpg/640px-Ernesto_Samper.jpg",
    paragraphs: [
      "En <strong>1994</strong>, Ernesto Samper gana las elecciones presidenciales. Su campaña y posterior gobierno quedan totalmente marcados y deslegitimados por las pruebas de <strong>financiación del Cartel de Cali</strong> a su campaña, escándalo judicial que pasó a la historia como el <strong>Proceso 8000</strong><sup>2,4,5</sup>.",
      "Las sombras de la ilegalidad y la crisis institucional permearon el fútbol desde sus más altas esferas. Se comprobó que el Cartel de Cali, que sostenía hegemónicamente al equipo América, ejerció un control desmedido sobre la <strong>Federación Colombiana de Futbol</strong>, instaurando a sus aliados de confianza en la cúpula dirigencial<sup>6,7</sup>.",
      "El nivel de penetración corporativa de los capos sobre las estrellas era descarado: en los primeros años de los noventas, figuras de la Selección eran frecuentemente invitados a las fincas de los hermanos <strong>Rodríguez Orejuela</strong>, recibiendo premios y onerosos regalos fuera del marco legal deportivo.",
      "La podredumbre estalló oficialmente cuando el mismísimo presidente de la Federación, <strong>Juan José Bellini</strong>, hombre clave en todo este andamiaje, fue capturado en <strong>1995</strong>, acusado de ser testaferro del Cartel de Cali y juzgado por <strong>lavado de activos</strong><sup>8</sup>.",
      "Durante la presidencia de Samper, el fútbol colombiano vivió su peor resaca y caída institucional. Eliminados catastróficamente del Mundial de 1998 en primera ronda en medio de escándalos internos de los jugadores, huérfanos de recambio generacional y sumidos en procesos judiciales que espantaron a anunciantes y patrocinios limpios, ratificando el final melancólico de una época oscura."
    ],
    editorialGallery: [
      {
        url: "/7G5LUER3FND3VNQKIU3JDHGEHU.avif",
        caption: "Registro visual asociado al Proceso 8000.",
        credit: "Archivo"
      },
      {
        url: "/5b70bcda4d169.jpeg",
        caption: "Imagen del contexto político y futbolero de 1994.",
        credit: "Archivo"
      },
      {
        url: "/juan-jose-belliini1.jpg",
        caption: "Juan José Bellini y el entorno dirigencial.",
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
    shortDescription_en: "Process 8000, cartels, Bellini, and sporting decline.",
    paragraphs_en: [
      "In <strong>1994</strong>, Ernesto Samper wins the presidential elections. His campaign and subsequent government are completely marked and delegitimized by evidence of <strong>funding from the Cali Cartel</strong>, a judicial scandal that went down in history as <strong>Process 8000</strong>.<sup>2,4,5</sup>",
      "The shadows of illegality and institutional crisis permeated football from its highest echelons. It was proven that the Cali Cartel, which hegemonically supported the America team, exercised direct control over the <strong>Colombian Football Federation</strong>, installing its trusted allies in the top leadership.<sup>6,7</sup>",
      "The degree of corporate penetration by the capos over the star players was brazen: in the early nineties, National Team players were frequently invited to the estates of the <strong>Rodriguez Orejuela</strong> brothers, receiving cash prizes and extravagant gifts outside the legal sporting framework.",
      "The rot officially exploded when the very president of the Federation, <strong>Juan Jose Bellini</strong>, a key man in this dark scaffolding, was captured in <strong>1995</strong>, accused of being a frontman for the Cali Cartel and tried for <strong>money laundering</strong>.<sup>8</sup>",
      "During Samper's presidency, Colombian football experienced its worst hangover and institutional collapse. Eliminated catastrophically from the 1998 World Cup in the first round amidst internal player scandals, orphaned of a generational renewal, and submerged in judicial proceedings that scared away clean sponsors and advertising, confirming the melancholic end of a dark era."
    ]
  },
  {
    id: "andres-pastrana-2001",
    year: "1998",
    termStartYear: "1998",
    termEndYear: "2002",
    name: "Andres Pastrana",
    shortDescription: "Diálogos del Caguán y la conquista solitaria de la Copa América.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Andr%C3%A9s_Pastrana%2C_2009.jpg/640px-Andr%C3%A9s_Pastrana%2C_2009.jpg",
    paragraphs: [
      "El gobierno de <strong>Andres Pastrana</strong> inicia en <strong>1998</strong> erigiendo la búsqueda de la <strong>paz</strong> como su bandera definitiva, lo que decantó en el polémico despeje militar y los frustrados diálogos de paz en el <strong>Caguan</strong> con la guerrilla de las FARC.",
      "Agobiado por una brutal escalada de la guerra en campos y ciudades y la falta de resultados concretos, Pastrana se aferró desesperadamente a un mega evento deportivo para intentar mostrar internacionalmente una imagen de un país viable, exigiendo hasta las últimas consecuencias albergar la <strong>Copa América 2001</strong><sup>2</sup>.",
      "La realización del torneo pendió de un hilo escasas semanas antes de la inauguración debido al secuestro del vicepresidente de la <strong>Federación Colombiana de Futbol</strong>, sumado a una racha de atentados con bomba en las principales ciudades capitales organizadoras.",
      "La Conmebol llegó de hecho a cancelar temporalmente la sede. Solo el poderoso e inédito lobby diplomático (Pastrana llegó a viajar personalmente a Paraguay a exigir mantener la localía), logró revertir el fallo. Ante las amenazas reales a la delegación deportiva, <strong>Argentina</strong> y su figura emergente, Messi, se rehusaron a viajar en solidaridad, forzando la inclusión a las prisas de la selección de Honduras para no estropear el calendario<sup>3,4</sup>.",
      "Aislado del rechazo sudamericano, Colombia organizó logísticamente la Copa y, futbolísticamente dominó coronándose en Bogotá <strong>campeón invicto y sin recibir un solo gol en todo el campeonato</strong>, con un espectacular Óscar Córdoba custodiando el pórtico.",
      "La maltrecha imagen del Ejecutivo exprimió cada foto de la plataforma: ataviado despojado de protocolo con una camiseta con su nombre impreso, Pastrana entregó con sus manos la bandeja de plata al capitán Córdoba tras doblegar por la mínima diferencia de 1-0 a México en El Campín. Fue la gloria suprema del fútbol colombiano mayores en toda su historia, operando simultáneamente como el sedante masivo a un pueblo que atestiguaba en silencio y frustración la muerte clínica de un proceso de paz fallido<sup>5</sup>."
    ],
    editorialGallery: [
      {
        url: "/pastrana1.jpg",
        caption: "Pastrana en el entorno de la Copa América 2001.",
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
        caption: "Registro de la Copa América 2001.",
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
    shortDescription_en: "Caguán dialogues and the solitary conquest of the Copa America.",
    paragraphs_en: [
      "The administration of <strong>Andrés Pastrana</strong> begins in <strong>1998</strong> by elevating the pursuit of <strong>peace</strong> as its ultimate flag, leading to the controversial military demilitarization zone and frustrated peace dialogues in <strong>El Caguán</strong> with the FARC guerrillas.",
      "Overwhelmed by a brutal escalation of war in the countryside and cities, and lacking concrete results, Pastrana clung desperately to a mega sporting event to attempt to project a viable image of the country internationally, demanding at all costs to host the <strong>2001 Copa America</strong>.<sup>2</sup>",
      "The tournament's realization hung by a thread a few weeks before the opening due to the kidnapping of the vice president of the <strong>Colombian Football Federation</strong>, coupled with a string of bombings in the main host capital cities.",
      "CONMEBOL indeed temporarily canceled the hosting rights. Only powerful and unprecedented diplomatic lobbying (Pastrana traveled personally to Paraguay to demand keeping the venue) managed to reverse the ruling. Given the real threats to the sporting delegation, <strong>Argentina</strong> refused to travel in solidarity, forcing the rushed inclusion of the Honduras national team to save the schedule.<sup>3,4</sup>",
      "Isolated from South American rejection, Colombia logistically organized the Cup and dominated on the pitch, crowning itself in Bogota as the <strong>undefeated champion without conceding a single goal in the entire tournament</strong>, with a spectacular Oscar Córdoba guarding the net.",
      "The battered image of the Executive squeezed every possible photo-op from the platform: dressed informally in a jersey bearing his printed name, Pastrana personally handed the silver tray to captain Córdoba after narrowly defeating Mexico 1-0 in El Campín. It was the supreme glory of Colombian senior football in its entire history, operating simultaneously as a massive sedative for a people silently witnessing the clinical death of a failed peace process.<sup>5</sup>"
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
      "Se recuerdan menos imágenes de <strong>Uribe</strong> metiendose con el fútbol que de <strong>Gaviria</strong>, <strong>Pastrana</strong> o <strong>Belisario</strong>, pero el relato subraya que <strong>Uribe</strong> si tuvo mucho que ver con el deporte.",
      "Durante su gestion se hicieron los <strong>Juegos Bolivarianos 2005</strong><sup>2</sup>, los <strong>Centroamericanos y del Caribe 2006</strong><sup>3</sup> y los <strong>Suramericanos 2010</strong><sup>4</sup>, todos en <strong>Medellín</strong>, con balance exitoso; aún así, parecia que Uribe no tenía nada que ver con el fútbol.",
      "La imagen clave es <strong>2010</strong>: el presidente Uribe recibiendo la camiseta del <strong>Real Madrid</strong>.",
      "La escena sugiere que quien la entrega es <strong>Florentino Pérez</strong> como presidente, cuando en ese momento era el <strong>maximo accionista</strong>.",
      "El relato explica que <strong>Alvaro Uribe Velez</strong> abrio la puerta para que los negocios de la empresa <strong>Actividades de Construccion y Servicios (ACS)</strong> crecieran en Colombia; el dueno de ACS es <strong>Florentino Pérez</strong><sup>5,6</sup>.",
      "Desde <strong>1997</strong>, cuando Uribe era gobernador de <strong>Antioquia</strong>, Florentino Pérez empezo a invertir en infraestructura en el país.",
      "Para <strong>2013</strong>, tenía una licitacion de <strong>setenta millones de euros</strong> para construir la doble calzada <strong>Conexion Pacifico Medellín-Bolombolo</strong>, la ruta <strong>Medellín-Buenaventura</strong>, una concesion por <strong>25 años</strong> y una bolsa de <strong>mil millones de pesos</strong>.",
      "Por eso aún se ve a Uribe visitando constantemente y no solamente Uribe, también <strong>Pastrana</strong> y <strong>Santos</strong>; después de Uribe vino Santos, y no es por hinchas del <strong>Real Madrid</strong> ni por corazon blanco.",
      "La razon es que <strong>Florentino Pérez</strong> tiene plata en Colombia: esta metido en muchas concesiones y su empresa hace parte de un consorcio que se llama <strong>COMSA</strong> con <strong>WM</strong>, para que no lo confundan con el COMSA espanol, responsable de buena parte de las dobles calzadas del país.",
      "En esa logica, el fútbol funciona como vitrina de <strong>poder economico</strong> y relaciones, más que como política deportiva de base."
    ],
    editorialGallery: [
      {
        url: "/alvaro-uribe-sorprende-al-referirse-al-real-madrid-y-su-decimoquinta-champions-league.jpg",
        caption: "Florentino Pérez entrega la camiseta del Real Madrid a Alvaro Uribe.",
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
      "During his administration, the <strong>2005 Bolivarian Games</strong><sup>2</sup>, the <strong>2006 Central American and Caribbean Games</strong><sup>3</sup>, and the <strong>2010 South American Games</strong><sup>4</sup> were held, all in <strong>Medellín</strong>, with successful outcomes; yet, it seemed Uribe had nothing to do with football.",
      "The key image is from <strong>2010</strong>: President Uribe receiving a <strong>Real Madrid</strong> jersey.",
      "The scene suggests the one handing it over is <strong>Florentino Perez</strong> as president, when at that time he was merely the <strong>largest shareholder</strong>.",
      "The story explains that <strong>Alvaro Uribe Velez</strong> opened the door for the businesses of the company <strong>Actividades de Construcción y Servicios (ACS)</strong> to grow in Colombia; the owner of ACS is <strong>Florentino Perez</strong>.<sup>5,6</sup>",
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
    shortDescription: "Mundial Sub-20, la crisis de 'Bolillo' y la era Pékerman.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Juan_Manuel_Santos_and_Lula_%28cropped%29.jpg/640px-Juan_Manuel_Santos_and_Lula_%28cropped%29.jpg",
    paragraphs: [
      "El gobierno de <strong>Juan Manuel Santos</strong> coincide con uno de los momentos cumbres y de mayor protagonismo internacional tanto para el país (Firma del Acuerdo de Paz) como para la selección mayor de fútbol (Clasificación a Brasil 2014 y Rusia 2018).",
      "La foto inicial de su relación con la alta dirigencia ocurrió en julio de <strong>2011</strong>. Con Santos en la presidencia, Colombia ofició como anfitriona del <strong>Mundial Juvenil Sub-20</strong>. Las postales de ese año muestran a Santos inaugurando el certamen en la grama de <strong>El Campín</strong> sonriendo junto al intocable <strong>Sepp Blatter</strong> y a <strong>Luis Bedoya</strong> presidendo la Federación; años después, las cabezas de estos dos saltarían internacionalmente al ser cerebros confesos del escándalo global conocido como el <strong>FIFA Gate</strong>.",
      "Aquel 2011 dejó instalada una severa crisis deportiva y mediática: a la decepcionante eliminación prematura del seleccionado Sub-20 en casa, se sumó el repudio nacional por el inaceptable escándalo de violencia de género en un bar de Bogotá protagonizado por el entonces técnico de mayores, Hernán Darío el 'Bolillo' Gómez, lo que forzó su inmediata salida.",
      "Ante el cráter institucional y mediático, el Presidente Santos asumió personalmente un rol intervencionista inédito. Tras la salida temporal de Gómez, Santos en persona llamó a <strong>Luis Bedoya</strong> presionándolo sobre la necesidad urgente de contratar a un \"técnico de clase mundial\" que uniera al país. Movió fichas del ajedrez político, gestionó aportes empresariales privados e incrementó el presupuesto de ayudas de Coldeportes para garantizar el costoso fichaje institucional del argentino <strong>José Nestór Pékerman</strong><sup>1</sup>.",
      "La exitosa <strong>Era Pékerman</strong> (dos clasificaciones mundiales tras 16 años de sequía) quedó innegablemente adherida a la imagen de Santos: desde apadrinar pacientemente su llegada, hasta su recordada intervención a puertas cerradas tratando de proteger y retener al seleccionador en su cargo pocos días antes de acabar su gobierno, cuando <strong>Ramón Jesurún</strong> (quien reemplazó a Bedoya en el poder de la Federación tras explotar el FIFA Gate) ya maniobraba fríamente para desvincular al argentino del banquillo nacional por disputas económicas.<sup>2</sup>"
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
    shortDescription_en: "U-20 World Cup, Bolillo's crisis, and the Pékerman era.",
    paragraphs_en: [
      "The administration of <strong>Juan Manuel Santos</strong> coincides with one of the most prominent international moments both for the country (signing of the Peace Agreement) and for the senior national football team (qualifying for Brazil 2014 and Russia 2018).",
      "The initial picture of his relationship with top executives occurred in July <strong>2011</strong>. With Santos in the presidency, Colombia hosted the <strong>U-20 Youth World Cup</strong>. Postcards from that year show Santos inaugurating the tournament on the pitch of <strong>El Campín</strong>, smiling alongside the untouchable <strong>Sepp Blatter</strong> and the Federation's president <strong>Luis Bedoya</strong>; years later, both of their heads would roll internationally as confessed masterminds of the global scandal known as <strong>FIFA Gate</strong>.",
      "That year 2011 left a severe sporting and media crisis installed: besides the disappointing early, home-soil elimination of the U-20 squad, there was massive national repudiation over an unacceptable gender violence scandal in a Bogota bar perpetrated by the senior team's then-manager, Hernan Dario 'Bolillo' Gomez, forcing his immediate resignation.",
      "Facing an institutional crater, President Santos personally assumed an unprecedented interventionist role. Following Gomez's temporary exit, Santos himself called <strong>Luis Bedoya</strong> pressuring him about the urgent need to hire a \"world-class coach\" who would unite the country. He moved political chess pieces, arranged private corporate contributions, and increased Coldeportes' aid budget to guarantee the expensive institutional signing of the Argentine <strong>José Nestor Pékerman</strong>.<sup>1</sup>",
      "The successful <strong>Pékerman Era</strong> (two World Cup qualifications after a 16-year drought) remained undeniably glued to Santos's image: from patiently sponsoring his arrival to his widely-remembered closed-door intervention trying to protect and retain the manager in his post just days before leaving office, exactly when <strong>Ramon Jesurun</strong> (who took power at the Federation after Bedoya fell to FIFA Gate) was already coldly maneuvering to sever ties with the Argentine over financial disputes.<sup>2</sup>"
    ]
  },
  {
    id: "ivan-duque-2018",
    year: "2018",
    termStartYear: "2018",
    termEndYear: "2022",
    name: "Ivan Duque",
    shortDescription: "Manejo de crisis, Infantino y la pausa institucional.",
    image: "https://static01.nyt.com/images/2021/08/30/world/30colombia-duque-1-esp-1/30colombia-duque-1-superJumbo.jpg",
    paragraphs: [
      "La puesta en escena pública del presidente <strong>Iván Duque</strong> recurrió con inédita y reiterativa frecuencia al uso de las 'cabecitas'. Parecía tener una obsesión mediática por demostrar sus habilidades futbolísticas con un balón en cualquier escenario oficial; ya fuera recibiendo al campeón de la liga, inaugurando una escuela veredal o en un evento corporativo de la FIFA con el Real Madrid.",
      "Para algunos críticos que asocian el peso de ser estadista con mayor sobriedad y menos espectáculos vacíos, esta peculiar obsesión (sumado a su impopular gestión durante el estallido social de 2021) le hizo rivalizar el título nada honroso del mandato menos hábil con antecesores centenarios como Marroquín.",
      "Bajo su mandato estalló un escandaloso tsunami a nivel dirigencial sin precedentes. Por primera vez desde su fundación, la <strong>Federación Colombiana de Fútbol</strong> bajo el mando de <strong>Ramón Jesurún</strong> enfrentó durísimas investigaciones y millonarias multas impuestas por la <strong>Superintendencia de Industria y Comercio (SIC)</strong> tras destaparse el escandaloso desvío y reventa pirata de boletería para los partidos de local en las eliminatorias del Mundial Rusia 2018.<sup>3</sup>",
      "Durante la pandemia, la crisis escaló porque el recién creado <strong>Ministerio del Deporte</strong> bajo el mando de Ernesto Lucena, amenazó con solicitar la cabeza del cuestionado Ramón Jesurún para destrabar los roces inter-institucionales y permitir el retorno de la liga.",
      "Sin embargo, la historia pareció dar un giro de 180 grados. Poco antes de entregar el poder en agosto de 2022, el gobierno de Duque recibió por todo lo alto a <strong>Gianni Infantino</strong>, el nuevo presidente de la FIFA, solidificando así sus relaciones diplomáticas al más alto nivel e invistiendo al dirigente local Jesurún de mayor intocabilidad (debido a su alianza burocrática internacional en Suiza).",
      "Simultáneamente a la foto y la visita protocolar cerrando su período, investigaciones formales desde dependencias del Ejecutivo, como aquella iniciada por el <strong>Ministerio del Trabajo</strong> indagando a la FCF por la negativa de las directivas a sentarse y reconocer los derechos laborales de la agremiación de jugadores locales (<strong>Acolfutpro</strong>), entraron repentinamente en el congelador. Hoy por hoy, Duque posa relajado ostentando un cargo y un generoso sueldo desde Suiza como miembro de la junta directiva de la prestigiosa <strong>Fundación FIFA</strong>.<sup>5</sup>"
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
    shortDescription_en: "Crisis management, Infantino, and an institutional pause.",
    paragraphs_en: [
      "The public staging of President <strong>Ivan Duque</strong> frequently relied on an unprecedented and repetitive use of keepie-uppies ('cabecitas'). He seemed to possess a media obsession with demonstrating his football skills with a ball in any official setting; whether welcoming the league champion, inaugurating a rural school, or standing at a corporate FIFA event with Real Madrid.",
      "To certain critics who equate the gravitas of a statesman with more sobriety and fewer empty spectacles, this peculiar obsession (combined with his highly unpopular management during the massive 2021 social unrest) made him vie for the unhonorable title of least capable mandate alongside centennial predecessors like Marroquin.",
      "Under his administration, a scandalous and unprecedented executive-level tsunami erupted. For the first time since its foundation, the <strong>Colombian Football Federation</strong> under the leadership of <strong>Ramon Jesurun</strong> confronted severe investigations and millionaire fines imposed by the <strong>Superintendency of Industry and Commerce (SIC)</strong> after the scandalous diversion and ticket-scalping ring regarding local qualifying matches for the 2018 Russia World Cup was uncovered.<sup>3</sup>",
      "During the pandemic lockdowns, the crisis escalated because the newly created <strong>Ministry of Sports</strong> under Ernesto Lucena threatened to demand the resignation of the embattled Ramon Jesurun to resolve inter-institutional friction and allow the return of the football league.",
      "However, the story seemed to take a sharp 180-degree turn. Shortly before handing over power in August 2022, Duque's government rolled out the red carpet to receive <strong>Gianni Infantino</strong>, the new president of FIFA, thus solidifying top-level diplomatic relations and investing the local executive Jesurun with a greater aura of untouchability (due to his international bureaucratic alliance in Switzerland).",
      "Simultaneously to the group photo and protocol visit marking the end of his term, formal investigations originating from Executive departments—such as the one initiated by the <strong>Ministry of Labor</strong> scrutinizing the FCF over the executives' refusal to sit down and recognize the labor rights of the local players' union (<strong>Acolfutpro</strong>)—suddenly went into the freezer. Today, Duque poses relaxed, flaunting an office and a generous salary from Switzerland as a member of the board of directors of the prestigious <strong>FIFA Foundation</strong>.<sup>5</sup>"
    ]
  },
  {
    id: "gustavo-petro-2022",
    year: "2022",
    termStartYear: "2022",
    termEndYear: "2026",
    name: "Gustavo Petro",
    shortDescription: "El primer divorcio en 100 años con los dirigentes privados del balón.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/01_Gustavo_Petro.jpg",
    paragraphs: [
      "El relato final de esta centenaria lista lo protagoniza <strong>Gustavo Petro</strong>. El caso del primer presidente progresista del país representa una rareza mayúscula en los esquemas hegemónicos del poder: es el único inquilino de la Casa de Nariño que transita abiertamente un claro divorcio ideológico y relacional con la cúpula de la dirigencia del fútbol de casta privada y empresarial.",
      "Según reportes de periodistas especializados como Alejandro Pino Calad, la fractura llegó a instancias concretas de fricción cuando altas autoridades del fútbol se reunieron secretamente en el <strong>Ministerio del Interior</strong>. Supuestamente, los representantes privados del balón advirtieron al Ejecutivo que si incrementaban la veeduría y el control legal, las dirigencias podrían organizar campañas orquestadas como de 'Fuera Petro' en estadios que paralizan el país televisivamente.",
      "Desde el fin de la hegemonía conservadora e inicio de la violencia partidista un siglo atrás, pasando por la narco-cultura de los 80, hasta la diplomacia gerencial de corporaciones españolas recientes, los máximos dirigentes dueños del balón no habían gobernado formal y explícitamente sin el amparo, omisión cómplice o uso oportunista de parte de un Gobierno de turno en la cima del país."
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
    shortDescription_en: "The first divorce in 100 years from the private masters of football.",
    paragraphs_en: [
      "The concluding narrative of this century-old timeline is headed by <strong>Gustavo Petro</strong>. The case of the country's first progressive president represents a towering rarity within hegemonic power structures: he is the only tenant of the Casa de Nariño to openly navigate a clear ideological and relational divorce from the elite leadership of private and corporate football.",
      "According to reports from specialized journalists such as Alejandro Pino Calad, the fracture reached concrete friction points when high-ranking football authorities met secretly at the <strong>Ministry of the Interior</strong>. Allegedly, the private representatives of the game warned the Executive that if they increased oversight and legal control, the leadership could orchestrate 'Out with Petro' campaigns in the very stadiums that completely paralyze the nation's television screens.",
      "From the end of conservative hegemony and the dawn of partisan violence a century ago, through the narco-culture of the 80s, down to the corporate diplomacy of recent Spanish conglomerates, the top executives owning the ball had never formally and explicitly governed without the protection, complicit omission, or opportunistic exploitation by whatever government sat at the top of the country."
    ]
  }
];
