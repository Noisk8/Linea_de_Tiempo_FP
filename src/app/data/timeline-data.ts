export type TimelineEntry = {
  id: string;
  year: string;
  name: string;
  shortDescription: string;
  image: string;
  paragraphs: string[];
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'rafael-nunez-1886',
    year: '1886',
    name: 'Rafael Nunez',
    shortDescription: 'Inicio de la Republica de Colombia en 1886.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rafael_Nunez.jpg',
    paragraphs: [
      'El narrador ubica el inicio de la Colombia moderna en 1886, con Rafael Nunez como presidente.',
      'Esta fecha marca el cambio a una republica centralista que define el marco politico posterior.'
    ]
  },
  {
    id: 'rafael-nunez-beisbol-1890s',
    year: '1890s',
    name: 'Rafael Nunez y el beisbol',
    shortDescription: 'Primer registro de un partido de beisbol en Colombia.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rafael_Nunez.jpg',
    paragraphs: [
      'Se menciona un registro temprano de beisbol en la decada de 1890.',
      'El partido se habria jugado frente a la casa de Nunez en Cartagena, como dato deportivo previo al futbol.'
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
      'El vicepresidente Miguel Antonio Caro presencio la exhibicion organizada por Henry Rowan Lemly en la Escuela Militar.',
      'El narrador lo presenta como el inicio oficial del futbol colombiano dentro de un proyecto estatal.'
    ]
  },
  {
    id: 'jose-manuel-marroquin-1904',
    year: '1904',
    name: 'Jose Manuel Marroquin',
    shortDescription: 'Decreto 419 y nacimiento de la educacion fisica.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Jos%C3%A9_Manuel_Marroqu%C3%ADn.jpg',
    paragraphs: [
      'El 3 de julio de 1904 se expide el Decreto 419.',
      'Se formaliza por primera vez el termino educacion fisica en Colombia, como base estatal para el deporte.',
      'El decreto actua como marco habilitante para el desarrollo del futbol.'
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
      'El ganador fue el Polo Club de Bogota, equipo asociado a las elites de la epoca.',
      'El torneo marca un hito en la institucionalizacion del futbol.'
    ]
  },
  {
    id: 'pedro-nel-ospina-1920s',
    year: 'Anios 20',
    name: 'Pedro Nel Ospina',
    shortDescription: 'Presidente posando con equipos de futbol de elite.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg',
    paragraphs: [
      'En los anos veinte aparece posando con equipos de futbol de la alta sociedad.',
      'Se mencionan la cancha de La Merced y San Bartolome de La Merced como escenario.',
      'El futbol se vincula con el estatus social y los clubes de elite.'
    ]
  },
  {
    id: 'ley-80-1925',
    year: '1925',
    name: 'Ley 80',
    shortDescription: 'Comisiones nacionales de educacion fisica.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg',
    paragraphs: [
      'La Ley 80 de 1925 define las comisiones nacionales de educacion fisica.',
      'El narrador la conecta con el nacimiento de Coldeportes y el actual Ministerio del Deporte.',
      'Es un paso clave para la organizacion estatal del deporte.'
    ]
  },
  {
    id: 'miguel-abadia-1926',
    year: '1926',
    name: 'Miguel Abadia Mendez',
    shortDescription: 'Presidencia asociada a la masacre de las bananeras.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Miguel_Abad%C3%ADa_M%C3%A9ndez.jpg',
    paragraphs: [
      'Gobierno entre 1926 y 1930, asociado por el narrador a la masacre de las bananeras.',
      'Se menciona una caricatura de diciembre de 1928 como retrato del contexto politico.',
      'El periodo sirve de telon de fondo a los primeros eventos deportivos nacionales.'
    ]
  },
  {
    id: 'olimpiadas-1928',
    year: '1928-1929',
    name: 'Primeras Olimpiadas Colombianas',
    shortDescription: 'Juegos en Cali con torneo de futbol ganado por Magdalena.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Estadio_Olimpico_Pascual_Guerrero.jpg',
    paragraphs: [
      'Entre diciembre de 1928 y enero de 1929 se realizan las primeras Olimpiadas Colombianas en Cali.',
      'En futbol gana el equipo que representa al Magdalena, segun el narrador.',
      'Al regreso se solicita un minuto de silencio por las victimas de la masacre de las bananeras.'
    ]
  },
  {
    id: 'enrique-olaya-1930',
    year: '1930',
    name: 'Enrique Olaya Herrera',
    shortDescription: 'Inicio de la Republica Liberal y construccion de estadios.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Enrique_Olaya_Herrera_by_Benjam%C3%ADn_de_la_Calle_%281910%29.jpg',
    paragraphs: [
      'Con la Republica Liberal comienza la masificacion de estadios y taquillas.',
      'Se habilita el futbol marron y la consolidacion de clubes en los anos cuarenta.',
      'El crecimiento de infraestructura cambia la escala del futbol nacional.'
    ]
  },
  {
    id: 'estadios-1934-1949',
    year: '1934-1949',
    name: 'Estadios clave',
    shortDescription: 'Romelio Martinez, Pascual Guerrero, El Campin y Atanasio.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Estadio_El_Camp%C3%ADn_Bogot%C3%A1.jpg',
    paragraphs: [
      'Romelio Martinez (1934), Pascual Guerrero (1937), El Campin (1948) y Atanasio (1949).',
      'El estadio Alfonso Lopez de la Nacional se ubica en la misma fase de obras.',
      'El narrador atribuye este ciclo a la modernizacion que habilito el futbol profesional.'
    ]
  },
  {
    id: 'mariano-ospina-1948',
    year: '1948',
    name: 'Mariano Ospina Perez',
    shortDescription: 'Bogotazo y futbol como valvula social.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mariano_Ospina_P%C3%A9rez.jpg',
    paragraphs: [
      'Tras el Bogotazo del 9 de abril de 1948 se decretan restricciones a la reunion social.',
      'El cine y el futbol quedan como excepciones, leidos por el narrador como pan y circo.',
      'En junio de 1948 se crea la Dimayor y en agosto inicia el campeonato profesional.'
    ]
  },
  {
    id: 'dimayor-1948',
    year: '1948',
    name: 'Nacimiento de la Dimayor',
    shortDescription: 'Creacion de la liga profesional colombiana.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Estadio_El_Camp%C3%ADn_Bogot%C3%A1.jpg',
    paragraphs: [
      'En junio de 1948 se funda la Dimayor como entidad organizadora del futbol profesional.',
      'El campeonato se planea para el 7 de agosto y se inaugura el 15 de agosto de 1948.',
      'Este paso institucionaliza la competencia de clubes.'
    ]
  },
  {
    id: 'laureano-gomez-1950',
    year: '1950-1953',
    name: 'Laureano Gomez',
    shortDescription: 'Era de El Dorado y futbol como circo politico.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Laureano_G%C3%B3mez.jpg',
    paragraphs: [
      'El narrador describe a Laureano como quien aprovecha la era de El Dorado.',
      'La atencion publica se concentra en el futbol y sus figuras extranjeras.',
      'En 1953 Laureano cae y Di Stefano se va a Espana, en un giro ironico.'
    ]
  },
  {
    id: 'alberto-lleras-1962',
    year: '1962',
    name: 'Alberto Lleras Camargo',
    shortDescription: 'Colombia clasifica a su primer Mundial.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alberto_Lleras_Camargo.jpg',
    paragraphs: [
      'En 1962 Colombia clasifica por primera vez a un Mundial, con Pedernera como tecnico.',
      'El empate 4-4 con la URSS se presenta como un simbolo politico contra el comunismo.',
      'Guillermo Leon Valencia lo califica como triunfo de la democracia sobre el totalitarismo.'
    ]
  },
  {
    id: 'carlos-lleras-1968',
    year: '1968',
    name: 'Carlos Lleras Restrepo',
    shortDescription: 'Creacion de Coldeportes para Panamericanos 1971.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Carlos_Lleras_Restrepo.jpg',
    paragraphs: [
      'En 1968 se crea Coldeportes, el Instituto Colombiano de Deportes y Recreacion.',
      'La entidad se organiza para preparar la sede de los Panamericanos de 1971 en Cali.',
      'Se consolida la gestion estatal del deporte.'
    ]
  },
  {
    id: 'zapote-mecanico-1971',
    year: '1971-1979',
    name: 'Zapote mecanico',
    shortDescription: 'Uniforme naranja ligado a Coldeportes y Panamericanos.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Estadio_Olimpico_Pascual_Guerrero.jpg',
    paragraphs: [
      'La Seleccion Colombia usa el uniforme naranja conocido como zapote mecanico.',
      'Se atribuye a la gestion de Coldeportes y al branding de los Panamericanos.',
      'El ciclo se ubica aproximadamente entre 1971 y 1979.'
    ]
  },
  {
    id: 'belisario-1983',
    year: '1983',
    name: 'Belisario Betancur',
    shortDescription: 'Rechazo del Mundial 1986 y critica a la FIFA.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Belisario_Betancur_2010.jpg',
    paragraphs: [
      'En 1983 Betancur rechaza la sede del Mundial 1986 por exigencias de la FIFA y sus socios.',
      'En su locucion afirma que el Mundial debe servir a Colombia y no al reves.',
      'El episodio marca la relacion entre politica, economia y futbol.'
    ]
  },
  {
    id: 'belisario-1983-narco',
    year: '1983',
    name: 'Narcotrafico y futbol',
    shortDescription: 'Rodrigo Lara Bonilla denuncia clubes de la mafia.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Belisario_Betancur_2010.jpg',
    paragraphs: [
      'El ministro Rodrigo Lara Bonilla denuncia que ocho equipos pertenecen a narcotraficantes.',
      'Segun el narrador, seis meses despues fue asesinado.',
      'El tema abre un ciclo de intervencion politica en el futbol colombiano.'
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
      'El 8 de febrero de 1985 se presenta oficialmente la camiseta titular y la suplente.',
      'Amparo Grisales es la primera en vestir el amarillo, azul y rojo.'
    ]
  },
  {
    id: 'cesar-gaviria-1993',
    year: '1993',
    name: 'Cesar Gaviria',
    shortDescription: 'Cruz de Boyaca por el 5-0 a Argentina.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesar_Gaviria_2011.jpg',
    paragraphs: [
      'Tras el 5-0 en 1993, Gaviria condecora a Pacho Maturana y a la Seleccion.',
      'Entrega la Cruz de Boyaca y la orden al merito por un solo partido.',
      'El narrador destaca su intervencion mediata en radio con tecnicos y jugadores.'
    ]
  },
  {
    id: 'ernesto-samper-1994',
    year: '1994-1995',
    name: 'Ernesto Samper',
    shortDescription: 'Proceso 8000 y federacion vinculada al cartel de Cali.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Ernesto_Samper_Pizano_2018.jpg',
    paragraphs: [
      'Samper llega al poder en 1994 en medio del proceso 8000.',
      'El narrador afirma que la Federacion estaba en manos del cartel de Cali.',
      'Juan Jose Bellini fue detenido en 1995 y luego regreso como asesor en el futbol.'
    ]
  },
  {
    id: 'andres-pastrana-2001',
    year: '1998-2001',
    name: 'Andres Pastrana',
    shortDescription: 'Copa America 2001 como proyecto de gobierno.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Andres_Pastrana_2002.jpg',
    paragraphs: [
      'Pastrana llega al poder en 1998 con el objetivo de la paz.',
      'Impulsa la Copa America 2001 en un contexto de violencia y logra la sede.',
      'Colombia gana la unica Copa America y la imagen de Pastrana levantando el trofeo queda como simbolo.'
    ]
  },
  {
    id: 'alvaro-uribe-2002',
    year: '2002-2010',
    name: 'Alvaro Uribe Velez',
    shortDescription: 'Grandes eventos deportivos y nexo con Real Madrid.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Alvaro_Uribe_Velez.jpg',
    paragraphs: [
      'Durante su gestion se realizan los Juegos Bolivarianos 2005, Centroamericanos 2006 y Suramericanos 2010.',
      'En 2010 recibe la camiseta del Real Madrid, asociada a la influencia de Florentino Perez.',
      'El relato liga esta relacion con inversiones de ACS en infraestructura.'
    ]
  },
  {
    id: 'florentino-2013',
    year: '2013',
    name: 'Florentino y las concesiones',
    shortDescription: 'Licitacion y negocios que explican la diplomacia futbolera.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Florentino_Perez_2016.jpg',
    paragraphs: [
      'Se menciona una licitacion de 70 millones de euros para doble calzada.',
      'El dato explica por que varios presidentes se reunen con Florentino Perez.',
      'El futbol funciona como vehiculo de diplomacia y negocios.'
    ]
  },
  {
    id: 'juan-manuel-santos-2011',
    year: '2011',
    name: 'Juan Manuel Santos',
    shortDescription: 'Mundial Sub-20 y llegada de Pekerman.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Juan_Manuel_Santos_in_2013.jpg',
    paragraphs: [
      'Colombia es anfitriona del Mundial Sub-20 en 2011 en El Campin.',
      'Tras la crisis y el escandalo del Bolillo, Santos impulsa la llegada de Pekerman.',
      'El narrador atribuye la era Pekerman a presion y respaldo politico.'
    ]
  },
  {
    id: 'ivan-duque-2018',
    year: '2018',
    name: 'Ivan Duque',
    shortDescription: 'Imagen futbolera y debate sobre FIFA Gate.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Ivan_Duque_2018.jpg',
    paragraphs: [
      'En 2018 llega Ivan Duque, caracterizado por sus fotos haciendo cabecitas.',
      'El narrador afirma que desperdicia la oportunidad abierta por el FIFA Gate de 2015.',
      'En los ultimos dias de su gobierno recibe a Gianni Infantino y se menciona un cierre institucional.'
    ]
  }
];
