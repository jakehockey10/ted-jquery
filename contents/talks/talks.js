var talks = {

    getTalk: function(id) {
        $.get('https://secret-retreat-5119.herokuapp.com/talks/' + id, function (data, status) {
            $.get('/ted-jquery/talks/talk.jade', function (template) {
                var html = jade.render(template, {
                    object: data.talk
                });
                $('#main').html(html);
            })
        })
    },

    load: function () {
        $.get('https://secret-retreat-5119.herokuapp.com/talks', function (data, status) {
            $.get('/ted-jquery/talks/talks.jade', function (template) {
                console.log(data.talks);
                var html = jade.render(template, {
                    objects: data.talks
                });
                $('#main').html(html)
            })
        })
    }
};