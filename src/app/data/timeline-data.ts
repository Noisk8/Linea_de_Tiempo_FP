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
  sources: TimelineSource[];
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'rafael-nunez-1886',
    year: '1886',
    name: 'Rafael Nunez',
    shortDescription: 'Constitucion de 1886 y centralizacion del Estado.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rafael_Nunez.jpg',
    paragraphs: [
      'En 1886 se promulga la Constitucion que inaugura la Republica de Colombia y consolida el proyecto de la Regeneracion.',
      'El nuevo orden reduce la autonomia regional y fortalece el poder politico en Bogota, con efectos sobre la distribucion de recursos.',
      'Lectura critica: la centralizacion favorece a elites conservadoras y urbanas, mientras periferias y clases populares quedan con menor capacidad de decision.'
    ],
    sources: [
      {
        label: 'Constitucion de 1886 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Constituci%C3%B3n_de_1886'
      },
      {
        label: 'Rafael Nunez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Rafael_N%C3%BA%C3%B1ez'
      }
    ]
  },
  {
    id: 'rafael-nunez-beisbol-1890s',
    year: '1890s',
    name: 'Rafael Nunez y el beisbol',
    shortDescription: 'Registro temprano de beisbol en Cartagena.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rafael_Nunez.jpg',
    paragraphs: [
      'El programa menciona un registro temprano de beisbol en la decada de 1890 frente a la casa de Nunez en Cartagena.',
      'El dato ubica al beisbol como antecedente deportivo previo a la masificacion del futbol.',
      'Lectura critica: los deportes llegan primero a circuitos urbanos y de elite, ligados a puertos, comercio y presencia extranjera.'
    ],
    sources: [
      {
        label: 'Baseball in Colombia (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Baseball_in_Colombia'
      },
      {
        label: 'Rafael Nunez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Rafael_N%C3%BA%C3%B1ez'
      }
    ]
  },
  {
    id: 'miguel-antonio-caro-1892',
    year: '1892',
    name: 'Miguel Antonio Caro',
    shortDescription: 'Primer partido de futbol registrado en Colombia.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Miguel_Antonio_Caro_2.jpg',
    paragraphs: [
      'En junio de 1892 se organiza el primer partido de futbol del que hay registro en Colombia.',
      'El vicepresidente Miguel Antonio Caro presencia la exhibicion organizada por Henry Rowan Lemly en la Escuela Militar.',
      'Lectura critica: el futbol nace en espacios militares y de elite, como parte de una pedagogia disciplinaria y no como practica popular.'
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
    ]
  },
  {
    id: 'jose-manuel-marroquin-1904',
    year: '1904',
    name: 'Jose Manuel Marroquin',
    shortDescription: 'Formalizacion de la educacion fisica en Colombia.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Jos%C3%A9_Manuel_Marroqu%C3%ADn.jpg',
    paragraphs: [
      'El programa ubica en 1904 un decreto que reglamenta la ley de educacion y formaliza el termino educacion fisica.',
      'Se instala un marco estatal para la formacion corporal en escuelas y colegios, ligado al proyecto de nacion.',
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
    shortDescription: 'Primera Copa de futbol organizada por el Estado.',
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
    year: 'Anios 20',
    name: 'Pedro Nel Ospina',
    shortDescription: 'Fotografias con equipos de elite en canchas privadas.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg',
    paragraphs: [
      'El programa menciona fotografias del presidente posando con equipos de futbol de alta sociedad.',
      'Se alude a escenarios como La Merced y San Bartolome de La Merced en Bogota.',
      'Lectura critica: el deporte funciona como capital simbolico de las elites y excluye a sectores populares.'
    ],
    sources: [
      {
        label: 'Pedro Nel Ospina (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Pedro_Nel_Ospina'
      },
      {
        label: 'Futbol en Colombia (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/F%C3%BAtbol_en_Colombia'
      }
    ]
  },
  {
    id: 'ley-80-1925',
    year: '1925',
    name: 'Ley 80 y educacion fisica',
    shortDescription: 'Comisiones nacionales y antecedente institucional del deporte.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg',
    paragraphs: [
      'La Ley 80 de 1925 define comisiones nacionales de educacion fisica, segun el relato del programa.',
      'Se asocia esta medida con el camino hacia Coldeportes y el actual Ministerio del Deporte.',
      'Lectura critica: la institucionalizacion del deporte se concentra en el nivel central y no resuelve desigualdades regionales.'
    ],
    sources: [
      {
        label: 'Instituto Colombiano del Deporte (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Instituto_Colombiano_del_Deporte'
      },
      {
        label: 'Ministerio del Deporte (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Ministerio_del_Deporte_(Colombia)'
      }
    ]
  },
  {
    id: 'miguel-abadia-1926',
    year: '1926-1930',
    name: 'Miguel Abadia Mendez',
    shortDescription: 'Masacre de las bananeras y contexto de conflicto social.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Miguel_Abad%C3%ADa_M%C3%A9ndez.jpg',
    paragraphs: [
      'El gobierno de Abadia Mendez queda asociado a la masacre de las bananeras en 1928.',
      'El conflicto revela tensiones entre trabajadores, empresas extranjeras y el Estado.',
      'Lectura critica: el poder estatal responde con violencia a demandas laborales en plena expansion agroexportadora.'
    ],
    sources: [
      {
        label: 'Miguel Abadia Mendez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Miguel_Abad%C3%ADa_M%C3%A9ndez'
      },
      {
        label: 'Masacre de las bananeras (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Masacre_de_las_bananeras'
      }
    ]
  },
  {
    id: 'olimpiadas-1928',
    year: '1928-1929',
    name: 'Primeras Olimpiadas Colombianas',
    shortDescription: 'Juegos en Cali y triunfo de Magdalena en futbol.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Estadio_Olimpico_Pascual_Guerrero.jpg',
    paragraphs: [
      'Entre diciembre de 1928 y enero de 1929 se realizan en Cali las primeras Olimpiadas Colombianas.',
      'El futbol lo gana el equipo que representa al Magdalena, segun el programa.',
      'Lectura critica: los juegos buscan cohesion nacional, pero se disputan en medio de violencia y desigualdad regional.'
    ],
    sources: [
      {
        label: 'Juegos Deportivos Nacionales de Colombia (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Deportivos_Nacionales_de_Colombia'
      },
      {
        label: 'Estadio Pascual Guerrero (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_Ol%C3%ADmpico_Pascual_Guerrero'
      }
    ]
  },
  {
    id: 'enrique-olaya-1930',
    year: '1930',
    name: 'Enrique Olaya Herrera',
    shortDescription: 'Republica Liberal e inicio de masificacion de estadios.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Enrique_Olaya_Herrera_by_Benjam%C3%ADn_de_la_Calle_%281910%29.jpg',
    paragraphs: [
      'Con la Republica Liberal se impulsa infraestructura urbana y deportiva.',
      'El narrador vincula este periodo con el futbol marron y la consolidacion de clubes.',
      'Lectura critica: la inversion prioriza capitales regionales y deja periferias rurales con baja cobertura deportiva.'
    ],
    sources: [
      {
        label: 'Enrique Olaya Herrera (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Enrique_Olaya_Herrera'
      },
      {
        label: 'Republica Liberal (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Rep%C3%BAblica_Liberal_(Colombia)'
      }
    ]
  },
  {
    id: 'estadios-1934-1949',
    year: '1934-1949',
    name: 'Estadios clave',
    shortDescription: 'Romelio Martinez, Pascual Guerrero, El Campin y Atanasio.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Estadio_El_Camp%C3%ADn_Bogot%C3%A1.jpg',
    paragraphs: [
      'Se construyen estadios emblematicos: Romelio Martinez (1934), Pascual Guerrero (1937), El Campin (1948) y Atanasio Girardot (1949).',
      'El Estadio Alfonso Lopez de la Nacional se ubica en esta misma fase de obras.',
      'Lectura critica: la infraestructura deportiva se concentra en grandes ciudades y profundiza el centralismo urbano.'
    ],
    sources: [
      {
        label: 'Estadio Romelio Martinez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_Romelio_Mart%C3%ADnez'
      },
      {
        label: 'Estadio Pascual Guerrero (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_Ol%C3%ADmpico_Pascual_Guerrero'
      },
      {
        label: 'Estadio El Campin (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_El_Camp%C3%ADn'
      },
      {
        label: 'Estadio Atanasio Girardot (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_Atanasio_Girardot'
      }
    ]
  },
  {
    id: 'mariano-ospina-1948',
    year: '1948',
    name: 'Mariano Ospina Perez',
    shortDescription: 'Bogotazo, restricciones y auge del futbol profesional.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mariano_Ospina_P%C3%A9rez.jpg',
    paragraphs: [
      'Tras el Bogotazo del 9 de abril de 1948 se imponen restricciones a la reunion social.',
      'El cine y el futbol quedan como espacios permitidos, en una lectura de pan y circo.',
      'Lectura critica: el futbol opera como valvula social en medio de violencia politica y control estatal.'
    ],
    sources: [
      {
        label: 'Mariano Ospina Perez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Mariano_Ospina_P%C3%A9rez'
      },
      {
        label: 'Bogotazo (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Bogotazo'
      }
    ]
  },
  {
    id: 'dimayor-1948',
    year: '1948',
    name: 'Dimayor y campeonato profesional',
    shortDescription: 'Fundacion de la liga profesional y primer torneo.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Estadio_El_Camp%C3%ADn_Bogot%C3%A1.jpg',
    paragraphs: [
      'En junio de 1948 se funda la Dimayor como entidad organizadora del futbol profesional.',
      'El campeonato se planea para el 7 de agosto y se inaugura el 15 de agosto de 1948.',
      'Lectura critica: la profesionalizacion abre mercado, pero tambien mercantiliza la pasion popular.'
    ],
    sources: [
      {
        label: 'Dimayor (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Divisi%C3%B3n_Mayor_del_F%C3%BAtbol_Colombiano'
      }
    ]
  },
  {
    id: 'laureano-gomez-1950',
    year: '1950-1953',
    name: 'Laureano Gomez',
    shortDescription: 'El Dorado y futbol como espectaculo politico.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Laureano_G%C3%B3mez.jpg',
    paragraphs: [
      'Durante su gobierno se vive la era de El Dorado, con la llegada de figuras extranjeras.',
      'El futbol concentra la atencion publica mientras el pais enfrenta violencia politica.',
      'Lectura critica: el espectaculo deportivo funciona como cortina de humo frente a la desigualdad y el conflicto.'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alberto_Lleras_Camargo.jpg',
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
    shortDescription: 'Creacion de Coldeportes y Panamericanos 1971.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Carlos_Lleras_Restrepo.jpg',
    paragraphs: [
      'En 1968 se crea Coldeportes para organizar la politica deportiva nacional.',
      'El objetivo inmediato es preparar la sede de los Panamericanos de 1971 en Cali.',
      'Lectura critica: el Estado invierte en megaeventos mientras la infraestructura barrial sigue rezagada.'
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
        label: 'Juegos Panamericanos de 1971 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Panamericanos_de_1971'
      }
    ]
  },
  {
    id: 'zapote-mecanico-1971',
    year: '1971-1979',
    name: 'Zapote mecanico',
    shortDescription: 'Uniforme naranja ligado al ciclo Panamericanos.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Estadio_Olimpico_Pascual_Guerrero.jpg',
    paragraphs: [
      'La Seleccion Colombia usa el uniforme naranja conocido como zapote mecanico.',
      'El programa lo asocia a la politica deportiva de Coldeportes y el branding de los Panamericanos.',
      'Lectura critica: la identidad nacional se estetiza desde el marketing deportivo y no desde el bienestar social.'
    ],
    sources: [
      {
        label: 'Seleccion de futbol de Colombia (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Colombia'
      },
      {
        label: 'Juegos Panamericanos de 1971 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Panamericanos_de_1971'
      }
    ]
  },
  {
    id: 'belisario-1983',
    year: '1983',
    name: 'Belisario Betancur',
    shortDescription: 'Rechazo de la sede del Mundial 1986.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Belisario_Betancur_2010.jpg',
    paragraphs: [
      'Colombia habia ganado la sede del Mundial 1986, pero Betancur la rechaza en 1983.',
      'La justificacion apunta a exigencias de la FIFA y sus socios corporativos.',
      'Lectura critica: el conflicto revela choque entre necesidades sociales y el negocio global del futbol.'
    ],
    sources: [
      {
        label: 'Belisario Betancur (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Belisario_Betancur'
      },
      {
        label: 'Copa Mundial de Futbol 1986 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1986'
      }
    ]
  },
  {
    id: 'belisario-narco-1983',
    year: '1983',
    name: 'Narcotrafico y futbol',
    shortDescription: 'Denuncias de Rodrigo Lara Bonilla.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Belisario_Betancur_2010.jpg',
    paragraphs: [
      'El ministro Rodrigo Lara Bonilla denuncia la infiltracion del narcotrafico en clubes de futbol.',
      'Segun el programa, seis meses despues fue asesinado, mostrando el alcance de ese poder.',
      'Lectura critica: la captura criminal de instituciones deportivas refleja la crisis del Estado y la desigualdad social.'
    ],
    sources: [
      {
        label: 'Rodrigo Lara Bonilla (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Rodrigo_Lara_Bonilla'
      },
      {
        label: 'Cartel de Cali (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Cartel_de_Cali'
      }
    ]
  },
  {
    id: 'uniforme-1985',
    year: '1985',
    name: 'Nuevo uniforme de la Seleccion',
    shortDescription: 'Comision de notables y debut del tricolor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Amparo_Grisales_2015.jpg',
    paragraphs: [
      'El gobierno organiza una comision de notables para cambiar el uniforme de la Seleccion.',
      'El 8 de febrero de 1985 se presentan los uniformes titular y suplente.',
      'Lectura critica: la identidad nacional se construye desde elites culturales y mediaticas.'
    ],
    sources: [
      {
        label: 'Seleccion de futbol de Colombia (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Colombia'
      },
      {
        label: 'Amparo Grisales (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Amparo_Grisales'
      }
    ]
  },
  {
    id: 'virgilio-barco-1986',
    year: '1986',
    name: 'Virgilio Barco',
    shortDescription: 'Transicion de gobierno y ascenso de Cesar Gaviria.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Virgilio_Barco.jpg',
    paragraphs: [
      'Virgilio Barco asume la presidencia en un contexto de crisis y violencia politica.',
      'El programa subraya el protagonismo del ministro de gobierno Cesar Gaviria en la gestion del Estado.',
      'Lectura critica: las transiciones se dan en un pais desigual donde el poder sigue concentrado en pocos grupos.'
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
    year: '1993',
    name: 'Cesar Gaviria',
    shortDescription: 'El 5-0 y las condecoraciones a la Seleccion.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesar_Gaviria_2011.jpg',
    paragraphs: [
      'Tras el 5-0 de 1993, Gaviria condecora a Pacho Maturana y a los jugadores.',
      'El gesto se vuelve simbolo de un Estado que busca cohesion en medio de crisis sociales.',
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
    year: '1994-1995',
    name: 'Ernesto Samper',
    shortDescription: 'Proceso 8000 y federacion bajo presion del narco.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Ernesto_Samper_Pizano_2018.jpg',
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
      }
    ]
  },
  {
    id: 'andres-pastrana-2001',
    year: '1998-2001',
    name: 'Andres Pastrana',
    shortDescription: 'Copa America 2001 como proyecto politico.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Andres_Pastrana_2002.jpg',
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
    year: '2002-2010',
    name: 'Alvaro Uribe Velez',
    shortDescription: 'Eventos deportivos y proyeccion internacional.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Alvaro_Uribe_Velez.jpg',
    paragraphs: [
      'Durante su gestion se realizan los Juegos Bolivarianos 2005, Centroamericanos 2006 y Suramericanos 2010.',
      'El futbol se usa como vitrina de orden y modernizacion en un contexto de seguridad democratica.',
      'Lectura critica: la inversion en espectaculo convive con brechas sociales y territoriales persistentes.'
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
        label: 'Juegos Centroamericanos y del Caribe 2006 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Centroamericanos_y_del_Caribe_de_2006'
      },
      {
        label: 'Juegos Suramericanos 2010 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Juegos_Suramericanos_de_2010'
      }
    ]
  },
  {
    id: 'florentino-2013',
    year: '2013',
    name: 'Florentino Perez y ACS',
    shortDescription: 'Negocios de infraestructura y diplomacia futbolera.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Florentino_Perez_2016.jpg',
    paragraphs: [
      'El programa relaciona la imagen del Real Madrid con negocios de infraestructura en Colombia.',
      'ACS, empresa de Florentino Perez, aparece vinculada a grandes concesiones viales.',
      'Lectura critica: el futbol opera como lenguaje de negocios y acceso a contratos publicos.'
    ],
    sources: [
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
    year: '2011',
    name: 'Juan Manuel Santos',
    shortDescription: 'Mundial Sub-20 y llegada de Pekerman.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Juan_Manuel_Santos_in_2013.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Ivan_Duque_2018.jpg',
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
