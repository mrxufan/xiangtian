define("common-jquery:widget/js/ui/base/base.js", function(e, t, n) {
    function i(e) { var t = o.isFunction(e) ? e : function() { this.type = "base" },
            n = function(e) { s.create(this), this.guid = ++o.guid, t.apply(this, arguments), "object" == typeof e && this._init(e), this.init(e) }; return n.extend = function(e) { return o.extend(n.prototype, e), n }, n.extend({ _init: function(e) { try { var t = this;
                    o.each(e, function(e, n) { o.isFunction(n) ? t.on(e, n) : t[e] = n }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message, path: "common-jquery:widget/js/ui/base/base.js", method: "", ln: 29 }) } }, init: function() { try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/ui/base/base.js", method: "", ln: 30 }) } }, render: function() {}, dispose: function() {}, getElements: function() {} }) } var o = e("common-jquery:widget/lib/jquery/jquery.js"),
        s = e("common-jquery:widget/js/util/event/event.js");
    n.exports = i });;
define("common-jquery:widget/js/logic/log/log.js", function(e, n, t) {
    function o(e) { var n = "explog_" + (new Date).getTime(),
            t = window[n] = new Image;
        t.onload = t.onerror = function() { window[n] = null }, t.src = e, t = null }

    function r(e) { for (var n = e.split(","), t = {}, o = 0; o < n.length; o++) { var r = n[o].split(":");
            t[i.string.trim(r[0])] = i.string.trim(r[1]) } return t } var i = e("common-jquery:widget/lib/jquery/jquery.js");
    e("common-jquery:widget/lib/jquery.plugins/string.js"); var a = {};
    t.exports.init = function(e) { try { var n = { query: "a", evtType: "mousedown" }; for (var o in e) n[o] = e[o];
            i.extend(a, n), i(document).on(n.evtType, n.query, function() { var e = i(this),
                    o = e.attr("log"); if (o) { var a = location.href,
                        u = e.attr("href");
                    u && (a = encodeURIComponent(u)), i.extend(n, r(o)), t.exports.send(a, n.type, n) } }) } catch (u) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: u.message, path: "common-jquery:widget/js/logic/log/log.js", method: "", ln: 114 }) } }, n.addKey = function(e) { i.extend(a, e) }, t.exports.send = function(e, n, t) { var r = "//kstj.baidu.com/v.gif?",
            u = { pid: 180, url: encodeURIComponent(e), type: n, t: (new Date).getTime() };
        i.extend(u, a), i.extend(u, t); var c = []; return i.each(u, function(e, n) { c.push(e + "=" + n) }), o(r + c.join("&")), e + c.join("&").replace(/&t=\d+/, "") }, n.imageReq = o });;
define("common-jquery:widget/monitor-js/monitor-js.es", function(e, o) { "use strict";

    function r(e) { return e && e.__esModule ? e : { "default": e } }

    function n() { window.onerror = function(e, o, r, n, t) { var l = {}; if (n = n || window.event && window.event.errorCharacter || 0, l.url = o, l.line = r, l.col = n, l.ua = navigator.userAgent, l.time = (new Date).getTime(), t && t.stack) l.msg = t.stack.toString();
            else if (arguments.callee) { for (var u = [], a = arguments.callee.caller, c = 3; a && --c > 0 && (u.push(a.toString()), a !== a.caller);) a = a.caller;
                u = u.join(","), l.msg = u } i.send(location.href, 2e3, { module: "common", pos: "error", url: l.url, line: l.line, col: l.col, ua: l.ua, msg: l.msg, time: l.time }) } } Object.defineProperty(o, "__esModule", { value: !0 }); var t = e("common-jquery:widget/lib/jquery/jquery.js"),
        i = (r(t), e("common-jquery:widget/js/logic/log/log.js"));
    o.monitorJS = n });;
define("common-jquery:widget/js/logic/login/login.js", function(o, n, i) { var e = o("common-jquery:widget/lib/jquery/jquery.js"),
        t = o("common-jquery:widget/js/util/event/event.js"),
        s = o("common-jquery:widget/js/ui/dialog/dialog.js"),
        c = location.origin || location.protocol + "//" + location.hostname + (location.port ? ":" + window.location.port : ""),
        r = null,
        u = !1,
        a = "https://passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + (new Date).getTime(),
        l = "/common/isLogin",
        g = { patch: "", isLogin: function() { window.location.reload(!0) }, notLogin: function() { t.fire("login.log", { patch: g.patch, onLoginSuccess: g.isLogin }) }, submitErr: function() {} },
        m = { registerLink: "https://passport.baidu.com/v2/?reg&tpl=exp&u=" + encodeURIComponent(top.location.href), onLoginSuccess: g.isLogin, onLoginFailure: g.notLogin, onSubmitedErr: g.submitErr, cache: !1, tangram: !0, apiOpt: { product: "exp", u: window.top.location.href, staticPage: c + "/static/common/html/v3Jump.html", loginType: 1, safeFlag: 0, is_voice_sms: 1, qrcode: 2, makeText: "您还没有登录，皮肤只能保留3天哦，登陆后就可以永久保留您喜爱的皮肤啦", qrcode_animatin: 1, overseas: 0 }, authsite: ["tsina", "weixin", "qzone"], authsiteCfg: { tpl: "exp", display: "popup", u: window.top.location.href, jumpUrl: "http://jingyan.baidu.com/static/common/html/xd.html", onBindSuccess: function() { return m.onLoginSuccess(), !1 }, onBindFailure: function() { return m.onSubmitedErr(), !1 } }, onshow: function() {} };
    t.on("login.check", function(o, n) { e.extend(g, n), e.post(l, { _t: (new Date).getTime() }, function(o) { return 0 == o.errno ? (o.userType > 0 ? t.fire("login.setUsername", { onSetSuccess: g.isLogin, from: "check" }) : t.fire("login._setUsernameSuccess"), !0) : (g.notLogin(), !1) }) }), t.on("login.log", function(o, n) { n = n || {}, n.onLoginSuccess || (n.onLoginSuccess = function() { window.location.reload(!0) }), g.isLogin = n.onLoginSuccess, m.onLoginSuccess = function(o) { t.fire("dialog.close"), t.fire("login._success"), o.returnValue = !1 }, u ? r && r.show() : (e.ajax({ dataType: "script", crossDomain: !0, url: a, success: function() { r = passport.pop.init(m), r.show(), e.extend(i.exports, r) } }), u = !0) }), t.on("login._success", function() { t.fire("login.setUsername", { onSetSuccess: g.isLogin }) }), t.on("login.setUsername", function(o, n) { var i = function() { var o = s.iframe({ content: "/z/exp-common/fillname.html?t=" + (new Date).getTime(), title: "填写用户名", width: 560, height: 250, autoDispose: !0, close: function() { window.Geditorframe && window.Geditorframe.onDialogClose(), o.close() } }) };
        n.onSetSuccess || (n.onSetSuccess = function() { window.location.reload(!0) }), g.isLogin = n.onSetSuccess, n.from && "check" == n.from ? i() : e.post(l, { _t: (new Date).getTime() }, function(o) { return 0 == o.errno ? (o.userType > 0 ? i() : t.fire("login._setUsernameSuccess"), !0) : void 0 }, "json") }), t.on("login._setUsernameSuccess", function() { void 0 != g.userFormerLoginStatus ? g.isLogin(g.userFormerLoginStatus) : g.isLogin() }), t.on("login._bindWeibosuccess", function(o, n) { var i = "微博";
        n && n.fromWeibo && (i = n.fromWeibo), alert("您已经成功绑定" + i + "。若您的经验文章被分享到新浪微博，将会@您。感谢您的热心参与！"), location.reload() }), t.on("dialog.close", function() { r && r.hide && r.hide() }) });;
define("common-jquery:widget/userbar/userbar.js", function(e, t, o) { var n = e("common-jquery:widget/lib/jquery/jquery.js"),
        r = e("common-jquery:widget/js/util/event/event.js"),
        a = e("common-jquery:widget/js/util/ajax/ajax.es").ajax;
    e("common-jquery:widget/js/logic/login/login.js"); var i = { init: function() { try { var e = this; if (1 == F.context("user").isLogin) { var t = n("#userbar-logout");
                    t && (location.href.indexOf("/user/nuc") > -1 || location.href.indexOf("/user/npublic") > -1 ? t.attr("href", "http://passport.baidu.com/?logout&aid=7&u=http://jingyan.baidu.com") : t.attr("href", "http://passport.baidu.com/?logout&aid=7&u=" + encodeURIComponent(location.href))), e.updateMsg() } else { n("#userbar-login").click(function(e) { try { e.preventDefault(), r.fire("login.check") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/userbar/userbar.js", method: "", ln: 37 }) } }); var o = n("#top-reg-link"); if (o) { var a = o.attr("href");
                        o.attr("href", a + encodeURIComponent(location.href)) } } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message, path: "common-jquery:widget/userbar/userbar.js", method: "", ln: 47 }) } }, updateMsg: function() { if ("https:" !== location.protocol) { var e = "/notice/getSystemNoticeCount?t=" + (new Date).getTime();
                a({ url: e, dataType: "jsonp" }).then(function(e) { t(e.unread_msg.count) }, function() { t() }); var t = function(e) {+e >= 0 && (e >= 100 && (e = "99+"), n("#mnum").html("(" + e + ")")) } } } };
    o.exports = i });;
