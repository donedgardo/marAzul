import { Meteor } from 'meteor/meteor';

import { Categories } from './collection';

if (Meteor.isServer) {
  Meteor.publish('categories', function() {
    return Categories.find();
  });
}
