document.addEventListener("DOMContentLoaded", function (event) {
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function (event) {
      if (event.keyCode == 13) {
        loadVideo(this.value);
      }
    };
    const searchDefault = "Trung Quân";
  
    loadVideo(searchDefault);
  });
  
  var model = document.getElementById("myModel");
  
  var span = document.getElementsByClassName("close")[0];
  
  var videoFrame = document.getElementById("video-frame");
  
  span.onclick = function () {
    closeVideo();
  };
  
  window.onclick = function (event) {
    if (event.target == model) {
      closeVideo();
    }
  };
  
  function loadVideo(keyword) {
    var YOUTUBE_API =
      "https://content.googleapis.com/youtube/v3/search?q=" +
      keyword +
      "&type=video&maxResults=9&part=snippet&key=AIzaSyAAGqBc6_Y2RJrpE2qAGV7DoSZ_FrxGdXM";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", YOUTUBE_API, true);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var responseJson = JSON.parse(this.responseText);
        var htmlContent = "";
  
        for (var i = 0; i < responseJson.items.length; i++) {
          if (responseJson.items[i].id.kind == "youtube#channel") {
            continue;
          }
          var videoId = responseJson.items[i].id.videoId;
          var videoTitle = responseJson.items[i].snippet.title;
          var videoDescription = responseJson.items[i].snippet.description;
          var videoThumbnail =
            responseJson.items[i].snippet.thumbnails.medium.url;
  
          htmlContent +=
            '<div class="video" onclick="showVideo(\'' + videoId + "')\">";
          htmlContent += '<img src="' + videoThumbnail + '">';
          htmlContent += '<div class="title">' + videoTitle + "</div>";
          htmlContent += "</div>";
        }
  
        document.getElementById("list-video").innerHTML = htmlContent;
      } else if (this.readyState == 4) {
        console.log("Fails");
      }
    };
  
    xhr.send();
  }
  
  function closeVideo() {
    model.style.display = "none";
    videoFrame.scr = "";
  }
  
  function showVideo(videoId) {
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    setTimeout(function () {
      model.style.display = "block";
    }, 300);
  }
  