Meteor.startup( function() {
  

  var canModify = function(userId, tasks) {
    return _.all(tasks, function(task) {
      return !task.privateTo || task.privateTo === userId;
    });
  };

  Annonces.allow({
    insert: function () { return true; },
    update: canModify,
    remove: canModify,
    fetch: ['privateTo']
  });

  Transactions.allow({
    insert: function () { return true; },
    update: canModify,
    remove: canModify,
    fetch: ['privateTo']
  });

  
});