define("common-jquery:widget/js/logic/msg/income-share/income-share.js", function(require, exports, module) { var Dialog = (require("common-jquery:widget/lib/jquery/jquery.js"), require("common-jquery:widget/js/ui/dialog/dialog.js")),
        IncomeShare = { init: function(data, type) { try { { var money = +data.amount,
                            msgId = data.messageid,
                            content = ['<div class="sun"></div>', '<p class="money">你的<span>' + money + "</span>元提现申请已通过审核！", '<p class="info">本月的提现稿酬我们将在下个月底之前安排打款，具体请以银行到账时间为准。</p>', '<div class="share-container">', '<div class="bdsharebuttonbox" data-tag="share_1">', '<a class="bds_weixin" data-cmd="weixin"></a>', '<a class="bds_tsina" data-cmd="tsina"></a>', '<a class="bds_qzone" data-cmd="qzone" href="#"></a>', '<a class="bds_tqq" data-cmd="tqq"></a>', "</div>", '<p class="desc">成功分享至站外还有额外的福利分成哦！<a href="" target="_blank">详情>></a></p>', "</div>"].join("");
                        Dialog.alert(content, { title: "提现成功", width: 500, height: 405, className: "income-share-dialog", open: function() { var Msg = require("common-jquery:widget/js/logic/msg/msg.js");
                                with(Msg.readMessage(type, { mid: msgId }), window._bd_share_config = { common: { bdUrl: "http://jingyan.baidu.com/user/income", bdSnsKey: {}, bdText: "写经验，有钱赚！我刚刚在百度经验提现了" + money + "元现金！赶快来看看吧！", bdMini: "2", bdMiniList: !1, bdPic: "", bdStyle: "0", bdSize: "32" }, share: {} }, document) 0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=86835285.js?cdnversion=" + ~(-new Date / 36e5)] } }) } } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/income-share/income-share.js", method: "", ln: 60 }) } } };
    module.exports = IncomeShare });;
define("common-jquery:widget/js/logic/msg/dubangbang/dubangbang.js", function(e, a, i) { var s = e("common-jquery:widget/lib/jquery/jquery.js"),
        o = e("common-jquery:widget/js/ui/dialog/dialog.js"),
        n = { map: function(e) { var a = e.level || 1,
                    i = "",
                    s = ["您已闯过此关，获得<em>" + e.new_gift + "</em>", "恭喜您又闯过一关！<br/>奖品由<em>" + e.old_gift + "</em>升级为<em>" + e.new_gift + "</em>", ["恭喜您赢得了", "<em>" + e.new_gift + "</em>", "<br/>", "并额外获得", "<span>" + e.cash + "元</span>", "现金红包"].join("")]; switch (+a) {
                    case 1:
                    case 2:
                        i = s[0], i += "<br/>英雄，请受我一拜！~"; break;
                    case 3:
                        i = s[2], i += "<br/>继续挑战更高关卡吧～"; break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        i = s[1], i += "<br/>英雄，请受我一拜！~" } return i }, init: function(a) { try { var i = this;
                    i.options = a; var n = ['<div class="wrapper">', "<header>", "<h1>闯关成功！</h1>", '<div class="i-smile"></div>', '<div class="cur-pointer close-dialog close-x"></div>', "</header>", '<div class="content">', "<p>" + i.map(i.options.other) + "</p>", '<div class="cur-pointer close-dialog close-btn">继续挑战</div>', "</div>", "</div>"].join(""),
                        c = o.alert(n, { width: 393, height: 247, className: "dialog-dubangbang", open: function() { s(".close-dialog").click(function() { try { c.close() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/dubangbang/dubangbang.js", method: "", ln: 74 }) } }) }, close: function() { var a = e("common-jquery:widget/js/logic/msg/msg.js");
                                a.readMessage(21, { mid: i.options.messageid }) } }) } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message, path: "common-jquery:widget/js/logic/msg/dubangbang/dubangbang.js", method: "", ln: 85 }) } } };
    i.exports = n });;
define("common-jquery:widget/js/logic/msg/go-and-see/go-and-see.js", function(e, o, s) { var i = e("common-jquery:widget/lib/jquery/jquery.js"),
        a = e("common-jquery:widget/js/ui/dialog/dialog.js"),
        c = { map: function(e) { var o = e.level || 1,
                    s = "",
                    i = ["您已闯过此关，获得<em>" + e.new_gift + "</em>", "<br/>奖品由<em>" + e.old_gift + "</em>升级为<em>" + e.new_gift + "</em>不愧是经验旅行家~", ["恭喜您赢得了", "<em>" + e.new_gift + "</em>"].join("")]; switch (+o) {
                    case 1:
                        s += "<br/>您已解锁中国 <br />获得<em>" + e.new_gift + "</em>，继续环游世界吧~"; break;
                    case 2:
                        s += "<br/>您已解锁日本 <br />获得<em>" + e.new_gift + "</em>，继续环游世界吧~"; break;
                    case 3:
                        s += "<br/>您已解锁埃及，获得<em>" + e.new_gift + "</em>，继续环游世界吧~"; break;
                    case 4:
                        s = "<br/>您已解锁荷兰", s += i[1]; break;
                    case 5:
                        s = "<br/>您已解锁法国", s += i[1]; break;
                    case 6:
                        s = "<br/>您已解锁澳大利亚", s += i[1]; break;
                    case 7:
                        s = "<br/>您已解锁意大利", s += i[1]; break;
                    case 8:
                        s = "<br/>您已解锁美国", s += i[1] } return s }, init: function(o) { try { var s = this;
                    s.options = o; var c = "继续挑战";
                    s.options.other.level <= 3 && (c = "不必多礼"); var n = ['<div class="wrapper">', "<header>", '<h1><span class="dialog-go-title-deco"></span>经验走着瞧</h1>', '<div class="i-smile"></div>', '<div class="cur-pointer close-dialog close-x go-close"></div>', "</header>", '<div class="content">', "<p>" + s.map(s.options.other) + "</p>", '<div class="cur-pointer close-dialog close-btn">' + c + "</div>", "</div>", "</div>"].join(""),
                        t = a.alert(n, { width: 393, height: 247, className: "dialog-go", open: function() { i(".close-dialog").click(function() { try { t.close() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/go-and-see/go-and-see.js", method: "", ln: 89 }) } }) }, close: function() { var o = e("common-jquery:widget/js/logic/msg/msg.js");
                                o.readMessage(37, { mid: s.options.messageid }) } }) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message, path: "common-jquery:widget/js/logic/msg/go-and-see/go-and-see.js", method: "", ln: 100 }) } } };
    s.exports = c });;
define("common-jquery:widget/js/logic/msg/douniwan/douniwan.js", function(o, n, e) { var i = o("common-jquery:widget/lib/jquery/jquery.js"),
        a = o("common-jquery:widget/js/ui/dialog/dialog.js"),
        t = o("common-jquery:widget/js/logic/https/https.es").autoFixUrl,
        d = { init: function(n) { try { var e = this;
                    e.options = n; var d = "";
                    void 0 !== F.context("user").uname && (d = F.context("user").uname); var s, u = ['<div class="dialog-douniwan wrapper-portrait">', "</div>"].join(""),
                        g = ['<div class="dialog-douniwan wrapper-pendant">', "</div>"].join(""),
                        c = o("common-jquery:widget/js/logic/msg/msg.js");
                    e.options.other.douplay_badge ? s = g : e.options.other.douplay_pendant && (s = u); var r = a.alert(s, { width: 640, height: 300, className: "dialog-douniwan", open: function() { i(".dialog-douniwan").on("click", ".dialog-douniwan", function(o) { try { o.preventDefault(), r.close(), window.open(t("/user/nuc")), c.readMessage(36, { mid: e.options.messageid }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message, path: "common-jquery:widget/js/logic/msg/douniwan/douniwan.js", method: "", ln: 56 }) } }) } }) } catch (m) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: m.message, path: "common-jquery:widget/js/logic/msg/douniwan/douniwan.js", method: "", ln: 59 }) } } };
    e.exports = d });;
