var search = {

    search: function (search) {
        if (search == '') {
            $('#content').prepend('<div class="alert alert-danger alert-dismissible" role="alert">' +
                                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                                            '<span aria-hidden="true">&times;</span>' +
                                        '</button>' +
                                        '<strong>Warning!</strong> You need to enter a search query first!' +
                                    '</div>');
        } else {
            $('#main').html('<h1>Loading...</h1>');
            var search_for = $('#search_button').text();
            search_for = search_for.toLowerCase().replace(" ", "_");
            $.get('https://secret-retreat-5119.herokuapp.com/search/' + search_for + '/' + search, function (data, status) {
                var object = search_for !== 'talks' ? (search_for !== 'playlists' ? (search_for !== 'quotes' ? "blog_post" : "quote") : "playlist") : "talk";
                console.log('/ted-jquery/search/' + object + '.jade');
                $.get('/ted-jquery/search/' + object + '.jade', function (template) {
                    console.log(data.results);
                    if (data.results.length != 0){
                        var html = jade.render(template, {
                            object: data.results
                        });
                        $('#main').html(html);
                        $('h1').highlight(search.split(" "));
                        $('p').highlight(search.split(" "));
                    } else {
                        console.log("hello?");
                        $('#main').html('<h1>Umm...</h1>');
                    }
                });
            });
        }
    }
};