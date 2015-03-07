var playlists = {

    getPlaylist: function(id) {
        $.get('https://secret-retreat-5119.herokuapp.com/playlists/' + id, function (data, status) {
            $.get('/ted-jquery/playlists/playlist.jade', function (template) {
                var html = jade.render(template, {
                    object: data.playlist
                });
                $('#main').html(html);
            })
        })
    },

    load: function () {
        $.get('https://secret-retreat-5119.herokuapp.com/playlists', function (data, status) {
            $.get('/ted-jquery/playlists/playlists.jade', function (template) {
                console.log(data.playlists);
                var html = jade.render(template, {
                    objects: data.playlists
                });
                $('#main').html(html)
            })
        })
    }
};