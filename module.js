(function(){

    angular
    .module("storyApp",["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
        .when("/form", {
            template: `<div><form-component></form-component></div>`
        })
        .when("/story", {
            template: `<div><story-component></story-component></div>`
        });
    })
})();