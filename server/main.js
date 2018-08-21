import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

AccountsTemplates.configure({
    postSignUpHook: function(userId, info) { //cria duas listas vazias quando o usuário se cadastra
        Meteor.users.update(userId, {
            $set: {
                "profile.seguidores": [],
                "profile.seguindo": []
            }
        });
    }
});