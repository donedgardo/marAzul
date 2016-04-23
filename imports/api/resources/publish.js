import { Meteor } from 'meteor/meteor';

import { Resources } from './collection';

if (Meteor.isServer) {
  Meteor.publish('resources', function() {
    return Resources.find();
  });
}