define("common-jquery:widget/js/logic/msg/school2016/school2016.js", function(require, exports, module) { var $ = require("common-jquery:widget/lib/jquery/jquery.js"),
        bt = require("common-jquery:widget/js/util/template/template.js"),
        Dialog = require("common-jquery:widget/js/ui/dialog/dialog.js"),
        tpl = [function(_template_object) { var _template_fun_array = [],
                fn = function(__data__) { var _template_varName = ""; for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="content">    <a class="close-dialog">关闭</a>    <p class="p1">', "undefined" == typeof uname ? "" : baidu.template._encodeHTML(uname), '，恭喜你</p>    <p class="p2">成功入学', "undefined" == typeof school ? "" : baidu.template._encodeHTML(school), '并获得了奖励~</p>    <a class="go-school" href="/activity/newterm" target="_blank">经验开学季</a>        '), "经验大学校园" !== school && _template_fun_array.push('        <p class="p3">想获得更大奖励嘛？继续参加入学考试吧~</p>    '), _template_fun_array.push("</div>"), _template_varName = null }(_template_object); return fn = null, _template_fun_array.join("") }][0];
    School2016 = { init: function(e) { try { e.other.uname = F.context("user").uname; var o = Dialog.alert(tpl(e.other), { width: 634, height: 346, className: "dialog-school2016", open: function() { $(".close-dialog").click(function() { try { o.close() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/school2016/school2016.js", method: "", ln: 22 }) } }), $(".go-school").on("click", function() { try { o.close() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/school2016/school2016.js", method: "", ln: 25 }) } }) }, close: function() { var o = require("common-jquery:widget/js/logic/msg/msg.js");
                        o.readMessage(40, { mid: e.messageid }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message, path: "common-jquery:widget/js/logic/msg/school2016/school2016.js", method: "", ln: 36 }) } } }, module.exports = School2016 });;
define("common-jquery:widget/js/logic/msg/badge/badge.js", function(require, exports, module) { var $ = require("common-jquery:widget/lib/jquery/jquery.js"),
        bt = require("common-jquery:widget/js/util/template/template.js"),
        Dialog = require("common-jquery:widget/js/ui/dialog/dialog.js"),
        autoFixUrl = require("common-jquery:widget/js/logic/https/https.es").autoFixUrl,
        tpl = [function(_template_object) { var _template_fun_array = [],
                fn = function(__data__) { var _template_varName = ""; for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="mask" style="position: fixed;width: 100%;height: 100%;background-color: #000;opacity: 0.6;top: 0;left: 0;z-index: 9999999;"></div>'), 1 == type && _template_fun_array.push(' <div class="dialog-redbox redbox-wealth-dialog" style="z-index: 99999999">    <div class="content">        <h1>恭喜你！', "undefined" == typeof uname ? "" : baidu.template._encodeHTML(uname), '</h1>        <p style="margin-bottom: 10px">成功发布了一篇3星原创经验</p>        <p style="margin-top: 10px">并获得一个活动红包～</p>    </div>    <div class="prize-type">        <p style="margin-top: 8px;">人民币</p>        <p>', "undefined" == typeof value ? "" : baidu.template._encodeHTML(value), '</p>     </div>    <div class="btn"></div>    <div class="go-to-activity"></div>    <div class="close"></div></div>'), _template_fun_array.push(""), 2 == type && _template_fun_array.push('<div class="dialog-redbox redbox-wealth-dialog" style="z-index: 99999999">    <div class="content">        <h1>恭喜你！', "undefined" == typeof uname ? "" : baidu.template._encodeHTML(uname), '</h1>        <p style="margin-bottom: 10px">成功发布了一篇3星原创经验</p>        <p style="margin-top: 10px">并获得财富值～</p>    </div>    <div class="prize-type">        <p style="margin-top: 8px;">财富值</p>        <p>', "undefined" == typeof value ? "" : baidu.template._encodeHTML(value), '</p>     </div>    <div class="btn"></div>    <div class="go-to-activity"></div>    <div class="close"></div></div>'), _template_fun_array.push(""), 3 == type && _template_fun_array.push('<div class="badge-dialog dialog-redbox" style="z-index: 99999999">    <div class="content">        <h1>恭喜你！', "undefined" == typeof uname ? "" : baidu.template._encodeHTML(uname), "</h1>        <p>获得“", "undefined" == typeof value ? "" : baidu.template._encodeHTML(value), '”徽章一枚，集齐所有徽章获得龙猫移动电源一个～</p>        <p>继续加油吧～</p>    </div>    <div class="btn"></div>    <div class="go-to-activity"></div>    <div class="close"></div></div>'), _template_fun_array.push(""), 4 == type && _template_fun_array.push('<div class="dialog-redbox prize-redbox-dialog" style="z-index: 99999999">    <div class="content">        <h1>太棒了！', "undefined" == typeof uname ? "" : baidu.template._encodeHTML(uname), '</h1>        <p>真为你高兴，你集齐所有的徽章，获得了龙猫移动电源～</p>        <p>奖品不限量，多劳多得哦～</p>    </div>    <div class="btn"></div>    <div class="go-to-activity"></div>    <div class="close"></div></div>'), _template_fun_array.push(""), _template_varName = null }(_template_object); return fn = null, _template_fun_array.join("") }][0];
    Badge = { init: function(e) { try { var t = function() { var e = document.location.toString(),
                            t = e.split("//"),
                            a = t[1].indexOf("/"),
                            i = t[1].substring(a); return -1 != i.indexOf("?") && (i = i.split("?")[0]), i },
                    a = t(); if ("/activity/red2016" !== a && "/user/nuc" !== a) return; var i = e.other;
                $("body").append(tpl(i)), $(document).bind("scroll", function(e) { e.preventDefault(), e.stopPropagation(), $("body").css("overflow-y", "hidden") }), $(".close").on("click", function(e) { try { $.ajax({ url: "/submit/notice?method=userReadSystemNotice&maintype=50", type: "post", success: function(e) { 0 === e.errno && ($(".mask").hide(), $(".dialog-redbox").hide(), $("body").css("overflow-y", "auto")) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/badge/badge.js", method: "", ln: 50 }) } }), $(".go-to-activity").on("click", function(e) { try { $.ajax({ url: "/submit/notice?method=userReadSystemNotice&maintype=50", type: "post", async: !1, success: function(e) { 0 === e.errno && window.open(autoFixUrl("/activity/red2016"), "_target") } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/badge/badge.js", method: "", ln: 63 }) } }), $(".btn").on("click", function(e) { try { $.ajax({ url: "/submit/notice?method=userReadSystemNotice&maintype=50", type: "post", async: !1, success: function(e) { 0 === e.errno && (window.open(autoFixUrl("/activity/red2016"), "_self"), window.open(autoFixUrl("/edit/content"))) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/badge/badge.js", method: "", ln: 77 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message, path: "common-jquery:widget/js/logic/msg/badge/badge.js", method: "", ln: 82 }) } } }, module.exports = Badge });;
define("common-jquery:widget/js/logic/msg/super-2016/super-2016.js", function(require, exports, module) { var $ = require("common-jquery:widget/lib/jquery/jquery.js"),
        template = require("common-jquery:widget/js/util/template/template.js"),
        Dialog = require("common-jquery:widget/js/ui/dialog/dialog.js"),
        dlgTpl = [function(_template_object) { var _template_fun_array = [],
                fn = function(__data__) { var _template_varName = ""; for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="dlg-content">    <div class="close"></div>    <h4>吾皇！', "undefined" == typeof name ? "" : baidu.template._encodeHTML(name), '</h4>    <div class="content ', "undefined" == typeof contentName ? "" : baidu.template._encodeHTML(contentName), '">    ', "undefined" == typeof content ? "" : content, '    </div>    <a class="tip" href="/activity/super2016" target="_blank">', "undefined" == typeof linkText ? "" : baidu.template._encodeHTML(linkText), "</a></div>"), _template_varName = null }(_template_object); return fn = null, _template_fun_array.join("") }][0],
        superPacket = { init: function(e) { try { var t = this,
                        n = t.getUrlRelativePath(),
                        o = t.getContent(e); if (2 === e.other.type) var a = "查看我的礼品券>>";
                    else a = "查看我的活动红包>>";
                    ("/activity/super2016" === n || "/user/nuc" === n) && $(window).load(function() { var n = Dialog.alert("", { width: 456, height: 388, className: "dialog-super2016", content: dlgTpl({ name: t.truncate(e.other.uname, 7), content: o, linkText: a }), buttons: [{ text: "写经验领红包", click: function() { try { window.open("/edit/content", "_target"), $(".ui-front").hide(), $(".dialog-super2016").hide(); var t = require("common-jquery:widget/js/logic/msg/msg.js");
                                        t.readMessage(50, { mid: e.messageid }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message, path: "common-jquery:widget/js/logic/msg/super-2016/super-2016.js", method: "", ln: 49 }) } } }], close: function() { var t = require("common-jquery:widget/js/logic/msg/msg.js");
                                t.readMessage(50, { mid: e.messageid }) } });
                        $(".close").on("click", function() { try { n.close() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/super-2016/super-2016.js", method: "", ln: 61 }) } }), $(".tip").on("click", function() { try { n.close() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/super-2016/super-2016.js", method: "", ln: 64 }) } }) }) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message, path: "common-jquery:widget/js/logic/msg/super-2016/super-2016.js", method: "", ln: 67 }) } }, getContent: function(e) { var t = e.other.type || 1,
                    n = e.other,
                    o = ["成功发布了一篇3星原创经验<br>获得<strong>" + n.value + "</strong>元活动红包", "成功发布了一篇3星原创经验<br>获得<strong>" + n.value + "</strong>张活动礼品券", "成功发布了一篇3星原创经验<br>获得<strong>" + n.value + "</strong>元<strong>圣诞彩蛋</strong>红包", "成功发布了一篇3星原创经验<br>获得<strong>" + n.value + "</strong>元<strong>跨年彩蛋</strong>红包", "成功发布了一篇3星原创经验<br>获得<strong>" + (n.value / 2).toFixed(2) + "</strong>元<strong>&#215;2</strong>活动红包"]; return o[t - 1] }, getUrlRelativePath: function() { var e = document.location.toString(),
                    t = e.split("//"),
                    n = t[1].indexOf("/"),
                    o = t[1].substring(n); return -1 !== o.indexOf("?") && (o = o.split("?")[0]), o }, truncate: function(e, t) { return $.string.getByteLength(e) > t && (e = $.string.subByte(e, 2 * t, "..")), e } };
    module.exports = superPacket });;
define("common-jquery:widget/js/logic/msg/marathon/marathon.js", function(require, exports, module) { var $ = require("common-jquery:widget/lib/jquery/jquery.js"),
        autoFixUrl = require("common-jquery:widget/js/logic/https/https.es").autoFixUrl,
        tpl = [function(_template_object) { var _template_fun_array = [],
                fn = function(__data__) { var _template_varName = ""; for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="marathon-dialog-overlay">    <div class="dialog-bg">        <h1>', "undefined" == typeof uname ? "" : baidu.template._encodeHTML(uname), '，恭喜你!</h1>        <p style="margin-top: 40px">已完成<span class="highlight">', "undefined" == typeof school ? "" : baidu.template._encodeHTML(school), '</span>经验马拉松，获得了<span class="highlight">', "undefined" == typeof gift ? "" : baidu.template._encodeHTML(gift), '</span></p>        <p style="margin-top: 10px">继续努力冲向终点吧～</p>        <div class="btn-act"></div>        <div class="btn-act"></div>        <div class="close"></div>    </div></div>'), _template_varName = null }(_template_object); return fn = null, _template_fun_array.join("") }][0],
        Marathon = { init: function(e) { try { var a = function() { var e = document.location.toString(),
                                a = e.split("//"),
                                t = a[1].indexOf("/"),
                                n = a[1].substring(t); return -1 != n.indexOf("?") && (n = n.split("?")[0]), n },
                        t = a(); if ("/activity/201701run" !== t && "/user/nuc" !== t) return;
                    e.other.uname = F.context("user").uname; var n = tpl(e.other);
                    $(".pg-marathon").append(n), $(".close").on("click", function() { try { $(".marathon-dialog-overlay").hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/marathon/marathon.js", method: "", ln: 31 }) } }), $(".btn-act").on("click", function() { try { var a = require("common-jquery:widget/js/logic/msg/msg.js");
                            a.readMessage(42, { mid: e.messageid }), window.location.href = autoFixUrl("/activity/201701run") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message, path: "common-jquery:widget/js/logic/msg/marathon/marathon.js", method: "", ln: 37 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message, path: "common-jquery:widget/js/logic/msg/marathon/marathon.js", method: "", ln: 42 }) } } };
    module.exports = Marathon });;
define("common-jquery:widget/js/logic/msg/redbox-video/redbox-video.js", function(require, exports, module) { var $ = require("common-jquery:widget/lib/jquery/jquery.js"),
        autoFixUrl = require("common-jquery:widget/js/logic/https/https.es").autoFixUrl,
        tpl = [function(_template_object) { var _template_fun_array = [],
                fn = function(__data__) { var _template_varName = ""; for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="redbox-video-dialog-overlay" style="height: ', "undefined" == typeof winHeight ? "" : baidu.template._encodeHTML(winHeight), '">    <div class="dialog-bg">        <h1>恭喜获得<span style="font-size: 28px;">优质视频</span>奖</h1>        <p style="color: #ff6c00;font-size: 30px" class="p1">            <span class="t1">奖你</span>            <span class="highlight">', "undefined" == typeof prizeValue ? "" : baidu.template._encodeHTML(prizeValue), '</span>            <span class="t2">块</span>        </p>        <p style="color: #fd9309" class="p2">通过越多，奖励越多哦！</p>        <a class="btn-act" href="https://jingyan.baidu.com/article/20b68a8897935c796cec628f.html" target="_blank">详情快点这！</a>        <div class="close"></div>    </div></div>'), _template_varName = null }(_template_object); return fn = null, _template_fun_array.join("") }][0],
        RedoboxVideo = { init: function(e) { try { var t = function() { var e = document.location.toString(),
                                t = e.split("//"),
                                a = t[1].indexOf("/"),
                                o = t[1].substring(a); return -1 != o.indexOf("?") && (o = o.split("?")[0]), o },
                        a = t(); if ("/user/nuc" !== a) return;
                    e.other.winHeight = $("body").height() + "px"; var o = tpl(e.other);
                    $("body").append(o), $(".close").on("click", function() { try { var t = require("common-jquery:widget/js/logic/msg/msg.js");
                            t.readMessage(70, { mid: e.messageidList.join() }), $(".redbox-video-dialog-overlay").hide() } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message, path: "common-jquery:widget/js/logic/msg/redbox-video/redbox-video.js", method: "", ln: 34 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message, path: "common-jquery:widget/js/logic/msg/redbox-video/redbox-video.js", method: "", ln: 39 }) } } };
    module.exports = RedoboxVideo });;
define("common-jquery:widget/js/logic/msg/prize2017/prize2017.js", function(require, exports, module) { var $ = require("common-jquery:widget/lib/jquery/jquery.js"),
        autoFixUrl = require("common-jquery:widget/js/logic/https/https.es").autoFixUrl,
        tpl = [function(_template_object) { var _template_fun_array = [],
                fn = function(__data__) { var _template_varName = ""; for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="prize2017-dialog-overlay ">    <div class="dialog-bg">        <div class="close"></div>        <h1>', "undefined" == typeof uname ? "" : baidu.template._encodeHTML(uname), "</h1>        "), "redbox" == type && _template_fun_array.push('            <div class="content">                恭喜你！完成60篇3星原创经验，获得', "undefined" == typeof value ? "" : baidu.template._encodeHTML(value), "元随机红包和惊喜礼包。继续写经验还有机会获得每日幸运奖品哦~            </div>        "), _template_fun_array.push("        "), "prize" == type && _template_fun_array.push('            <div class="content">                运气简直不能再好啦，恭喜获得昨日“幸运助力”目标奖品', "undefined" == typeof value ? "" : baidu.template._encodeHTML(value), "~            </div>        "), _template_fun_array.push("         "), "firstMay" == type && _template_fun_array.push('            <div class="content">                劳动最光荣，恭喜获得5.1元劳动节彩蛋红包。继续写经验还有机会获得每日幸运奖品哦~            </div>        '), _template_fun_array.push('                <a class="go-activity" href="/activity/201704gift" target="_blank">查看活动 >></a>        <div class="btn-act">继续写经验</div>    </div></div>'), _template_varName = null }(_template_object); return fn = null, _template_fun_array.join("") }][0],
        Prize2017 = { init: function(e) { try { var t = function() { var e = document.location.toString(),
                                t = e.split("//"),
                                a = t[1].indexOf("/"),
                                i = t[1].substring(a); return -1 != i.indexOf("?") && (i = i.split("?")[0]), i },
                        a = t(); if ("/activity/201704gift" !== a && "/user/nuc" !== a) return; var i = tpl(e.other);
                    $(".pg-boring").append(i), $(".close").on("click", function() { try { var t = require("common-jquery:widget/js/logic/msg/msg.js");
                            t.readMessage(60, { mid: e.messageid }), $(".prize2017-dialog-overlay").hide() } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message, path: "common-jquery:widget/js/logic/msg/prize2017/prize2017.js", method: "", ln: 34 }) } }), $(".go-activity").on("click", function() { try { var t = require("common-jquery:widget/js/logic/msg/msg.js");
                            t.readMessage(60, { mid: e.messageid }), $(".prize2017-dialog-overlay").hide() } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message, path: "common-jquery:widget/js/logic/msg/prize2017/prize2017.js", method: "", ln: 40 }) } }), $(".btn-act").on("click", function() { try { var t = require("common-jquery:widget/js/logic/msg/msg.js");
                            t.readMessage(60, { mid: e.messageid }), $(".prize2017-dialog-overlay").hide(), window.open(autoFixUrl("/edit/content"), "_blank") } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message, path: "common-jquery:widget/js/logic/msg/prize2017/prize2017.js", method: "", ln: 48 }) } }) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message, path: "common-jquery:widget/js/logic/msg/prize2017/prize2017.js", method: "", ln: 53 }) } } };
    module.exports = Prize2017 });;
define("common-jquery:widget/js/logic/msg/msg.js", function(e, t, i) { var o = e("common-jquery:widget/lib/jquery/jquery.js"),
        s = e("common-jquery:widget/js/ui/dialog/dialog.js"),
        n = e("common-jquery:widget/js/ui/tip/tip.js"),
        a = e("common-jquery:widget/lib/cookie/cookie.js");
    e("common-jquery:widget/lib/jquery.plugins/browser.js"); var c = e("common-jquery:widget/js/util/ajax/ajax.es").ajax,
        r = e("common-jquery:widget/js/util/type/type.es").isFunction,
        m = e("common-jquery:widget/js/logic/https/https.es").autoFixUrl,
        g = e("common-jquery:widget/js/logic/msg/income-share/income-share.js"),
        u = e("common-jquery:widget/js/logic/msg/dubangbang/dubangbang.js"),
        l = e("common-jquery:widget/js/logic/msg/go-and-see/go-and-see.js"),
        d = e("common-jquery:widget/js/logic/msg/amazing-2016/amazing-2016.js"),
        p = e("common-jquery:widget/js/logic/msg/douniwan/douniwan.js"),
        h = e("common-jquery:widget/js/logic/msg/school2016/school2016.js"),
        f = e("common-jquery:widget/js/logic/msg/badge/badge.js"),
        j = e("common-jquery:widget/js/logic/msg/super-2016/super-2016.js"),
        w = e("common-jquery:widget/js/logic/msg/marathon/marathon.js"),
        v = e("common-jquery:widget/js/logic/msg/redbox-video/redbox-video.js"),
        y = e("common-jquery:widget/js/logic/msg/prize2017/prize2017.js"),
        b = { readMessage: function(e, t, i) { var s = { method: "userReadSystemNotice", maintype: e },
                    n = o.extend(s, t || {});
                c({ url: "/submit/notice", data: n }).then(function() { r(i) && i.apply(this, arguments) }) }, show: function(e, t) { var i = this,
                    s = e.length; if (t) { var c = ['<div class="msg-brief">', "<p>你有<b>" + t + "</b>条未读消息</p>", '<div class="close-msg"></div>', "</div>", '<div class="msg-detail">', e.join(""), "</div>"].join("");
                    i.LEFT_OFFSET = 16, i.TOP_OFFSET = 10, i.msgTip = new n({ position: { my: "left-" + i.LEFT_OFFSET + " top+" + i.TOP_OFFSET, at: "left bottom" }, tooltipClass: "msg-container", arrow: !0, radius: !1, closebox: !1, shadow: !0, content: c, direction: "top", target: o("#my-home-exp"), open: function() { var e = this;
                            i.offsetTop = o(e.getTipContainer()).offset().top; var t = o(".msg-container"),
                                n = o(".msg-brief"),
                                c = o(".msg-detail");
                            c.on("mouseenter", ".n-item", function() { o(this).addClass("hover") }).on("mouseleave", ".n-item", function() { o(this).removeClass("hover") }), t.on("mouseenter", function() { n.addClass("hover"), c.show() }).on("mouseleave", function() { n.removeClass("hover"), c.hide() }).on("click", ".item-close", function(e) { try { var t = o(this),
                                        n = t.data("type") + "",
                                        c = {}; if ("4" === n && (c = { group: 1, maintype: "" }), -1 != n.indexOf("cms")) { var r = n.split("-")[1],
                                            m = a.get("EXP_MSG_CMS");
                                        m && "-1" == m.indexOf(r) && (m += "_" + r), a.set("EXP_MSG_CMS", m || r, { expires: 6048e5, path: "/" }), s -= 1, s > 0 ? t.closest(".n-item").remove() : i.msgTip.hide() } else i.readMessage(n, c, function(e) { e.errno || (s -= 1), s > 0 ? t.closest(".n-item").remove() : i.msgTip.hide() }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/msg.js", method: "", ln: 175 }) } }).on("click", ".close-msg", function() { try { i.msgTip.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/msg.js", method: "", ln: 178 }) } }) } }) } }, noticeSingleTpl: function(e) { if (e.count) { e = o.extend({ url: "/user/nuc/message", count: 0, item: "系统通知", mid: 4 }, e || {}); var t = ['<div class="n-item clearfix">', '<a href="' + m(e.url) + '">', "有<b>" + e.count + "</b>个" + e.item, "</a>", '<span class="item-close" data-type="' + e.mid + '"></span>', "</div>"].join(""); return t } }, get: function() { var e = this;
                o.get("/notice/getSystemNoticeCount?t=" + (new Date).getTime(), function(t) { if (!t.errno && t.msg) { var t = t.msg; if (t) { var i = [],
                                n = 0;
                            o.each(t, function(t, a) { if (0 !== a.count) switch (a.maintype) {
                                    case 2:
                                        i.push(e.noticeSingleTpl({ url: "/user/nuc/interact?tab=followed", count: a.count, item: "新粉丝", mid: 2 })), n++; break;
                                    case 3:
                                        i.push(e.noticeSingleTpl({ url: "/user/nuc/interact?tab=comment", count: a.count, item: "新评论", mid: 3 })), n++; break;
                                    case 0:
                                        i.push(e.noticeSingleTpl({ url: "/user/nuc/message", count: a.count, item: "系统通知", mid: 4 })), n++; break;
                                    case 13:
                                        if (i.push(e.noticeSingleTpl({ url: "/user/nuc/message", count: a.count, item: "有得通知", mid: 13 })), n++, a.question) { var c = [],
                                                r = a.question[0];
                                            o.each(a.question, function(e) { c.push(e.messageid) }), s.alert(['<div class="que-rol-pop">', "<h3>疑问解决！</h3>", "<p>感谢你的耐心答复！</p>", "<p>用户对你的经验《", '<a target="_blank" href="' + m("/article/" + r.eidEnc + ".html") + '">', r.content, "</a>", "》疑问已解决。", "</p>", "</div>"].join(""), { width: 400, height: 250, close: function() { e.readMessage(13, { mid: c }) } }) } break;
                                    case 12:
                                        break;
                                    case 31:
                                        break;
                                    case 10:
                                        g.init(a.withdraw[0], a.maintype); break;
                                    case 21:
                                        u.init(a); break;
                                    case 22:
                                        d.init(a); break;
                                    case 36:
                                        p.init(a); break;
                                    case 37:
                                        l.init(a); break;
                                    case 40:
                                        h.init(a); break;
                                    case 42:
                                        w.init(a); break;
                                    case 50:
                                        if ("[object Null]" === Object.prototype.toString.call(a.other)) break;
                                        a.other.actName && "super2016" === a.other.actName ? j.init(a) : f.init(a); break;
                                    case 70:
                                        var b = a.other && a.other.prizeValue;
                                        b && (a.other.prizeValue = a.other.prizeValue * a.count), v.init(a); break;
                                    case 60:
                                        y.init(a) } }), F.context("msg_topic") && F.context("msg_topic").length && o.each(F.context("msg_topic"), function(e, t) { var o = a.get("EXP_MSG_CMS"); if (!(o && -1 != o.indexOf(t.stamp) || (new Date).getTime() > new Date(t.end).getTime())) { var s = t.msg,
                                        c = m(t.link); "" != c && (s = '<a log="' + t.log + '" href="' + c + '" target="_blank">' + s + "</a>"), n++; var r = 1 != n && 0 == e ? " has-border-top" : "";
                                    i.push(['<div class="n-item n-cms' + r + ' clearfix">', s, '<span class="item-close" data-type="cms-' + t.stamp + '"></span>', "</div>"].join("")) } }), i && e.show(i, n) } } }, "json") }, getTypeFromPage: function() { var e = location.href; return -1 != e.indexOf("/user/nuc") ? -1 != e.indexOf("followed") ? 2 : -1 != e.indexOf("comment") ? 3 : -1 != e.indexOf("message") ? 4 : -1 : -1 }, init: function() { try { var e = this; if (!F.context("user").isLogin) return; if (location.href != top.location.href) return; var t = e.getTypeFromPage(); - 1 == t ? e.get() : (e.readMessage(t), setTimeout(e.get, 1e3)), o(window).on("scroll resize", function() { e.resize() }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message, path: "common-jquery:widget/js/logic/msg/msg.js", method: "", ln: 466 }) } }, resize: function() { var e = this; if (e.msgTip) { var t = e.msgTip.getTipContainer(),
                        i = t.css("top"),
                        s = o(e.msgTip.target),
                        n = s.offset().left,
                        a = (s.width(), n - e.LEFT_OFFSET + 7); if (o.browser.ie && o.browser.ie < 7) { i = o(window).height() + o(window).scrollTop(); var c = o(t).height();
                        i = i - c - 3 + "px", o(t).css({ top: i, right: "auto", left: a, position: "absolute", overflow: "" }) } else { var r;
                        r = o(window).scrollTop() > e.offsetTop ? 0 : e.offsetTop, o(t).css({ top: r, left: a, bottom: "auto", right: "auto", position: "fixed", overflow: "" }) } } } };
    i.exports = b });;
define("common-jquery:widget/js/logic/msg/amazing-2016/amazing-2016.js", function(e, i, a) { var o = e("common-jquery:widget/lib/jquery/jquery.js"),
        s = e("common-jquery:widget/js/ui/dialog/dialog.js"),
        t = e("common-jquery:widget/js/logic/https/https.es").autoFixUrl,
        n = { init: function(i) { try { var a = this;
                    a.options = i; var n = "";
                    void 0 !== F.context("userName") && (n = F.context("userName") + "，"); { var m = ['<div class="wrapper">', "<header>", '<div class="cur-pointer close-dialog close-x"></div>', "</header>", '<div class="content">', "<p>" + n + " 你太了不起了！</p>", '<p class="mr-34">《了不起的任务》活动中你领取的任务<br/>已经完成啦,<em>恭喜你</em></p>', "<h2>点击按钮领取新任务或者查看任务奖励吧</h2>", '<div class="amazing-btn">了不起的任务</div>', "</div>", "</div>"].join(""),
                            c = e("common-jquery:widget/js/logic/msg/msg.js");
                        s.alert(m, { width: 637, height: 372, className: "dialog-amazing", open: function() { o(".amazing-btn").click(function() { try { window.open(t("/activity/lbq2016")), c.readMessage(22, { mid: a.options.messageid }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/msg/amazing-2016/amazing-2016.js", method: "", ln: 43 }) } }) }, close: function() { c.readMessage(22, { mid: a.options.messageid }) } }) } } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message, path: "common-jquery:widget/js/logic/msg/amazing-2016/amazing-2016.js", method: "", ln: 53 }) } } };
    a.exports = n });;
define("common-jquery:widget/js/logic/suggestion/suggestion.js", function(e, t, o) { var i = e("common-jquery:widget/lib/jquery/jquery.js"),
        n = (e("common-jquery:widget/lib/jquery.ui/jquery.ui.autocomplete.js"), e("common-jquery:widget/js/ui/base/base.js")),
        s = e("common-jquery:widget/js/logic/log/log.js");
    o.exports = n(function() { this.target = "" }).extend({ chineseType: !1, init: function(e) { try { var t = this;
                e.config && (t.config = i.extend({ position: { my: "left top", at: "left bottom", collision: "none" } }, e.config)), t.fire("beforeinit"), i(t.target).on("compositionstart", function() { t.chineseType = !0 }).on("compositionend", function() { t.chineseType = !1 }), t.target && !t.checkDisabled() && i(t.target).keyup(function(e) { if (!(e.keyCode >= 37 && e.keyCode <= 40)) { if (t.chineseType) return;
                        t.checkSameQuery(i.trim(i(t.target).val())) && setTimeout(function() { t.getData() }, 100) } }).on("paste", function() { setTimeout(function() { t.getData() }, 100) }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message, path: "common-jquery:widget/js/logic/suggestion/suggestion.js", method: "", ln: 53 }) } }, checkDisabled: function() { return !1 }, checkSameQuery: function(e) { var t = this,
                o = 1,
                n = sessionStorage.getItem("SUG_LIST"); return null === n ? !0 : (n = i.parseJSON(n), i.each(n, function(i, n) { e === n.word && (t.openSugBlock(n.resultList, e), o = 0) }), o) }, checkStorageArray: function(e, t) { var o = i.parseJSON(sessionStorage.getItem("SUG_LIST")) || [],
                n = 1;
            o.length ? (i.each(o, function(t, o) { o.word === e && (n = 0) }), n && o.push({ word: e, resultList: t })) : o.push({ word: e, resultList: t }), sessionStorage.setItem("SUG_LIST", JSON.stringify(o)) }, getData: function() { var e = this,
                t = e.checkDisabled(),
                o = i.trim(i(e.target).val()),
                n = e.url || "/asyncreq"; if (!t && "" !== o) { var c = { method: "getSug", word: o };
                i.get(n, c, function(t) { var n = t.sugList,
                        a = [];
                    i.each(n, function(e, t) { a.push(t.word) }), e.checkStorageArray(c.word, a), a.length && (s.send(location.href, 2019, { show: "sugHasShow", position: "sug20160229" }), e.openSugBlock(a, o)) }, "json") } }, openSugBlock: function(e, t) { var o = this;
            i(o.target).autocomplete({ source: e, minLength: 0, position: o.config.position, create: function(e) { var t = i(o.target).autocomplete("widget");
                    t.delegate(".ui-menu-item-close a", "click", function(e) { try { e.preventDefault(), i(o.target).autocomplete("close").autocomplete("destroy") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/suggestion/suggestion.js", method: "", ln: 147 }) } }).delegate(".sug-tag", "mouseenter", function() { i(this).siblings().removeClass("ui-state-focus").end().addClass("ui-state-focus") }).delegate(".sug-tag", "mouseleave", function() { i(this).removeClass("ui-state-focus") }).delegate(".sug-tag", "click", function() { try { var e = i(this).data("tag");
                            location.href = "/tag/" + e } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message, path: "common-jquery:widget/js/logic/suggestion/suggestion.js", method: "", ln: 155 }) } }), o.fire("create", e) }, open: function(e) { var n = i(o.target).autocomplete("widget");
                    0 == n.find(".ui-menu-item-close").size() && (i("<li>").addClass("ui-menu-item-close").html('<a href="#">关闭</a>').appendTo(n), n.find(".ui-menu-item a").each(function() { i(this).html(this.innerHTML.replace(new RegExp(t, "i"), function(e) { return "<em>" + e + "</em>" })) })), o.fire("open", e), i(".ui-menu-item").on("click", function() { try { s.send(location.href, 2019, { click: "sugHasClick", position: "sug20160229" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/logic/suggestion/suggestion.js", method: "", ln: 199 }) } }) }, select: function(e, t) { o.fire("select", t) } }).autocomplete("search", "") } }) });;
define("common-jquery:widget/js/logic/https/https.es", function(t, e) { "use strict";

    function r(t) { return t && t.__esModule ? t : { "default": t } }

    function o(t) { if (!u.isString(t)) throw new TypeError("fixUrl: first param must is string", "https.es"); var e = t.split("#"); if (e[0] === location.href.split("#")[0]) return e[1] ? "#" + e[1] : ""; if ("https:" !== location.protocol) return t; var r = s.parse(location.href);
        t = /^\/\w/.test(t) ? r.origin + t : t; var o = s.parse(t); if ("jingyan.baidu.com" !== o.hostname && "jingyan-shahe.baidu.com" !== o.hostname && "jingyan-test.baidu.com" !== o.hostname) return t; var i = c.filter(function(t) { return t.test(r.pathname) })[0]; return i && i.test(o.pathname) ? (o.protocol = r.protocol, s.format(o)) : (o.protocol = l.some(function(t) { return t.test(o.pathname) }) ? "https:" : "http:", s.format(o)) }

    function i() { n["default"]("a").each(function() { var t = n["default"](this);
            t.attr("href") && t.prop("href", o(t.prop("href"))) }) } Object.defineProperty(e, "__esModule", { value: !0 }); var a = t("common-jquery:widget/lib/jquery/jquery.js"),
        n = r(a),
        s = t("common-jquery:widget/js/util/url/url.es"),
        u = t("common-jquery:widget/js/util/type/type.es"),
        l = [/^\/$/, /^\/tag/, /^\/help/, /^\/orgList/, /^\/expertList/, /^\/shop/, /^\/magazine/, /^\/list/, /^\/fancier\/list/, /^\/task$/, /^\/patch$/, /^\/tasklist$/, /^\/usersign$/, /^\/user/, /^\/comment\/list/, /^\/season/, /^\/manual$/, /^\/manual\/list/, /^\/taskbook/],
        c = [/^\/article/, /^\/album/];
    e.autoFixAnchor = i, e.autoFixUrl = o });;
define("common-jquery:widget/js/ui/tip/tip.js", function(t, i, e) { var o = t("common-jquery:widget/lib/jquery/jquery.js"),
        s = t("common-jquery:widget/js/ui/base/base.js");
    t("common-jquery:widget/lib/jquery.ui/jquery.ui.tooltip.js"), e.exports = s(function(t) { var i = this;
        i.position = o.extend({ my: "left top", at: "left bottom+10", collision: "none", using: function(e, s) { "popcms" != t.rightbottom && o(this).css(e), i.arrow && o("<div>").addClass("tip-arrow").addClass("tip-arrow-" + (i.direction || s[s.important])).html("<em></em><span></span>").appendTo(this), i.closebox && (o('<a href="#" class="tip-close" title="关闭">×</a>').addClass(s.vertical).addClass(s.horizontal).click(function(t) { try { t.preventDefault(), i.autoDispose ? i.close() : i.hide(), i.fire("closeall") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message, path: "common-jquery:widget/js/ui/tip/tip.js", method: "", ln: 44 }) } }).appendTo(this), o(this).addClass("tip-has-close")), i.shadow && o(this).addClass("tip-shadow"), i.radius && o(this).addClass("tip-radius") } }, t.position), delete t.position, i.content = "", i.target = "", i.tooltipClass = "", i.arrow = !0, i.closebox = !1, i.shadow = !0, i.radius = !0, i.autoDispose = !0, i.effect = !0 }).extend({ init: function(t) { try { var i = this; if (i.target = o(i.target), 0 == i.target.size()) return;
                i.target.attr("title") || i.target.attr("title", ""), i.target.tooltip({ content: i.content, position: i.position, tooltipClass: i.tooltipClass, open: function(t) { i.fire("onopen", t) }, close: function(t) { i.fire("onclose", t) } }), i.instance = i.target.data("ui-tooltip"), i.target.tooltip("open", { target: i.instance.element }), i._status = "show", t.autoDisplay === !1 && this.close() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/ui/tip/tip.js", method: "", ln: 99 }) } }, getTipContainer: function() { return this.instance._find(o(this.target)) }, getTipBody: function() { return this.getTipContainer().find(".ui-tooltip-content") }, getStatus: function() { return this._status }, open: function() { var t = this.target;
            t.attr("title") || t.attr("title", ""), t.tooltip("open", { target: this.instance.element }), this._status = "show", this.fire("show") }, show: function() { this.autoDispose ? this.open() : (this.getTipContainer()[this.effect ? "fadeIn" : "show"](), this._status = "show") }, close: function() { this.target.tooltip("close"), this._status = "hide" }, hide: function() { this.autoDispose ? this.close() : (this.getTipContainer()[this.effect ? "fadeOut" : "hide"](), this._status = "hide") } }) });;
define("common-jquery:widget/js/ui/carousel/carousel.js", function(i, e, t) { var s = i("common-jquery:widget/lib/jquery/jquery.js"),
        n = i("common-jquery:widget/js/ui/base/base.js"),
        o = n().extend({ init: function(i) { try { this.options = s.extend({ interval: 3e3, duration: 1e3, items: [], viewSize: 1, direction: "horizontal", serviceItem: "" }, i), this.paused = null, this.sliding = null, this.interval = null, this.activeIndex = 0, this.lastActiveIndex = i.items.length } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/ui/carousel/carousel.js", method: "", ln: 47 }) } }, render: function(i) { var e = this; if (e.$inner = s("<div/>").addClass("carousel-inner"), s(e.options.items).each(function(i) { s("<div/>").addClass("item").html(this).appendTo(e.$inner).attr("index", i) }), e.$items = e.$inner.children(), e.$active = e.$items.slice(0, e.options.viewSize).addClass("active"), e.$misc = s("<div/>").addClass("carousel-misc"), e.options.indicators) { for (var t = s("<ol/>").addClass("carousel-indicators").appendTo(e.$misc), n = 0; n < e.$items.size(); n++) s("<li/>").attr("data-slide-to", n).appendTo(t);
                    t.children().slice(0, e.options.viewSize).addClass("active").first().addClass("first") } e.$indicators = e.$misc.find(".carousel-indicators li"), e.options.controls && (s("<a/>").addClass("carousel-control carousel-control-left").prependTo(e.$misc), s("<a/>").addClass("carousel-control carousel-control-right").appendTo(e.$misc)), e.target = s(i).append(e.$inner).append(e.$misc).addClass("carousel"), e.initStyle(), e.bindEvents(), e.cycle(), s.isFunction(e.options.render) && e.options.render.apply(this, arguments) }, setup: function(i) { this.target = s(i), this.target.size() || (this.target = s("#" + i)), this.target.addClass("carousel"), this.$inner = this.target.find(".carousel-inner"), this.$items = this.$inner.children(), this.$active = this.target.find(".item.active"), this.$active.size() || (this.$active = this.$items.slice(0, this.options.viewSize).addClass("active")), this.$misc = this.target.find(".carousel-misc"), this.$indicators = this.target.find(".carousel-indicators li"), this.initStyle(), this.bindEvents(), this.cycle() }, initStyle: function() { try { var i = this,
                        e = "horizontal" == i.options.direction ? "width" : "height",
                        t = "horizontal" == i.options.direction ? "left" : "top",
                        n = "horizontal" == i.options.direction ? "top" : "left";
                    i.$items.css(e, 100 / i.options.viewSize + "%").css(n, "0").slice(0, i.options.viewSize).each(function(e, n) { s(n).css(t, 100 * e / i.options.viewSize + "%") }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message, path: "common-jquery:widget/js/ui/carousel/carousel.js", method: "", ln: 123 }) } }, bindEvents: function() { var i = this;
                i.target.on("mouseenter", s.proxy(i.pause, i)).on("mouseleave", s.proxy(i.cycle, i)).on("click", ".carousel-control-left", function(e) { try { e.preventDefault(), i.prev() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/ui/carousel/carousel.js", method: "", ln: 132 }) } }).on("click", ".carousel-control-right", function(e) { try { e.preventDefault(), i.next() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/ui/carousel/carousel.js", method: "", ln: 136 }) } }).on("click", ".carousel-indicators li", function(e) { try { e.preventDefault(), i.to(s(e.currentTarget).data("slide-to")) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/js/ui/carousel/carousel.js", method: "", ln: 140 }) } }) }, cycle: function(i) { return i || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(s.proxy(this.next, this), this.options.interval)), this }, pause: function(i) { return i || (this.paused = !0), this.interval = clearInterval(this.interval), this }, setActiveItems: function() { var i = this.activeIndex;
                this.$items.removeClass("active"), this.$active = [], this.$indicators.removeClass("active"); for (var e = 0; e < this.options.viewSize; e++) { var t = (i + e) % this.$items.size();
                    this.$active.push(this.$items.get(t)), this.$indicators.eq(t).addClass("active") } return s(this.$active).addClass("active"), this.$active }, to: function(i) { var e = this,
                    t = e.activeIndex; if (!(i > e.$items.length - 1 || 0 > i)) { if (e.sliding) return e.once("slid", function() { e.to(i) }); if (t == i) return e.pause().cycle(); var s = Math.abs(i - t) > 1; return e.slide(i > t ? "next" : "prev", i, s) } }, prev: function() { return this.sliding ? void 0 : this.slide("prev") }, next: function() { return this.sliding ? void 0 : this.slide("next") }, getActiveIndex: function() { return this.activeIndex }, isSliding: function() { return this.sliding }, getLastActiveIndex: function() { return this.lastActiveIndex }, slide: function(i, e, t) { var n = this,
                    o = n.setActiveItems(),
                    a = "horizontal" == n.options.direction ? "left" : "top",
                    r = n.activeIndex + ("next" == i ? n.options.viewSize : -1);
                r = (n.$items.size() + r) % n.$items.size(); var c = s(o["next" == i ? 0 : n.options.viewSize - 1]),
                    l = n.$items.eq(r); if (n.sliding = !0, n.interval && n.pause(), n.options.isHome || !l.hasClass("active")) { s.isFunction(n.options.beforeSlide) && n.options.beforeSlide.apply(this, [o]), n.fire("slide", { relatedTarget: l[0], direction: i, index: r }), l.css(a, "next" == i ? "100%" : -100 / n.options.viewSize + "%").addClass("active"), n.lastActiveIndex = n.activeIndex; var d = n.duration;
                    t && (d = n.duration / n.$items.size()); var u = [];
                    s.each(o, function(e) { var t = "next" == i ? -1 : 1,
                            o = {};
                        o[a] = 100 * (e + t) / n.options.viewSize + "%", u.push(s(this).animate(o, d)) }); var h = {}; return h[a] = "prev" == i ? 0 : 100 - 100 / n.options.viewSize + "%", u.push(l.animate(h, d)), s.when.apply(s, u).done(function() { c.removeClass("active"), n.activeIndex = (n.$items.size() + n.activeIndex + ("next" == i ? 1 : -1)) % n.$items.size(); var o = n.setActiveItems();
                        n.sliding = !1, s.isFunction(n.options.afterSlide) && n.options.afterSlide.apply(this, [o]), "undefined" != typeof e && e != n.activeIndex ? n.slide(i, e, t) : setTimeout(function() { n.fire("slide") }, 0) }), n.cycle(), n } } });
    t.exports = o });;
define("common-jquery:widget/js/ui/dialog/dialog.js", function(t, e, i) { var n = t("common-jquery:widget/lib/jquery/jquery.js"),
        o = t("common-jquery:widget/js/util/event/event.js"),
        s = t("common-jquery:widget/js/ui/base/base.js");
    t("common-jquery:widget/lib/jquery.ui/jquery.ui.dialog.js"); var a = {},
        c = s().extend({ init: function(t) { try { var e = this;
                    t = n.extend({ modal: !0, closeText: "关闭", resizable: !1, draggable: !0, dialogClass: t.className, btnAlign: "center" }, t || {}), e.instance = t.target ? n(t.target).dialog(t) : n("<div>", { id: "ik-dlg-" + e.guid }).html(t.content).dialog(t), n.isArray(t.buttons) && e.customBttons(t.buttons), e.instance.next().css("text-align", t.btnAlign), t.autoDispose && e.instance.on("dialogclose", function() { n(this).dialog("destroy").remove(), delete a[e.guid], e.isDestroy = !0 }), a[e.guid] = e.instance, n(window).on("resize", function() { e && e.center() }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message, path: "common-jquery:widget/js/ui/dialog/dialog.js", method: "", ln: 54 }) } }, customBttons: function(t) { var e = this,
                    i = this.instance.next().children("div"),
                    o = i.find("button");
                n(t).each(function(t) { var o = this;!this.className && 2 > t && (this.className = ["btn-32-green", "btn-32-white"][t] + " mr-10"), n('<a href="#" />').text(this.text || "").appendTo(i).addClass(this.className || "").click(function(t) { try { t.preventDefault(), o.click.apply(e.instance, arguments) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message, path: "common-jquery:widget/js/ui/dialog/dialog.js", method: "", ln: 69 }) } }) }), o.remove() }, open: function() {!this.isDestroy && this.instance.dialog("open") }, close: function() {!this.isDestroy && this.instance.dialog("close") }, center: function() {!this.isDestroy && this.instance.dialog("option", "position", { my: "center", at: "center", of: window }) }, getDialogContainer: function() { return this.isDestroy ? null : this.instance.dialog("widget") }, setSize: function(t) {!this.isDestroy && this.instance.dialog("option", t) }, setTitle: function(t) {!this.isDestroy && t && this.instance.dialog("option", "title", t) } });
    o.on("dialog.close", function() { c.close() }), i.exports = n.extend(c, { alert: function(t, e) { return e = n.extend({ title: "经验提示", content: t, buttons: [{ text: "确定", click: function() { try { n.isFunction(e.onaccept) && e.onaccept.apply(this, arguments), n(this).dialog("close") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message, path: "common-jquery:widget/js/ui/dialog/dialog.js", method: "", ln: 113 }) } } }] }, e || {}), new c(e) }, confirm: function(t, e) { return e.buttons = e.buttons || [{ text: "确定", click: function() { try { n.isFunction(e.onaccept) && e.onaccept.apply(this, arguments) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message, path: "common-jquery:widget/js/ui/dialog/dialog.js", method: "", ln: 123 }) } } }, { text: "取消", click: function() { try { n.isFunction(e.oncancel) && e.oncancel.apply(this, arguments), n(this).dialog("close") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message, path: "common-jquery:widget/js/ui/dialog/dialog.js", method: "", ln: 129 }) } } }], c.alert(t, e) }, expConfirm: function(t, e) { var i = n.extend({ type: e.type || "warn", width: 514, height: 324, className: "exp-dialog", onaccept: function() { o.fire("dialog.close") } }, e || {}); switch (i.noFooter && (i.className = "exp-dialog no-footer"), i.type) {
                case "warn":
                    i.title = "确认提示"; break;
                case "error":
                    i.title = "错误提示"; break;
                case "success":
                    i.title = "成功提示" } t = i.finalContent ? i.finalContent : ['<div class="exp-content clearfix">', '<div class="grid bear">', '<div class="i-' + i.type + '"></div>', "</div>", '<div class="grid content-text">', t, "</div>", "</div>"].join(""), c.confirm(t, i) }, iframe: function(t) { var e = '<iframe frameborder="no" class="ui-dialog-content-iframe" src="' + t.content + '"></iframe>'; return t.content = e, t.buttons || (t.buttons = []), t.dialogClass || (t.dialogClass = "dialog-iframe"), c.alert(e, t) }, notice: function(t, e) { var e = n.extend({ width: 250, height: 100 }, e || {}),
                i = { buttons: [], width: e.width, height: e.height, dialogClass: "dialog-notice", autoDispose: !0, content: t, duration: 1500, open: function() { var t = this;
                        setTimeout(function() { n(t).dialog("close"), n.isFunction(e.callback) && e.callback() }, i.duration) } }; return n.extend(i, e || {}), new c(i) }, close: function() { n.each(a, function(t, e) { try { e && e.dialog("close") } catch (i) {} }) } }) });;
define("common-jquery:widget/js/util/type/type.es", function(n, t) { "use strict";

    function e(n) { if (null === n) return "null"; var t = typeof n; if ("object" !== t) return t; var e; try { e = s.call(n).slice(8, -1).toLowerCase() } catch (r) { return "object" } return "object" !== e ? e : n.constructor == Object ? e : "unknow" }

    function r(n) { return "boolean" === e(n) }

    function u(n) { return "string" === e(n) }

    function i(n) { return "object" === e(n) }

    function o(n) { return "function" === e(n) }

    function c(n) { return "null" === e(n) }

    function f(n) { return "undefined" === e(n) }

    function l(n) { return c(n) || f(n) } var s = "".toString;
    t.type = e, t.isBoolean = r, t.isString = u, t.isObject = i, t.isFunction = o, t.isNull = c, t.isUndef = f, t.isNullOrUndef = l });;
define("common-jquery:widget/js/util/url/querystring.es", function(r, e) { "use strict";

    function t(r) { return r && r.__esModule ? r : { "default": r } }

    function i() { var r = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]; if (!a.isString(r)) throw new TypeError("parse: first param must is string", "querystring.es"); var e = {}; return r.split("&").forEach(function(r) { var t = r.split("=");
            e[t[0]] = t[1] }), e }

    function s(r) { if (!a.isObject(r)) throw new TypeError("parse: first param must is object", "querystring.es"); return u["default"].param(r) } var n = r("common-jquery:widget/lib/jquery/jquery.js"),
        u = t(n),
        a = r("common-jquery:widget/js/util/type/type.es");
    e.parse = i, e.stringify = s });;
define("common-jquery:widget/js/util/url/url.es", function(r, e) { "use strict";

    function t() { var r = arguments.length <= 0 || void 0 === arguments[0] ? "/" : arguments[0],
            e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]; if (!a.isString(r)) throw new TypeError("parse: first param must is string", "url.es"); if (!a.isBoolean(e)) throw new TypeError("parse: second param must is boolean", "url.es"); var t = r.match(/^([^:\/?#]+:)?\/\/(?:([^:@]*:[^:@]*)@)?([^:\/?#]+)(?:\:(\d*))?([^?#]*)(?:\?([^#]*))?(#(?:.*))?$/); if (!t) return { href: r }; var s = { href: r, protocol: t[1] || "", auth: t[2] || "", hostname: t[3] || "", port: t[4] || "", pathname: t[5] || "", query: t[6] || "", hash: t[7] || "" }; return s.host = s.hostname + (s.port ? ":" : "") + s.port, s.search = (s.query ? "?" : "") + s.query, s.path = s.pathname + s.search, s.origin = s.protocol + "//" + s.auth + (s.auth ? "@" : "") + s.host, s.query = e ? i.parse(s.query) : s.query, s }

    function s(r) { if (!a.isObject(r)) throw new TypeError("format: first param must is object", "url.es"); var e = r.protocol || "",
            t = r.auth || "",
            s = r.hostname || "",
            o = r.port || "",
            n = r.pathname || "",
            i = r.query || "",
            u = r.hash || "",
            m = e + "//" + t + (t ? "@" : "") + s + (o ? ":" : "") + o + n + (i ? "?" : "") + i + u; return "//" === m ? r.href : m }

    function o(r, e) { if (!a.isString(r)) throw new TypeError("resolve: first param must is string", "url.es"); if (!a.isString(e)) throw new TypeError("resolve: second param must is string", "url.es") }

    function n(r) { if (!a.isString(r)) throw new TypeError("normalize: first param must is string", "url.es") } var a = r("common-jquery:widget/js/util/type/type.es"),
        i = r("common-jquery:widget/js/util/url/querystring.es");
    e.parse = t, e.format = s, e.resolve = o, e.normalize = n });;
define("common-jquery:widget/search-box/search-box.js", function(e, t, a) { var n = e("common-jquery:widget/lib/jquery/jquery.js"),
        o = e("common-jquery:widget/js/logic/suggestion/suggestion.js"),
        c = e("common-jquery:widget/js/logic/https/https.es").autoFixUrl,
        i = { search: function(e) { location.href = c("http://jingyan.baidu.com/search?word=" + encodeURIComponent(e)) }, sug: function(e) { { var t = n(e.target),
                        a = this;
                    new o({ target: t, select: function(e, o) { var c = n.trim(o.item.value);
                            t.val(c), a.search(c) }, config: { position: e.position } }) } }, init: function(e) { try { var t = this,
                        a = n.extend({ target: "#kw", position: { my: "left top", at: "left-1 bottom+6" } }, e || {});
                    t.sug(a), t.checkSearchBoxQuery(), t.initChannel() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message, path: "common-jquery:widget/search-box/search-box.js", method: "", ln: 47 }) } }, checkSearchBoxQuery: function() { var e = n("#top-search-form");
                n(e).on("submit", function(e) { e.preventDefault(), "" == n.trim(n("#kw").val()) ? window.location.reload(!0) : this.submit() }) }, channelChange: function(e) { var t = n("#kw"); if (t.val().length > 0) { var a = (e.href, encodeURIComponent(t.val())),
                        o = ""; switch (e.getAttribute("index")) {
                        case "0":
                            o = "ns?cl=2&rn=20&tn=news&t=1&word=" + a + "&t=1&ie=utf-8"; break;
                        case "1":
                            o = "s?cl=3&wd=" + a + "&t=1&ie=utf-8"; break;
                        case "2":
                            o = "f?kw=" + a + "&ie=utf-8"; break;
                        case "3":
                            o = "q?ct=17&pn=0&tn=ikaslist&rn=10&word=" + a + "&ie=utf-8"; break;
                        case "4":
                            o = "search?key=" + a; break;
                        case "5":
                            o = "search/index?tn=baiduimage&ct=201326592&ie=utf-8&lm=-1&cl=2&word=" + a; break;
                        case "6":
                            o = "v?ct=301989888&s=25&word=" + a + "&ie=utf-8"; break;
                        case "7":
                            o = "?newmap=1&ie=utf-8&s=s%26wd%3D" + a; break;
                        case "8":
                            o = "search/word?pic=1&word=" + a + "&enc=utf8"; break;
                        case "9":
                            o = "search?lm=0&od=0&word=" + a + "&ie=utf-8"; break;
                        default:
                            o = "" } e.href = e.href + o } }, initChannel: function() { try { var e = this,
                        t = n("#search-box .channel li a");
                    n.each(t, function(t, a) { n(a).attr("index", t).on("click", function() { try { e.channelChange(a) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message, path: "common-jquery:widget/search-box/search-box.js", method: "", ln: 94 }) } }) }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message, path: "common-jquery:widget/search-box/search-box.js", method: "", ln: 96 }) } } };
    a.exports = i });;
define("common-jquery:widget/nav/nav.js", function(e, n, i) { var o = e("common-jquery:widget/lib/jquery/jquery.js"),
        a = { init: function() { try { o("#nav-wrap div.sub-menu").each(function(e, n) { var i = o(n).parent();
                        i.mouseenter(function() { o(".dir-icon", i).addClass("dir-icon-hover"), o(n).stop(!0, !0).slideDown(50) }).mouseleave(function() { o(".dir-icon", i).removeClass("dir-icon-hover"), o(n).stop(!0, !0).slideUp(50) }) }), o("#nav-wrap .sub-menu-item").each(function(e, n) { o(n).on("click", function() { try { var e = o(n).parents(".main-menu-item");
                                e.find("dir-icon").removeClass("dir-icon-hover"), e.find(".sub-menu").hide() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message, path: "common-jquery:widget/nav/nav.js", method: "", ln: 28 }) } }) }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/nav/nav.js", method: "", ln: 30 }) } } };
    i.exports = a });;
define("common-jquery:widget/footer/footer.js", function(e, t, o) { var n = e("common-jquery:widget/lib/jquery/jquery.js"),
        a = e("common-jquery:widget/js/logic/log/log.js"),
        i = { init: function() { try { n("#wgt-footer").on("click", "#freshhelp, #feedback, #complaint", function(e) { try { var t = e.target.id;
                            a.send(window.location.href, "", { pos: "footer-" + t, action: "click" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/footer/footer.js", method: "", ln: 16 }) } }), this.initFeedbackPlugin() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message, path: "common-jquery:widget/footer/footer.js", method: "", ln: 18 }) } }, initFeedbackPlugin: function() {
                function e() { if (bds && bds.qa && bds.qa.ShortCut && bds.qa.ShortCut.initRightBar) { var e = { needImage: !0, upload_file: !0, appid: 222561, productLine: 90599, wenjuanTitle: "", wenjuanURL: "", issuePlaceholder: "请输入问题描述", contactPlaceholder: "请输入邮箱地址，便于及时处理您的问题", showPosition: "center", contactWayType: "email", needContactWay: !0, needHotQuestion: !0, needQuestionnaire: !1, needFeedbackType: !1, needProductType: !1, needEvaluate: !0, typeArray: [], titleBgColor: "#F5F5F5", buttonColor: "#3582FA", mainFontColor: "#151515", secondaryFontColor: "#999999", titleColor: "#333333", hotQuestionArray: [] };
                        bds.qa.ShortCut.initRightBar(e); var t = { extend_feedback_channel: 32964 };
                        bds.qa.ShortCut._getProData(t) } }

                function t() { return window.bds && window.bds.qa && window.bds.qa.ShortCut ? e() : o("https://ufosdk.baidu.com/Public/feedback/js/dist/feedback_plugin_2.0.js", function() { e() }, { charset: "utf-8", id: "feedback_script" }), !1 }

                function o(e, t, o) { var n = document.createElement("script"),
                        o = o || {};
                    n.type = "text/javascript", o.charset && (n.charset = o.charset), o.id && (n.id = o.id), n.readyState ? n.onreadystatechange = function() {
                        ("loaded" === n.readyState || "complete" === n.readyState) && (n.onreadystatechange = null, t()) } : n.onload = function() { t() }, n.src = e, document.body.appendChild(n) } try { document.getElementById("feedback").onclick = t } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message, path: "common-jquery:widget/footer/footer.js", method: "", ln: 101 }) } } };
    o.exports = i });