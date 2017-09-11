var tilesNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
var tilesNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
var selectpices;
var selectDiv;
var parentsDiv;
var tiles;
var chesspices;
var count;
var color = "white";
$(document).ready(function () {
    chesspices = $(".chessPices");
    tiles = $(".col-xs-1.col-sm-1.col-lg-1");
    count = 0;
});

$("img").addClass("img-responsive");
var ins = 0;
$(".chessPices").click(function (evt) {
    ins = ins + 1;
    //console.log(ins);
    selectpices = $(this);
    //console.log(selectpices);


    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('blackPone')) {
        bp1patch(selectpices);
        //console.log("ddd")
    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('whitePone')) {
        whitePone(selectpices);
        //console.log("White");

    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('blackRook')) {
        blackRook(selectpices);


    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('whiteRook')) {
        whiteRook(selectpices);


    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('blackBishop')) {
        blackBishop(selectpices);


    }if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('whiteBishop')) {
        whiteBishop(selectpices);


    }

    //console.log(count);
});
function whiteBishop(evt) {
    selectpices = evt;
    tiles.remove('selectPath');

    chesspices.remove('selectPath');

    var selectId = selectpices.parent().attr('id');
    var selectPiceId = selectpices.children('img').attr('id');
    var piceBrand = selectPiceId.substr(0, 2);
    var fristLetter = selectId.charAt(0);
    var tilesL = selectId.charAt(0);

    var firstID = selectId.charAt(1);


    var indexoftheLetter = ($.inArray(fristLetter, tilesNames));
    var indexOfNumber = ($.inArray(parseInt(firstID), tilesNumbers)
    );
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber + 1];
    //console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber + 1;

    // console.log(whitePone);
    //console.log("i " + i);

    for (; j < 8 && i<8; j++) {
        i = i + 1;
        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i1 = indexoftheLetter;
    var j1 = indexOfNumber + 1;
    for (; j1 < 8 && i1>0; j1++) {
        i1 = i1 - 1;
        //console.log(i1)
        tempID = tilesNames[i1] + tilesNumbers[j1];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i3=indexoftheLetter;
    var j3=indexOfNumber;
    //console.log("i3 "+i3+" j3 "+j3);
    for (; j3>0 ;j3--) {
        i3 = i3 +1;
        // console.log(i3)
        tempID = tilesNames[(i3)] + tilesNumbers[(j3-1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i4=indexoftheLetter;
    var j4=indexOfNumber;
    for (; j4>0 && i4>0;j4--) {
        i4 = i4 -1;
        // console.log(i3)
        tempID = tilesNames[(i4)] + tilesNumbers[(j4-1)];
       // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    color = "Black";
}
function blackBishop(evt) {
    selectpices = evt;
    tiles.remove('selectPath');

    chesspices.remove('selectPath');

    var selectId = selectpices.parent().attr('id');
    var selectPiceId = selectpices.children('img').attr('id');
    var piceBrand = selectPiceId.substr(0, 2);
    var fristLetter = selectId.charAt(0);
    var tilesL = selectId.charAt(0);

    var firstID = selectId.charAt(1);


    var indexoftheLetter = ($.inArray(fristLetter, tilesNames));
    var indexOfNumber = ($.inArray(parseInt(firstID), tilesNumbers)
    );
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber + 1];
    //console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber + 1;

    // console.log(whitePone);
    //console.log("i " + i);

    for (; j < 8 && i<8; j++) {
        i = i + 1;
        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i1 = indexoftheLetter;
    var j1 = indexOfNumber + 1;
    for (; j1 < 8 && i1>0; j1++) {
        i1 = i1 - 1;
        //console.log(i1)
        tempID = tilesNames[i1] + tilesNumbers[j1];
       // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i3=indexoftheLetter;
    var j3=indexOfNumber;
    //console.log("i3 "+i3+" j3 "+j3);
    for (; j3>0 ;j3--) {
        i3 = i3 +1;
       // console.log(i3)
        tempID = tilesNames[(i3)] + tilesNumbers[(j3-1)];
       // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i4=indexoftheLetter;
    var j4=indexOfNumber;
    for (; j4>0 && i4>0;j4--) {
        i4 = i4 -1;
        // console.log(i3)
        tempID = tilesNames[(i4)] + tilesNumbers[(j4-1)];
       // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    color = "white";
}
function whiteRook(evt) {
    selectpices = evt;
    tiles.remove('selectPath');

    chesspices.remove('selectPath');

    var selectId = selectpices.parent().attr('id');

    var selectPiceId = selectpices.children('img').attr('id');
    var piceBrand = selectPiceId.substr(0, 2);
    var fristLetter = selectId.charAt(0);
    var tilesL = selectId.charAt(0);

    var firstID = selectId.charAt(1);


    var indexoftheLetter = ($.inArray(fristLetter, tilesNames));
    var indexOfNumber = ($.inArray(parseInt(firstID), tilesNumbers)
    );
    // console.log(indexOfNumber);
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber];
    // console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber + 1;
    var whitePone = "wp";
    // console.log(whitePone);
    // console.log("J " + j);
    for (; j < 8; j++) {

        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var x = indexoftheLetter + 1;
    var y = indexOfNumber;

    for (; x < 8; x++) {

        tempID = tilesNames[x] + tilesNumbers[y];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i2 = indexoftheLetter;
    var j2 = indexOfNumber;
    //console.log(j2);
    for (; j2 > 0; j2--) {

        tempID = tilesNames[i2] + tilesNumbers[(j2 - 1)];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }
    var x2 = indexoftheLetter;
    var y2 = indexOfNumber;
    for (; x2 > 0; x2--) {

        tempID = tilesNames[(x2 - 1)] + tilesNumbers[y2];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }
    // if (!($('#'+ tempID+'>div').hasClass('chessPices'))&&(color==="Black")) {
    //     $('#'+tempID).addClass('selectPath');
    //     selectpices.addClass('afterClick');
    //     selectpices.removeClass('selectPath');
    // }
    color = "Black";

}
function blackRook(evt) {
    selectpices = evt;
    tiles.remove('selectPath');

    chesspices.remove('selectPath');

    var selectId = selectpices.parent().attr('id');
    var selectPiceId = selectpices.children('img').attr('id');
    var piceBrand = selectPiceId.substr(0, 2);
    var fristLetter = selectId.charAt(0);
    var tilesL = selectId.charAt(0);

    var firstID = selectId.charAt(1);


    var indexoftheLetter = ($.inArray(fristLetter, tilesNames));
    var indexOfNumber = ($.inArray(parseInt(firstID), tilesNumbers)
    );
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber + 1];
    //console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber + 1;
    var whitePone = "wp";
    // console.log(whitePone);
    // console.log("J " + j);
    for (; j < 8; j++) {

        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var x = indexoftheLetter + 1;
    var y = indexOfNumber;

    for (; x < 8; x++) {

        tempID = tilesNames[x] + tilesNumbers[y];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i2 = indexoftheLetter;
    var j2 = indexOfNumber;
    //console.log(j2);
    for (; j2 > 0; j2--) {

        tempID = tilesNames[i2] + tilesNumbers[(j2 - 1)];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }
    var x2 = indexoftheLetter;
    var y2 = indexOfNumber;
    for (; x2 > 0; x2--) {

        tempID = tilesNames[(x2 - 1)] + tilesNumbers[y2];
        console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }
    // if (!($('#'+ tempID+'>div').hasClass('chessPices'))&&(color==="Black")) {
    //     $('#'+tempID).addClass('selectPath');
    //     selectpices.addClass('afterClick');
    //     selectpices.removeClass('selectPath');
    // }
    color = "white";

}
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
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber - 1];
    //console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber;

    // console.log(whitePone);
    //console.log("J " + j);
    for (; j > 4; j--) {
        // console.log("J " + j);
        tempID = tilesNames[i] + tilesNumbers[j - 1];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "white")) {
        $('#' + tempID).addClass('selectPath');
        selectpices.addClass('afterClick');
        selectpices.removeClass('selectPath');
    }
    color = "Black"
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
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber + 1];
    //console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber + 1;
    var whitePone = "wp";
    // console.log(whitePone);
    // console.log("J " + j);
    for (; j < 4; j++) {

        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            //console.log(tempID);
            selectpices.addClass('afterClick');


        } else {
            break;
            //   }

        }


    }
    if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
        $('#' + tempID).addClass('selectPath');
        selectpices.addClass('afterClick');
        selectpices.removeClass('selectPath');

    }
    //console.log($('#' + tempID).hasClass('selectPath'));
    //$(".selectPath").css("color","red");

    color = "white";
    //$("#"+tempID).css("Background-color","green");

}
        //tiles.remove('selectPath')

$(".col-xs-1.col-lg-1.col-sm-1").click(function () {

    var currenttile = $(this);
    var currP = $(".chessPices.afterClick");
    if ($(currenttile).hasClass('selectPath')) {
        currenttile.append(currP);
        chesspices.removeClass('afterClick');
        tiles.removeClass('selectPath');
        ins = 0;

    }
    //$(".selectPath").css("background-color","red");
    //console.log($("#A3").hasClass('selectPath'));

});


//&&(ins===1)

