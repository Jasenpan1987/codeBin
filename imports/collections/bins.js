import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function(){
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },
  'bins.remove': function(binId){
    return Bins.remove({
      _id: binId
    })
  },
  'bins.update': function(binId, newContent){
    return Bins.update({_id: binId}, {$set: {content: newContent}})
  },
  'bins.share': function(bin, email){
    return Bins.update(bin._id, {$push: {sharedWith: email}})
  }
});

export const Bins = new Mongo.Collection('bins');
