/**
 * Created by cashbit on 15/06/15.
 */

Template.projects.rendered = function() {

};

Template.projects.events({
    /*'click .js-device-observe': function() {
     Session.set("observedDevice",this) ;
     Meteor.call('observeDevice',this._id) ;
     Router.go("/dashboard") ;
     }*/
});

Template.projects.helpers({
    projectSelector:function( userId ) {
        //return { documentOwner: userId }
        return {} ;
    }
});