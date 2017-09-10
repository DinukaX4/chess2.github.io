var tilesNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
var tilesNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
var selectpices;
var selectDiv;
var parentsDiv;
var tiles;
var chesspices;
var count;
var color="White";
$(document).ready(function () {
    chesspices = $(".chessPices");
    tiles = $(".col-xs-1.col-sm-1.col-lg-1");
    count = 0;
});

$("img").addClass("img-responsive");
var ins=0;
$(".chessPices").click(function (evt) {
    ins=ins+1;
    //console.log(ins);
    selectpices = $(this);
    //console.log(selectpices);


    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('blackPone')) {
        bp1patch(selectpices);
        //console.log("ddd")
    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('whitePone')) {
       whitePone(selectpices);
        console.log("White");

    }
    //console.log(count);
});
function whitePone(evt) {


    selectpices = evt;
    tiles.remove('selectPath');
    chesspices.remove('selectPath');

    var selectId = selectpices.parent().attr('id');
    var selectPiceId = selectpices.children('img').attr('id');
    var piceBrand = selectPiceId.substr(0, 2);
    var fristLetter = selectId.charAt(0);
    var tilesL = selectId.charAt(0);

    var firstID = selectId.charAt(1);
    // console.log(selectId);
    // console.log(selectPiceId);
    // console.log(piceBrand);

    var indexoftheLetter = ($.inArray(fristLetter, tilesNames));
    var indexOfNumber = ($.inArray(parseInt(firstID), tilesNumbers)
    );
    var tempID= tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber - 1];
    console.log(tempID);
    var i=indexoftheLetter;
    var j = indexOfNumber ;

    // console.log(whitePone);
   //console.log("J " + j);
    for (; j > 4; j--) {
        console.log("J " + j);
        tempID = tilesNames[i] + tilesNumbers[j-1];
        console.log(tempID);

        if (!($('#' + tempID+'>div').hasClass('chessPices'))&&(color==="white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }



    }
    if (!($('#'+ tempID+'>div').hasClass('chessPices'))&&(color==="white")) {
        $('#'+tempID).addClass('selectPath');
        selectpices.addClass('afterClick');
        selectpices.removeClass('selectPath');
    }
    color="Black"
}

function bp1patch(evt) {

    selectpices = evt;
    tiles.remove('selectPath');

    chesspices.remove('selectPath');

    var selectId = selectpices.parent().attr('id');
    var selectPiceId = selectpices.children('img').attr('id');
    var piceBrand = selectPiceId.substr(0, 2);
    var fristLetter = selectId.charAt(0);
    var tilesL = selectId.charAt(0);

    var firstID = selectId.charAt(1);
    // console.log(selectId);
    // console.log(selectPiceId);
    // console.log(piceBrand);

    var indexoftheLetter = ($.inArray(fristLetter, tilesNames));
    var indexOfNumber = ($.inArray(parseInt(firstID), tilesNumbers)
    );
    var tempID= tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber + 1];
    console.log(tempID);
    var i=indexoftheLetter;
    var j = indexOfNumber + 1;
    var whitePone="wp";
    // console.log(whitePone);
    // console.log("J " + j);
    for (; j < 4; j++) {

        tempID = tilesNames[i] + tilesNumbers[j];
        console.log(tempID);

            if (!($('#' + tempID+'>div').hasClass('chessPices'))&&(color==="Black")) {
                $('#' + tempID).addClass('selectPath');
                //console.log(tempID);
                selectpices.addClass('afterClick');

            } else {
                break;
                //   }

            }



    }
    if (!($('#'+ tempID+'>div').hasClass('chessPices'))&&(color==="Black")) {
        $('#'+tempID).addClass('selectPath');
        selectpices.addClass('afterClick');
        selectpices.removeClass('selectPath');
    }
    color="white";

}


$(".col-xs-1.col-lg-1.col-sm-1").click(function () {

   var currenttile=$(this);
   var currP=$(".chessPices.afterClick");
   if($(currenttile).hasClass('selectPath')){
       currenttile.append(currP);
       chesspices.removeClass('afterClick');
       tiles.removeClass('selectPath');
       ins=0;

   }


});

//&&(ins===1)

