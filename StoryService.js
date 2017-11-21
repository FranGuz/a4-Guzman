(function() {
    
        function StoryService($location){
    
            var words = {};
    
            return {
                getWords: getWords,
                setWords: setWords
    
            };
    
            function setWords(newInfo){
                words = newInfo;
                console.log(words);
                $location.path("/story")
            }
            function getWords() {
                return words;
            }
    
    
        }
    
        angular
        .module("storyApp")
        .factory("StoryService",StoryService);
    })();