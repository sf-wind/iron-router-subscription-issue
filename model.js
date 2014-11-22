Preferences = new Meteor.Collection("preferences");
Preferences.allow({
  insert : function() {
    return true;
  }, 
  update : function() {
    return true;
  },
  remove : function() {
    return true;
  }
});


