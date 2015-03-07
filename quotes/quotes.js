var quotes = {

    getQuote: function(id) {
        $.get('https://secret-retreat-5119.herokuapp.com/quotes/' + id, function (data, status) {
            $.get('/ted-jquery/quotes/quote.jade', function (template) {
                var html = jade.render(template, {
                    object: data.quote
                });
                $('#main').html(html);
            })
        })
    },

    load: function () {
        $.get('https://secret-retreat-5119.herokuapp.com/quotes', function (data, status) {
            $.get('/ted-jquery/quotes/quotes.jade', function (template) {
                console.log(data.quotes);
                var html = jade.render(template, {
                    objects: data.quotes
                });
                $('#main').html(html)
            })
        })
    }
};