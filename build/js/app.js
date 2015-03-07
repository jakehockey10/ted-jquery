$('#search_button').on('click', function (event) {
    var search_input = $('#search_input').val();
    search.search(search_input);
});

$('#talks').on('click', function (event) {
    $('#search_button').text('Talks');
});

$('#playlists').on('click', function (event) {
    $('#search_button').text('Playlists');
});

$('#quotes').on('click', function (event) {
    $('#search_button').text('Quotes');
});

$('#blog_posts').on('click', function (event) {
    $('#search_button').text('Blog Posts');
});

$('a.category').on('click', function (event) {
    $('.nav.navbar-nav').children().each(function() {
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');
    $('#search_button').text($(this).contents().get(0).nodeValue);
});

$('li.talks').on('click', function (event) {
    talks.load();
});

$('li.playlists').on('click', function (event) {
    playlists.load();
});

$('li.quotes').on('click', function (event) {
    quotes.load();
});

$('li.blog_posts').on('click', function (event) {
    blog_posts.load();
});