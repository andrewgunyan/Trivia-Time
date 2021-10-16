document.getElementById("weatherSubmit").addEventListener("click", function(event) {

    event.preventDefault();
    const value = document.getElementById("animeTypes").value;
    console.log(value);

    const url = "https://api.waifu.pics/sfw/" + value;
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
      console.log(json);

        let results = "";
        results += json.url;

        

        document.getElementById("weatherResults").src = results;;
        var searchBox = document.getElementById("animeTypes");
        searchBox.style.marginTop = "5%";
        searchBox.style.marginBottom = "10px";
        var submitBox = document.getElementById("weatherSubmit");
        submitBox.style.marginTop = "5%";
        submitBox.style.marginBottom = "10px";
    });
});


