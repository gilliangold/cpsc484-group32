var host = "cpsc484-01.yale.internal:8888";

$(document).ready(function() {
  twod.start();
});

var twod = {
  socket: null,

  start: function() {
    var url = "ws://" + host + "/twod";
    twod.socket = new WebSocket(url);
    twod.socket.onmessage = function(event) {
      twod.show(JSON.parse(event.data));
    }
  },

  show: function(twod) {
    $('.twod').attr("src", 'data:image/pnjpegg;base64,'+twod.src);
  }
};

$(document).ready( function() {
    var time = 35
    var nums = 0
    setInterval( function() {
        time--;
        if (time <= 30) {
            $('#timer').html(time);
        }
        if (time == 0) {
            time = 35;
            nums++;
        }
        if (nums == 8) {
            window.location.pathname = "/"
        }
    }, 1000 );
});
