$(function () {
  $('input').keypress(function (event) {
    if (event.which === 13) {
      var username = $('input').val();
      $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/' + username,
        success: function (response) {
          var randomImageNumber = Math.floor(Math.random() * 5) + 1;
          var imageSrc =
            'img/user-icon-2098873_64' + randomImageNumber + '.png';
          var html = '';
          html += "<div class='user-card'>";
          html += "<img src='" + imageSrc + "' class='user-avatar' />";
          html += '<hr />';
          html += "<div class='user-footer'>" + response.login + '</div>';
          html += '</div>';
          $('.user-gallery').html(html);
        },
      });
    }
  });
});
