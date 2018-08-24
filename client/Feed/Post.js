Template.Post.onCreated(function() {
   Meteor.subscribe("comentarios", this.data._id); 
});

Template.Post.helpers({  //things that help the template to display information
    usernameDoAutor: function() { //gets id and returns the username
        var idDoAutor = this.idDoAutor;
        var autor = Meteor.users.findOne({_id: idDoAutor});
        return autor.username;
    },
    numeroDeCurtidas: function() {
        return this.curtidas.length;
    },
    usuarioCurtiu: function(){
        var curtidas = this.curtidas;
        var posicao = curtidas.indexOf(Meteor.userId()); //procura pelo índice que o userId ocupa dentro da lista de curtidas
        
        if (posicao === -1) {
            return false;
        }
        else {
            return true;
        }
    },
    comentarios: function() {
        return Comentarios.find({post: this._id}).fetch();
    },
    eAutor: function() {
        var idDoAutor = this.idDoAutor;
        return idDoAutor === Meteor.userId();
    }
});

Template.Post.events({ //reaction to something the user made with the screen
    "click .like-button": function(evento, template) {
        Meteor.call("curtirPost", template.data._id);
    },
    "click .unlike-button": function(evento, template) {
        Meteor.call("descurtirPost", template.data._id);
    },
    
    "click .botao-remover": function(evento,template) {
        Meteor.call("removerPost", template.data._id);
    }
    
});