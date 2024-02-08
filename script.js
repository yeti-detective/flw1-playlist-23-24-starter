// Declare variables below
const placeholderImageUrl = '/placeholder_image.jpeg'

/**
 * JSON.stringifies `songList` & saves it to localStorage under the key "songList"
 * @param songList
 */
function saveSongList(songList) {
  localStorage.setItem('songList', JSON.stringify(songList))
}

/**
 * Returns the songList from localStorage, parsed it into an array
 * @returns {[]}
 */
function getSongList() {
  return JSON.parse(localStorage.getItem('songList')) || [];
}

/**
 * returns an object of the song info
 * @param title {string}
 * @param artist {string}
 * @param imageUrl {string}
 * @param songUrl {string}
 * @returns {{artist, imageUrl, title, songUrl}}
 */
function getSongObject(title, artist, imageUrl, songUrl) {
  return {title, artist, imageUrl: imageUrl || placeholderImageUrl, songUrl}
}

/**
 * Returns true if all required fields are filled. Alerts user if fields are missing.
 * @param songObject {object}
 * @returns {boolean}
 */
function validateSongObject(songObject) {
  for (const key of Object.keys(songObject)) {
    if (!songObject[key]) {
      alert(`${key} is a required field`)
      return false;
    }
  }
  return true;
}

const getColumn = columnId => document.getElementById(columnId)
const getDiv = () => document.createElement('div');
const getTextDisplay = text => {
  const div = getDiv();
  const h3 = document.createElement('h3');
  h3.innerText = text;
  div.appendChild(h3);
  return div;
}

const appendTextDisplayToColumn = (columnId, text) => {
  const col = getColumn(columnId);
  col.appendChild(getTextDisplay(text));
}

function appendImageUrl(imageUrl) {
  const imagesCol = getColumn('images')
  const newImage = document.createElement('img')
  newImage.src = imageUrl;
  imagesCol.appendChild(newImage);
}

function appendTitle(title) {
  appendTextDisplayToColumn('songs', title)
}

function appendArtist(artistName) {
  appendTextDisplayToColumn('artists', artistName)
}

function appendSongUrl(songUrl, title) {
  const linksCol = getColumn('links');
  const anchor = document.createElement('a')
  anchor.href = songUrl
  anchor.target = "_blank"
  anchor.innerText = `Listen to ${title}`;
  anchor.style.fontWeight = 'bold'
  linksCol.appendChild(anchor)
}

function clearDisplaySection() {
  // removes all children of each column
  getColumn('images').textContent = ''
  getColumn('songs').textContent = ''
  getColumn('artists').textContent = ''
  getColumn('links').textContent = ''
}

// Use the body of this function to display your playlist.
function displaySongInfo() {
  const songList = getSongList();

  clearDisplaySection();

  for (const {imageUrl, title, artist, songUrl} of songList) {
    appendImageUrl(imageUrl);
    appendArtist(artist);
    appendTitle(title);
    appendSongUrl(songUrl, title)
  }
}

function clearInputFields() {
  const inputs = document.querySelectorAll('input')
  for (const input of inputs) {
    input.value = '';
  }
}

// Use the body of this function to add new songs to your playlist.
function addSongInfo() {
  // get new values from the UI
  const title = document.querySelector('input.title').value;
  const artist = document.querySelector('input.artist').value;
  const imageURL = document.querySelector('input.image').value;
  const songURL = document.querySelector('input.link').value;

  const newSongObj = getSongObject(title, artist, imageURL, songURL)

  if (validateSongObject(newSongObj)) {
    // get current song list
    const currentSongs = getSongList();
    currentSongs.push(newSongObj);
    saveSongList(currentSongs);
    displaySongInfo();
    clearInputFields();
  }
}

document.querySelector('button.add-input').addEventListener('click', addSongInfo);

displaySongInfo();