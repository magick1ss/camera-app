var input = document.querySelector('input[type=file]');
input.onchange = function () {
  var file = input.files[0];
  function displayAsImage(file);
};




function displayAsImage(file) {
  var imgURL = URL.createObjectURL(file),
      img = document.createElement('img');

  img.onload = function() {
    URL.revokeObjectURL(imgURL);
  };

  img.src = imgURL;
  document.body.appendChild(img);
}
