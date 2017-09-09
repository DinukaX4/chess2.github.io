var tilesNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
var tilesNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
var selectpices;
var selectDiv;
var parentsDiv;
var tiles;
var chesspices;
var count;
$(document).ready(function () {
    chesspices = $(".chessPices");
    tiles = $(".col-xs-1");
    count = 0;
});

$("img").addClass("img-responsive");
$(".chessPices").click(function (evt) {
    selectpices = $(this);
    console.log(selectpices);


    if (!(selectpices.hasClass('selectedPath')) && selectpices.hasClass('chessPices')) {
        bp1patch(selectpices);
        //console.log("ddd")
    }
    console.log(count);
});

function bp1patch(evt) {
    selectpices = evt;
    tiles.remove('selectedPath');
    chesspices.remove('selectedpices');

    var selectId = selectpices.parent().attr('id');
    var selectPiceId = selectpices.children('img').attr('id');
    var piceBrand = selectPiceId.substr(0, 2);
    var tilesL = selectId.charAt(0);
    console.log(selectId);
    console.log(selectPiceId);
    console.log(piceBrand);

    if (piceBrand == "bp") {
        //$("#"+tilesL+3).css("background-color","green");
        //$("#A4").css("background-color","green");
        if(!($("#" + tilesL + 3).hasClass('chessPices'))){
            $("#" + tilesL + 3).addClass('selectPath');
            //$("#" + tilesL + 3).addClass('selectedPath');
            selectpices.addClass('selectedPatch')
            selectpices.removeClass('selectPatch');
        }

        console.log($("#" + tilesL + 3).hasClass('selectedPath'));


        console.log("#" + tilesL + 3);
    } else {
        console.log("Ohh! NO");
    }
    if (!(selectpices.hasClass())) {

    }

}
$(".col-xs-1").click(function () {
   var currenttile=$(this);
   var currP=$(".chessPices.selectedPatch");
   if(currenttile.hasClass('selectPath')){
       currenttile.append(currP);
       chesspices.removeClass('selectedPatch')
       tiles.removeClass('selectPath')
   }
    console.log(currenttile.hasClass('selectPath'));
    //currenttile.append(currP);
});


