# Pixar, Cars
 Pixar and Cars inspired website

## Inleiding
Voor deze opdracht ben ik begonnen met het maken van een website gebaseerd op de officele Taylor Swift website (daarom de naam TS website). Daarna heb ik besloten om toch een ander onderwerp te kiezen, omdat alle webpagina's erg vergelijkbaar waren. Daarom ben ik aan de slag gegaan met de Pix website. Ik ben vooral gaan focussen op de Pixar pagina: featured films en de Cars (1) pagina. 

## Test 1: Pixar website, accessibility
Tijdens het testen voor de eerste keer ben ik aan de slag gegaan met de screenreader. De originele Pixar website werkt niet enorm goed qua accessibility. Wanneer ik de screenreader aanzet is deze continue elementen aan het oplezen die niet in beeld zijn. Je kan daaro mniet zien waar op gefucust wordt. Ook zegt de screenreader bijna alleen maar "link, link, link". Het is enrom gaotisch om de screenreader te gebruiken.
Het gebruiken van TAB werkt ook niet enorm goed. Alle elementen (ook de enorme hoeveelheid aan foto's) worden als aparte elementen gezien waardoor het mega lang duurt voordat je door de gehele pagina heen bent. 
De originele Pixar website is dus niet enorm goed qua accessibility features. Ik ga bij mijn versie eraan werken om dit te verbeteren.

## Proces 
### Vereisten
Ik heb ervoor gekozen om aan de slag te gaan met de surface planes. 
De 5 onderwerpen die ik heb toegevoegd zijn: 
 - Geluid
 - Dark/light mode
 - Custom themes
 - Scroll animaties
 - Advanced positioning: fixed & z-index

Ik heb ervoor gekozen om hieraan te werken i.p.v. responsiveness, omdat dit mij een stuk makkelijker leek. 

### Begin
Als eerst ben ik aan de slag gegaan met alle elementen erin zetten. Zo heb ik alle img en tekst in de HTML gezet. Nadat ik wist wat er zo ongeveer allemaal op een pagina moest ben ik aan de slag gegaan met de CSS en JS. 

### Styling
Het maken van een hamburger menu is een van de eerste dingen waar ik op gefocust heb. Zo kon ik ook makkelijk tussen de 2 pagina's switchen. Hiervoor heb ik een JS bestand aangemaakt. 
Daarna ben ik aan de slag gegaan met de algemene styling zoals de sections en tekstelementen. Hierna ben ik verder gegaan met het stijlen van de img door gebruik te maken van CSS grid, met behulp van Vasilis :) 
Ik was van plan om een parallax background te maken, maar na enig overleg met Vasilis heb ik toch besloten dit op een simpelere manier op te lossen. Daardoor heb ik uiteindelijk gebruik gemaakt van fixed positioning om een vaste achtergrond afbeelding te plaatsen. Door de content hieroverheen te laten scrollen en soms een opening toe te voegen krijg je alsnog een soort parallax effect.

### Javascript

#### Custom themes
Nadat de styling van beide pagina's goed was ben ik gaan werken aan het interactief maken van verschillende elementen. Zo heb ik buttons toegevoegd en met JS ervoor gezorgd dat de je van thema kan veranderen. Nu kan je tussen light & dark mode veranderen en daarnaast ook uit twee extra (leuke) thema's kiezen.
Echter kwam ik erachter dat dit een error veroorzaakte op een van de pagina's waar ik niet wilde dat de gebruiker van thema zou veranderen. Om dit te verhelpen heb ik de JS over twee bestanden verspreid, zodat de script die alleen op een specifieke pagina wordt gebruikt ook alleen hier wordt geladen.

#### Easter eggs (audio)
Ook heb ik JS gebruikt om **easter eggs** toe te voegen in de vorm van audio. Als je op specifieke afbeeldingen drukt wordt er een korte bijpassende audio clip afgespeeld. Dit leek mij een leuke en simpele manier om beide easter eggs en audio toe te voegen aan de pagina.

#### Scroll animaties
Als laatste heb ik ook nog scroll animaties toegevoegd. Dit houdt in dat bepaalde elementen tevoorschijn komen met een animatie wanneer je naar dit element toe bent gescrolled. Ik heb de animaties redelijk simpel gehouden om een professionele look te behouden.

## WCAG checklist
Nadat de website bijna klaar was ben ik opnieuw aan de slag gegaan met de WCAG checklist.
Om te beginnen heb ik mijn code getest in een HTML validator. Hier kwamen in eerste instantie nog een aantal errors uit en deze heb ik allemaal weggewerkt door de relevante code aan te passen.

Na het doorlopen van de rest van de checklist kwam ik erachter dat er nog een aantal dingen mistte op mijn website en ben ik deze gaan toevoegen. De aspecten die in deze check nog niet goed genoeg waren en die ik hierna heb verbeterd zijn:
- Remove horizontal scrolling
- Make sure decorative images uses empty attribute values
- Identify links that open in a new tab or window
- Check if high contrast mode is supported
- Check if reduced motion is supported (animations are disabled)
- Check if the website can be rotated

Dit laatste punt was nog wat ingewikkelder. Dit heb ik opgelost door te werken met media queries. Hierdoor is de website nu ook toegankelijk als je de telefoon draait. Hierdoor heb ik de website eigenlijk automatisch ook enigzins **responsive** gemaakt voor grotere schermen (zoals tablets of laptops). Dit komt doordat ik zoveel mogelijk in CSS met % waardes heb gewerkt.

## Test 2: Eigen website, accessibility
Na/tijdens het nalopen van de WCAG checklist heb ik een aantal punten verbeterd qua accessibility. Ik heb zelf onder andere getest met een screenreader, waarbij je door de website navigeert door gebruik te maken van je toetsenbord. Dit werkt nu (sinds ik gebruik maak van tabindex in de html) een stuk beter dan voorheen. Ook heb ik getest met **reduced motion** en **high contrast** settings. Ik heb ook hier gebruik gemaakt van media queries om te checken of iemand deze instellingen aan heeft staan zodat er kleine veranderingen plaatsvinden op de website die de ervaring voor deze mensen beter maakt. Bij reduced motion zijn bijvoorbeeld de animaties simpeler en is er geen beweging in de animaties. Bij high contrast zorg ik ervoor dat de zwart en wit kleuren nog meer contrast met elkaar hebben dan normaal.

## Bronnen
Ik vond dit een erg moeilijke opdracht en ik heb dan ook veel onderzoek moeten doen om de website zo goed mogelijk te maken. Alle bronnen die ik hiervoor gebruikt heb staan bij het desbetreffende onderdeel in de code als comments.
