/**
 * Created by Derek Xiao on 6/8/2017.
 */

function show_blog (blog, callback) {
    new RequestNode(REQUEST_BLOG_ROOT + blog, callback, "json").notify();
}

function load_blog_list(callback) {
    new RequestNode("/get/blog-list", callback, "text").notify();
}

function load_cv_data(callback) {
    new RequestNode("/get/cv", callback, "json").notify();
}