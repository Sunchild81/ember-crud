App.UserRoute = Ember.Route.extend({
    // this route model is auto generated internally 
    // because we followed Ember's naming conventions 
    /*model: function(params) { 
        return App.User.find(params.user_id);
    },*/

    setupController: function(controller, model){
        // force the deleteMode to false when accessing user
        this.controllerFor('user').set('deleteMode', false);

        // when we override the setupController, we disabled the default behavior
        // of the Ember Route about the automatic model registration : By default the
        // Ember route will save automaticly the model (the object passed by a transitionTo
        // or, returned by the model method of the route) into a 'model' variable in the Controller.
        // So to keep the fonctionnality after overriding you must implement it yourself.
        controller.set('model', model);
    },

    events: {
        goBack: function(){
            this.transitionTo('users');
        }
    }
});