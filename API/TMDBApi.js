
const API_TOKEN = "fe9851a9a32dc0201b962d694e66a8fa";
export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))

  }
  // API/TMDBApi.js
 // test
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }
  