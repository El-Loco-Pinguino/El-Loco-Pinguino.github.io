const displayProject = (titre, duree, description) => {
    document.getElementById("projets").innerHTML += `<div class="col-12 col-sm-6">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${titre} (${duree} semaines)</h5>
                <p class="small">${description}</p>
            </div>
        </div>
    </div>`
}

displayProject("Blog de la journée d'intégration", 2, 'Le premier projet sur lequel moi et mon groupe avons travaillé. Il s\'agit d\'un site mono-page en HTML et CSS dont la version finalisée est accessible à <a href="https://el-loco-pinguino.github.io/blog/index.html" target="_blank">cette adresse</a>. Techniquement, nous avons eu recours à Bootstrap 4 et à une maquette faite sur le site Mockflow. J\'ai été en charge principalement de la rédaction des contenus.')
displayProject("Book Your Wilder", 6, "Via NodeJS et le framework Express, mon groupe a conçu un trombinoscope des étudiants (les Wilders), qui peuvent s'inscrire, s'authentifier, accéder et modifier leur profil. J'ai géré les relations avec la base de données associée. Nous avons organisé notre travail avec la méthode SCRUM. <a href='./img/byw.png' target='_blank'>Accéder à un aperçu imagé</a>.")
displayProject("Liberty", 8, "Le troisième projet est en cours et servira pour un véritable client. L'équipe de la start-up rémoise <a href='http://blackmoonlab.com' target='_blank'>Black Moon Lab</a> nous a demandés de concevoir une application qui facilite les présentations de produit sur écran, en proposant des sondages et autres activités interactives. Le projet a été conçu avec VueJS.")