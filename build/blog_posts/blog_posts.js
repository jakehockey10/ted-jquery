var blog_posts = {

    getBlog_post: function(id) {
        $.get('https://secret-retreat-5119.herokuapp.com/blog_posts/' + id, function (data, status) {
            $.get('/ted-jquery/blog_posts/blog_post.jade', function (template) {
                var html = jade.render(template, {
                    object: data.blog_post
                });
                $('#main').html(html);
            })
        })
    },

    load: function () {
        $.get('https://secret-retreat-5119.herokuapp.com/blog_posts', function (data, status) {
            $.get('/ted-jquery/blog_posts/blog_posts.jade', function (template) {
                console.log(data.blog_posts);
                var html = jade.render(template, {
                    objects: data.blog_posts
                });
                $('#main').html(html)
            })
        })
    }
};