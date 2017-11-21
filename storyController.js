
(function(){
    function StoryController(StoryService){
        vm = this;
        vm.words = StoryService.getWords();
        console.log(vm.words);
    
    }
    
    
    angular
    .module("storyApp")
    .controller("StoryController",StoryController)
    
    })();