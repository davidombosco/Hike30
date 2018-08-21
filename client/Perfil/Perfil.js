Template.Perfil.helpers({
    perfil: function() {
        var idDoUsuario = FlowRouter.getParam("id");
        var info = Meteor.users.findOne({_id: idDoUsuario});

        return info;
    },
    posts: function() {
        var idDoUsuario = FlowRouter.getParam("id");
        var postsDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch();
        return postsDoPerfil;
    }
    
});

Template.Perfil.events({
    "click .seguir": function(evento, template) {
        console.log("Seguindo");
        var idDoUsuario = FlowRouter.getParam("id");
        Meteor.call("seguirUsuario", idDoUsuario);
    },
"click .deixar-de-seguir": function(evento, template) {
       console.log("Deixando de seguir");
    }
})