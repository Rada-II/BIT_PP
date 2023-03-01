// document.addEventListener('DOMContentLoaded', function () {
//   let loaderContainer = document.querySelector('#loader-container');
//   let content = document.querySelector('#content');

//   function showContent() {
//     loaderContainer.parentElement.classList.remove('loading');
//     document.body.classList.add('loaded');
//   }

//   function setRandomBackground() {
//     let gradientColors = [
//       '#FFC300',
//       '#DAF7A6',
//       '#FF5733',
//       '#C70039',
//       '#900C3F',
//       '#581845',
//       '#2C3E50',
//       '#E74C3C',
//       '#8E44AD',
//       '#1ABC9C',
//     ];

//     let color1 =
//       gradientColors[Math.floor(Math.random() * gradientColors.length)];
//     let color2 =
//       gradientColors[Math.floor(Math.random() * gradientColors.length)];
//     while (color1 === color2) {
//       color2 =
//         gradientColors[Math.floor(Math.random() * gradientColors.length)];
//     }

//     let angle = Math.floor(Math.random() * 361);

//     loaderContainer.style.background =
//       'linear-gradient(' + angle + 'deg, ' + color1 + ', ' + color2 + ')';
//   }

//   setRandomBackground();

//   loaderContainer.parentElement.classList.add('loading');
//   document.addEventListener('click', showContent);
// });

document.addEventListener('DOMContentLoaded', function () {
  let loaderContainer = document.querySelector('#loader-container');
  let content = document.querySelector('#content');

  function showContent() {
    loaderContainer.parentElement.classList.remove('loading');
    document.body.classList.add('loaded');
  }

  loaderContainer.parentElement.classList.add('loading');
  document.addEventListener('click', showContent);

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setGradient() {
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    let gradient = 'linear-gradient(135deg, ' + color1 + ', ' + color2 + ')';
    if (gradient === 'linear-gradient(135deg, #000000, #000000)') {
      setGradient();
    } else {
      loaderContainer.style.backgroundImage = gradient;
      setTimeout(setGradient, 1000); // Change gradient every 500ms
    }
  }

  setGradient();
});
