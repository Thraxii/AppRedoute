/* Garder ce controller même s'il n'y a rien écrit dedans, il permet à l'onglet Profil d'avoir le bon header */

controllerModule.controller('ProfilCtrl', function() {

    this.test = function () {
        console.log("carotte")
    }

});