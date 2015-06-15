/**
 * Created by cashbit on 15/06/15.
 */

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

Meteor.publish('m3hourstrackerprojectsCollection',function(){
    return m3hourstrackerprojectsCollection.find({});
});