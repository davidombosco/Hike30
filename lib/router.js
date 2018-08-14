FlowRouter.route("/", {
    action: function(params, queryParams) {
      BlazeLayout.render("LayoutPrincipal",{main: "Início"});
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
      BlazeLayout.render("LayoutPrincipal",{main: "Sobre"});
    }
});

FlowRouter.route("/contato", {
    action: function(params, queryParams) {
      BlazeLayout.render("LayoutPrincipal",{main: "Contato"});
    }
});

FlowRouter.route("/feed", {
    triggersEnter: [AccountsTemplates.ensureSignedIn], //a pessoa só vai conseguir visualizar o feed se estiver logada
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal",{main: "Feed"});
    }
});