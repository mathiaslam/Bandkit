Meteor.subscribe('channels');
Meteor.subscribe('teams');
Meteor.subscribe('team');
Meteor.subscribe('allUsernames');

Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});