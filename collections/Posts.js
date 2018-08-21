Posts = new Mongo.Collection("posts");

Meteor.methods({
    "inserirPost": function(textoDoFormulario) {
        if(Meteor.userId() !== null && textoDoFormulario) { //same as textoDoFormulario===true
            Posts.insert({
                texto: textoDoFormulario,
                idDoAutor: Meteor.userId(),
                curtidas: [],
            });
        }
    },
    "curtirPost": function(idDoPost){
        Posts.update(idDoPost, {
            $addToSet:{ //adiciona ao conjunto (set é uma lista sem repetições)
                curtidas: Meteor.userId()
            }
        });
    },
    "descurtirPost": function(idDoPost) {
        Posts.update(idDoPost, { //atualiza o elemento "idDoPost"
            $pull: { //contrário ao addToSet
                curtidas: Meteor.userId()
            }
        }); 
    }
});


