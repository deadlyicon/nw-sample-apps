var gui = require('nw.gui');

navigator.webkitGetUserMedia({video:true},
  function(stream) {
    document.getElementById('camera').src = webkitURL.createObjectURL(stream);
  },
  function() {
    alert('could not connect stream');
  }
);

gui.Window.get().show();
