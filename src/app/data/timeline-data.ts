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
  editorialGallery?: {
    url: string;
    caption: string;
    credit?: string;
  }[];
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
      'El perfil lo presenta como poeta frustrado: Rafael Nunez fue el ultimo presidente de los Estados Unidos de Colombia y el primero de la Republica de Colombia; se le atribuye la letra del Himno Nacional.',
      'En la revolucion de 1885 se le volteo a los liberales y termino gobernando con el Partido Conservador; ese giro marca el arranque de la Regeneracion y el impulso a la Constitucion de 1886.',
      'En El Cabrero, frente a su casa en Cartagena, se registra un hito del beisbol: el <strong>20 de julio de 1897</strong> se juega por primera vez en la ciudad, segun el historiador y periodista Raul Porto Cabrales en su libro sobre la memoria historica del beisbol de Bolivar y Cartagena.',
      'Porto cuenta que jovenes cartageneros observaron a estudiantes de Cuba y Panama, quienes trajeron los implementos y ensenaron el juego.',
      'Tambien menciona un antecedente no confirmado: en 1874 el cubano Francisco Balmaceda habria instalado un ingenio azucarero cerca de Marialabaja con un campo de beisbol para sus trabajadores, lo que sugiere un contacto temprano con la pelota caliente.'
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
      },
      {
        label: '124 anos de beisbol en Cartagena (Primertiempo)',
        url: 'https://primertiempo.co/beisbol/124-anos-de-beisbol-en-cartagena/'
      },
      {
        label: 'Historia del beisbol en Colombia (FCF)',
        url: 'https://fcb.com.co/historia.php'
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
      'Miguel Antonio Caro dejo una frase: <strong>Colombia solo puede ser catolica</strong> porque de lo contrario caeria en la barbarie; la sentencia resume la <strong>hegemonia conservadora</strong> en su forma mas dura.',
      'Durante su gobierno se realizo el <strong>primer partido de futbol</strong> del que hay registro en Colombia. <strong>Henry Rowan Lemly</strong> era un coronel gringo obsesionado con los metodos de entrenamiento de las <strong>universidades britanicas</strong>, donde nacieron los deportes modernos: reglamentos del <strong>rugby</strong>, del <strong>futbol</strong>, del <strong>tenis</strong> y del <strong>criquet</strong>.',
      'Ese fenomeno del siglo XIX buscaba organizar, normalizar y civilizar los enfrentamientos, y en Colombia se tradujo en la reorganizacion de la nacion y la creacion de la <strong>escuela militar</strong>.',
      '<strong>Lemly</strong> llevo los reglamentos del futbol de <strong>Inglaterra</strong> y los aplico en Colombia; lo unico que tenia de futbol era que era <strong>11 contra 11</strong>. Llevo futbol, gimnasia y tenis, y queda como una linea rarisima en el origen de los deportes en el pais.',
      'El relato sostiene que hubo precedentes: en <strong>Puerto Colombia</strong> o en <strong>Cartagena</strong>, marinos britanicos se bajaron, inflaron una tripa de un animal y los estibadores del puerto habrian dicho: ¿que es esta monda?, y asi habria empezado el futbol.',
      'En <strong>junio de 1892</strong>, el vicepresidente de la republica, presidente de verdad, fue testigo de ese partido y de esa exhibicion de moderno entrenamiento. El futbol nacio oficialmente en Colombia para un presidente.'
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
      },
      {
        label: 'Registro visual Henry Rowan Lemly (Pinterest)',
        url: 'https://kr.pinterest.com/pin/653373858440393548/'
      }
    ],
    editorialImage: {
      url: 'https://elmalpensante.com/sites/default/files/images/articulos/Primer_partido_nuevas_voces_el_malpensante.png',
      caption: 'El primer partido registrado en Colombia, segun el relato de El Malpensante.',
      credit: 'elmalpensante.com'
    },
    editorialGallery: [
      {
        url: '/Henry.avif',
        caption: 'Henry Rowan Lemly y la llegada de los reglamentos.',
        credit: 'Archivo'
      },
      {
        url: '/46ec559c6a552125cea948e0537106ec.jpg',
        caption: 'Registro visual asociado a los primeros partidos.',
        credit: 'Archivo'
      }
    ],
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
      'Durante el gobierno de Jose Manuel Marroquin se establecio por primera vez en la historia del pais el termino <strong>educacion fisica</strong>, en un contexto de <em>Regeneracion</em> que buscaba reorganizar la nacion.',
      'En <strong>1904</strong> se expidio el <strong>Decreto 419 del 3 de julio</strong>, que reglamento la Ley 39 y la ensenanza en general. En su capitulo V, paragrafo 4, se definio formalmente la educacion fisica.',
      'Los articulos 60 a 63 ordenaron correccion en el vestido, aseo riguroso y postura natural durante las lecciones. La calistenia y la gimnasia se hicieron obligatorias, y cada dos semanas se destino medio dia a paseos higienicos y recreativos.',
      'El modelo respondia al ideal de “mente sana en cuerpo sano” y tomaba como referencia las practicas europeas, en particular las britanicas, donde la educacion fisica se entendia como herramienta de orden social.'
    ],
    editorialImage: {
      url: '/leyley.png',
      caption: 'Decreto 419 (1904): educacion fisica como politica estatal.',
      credit: 'Ilustracion editorial'
    },
    editorialGallery: [
      {
        url: '/imagesdv6pf38x.jpg',
        caption: 'Registro visual asociado a la educacion fisica y su marco legal.',
        credit: 'Archivo'
      }
    ],
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
      },
      {
        label: 'Los primeros torneos de futbol en Colombia (Daniel Polania)',
        url: 'https://danielpolania.wordpress.com/2018/12/03/los-primeros-torneos-de-futbol-en-colombia/'
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
      'Desde la presidencia, Carlos Eugenio Restrepo impulso la organizacion de campeonatos deportivos en un contexto donde el futbol era practicamente una actividad de clubes sociales.',
      'En <strong>1912</strong> se realizo el <strong>primer campeonato de futbol del pais</strong>, la <strong>Copa Carlos E. Restrepo</strong>, considerada la primera competencia estructurada del futbol colombiano.',
      'El torneo lo gano el <strong>Polo Club de Bogota</strong>, el primer equipo organizado del pais. Su sede estaba en el sector que luego dio nombre al barrio El Polo, donde funciono una de las primeras canchas de futbol de la ciudad.',
      'Durante varios anos el Polo Club domino la escena bogotana hasta ser desplazado por clubes emergentes como Bartolino y la Facultad de Medicina de la Universidad Nacional.',
      'El episodio confirma que el futbol temprano fue un deporte de <em>elites urbanas</em>, articulado a clubes como el Polo Club y el Club Colombia, mientras surgian instituciones regionales que despues se convertirian en referentes del futbol nacional.'
    ],
    editorialImage: {
      url: '/polofc.jpg',
      caption: 'Polo Club de Bogota, campeon de la Copa Carlos E. Restrepo (1912).',
      credit: 'Bogota Antigua · Gloria Botero · 28 de noviembre de 2024'
    },
    editorialGallery: [
      {
        url: '/imagesdv6pf38x.jpg',
        caption: 'Registro visual adicional del primer campeonato.',
        credit: 'Archivo'
      }
    ],
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
      'Pedro Nel Ospina, presidente de la decada de 1920, aparece retratado con equipos de futbol de la epoca, con uniforme de gala, posando con clubes de la alta sociedad en la cancha de <strong>La Merced</strong>, hoy <strong>San Bartolome de La Merced</strong>.',
      'Las fotografias evidencian el caracter <em>elitista</em> del futbol temprano y el interes politico por el estatus social que rodeaba estos escenarios.',
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
      'Las medidas de educacion fisica impulsaron las <strong>primeras Olimpiadas Colombianas</strong>, que despues se llamarian <strong>Juegos Nacionales</strong>.',
      'Estas competencias se realizaron entre <strong>diciembre de 1928</strong> y <strong>enero de 1929</strong> en Cali, ciudad que se consolida como referente olimpico y, mas tarde, sede de los Panamericanos de 1971.',
      'En futbol no existian selecciones departamentales ni ligas formales. El equipo que represento al <strong>Magdalena</strong> fue campeon y se le reconoce como el <em>primer campeon nacional</em> de este tipo de competencias.',
      'Al regresar a Santa Marta, el equipo recibio un homenaje frente al gobernador militar <strong>Cortes Vargas</strong> y alli se pidio un minuto de silencio por las victimas de la <strong>masacre de las bananeras</strong>, un episodio que el propio Cortes Vargas habia negado.',
      'La prensa de la epoca registro que algunos jugadores eran familiares de victimas, y ese clima social y politico acelero el fin de la hegemonia conservadora: los liberales regresaron al poder en <strong>1930</strong> con Enrique Olaya Herrera.'
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
        label: 'Primeros Juegos Nacionales en Cali (Museo Nacional)',
        url: 'https://www.museonacional.gov.co/noticias/Paginas/Olimpicos.aspx#:~:text=Entre%20el%2020%20de%20diciembre,75).'
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
      'Enrique Olaya Herrera encabeza la <strong>Republica Liberal</strong> (1930-1945). Durante su gobierno se consolida la <strong>construccion de estadios</strong> en el pais.',
      'Antes de 1930 solo existia un estadio en Colombia: el <strong>Julio Torres</strong>, luego <em>Estadio Moderno</em>, construido en Barranquilla en 1922. El resto de actividades deportivas se realizaban en canchas con tribunas improvisadas y condiciones poco seguras para el publico. Con la Republica Liberal comienza la <strong>masificacion del deporte</strong>.',
      'Bajo Olaya Herrera se levantan escenarios clave: el <strong>Romelio Martinez</strong> (1934), el <strong>Alfonso Lopez</strong> de la Universidad Nacional (1936) y el <strong>Pascual Guerrero</strong> (1937). Con esta infraestructura se abre la etapa del llamado <em>futbol marron</em>, aun sin profesionalismo ni campeonato unificado, pero con pagos informales y competiciones locales que dieron origen a muchos de los clubes tradicionales.'
    ],
    editorialImage: {
      url: '/C6.jpg',
      caption: 'Infraestructura deportiva durante la Republica Liberal.',
      credit: 'Archivo fotografico'
    },
    sources: [
      {
        label: 'Enrique Olaya Herrera (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Enrique_Olaya_Herrera'
      },
      {
        label: 'Estadio Romelio Martinez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_Romelio_Mart%C3%ADnez'
      },
      {
        label: 'Estadio Alfonso Lopez (Bogota) (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_Alfonso_L%C3%B3pez_(Bogot%C3%A1)'
      },
      {
        label: 'Estadio Pascual Guerrero (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Estadio_Pascual_Guerrero'
      },
      {
        label: 'Estadios de Colombia (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Anexo:Estadios_de_Colombia'
      },
      {
        label: 'Archivo El Tiempo sobre estadios',
        url: 'https://www.eltiempo.com/archivo/documento/cms-4432862'
      },
      {
        label: 'Estadio Romelio Martinez (ArchDaily)',
        url: 'https://www.archdaily.cl/cl/917321/estadio-romelio-martinez-el-equipo-mazzanti'
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
      'Mariano Ospina Perez llego al poder en <strong>1946</strong> tras vencer a <strong>Jorge Eliecer Gaitan</strong> en unas elecciones marcadas por la division liberal. Sumados, <em>Gaitan y Echandia</em> obtenian mas votos que Ospina, pero por separado el candidato conservador se impuso y el partido regreso al gobierno.',
      'El asesinato de Gaitan en <strong>1948</strong> desato el <strong>Bogotazo</strong>. La violencia se extendio por el pais y en algunas regiones, como Barrancabermeja, los obreros tomaron el control por varias semanas. El episodio marco el inicio de un ciclo de venganzas y persecuciones politicas.',
      'Tras el Bogotazo se impuso toque de queda y se prohibieron reuniones de mas de dos personas. Hubo dos excepciones oficiales: <strong>cine</strong> y <strong>futbol</strong>. En ese contexto, Alfonso Senior, dirigente de Millonarios, impulso la creacion de la <strong>Dimayor</strong> en junio y el inicio del campeonato profesional en agosto de 1948.',
      'El futbol se consolido como espacio de reunion social en medio de la censura. La prensa, restringida por el <em>censor nacional</em>, encontro en el deporte un tema permitido para cubrir y comentar.'
    ],
    editorialImage: {
      url: '/mariano_gaitan.jpeg',
      caption: 'Mariano Ospina Perez y Jorge Eliecer Gaitan en campana.',
      credit: 'Archivo fotografico'
    },
    sources: [
      {
        label: 'Mariano Ospina Perez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Mariano_Ospina_P%C3%A9rez'
      },
      {
        label: 'Jorge Eliecer Gaitan (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Jorge_Eli%C3%A9cer_Gait%C3%A1n'
      },
      {
        label: 'Bogotazo (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Bogotazo'
      },
      {
        label: 'Campeonato Profesional Colombiano 1948 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Campeonato_de_F%C3%BAtbol_Profesional_Colombiano_1948'
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
      'Laureano Gomez fue un dirigente conservador de linea dura. Habia sido senador y canciller de Mariano Ospina antes de llegar a la presidencia en <strong>1950</strong>.',
      'Su periodo coincide con la era de <em>El Dorado</em>, cuando el futbol colombiano vive una bonanza marcada por la llegada de figuras como <strong>Adolfo Pedernera</strong> y <strong>Alfredo Di Stefano</strong>. La atencion publica se desplaza hacia el espectaculo deportivo en un contexto de violencia politica.',
      'El ciclo de El Dorado se explica por la ruptura institucional entre la <strong>Dimayor</strong> y la autoridad federativa (<strong>Adefutbol/FIFA</strong>), lo que permitio contratar estrellas sin el marco regular de transferencias internacionales. El resultado fue un campeonato de enorme convocatoria y una burbuja deportiva y economica.',
      'La normalizacion internacional llega con el <strong>Pacto de Lima (1951)</strong>, que establecio condiciones para cerrar el ciclo y ordenar la devolucion de jugadores. Ese hito ocurre durante el periodo Laureano/Urdaneta.',
      'En medio de <em>La Violencia</em>, el futbol funciono como <em>valvula de escape</em>. Archivos de la epoca resaltan la asistencia masiva a partidos mientras el orden publico se deterioraba; en 1953 Laureano cae, Rojas Pinilla lo tumba y la superestrella del circo, Di Stefano, se va para Espana.'
    ],
    editorialImage: {
      url: '/Millonarios-Campeon-en-1951.jpg',
      caption: 'Millonarios campeon en 1951, simbolo de la era de El Dorado.',
      credit: 'Archivo fotografico'
    },
    sources: [
      {
        label: 'Laureano Gomez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Laureano_G%C3%B3mez'
      },
      {
        label: 'Gobierno de Laureano Gomez (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Gobierno_de_Laureano_G%C3%B3mez'
      },
      {
        label: 'Roberto Urdaneta (Senal Memoria)',
        url: 'https://www.senalmemoria.co/articulos/roberto-urdaneta'
      },
      {
        label: 'El Dorado y la prensa (El Tiempo)',
        url: 'https://www.eltiempo.com/archivo/documento/mam-950339'
      },
      {
        label: 'El Dorado y profesionalismo (UFPR)',
        url: 'https://revistas.ufpr.br/alesde/article/download/20967/15144'
      }
    ]
  },
  {
    id: 'gustavo-rojas-pinilla-1953',
    year: '1953',
    termStartYear: '1953',
    termEndYear: '1957',
    name: 'Gustavo Rojas Pinilla',
    shortDescription: 'Golpe de Estado y futbol como vitrina popular.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Gurropin_tras_asumir_la_presidencia_con_un_golpe_de_estado.jpg',
    paragraphs: [
      'Tras la dictadura de Rojas Pinilla, llega el Frente Nacional y el futbol adquiere un nuevo significado.',
      'El relato lo presenta como un presidente considerado entre los mejores de la historia del pais.'
    ],
    editorialImage: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Gurropin_tras_asumir_la_presidencia_con_un_golpe_de_estado.jpg',
      caption: 'Rojas Pinilla tras asumir la presidencia en 1953.',
      credit: 'Wikimedia Commons'
    },
    sources: [
      {
        label: 'Gustavo Rojas Pinilla (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Gustavo_Rojas_Pinilla'
      },
      {
        label: 'Golpe de Estado en Colombia (1953) (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Colombia_de_1953'
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
      'La <strong>Seleccion Colombia</strong> clasifica a su primer <strong>Mundial</strong> con <strong>Adolfo Pedernera</strong> como tecnico y figura del <em>Dorado</em>.',
      'En la eliminatoria vence a <strong>Peru</strong> y viaja a <strong>Arica</strong>, sede inicialmente asignada al rival y ciudad fronteriza entre <strong>Chile</strong> y <strong>Peru</strong>.',
      'El partido mas recordado es el <strong>4-4</strong> contra la <strong>URSS</strong>, campeon de Europa: Colombia le marca cuatro goles a <strong>Lev Yashin</strong>, el mejor arquero del momento. En una epoca en que la sigla <strong>CCCP</strong> (Union Sovietica) era leida popularmente como <em>Con Colombia Casi Perdemos</em>, la seleccion colombiana estuvo a punto de imponerse en un encuentro que trascendio lo deportivo. En el siguiente partido, <strong>Yugoslavia</strong>, tambien comunista, nos derrotaria <strong>5-0</strong>, cerrando una participacion marcada por el contraste entre la gesta frente a la URSS y la dura realidad contra otro bloque del Este.',
      'En plena <strong>Guerra Fria</strong>, la prensa y las caricaturas convierten el encuentro en un <strong>relato politico</strong> de Colombia frente al comunismo, y el Estado se apropia de la hazana deportiva para reforzar su proyecto.'
    ],
    editorialImage: {
      url: '/lleras-urrsss.png',
      caption: 'Caricatura sobre el 4-4 con la URSS y la lectura politica del partido.',
      credit: 'Historias Secretas'
    },
    editorialGallery: [
      {
        url: '/COL-VS-RUSIA.jpeg',
        caption: 'Colombia vs. URSS en el Mundial de 1962.',
        credit: 'Historias Secretas'
      },
      {
        url: '/COL-VS-YUGO.jpeg',
        caption: 'Colombia vs. Yugoslavia en el Mundial de 1962.',
        credit: 'Historias Secretas'
      }
    ],
    editorialImageAfterIndex: 2,
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
      'En 1968, en el <strong>Frente Nacional</strong>, Carlos Lleras Restrepo impulsa la <strong>modernizacion del Estado</strong> y crea institutos; ese ano nace <strong>Coldeportes</strong>, el <em>Instituto Colombiano del Deporte y la Recreacion</em>.',
      'La creacion de Coldeportes responde a una necesidad concreta: Colombia habia ganado la sede de los <strong>Juegos Panamericanos de Cali 1971</strong>, pero la organizacion deportiva seguia rezagada, y el instituto se plantea <strong>ordenar el sistema</strong> y preparar el pais para <strong>competir</strong> y <strong>organizar</strong>.',
      'De ese ciclo surge el uniforme naranja conocido como <strong>zapote mecanico (1971-1979)</strong>. El color se asocia al <strong>logo de Coldeportes</strong> y se extiende a diferentes disciplinas deportivas de la decada.',
      'En esa narrativa, el Estado construye <strong>identidad deportiva</strong> desde la <strong>imagen</strong> y el <strong>evento</strong>, mas que desde el <strong>bienestar social</strong> o la <strong>formacion de base</strong>.'
    ],
    editorialGallery: [
      {
        url: '/1971_Pan_American_Games_logo.svg',
        caption: 'Logo de los Juegos Panamericanos de Cali 1971.',
        credit: 'Archivo'
      },
      {
        url: '/colombiazapote2.jpg',
        caption: 'Uniforme zapote asociado al ciclo Coldeportes.',
        credit: 'Archivo'
      },
      {
        url: '/periodico1971.jpg',
        caption: 'Registro de prensa sobre los Panamericanos de 1971.',
        credit: 'Archivo'
      }
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
      },
      {
        label: 'La camiseta zapote de Colombia (En una baldosa)',
        url: 'https://enunabaldosa.com/2014/02/19/en-el-placard-la-camiseta-zapote-de-colombia-1971-1984/'
      },
      {
        label: 'Cuando Colombia organizo los Panamericanos de 1971 (Senal Colombia)',
        url: 'https://www.senalcolombia.tv/deportes/cuando-colombia-organizo-los-panamericanos-en-1971'
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
      'Colombia habia ganado la sede del <strong>Mundial de 1986</strong>, pero en <strong>1983</strong> el gobierno de <strong>Belisario Betancur</strong> renuncia a organizarlo. En una <em>locucion presidencial</em> se justifica la decision por <strong>costos</strong> y <strong>exigencias de la FIFA</strong> y sus socios comerciales.',
      'El episodio se convierte en un <strong>debate nacional</strong>: para muchos, Colombia fue el unico pais que <strong>rechazo un Mundial</strong>; para otros, fue una decision frente a <strong>prioridades internas</strong> en un contexto economico <em>proteccionista</em>.',
      'Durante su gobierno el ministro de Justicia, <strong>Rodrigo Lara Bonilla</strong>, denuncia la relacion de varios clubes con el <strong>narcotrafico</strong>, abriendo un frente politico que expone la influencia criminal en el futbol.',
      'En <strong>1985</strong> una <em>comision de notables</em> impulsa el cambio de uniforme de la <strong>Seleccion Colombia</strong>. Se mencionan nombres como <strong>Daniel Samper Pizano</strong>, <strong>Alberto Casas</strong> y <strong>Carlos Cure</strong>, y el <strong>tricolor amarillo, azul y rojo</strong> se presenta oficialmente el <strong>8 de febrero de 1985</strong> con fotos publicas.',
      'El lanzamiento queda asociado a <strong>Amparo Grisales</strong>, recordada como la primera figura en posar con la nueva camiseta, y el diseno del uniforme fue de la disenadora Maria Elvira Pardo, en un contexto donde el gobierno oscila entre <strong>control moral</strong> del futbol y <strong>uso simbolico</strong> del deporte para construir <strong>identidad nacional</strong>.'
    ],
    editorialGallery: [
      {
        url: '/amparo1.jpeg',
        caption: 'Amparo Grisales con el nuevo uniforme tricolor de la Seleccion.',
        credit: 'Historias Secretas'
      },
      {
        url: '/amparo2.jpeg',
        caption: 'Imagen de lanzamiento del uniforme de 1985.',
        credit: 'Historias Secretas'
      },
      {
        url: '/col-1985.jpeg',
        caption: 'Registro visual de la presentacion del uniforme en 1985.',
        credit: 'Historias Secretas'
      }
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
      'Virgilio Barco asume la presidencia en un contexto de <strong>crisis y violencia politica</strong>, y el relato lo presenta como un mandatario mayor, con un <strong>problema cerebrovascular</strong> que afecto su salud durante el gobierno.',
      'La conduccion politica queda marcada por el protagonismo del <strong>ministro de gobierno</strong> (hoy Interior), y en esa transicion gana relevancia <strong>Cesar Gaviria</strong> como actor clave.',
      'La <strong>continuidad de elites politicas</strong> limita reformas de fondo mientras el futbol se mantiene como escenario simbolico de cohesion.'
    ],

    editorialGallery: [{
      url: 'https://futbolete.com/wp-content/uploads/2019/07/armstrong-y-gordon-santa-fe-america-en-el-estadio-el-campin.jpg',
      caption: 'Armstrong y Gordon Santa Fe vs America en el Estadio El Campin',
      credit: 'Futbolete'
    }],
    sources: [
      {
        label: 'Virgilio Barco (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Virgilio_Barco'
      },
      {
        label: 'Cesar Gaviria (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/C%C3%A9sar_Gaviria'
      },
      {
        label: 'Armstrong y Gordon Santa Fe vs America en el Estadio El Campin',
        url: 'https://futbolete.com/wp-content/uploads/2019/07/armstrong-y-gordon-santa-fe-america-en-el-estadio-el-campin.jpg'
      },
      {
        label: 'Armstrong y Gordon Santa Fe vs America en el Estadio El Campin',
        url: ' https://canal1.com.co/noticias/uno-dos-tres/uno-la-relacion-que-existe-entre-el-futbol-colombiano-y-el-hombre-en-la-luna/'
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
      'El asesinato de <strong>Luis Carlos Galan</strong> abre el camino politico que lleva a <strong>Cesar Gaviria</strong> a la presidencia.',
      'Su gobierno impulsa la <strong>Constitucion de 1991</strong>, con un enfoque <strong>multicultural</strong> y <strong>neoliberal</strong>, pero aun <strong>centralista</strong>.',
      'La relacion con el futbol es cercana y su mandato coincide con un momento de gloria de la Seleccion: <strong>Italia 90</strong> y, sobre todo, las eliminatorias de <strong>1993</strong> que culminan con el <strong>5-0</strong> en Buenos Aires. En Copa America 1993, Colombia llega a semifinales y cae con Argentina en penales.',
      'Tras el 5-0, el presidente otorga la <strong>Cruz de Boyaca</strong> a <strong>Pacho Maturana</strong> y a los jugadores, gesto que se vuelve simbolo de cohesion nacional aunque se trata de una condecoracion por un partido y no por un titulo.',
      'Gaviria tambien interviene mediaticamente: llama a tecnicos y jugadores y sus conversaciones salen al aire en radio, y la gloria deportiva se usa para <strong>legitimar gobiernos</strong> y desplazar debates estructurales.'
    ],
    editorialGallery: [
      {
        url: '/cafe-italia-90-7859805091-3314993185.jpg',
        caption: 'Italia 90 como momento de auge de la Seleccion.',
        credit: 'Archivo'
      },
      {
        url: '/5d405abc41280.jpeg',
        caption: 'Registro visual del contexto del 5-0.',
        credit: 'Archivo'
      },
      {
        url: '/655a1927480401d5270cce9f25b4821c.jpg',
        caption: 'Homenajes y simbolos posteriores a la victoria.',
        credit: 'Archivo'
      },
      {
        url: '/17207325130120.jpg',
        caption: 'Imagen adicional del ciclo 1993-1994.',
        credit: 'Archivo'
      }
    ],
    sources: [
      {
        label: 'Cesar Gaviria (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/C%C3%A9sar_Gaviria'
      },
      {
        label: 'La historica goleada 5-0 (Panorama Cultural)',
        url: 'https://panoramacultural.com.co/ocio-y-sociedad/8829/la-historica-goleada-de-colombia-a-argentina-el-5-0-que-nadie-olvida'
      },
      {
        label: 'Video 5-0 Colombia vs Argentina (YouTube)',
        url: 'https://www.youtube.com/watch?v=F4Lj7CShT0E&t=119s'
      },
      {
        label: 'Se cumplen 26 anos del 5-0 (El Tiempo)',
        url: 'https://www.eltiempo.com/deportes/futbol-internacional/se-cumplen-26-anos-del-5-0-de-colombia-a-argentina-409110'
      },
      {
        label: 'La Cruz de Boyaca y deportistas condecorados (El Tiempo)',
        url: 'https://www.eltiempo.com/deportes/otros-deportes/los-deportistas-que-recibieron-la-cruz-de-boyaca-ahora-la-recibira-egan-bernal-395012'
      },
      {
        label: 'Colombia vs Argentina 5-0 (Vavel)',
        url: 'https://www.vavel.com/colombia/futbol-colombiano/2014/06/11/358535.html'
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
      'En <strong>1994</strong>, Ernesto Samper gana las elecciones frente a <strong>Andres Pastrana</strong>. La campana queda marcada por las denuncias de <strong>financiacion del cartel de Cali</strong>, lo que desemboca en el <strong>Proceso 8000</strong>.',
      'El relato vincula esa crisis politica con el futbol: en 1994 Colombia fracasa en el Mundial y se reafirma la relacion entre seleccion, dirigencia y mafias. Se afirma que la <strong>Federacion Colombiana de Futbol</strong> estaba bajo la influencia del cartel.',
      'En ese contexto, <strong>Miguel Rodriguez Orejuela</strong> convoca a la Seleccion a su finca y ofrece incentivos economicos. La influencia se explica porque el presidente de la Federacion era <strong>Juan Jose Bellini</strong>, senalado como testaferro del capo.',
      'Bellini es detenido en <strong>1995</strong> por sus vinculos con el cartel de Cali y por <strong>lavado de activos</strong>. Tras salir de la carcel, vuelve como asesor en el futbol y mantiene influencia en clubes y directivos.',
      'La politica deportiva queda atravesada por flujos ilegales de dinero y poder, con efectos duraderos en la institucionalidad del futbol.'
    ],
    editorialGallery: [
      {
        url: '/7G5LUER3FND3VNQKIU3JDHGEHU.avif',
        caption: 'Registro visual asociado al Proceso 8000.',
        credit: 'Archivo'
      },
      {
        url: '/5b70bcda4d169.jpeg',
        caption: 'Imagen del contexto politico y futbolero de 1994.',
        credit: 'Archivo'
      },
      {
        url: '/juan-jose-belliini1.jpg',
        caption: 'Juan Jose Bellini y el entorno dirigencial.',
        credit: 'Archivo'
      }
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
      },
      {
        label: 'El Proceso 8000 (Comision de la Verdad)',
        url: 'https://www.comisiondelaverdad.co/el-proceso-8000'
      },
      {
        label: 'Proceso 8000 (El Tiempo)',
        url: 'https://www.eltiempo.com/noticias/proceso-8000/2'
      },
      {
        label: 'Influencia del narcotrafico en el futbol colombiano (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Influencia_del_narcotr%C3%A1fico_en_el_f%C3%BAtbol_colombiano'
      },
      {
        label: 'El narcotrafico en el futbol profesional colombiano (Futbolred)',
        url: 'https://www.futbolred.com/futbol-colombiano/liga-aguila/el-narcotrafico-en-la-historia-del-futbol-profesional-colombiano-87039'
      },
      {
        label: 'El regreso de Juan Jose Bellini (Las2orillas)',
        url: 'https://www.las2orillas.co/el-regreso-de-juan-jose-bellini-el-exitoso-dirigente-que-termino-enredado-con-el-cartel-de-cali/'
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
      'El gobierno de <strong>Andres Pastrana</strong> llega en <strong>1998</strong> con la <strong>paz</strong> como objetivo central, marcado por el <strong>Caguan</strong>.',
      'Para lograrla necesitaba un simbolo que conectara con la gente, y su gran proyecto de gobierno se llamo la <strong>Copa America 2001</strong>.',
      'El relato insiste: la peleo y la lagartio; viajo a <strong>Paraguay</strong>, convencio a todo el mundo y solo no pudo convencer a los <strong>argentinos</strong> porque en ese momento el pais vivia una crisis de violencia y conflicto peor aun que la actual.',
      'En ese contexto secuestraron al vicepresidente de la <strong>Federacion Colombiana de Futbol</strong> y hubo un <strong>atentado</strong>; <strong>Argentina</strong> dijo que no venia.',
      'Finalmente se le otorgo a <strong>Colombia</strong> la <strong>Copa America</strong> y la gano: es la <strong>unica Copa America</strong> que ha ganado, aunque algunos la desdenan porque no estuvo <strong>Argentina</strong>.',
      'El titulo se obtiene con <strong>Oscar Cordoba</strong> con el arco invicto y con <strong>Victor Hugo Aristizabal</strong> como goleador de la Copa America.',
      'La final se resuelve ante <strong>Mexico</strong> <strong>1-0</strong> con gol de <strong>Ivan Ramiro Cordoba</strong>, y la celebracion deja escenas ya clasicas: Pastrana con camiseta que dice <strong>Andres Pastrana</strong>, como si no lo reconocieran, recibiendo medalla junto a <strong>Antanas Mockus</strong>, alcalde de <strong>Bogota</strong>.',
      'La imagen mas recordada es <strong>Pastrana</strong> levantando el <strong>trofeo</strong> que le pasa <strong>Ivan Ramiro Cordoba</strong>; el triunfo deportivo se convierte en el mayor logro simbolico del gobierno y en un intento por cambiar su imagen.'
    ],
    editorialGallery: [
      {
        url: '/pastrana1.jpg',
        caption: 'Pastrana en el entorno de la Copa America 2001.',
        credit: 'Archivo'
      },
      {
        url: '/pastrana2.jpg',
        caption: 'Celebracion y simbolos del titulo continental.',
        credit: 'Archivo'
      },
      {
        url: '/PASTRANA3.webp',
        caption: 'Pastrana y la Seleccion en el contexto del 2001.',
        credit: 'Archivo'
      },
      {
        url: '/COPAMERICA1.avif',
        caption: 'Registro de la Copa America 2001.',
        credit: 'Archivo'
      },
      {
        url: '/pastrana5.jpg',
        caption: 'Imagen adicional del ciclo Pastrana.',
        credit: 'Archivo'
      }
    ],
    sources: [
      {
        label: 'Andres Pastrana (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Andr%C3%A9s_Pastrana_Arango'
      },
      {
        label: 'Copa America 2001 (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Copa_Am%C3%A9rica_2001'
      },
      {
        label: 'Copa de la Paz y Copa America 2001 (Vavel)',
        url: 'https://www.vavel.com/colombia/futbol-colombiano/2015/07/29/519048-colombia-logro-ganar-la-copa-de-la-paz-pero-no-la-paz.html'
      },
      {
        label: 'Conmebol cancela la Copa America 2001 (Infobae)',
        url: 'https://www.infobae.com/america/colombia/2021/05/20/la-vez-que-la-conmebol-cancelo-la-copa-america-de-2001-en-colombia-organizada-por-andres-pastrana/'
      },
      {
        label: 'Archivo El Tiempo sobre Copa America 2001',
        url: 'https://www.eltiempo.com/archivo/documento/mam-434658'
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
      'Se recuerdan menos imagenes de <strong>Uribe</strong> metiendose con el futbol que de <strong>Gaviria</strong>, <strong>Pastrana</strong> o <strong>Belisario</strong>, pero el relato subraya que <strong>Uribe</strong> si tuvo mucho que ver con el deporte.',
      'Durante su gestion se hicieron los <strong>Juegos Bolivarianos 2005</strong>, los <strong>Centroamericanos y del Caribe 2006</strong> y los <strong>Suramericanos 2010</strong>, todos en <strong>Medellin</strong>, con balance exitoso; aun asi, parecia que Uribe no tenia nada que ver con el futbol.',
      'La imagen clave es <strong>2010</strong>: el presidente Uribe recibiendo la camiseta del <strong>Real Madrid</strong>.',
      'La escena sugiere que quien la entrega es <strong>Florentino Perez</strong> como presidente, cuando en ese momento era el <strong>maximo accionista</strong>.',
      'El relato explica que <strong>Alvaro Uribe Velez</strong> abrio la puerta para que los negocios de la empresa <strong>Actividades de Construccion y Servicios (ACS)</strong> crecieran en Colombia; el dueno de ACS es <strong>Florentino Perez</strong>.',
      'Desde <strong>1997</strong>, cuando Uribe era gobernador de <strong>Antioquia</strong>, Florentino Perez empezo a invertir en infraestructura en el pais.',
      'Para <strong>2013</strong>, tenia una licitacion de <strong>setenta millones de euros</strong> para construir la doble calzada <strong>Conexion Pacifico Medellin-Bolombolo</strong>, la ruta <strong>Medellin-Buenaventura</strong>, una concesion por <strong>25 anos</strong> y una bolsa de <strong>mil millones de pesos</strong>.',
      'Por eso aun se ve a Uribe visitando constantemente y no solamente Uribe, tambien <strong>Pastrana</strong> y <strong>Santos</strong>; despues de Uribe vino Santos, y no es por hinchas del <strong>Real Madrid</strong> ni por corazon blanco.',
      'La razon es que <strong>Florentino Perez</strong> tiene plata en Colombia: esta metido en muchas concesiones y su empresa hace parte de un consorcio que se llama <strong>COMSA</strong> con <strong>WM</strong>, para que no lo confundan con el COMSA espanol, responsable de buena parte de las dobles calzadas del pais.',
      'En esa logica, el futbol funciona como vitrina de <strong>poder economico</strong> y relaciones, mas que como politica deportiva de base.'
    ],
    editorialGallery:[
       {
        url: '/alvaro-uribe-sorprende-al-referirse-al-real-madrid-y-su-decimoquinta-champions-league.jpg',
        caption: 'Florentino Perez entrega la camiseta del Real Madrid a Alvaro Uribe.',
        credit: 'Archivo'
      }
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
    shortDescription: 'Mundial Sub-20, crisis del Bolillo y llegada de Pekerman.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Juan_Manuel_Santos_and_Lula_%28cropped%29.jpg/640px-Juan_Manuel_Santos_and_Lula_%28cropped%29.jpg',
    paragraphs: [
      'La foto fue con <strong>Ramon Calderon</strong>, pero el relato subraya que el socio mayoritario ya era <strong>Florentino Perez</strong>.',
      'El proceso entre <strong>Santos</strong> y el futbol se describe como especialmente revelador, mas alla de la correlacion con los negocios de Florentino.',
      'En <strong>2011</strong>, con Santos en la presidencia, Colombia fue anfitriona del <strong>Mundial Juvenil Sub-20</strong>; la foto de ese ano muestra a Santos junto a <strong>Seth Blatter</strong> y <strong>Luis Bedoya</strong>, protagonistas del <strong>FIFA Gate</strong>.',
      'Ese encuentro fue en <strong>El Campin</strong> y en ese Mundial Colombia se quedo pronto.',
      'El 2011 deja otra crisis: la eliminacion del Sub-20 y el escandalo de violencia de genero del <strong>Bolillo</strong>.',
      'Tras ese episodio, Santos llama a <strong>Luis Bedoya</strong> y plantea la necesidad de un tecnico serio; mueve fichas politicas y billetera para traer a <strong>Nestor Pekerman</strong>, con recursos que llegan a las federaciones y no solo al futbol.',
      'La era <strong>Pekerman</strong> se atribuye a Santos: presiona y convence para su llegada y luego intenta mantenerlo cuando <strong>Yesurum</strong> busca sacarlo tras la salida de Bedoya.',
      'Ese pulso termina con el cierre del gobierno Santos en <strong>2018</strong>, cuando llega el gobierno de <strong>Ivan Duque</strong>, el mejor cabeceador de veintiuna que se ha sentado en la Casa de Narino.'
    ],
    sources: [
    ]
  },
  {
    id: 'ivan-duque-2018',
    year: '2018',
    termStartYear: '2018',
    termEndYear: '2022',
    name: 'Ivan Duque',
    shortDescription: 'Cabecitas, FIFA Gate y un cierre de investigaciones.',
    image: 'https://static01.nyt.com/images/2021/08/30/world/30colombia-duque-1-esp-1/30colombia-duque-1-superJumbo.jpg',
    paragraphs: [
      'La imagen publica de <strong>Ivan Duque</strong> se puebla de cabecitas: fotos con el <strong>Real Madrid</strong>, con <strong>Suso el Pazpi</strong>, en una escuela o en cualquier escenario.',
      'El relato insiste en que Duque no podia ver un balon sin mostrar que era capaz de dormirla en la cabeza, una obsesion rara en su puesta en escena.',
      'Se le califica como un “imbarroquin” y se le disputa un lugar entre los peores presidentes; Marroquin aparece como antecedente, pero Duque, el aprendiz, queda como caso extremo.',
      'Mas alla de las cabecitas, se afirma que desperdicio una posibilidad historica: el <strong>FIFA Gate</strong> de <strong>2015</strong> abrio la puerta para que los gobiernos intervinieran un futbol visto como corrupto.',
      'Duque comenzo pretendiendo controlarlo con el <strong>Ministerio del Deporte</strong>, con <strong>Lucena</strong>, y pidiendo la cabeza de <strong>Ramon Yesurum</strong>, senalado como organizador de un cartel de reventa de loterias.',
      'Hoy Duque hace parte de la Junta de la <strong>Fundacion FIFA</strong>.',
      'En los ultimos veintiun dias de su gobierno, Duque recibe a <strong>Gianni Infantino</strong>, presidente de la FIFA.',
      'La cercania se explica por <strong>Ramon Yesurum</strong>: habia colado una ficha en el comite de etica y el voto decisivo de <strong>Maria Clara Rojas</strong> evito la salida de Infantino; por eso, se dice, Infantino le debe el puesto y el sombrero.',
      'Con Yesurum al borde, por el cartel de reventa de boleteria, el caso de <strong>Colfutpro</strong> en el <strong>Ministerio del Trabajo</strong> y procesos en la <strong>SIC</strong>, la visita de Infantino abre un giro.',
      'Primero, la <strong>Superintendencia de Industria y Comercio</strong> deja quietas las investigaciones por vetos a futbolistas y cartelizacion de la Liga Femenina.',
      'Segundo, el <strong>Ministerio del Trabajo</strong> cierra el caso sobre derechos laborales de futbolistas; el jefe directo del ministerio es el presidente.',
      'Tercero, Duque entrega el poder y a los 15 dias termina con Infantino; hoy juega futbol con viejas glorias y hace sus cabecitas.',
      'La conclusion editorial es clara: meterse con el futbol puede dar votos y poder, pero casi siempre termina alineando a los gobiernos del lado del futbol.'
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
  },
  {
    id: 'gustavo-petro-2022',
    year: '2022',
    termStartYear: '2022',
    termEndYear: '2026',
    name: 'Gustavo Petro',
    shortDescription: 'Divorcio con los dirigentes y disputa en TV abierta.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/01_Gustavo_Petro.jpg',
    paragraphs: [
      'El relato sostiene que <strong>Petro</strong> es el unico que esta en divorcio con los dirigentes del futbol, una rareza en esta historia.',
      'La columna afirma tener fuentes directas sobre un episodio en el <strong>Ministerio del Interior</strong>.',
      'En esa reunion, los representantes del futbol le dicen al gobierno que no los aprieten tanto porque les organizan un “fuera Petro”.',
      'Ese “fuera Petro” sale por television y lo ve todo el mundo porque la seleccion convoca a todo el pais.',
      'Es la primera vez que los dirigentes no tienen a un gobierno de su lado.',
      'Tal vez el unico que no habia estado de su lado era <strong>Belisario</strong>, que termino estando de su lado de todas formas.'
    ],
    sources: [
      {
        label: 'Gustavo Petro (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Gustavo_Petro'
      },
      {
        label: 'Presidencia de Gustavo Petro (Wikipedia)',
        url: 'https://es.wikipedia.org/wiki/Presidencia_de_Gustavo_Petro'
      }
    ]
  }
];
