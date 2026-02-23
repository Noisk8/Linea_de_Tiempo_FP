const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/app/data/timeline-data.ts');
let content = fs.readFileSync(targetPath, 'utf8');

const prefixRegex = /export const TIMELINE_ENTRIES: TimelineEntry\[\] = /;
const match = content.match(prefixRegex);
if (!match) {
    console.error('Could not find TIMELINE_ENTRIES array.');
    process.exit(1);
}

const prefixLength = match.index + match[0].length;
const arrayStr = content.substring(prefixLength).replace(/;[\s\n]*$/, '');

// Safely evaluate the array
let entries;
try {
    entries = eval('(' + arrayStr + ')');
} catch (e) {
    console.error('Error evaluating array:', e);
    process.exit(1);
}

// Map of translations
const translations = {
    'rafael-nunez-1886': {
        name_en: 'Rafael Nuñez',
        shortDescription_en: 'Regeneration, 1886 Constitution, and baseball in Cartagena.',
        paragraphs_en: [
            'The profile presents him as a frustrated poet: Rafael Nuñez was the last president of the United States of Colombia and the first of the Republic of Colombia; he is attributed with the lyrics of the National Anthem.',
            'In the revolution of 1885 he turned to the liberals and ended up governing with the Conservative Party; that shift marks the beginning of the Regeneration and the drive for the 1886 Constitution.',
            'In El Cabrero, in front of his house in Cartagena, a baseball milestone is recorded: on <strong>July 20, 1897</strong> it was played for the first time in the city, according to historian and journalist Raul Porto Cabrales in his book on the historical memory of baseball in Bolivar and Cartagena.',
            'Porto says that young Cartagenans observed students from Cuba and Panama, who brought the equipment and taught the game.',
            'He also mentions an unconfirmed precedent: in 1874 the Cuban Francisco Balmaceda would have installed a sugar mill near Marialabaja with a baseball field for his workers, suggesting an early contact with the hot-corner sport.'
        ],
        editorialImageCaption_en: 'The local press remembers the first baseball game in Cartagena, 1897.'
    },
    'miguel-antonio-caro-1892': {
        name_en: 'Miguel Antonio Caro',
        shortDescription_en: 'First recorded match and disciplinary origin of football.',
        paragraphs_en: [
            'Miguel Antonio Caro left a quote: <strong>Colombia can only be Catholic</strong> because otherwise it would fall into barbarity; the sentence summarizes the <strong>conservative hegemony</strong> in its harshest form.',
            'During his government, the <strong>first football match</strong> in Colombia on record took place. <strong>Henry Rowan Lemly</strong> was an American colonel obsessed with the training methods of <strong>British universities</strong>, where modern sports were born: regulations for <strong>rugby</strong>, <strong>football</strong>, <strong>tennis</strong>, and <strong>cricket</strong>.',
            'That 19th-century phenomenon sought to organize, normalize, and civilize confrontations, and in Colombia, it translated into the reorganization of the nation and the creation of the <strong>military school</strong>.',
            '<strong>Lemly</strong> brought the football rules from <strong>England</strong> and applied them in Colombia; the only thing identifying it as football was that it was <strong>11 against 11</strong>. He brought football, gymnastics, and tennis, establishing a bizarre line in the origin of sports in the country.',
            'The story holds there were precedents: in <strong>Puerto Colombia</strong> or <strong>Cartagena</strong>, British sailors got off, inflated an animal gut, and the port stevedores supposedly said, "What is this nonsense?", and that\'s how football started.',
            'In <strong>June 1892</strong>, the vice president of the republic, the effective president, witnessed that game and that exhibition of modern training. Football officially born in Colombia for a president.'
        ],
        editorialImageCaption_en: 'The first registered match in Colombia, according to El Malpensante\'s story.'
    },
    'jose-manuel-marroquin-1904': {
        name_en: 'Jose Manuel Marroquin',
        shortDescription_en: 'Physical education as a state policy.',
        paragraphs_en: [
            'During the government of Jose Manuel Marroquin, the term <strong>physical education</strong> was established for the first time in the country\'s history, within a <em>Regeneration</em> context that sought to reorganize the nation.',
            'In <strong>1904</strong>, <strong>Decree 419 of July 3</strong> was issued, regulating Law 39 and general teaching. In Chapter V, paragraph 4, physical education was formally defined.',
            'Articles 60 to 63 ordered correct attire, rigorous cleanliness, and natural posture during lessons. Calisthenics and gymnastics became mandatory, and every two weeks, half a day was dedicated to hygienic and recreational walks.',
            'The model responded to the ideal of "a sound mind in a sound body" and took European practices as a reference, particularly British ones, where physical education was understood as a tool for social order.'
        ],
        editorialImageCaption_en: 'Decree 419 (1904): physical education as a state policy.'
    },
    'carlos-e-restrepo-1912': {
        name_en: 'Carlos Eugenio Restrepo',
        shortDescription_en: 'First championship: Copa Carlos E. Restrepo.',
        paragraphs_en: [
            'From the presidency, Carlos Eugenio Restrepo promoted the organization of sports championships in a context where football was practically an activity for social clubs.',
            'In <strong>1912</strong>, the <strong>first football championship in the country</strong>, the <strong>Copa Carlos E. Restrepo</strong>, took place, considered the first structured competition in Colombian football.',
            'The tournament was won by the <strong>Polo Club de Bogota</strong>, the first organized team in the country. Its headquarters were in the sector that later gave its name to the El Polo neighborhood, where one of the first football fields in the city operated.',
            'For several years, the Polo Club dominated the Bogota scene until it was displaced by emerging clubs like Bartolino and the Faculty of Medicine of the National University.',
            'The episode confirms that early football was a sport of <em>urban elites</em>, articulated around clubs like the Polo Club and Club Colombia, while regional institutions emerged that would later become national football benchmarks.'
        ],
        editorialImageCaption_en: 'Polo Club de Bogota, champion of the Copa Carlos E. Restrepo (1912).'
    },
    'pedro-nel-ospina-1920s': {
        name_en: 'Pedro Nel Ospina',
        shortDescription_en: 'Law 80 and elite football on private fields.',
        paragraphs_en: [
            'Pedro Nel Ospina, president in the 1920s, is portrayed with football teams of the time in full dress uniform, posing with elite social clubs on the <strong>La Merced</strong> field, today <strong>San Bartolome de La Merced</strong>.',
            'The photographs evidence the <em>elitist</em> nature of early football and the political interest in the social status that surrounded these scenarios.',
            'In <strong>1925</strong>, <strong>Law 80</strong> was signed, creating the <em>National Physical Education Commissions</em>, predecessor of Coldeportes and the current Ministry of Sports.',
            'Organized sports moved within closed urban circuits, with little reach to popular sectors.'
        ],
        editorialImageCaption_en: 'Pedro Nel Ospina with high society teams in La Merced.'
    },
    'miguel-abadia-1926': {
        name_en: 'Miguel Abadia Mendez',
        shortDescription_en: 'Banana massacre and National Games.',
        paragraphs_en: [
            'The physical education measures spurred the <strong>first Colombian Olympics</strong>, which would later be called the <strong>National Games</strong>.',
            'These competitions were held between <strong>December 1928</strong> and <strong>January 1929</strong> in Cali, a city that solidified itself as an Olympic reference and, later, host of the 1971 Pan American Games.',
            'In football, there were no formal departmental teams or leagues. The team representing <strong>Magdalena</strong> became the champion and is recognized as the <em>first national champion</em> of such competitions.',
            'Upon returning to Santa Marta, the team received a tribute in front of the military governor <strong>Cortes Vargas</strong>, where a minute of silence was requested for the victims of the <strong>banana massacre</strong>, an episode that Cortes Vargas himself had denied.',
            'The press of the time noted that some players were relatives of victims, and that social and political climate accelerated the end of the conservative hegemony: the liberals returned to power in <strong>1930</strong> with Enrique Olaya Herrera.'
        ],
        editorialImageCaption_en: 'Miguel Abadia Mendez during his presidential term.'
    },
    'enrique-olaya-1930': {
        name_en: 'Enrique Olaya Herrera',
        shortDescription_en: 'Liberal Republic and the massification of stadiums.',
        paragraphs_en: [
            'Enrique Olaya Herrera leads the <strong>Liberal Republic</strong> (1930-1945). During his government, the <strong>construction of stadiums</strong> in the country is consolidated.',
            'Before 1930, there was only one stadium in Colombia: the <strong>Julio Torres</strong>, later the <em>Modern Stadium</em>, built in Barranquilla in 1922. All other sports activities took place on fields with makeshift grandstands and unsafe conditions for the public. With the Liberal Republic begins the <strong>massification of sports</strong>.',
            'Under Olaya Herrera, key venues are erected: the <strong>Romelio Martinez</strong> (1934), the <strong>Alfonso Lopez</strong> at the National University (1936), and the <strong>Pascual Guerrero</strong> (1937). This infrastructure opens the era of so-called <em>brown football</em>, still without professionalism or a unified championship, but with informal payments and local competitions that gave rise to many traditional clubs.'
        ],
        editorialImageCaption_en: 'Sports infrastructure during the Liberal Republic.'
    },
    'mariano-ospina-1948': {
        name_en: 'Mariano Ospina Perez',
        shortDescription_en: 'Bogotazo, Dimayor, and professional football.',
        paragraphs_en: [
            'Mariano Ospina Perez came to power in <strong>1946</strong> after defeating <strong>Jorge Eliecer Gaitan</strong> in elections marked by liberal divisions. Together, <em>Gaitan and Echandia</em> garnered more votes than Ospina, but separately the conservative candidate prevailed, returning his party to power.',
            'The assassination of Gaitan in <strong>1948</strong> unleashed the <strong>Bogotazo</strong>. Violence spread throughout the country, and in some regions like Barrancabermeja, workers took control for several weeks. The episode marked the beginning of a cycle of revenge and political persecution.',
            'Following the Bogotazo, a curfew was imposed, and gatherings of more than two people were banned. There were two official exceptions: <strong>cinema</strong> and <strong>football</strong>. In that context, Alfonso Senior, a Millonarios executive, pushed for the creation of <strong>Dimayor</strong> in June and the start of the professional championship in August 1948.',
            'Football consolidated itself as a social gathering space amid censorship. The press, restricted by the <em>national censor</em>, found in sports a permissible topic to cover and comment on.'
        ],
        editorialImageCaption_en: 'Mariano Ospina Perez and Jorge Eliecer Gaitan on the campaign trail.'
    },
    'laureano-gomez-1950': {
        name_en: 'Laureano Gomez',
        shortDescription_en: 'El Dorado and football as a political spectacle.',
        paragraphs_en: [
            'Laureano Gomez was a hardline conservative leader. He had been a senator and chancellor under Mariano Ospina before becoming president in <strong>1950</strong>.',
            'His term coincides with the era of <em>El Dorado</em>, when Colombian football experienced a boom marked by the arrival of stars like <strong>Adolfo Pedernera</strong> and <strong>Alfredo Di Stefano</strong>. Public attention shifted toward the sports spectacle amid political violence.',
            'The El Dorado cycle is explained by the institutional rupture between <strong>Dimayor</strong> and the federative authority (<strong>Adefutbol/FIFA</strong>), allowing the signing of stars outside the regular international transfer framework. The result was a massively attended championship creating a sports and economic bubble.',
            'International normalization came with the <strong>Lima Pact (1951)</strong>, which set conditions to end the cycle and mandate the return of players. This milestone occurs during the Laureano/Urdaneta period.',
            'Amidst <em>The Violence</em>, football functioned as an <em>escape valve</em>. Archives highlight massive attendance at matches while public order deteriorated; in 1953 Laureano falls, Rojas Pinilla overthrows him, and the circus superstar, Di Stefano, leaves for Spain.'
        ],
        editorialImageCaption_en: 'Millonarios champion in 1951, symbol of the El Dorado era.'
    },
    'gustavo-rojas-pinilla-1953': {
        name_en: 'Gustavo Rojas Pinilla',
        shortDescription_en: 'End of the football Dorado and the first peace process.',
        paragraphs_en: [
            'In <strong>1953</strong>, General Gustavo Rojas Pinilla seized power through a coup d\'état, ending Laureano Gomez\'s conservative government.',
            'That same year, the era known as the <strong>"El Dorado"</strong> of Colombian football came to an end. At FIFA\'s behest, it was agreed that the footballers who "pirated" in Colombia would return to their original teams, or alternatively, as with <strong>Alfredo Di Stefano</strong>, were transferred to Europe.',
            'The football Dorado (1949-1953) had been a golden era where the peso had almost the same purchasing power as the dollar, and Colombian teams signed South American stars like Adolfo Pedernera, Alfredo Di Stefano, and Nestor Raul Rossi, forming Millonarios\' legendary "Blue Ballet".',
            'Rojas Pinilla signs the country\'s <strong>first peace process</strong>, concluding with the demobilization of <strong>3,500 guerrillas</strong> who had taken up arms after Gaitan\'s death in 1948.',
            'During his dictatorship, football became a <strong>popular showcase</strong> and an antidote to the violence that erupted after the Bogotazo. The State supported stadium construction and bolstered sports as a mechanism for social cohesion.',
            'The narrative presents him as a president considered among the best in the country\'s history, who knew how to use football as a tool for national unification in times of crisis.'
        ]
    },
    'alberto-lleras-1962': {
        name_en: 'Alberto Lleras Camargo',
        shortDescription_en: 'First World Cup and symbolic dispute in the Cold War.',
        paragraphs_en: [
            'The <strong>Colombian National Team</strong> qualifies for its first <strong>World Cup</strong> with <strong>Adolfo Pedernera</strong>, a star from the <em>Dorado</em>, as coach.',
            'In the qualifiers, they defeated <strong>Peru</strong> and traveled to <strong>Arica</strong>, a venue initially assigned to their rival and a border city between <strong>Chile</strong> and <strong>Peru</strong>.',
            'The most remembered match is the <strong>4-4</strong> against the <strong>USSR</strong>, the European champion: Colombia scores four goals against <strong>Lev Yashin</strong>, the best goalkeeper at the time. In an era when the acronym <strong>CCCP</strong> (Soviet Union) was popularly read as <em>Con Colombia Casi Perdemos (With Colombia We Almost Lost)</em>, the Colombian team nearly prevailed in a match that transcended sports. In the next game, <strong>Yugoslavia</strong>, also communist, defeated us <strong>5-0</strong>, putting an end to a run defined by the stark contrast between the feat against the USSR and the harsh reality against another Eastern Bloc nation.',
            'Amidst the <strong>Cold War</strong>, the press and cartoons turned the match into a <strong>political narrative</strong> of Colombia standing against communism, and the State appropriated the sports achievement to bolster its project.'
        ]
    },
    'carlos-lleras-1968': {
        name_en: 'Carlos Lleras Restrepo',
        shortDescription_en: 'Coldeportes and the Pan American cycle.',
        paragraphs_en: [
            'In 1968, during the <strong>National Front</strong>, Carlos Lleras Restrepo drove the <strong>modernization of the State</strong> and created institutes; that year marks the birth of <strong>Coldeportes</strong>, the <em>Colombian Institute of Sports and Recreation</em>.',
            'The creation of Coldeportes responded to a concrete need: Colombia had won the bid to host the <strong>1971 Pan American Games in Cali</strong>, but its sports organization remained backward. The institute aimed to <strong>organize the system</strong> and prepare the country to <strong>compete</strong> and <strong>host</strong>.',
            'From this cycle emerged the orange uniform known as the <strong>zapote mecanico (1971-1979)</strong>. The color was associated with the <strong>Coldeportes logo</strong> and extended to various sports disciplines of the decade.',
            'Within that narrative, the State builds <strong>sports identity</strong> through <strong>image</strong> and the <strong>event</strong>, rather than through <strong>social well-being</strong> or <strong>grassroots development</strong>.'
        ]
    },
    'belisario-betancur-1983': {
        name_en: 'Belisario Betancur',
        shortDescription_en: '1986 World Cup, narco-trafficking in football, and uniform change.',
        paragraphs_en: [
            'Colombia had won the bid for the <strong>1986 World Cup</strong>, but in <strong>1983</strong>, the government of <strong>Belisario Betancur</strong> relinquishes the right to host it. In a <em>presidential address</em>, the decision is justified by <strong>costs</strong> and <strong>FIFA\'s demands</strong> along with those of its commercial partners.',
            'The episode becomes a <strong>national debate</strong>: for many, Colombia was the only country to ever <strong>reject a World Cup</strong>; for others, it was a practical decision facing <strong>internal priorities</strong> within a <em>protectionist</em> economic context.',
            'During his government, the Minister of Justice, <strong>Rodrigo Lara Bonilla</strong>, dared to denounce what was <em>vox populi</em>: the presence of <strong>narco-trafficking</strong> money in Colombian football teams. In a famous press conference, Lara accused <strong>Atlético Nacional, Millonarios, Santa Fe, Deportivo Independiente Medellín, América, and Deportivo Pereira</strong> of receiving narco-funds.',
            'This marked the beginning of the so-called <strong>"second Dorado"</strong> of Colombian football, an era where teams could sign world-class players thanks to cartel money. In 1983, <strong>Gonzalo Rodríguez Gacha</strong> appeared on television admitting to being the third partner in Millonarios\' shareholding package, although his rancher facade collapsed when he was proven to be a member of the Medellín Cartel.',
            'Subsequently, judicial decisions backed Lara\'s claims. <strong>Hernán Botero</strong>, a principal shareholder of Nacional, was extradited to the United States for money laundering during this administration.',
            'In <strong>1985</strong>, a <em>commission of notables</em> pushed to change the <strong>Colombian National Team\'s</strong> uniform. Names like <strong>Daniel Samper Pizano</strong>, <strong>Alberto Casas</strong>, and <strong>Carlos Cure</strong> are mentioned, and the <strong>tricolor yellow, blue, and red</strong> is officially presented on <strong>February 8, 1985</strong> with public photos.',
            'The launch is forever linked with <strong>Amparo Grisales</strong>, remembered as the first figure to pose wearing the new jersey, designed by Maria Elvira Pardo, in a context where the government oscillates between <strong>moral control</strong> over football and the <strong>symbolic use</strong> of sports to build <strong>national identity</strong>, just as narco-trafficking began permeating the structures of professional football.'
        ]
    },
    'virgilio-barco-1986': {
        name_en: 'Virgilio Barco',
        shortDescription_en: 'Narco-terrorism, football, and glory amid violence.',
        paragraphs_en: [
            'Virgilio Barco assumes the presidency in a context of <strong>crisis and political violence</strong>, and the accounts present him as an aging leader suffering from a <strong>cerebrovascular problem</strong> that affected his health during his tenure.',
            'Political leadership is strongly marked by the prominence of the <strong>Minister of Government</strong> (now Interior), and in that transition, <strong>Cesar Gaviria</strong> gains relevance as a key actor.',
            'During his government, the country experienced the most critical moments of <strong>narco-terrorism</strong> related to football. In <strong>1988</strong>, the Antioquian referee <strong>Armando Perez</strong> (who would become a linesman in the Italy 90 World Cup final) was <strong>kidnapped</strong> right during the year-end finals. The ref appeared days later carrying a message: "if referees remain biased, they will be eliminated".',
            'In <strong>December 1989</strong>, referee <strong>Alvaro Ortega</strong> was <strong>assassinated</strong> with nine shots to the chest after officiating as a linesman in a match where <strong>Independiente Medellín</strong> and <strong>América</strong> tied at the Atanasio Girardot.',
            'The 1989 championship was delayed until March, after the Government demanded a report from the Superintendency of Companies regarding the financial management of the teams. The report revealed irregularities but did not stop the ball from rolling.',
            'Despite the violence, this was the era of greatest football glory: <strong>América de Cali</strong> won titles from 82 to 86 and three Libertadores runner-ups; <strong>Nacional</strong> won the <strong>Copa Libertadores de América in 1989</strong>, and <strong>Millonarios</strong> claimed the stars of <strong>87 and 88</strong>. Brothers <strong>Gilberto and Miguel Rodríguez Orejuela</strong>, founders of the Cali Cartel, were listed as the main shareholders of América and were captured in the 90s.',
            'The <strong>continuity of political elites</strong> limited substantive reforms while football remained a symbolic arena of cohesion, even in the darkest moments of narco-terrorism.'
        ]
    },
    'cesar-gaviria-1993': {
        name_en: 'Cesar Gaviria',
        shortDescription_en: 'The 5-0 and honors to the National Team.',
        paragraphs_en: [
            'The assassination of <strong>Luis Carlos Galan</strong> paves the political road that brings <strong>Cesar Gaviria</strong> to the presidency.',
            'His government championed the <strong>1991 Constitution</strong>, emphasizing a <strong>multicultural</strong> and <strong>neoliberal</strong> focus, though remaining <strong>centralist</strong>.',
            'His relationship with football is close, and his term coincides with the National Team\'s peak glory: <strong>Italy 90</strong> and, above all, the <strong>1993 qualifiers</strong> culminating in the <strong>5-0</strong> in Buenos Aires. In the 1993 Copa America, Colombia reached the semifinals, losing to Argentina on penalties.',
            'Following the 5-0, the president awards the <strong>Cross of Boyaca</strong> to <strong>Pacho Maturana</strong> and the players, a gesture that becomes a symbol of national cohesion even though it was an honor for a single match and not a championship.',
            'Gaviria also intervenes through the media: he calls coaches and players, their conversations air on the radio, and sporting glory is used to <strong>legitimize governments</strong> and displace structural debates.'
        ]
    },
    'ernesto-samper-1994': {
        name_en: 'Ernesto Samper',
        shortDescription_en: 'Process 8000 and a federation under narco pressure.',
        paragraphs_en: [
            'In <strong>1994</strong>, Ernesto Samper wins the elections against <strong>Andres Pastrana</strong>. The campaign is marred by allegations of <strong>funding from the Cali cartel</strong>, leading to the <strong>Process 8000</strong>.',
            'The story links this political crisis with football: in 1994, Colombia flops at the World Cup, reaffirming the relationship between the national team, the leadership, and the mafias. It is asserted that the <strong>Colombian Football Federation</strong> was heavily influenced by the cartel.',
            'In that context, <strong>Miguel Rodriguez Orejuela</strong> summons the National Team to his estate, offering economic incentives. His influence is explained by the fact that the Federation\'s president was <strong>Juan Jose Bellini</strong>, identified as a frontman for the kingpin.',
            'Bellini is arrested in <strong>1995</strong> for his ties to the Cali cartel and for <strong>money laundering</strong>. After leaving prison, he returns as an advisor in football, maintaining influence over clubs and executives.',
            'Sports politics is thoroughly permeated by illegal cash flows and power, with lasting effects on football\'s institutions.'
        ]
    },
    'andres-pastrana-2001': {
        name_en: 'Andres Pastrana',
        shortDescription_en: 'Copa America 2001 as a political project.',
        paragraphs_en: [
            'The government of <strong>Andres Pastrana</strong> arrived in <strong>1998</strong> with <strong>peace</strong> as its central goal, marked by the <strong>Caguán</strong> dialogues.',
            'To achieve context, he needed a symbol that connected with the people, and his major governmental project became the <strong>2001 Copa America</strong>.',
            'The narrative insists: he fought for it and lobbied relentlessly; he traveled to <strong>Paraguay</strong>, convinced everyone, and only failed to persuade the <strong>Argentines</strong> because, at that time, Colombia was experiencing a crisis of violence and conflict even worse than the current one.',
            'In that context, the vice president of the <strong>Colombian Football Federation</strong> was kidnapped and there was a <strong>terrorist attack</strong>; <strong>Argentina</strong> declared they wouldn\'t attend.',
            'Finally, <strong>Colombia</strong> was granted the <strong>Copa America</strong> and won it: it is the <strong>only Copa America</strong> Colombia has ever won, although some dismiss it because <strong>Argentina</strong> wasn\'t there.',
            'The title is secured with <strong>Oscar Cordoba</strong> maintaining a clean sheet and <strong>Victor Hugo Aristizabal</strong> as the tournament\'s top scorer.',
            'The final is decided against <strong>Mexico</strong> <strong>1-0</strong> with a goal by <strong>Ivan Ramiro Cordoba</strong>, and the celebration yields classic scenes: Pastrana wearing a jersey that reads <strong>Andres Pastrana</strong>, as if they wouldn\'t recognize him, receiving a medal alongside <strong>Antanas Mockus</strong>, mayor of <strong>Bogotá</strong>.',
            'The most iconic image is <strong>Pastrana</strong> lifting the <strong>trophy</strong> passed to him by <strong>Ivan Ramiro Cordoba</strong>; the sporting triumph becomes the government\'s greatest symbolic achievement and an attempt to revamp its image.'
        ]
    },
    'alvaro-uribe-2002': {
        name_en: 'Alvaro Uribe Velez',
        shortDescription_en: 'Sporting events and football diplomacy.',
        paragraphs_en: [
            'Fewer images are remembered of <strong>Uribe</strong> dealing directly with football than of <strong>Gaviria</strong>, <strong>Pastrana</strong>, or <strong>Belisario</strong>, but the narrative stresses that <strong>Uribe</strong> indeed had much to do with sports.',
            'During his administration, the <strong>2005 Bolivarian Games</strong>, the <strong>2006 Central American and Caribbean Games</strong>, and the <strong>2010 South American Games</strong> were held, all in <strong>Medellín</strong>, with successful outcomes; yet, it seemed Uribe had nothing to do with football.',
            'The key image is from <strong>2010</strong>: President Uribe receiving a <strong>Real Madrid</strong> jersey.',
            'The scene suggests the one handing it over is <strong>Florentino Perez</strong> as president, when at that time he was merely the <strong>largest shareholder</strong>.',
            'The story explains that <strong>Alvaro Uribe Velez</strong> opened the door for the businesses of the company <strong>Actividades de Construcción y Servicios (ACS)</strong> to grow in Colombia; the owner of ACS is <strong>Florentino Perez</strong>.',
            'Since <strong>1997</strong>, when Uribe was governor of <strong>Antioquia</strong>, Florentino Perez began investing in infrastructure in the country.',
            'By <strong>2013</strong>, he held a <strong>seventy-million euro</strong> contract to build the <strong>Medellín-Bolombolo Pacific Connection</strong> dual carriageway and the <strong>Medellín-Buenaventura</strong> route, a <strong>25-year concession</strong> with a budget of <strong>one billion pesos</strong>.',
            'That is why Uribe is still seen constantly visiting, and not only Uribe, but also <strong>Pastrana</strong> and <strong>Santos</strong>. After Uribe came Santos, and it\'s not because they are <strong>Real Madrid</strong> fans or have a white heart.',
            'The reason is that <strong>Florentino Perez</strong> has money in Colombia: he is involved in many concessions and his company is part of a consortium called <strong>COMSA</strong> with <strong>WM</strong> (so it is not confused with the Spanish COMSA) responsible for a large part of the country\'s major highways.',
            'In this logic, football serves as a showcase for <strong>economic power</strong> and relationships, rather than a grassroots sports policy.'
        ]
    },
    'juan-manuel-santos-2011': {
        name_en: 'Juan Manuel Santos',
        shortDescription_en: 'U-20 World Cup, Bolillo\'s crisis, and Pekerman\'s arrival.',
        paragraphs_en: [
            'The photo was taken with <strong>Ramon Calderon</strong>, but the story underscores that the majority partner was already <strong>Florentino Perez</strong>.',
            'The dynamic between <strong>Santos</strong> and football is described as especially revealing, beyond the correlation with Florentino\'s businesses.',
            'In <strong>2011</strong>, with Santos occupying the presidency, Colombia hosted the <strong>U-20 Youth World Cup</strong>; the photo from that year shows Santos alongside <strong>Sepp Blatter</strong> and <strong>Luis Bedoya</strong>, protagonists of the <strong>FIFA Gate</strong> scandal.',
            'That meeting took place in <strong>El Campin</strong>, and Colombia exited early from that tournament.',
            'The year 2011 leaves another crisis: the elimination of the U-20 team and the gender violence scandal involving <strong>Bolillo</strong>.',
            'Following that episode, Santos contacted <strong>Luis Bedoya</strong>, stressing the need for a serious coach. He pulled political and financial strings to bring in <strong>Nestor Pekerman</strong>, moving resources into federation coffers, not just into football itself.',
            'The <strong>Pekerman</strong> era is attributed to Santos: he pressured and brokered his arrival, and later sought to retain him when <strong>Jesurum</strong> tried to oust him after Bedoya\'s departure.',
            'That tug-of-war ended alongside the Santos administration in <strong>2018</strong>, handing governance to <strong>Ivan Duque</strong>, dubbed the finest user of the "21 header keepie-uppies" ever to sit in the Casa de Nariño.'
        ]
    },
    'ivan-duque-2018': {
        name_en: 'Ivan Duque',
        shortDescription_en: 'Keepie-uppies, FIFA Gate, and an end to investigations.',
        paragraphs_en: [
            'The public image of <strong>Ivan Duque</strong> is littered with keepie-uppies ("cabecitas"): photos with <strong>Real Madrid</strong>, with comedian <strong>Suso el Pazpi</strong>, at a school, or anywhere else.',
            'The narrative insists that Duque couldn\'t spot a ball without demonstrating he could balance it on his head, an odd obsession in his public staging.',
            'He is sometimes compared to "imbarroquin" and competes for a spot among the worst presidents; Marroquin acts as a precedent, but Duque, the apprentice, is framed as an extreme case.',
            'Beyond the headers, it is claimed he squandered a historic opportunity: the <strong>2015 FIFA Gate</strong> opened the door for governments to intervene in a football establishment perceived as corrupt.',
            'Duque started off seeking to rein it in through the <strong>Ministry of Sports</strong> under <strong>Lucena</strong>, demanding the resignation of <strong>Ramon Jesurum</strong>, accused of running a ticket-scalping cartel.',
            'Today, Duque happens to sit on the Board of the <strong>FIFA Foundation</strong>.',
            'In the final twenty-one days of his administration, Duque hosted <strong>Gianni Infantino</strong>, the president of FIFA.',
            'The coziness is explained by <strong>Ramon Jesurum</strong>: he had placed a pawn on the ethics committee, and the deciding vote of <strong>Maria Clara Rojas</strong> prevented Infantino\'s ouster; therefore, they say, Infantino owes him his position.',
            'With Jesurum on the brink—over the ticketing cartel, the <strong>Acolfutpro</strong> case in the <strong>Ministry of Labor</strong>, and the <strong>SIC</strong> processes—Infantino\'s visit triggered a pivotal shift.',
            'First, the <strong>Superintendency of Industry and Commerce</strong> froze its investigations into bans against footballers and the cartelization of the Women\'s League.',
            'Second, the <strong>Ministry of Labor</strong> closed the case regarding footballers\' labor rights; the direct boss of the ministry is the president.',
            'Third, Duque hands over power and 15 days later ends up with Infantino; today he plays football with former legends and continues doing his keepie-uppies.',
            'The editorial conclusion is clear: meddling with football can yield votes and power, but it almost always ends up aligning governments with the side of the football establishment.'
        ]
    },
    'gustavo-petro-2022': {
        name_en: 'Gustavo Petro',
        shortDescription_en: 'Divorce from executives and an open TV dispute.',
        paragraphs_en: [
            'The story argues that <strong>Petro</strong> is the only one truly divorced from football\'s top executives, a rarity in this history.',
            'The column boasts direct sources recounting an episode at the <strong>Ministry of the Interior</strong>.',
            'During that meeting, football representatives warned the government not to squeeze them so hard, or they would organize an "Out with Petro" ("fuera Petro") campaign.',
            'That "fuera Petro" was broadcast on open television, seen by everyone because the national team draws the entire country.',
            'It is the first time the executives do not have a government squarely on their side.',
            'Perhaps the only other one not initially on their side was <strong>Belisario</strong>, who ended up falling in line anyway.'
        ]
    }
};

