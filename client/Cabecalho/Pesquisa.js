Template.Pesquisa.rendered = function() {
  Meteor.typeahead.inject();
}

Template.Pesquisa.helpers({
  items: function() { //quais são os itens que o usuário pode pesquisar
    return Meteor.users.find().fetch().map(function(user){ 
        return {id: user._id, value: user.profile.name}; 
        
    });
  },
  selected: function(event, suggestion, datasetName) { //o que acontece quando alguém clicar em uma opção da lista de pesquisa
    FlowRouter.go("/perfis/" + suggestion.id); // Redirecionar para página do usuário.
  }
});