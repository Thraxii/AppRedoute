/* Garder ce controller même s'il n'y a rien écrit dedans, il permet à l'onglet Profil d'avoir le bon header */

controllerModule.controller('InscriptionCtrl', function() {
    
    this.email="";
    this.password="";
    this.confirmPassword="";
    
    this.inscrire = function () {
        console.log("Bienvenue à La Redoute !")
    }

});