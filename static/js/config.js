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
            return "WOW! �㾹Ȼ����IE! ��ȥ�¸���һ����������~";
        } else if (lang == "ja") {
            return "WOW! IE��ʹ�äƣ� �Է�������������֥饦���ˤ���";
        }
    } catch (err) {}
    return default_warning;
};
