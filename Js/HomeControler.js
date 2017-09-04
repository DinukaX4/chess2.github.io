$( function() {


    $( "#rok1" ).draggable();
    $( "#A1" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "col-lg-1 col-sm-1 col-xs-1" )
                .find( "p" )
                .html( "Dropped!" );
        }
    }
    );
    $("#A1").css("text-align","center");



} );

$("img").addClass("img-responsive");
