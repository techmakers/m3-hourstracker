/**
 * Created by cashbit on 15/06/15.
 */

projectsCollection.allow({
    insert:function(userId,doc){
        return true ;
    },
    update: function(userId, doc, fieldNames, modifier){
        return true ;
    },
    remove: function(userId,doc){
        return true ;
    }
}) ;

Meteor.publish('projectsCollection',function(){
    return projectsCollection.find({});
});