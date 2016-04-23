import { Mongo } from 'meteor/mongo';

export const Resources = new Mongo.Collection('resources');

if (Meteor.isServer) {
  Resources.allow({
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

Schema.Resources = new SimpleSchema({
  name: {type:String},
  description: {type:String, optional:true},
  category: {type:[String], optional:true},
  featured: {type:Boolean, defaultValue:false},
  favorites:{type:Number, defaultValue:0, min:0},
  files: {type:Array, optional:true},
  "files.$":{type:Object},
  "files.$type":{type:String},
  "files.$url":{type:String},
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

Resources.attachSchema(Schema.Resources);
