Meteor.methods({
    "seguirUsuario": function(idDoUsuario) {
         if(Meteor.userId() !== null) {
            Meteor.users.update(Meteor.userId(), { //adiciona o próprio id na lista seguiondo da pessoa contactada
                $addToSet: { //adiciona ao conjunto (set é uma lista sem repetições)
                    "profile.seguindo": idDoUsuario
                }
            });
    
            Meteor.users.update(idDoUsuario, {
                $addToSet: { //adiciona ao conjunto (set é uma lista sem repetições)
                    "profile.seguidores": Meteor.userId()
                }
            });
         }
    },
    "deixarDeSeguirUsuario": function(idDoUsuario) {
        if (Meteor.userId() !== idDoUsuario) {
            Meteor.users.update(Meteor.userId(), {
                $pull: {
                    "profile.seguindo": idDoUsuario
                }
            });
    
            Meteor.users.update(idDoUsuario, {
                $pull: {
                    "profile.seguidores": Meteor.userId()
                }
            });
        }
    }
});