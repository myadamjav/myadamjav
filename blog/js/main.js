$(function(){
    $('body').on('click', "#search", function() {
        let url = "http://jsonplaceholder.typicode.com/users?id=" + $("#userId").val();
        $.get(url, {"dataType": "json"})
            .done(successUser)
            .fail(error);
    })

    $('body').on('click', '#comment', function() {
        $(this).hide();
        let id = $(this).attr("post");
        let url = "http://jsonplaceholder.typicode.com/comments?postId=" + $(this).attr("post");
        $.get(url)
            .done(function(data) {
                successComments(data, id, this);
            });
    })

})

function successUser(data) {
    let url = "http://jsonplaceholder.typicode.com/posts?userId=" + $("#userId").val();
    $("#name").html("Name: " + data[0].name);
    $("#email").html("Email: " + data[0].email);
    $("#address").html("Address: "+ data[0].address.street +", "+ data[0].address.suite +", "+ data[0].address.city +", "+ data[0].address.zipcode);
    $.get(url, {"dataType": "json"})
            .done(successPosts);
}

function error(data) {
    $("#content").html("<p>Invalid request</p>");
}

function successPosts(data) {
    let posts = "";

    for(let i = 0; i < data.length; i++) {
        posts += "<p><strong>"+ data[i].title +"</strong><br/>"+ data[i].body +"</p><button id='comment' post='"+ data[i].id +"'>Show comments</button><div id='post"+ data[i].id +"comments'></div>";
    }

    $("#content").html(posts);
}

function successComments(data, id, element) {
    let comments = "<ul>";
    for(let i = 0; i < data.length; i++) {
        comments += "<li><strong>"+ data[i].email +":</strong> "+ data[i].body +"</li>";
    }
    comments += "</ul>"
    $("#post"+id+"comments").html(comments);
}