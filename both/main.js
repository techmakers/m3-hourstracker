/**
 * Created by cashbit on 15/06/15.
 */

// ATTENTION: don't rename this file, or you can introduce errors accessing Route and Controllers

// Publishing the route to iron:router
Router.route('/m3hourstrackerprojects', {
    name: 'm3hourstrackerprojects'
});

// adding an item in the sidebarmenu
// menu items are sorted by index
sidebarmenuitems.push({index: 10, url:"/m3hourstrackerprojects", title: "Projects"});

// Declaring the controller
M3hourstrackerprojectsController = AppController.extend({
    waitOn:  function () {
        var subscriptions = [] ;
        // add here a line for each new subsciption the controller will need access
        subscriptions.push(Meteor.subscribe("m3hourstrackerprojectsCollection")) ;

        return subscriptions ;
    },
    onAfterAction: function () {
        Meta.setTitle('Projects');
    }
});

// if you want to track some events like clicks or keypress, add here the selector in jquery style
M3hourstrackerprojectsController.events({

});

// Declaring a table with tabulatables package
TabularTables.m3hourstrackerProjects = new Tabular.Table({
    name: "Projects",
    collection: m3hourstrackerprojectsCollection,
    columns: [
        //{tmpl: Meteor.isClient && Template.deviceObserve},
        {data: "name",  title: "Name"},
        {data: "customer",    title: "Customer"}
    ]
});