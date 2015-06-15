ProjectsController = AppController.extend({
    waitOn:  function () {
        var subscriptions = [] ;

        subscriptions.push(Meteor.subscribe("projectsCollection")) ;

        return subscriptions ;
    },
    onAfterAction: function () {
        Meta.setTitle('Projects');
    }
});

ProjectsController.events({

});

TabularTables.Projects = new Tabular.Table({
    name: "Projects",
    collection: projectsCollection,
    columns: [
        //{tmpl: Meteor.isClient && Template.deviceObserve},
        {data: "name",  title: "Name"},
        {data: "customer",    title: "Customer"}
    ]
});


Router.route('/projects', {
    name: 'projects'
});
