/**
 * Created by cashbit on 15/06/15.
 */
projectsCollection = new Mongo.Collection("m3hourstrackerprojects") ;

projectsCollection.attachSchema(new SimpleSchema({
    name : {
        type: String,
        label: "project"
    },
    customer: {
        type: String,
        label: "customer"
    },
    customerOrder :{
        type : String,
        label: "Customer order"
    },
    internalRef : {
        type : String,
        label: "Internal Ref"
    },
    dueDate: {
        type : Date,
        label : "Due date"
    },
    effort : {
        type : Number,
        label : "Effort"
    }
}));


