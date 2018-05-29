const drawCardForma = (annee, etat, nom, lieu, departement, duree, description, competences, index) => {

    document.getElementById("formations").innerHTML += `<div class="col-12 col-md-6">
        <div class="card">
        <div class="card-body">
        <h4 class="card-title">${annee} ${etat}</h4>
                <p>${nom} à ${lieu} (${departement}) pour ${duree}</p>
                <p class="small">${description}</p>
                <ul class="card-text notion">
                </ul>
            </div>
        </div>
    </div>`

    for (let notion of competences) {
        document.getElementsByClassName("notion")[index].innerHTML += `<li>${notion}</li>`
    }
}

drawCardForma("2018",
"(en cours)",
"Wild Code School",
"Reims",
"51",
"5 + 4 mois",
'La Wild Code School forme ses élèves au titre de développeur logiciel équivalent Bac+2. L\'école privilégie la pédagogie inversée: les élèves découvrent par eux-mêmes les notions par le biais d\'exercices. 3 projets et 3 hackathons viennent agrémenter le cursus.',
["NodeJS", "React", "VueJS", "Organisation de projet", "Compte-rendu de projet"],
0)

drawCardForma("2016-2017",
"",
"Formation d'insertion pour travailleurs handicapés",
"Laon",
"02",
"5 mois",
"Je ne vais pas vous le cacher, je suis reconnu travailleur handicapé. Mon autisme Asperger me freine quand il s'agit de créer un contact avec autrui. Cependant, je possède de grandes facultés intellectuelles qui compensent mes lacunes. Moi et mon groupe avons été aidés pendant notre recherche de stage (qui a eu lieu chez HSK Digital.",
["Démarches professionnelles", "Découverte des filières du CFA"],
1)

drawCardForma("2014-2015",
"",
'<a href="https://www.wf3.fr">WebForce3</a>',
"Buire",
"02",
"3 + 1 mois",
"L'organisme WF3 forme ses étudiants de tous domaines au métier de développeur web. Un projet final d'une semaine termine cette formation, et aboutit à une certification. Un stage d'un mois a suivi cette formation pour mettre en pratique les compétences.",
["HTML et CSS", "JavaScript client", "PHP", "SQL", "Search Engine Optimization", "Accessibilité web"],
2)

drawCardForma("2012-2014",
"",
"BTS Assistant de Gestion",
"Hirson (Lycée Joliot-Curie)",
"02",
"2 ans",
"Formation scolaire post-bac aboutissant à un diplôme. L'étudiant assimile les facettes du gestionnaire en entreprise. 2 stages de 6 semaines agrémentent le cursus.",
["Gestion comptable, commerciale et financière", "Économie", "Droit", "Management", "Anglais professionnel"],
3)