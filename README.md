# Spletni barvni stroboskop

1\. domača naloga pri predmetu [Osnove informacijskih sistemov](https://ucilnica1516.fri.uni-lj.si/course/view.php?id=54) (opis)

## Kratek opis naloge

Na [GitHub](https://github.com) je na voljo javni repozitorij [https://github.com/lovre/stroboskop](https://github.com/lovre/stroboskop), ki vsebuje nedelujoč spletni stroboskop. V okviru domače naloge ustvarite kopijo repozitorija ter popravite in dopolnite obstoječo implementacijo spletne strani tako, da bo končna aplikacija z vsemi delujočimi funkcionalnostimi izgledala kot na sliki spodaj. 

![Stroboskop](stroboskop.gif)

Gumb "Dodaj barvo" strani doda novo barvo, ki jo je moč kasneje spremeniti, dočim gumb "Odstrani barve" odstrani vse obstoječe barve. Gumb "Zaženi/Ustavi stroboskop" začne ali ustavi delovanje stroboskopa, ki zaporedoma prikazuje barve na strani. Čas prikaza posamezne barve je določen naključno iz izbranega časovnega intervala.

Domača naloga zahteva osnovno poznavanje GIT ukazov, HTML označb, CSS stilov in jezika JavaScript. Domača naloga ne zahteva veliko dela, a zahteva nekaj razmisleka. Pri delu natančno sledite navodilom!
Kako naj podam povezave?

Spletno povezavo na GitHub repozitorij podate kot https://github.com/{študent}/stroboskop, kjer {študent} predstavljaGitHub uporabniško ime. Spletno povezavo na uveljavitev v GitHub repozitoriju podate kothttps://github.com/{študent}/stroboskop/compare/{commit}, kjer je {commit} identifikator uveljavitve. Le-tega pridobite na spletni strani GitHub repozitorija v zavihku Commits pod Code, kjer je vsaki uveljavitvi pripisan SHA identifikator (uporabite možnostCopy the full SHA).

## I. Vzpostavitev okolja in repozitorija

    1. Vzpostavite si repozitorija GitHub in Bitbucket ter razvojno okolje Cloud9. Repozitorija GitHub in Bitbucket povežite z okoljem Cloud9ter ustvarite zaslonski maski uporabniških nastavitev okolja Cloud9, ki prikazujeta uporabniško ime v okolju Cloud9 ter povezavo na repozitorija GitHub in Bitbucket skupaj s pripadajočimi uporabniškimi imeni.
        Kaj naj oddam?
            Dve zaslonski maski, ki prikazujeta tri uporabniška imena ter povezavi med razvojnim okoljem in repozitorijema.

    2. Na GitHub z uporabo funkcije Fork ustvarite lastno kopijo javnega repozitorija https://github.com/lovre/stroboskop v okviru katere boste opravljali domačo nalogo. Kopija repozitorija naj ostane javna in naj ohrani ime "stroboskop".
        Kaj naj oddam?
            Spletno povezavo na ustvarjeno kopijo repozitorija https://github.com/lovre/stroboskop.

    3. V razvojnem okolju Cloud9 uvozite pravkar ustvarjen GitHub repozitorij z uporabo funkcije Clone to edit ter privzetimi nastavitvami. V repozitoriju posodobite vsebino Markdown datoteke README.md tako, da bo vsebovala ta navodila domače naloge, ki so dostopna preko eUcilnice. Z uporabo GIT v ukazni lupini okolja Cloud9 spremembe najprej uveljavite v lokalnem repozitoriju s sporočilom"Dodajanje navodil domače naloge", nato pa še v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na ustvarjen GitHub repozitorij in zaporedje GIT ukazov, ki ste jih uporabili v ukazni lupini razvojnega okolja.

    4. V repozitorij dodajte JavaScript knjižnico za izbiro barv jscolor.js, ki jo prenesite iz spletnega mesta jscolor, ter odstranite nepotrebno JavaScript knjižnico nepotrebno.js. Z uporabo GIT v ukazni lupini okolja Cloud9 spremembe uveljavite v lokalnem repozitoriju s sporočilom "Priprava potrebnih JavaScript knjižnic", nato pa še v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe.

## II. Skladnja strani in stilska preobrazba

    1. Z uporabo GIT v ukazni lupini okolja Cloud9 ustvarite novo vejo izgled ter razvoj nadaljujte v novi veji. V repozitoriju spletni stranistroboskop.html dodajte povezavo na stilsko datoteko stili.css. Spremembe uveljavite v lokalnem repozitoriju s sporočilom"Dodajanje stilov spletne strani" ter v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe in zaporedje GIT ukazov, ki ste jih uporabili v ukazni lupini razvojnega okolja.

    2. V repozitoriju na spletni strani stroboskop.html besedili "Izberi barve:" in "Časovni interval:" poravanjte desno kot je prikazano na podani sliki. Za to uporabite HTML atribut style ustreznih elementov. Spremembe uveljavite v lokalnem repozitoriju s sporočilom"Desna poravnava besedil" ter v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe.

    3. V repozitoriju spletni strani stroboskop.html dodajte gumb z napisom "Odstrani barve" in HTML atributom id enakim "odstraniBarve". Novi gumb naj bo postavljen poleg gumba "Dodaj barvo" kot je prikazano na podani sliki. Spremembe uveljavite v lokalnem repozitoriju s sporočilom "Dodajanje gumba za odstranjevanje barv" ter v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe in spletno povezavo oblikehttps://rawgit.com/{študent}/stroboskop/izgled/stroboskop.html, kjer {študent} predstavlja GitHub uporabniško ime.

    4. V repozitoriju vsem gumbom na spletni strani stroboskop.html ter pa HTML elementu telo dodajte rdeč rob in sivo senco kot je prikazano na podani sliki. V ta namen v stilski datoteki stili.css najprej definirajte CSS selektorja rob in senca, ki jih najdete v gradivu iz zadnjih vaj. Le-ta nato uporabite nad vsemi gumbi ter pa elementom telo. Spremembe uveljavite v lokalnem repozitoriju s sporočilom "Dodajanje robov in senc" ter v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe in spletno povezavo oblikehttps://rawgit.com/{študent}/stroboskop/izgled/stroboskop.html, kjer {študent} predstavlja GitHub uporabniško ime.
    
    5.Z uporabo GIT v ukazni lupini okolja Cloud9 vejo izgled združite v vejo master ter spremembe uveljavite v oddaljenem GitHubrepozitoriju. Razvoj nadaljujte v veji master, dočim pa pazite, da veje izgled ne izbrišete.
        Kaj naj oddam?
            Zaporedje GIT ukazov, ki ste jih uporabili v ukazni lupini razvojnega okolja.

## III. Dinamika in animacija na strani

    1. Z uporabo GIT v ukazni lupini okolja Cloud9 ustvarite novo vejo dinamika ter razvoj nadaljujte v novi veji. V repozitoriju spletni stranistroboskop.html dodajte manjkajočo povezavo na JavaScript knjižnico jscolor.js. Spremembe uveljavite v lokalnem repozitoriju s sporočilom "Dodajanje izbiranja barv" ter v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe in spletno povezavo oblikehttps://rawgit.com/{študent}/stroboskop/dinamika/stroboskop.html, kjer {študent} predstavlja GitHub uporabniško ime.

    2. V repozitoriju na spletni strani stroboskop.html implementirajte gumb "Odstrani barve", ki naj ob pritisku izbriše vsebino HTML elementa z atributom id enakim "barve". Spremembe uveljavite v lokalnem repozitoriju s sporočilom "Dinamika gumba za odstranjevanje barv" ter v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe in spletno povezavo oblikehttps://rawgit.com/{študent}/stroboskop/dinamika/stroboskop.html, kjer {študent} predstavlja GitHub uporabniško ime.

    3. V repozitoriju na spletni strani stroboskop.html dinamika gumba "Ustavi stroboskop" ni dokončno podprta. Gumb res ustavi delovanje stroboskopa, vendar tega ni moč ponovno zagnati. Popravite implementacijo gumba "Ustavi stroboskop" tako, da se ob pritisku napis spremeni v "Zaženi stroboskop", ob ponovnem pritisku pa naj se pokliče JavaScript funkcija zagon v skripti skripta.js. Spremembe uveljavite v lokalnem repozitoriju s sporočilom "Dinamika gumba za ustavitev stroboskopa" ter v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe in spletno povezavo oblikehttps://rawgit.com/{študent}/stroboskop/dinamika/stroboskop.html, kjer {študent} predstavlja GitHub uporabniško ime.

    4. V repozitoriju na spletni strani stroboskop.html dinamika gumba "Zaženi stroboskop" ni dokončno podprta. Gumb res začne delovanje stroboskopa, vendar je čas prikaza vsake barve enak. Popravite implementacijo gumba "Zaženi stroboskop" tako, da bo čas prikaza vsake barve izbran naključno iz časovnega intervala določenega s HTML elementoma <input id="min" /> in<input id="max" />. Spremembe uveljavite v lokalnem repozitoriju s sporočilom "Dinamika gumba za zagon stroboskopa" ter v oddaljenem GitHub repozitoriju.
        Kaj naj oddam?
            Spletno povezavo na uveljavitev v GitHub repozitoriju iz katere so razvidne zahtevane spremembe in spletno povezavo oblikehttps://rawgit.com/{študent}/stroboskop/dinamika/stroboskop.html, kjer {študent} predstavlja GitHub uporabniško ime.

    5. Z uporabo GIT v ukazni lupini okolja Cloud9 vejo dinamika združite v vejo master ter spremembe uveljavite v oddaljenem GitHubrepozitoriju. Razvoj nadaljujte v veji master, dočim pa pazite, da veje dinamika ne izbrišete. V repozitorij dodajte Markdown datotekoavtorstvo.md, ki naj vsebuje spodnjo vsebino. Spremembe uveljavite v lokalnem repozitoriju s sporočilom "Končna verzija spletnega stroboskopa" ter v oddaljenem GitHub repozitoriju.
    
    Markdown
    Študent z vpisno številko _{vpisna}_ potrjujem, da sem __edini avtor__ oddane domače naloge.

    [Glavna](https://rawgit.com/{študent}/stroboskop/master/stroboskop.html)
    [Izgled](https://rawgit.com/{študent}/stroboskop/izgled/stroboskop.html)
    [Dinamika](https://rawgit.com/{študent}/stroboskop/dinamika/stroboskop.html)

        Kaj naj oddam?
            Spletno povezavo na končno uveljavitev v GitHub repozitoriju in zaporedje GIT ukazov, ki ste jih uporabili v ukazni lupini razvojnega okolja.