/**
 * Created by cashbit on 15/06/15.
 */

// here you can define permissions on the collections

m3hourstrackerprojectsCollection.allow({
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

// here you can publish data to the clients
Meteor.publish('m3hourstrackerprojectsCollection',function(){
    return m3hourstrackerprojectsCollection.find({});
});