const searchInput = document.getElementById('searchInput');
const mangaList = document.getElementById('mangas');
const sortSelect = document.getElementById('sortSelect');
const genreSelect = document.getElementById('genreSelect');

async function searchManga(query) {
  const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}`);
  const data = await response.json();
  return data.data;
}

function sortManga(data, sortBy) {
  switch (sortBy) {
    case 'ascending':
      return data.sort((a, b) => a.title.localeCompare(b.title));
    case 'descending':
      return data.sort((a, b) => b.title.localeCompare(a.title));
    case 'recent':
      return data.sort((a, b) => new Date(b.published?.from?.[0].from_year) - new Date(a.published?.from?.[0].from_year));
    default:
      return data;
  }
}

function filterByGenre(data, selectedGenre) {
  if (selectedGenre === 'all') return data;
  return data.filter(manga => manga.genres?.some(genre => genre.name === selectedGenre));
}

async function fetchGenres() {
  const response = await fetch('https://api.jikan.moe/v4/genres/manga');
  const data = await response.json();
  const genres = data.data.map(genre => genre.name);
  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.text = genre;
    genreSelect.appendChild(option);
  });
}

async function displayManga(data) {
  mangaList.innerHTML = '';
  data.forEach(manga => {
    const mangaItem = document.createElement('div');
    mangaItem.classList.add('manga');

    // Image element and placeholder
    const mangaImage = document.createElement('img');
    mangaImage.src = manga.images?.jpg.image_url || 'https://via.placeholder.com/150'; // Replace with your preferred placeholder URL
    mangaImage.alt = manga.title;

    // Add image and other details to the manga item
    mangaItem.innerHTML = `
      <h2>${manga.title}</h2>
      <img src="${mangaImage.src}" alt="${mangaImage.alt}">
      <p>Author: ${manga.authors?.[0].name || 'Author Not Available'}</p>
      <p>Genres: ${manga.genres?.map(genre => genre.name).join(', ') || 'Genres Not Available'}</p>`;

    mangaList.appendChild(mangaItem);
  });
}

// Event listeners for search and sort/filter changes
searchInput.addEventListener('input', async (event) => {
  const query = event.target.value;
  const results = await searchManga(query);
  const sortedResults = sortManga(results, sortSelect.value);
  const filteredResults = filterByGenre(sortedResults, genreSelect.value);
  displayManga(filteredResults);
});

sortSelect.addEventListener('change', async () => {
  const query = searchInput.value;
  const results = await searchManga(query);
  const sortedResults = sortManga(results, sortSelect.value);
  const filteredResults = filterByGenre(sortedResults, genreSelect.value);
  displayManga(filteredResults);
});

genreSelect.addEventListener('change', async () => {
  const query = searchInput.value;
  const results = await searchManga(query);
  const sortedResults = sortManga(results, sortSelect.value);
  const filteredResults = filterByGenre(sortedResults, genreSelect.value);
  displayManga(filteredResults);
});

// Fetch genres on page load
fetchGenres();
