/*XML
Use Geolocation API service
You can find the documentation for this API at
https://www.geoplugin.com/webservices/xml
Check out the documentation to see how to use this API
Create a function which is sending request via AJAX and getting data in XML format
When data is received from the server, extract country name which is detected based on
IP address, and show it on the screen.
Extra:
There is a button and input field on HTML page!
Each time user clicks the button, function for getting geolocation data is invoked and
new ip address written in input field is used when sending request. */

// let countryBtn = document.querySelector('#countryBtn');
// let inputCountry = document.querySelector('#country');
// let countryText = document.querySelector('#countryText');

// function getCountryByIp(country) {
//   let xmlhttp = new XMLHttpRequest();
//   xmlhttp.open('GET', 'http://www.geoplugin.net/xml.gp?ip=' + country);
//   xmlhttp.send();
//   xmlhttp.onload = function () {
//     if (xmlhttp.status === 200) {
//       let xmlDoc = xmlhttp.responseXML;
//       let country = xmlDoc.querySelector('geoplugin_countryName');
//       countryText.textContent = country.textContent;
//       inputCountry.value = '';
//     }
//   };
// }

// countryBtn.addEventListener('click', function () {
//   getCountryByIp(inputCountry.value);
// });
// $(function () {
//   $('#countryBtn').click(function () {
//     let country = $('#country').val();
//     $.ajax({
//       type: 'GET',
//       url: 'http://www.geoplugin.net/xml.gp?ip=' + country,
//       dataType: 'xml',
//       success: function (xml) {
//         let countryName = $(xml).find('geoplugin_countryName').text();
//         $('#countryText').text(countryName);
//       },
//     });
//     $('#country').val('');
//   });
// });

$(function () {
  $('#countryBtn').click(function () {
    let country = $('#country').val();
    $.ajax({
      type: 'GET',
      url: 'http://www.geoplugin.net/xml.gp?ip=' + country,
      dataType: 'xml',
      success: function (xml) {
        let countryName = $(xml).find('geoplugin_countryName').text();
        let cityName = $(xml).find('geoplugin_city').text();
        $('#countryText').text(countryName);
        alert('City: ' + cityName);
      },
    });
    $('#country').val('');
  });
});
