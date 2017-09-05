$("img").addClass("img-responsive");
$("img").draggable({revert: 'invalid'});

//$("#Brow").droppable();
var BP1=0;
console.log(BP1);
var bp1=$("#BP-1").position();
console.log(bp1.top);

var intbp1=0;

$("#BP-1").click(function () {
    bp1=$("#BP-1").position();
    intbp1=intbp1+1;
});
$("#BP-1").mouseover(function (evt) {
    if((bp1.top===20)&(intbp1===0)){


        console.log(intbp1);
        $("#D1").css("background-color","red");
        $("#C1").css("background-color","red");
        $("#C1").droppable();
        $("#D1").droppable();
        bp1=$("#BP-1").position();

        if(intbp1===1){
            $("#D1").css("background-color","red");
        }
    }else{
        $("#C1").css("background-color","#1b6d85");
        $("#D1").css("background-color","black");
    }
    //$("#C1").css("background-color","red")
});
$("#BP-1").mouseleave(function (evt) {
    $("#C1").css("background-color","#1b6d85");
    $("#D1").css("background-color","black");
    $("#C1").droppable({disabled:true});
    $("#D1").droppable({disabled:true});

});
