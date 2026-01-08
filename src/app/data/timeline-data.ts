export type TimelineSource = {
  label: string;
  url: string;
};

export type TimelineEntry = {
  id: string;
  year: string;
  name: string;
  shortDescription: string;
  image: string;
  paragraphs: string[];
  editorialImage?: {
    url: string;
    caption: string;
    credit?: string;
  };
  editorialImageAfterIndex?: number;
  sources: TimelineSource[];
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'rafael-nunez-1886',
    year: '1886',
    name: 'Rafael Nunez',
    shortDescription: 'Regeneracion, Constitucion de 1886 y beisbol en Cartagena.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Rafael_N%C3%BA%C3%B1ez%2C_ca.1885.jpg/640px-Rafael_N%C3%BA%C3%B1ez%2C_ca.1885.jpg',
    paragraphs: [
      'Este apartado no es estrictamente de futbol: sirve como antesala para entender las primeras instancias del deporte organizado en el pais.',
      'Poeta frustrado, ultimo presidente de los Estados Unidos de Colombia y primer presidente de la Republica de Colombia.',
      'En la revolucion de 1885 se le volteo a los liberales y termino gobernando con el Partido Conservador, marcando el inicio de la Regeneracion y la Constitucion de 1886.',
      'Se le atribuye la letra del Himno Nacional, como gesto cultural del nuevo orden politico.',
      'En El Cabrero, frente a su casa en Cartagena, se registra un hito del beisbol: el 20 de julio de 1897 se juega por primera vez en la ciudad, segun Raul Porto Cabrales.',
      'Porto menciona un antecedente no confirmado: en 1874 el cubano Francisco Balmaceda habria instalado un ingenio azucarero cerca de Marialabaja con un campo de beisbol para sus trabajadores.',
      'Lectura critica: la centralizacion politica favorece elites y deja periferias con menor poder de decision, mientras los deportes llegan primero a circuitos urbanos y de intercambio internacional.'
    ],
    editorialImage: {
      url: 'https://primertiempo.co/wp-content/uploads/2021/07/Historia-del-beisbol.jpg',
      caption: 'La prensa local recuerda el primer partido de beisbol en Cartagena, 1897.',
      credit: 'primertiempo.co'
    },
    editorialImageAfterIndex: 5,
    sources: [
      {
        label: 'Rafael Nunez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Rafael_N%C3%BA%C3%B1ez'
      },
      {
        label: 'Constitucion de 1886 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Constituci%C3%B3n_de_1886'
      },
      {
        label: 'Baseball in Colombia (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Baseball_in_Colombia'
      },
      {
        label: 'Hace 124 anos se jugo beisbol en Cartagena (El Universal)',
        url: 'https://www.eluniversal.com.co/cartagena/2021/07/20/hace-124-anos-se-jugo-por-primera-vez-beisbol-en-cartagena/'
      },
      {
        label: 'Memoria historica del beisbol de Bolivar y Cartagena (Scribd)',
        url: 'https://es.scribd.com/document/517296226/historia-del-beisbol'
      }
    ]
  },
  {
    id: 'miguel-antonio-caro-1892',
    year: '1892',
    name: 'Miguel Antonio Caro',
    shortDescription: 'Primer partido registrado y origen disciplinario del futbol.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Miguel_Antonio_Caro_2.jpg',
    paragraphs: [
      'Dijo una frase: Colombia solo puede ser catolica porque de lo contrario caeria en la barbarie. Es la hegemonia conservadora en su forma mas dura.',
      'Por este senor se realizo el primer partido de futbol del que hay registro en Colombia. Henry Rowan Lemly era un coronel gringo y estaba obsesionado con los metodos de entrenamiento de las universidades britanicas.',
      'En esas universidades nacieron los deportes modernos: los reglamentos del rugby, del futbol, del tenis, del criquet. Un fenomeno del siglo XIX: organizar, normalizar, civilizar los enfrentamientos.',
      'En esa reorganizacion de la nacion se crea la escuela militar. Lemly se trajo los reglamentos del futbol de Inglaterra y los aplico aca.',
      'Lo unico que tenia de futbol era que era 11 contra 11. El tipo trajo futbol, trajo gimnasia, trajo tenis. O sea, es basicamente el padre de los deportes en Colombia, una linea rarisima.',
      'Seguramente hubo unos antes. Yo soy de los que defienden la tesis de que en Puerto Colombia o en Cartagena, marinos britanicos se bajaron, inflaron una tripa de un animal, empezaron a patear la pelota y los estibadores del puerto los vieron y dijeron: ¿que es esta monda? Y asi empezo el futbol, yo estoy seguro que asi paso, pero el registro historico es ese.',
      'Junio de 1892: el vicepresidente de la republica, presidente de verdad, fue testigo de ese partido y de esa exhibicion de moderno entrenamiento. El futbol nacio oficialmente en Colombia para un presidente.'
    ],
    sources: [
      {
        label: 'Miguel Antonio Caro (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Miguel_Antonio_Caro'
      },
      {
        label: 'El primer partido de futbol en Colombia (El Malpensante)',
        url: 'https://elmalpensante.com/articulo/4005/el-primer-partido-de-futbol-en-colombia'
      },
      {
        label: 'Henry Rowan Lemly, el pionero (El Espectador)',
        url: 'https://www.elespectador.com/deportes/henry-rowan-lemly-el-pionero/'
      }
    ],
    editorialImage: {
      url: 'https://elmalpensante.com/sites/default/files/images/articulos/Primer_partido_nuevas_voces_el_malpensante.png',
      caption: 'El primer partido registrado en Colombia, segun el relato de El Malpensante.',
      credit: 'elmalpensante.com'
    }
  },
  {
    id: 'jose-manuel-marroquin-1904',
    year: '1904',
    name: 'Jose Manuel Marroquin',
    shortDescription: 'Educacion fisica como politica estatal.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Jos%C3%A9_Manuel_Marroqu%C3%ADn.jpg',
    paragraphs: [
      'El programa ubica en 1904 un decreto que reglamenta la ley de educacion y formaliza el termino educacion fisica.',
      'Se instala un marco estatal para la formacion corporal en escuelas y colegios.',
      'Lectura critica: la educacion fisica opera como tecnologia de disciplina social y control de cuerpos subalternos.'
    ],
    sources: [
      {
        label: 'Jose Manuel Marroquin (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Jos%C3%A9_Manuel_Marroqu%C3%ADn'
      },
      {
        label: 'Educacion fisica (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Educaci%C3%B3n_f%C3%ADsica'
      }
    ]
  },
  {
    id: 'carlos-e-restrepo-1912',
    year: '1912',
    name: 'Carlos Eugenio Restrepo',
    shortDescription: 'Primer campeonato: Copa Carlos E. Restrepo.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Carlos_Eugenio_Restrepo%2C_1918.jpg',
    paragraphs: [
      'Se organiza el primer campeonato de futbol del pais: la Copa Carlos E. Restrepo.',
      'El ganador fue el Polo Club de Bogota, club asociado a las elites de la epoca.',
      'Lectura critica: el futbol competitivo nace dentro de clubes sociales y reproduce jerarquias de clase.'
    ],
    sources: [
      {
        label: 'Carlos Eugenio Restrepo (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Carlos_Eugenio_Restrepo'
      },
      {
        label: 'Futbol en Colombia (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/F%C3%BAtbol_en_Colombia'
      }
    ]
  },
  {
    id: 'pedro-nel-ospina-1920s',
    year: '1922',
    name: 'Pedro Nel Ospina',
    shortDescription: 'Ley 80 y futbol de elites en canchas privadas.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg',
    paragraphs: [
      'El programa menciona fotografias del presidente posando con equipos de futbol de la alta sociedad.',
      'Se alude a escenarios como La Merced y San Bartolome de La Merced en Bogota.',
      'En 1925 se expide la Ley 80 que crea comisiones nacionales de educacion fisica, antecedente de Coldeportes.',
      'Lectura critica: la institucionalizacion del deporte se concentra en elites urbanas y no en acceso popular.'
    ],
    sources: [
      {
        label: 'Pedro Nel Ospina (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Pedro_Nel_Ospina'
      },
      {
        label: 'Instituto Colombiano del Deporte (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Instituto_Colombiano_del_Deporte'
      }
    ]
  },
  {
    id: 'miguel-abadia-1926',
    year: '1926',
    name: 'Miguel Abadia Mendez',
    shortDescription: 'Masacre de las bananeras y Juegos Nacionales.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Miguel_Abad%C3%ADa_M%C3%A9ndez.jpg',
    paragraphs: [
      'Su gobierno queda asociado a la masacre de las bananeras en 1928 y al conflicto social con empresas extranjeras.',
      'Entre 1928 y 1929 se realizan en Cali las primeras Olimpiadas Colombianas, luego Juegos Nacionales.',
      'El programa senala que el futbol lo gana el equipo del Magdalena y se pide un minuto de silencio por las victimas.',
      'Lectura critica: el deporte nacional emerge en medio de violencia estatal contra el movimiento obrero.'
    ],
    sources: [
      {
        label: 'Miguel Abadia Mendez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Miguel_Abad%C3%ADa_M%C3%A9ndez'
      },
      {
        label: 'Masacre de las bananeras (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Masacre_de_las_bananeras'
      },
      {
        label: 'Juegos Deportivos Nacionales (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Deportivos_Nacionales_de_Colombia'
      }
    ]
  },
  {
    id: 'enrique-olaya-1930',
    year: '1930',
    name: 'Enrique Olaya Herrera',
    shortDescription: 'Republica Liberal y masificacion de estadios.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Enrique_Olaya_Herrera_by_Benjam%C3%ADn_de_la_Calle_%281910%29.jpg',
    paragraphs: [
      'Con la Republica Liberal se impulsa infraestructura urbana y deportiva.',
      'Se construyen estadios emblematicos: Romelio Martinez (1934), Pascual Guerrero (1937), El Campin (1948) y Atanasio Girardot (1949).',
      'El narrador vincula este ciclo con el futbol marron y la consolidacion de clubes en los anos cuarenta.',
      'Lectura critica: la inversion deportiva se concentra en capitales regionales, profundizando desigualdad territorial.'
    ],
    sources: [
      {
        label: 'Enrique Olaya Herrera (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Enrique_Olaya_Herrera'
      },
      {
        label: 'Republica Liberal (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Rep%C3%BAblica_Liberal_(Colombia)'
      },
      {
        label: 'Estadio El Campin (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_El_Camp%C3%ADn'
      }
    ]
  },
  {
    id: 'mariano-ospina-1948',
    year: '1946',
    name: 'Mariano Ospina Perez',
    shortDescription: 'Bogotazo, Dimayor y futbol profesional.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Mariano_Ospina_P%C3%A9rez.jpg/640px-Mariano_Ospina_P%C3%A9rez.jpg',
    paragraphs: [
      'Tras el Bogotazo del 9 de abril de 1948 se imponen restricciones a la reunion social.',
      'El cine y el futbol quedan como espacios permitidos, en una lectura de pan y circo.',
      'En junio de 1948 se funda la Dimayor y en agosto inicia el campeonato profesional.',
      'Lectura critica: el futbol opera como valvula social y como nuevo mercado en medio de violencia politica.'
    ],
    sources: [
      {
        label: 'Mariano Ospina Perez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Mariano_Ospina_P%C3%A9rez'
      },
      {
        label: 'Bogotazo (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Bogotazo'
      },
      {
        label: 'Dimayor (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Divisi%C3%B3n_Mayor_del_F%C3%BAtbol_Colombiano'
      }
    ]
  },
  {
    id: 'laureano-gomez-1950',
    year: '1950',
    name: 'Laureano Gomez',
    shortDescription: 'El Dorado y futbol como espectaculo politico.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Laureano_G%C3%B3mez_%28c._1925-1926%29.jpg/640px-Laureano_G%C3%B3mez_%28c._1925-1926%29.jpg',
    paragraphs: [
      'Durante su gobierno se vive la era de El Dorado, con la llegada de figuras extranjeras.',
      'El futbol concentra la atencion publica mientras el pais enfrenta violencia politica.',
      'El narrador destaca la ironia de 1953: Laureano cae y Di Stefano se va a Espana.',
      'Lectura critica: el espectaculo deportivo funciona como cortina de humo frente a conflictos de clase.'
    ],
    sources: [
      {
        label: 'Laureano Gomez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Laureano_G%C3%B3mez'
      },
      {
        label: 'El Dorado (futbol) (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/El_Dorado_(f%C3%BAtbol)'
      }
    ]
  },
  {
    id: 'alberto-lleras-1962',
    year: '1962',
    name: 'Alberto Lleras Camargo',
    shortDescription: 'Primer Mundial y disputa simbolica en la Guerra Fria.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alberto_Lleras_Camargo%2C_Presidente_da_Col%C3%B4mbia.tif/lossy-page1-640px-Alberto_Lleras_Camargo%2C_Presidente_da_Col%C3%B4mbia.tif.jpg',
    paragraphs: [
      'Colombia clasifica por primera vez a un Mundial en 1962 con Pedernera como tecnico.',
      'El empate 4-4 con la URSS se interpreta como un simbolo politico en plena Guerra Fria.',
      'Lectura critica: el Estado se apropia de la hazana deportiva para legitimar su proyecto politico.'
    ],
    sources: [
      {
        label: 'Alberto Lleras Camargo (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Alberto_Lleras_Camargo'
      },
      {
        label: 'Copa Mundial de Futbol 1962 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1962'
      }
    ]
  },
  {
    id: 'carlos-lleras-1968',
    year: '1968',
    name: 'Carlos Lleras Restrepo',
    shortDescription: 'Coldeportes y ciclo Panamericanos.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Carlos_L._Restrepo.jpg/640px-Carlos_L._Restrepo.jpg',
    paragraphs: [
      'En 1968 se crea Coldeportes para organizar la politica deportiva nacional.',
      'El objetivo inmediato es preparar la sede de los Panamericanos de 1971 en Cali.',
      'El programa vincula este ciclo con el uniforme naranja conocido como zapote mecanico (1971-1979).',
      'Lectura critica: la identidad deportiva se construye desde el marketing estatal mas que desde el bienestar social.'
    ],
    sources: [
      {
        label: 'Carlos Lleras Restrepo (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Carlos_Lleras_Restrepo'
      },
      {
        label: 'Instituto Colombiano del Deporte (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Instituto_Colombiano_del_Deporte'
      },
      {
        label: 'Juegos Panamericanos 1971 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Panamericanos_de_1971'
      }
    ]
  },
  {
    id: 'belisario-betancur-1983',
    year: '1983',
    name: 'Belisario Betancur',
    shortDescription: 'Mundial 1986, narco y cambio de uniforme.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Belisario_Betancur_2012.jpg/640px-Belisario_Betancur_2012.jpg',
    paragraphs: [
      'Colombia habia ganado la sede del Mundial 1986, pero Betancur la rechaza en 1983.',
      'El programa relata denuncias del ministro Rodrigo Lara Bonilla sobre clubes ligados al narcotrafico.',
      'En 1985 una comision de notables presenta el uniforme tricolor de la Seleccion.',
      'Lectura critica: el Estado oscila entre control moral y uso simbolico del futbol.'
    ],
    sources: [
      {
        label: 'Belisario Betancur (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Belisario_Betancur'
      },
      {
        label: 'Copa Mundial 1986 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1986'
      },
      {
        label: 'Rodrigo Lara Bonilla (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Rodrigo_Lara_Bonilla'
      },
      {
        label: 'Seleccion de futbol de Colombia (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Colombia'
      }
    ]
  },
  {
    id: 'virgilio-barco-1986',
    year: '1986',
    name: 'Virgilio Barco',
    shortDescription: 'Transicion politica y ascenso de Cesar Gaviria.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Virgilio_Barco_Vargas.jpg/640px-Virgilio_Barco_Vargas.jpg',
    paragraphs: [
      'Virgilio Barco asume la presidencia en un contexto de crisis y violencia politica.',
      'El programa destaca el rol de Cesar Gaviria como ministro de gobierno en esta transicion.',
      'Lectura critica: la continuidad de elites politicas limita reformas de fondo sobre deporte y desigualdad.'
    ],
    sources: [
      {
        label: 'Virgilio Barco (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Virgilio_Barco'
      },
      {
        label: 'Cesar Gaviria (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/C%C3%A9sar_Gaviria'
      }
    ]
  },
  {
    id: 'cesar-gaviria-1993',
    year: '1990',
    name: 'Cesar Gaviria',
    shortDescription: 'El 5-0 y condecoraciones a la Seleccion.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/C%C3%A9sar_Gaviria.jpg/640px-C%C3%A9sar_Gaviria.jpg',
    paragraphs: [
      'Tras el 5-0 de 1993, Gaviria condecora a Pacho Maturana y a los jugadores.',
      'El gesto se vuelve simbolo de cohesion en medio de crisis sociales y violencia.',
      'Lectura critica: la gloria deportiva se usa para legitimar gobiernos y desplazar debates estructurales.'
    ],
    sources: [
      {
        label: 'Cesar Gaviria (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/C%C3%A9sar_Gaviria'
      },
      {
        label: 'Argentina 0-5 Colombia (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Argentina_0-5_Colombia'
      }
    ]
  },
  {
    id: 'ernesto-samper-1994',
    year: '1994',
    name: 'Ernesto Samper',
    shortDescription: 'Proceso 8000 y federacion bajo presion del narco.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ernesto_Samper.jpg/640px-Ernesto_Samper.jpg',
    paragraphs: [
      'Samper llega al poder en 1994 en medio del Proceso 8000.',
      'El programa afirma que la Federacion estaba bajo influencia del cartel de Cali.',
      'Lectura critica: el futbol y la politica quedan atravesados por flujos ilegales de dinero y poder.'
    ],
    sources: [
      {
        label: 'Ernesto Samper (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Ernesto_Samper'
      },
      {
        label: 'Proceso 8000 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Proceso_8000'
      },
      {
        label: 'Cartel de Cali (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Cartel_de_Cali'
      }
    ]
  },
  {
    id: 'andres-pastrana-2001',
    year: '1998',
    name: 'Andres Pastrana',
    shortDescription: 'Copa America 2001 como proyecto politico.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Andr%C3%A9s_Pastrana%2C_2009.jpg/640px-Andr%C3%A9s_Pastrana%2C_2009.jpg',
    paragraphs: [
      'Pastrana llega en 1998 con el objetivo politico de la paz.',
      'Impulsa la Copa America 2001 en medio de violencia y logra la sede para Colombia.',
      'Lectura critica: los megaeventos se usan para reconstruir legitimidad estatal y proyectar estabilidad.'
    ],
    sources: [
      {
        label: 'Andres Pastrana (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Andr%C3%A9s_Pastrana_Arango'
      },
      {
        label: 'Copa America 2001 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Copa_Am%C3%A9rica_2001'
      }
    ]
  },
  {
    id: 'alvaro-uribe-2002',
    year: '2002',
    name: 'Alvaro Uribe Velez',
    shortDescription: 'Eventos deportivos y diplomacia futbolera.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%C3%81lvaro_Uribe_V%C3%A9lez.png/640px-%C3%81lvaro_Uribe_V%C3%A9lez.png',
    paragraphs: [
      'Durante su gestion se realizan los Juegos Bolivarianos 2005, Centroamericanos 2006 y Suramericanos 2010.',
      'El programa vincula la imagen del Real Madrid con negocios de infraestructura de ACS en Colombia.',
      'Lectura critica: el futbol opera como vitrina internacional mientras persisten brechas sociales internas.'
    ],
    sources: [
      {
        label: 'Alvaro Uribe (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/%C3%81lvaro_Uribe_V%C3%A9lez'
      },
      {
        label: 'Juegos Bolivarianos 2005 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Bolivarianos_de_2005'
      },
      {
        label: 'Juegos Centroamericanos 2006 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Centroamericanos_y_del_Caribe_de_2006'
      },
      {
        label: 'Juegos Suramericanos 2010 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Suramericanos_de_2010'
      },
      {
        label: 'Florentino Perez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Florentino_P%C3%A9rez'
      },
      {
        label: 'ACS (empresa) (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/ACS_(empresa)'
      }
    ]
  },
  {
    id: 'juan-manuel-santos-2011',
    year: '2010',
    name: 'Juan Manuel Santos',
    shortDescription: 'Mundial Sub-20 y llegada de Pekerman.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Juan_Manuel_Santos_and_Lula_%28cropped%29.jpg/640px-Juan_Manuel_Santos_and_Lula_%28cropped%29.jpg',
    paragraphs: [
      'Colombia es anfitriona del Mundial Sub-20 en 2011, con actos oficiales en El Campin.',
      'Tras la crisis deportiva y el escandalo del Bolillo, Santos impulsa la llegada de Pekerman.',
      'Lectura critica: la seleccion se convierte en herramienta de cohesion nacional y legitimidad politica.'
    ],
    sources: [
      {
        label: 'Juan Manuel Santos (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juan_Manuel_Santos'
      },
      {
        label: 'Mundial Sub-20 2011 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_Sub-20_de_2011'
      },
      {
        label: 'Jose Nestor Pekerman (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Jos%C3%A9_N%C3%A9stor_P%C3%A9kerman'
      }
    ]
  },
  {
    id: 'ivan-duque-2018',
    year: '2018',
    name: 'Ivan Duque',
    shortDescription: 'FIFA Gate, Ministerio del Deporte y disputa por control.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Iv%C3%A1n_Duque%2C_oct_2021_1.1.jpg',
    paragraphs: [
      'En 2018 llega Ivan Duque y se abre el debate sobre control estatal del futbol tras el FIFA Gate.',
      'El Ministerio del Deporte surge en este ciclo como intento de reorganizar la gobernanza deportiva.',
      'Lectura critica: las reformas quedan limitadas por alianzas con elites federativas y economicas.'
    ],
    sources: [
      {
        label: 'Ivan Duque (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Iv%C3%A1n_Duque_M%C3%A1rquez'
      },
      {
        label: 'Caso de corrupcion en la FIFA (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Caso_de_corrupci%C3%B3n_en_la_FIFA'
      },
      {
        label: 'Ministerio del Deporte (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Ministerio_del_Deporte_(Colombia)'
      }
    ]
  }
];
