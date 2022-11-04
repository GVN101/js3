document.addEventListener('DOMContentLoaded', () => {
    const src = [
      [
        "Until i found you", "Stephen sanchez", "Until I Found You - Stephen Sanchez.m4a", "https://i.scdn.co/image/ab67616d0000b2738792c3e96f8ab97a767c5d0c"
      ],
      [
        "Waiting For The End", "Linkin Park", "Linkin Park - Waiting For The End (Official Video).mp3",
        "https://pics.filmaffinity.com/Linkin_Park_Waiting_for_the_End_Music_Video-548383347-large.jpg"
      ],
      [
        "One Last Time", "Ariana Grande", "One Last Time - Ariana Grande.m4a", "https://m.media-amazon.com/images/M/MV5BYTIzOTcwMjYtNjAzYy00ZjRlLWFhMTAtZmJiMjRiMTUzYTUyXkEyXkFqcGdeQXVyNTQ1MDQzMzU@._V1_.jpg"
      ],
      [
        "Glimpse Of Us", "Joji", "Glimpse of Us - Joji.m4a", "https://upload.wikimedia.org/wikipedia/en/4/4a/Joji_-_Glimpse_of_Us.png"
      ],
      [
        "Lose yourself", "Eminem", "Lose Yourself (Soundtrack Version) - Eminem.m4a", "https://pics.filmaffinity.com/eminem_lose_yourself-572276783-large.jpg"
      ]
    ];
    
    for (x = 0; x < src.length; x++) {
      var s = src[x];
      var number = parseInt(x) + 1;
      var artist = document.createTextNode(number + ": " + s[0]);
      var track_name = document.createTextNode(s[1]);
      
      var listItem = document.createElement('div');
      var artist_text = document.createElement('h3');
      var track_text = document.createElement('p');
      
      artist_text.appendChild(artist);
      track_text.appendChild(track_name);
      
      listItem.appendChild(artist_text);
      listItem.appendChild(track_text);
      
      listItem.classList.add('item');
      listItem.dataset.index = x;
      
      document.getElementById('list').appendChild(listItem);
    }
    displayTrack(0);
    
    var listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
      el.onclick = () => {
        displayTrack(el.dataset.index);
      };
    });
    
    function displayTrack(x) {
      var active = document.querySelector('.is-active');
      if (active) {
        active.classList.remove('is-active'); 
      }
      var el = document.getElementById('list').children[x];
      el.classList.add('is-active');
      var s = src[x],
          artist = s[0],
          track = s[1],
          audio = s[2],
          img = s[3],
          number = parseInt(x) + 1;
      document.getElementById('title').innerText = number + ": " + artist;
      document.getElementById('song_title').innerText = track;
      var albumArt = document.getElementById('art');
      albumArt.src = img;
      albumArt.alt = artist + " " + track;
      document.getElementById('audio').src = audio;
    }
  })