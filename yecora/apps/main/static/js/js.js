function _fixed_menu() {
    var t = document.getElementById("top-bar"),
        e = $(t),
        i = e.next("header").innerHeight() - 80;
    window.onscroll = function() {
        (window.pageYOffset || document.documentElement.scrollTop) >= i ? e.addClass("fixed in") : e.hasClass("fixed") && (e.removeClass("in").addClass("out"), setTimeout(function() {
            e.removeClass("fixed out")
        }, 100))
    }
}

function _main_menu() {
    var t = document.getElementById("top-bar"),
        e = document.getElementById("top-bar__navigation-toggler"),
        i = document.getElementById("top-bar__navigation"),
        n = $(t),
        o = $(e),
        r = $(i),
        s = r.find("li a"),
        a = r.find(".submenu"),
        l = 0;
    a.length && a.parents("li").addClass("has-children"), l = o.is(":visible") ? 70 : 80, s.on("touchend click", function(t) {
        var e = $(this),
            i = e.parent();
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var r = $(this.hash);
            return r = r.length ? r : $("[name=" + this.hash.slice(1) + "]"), r.length && $("html,body").stop().animate({
                scrollTop: r.offset().top - l
            }, 1e3), o.is(":visible") && (n.removeClass("expanded"), o.removeClass("active")), !1
        }
        if (o.is(":visible") && e.next(a).length) return e.next().is(":visible") ? (i.removeClass("drop_active"), e.next().slideUp("fast")) : (e.closest("ul").find("li").removeClass("drop_active"), e.closest("ul").find(".submenu").slideUp("fast"), i.addClass("drop_active"), e.next().slideDown("fast")), !1
    }), o.on("touchend click", function(t) {
        t.preventDefault();
        var e = $(this);
        return e.toggleClass("active"), n.toggleClass("expanded"), !1
    }), $window.smartresize(function() {
        window.innerWidth >= 767 && (n.removeClass("expanded"), o.removeClass("active"))
    })
}

function _owl_carousel() {
    var t = $(".feedbacks--slider");
    t.length > 0 && t.children(".owl-carousel").owlCarousel({
        loop: !0,
        nav: !1,
        dots: !0,
        autoplay: !0,
        autoplayTimeout: 6e3,
        autoplayHoverPause: !0,
        autoHeight: !0,
        smartSpeed: 1e3,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })
}

function _isotope_sorting() {
    var t = document.getElementById("gallery-set"),
        e = $(t);
    if (e.length > 0) {
        var i = $(".js-isotope"),
            n = e.find("a");
        n.on("click", function(t) {
            var n = $(this),
                o = n.data("cat");
            return e.find(".selected").removeClass("selected"), n.addClass("selected"), "*" !== o && (o = "." + o), i.isotope({
                filter: o
            }), !1
        })
    }
}

function _chart() {
    function t(t) {
        $(".js-chart", t).each(function() {
            $(this).easyPieChart({
                easing: "easeOutElastic",
                delay: 3e3,
                barColor: "#369670",
                trackColor: "",
                scaleColor: !1,
                lineWidth: 12,
                trackWidth: 12,
                size: 175,
                lineCap: "butt",
                onStep: function(t, e, i) {
                    this.el.children[0].innerHTML = Math.round(i)
                }
            })
        })
    }
    $(".skill__item").appear(function() {
        var e = $(this);
        setTimeout(function() {
            t(e)
        }, 200)
    })
}

function _count() {
    function t(t) {
        $(".js-count", t).each(function() {
            $(this).hasClass("animate") || $(this).countTo({
                from: 0,
                speed: 2e3,
                refreshInterval: 100,
                onComplete: function() {
                    $(this).addClass("animate")
                }
            })
        })
    }
    $(".counter__item").appear(function() {
        var e = $(this);
        setTimeout(function() {
            t(e)
        }, 200)
    })
}

function _g_map() {
    var t = $(".g_map");
    t.length > 0 && $.getScript("http://maps.google.com/maps/api/js?key=AIzaSyB8A4y1U_Y1qcE8W_-uQUDkypo7z4Z-Bp8&callback=initMap", function(e, i, n) {
        t.each(function() {
            var t = $(this),
                e = new google.maps.LatLng(t.attr("data-longitude"), t.attr("data-latitude")),
                i = t.attr("data-marker"),
                n = {
                    zoom: 14,
                    center: e,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: !1,
                    scrollwheel: !1,
                    draggable: !0,
                    panControl: !1,
                    zoomControl: !1,
                    disableDefaultUI: !0
                },
                o = [{
                    featureType: "all",
                    elementType: "all",
                    stylers: [{
                        saturation: -100
                    }]
                }],
                r = new google.maps.Map(t[0], n),
                s = new google.maps.StyledMapType(o, {
                    name: "Grayscale"
                });
            r.mapTypes.set("Grayscale", s), r.setMapTypeId("Grayscale");
            new google.maps.Marker({
                map: r,
                icon: {
                    size: new google.maps.Size(40, 56),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(20, 56),
                    url: i
                },
                position: e
            });
            google.maps.event.addDomListener(window, "resize", function() {
                var t = r.getCenter();
                google.maps.event.trigger(r, "resize"), r.setCenter(t)
            })
        })
    })
}

function _parallax() {
    device.desktop() && ($.stellar({
        scrollProperty: "scroll",
        verticalOffset: 0,
        horizontalOffset: 0,
        horizontalScrolling: !1
    }), $window.smartresize(function() {
        $.stellar("refresh")
    }))
}

function _scrollTop() {
    var t = document.getElementById("btn-to-top-wrap"),
        e = $(t);
    if (e.length > 0) {
        var i = document.getElementById("btn-to-top"),
            n = $(i);
        n.on("click", function(t) {
            return t.preventDefault(), $("body,html").stop().animate({
                scrollTop: 0
            }, 1500), !1
        }), $window.on("scroll", function(t) {
            $window.scrollTop() > n.data("visible-offset") ? e.is(":hidden") && e.fadeIn() : e.is(":visible") && e.fadeOut()
        })
    }
}

