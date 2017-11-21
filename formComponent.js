(function(){
    var formComponent= {
        template: '<input type = "text" ng-model="word.noun1" placeholder ="noun" ><input type = "text" ng-model="word.noun2" placeholder ="noun" ><input type = "text" ng-model="word.adj1" placeholder ="adjective" ><input type = "text" ng-model="word.adj2" placeholder ="adjective" ><button ng-click=$ctrl.addWord(word)>read story</button>',
        controller: 'FormController'

    }
    angular
    .module("storyApp")
    .component("formComponent",formComponent)
})();