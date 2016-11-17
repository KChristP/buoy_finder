google.load("feeds", "1");

function initialize() {
  var feed = new google.feeds.Feed("http://www.ndbc.noaa.gov/rss/ndbc_obs_search.php?lat=40N&lon=73W&radius=100");
  feed.setNumEntries(100)
  feed.load(function(result) {
    console.log(result);
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        console.log(entry);
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div);
      }
    }
  });
}
google.setOnLoadCallback(initialize);
