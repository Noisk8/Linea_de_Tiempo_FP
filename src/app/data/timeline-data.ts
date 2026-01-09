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
    termStartYear: '1886',
    termEndYear: '1894',
    name: 'Rafael Nunez',
    shortDescription: 'Regeneracion, Constitucion de 1886 y beisbol en Cartagena.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Rafael_N%C3%BA%C3%B1ez%2C_ca.1885.jpg/640px-Rafael_N%C3%BA%C3%B1ez%2C_ca.1885.jpg',
    paragraphs: [
      '<em>Este apartado no es estrictamente de futbol</em>: funciona como antesala para entender las primeras instancias del deporte organizado en el pais.',
      'Rafael Nunez fue el ultimo presidente de los Estados Unidos de Colombia y el primero de la Republica de Colombia. Su proyecto politico impulso la <strong>Regeneracion</strong>, que busco recentralizar el Estado y redefinir el pacto nacional.',
      'Tras la guerra de 1885, el nuevo orden se consolido con la <strong>Constitucion de 1886</strong>, que fortalecio el poder ejecutivo y reoriento el sistema politico hacia un esquema centralista.',
      'En el plano cultural, se le atribuye la letra del <strong>Himno Nacional</strong>, un gesto simbolico que acompano la idea de nacion unificada.',
      'En El Cabrero, frente a su casa en Cartagena, se registra un hito del beisbol: el <strong>20 de julio de 1897</strong> se juega por primera vez en la ciudad, segun Raul Porto Cabrales.',
      'Porto menciona un antecedente no confirmado: en 1874 el cubano Francisco Balmaceda habria instalado un ingenio azucarero cerca de Marialabaja con un campo de beisbol para sus trabajadores.',
      'Lectura critica: la centralizacion politica favorecio a las elites y debilito las periferias, mientras los deportes organizados se expandieron primero en circuitos urbanos y de intercambio internacional.'
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
    termStartYear: '1892',
    termEndYear: '1898',
    name: 'Miguel Antonio Caro',
    shortDescription: 'Primer partido registrado y origen disciplinario del futbol.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Miguel_Antonio_Caro_2.jpg',
    paragraphs: [
      'Durante la hegemonia conservadora, Miguel Antonio Caro defendio una idea de nacion profundamente catolica; en sus discursos afirmo que Colombia solo podia ser catolica o caeria en la barbarie.',
      'El registro historico del primer partido de futbol organizado en Colombia se ubica en <strong>junio de 1892</strong>, cuando Caro ejercia la presidencia. La exhibicion se vincula a la <strong>Escuela Militar</strong> y a la presencia del coronel estadounidense <strong>Henry Rowan Lemly</strong>.',
      'Lemly adopto metodos de entrenamiento de universidades britanicas, donde en el siglo XIX se codificaron deportes como el rugby, el futbol, el tenis y el criquet. Esa codificacion buscaba regular la competencia y disciplinar los cuerpos.',
      'En Colombia, esos reglamentos se introdujeron como parte de un proyecto de <strong>modernizacion militar y educativa</strong>. El juego practicado conservaba la idea de once contra once, pero estaba lejos de la estructura profesional posterior.',
      'La institucion militar se convirtio en un canal de transferencia cultural y deportiva, lo que explica que el primer partido registrado aparezca asociado a un acto oficial.',
      'Aunque existen hipotesis sobre juegos informales previos en puertos como Cartagena o Puerto Colombia, el registro documental que se conserva es el de 1892.',
      'El episodio marca el <strong>nacimiento oficial del futbol</strong> en el pais dentro de un entorno estatal, en el que la disciplina y el orden eran parte del proyecto politico.'
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
    termStartYear: '1900',
    termEndYear: '1904',
    name: 'Jose Manuel Marroquin',
    shortDescription: 'Educacion fisica como politica estatal.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Jos%C3%A9_Manuel_Marroqu%C3%ADn.jpg',
    paragraphs: [
      'Con Jose Manuel Marroquin se establecio por primera vez en la historia del pais el termino <strong>educacion fisica</strong>, en un contexto de <em>Regeneracion</em> que buscaba reorganizar la nacion.',
      'En <strong>1904</strong> se expidio el <strong>Decreto 419 del 3 de julio</strong>, que reglamento la Ley 39 y la ensenanza en general. En su capitulo V, paragrafo 4, se definio formalmente la educacion fisica.',
      'Los articulos 60 a 63 ordenaron correccion en el vestido, aseo riguroso y postura natural durante las lecciones. La calistenia y la gimnasia se hicieron obligatorias, y cada dos semanas se destino medio dia a paseos higienicos y recreativos.',
      'El modelo respondia al ideal de “mente sana en cuerpo sano” y miraba de cerca los referentes europeos, en especial Inglaterra.',
      'La Regeneracion consolido un Estado centralista que abandono territorios como el Pacifico, mientras la educacion fisica funciono como tecnologia de control social sobre los cuerpos populares.'
    ],
    editorialImage: {
      url: '/leyley.png',
      caption: 'Decreto 419 (1904): educacion fisica como politica estatal.',
      credit: 'Ilustracion editorial'
    },
    sources: [
      {
        label: 'Jose Manuel Marroquin (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Jos%C3%A9_Manuel_Marroqu%C3%ADn'
      },
      {
        label: 'Educacion fisica (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Educaci%C3%B3n_f%C3%ADsica'
      },
      {
        label: 'Historia de la educacion fisica en Colombia (EFDeportes)',
        url: 'https://www.efdeportes.com/efd17/efcolom.htm'
      }
    ]
  },
  {
    id: 'carlos-e-restrepo-1912',
    year: '1912',
    termStartYear: '1910',
    termEndYear: '1914',
    name: 'Carlos Eugenio Restrepo',
    shortDescription: 'Primer campeonato: Copa Carlos E. Restrepo.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Carlos_Eugenio_Restrepo%2C_1918.jpg',
    paragraphs: [
      'Carlos Eugenio Restrepo impulso, desde la presidencia, la organizacion de campeonatos deportivos en un contexto donde el futbol era practicamente una actividad de clubes sociales.',
      'En <strong>1912</strong> se realizo el <strong>primer campeonato de futbol del pais</strong>, la <strong>Copa Carlos E. Restrepo</strong>, considerada la primera competencia estructurada del futbol colombiano.',
      'El torneo lo gano el <strong>Polo Club de Bogota</strong>, el primer equipo organizado del pais. Su sede estaba en el sector que luego dio nombre al barrio El Polo, donde funciono una de las primeras canchas de futbol de la ciudad.',
      'Durante varios anos el Polo Club domino la escena bogotana hasta ser desplazado por clubes emergentes como Bartolino y la Facultad de Medicina de la Universidad Nacional.',
      'El episodio confirma que el futbol temprano fue un deporte de <em>elites urbanas</em>, articulado a clubes sociales antes de su expansion popular.'
    ],
    editorialImage: {
      url: '/polofc.jpg',
      caption: 'Polo Club de Bogota, campeon de la Copa Carlos E. Restrepo (1912).',
      credit: 'Bogota Antigua · Gloria Botero · 28 de noviembre de 2024'
    },
    sources: [
      {
        label: 'Carlos Eugenio Restrepo (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Carlos_Eugenio_Restrepo'
      },
      {
        label: 'Los primeros torneos de futbol en Colombia (Daniel Polania)',
        url: 'http://danielpolania.wordpress.com/2018/12/03/los-primeros-torneos-de-futbol-en-colombia/'
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
    termStartYear: '1922',
    termEndYear: '1926',
    name: 'Pedro Nel Ospina',
    shortDescription: 'Ley 80 y futbol de elites en canchas privadas.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg',
    paragraphs: [
      'Pedro Nel Ospina aparece retratado con equipos de futbol de la <em>alta sociedad</em>, posando en la cancha de <strong>La Merced</strong>, hoy <strong>San Bartolome de La Merced</strong>.',
      'Las fotografias lo muestran con uniforme de gala y subrayan el caracter <em>elitista</em> del futbol temprano en Bogota.',
      'En <strong>1925</strong> se firma la <strong>Ley 80</strong>, que crea las <em>Comisiones Nacionales de Educacion Fisica</em>, antecedente de Coldeportes y del actual Ministerio del Deporte.',
      'El deporte organizado se movia en circuitos urbanos cerrados, con poca llegada a sectores populares.'
    ],
    editorialImage: {
      url: '/equipos1923.png',
      caption: 'Pedro Nel Ospina con equipos de la alta sociedad en La Merced.',
      credit: 'Archivo fotográfico'
    },
    sources: [
      {
        label: 'Pedro Nel Ospina (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Pedro_Nel_Ospina'
      },
      {
        label: 'Ley 80 de 1925 (SUIN-Juriscol)',
        url: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1625996'
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
    termStartYear: '1926',
    termEndYear: '1930',
    name: 'Miguel Abadia Mendez',
    shortDescription: 'Masacre de las bananeras y Juegos Nacionales.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Miguel_Abad%C3%ADa_M%C3%A9ndez.jpg',
    paragraphs: [
      'Su gobierno queda asociado a la <strong>masacre de las bananeras</strong> de <strong>1928</strong> y al conflicto social con empresas extranjeras.',
      'Entre <strong>diciembre de 1928</strong> y <strong>enero de 1929</strong> se realizan en Cali las primeras <strong>Olimpiadas Colombianas</strong>, luego <strong>Juegos Nacionales</strong>.',
      'En futbol, el equipo que represento al <strong>Magdalena</strong> fue campeon y se le reconoce como el <em>primer campeon nacional</em> de estas competencias.',
      'Al regresar a Santa Marta, el equipo pidio un minuto de silencio por las victimas frente al gobernador militar <strong>Cortes Vargas</strong>, quien habia negado la masacre.',
      'El episodio marca como el deporte organizado surge en medio de tensiones sociales y politicas que desembocan en el regreso liberal de <strong>1930</strong>.'
    ],
    editorialImage: {
      url: '/abadia.jpeg',
      caption: 'Miguel Abadia Mendez en su periodo presidencial.',
      credit: 'Archivo fotografico'
    },
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
    termStartYear: '1930',
    termEndYear: '1934',
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
    termStartYear: '1946',
    termEndYear: '1950',
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
    termStartYear: '1950',
    termEndYear: '1951',
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
    termStartYear: '1958',
    termEndYear: '1962',
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
    termStartYear: '1966',
    termEndYear: '1970',
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
    termStartYear: '1982',
    termEndYear: '1986',
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
    termStartYear: '1986',
    termEndYear: '1990',
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
    termStartYear: '1990',
    termEndYear: '1994',
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
    termStartYear: '1994',
    termEndYear: '1998',
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
    termStartYear: '1998',
    termEndYear: '2002',
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
    termStartYear: '2002',
    termEndYear: '2010',
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
    termStartYear: '2010',
    termEndYear: '2018',
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
    termStartYear: '2018',
    termEndYear: '2022',
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
