import re

def fix_text(text):
    replacements = {
        r'\brevolucion\b': 'revolución',
        r'\bvolteo\b': 'volteó',
        r'\bnuñez\b': 'Núñez',
        r'\bNuñez\b': 'Núñez',
        r'\bpais\b': 'país',
        r'\beducacion\b': 'educación',
        r'\bpolitico\b': 'político',
        r'\bpolitica\b': 'política',
        r'\bpoliticas\b': 'políticas',
        r'\bSeth Blatter\b': 'Sepp Blatter',
        r'\bultimo\b': 'último',
        r'\bRepublica\b': 'República',
        r'\brepublica\b': 'república',
        r'\bConstitucion\b': 'Constitución',
        r'\bRegeneracion\b': 'Regeneración',
        r'\btermino\b': 'terminó',
        r'\bbeisbol\b': 'béisbol',
        r'\bsegun\b': 'según',
        r'\bRaul\b': 'Raúl',
        r'\bhistorico\b': 'histórico',
        r'\bhistorica\b': 'histórica',
        r'\bjovenes\b': 'jóvenes',
        r'\bensenaron\b': 'enseñaron',
        r'\bTambien\b': 'También',
        r'\btambien\b': 'también',
        r'\bhabria\b': 'habría',
        r'\bcristianismo\b': 'cristianismo',
        r'\bcatolica\b': 'católica',
        r'\bcaeria\b': 'caería',
        r'\bhegemonia\b': 'hegemonía',
        r'\bmas\b': 'más', # Need to be careful here, usually "más" is intended in this text
        r'\brealizo\b': 'realizó',
        r'\bmetodos\b': 'métodos',
        r'\bbritanicas\b': 'británicas',
        r'\bfutbol\b': 'fútbol',
        r'\btenis\b': 'tenis',
        r'\bcriquet\b': 'críquet',
        r'\bllevo\b': 'llevó',
        r'\bunico\b': 'único',
        r'\btenia\b': 'tenía',
        r'\brarisima\b': 'rarísima',
        r'\basin\b': 'así',
        r'\basi\b': 'así',
        r'\bnacio\b': 'nació',
        r'\bestablecio\b': 'estableció',
        r'\bexpidio\b': 'expidió',
        r'\bparagrafo\b': 'parágrafo',
        r'\bPracticas\b': 'Prácticas',
        r'\bpracticas\b': 'prácticas',
        r'\belites\b': 'élites',
        r'\bano\b': 'año',
        r'\banos\b': 'años',
        r'\bgano\b': 'ganó',
        r'\bademas\b': 'además',
        r'\bfunciono\b': 'funcionó',
        r'\bmedicos\b': 'médicos',
        r'\bespectaculo\b': 'espectáculo',
        r'\bolimpico\b': 'olímpico',
        r'\bolimpiadas\b': 'olimpíadas',
        r'\bcampaña\b': 'campaña',
        r'\bcampana\b': 'campaña',
        r'\brecibio\b': 'recibió',
        r'\bhabia\b': 'había',
        r'\btragedia\b': 'tragedia',
        r'\bconstruccion\b': 'construcción',
        r'\bmasificacion\b': 'masificación',
        r'\basasinato\b': 'asesinato',
        r'\bdesato\b': 'desató',
        r'\bextendio\b': 'extendió',
        r'\bdesplazo\b': 'desplazó',
        r'\blinaje\b': 'linaje',
        r'\bepoca\b': 'época',
        r'\batencion\b': 'atención',
        r'\bpermitio\b': 'permitió',
        r'\bactuo\b': 'actuó',
        r'\bvalvula\b': 'válvula',
        r'\bbogotazo\b': 'Bogotazo',
        r'\beleccion\b': 'elección',
        r'\btransicion\b': 'transición',
        r'\btelevision\b': 'televisión',
        r'\bpublicas\b': 'públicas',
        r'\bpublico\b': 'público',
        r'\bprivatizacion\b': 'privatización',
        r'\bmodernizacion\b': 'modernización',
        r'\bcreacion\b': 'creación',
        r'\bsimbolica\b': 'simbólica',
        r'\bsimbolico\b': 'simbólico',
        r'\bdisenadora\b': 'diseñadora',
        r'\binstitucion\b': 'institución',
        r'\binstituciones\b': 'instituciones',
        r'\baun\b': 'aún',
        r'\bEliecer\b': 'Eliécer',
        r'\bBogota\b': 'Bogotá',
        r'\bMedellin\b': 'Medellín',
        r'\bChoco\b': 'Chocó',
        r'\bLeon\b': 'León',
        r'\bGomez\b': 'Gómez',
        r'\bPerez\b': 'Pérez',
        r'\bNacional\b': 'Nacional',
        r'\bAtletico\b': 'Atlético',
        r'\bAmerica\b': 'América',
        r'\bnarcotráfico\b': 'narcotráfico',
        r'\bnarcotrafico\b': 'narcotráfico',
        r'\barbitro\b': 'árbitro',
        r'\barbitros\b': 'árbitros',
        r'\breferi\b': 'réferi',
        r'\bdecada\b': 'década',
        r'\bimagenes\b': 'imágenes',
        r'\btitulos\b': 'títulos',
        r'\bsubtitulos\b': 'subtítulos',
        r'\bnacion\b': 'nación',
        r'\bNacion\b': 'Nación',
        r'\bcampeon\b': 'campeón',
        r'\botuvo\b': 'obtuvo',
        r'\blinea\b': 'línea',
        r'\bconcluyo\b': 'concluyó',
        r'\bantidoto\b': 'antídoto',
        r'\bacordo\b': 'acordó',
        r'\bagreso\b': 'regresó',
        r'\bprohibio\b': 'prohibió',
        r'\bsalio\b': 'salió',
        r'\btumbaron\b': 'tumbaron',
        r'\bllego\b': 'llegó',
        r'\bdesplazo\b': 'desplazó',
        r'\bcomenzo\b': 'comenzó',
        r'\bquedo\b': 'quedó',
        r'\bjamas\b': 'jamás',
        r'\bdespues\b': 'después',
        r'\bMendez\b': 'Méndez',
        r'\bJose\b': 'José',
        r'\bhazaña\b': 'hazaña',
        r'\bhazana\b': 'hazaña',
        r'\binformacion\b': 'información',
        r'\bparticipacion\b': 'participación',
        r'\bexhibicion\b': 'exhibición',
        r'\bedicion\b': 'edición',
        r'\bcompeticion\b': 'competición',
        r'\bdecision\b': 'decisión',
        r'\bconexion\b': 'conexión',
        r'\bcohesion\b': 'cohesión',
        r'\breunion\b': 'reunión',
        r'\breuniones\b': 'reuniones',
        r'\balimento\b': 'alimentó'
    }

    for pattern, replacement in replacements.items():
        text = re.sub(pattern, replacement, text)
    
    # Exceptions where 'mas' shouldn't be 'más'
    # "mas que", "mas no", but honestly in most of the text "mas" was used for "más". We'll just leave "más".
    
    return text

with open('src/app/data/timeline-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure we don't mess up URLs or IDs
# We will only apply the replacements on the specific fields: 'shortDescription', 'paragraphs', 'caption'
import json

# Since it's a TS file exporting an array, applying regex globally might be dangerous.
# Let's apply standard regex only on values that follow certain keys like `shortDescription: "..."`
def replace_in_strings(match):
    prefix = match.group(1)
    content = match.group(2)
    suffix = match.group(3)
    return prefix + fix_text(content) + suffix

# Fix paragraphs array
content = re.sub(r'(paragraphs:\s*\[\s*)([\s\S]*?)(\s*\])', lambda m: m.group(1) + fix_text(m.group(2)) + m.group(3), content)
# Fix shortDescription
content = re.sub(r'(shortDescription:\s*")([^"]*)(")', replace_in_strings, content)
# Fix caption
content = re.sub(r'(caption:\s*")([^"]*)(")', replace_in_strings, content)

# Fix Seth Blatter
content = content.replace("Seth Blatter", "Sepp Blatter")

with open('src/app/data/timeline-data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Orthography fixed!")
