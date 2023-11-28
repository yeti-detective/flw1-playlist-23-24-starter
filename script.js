// Declare variables below


// Use the body of this function to display your playlist.
function displaySongInfo() {



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