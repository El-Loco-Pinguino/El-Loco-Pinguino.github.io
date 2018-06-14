const drawCard = (image, title, description, skill, categorie) => {
    document.getElementById(categorie).innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card">
    <img class="card-img-top" src="./img/${image}">
    <div class="card-body">
    <h4 class="card-title">${title}</h4>
    <p class="card-text">${description}<br/>
    <meter min="0" max="5" value="${skill}"></meter><br/>${skill} / 5</p>
    </div>
    </div>
    </div>`
}

drawCard("html5.png", "HTML5", "Respect des bonnes pratiques W3C", 4, "competencesWeb")
drawCard("css3.png", "CSS3", `Exploitation du potentiel des <a href="https://el-loco-pinguino.github.io/fun/pomme.html">animations</a> CSS et de la librairie Bootstrap (mise en &oelig;uvre sur ce CV !)`, 4, "competencesWeb")
drawCard("js.png", "JavaScript (client)", `Divers travaux personnels réalisés (<a target="_blank" href="https://el-loco-pinguino.github.io/fun/fight.html">jeu de combat minimaliste</a>, <a target="_blank" href="https://el-loco-pinguino.github.io/fun/excusesBidon.html">générateur d'excuses bidon</a>, ...)`, 4, "competencesWeb")
drawCard("node.png", "JavaScript (serveur)", "Utilisation de NodeJS et exploitation des API distantes", 3, "competencesWeb")
drawCard("react.png", "React", "Librairie principale et complément de style Reactstrap", 3, "competencesWeb")
drawCard("vue.png", "VueJS", "Auto-apprentissage et application lors d'un projet client", 3, "competencesWeb")
drawCard("algo.jpg", "Techniques de programmation", "Méthodologie de programmation fonctionnelle", 4, "competencesWeb")
drawCard("sql.png", "Bases de données", "Langage SQL intermédiaire, moteurs MySQL et SQLite", 4, "competencesWeb")
drawCard("php.jpg", "PHP", "Langage de niveau basique et intermédiaire. Utilisation de PDO pour communiquer avec les bases de données", 3, "competencesWeb")
drawCard("wordpress.jpg", "WordPress", "Apte à créer et paramétrer un projet, et à y apporter des modifications d'ordre stylistique", 2, "competencesWeb")
drawCard("unionjack.jpg", "Anglais à caractère professionnel", "Niveau estimé à B2/C1 sur le référentiel de niveau européen", 4, "competencesTrans")
drawCard("spain.jpg", "Espagnol", "Niveau Terminale. Je souhaiterais réapprendre la langue, pour pouvoir en faire un atout", 3, "competencesDiv")
drawCard("office.png", "Microsoft Office", "Version 2007 principalement. Bon niveau sur le trio Word/Excel/PowerPoint", 4, "competencesTrans")
drawCard("machineaecrire.png", "Rédaction", "Aisance en orthographe. Rédaction de documents professionnels", 5, "competencesTrans")
drawCard("project.jpg", "Méthodologie de projet", "Attribution des tâches et compte-rendu des réalisations", 4, "competencesTrans")
drawCard("blender.png", "Blender 3D", "Maîtrise des bases du logiciel grâce à des tutoriels vidéo. Apte à faire des objets simples", 2, "competencesDiv")
drawCard("rm.jpg", "RPG Maker", "Le principal jeu sur lequel je travaille représente bien ma personnalité: un peu absurde", 3, "competencesDiv")