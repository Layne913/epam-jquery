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

// handle the form events here

$("#formEvents form").submit(function(event) {

});