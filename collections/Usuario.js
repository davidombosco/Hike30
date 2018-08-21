Meteor.methods({
    "seguirUsuario": function(idDoUsuario){
        Meteor.users.update(Meteor.user(), { //adiciona o próprio id na lista seguiondo da pessoa contactada
            $addToSet:{ //adiciona ao conjunto (set é uma lista sem repetições)
                "profile.seguindo": idDoUsuario
            }
        });
        
        Meteor.users.update(idDoUsuario, {
            $addToSet:{ //adiciona ao conjunto (set é uma lista sem repetições)
                "profile.seguidores": Meteor.user()
            }
        });
    },
  //  "descurtirPost": function(idDoPost) {
    //   Posts.update(idDoPost, { //atualiza o elemento "idDoPost"
      //      $pull: { //contrário ao addToSet
          //      curtidas: Meteor.userId()
       //     }
       // }); 
 //  }
    
}); 