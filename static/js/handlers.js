/**
 * Created by Derek Xiao on 6/8/2017.
 */

function handle_blog(data) {
    if (data.status) {
        //console.log(marked_content);
        document.getElementById("blog-post").innerHTML = marked(data["message"]);
    } else {
        console.log(data["message"]);
    }
}

function handle_blog_list(data) {
    var filenames = data.split("\n").filter(function (d) {
        return d.length != 0;
    });

    var blog_container = document.getElementById("blog-list");
    var template_dom = document.getElementById("blog-thumb-template");
    var template = _.template(template_dom.innerHTML);
    var content = "";
    filenames.forEach(function (n) {
        content += template({
            title: n,
            datetime: new Date().toLocaleString(),
            content: "...asfwersdfgsdfg"
        });
    });
    blog_container.innerHTML = content;
    var blog_thumb = blog_container.querySelectorAll(".blog-thumb");
    blog_thumb.forEach(function (n, i) {
        n.onclick = function () {
            show_blog(filenames[i], handle_blog);
        };
    });
}

function handle_resume_data(data) {
    var template_dom = document.getElementById("timeline-item-template");
    var template = _.template(template_dom.innerHTML);
    var content = data.map(function (period) {
        return template(period);
    }).join("");
    var resume_container = document.getElementById("resume");
    resume_container.innerHTML = content;
}