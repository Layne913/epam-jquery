// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
	$("#before p").before("YOLO");
});

$("#css1 button").click(function() {
  $("#css1 p").css("font-size", "20px");
});

$("#css2 button").click(function() {
  $("#css2 p").css({"font-size" : "150%" ,
                    "color" : "red"});
});

$("#attr1 button").click(function() {
    var attr = $("#attr1 p a").attr("href");
    console.log(attr);
});

$("#attr2 button").click(function() {
    $("#attr2 p a").attr("href", "www.google.com");
});

$("#class1 button").click(function() {
    $("#class1 p").addClass("bg-pimary");
});

$("#class2 button").click(function() {
    var has = $("#class2 p").hasClass("lead");
    alert(has);
});

$("#form1 button").click(function() {
    var value = $("#exampleInputEmail1").val();
    console.log(value);
});

$("#form2 button").click(function() {
    var value = $("#exampleInputName2").val("hello");
});

// handle the mouseover event here
$("#mouse img").mouseover(function() {
    var height = $(this).height();
    var width =$(this).width();
    $(this).width(height*1.5);
    $(this).height(height*1.5);
});

// handle the form events here

$("#formEvents form").submit(function(event) {
    event.preventDefault();
    var check = $("form input[type=checkbox]").prop("checked");
    var email = $("form input[type=email]").val();
    var password = $("form input[type=password]").val();
    console.log('check: ' + $("form input[type=checkbox]").prop("checked") );
    console.log('email: ' + email );
    console.log('password: ' + password );
});

$( "#animate1 img" ).mouseover(function() {
    var height = $(this).height() * 1.7;
    var width = $(this).width() *1.7;
    $( "#animate1 img" ).animate({
        "height": height,
        "width": width
    });
});

var right = true;
$( "#animate2 img" ).dblclick(function() {
   if (right) {
    $( "#animate2 img" ).animate({
        "margin-left" : "400px"
    }, 500, 'swing');
    right = false;
   }
   else {
     $( "#animate2 img" ).animate({
        "margin-left" : "0"
    }, 500, 'swing');
    right = true;
   }
});

$( "#animate3 img" ).click(function() {
    function fadeIn(callback) {
        $( "#animate3 img" ).attr('src', 'images/cat.jpg');
        $( "#animate3 img" ).animate({ "opacity": "1"},'slow');
        callback();
    }

    function fadeOut() {
        $( "#animate3 img" ).animate({
            "opacity" : "0"
        }, 'slow');
    }

    fadeIn(fadeOut);
});