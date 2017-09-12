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


    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('whiteBishop')) {
        whiteBishop(selectpices);


    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('BlackQuen')) {
        blackQuen(selectpices);


    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('whiteQuen')) {
        whiteQuen(selectpices);


    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('blackKnight')) {
        blackKnight(selectpices);


    }
    if (!(selectpices.hasClass('afterClick')) && selectpices.hasClass('whiteKnight')) {
        whiteKnight(selectpices);


    }

    //console.log(count);
});
function whiteKnight(evt) {
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
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber];
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var temp5;
    var temp6;
    var temp7;
    var temp8;
    //console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber;
    for (var v = 0; v < 8; v++) {
        temp1 = tilesNames[(i - 1)] + tilesNumbers[(j + 2)];
        temp2 = tilesNames[(i + 1)] + tilesNumbers[(j + 2)];
        temp3 = tilesNames[(i + 2)] + tilesNumbers[(j + 1)];
        temp4 = tilesNames[(i - 2)] + tilesNumbers[(j + 1)];
        temp5 = tilesNames[(i - 1)] + tilesNumbers[(j - 2)];
        temp6 = tilesNames[(i + 1)] + tilesNumbers[(j - 2)];
        temp7 = tilesNames[(i + 2)] + tilesNumbers[(j - 1)];
        temp8 = tilesNames[(i - 2)] + tilesNumbers[(j - 1)];

        //console.log($("#temp"+v));
        //console.log(temp2);


        if (!($('#' + temp1 + '>div').hasClass('white')) && (color === "white")) {
            $('#' + temp1).addClass('selectPath');
            if (($('#' + temp1 + '>div').hasClass('black'))) {
                $('#' + temp1).addClass('remove');
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp2 + '>div').hasClass('white')) && (color === "white")) {
            $('#' + temp2).addClass('selectPath');
            if (($('#' + temp2 + '>div').hasClass('black'))) {
                $('#' + temp2).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp3 + '>div').hasClass('white')) && (color === "white")) {
            $('#' + temp3).addClass('selectPath');
            if (($('#' + temp3 + '>div').hasClass('black'))) {
                $('#' + temp3).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp4 + '>div').hasClass('white')) && (color === "white")) {
            $('#' + temp4).addClass('selectPath');
            if (($('#' + temp4 + '>div').hasClass('black'))) {
                $('#' + temp4).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp5 + '>div').hasClass('white')) && (color === "white")) {
            $('#' + temp5).addClass('selectPath');
            if (($('#' + temp5 + '>div').hasClass('black'))) {
                $('#' + temp5).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp6 + '>div').hasClass('white')) && (color === "white")) {
            $('#' + temp6).addClass('selectPath');
            if (($('#' + temp6 + '>div').hasClass('black'))) {
                $('#' + temp6).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp7 + '>div').hasClass('white')) && (color === "white")) {
            $('#' + temp7).addClass('selectPath');
            if (($('#' + temp7 + '>div').hasClass('black'))) {
                $('#' + temp7).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp8 + '>div').hasClass('white')) && (color === "white")) {
            $('#' + temp8).addClass('selectPath');
            if (($('#' + temp8 + '>div').hasClass('black'))) {
                $('#' + temp8).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
        }

    }
    // if (!($('#' + temp1 + '>div').hasClass('chessPices')) && (color === "Black")) {
    //     $('#' + temp1).addClass('selectPath');
    //     $('#' + temp2).addClass('selectPath');
    //     //console.log(tempID);
    //     selectpices.addClass('afterClick');
    //
    // } else {
    //     break;
    //     //   }
    //
    // }

    color = "Black";
}
function blackKnight(evt) {
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
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber];
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var temp5;
    var temp6;
    var temp7;
    var temp8;
    //console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber;
    for (var v = 0; v < 8; v++) {
        temp1 = tilesNames[(i - 1)] + tilesNumbers[(j + 2)];
        temp2 = tilesNames[(i + 1)] + tilesNumbers[(j + 2)];
        temp3 = tilesNames[(i + 2)] + tilesNumbers[(j + 1)];
        temp4 = tilesNames[(i - 2)] + tilesNumbers[(j + 1)];
        temp5 = tilesNames[(i - 1)] + tilesNumbers[(j - 2)];
        temp6 = tilesNames[(i + 1)] + tilesNumbers[(j - 2)];
        temp7 = tilesNames[(i + 2)] + tilesNumbers[(j - 1)];
        temp8 = tilesNames[(i - 2)] + tilesNumbers[(j - 1)];

        //console.log($("#temp"+v));
        //console.log(temp2);
        if (!($('#' + temp1 + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + temp1).addClass('selectPath');
            if (($('#' + temp1 + '>div').hasClass('white'))) {
                $('#' + temp1).addClass('remove');
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp2 + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + temp2).addClass('selectPath');
            if (($('#' + temp2 + '>div').hasClass('white'))) {
                $('#' + temp2).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp3 + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + temp3).addClass('selectPath');
            if (($('#' + temp3 + '>div').hasClass('white'))) {
                $('#' + temp3).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp4 + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + temp4).addClass('selectPath');
            if (($('#' + temp4 + '>div').hasClass('white'))) {
                $('#' + temp4).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp5 + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + temp5).addClass('selectPath');
            if (($('#' + temp5 + '>div').hasClass('white'))) {
                $('#' + temp5).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp6 + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + temp6).addClass('selectPath');
            if (($('#' + temp6 + '>div').hasClass('white'))) {
                $('#' + temp6).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp7 + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + temp7).addClass('selectPath');
            if (($('#' + temp7 + '>div').hasClass('white'))) {
                $('#' + temp7).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }
        if (!($('#' + temp8 + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + temp8).addClass('selectPath');
            if (($('#' + temp8 + '>div').hasClass('white'))) {
                $('#' + temp8).addClass('remove');
            }
            //
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
        // if (!($('#' + temp1 + '>div').hasClass('chessPices')) && (color === "Black")) {
        //     $('#' + temp1).addClass('selectPath');
        //     $('#' + temp2).addClass('selectPath');
        //     //console.log(tempID);
        //     selectpices.addClass('afterClick');
        //
        // } else {
        //     break;
        //     //   }
        //
        // }
    }
    color = "white";
}
function whiteQuen(evt) {
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

    for (; j < 8 && i < 8; j++) {
        i = i + 1;
        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i1 = indexoftheLetter;
    var j1 = indexOfNumber + 1;
    for (; j1 < 8 && i1 > 0; j1++) {
        i1 = i1 - 1;
        //console.log(i1)
        tempID = tilesNames[i1] + tilesNumbers[j1];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i3 = indexoftheLetter;
    var j3 = indexOfNumber;
    //console.log("i3 "+i3+" j3 "+j3);
    for (; j3 > 0; j3--) {
        i3 = i3 + 1;
        // console.log(i3)
        tempID = tilesNames[(i3)] + tilesNumbers[(j3 - 1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i4 = indexoftheLetter;
    var j4 = indexOfNumber;
    for (; j4 > 0 && i4 > 0; j4--) {
        i4 = i4 - 1;
        // console.log(i3)
        tempID = tilesNames[(i4)] + tilesNumbers[(j4 - 1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i5 = indexoftheLetter;
    var j5 = indexOfNumber + 1;
    var whitePone = "wp";
    // console.log(whitePone);
    // console.log("J " + j);
    for (; j5 < 8; j5++) {

        tempID = tilesNames[i5] + tilesNumbers[j5];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var x5 = indexoftheLetter + 1;
    var y5 = indexOfNumber;

    for (; x5 < 8; x5++) {

        tempID = tilesNames[x5] + tilesNumbers[y5];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i6 = indexoftheLetter;
    var j6 = indexOfNumber;
    //console.log(j2);
    for (; j6 > 0; j6--) {

        tempID = tilesNames[i6] + tilesNumbers[(j6 - 1)];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }
    var x6 = indexoftheLetter;
    var y6 = indexOfNumber;
    for (; x6 > 0; x6--) {

        tempID = tilesNames[(x6 - 1)] + tilesNumbers[y6];
        //  console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }


    color = "Black";
}
function blackQuen(evt) {
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

    for (; j < 8 && i < 8; j++) {
        i = i + 1;
        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i1 = indexoftheLetter;
    var j1 = indexOfNumber + 1;
    for (; j1 < 8 && i1 > 0; j1++) {
        i1 = i1 - 1;
        //console.log(i1)
        tempID = tilesNames[i1] + tilesNumbers[j1];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i3 = indexoftheLetter;
    var j3 = indexOfNumber;
    //console.log("i3 "+i3+" j3 "+j3);
    for (; j3 > 0; j3--) {
        i3 = i3 + 1;
        // console.log(i3)
        tempID = tilesNames[(i3)] + tilesNumbers[(j3 - 1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i4 = indexoftheLetter;
    var j4 = indexOfNumber;
    for (; j4 > 0 && i4 > 0; j4--) {
        i4 = i4 - 1;
        // console.log(i3)
        tempID = tilesNames[(i4)] + tilesNumbers[(j4 - 1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i5 = indexoftheLetter;
    var j5 = indexOfNumber + 1;
    var whitePone = "wp";
    // console.log(whitePone);
    // console.log("J " + j);
    for (; j5 < 8; j5++) {

        tempID = tilesNames[i5] + tilesNumbers[j5];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var x5 = indexoftheLetter + 1;
    var y5 = indexOfNumber;

    for (; x5 < 8; x5++) {

        tempID = tilesNames[x5] + tilesNumbers[y5];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i6 = indexoftheLetter;
    var j6 = indexOfNumber;
    //console.log(j2);
    for (; j6 > 0; j6--) {

        tempID = tilesNames[i6] + tilesNumbers[(j6 - 1)];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }
    var x6 = indexoftheLetter;
    var y6 = indexOfNumber;
    for (; x6 > 0; x6--) {

        tempID = tilesNames[(x6 - 1)] + tilesNumbers[y6];
        //  console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }


    color = "white";
}
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

    for (; j < 8 && i < 8; j++) {
        i = i + 1;
        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i1 = indexoftheLetter;
    var j1 = indexOfNumber + 1;
    for (; j1 < 8 && i1 > 0; j1++) {
        i1 = i1 - 1;
        //console.log(i1)
        tempID = tilesNames[i1] + tilesNumbers[j1];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i3 = indexoftheLetter;
    var j3 = indexOfNumber;
    //console.log("i3 "+i3+" j3 "+j3);
    for (; j3 > 0; j3--) {
        i3 = i3 + 1;
        // console.log(i3)
        tempID = tilesNames[(i3)] + tilesNumbers[(j3 - 1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i4 = indexoftheLetter;
    var j4 = indexOfNumber;
    for (; j4 > 0 && i4 > 0; j4--) {
        i4 = i4 - 1;
        // console.log(i3)
        tempID = tilesNames[(i4)] + tilesNumbers[(j4 - 1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
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

    for (; j < 8 && i < 8; j++) {
        i = i + 1;
        tempID = tilesNames[i] + tilesNumbers[j];
        //console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i1 = indexoftheLetter;
    var j1 = indexOfNumber + 1;
    for (; j1 < 8 && i1 > 0; j1++) {
        i1 = i1 - 1;
        //console.log(i1)
        tempID = tilesNames[i1] + tilesNumbers[j1];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i3 = indexoftheLetter;
    var j3 = indexOfNumber;
    //console.log("i3 "+i3+" j3 "+j3);
    for (; j3 > 0; j3--) {
        i3 = i3 + 1;
        // console.log(i3)
        tempID = tilesNames[(i3)] + tilesNumbers[(j3 - 1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }


    }
    var i4 = indexoftheLetter;
    var j4 = indexOfNumber;
    for (; j4 > 0 && i4 > 0; j4--) {
        i4 = i4 - 1;
        // console.log(i3)
        tempID = tilesNames[(i4)] + tilesNumbers[(j4 - 1)];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
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

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        }

        else {
            break;
            //   }

        }


    }
    var x = indexoftheLetter + 1;
    var y = indexOfNumber;

    for (; x < 8; x++) {

        tempID = tilesNames[x] + tilesNumbers[y];
        // console.log(tempID);

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
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

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
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

        if (!($('#' + tempID + '>div').hasClass('white')) && (color === "white")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('black'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
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

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
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
        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
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


        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }

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

        if (!($('#' + tempID + '>div').hasClass('black')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');
            if (($('#' + tempID + '>div').hasClass('white'))) {
                $('#' + tempID).addClass('remove');
                break;
            }
            //console.log(tempID);
            selectpices.addClass('afterClick');

        } else {
            break;
            //   }

        }
    }

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


    var indexoftheLetter = ($.inArray(fristLetter, tilesNames));
    var indexOfNumber = ($.inArray(parseInt(firstID), tilesNumbers)
    );
    var tempID = tilesNames[indexoftheLetter] + tilesNumbers[indexOfNumber - 1];
    var tempID2;
    var tempID3;

    var i = indexoftheLetter;
    var j = indexOfNumber;
    tempID2=tilesNames[(i+1)]+tilesNumbers[(j-1)];
    tempID3=tilesNames[(i-1)]+tilesNumbers[(j-1)];
    console.log(tempID2);
    console.log(tempID3);
    if (!($('#' + tempID2 + '>div').hasClass('white')) && (color === "white")) {

        if (($('#' + tempID2 + '>div').hasClass('black'))) {
            $('#' + tempID2).addClass('remove');
            $('#' + tempID2).addClass('selectPath');
        }

        selectpices.addClass('afterClick');

    }if (!($('#' + tempID3 + '>div').hasClass('white')) && (color === "white")) {

        if (($('#' + tempID3 + '>div').hasClass('black'))) {
            $('#' + tempID3).addClass('remove');
            $('#' + tempID3).addClass('selectPath');
        }

        selectpices.addClass('afterClick');

    }
    for (; j > 4; j--) {

        tempID = tilesNames[i] + tilesNumbers[j - 1];


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
    var tempID2;
    var tempID3;
    //console.log(tempID);
    var i = indexoftheLetter;
    var j = indexOfNumber + 1;
    var whitePone = "wp";
    // console.log(whitePone);
    // console.log("J " + j);
    tempID2=tilesNames[(i+1)]+tilesNumbers[(j)];
    tempID3=tilesNames[(i-1)]+tilesNumbers[(j)];

    if (!($('#' + tempID2 + '>div').hasClass('black')) && (color === "Black")) {

        if (($('#' + tempID2 + '>div').hasClass('white'))) {
            $('#' + tempID2).addClass('remove');
            $('#' + tempID2).addClass('selectPath');
        }

        selectpices.addClass('afterClick');

    }if (!($('#' + tempID3 + '>div').hasClass('black')) && (color === "Black")) {

        if (($('#' + tempID3 + '>div').hasClass('white'))) {
            $('#' + tempID3).addClass('remove');
            $('#' + tempID3).addClass('selectPath');
        }
        //console.log(tempID);
        selectpices.addClass('afterClick');

    }

    for (var run=0;run<2;run++){

    }
    for (; j < 4; j++) {

        tempID = tilesNames[i] + tilesNumbers[j];


        if (!($('#' + tempID + '>div').hasClass('chessPices')) && (color === "Black")) {
            $('#' + tempID).addClass('selectPath');

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

    color = "white";


}


$(".col-xs-1.col-lg-1.col-sm-1").click(function () {

    var currenttile = $(this);

    var currP = $(".chessPices.afterClick");



    if ($(currenttile).hasClass('selectPath')) {
        currenttile.append(currP);
        chesspices.removeClass('afterClick');
        tiles.removeClass('selectPath');
        tiles.removeClass('remove');


    }
});
// FOR  REMOVE A CHESS PIECES
$(".black").click(function (evt) {

    var currenttile = $(this).parent('div');
    var currP = $(".chessPices.afterClick");
    if ($(currenttile).hasClass('remove') && ($(currenttile).hasClass('selectPath'))) {

        $(this).remove();

        color = "Black";
    }

});
$(".white").click(function (evt) {

    var currenttile = $(this).parent('div');
    var currP = $(".chessPices.afterClick");
    if ($(currenttile).hasClass('remove') && ($(currenttile).hasClass('selectPath'))) {

        $(this).remove();

        color = "white";
    }

});