function _gall() {
    var t = $("a[data-gallery]");
    t.length > 0 && t.boxer({
        fixed: !0,
        videoWidth: 1e3
    })
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
            i = rt.type(t);
        return "function" !== i && !rt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t, e, i) {
        if (rt.isFunction(e)) return rt.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return rt.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (gt.test(e)) return rt.filter(e, t, i);
            e = rt.filter(e, t)
        }
        return rt.grep(t, function(t) {
            return J.call(e, t) > -1 !== i
        })
    }

    function o(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function r(t) {
        var e = {};
        return rt.each(t.match(bt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function s() {
        Y.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), rt.ready()
    }

    function a() {
        this.expando = rt.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(zt, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : St.test(i) ? rt.parseJSON(i) : i)
                } catch (t) {}
                Et.set(t, e, i)
            } else i = void 0;
        return i
    }

    function u(t, e, i, n) {
        var o, r = 1,
            s = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return rt.css(t, e, "")
            },
            l = a(),
            u = i && i[3] || (rt.cssNumber[e] ? "" : "px"),
            h = (rt.cssNumber[e] || "px" !== u && +l) && Ht.exec(rt.css(t, e));
        if (h && h[3] !== u) {
            u = u || h[3], i = i || [], h = +l || 1;
            do r = r || ".5", h /= r, rt.style(t, e, h + u); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return i && (h = +h || +l || 0, o = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = h, n.end = o)), o
    }

    function h(t, e) {
        var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], i) : i
    }

    function c(t, e) {
        for (var i = 0, n = t.length; n > i; i++) $t.set(t[i], "globalEval", !e || $t.get(e[i], "globalEval"))
    }

    function d(t, e, i, n, o) {
        for (var r, s, a, l, u, d, p = e.createDocumentFragment(), f = [], g = 0, m = t.length; m > g; g++)
            if (r = t[g], r || 0 === r)
                if ("object" === rt.type(r)) rt.merge(f, r.nodeType ? [r] : r);
                else if (At.test(r)) {
            for (s = s || p.appendChild(e.createElement("div")), a = (jt.exec(r) || ["", ""])[1].toLowerCase(), l = Dt[a] || Dt._default, s.innerHTML = l[1] + rt.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
            rt.merge(f, s.childNodes), s = p.firstChild, s.textContent = ""
        } else f.push(e.createTextNode(r));
        for (p.textContent = "", g = 0; r = f[g++];)
            if (n && rt.inArray(r, n) > -1) o && o.push(r);
            else if (u = rt.contains(r.ownerDocument, r), s = h(p.appendChild(r), "script"), u && c(s), i)
            for (d = 0; r = s[d++];) Ot.test(r.type || "") && i.push(r);
        return p
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        try {
            return Y.activeElement
        } catch (t) {}
    }

    function m(t, e, i, n, o, r) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) m(t, a, i, n, e[a], r);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = f;
        else if (!o) return t;
        return 1 === r && (s = o, o = function(t) {
            return rt().off(t), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = rt.guid++)), t.each(function() {
            rt.event.add(this, e, o, n, i)
        })
    }

    function v(t, e) {
        return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function x(t) {
        var e = Bt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        var i, n, o, r, s, a, l, u;
        if (1 === e.nodeType) {
            if ($t.hasData(t) && (r = $t.access(t), s = $t.set(e, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (o in u)
                    for (i = 0, n = u[o].length; n > i; i++) rt.event.add(e, o, u[o][i])
            }
            Et.hasData(t) && (a = Et.access(t), l = rt.extend({}, a), Et.set(e, l))
        }
    }

    function b(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && kt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function _(t, e, i, n) {
        e = Z.apply([], e);
        var o, r, s, a, l, u, c = 0,
            p = t.length,
            f = p - 1,
            g = e[0],
            m = rt.isFunction(g);
        if (m || p > 1 && "string" == typeof g && !nt.checkClone && Ft.test(g)) return t.each(function(o) {
            var r = t.eq(o);
            m && (e[0] = g.call(this, o, r.html())), _(r, e, i, n)
        });
        if (p && (o = d(e, t[0].ownerDocument, !1, t, n), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
            for (s = rt.map(h(o, "script"), y), a = s.length; p > c; c++) l = o, c !== f && (l = rt.clone(l, !0, !0), a && rt.merge(s, h(l, "script"))), i.call(t[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, rt.map(s, x), c = 0; a > c; c++) l = s[c], Ot.test(l.type || "") && !$t.access(l, "globalEval") && rt.contains(u, l) && (l.src ? rt._evalUrl && rt._evalUrl(l.src) : rt.globalEval(l.textContent.replace(Vt, "")))
        }
        return t
    }

    function C(t, e, i) {
        for (var n, o = e ? rt.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || rt.cleanData(h(n)), n.parentNode && (i && rt.contains(n.ownerDocument, n) && c(h(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function T(t, e) {
        var i = rt(e.createElement(t)).appendTo(e.body),
            n = rt.css(i[0], "display");
        return i.detach(), n
    }

    function $(t) {
        var e = Y,
            i = Qt[t];
        return i || (i = T(t, e), "none" !== i && i || (Ut = (Ut || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ut[0].contentDocument, e.write(), e.close(), i = T(t, e), Ut.detach()), Qt[t] = i), i
    }

    function E(t, e, i) {
        var n, o, r, s, a = t.style;
        return i = i || Gt(t), s = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== s && void 0 !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), i && !nt.pixelMarginRight() && Yt.test(s) && Xt.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
    }

    function S(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function z(t) {
        if (t in ne) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--;)
            if (t = ie[i] + e, t in ne) return t
    }

    function I(t, e, i) {
        var n = Ht.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function H(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += rt.css(t, i + Lt[r], !0, o)), n ? ("content" === i && (s -= rt.css(t, "padding" + Lt[r], !0, o)), "margin" !== i && (s -= rt.css(t, "border" + Lt[r] + "Width", !0, o))) : (s += rt.css(t, "padding" + Lt[r], !0, o), "padding" !== i && (s += rt.css(t, "border" + Lt[r] + "Width", !0, o)));
        return s
    }

    function L(t, e, i) {
        var n = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = Gt(t),
            s = "border-box" === rt.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = E(t, e, r), (0 > o || null == o) && (o = t.style[e]), Yt.test(o)) return o;
            n = s && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + H(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }

    function W(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (r[s] = $t.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Wt(n) && (r[s] = $t.access(n, "olddisplay", $(n.nodeName)))) : (o = Wt(n), "none" === i && o || $t.set(n, "olddisplay", o ? i : rt.css(n, "display"))));
        for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function k(t, e, i, n, o) {
        return new k.prototype.init(t, e, i, n, o)
    }

    function j() {
        return t.setTimeout(function() {
            oe = void 0
        }), oe = rt.now()
    }

    function O(t, e) {
        var i, n = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = Lt[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function D(t, e, i) {
        for (var n, o = (P.tweeners[e] || []).concat(P.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, e, t)) return n
    }

    function A(t, e, i) {
        var n, o, r, s, a, l, u, h, c = this,
            d = {},
            p = t.style,
            f = t.nodeType && Wt(t),
            g = $t.get(t, "fxshow");
        i.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, rt.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = rt.css(t, "display"), h = "none" === u ? $t.get(t, "olddisplay") || $(t.nodeName) : u, "inline" === h && "none" === rt.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (o = e[n], se.exec(o)) {
                if (delete e[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || rt.style(t, n)
            } else u = void 0;
        if (rt.isEmptyObject(d)) "inline" === ("none" === u ? $(t.nodeName) : u) && (p.display = u);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = $t.access(t, "fxshow", {}), r && (g.hidden = !f), f ? rt(t).show() : c.done(function() {
                rt(t).hide()
            }), c.done(function() {
                var e;
                $t.remove(t, "fxshow");
                for (e in d) rt.style(t, e, d[e])
            });
            for (n in d) s = D(f ? g[n] : 0, n, c), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function M(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (n = rt.camelCase(i), o = e[n], r = t[i], rt.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = rt.cssHooks[n], s && "expand" in s) {
                r = s.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = o)
            } else e[n] = o
    }

    function P(t, e, i) {
        var n, o, r = 0,
            s = P.prefilters.length,
            a = rt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = oe || j(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(t, [u, r, i]), 1 > r && l ? i : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: rt.extend({}, e),
                opts: rt.extend(!0, {
                    specialEasing: {},
                    easing: rt.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: oe || j(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = rt.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            h = u.props;
        for (M(h, u.opts.specialEasing); s > r; r++)
            if (n = P.prefilters[r].call(u, t, h, u.opts)) return rt.isFunction(n.stop) && (rt._queueHooks(u.elem, u.opts.queue).stop = rt.proxy(n.stop, n)), n;
        return rt.map(h, D, u), rt.isFunction(u.opts.start) && u.opts.start.call(t, u), rt.fx.timer(rt.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function N(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function q(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                r = e.toLowerCase().match(bt) || [];
            if (rt.isFunction(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function R(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, rt.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            s = t === Ee;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function F(t, e) {
        var i, n, o = rt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && rt.extend(!0, t, n), t
    }

    function B(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function V(t, e, i, n) {
        var o, r, s, a, l, u = {},
            h = t.dataTypes.slice();
        if (h[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (r = h.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = h.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s)
                for (o in u)
                    if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], h.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t.throws) e = s(e);
                else try {
                    e = s(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: s ? t : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function U(t, e, i, n) {
        var o;
        if (rt.isArray(e)) rt.each(e, function(e, o) {
            i || He.test(t) ? n(t, o) : U(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== rt.type(e)) n(t, e);
        else
            for (o in e) U(t + "[" + o + "]", e[o], i, n)
    }

    function Q(t) {
        return rt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var X = [],
        Y = t.document,
        G = X.slice,
        Z = X.concat,
        K = X.push,
        J = X.indexOf,
        tt = {},
        et = tt.toString,
        it = tt.hasOwnProperty,
        nt = {},
        ot = "2.2.4",
        rt = function(t, e) {
            return new rt.fn.init(t, e)
        },
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        lt = /-([\da-z])/gi,
        ut = function(t, e) {
            return e.toUpperCase()
        };
    rt.fn = rt.prototype = {
        jquery: ot,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function(t) {
            var e = rt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return rt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(rt.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: X.sort,
        splice: X.splice
    }, rt.extend = rt.fn.extend = function() {
        var t, e, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = s[e], n = t[e], s !== n && (u && n && (rt.isPlainObject(n) || (o = rt.isArray(n))) ? (o ? (o = !1, r = i && rt.isArray(i) ? i : []) : r = i && rt.isPlainObject(i) ? i : {}, s[e] = rt.extend(u, r, n)) : void 0 !== n && (s[e] = n));
        return s
    }, rt.extend({
        expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === rt.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !rt.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
            if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || it.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = rt.trim(t), t && (1 === t.indexOf("use strict") ? (e = Y.createElement("script"), e.text = t, Y.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(lt, ut)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, o = 0;
            if (i(t))
                for (n = t.length; n > o && e.call(t[o], o, t[o]) !== !1; o++);
            else
                for (o in t)
                    if (e.call(t[o], o, t[o]) === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(st, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? rt.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : J.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
            return t.length = o, t
        },
        grep: function(t, e, i) {
            for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
            return o
        },
        map: function(t, e, n) {
            var o, r, s = 0,
                a = [];
            if (i(t))
                for (o = t.length; o > s; s++) r = e(t[s], s, n), null != r && a.push(r);
            else
                for (s in t) r = e(t[s], s, n), null != r && a.push(r);
            return Z.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, o;
            return "string" == typeof e && (i = t[e], e = t, t = i), rt.isFunction(t) ? (n = G.call(arguments, 2), o = function() {
                return t.apply(e || this, n.concat(G.call(arguments)))
            }, o.guid = t.guid = t.guid || rt.guid++, o) : void 0
        },
        now: Date.now,
        support: nt
    }), "function" == typeof Symbol && (rt.fn[Symbol.iterator] = X[Symbol.iterator]), rt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var ht = function(t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, u, c, p, f = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
            if (!n && ((e ? e.ownerDocument || e : N) !== W && L(e), e = e || W, j)) {
                if (11 !== g && (u = vt.exec(t)))
                    if (o = u[1]) {
                        if (9 === g) {
                            if (!(s = e.getElementById(o))) return i;
                            if (s.id === o) return i.push(s), i
                        } else if (f && (s = f.getElementById(o)) && M(e, s) && s.id === o) return i.push(s), i
                    } else {
                        if (u[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = u[3]) && b.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(o)), i
                    }
                if (b.qsa && !V[t + " "] && (!O || !O.test(t))) {
                    if (1 !== g) f = e, p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(xt, "\\$&") : e.setAttribute("id", a = P), c = $(t), r = c.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; r--;) c[r] = l + " " + d(c[r]);
                        p = c.join(","), f = yt.test(t) && h(e.parentNode) || e
                    }
                    if (p) try {
                        return K.apply(i, f.querySelectorAll(p)), i
                    } catch (t) {} finally {
                        a === P && e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(at, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > _.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[P] = !0, t
        }

        function o(t) {
            var e = W.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) _.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function c() {}

        function d(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                r = R++;
            return e.first ? function(e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, r)
            } : function(e, i, s) {
                var a, l, u, h = [q, r];
                if (s) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) {
                            if (u = e[P] || (e[P] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[n]) && a[0] === q && a[1] === r) return h[2] = a[2];
                            if (l[n] = h, h[2] = t(e, i, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var o = t.length; o--;)
                    if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var o = 0, r = i.length; r > o; o++) e(t, i[o], n);
            return n
        }

        function m(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), u && e.push(a)));
            return s
        }

        function v(t, e, i, o, r, s) {
            return o && !o[P] && (o = v(o)), r && !r[P] && (r = v(r, s)), n(function(n, s, a, l) {
                var u, h, c, d = [],
                    p = [],
                    f = s.length,
                    v = n || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : m(v, d, t, a, l),
                    x = i ? r || (n ? t : f || o) ? [] : s : y;
                if (i && i(y, x, a, l), o)
                    for (u = m(x, p), o(u, [], a, l), h = u.length; h--;)(c = u[h]) && (x[p[h]] = !(y[p[h]] = c));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (u = [], h = x.length; h--;)(c = x[h]) && u.push(y[h] = c);
                            r(null, x = [], u, l)
                        }
                        for (h = x.length; h--;)(c = x[h]) && (u = r ? tt(n, c) : d[h]) > -1 && (n[u] = !(s[u] = c))
                    }
                } else x = m(x === s ? x.splice(f, x.length) : x), r ? r(null, s, x, l) : K.apply(s, x)
            })
        }

        function y(t) {
            for (var e, i, n, o = t.length, r = _.relative[t[0].type], s = r || _.relative[" "], a = r ? 1 : 0, l = p(function(t) {
                    return t === e
                }, s, !0), u = p(function(t) {
                    return tt(e, t) > -1
                }, s, !0), h = [function(t, i, n) {
                    var o = !r && (n || i !== z) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null, o
                }]; o > a; a++)
                if (i = _.relative[t[a].type]) h = [p(f(h), i)];
                else {
                    if (i = _.filter[t[a].type].apply(null, t[a].matches), i[P]) {
                        for (n = ++a; o > n && !_.relative[t[n].type]; n++);
                        return v(a > 1 && f(h), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && d(t))
                    }
                    h.push(i)
                }
            return f(h)
        }

        function x(t, i) {
            var o = i.length > 0,
                r = t.length > 0,
                s = function(n, s, a, l, u) {
                    var h, c, d, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = z,
                        x = n || r && _.find.TAG("*", u),
                        w = q += null == y ? 1 : Math.random() || .1,
                        b = x.length;
                    for (u && (z = s === W || s || u); f !== b && null != (h = x[f]); f++) {
                        if (r && h) {
                            for (c = 0, s || h.ownerDocument === W || (L(h), a = !j); d = t[c++];)
                                if (d(h, s || W, a)) {
                                    l.push(h);
                                    break
                                }
                            u && (q = w)
                        }
                        o && ((h = !d && h) && p--, n && g.push(h))
                    }
                    if (p += f, o && f !== p) {
                        for (c = 0; d = i[c++];) d(g, v, s, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = G.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (q = w, z = y), g
                };
            return o ? n(s) : s
        }
        var w, b, _, C, T, $, E, S, z, I, H, L, W, k, j, O, D, A, M, P = "sizzle" + 1 * new Date,
            N = t.document,
            q = 0,
            R = 0,
            F = i(),
            B = i(),
            V = i(),
            U = function(t, e) {
                return t === e && (H = !0), 0
            },
            Q = 1 << 31,
            X = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            Z = Y.push,
            K = Y.push,
            J = Y.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(it + "+", "g"),
            at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ct = new RegExp(rt),
            dt = new RegExp("^" + nt + "$"),
            pt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            ft = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            xt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            bt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            _t = function() {
                L()
            };
        try {
            K.apply(Y = J.call(N.childNodes), N.childNodes), Y[N.childNodes.length].nodeType
        } catch (t) {
            K = {
                apply: Y.length ? function(t, e) {
                    Z.apply(t, J.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        b = e.support = {}, T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, L = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : N;
            return n !== W && 9 === n.nodeType && n.documentElement ? (W = n, k = W.documentElement, j = !T(W), (i = W.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", _t, !1) : i.attachEvent && i.attachEvent("onunload", _t)), b.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = o(function(t) {
                return t.appendChild(W.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = mt.test(W.getElementsByClassName), b.getById = o(function(t) {
                return k.appendChild(t).id = P, !W.getElementsByName || !W.getElementsByName(P).length
            }), b.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && j) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }, _.filter.ID = function(t) {
                var e = t.replace(wt, bt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function(t) {
                var e = t.replace(wt, bt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), _.find.TAG = b.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, _.find.CLASS = b.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && j ? e.getElementsByClassName(t) : void 0
            }, D = [], O = [], (b.qsa = mt.test(W.querySelectorAll)) && (o(function(t) {
                k.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + P + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || O.push(".#.+[+~]")
            }), o(function(t) {
                var e = W.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
            })), (b.matchesSelector = mt.test(A = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector)) && o(function(t) {
                b.disconnectedMatch = A.call(t, "div"), A.call(t, "[s!='']:x"), D.push("!=", rt)
            }), O = O.length && new RegExp(O.join("|")), D = D.length && new RegExp(D.join("|")), e = mt.test(k.compareDocumentPosition), M = e || mt.test(k.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return H = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === W || t.ownerDocument === N && M(N, t) ? -1 : e === W || e.ownerDocument === N && M(N, e) ? 1 : I ? tt(I, t) - tt(I, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return H = !0, 0;
                var i, n = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    a = [t],
                    l = [e];
                if (!o || !r) return t === W ? -1 : e === W ? 1 : o ? -1 : r ? 1 : I ? tt(I, t) - tt(I, e) : 0;
                if (o === r) return s(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? s(a[n], l[n]) : a[n] === N ? -1 : l[n] === N ? 1 : 0
            }, W) : W
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== W && L(t), i = i.replace(ht, "='$1']"), b.matchesSelector && j && !V[i + " "] && (!D || !D.test(i)) && (!O || !O.test(i))) try {
                var n = A.call(t, i);
                if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {}
            return e(i, W, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== W && L(t), M(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== W && L(t);
            var i = _.attrHandle[e.toLowerCase()],
                n = i && X.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !j) : void 0;
            return void 0 !== n ? n : b.attributes || !j ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                o = 0;
            if (H = !b.detectDuplicates, I = !b.sortStable && t.slice(0), t.sort(U), H) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return I = null, t
        }, C = e.getText = function(t) {
            var e, i = "",
                n = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += C(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[n++];) i += C(e);
            return i
        }, _ = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = $(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, bt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = F[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && F(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var u, h, c, d, p, f, g = r !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            x = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = e; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (d = m, c = d[P] || (d[P] = {}), h = c[d.uniqueID] || (c[d.uniqueID] = {}), u = h[t] || [], p = u[0] === q && u[1], x = p && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || f.pop();)
                                    if (1 === d.nodeType && ++x && d === e) {
                                        h[t] = [q, p, x];
                                        break
                                    }
                            } else if (y && (d = e, c = d[P] || (d[P] = {}), h = c[d.uniqueID] || (c[d.uniqueID] = {}), u = h[t] || [], p = u[0] === q && u[1], x = p), x === !1)
                                for (;
                                    (d = ++p && d && d[g] || (x = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && (c = d[P] || (d[P] = {}), h = c[d.uniqueID] || (c[d.uniqueID] = {}), h[t] = [q, x]), d !== e)););
                            return x -= o, x === n || x % n === 0 && x / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var o, r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[P] ? r(i) : r.length > 1 ? (o = [t, t, "", i], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, o = r(t, i), s = o.length; s--;) n = tt(t, o[s]), t[n] = !(e[n] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        o = E(t.replace(at, "$1"));
                    return o[P] ? n(function(t, e, i, n) {
                        for (var r, s = o(t, null, n, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, n, r) {
                        return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(wt, bt),
                        function(e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, bt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === k
                },
                focus: function(t) {
                    return t === W.activeElement && (!W.hasFocus || W.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return ft.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: u(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) _.pseudos[w] = l(w);
        return c.prototype = _.filters = _.pseudos, _.setFilters = new c, $ = e.tokenize = function(t, i) {
            var n, o, r, s, a, l, u, h = B[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (a = t, l = [], u = _.preFilter; a;) {
                n && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ut.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(at, " ")
                }), a = a.slice(n.length));
                for (s in _.filter) !(o = pt[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }, E = e.compile = function(t, e) {
            var i, n = [],
                o = [],
                r = V[t + " "];
            if (!r) {
                for (e || (e = $(t)), i = e.length; i--;) r = y(e[i]), r[P] ? n.push(r) : o.push(r);
                r = V(t, x(o, n)), r.selector = t
            }
            return r
        }, S = e.select = function(t, e, i, n) {
            var o, r, s, a, l, u = "function" == typeof t && t,
                c = !n && $(t = u.selector || t);
            if (i = i || [], 1 === c.length) {
                if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && b.getById && 9 === e.nodeType && j && _.relative[r[1].type]) {
                    if (e = (_.find.ID(s.matches[0].replace(wt, bt), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !_.relative[a = s.type]);)
                    if ((l = _.find[a]) && (n = l(s.matches[0].replace(wt, bt), yt.test(r[0].type) && h(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = n.length && d(r), !t) return K.apply(i, n), i;
                        break
                    }
            }
            return (u || E(t, c))(n, e, !j, i, !e || yt.test(t) && h(e.parentNode) || e), i
        }, b.sortStable = P.split("").sort(U).join("") === P, b.detectDuplicates = !!H, L(), b.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(W.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    rt.find = ht, rt.expr = ht.selectors, rt.expr[":"] = rt.expr.pseudos, rt.uniqueSort = rt.unique = ht.uniqueSort, rt.text = ht.getText, rt.isXMLDoc = ht.isXML, rt.contains = ht.contains;
    var ct = function(t, e, i) {
            for (var n = [], o = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && rt(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        dt = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        pt = rt.expr.match.needsContext,
        ft = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        gt = /^.[^:#\[\.,]*$/;
    rt.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? rt.find.matchesSelector(n, t) ? [n] : [] : rt.find.matches(t, rt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, rt.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (rt.contains(o[e], this)) return !0
            }));
            for (e = 0; i > e; e++) rt.find(t, o[e], n);
            return n = this.pushStack(i > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && pt.test(t) ? rt(t) : t || [], !1).length
        }
    });
    var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        yt = rt.fn.init = function(t, e, i) {
            var n, o;
            if (!t) return this;
            if (i = i || mt, "string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Y, !0)), ft.test(n[1]) && rt.isPlainObject(e))
                        for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return o = Y.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Y, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
        };
    yt.prototype = rt.fn, mt = rt(Y);
    var xt = /^(?:parents|prev(?:Until|All))/,
        wt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    rt.fn.extend({
        has: function(t) {
            var e = rt(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (rt.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, o = this.length, r = [], s = pt.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? rt.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? J.call(rt(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(rt.uniqueSort(rt.merge(this.get(), rt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), rt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ct(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return ct(t, "parentNode", i)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return ct(t, "nextSibling")
        },
        prevAll: function(t) {
            return ct(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return ct(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return ct(t, "previousSibling", i)
        },
        siblings: function(t) {
            return dt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return dt(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || rt.merge([], t.childNodes)
        }
    }, function(t, e) {
        rt.fn[t] = function(i, n) {
            var o = rt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = rt.filter(n, o)), this.length > 1 && (wt[t] || rt.uniqueSort(o), xt.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var bt = /\S+/g;
    rt.Callbacks = function(t) {
        t = "string" == typeof t ? r(t) : rt.extend({}, t);
        var e, i, n, o, s = [],
            a = [],
            l = -1,
            u = function() {
                for (o = t.once, n = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < s.length;) s[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = s.length, i = !1);
                t.memory || (i = !1), e = !1, o && (s = i ? [] : "")
            },
            h = {
                add: function() {
                    return s && (i && !e && (l = s.length - 1, a.push(i)), function e(i) {
                        rt.each(i, function(i, n) {
                            rt.isFunction(n) ? t.unique && h.has(n) || s.push(n) : n && n.length && "string" !== rt.type(n) && e(n)
                        })
                    }(arguments), i && !e && u()), this
                },
                remove: function() {
                    return rt.each(arguments, function(t, e) {
                        for (var i;
                            (i = rt.inArray(e, s, i)) > -1;) s.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(t) {
                    return t ? rt.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], i || (s = i = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, i) {
                    return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || u()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, rt.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", rt.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return rt.Deferred(function(i) {
                            rt.each(e, function(e, r) {
                                var s = rt.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && rt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? rt.extend(t, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, rt.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                n[r[1]] = s.add, a && s.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), n.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, i, n, o = 0,
                r = G.call(arguments),
                s = r.length,
                a = 1 !== s || t && rt.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : rt.Deferred(),
                u = function(t, i, n) {
                    return function(o) {
                        i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (s > 1)
                for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && rt.isFunction(r[o].promise) ? r[o].promise().progress(u(o, i, e)).done(u(o, n, r)).fail(l.reject) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    });
    var _t;
    rt.fn.ready = function(t) {
        return rt.ready.promise().done(t), this
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --rt.readyWait : rt.isReady) || (rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (_t.resolveWith(Y, [rt]), rt.fn.triggerHandler && (rt(Y).triggerHandler("ready"), rt(Y).off("ready"))))
        }
    }), rt.ready.promise = function(e) {
        return _t || (_t = rt.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? t.setTimeout(rt.ready) : (Y.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), _t.promise(e)
    }, rt.ready.promise();
    var Ct = function(t, e, i, n, o, r, s) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === rt.type(i)) {
                o = !0;
                for (a in i) Ct(t, e, a, i[a], !0, r, s)
            } else if (void 0 !== n && (o = !0, rt.isFunction(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                    return u.call(rt(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : u ? e.call(t) : l ? e(t[0], i) : r
        },
        Tt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(t, e) {
            var i = e || {};
            return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!Tt(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, Tt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, o = this.cache(t);
            if ("string" == typeof e) o[e] = i;
            else
                for (n in e) o[n] = e[n];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, rt.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, o, r = t[this.expando];
            if (void 0 !== r) {
                if (void 0 === e) this.register(t);
                else {
                    rt.isArray(e) ? n = e.concat(e.map(rt.camelCase)) : (o = rt.camelCase(e), e in r ? n = [e, o] : (n = o, n = n in r ? [n] : n.match(bt) || [])), i = n.length;
                    for (; i--;) delete r[n[i]]
                }(void 0 === e || rt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !rt.isEmptyObject(e)
        }
    };
    var $t = new a,
        Et = new a,
        St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        zt = /[A-Z]/g;
    rt.extend({
        hasData: function(t) {
            return Et.hasData(t) || $t.hasData(t)
        },
        data: function(t, e, i) {
            return Et.access(t, e, i)
        },
        removeData: function(t, e) {
            Et.remove(t, e)
        },
        _data: function(t, e, i) {
            return $t.access(t, e, i)
        },
        _removeData: function(t, e) {
            $t.remove(t, e)
        }
    }), rt.fn.extend({
        data: function(t, e) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = Et.get(r), 1 === r.nodeType && !$t.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = rt.camelCase(n.slice(5)), l(r, n, o[n])));
                    $t.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                Et.set(this, t)
            }) : Ct(this, function(e) {
                var i, n;
                if (r && void 0 === e) {
                    if (i = Et.get(r, t) || Et.get(r, t.replace(zt, "-$&").toLowerCase()), void 0 !== i) return i;
                    if (n = rt.camelCase(t), i = Et.get(r, n), void 0 !== i) return i;
                    if (i = l(r, n, void 0), void 0 !== i) return i
                } else n = rt.camelCase(t), this.each(function() {
                    var i = Et.get(this, n);
                    Et.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && Et.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Et.remove(this, t)
            })
        }
    }), rt.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = $t.get(t, e), i && (!n || rt.isArray(i) ? n = $t.access(t, e, rt.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = rt.queue(t, e),
                n = i.length,
                o = i.shift(),
                r = rt._queueHooks(t, e),
                s = function() {
                    rt.dequeue(t, e)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return $t.get(t, i) || $t.access(t, i, {
                empty: rt.Callbacks("once memory").add(function() {
                    $t.remove(t, [e + "queue", i])
                })
            })
        }
    }), rt.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = rt.queue(this, t, e);
                rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                rt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                o = rt.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = $t.get(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var It = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ht = new RegExp("^(?:([+-])=|)(" + It + ")([a-z%]*)$", "i"),
        Lt = ["Top", "Right", "Bottom", "Left"],
        Wt = function(t, e) {
            return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
        },
        kt = /^(?:checkbox|radio)$/i,
        jt = /<([\w:-]+)/,
        Ot = /^$|\/(?:java|ecma)script/i,
        Dt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Dt.optgroup = Dt.option, Dt.tbody = Dt.tfoot = Dt.colgroup = Dt.caption = Dt.thead, Dt.th = Dt.td;
    var At = /<|&#?\w+;/;
    ! function() {
        var t = Y.createDocumentFragment(),
            e = t.appendChild(Y.createElement("div")),
            i = Y.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Mt = /^key/,
        Pt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Nt = /^([^.]*)(?:\.(.+)|)/;
    rt.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var r, s, a, l, u, h, c, d, p, f, g, m = $t.get(t);
            if (m)
                for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = rt.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return "undefined" != typeof rt && rt.event.triggered !== e.type ? rt.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(bt) || [""], u = e.length; u--;) a = Nt.exec(e[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (c = rt.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = rt.event.special[p] || {}, h = rt.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && rt.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, c.setup && c.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(p, s)), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, h) : d.push(h), rt.event.global[p] = !0)
        },
        remove: function(t, e, i, n, o) {
            var r, s, a, l, u, h, c, d, p, f, g, m = $t.hasData(t) && $t.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(bt) || [""], u = e.length; u--;)
                    if (a = Nt.exec(e[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (c = rt.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) h = d[r], !o && g !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(r, 1), h.selector && d.delegateCount--, c.remove && c.remove.call(t, h));
                        s && !d.length && (c.teardown && c.teardown.call(t, f, m.handle) !== !1 || rt.removeEvent(t, p, m.handle), delete l[p])
                    } else
                        for (p in l) rt.event.remove(t, p + e[u], i, n, !0);
                rt.isEmptyObject(l) && $t.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = rt.event.fix(t);
            var e, i, n, o, r, s = [],
                a = G.call(arguments),
                l = ($t.get(this, "events") || {})[t.type] || [],
                u = rt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = rt.event.handlers.call(this, t, l), e = 0;
                    (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((rt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, o, r, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (n = [], i = 0; a > i; i++) r = e[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? rt(o, this).index(l) > -1 : rt.find(o, this, null, [l]).length), n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, o, r = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Y, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[rt.expando]) return t;
            var e, i, n, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Pt.test(o) ? this.mouseHooks : Mt.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = Y), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && rt.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return rt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, rt.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, rt.Event = function(t, e) {
        return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : f) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
    }, rt.Event.prototype = {
        constructor: rt.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = p, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = p, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = p, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        rt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return o && (o === n || rt.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), rt.fn.extend({
        on: function(t, e, i, n) {
            return m(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return m(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = f), this.each(function() {
                rt.event.remove(this, t, i, e)
            })
        }
    });
    var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Rt = /<script|<style|<link/i,
        Ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Bt = /^true\/(.*)/,
        Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    rt.extend({
        htmlPrefilter: function(t) {
            return t.replace(qt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, o, r, s, a = t.cloneNode(!0),
                l = rt.contains(t.ownerDocument, t);
            if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                for (s = h(a), r = h(t), n = 0, o = r.length; o > n; n++) b(r[n], s[n]);
            if (e)
                if (i)
                    for (r = r || h(t), s = s || h(a), n = 0, o = r.length; o > n; n++) w(r[n], s[n]);
                else w(t, a);
            return s = h(a, "script"), s.length > 0 && c(s, !l && h(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, i, n, o = rt.event.special, r = 0; void 0 !== (i = t[r]); r++)
                if (Tt(i)) {
                    if (e = i[$t.expando]) {
                        if (e.events)
                            for (n in e.events) o[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, e.handle);
                        i[$t.expando] = void 0
                    }
                    i[Et.expando] && (i[Et.expando] = void 0)
                }
        }
    }), rt.fn.extend({
        domManip: _,
        detach: function(t) {
            return C(this, t, !0)
        },
        remove: function(t) {
            return C(this, t)
        },
        text: function(t) {
            return Ct(this, function(t) {
                return void 0 === t ? rt.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return _(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return _(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return _(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return _(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (rt.cleanData(h(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return rt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ct(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Rt.test(t) && !Dt[(jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = rt.htmlPrefilter(t);
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (rt.cleanData(h(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return _(this, arguments, function(e) {
                var i = this.parentNode;
                rt.inArray(this, t) < 0 && (rt.cleanData(h(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        rt.fn[t] = function(t) {
            for (var i, n = [], o = rt(t), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), rt(o[s])[e](i), K.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Ut, Qt = {
            HTML: "block",
            BODY: "block"
        },
        Xt = /^margin/,
        Yt = new RegExp("^(" + It + ")(?!px)[a-z%]+$", "i"),
        Gt = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        },
        Zt = function(t, e, i, n) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            o = i.apply(t, n || []);
            for (r in e) t.style[r] = s[r];
            return o
        },
        Kt = Y.documentElement;
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(s);
            var e = t.getComputedStyle(a);
            i = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Kt.removeChild(s)
        }
        var i, n, o, r, s = Y.createElement("div"),
            a = Y.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), rt.extend(nt, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            pixelMarginRight: function() {
                return null == n && e(), o
            },
            reliableMarginLeft: function() {
                return null == n && e(), r
            },
            reliableMarginRight: function() {
                var e, i = a.appendChild(Y.createElement("div"));
                return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Kt.appendChild(s), e = !parseFloat(t.getComputedStyle(i).marginRight), Kt.removeChild(s), a.removeChild(i), e
            }
        }))
    }();
    var Jt = /^(none|table(?!-c[ea]).+)/,
        te = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ee = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ie = ["Webkit", "O", "Moz", "ms"],
        ne = Y.createElement("div").style;
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = E(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = rt.camelCase(e),
                    l = t.style;
                return e = rt.cssProps[a] || (rt.cssProps[a] = z(a) || a), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : (r = typeof i, "string" === r && (o = Ht.exec(i)) && o[1] && (i = u(t, e, o), r = "number"), void(null != i && i === i && ("number" === r && (i += o && o[3] || (rt.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var o, r, s, a = rt.camelCase(e);
            return e = rt.cssProps[a] || (rt.cssProps[a] = z(a) || a), s = rt.cssHooks[e] || rt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = E(t, e, n)), "normal" === o && e in ee && (o = ee[e]), "" === i || i ? (r = parseFloat(o), i === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), rt.each(["height", "width"], function(t, e) {
        rt.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Jt.test(rt.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function() {
                    return L(t, e, n)
                }) : L(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var o, r = n && Gt(t),
                    s = n && H(t, e, n, "border-box" === rt.css(t, "boxSizing", !1, r), r);
                return s && (o = Ht.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = rt.css(t, e)), I(t, i, s)
            }
        }
    }), rt.cssHooks.marginLeft = S(nt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), rt.cssHooks.marginRight = S(nt.reliableMarginRight, function(t, e) {
        return e ? Zt(t, {
            display: "inline-block"
        }, E, [t, "marginRight"]) : void 0
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        rt.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + Lt[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, Xt.test(t) || (rt.cssHooks[t + e].set = I)
    }), rt.fn.extend({
        css: function(t, e) {
            return Ct(this, function(t, e, i) {
                var n, o, r = {},
                    s = 0;
                if (rt.isArray(e)) {
                    for (n = Gt(t), o = e.length; o > s; s++) r[e[s]] = rt.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return W(this, !0)
        },
        hide: function() {
            return W(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Wt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = k, k.prototype = {
        constructor: k,
        init: function(t, e, i, n, o, r) {
            this.elem = t, this.prop = i, this.easing = o || rt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (rt.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = k.propHooks[this.prop];
            return t && t.get ? t.get(this) : k.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = k.propHooks[this.prop];
            return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : k.propHooks._default.set(this), this
        }
    }, k.prototype.init.prototype = k.prototype, k.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[rt.cssProps[t.prop]] && !rt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : rt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, rt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, rt.fx = k.prototype.init, rt.fx.step = {};
    var oe, re, se = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;
    rt.Animation = rt.extend(P, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return u(i.elem, t, Ht.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(bt);
                for (var i, n = 0, o = t.length; o > n; n++) i = t[n], P.tweeners[i] = P.tweeners[i] || [], P.tweeners[i].unshift(e)
            },
            prefilters: [A],
            prefilter: function(t, e) {
                e ? P.prefilters.unshift(t) : P.prefilters.push(t)
            }
        }), rt.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? rt.extend({}, t) : {
                complete: i || !i && e || rt.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !rt.isFunction(e) && e
            };
            return n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
            }, n
        }, rt.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Wt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = rt.isEmptyObject(t),
                    r = rt.speed(e, i, n),
                    s = function() {
                        var e = P(this, rt.extend({}, t), r);
                        (o || $t.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = rt.timers,
                        s = $t.get(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && ae.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                    !e && i || rt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = $t.get(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        r = rt.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, rt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), rt.each(["toggle", "show", "hide"], function(t, e) {
            var i = rt.fn[e];
            rt.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, !0), t, n, o)
            }
        }), rt.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            rt.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), rt.timers = [], rt.fx.tick = function() {
            var t, e = 0,
                i = rt.timers;
            for (oe = rt.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || rt.fx.stop(), oe = void 0
        }, rt.fx.timer = function(t) {
            rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
        }, rt.fx.interval = 13, rt.fx.start = function() {
            re || (re = t.setInterval(rt.fx.tick, rt.fx.interval))
        }, rt.fx.stop = function() {
            t.clearInterval(re), re = null
        }, rt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, rt.fn.delay = function(e, i) {
            return e = rt.fx ? rt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                var o = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(o)
                }
            })
        },
        function() {
            var t = Y.createElement("input"),
                e = Y.createElement("select"),
                i = e.appendChild(Y.createElement("option"));
            t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = Y.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
        }();
    var le, ue = rt.expr.attrHandle;
    rt.fn.extend({
        attr: function(t, e) {
            return Ct(this, rt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                rt.removeAttr(this, t)
            })
        }
    }), rt.extend({
        attr: function(t, e, i) {
            var n, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? rt.prop(t, e, i) : (1 === r && rt.isXMLDoc(t) || (e = e.toLowerCase(), o = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? le : void 0)), void 0 !== i ? null === i ? void rt.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = rt.find.attr(t, e), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, o = 0,
                r = e && e.match(bt);
            if (r && 1 === t.nodeType)
                for (; i = r[o++];) n = rt.propFix[i] || i, rt.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        }
    }), le = {
        set: function(t, e, i) {
            return e === !1 ? rt.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ue[e] || rt.find.attr;
        ue[e] = function(t, e, n) {
            var o, r;
            return n || (r = ue[e], ue[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ue[e] = r), o
        }
    });
    var he = /^(?:input|select|textarea|button)$/i,
        ce = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(t, e) {
            return Ct(this, rt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[rt.propFix[t] || t]
            })
        }
    }), rt.extend({
        prop: function(t, e, i) {
            var n, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && rt.isXMLDoc(t) || (e = rt.propFix[e] || e, o = rt.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = rt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : he.test(t.nodeName) || ce.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), nt.optSelected || (rt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        rt.propFix[this.toLowerCase()] = this
    });
    var de = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(t) {
            var e, i, n, o, r, s, a, l = 0;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).addClass(t.call(this, e, N(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(bt) || []; i = this[l++];)
                    if (o = N(i), n = 1 === i.nodeType && (" " + o + " ").replace(de, " ")) {
                        for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = rt.trim(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, r, s, a, l = 0;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).removeClass(t.call(this, e, N(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(bt) || []; i = this[l++];)
                    if (o = N(i), n = 1 === i.nodeType && (" " + o + " ").replace(de, " ")) {
                        for (s = 0; r = e[s++];)
                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                        a = rt.trim(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function(i) {
                rt(this).toggleClass(t.call(this, i, N(this), e), e)
            }) : this.each(function() {
                var e, n, o, r;
                if ("string" === i)
                    for (n = 0, o = rt(this), r = t.match(bt) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== i || (e = N(this), e && $t.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : $t.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + N(i) + " ").replace(de, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var pe = /\r/g,
        fe = /[\x20\t\r\n\f]+/g;
    rt.fn.extend({
        val: function(t) {
            var e, i, n, o = this[0];
            return arguments.length ? (n = rt.isFunction(t), this.each(function(i) {
                var o;
                1 === this.nodeType && (o = n ? t.call(this, i, rt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : rt.isArray(o) && (o = rt.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = rt.valHooks[o.type] || rt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(pe, "") : null == i ? "" : i)) : void 0
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = rt.find.attr(t, "value");
                    return null != e ? e : rt.trim(rt.text(t)).replace(fe, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (i = n[l], (i.selected || l === o) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !rt.nodeName(i.parentNode, "optgroup"))) {
                            if (e = rt(i).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, r = rt.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = rt.inArray(rt.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = {
            set: function(t, e) {
                return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) > -1 : void 0
            }
        }, nt.checkOn || (rt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ge = /^(?:focusinfocus|focusoutblur)$/;
    rt.extend(rt.event, {
        trigger: function(e, i, n, o) {
            var r, s, a, l, u, h, c, d = [n || Y],
                p = it.call(e, "type") ? e.type : e,
                f = it.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || Y, 3 !== n.nodeType && 8 !== n.nodeType && !ge.test(p + rt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[rt.expando] ? e : new rt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : rt.makeArray(i, [e]), c = rt.event.special[p] || {}, o || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!o && !c.noBubble && !rt.isWindow(n)) {
                    for (l = c.delegateType || p, ge.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (n.ownerDocument || Y) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0;
                    (s = d[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : c.bindType || p, h = ($t.get(s, "events") || {})[e.type] && $t.get(s, "handle"), h && h.apply(s, i), h = u && s[u], h && h.apply && Tt(s) && (e.result = h.apply(s, i), e.result === !1 && e.preventDefault());
                return e.type = p, o || e.isDefaultPrevented() || c._default && c._default.apply(d.pop(), i) !== !1 || !Tt(n) || u && rt.isFunction(n[p]) && !rt.isWindow(n) && (a = n[u], a && (n[u] = null), rt.event.triggered = p, n[p](), rt.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = rt.extend(new rt.Event, i, {
                type: t,
                isSimulated: !0
            });
            rt.event.trigger(n, null, e)
        }
    }), rt.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                rt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? rt.event.trigger(t, e, i, !0) : void 0
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        rt.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), rt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), nt.focusin = "onfocusin" in t, nt.focusin || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            rt.event.simulate(e, t.target, rt.event.fix(t))
        };
        rt.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = $t.access(n, e);
                o || n.addEventListener(t, i, !0), $t.access(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = $t.access(n, e) - 1;
                o ? $t.access(n, e, o) : (n.removeEventListener(t, i, !0), $t.remove(n, e))
            }
        }
    });
    var me = t.location,
        ve = rt.now(),
        ye = /\?/;
    rt.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, rt.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), i
    };
    var xe = /#.*$/,
        we = /([?&])_=[^&]*/,
        be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ce = /^(?:GET|HEAD)$/,
        Te = /^\/\//,
        $e = {},
        Ee = {},
        Se = "*/".concat("*"),
        ze = Y.createElement("a");
    ze.href = me.href, rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: me.href,
            type: "GET",
            isLocal: _e.test(me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Se,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? F(F(t, rt.ajaxSettings), e) : F(rt.ajaxSettings, t)
        },
        ajaxPrefilter: q($e),
        ajaxTransport: q(Ee),
        ajax: function(e, i) {
            function n(e, i, n, a) {
                var u, c, y, x, b, C = i;
                2 !== w && (w = 2, l && t.clearTimeout(l), o = void 0, s = a || "", _.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (x = B(d, _, n)), x = V(d, x, _, u), u ? (d.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (rt.lastModified[r] = b), b = _.getResponseHeader("etag"), b && (rt.etag[r] = b)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, c = x.data, y = x.error, u = !y)) : (y = C, !e && C || (C = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (i || C) + "", u ? g.resolveWith(p, [c, C, _]) : g.rejectWith(p, [_, C, y]), _.statusCode(v), v = void 0, h && f.trigger(u ? "ajaxSuccess" : "ajaxError", [_, d, u ? c : y]), m.fireWith(p, [_, C]), h && (f.trigger("ajaxComplete", [_, d]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var o, r, s, a, l, u, h, c, d = rt.ajaxSetup({}, i),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? rt(p) : rt.event,
                g = rt.Deferred(),
                m = rt.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                x = {},
                w = 0,
                b = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; e = be.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return w || (t = x[i] = x[i] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t) v[e] = [v[e], t[e]];
                            else _.always(t[_.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return o && o.abort(e), n(0, e), this
                    }
                };
            if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || me.href) + "").replace(xe, "").replace(Te, me.protocol + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain) {
                u = Y.createElement("a");
                try {
                    u.href = d.url, u.href = u.href, d.crossDomain = ze.protocol + "//" + ze.host != u.protocol + "//" + u.host
                } catch (t) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), R($e, d, i, _), 2 === w) return _;
            h = rt.event && d.global, h && 0 === rt.active++ && rt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ce.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ye.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = we.test(r) ? r.replace(we, "$1_=" + ve++) : r + (ye.test(r) ? "&" : "?") + "_=" + ve++)), d.ifModified && (rt.lastModified[r] && _.setRequestHeader("If-Modified-Since", rt.lastModified[r]), rt.etag[r] && _.setRequestHeader("If-None-Match", rt.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Se + "; q=0.01" : "") : d.accepts["*"]);
            for (c in d.headers) _.setRequestHeader(c, d.headers[c]);
            if (d.beforeSend && (d.beforeSend.call(p, _, d) === !1 || 2 === w)) return _.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[c](d[c]);
            if (o = R(Ee, d, i, _)) {
                if (_.readyState = 1, h && f.trigger("ajaxSend", [_, d]), 2 === w) return _;
                d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, o.send(y, n)
                } catch (t) {
                    if (!(2 > w)) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, i) {
            return rt.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return rt.get(t, void 0, e, "script")
        }
    }), rt.each(["get", "post"], function(t, e) {
        rt[e] = function(t, i, n, o) {
            return rt.isFunction(i) && (o = o || n, n = i, i = void 0), rt.ajax(rt.extend({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            }, rt.isPlainObject(t) && t))
        }
    }), rt._evalUrl = function(t) {
        return rt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, rt.fn.extend({
        wrapAll: function(t) {
            var e;
            return rt.isFunction(t) ? this.each(function(e) {
                rt(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = rt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return rt.isFunction(t) ? this.each(function(e) {
                rt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = rt(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = rt.isFunction(t);
            return this.each(function(i) {
                rt(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function(t) {
        return !rt.expr.filters.visible(t)
    }, rt.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Ie = /%20/g,
        He = /\[\]$/,
        Le = /\r?\n/g,
        We = /^(?:submit|button|image|reset|file)$/i,
        ke = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(t, e) {
        var i, n = [],
            o = function(t, e) {
                e = rt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (i in t) U(i, t[i], e, o);
        return n.join("&").replace(Ie, "+")
    }, rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = rt.prop(this, "elements");
                return t ? rt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !rt(this).is(":disabled") && ke.test(this.nodeName) && !We.test(t) && (this.checked || !kt.test(t))
            }).map(function(t, e) {
                var i = rt(this).val();
                return null == i ? null : rt.isArray(i) ? rt.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Le, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Le, "\r\n")
                }
            }).get()
        }
    }), rt.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var je = {
            0: 200,
            1223: 204
        },
        Oe = rt.ajaxSettings.xhr();
    nt.cors = !!Oe && "withCredentials" in Oe, nt.ajax = Oe = !!Oe, rt.ajaxTransport(function(e) {
        var i, n;
        return nt.cors || Oe && !e.crossDomain ? {
            send: function(o, r) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                i = function(t) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(je[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return rt.globalEval(t), t
            }
        }
    }), rt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), rt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, o) {
                    e = rt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), Y.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var De = [],
        Ae = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = De.pop() || rt.expando + "_" + ve++;
            return this[t] = !0, t
        }
    }), rt.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o, r, s, a = e.jsonp !== !1 && (Ae.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ae.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ae, "$1" + o) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return s || rt.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments
        }, n.always(function() {
            void 0 === r ? rt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, De.push(o)), s && rt.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), rt.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Y;
        var n = ft.exec(t),
            o = !i && [];
        return n ? [e.createElement(n[1])] : (n = d([t], e, o), o && o.length && rt(o).remove(), rt.merge([], n.childNodes))
    };
    var Me = rt.fn.load;
    rt.fn.load = function(t, e, i) {
        if ("string" != typeof t && Me) return Me.apply(this, arguments);
        var n, o, r, s = this,
            a = t.indexOf(" ");
        return a > -1 && (n = rt.trim(t.slice(a)), t = t.slice(0, a)), rt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && rt.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            s.each(function() {
                i.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        rt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), rt.expr.filters.animated = function(t) {
        return rt.grep(rt.timers, function(e) {
            return t === e.elem
        }).length
    }, rt.offset = {
        setOffset: function(t, e, i) {
            var n, o, r, s, a, l, u, h = rt.css(t, "position"),
                c = rt(t),
                d = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), r = rt.css(t, "top"), l = rt.css(t, "left"), u = ("absolute" === h || "fixed" === h) && (r + l).indexOf("auto") > -1, u ? (n = c.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, i, rt.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : c.css(d)
        }
    }, rt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                rt.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = n && n.ownerDocument;
            return r ? (e = r.documentElement, rt.contains(e, n) ? (o = n.getBoundingClientRect(), i = Q(r), {
                top: o.top + i.pageYOffset - e.clientTop,
                left: o.left + i.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - rt.css(i, "marginTop", !0),
                    left: e.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === rt.css(t, "position");) t = t.offsetParent;
                return t || Kt
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        rt.fn[t] = function(n) {
            return Ct(this, function(t, n, o) {
                var r = Q(t);
                return void 0 === o ? r ? r[e] : t[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o)
            }, t, n, arguments.length)
        }
    }), rt.each(["top", "left"], function(t, e) {
        rt.cssHooks[e] = S(nt.pixelPosition, function(t, i) {
            return i ? (i = E(t, e), Yt.test(i) ? rt(t).position()[e] + "px" : i) : void 0
        })
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        rt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            rt.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    s = i || (n === !0 || o === !0 ? "margin" : "border");
                return Ct(this, function(e, i, n) {
                    var o;
                    return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? rt.css(e, i, s) : rt.style(e, i, n, s)
                }, e, r ? n : void 0, r, null)
            }
        })
    }), rt.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        size: function() {
            return this.length
        }
    }), rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return rt
    });
    var Pe = t.jQuery,
        Ne = t.$;
    return rt.noConflict = function(e) {
        return t.$ === rt && (t.$ = Ne), e && t.jQuery === rt && (t.jQuery = Pe), rt
    }, e || (t.jQuery = t.$ = rt), rt
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, r, a) {
        function l(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, l) {
                var u = a.data(l, i);
                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var h = u[e];
                if (!h || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var c = h.apply(u, n);
                o = void 0 === o ? c : o
            }), void 0 !== o ? o : t
        }

        function u(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return l(this, t, e)
            }
            return u(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < u; e++) {
            var i = l[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!h) {
            h = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var h = a.isBorderBox = "border-box" == r.boxSizing, c = 0; c < u; c++) {
                var d = l[c],
                    p = r[d],
                    f = parseFloat(p);
                a[d] = isNaN(f) ? 0 : f
            }
            var g = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                x = a.borderLeftWidth + a.borderRightWidth,
                w = a.borderTopWidth + a.borderBottomWidth,
                b = h && s,
                _ = t(r.width);
            _ !== !1 && (a.width = _ + (b ? 0 : g + x));
            var C = t(r.height);
            return C !== !1 && (a.height = C + (b ? 0 : m + w)), a.innerWidth = a.width - (g + x), a.innerHeight = a.height - (m + w), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = l.length,
        h = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var r = i.toDashed(o),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(l)),
                h = s + "-options",
                c = t.jQuery;
            u.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(h);
                try {
                    i = r && JSON.parse(r)
                } catch (e) {
                    return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                c && c.data(t, o, a)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        h = n.prototype = Object.create(t.prototype);
    h.constructor = n, h._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, h.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, h.getSize = function() {
        this.size = e(this.element)
    }, h.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i]
        }
    }, h.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = this.layout.size,
            s = n.indexOf("%") != -1 ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
            a = o.indexOf("%") != -1 ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
    }, h.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var l = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            h = n ? "bottom" : "top",
            c = this.position.y + t[l];
        e[u] = this.getYValue(c), e[h] = "", this.css(e), this.emitEvent("layout", [this])
    }, h.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, h.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, h._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            r = parseInt(e, 10),
            s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            l = e - n,
            u = {};
        u.transform = this.getTranslate(a, l), this.transition({
            to: u,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, h.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, h.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, h.moveTo = h._transitionTo, h.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, h._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, h.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var c = "opacity," + o(a);
    h.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: c,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(l, this, !1)
        }
    }, h.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, h.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var d = {
        "-webkit-transform": "transform"
    };
    h.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = d[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, h.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, h._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var p = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return h.removeTransitionStyles = function() {
        this.css(p)
    }, h.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, h.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, h.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, h.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, h.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, h.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, h.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, h.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, h.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++c;
        this.element.outlayerGUID = o, d[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = f[n] || 1;
        return i * o
    }
    var l = t.console,
        u = t.jQuery,
        h = function() {},
        c = 0,
        d = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var p = r.prototype;
    n.extend(p, e.prototype), p.option = function(t) {
        n.extend(this.options, t)
    }, p._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, p._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, p.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, p._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);
            n.push(s)
        }
        return n
    }, p._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, p.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, p.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, p._init = p.layout, p._resetLayout = function() {
        this.getSize()
    }, p.getSize = function() {
        this.size = i(this.element)
    }, p._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, p.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, p._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, p._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, p._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, p._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, p.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, p._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, p._postLayout = function() {
        this.resizeContainer()
    }, p.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, p._getContainerSize = h, p._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, p._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s == r && i()
        }
        var o = this,
            r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), u)
            if (this.$element = this.$element || u(this.element), e) {
                var o = u.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, p.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, p.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, p.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, p.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, p._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)
    }, p._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, p._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, p._manageStamp = h, p._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom
            };
        return r
    }, p.handleEvent = n.handleEvent, p.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, p.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, p.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), p.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, p.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, p.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, p.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, p.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, p.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, p.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, p.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, p.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, p.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, p.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, p.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, p.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete d[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && d[e]
    }, r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
    };
    var f = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var o = i.destroy;
    return i.destroy = function() {
        o.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype,
        o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return o.forEach(function(t) {
        n[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function o() {
            i.apply(this, arguments)
        }
        return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n,
            a = s && s < 1 ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, i.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
                x: this.columnWidth * s,
                y: r
            }, l = r + t.size.outerHeight, u = this.cols + 1 - o.length, h = 0; h < u; h++) this.colYs[s + h] = l;
        return a
    }, i.prototype._getColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(s / this.columnWidth);
        l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
        for (var u = this._getOption("originTop"), h = (u ? n.top : n.bottom) + i.outerHeight, c = a; c <= l; c++) this.colYs[c] = Math.max(h, this.colYs[c])
    }, i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        n = i.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var r in e.prototype) o[r] || (n[r] = e.prototype[r]);
    var s = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this)
    };
    var a = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, r, s, a) {
        return e(t, i, n, o, r, s, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, r, s) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o],
                    s = i.sortData[r],
                    a = n.sortData[r];
                if (s > a || s < a) {
                    var l = void 0 !== e[r] ? e[r] : e,
                        u = l ? 1 : -1;
                    return (s > a ? 1 : -1) * u
                }
            }
            return 0
        }
    }
    var l = t.jQuery,
        u = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        h = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    h.Item = r, h.LayoutMode = s;
    var c = h.prototype;
    c._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in s.modes) this._initLayoutMode(t)
    }, c.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, c._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, c._initLayoutMode = function(t) {
        var e = s.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, c.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, c._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, c.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, c._init = c.arrange, c._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, c._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, c._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, c._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
            var a = t[s];
            if (!a.isIgnored) {
                var l = r(a);
                l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }, c._getFilterTest = function(t) {
        return l && this.options.isJQueryFiltering ? function(e) {
            return l(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return n(e.element, t)
        }
    }, c.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, c._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = d(i)
        }
    }, c._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var d = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = u(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                r = o && o[1],
                s = e(r, n),
                a = h.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(s(t))
            } : function(t) {
                return t && s(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    h.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, c._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory),
                i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, c._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, c._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, c._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, c._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, c._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, c.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, c.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, c._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, c.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var p = c.remove;
    return c.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        p.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
            var r = e[n];
            o.removeFrom(this.filteredItems, r)
        }
    }, c.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, c._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, c.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, h
}),
function(t, e, i, n) {
    function o(e, i) {
        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(o.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Type = {
        Event: "event",
        State: "state"
    }, o.Plugins = {}, o.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                o = {
                    width: "auto",
                    "margin-left": n ? e : "",
                    "margin-right": n ? "" : e
                };
            !i && this.$stage.children().css(o), t.css = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                o = !this.settings.autoWidth,
                r = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, r[n] = o ? e * i : this._items[n].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                n = this.settings,
                o = Math.max(2 * n.items, 4),
                r = 2 * Math.ceil(i.length / 2),
                s = n.loop && i.length ? n.rewind ? o : Math.max(o, r) : 0,
                a = "",
                l = "";
            for (s /= 2; s--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage);
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, r = []; ++i < e;) n = r[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, r.push(n + o * t);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                r = 2 * this.settings.stagePadding,
                s = this.coordinates(this.current()) + r,
                a = s + this.width() * o,
                l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + r * o, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], o.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, i, o;
            e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && o <= 0 && this.preloadAutoWidthImages(e)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            o = null;
        i ? (t.each(i, function(t) {
            t <= e && t > n && (n = Number(t))
        }), o = t.extend({}, this.options, i[n]), "function" == typeof o.stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, o.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, o.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), o = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function(t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, o.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function(e) {
        var n = null;
        3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
            x: n[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        }) : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, o.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            n = null,
            o = this.difference(this._drag.pointer, this.pointer(t)),
            r = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + n), i + n)), this._drag.stage.current = r, this.animate(r.x))
    }, o.prototype.onDragEnd = function(e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
            o = this._drag.stage.current,
            r = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function(e, i) {
        var n = -1,
            o = 30,
            r = this.width(),
            s = this.coordinates();
        return this.settings.freeDrag || t.each(s, t.proxy(function(t, a) {
            return "left" === i && e > a - o && e < a + o ? n = t : "right" === i && e > a - r - o && e < a - r + o ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", s[t + 1] || a - r) && (n = "left" === i ? t + 1 : t), n === -1
        }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (n = e = this.maximum())), n
    }, o.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, o.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, o.prototype.current = function(t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, o.prototype.reset = function(t) {
        t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function(t, e) {
        var i = this._items.length,
            o = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + o) && (t = ((t - o / 2) % i + i) % i + o / 2), t
    }, o.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function(t) {
        var e, i, n, o = this.settings,
            r = this._coordinates.length;
        if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
            for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && (i += this._items[e].width() + this.settings.margin, !(i > n)););
            r = e + 1
        } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (r -= this._clones.length / 2), Math.max(r, 0)
    }, o.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function(t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function(t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            o = i + this._items.length,
            r = function(t) {
                return t % 2 === 0 ? o + t / 2 : i - (t + 1) / 2
            };
        return e === n ? t.map(this._clones, function(t, e) {
            return r(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? r(i) : null
        })
    }, o.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed
    }, o.prototype.coordinates = function(e) {
        var i, o = 1,
            r = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, r = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[r] || 0)) / 2 * o) : i = this._coordinates[r] || 0, i = Math.ceil(i))
    }, o.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function(t, e) {
        var i = this.current(),
            n = null,
            o = t - this.relative(i),
            r = (o > 0) - (o < 0),
            s = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += r * -1 * s), t = i + o, n = ((t - a) % s + s) % s + a, n !== t && n - o <= l && n - o > 0 && (i = n - o, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, o.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.onTransitionEnd = function(t) {
        return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
    }, o.prototype.viewport = function() {
        var n;
        if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) n = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            n = i.documentElement.clientWidth
        }
        return n
    }, o.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function(e, i) {
        var o = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, o.prototype.remove = function(t) {
        t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, o.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var n in this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : t < i;
            case ">":
                return n ? t < i : t > i;
            case ">=":
                return n ? t <= i : t >= i;
            case "<=":
                return n ? t >= i : t <= i
        }
    }, o.prototype.on = function(t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function(t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function(e, i, n, r, s) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = t.camelCase(t.grep(["on", e, n], function(t) {
                return t
            }).join("-").toLowerCase()),
            u = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(u)
        }), this.register({
            type: o.Type.Event,
            name: e
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
    }, o.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, o.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, o.prototype.register = function(e) {
        if (e.type === o.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !i || !i.apply || t.namespace && t.namespace.indexOf("owl") !== -1 ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, o.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, o.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, o.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = t(this),
                r = n.data("owl.carousel");
            r || (r = new o(this, "object" == typeof e && e), n.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                r.register({
                    type: o.Type.Event,
                    name: i
                }), r.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, r))
            })), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, i)
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, o.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, o = i.center && Math.ceil(i.items / 2) || i.items, r = i.center && o * -1 || 0, s = (e.property && e.property.value !== n ? e.property.value : this._core.current()) + r, a = this._core.clones().length, l = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); r++ < o;) this.load(a / 2 + this._core.relative(s)), a && t.each(this._core.clones(this._core.relative(s)), l), s++
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        lazyLoad: !1
    }, o.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
            o = n && n.find(".owl-lazy");
        !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
            var o, r = t(n),
                s = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
            this._core.trigger("load", {
                element: r,
                url: s
            }, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy(function() {
                r.css("opacity", 1), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }, this)).attr("src", s) : (o = new Image, o.onload = t.proxy(function() {
                r.css({
                    "background-image": "url(" + s + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }, this), o.src = s)
        }, this)), this._loaded.push(n.get(0)))
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, o.prototype.update = function() {
        var e = this._core._current,
            i = e + this._core.settings.items,
            n = this._core.$stage.children().toArray().slice(e, i),
            o = [],
            r = 0;
        t.each(n, function(e, i) {
            o.push(t(i).height())
        }), r = Math.max.apply(null, o), this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    o.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, o.prototype.fetch = function(t, e) {
        var i = function() {
                return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            r = t.attr("data-height") || this._core.settings.videoHeight,
            s = t.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[s] = {
            type: i,
            id: n,
            width: o,
            height: r
        }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
    }, o.prototype.thumbnail = function(e, i) {
        var n, o, r, s = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            l = "src",
            u = "",
            h = this._core.settings,
            c = function(t) {
                o = '<div class="owl-video-play-icon"></div>', n = h.lazyLoad ? '<div class="owl-video-tn ' + u + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o)
            };
        return e.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), a.length ? (c(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(r)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                r = t[0].thumbnail_large, c(r)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                r = t.framegrab_url, c(r)
            }
        }))
    }, o.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function(e) {
        var i, n = t(e.target),
            o = n.closest("." + this._core.settings.itemClass),
            r = this._videos[o.attr("data-video")],
            s = r.width || "100%",
            a = r.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), o = this._core.items(this._core.relative(o.index())), this._core.reset(o.index()), "youtube" === r.type ? i = '<iframe width="' + s + '" height="' + a + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type ? i = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + s + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === r.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(o.find(".owl-video")), this._playing = o.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(s)), r && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    }, o.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype.play = function(t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, o.prototype._getNextTimeout = function(n, o) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
        }, this), n || this._core.settings.autoplayTimeout)
    }, o.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, o.prototype.stop = function() {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, o.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, o.prototype.destroy = function() {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var o = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, o.prototype.initialize = function() {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
            var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function() {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, o.prototype.update = function() {
        var t, e, i, n = this._core.clones().length / 2,
            o = n + this._core.items().length,
            r = this._core.maximum(!0),
            s = this._core.settings,
            a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = n, e = 0, i = 0; t < o; t++) {
                if (e >= a || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(r, t - n),
                            end: t - n + a - 1
                        }), Math.min(r, t - n) === r) break;
                    e = 0, ++i
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, o.prototype.draw = function() {
        var e, i = this._core.settings,
            n = this._core.items().length <= i.items,
            o = this._core.relative(this._core.current()),
            r = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !r && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, o.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, o.prototype.getPosition = function(e) {
        var i, n, o = this._core.settings;
        return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, o.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, o.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, o.prototype.to = function(e, i, n) {
        var o;
        !n && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var o = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        o = t.map(this._hashes, function(t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!o || e.location.hash.slice(1) === o) return;
                    e.location.hash = o
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
                o = this._core.$stage.children(),
                r = this._hashes[i] && o.index(this._hashes[i]);
            r !== n && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
        }, this))
    };
    o.Defaults = {
        URLhashListener: !1
    }, o.prototype.destroy = function() {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    function o(e, i) {
        var o = !1,
            r = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(r + " ") + r).split(" "), function(t, e) {
            if (s[e] !== n) return o = !i || e, !1
        }), o
    }

    function r(t) {
        return o(t, !0)
    }
    var s = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        u = {
            csstransforms: function() {
                return !!o("transform")
            },
            csstransforms3d: function() {
                return !!o("perspective")
            },
            csstransitions: function() {
                return !!o("transition")
            },
            cssanimations: function() {
                return !!o("animation")
            }
        };
    u.csstransitions() && (t.support.transition = new String(r("transition")), t.support.transition.end = l.transition.end[t.support.transition]), u.cssanimations() && (t.support.animation = new String(r("animation")), t.support.animation.end = l.animation.end[t.support.animation]), u.csstransforms() && (t.support.transform = new String(r("transform")), t.support.transform3d = u.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function e(t, e) {
        return t.toFixed(e.decimals)
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, this.dataOptions(), n), this.init()
    };
    i.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: e,
        onUpdate: null,
        onComplete: null
    }, i.prototype.init = function() {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, i.prototype.dataOptions = function() {
        var t = {
                from: this.$element.data("from"),
                to: this.$element.data("to"),
                speed: this.$element.data("speed"),
                refreshInterval: this.$element.data("refresh-interval"),
                decimals: this.$element.data("decimals")
            },
            e = Object.keys(t);
        for (var i in e) {
            var n = e[i];
            "undefined" == typeof t[n] && delete t[n]
        }
        return t
    }, i.prototype.update = function() {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, i.prototype.render = function() {
        var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t)
    }, i.prototype.restart = function() {
        this.stop(), this.init(), this.start()
    }, i.prototype.start = function() {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, i.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    }, i.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    }, t.fn.countTo = function(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("countTo"),
                r = !o || "object" == typeof e,
                s = "object" == typeof e ? e : {},
                a = "string" == typeof e ? e : "start";
            r && (o && o.stop(), n.data("countTo", o = new i(this, s))), o[a].call(o)
        })
    }
}), ! function(t) {
    t.fn.disappear = function(e, i) {
        var n = t.extend({
            data: void 0
        }, i);
        this.each(function() {
            var i = t(this);
            return i.bind("disappear", e, n.data), e ? void 0 : void i.trigger("disappear", n.data)
        })
    }, t.fn.appear = function(e, i) {
        var n = t.extend({
            data: void 0,
            one: !0
        }, i);
        return this.each(function() {
            var i = t(this);
            if (i.appeared = !1, !e) return void i.trigger("appear", n.data);
            var o = t(window),
                r = function() {
                    if (!i.is(":visible")) return void(i.appeared = !1);
                    var t = o.scrollLeft(),
                        e = o.scrollTop(),
                        r = i.offset(),
                        s = r.left,
                        a = r.top;
                    a + i.height() >= e && a <= e + o.height() && s + i.width() >= t && s <= t + o.width() ? i.appeared || i.trigger("appear", n.data) : (i.appeared && i.trigger("disappear", n.data), i.appeared = !1)
                },
                s = function() {
                    if (i.appeared = !0, n.one) {
                        o.unbind("scroll", r);
                        var s = t.inArray(r, t.fn.appear.checks);
                        s >= 0 && t.fn.appear.checks.splice(s, 1)
                    }
                    e.apply(this, arguments)
                };
            n.one ? i.one("appear", n.data, s) : i.bind("appear", n.data, s), o.scroll(r), t.fn.appear.checks.push(r), r()
        })
    }, t.extend(t.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var e = t.fn.appear.checks.length;
            if (e > 0)
                for (; e--;) t.fn.appear.checks[e]()
        },
        run: function() {
            t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20)
        }
    }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, i) {
        var n = t.fn[i];
        n && (t.fn[i] = function() {
            var e = n.apply(this, arguments);
            return t.fn.appear.run(), e
        })
    })
}(jQuery),
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(this, function(t) {
    var e = function(t, e) {
            var i, n = document.createElement("canvas");
            t.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
            var o = n.getContext("2d");
            n.width = n.height = e.size;
            var r = 1;
            window.devicePixelRatio > 1 && (r = window.devicePixelRatio, n.style.width = n.style.height = [e.size, "px"].join(""), n.width = n.height = e.size * r, o.scale(r, r)), o.translate(e.size / 2, e.size / 2), o.rotate((-.5 + e.rotate / 180) * Math.PI);
            var s = (e.size - e.lineWidth) / 2;
            e.scaleColor && e.scaleLength && (s -= e.scaleLength + 2), Date.now = Date.now || function() {
                return +new Date
            };
            var a = function(t, e, i) {
                    i = Math.min(Math.max(-1, i || 0), 1);
                    var n = i <= 0;
                    o.beginPath(), o.arc(0, 0, s, 0, 2 * Math.PI * i, n), o.strokeStyle = t, o.lineWidth = e, o.stroke()
                },
                l = function() {
                    var t, i;
                    o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save();
                    for (var n = 24; n > 0; --n) n % 6 === 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), o.fillRect(-e.size / 2 + t, 0, i, 1), o.rotate(Math.PI / 12);
                    o.restore()
                },
                u = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                        window.setTimeout(t, 1e3 / 60)
                    }
                }(),
                h = function() {
                    e.scaleColor && l(), e.trackColor && a(e.trackColor, e.trackWidth || e.lineWidth, 1)
                };
            this.getCanvas = function() {
                return n
            }, this.getCtx = function() {
                return o
            }, this.clear = function() {
                o.clearRect(e.size / -2, e.size / -2, e.size, e.size)
            }, this.draw = function(t) {
                e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (h(), i = o.getImageData(0, 0, e.size * r, e.size * r)) : (this.clear(), h()) : this.clear(), o.lineCap = e.lineCap;
                var n;
                n = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, a(n, e.lineWidth, t / 100)
            }.bind(this), this.animate = function(t, i) {
                var n = Date.now();
                e.onStart(t, i);
                var o = function() {
                    var r = Math.min(Date.now() - n, e.animate.duration),
                        s = e.easing(this, r, t, i - t, e.animate.duration);
                    this.draw(s), e.onStep(t, i, s), r >= e.animate.duration ? e.onStop(t, i) : u(o)
                }.bind(this);
                u(o)
            }.bind(this)
        },
        i = function(t, i) {
            var n = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                trackWidth: void 0,
                size: 110,
                rotate: 0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function(t, e, i, n, o) {
                    return e /= o / 2, e < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
                },
                onStart: function(t, e) {},
                onStep: function(t, e, i) {},
                onStop: function(t, e) {}
            };
            if ("undefined" != typeof e) n.renderer = e;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                n.renderer = SVGRenderer
            }
            var o = {},
                r = 0,
                s = function() {
                    this.el = t, this.options = o;
                    for (var e in n) n.hasOwnProperty(e) && (o[e] = i && "undefined" != typeof i[e] ? i[e] : n[e], "function" == typeof o[e] && (o[e] = o[e].bind(this)));
                    "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = {
                        duration: o.animate,
                        enabled: !0
                    }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                        duration: 1e3,
                        enabled: o.animate
                    }), this.renderer = new o.renderer(t, o), this.renderer.draw(r), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
                }.bind(this);
            this.update = function(t) {
                return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(r, t) : this.renderer.draw(t), r = t, this
            }.bind(this), this.disableAnimation = function() {
                return o.animate.enabled = !1, this
            }, this.enableAnimation = function() {
                return o.animate.enabled = !0, this
            }, s()
        };
    t.fn.easyPieChart = function(e) {
        return this.each(function() {
            var n;
            t.data(this, "easyPieChart") || (n = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, n)))
        })
    }
}), ! function(t, e, i, n) {
    function o(e, i) {
        this.element = e, this.options = t.extend({}, s, i), this._defaults = s, this._name = r, this.init()
    }
    var r = "stellar",
        s = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(t) {
                t.hide()
            },
            showElement: function(t) {
                t.show()
            }
        },
        a = {
            scroll: {
                getLeft: function(t) {
                    return t.scrollLeft()
                },
                setLeft: function(t, e) {
                    t.scrollLeft(e)
                },
                getTop: function(t) {
                    return t.scrollTop()
                },
                setTop: function(t, e) {
                    t.scrollTop(e)
                }
            },
            position: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("margin-left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(t) {
                    var e = getComputedStyle(t[0])[h];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(t) {
                    var e = getComputedStyle(t[0])[h];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        l = {
            position: {
                setLeft: function(t, e) {
                    t.css("left", e)
                },
                setTop: function(t, e) {
                    t.css("top", e)
                }
            },
            transform: {
                setPosition: function(t, e, i, n, o) {
                    t[0].style[h] = "translate3d(" + (e - i) + "px, " + (n - o) + "px, 0)"
                }
            }
        },
        u = function() {
            var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                n = t("script")[0].style,
                o = "";
            for (e in n)
                if (i.test(e)) {
                    o = e.match(i)[0];
                    break
                }
            return "WebkitOpacity" in n && (o = "Webkit"), "KhtmlOpacity" in n && (o = "Khtml"),
                function(t) {
                    return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                }
        }(),
        h = u("transform"),
        c = t("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== n,
        d = c ? function(t, e, i) {
            t.css({
                "background-position-x": e,
                "background-position-y": i
            })
        } : function(t, e, i) {
            t.css("background-position", e + " " + i)
        },
        p = c ? function(t) {
            return [t.css("background-position-x"), t.css("background-position-y")]
        } : function(t) {
            return t.css("background-position").split(" ")
        },
        f = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        };
    o.prototype = {
        init: function() {
            this.options.name = r + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var t = this,
                e = a[t.options.scrollProperty];
            this._getScrollLeft = function() {
                return e.getLeft(t.$scrollElement)
            }, this._getScrollTop = function() {
                return e.getTop(t.$scrollElement)
            }
        },
        _defineSetters: function() {
            var e = this,
                i = a[e.options.scrollProperty],
                n = l[e.options.positionProperty],
                o = i.setLeft,
                r = i.setTop;
            this._setScrollLeft = "function" == typeof o ? function(t) {
                o(e.$scrollElement, t)
            } : t.noop, this._setScrollTop = "function" == typeof r ? function(t) {
                r(e.$scrollElement, t)
            } : t.noop, this._setPosition = n.setPosition || function(t, i, o, r, s) {
                e.options.horizontalScrolling && n.setLeft(t, i, o), e.options.verticalScrolling && n.setTop(t, r, s)
            }
        },
        _handleWindowLoadAndResize: function() {
            var i = this,
                n = t(e);
            i.options.responsive && n.bind("load." + this.name, function() {
                i.refresh()
            }), n.bind("resize." + this.name, function() {
                i._detectViewport(), i.options.responsive && i.refresh()
            })
        },
        refresh: function(i) {
            var n = this,
                o = n._getScrollLeft(),
                r = n._getScrollTop();
            i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                var t = n._getScrollLeft(),
                    e = n._getScrollTop();
                n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
            }), this._setScrollLeft(o), this._setScrollTop(r)
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset(),
                e = null !== t && t !== n;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
        },
        _findParticles: function() {
            var e = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
                for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var i, o, r, s, a, l, u, h, c, d = t(this),
                    p = 0,
                    f = 0,
                    g = 0,
                    m = 0;
                if (d.data("stellar-elementIsActive")) {
                    if (d.data("stellar-elementIsActive") !== this) return
                } else d.data("stellar-elementIsActive", this);
                e.options.showElement(d), d.data("stellar-startingLeft") ? (d.css("left", d.data("stellar-startingLeft")), d.css("top", d.data("stellar-startingTop"))) : (d.data("stellar-startingLeft", d.css("left")), d.data("stellar-startingTop", d.css("top"))), r = d.position().left, s = d.position().top, a = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10), l = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10), h = d.offset().left - a, c = d.offset().top - l, d.parents().each(function() {
                    var e = t(this);
                    return e.data("stellar-offset-parent") === !0 ? (p = g, f = m, u = e, !1) : (g += e.position().left, void(m += e.position().top))
                }), i = d.data("stellar-horizontal-offset") !== n ? d.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : e.horizontalOffset, o = d.data("stellar-vertical-offset") !== n ? d.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                    $element: d,
                    $offsetParent: u,
                    isFixed: "fixed" === d.css("position"),
                    horizontalOffset: i,
                    verticalOffset: o,
                    startingPositionLeft: r,
                    startingPositionTop: s,
                    startingOffsetLeft: h,
                    startingOffsetTop: c,
                    parentOffsetLeft: p,
                    parentOffsetTop: f,
                    stellarRatio: d.data("stellar-ratio") !== n ? d.data("stellar-ratio") : 1,
                    width: d.outerWidth(!0),
                    height: d.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var e, i = this,
                o = this._getScrollLeft(),
                r = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                var e, s, a, l, u, h, c, f = t(this),
                    g = p(f),
                    m = 0,
                    v = 0,
                    y = 0,
                    x = 0;
                if (f.data("stellar-backgroundIsActive")) {
                    if (f.data("stellar-backgroundIsActive") !== this) return
                } else f.data("stellar-backgroundIsActive", this);
                f.data("stellar-backgroundStartingLeft") ? d(f, f.data("stellar-backgroundStartingLeft"), f.data("stellar-backgroundStartingTop")) : (f.data("stellar-backgroundStartingLeft", g[0]), f.data("stellar-backgroundStartingTop", g[1])), a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), u = f.offset().left - a - o, h = f.offset().top - l - r, f.parents().each(function() {
                    var e = t(this);
                    return e.data("stellar-offset-parent") === !0 ? (m = y, v = x, c = e, !1) : (y += e.position().left, void(x += e.position().top))
                }), e = f.data("stellar-horizontal-offset") !== n ? f.data("stellar-horizontal-offset") : c !== n && c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : i.horizontalOffset, s = f.data("stellar-vertical-offset") !== n ? f.data("stellar-vertical-offset") : c !== n && c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                    $element: f,
                    $offsetParent: c,
                    isFixed: "fixed" === f.css("background-attachment"),
                    horizontalOffset: e,
                    verticalOffset: s,
                    startingValueLeft: g[0],
                    startingValueTop: g[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                    startingPositionLeft: f.position().left,
                    startingPositionTop: f.position().top,
                    startingOffsetLeft: u,
                    startingOffsetTop: h,
                    parentOffsetLeft: m,
                    parentOffsetTop: v,
                    stellarRatio: f.data("stellar-background-ratio") === n ? 1 : f.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var t, e, i, n, o;
            for (o = this.particles.length - 1; o >= 0; o--) t = this.particles[o], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (o = this.backgrounds.length - 1; o >= 0; o--) n = this.backgrounds[o], n.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), d(n.$element, n.startingValueLeft, n.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var i = this,
                n = t(e);
            n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
                i.horizontalOffset = i.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
                i.verticalOffset = i.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var t, e, i, n, o, r, s, a, l, u, h = this._getScrollLeft(),
                c = this._getScrollTop(),
                p = !0,
                f = !0;
            if (this.currentScrollLeft !== h || this.currentScrollTop !== c || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = h, this.currentScrollTop = c, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, u = this.particles.length - 1; u >= 0; u--) t = this.particles[u], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (r = (h + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = r - t.startingPositionLeft + t.startingOffsetLeft) : (r = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (s = (c + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = s - t.startingPositionTop + t.startingOffsetTop) : (s = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : h) && a < (t.isFixed ? 0 : h) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : c) && l < (t.isFixed ? 0 : c) + this.viewportHeight + this.viewportOffsetTop), f && p ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, r, t.startingPositionLeft, s, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                for (u = this.backgrounds.length - 1; u >= 0; u--) i = this.backgrounds[u], e = i.isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (h + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (c + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, d(i.$element, n, o)
            }
        },
        _handleScrollEvent: function() {
            var t = this,
                e = !1,
                i = function() {
                    t._repositionElements(), e = !1
                },
                n = function() {
                    e || (f(i), e = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, n), n()
        },
        _startAnimationLoop: function() {
            var t = this;
            this._animationLoop = function() {
                f(t._animationLoop), t._repositionElements()
            }, this._animationLoop()
        }
    }, t.fn[r] = function(e) {
        var i = arguments;
        return e === n || "object" == typeof e ? this.each(function() {
            t.data(this, "plugin_" + r) || t.data(this, "plugin_" + r, new o(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
            var n = t.data(this, "plugin_" + r);
            n instanceof o && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + r, null)
        }) : void 0
    }, t[r] = function() {
        var i = t(e);
        return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
    }, t[r].scrollProperty = a, t[r].positionProperty = l, e.Stellar = o
}(jQuery, this, document), ! function(t, e) {
    "use strict";

    function i(e) {
        return A.formatter = u, j = t("body"), W = L(), k = W !== !1, k || (W = "transitionend.boxer"), t(this).on("click.boxer", t.extend({}, A, e || {}), n)
    }

    function n(i) {
        if ("undefined" == typeof O.$boxer) {
            var n = t(this),
                r = i.data.$object,
                s = n[0].href ? n[0].href || "" : "",
                l = n[0].hash ? n[0].hash || "" : "",
                u = s.toLowerCase().split(".").pop().split(/\#|\?/),
                c = u[0],
                d = n.data("boxer-type") || "",
                f = "image" === d || t.inArray(c, i.data.extensions) > -1 || "data:image" === s.substr(0, 10),
                g = s.indexOf("youtube.com/embed") > -1 || s.indexOf("player.vimeo.com/video") > -1,
                _ = "url" === d || !f && !g && "http" === s.substr(0, 4) && !l,
                C = "element" === d || !f && !g && !_ && "#" === l.substr(0, 1),
                T = "undefined" != typeof r;
            if (C && (s = l), t("#boxer").length > 1 || !(f || g || _ || C || T)) return;
            if (z(i), O = t.extend({}, {
                    $window: t(e),
                    $body: t("body"),
                    $target: n,
                    $object: r,
                    visible: !1,
                    resizeTimer: null,
                    touchTimer: null,
                    gallery: {
                        active: !1
                    },
                    isMobile: D || i.data.mobile,
                    isAnimating: !0,
                    oldContentHeight: 0,
                    oldContentWidth: 0
                }, i.data), O.margin *= 2, O.type = f ? "image" : g ? "video" : "element", f || g) {
                var $ = O.$target.data("gallery") || O.$target.attr("rel");
                "undefined" != typeof $ && $ !== !1 && (O.gallery.active = !0, O.gallery.id = $, O.gallery.$items = t("a[data-gallery= " + O.gallery.id + "], a[rel= " + O.gallery.id + "]"), O.gallery.index = O.gallery.$items.index(O.$target), O.gallery.total = O.gallery.$items.length - 1)
            }
            var E = "";
            if (O.isMobile || (E += '<div id="boxer-overlay" class="' + O.customClass + '"></div>'), E += '<div id="boxer" class="loading animating ' + O.customClass, O.fixed && (E += " fixed"), O.isMobile && (E += " mobile"), _ && (E += " iframe"), (C || T) && (E += " inline"), E += '">', E += '<span class="boxer-close">' + O.labels.close + "</span>", E += '<span class="boxer-loading"></span>', E += '<div class="boxer-container">', E += '<div class="boxer-content">', (f || g) && (E += '<div class="boxer-meta">', O.gallery.active ? (E += '<div class="boxer-control previous">' + O.labels.previous + "</div>", E += '<div class="boxer-control next">' + O.labels.next + "</div>", E += '<p class="boxer-position"', O.gallery.total < 1 && (E += ' style="display: none;"'), E += ">", E += '<span class="current">' + (O.gallery.index + 1) + "</span> " + O.labels.count + ' <span class="total">' + (O.gallery.total + 1) + "</span>", E += "</p>", E += '<div class="boxer-caption gallery">') : E += '<div class="boxer-caption">', E += O.formatter.apply(O.$body, [O.$target]), E += "</div></div>"), E += "</div></div></div>", O.$body.append(E), O.$overlay = t("#boxer-overlay"), O.$boxer = t("#boxer"), O.$container = O.$boxer.find(".boxer-container"), O.$content = O.$boxer.find(".boxer-content"), O.$meta = O.$boxer.find(".boxer-meta"), O.$position = O.$boxer.find(".boxer-position"), O.$caption = O.$boxer.find(".boxer-caption"), O.$controls = O.$boxer.find(".boxer-control"), O.paddingVertical = O.isMobile ? O.$boxer.find(".boxer-close").outerHeight() / 2 : parseInt(O.$boxer.css("paddingTop"), 10) + parseInt(O.$boxer.css("paddingBottom"), 10), O.paddingHorizontal = O.isMobile ? 0 : parseInt(O.$boxer.css("paddingLeft"), 10) + parseInt(O.$boxer.css("paddingRight"), 10), O.contentHeight = O.$boxer.outerHeight() - O.paddingVertical, O.contentWidth = O.$boxer.outerWidth() - O.paddingHorizontal, O.controlHeight = O.$controls.outerHeight(), a(), O.gallery.active && v(), O.$window.on("resize.boxer", M.resize).on("keydown.boxer", y), O.$body.on("touchstart.boxer click.boxer", "#boxer-overlay, #boxer .boxer-close", o).on("touchmove.boxer", z), O.gallery.active && O.$boxer.on("touchstart.boxer click.boxer", ".boxer-control", m), O.$boxer.on(W, function(e) {
                    z(e), t(e.target).is(O.$boxer) && (O.$boxer.off(W), f ? h(s) : g ? p(s) : _ ? w(s) : C ? x(s) : T ? b(O.$object) : t.error("BOXER: '" + s + "' is not valid."))
                }), j.addClass("boxer-open"), k || O.$boxer.trigger(W), T) return O.$boxer
        }
    }

    function o(e) {
        z(e), "undefined" != typeof O.$boxer && (O.$boxer.on(W, function(e) {
            z(e), t(e.target).is(O.$boxer) && (O.$boxer.off(W), O.$overlay.remove(), O.$boxer.remove(), O = {})
        }).addClass("animating"), j.removeClass("boxer-open"), k || O.$boxer.trigger(W), H(O.resizeTimer), O.$window.off("resize.boxer").off("keydown.boxer"), O.$body.off(".boxer").removeClass("boxer-open"), O.gallery.active && O.$boxer.off(".boxer"), O.isMobile && "image" === O.type && O.gallery.active && O.$container.off(".boxer"), O.$window.trigger("close.boxer"))
    }

    function r() {
        var e = l();
        O.isMobile ? 0 : O.duration, O.isMobile || O.$controls.css({
            marginTop: (O.contentHeight - O.controlHeight - O.metaHeight) / 2
        }), !O.visible && O.isMobile && O.gallery.active && O.$content.on("touchstart.boxer", ".boxer-image", T), (O.isMobile || O.fixed) && O.$body.addClass("boxer-open"), O.$boxer.on(W, function(e) {
            z(e), t(e.target).is(O.$boxer) && (O.$boxer.off(W), O.$container.on(W, function(e) {
                z(e), t(e.target).is(O.$container) && (O.$container.off(W), O.$boxer.removeClass("animating"), O.isAnimating = !1)
            }), O.$boxer.removeClass("loading"), k || O.$content.trigger(W), O.visible = !0, O.callback.apply(O.$boxer), O.$window.trigger("open.boxer"), O.gallery.active && g());
        }), O.isMobile || O.$boxer.css({
            height: O.contentHeight + O.paddingVertical,
            width: O.contentWidth + O.paddingHorizontal,
            top: O.fixed ? 0 : e.top
        });
        var i = O.oldContentHeight !== O.contentHeight || O.oldContentWidth !== O.contentWidth;
        !O.isMobile && k && i || O.$boxer.trigger(W), O.oldContentHeight = O.contentHeight, O.oldContentWidth = O.contentWidth
    }

    function s() {
        if (O.visible && !O.isMobile) {
            var t = l();
            O.$controls.css({
                marginTop: (O.contentHeight - O.controlHeight - O.metaHeight) / 2
            }), O.$boxer.css({
                height: O.contentHeight + O.paddingVertical,
                width: O.contentWidth + O.paddingHorizontal,
                top: O.fixed ? 0 : t.top
            })
        }
    }

    function a() {
        var t = l();
        O.$boxer.css({
            top: O.fixed ? 0 : t.top
        })
    }

    function l() {
        if (O.isMobile) return {
            left: 0,
            top: 0
        };
        var t = {
            left: (O.$window.width() - O.contentWidth - O.paddingHorizontal) / 2,
            top: O.top <= 0 ? (O.$window.height() - O.contentHeight - O.paddingVertical) / 2 : O.top
        };
        return O.fixed !== !0 && (t.top += O.$window.scrollTop()), t
    }

    function u(t) {
        var e = t.attr("title");
        return void 0 !== e && "" !== e.trim() ? '<p class="caption">' + e.trim() + "</p>" : ""
    }

    function h(e) {
        O.$image = t("<img />"), O.$image.load(function() {
            O.$image.off("load, error");
            var t = S(O.$image);
            O.naturalHeight = t.naturalHeight, O.naturalWidth = t.naturalWidth, O.retina && (O.naturalHeight /= 2, O.naturalWidth /= 2), O.$content.prepend(O.$image), "" === O.$caption.html() ? O.$caption.hide() : O.$caption.show(), c(), r()
        }).error(C).attr("src", e).addClass("boxer-image"), (O.$image[0].complete || 4 === O.$image[0].readyState) && O.$image.trigger("load")
    }

    function c() {
        var t = 0;
        for (O.windowHeight = O.viewportHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.viewportWidth = O.$window.width() - O.paddingHorizontal, O.contentHeight = 1 / 0, O.contentWidth = 1 / 0, O.imageMarginTop = 0, O.imageMarginLeft = 0; O.contentHeight > O.viewportHeight && 2 > t;) O.imageHeight = 0 === t ? O.naturalHeight : O.$image.outerHeight(), O.imageWidth = 0 === t ? O.naturalWidth : O.$image.outerWidth(), O.metaHeight = 0 === t ? 0 : O.metaHeight, 0 === t && (O.ratioHorizontal = O.imageHeight / O.imageWidth, O.ratioVertical = O.imageWidth / O.imageHeight, O.isWide = O.imageWidth > O.imageHeight), O.imageHeight < O.minHeight && (O.minHeight = O.imageHeight), O.imageWidth < O.minWidth && (O.minWidth = O.imageWidth), O.isMobile ? (O.$meta.css({
            width: O.windowWidth
        }), O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight = O.viewportHeight - O.paddingVertical, O.contentWidth = O.viewportWidth - O.paddingHorizontal, d(), O.imageMarginTop = (O.contentHeight - O.targetImageHeight - O.metaHeight) / 2, O.imageMarginLeft = (O.contentWidth - O.targetImageWidth) / 2) : (0 === t && (O.viewportHeight -= O.margin + O.paddingVertical, O.viewportWidth -= O.margin + O.paddingHorizontal), O.viewportHeight -= O.metaHeight, d(), O.contentHeight = O.targetImageHeight, O.contentWidth = O.targetImageWidth), O.$meta.css({
            width: O.contentWidth
        }), O.$image.css({
            height: O.targetImageHeight,
            width: O.targetImageWidth,
            marginTop: O.imageMarginTop,
            marginLeft: O.imageMarginLeft
        }), O.isMobile || (O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight += O.metaHeight), t++
    }

    function d() {
        var t = O.isMobile ? O.contentHeight - O.metaHeight : O.viewportHeight,
            e = O.isMobile ? O.contentWidth : O.viewportWidth;
        O.isWide ? (O.targetImageWidth = e, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal, O.targetImageHeight > t && (O.targetImageHeight = t, O.targetImageWidth = O.targetImageHeight * O.ratioVertical)) : (O.targetImageHeight = t, O.targetImageWidth = O.targetImageHeight * O.ratioVertical, O.targetImageWidth > e && (O.targetImageWidth = e, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal)), (O.targetImageWidth > O.imageWidth || O.targetImageHeight > O.imageHeight) && (O.targetImageHeight = O.imageHeight, O.targetImageWidth = O.imageWidth), (O.targetImageWidth < O.minWidth || O.targetImageHeight < O.minHeight) && (O.targetImageWidth < O.minWidth ? (O.targetImageWidth = O.minWidth, O.targetImageHeight = O.targetImageWidth * O.ratioHorizontal) : (O.targetImageHeight = O.minHeight, O.targetImageWidth = O.targetImageHeight * O.ratioVertical))
    }

    function p(e) {
        O.$videoWrapper = t('<div class="boxer-video-wrapper" />'), O.$video = t('<iframe class="boxer-video" seamless="seamless" />'), O.$video.attr("src", e).addClass("boxer-video").prependTo(O.$videoWrapper), O.$content.prepend(O.$videoWrapper), f(), r()
    }

    function f() {
        O.windowHeight = O.viewportHeight = O.contentHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.viewportWidth = O.contentWidth = O.$window.width() - O.paddingHorizontal, O.videoMarginTop = 0, O.videoMarginLeft = 0, O.isMobile ? (O.$meta.css({
            width: O.windowWidth
        }), O.metaHeight = O.$meta.outerHeight(!0), O.viewportHeight -= O.metaHeight, O.targetVideoWidth = O.viewportWidth, O.targetVideoHeight = O.targetVideoWidth * O.videoRatio, O.targetVideoHeight > O.viewportHeight && (O.targetVideoHeight = O.viewportHeight, O.targetVideoWidth = O.targetVideoHeight / O.videoRatio), O.videoMarginTop = (O.viewportHeight - O.targetVideoHeight) / 2, O.videoMarginLeft = (O.viewportWidth - O.targetVideoWidth) / 2) : (O.viewportHeight = O.windowHeight - O.margin, O.viewportWidth = O.windowWidth - O.margin, O.targetVideoWidth = O.videoWidth > O.viewportWidth ? O.viewportWidth : O.videoWidth, O.targetVideoWidth < O.minWidth && (O.targetVideoWidth = O.minWidth), O.targetVideoHeight = O.targetVideoWidth * O.videoRatio, O.contentHeight = O.targetVideoHeight, O.contentWidth = O.targetVideoWidth), O.$meta.css({
            width: O.contentWidth
        }), O.$videoWrapper.css({
            height: O.targetVideoHeight,
            width: O.targetVideoWidth,
            marginTop: O.videoMarginTop,
            marginLeft: O.videoMarginLeft
        }), O.isMobile || (O.metaHeight = O.$meta.outerHeight(!0), O.contentHeight = O.targetVideoHeight + O.metaHeight)
    }

    function g(e) {
        var i = "";
        O.gallery.index > 0 && (i = O.gallery.$items.eq(O.gallery.index - 1).attr("href"), i.indexOf("youtube.com/embed") < 0 && i.indexOf("player.vimeo.com/video") < 0 && t('<img src="' + i + '">')), O.gallery.index < O.gallery.total && (i = O.gallery.$items.eq(O.gallery.index + 1).attr("href"), i.indexOf("youtube.com/embed") < 0 && i.indexOf("player.vimeo.com/video") < 0 && t('<img src="' + i + '">'))
    }

    function m(e) {
        z(e);
        var i = t(this);
        O.isAnimating || i.hasClass("disabled") || (O.isAnimating = !0, O.gallery.index += i.hasClass("next") ? 1 : -1, O.gallery.index > O.gallery.total && (O.gallery.index = O.gallery.total), O.gallery.index < 0 && (O.gallery.index = 0), O.$container.on(W, function(e) {
            if (z(e), t(e.target).is(O.$container)) {
                O.$container.off(W), "undefined" != typeof O.$image && O.$image.remove(), "undefined" != typeof O.$videoWrapper && O.$videoWrapper.remove(), O.$target = O.gallery.$items.eq(O.gallery.index), O.$caption.html(O.formatter.apply(O.$body, [O.$target])), O.$position.find(".current").html(O.gallery.index + 1);
                var i = O.$target.attr("href"),
                    n = i.indexOf("youtube.com/embed") > -1 || i.indexOf("player.vimeo.com/video") > -1;
                n ? p(i) : h(i), v()
            }
        }), O.$boxer.addClass("loading animating"), k || O.$content.trigger(W))
    }

    function v() {
        O.$controls.removeClass("disabled"), 0 === O.gallery.index && O.$controls.filter(".previous").addClass("disabled"), O.gallery.index === O.gallery.total && O.$controls.filter(".next").addClass("disabled")
    }

    function y(t) {
        !O.gallery.active || 37 !== t.keyCode && 39 !== t.keyCode ? 27 === t.keyCode && O.$boxer.find(".boxer-close").trigger("click") : (z(t), O.$controls.filter(37 === t.keyCode ? ".previous" : ".next").trigger("click"))
    }

    function x(e) {
        var i = t(e).find(">:first-child").clone();
        b(i)
    }

    function w(e) {
        e += e.indexOf("?") > -1 ? "&" + A.requestKey + "=true" : "?" + A.requestKey + "=true";
        var i = t('<iframe class="boxer-iframe" src="' + e + '" />');
        b(i)
    }

    function b(t) {
        O.$content.append(t), _(t), r()
    }

    function _(t) {
        O.windowHeight = O.$window.height() - O.paddingVertical, O.windowWidth = O.$window.width() - O.paddingHorizontal, O.objectHeight = t.outerHeight(!0), O.objectWidth = t.outerWidth(!0), O.targetHeight = O.targetHeight || O.$target.data("boxer-height"), O.targetWidth = O.targetWidth || O.$target.data("boxer-width"), O.maxHeight = O.windowHeight < 0 ? A.minHeight : O.windowHeight, O.isIframe = t.is("iframe"), O.objectMarginTop = 0, O.objectMarginLeft = 0, O.isMobile || (O.windowHeight -= O.margin, O.windowWidth -= O.margin), O.contentHeight = void 0 !== O.targetHeight ? O.targetHeight : O.isIframe || O.isMobile ? O.windowHeight : O.objectHeight, O.contentWidth = void 0 !== O.targetWidth ? O.targetWidth : O.isIframe || O.isMobile ? O.windowWidth : O.objectWidth, (O.isIframe || O.isObject) && O.isMobile ? (O.contentHeight = O.windowHeight, O.contentWidth = O.windowWidth) : O.isObject && (O.contentHeight = O.contentHeight > O.windowHeight ? O.windowHeight : O.contentHeight, O.contentWidth = O.contentWidth > O.windowWidth ? O.windowWidth : O.contentWidth)
    }

    function C(e) {
        var i = t('<div class="boxer-error"><p>Error Loading Resource</p></div>');
        O.type = "element", O.$meta.remove(), O.$image.off("load, error"), b(i)
    }

    function T(t) {
        if (z(t), H(O.touchTimer), !O.isAnimating) {
            var e = "undefined" != typeof t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0] : null;
            O.xStart = e ? e.pageX : t.clientX, O.leftPosition = 0, O.touchMax = 1 / 0, O.touchMin = -(1 / 0), O.edge = .25 * O.contentWidth, 0 === O.gallery.index && (O.touchMax = 0), O.gallery.index === O.gallery.total && (O.touchMin = 0), O.$boxer.on("touchmove.boxer", $).one("touchend.boxer", E)
        }
    }

    function $(t) {
        var e = "undefined" != typeof t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0] : null;
        O.delta = O.xStart - (e ? e.pageX : t.clientX), O.delta > 20 && z(t), O.canSwipe = !0;
        var i = -O.delta;
        i < O.touchMin && (i = O.touchMin, O.canSwipe = !1), i > O.touchMax && (i = O.touchMax, O.canSwipe = !1), O.$image.css({
            transform: "translate3D(" + i + "px,0,0)"
        }), O.touchTimer = I(O.touchTimer, 300, function() {
            E(t)
        })
    }

    function E(t) {
        z(t), H(O.touchTimer), O.$boxer.off("touchmove.boxer touchend.boxer"), O.delta && (O.$boxer.addClass("animated"), O.swipe = !1, O.canSwipe && (O.delta > O.edge || O.delta < -O.edge) ? (O.swipe = !0, O.$image.css(O.delta <= O.leftPosition ? {
            transform: "translate3D(" + O.contentWidth + "px,0,0)"
        } : {
            transform: "translate3D(" + -O.contentWidth + "px,0,0)"
        })) : O.$image.css({
            transform: "translate3D(0,0,0)"
        }), O.swipe && O.$controls.filter(O.delta <= O.leftPosition ? ".previous" : ".next").trigger("click"), I(O.resetTimer, O.duration, function() {
            O.$boxer.removeClass("animated")
        }))
    }

    function S(t) {
        var e = t[0],
            i = new Image;
        return "undefined" != typeof e.naturalHeight ? {
            naturalHeight: e.naturalHeight,
            naturalWidth: e.naturalWidth
        } : "img" === e.tagName.toLowerCase() && (i.src = e.src, {
            naturalHeight: i.height,
            naturalWidth: i.width
        })
    }

    function z(t) {
        t.preventDefault && (t.stopPropagation(), t.preventDefault())
    }

    function I(t, e, i) {
        return H(t), setTimeout(i, e)
    }

    function H(t) {
        t && (clearTimeout(t), t = null)
    }

    function L() {
        var t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            e = document.createElement("div");
        for (var i in t)
            if (t.hasOwnProperty(i) && i in e.style) return t[i];
        return !1
    }
    var W, k, j = null,
        O = {},
        D = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(e.navigator.userAgent || e.navigator.vendor || e.opera),
        A = {
            callback: t.noop,
            customClass: "",
            extensions: ["jpg", "sjpg", "jpeg", "png", "gif"],
            fixed: !1,
            formatter: t.noop,
            labels: {
                close: "Close",
                count: "of",
                next: "Next",
                previous: "Previous"
            },
            margin: 50,
            minHeight: 100,
            minWidth: 100,
            mobile: !1,
            opacity: .75,
            retina: !1,
            requestKey: "boxer",
            top: 0,
            videoRatio: .5625,
            videoWidth: 600
        },
        M = {
            close: function() {
                "undefined" != typeof O.$boxer && (O.$boxer.off(".boxer"), O.$overlay.trigger("click"))
            },
            defaults: function(e) {
                return A = t.extend(A, e || {}), "object" == typeof this && t(this)
            },
            destroy: function() {
                return t(this).off(".boxer")
            },
            resize: function(e) {
                return "undefined" != typeof O.$boxer && ("object" != typeof e && (O.targetHeight = arguments[0], O.targetWidth = arguments[1]), "element" === O.type ? _(O.$content.find(">:first-child")) : "image" === O.type ? c() : "video" === O.type && f(), s()), t(this)
            }
        };
    t.fn.boxer = function(t) {
        return M[t] ? M[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? this : i.apply(this, arguments)
    }, t.boxer = function(i, o) {
        return M[i] ? M[i].apply(e, Array.prototype.slice.call(arguments, 1)) : i instanceof t ? n.apply(e, [{
            data: t.extend({
                $object: i
            }, A, o || {})
        }]) : void 0
    }
}(jQuery, window);
var $window = $(window);
! function(t, e) {
    var i = function(t, e, i) {
        var n;
        return function() {
            function o() {
                i || t.apply(r, s), n = null
            }
            var r = this,
                s = arguments;
            n ? clearTimeout(n) : i && t.apply(r, s), n = setTimeout(o, e || 100)
        }
    };
    jQuery.fn[e] = function(t) {
        return t ? this.bind("resize", i(t)) : this.trigger(e)
    }
}(jQuery, "smartresize"), $(document).ready(function() {
    _fixed_menu(), _main_menu(), _owl_carousel(), _isotope_sorting(), _chart(), _count(), _parallax(), _scrollTop(), _gall()
}), $window.on("load", function() {
    var t = $(".js-isotope");
    t.length && t.isotope("layout"), _g_map()
});
//# sourceMappingURL=main.min.js.map
