const searchInput = document.getElementById('searchInput');
const mangaList = document.getElementById('mangas');

async function searchManga(query) {
  const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}`);
  const data = await response.json();
  return data.data;
}

searchInput.addEventListener('input', async (event) => {
  const query = event.target.value;
  const results = await searchManga(query);

  mangaList.innerHTML = '';
  results.forEach(manga => {
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
      <p>Genres: ${manga.genres?.map(genre => genre.name).join(', ') || 'Genres Not Available'}</p>
      <p>Summary: ${manga.synopsis || 'Summary Not Available'}</p>
      <p>Release Date: ${manga.published?.from?.[0].from_year || 'Release Date Not Available'}</p>
    `;

    mangaList.appendChild(mangaItem);
  });
});
