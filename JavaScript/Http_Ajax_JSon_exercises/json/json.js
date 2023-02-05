/*JSON
Use Dog API
You can find the documentation for this API at https://dog.ceo/dog-api/
Check out the documentation to see how to use this API
Create a function which is sending request via AJAX and getting data in JSON format
When data is received from the server, extract image url, and use that url to create
image element and add it to html page.
There is a button on HTML page!
Each time when user click the button this function for getting image data is invoked and
new picture is added to the page. */
// $('#fetchDogImageBtn').click(function () {
//   $.ajax({
//     type: 'GET',
//     url: 'https://dog.ceo/api/breeds/image/random',
//     dataType: 'json',
//     success: function (data) {
//       $('.dog-image-container').show();
//       $('.dog-image').attr('src', data.message);
//     },
//   });
// });

let fetchDogImageBtn = document.querySelector('#fetchDogImageBtn');
let dogImage = document.querySelector('.dog-image');
let dogImageContainer = document.querySelector('.dog-image-container');

fetchDogImageBtn.addEventListener('click', function () {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    if (xhr.status === 200) {
      dogImageContainer.style.display = 'block';
      dogImage.src = xhr.response.message;
    }
  };
  xhr.send();
});
