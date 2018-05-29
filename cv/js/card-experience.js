const drawCardExp = (date, metier, entreprise, lieu, departement, taches, remarque, index) => {

    document.getElementById("experiences").innerHTML += `<div class="col-12 col-md-6">
        <div class="card">
        <div class="card-body">
        <h4 class="card-title">${date}</h4>
                <p>${metier} chez ${entreprise} à ${lieu} (${departement})</p>
                <ul class="card-text tache">
                </ul>
                <p class="small">${remarque}</p>
            </div>
        </div>
    </div>`

    for (let tache of taches) {
        document.getElementsByClassName("tache")[index].innerHTML += `<li>${tache}</li>`
    }
}

drawCardExp("Mars à juin 2017",
"Stagiaire développeur",
"HSK Digital",
"Crécy-sur-Serre",
"Aisne",
["Participer à un projet en groupe", "Développer en PHP par le biais de la programmation orientée objet", "S'informer des possibilités dégagées par la programmation"],
"J'avais été invité à participer à un hackathon qui avait eu lieu au salon Vivatech de Paris en juin 2017",
0)

drawCardExp("Janvier 2016",
"Stagiaire développeur",
"Centre Hospitalier Brisset",
"Hirson",
"Aisne",
["Concrétiser ce que j'ai appris à WebForce3", "Respecter un cahier des charges", "Faire un compte-rendu de projet", "Concevoir le back-end du site", "Planifier le projet dans le temps"],
"J'ai mené ce projet en totale autonomie, puisque mon tuteur et son collègue sont plus aptes en maintenance informatique qu'en développement web.",
1)

drawCardExp("Février à mars 2014, puis mai à juillet 2013",
"Stagiaire contrôle de gestion",
"Smurfit Kappa - MGC Cartonnage",
"Hirson",
"Aisne",
["Gérer les entrées comptables", "Relancer les clients", "Dossiers de stage: prévention du risque client ; communication orale"],
"J'ai fait preuve d'investissement dans mes dossiers de stage, qui m'ont valu respectivement un 18 et un 20 sur 20 en gestion du risque et en anglais",
2)