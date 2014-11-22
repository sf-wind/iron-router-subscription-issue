

Meteor.publish("preferences", function() {
  return Preferences.find({});
});

Meteor.startup(function() {
  Preferences.insert({test : "one test"});
});
