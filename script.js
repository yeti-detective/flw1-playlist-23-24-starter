// Declare variables below

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
  return JSON.parse(localStorage.getItem('songList'))
}

/**
 * returns an object of the song info
 * @param title {string}
 * @param artist {string}
 * @param imageUrl {string}
 * @param songUrl {string}
 * @returns {{artist, imageUrl, title, songUrl}}
 */
function makeSongObject(title, artist, imageUrl, songUrl) {
  return {title, artist, imageUrl, songUrl}
}

const getColumn = columnId => document.getElementById(columnId)
const getDiv = () => document.createElement('div');
const getTextDisplay = text => {
  const div = getDiv();
  const h3 = document.createElement('h3');
  h3.innerText = text;
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

// Use the body of this function to display your playlist.
function displaySongInfo() {
  const songList = getSongList();

  for (const {imageUrl, title, artist, songUrl} of songList) {
    appendImageUrl(imageUrl);
    appendArtist(artist);
    appendTitle(title);
    appendSongUrl(songUrl, title)
  }
}
  



  // This function empties the divs each time the button is clicked.
  // This prevents the playlist from repeatedly adding data.
  // Try commenting out this function call to see what happens without it!
  function emptySongInfo() {
    $(".songs").empty();
    $(".images").empty();
    $(".artists").empty();
    $(".lengths").empty();
    $(".links").empty();
  }
  

// Use the body of this function to add new songs to your playlist.
  function addSongInfo() {


  }
  
  
  document.querySelector("#add").addEventListener("click", function () {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
  });
  
  displaySongInfo();