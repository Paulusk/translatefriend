console.log("Hello World")

import * as deepl from 'deepl-node';

const authKey = "f63c02c5-f056-..."; // Replace with your key
const translator = new deepl.Translator(authKey);

(async () => {
    const result = await translator.translateText('Hello, world!', null, 'fr');
    console.log(result.text); // Bonjour, le monde !
})();   

// Schmul Rosenzweig der große II
/*

Funktionalität:

auf kommando können vokabeln, oder sätze übersetzt werden
bsp.: kommando "jetzt": hört das programm zu bis du "stopp" sagst.
ziel: so schnell wie möglich übersetzung von vokabeln

weiterentwicklung:
man startet die anwendung, die schreibt alles mit. gibt feedback zur aussprache, zu fehlern, zu falsch verwendeten vokabeln etc.
ziel: die analyse des gesprochenen mit verbesserungsmöglichkeiten


1. create a test setting

1.1 bind in deepl api

https://www.deepl.com/en/docs-api/

1.2 tests mit deepl
 wir geben verschieden worte und sätze hinein und bekommen die übersetzung, und stellen diese da
paul

 
2.1 Worterkennung, spracheingabe
wahrscheinlich wieder api
samuel


erster spring 01.11.22 - 13.11.22 || 
8.11.22 18:00 halbzeit, austausch, lessons learned,
13.11.22 ?? präsentation der resultate 

3. zusammenführung von beiden

4. oberfäche der app



5. sprachanalyse

*/

