
$(function(){

    var mainMenuItems = $("#mainMenu ul").children("li"),
    totalMainMenuItems = mainMenuItems.length,
    openedIndex = -1,

    init = function(){
        mainMenuItems.children(".images").click(function(){
            
            var newIndex = $(this).parent().index(),
            item = mainMenuItems.eq(newIndex);

            if(openedIndex === newIndex){

                animateItem(item, false, 250);
                openedIndex = -1;

            } else {

                if(validIndex(newIndex)){

                    animateItem(mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = newIndex;
                    animateItem(item, true, 250);
                };
            }

        });
    },

    validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
    };

    animateItem = function(item, toOpen, speed){

            var colorImage = item.find(".color");
            /* La syntaxe ci-dessous revient à poser une question : est-ce que toOpen est ouvert 420px ou fermé 140px. C'est une expression */
            itemParam = toOpen ? {width:"420px"}: {width:"140px"},
            colorImageParam = toOpen ? {left:"0px"}: {left:"140px"};

            colorImage.animate(colorImageParam, speed)
            item.animate(itemParam, speed)

    };

    init()
});