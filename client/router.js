
Router.configure({
  subscriptions : function() {
    return [Meteor.subscribe('preferences')
           ];
  },
/*
  waitOn : function() {
    return [Meteor.subscribe('preferences')
           ];
  },
*/
});

Router.route('/', function() {
  this.render('home');
}, {
  name : 'home', 
  template : 'home', 
  data : function () {
    if (!this.ready())
      return;
    var val = {};
    
    
    var data = Preferences.find().fetch();
    val.data = data;
    return val;
  }
});

