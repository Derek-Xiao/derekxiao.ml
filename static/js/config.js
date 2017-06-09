/**
 * Created by Derek Xiao on 6/8/2017.
 */

var REQUEST_BLOG_ROOT = "/get/blog?blog-id=";

var Chinese_languages = ["zh-TW", "zh-CN", "zh-HK", "zh-SG"];
var ie_warning = function () {
    var lang = navigator.language;
    var default_warning = "WOW! U r using IE! Go find yourself a better browser~";
    try {
        if (Chinese_languages.indexOf(lang) != -1) {
            return "WOW! 你竟然在用IE! 快去下个好一点的浏览器吧~";
        } else if (lang == "ja") {
            return "WOW! IEを使って！ 自分自身をより良いブラウザにする";
        }
    } catch (err) {}
    return default_warning;
};