// Map through the array and inject translations
for (let entry of entries) {
    const trans = translations[entry.id];
    if (trans) {
        if (trans.name_en) entry.name_en = trans.name_en;
        if (trans.shortDescription_en) entry.shortDescription_en = trans.shortDescription_en;
        if (trans.paragraphs_en) entry.paragraphs_en = trans.paragraphs_en;
        if (trans.editorialImageCaption_en && entry.editorialImage) {
            entry.editorialImage.caption_en = trans.editorialImageCaption_en;
        }
        // Note: I only translated a few image captions, the ones that are explicitly text.
    }
}

// Rebuild the file content
const exportTypeLines = `export type TimelineSource = {
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

export const TIMELINE_ENTRIES: TimelineEntry[] = `;

// Stringify but format with 2 space identation
let newArrayStr = JSON.stringify(entries, null, 2);
// JSON stringify converts undefined to non-existent properties, that's fine.
// Replace double quotes on keys if they're valid identifiers to look nicer (optional)
newArrayStr = newArrayStr.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
// Make sure strings don't break with nice formatting
// Since standard JSON.stringify uses double quotes for strings, it's valid TS syntax.

const finalContent = exportTypeLines + newArrayStr + ';\n';
fs.writeFileSync(targetPath, finalContent, 'utf8');

console.log('Successfully updated timeline-data.ts with English translations.');
