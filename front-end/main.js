$(document).ready(function() {
  var name;
  while (name == null || name == " " || name == "") {
    name = prompt('What is your name?');
  }
	var socket = io.connect('192.168.0.107:5000');
	socket.on('connect', function() {
		socket.send(name, ' has connected!');
	});
	socket.on('message', function(other_name, msg) {
		$("#messages").append('<li>' + "<span class='name'>"+other_name+"</span>" + ": " + msg + '</li>');
		console.log('Received message');
	});
	$('#sendbutton').on('click', function() {
    socket.send(name, $('#myMessage').val());
    $('#myMessage').val('');
	});
});
