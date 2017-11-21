(function(){
    var storyComponent= {
        template:
        `<p>{{$ctrl.words.noun1}} feels oddly {{$ctrl.words.adj1}} personally I prefer {{$ctrl.words.noun2}} which smells {{$ctrl.words.adj2}}</p><button> restart story</button>`,
        controller: "StoryController"


    }
    angular
    .module("storyApp")
    .component("storyComponent",storyComponent)
})();