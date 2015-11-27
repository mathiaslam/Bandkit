Meteor.startup(function() {

  //Meteor.users.remove({});
  //Accounts.createUser({
   // username: "mathiaslam",
   // email: "mathiaslam@me.com",
   // password: "test123"
  //});

  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'general'
  });

  // Add this if you want to remove all messages before seeding
  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  }

  Channels.remove({});
  Channels.insert({
    name: "general"
  });
  Channels.insert({
    name: "random"
  });

  //Team.remove({});
  //Team.insert({
   // teamname: "T-1000"
  //});


});