var host = "cpsc484-04.yale.internal:8888";
var timer = null;

$(document).ready(function () {
  setTimeout(function () {
    frames.start();
  }, 2000);
  twod.start();

  // start timer when page loads
  timer = setTimeout(function () {
    window.location.href = "http://127.0.0.1:8000/"; // redirect to welcome page after 3 minutes
  }, 180000); // 3 minutes in milliseconds
});

var frames = {
  socket: null,

  start: function () {
    var url = "ws://" + host + "/frames";
    frames.socket = new WebSocket(url);
    frames.socket.onmessage = function (event) {
      var command = frames.get_left_wrist_command(JSON.parse(event.data));
      console.log(command)
      if (command !== null) {
        sendWristCommand(command);
        // reset timer if user has moved
        clearTimeout(timer);
      }
      else {
        timer = setTimeout(function () {
          window.location.href = "http://127.0.0.1:8000/"; // redirect to welcome page after 3 minutes
        }, 180000); // 3 minutes in milliseconds
      }
    }
  },

  get_left_wrist_command: function (frame) {
    var command = null;
    if (frame.people.length < 1) {
      return command;
    }

    // Normalize by subtracting the root (pelvis) joint coordinates
    var pelvis_x = frame.people[0].joints[0].position.x;
    var pelvis_y = frame.people[0].joints[0].position.y;
    var pelvis_z = frame.people[0].joints[0].position.z;
    var left_wrist_x = (frame.people[0].joints[7].position.x - pelvis_x) * -1;
    var left_wrist_y = (frame.people[0].joints[7].position.y - pelvis_y) * -1;
    var left_wrist_z = (frame.people[0].joints[7].position.z - pelvis_z) * -1;

    if (left_wrist_z < 100) {
      return command;
    }

    if (left_wrist_x < 200 && left_wrist_x > -200) {
      if (left_wrist_y > 500) {
        command = 73; // UP
      } else if (left_wrist_y < 100) {
        command = 75; // DOWN
      }
    } else if (left_wrist_y < 500 && left_wrist_y > 100) {
      if (left_wrist_x > 200) {
        command = 76; // RIGHT
      } else if (left_wrist_x < -200) {
        command = 74; // LEFT
      }
    }
    return command;
  }
};

var twod = {
  socket: null,

  start: function () {
    var url = "ws://" + host + "/twod";
    twod.socket = new WebSocket(url);
    twod.socket.onmessage = function (event) {
      twod.show(JSON.parse(event.data));
    }
  },

  show: function (twod) {
    $('.twod').attr("src", 'data:image/pnjpegg;base64,' + twod.src);
  }
};

function sendWristCommand(command) {
  switch (command) {
    case 74:
      window.location.href = "/reward?action=left"
      break;
    case 76:
      window.location.href = "/"
      break;
  }
}