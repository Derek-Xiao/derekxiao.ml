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
            return "WOW! 低捷隼壓喘IE! 酔肇和倖挫匯泣議箝誓匂杏~";
        } else if (lang == "ja") {
            return "WOW! IEを聞って�� 徭蛍徭附をより措いブラウザにする";
        }
    } catch (err) {}
    return default_warning;
};
