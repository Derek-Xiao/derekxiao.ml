/**
 * Created by Derek Xiao on 6/8/2017.
 */

(function () { // add triggers
    document.getElementById("blog-section").onclick = function () {
        show_blog("sample.md", handle_blog);
    };
})();

(function () { // load data
    load_blog_list(handle_blog_list);
    load_cv_data(handle_resume_data);
})();

(function () { // checkcompatibility
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) {
        document.getElementsByTagName("body").innerHTML = ie_warning();
    } else {
        console.log("Hoooooo! U r not an IE user~");
        console.log("Let's play");
    }
})();