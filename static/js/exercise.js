var host = "cpsc484-04.yale.internal:8888";
var timer = null;

$(document).ready(function() {
  $('.warning').hide();
  frames.start();
  twod.start();

  if ($('#choice').val() == 'stretch') {
    $('body, html').css("background-color", "#FFFB97");
    $('.stretch').show();
    $('.breathe').hide();
  }
  else if ($('#choice').val() == 'breathe') {
    $('body, html').css("background-color", "#C0F8B7");
    $('.stretch').hide();
    $('.breathe').show();
  }
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

var frames = {
  socket: null,

  start: function() {
      var url = "ws://" + host + "/frames";
      frames.socket = new WebSocket(url);
      frames.socket.onmessage = function (event) {
        var frame = JSON.parse(event.data);
        if (frame.people.length != $('#mode').val()) {
            $('.warning').show();
            if (frame.people.length == 0) {
                // start timer when page loads
                timer = setTimeout(function() {
                    window.location.href = "/"; // redirect to welcome page after 3 minutes
                }, 180000); // 3 minutes in milliseconds
            }
        }
        else {
            $('.warning').hide();
        }
      }
    },
};

$(document).ready( function() {
    var time = $('#choice').val() == 'stretch' ? 35 : 30
    var refresh_time = $('#choice').val() == 'stretch' ? 35 : 30
    var end_num = $('#choice').val() == 'stretch' ? 2 : 3
    var nums = 0
    setInterval( function() {
        time--;
        if (time <= 30) {
            $('#timer').html(time);
        }
        if (time == 0) {
            time = refresh_time;
            nums++;
            if ($('#choice').val() == 'stretch') {
                $('#progress-stretch').html(nums + 1 + " / 8");
            }
            else {
                $('#progress-breathe').html(nums + 1 + " / 10");
            }
        }
        if (nums == end_num) {
            window.location.href = "/results?choice=" + $('#choice').val() + "&mode=" + $('#mode').val()
        }
    }, 1000 );
});
