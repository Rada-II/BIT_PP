// Function to fetch a Chuck Norris joke and add it to the page
function getChuckNorrisJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      const jokeText = data.value;
      const jokeContainer = document.getElementById('joke-content');
      jokeContainer.textContent = jokeText;

      // Change the background image
      changeBackground();
    })
    .catch(error => console.error(error));
}

function changeBackground() {
  const backgrounds = [
    'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/streams/2012/March/120305/143382-g-rnt-120305-norris-walker.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chuck_Norris%2C_The_Delta_Force_1986.jpg/440px-Chuck_Norris%2C_The_Delta_Force_1986.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/chuck-norris-manliest-men-1537210102.jpg?crop=0.8880208333333334xw:1xh;center,top&resize=1200:*',
    'https://images02.military.com/sites/default/files/styles/full/public/2020-05/Chuck%20Norris%20Delta%20Force%201200.jpg',
    'https://theactionelite.com/wp-content/uploads/2020/09/MV5BYTViNWY5YzctMmEwMy00YjU3LThkYWMtNzRkZGJhZmUyZTM0XkEyXkFqcGdeQXVyMjM0ODM0NDk@._V1_.jpg',
    'https://actionflixdotcom.files.wordpress.com/2022/03/chuck-norris-featured-image.jpg?w=1710&h=768&crop=1',
    'https://hips.hearstapps.com/hmg-prod/images/cn-vid-set-01-1-1548176637.jpg',
  ];
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const randomBackground = backgrounds[randomIndex];
  document.body.style.backgroundImage = `url('${randomBackground}')`;
}

document
  .getElementById('new-joke-btn')
  .addEventListener('click', getChuckNorrisJoke);
