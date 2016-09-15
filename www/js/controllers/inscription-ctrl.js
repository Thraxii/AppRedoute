/* Garder ce controller même s'il n'y a rien écrit dedans, il permet à l'onglet Profil d'avoir le bon header */

controllerModule.controller('InscriptionCtrl', function() {
    
    this.email="";
    this.password="";
    this.confirmPassword="";

    this.matchPassword = function () {
      if (this.password !== "" && this.confirmPassword !== "")
          return this.password == this.confirmPassword;
      else return false
    };
    
    this.inscrire = function () {
        //console.log("Bienvenue à La Redoute !")
        console.log(this.matchPassword())
    }

});