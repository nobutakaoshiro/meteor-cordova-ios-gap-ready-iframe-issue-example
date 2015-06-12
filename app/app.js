if (Meteor.isClient) {
  Session.setDefault('counter', 0);

  Template.deviceInfo.helpers({
    deviceInfo: function () {
      return Session.get('deviceInfo');
    },
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.deviceInfo.events({
    'click .getInfoButton': function () {
      if (Meteor.isCordova && window.device) {
        Session.set('counter', Session.get('counter') + 1);
        window.device.getInfo(function(info){
          Session.set('deviceInfo', info);
        });
      }
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
