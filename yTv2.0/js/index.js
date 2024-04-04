var keyword = "Trung Quân";

var YOUTUBE_API =
  "https://content.googleapis.com/youtube/v3/search?q=" +
  keyword +
  "&type=video&maxResults=9&part=snippet&key= AIzaSyAAGqBc6_Y2RJrpE2qAGV7DoSZ_FrxGdXM";

fetch(YOUTUBE_API, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
}).then((res) => {
  return res.json;
});
