$.getJSON('http://valentinledrapier.com/config.json').done(function (data) {
    if (data && data.url) {
        console.log(data);
        window.location.href = data.url;
    }
}).fail(function() {
    $( "#message" ).text( "Error loading config.json" );
});