/* Garder ce controller même s'il n'y a rien écrit dedans, il permet à l'onglet Profil d'avoir le bon header */

controllerModule.controller('ConnexionCtrl', function() {
    
    this.email="";
    this.password="";

    this.connecter= function () {
        console.log("Vérification de vos identifiants")
    }

});