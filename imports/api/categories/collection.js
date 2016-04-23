import { Mongo } from 'meteor/mongo';

export const Categories = new Mongo.Collection('categories');

if (Meteor.isServer) {
  Categories.allow({
    insert() {
      return true;
    },
    update() {
      return true;
    },
    remove() {
      return true;
    }
  });
}

let Schema= {};

Schema.Categories = new SimpleSchema({
  name: {type:String},
  description: {type:String, optional:true},
  created_at: {
    type:Date,
    autoValue: function(){
      if(this.isInsert){
        return new Date();
      }else if(this.isUpsert){
        return {$setOnInsert: new Date()};
      }else{
        this.unset();
      }
    }
  },
  updated_at: {type:Date,
    autoValue: function(){
      if(this.isUpdate){
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

Categories.attachSchema(Schema.Categories);
