/*!
 * Knockout JavaScript library v3.4.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {
    (function(n) {
        var x = this || (0,
        eval)("this")
          , u = x.document
          , M = x.navigator
          , v = x.jQuery
          , F = x.JSON;
        (function(n) {
            "function" === typeof define && define.amd ? define(["exports", "require"], n) : "object" === typeof exports && "object" === typeof module ? n(module.exports || exports) : n(x.ko = {})
        })(function(N, O) {
            function J(a, c) {
                return null === a || typeof a in T ? a === c : !1
            }
            function U(b, c) {
                var d;
                return function() {
                    d || (d = a.a.setTimeout(function() {
                        d = n;
                        b()
                    }, c))
                }
            }
            function V(b, c) {
                var d;
                return function() {
                    clearTimeout(d);
                    d = a.a.setTimeout(b, c)
                }
            }
            function W(a, c) {
                c && c !== I ? "beforeChange" === c ? this.Kb(a) : this.Ha(a, c) : this.Lb(a)
            }
            function X(a, c) {
                null !== c && c.k && c.k()
            }
            function Y(a, c) {
                var d = this.Hc
                  , e = d[s];
                e.R || (this.lb && this.Ma[c] ? (d.Pb(c, a, this.Ma[c]),
                this.Ma[c] = null,
                --this.lb) : e.r[c] || d.Pb(c, a, e.s ? {
                    ia: a
                } : d.uc(a)))
            }
            function K(b, c, d, e) {
                a.d[b] = {
                    init: function(b, g, k, l, m) {
                        var h, r;
                        a.m(function() {
                            var q = a.a.c(g())
                              , p = !d !== !q
                              , A = !r;
                            if (A || c || p !== h)
                                A && a.va.Aa() && (r = a.a.ua(a.f.childNodes(b), !0)),
                                p ? (A || a.f.da(b, a.a.ua(r)),
                                a.eb(e ? e(m, q) : m, b)) : a.f.xa(b),
                                h = p
                        }, null, {
                            i: b
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.h.ta[b] = !1;
                a.f.Z[b] = !0
            }
            var a = "undefined" !== typeof N ? N : {};
            a.b = function(b, c) {
                for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++)
                    e = e[d[f]];
                e[d[d.length - 1]] = c
            }
            ;
            a.G = function(a, c, d) {
                a[c] = d
            }
            ;
            a.version = "3.4.0";
            a.b("version", a.version);
            a.options = {
                deferUpdates: !1,
                useOnlyNativeEvents: !1
            };
            a.a = function() {
                function b(a, b) {
                    for (var c in a)
                        a.hasOwnProperty(c) && b(c, a[c])
                }
                function c(a, b) {
                    if (b)
                        for (var c in b)
                            b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a
                }
                function d(a, b) {
                    a.__proto__ = b;
                    return a
                }
                function e(b, c, d, e) {
                    var h = b[c].match(r) || [];
                    a.a.q(d.match(r), function(b) {
                        a.a.pa(h, b, e)
                    });
                    b[c] = h.join(" ")
                }
                var f = {
                    __proto__: []
                }instanceof Array
                  , g = "function" === typeof Symbol
                  , k = {}
                  , l = {};
                k[M && /Firefox\/2/i.test(M.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                k.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(k, function(a, b) {
                    if (b.length)
                        for (var c = 0, d = b.length; c < d; c++)
                            l[b[c]] = a
                });
                var m = {
                    propertychange: !0
                }
                  , h = u && function() {
                    for (var a = 3, b = u.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e",
                    c[0]; )
                        ;
                    return 4 < a ? a : n
                }()
                  , r = /\S+/g;
                return {
                    cc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                    q: function(a, b) {
                        for (var c = 0, d = a.length; c < d; c++)
                            b(a[c], c)
                    },
                    o: function(a, b) {
                        if ("function" == typeof Array.prototype.indexOf)
                            return Array.prototype.indexOf.call(a, b);
                        for (var c = 0, d = a.length; c < d; c++)
                            if (a[c] === b)
                                return c;
                        return -1
                    },
                    Sb: function(a, b, c) {
                        for (var d = 0, e = a.length; d < e; d++)
                            if (b.call(c, a[d], d))
                                return a[d];
                        return null
                    },
                    La: function(b, c) {
                        var d = a.a.o(b, c);
                        0 < d ? b.splice(d, 1) : 0 === d && b.shift()
                    },
                    Tb: function(b) {
                        b = b || [];
                        for (var c = [], d = 0, e = b.length; d < e; d++)
                            0 > a.a.o(c, b[d]) && c.push(b[d]);
                        return c
                    },
                    fb: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, e = a.length; d < e; d++)
                            c.push(b(a[d], d));
                        return c
                    },
                    Ka: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, e = a.length; d < e; d++)
                            b(a[d], d) && c.push(a[d]);
                        return c
                    },
                    ra: function(a, b) {
                        if (b instanceof Array)
                            a.push.apply(a, b);
                        else
                            for (var c = 0, d = b.length; c < d; c++)
                                a.push(b[c]);
                        return a
                    },
                    pa: function(b, c, d) {
                        var e = a.a.o(a.a.zb(b), c);
                        0 > e ? d && b.push(c) : d || b.splice(e, 1)
                    },
                    ka: f,
                    extend: c,
                    Xa: d,
                    Ya: f ? d : c,
                    D: b,
                    Ca: function(a, b) {
                        if (!a)
                            return a;
                        var c = {}, d;
                        for (d in a)
                            a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
                        return c
                    },
                    ob: function(b) {
                        for (; b.firstChild; )
                            a.removeNode(b.firstChild)
                    },
                    jc: function(b) {
                        b = a.a.V(b);
                        for (var c = (b[0] && b[0].ownerDocument || u).createElement("div"), d = 0, e = b.length; d < e; d++)
                            c.appendChild(a.$(b[d]));
                        return c
                    },
                    ua: function(b, c) {
                        for (var d = 0, e = b.length, h = []; d < e; d++) {
                            var m = b[d].cloneNode(!0);
                            h.push(c ? a.$(m) : m)
                        }
                        return h
                    },
                    da: function(b, c) {
                        a.a.ob(b);
                        if (c)
                            for (var d = 0, e = c.length; d < e; d++)
                                b.appendChild(c[d])
                    },
                    qc: function(b, c) {
                        var d = b.nodeType ? [b] : b;
                        if (0 < d.length) {
                            for (var e = d[0], h = e.parentNode, m = 0, l = c.length; m < l; m++)
                                h.insertBefore(c[m], e);
                            m = 0;
                            for (l = d.length; m < l; m++)
                                a.removeNode(d[m])
                        }
                    },
                    za: function(a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b; )
                                a.splice(0, 1);
                            for (; 1 < a.length && a[a.length - 1].parentNode !== b; )
                                a.length--;
                            if (1 < a.length) {
                                var c = a[0]
                                  , d = a[a.length - 1];
                                for (a.length = 0; c !== d; )
                                    a.push(c),
                                    c = c.nextSibling;
                                a.push(d)
                            }
                        }
                        return a
                    },
                    sc: function(a, b) {
                        7 > h ? a.setAttribute("selected", b) : a.selected = b
                    },
                    $a: function(a) {
                        return null === a || a === n ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    },
                    nd: function(a, b) {
                        a = a || "";
                        return b.length > a.length ? !1 : a.substring(0, b.length) === b
                    },
                    Mc: function(a, b) {
                        if (a === b)
                            return !0;
                        if (11 === a.nodeType)
                            return !1;
                        if (b.contains)
                            return b.contains(3 === a.nodeType ? a.parentNode : a);
                        if (b.compareDocumentPosition)
                            return 16 == (b.compareDocumentPosition(a) & 16);
                        for (; a && a != b; )
                            a = a.parentNode;
                        return !!a
                    },
                    nb: function(b) {
                        return a.a.Mc(b, b.ownerDocument.documentElement)
                    },
                    Qb: function(b) {
                        return !!a.a.Sb(b, a.a.nb)
                    },
                    A: function(a) {
                        return a && a.tagName && a.tagName.toLowerCase()
                    },
                    Wb: function(b) {
                        return a.onError ? function() {
                            try {
                                return b.apply(this, arguments)
                            } catch (c) {
                                throw a.onError && a.onError(c),
                                c;
                            }
                        }
                        : b
                    },
                    setTimeout: function(b, c) {
                        return setTimeout(a.a.Wb(b), c)
                    },
                    $b: function(b) {
                        setTimeout(function() {
                            a.onError && a.onError(b);
                            throw b;
                        }, 0)
                    },
                    p: function(b, c, d) {
                        var e = a.a.Wb(d);
                        d = h && m[c];
                        if (a.options.useOnlyNativeEvents || d || !v)
                            if (d || "function" != typeof b.addEventListener)
                                if ("undefined" != typeof b.attachEvent) {
                                    var l = function(a) {
                                        e.call(b, a)
                                    }
                                      , f = "on" + c;
                                    b.attachEvent(f, l);
                                    a.a.F.oa(b, function() {
                                        b.detachEvent(f, l)
                                    })
                                } else
                                    throw Error("Browser doesn't support addEventListener or attachEvent");
                            else
                                b.addEventListener(c, e, !1);
                        else
                            v(b).bind(c, e)
                    },
                    Da: function(b, c) {
                        if (!b || !b.nodeType)
                            throw Error("element must be a DOM node when calling triggerEvent");
                        var d;
                        "input" === a.a.A(b) && b.type && "click" == c.toLowerCase() ? (d = b.type,
                        d = "checkbox" == d || "radio" == d) : d = !1;
                        if (a.options.useOnlyNativeEvents || !v || d)
                            if ("function" == typeof u.createEvent)
                                if ("function" == typeof b.dispatchEvent)
                                    d = u.createEvent(l[c] || "HTMLEvents"),
                                    d.initEvent(c, !0, !0, x, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b),
                                    b.dispatchEvent(d);
                                else
                                    throw Error("The supplied element doesn't support dispatchEvent");
                            else if (d && b.click)
                                b.click();
                            else if ("undefined" != typeof b.fireEvent)
                                b.fireEvent("on" + c);
                            else
                                throw Error("Browser doesn't support triggering events");
                        else
                            v(b).trigger(c)
                    },
                    c: function(b) {
                        return a.H(b) ? b() : b
                    },
                    zb: function(b) {
                        return a.H(b) ? b.t() : b
                    },
                    bb: function(b, c, d) {
                        var h;
                        c && ("object" === typeof b.classList ? (h = b.classList[d ? "add" : "remove"],
                        a.a.q(c.match(r), function(a) {
                            h.call(b.classList, a)
                        })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d))
                    },
                    Za: function(b, c) {
                        var d = a.a.c(c);
                        if (null === d || d === n)
                            d = "";
                        var e = a.f.firstChild(b);
                        !e || 3 != e.nodeType || a.f.nextSibling(e) ? a.f.da(b, [b.ownerDocument.createTextNode(d)]) : e.data = d;
                        a.a.Rc(b)
                    },
                    rc: function(a, b) {
                        a.name = b;
                        if (7 >= h)
                            try {
                                a.mergeAttributes(u.createElement("<input name='" + a.name + "'/>"), !1)
                            } catch (c) {}
                    },
                    Rc: function(a) {
                        9 <= h && (a = 1 == a.nodeType ? a : a.parentNode,
                        a.style && (a.style.zoom = a.style.zoom))
                    },
                    Nc: function(a) {
                        if (h) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b
                        }
                    },
                    hd: function(b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var d = [], e = b; e <= c; e++)
                            d.push(e);
                        return d
                    },
                    V: function(a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++)
                            b.push(a[c]);
                        return b
                    },
                    Yb: function(a) {
                        return g ? Symbol(a) : a
                    },
                    rd: 6 === h,
                    sd: 7 === h,
                    C: h,
                    ec: function(b, c) {
                        for (var d = a.a.V(b.getElementsByTagName("input")).concat(a.a.V(b.getElementsByTagName("textarea"))), e = "string" == typeof c ? function(a) {
                            return a.name === c
                        }
                        : function(a) {
                            return c.test(a.name)
                        }
                        , h = [], m = d.length - 1; 0 <= m; m--)
                            e(d[m]) && h.push(d[m]);
                        return h
                    },
                    ed: function(b) {
                        return "string" == typeof b && (b = a.a.$a(b)) ? F && F.parse ? F.parse(b) : (new Function("return " + b))() : null
                    },
                    Eb: function(b, c, d) {
                        if (!F || !F.stringify)
                            throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return F.stringify(a.a.c(b), c, d)
                    },
                    fd: function(c, d, e) {
                        e = e || {};
                        var h = e.params || {}
                          , m = e.includeFields || this.cc
                          , l = c;
                        if ("object" == typeof c && "form" === a.a.A(c))
                            for (var l = c.action, f = m.length - 1; 0 <= f; f--)
                                for (var g = a.a.ec(c, m[f]), k = g.length - 1; 0 <= k; k--)
                                    h[g[k].name] = g[k].value;
                        d = a.a.c(d);
                        var r = u.createElement("form");
                        r.style.display = "none";
                        r.action = l;
                        r.method = "post";
                        for (var n in d)
                            c = u.createElement("input"),
                            c.type = "hidden",
                            c.name = n,
                            c.value = a.a.Eb(a.a.c(d[n])),
                            r.appendChild(c);
                        b(h, function(a, b) {
                            var c = u.createElement("input");
                            c.type = "hidden";
                            c.name = a;
                            c.value = b;
                            r.appendChild(c)
                        });
                        u.body.appendChild(r);
                        e.submitter ? e.submitter(r) : r.submit();
                        setTimeout(function() {
                            r.parentNode.removeChild(r)
                        }, 0)
                    }
                }
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.q);
            a.b("utils.arrayFirst", a.a.Sb);
            a.b("utils.arrayFilter", a.a.Ka);
            a.b("utils.arrayGetDistinctValues", a.a.Tb);
            a.b("utils.arrayIndexOf", a.a.o);
            a.b("utils.arrayMap", a.a.fb);
            a.b("utils.arrayPushAll", a.a.ra);
            a.b("utils.arrayRemoveItem", a.a.La);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.cc);
            a.b("utils.getFormFields", a.a.ec);
            a.b("utils.peekObservable", a.a.zb);
            a.b("utils.postJson", a.a.fd);
            a.b("utils.parseJson", a.a.ed);
            a.b("utils.registerEventHandler", a.a.p);
            a.b("utils.stringifyJson", a.a.Eb);
            a.b("utils.range", a.a.hd);
            a.b("utils.toggleDomNodeCssClass", a.a.bb);
            a.b("utils.triggerEvent", a.a.Da);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.D);
            a.b("utils.addOrRemoveItem", a.a.pa);
            a.b("utils.setTextContent", a.a.Za);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function(a) {
                var c = this;
                if (1 === arguments.length)
                    return function() {
                        return c.apply(a, arguments)
                    }
                    ;
                var d = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var e = d.slice(0);
                    e.push.apply(e, arguments);
                    return c.apply(a, e)
                }
            }
            );
            a.a.e = new function() {
                function a(b, g) {
                    var k = b[d];
                    if (!k || "null" === k || !e[k]) {
                        if (!g)
                            return n;
                        k = b[d] = "ko" + c++;
                        e[k] = {}
                    }
                    return e[k]
                }
                var c = 0
                  , d = "__ko__" + (new Date).getTime()
                  , e = {};
                return {
                    get: function(c, d) {
                        var e = a(c, !1);
                        return e === n ? n : e[d]
                    },
                    set: function(c, d, e) {
                        if (e !== n || a(c, !1) !== n)
                            a(c, !0)[d] = e
                    },
                    clear: function(a) {
                        var b = a[d];
                        return b ? (delete e[b],
                        a[d] = null,
                        !0) : !1
                    },
                    I: function() {
                        return c++ + d
                    }
                }
            }
            ;
            a.b("utils.domData", a.a.e);
            a.b("utils.domData.clear", a.a.e.clear);
            a.a.F = new function() {
                function b(b, c) {
                    var e = a.a.e.get(b, d);
                    e === n && c && (e = [],
                    a.a.e.set(b, d, e));
                    return e
                }
                function c(d) {
                    var e = b(d, !1);
                    if (e)
                        for (var e = e.slice(0), l = 0; l < e.length; l++)
                            e[l](d);
                    a.a.e.clear(d);
                    a.a.F.cleanExternalData(d);
                    if (f[d.nodeType])
                        for (e = d.firstChild; d = e; )
                            e = d.nextSibling,
                            8 === d.nodeType && c(d)
                }
                var d = a.a.e.I()
                  , e = {
                    1: !0,
                    8: !0,
                    9: !0
                }
                  , f = {
                    1: !0,
                    9: !0
                };
                return {
                    oa: function(a, c) {
                        if ("function" != typeof c)
                            throw Error("Callback must be a function");
                        b(a, !0).push(c)
                    },
                    pc: function(c, e) {
                        var l = b(c, !1);
                        l && (a.a.La(l, e),
                        0 == l.length && a.a.e.set(c, d, n))
                    },
                    $: function(b) {
                        if (e[b.nodeType] && (c(b),
                        f[b.nodeType])) {
                            var d = [];
                            a.a.ra(d, b.getElementsByTagName("*"));
                            for (var l = 0, m = d.length; l < m; l++)
                                c(d[l])
                        }
                        return b
                    },
                    removeNode: function(b) {
                        a.$(b);
                        b.parentNode && b.parentNode.removeChild(b)
                    },
                    cleanExternalData: function(a) {
                        v && "function" == typeof v.cleanData && v.cleanData([a])
                    }
                }
            }
            ;
            a.$ = a.a.F.$;
            a.removeNode = a.a.F.removeNode;
            a.b("cleanNode", a.$);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.F);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.F.oa);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.F.pc);
            (function() {
                var b = [0, "", ""]
                  , c = [1, "<table>", "</table>"]
                  , d = [3, "<table><tbody><tr>", "</tr></tbody></table>"]
                  , e = [1, "<select multiple='multiple'>", "</select>"]
                  , f = {
                    thead: c,
                    tbody: c,
                    tfoot: c,
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: d,
                    th: d,
                    option: e,
                    optgroup: e
                }
                  , g = 8 >= a.a.C;
                a.a.ma = function(c, d) {
                    var e;
                    if (v)
                        if (v.parseHTML)
                            e = v.parseHTML(c, d) || [];
                        else {
                            if ((e = v.clean([c], d)) && e[0]) {
                                for (var h = e[0]; h.parentNode && 11 !== h.parentNode.nodeType; )
                                    h = h.parentNode;
                                h.parentNode && h.parentNode.removeChild(h)
                            }
                        }
                    else {
                        (e = d) || (e = u);
                        var h = e.parentWindow || e.defaultView || x, r = a.a.$a(c).toLowerCase(), q = e.createElement("div"), p;
                        p = (r = r.match(/^<([a-z]+)[ >]/)) && f[r[1]] || b;
                        r = p[0];
                        p = "ignored<div>" + p[1] + c + p[2] + "</div>";
                        "function" == typeof h.innerShiv ? q.appendChild(h.innerShiv(p)) : (g && e.appendChild(q),
                        q.innerHTML = p,
                        g && q.parentNode.removeChild(q));
                        for (; r--; )
                            q = q.lastChild;
                        e = a.a.V(q.lastChild.childNodes)
                    }
                    return e
                }
                ;
                a.a.Cb = function(b, c) {
                    a.a.ob(b);
                    c = a.a.c(c);
                    if (null !== c && c !== n)
                        if ("string" != typeof c && (c = c.toString()),
                        v)
                            v(b).html(c);
                        else
                            for (var d = a.a.ma(c, b.ownerDocument), e = 0; e < d.length; e++)
                                b.appendChild(d[e])
                }
            })();
            a.b("utils.parseHtmlFragment", a.a.ma);
            a.b("utils.setHtml", a.a.Cb);
            a.M = function() {
                function b(c, e) {
                    if (c)
                        if (8 == c.nodeType) {
                            var f = a.M.lc(c.nodeValue);
                            null != f && e.push({
                                Lc: c,
                                cd: f
                            })
                        } else if (1 == c.nodeType)
                            for (var f = 0, g = c.childNodes, k = g.length; f < k; f++)
                                b(g[f], e)
                }
                var c = {};
                return {
                    wb: function(a) {
                        if ("function" != typeof a)
                            throw Error("You can only pass a function to ko.memoization.memoize()");
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        c[b] = a;
                        return "\x3c!--[ko_memo:" + b + "]--\x3e"
                    },
                    xc: function(a, b) {
                        var f = c[a];
                        if (f === n)
                            throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                        try {
                            return f.apply(null, b || []),
                            !0
                        } finally {
                            delete c[a]
                        }
                    },
                    yc: function(c, e) {
                        var f = [];
                        b(c, f);
                        for (var g = 0, k = f.length; g < k; g++) {
                            var l = f[g].Lc
                              , m = [l];
                            e && a.a.ra(m, e);
                            a.M.xc(f[g].cd, m);
                            l.nodeValue = "";
                            l.parentNode && l.parentNode.removeChild(l)
                        }
                    },
                    lc: function(a) {
                        return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
                    }
                }
            }();
            a.b("memoization", a.M);
            a.b("memoization.memoize", a.M.wb);
            a.b("memoization.unmemoize", a.M.xc);
            a.b("memoization.parseMemoText", a.M.lc);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.M.yc);
            a.Y = function() {
                function b() {
                    if (e)
                        for (var b = e, c = 0, m; g < e; )
                            if (m = d[g++]) {
                                if (g > b) {
                                    if (5E3 <= ++c) {
                                        g = e;
                                        a.a.$b(Error("'Too much recursion' after processing " + c + " task groups."));
                                        break
                                    }
                                    b = e
                                }
                                try {
                                    m()
                                } catch (h) {
                                    a.a.$b(h)
                                }
                            }
                }
                function c() {
                    b();
                    g = e = d.length = 0
                }
                var d = []
                  , e = 0
                  , f = 1
                  , g = 0;
                return {
                    scheduler: x.MutationObserver ? function(a) {
                        var b = u.createElement("div");
                        (new MutationObserver(a)).observe(b, {
                            attributes: !0
                        });
                        return function() {
                            b.classList.toggle("foo")
                        }
                    }(c) : u && "onreadystatechange"in u.createElement("script") ? function(a) {
                        var b = u.createElement("script");
                        b.onreadystatechange = function() {
                            b.onreadystatechange = null;
                            u.documentElement.removeChild(b);
                            b = null;
                            a()
                        }
                        ;
                        u.documentElement.appendChild(b)
                    }
                    : function(a) {
                        setTimeout(a, 0)
                    }
                    ,
                    Wa: function(b) {
                        e || a.Y.scheduler(c);
                        d[e++] = b;
                        return f++
                    },
                    cancel: function(a) {
                        a -= f - e;
                        a >= g && a < e && (d[a] = null)
                    },
                    resetForTesting: function() {
                        var a = e - g;
                        g = e = d.length = 0;
                        return a
                    },
                    md: b
                }
            }();
            a.b("tasks", a.Y);
            a.b("tasks.schedule", a.Y.Wa);
            a.b("tasks.runEarly", a.Y.md);
            a.ya = {
                throttle: function(b, c) {
                    b.throttleEvaluation = c;
                    var d = null;
                    return a.B({
                        read: b,
                        write: function(e) {
                            clearTimeout(d);
                            d = a.a.setTimeout(function() {
                                b(e)
                            }, c)
                        }
                    })
                },
                rateLimit: function(a, c) {
                    var d, e, f;
                    "number" == typeof c ? d = c : (d = c.timeout,
                    e = c.method);
                    a.cb = !1;
                    f = "notifyWhenChangesStop" == e ? V : U;
                    a.Ta(function(a) {
                        return f(a, d)
                    })
                },
                deferred: function(b, c) {
                    if (!0 !== c)
                        throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                    b.cb || (b.cb = !0,
                    b.Ta(function(c) {
                        var e;
                        return function() {
                            a.Y.cancel(e);
                            e = a.Y.Wa(c);
                            b.notifySubscribers(n, "dirty")
                        }
                    }))
                },
                notify: function(a, c) {
                    a.equalityComparer = "always" == c ? null : J
                }
            };
            var T = {
                undefined: 1,
                "boolean": 1,
                number: 1,
                string: 1
            };
            a.b("extenders", a.ya);
            a.vc = function(b, c, d) {
                this.ia = b;
                this.gb = c;
                this.Kc = d;
                this.R = !1;
                a.G(this, "dispose", this.k)
            }
            ;
            a.vc.prototype.k = function() {
                this.R = !0;
                this.Kc()
            }
            ;
            a.J = function() {
                a.a.Ya(this, D);
                D.rb(this)
            }
            ;
            var I = "change"
              , D = {
                rb: function(a) {
                    a.K = {};
                    a.Nb = 1
                },
                X: function(b, c, d) {
                    var e = this;
                    d = d || I;
                    var f = new a.vc(e,c ? b.bind(c) : b,function() {
                        a.a.La(e.K[d], f);
                        e.Ia && e.Ia(d)
                    }
                    );
                    e.sa && e.sa(d);
                    e.K[d] || (e.K[d] = []);
                    e.K[d].push(f);
                    return f
                },
                notifySubscribers: function(b, c) {
                    c = c || I;
                    c === I && this.zc();
                    if (this.Pa(c))
                        try {
                            a.l.Ub();
                            for (var d = this.K[c].slice(0), e = 0, f; f = d[e]; ++e)
                                f.R || f.gb(b)
                        } finally {
                            a.l.end()
                        }
                },
                Na: function() {
                    return this.Nb
                },
                Uc: function(a) {
                    return this.Na() !== a
                },
                zc: function() {
                    ++this.Nb
                },
                Ta: function(b) {
                    var c = this, d = a.H(c), e, f, g;
                    c.Ha || (c.Ha = c.notifySubscribers,
                    c.notifySubscribers = W);
                    var k = b(function() {
                        c.Mb = !1;
                        d && g === c && (g = c());
                        e = !1;
                        c.tb(f, g) && c.Ha(f = g)
                    });
                    c.Lb = function(a) {
                        c.Mb = e = !0;
                        g = a;
                        k()
                    }
                    ;
                    c.Kb = function(a) {
                        e || (f = a,
                        c.Ha(a, "beforeChange"))
                    }
                },
                Pa: function(a) {
                    return this.K[a] && this.K[a].length
                },
                Sc: function(b) {
                    if (b)
                        return this.K[b] && this.K[b].length || 0;
                    var c = 0;
                    a.a.D(this.K, function(a, b) {
                        "dirty" !== a && (c += b.length)
                    });
                    return c
                },
                tb: function(a, c) {
                    return !this.equalityComparer || !this.equalityComparer(a, c)
                },
                extend: function(b) {
                    var c = this;
                    b && a.a.D(b, function(b, e) {
                        var f = a.ya[b];
                        "function" == typeof f && (c = f(c, e) || c)
                    });
                    return c
                }
            };
            a.G(D, "subscribe", D.X);
            a.G(D, "extend", D.extend);
            a.G(D, "getSubscriptionsCount", D.Sc);
            a.a.ka && a.a.Xa(D, Function.prototype);
            a.J.fn = D;
            a.hc = function(a) {
                return null != a && "function" == typeof a.X && "function" == typeof a.notifySubscribers
            }
            ;
            a.b("subscribable", a.J);
            a.b("isSubscribable", a.hc);
            a.va = a.l = function() {
                function b(a) {
                    d.push(e);
                    e = a
                }
                function c() {
                    e = d.pop()
                }
                var d = [], e, f = 0;
                return {
                    Ub: b,
                    end: c,
                    oc: function(b) {
                        if (e) {
                            if (!a.hc(b))
                                throw Error("Only subscribable things can act as dependencies");
                            e.gb.call(e.Gc, b, b.Cc || (b.Cc = ++f))
                        }
                    },
                    w: function(a, d, e) {
                        try {
                            return b(),
                            a.apply(d, e || [])
                        } finally {
                            c()
                        }
                    },
                    Aa: function() {
                        if (e)
                            return e.m.Aa()
                    },
                    Sa: function() {
                        if (e)
                            return e.Sa
                    }
                }
            }();
            a.b("computedContext", a.va);
            a.b("computedContext.getDependenciesCount", a.va.Aa);
            a.b("computedContext.isInitial", a.va.Sa);
            a.b("ignoreDependencies", a.qd = a.l.w);
            var E = a.a.Yb("_latestValue");
            a.N = function(b) {
                function c() {
                    if (0 < arguments.length)
                        return c.tb(c[E], arguments[0]) && (c.ga(),
                        c[E] = arguments[0],
                        c.fa()),
                        this;
                    a.l.oc(c);
                    return c[E]
                }
                c[E] = b;
                a.a.ka || a.a.extend(c, a.J.fn);
                a.J.fn.rb(c);
                a.a.Ya(c, B);
                a.options.deferUpdates && a.ya.deferred(c, !0);
                return c
            }
            ;
            var B = {
                equalityComparer: J,
                t: function() {
                    return this[E]
                },
                fa: function() {
                    this.notifySubscribers(this[E])
                },
                ga: function() {
                    this.notifySubscribers(this[E], "beforeChange")
                }
            };
            a.a.ka && a.a.Xa(B, a.J.fn);
            var H = a.N.gd = "__ko_proto__";
            B[H] = a.N;
            a.Oa = function(b, c) {
                return null === b || b === n || b[H] === n ? !1 : b[H] === c ? !0 : a.Oa(b[H], c)
            }
            ;
            a.H = function(b) {
                return a.Oa(b, a.N)
            }
            ;
            a.Ba = function(b) {
                return "function" == typeof b && b[H] === a.N || "function" == typeof b && b[H] === a.B && b.Vc ? !0 : !1
            }
            ;
            a.b("observable", a.N);
            a.b("isObservable", a.H);
            a.b("isWriteableObservable", a.Ba);
            a.b("isWritableObservable", a.Ba);
            a.b("observable.fn", B);
            a.G(B, "peek", B.t);
            a.G(B, "valueHasMutated", B.fa);
            a.G(B, "valueWillMutate", B.ga);
            a.la = function(b) {
                b = b || [];
                if ("object" != typeof b || !("length"in b))
                    throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                b = a.N(b);
                a.a.Ya(b, a.la.fn);
                return b.extend({
                    trackArrayChanges: !0
                })
            }
            ;
            a.la.fn = {
                remove: function(b) {
                    for (var c = this.t(), d = [], e = "function" != typeof b || a.H(b) ? function(a) {
                        return a === b
                    }
                    : b, f = 0; f < c.length; f++) {
                        var g = c[f];
                        e(g) && (0 === d.length && this.ga(),
                        d.push(g),
                        c.splice(f, 1),
                        f--)
                    }
                    d.length && this.fa();
                    return d
                },
                removeAll: function(b) {
                    if (b === n) {
                        var c = this.t()
                          , d = c.slice(0);
                        this.ga();
                        c.splice(0, c.length);
                        this.fa();
                        return d
                    }
                    return b ? this.remove(function(c) {
                        return 0 <= a.a.o(b, c)
                    }) : []
                },
                destroy: function(b) {
                    var c = this.t()
                      , d = "function" != typeof b || a.H(b) ? function(a) {
                        return a === b
                    }
                    : b;
                    this.ga();
                    for (var e = c.length - 1; 0 <= e; e--)
                        d(c[e]) && (c[e]._destroy = !0);
                    this.fa()
                },
                destroyAll: function(b) {
                    return b === n ? this.destroy(function() {
                        return !0
                    }) : b ? this.destroy(function(c) {
                        return 0 <= a.a.o(b, c)
                    }) : []
                },
                indexOf: function(b) {
                    var c = this();
                    return a.a.o(c, b)
                },
                replace: function(a, c) {
                    var d = this.indexOf(a);
                    0 <= d && (this.ga(),
                    this.t()[d] = c,
                    this.fa())
                }
            };
            a.a.ka && a.a.Xa(a.la.fn, a.N.fn);
            a.a.q("pop push reverse shift sort splice unshift".split(" "), function(b) {
                a.la.fn[b] = function() {
                    var a = this.t();
                    this.ga();
                    this.Vb(a, b, arguments);
                    var d = a[b].apply(a, arguments);
                    this.fa();
                    return d === a ? this : d
                }
            });
            a.a.q(["slice"], function(b) {
                a.la.fn[b] = function() {
                    var a = this();
                    return a[b].apply(a, arguments)
                }
            });
            a.b("observableArray", a.la);
            a.ya.trackArrayChanges = function(b, c) {
                function d() {
                    if (!e) {
                        e = !0;
                        var c = b.notifySubscribers;
                        b.notifySubscribers = function(a, b) {
                            b && b !== I || ++k;
                            return c.apply(this, arguments)
                        }
                        ;
                        var d = [].concat(b.t() || []);
                        f = null;
                        g = b.X(function(c) {
                            c = [].concat(c || []);
                            if (b.Pa("arrayChange")) {
                                var e;
                                if (!f || 1 < k)
                                    f = a.a.ib(d, c, b.hb);
                                e = f
                            }
                            d = c;
                            f = null;
                            k = 0;
                            e && e.length && b.notifySubscribers(e, "arrayChange")
                        })
                    }
                }
                b.hb = {};
                c && "object" == typeof c && a.a.extend(b.hb, c);
                b.hb.sparse = !0;
                if (!b.Vb) {
                    var e = !1, f = null, g, k = 0, l = b.sa, m = b.Ia;
                    b.sa = function(a) {
                        l && l.call(b, a);
                        "arrayChange" === a && d()
                    }
                    ;
                    b.Ia = function(a) {
                        m && m.call(b, a);
                        "arrayChange" !== a || b.Pa("arrayChange") || (g.k(),
                        e = !1)
                    }
                    ;
                    b.Vb = function(b, c, d) {
                        function m(a, b, c) {
                            return l[l.length] = {
                                status: a,
                                value: b,
                                index: c
                            }
                        }
                        if (e && !k) {
                            var l = []
                              , g = b.length
                              , t = d.length
                              , G = 0;
                            switch (c) {
                            case "push":
                                G = g;
                            case "unshift":
                                for (c = 0; c < t; c++)
                                    m("added", d[c], G + c);
                                break;
                            case "pop":
                                G = g - 1;
                            case "shift":
                                g && m("deleted", b[G], G);
                                break;
                            case "splice":
                                c = Math.min(Math.max(0, 0 > d[0] ? g + d[0] : d[0]), g);
                                for (var g = 1 === t ? g : Math.min(c + (d[1] || 0), g), t = c + t - 2, G = Math.max(g, t), P = [], n = [], Q = 2; c < G; ++c,
                                ++Q)
                                    c < g && n.push(m("deleted", b[c], c)),
                                    c < t && P.push(m("added", d[Q], c));
                                a.a.dc(n, P);
                                break;
                            default:
                                return
                            }
                            f = l
                        }
                    }
                }
            }
            ;
            var s = a.a.Yb("_state");
            a.m = a.B = function(b, c, d) {
                function e() {
                    if (0 < arguments.length) {
                        if ("function" === typeof f)
                            f.apply(g.pb, arguments);
                        else
                            throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    }
                    a.l.oc(e);
                    (g.S || g.s && e.Qa()) && e.aa();
                    return g.T
                }
                "object" === typeof b ? d = b : (d = d || {},
                b && (d.read = b));
                if ("function" != typeof d.read)
                    throw Error("Pass a function that returns the value of the ko.computed");
                var f = d.write
                  , g = {
                    T: n,
                    S: !0,
                    Ra: !1,
                    Fb: !1,
                    R: !1,
                    Va: !1,
                    s: !1,
                    jd: d.read,
                    pb: c || d.owner,
                    i: d.disposeWhenNodeIsRemoved || d.i || null,
                    wa: d.disposeWhen || d.wa,
                    mb: null,
                    r: {},
                    L: 0,
                    bc: null
                };
                e[s] = g;
                e.Vc = "function" === typeof f;
                a.a.ka || a.a.extend(e, a.J.fn);
                a.J.fn.rb(e);
                a.a.Ya(e, z);
                d.pure ? (g.Va = !0,
                g.s = !0,
                a.a.extend(e, $)) : d.deferEvaluation && a.a.extend(e, aa);
                a.options.deferUpdates && a.ya.deferred(e, !0);
                g.i && (g.Fb = !0,
                g.i.nodeType || (g.i = null));
                g.s || d.deferEvaluation || e.aa();
                g.i && e.ba() && a.a.F.oa(g.i, g.mb = function() {
                    e.k()
                }
                );
                return e
            }
            ;
            var z = {
                equalityComparer: J,
                Aa: function() {
                    return this[s].L
                },
                Pb: function(a, c, d) {
                    if (this[s].Va && c === this)
                        throw Error("A 'pure' computed must not be called recursively");
                    this[s].r[a] = d;
                    d.Ga = this[s].L++;
                    d.na = c.Na()
                },
                Qa: function() {
                    var a, c, d = this[s].r;
                    for (a in d)
                        if (d.hasOwnProperty(a) && (c = d[a],
                        c.ia.Uc(c.na)))
                            return !0
                },
                bd: function() {
                    this.Fa && !this[s].Ra && this.Fa()
                },
                ba: function() {
                    return this[s].S || 0 < this[s].L
                },
                ld: function() {
                    this.Mb || this.ac()
                },
                uc: function(a) {
                    if (a.cb && !this[s].i) {
                        var c = a.X(this.bd, this, "dirty")
                          , d = a.X(this.ld, this);
                        return {
                            ia: a,
                            k: function() {
                                c.k();
                                d.k()
                            }
                        }
                    }
                    return a.X(this.ac, this)
                },
                ac: function() {
                    var b = this
                      , c = b.throttleEvaluation;
                    c && 0 <= c ? (clearTimeout(this[s].bc),
                    this[s].bc = a.a.setTimeout(function() {
                        b.aa(!0)
                    }, c)) : b.Fa ? b.Fa() : b.aa(!0)
                },
                aa: function(b) {
                    var c = this[s]
                      , d = c.wa;
                    if (!c.Ra && !c.R) {
                        if (c.i && !a.a.nb(c.i) || d && d()) {
                            if (!c.Fb) {
                                this.k();
                                return
                            }
                        } else
                            c.Fb = !1;
                        c.Ra = !0;
                        try {
                            this.Qc(b)
                        } finally {
                            c.Ra = !1
                        }
                        c.L || this.k()
                    }
                },
                Qc: function(b) {
                    var c = this[s]
                      , d = c.Va ? n : !c.L
                      , e = {
                        Hc: this,
                        Ma: c.r,
                        lb: c.L
                    };
                    a.l.Ub({
                        Gc: e,
                        gb: Y,
                        m: this,
                        Sa: d
                    });
                    c.r = {};
                    c.L = 0;
                    e = this.Pc(c, e);
                    this.tb(c.T, e) && (c.s || this.notifySubscribers(c.T, "beforeChange"),
                    c.T = e,
                    c.s ? this.zc() : b && this.notifySubscribers(c.T));
                    d && this.notifySubscribers(c.T, "awake")
                },
                Pc: function(b, c) {
                    try {
                        var d = b.jd;
                        return b.pb ? d.call(b.pb) : d()
                    } finally {
                        a.l.end(),
                        c.lb && !b.s && a.a.D(c.Ma, X),
                        b.S = !1
                    }
                },
                t: function() {
                    var a = this[s];
                    (a.S && !a.L || a.s && this.Qa()) && this.aa();
                    return a.T
                },
                Ta: function(b) {
                    a.J.fn.Ta.call(this, b);
                    this.Fa = function() {
                        this.Kb(this[s].T);
                        this[s].S = !0;
                        this.Lb(this)
                    }
                },
                k: function() {
                    var b = this[s];
                    !b.s && b.r && a.a.D(b.r, function(a, b) {
                        b.k && b.k()
                    });
                    b.i && b.mb && a.a.F.pc(b.i, b.mb);
                    b.r = null;
                    b.L = 0;
                    b.R = !0;
                    b.S = !1;
                    b.s = !1;
                    b.i = null
                }
            }
              , $ = {
                sa: function(b) {
                    var c = this
                      , d = c[s];
                    if (!d.R && d.s && "change" == b) {
                        d.s = !1;
                        if (d.S || c.Qa())
                            d.r = null,
                            d.L = 0,
                            d.S = !0,
                            c.aa();
                        else {
                            var e = [];
                            a.a.D(d.r, function(a, b) {
                                e[b.Ga] = a
                            });
                            a.a.q(e, function(a, b) {
                                var e = d.r[a]
                                  , l = c.uc(e.ia);
                                l.Ga = b;
                                l.na = e.na;
                                d.r[a] = l
                            })
                        }
                        d.R || c.notifySubscribers(d.T, "awake")
                    }
                },
                Ia: function(b) {
                    var c = this[s];
                    c.R || "change" != b || this.Pa("change") || (a.a.D(c.r, function(a, b) {
                        b.k && (c.r[a] = {
                            ia: b.ia,
                            Ga: b.Ga,
                            na: b.na
                        },
                        b.k())
                    }),
                    c.s = !0,
                    this.notifySubscribers(n, "asleep"))
                },
                Na: function() {
                    var b = this[s];
                    b.s && (b.S || this.Qa()) && this.aa();
                    return a.J.fn.Na.call(this)
                }
            }
              , aa = {
                sa: function(a) {
                    "change" != a && "beforeChange" != a || this.t()
                }
            };
            a.a.ka && a.a.Xa(z, a.J.fn);
            var R = a.N.gd;
            a.m[R] = a.N;
            z[R] = a.m;
            a.Xc = function(b) {
                return a.Oa(b, a.m)
            }
            ;
            a.Yc = function(b) {
                return a.Oa(b, a.m) && b[s] && b[s].Va
            }
            ;
            a.b("computed", a.m);
            a.b("dependentObservable", a.m);
            a.b("isComputed", a.Xc);
            a.b("isPureComputed", a.Yc);
            a.b("computed.fn", z);
            a.G(z, "peek", z.t);
            a.G(z, "dispose", z.k);
            a.G(z, "isActive", z.ba);
            a.G(z, "getDependenciesCount", z.Aa);
            a.nc = function(b, c) {
                if ("function" === typeof b)
                    return a.m(b, c, {
                        pure: !0
                    });
                b = a.a.extend({}, b);
                b.pure = !0;
                return a.m(b, c)
            }
            ;
            a.b("pureComputed", a.nc);
            (function() {
                function b(a, f, g) {
                    g = g || new d;
                    a = f(a);
                    if ("object" != typeof a || null === a || a === n || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean)
                        return a;
                    var k = a instanceof Array ? [] : {};
                    g.save(a, k);
                    c(a, function(c) {
                        var d = f(a[c]);
                        switch (typeof d) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "function":
                            k[c] = d;
                            break;
                        case "object":
                        case "undefined":
                            var h = g.get(d);
                            k[c] = h !== n ? h : b(d, f, g)
                        }
                    });
                    return k
                }
                function c(a, b) {
                    if (a instanceof Array) {
                        for (var c = 0; c < a.length; c++)
                            b(c);
                        "function" == typeof a.toJSON && b("toJSON")
                    } else
                        for (c in a)
                            b(c)
                }
                function d() {
                    this.keys = [];
                    this.Ib = []
                }
                a.wc = function(c) {
                    if (0 == arguments.length)
                        throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return b(c, function(b) {
                        for (var c = 0; a.H(b) && 10 > c; c++)
                            b = b();
                        return b
                    })
                }
                ;
                a.toJSON = function(b, c, d) {
                    b = a.wc(b);
                    return a.a.Eb(b, c, d)
                }
                ;
                d.prototype = {
                    save: function(b, c) {
                        var d = a.a.o(this.keys, b);
                        0 <= d ? this.Ib[d] = c : (this.keys.push(b),
                        this.Ib.push(c))
                    },
                    get: function(b) {
                        b = a.a.o(this.keys, b);
                        return 0 <= b ? this.Ib[b] : n
                    }
                }
            })();
            a.b("toJS", a.wc);
            a.b("toJSON", a.toJSON);
            (function() {
                a.j = {
                    u: function(b) {
                        switch (a.a.A(b)) {
                        case "option":
                            return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.xb) : 7 >= a.a.C ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                        case "select":
                            return 0 <= b.selectedIndex ? a.j.u(b.options[b.selectedIndex]) : n;
                        default:
                            return b.value
                        }
                    },
                    ha: function(b, c, d) {
                        switch (a.a.A(b)) {
                        case "option":
                            switch (typeof c) {
                            case "string":
                                a.a.e.set(b, a.d.options.xb, n);
                                "__ko__hasDomDataOptionValue__"in b && delete b.__ko__hasDomDataOptionValue__;
                                b.value = c;
                                break;
                            default:
                                a.a.e.set(b, a.d.options.xb, c),
                                b.__ko__hasDomDataOptionValue__ = !0,
                                b.value = "number" === typeof c ? c : ""
                            }
                            break;
                        case "select":
                            if ("" === c || null === c)
                                c = n;
                            for (var e = -1, f = 0, g = b.options.length, k; f < g; ++f)
                                if (k = a.j.u(b.options[f]),
                                k == c || "" == k && c === n) {
                                    e = f;
                                    break
                                }
                            if (d || 0 <= e || c === n && 1 < b.size)
                                b.selectedIndex = e;
                            break;
                        default:
                            if (null === c || c === n)
                                c = "";
                            b.value = c
                        }
                    }
                }
            })();
            a.b("selectExtensions", a.j);
            a.b("selectExtensions.readValue", a.j.u);
            a.b("selectExtensions.writeValue", a.j.ha);
            a.h = function() {
                function b(b) {
                    b = a.a.$a(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [], d = b.match(e), r, k = [], p = 0;
                    if (d) {
                        d.push(",");
                        for (var A = 0, y; y = d[A]; ++A) {
                            var t = y.charCodeAt(0);
                            if (44 === t) {
                                if (0 >= p) {
                                    c.push(r && k.length ? {
                                        key: r,
                                        value: k.join("")
                                    } : {
                                        unknown: r || k.join("")
                                    });
                                    r = p = 0;
                                    k = [];
                                    continue
                                }
                            } else if (58 === t) {
                                if (!p && !r && 1 === k.length) {
                                    r = k.pop();
                                    continue
                                }
                            } else
                                47 === t && A && 1 < y.length ? (t = d[A - 1].match(f)) && !g[t[0]] && (b = b.substr(b.indexOf(y) + 1),
                                d = b.match(e),
                                d.push(","),
                                A = -1,
                                y = "/") : 40 === t || 123 === t || 91 === t ? ++p : 41 === t || 125 === t || 93 === t ? --p : r || k.length || 34 !== t && 39 !== t || (y = y.slice(1, -1));
                            k.push(y)
                        }
                    }
                    return c
                }
                var c = ["true", "false", "null", "undefined"]
                  , d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i
                  , e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g")
                  , f = /[\])"'A-Za-z0-9_$]+$/
                  , g = {
                    "in": 1,
                    "return": 1,
                    "typeof": 1
                }
                  , k = {};
                return {
                    ta: [],
                    ea: k,
                    yb: b,
                    Ua: function(e, m) {
                        function h(b, e) {
                            var m;
                            if (!A) {
                                var l = a.getBindingHandler(b);
                                if (l && l.preprocess && !(e = l.preprocess(e, b, h)))
                                    return;
                                if (l = k[b])
                                    m = e,
                                    0 <= a.a.o(c, m) ? m = !1 : (l = m.match(d),
                                    m = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : m),
                                    l = m;
                                l && g.push("'" + b + "':function(_z){" + m + "=_z}")
                            }
                            p && (e = "function(){return " + e + " }");
                            f.push("'" + b + "':" + e)
                        }
                        m = m || {};
                        var f = []
                          , g = []
                          , p = m.valueAccessors
                          , A = m.bindingParams
                          , y = "string" === typeof e ? b(e) : e;
                        a.a.q(y, function(a) {
                            h(a.key || a.unknown, a.value)
                        });
                        g.length && h("_ko_property_writers", "{" + g.join(",") + " }");
                        return f.join(",")
                    },
                    ad: function(a, b) {
                        for (var c = 0; c < a.length; c++)
                            if (a[c].key == b)
                                return !0;
                        return !1
                    },
                    Ea: function(b, c, d, e, f) {
                        if (b && a.H(b))
                            !a.Ba(b) || f && b.t() === e || b(e);
                        else if ((b = c.get("_ko_property_writers")) && b[d])
                            b[d](e)
                    }
                }
            }();
            a.b("expressionRewriting", a.h);
            a.b("expressionRewriting.bindingRewriteValidators", a.h.ta);
            a.b("expressionRewriting.parseObjectLiteral", a.h.yb);
            a.b("expressionRewriting.preProcessBindings", a.h.Ua);
            a.b("expressionRewriting._twoWayBindings", a.h.ea);
            a.b("jsonExpressionRewriting", a.h);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.Ua);
            (function() {
                function b(a) {
                    return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue)
                }
                function c(a) {
                    return 8 == a.nodeType && k.test(f ? a.text : a.nodeValue)
                }
                function d(a, d) {
                    for (var e = a, f = 1, l = []; e = e.nextSibling; ) {
                        if (c(e) && (f--,
                        0 === f))
                            return l;
                        l.push(e);
                        b(e) && f++
                    }
                    if (!d)
                        throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
                    return null
                }
                function e(a, b) {
                    var c = d(a, b);
                    return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
                }
                var f = u && "\x3c!--test--\x3e" === u.createComment("test").text
                  , g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/
                  , k = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/
                  , l = {
                    ul: !0,
                    ol: !0
                };
                a.f = {
                    Z: {},
                    childNodes: function(a) {
                        return b(a) ? d(a) : a.childNodes
                    },
                    xa: function(c) {
                        if (b(c)) {
                            c = a.f.childNodes(c);
                            for (var d = 0, e = c.length; d < e; d++)
                                a.removeNode(c[d])
                        } else
                            a.a.ob(c)
                    },
                    da: function(c, d) {
                        if (b(c)) {
                            a.f.xa(c);
                            for (var e = c.nextSibling, f = 0, l = d.length; f < l; f++)
                                e.parentNode.insertBefore(d[f], e)
                        } else
                            a.a.da(c, d)
                    },
                    mc: function(a, c) {
                        b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                    },
                    gc: function(c, d, e) {
                        e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.f.mc(c, d)
                    },
                    firstChild: function(a) {
                        return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild
                    },
                    nextSibling: function(a) {
                        b(a) && (a = e(a));
                        return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling
                    },
                    Tc: b,
                    pd: function(a) {
                        return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null
                    },
                    kc: function(d) {
                        if (l[a.a.A(d)]) {
                            var h = d.firstChild;
                            if (h) {
                                do
                                    if (1 === h.nodeType) {
                                        var f;
                                        f = h.firstChild;
                                        var g = null;
                                        if (f) {
                                            do
                                                if (g)
                                                    g.push(f);
                                                else if (b(f)) {
                                                    var k = e(f, !0);
                                                    k ? f = k : g = [f]
                                                } else
                                                    c(f) && (g = [f]);
                                            while (f = f.nextSibling)
                                        }
                                        if (f = g)
                                            for (g = h.nextSibling,
                                            k = 0; k < f.length; k++)
                                                g ? d.insertBefore(f[k], g) : d.appendChild(f[k])
                                    }
                                while (h = h.nextSibling)
                            }
                        }
                    }
                }
            })();
            a.b("virtualElements", a.f);
            a.b("virtualElements.allowedBindings", a.f.Z);
            a.b("virtualElements.emptyNode", a.f.xa);
            a.b("virtualElements.insertAfter", a.f.gc);
            a.b("virtualElements.prepend", a.f.mc);
            a.b("virtualElements.setDomNodeChildren", a.f.da);
            (function() {
                a.Q = function() {
                    this.Fc = {}
                }
                ;
                a.a.extend(a.Q.prototype, {
                    nodeHasBindings: function(b) {
                        switch (b.nodeType) {
                        case 1:
                            return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);
                        case 8:
                            return a.f.Tc(b);
                        default:
                            return !1
                        }
                    },
                    getBindings: function(b, c) {
                        var d = this.getBindingsString(b, c)
                          , d = d ? this.parseBindingsString(d, c, b) : null;
                        return a.g.Ob(d, b, c, !1)
                    },
                    getBindingAccessors: function(b, c) {
                        var d = this.getBindingsString(b, c)
                          , d = d ? this.parseBindingsString(d, c, b, {
                            valueAccessors: !0
                        }) : null;
                        return a.g.Ob(d, b, c, !0)
                    },
                    getBindingsString: function(b) {
                        switch (b.nodeType) {
                        case 1:
                            return b.getAttribute("data-bind");
                        case 8:
                            return a.f.pd(b);
                        default:
                            return null
                        }
                    },
                    parseBindingsString: function(b, c, d, e) {
                        try {
                            var f = this.Fc, g = b + (e && e.valueAccessors || ""), k;
                            if (!(k = f[g])) {
                                var l, m = "with($context){with($data||{}){return{" + a.h.Ua(b, e) + "}}}";
                                l = new Function("$context","$element",m);
                                k = f[g] = l
                            }
                            return k(c, d)
                        } catch (h) {
                            throw h.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + h.message,
                            h;
                        }
                    }
                });
                a.Q.instance = new a.Q
            })();
            a.b("bindingProvider", a.Q);
            (function() {
                function b(a) {
                    return function() {
                        return a
                    }
                }
                function c(a) {
                    return a()
                }
                function d(b) {
                    return a.a.Ca(a.l.w(b), function(a, c) {
                        return function() {
                            return b()[c]
                        }
                    })
                }
                function e(c, e, h) {
                    return "function" === typeof c ? d(c.bind(null, e, h)) : a.a.Ca(c, b)
                }
                function f(a, b) {
                    return d(this.getBindings.bind(this, a, b))
                }
                function g(b, c, d) {
                    var e, h = a.f.firstChild(c), f = a.Q.instance, m = f.preprocessNode;
                    if (m) {
                        for (; e = h; )
                            h = a.f.nextSibling(e),
                            m.call(f, e);
                        h = a.f.firstChild(c)
                    }
                    for (; e = h; )
                        h = a.f.nextSibling(e),
                        k(b, e, d)
                }
                function k(b, c, d) {
                    var e = !0
                      , h = 1 === c.nodeType;
                    h && a.f.kc(c);
                    if (h && d || a.Q.instance.nodeHasBindings(c))
                        e = m(c, null, b, d).shouldBindDescendants;
                    e && !r[a.a.A(c)] && g(b, c, !h)
                }
                function l(b) {
                    var c = []
                      , d = {}
                      , e = [];
                    a.a.D(b, function Z(h) {
                        if (!d[h]) {
                            var f = a.getBindingHandler(h);
                            f && (f.after && (e.push(h),
                            a.a.q(f.after, function(c) {
                                if (b[c]) {
                                    if (-1 !== a.a.o(e, c))
                                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", "));
                                    Z(c)
                                }
                            }),
                            e.length--),
                            c.push({
                                key: h,
                                fc: f
                            }));
                            d[h] = !0
                        }
                    });
                    return c
                }
                function m(b, d, e, h) {
                    var m = a.a.e.get(b, q);
                    if (!d) {
                        if (m)
                            throw Error("You cannot apply bindings multiple times to the same element.");
                        a.a.e.set(b, q, !0)
                    }
                    !m && h && a.tc(b, e);
                    var g;
                    if (d && "function" !== typeof d)
                        g = d;
                    else {
                        var k = a.Q.instance
                          , r = k.getBindingAccessors || f
                          , p = a.B(function() {
                            (g = d ? d(e, b) : r.call(k, b, e)) && e.P && e.P();
                            return g
                        }, null, {
                            i: b
                        });
                        g && p.ba() || (p = null)
                    }
                    var u;
                    if (g) {
                        var v = p ? function(a) {
                            return function() {
                                return c(p()[a])
                            }
                        }
                        : function(a) {
                            return g[a]
                        }
                          , s = function() {
                            return a.a.Ca(p ? p() : g, c)
                        };
                        s.get = function(a) {
                            return g[a] && c(v(a))
                        }
                        ;
                        s.has = function(a) {
                            return a in g
                        }
                        ;
                        h = l(g);
                        a.a.q(h, function(c) {
                            var d = c.fc.init
                              , h = c.fc.update
                              , f = c.key;
                            if (8 === b.nodeType && !a.f.Z[f])
                                throw Error("The binding '" + f + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof d && a.l.w(function() {
                                    var a = d(b, v(f), s, e.$data, e);
                                    if (a && a.controlsDescendantBindings) {
                                        if (u !== n)
                                            throw Error("Multiple bindings (" + u + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        u = f
                                    }
                                }),
                                "function" == typeof h && a.B(function() {
                                    h(b, v(f), s, e.$data, e)
                                }, null, {
                                    i: b
                                })
                            } catch (m) {
                                throw m.message = 'Unable to process binding "' + f + ": " + g[f] + '"\nMessage: ' + m.message,
                                m;
                            }
                        })
                    }
                    return {
                        shouldBindDescendants: u === n
                    }
                }
                function h(b) {
                    return b && b instanceof a.U ? b : new a.U(b)
                }
                a.d = {};
                var r = {
                    script: !0,
                    textarea: !0,
                    template: !0
                };
                a.getBindingHandler = function(b) {
                    return a.d[b]
                }
                ;
                a.U = function(b, c, d, e) {
                    var h = this, f = "function" == typeof b && !a.H(b), m, g = a.B(function() {
                        var m = f ? b() : b
                          , l = a.a.c(m);
                        c ? (c.P && c.P(),
                        a.a.extend(h, c),
                        g && (h.P = g)) : (h.$parents = [],
                        h.$root = l,
                        h.ko = a);
                        h.$rawData = m;
                        h.$data = l;
                        d && (h[d] = l);
                        e && e(h, c, l);
                        return h.$data
                    }, null, {
                        wa: function() {
                            return m && !a.a.Qb(m)
                        },
                        i: !0
                    });
                    g.ba() && (h.P = g,
                    g.equalityComparer = null,
                    m = [],
                    g.Ac = function(b) {
                        m.push(b);
                        a.a.F.oa(b, function(b) {
                            a.a.La(m, b);
                            m.length || (g.k(),
                            h.P = g = n)
                        })
                    }
                    )
                }
                ;
                a.U.prototype.createChildContext = function(b, c, d) {
                    return new a.U(b,this,c,function(a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a)
                    }
                    )
                }
                ;
                a.U.prototype.extend = function(b) {
                    return new a.U(this.P || this.$data,this,null,function(c, d) {
                        c.$rawData = d.$rawData;
                        a.a.extend(c, "function" == typeof b ? b() : b)
                    }
                    )
                }
                ;
                var q = a.a.e.I()
                  , p = a.a.e.I();
                a.tc = function(b, c) {
                    if (2 == arguments.length)
                        a.a.e.set(b, p, c),
                        c.P && c.P.Ac(b);
                    else
                        return a.a.e.get(b, p)
                }
                ;
                a.Ja = function(b, c, d) {
                    1 === b.nodeType && a.f.kc(b);
                    return m(b, c, h(d), !0)
                }
                ;
                a.Dc = function(b, c, d) {
                    d = h(d);
                    return a.Ja(b, e(c, d, b), d)
                }
                ;
                a.eb = function(a, b) {
                    1 !== b.nodeType && 8 !== b.nodeType || g(h(a), b, !0)
                }
                ;
                a.Rb = function(a, b) {
                    !v && x.jQuery && (v = x.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType)
                        throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || x.document.body;
                    k(h(a), b, !0)
                }
                ;
                a.kb = function(b) {
                    switch (b.nodeType) {
                    case 1:
                    case 8:
                        var c = a.tc(b);
                        if (c)
                            return c;
                        if (b.parentNode)
                            return a.kb(b.parentNode)
                    }
                    return n
                }
                ;
                a.Jc = function(b) {
                    return (b = a.kb(b)) ? b.$data : n
                }
                ;
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.Rb);
                a.b("applyBindingsToDescendants", a.eb);
                a.b("applyBindingAccessorsToNode", a.Ja);
                a.b("applyBindingsToNode", a.Dc);
                a.b("contextFor", a.kb);
                a.b("dataFor", a.Jc)
            })();
            (function(b) {
                function c(c, e) {
                    var m = f.hasOwnProperty(c) ? f[c] : b, h;
                    m ? m.X(e) : (m = f[c] = new a.J,
                    m.X(e),
                    d(c, function(b, d) {
                        var e = !(!d || !d.synchronous);
                        g[c] = {
                            definition: b,
                            Zc: e
                        };
                        delete f[c];
                        h || e ? m.notifySubscribers(b) : a.Y.Wa(function() {
                            m.notifySubscribers(b)
                        })
                    }),
                    h = !0)
                }
                function d(a, b) {
                    e("getConfig", [a], function(c) {
                        c ? e("loadComponent", [a, c], function(a) {
                            b(a, c)
                        }) : b(null, null)
                    })
                }
                function e(c, d, f, h) {
                    h || (h = a.g.loaders.slice(0));
                    var g = h.shift();
                    if (g) {
                        var q = g[c];
                        if (q) {
                            var p = !1;
                            if (q.apply(g, d.concat(function(a) {
                                p ? f(null) : null !== a ? f(a) : e(c, d, f, h)
                            })) !== b && (p = !0,
                            !g.suppressLoaderExceptions))
                                throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else
                            e(c, d, f, h)
                    } else
                        f(null)
                }
                var f = {}
                  , g = {};
                a.g = {
                    get: function(d, e) {
                        var f = g.hasOwnProperty(d) ? g[d] : b;
                        f ? f.Zc ? a.l.w(function() {
                            e(f.definition)
                        }) : a.Y.Wa(function() {
                            e(f.definition)
                        }) : c(d, e)
                    },
                    Xb: function(a) {
                        delete g[a]
                    },
                    Jb: e
                };
                a.g.loaders = [];
                a.b("components", a.g);
                a.b("components.get", a.g.get);
                a.b("components.clearCachedDefinition", a.g.Xb)
            })();
            (function() {
                function b(b, c, d, e) {
                    function g() {
                        0 === --y && e(k)
                    }
                    var k = {}
                      , y = 2
                      , t = d.template;
                    d = d.viewModel;
                    t ? f(c, t, function(c) {
                        a.g.Jb("loadTemplate", [b, c], function(a) {
                            k.template = a;
                            g()
                        })
                    }) : g();
                    d ? f(c, d, function(c) {
                        a.g.Jb("loadViewModel", [b, c], function(a) {
                            k[l] = a;
                            g()
                        })
                    }) : g()
                }
                function c(a, b, d) {
                    if ("function" === typeof b)
                        d(function(a) {
                            return new b(a)
                        });
                    else if ("function" === typeof b[l])
                        d(b[l]);
                    else if ("instance"in b) {
                        var e = b.instance;
                        d(function() {
                            return e
                        })
                    } else
                        "viewModel"in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b)
                }
                function d(b) {
                    switch (a.a.A(b)) {
                    case "script":
                        return a.a.ma(b.text);
                    case "textarea":
                        return a.a.ma(b.value);
                    case "template":
                        if (e(b.content))
                            return a.a.ua(b.content.childNodes)
                    }
                    return a.a.ua(b.childNodes)
                }
                function e(a) {
                    return x.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType
                }
                function f(a, b, c) {
                    "string" === typeof b.require ? O || x.require ? (O || x.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b)
                }
                function g(a) {
                    return function(b) {
                        throw Error("Component '" + a + "': " + b);
                    }
                }
                var k = {};
                a.g.register = function(b, c) {
                    if (!c)
                        throw Error("Invalid configuration for " + b);
                    if (a.g.ub(b))
                        throw Error("Component " + b + " is already registered");
                    k[b] = c
                }
                ;
                a.g.ub = function(a) {
                    return k.hasOwnProperty(a)
                }
                ;
                a.g.od = function(b) {
                    delete k[b];
                    a.g.Xb(b)
                }
                ;
                a.g.Zb = {
                    getConfig: function(a, b) {
                        b(k.hasOwnProperty(a) ? k[a] : null)
                    },
                    loadComponent: function(a, c, d) {
                        var e = g(a);
                        f(e, c, function(c) {
                            b(a, e, c, d)
                        })
                    },
                    loadTemplate: function(b, c, f) {
                        b = g(b);
                        if ("string" === typeof c)
                            f(a.a.ma(c));
                        else if (c instanceof Array)
                            f(c);
                        else if (e(c))
                            f(a.a.V(c.childNodes));
                        else if (c.element)
                            if (c = c.element,
                            x.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType)
                                f(d(c));
                            else if ("string" === typeof c) {
                                var l = u.getElementById(c);
                                l ? f(d(l)) : b("Cannot find element with ID " + c)
                            } else
                                b("Unknown element type: " + c);
                        else
                            b("Unknown template value: " + c)
                    },
                    loadViewModel: function(a, b, d) {
                        c(g(a), b, d)
                    }
                };
                var l = "createViewModel";
                a.b("components.register", a.g.register);
                a.b("components.isRegistered", a.g.ub);
                a.b("components.unregister", a.g.od);
                a.b("components.defaultLoader", a.g.Zb);
                a.g.loaders.push(a.g.Zb);
                a.g.Bc = k
            })();
            (function() {
                function b(b, e) {
                    var f = b.getAttribute("params");
                    if (f) {
                        var f = c.parseBindingsString(f, e, b, {
                            valueAccessors: !0,
                            bindingParams: !0
                        })
                          , f = a.a.Ca(f, function(c) {
                            return a.m(c, null, {
                                i: b
                            })
                        })
                          , g = a.a.Ca(f, function(c) {
                            var e = c.t();
                            return c.ba() ? a.m({
                                read: function() {
                                    return a.a.c(c())
                                },
                                write: a.Ba(e) && function(a) {
                                    c()(a)
                                }
                                ,
                                i: b
                            }) : e
                        });
                        g.hasOwnProperty("$raw") || (g.$raw = f);
                        return g
                    }
                    return {
                        $raw: {}
                    }
                }
                a.g.getComponentNameForNode = function(b) {
                    var c = a.a.A(b);
                    if (a.g.ub(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.C && b.tagName === c))
                        return c
                }
                ;
                a.g.Ob = function(c, e, f, g) {
                    if (1 === e.nodeType) {
                        var k = a.g.getComponentNameForNode(e);
                        if (k) {
                            c = c || {};
                            if (c.component)
                                throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var l = {
                                name: k,
                                params: b(e, f)
                            };
                            c.component = g ? function() {
                                return l
                            }
                            : l
                        }
                    }
                    return c
                }
                ;
                var c = new a.Q;
                9 > a.a.C && (a.g.register = function(a) {
                    return function(b) {
                        u.createElement(b);
                        return a.apply(this, arguments)
                    }
                }(a.g.register),
                u.createDocumentFragment = function(b) {
                    return function() {
                        var c = b(), f = a.g.Bc, g;
                        for (g in f)
                            f.hasOwnProperty(g) && c.createElement(g);
                        return c
                    }
                }(u.createDocumentFragment))
            })();
            (function(b) {
                function c(b, c, d) {
                    c = c.template;
                    if (!c)
                        throw Error("Component '" + b + "' has no template");
                    b = a.a.ua(c);
                    a.f.da(d, b)
                }
                function d(a, b, c, d) {
                    var e = a.createViewModel;
                    return e ? e.call(a, d, {
                        element: b,
                        templateNodes: c
                    }) : d
                }
                var e = 0;
                a.d.component = {
                    init: function(f, g, k, l, m) {
                        function h() {
                            var a = r && r.dispose;
                            "function" === typeof a && a.call(r);
                            q = r = null
                        }
                        var r, q, p = a.a.V(a.f.childNodes(f));
                        a.a.F.oa(f, h);
                        a.m(function() {
                            var l = a.a.c(g()), k, t;
                            "string" === typeof l ? k = l : (k = a.a.c(l.name),
                            t = a.a.c(l.params));
                            if (!k)
                                throw Error("No component name specified");
                            var n = q = ++e;
                            a.g.get(k, function(e) {
                                if (q === n) {
                                    h();
                                    if (!e)
                                        throw Error("Unknown component '" + k + "'");
                                    c(k, e, f);
                                    var g = d(e, f, p, t);
                                    e = m.createChildContext(g, b, function(a) {
                                        a.$component = g;
                                        a.$componentTemplateNodes = p
                                    });
                                    r = g;
                                    a.eb(e, f)
                                }
                            })
                        }, null, {
                            i: f
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.f.Z.component = !0
            })();
            var S = {
                "class": "className",
                "for": "htmlFor"
            };
            a.d.attr = {
                update: function(b, c) {
                    var d = a.a.c(c()) || {};
                    a.a.D(d, function(c, d) {
                        d = a.a.c(d);
                        var g = !1 === d || null === d || d === n;
                        g && b.removeAttribute(c);
                        8 >= a.a.C && c in S ? (c = S[c],
                        g ? b.removeAttribute(c) : b[c] = d) : g || b.setAttribute(c, d.toString());
                        "name" === c && a.a.rc(b, g ? "" : d.toString())
                    })
                }
            };
            (function() {
                a.d.checked = {
                    after: ["value", "attr"],
                    init: function(b, c, d) {
                        function e() {
                            var e = b.checked
                              , f = p ? g() : e;
                            if (!a.va.Sa() && (!l || e)) {
                                var m = a.l.w(c);
                                if (h) {
                                    var k = r ? m.t() : m;
                                    q !== f ? (e && (a.a.pa(k, f, !0),
                                    a.a.pa(k, q, !1)),
                                    q = f) : a.a.pa(k, f, e);
                                    r && a.Ba(m) && m(k)
                                } else
                                    a.h.Ea(m, d, "checked", f, !0)
                            }
                        }
                        function f() {
                            var d = a.a.c(c());
                            b.checked = h ? 0 <= a.a.o(d, g()) : k ? d : g() === d
                        }
                        var g = a.nc(function() {
                            return d.has("checkedValue") ? a.a.c(d.get("checkedValue")) : d.has("value") ? a.a.c(d.get("value")) : b.value
                        })
                          , k = "checkbox" == b.type
                          , l = "radio" == b.type;
                        if (k || l) {
                            var m = c()
                              , h = k && a.a.c(m)instanceof Array
                              , r = !(h && m.push && m.splice)
                              , q = h ? g() : n
                              , p = l || h;
                            l && !b.name && a.d.uniqueName.init(b, function() {
                                return !0
                            });
                            a.m(e, null, {
                                i: b
                            });
                            a.a.p(b, "click", e);
                            a.m(f, null, {
                                i: b
                            });
                            m = n
                        }
                    }
                };
                a.h.ea.checked = !0;
                a.d.checkedValue = {
                    update: function(b, c) {
                        b.value = a.a.c(c())
                    }
                }
            })();
            a.d.css = {
                update: function(b, c) {
                    var d = a.a.c(c());
                    null !== d && "object" == typeof d ? a.a.D(d, function(c, d) {
                        d = a.a.c(d);
                        a.a.bb(b, c, d)
                    }) : (d = a.a.$a(String(d || "")),
                    a.a.bb(b, b.__ko__cssValue, !1),
                    b.__ko__cssValue = d,
                    a.a.bb(b, d, !0))
                }
            };
            a.d.enable = {
                update: function(b, c) {
                    var d = a.a.c(c());
                    d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0)
                }
            };
            a.d.disable = {
                update: function(b, c) {
                    a.d.enable.update(b, function() {
                        return !a.a.c(c())
                    })
                }
            };
            a.d.event = {
                init: function(b, c, d, e, f) {
                    var g = c() || {};
                    a.a.D(g, function(g) {
                        "string" == typeof g && a.a.p(b, g, function(b) {
                            var m, h = c()[g];
                            if (h) {
                                try {
                                    var r = a.a.V(arguments);
                                    e = f.$data;
                                    r.unshift(e);
                                    m = h.apply(e, r)
                                } finally {
                                    !0 !== m && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
                                }
                                !1 === d.get(g + "Bubble") && (b.cancelBubble = !0,
                                b.stopPropagation && b.stopPropagation())
                            }
                        })
                    })
                }
            };
            a.d.foreach = {
                ic: function(b) {
                    return function() {
                        var c = b()
                          , d = a.a.zb(c);
                        if (!d || "number" == typeof d.length)
                            return {
                                foreach: c,
                                templateEngine: a.W.sb
                            };
                        a.a.c(c);
                        return {
                            foreach: d.data,
                            as: d.as,
                            includeDestroyed: d.includeDestroyed,
                            afterAdd: d.afterAdd,
                            beforeRemove: d.beforeRemove,
                            afterRender: d.afterRender,
                            beforeMove: d.beforeMove,
                            afterMove: d.afterMove,
                            templateEngine: a.W.sb
                        }
                    }
                },
                init: function(b, c) {
                    return a.d.template.init(b, a.d.foreach.ic(c))
                },
                update: function(b, c, d, e, f) {
                    return a.d.template.update(b, a.d.foreach.ic(c), d, e, f)
                }
            };
            a.h.ta.foreach = !1;
            a.f.Z.foreach = !0;
            a.d.hasfocus = {
                init: function(b, c, d) {
                    function e(e) {
                        b.__ko_hasfocusUpdating = !0;
                        var f = b.ownerDocument;
                        if ("activeElement"in f) {
                            var g;
                            try {
                                g = f.activeElement
                            } catch (h) {
                                g = f.body
                            }
                            e = g === b
                        }
                        f = c();
                        a.h.Ea(f, d, "hasfocus", e, !0);
                        b.__ko_hasfocusLastValue = e;
                        b.__ko_hasfocusUpdating = !1
                    }
                    var f = e.bind(null, !0)
                      , g = e.bind(null, !1);
                    a.a.p(b, "focus", f);
                    a.a.p(b, "focusin", f);
                    a.a.p(b, "blur", g);
                    a.a.p(b, "focusout", g)
                },
                update: function(b, c) {
                    var d = !!a.a.c(c());
                    b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(),
                    !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(),
                    a.l.w(a.a.Da, null, [b, d ? "focusin" : "focusout"]))
                }
            };
            a.h.ea.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.h.ea.hasFocus = !0;
            a.d.html = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, c) {
                    a.a.Cb(b, c())
                }
            };
            K("if");
            K("ifnot", !1, !0);
            K("with", !0, !1, function(a, c) {
                return a.createChildContext(c)
            });
            var L = {};
            a.d.options = {
                init: function(b) {
                    if ("select" !== a.a.A(b))
                        throw Error("options binding applies only to SELECT elements");
                    for (; 0 < b.length; )
                        b.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, c, d) {
                    function e() {
                        return a.a.Ka(b.options, function(a) {
                            return a.selected
                        })
                    }
                    function f(a, b, c) {
                        var d = typeof b;
                        return "function" == d ? b(a) : "string" == d ? a[b] : c
                    }
                    function g(c, e) {
                        if (A && h)
                            a.j.ha(b, a.a.c(d.get("value")), !0);
                        else if (p.length) {
                            var f = 0 <= a.a.o(p, a.j.u(e[0]));
                            a.a.sc(e[0], f);
                            A && !f && a.l.w(a.a.Da, null, [b, "change"])
                        }
                    }
                    var k = b.multiple
                      , l = 0 != b.length && k ? b.scrollTop : null
                      , m = a.a.c(c())
                      , h = d.get("valueAllowUnset") && d.has("value")
                      , r = d.get("optionsIncludeDestroyed");
                    c = {};
                    var q, p = [];
                    h || (k ? p = a.a.fb(e(), a.j.u) : 0 <= b.selectedIndex && p.push(a.j.u(b.options[b.selectedIndex])));
                    m && ("undefined" == typeof m.length && (m = [m]),
                    q = a.a.Ka(m, function(b) {
                        return r || b === n || null === b || !a.a.c(b._destroy)
                    }),
                    d.has("optionsCaption") && (m = a.a.c(d.get("optionsCaption")),
                    null !== m && m !== n && q.unshift(L)));
                    var A = !1;
                    c.beforeRemove = function(a) {
                        b.removeChild(a)
                    }
                    ;
                    m = g;
                    d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (m = function(b, c) {
                        g(0, c);
                        a.l.w(d.get("optionsAfterRender"), null, [c[0], b !== L ? b : n])
                    }
                    );
                    a.a.Bb(b, q, function(c, e, g) {
                        g.length && (p = !h && g[0].selected ? [a.j.u(g[0])] : [],
                        A = !0);
                        e = b.ownerDocument.createElement("option");
                        c === L ? (a.a.Za(e, d.get("optionsCaption")),
                        a.j.ha(e, n)) : (g = f(c, d.get("optionsValue"), c),
                        a.j.ha(e, a.a.c(g)),
                        c = f(c, d.get("optionsText"), g),
                        a.a.Za(e, c));
                        return [e]
                    }, c, m);
                    a.l.w(function() {
                        h ? a.j.ha(b, a.a.c(d.get("value")), !0) : (k ? p.length && e().length < p.length : p.length && 0 <= b.selectedIndex ? a.j.u(b.options[b.selectedIndex]) !== p[0] : p.length || 0 <= b.selectedIndex) && a.a.Da(b, "change")
                    });
                    a.a.Nc(b);
                    l && 20 < Math.abs(l - b.scrollTop) && (b.scrollTop = l)
                }
            };
            a.d.options.xb = a.a.e.I();
            a.d.selectedOptions = {
                after: ["options", "foreach"],
                init: function(b, c, d) {
                    a.a.p(b, "change", function() {
                        var e = c()
                          , f = [];
                        a.a.q(b.getElementsByTagName("option"), function(b) {
                            b.selected && f.push(a.j.u(b))
                        });
                        a.h.Ea(e, d, "selectedOptions", f)
                    })
                },
                update: function(b, c) {
                    if ("select" != a.a.A(b))
                        throw Error("values binding applies only to SELECT elements");
                    var d = a.a.c(c())
                      , e = b.scrollTop;
                    d && "number" == typeof d.length && a.a.q(b.getElementsByTagName("option"), function(b) {
                        var c = 0 <= a.a.o(d, a.j.u(b));
                        b.selected != c && a.a.sc(b, c)
                    });
                    b.scrollTop = e
                }
            };
            a.h.ea.selectedOptions = !0;
            a.d.style = {
                update: function(b, c) {
                    var d = a.a.c(c() || {});
                    a.a.D(d, function(c, d) {
                        d = a.a.c(d);
                        if (null === d || d === n || !1 === d)
                            d = "";
                        b.style[c] = d
                    })
                }
            };
            a.d.submit = {
                init: function(b, c, d, e, f) {
                    if ("function" != typeof c())
                        throw Error("The value for a submit binding must be a function");
                    a.a.p(b, "submit", function(a) {
                        var d, e = c();
                        try {
                            d = e.call(f.$data, b)
                        } finally {
                            !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                        }
                    })
                }
            };
            a.d.text = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, c) {
                    a.a.Za(b, c())
                }
            };
            a.f.Z.text = !0;
            (function() {
                if (x && x.navigator)
                    var b = function(a) {
                        if (a)
                            return parseFloat(a[1])
                    }
                      , c = x.opera && x.opera.version && parseInt(x.opera.version())
                      , d = x.navigator.userAgent
                      , e = b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i))
                      , f = b(d.match(/Firefox\/([^ ]*)/));
                if (10 > a.a.C)
                    var g = a.a.e.I()
                      , k = a.a.e.I()
                      , l = function(b) {
                        var c = this.activeElement;
                        (c = c && a.a.e.get(c, k)) && c(b)
                    }
                      , m = function(b, c) {
                        var d = b.ownerDocument;
                        a.a.e.get(d, g) || (a.a.e.set(d, g, !0),
                        a.a.p(d, "selectionchange", l));
                        a.a.e.set(b, k, c)
                    };
                a.d.textInput = {
                    init: function(b, d, g) {
                        function l(c, d) {
                            a.a.p(b, c, d)
                        }
                        function k() {
                            var c = a.a.c(d());
                            if (null === c || c === n)
                                c = "";
                            v !== n && c === v ? a.a.setTimeout(k, 4) : b.value !== c && (u = c,
                            b.value = c)
                        }
                        function y() {
                            s || (v = b.value,
                            s = a.a.setTimeout(t, 4))
                        }
                        function t() {
                            clearTimeout(s);
                            v = s = n;
                            var c = b.value;
                            u !== c && (u = c,
                            a.h.Ea(d(), g, "textInput", c))
                        }
                        var u = b.value, s, v, x = 9 == a.a.C ? y : t;
                        10 > a.a.C ? (l("propertychange", function(a) {
                            "value" === a.propertyName && x(a)
                        }),
                        8 == a.a.C && (l("keyup", t),
                        l("keydown", t)),
                        8 <= a.a.C && (m(b, x),
                        l("dragend", y))) : (l("input", t),
                        5 > e && "textarea" === a.a.A(b) ? (l("keydown", y),
                        l("paste", y),
                        l("cut", y)) : 11 > c ? l("keydown", y) : 4 > f && (l("DOMAutoComplete", t),
                        l("dragdrop", t),
                        l("drop", t)));
                        l("change", t);
                        a.m(k, null, {
                            i: b
                        })
                    }
                };
                a.h.ea.textInput = !0;
                a.d.textinput = {
                    preprocess: function(a, b, c) {
                        c("textInput", a)
                    }
                }
            })();
            a.d.uniqueName = {
                init: function(b, c) {
                    if (c()) {
                        var d = "ko_unique_" + ++a.d.uniqueName.Ic;
                        a.a.rc(b, d)
                    }
                }
            };
            a.d.uniqueName.Ic = 0;
            a.d.value = {
                after: ["options", "foreach"],
                init: function(b, c, d) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
                        var e = ["change"]
                          , f = d.get("valueUpdate")
                          , g = !1
                          , k = null;
                        f && ("string" == typeof f && (f = [f]),
                        a.a.ra(e, f),
                        e = a.a.Tb(e));
                        var l = function() {
                            k = null;
                            g = !1;
                            var e = c()
                              , f = a.j.u(b);
                            a.h.Ea(e, d, "value", f)
                        };
                        !a.a.C || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.o(e, "propertychange") || (a.a.p(b, "propertychange", function() {
                            g = !0
                        }),
                        a.a.p(b, "focus", function() {
                            g = !1
                        }),
                        a.a.p(b, "blur", function() {
                            g && l()
                        }));
                        a.a.q(e, function(c) {
                            var d = l;
                            a.a.nd(c, "after") && (d = function() {
                                k = a.j.u(b);
                                a.a.setTimeout(l, 0)
                            }
                            ,
                            c = c.substring(5));
                            a.a.p(b, c, d)
                        });
                        var m = function() {
                            var e = a.a.c(c())
                              , f = a.j.u(b);
                            if (null !== k && e === k)
                                a.a.setTimeout(m, 0);
                            else if (e !== f)
                                if ("select" === a.a.A(b)) {
                                    var g = d.get("valueAllowUnset")
                                      , f = function() {
                                        a.j.ha(b, e, g)
                                    };
                                    f();
                                    g || e === a.j.u(b) ? a.a.setTimeout(f, 0) : a.l.w(a.a.Da, null, [b, "change"])
                                } else
                                    a.j.ha(b, e)
                        };
                        a.m(m, null, {
                            i: b
                        })
                    } else
                        a.Ja(b, {
                            checkedValue: c
                        })
                },
                update: function() {}
            };
            a.h.ea.value = !0;
            a.d.visible = {
                update: function(b, c) {
                    var d = a.a.c(c())
                      , e = "none" != b.style.display;
                    d && !e ? b.style.display = "" : !d && e && (b.style.display = "none")
                }
            };
            (function(b) {
                a.d[b] = {
                    init: function(c, d, e, f, g) {
                        return a.d.event.init.call(this, c, function() {
                            var a = {};
                            a[b] = d();
                            return a
                        }, e, f, g)
                    }
                }
            })("click");
            a.O = function() {}
            ;
            a.O.prototype.renderTemplateSource = function() {
                throw Error("Override renderTemplateSource");
            }
            ;
            a.O.prototype.createJavaScriptEvaluatorBlock = function() {
                throw Error("Override createJavaScriptEvaluatorBlock");
            }
            ;
            a.O.prototype.makeTemplateSource = function(b, c) {
                if ("string" == typeof b) {
                    c = c || u;
                    var d = c.getElementById(b);
                    if (!d)
                        throw Error("Cannot find template with ID " + b);
                    return new a.v.n(d)
                }
                if (1 == b.nodeType || 8 == b.nodeType)
                    return new a.v.qa(b);
                throw Error("Unknown template type: " + b);
            }
            ;
            a.O.prototype.renderTemplate = function(a, c, d, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, c, d, e)
            }
            ;
            a.O.prototype.isTemplateRewritten = function(a, c) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten")
            }
            ;
            a.O.prototype.rewriteTemplate = function(a, c, d) {
                a = this.makeTemplateSource(a, d);
                c = c(a.text());
                a.text(c);
                a.data("isRewritten", !0)
            }
            ;
            a.b("templateEngine", a.O);
            a.Gb = function() {
                function b(b, c, d, k) {
                    b = a.h.yb(b);
                    for (var l = a.h.ta, m = 0; m < b.length; m++) {
                        var h = b[m].key;
                        if (l.hasOwnProperty(h)) {
                            var r = l[h];
                            if ("function" === typeof r) {
                                if (h = r(b[m].value))
                                    throw Error(h);
                            } else if (!r)
                                throw Error("This template engine does not support the '" + h + "' binding within its templates");
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.Ua(b, {
                        valueAccessors: !0
                    }) + " } })()},'" + d.toLowerCase() + "')";
                    return k.createJavaScriptEvaluatorBlock(d) + c
                }
                var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi
                  , d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    Oc: function(b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function(b) {
                            return a.Gb.dd(b, c)
                        }, d)
                    },
                    dd: function(a, f) {
                        return a.replace(c, function(a, c, d, e, h) {
                            return b(h, c, d, f)
                        }).replace(d, function(a, c) {
                            return b(c, "\x3c!-- ko --\x3e", "#comment", f)
                        })
                    },
                    Ec: function(b, c) {
                        return a.M.wb(function(d, k) {
                            var l = d.nextSibling;
                            l && l.nodeName.toLowerCase() === c && a.Ja(l, b, k)
                        })
                    }
                }
            }();
            a.b("__tr_ambtns", a.Gb.Ec);
            (function() {
                a.v = {};
                a.v.n = function(b) {
                    if (this.n = b) {
                        var c = a.a.A(b);
                        this.ab = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4
                    }
                }
                ;
                a.v.n.prototype.text = function() {
                    var b = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                    if (0 == arguments.length)
                        return this.n[b];
                    var c = arguments[0];
                    "innerHTML" === b ? a.a.Cb(this.n, c) : this.n[b] = c
                }
                ;
                var b = a.a.e.I() + "_";
                a.v.n.prototype.data = function(c) {
                    if (1 === arguments.length)
                        return a.a.e.get(this.n, b + c);
                    a.a.e.set(this.n, b + c, arguments[1])
                }
                ;
                var c = a.a.e.I();
                a.v.n.prototype.nodes = function() {
                    var b = this.n;
                    if (0 == arguments.length)
                        return (a.a.e.get(b, c) || {}).jb || (3 === this.ab ? b.content : 4 === this.ab ? b : n);
                    a.a.e.set(b, c, {
                        jb: arguments[0]
                    })
                }
                ;
                a.v.qa = function(a) {
                    this.n = a
                }
                ;
                a.v.qa.prototype = new a.v.n;
                a.v.qa.prototype.text = function() {
                    if (0 == arguments.length) {
                        var b = a.a.e.get(this.n, c) || {};
                        b.Hb === n && b.jb && (b.Hb = b.jb.innerHTML);
                        return b.Hb
                    }
                    a.a.e.set(this.n, c, {
                        Hb: arguments[0]
                    })
                }
                ;
                a.b("templateSources", a.v);
                a.b("templateSources.domElement", a.v.n);
                a.b("templateSources.anonymousTemplate", a.v.qa)
            })();
            (function() {
                function b(b, c, d) {
                    var e;
                    for (c = a.f.nextSibling(c); b && (e = b) !== c; )
                        b = a.f.nextSibling(e),
                        d(e, b)
                }
                function c(c, d) {
                    if (c.length) {
                        var e = c[0]
                          , f = c[c.length - 1]
                          , g = e.parentNode
                          , k = a.Q.instance
                          , n = k.preprocessNode;
                        if (n) {
                            b(e, f, function(a, b) {
                                var c = a.previousSibling
                                  , d = n.call(k, a);
                                d && (a === e && (e = d[0] || b),
                                a === f && (f = d[d.length - 1] || c))
                            });
                            c.length = 0;
                            if (!e)
                                return;
                            e === f ? c.push(e) : (c.push(e, f),
                            a.a.za(c, g))
                        }
                        b(e, f, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.Rb(d, b)
                        });
                        b(e, f, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.M.yc(b, [d])
                        });
                        a.a.za(c, g)
                    }
                }
                function d(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null
                }
                function e(b, e, f, k, q) {
                    q = q || {};
                    var p = (b && d(b) || f || {}).ownerDocument
                      , n = q.templateEngine || g;
                    a.Gb.Oc(f, n, p);
                    f = n.renderTemplate(f, k, q, p);
                    if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType)
                        throw Error("Template engine must return an array of DOM nodes");
                    p = !1;
                    switch (e) {
                    case "replaceChildren":
                        a.f.da(b, f);
                        p = !0;
                        break;
                    case "replaceNode":
                        a.a.qc(b, f);
                        p = !0;
                        break;
                    case "ignoreTargetNode":
                        break;
                    default:
                        throw Error("Unknown renderMode: " + e);
                    }
                    p && (c(f, k),
                    q.afterRender && a.l.w(q.afterRender, null, [f, k.$data]));
                    return f
                }
                function f(b, c, d) {
                    return a.H(b) ? b() : "function" === typeof b ? b(c, d) : b
                }
                var g;
                a.Db = function(b) {
                    if (b != n && !(b instanceof a.O))
                        throw Error("templateEngine must inherit from ko.templateEngine");
                    g = b
                }
                ;
                a.Ab = function(b, c, h, k, q) {
                    h = h || {};
                    if ((h.templateEngine || g) == n)
                        throw Error("Set a template engine before calling renderTemplate");
                    q = q || "replaceChildren";
                    if (k) {
                        var p = d(k);
                        return a.B(function() {
                            var g = c && c instanceof a.U ? c : new a.U(a.a.c(c))
                              , n = f(b, g.$data, g)
                              , g = e(k, q, n, g, h);
                            "replaceNode" == q && (k = g,
                            p = d(k))
                        }, null, {
                            wa: function() {
                                return !p || !a.a.nb(p)
                            },
                            i: p && "replaceNode" == q ? p.parentNode : p
                        })
                    }
                    return a.M.wb(function(d) {
                        a.Ab(b, c, h, d, "replaceNode")
                    })
                }
                ;
                a.kd = function(b, d, g, k, q) {
                    function p(a, b) {
                        c(b, s);
                        g.afterRender && g.afterRender(b, a);
                        s = null
                    }
                    function u(a, c) {
                        s = q.createChildContext(a, g.as, function(a) {
                            a.$index = c
                        });
                        var d = f(b, a, s);
                        return e(null, "ignoreTargetNode", d, s, g)
                    }
                    var s;
                    return a.B(function() {
                        var b = a.a.c(d) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.Ka(b, function(b) {
                            return g.includeDestroyed || b === n || null === b || !a.a.c(b._destroy)
                        });
                        a.l.w(a.a.Bb, null, [k, b, u, g, p])
                    }, null, {
                        i: k
                    })
                }
                ;
                var k = a.a.e.I();
                a.d.template = {
                    init: function(b, c) {
                        var d = a.a.c(c());
                        if ("string" == typeof d || d.name)
                            a.f.xa(b);
                        else {
                            if ("nodes"in d) {
                                if (d = d.nodes || [],
                                a.H(d))
                                    throw Error('The "nodes" option must be a plain, non-observable array.');
                            } else
                                d = a.f.childNodes(b);
                            d = a.a.jc(d);
                            (new a.v.qa(b)).nodes(d)
                        }
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(b, c, d, e, f) {
                        var g = c(), s;
                        c = a.a.c(g);
                        d = !0;
                        e = null;
                        "string" == typeof c ? c = {} : (g = c.name,
                        "if"in c && (d = a.a.c(c["if"])),
                        d && "ifnot"in c && (d = !a.a.c(c.ifnot)),
                        s = a.a.c(c.data));
                        "foreach"in c ? e = a.kd(g || b, d && c.foreach || [], c, b, f) : d ? (f = "data"in c ? f.createChildContext(s, c.as) : f,
                        e = a.Ab(g || b, f, c, b)) : a.f.xa(b);
                        f = e;
                        (s = a.a.e.get(b, k)) && "function" == typeof s.k && s.k();
                        a.a.e.set(b, k, f && f.ba() ? f : n)
                    }
                };
                a.h.ta.template = function(b) {
                    b = a.h.yb(b);
                    return 1 == b.length && b[0].unknown || a.h.ad(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                }
                ;
                a.f.Z.template = !0
            })();
            a.b("setTemplateEngine", a.Db);
            a.b("renderTemplate", a.Ab);
            a.a.dc = function(a, c, d) {
                if (a.length && c.length) {
                    var e, f, g, k, l;
                    for (e = f = 0; (!d || e < d) && (k = a[f]); ++f) {
                        for (g = 0; l = c[g]; ++g)
                            if (k.value === l.value) {
                                k.moved = l.index;
                                l.moved = k.index;
                                c.splice(g, 1);
                                e = g = 0;
                                break
                            }
                        e += g
                    }
                }
            }
            ;
            a.a.ib = function() {
                function b(b, d, e, f, g) {
                    var k = Math.min, l = Math.max, m = [], h, n = b.length, q, p = d.length, s = p - n || 1, u = n + p + 1, t, v, x;
                    for (h = 0; h <= n; h++)
                        for (v = t,
                        m.push(t = []),
                        x = k(p, h + s),
                        q = l(0, h - 1); q <= x; q++)
                            t[q] = q ? h ? b[h - 1] === d[q - 1] ? v[q - 1] : k(v[q] || u, t[q - 1] || u) + 1 : q + 1 : h + 1;
                    k = [];
                    l = [];
                    s = [];
                    h = n;
                    for (q = p; h || q; )
                        p = m[h][q] - 1,
                        q && p === m[h][q - 1] ? l.push(k[k.length] = {
                            status: e,
                            value: d[--q],
                            index: q
                        }) : h && p === m[h - 1][q] ? s.push(k[k.length] = {
                            status: f,
                            value: b[--h],
                            index: h
                        }) : (--q,
                        --h,
                        g.sparse || k.push({
                            status: "retained",
                            value: d[q]
                        }));
                    a.a.dc(s, l, !g.dontLimitMoves && 10 * n);
                    return k.reverse()
                }
                return function(a, d, e) {
                    e = "boolean" === typeof e ? {
                        dontLimitMoves: e
                    } : e || {};
                    a = a || [];
                    d = d || [];
                    return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e)
                }
            }();
            a.b("utils.compareArrays", a.a.ib);
            (function() {
                function b(b, c, d, k, l) {
                    var m = []
                      , h = a.B(function() {
                        var h = c(d, l, a.a.za(m, b)) || [];
                        0 < m.length && (a.a.qc(m, h),
                        k && a.l.w(k, null, [d, h, l]));
                        m.length = 0;
                        a.a.ra(m, h)
                    }, null, {
                        i: b,
                        wa: function() {
                            return !a.a.Qb(m)
                        }
                    });
                    return {
                        ca: m,
                        B: h.ba() ? h : n
                    }
                }
                var c = a.a.e.I()
                  , d = a.a.e.I();
                a.a.Bb = function(e, f, g, k, l) {
                    function m(b, c) {
                        w = q[c];
                        v !== c && (D[b] = w);
                        w.qb(v++);
                        a.a.za(w.ca, e);
                        u.push(w);
                        z.push(w)
                    }
                    function h(b, c) {
                        if (b)
                            for (var d = 0, e = c.length; d < e; d++)
                                c[d] && a.a.q(c[d].ca, function(a) {
                                    b(a, d, c[d].ja)
                                })
                    }
                    f = f || [];
                    k = k || {};
                    var r = a.a.e.get(e, c) === n
                      , q = a.a.e.get(e, c) || []
                      , p = a.a.fb(q, function(a) {
                        return a.ja
                    })
                      , s = a.a.ib(p, f, k.dontLimitMoves)
                      , u = []
                      , t = 0
                      , v = 0
                      , x = []
                      , z = [];
                    f = [];
                    for (var D = [], p = [], w, C = 0, B, E; B = s[C]; C++)
                        switch (E = B.moved,
                        B.status) {
                        case "deleted":
                            E === n && (w = q[t],
                            w.B && (w.B.k(),
                            w.B = n),
                            a.a.za(w.ca, e).length && (k.beforeRemove && (u.push(w),
                            z.push(w),
                            w.ja === d ? w = null : f[C] = w),
                            w && x.push.apply(x, w.ca)));
                            t++;
                            break;
                        case "retained":
                            m(C, t++);
                            break;
                        case "added":
                            E !== n ? m(C, E) : (w = {
                                ja: B.value,
                                qb: a.N(v++)
                            },
                            u.push(w),
                            z.push(w),
                            r || (p[C] = w))
                        }
                    a.a.e.set(e, c, u);
                    h(k.beforeMove, D);
                    a.a.q(x, k.beforeRemove ? a.$ : a.removeNode);
                    for (var C = 0, r = a.f.firstChild(e), F; w = z[C]; C++) {
                        w.ca || a.a.extend(w, b(e, g, w.ja, l, w.qb));
                        for (t = 0; s = w.ca[t]; r = s.nextSibling,
                        F = s,
                        t++)
                            s !== r && a.f.gc(e, s, F);
                        !w.Wc && l && (l(w.ja, w.ca, w.qb),
                        w.Wc = !0)
                    }
                    h(k.beforeRemove, f);
                    for (C = 0; C < f.length; ++C)
                        f[C] && (f[C].ja = d);
                    h(k.afterMove, D);
                    h(k.afterAdd, p)
                }
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Bb);
            a.W = function() {
                this.allowTemplateRewriting = !1
            }
            ;
            a.W.prototype = new a.O;
            a.W.prototype.renderTemplateSource = function(b, c, d, e) {
                if (c = (9 > a.a.C ? 0 : b.nodes) ? b.nodes() : null)
                    return a.a.V(c.cloneNode(!0).childNodes);
                b = b.text();
                return a.a.ma(b, e)
            }
            ;
            a.W.sb = new a.W;
            a.Db(a.W.sb);
            a.b("nativeTemplateEngine", a.W);
            (function() {
                a.vb = function() {
                    var a = this.$c = function() {
                        if (!v || !v.tmpl)
                            return 0;
                        try {
                            if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__"))
                                return 2
                        } catch (a) {}
                        return 1
                    }();
                    this.renderTemplateSource = function(b, e, f, g) {
                        g = g || u;
                        f = f || {};
                        if (2 > a)
                            throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var k = b.data("precompiled");
                        k || (k = b.text() || "",
                        k = v.template(null, "{{ko_with $item.koBindingContext}}" + k + "{{/ko_with}}"),
                        b.data("precompiled", k));
                        b = [e.$data];
                        e = v.extend({
                            koBindingContext: e
                        }, f.templateOptions);
                        e = v.tmpl(k, b, e);
                        e.appendTo(g.createElement("div"));
                        v.fragments = {};
                        return e
                    }
                    ;
                    this.createJavaScriptEvaluatorBlock = function(a) {
                        return "{{ko_code ((function() { return " + a + " })()) }}"
                    }
                    ;
                    this.addTemplate = function(a, b) {
                        u.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                    }
                    ;
                    0 < a && (v.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    },
                    v.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    })
                }
                ;
                a.vb.prototype = new a.O;
                var b = new a.vb;
                0 < b.$c && a.Db(b);
                a.b("jqueryTmplTemplateEngine", a.vb)
            })()
        })
    })();
})();

/*!
 * Knockout Mapping plugin v2.6.0
 * (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(e) {
    "use strict";
    if ("function" == typeof require && "object" == typeof exports && "object" == typeof module)
        e(require("knockout"), exports);
    else if ("function" == typeof define && define.amd)
        define(["knockout", "exports"], e);
    else {
        if ("undefined" == typeof ko)
            throw new Error("Knockout is required, please ensure it is loaded before loading this mapping plug-in");
        e(ko, ko.mapping = {})
    }
}(function(e, r) {
    "use strict";
    function t() {
        for (var e, r, t, n = arguments, a = n.length, i = {}, o = []; a--; )
            for (t = n[a],
            e = t.length; e--; )
                r = t[e],
                i[r] || (i[r] = 1,
                o.push(r));
        return o
    }
    function n(e, a) {
        var i;
        for (var o in a)
            if (a.hasOwnProperty(o) && a[o])
                if (i = r.getType(e[o]),
                o && e[o] && "array" !== i && "string" !== i)
                    n(e[o], a[o]);
                else {
                    var u = "array" === r.getType(e[o]) && "array" === r.getType(a[o]);
                    u ? e[o] = t(e[o], a[o]) : e[o] = a[o]
                }
    }
    function a(e, r) {
        var t = {};
        return n(t, e),
        n(t, r),
        t
    }
    function i(e, r) {
        for (var t = a({}, e), n = x.length - 1; n >= 0; n--) {
            var i = x[n];
            t[i] && (t[""]instanceof Object || (t[""] = {}),
            t[""][i] = t[i],
            delete t[i])
        }
        return r && (t.ignore = o(r.ignore, t.ignore),
        t.include = o(r.include, t.include),
        t.copy = o(r.copy, t.copy),
        t.observe = o(r.observe, t.observe)),
        t.ignore = o(t.ignore, E.ignore),
        t.include = o(t.include, E.include),
        t.copy = o(t.copy, E.copy),
        t.observe = o(t.observe, E.observe),
        t.mappedProperties = t.mappedProperties || {},
        t.copiedProperties = t.copiedProperties || {},
        t
    }
    function o(t, n) {
        return void 0 === t ? t = [] : "array" !== r.getType(t) && (t = [t]),
        void 0 === n ? n = [] : "array" !== r.getType(n) && (n = [n]),
        e.utils.arrayGetDistinctValues(t.concat(n))
    }
    function u(r, t) {
        var n = e.dependentObservable;
        e.dependentObservable = function(t, n, a) {
            a = a || {},
            t && "object" == typeof t && (a = t);
            var i = a.deferEvaluation
              , o = a.pure
              , u = !1
              , s = function(t) {
                var n = e.dependentObservable;
                e.dependentObservable = k;
                var a = e.isWriteableObservable(t);
                e.dependentObservable = n;
                var i = k({
                    read: function() {
                        return u || (e.utils.arrayRemoveItem(r, t),
                        u = !0),
                        t.apply(t, arguments)
                    },
                    write: a && function(e) {
                        return t(e)
                    }
                    ,
                    deferEvaluation: !0
                });
                return i.__DO = t,
                i
            };
            a.deferEvaluation = !0;
            var p = k(t, n, a);
            return i || o || (p = s(p),
            r.push(p)),
            p
        }
        ,
        e.dependentObservable.fn = k.fn,
        e.computed = e.dependentObservable;
        var a = t();
        return e.dependentObservable = n,
        e.computed = e.dependentObservable,
        a
    }
    function s(t, n, i, o, l, b, g) {
        var O = "array" === r.getType(e.utils.unwrapObservable(n));
        if (b = b || "",
        r.isMapped(t)) {
            var k = e.utils.unwrapObservable(t)[m];
            i = a(k, i)
        }
        var T = {
            data: n,
            parent: g || l
        }
          , x = function() {
            return i[o] && i[o].create instanceof Function
        }
          , I = function(r) {
            return u(h, function() {
                return e.utils.unwrapObservable(l)instanceof Array ? i[o].create({
                    data: r || T.data,
                    parent: T.parent,
                    skip: j
                }) : i[o].create({
                    data: r || T.data,
                    parent: T.parent
                })
            })
        }
          , E = function() {
            return i[o] && i[o].update instanceof Function
        }
          , P = function(r, t) {
            var n = {
                data: t || T.data,
                parent: T.parent,
                target: e.utils.unwrapObservable(r)
            };
            return e.isWriteableObservable(r) && (n.observable = r),
            i[o].update(n)
        }
          , J = w.get(n);
        if (J)
            return J;
        if (o = o || "",
        O) {
            var _ = []
              , W = !1
              , D = function(e) {
                return e
            };
            i[o] && i[o].key && (D = i[o].key,
            W = !0),
            e.isObservable(t) || (t = e.observableArray([]),
            t.mappedRemove = function(e) {
                var r = "function" == typeof e ? e : function(r) {
                    return r === D(e)
                }
                ;
                return t.remove(function(e) {
                    return r(D(e))
                })
            }
            ,
            t.mappedRemoveAll = function(r) {
                var n = c(r, D);
                return t.remove(function(r) {
                    return -1 !== e.utils.arrayIndexOf(n, D(r))
                })
            }
            ,
            t.mappedDestroy = function(e) {
                var r = "function" == typeof e ? e : function(r) {
                    return r === D(e)
                }
                ;
                return t.destroy(function(e) {
                    return r(D(e))
                })
            }
            ,
            t.mappedDestroyAll = function(r) {
                var n = c(r, D);
                return t.destroy(function(r) {
                    return -1 !== e.utils.arrayIndexOf(n, D(r))
                })
            }
            ,
            t.mappedIndexOf = function(r) {
                var n = c(t(), D)
                  , a = D(r);
                return e.utils.arrayIndexOf(n, a)
            }
            ,
            t.mappedGet = function(e) {
                return t()[t.mappedIndexOf(e)]
            }
            ,
            t.mappedCreate = function(r) {
                if (-1 !== t.mappedIndexOf(r))
                    throw new Error("There already is an object with the key that you specified.");
                var n = x() ? I(r) : r;
                if (E()) {
                    var a = P(n, r);
                    e.isWriteableObservable(n) ? n(a) : n = a
                }
                return t.push(n),
                n
            }
            );
            var S = c(e.utils.unwrapObservable(t), D).sort()
              , A = c(n, D);
            W && A.sort();
            var N, M, C, q = e.utils.compareArrays(S, A), F = {}, R = e.utils.unwrapObservable(n), $ = {}, G = !0;
            for (N = 0,
            M = R.length; M > N; N++) {
                if (C = D(R[N]),
                void 0 === C || C instanceof Object) {
                    G = !1;
                    break
                }
                $[C] = R[N]
            }
            var K, V, z = [], B = 0;
            for (N = 0,
            M = q.length; M > N; N++) {
                C = q[N];
                var H, L = b + "[" + y(N) + "]";
                switch (C.status) {
                case "added":
                    K = G ? $[C.value] : f(e.utils.unwrapObservable(n), C.value, D),
                    H = s(void 0, K, i, o, t, L, l),
                    x() || (H = e.utils.unwrapObservable(H)),
                    V = p(e.utils.unwrapObservable(n), K, F),
                    H === j ? B++ : z[V - B] = H,
                    F[V] = !0;
                    break;
                case "retained":
                    K = G ? $[C.value] : f(e.utils.unwrapObservable(n), C.value, D),
                    H = f(t, C.value, D),
                    s(H, K, i, o, t, L, l),
                    V = p(e.utils.unwrapObservable(n), K, F),
                    z[V] = H,
                    F[V] = !0;
                    break;
                case "deleted":
                    H = f(t, C.value, D)
                }
                _.push({
                    event: C.status,
                    item: H
                })
            }
            t(z),
            i[o] && i[o].arrayChanged && e.utils.arrayForEach(_, function(e) {
                i[o].arrayChanged(e.event, e.item)
            })
        } else if (d(n)) {
            if (t = e.utils.unwrapObservable(t),
            !t) {
                if (x()) {
                    var Q = I();
                    return E() && (Q = P(Q)),
                    Q
                }
                if (E())
                    return P();
                t = {}
            }
            if (E() && (t = P(t)),
            w.save(n, t),
            E())
                return t;
            v(n, function(a) {
                var o = b.length ? b + "." + y(a) : y(a);
                if (-1 === e.utils.arrayIndexOf(i.ignore, o)) {
                    if (-1 !== e.utils.arrayIndexOf(i.copy, o))
                        return void (t[a] = n[a]);
                    if ("object" != typeof n[a] && "array" !== r.getType(n[a]) && i.observe.length > 0 && -1 === e.utils.arrayIndexOf(i.observe, o))
                        return t[a] = n[a],
                        void (i.copiedProperties[o] = !0);
                    var u = w.get(n[a])
                      , p = s(t[a], n[a], i, a, t, o, t)
                      , l = u || p;
                    if (i.observe.length > 0 && -1 === e.utils.arrayIndexOf(i.observe, o))
                        return t[a] = e.utils.unwrapObservable(l),
                        void (i.copiedProperties[o] = !0);
                    e.isWriteableObservable(t[a]) ? (l = e.utils.unwrapObservable(l),
                    t[a]() !== l && t[a](l)) : (l = void 0 === t[a] ? l : e.utils.unwrapObservable(l),
                    t[a] = l),
                    i.mappedProperties[o] = !0
                }
            })
        } else
            switch (r.getType(n)) {
            case "function":
                E() ? e.isWriteableObservable(n) ? (n(P(n)),
                t = n) : t = P(n) : t = n;
                break;
            default:
                if (e.isWriteableObservable(t)) {
                    var U;
                    return E() ? (U = P(t),
                    t(U),
                    U) : (U = e.utils.unwrapObservable(n),
                    t(U),
                    U)
                }
                var X = x() || E();
                if (t = x() ? I() : e.observable(e.utils.unwrapObservable(n)),
                E() && t(P(t)),
                X)
                    return t
            }
        return t
    }
    function p(e, r, t) {
        for (var n = 0, a = e.length; a > n; n++)
            if (t[n] !== !0 && e[n] === r)
                return n;
        return null
    }
    function l(t, n) {
        var a;
        return n && (a = n(t)),
        "undefined" === r.getType(a) && (a = t),
        e.utils.unwrapObservable(a)
    }
    function f(r, t, n) {
        r = e.utils.unwrapObservable(r);
        for (var a = 0, i = r.length; i > a; a++) {
            var o = r[a];
            if (l(o, n) === t)
                return o
        }
        throw new Error("When calling ko.update*, the key '" + t + "' was not found!")
    }
    function c(r, t) {
        return e.utils.arrayMap(e.utils.unwrapObservable(r), function(e) {
            return t ? l(e, t) : e
        })
    }
    function v(e, t) {
        if ("array" === r.getType(e))
            for (var n = 0; n < e.length; n++)
                t(n);
        else
            for (var a in e)
                e.hasOwnProperty(a) && t(a)
    }
    function d(e) {
        if (null === e)
            return !1;
        var t = r.getType(e);
        return "object" === t || "array" === t
    }
    function b(e, t, n) {
        var a = e || "";
        return "array" === r.getType(t) ? e && (a += "[" + y(n) + "]") : (e && (a += "."),
        a += y(n)),
        a
    }
    function y(e) {
        var r = ("" + e).replace(/~/g, "~~").replace(/\[/g, "~[").replace(/]/g, "~]").replace(/\./g, "~.");
        return r
    }
    function g() {
        var r = []
          , t = [];
        this.save = function(n, a) {
            var i = e.utils.arrayIndexOf(r, n);
            i >= 0 ? t[i] = a : (r.push(n),
            t.push(a))
        }
        ,
        this.get = function(n) {
            var a = e.utils.arrayIndexOf(r, n)
              , i = a >= 0 ? t[a] : void 0;
            return i
        }
    }
    function O() {
        var e = {}
          , r = function(r) {
            var t;
            try {
                t = r
            } catch (n) {
                t = "$$$"
            }
            var a = e[t];
            return e.hasOwnProperty(t) || (a = new g,
            e[t] = a),
            a
        };
        this.save = function(e, t) {
            r(e).save(e, t)
        }
        ,
        this.get = function(e) {
            return r(e).get(e)
        }
    }
    e.mapping = r;
    var h, w, m = "__ko_mapping__", k = e.dependentObservable, T = 0, x = ["create", "update", "key", "arrayChanged"], j = {}, I = {
        include: ["_destroy"],
        ignore: [],
        copy: [],
        observe: []
    }, E = I;
    r.isMapped = function(r) {
        var t = e.utils.unwrapObservable(r);
        return t && t[m]
    }
    ,
    r.fromJS = function(e) {
        if (0 === arguments.length)
            throw new Error("When calling ko.fromJS, pass the object you want to convert.");
        try {
            T || (h = [],
            w = new O),
            T++;
            var r, t;
            2 === arguments.length && (arguments[1][m] ? t = arguments[1] : r = arguments[1]),
            3 === arguments.length && (r = arguments[1],
            t = arguments[2]),
            t && (r = a(r, t[m])),
            r = i(r);
            var n = s(t, e, r);
            if (t && (n = t),
            !--T)
                for (; h.length; ) {
                    var o = h.pop();
                    o && (o(),
                    o.__DO.throttleEvaluation = o.throttleEvaluation)
                }
            return n[m] = a(n[m], r),
            n
        } catch (u) {
            throw T = 0,
            u
        }
    }
    ,
    r.fromJSON = function(t) {
        var n = Array.prototype.slice.call(arguments, 0);
        return n[0] = e.utils.parseJson(t),
        r.fromJS.apply(this, n)
    }
    ,
    r.toJS = function(t, n) {
        if (E || r.resetDefaultOptions(),
        0 === arguments.length)
            throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
        if ("array" !== r.getType(E.ignore))
            throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
        if ("array" !== r.getType(E.include))
            throw new Error("ko.mapping.defaultOptions().include should be an array.");
        if ("array" !== r.getType(E.copy))
            throw new Error("ko.mapping.defaultOptions().copy should be an array.");
        return n = i(n, t[m]),
        r.visitModel(t, function(r) {
            return e.utils.unwrapObservable(r)
        }, n)
    }
    ,
    r.toJSON = function(t, n, a, i) {
        var o = r.toJS(t, n);
        return e.utils.stringifyJson(o, a, i)
    }
    ,
    r.defaultOptions = function() {
        return arguments.length > 0 ? void (E = arguments[0]) : E
    }
    ,
    r.resetDefaultOptions = function() {
        E = {
            include: I.include.slice(0),
            ignore: I.ignore.slice(0),
            copy: I.copy.slice(0),
            observe: I.observe.slice(0)
        }
    }
    ,
    r.getType = function(e) {
        if (e && "object" == typeof e) {
            if (e.constructor === Date)
                return "date";
            if (e.constructor === Array)
                return "array"
        }
        return typeof e
    }
    ,
    r.visitModel = function(t, n, a) {
        a = a || {},
        a.visitedObjects = a.visitedObjects || new O;
        var o, u = e.utils.unwrapObservable(t);
        if (!d(u))
            return n(t, a.parentName);
        a = i(a, u[m]),
        n(t, a.parentName),
        o = "array" === r.getType(u) ? [] : {},
        a.visitedObjects.save(t, o);
        var s = a.parentName;
        return v(u, function(t) {
            var i = y(t);
            if (!a.ignore || -1 === e.utils.arrayIndexOf(a.ignore, i)) {
                var p = u[t];
                if (a.parentName = b(s, u, t),
                -1 === e.utils.arrayIndexOf(a.copy, i) && -1 === e.utils.arrayIndexOf(a.include, i)) {
                    var l = u[m];
                    if (l) {
                        var f = l.mappedProperties;
                        if (f && !f[i]) {
                            var c = l.copiedProperties;
                            if (c && !c[i] && "array" !== r.getType(u))
                                return
                        }
                    }
                }
                switch (r.getType(e.utils.unwrapObservable(p))) {
                case "object":
                case "array":
                case "undefined":
                    var v = a.visitedObjects.get(p);
                    o[t] = "undefined" !== r.getType(v) ? v : r.visitModel(p, n, a);
                    break;
                default:
                    o[t] = n(p, a.parentName)
                }
            }
        }),
        o
    }
});
//# sourceMappingURL=knockout.mapping.min.js.map

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = a.document
      , m = "2.1.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                    f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"),
            b.text = a,
            l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            n.isFunction(a) ? (e = d.call(arguments, 2),
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || n.guid++,
            f) : void 0
        },
        now: Date.now,
        support: k
    }),
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+","g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ea = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            k = b.nodeType,
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 1 !== k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return H.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ia(a) {
            return a[u] = !0,
            a
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ka(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function la(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b,
                ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {},
        f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = g.documentElement,
            e = g.defaultView,
            e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)),
            p = !f(g),
            c.attributes = ja(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = $.test(g.getElementsByClassName),
            c.getById = ja(function(a) {
                return o.appendChild(a).id = u,
                !g.getElementsByName || !g.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", P)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return la(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            g) : n
        }
        ,
        ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }
        ,
        ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }
        ,
        ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a),
                    a = a.replace(ca, da).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos,
        d.setFilters = new qa,
        g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }
        ;
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function sa(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                ga(a, b[d], c);
            return c
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)),
            e && !e[u] && (e = wa(e, f)),
            ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = va(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = va(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }
        function ya(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = xa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && ra(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ja(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        ga
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = n.expr.match.needsContext
      , v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)),
                v.test(c[1]) && n.isPlainObject(b))
                    for (c in b)
                        n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]),
            d && d.parentNode && (this.length = 1,
            this[0] = d),
            this.context = l,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    A.prototype = n.fn,
    y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = []
              , e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    n.fn.extend({
        has: function(a) {
            var b = n(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (C[a] || n.unique(e),
            B.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l,
            c = !0,
            g = e || 0,
            e = 0,
            f = h.length,
            d = !0; h && f > g; g++)
                if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1,
            h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments),
                    d ? f = h.length : b && (e = c,
                    j(b))
                }
                return this
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)
                        h.splice(c, 1),
                        d && (f >= c && f--,
                        g >= c && g--)
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                f = 0,
                this
            },
            disable: function() {
                return h = i = b = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                b || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [],
                b = [a, b.slice ? b.slice() : b],
                d ? i.push(b) : j(b)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return k
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]),
            n.fn.triggerHandler && (n(l).triggerHandler("ready"),
            n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1),
        a.removeEventListener("load", I, !1),
        n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(),
        "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1),
        a.addEventListener("load", I, !1))),
        H.promise(b)
    }
    ,
    n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
    ;
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
    ;
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = n.expando + K.uid++
    }
    K.uid = 1,
    K.accepts = n.acceptData,
    K.prototype = {
        key: function(a) {
            if (!K.accepts(a))
                return 0;
            var b = {}
              , c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c,
                    n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                b in g ? d = [b, e] : (d = e,
                d = d in g ? [d] : d.match(E) || [])),
                c = d.length;
                while (c--)
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K
      , M = new K
      , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f),
                1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a),
                    void 0 !== c)
                        return c;
                    if (c = M.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = M.get(this, d);
                        M.set(this, d, b),
                        -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = L.get(a, b),
            c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = L.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , R = ["Top", "Right", "Bottom", "Left"]
      , S = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }
      , T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment()
          , b = a.appendChild(l.createElement("div"))
          , c = l.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin"in a;
    var V = /^key/
      , W = /^(?:mouse|pointer|contextmenu)|click/
      , X = /^(?:focusinfocus|focusoutblur)$/
      , Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0
    }
    function $() {
        return !1
    }
    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = n.guid++),
                (i = r.events) || (i = r.events = {}),
                (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    h = Y.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o && (l = n.event.special[o] || {},
                    o = (e ? l.delegateType : l.bindType) || o,
                    l = n.event.special[o] || {},
                    k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f),
                    (m = i[o]) || (m = i[o] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = i[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle,
                L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l,
            3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            k = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = r.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : n.makeArray(c, [b]),
            o = n.event.special[q] || {},
            e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q,
                    X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g),
                        h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())
                    b.type = f > 1 ? i : o.bindType || q,
                    m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"),
                    m && m.apply(g, c),
                    m = k && g[k],
                    m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c),
                    b.result === !1 && b.preventDefault());
                return b.type = q,
                e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k],
                h && (d[k] = null),
                n.event.triggered = q,
                d[q](),
                n.event.triggered = void 0,
                h && (d[k] = h)),
                b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g,
                        a.data = g.data,
                        e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== e && (a.result = e) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l,
                d = c.documentElement,
                e = c.body,
                a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new n.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = l),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z,
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z,
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = L.access(d, b);
                e || d.addEventListener(a, c, !0),
                L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0),
                L.remove(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d,
            d = function(a) {
                return n().off(a),
                f.apply(this, arguments)
            }
            ,
            d.guid = f.guid || (f.guid = n.guid++)),
            this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = $),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , ba = /<([\w:]+)/
      , ca = /<|&#?\w+;/
      , da = /<(?:script|style|link)/i
      , ea = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fa = /^$|\/(?:java|ecma)script/i
      , ga = /^true\/(.*)/
      , ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ia = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ia.optgroup = ia.option,
    ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead,
    ia.th = ia.td;
    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }
    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a),
            g = L.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a),
            i = n.extend({}, h),
            M.set(b, i))
        }
    }
    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = oa(h),
                f = oa(a),
                d = 0,
                e = f.length; e > d; d++)
                    pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a),
                    g = g || oa(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        na(f[d], g[d]);
                else
                    na(a, h);
            return g = oa(h, "script"),
            g.length > 0 && ma(g, !i && oa(a, "script")),
            h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m],
                e || 0 === e)
                    if ("object" === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                        f = f || k.appendChild(b.createElement("div")),
                        g = (ba.exec(e) || ["", ""])[1].toLowerCase(),
                        h = ia[g] || ia._default,
                        f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2],
                        j = h[0];
                        while (j--)
                            f = f.lastChild;
                        n.merge(l, f.childNodes),
                        f = k.firstChild,
                        f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            k.textContent = "",
            m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e),
                f = oa(k.appendChild(e), "script"),
                i && ma(f),
                c)) {
                    j = 0;
                    while (e = f[j++])
                        fa.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando],
                e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }),
    n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(oa(c)),
                c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(oa(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(oa(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                n.cleanData(oa(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this),
            d = c.firstChild,
            1 === c.childNodes.length && (c = d),
            d)) {
                for (f = n.map(oa(c, "script"), ka),
                g = f.length; l > j; j++)
                    h = c,
                    j !== o && (h = n.clone(h, !0, !0),
                    g && n.merge(f, oa(h, "script"))),
                    b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument,
                    n.map(f, la),
                    j = 0; g > j; j++)
                        h = f[j],
                        fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0),
                n(e[h])[b](c),
                f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};
    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(),
        f
    }
    function ta(a) {
        var b = l
          , c = ra[a];
        return c || (c = sa(a, b),
        "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = qa[0].contentDocument,
        b.write(),
        b.close(),
        c = sa(a, b),
        qa.detach()),
        ra[a] = c),
        c
    }
    var ua = /^margin/
      , va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$","i")
      , wa = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        va.test(g) && ua.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 !== g ? g + "" : g
    }
    function ya(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box",
            f.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === f.style.backgroundClip,
            e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
            e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                f.innerHTML = "",
                d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top,
                c = "4px" === g.width,
                d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(),
                    b
                },
                boxSizingReliable: function() {
                    return null == c && g(),
                    c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    f.style.width = "1px",
                    d.appendChild(e),
                    b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                    d.removeChild(e),
                    f.removeChild(c),
                    b
                }
            })
        }
    }(),
    n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var za = /^(none|table(?!-c[ea]).+)/
      , Aa = new RegExp("^(" + Q + ")(.*)$","i")
      , Ba = new RegExp("^([+-])=(" + Q + ")","i")
      , Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Da = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ea = ["Webkit", "O", "Moz", "ms"];
    function Fa(a, b) {
        if (b in a)
            return b;
        var c = b[0].toUpperCase() + b.slice(1)
          , d = b
          , e = Ea.length;
        while (e--)
            if (b = Ea[e] + c,
            b in a)
                return b;
        return d
    }
    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + R[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }
    function Ia(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = wa(a)
          , g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            va.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = L.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d),
            "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
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
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = xa(a, b, d)),
            "normal" === e && b in Da && (e = Da[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }),
    n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Ja(this, !0)
        },
        hide: function() {
            return Ja(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a,b,c,d,e)
    }
    n.Tween = Ka,
    Ka.prototype = {
        constructor: Ka,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
            this
        }
    },
    Ka.prototype.init.prototype = Ka.prototype,
    Ka.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    n.fx = Ka.prototype.init,
    n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$","i"), Pa = /queueHooks$/, Qa = [Va], Ra = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = Oa.exec(b)
              , f = e && e[3] || (n.cssNumber[a] ? "" : "px")
              , g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    n.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function Sa() {
        return setTimeout(function() {
            La = void 0
        }),
        La = n.now()
    }
    function Ta(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = R[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
        c.overflow && (o.overflow = "hidden",
        l.always(function() {
            o.overflow = c.overflow[0],
            o.overflowX = c.overflow[1],
            o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            Na.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}),
            f && (q.hidden = !p),
            p ? n(a).show() : l.done(function() {
                n(a).hide()
            }),
            l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ua(p ? q[d] : 0, d, l),
                d in q || (q[d] = g.start,
                p && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if (d = Qa[f].call(j, a, k, j.opts))
                return d;
        return n.map(k, Ua, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xa, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                Ra[c] = Ra[c] || [],
                Ra[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(),
        La = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        clearInterval(Ma),
        Ma = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a = l.createElement("input")
          , b = l.createElement("select")
          , c = b.appendChild(l.createElement("option"));
        a.type = "checkbox",
        k.checkOn = "" !== a.value,
        k.optSelected = c.selected,
        b.disabled = !0,
        k.optDisabled = !c.disabled,
        a = l.createElement("input"),
        a.value = "t",
        a.type = "radio",
        k.radioValue = "t" === a.value
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    Za = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b],
            $a[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            $a[b] = f),
            e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }),
    n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !n.isXMLDoc(a),
                f && (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }),
    k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now()
      , db = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser,
            b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a),
        b
    }
    ;
    var eb = /#.*$/
      , fb = /([?&])_=[^&]*/
      , gb = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , ib = /^(?:GET|HEAD)$/
      , jb = /^\/\//
      , kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , lb = {}
      , mb = {}
      , nb = "*/".concat("*")
      , ob = a.location.href
      , pb = kb.exec(ob.toLowerCase()) || [];
    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function rb(a, b, c, d) {
        var e = {}
          , f = a === mb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d),
        a
    }
    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gb.exec(e))
                                f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()),
            k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)),
            rb(lb, k, b, v),
            2 === t)
                return v;
            i = n.event && k.global,
            i && 0 === n.active++ && n.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !ib.test(k.type),
            d = k.url,
            k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1,
                i && m.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                    c.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                c = void 0,
                e = h || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                f && (u = tb(k, v, f)),
                u = ub(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (n.lastModified[d] = w),
                w = v.getResponseHeader("etag"),
                w && (n.etag[d] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                i && (m.trigger("ajaxComplete", [v, k]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }
    ,
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    }
    ;
    var vb = /%20/g
      , wb = /\[\]$/
      , xb = /\r?\n/g
      , yb = /^(?:submit|button|image|reset|file)$/i
      , zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Ab(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    }
    ;
    var Bb = 0
      , Cb = {}
      , Db = {
        0: 200,
        1223: 204
    }
      , Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cb)
            Cb[a]()
    }),
    k.cors = !!Eb && "withCredentials"in Eb,
    k.ajax = Eb = !!Eb,
    n.ajaxTransport(function(a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cb[g],
                        b = f.onload = f.onerror = null,
                        "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }
                ,
                f.onload = b(),
                f.onerror = b("error"),
                b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fb = []
      , Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Fb.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || l;
        var d = v.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e),
        e && e.length && n(e).remove(),
        n.merge([], d.childNodes))
    }
    ;
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hb)
            return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var Ib = a.document.documentElement;
    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()),
                c = Jb(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (d = a.offset()),
                d.top += n.css(a[0], "borderTopWidth", !0),
                d.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Ib
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
            return c ? (c = xa(a, b),
            va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.size = function() {
        return this.length
    }
    ,
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kb = a.jQuery
      , Lb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lb),
        b && a.jQuery === n && (a.jQuery = Kb),
        n
    }
    ,
    typeof b === U && (a.jQuery = a.$ = n),
    n
});
//# sourceMappingURL=jquery.min.map
// Awesomplete - Lea Verou - MIT license
(function() {
    function h(a) {
        a = Array.isArray(a) ? {
            label: a[0],
            value: a[1]
        } : "object" === typeof a && "label"in a && "value"in a ? a : {
            label: a,
            value: a
        };
        this.label = a.label || a.value;
        this.value = a.value
    }
    function n(a, b, d) {
        for (var g in b) {
            var f = b[g]
              , c = a.input.getAttribute("data-" + g.toLowerCase());
            a[g] = "number" === typeof f ? parseInt(c) : !1 === f ? null !== c : f instanceof Function ? null : c;
            a[g] || 0 === a[g] || (a[g] = g in d ? d[g] : f)
        }
    }
    function c(a, b) {
        return "string" === typeof a ? (b || document).querySelector(a) : a || null
    }
    function k(a, b) {
        return l.call((b || document).querySelectorAll(a))
    }
    function m() {
        k("input.awesomplete").forEach(function(a) {
            new e(a)
        })
    }
    var e = function(a, b) {
        var d = this;
        this.input = c(a);
        this.input.setAttribute("autocomplete", "off");
        this.input.setAttribute("aria-autocomplete", "list");
        b = b || {};
        n(this, {
            minChars: 2,
            maxItems: 10,
            autoFirst: !1,
            data: e.DATA,
            filter: e.FILTER_CONTAINS,
            sort: e.SORT_BYLENGTH,
            item: e.ITEM,
            replace: e.REPLACE
        }, b);
        this.index = -1;
        this.container = c.create("div", {
            className: "awesomplete",
            around: a
        });
        this.ul = c.create("ul", {
            hidden: "hidden",
            inside: this.container
        });
        this.status = c.create("span", {
            className: "visually-hidden",
            role: "status",
            "aria-live": "assertive",
            "aria-relevant": "additions",
            inside: this.container
        });
        c.bind(this.input, {
            input: this.evaluate.bind(this),
            blur: this.close.bind(this),
            keydown: function(a) {
                var b = a.keyCode;
                if (d.opened)
                    if (13 === b && d.selected)
                        a.preventDefault(),
                        d.select();
                    else if (27 === b)
                        d.close();
                    else if (38 === b || 40 === b)
                        a.preventDefault(),
                        d[38 === b ? "previous" : "next"]()
            }
        });
        c.bind(this.input.form, {
            submit: this.close.bind(this)
        });
        c.bind(this.ul, {
            mousedown: function(a) {
                var b = a.target;
                if (b !== this) {
                    for (; b && !/li/i.test(b.nodeName); )
                        b = b.parentNode;
                    b && 0 === a.button && (a.preventDefault(),
                    d.select(b, a.target))
                }
            }
        });
        this.input.hasAttribute("list") ? (this.list = "#" + this.input.getAttribute("list"),
        this.input.removeAttribute("list")) : this.list = this.input.getAttribute("data-list") || b.list || [];
        e.all.push(this)
    };
    e.prototype = {
        set list(a) {
            if (Array.isArray(a))
                this._list = a;
            else if ("string" === typeof a && -1 < a.indexOf(","))
                this._list = a.split(/\s*,\s*/);
            else if ((a = c(a)) && a.children) {
                var b = [];
                l.apply(a.children).forEach(function(a) {
                    if (!a.disabled) {
                        var c = a.textContent.trim()
                          , f = a.value || c;
                        a = a.label || c;
                        "" !== f && b.push({
                            label: a,
                            value: f
                        })
                    }
                });
                this._list = b
            }
            document.activeElement === this.input && this.evaluate()
        },
        get selected() {
            return -1 < this.index
        },
        get opened() {
            return !this.ul.hasAttribute("hidden")
        },
        close: function() {
            this.ul.setAttribute("hidden", "");
            this.index = -1;
            c.fire(this.input, "awesomplete-close")
        },
        open: function() {
            this.ul.removeAttribute("hidden");
            this.autoFirst && -1 === this.index && this["goto"](0);
            c.fire(this.input, "awesomplete-open")
        },
        next: function() {
            this["goto"](this.index < this.ul.children.length - 1 ? this.index + 1 : -1)
        },
        previous: function() {
            var a = this.ul.children.length;
            this["goto"](this.selected ? this.index - 1 : a - 1)
        },
        "goto": function(a) {
            var b = this.ul.children;
            this.selected && b[this.index].setAttribute("aria-selected", "false");
            this.index = a;
            -1 < a && 0 < b.length && (b[a].setAttribute("aria-selected", "true"),
            this.status.textContent = b[a].textContent,
            c.fire(this.input, "awesomplete-highlight", {
                text: this.suggestions[this.index]
            }))
        },
        select: function(a, b) {
            a ? this.index = c.siblingIndex(a) : a = this.ul.children[this.index];
            if (a) {
                var d = this.suggestions[this.index];
                c.fire(this.input, "awesomplete-select", {
                    text: d,
                    origin: b || a
                }) && (this.replace(d),
                this.close(),
                c.fire(this.input, "awesomplete-selectcomplete", {
                    text: d
                }))
            }
        },
        evaluate: function() {
            var a = this
              , b = this.input.value;
            b.length >= this.minChars && 0 < this._list.length ? (this.index = -1,
            this.ul.innerHTML = "",
            this.suggestions = this._list.map(function(d) {
                return new h(a.data(d, b))
            }).filter(function(d) {
                return a.filter(d, b)
            }).sort(this.sort).slice(0, this.maxItems),
            this.suggestions.forEach(function(d) {
                a.ul.appendChild(a.item(d, b))
            }),
            0 === this.ul.children.length ? this.close() : this.open()) : this.close()
        }
    };
    e.all = [];
    e.FILTER_CONTAINS = function(a, b) {
        return RegExp(c.regExpEscape(b.trim()), "i").test(a)
    }
    ;
    e.FILTER_STARTSWITH = function(a, b) {
        return RegExp("^" + c.regExpEscape(b.trim()), "i").test(a)
    }
    ;
    e.SORT_BYLENGTH = function(a, b) {
        return a.length !== b.length ? a.length - b.length : a < b ? -1 : 1
    }
    ;
    e.ITEM = function(a, b) {
        var d = "" === b ? a : a.replace(RegExp(c.regExpEscape(b.trim()), "gi"), "<mark>$&</mark>");
        return c.create("li", {
            innerHTML: d,
            "aria-selected": "false"
        })
    }
    ;
    e.REPLACE = function(a) {
        this.input.value = a.value
    }
    ;
    e.DATA = function(a) {
        return a
    }
    ;
    Object.defineProperty(h.prototype = Object.create(String.prototype), "length", {
        get: function() {
            return this.label.length
        }
    });
    h.prototype.toString = h.prototype.valueOf = function() {
        return "" + this.label
    }
    ;
    var l = Array.prototype.slice;
    c.create = function(a, b) {
        var d = document.createElement(a), g;
        for (g in b) {
            var f = b[g];
            "inside" === g ? c(f).appendChild(d) : "around" === g ? (f = c(f),
            f.parentNode.insertBefore(d, f),
            d.appendChild(f)) : g in d ? d[g] = f : d.setAttribute(g, f)
        }
        return d
    }
    ;
    c.bind = function(a, b) {
        if (a)
            for (var d in b) {
                var c = b[d];
                d.split(/\s+/).forEach(function(b) {
                    a.addEventListener(b, c)
                })
            }
    }
    ;
    c.fire = function(a, b, c) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent(b, !0, !0);
        for (var f in c)
            e[f] = c[f];
        return a.dispatchEvent(e)
    }
    ;
    c.regExpEscape = function(a) {
        return a.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    ;
    c.siblingIndex = function(a) {
        for (var b = 0; a = a.previousElementSibling; b++)
            ;
        return b
    }
    ;
    "undefined" !== typeof Document && ("loading" !== document.readyState ? m() : document.addEventListener("DOMContentLoaded", m));
    e.$ = c;
    e.$$ = k;
    "undefined" !== typeof self && (self.Awesomplete = e);
    "object" === typeof module && module.exports && (module.exports = e);
    return e
})();
/* mousetrap v1.5.3 craig.is/killing/mice */
(function(C, r, g) {
    function t(a, b, h) {
        a.addEventListener ? a.addEventListener(b, h, !1) : a.attachEvent("on" + b, h)
    }
    function x(a) {
        if ("keypress" == a.type) {
            var b = String.fromCharCode(a.which);
            a.shiftKey || (b = b.toLowerCase());
            return b
        }
        return l[a.which] ? l[a.which] : p[a.which] ? p[a.which] : String.fromCharCode(a.which).toLowerCase()
    }
    function D(a) {
        var b = [];
        a.shiftKey && b.push("shift");
        a.altKey && b.push("alt");
        a.ctrlKey && b.push("ctrl");
        a.metaKey && b.push("meta");
        return b
    }
    function u(a) {
        return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a
    }
    function y(a, b) {
        var h, c, e, g = [];
        h = a;
        "+" === h ? h = ["+"] : (h = h.replace(/\+{2}/g, "+plus"),
        h = h.split("+"));
        for (e = 0; e < h.length; ++e)
            c = h[e],
            z[c] && (c = z[c]),
            b && "keypress" != b && A[c] && (c = A[c],
            g.push("shift")),
            u(c) && g.push(c);
        h = c;
        e = b;
        if (!e) {
            if (!k) {
                k = {};
                for (var m in l)
                    95 < m && 112 > m || l.hasOwnProperty(m) && (k[l[m]] = m)
            }
            e = k[h] ? "keydown" : "keypress"
        }
        "keypress" == e && g.length && (e = "keydown");
        return {
            key: c,
            modifiers: g,
            action: e
        }
    }
    function B(a, b) {
        return null === a || a === r ? !1 : a === b ? !0 : B(a.parentNode, b)
    }
    function c(a) {
        function b(a) {
            a = a || {};
            var b = !1, n;
            for (n in q)
                a[n] ? b = !0 : q[n] = 0;
            b || (v = !1)
        }
        function h(a, b, n, f, c, h) {
            var g, e, l = [], m = n.type;
            if (!d._callbacks[a])
                return [];
            "keyup" == m && u(a) && (b = [a]);
            for (g = 0; g < d._callbacks[a].length; ++g)
                if (e = d._callbacks[a][g],
                (f || !e.seq || q[e.seq] == e.level) && m == e.action) {
                    var k;
                    (k = "keypress" == m && !n.metaKey && !n.ctrlKey) || (k = e.modifiers,
                    k = b.sort().join(",") === k.sort().join(","));
                    k && (k = f && e.seq == f && e.level == h,
                    (!f && e.combo == c || k) && d._callbacks[a].splice(g, 1),
                    l.push(e))
                }
            return l
        }
        function g(a, b, n, f) {
            d.stopCallback(b, b.target || b.srcElement, n, f) || !1 !== a(b, n) || (b.preventDefault ? b.preventDefault() : b.returnValue = !1,
            b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0)
        }
        function e(a) {
            "number" !== typeof a.which && (a.which = a.keyCode);
            var b = x(a);
            b && ("keyup" == a.type && w === b ? w = !1 : d.handleKey(b, D(a), a))
        }
        function l(a, c, n, f) {
            function e(c) {
                return function() {
                    v = c;
                    ++q[a];
                    clearTimeout(k);
                    k = setTimeout(b, 1E3)
                }
            }
            function h(c) {
                g(n, c, a);
                "keyup" !== f && (w = x(c));
                setTimeout(b, 10)
            }
            for (var d = q[a] = 0; d < c.length; ++d) {
                var p = d + 1 === c.length ? h : e(f || y(c[d + 1]).action);
                m(c[d], p, f, a, d)
            }
        }
        function m(a, b, c, f, e) {
            d._directMap[a + ":" + c] = b;
            a = a.replace(/\s+/g, " ");
            var g = a.split(" ");
            1 < g.length ? l(a, g, b, c) : (c = y(a, c),
            d._callbacks[c.key] = d._callbacks[c.key] || [],
            h(c.key, c.modifiers, {
                type: c.action
            }, f, a, e),
            d._callbacks[c.key][f ? "unshift" : "push"]({
                callback: b,
                modifiers: c.modifiers,
                action: c.action,
                seq: f,
                level: e,
                combo: a
            }))
        }
        var d = this;
        a = a || r;
        if (!(d instanceof c))
            return new c(a);
        d.target = a;
        d._callbacks = {};
        d._directMap = {};
        var q = {}, k, w = !1, p = !1, v = !1;
        d._handleKey = function(a, c, e) {
            var f = h(a, c, e), d;
            c = {};
            var k = 0
              , l = !1;
            for (d = 0; d < f.length; ++d)
                f[d].seq && (k = Math.max(k, f[d].level));
            for (d = 0; d < f.length; ++d)
                f[d].seq ? f[d].level == k && (l = !0,
                c[f[d].seq] = 1,
                g(f[d].callback, e, f[d].combo, f[d].seq)) : l || g(f[d].callback, e, f[d].combo);
            f = "keypress" == e.type && p;
            e.type != v || u(a) || f || b(c);
            p = l && "keydown" == e.type
        }
        ;
        d._bindMultiple = function(a, b, c) {
            for (var d = 0; d < a.length; ++d)
                m(a[d], b, c)
        }
        ;
        t(a, "keypress", e);
        t(a, "keydown", e);
        t(a, "keyup", e)
    }
    var l = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
    }, p = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    }, A = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
    }, z = {
        option: "alt",
        command: "meta",
        "return": "enter",
        escape: "esc",
        plus: "+",
        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, k;
    for (g = 1; 20 > g; ++g)
        l[111 + g] = "f" + g;
    for (g = 0; 9 >= g; ++g)
        l[g + 96] = g;
    c.prototype.bind = function(a, b, c) {
        a = a instanceof Array ? a : [a];
        this._bindMultiple.call(this, a, b, c);
        return this
    }
    ;
    c.prototype.unbind = function(a, b) {
        return this.bind.call(this, a, function() {}, b)
    }
    ;
    c.prototype.trigger = function(a, b) {
        if (this._directMap[a + ":" + b])
            this._directMap[a + ":" + b]({}, a);
        return this
    }
    ;
    c.prototype.reset = function() {
        this._callbacks = {};
        this._directMap = {};
        return this
    }
    ;
    c.prototype.stopCallback = function(a, b) {
        return -1 < (" " + b.className + " ").indexOf(" mousetrap ") || B(b, this.target) ? !1 : "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable
    }
    ;
    c.prototype.handleKey = function() {
        return this._handleKey.apply(this, arguments)
    }
    ;
    c.init = function() {
        var a = c(r), b;
        for (b in a)
            "_" !== b.charAt(0) && (c[b] = function(b) {
                return function() {
                    return a[b].apply(a, arguments)
                }
            }(b))
    }
    ;
    c.init();
    C.Mousetrap = c;
    "undefined" !== typeof module && module.exports && (module.exports = c);
    "function" === typeof define && define.amd && define(function() {
        return c
    })
})(window, document);

!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e()
}(this, function() {
    return function(t) {
        function e(n) {
            if (r[n])
                return r[n].exports;
            var o = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(o.exports, o, o.exports, e),
            o.loaded = !0,
            o.exports
        }
        var r = {};
        return e.m = t,
        e.c = r,
        e.p = "",
        e(0)
    }([function(t, e, r) {
        "use strict";
        function n(t, e) {
            "object" === ("undefined" == typeof t ? "undefined" : i(t)) && (e = t,
            t = void 0),
            e = e || {};
            var r, n = s(t), a = n.source, p = n.id, f = n.path, l = h[p] && f in h[p].nsps, d = e.forceNew || e["force new connection"] || !1 === e.multiplex || l;
            return d ? (u("ignoring socket cache for %s", a),
            r = c(a, e)) : (h[p] || (u("new io instance for %s", a),
            h[p] = c(a, e)),
            r = h[p]),
            n.query && !e.query ? e.query = n.query : e && "object" === i(e.query) && (e.query = o(e.query)),
            r.socket(n.path, e)
        }
        function o(t) {
            var e = [];
            for (var r in t)
                t.hasOwnProperty(r) && e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
            return e.join("&")
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , s = r(1)
          , a = r(7)
          , c = r(17)
          , u = r(3)("socket.io-client");
        t.exports = e = n;
        var h = e.managers = {};
        e.protocol = a.protocol,
        e.connect = n,
        e.Manager = r(17),
        e.Socket = r(44)
    }
    , function(t, e, r) {
        (function(e) {
            "use strict";
            function n(t, r) {
                var n = t;
                r = r || e.location,
                null == t && (t = r.protocol + "//" + r.host),
                "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? r.protocol + t : r.host + t),
                /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t),
                t = "undefined" != typeof r ? r.protocol + "//" + t : "https://" + t),
                i("parse %s", t),
                n = o(t)),
                n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
                n.path = n.path || "/";
                var s = n.host.indexOf(":") !== -1
                  , a = s ? "[" + n.host + "]" : n.host;
                return n.id = n.protocol + "://" + a + ":" + n.port,
                n.href = n.protocol + "://" + a + (r && r.port === n.port ? "" : ":" + n.port),
                n
            }
            var o = r(2)
              , i = r(3)("socket.io-client:url");
            t.exports = n
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
          , n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function(t) {
            var e = t
              , o = t.indexOf("[")
              , i = t.indexOf("]");
            o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
            for (var s = r.exec(t || ""), a = {}, c = 14; c--; )
                a[n[c]] = s[c] || "";
            return o != -1 && i != -1 && (a.source = e,
            a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"),
            a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
            a.ipv6uri = !0),
            a
        }
    }
    , function(t, e, r) {
        (function(n) {
            function o() {
                return "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            function i() {
                var t = arguments
                  , r = this.useColors;
                if (t[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + t[0] + (r ? "%c " : " ") + "+" + e.humanize(this.diff),
                !r)
                    return t;
                var n = "color: " + this.color;
                t = [t[0], n, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var o = 0
                  , i = 0;
                return t[0].replace(/%[a-z%]/g, function(t) {
                    "%%" !== t && (o++,
                    "%c" === t && (i = o))
                }),
                t.splice(i, 0, n),
                t
            }
            function s() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function a(t) {
                try {
                    null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                } catch (t) {}
            }
            function c() {
                try {
                    return e.storage.debug
                } catch (t) {}
                if ("undefined" != typeof n && "env"in n)
                    return n.env.DEBUG
            }
            function u() {
                try {
                    return window.localStorage
                } catch (t) {}
            }
            e = t.exports = r(5),
            e.log = s,
            e.formatArgs = i,
            e.save = a,
            e.load = c,
            e.useColors = o,
            e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(),
            e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            e.formatters.j = function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }
            ,
            e.enable(c())
        }
        ).call(e, r(4))
    }
    , function(t, e) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function n() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(t) {
            if (h === setTimeout)
                return setTimeout(t, 0);
            if ((h === r || !h) && setTimeout)
                return h = setTimeout,
                setTimeout(t, 0);
            try {
                return h(t, 0)
            } catch (e) {
                try {
                    return h.call(null, t, 0)
                } catch (e) {
                    return h.call(this, t, 0)
                }
            }
        }
        function i(t) {
            if (p === clearTimeout)
                return clearTimeout(t);
            if ((p === n || !p) && clearTimeout)
                return p = clearTimeout,
                clearTimeout(t);
            try {
                return p(t)
            } catch (e) {
                try {
                    return p.call(null, t)
                } catch (e) {
                    return p.call(this, t)
                }
            }
        }
        function s() {
            y && l && (y = !1,
            l.length ? d = l.concat(d) : g = -1,
            d.length && a())
        }
        function a() {
            if (!y) {
                var t = o(s);
                y = !0;
                for (var e = d.length; e; ) {
                    for (l = d,
                    d = []; ++g < e; )
                        l && l[g].run();
                    g = -1,
                    e = d.length
                }
                l = null,
                y = !1,
                i(t)
            }
        }
        function c(t, e) {
            this.fun = t,
            this.array = e
        }
        function u() {}
        var h, p, f = t.exports = {};
        !function() {
            try {
                h = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                h = r
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (t) {
                p = n
            }
        }();
        var l, d = [], y = !1, g = -1;
        f.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
            d.push(new c(t,e)),
            1 !== d.length || y || o(a)
        }
        ,
        c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        f.title = "browser",
        f.browser = !0,
        f.env = {},
        f.argv = [],
        f.version = "",
        f.versions = {},
        f.on = u,
        f.addListener = u,
        f.once = u,
        f.off = u,
        f.removeListener = u,
        f.removeAllListeners = u,
        f.emit = u,
        f.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        f.cwd = function() {
            return "/"
        }
        ,
        f.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        f.umask = function() {
            return 0
        }
    }
    , function(t, e, r) {
        function n() {
            return e.colors[h++ % e.colors.length]
        }
        function o(t) {
            function r() {}
            function o() {
                var t = o
                  , r = +new Date
                  , i = r - (u || r);
                t.diff = i,
                t.prev = u,
                t.curr = r,
                u = r,
                null == t.useColors && (t.useColors = e.useColors()),
                null == t.color && t.useColors && (t.color = n());
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
                    s[a] = arguments[a];
                s[0] = e.coerce(s[0]),
                "string" != typeof s[0] && (s = ["%o"].concat(s));
                var c = 0;
                s[0] = s[0].replace(/%([a-z%])/g, function(r, n) {
                    if ("%%" === r)
                        return r;
                    c++;
                    var o = e.formatters[n];
                    if ("function" == typeof o) {
                        var i = s[c];
                        r = o.call(t, i),
                        s.splice(c, 1),
                        c--
                    }
                    return r
                }),
                s = e.formatArgs.apply(t, s);
                var h = o.log || e.log || console.log.bind(console);
                h.apply(t, s)
            }
            r.enabled = !1,
            o.enabled = !0;
            var i = e.enabled(t) ? o : r;
            return i.namespace = t,
            i
        }
        function i(t) {
            e.save(t);
            for (var r = (t || "").split(/[\s,]+/), n = r.length, o = 0; o < n; o++)
                r[o] && (t = r[o].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"),
                "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
        }
        function s() {
            e.enable("")
        }
        function a(t) {
            var r, n;
            for (r = 0,
            n = e.skips.length; r < n; r++)
                if (e.skips[r].test(t))
                    return !1;
            for (r = 0,
            n = e.names.length; r < n; r++)
                if (e.names[r].test(t))
                    return !0;
            return !1
        }
        function c(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        e = t.exports = o.debug = o,
        e.coerce = c,
        e.disable = s,
        e.enable = i,
        e.enabled = a,
        e.humanize = r(6),
        e.names = [],
        e.skips = [],
        e.formatters = {};
        var u, h = 0
    }
    , function(t, e) {
        function r(t) {
            if (t = String(t),
            !(t.length > 1e4)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var r = parseFloat(e[1])
                      , n = (e[2] || "ms").toLowerCase();
                    switch (n) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r * h;
                    case "days":
                    case "day":
                    case "d":
                        return r * u;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r * c;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r * a;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r;
                    default:
                        return
                    }
                }
            }
        }
        function n(t) {
            return t >= u ? Math.round(t / u) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
        }
        function o(t) {
            return i(t, u, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
        }
        function i(t, e, r) {
            if (!(t < e))
                return t < 1.5 * e ? Math.floor(t / e) + " " + r : Math.ceil(t / e) + " " + r + "s"
        }
        var s = 1e3
          , a = 60 * s
          , c = 60 * a
          , u = 24 * c
          , h = 365.25 * u;
        t.exports = function(t, e) {
            e = e || {};
            var i = typeof t;
            if ("string" === i && t.length > 0)
                return r(t);
            if ("number" === i && isNaN(t) === !1)
                return e.long ? o(t) : n(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    }
    , function(t, e, r) {
        function n() {}
        function o(t) {
            var r = ""
              , n = !1;
            return r += t.type,
            e.BINARY_EVENT != t.type && e.BINARY_ACK != t.type || (r += t.attachments,
            r += "-"),
            t.nsp && "/" != t.nsp && (n = !0,
            r += t.nsp),
            null != t.id && (n && (r += ",",
            n = !1),
            r += t.id),
            null != t.data && (n && (r += ","),
            r += f.stringify(t.data)),
            p("encoded %j as %s", t, r),
            r
        }
        function i(t, e) {
            function r(t) {
                var r = d.deconstructPacket(t)
                  , n = o(r.packet)
                  , i = r.buffers;
                i.unshift(n),
                e(i)
            }
            d.removeBlobs(t, r)
        }
        function s() {
            this.reconstructor = null
        }
        function a(t) {
            var r = {}
              , n = 0;
            if (r.type = Number(t.charAt(0)),
            null == e.types[r.type])
                return h();
            if (e.BINARY_EVENT == r.type || e.BINARY_ACK == r.type) {
                for (var o = ""; "-" != t.charAt(++n) && (o += t.charAt(n),
                n != t.length); )
                    ;
                if (o != Number(o) || "-" != t.charAt(n))
                    throw new Error("Illegal attachments");
                r.attachments = Number(o)
            }
            if ("/" == t.charAt(n + 1))
                for (r.nsp = ""; ++n; ) {
                    var i = t.charAt(n);
                    if ("," == i)
                        break;
                    if (r.nsp += i,
                    n == t.length)
                        break
                }
            else
                r.nsp = "/";
            var s = t.charAt(n + 1);
            if ("" !== s && Number(s) == s) {
                for (r.id = ""; ++n; ) {
                    var i = t.charAt(n);
                    if (null == i || Number(i) != i) {
                        --n;
                        break
                    }
                    if (r.id += t.charAt(n),
                    n == t.length)
                        break
                }
                r.id = Number(r.id)
            }
            return t.charAt(++n) && (r = c(r, t.substr(n))),
            p("decoded %s as %j", t, r),
            r
        }
        function c(t, e) {
            try {
                t.data = f.parse(e)
            } catch (t) {
                return h()
            }
            return t
        }
        function u(t) {
            this.reconPack = t,
            this.buffers = []
        }
        function h(t) {
            return {
                type: e.ERROR,
                data: "parser error"
            }
        }
        var p = r(8)("socket.io-parser")
          , f = r(11)
          , l = r(13)
          , d = r(14)
          , y = r(16);
        e.protocol = 4,
        e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
        e.CONNECT = 0,
        e.DISCONNECT = 1,
        e.EVENT = 2,
        e.ACK = 3,
        e.ERROR = 4,
        e.BINARY_EVENT = 5,
        e.BINARY_ACK = 6,
        e.Encoder = n,
        e.Decoder = s,
        n.prototype.encode = function(t, r) {
            if (p("encoding packet %j", t),
            e.BINARY_EVENT == t.type || e.BINARY_ACK == t.type)
                i(t, r);
            else {
                var n = o(t);
                r([n])
            }
        }
        ,
        l(s.prototype),
        s.prototype.add = function(t) {
            var r;
            if ("string" == typeof t)
                r = a(t),
                e.BINARY_EVENT == r.type || e.BINARY_ACK == r.type ? (this.reconstructor = new u(r),
                0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r);
            else {
                if (!y(t) && !t.base64)
                    throw new Error("Unknown type: " + t);
                if (!this.reconstructor)
                    throw new Error("got binary data when not reconstructing a packet");
                r = this.reconstructor.takeBinaryData(t),
                r && (this.reconstructor = null,
                this.emit("decoded", r))
            }
        }
        ,
        s.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }
        ,
        u.prototype.takeBinaryData = function(t) {
            if (this.buffers.push(t),
            this.buffers.length == this.reconPack.attachments) {
                var e = d.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(),
                e
            }
            return null
        }
        ,
        u.prototype.finishedReconstruction = function() {
            this.reconPack = null,
            this.buffers = []
        }
    }
    , function(t, e, r) {
        function n() {
            return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }
        function o() {
            var t = arguments
              , r = this.useColors;
            if (t[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + t[0] + (r ? "%c " : " ") + "+" + e.humanize(this.diff),
            !r)
                return t;
            var n = "color: " + this.color;
            t = [t[0], n, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
            var o = 0
              , i = 0;
            return t[0].replace(/%[a-z%]/g, function(t) {
                "%%" !== t && (o++,
                "%c" === t && (i = o))
            }),
            t.splice(i, 0, n),
            t
        }
        function i() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }
        function s(t) {
            try {
                null == t ? e.storage.removeItem("debug") : e.storage.debug = t
            } catch (t) {}
        }
        function a() {
            var t;
            try {
                t = e.storage.debug
            } catch (t) {}
            return t
        }
        function c() {
            try {
                return window.localStorage
            } catch (t) {}
        }
        e = t.exports = r(9),
        e.log = i,
        e.formatArgs = o,
        e.save = s,
        e.load = a,
        e.useColors = n,
        e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(),
        e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
        e.formatters.j = function(t) {
            return JSON.stringify(t)
        }
        ,
        e.enable(a())
    }
    , function(t, e, r) {
        function n() {
            return e.colors[h++ % e.colors.length]
        }
        function o(t) {
            function r() {}
            function o() {
                var t = o
                  , r = +new Date
                  , i = r - (u || r);
                t.diff = i,
                t.prev = u,
                t.curr = r,
                u = r,
                null == t.useColors && (t.useColors = e.useColors()),
                null == t.color && t.useColors && (t.color = n());
                var s = Array.prototype.slice.call(arguments);
                s[0] = e.coerce(s[0]),
                "string" != typeof s[0] && (s = ["%o"].concat(s));
                var a = 0;
                s[0] = s[0].replace(/%([a-z%])/g, function(r, n) {
                    if ("%%" === r)
                        return r;
                    a++;
                    var o = e.formatters[n];
                    if ("function" == typeof o) {
                        var i = s[a];
                        r = o.call(t, i),
                        s.splice(a, 1),
                        a--
                    }
                    return r
                }),
                "function" == typeof e.formatArgs && (s = e.formatArgs.apply(t, s));
                var c = o.log || e.log || console.log.bind(console);
                c.apply(t, s)
            }
            r.enabled = !1,
            o.enabled = !0;
            var i = e.enabled(t) ? o : r;
            return i.namespace = t,
            i
        }
        function i(t) {
            e.save(t);
            for (var r = (t || "").split(/[\s,]+/), n = r.length, o = 0; o < n; o++)
                r[o] && (t = r[o].replace(/\*/g, ".*?"),
                "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
        }
        function s() {
            e.enable("")
        }
        function a(t) {
            var r, n;
            for (r = 0,
            n = e.skips.length; r < n; r++)
                if (e.skips[r].test(t))
                    return !1;
            for (r = 0,
            n = e.names.length; r < n; r++)
                if (e.names[r].test(t))
                    return !0;
            return !1
        }
        function c(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        e = t.exports = o,
        e.coerce = c,
        e.disable = s,
        e.enable = i,
        e.enabled = a,
        e.humanize = r(10),
        e.names = [],
        e.skips = [],
        e.formatters = {};
        var u, h = 0
    }
    , function(t, e) {
        function r(t) {
            if (t = "" + t,
            !(t.length > 1e4)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var r = parseFloat(e[1])
                      , n = (e[2] || "ms").toLowerCase();
                    switch (n) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r * h;
                    case "days":
                    case "day":
                    case "d":
                        return r * u;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r * c;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r * a;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r
                    }
                }
            }
        }
        function n(t) {
            return t >= u ? Math.round(t / u) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
        }
        function o(t) {
            return i(t, u, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
        }
        function i(t, e, r) {
            if (!(t < e))
                return t < 1.5 * e ? Math.floor(t / e) + " " + r : Math.ceil(t / e) + " " + r + "s"
        }
        var s = 1e3
          , a = 60 * s
          , c = 60 * a
          , u = 24 * c
          , h = 365.25 * u;
        t.exports = function(t, e) {
            return e = e || {},
            "string" == typeof t ? r(t) : e.long ? o(t) : n(t)
        }
    }
    , function(t, e, r) {
        (function(t, r) {
            var n = !1;
            (function() {
                function o(t, e) {
                    function r(t) {
                        if (r[t] !== g)
                            return r[t];
                        var o;
                        if ("bug-string-char-index" == t)
                            o = "a" != "a"[0];
                        else if ("json" == t)
                            o = r("json-stringify") && r("json-parse");
                        else {
                            var s, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == t) {
                                var c = e.stringify
                                  , h = "function" == typeof c && b;
                                if (h) {
                                    (s = function() {
                                        return 1
                                    }
                                    ).toJSON = s;
                                    try {
                                        h = "0" === c(0) && "0" === c(new n) && '""' == c(new i) && c(v) === g && c(g) === g && c() === g && "1" === c(s) && "[1]" == c([s]) && "[null]" == c([g]) && "null" == c(null) && "[null,null,null]" == c([g, v, null]) && c({
                                            a: [s, !0, !1, null, "\0\b\n\f\r\t"]
                                        }) == a && "1" === c(null, s) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new u(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == c(new u(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new u(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == c(new u(-1))
                                    } catch (t) {
                                        h = !1
                                    }
                                }
                                o = h
                            }
                            if ("json-parse" == t) {
                                var p = e.parse;
                                if ("function" == typeof p)
                                    try {
                                        if (0 === p("0") && !p(!1)) {
                                            s = p(a);
                                            var f = 5 == s.a.length && 1 === s.a[0];
                                            if (f) {
                                                try {
                                                    f = !p('"\t"')
                                                } catch (t) {}
                                                if (f)
                                                    try {
                                                        f = 1 !== p("01")
                                                    } catch (t) {}
                                                if (f)
                                                    try {
                                                        f = 1 !== p("1.")
                                                    } catch (t) {}
                                            }
                                        }
                                    } catch (t) {
                                        f = !1
                                    }
                                o = f
                            }
                        }
                        return r[t] = !!o
                    }
                    t || (t = c.Object()),
                    e || (e = c.Object());
                    var n = t.Number || c.Number
                      , i = t.String || c.String
                      , a = t.Object || c.Object
                      , u = t.Date || c.Date
                      , h = t.SyntaxError || c.SyntaxError
                      , p = t.TypeError || c.TypeError
                      , f = t.Math || c.Math
                      , l = t.JSON || c.JSON;
                    "object" == typeof l && l && (e.stringify = l.stringify,
                    e.parse = l.parse);
                    var d, y, g, m = a.prototype, v = m.toString, b = new u(-0xc782b5b800cec);
                    try {
                        b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
                    } catch (t) {}
                    if (!r("json")) {
                        var w = "[object Function]"
                          , k = "[object Date]"
                          , x = "[object Number]"
                          , A = "[object String]"
                          , C = "[object Array]"
                          , B = "[object Boolean]"
                          , S = r("bug-string-char-index");
                        if (!b)
                            var T = f.floor
                              , E = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                              , _ = function(t, e) {
                                return E[e] + 365 * (t - 1970) + T((t - 1969 + (e = +(e > 1))) / 4) - T((t - 1901 + e) / 100) + T((t - 1601 + e) / 400)
                            };
                        if ((d = m.hasOwnProperty) || (d = function(t) {
                            var e, r = {};
                            return (r.__proto__ = null,
                            r.__proto__ = {
                                toString: 1
                            },
                            r).toString != v ? d = function(t) {
                                var e = this.__proto__
                                  , r = t in (this.__proto__ = null,
                                this);
                                return this.__proto__ = e,
                                r
                            }
                            : (e = r.constructor,
                            d = function(t) {
                                var r = (this.constructor || e).prototype;
                                return t in this && !(t in r && this[t] === r[t])
                            }
                            ),
                            r = null,
                            d.call(this, t)
                        }
                        ),
                        y = function(t, e) {
                            var r, n, o, i = 0;
                            (r = function() {
                                this.valueOf = 0
                            }
                            ).prototype.valueOf = 0,
                            n = new r;
                            for (o in n)
                                d.call(n, o) && i++;
                            return r = n = null,
                            i ? y = 2 == i ? function(t, e) {
                                var r, n = {}, o = v.call(t) == w;
                                for (r in t)
                                    o && "prototype" == r || d.call(n, r) || !(n[r] = 1) || !d.call(t, r) || e(r)
                            }
                            : function(t, e) {
                                var r, n, o = v.call(t) == w;
                                for (r in t)
                                    o && "prototype" == r || !d.call(t, r) || (n = "constructor" === r) || e(r);
                                (n || d.call(t, r = "constructor")) && e(r)
                            }
                            : (n = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                            y = function(t, e) {
                                var r, o, i = v.call(t) == w, a = !i && "function" != typeof t.constructor && s[typeof t.hasOwnProperty] && t.hasOwnProperty || d;
                                for (r in t)
                                    i && "prototype" == r || !a.call(t, r) || e(r);
                                for (o = n.length; r = n[--o]; a.call(t, r) && e(r))
                                    ;
                            }
                            ),
                            y(t, e)
                        }
                        ,
                        !r("json-stringify")) {
                            var N = {
                                92: "\\\\",
                                34: '\\"',
                                8: "\\b",
                                12: "\\f",
                                10: "\\n",
                                13: "\\r",
                                9: "\\t"
                            }
                              , j = "000000"
                              , O = function(t, e) {
                                return (j + (e || 0)).slice(-t)
                            }
                              , P = "\\u00"
                              , R = function(t) {
                                for (var e = '"', r = 0, n = t.length, o = !S || n > 10, i = o && (S ? t.split("") : t); r < n; r++) {
                                    var s = t.charCodeAt(r);
                                    switch (s) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        e += N[s];
                                        break;
                                    default:
                                        if (s < 32) {
                                            e += P + O(2, s.toString(16));
                                            break
                                        }
                                        e += o ? i[r] : t.charAt(r)
                                    }
                                }
                                return e + '"'
                            }
                              , D = function(t, e, r, n, o, i, s) {
                                var a, c, u, h, f, l, m, b, w, S, E, N, j, P, q, U;
                                try {
                                    a = e[t]
                                } catch (t) {}
                                if ("object" == typeof a && a)
                                    if (c = v.call(a),
                                    c != k || d.call(a, "toJSON"))
                                        "function" == typeof a.toJSON && (c != x && c != A && c != C || d.call(a, "toJSON")) && (a = a.toJSON(t));
                                    else if (a > -1 / 0 && a < 1 / 0) {
                                        if (_) {
                                            for (f = T(a / 864e5),
                                            u = T(f / 365.2425) + 1970 - 1; _(u + 1, 0) <= f; u++)
                                                ;
                                            for (h = T((f - _(u, 0)) / 30.42); _(u, h + 1) <= f; h++)
                                                ;
                                            f = 1 + f - _(u, h),
                                            l = (a % 864e5 + 864e5) % 864e5,
                                            m = T(l / 36e5) % 24,
                                            b = T(l / 6e4) % 60,
                                            w = T(l / 1e3) % 60,
                                            S = l % 1e3
                                        } else
                                            u = a.getUTCFullYear(),
                                            h = a.getUTCMonth(),
                                            f = a.getUTCDate(),
                                            m = a.getUTCHours(),
                                            b = a.getUTCMinutes(),
                                            w = a.getUTCSeconds(),
                                            S = a.getUTCMilliseconds();
                                        a = (u <= 0 || u >= 1e4 ? (u < 0 ? "-" : "+") + O(6, u < 0 ? -u : u) : O(4, u)) + "-" + O(2, h + 1) + "-" + O(2, f) + "T" + O(2, m) + ":" + O(2, b) + ":" + O(2, w) + "." + O(3, S) + "Z"
                                    } else
                                        a = null;
                                if (r && (a = r.call(e, t, a)),
                                null === a)
                                    return "null";
                                if (c = v.call(a),
                                c == B)
                                    return "" + a;
                                if (c == x)
                                    return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                if (c == A)
                                    return R("" + a);
                                if ("object" == typeof a) {
                                    for (P = s.length; P--; )
                                        if (s[P] === a)
                                            throw p();
                                    if (s.push(a),
                                    E = [],
                                    q = i,
                                    i += o,
                                    c == C) {
                                        for (j = 0,
                                        P = a.length; j < P; j++)
                                            N = D(j, a, r, n, o, i, s),
                                            E.push(N === g ? "null" : N);
                                        U = E.length ? o ? "[\n" + i + E.join(",\n" + i) + "\n" + q + "]" : "[" + E.join(",") + "]" : "[]"
                                    } else
                                        y(n || a, function(t) {
                                            var e = D(t, a, r, n, o, i, s);
                                            e !== g && E.push(R(t) + ":" + (o ? " " : "") + e)
                                        }),
                                        U = E.length ? o ? "{\n" + i + E.join(",\n" + i) + "\n" + q + "}" : "{" + E.join(",") + "}" : "{}";
                                    return s.pop(),
                                    U
                                }
                            };
                            e.stringify = function(t, e, r) {
                                var n, o, i, a;
                                if (s[typeof e] && e)
                                    if ((a = v.call(e)) == w)
                                        o = e;
                                    else if (a == C) {
                                        i = {};
                                        for (var c, u = 0, h = e.length; u < h; c = e[u++],
                                        a = v.call(c),
                                        (a == A || a == x) && (i[c] = 1))
                                            ;
                                    }
                                if (r)
                                    if ((a = v.call(r)) == x) {
                                        if ((r -= r % 1) > 0)
                                            for (n = "",
                                            r > 10 && (r = 10); n.length < r; n += " ")
                                                ;
                                    } else
                                        a == A && (n = r.length <= 10 ? r : r.slice(0, 10));
                                return D("", (c = {},
                                c[""] = t,
                                c), o, i, n, "", [])
                            }
                        }
                        if (!r("json-parse")) {
                            var q, U, M = i.fromCharCode, L = {
                                92: "\\",
                                34: '"',
                                47: "/",
                                98: "\b",
                                116: "\t",
                                110: "\n",
                                102: "\f",
                                114: "\r"
                            }, I = function() {
                                throw q = U = null,
                                h()
                            }, H = function() {
                                for (var t, e, r, n, o, i = U, s = i.length; q < s; )
                                    switch (o = i.charCodeAt(q)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        q++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return t = S ? i.charAt(q) : i[q],
                                        q++,
                                        t;
                                    case 34:
                                        for (t = "@",
                                        q++; q < s; )
                                            if (o = i.charCodeAt(q),
                                            o < 32)
                                                I();
                                            else if (92 == o)
                                                switch (o = i.charCodeAt(++q)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    t += L[o],
                                                    q++;
                                                    break;
                                                case 117:
                                                    for (e = ++q,
                                                    r = q + 4; q < r; q++)
                                                        o = i.charCodeAt(q),
                                                        o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || I();
                                                    t += M("0x" + i.slice(e, q));
                                                    break;
                                                default:
                                                    I()
                                                }
                                            else {
                                                if (34 == o)
                                                    break;
                                                for (o = i.charCodeAt(q),
                                                e = q; o >= 32 && 92 != o && 34 != o; )
                                                    o = i.charCodeAt(++q);
                                                t += i.slice(e, q)
                                            }
                                        if (34 == i.charCodeAt(q))
                                            return q++,
                                            t;
                                        I();
                                    default:
                                        if (e = q,
                                        45 == o && (n = !0,
                                        o = i.charCodeAt(++q)),
                                        o >= 48 && o <= 57) {
                                            for (48 == o && (o = i.charCodeAt(q + 1),
                                            o >= 48 && o <= 57) && I(),
                                            n = !1; q < s && (o = i.charCodeAt(q),
                                            o >= 48 && o <= 57); q++)
                                                ;
                                            if (46 == i.charCodeAt(q)) {
                                                for (r = ++q; r < s && (o = i.charCodeAt(r),
                                                o >= 48 && o <= 57); r++)
                                                    ;
                                                r == q && I(),
                                                q = r
                                            }
                                            if (o = i.charCodeAt(q),
                                            101 == o || 69 == o) {
                                                for (o = i.charCodeAt(++q),
                                                43 != o && 45 != o || q++,
                                                r = q; r < s && (o = i.charCodeAt(r),
                                                o >= 48 && o <= 57); r++)
                                                    ;
                                                r == q && I(),
                                                q = r
                                            }
                                            return +i.slice(e, q)
                                        }
                                        if (n && I(),
                                        "true" == i.slice(q, q + 4))
                                            return q += 4,
                                            !0;
                                        if ("false" == i.slice(q, q + 5))
                                            return q += 5,
                                            !1;
                                        if ("null" == i.slice(q, q + 4))
                                            return q += 4,
                                            null;
                                        I()
                                    }
                                return "$"
                            }, z = function(t) {
                                var e, r;
                                if ("$" == t && I(),
                                "string" == typeof t) {
                                    if ("@" == (S ? t.charAt(0) : t[0]))
                                        return t.slice(1);
                                    if ("[" == t) {
                                        for (e = []; t = H(),
                                        "]" != t; r || (r = !0))
                                            r && ("," == t ? (t = H(),
                                            "]" == t && I()) : I()),
                                            "," == t && I(),
                                            e.push(z(t));
                                        return e
                                    }
                                    if ("{" == t) {
                                        for (e = {}; t = H(),
                                        "}" != t; r || (r = !0))
                                            r && ("," == t ? (t = H(),
                                            "}" == t && I()) : I()),
                                            "," != t && "string" == typeof t && "@" == (S ? t.charAt(0) : t[0]) && ":" == H() || I(),
                                            e[t.slice(1)] = z(H());
                                        return e
                                    }
                                    I()
                                }
                                return t
                            }, J = function(t, e, r) {
                                var n = X(t, e, r);
                                n === g ? delete t[e] : t[e] = n
                            }, X = function(t, e, r) {
                                var n, o = t[e];
                                if ("object" == typeof o && o)
                                    if (v.call(o) == C)
                                        for (n = o.length; n--; )
                                            J(o, n, r);
                                    else
                                        y(o, function(t) {
                                            J(o, t, r)
                                        });
                                return r.call(t, e, o)
                            };
                            e.parse = function(t, e) {
                                var r, n;
                                return q = 0,
                                U = "" + t,
                                r = z(H()),
                                "$" != H() && I(),
                                q = U = null,
                                e && v.call(e) == w ? X((n = {},
                                n[""] = r,
                                n), "", e) : r
                            }
                        }
                    }
                    return e.runInContext = o,
                    e
                }
                var i = "function" == typeof n && n.amd
                  , s = {
                    function: !0,
                    object: !0
                }
                  , a = s[typeof e] && e && !e.nodeType && e
                  , c = s[typeof window] && window || this
                  , u = a && s[typeof t] && t && !t.nodeType && "object" == typeof r && r;
                if (!u || u.global !== u && u.window !== u && u.self !== u || (c = u),
                a && !i)
                    o(c, a);
                else {
                    var h = c.JSON
                      , p = c.JSON3
                      , f = !1
                      , l = o(c, c.JSON3 = {
                        noConflict: function() {
                            return f || (f = !0,
                            c.JSON = h,
                            c.JSON3 = p,
                            h = p = null),
                            l
                        }
                    });
                    c.JSON = {
                        parse: l.parse,
                        stringify: l.stringify
                    }
                }
                i && n(function() {
                    return l
                })
            }
            ).call(this)
        }
        ).call(e, r(12)(t), function() {
            return this
        }())
    }
    , function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}
            ,
            t.paths = [],
            t.children = [],
            t.webpackPolyfill = 1),
            t
        }
    }
    , function(t, e) {
        function r(t) {
            if (t)
                return n(t)
        }
        function n(t) {
            for (var e in r.prototype)
                t[e] = r.prototype[e];
            return t
        }
        t.exports = r,
        r.prototype.on = r.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks[t] = this._callbacks[t] || []).push(e),
            this
        }
        ,
        r.prototype.once = function(t, e) {
            function r() {
                n.off(t, r),
                e.apply(this, arguments)
            }
            var n = this;
            return this._callbacks = this._callbacks || {},
            r.fn = e,
            this.on(t, r),
            this
        }
        ,
        r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length)
                return this._callbacks = {},
                this;
            var r = this._callbacks[t];
            if (!r)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks[t],
                this;
            for (var n, o = 0; o < r.length; o++)
                if (n = r[o],
                n === e || n.fn === e) {
                    r.splice(o, 1);
                    break
                }
            return this
        }
        ,
        r.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1)
              , r = this._callbacks[t];
            if (r) {
                r = r.slice(0);
                for (var n = 0, o = r.length; n < o; ++n)
                    r[n].apply(this, e)
            }
            return this
        }
        ,
        r.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks[t] || []
        }
        ,
        r.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    }
    , function(t, e, r) {
        (function(t) {
            var n = r(15)
              , o = r(16);
            e.deconstructPacket = function(t) {
                function e(t) {
                    if (!t)
                        return t;
                    if (o(t)) {
                        var i = {
                            _placeholder: !0,
                            num: r.length
                        };
                        return r.push(t),
                        i
                    }
                    if (n(t)) {
                        for (var s = new Array(t.length), a = 0; a < t.length; a++)
                            s[a] = e(t[a]);
                        return s
                    }
                    if ("object" == typeof t && !(t instanceof Date)) {
                        var s = {};
                        for (var c in t)
                            s[c] = e(t[c]);
                        return s
                    }
                    return t
                }
                var r = []
                  , i = t.data
                  , s = t;
                return s.data = e(i),
                s.attachments = r.length,
                {
                    packet: s,
                    buffers: r
                }
            }
            ,
            e.reconstructPacket = function(t, e) {
                function r(t) {
                    if (t && t._placeholder) {
                        var o = e[t.num];
                        return o
                    }
                    if (n(t)) {
                        for (var i = 0; i < t.length; i++)
                            t[i] = r(t[i]);
                        return t
                    }
                    if (t && "object" == typeof t) {
                        for (var s in t)
                            t[s] = r(t[s]);
                        return t
                    }
                    return t
                }
                return t.data = r(t.data),
                t.attachments = void 0,
                t
            }
            ,
            e.removeBlobs = function(e, r) {
                function i(e, c, u) {
                    if (!e)
                        return e;
                    if (t.Blob && e instanceof Blob || t.File && e instanceof File) {
                        s++;
                        var h = new FileReader;
                        h.onload = function() {
                            u ? u[c] = this.result : a = this.result,
                            --s || r(a)
                        }
                        ,
                        h.readAsArrayBuffer(e)
                    } else if (n(e))
                        for (var p = 0; p < e.length; p++)
                            i(e[p], p, e);
                    else if (e && "object" == typeof e && !o(e))
                        for (var f in e)
                            i(e[f], f, e)
                }
                var s = 0
                  , a = e;
                i(a),
                s || r(a)
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        }
    }
    , function(t, e) {
        (function(e) {
            function r(t) {
                return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer
            }
            t.exports = r
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, r) {
        "use strict";
        function n(t, e) {
            return this instanceof n ? (t && "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t,
            t = void 0),
            e = e || {},
            e.path = e.path || "/socket.io",
            this.nsps = {},
            this.subs = [],
            this.opts = e,
            this.reconnection(e.reconnection !== !1),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(e.randomizationFactor || .5),
            this.backoff = new l({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            this.readyState = "closed",
            this.uri = t,
            this.connecting = [],
            this.lastPing = null,
            this.encoding = !1,
            this.packetBuffer = [],
            this.encoder = new c.Encoder,
            this.decoder = new c.Decoder,
            this.autoConnect = e.autoConnect !== !1,
            void (this.autoConnect && this.open())) : new n(t,e)
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = r(18)
          , s = r(44)
          , a = r(35)
          , c = r(7)
          , u = r(46)
          , h = r(47)
          , p = r(3)("socket.io-client:manager")
          , f = r(42)
          , l = r(48)
          , d = Object.prototype.hasOwnProperty;
        t.exports = n,
        n.prototype.emitAll = function() {
            this.emit.apply(this, arguments);
            for (var t in this.nsps)
                d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
        }
        ,
        n.prototype.updateSocketIds = function() {
            for (var t in this.nsps)
                d.call(this.nsps, t) && (this.nsps[t].id = this.engine.id)
        }
        ,
        a(n.prototype),
        n.prototype.reconnection = function(t) {
            return arguments.length ? (this._reconnection = !!t,
            this) : this._reconnection
        }
        ,
        n.prototype.reconnectionAttempts = function(t) {
            return arguments.length ? (this._reconnectionAttempts = t,
            this) : this._reconnectionAttempts
        }
        ,
        n.prototype.reconnectionDelay = function(t) {
            return arguments.length ? (this._reconnectionDelay = t,
            this.backoff && this.backoff.setMin(t),
            this) : this._reconnectionDelay
        }
        ,
        n.prototype.randomizationFactor = function(t) {
            return arguments.length ? (this._randomizationFactor = t,
            this.backoff && this.backoff.setJitter(t),
            this) : this._randomizationFactor
        }
        ,
        n.prototype.reconnectionDelayMax = function(t) {
            return arguments.length ? (this._reconnectionDelayMax = t,
            this.backoff && this.backoff.setMax(t),
            this) : this._reconnectionDelayMax
        }
        ,
        n.prototype.timeout = function(t) {
            return arguments.length ? (this._timeout = t,
            this) : this._timeout
        }
        ,
        n.prototype.maybeReconnectOnOpen = function() {
            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }
        ,
        n.prototype.open = n.prototype.connect = function(t, e) {
            if (p("readyState %s", this.readyState),
            ~this.readyState.indexOf("open"))
                return this;
            p("opening %s", this.uri),
            this.engine = i(this.uri, this.opts);
            var r = this.engine
              , n = this;
            this.readyState = "opening",
            this.skipReconnect = !1;
            var o = u(r, "open", function() {
                n.onopen(),
                t && t()
            })
              , s = u(r, "error", function(e) {
                if (p("connect_error"),
                n.cleanup(),
                n.readyState = "closed",
                n.emitAll("connect_error", e),
                t) {
                    var r = new Error("Connection error");
                    r.data = e,
                    t(r)
                } else
                    n.maybeReconnectOnOpen()
            });
            if (!1 !== this._timeout) {
                var a = this._timeout;
                p("connect attempt will timeout after %d", a);
                var c = setTimeout(function() {
                    p("connect attempt timed out after %d", a),
                    o.destroy(),
                    r.close(),
                    r.emit("error", "timeout"),
                    n.emitAll("connect_timeout", a)
                }, a);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(c)
                    }
                })
            }
            return this.subs.push(o),
            this.subs.push(s),
            this
        }
        ,
        n.prototype.onopen = function() {
            p("open"),
            this.cleanup(),
            this.readyState = "open",
            this.emit("open");
            var t = this.engine;
            this.subs.push(u(t, "data", h(this, "ondata"))),
            this.subs.push(u(t, "ping", h(this, "onping"))),
            this.subs.push(u(t, "pong", h(this, "onpong"))),
            this.subs.push(u(t, "error", h(this, "onerror"))),
            this.subs.push(u(t, "close", h(this, "onclose"))),
            this.subs.push(u(this.decoder, "decoded", h(this, "ondecoded")))
        }
        ,
        n.prototype.onping = function() {
            this.lastPing = new Date,
            this.emitAll("ping")
        }
        ,
        n.prototype.onpong = function() {
            this.emitAll("pong", new Date - this.lastPing)
        }
        ,
        n.prototype.ondata = function(t) {
            this.decoder.add(t)
        }
        ,
        n.prototype.ondecoded = function(t) {
            this.emit("packet", t)
        }
        ,
        n.prototype.onerror = function(t) {
            p("error", t),
            this.emitAll("error", t)
        }
        ,
        n.prototype.socket = function(t, e) {
            function r() {
                ~f(o.connecting, n) || o.connecting.push(n)
            }
            var n = this.nsps[t];
            if (!n) {
                n = new s(this,t,e),
                this.nsps[t] = n;
                var o = this;
                n.on("connecting", r),
                n.on("connect", function() {
                    n.id = o.engine.id
                }),
                this.autoConnect && r()
            }
            return n
        }
        ,
        n.prototype.destroy = function(t) {
            var e = f(this.connecting, t);
            ~e && this.connecting.splice(e, 1),
            this.connecting.length || this.close()
        }
        ,
        n.prototype.packet = function(t) {
            p("writing packet %j", t);
            var e = this;
            t.query && 0 === t.type && (t.nsp += "?" + t.query),
            e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0,
            this.encoder.encode(t, function(r) {
                for (var n = 0; n < r.length; n++)
                    e.engine.write(r[n], t.options);
                e.encoding = !1,
                e.processPacketQueue()
            }))
        }
        ,
        n.prototype.processPacketQueue = function() {
            if (this.packetBuffer.length > 0 && !this.encoding) {
                var t = this.packetBuffer.shift();
                this.packet(t)
            }
        }
        ,
        n.prototype.cleanup = function() {
            p("cleanup");
            for (var t = this.subs.length, e = 0; e < t; e++) {
                var r = this.subs.shift();
                r.destroy()
            }
            this.packetBuffer = [],
            this.encoding = !1,
            this.lastPing = null,
            this.decoder.destroy()
        }
        ,
        n.prototype.close = n.prototype.disconnect = function() {
            p("disconnect"),
            this.skipReconnect = !0,
            this.reconnecting = !1,
            "opening" === this.readyState && this.cleanup(),
            this.backoff.reset(),
            this.readyState = "closed",
            this.engine && this.engine.close()
        }
        ,
        n.prototype.onclose = function(t) {
            p("onclose"),
            this.cleanup(),
            this.backoff.reset(),
            this.readyState = "closed",
            this.emit("close", t),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }
        ,
        n.prototype.reconnect = function() {
            if (this.reconnecting || this.skipReconnect)
                return this;
            var t = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
                p("reconnect failed"),
                this.backoff.reset(),
                this.emitAll("reconnect_failed"),
                this.reconnecting = !1;
            else {
                var e = this.backoff.duration();
                p("will wait %dms before reconnect attempt", e),
                this.reconnecting = !0;
                var r = setTimeout(function() {
                    t.skipReconnect || (p("attempting reconnect"),
                    t.emitAll("reconnect_attempt", t.backoff.attempts),
                    t.emitAll("reconnecting", t.backoff.attempts),
                    t.skipReconnect || t.open(function(e) {
                        e ? (p("reconnect attempt error"),
                        t.reconnecting = !1,
                        t.reconnect(),
                        t.emitAll("reconnect_error", e.data)) : (p("reconnect success"),
                        t.onreconnect())
                    }))
                }, e);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(r)
                    }
                })
            }
        }
        ,
        n.prototype.onreconnect = function() {
            var t = this.backoff.attempts;
            this.reconnecting = !1,
            this.backoff.reset(),
            this.updateSocketIds(),
            this.emitAll("reconnect", t)
        }
    }
    , function(t, e, r) {
        t.exports = r(19)
    }
    , function(t, e, r) {
        t.exports = r(20),
        t.exports.parser = r(27)
    }
    , function(t, e, r) {
        (function(e) {
            function n(t, r) {
                if (!(this instanceof n))
                    return new n(t,r);
                r = r || {},
                t && "object" == typeof t && (r = t,
                t = null),
                t ? (t = h(t),
                r.hostname = t.host,
                r.secure = "https" === t.protocol || "wss" === t.protocol,
                r.port = t.port,
                t.query && (r.query = t.query)) : r.host && (r.hostname = h(r.host).host),
                this.secure = null != r.secure ? r.secure : e.location && "https:" === location.protocol,
                r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
                this.agent = r.agent || !1,
                this.hostname = r.hostname || (e.location ? location.hostname : "localhost"),
                this.port = r.port || (e.location && location.port ? location.port : this.secure ? 443 : 80),
                this.query = r.query || {},
                "string" == typeof this.query && (this.query = f.decode(this.query)),
                this.upgrade = !1 !== r.upgrade,
                this.path = (r.path || "/engine.io").replace(/\/$/, "") + "/",
                this.forceJSONP = !!r.forceJSONP,
                this.jsonp = !1 !== r.jsonp,
                this.forceBase64 = !!r.forceBase64,
                this.enablesXDR = !!r.enablesXDR,
                this.timestampParam = r.timestampParam || "t",
                this.timestampRequests = r.timestampRequests,
                this.transports = r.transports || ["polling", "websocket"],
                this.readyState = "",
                this.writeBuffer = [],
                this.prevBufferLen = 0,
                this.policyPort = r.policyPort || 843,
                this.rememberUpgrade = r.rememberUpgrade || !1,
                this.binaryType = null,
                this.onlyBinaryUpgrades = r.onlyBinaryUpgrades,
                this.perMessageDeflate = !1 !== r.perMessageDeflate && (r.perMessageDeflate || {}),
                !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                this.pfx = r.pfx || null,
                this.key = r.key || null,
                this.passphrase = r.passphrase || null,
                this.cert = r.cert || null,
                this.ca = r.ca || null,
                this.ciphers = r.ciphers || null,
                this.rejectUnauthorized = void 0 === r.rejectUnauthorized ? null : r.rejectUnauthorized,
                this.forceNode = !!r.forceNode;
                var o = "object" == typeof e && e;
                o.global === o && (r.extraHeaders && Object.keys(r.extraHeaders).length > 0 && (this.extraHeaders = r.extraHeaders),
                r.localAddress && (this.localAddress = r.localAddress)),
                this.id = null,
                this.upgrades = null,
                this.pingInterval = null,
                this.pingTimeout = null,
                this.pingIntervalTimer = null,
                this.pingTimeoutTimer = null,
                this.open()
            }
            function o(t) {
                var e = {};
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r]);
                return e
            }
            var i = r(21)
              , s = r(35)
              , a = r(3)("engine.io-client:socket")
              , c = r(42)
              , u = r(27)
              , h = r(2)
              , p = r(43)
              , f = r(36);
            t.exports = n,
            n.priorWebsocketSuccess = !1,
            s(n.prototype),
            n.protocol = u.protocol,
            n.Socket = n,
            n.Transport = r(26),
            n.transports = r(21),
            n.parser = r(27),
            n.prototype.createTransport = function(t) {
                a('creating transport "%s"', t);
                var e = o(this.query);
                e.EIO = u.protocol,
                e.transport = t,
                this.id && (e.sid = this.id);
                var r = new i[t]({
                    agent: this.agent,
                    hostname: this.hostname,
                    port: this.port,
                    secure: this.secure,
                    path: this.path,
                    query: e,
                    forceJSONP: this.forceJSONP,
                    jsonp: this.jsonp,
                    forceBase64: this.forceBase64,
                    enablesXDR: this.enablesXDR,
                    timestampRequests: this.timestampRequests,
                    timestampParam: this.timestampParam,
                    policyPort: this.policyPort,
                    socket: this,
                    pfx: this.pfx,
                    key: this.key,
                    passphrase: this.passphrase,
                    cert: this.cert,
                    ca: this.ca,
                    ciphers: this.ciphers,
                    rejectUnauthorized: this.rejectUnauthorized,
                    perMessageDeflate: this.perMessageDeflate,
                    extraHeaders: this.extraHeaders,
                    forceNode: this.forceNode,
                    localAddress: this.localAddress
                });
                return r
            }
            ,
            n.prototype.open = function() {
                var t;
                if (this.rememberUpgrade && n.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
                    t = "websocket";
                else {
                    if (0 === this.transports.length) {
                        var e = this;
                        return void setTimeout(function() {
                            e.emit("error", "No transports available")
                        }, 0)
                    }
                    t = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    t = this.createTransport(t)
                } catch (t) {
                    return this.transports.shift(),
                    void this.open()
                }
                t.open(),
                this.setTransport(t)
            }
            ,
            n.prototype.setTransport = function(t) {
                a("setting transport %s", t.name);
                var e = this;
                this.transport && (a("clearing existing transport %s", this.transport.name),
                this.transport.removeAllListeners()),
                this.transport = t,
                t.on("drain", function() {
                    e.onDrain()
                }).on("packet", function(t) {
                    e.onPacket(t)
                }).on("error", function(t) {
                    e.onError(t)
                }).on("close", function() {
                    e.onClose("transport close")
                })
            }
            ,
            n.prototype.probe = function(t) {
                function e() {
                    if (f.onlyBinaryUpgrades) {
                        var e = !this.supportsBinary && f.transport.supportsBinary;
                        p = p || e
                    }
                    p || (a('probe transport "%s" opened', t),
                    h.send([{
                        type: "ping",
                        data: "probe"
                    }]),
                    h.once("packet", function(e) {
                        if (!p)
                            if ("pong" === e.type && "probe" === e.data) {
                                if (a('probe transport "%s" pong', t),
                                f.upgrading = !0,
                                f.emit("upgrading", h),
                                !h)
                                    return;
                                n.priorWebsocketSuccess = "websocket" === h.name,
                                a('pausing current transport "%s"', f.transport.name),
                                f.transport.pause(function() {
                                    p || "closed" !== f.readyState && (a("changing transport and sending upgrade packet"),
                                    u(),
                                    f.setTransport(h),
                                    h.send([{
                                        type: "upgrade"
                                    }]),
                                    f.emit("upgrade", h),
                                    h = null,
                                    f.upgrading = !1,
                                    f.flush())
                                })
                            } else {
                                a('probe transport "%s" failed', t);
                                var r = new Error("probe error");
                                r.transport = h.name,
                                f.emit("upgradeError", r)
                            }
                    }))
                }
                function r() {
                    p || (p = !0,
                    u(),
                    h.close(),
                    h = null)
                }
                function o(e) {
                    var n = new Error("probe error: " + e);
                    n.transport = h.name,
                    r(),
                    a('probe transport "%s" failed because of error: %s', t, e),
                    f.emit("upgradeError", n)
                }
                function i() {
                    o("transport closed")
                }
                function s() {
                    o("socket closed")
                }
                function c(t) {
                    h && t.name !== h.name && (a('"%s" works - aborting "%s"', t.name, h.name),
                    r())
                }
                function u() {
                    h.removeListener("open", e),
                    h.removeListener("error", o),
                    h.removeListener("close", i),
                    f.removeListener("close", s),
                    f.removeListener("upgrading", c)
                }
                a('probing transport "%s"', t);
                var h = this.createTransport(t, {
                    probe: 1
                })
                  , p = !1
                  , f = this;
                n.priorWebsocketSuccess = !1,
                h.once("open", e),
                h.once("error", o),
                h.once("close", i),
                this.once("close", s),
                this.once("upgrading", c),
                h.open()
            }
            ,
            n.prototype.onOpen = function() {
                if (a("socket open"),
                this.readyState = "open",
                n.priorWebsocketSuccess = "websocket" === this.transport.name,
                this.emit("open"),
                this.flush(),
                "open" === this.readyState && this.upgrade && this.transport.pause) {
                    a("starting upgrade probes");
                    for (var t = 0, e = this.upgrades.length; t < e; t++)
                        this.probe(this.upgrades[t])
                }
            }
            ,
            n.prototype.onPacket = function(t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                    switch (a('socket receive: type "%s", data "%s"', t.type, t.data),
                    this.emit("packet", t),
                    this.emit("heartbeat"),
                    t.type) {
                    case "open":
                        this.onHandshake(p(t.data));
                        break;
                    case "pong":
                        this.setPing(),
                        this.emit("pong");
                        break;
                    case "error":
                        var e = new Error("server error");
                        e.code = t.data,
                        this.onError(e);
                        break;
                    case "message":
                        this.emit("data", t.data),
                        this.emit("message", t.data)
                    }
                else
                    a('packet received with socket readyState "%s"', this.readyState)
            }
            ,
            n.prototype.onHandshake = function(t) {
                this.emit("handshake", t),
                this.id = t.sid,
                this.transport.query.sid = t.sid,
                this.upgrades = this.filterUpgrades(t.upgrades),
                this.pingInterval = t.pingInterval,
                this.pingTimeout = t.pingTimeout,
                this.onOpen(),
                "closed" !== this.readyState && (this.setPing(),
                this.removeListener("heartbeat", this.onHeartbeat),
                this.on("heartbeat", this.onHeartbeat))
            }
            ,
            n.prototype.onHeartbeat = function(t) {
                clearTimeout(this.pingTimeoutTimer);
                var e = this;
                e.pingTimeoutTimer = setTimeout(function() {
                    "closed" !== e.readyState && e.onClose("ping timeout")
                }, t || e.pingInterval + e.pingTimeout)
            }
            ,
            n.prototype.setPing = function() {
                var t = this;
                clearTimeout(t.pingIntervalTimer),
                t.pingIntervalTimer = setTimeout(function() {
                    a("writing ping packet - expecting pong within %sms", t.pingTimeout),
                    t.ping(),
                    t.onHeartbeat(t.pingTimeout)
                }, t.pingInterval)
            }
            ,
            n.prototype.ping = function() {
                var t = this;
                this.sendPacket("ping", function() {
                    t.emit("ping")
                })
            }
            ,
            n.prototype.onDrain = function() {
                this.writeBuffer.splice(0, this.prevBufferLen),
                this.prevBufferLen = 0,
                0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }
            ,
            n.prototype.flush = function() {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length),
                this.transport.send(this.writeBuffer),
                this.prevBufferLen = this.writeBuffer.length,
                this.emit("flush"))
            }
            ,
            n.prototype.write = n.prototype.send = function(t, e, r) {
                return this.sendPacket("message", t, e, r),
                this
            }
            ,
            n.prototype.sendPacket = function(t, e, r, n) {
                if ("function" == typeof e && (n = e,
                e = void 0),
                "function" == typeof r && (n = r,
                r = null),
                "closing" !== this.readyState && "closed" !== this.readyState) {
                    r = r || {},
                    r.compress = !1 !== r.compress;
                    var o = {
                        type: t,
                        data: e,
                        options: r
                    };
                    this.emit("packetCreate", o),
                    this.writeBuffer.push(o),
                    n && this.once("flush", n),
                    this.flush()
                }
            }
            ,
            n.prototype.close = function() {
                function t() {
                    n.onClose("forced close"),
                    a("socket closing - telling transport to close"),
                    n.transport.close()
                }
                function e() {
                    n.removeListener("upgrade", e),
                    n.removeListener("upgradeError", e),
                    t()
                }
                function r() {
                    n.once("upgrade", e),
                    n.once("upgradeError", e)
                }
                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var n = this;
                    this.writeBuffer.length ? this.once("drain", function() {
                        this.upgrading ? r() : t()
                    }) : this.upgrading ? r() : t()
                }
                return this
            }
            ,
            n.prototype.onError = function(t) {
                a("socket error %j", t),
                n.priorWebsocketSuccess = !1,
                this.emit("error", t),
                this.onClose("transport error", t)
            }
            ,
            n.prototype.onClose = function(t, e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    a('socket close with reason: "%s"', t);
                    var r = this;
                    clearTimeout(this.pingIntervalTimer),
                    clearTimeout(this.pingTimeoutTimer),
                    this.transport.removeAllListeners("close"),
                    this.transport.close(),
                    this.transport.removeAllListeners(),
                    this.readyState = "closed",
                    this.id = null,
                    this.emit("close", t, e),
                    r.writeBuffer = [],
                    r.prevBufferLen = 0
                }
            }
            ,
            n.prototype.filterUpgrades = function(t) {
                for (var e = [], r = 0, n = t.length; r < n; r++)
                    ~c(this.transports, t[r]) && e.push(t[r]);
                return e
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, r) {
        (function(t) {
            function n(e) {
                var r, n = !1, a = !1, c = !1 !== e.jsonp;
                if (t.location) {
                    var u = "https:" === location.protocol
                      , h = location.port;
                    h || (h = u ? 443 : 80),
                    n = e.hostname !== location.hostname || h !== e.port,
                    a = e.secure !== u
                }
                if (e.xdomain = n,
                e.xscheme = a,
                r = new o(e),
                "open"in r && !e.forceJSONP)
                    return new i(e);
                if (!c)
                    throw new Error("JSONP disabled");
                return new s(e)
            }
            var o = r(22)
              , i = r(24)
              , s = r(39)
              , a = r(40);
            e.polling = n,
            e.websocket = a
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, r) {
        (function(e) {
            var n = r(23);
            t.exports = function(t) {
                var r = t.xdomain
                  , o = t.xscheme
                  , i = t.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!r || n))
                        return new XMLHttpRequest
                } catch (t) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !o && i)
                        return new XDomainRequest
                } catch (t) {}
                if (!r)
                    try {
                        return new (e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (t) {}
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        try {
            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
        } catch (e) {
            t.exports = !1
        }
    }
    , function(t, e, r) {
        (function(e) {
            function n() {}
            function o(t) {
                if (c.call(this, t),
                this.requestTimeout = t.requestTimeout,
                e.location) {
                    var r = "https:" === location.protocol
                      , n = location.port;
                    n || (n = r ? 443 : 80),
                    this.xd = t.hostname !== e.location.hostname || n !== t.port,
                    this.xs = t.secure !== r
                } else
                    this.extraHeaders = t.extraHeaders
            }
            function i(t) {
                this.method = t.method || "GET",
                this.uri = t.uri,
                this.xd = !!t.xd,
                this.xs = !!t.xs,
                this.async = !1 !== t.async,
                this.data = void 0 !== t.data ? t.data : null,
                this.agent = t.agent,
                this.isBinary = t.isBinary,
                this.supportsBinary = t.supportsBinary,
                this.enablesXDR = t.enablesXDR,
                this.requestTimeout = t.requestTimeout,
                this.pfx = t.pfx,
                this.key = t.key,
                this.passphrase = t.passphrase,
                this.cert = t.cert,
                this.ca = t.ca,
                this.ciphers = t.ciphers,
                this.rejectUnauthorized = t.rejectUnauthorized,
                this.extraHeaders = t.extraHeaders,
                this.create()
            }
            function s() {
                for (var t in i.requests)
                    i.requests.hasOwnProperty(t) && i.requests[t].abort()
            }
            var a = r(22)
              , c = r(25)
              , u = r(35)
              , h = r(37)
              , p = r(3)("engine.io-client:polling-xhr");
            t.exports = o,
            t.exports.Request = i,
            h(o, c),
            o.prototype.supportsBinary = !0,
            o.prototype.request = function(t) {
                return t = t || {},
                t.uri = this.uri(),
                t.xd = this.xd,
                t.xs = this.xs,
                t.agent = this.agent || !1,
                t.supportsBinary = this.supportsBinary,
                t.enablesXDR = this.enablesXDR,
                t.pfx = this.pfx,
                t.key = this.key,
                t.passphrase = this.passphrase,
                t.cert = this.cert,
                t.ca = this.ca,
                t.ciphers = this.ciphers,
                t.rejectUnauthorized = this.rejectUnauthorized,
                t.requestTimeout = this.requestTimeout,
                t.extraHeaders = this.extraHeaders,
                new i(t)
            }
            ,
            o.prototype.doWrite = function(t, e) {
                var r = "string" != typeof t && void 0 !== t
                  , n = this.request({
                    method: "POST",
                    data: t,
                    isBinary: r
                })
                  , o = this;
                n.on("success", e),
                n.on("error", function(t) {
                    o.onError("xhr post error", t)
                }),
                this.sendXhr = n
            }
            ,
            o.prototype.doPoll = function() {
                p("xhr poll");
                var t = this.request()
                  , e = this;
                t.on("data", function(t) {
                    e.onData(t)
                }),
                t.on("error", function(t) {
                    e.onError("xhr poll error", t)
                }),
                this.pollXhr = t
            }
            ,
            u(i.prototype),
            i.prototype.create = function() {
                var t = {
                    agent: this.agent,
                    xdomain: this.xd,
                    xscheme: this.xs,
                    enablesXDR: this.enablesXDR
                };
                t.pfx = this.pfx,
                t.key = this.key,
                t.passphrase = this.passphrase,
                t.cert = this.cert,
                t.ca = this.ca,
                t.ciphers = this.ciphers,
                t.rejectUnauthorized = this.rejectUnauthorized;
                var r = this.xhr = new a(t)
                  , n = this;
                try {
                    p("xhr open %s: %s", this.method, this.uri),
                    r.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders) {
                            r.setDisableHeaderCheck(!0);
                            for (var o in this.extraHeaders)
                                this.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this.extraHeaders[o])
                        }
                    } catch (t) {}
                    if (this.supportsBinary && (r.responseType = "arraybuffer"),
                    "POST" === this.method)
                        try {
                            this.isBinary ? r.setRequestHeader("Content-type", "application/octet-stream") : r.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (t) {}
                    try {
                        r.setRequestHeader("Accept", "*/*")
                    } catch (t) {}
                    "withCredentials"in r && (r.withCredentials = !0),
                    this.requestTimeout && (r.timeout = this.requestTimeout),
                    this.hasXDR() ? (r.onload = function() {
                        n.onLoad()
                    }
                    ,
                    r.onerror = function() {
                        n.onError(r.responseText)
                    }
                    ) : r.onreadystatechange = function() {
                        4 === r.readyState && (200 === r.status || 1223 === r.status ? n.onLoad() : setTimeout(function() {
                            n.onError(r.status)
                        }, 0))
                    }
                    ,
                    p("xhr data %s", this.data),
                    r.send(this.data)
                } catch (t) {
                    return void setTimeout(function() {
                        n.onError(t)
                    }, 0)
                }
                e.document && (this.index = i.requestsCount++,
                i.requests[this.index] = this)
            }
            ,
            i.prototype.onSuccess = function() {
                this.emit("success"),
                this.cleanup()
            }
            ,
            i.prototype.onData = function(t) {
                this.emit("data", t),
                this.onSuccess()
            }
            ,
            i.prototype.onError = function(t) {
                this.emit("error", t),
                this.cleanup(!0)
            }
            ,
            i.prototype.cleanup = function(t) {
                if ("undefined" != typeof this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = n : this.xhr.onreadystatechange = n,
                    t)
                        try {
                            this.xhr.abort()
                        } catch (t) {}
                    e.document && delete i.requests[this.index],
                    this.xhr = null
                }
            }
            ,
            i.prototype.onLoad = function() {
                var t;
                try {
                    var e;
                    try {
                        e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                    } catch (t) {}
                    if ("application/octet-stream" === e)
                        t = this.xhr.response || this.xhr.responseText;
                    else if (this.supportsBinary)
                        try {
                            t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                        } catch (e) {
                            for (var r = new Uint8Array(this.xhr.response), n = [], o = 0, i = r.length; o < i; o++)
                                n.push(r[o]);
                            t = String.fromCharCode.apply(null, n)
                        }
                    else
                        t = this.xhr.responseText
                } catch (t) {
                    this.onError(t)
                }
                null != t && this.onData(t)
            }
            ,
            i.prototype.hasXDR = function() {
                return "undefined" != typeof e.XDomainRequest && !this.xs && this.enablesXDR
            }
            ,
            i.prototype.abort = function() {
                this.cleanup()
            }
            ,
            i.requestsCount = 0,
            i.requests = {},
            e.document && (e.attachEvent ? e.attachEvent("onunload", s) : e.addEventListener && e.addEventListener("beforeunload", s, !1))
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, r) {
        function n(t) {
            var e = t && t.forceBase64;
            h && !e || (this.supportsBinary = !1),
            o.call(this, t)
        }
        var o = r(26)
          , i = r(36)
          , s = r(27)
          , a = r(37)
          , c = r(38)
          , u = r(3)("engine.io-client:polling");
        t.exports = n;
        var h = function() {
            var t = r(22)
              , e = new t({
                xdomain: !1
            });
            return null != e.responseType
        }();
        a(n, o),
        n.prototype.name = "polling",
        n.prototype.doOpen = function() {
            this.poll()
        }
        ,
        n.prototype.pause = function(t) {
            function e() {
                u("paused"),
                r.readyState = "paused",
                t()
            }
            var r = this;
            if (this.readyState = "pausing",
            this.polling || !this.writable) {
                var n = 0;
                this.polling && (u("we are currently polling - waiting to pause"),
                n++,
                this.once("pollComplete", function() {
                    u("pre-pause polling complete"),
                    --n || e()
                })),
                this.writable || (u("we are currently writing - waiting to pause"),
                n++,
                this.once("drain", function() {
                    u("pre-pause writing complete"),
                    --n || e()
                }))
            } else
                e()
        }
        ,
        n.prototype.poll = function() {
            u("polling"),
            this.polling = !0,
            this.doPoll(),
            this.emit("poll")
        }
        ,
        n.prototype.onData = function(t) {
            var e = this;
            u("polling got data %s", t);
            var r = function(t, r, n) {
                return "opening" === e.readyState && e.onOpen(),
                "close" === t.type ? (e.onClose(),
                !1) : void e.onPacket(t)
            };
            s.decodePayload(t, this.socket.binaryType, r),
            "closed" !== this.readyState && (this.polling = !1,
            this.emit("pollComplete"),
            "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
        }
        ,
        n.prototype.doClose = function() {
            function t() {
                u("writing close packet"),
                e.write([{
                    type: "close"
                }])
            }
            var e = this;
            "open" === this.readyState ? (u("transport open - closing"),
            t()) : (u("transport not open - deferring close"),
            this.once("open", t))
        }
        ,
        n.prototype.write = function(t) {
            var e = this;
            this.writable = !1;
            var r = function() {
                e.writable = !0,
                e.emit("drain")
            };
            s.encodePayload(t, this.supportsBinary, function(t) {
                e.doWrite(t, r)
            })
        }
        ,
        n.prototype.uri = function() {
            var t = this.query || {}
              , e = this.secure ? "https" : "http"
              , r = "";
            !1 !== this.timestampRequests && (t[this.timestampParam] = c()),
            this.supportsBinary || t.sid || (t.b64 = 1),
            t = i.encode(t),
            this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (r = ":" + this.port),
            t.length && (t = "?" + t);
            var n = this.hostname.indexOf(":") !== -1;
            return e + "://" + (n ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t
        }
    }
    , function(t, e, r) {
        function n(t) {
            this.path = t.path,
            this.hostname = t.hostname,
            this.port = t.port,
            this.secure = t.secure,
            this.query = t.query,
            this.timestampParam = t.timestampParam,
            this.timestampRequests = t.timestampRequests,
            this.readyState = "",
            this.agent = t.agent || !1,
            this.socket = t.socket,
            this.enablesXDR = t.enablesXDR,
            this.pfx = t.pfx,
            this.key = t.key,
            this.passphrase = t.passphrase,
            this.cert = t.cert,
            this.ca = t.ca,
            this.ciphers = t.ciphers,
            this.rejectUnauthorized = t.rejectUnauthorized,
            this.forceNode = t.forceNode,
            this.extraHeaders = t.extraHeaders,
            this.localAddress = t.localAddress
        }
        var o = r(27)
          , i = r(35);
        t.exports = n,
        i(n.prototype),
        n.prototype.onError = function(t, e) {
            var r = new Error(t);
            return r.type = "TransportError",
            r.description = e,
            this.emit("error", r),
            this
        }
        ,
        n.prototype.open = function() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening",
            this.doOpen()),
            this
        }
        ,
        n.prototype.close = function() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
            this.onClose()),
            this
        }
        ,
        n.prototype.send = function(t) {
            if ("open" !== this.readyState)
                throw new Error("Transport not open");
            this.write(t)
        }
        ,
        n.prototype.onOpen = function() {
            this.readyState = "open",
            this.writable = !0,
            this.emit("open")
        }
        ,
        n.prototype.onData = function(t) {
            var e = o.decodePacket(t, this.socket.binaryType);
            this.onPacket(e)
        }
        ,
        n.prototype.onPacket = function(t) {
            this.emit("packet", t)
        }
        ,
        n.prototype.onClose = function() {
            this.readyState = "closed",
            this.emit("close")
        }
    }
    , function(t, e, r) {
        (function(t) {
            function n(t, r) {
                var n = "b" + e.packets[t.type] + t.data.data;
                return r(n)
            }
            function o(t, r, n) {
                if (!r)
                    return e.encodeBase64Packet(t, n);
                var o = t.data
                  , i = new Uint8Array(o)
                  , s = new Uint8Array(1 + o.byteLength);
                s[0] = v[t.type];
                for (var a = 0; a < i.length; a++)
                    s[a + 1] = i[a];
                return n(s.buffer)
            }
            function i(t, r, n) {
                if (!r)
                    return e.encodeBase64Packet(t, n);
                var o = new FileReader;
                return o.onload = function() {
                    t.data = o.result,
                    e.encodePacket(t, r, !0, n)
                }
                ,
                o.readAsArrayBuffer(t.data)
            }
            function s(t, r, n) {
                if (!r)
                    return e.encodeBase64Packet(t, n);
                if (m)
                    return i(t, r, n);
                var o = new Uint8Array(1);
                o[0] = v[t.type];
                var s = new k([o.buffer, t.data]);
                return n(s)
            }
            function a(t) {
                try {
                    t = d.decode(t)
                } catch (t) {
                    return !1
                }
                return t
            }
            function c(t, e, r) {
                for (var n = new Array(t.length), o = l(t.length, r), i = function(t, r, o) {
                    e(r, function(e, r) {
                        n[t] = r,
                        o(e, n)
                    })
                }, s = 0; s < t.length; s++)
                    i(s, t[s], o)
            }
            var u, h = r(28), p = r(29), f = r(30), l = r(31), d = r(32);
            t && t.ArrayBuffer && (u = r(33));
            var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent)
              , g = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent)
              , m = y || g;
            e.protocol = 3;
            var v = e.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            }
              , b = h(v)
              , w = {
                type: "error",
                data: "parser error"
            }
              , k = r(34);
            e.encodePacket = function(e, r, i, a) {
                "function" == typeof r && (a = r,
                r = !1),
                "function" == typeof i && (a = i,
                i = null);
                var c = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                if (t.ArrayBuffer && c instanceof ArrayBuffer)
                    return o(e, r, a);
                if (k && c instanceof t.Blob)
                    return s(e, r, a);
                if (c && c.base64)
                    return n(e, a);
                var u = v[e.type];
                return void 0 !== e.data && (u += i ? d.encode(String(e.data)) : String(e.data)),
                a("" + u)
            }
            ,
            e.encodeBase64Packet = function(r, n) {
                var o = "b" + e.packets[r.type];
                if (k && r.data instanceof t.Blob) {
                    var i = new FileReader;
                    return i.onload = function() {
                        var t = i.result.split(",")[1];
                        n(o + t)
                    }
                    ,
                    i.readAsDataURL(r.data)
                }
                var s;
                try {
                    s = String.fromCharCode.apply(null, new Uint8Array(r.data))
                } catch (t) {
                    for (var a = new Uint8Array(r.data), c = new Array(a.length), u = 0; u < a.length; u++)
                        c[u] = a[u];
                    s = String.fromCharCode.apply(null, c)
                }
                return o += t.btoa(s),
                n(o)
            }
            ,
            e.decodePacket = function(t, r, n) {
                if (void 0 === t)
                    return w;
                if ("string" == typeof t) {
                    if ("b" == t.charAt(0))
                        return e.decodeBase64Packet(t.substr(1), r);
                    if (n && (t = a(t),
                    t === !1))
                        return w;
                    var o = t.charAt(0);
                    return Number(o) == o && b[o] ? t.length > 1 ? {
                        type: b[o],
                        data: t.substring(1)
                    } : {
                        type: b[o]
                    } : w
                }
                var i = new Uint8Array(t)
                  , o = i[0]
                  , s = f(t, 1);
                return k && "blob" === r && (s = new k([s])),
                {
                    type: b[o],
                    data: s
                }
            }
            ,
            e.decodeBase64Packet = function(t, e) {
                var r = b[t.charAt(0)];
                if (!u)
                    return {
                        type: r,
                        data: {
                            base64: !0,
                            data: t.substr(1)
                        }
                    };
                var n = u.decode(t.substr(1));
                return "blob" === e && k && (n = new k([n])),
                {
                    type: r,
                    data: n
                }
            }
            ,
            e.encodePayload = function(t, r, n) {
                function o(t) {
                    return t.length + ":" + t
                }
                function i(t, n) {
                    e.encodePacket(t, !!s && r, !0, function(t) {
                        n(null, o(t))
                    })
                }
                "function" == typeof r && (n = r,
                r = null);
                var s = p(t);
                return r && s ? k && !m ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n) : t.length ? void c(t, i, function(t, e) {
                    return n(e.join(""))
                }) : n("0:")
            }
            ,
            e.decodePayload = function(t, r, n) {
                if ("string" != typeof t)
                    return e.decodePayloadAsBinary(t, r, n);
                "function" == typeof r && (n = r,
                r = null);
                var o;
                if ("" == t)
                    return n(w, 0, 1);
                for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
                    var h = t.charAt(c);
                    if (":" != h)
                        a += h;
                    else {
                        if ("" == a || a != (i = Number(a)))
                            return n(w, 0, 1);
                        if (s = t.substr(c + 1, i),
                        a != s.length)
                            return n(w, 0, 1);
                        if (s.length) {
                            if (o = e.decodePacket(s, r, !0),
                            w.type == o.type && w.data == o.data)
                                return n(w, 0, 1);
                            var p = n(o, c + i, u);
                            if (!1 === p)
                                return
                        }
                        c += i,
                        a = ""
                    }
                }
                return "" != a ? n(w, 0, 1) : void 0
            }
            ,
            e.encodePayloadAsArrayBuffer = function(t, r) {
                function n(t, r) {
                    e.encodePacket(t, !0, !0, function(t) {
                        return r(null, t)
                    })
                }
                return t.length ? void c(t, n, function(t, e) {
                    var n = e.reduce(function(t, e) {
                        var r;
                        return r = "string" == typeof e ? e.length : e.byteLength,
                        t + r.toString().length + r + 2
                    }, 0)
                      , o = new Uint8Array(n)
                      , i = 0;
                    return e.forEach(function(t) {
                        var e = "string" == typeof t
                          , r = t;
                        if (e) {
                            for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++)
                                n[s] = t.charCodeAt(s);
                            r = n.buffer
                        }
                        e ? o[i++] = 0 : o[i++] = 1;
                        for (var a = r.byteLength.toString(), s = 0; s < a.length; s++)
                            o[i++] = parseInt(a[s]);
                        o[i++] = 255;
                        for (var n = new Uint8Array(r), s = 0; s < n.length; s++)
                            o[i++] = n[s]
                    }),
                    r(o.buffer)
                }) : r(new ArrayBuffer(0))
            }
            ,
            e.encodePayloadAsBlob = function(t, r) {
                function n(t, r) {
                    e.encodePacket(t, !0, !0, function(t) {
                        var e = new Uint8Array(1);
                        if (e[0] = 1,
                        "string" == typeof t) {
                            for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++)
                                n[o] = t.charCodeAt(o);
                            t = n.buffer,
                            e[0] = 0
                        }
                        for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++)
                            a[o] = parseInt(s[o]);
                        if (a[s.length] = 255,
                        k) {
                            var c = new k([e.buffer, a.buffer, t]);
                            r(null, c)
                        }
                    })
                }
                c(t, n, function(t, e) {
                    return r(new k(e))
                })
            }
            ,
            e.decodePayloadAsBinary = function(t, r, n) {
                "function" == typeof r && (n = r,
                r = null);
                for (var o = t, i = [], s = !1; o.byteLength > 0; ) {
                    for (var a = new Uint8Array(o), c = 0 === a[0], u = "", h = 1; 255 != a[h]; h++) {
                        if (u.length > 310) {
                            s = !0;
                            break
                        }
                        u += a[h]
                    }
                    if (s)
                        return n(w, 0, 1);
                    o = f(o, 2 + u.length),
                    u = parseInt(u);
                    var p = f(o, 0, u);
                    if (c)
                        try {
                            p = String.fromCharCode.apply(null, new Uint8Array(p))
                        } catch (t) {
                            var l = new Uint8Array(p);
                            p = "";
                            for (var h = 0; h < l.length; h++)
                                p += String.fromCharCode(l[h])
                        }
                    i.push(p),
                    o = f(o, u)
                }
                var d = i.length;
                i.forEach(function(t, o) {
                    n(e.decodePacket(t, r, !0), o, d)
                })
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        t.exports = Object.keys || function(t) {
            var e = []
              , r = Object.prototype.hasOwnProperty;
            for (var n in t)
                r.call(t, n) && e.push(n);
            return e
        }
    }
    , function(t, e, r) {
        (function(e) {
            function n(t) {
                function r(t) {
                    if (!t)
                        return !1;
                    if (e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer || e.Blob && t instanceof Blob || e.File && t instanceof File)
                        return !0;
                    if (o(t)) {
                        for (var n = 0; n < t.length; n++)
                            if (r(t[n]))
                                return !0
                    } else if (t && "object" == typeof t) {
                        t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());
                        for (var i in t)
                            if (Object.prototype.hasOwnProperty.call(t, i) && r(t[i]))
                                return !0
                    }
                    return !1
                }
                return r(t)
            }
            var o = r(15);
            t.exports = n
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        t.exports = function(t, e, r) {
            var n = t.byteLength;
            if (e = e || 0,
            r = r || n,
            t.slice)
                return t.slice(e, r);
            if (e < 0 && (e += n),
            r < 0 && (r += n),
            r > n && (r = n),
            e >= n || e >= r || 0 === n)
                return new ArrayBuffer(0);
            for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++,
            a++)
                i[a] = o[s];
            return i.buffer
        }
    }
    , function(t, e) {
        function r(t, e, r) {
            function o(t, n) {
                if (o.count <= 0)
                    throw new Error("after called too many times");
                --o.count,
                t ? (i = !0,
                e(t),
                e = r) : 0 !== o.count || i || e(null, n)
            }
            var i = !1;
            return r = r || n,
            o.count = t,
            0 === t ? e() : o
        }
        function n() {}
        t.exports = r
    }
    , function(t, e, r) {
        var n;
        (function(t, o) {
            !function(i) {
                function s(t) {
                    for (var e, r, n = [], o = 0, i = t.length; o < i; )
                        e = t.charCodeAt(o++),
                        e >= 55296 && e <= 56319 && o < i ? (r = t.charCodeAt(o++),
                        56320 == (64512 & r) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e),
                        o--)) : n.push(e);
                    return n
                }
                function a(t) {
                    for (var e, r = t.length, n = -1, o = ""; ++n < r; )
                        e = t[n],
                        e > 65535 && (e -= 65536,
                        o += b(e >>> 10 & 1023 | 55296),
                        e = 56320 | 1023 & e),
                        o += b(e);
                    return o
                }
                function c(t, e) {
                    return b(t >> e & 63 | 128)
                }
                function u(t) {
                    if (0 == (4294967168 & t))
                        return b(t);
                    var e = "";
                    return 0 == (4294965248 & t) ? e = b(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (e = b(t >> 12 & 15 | 224),
                    e += c(t, 6)) : 0 == (4292870144 & t) && (e = b(t >> 18 & 7 | 240),
                    e += c(t, 12),
                    e += c(t, 6)),
                    e += b(63 & t | 128)
                }
                function h(t) {
                    for (var e, r = s(t), n = r.length, o = -1, i = ""; ++o < n; )
                        e = r[o],
                        i += u(e);
                    return i
                }
                function p() {
                    if (v >= m)
                        throw Error("Invalid byte index");
                    var t = 255 & g[v];
                    if (v++,
                    128 == (192 & t))
                        return 63 & t;
                    throw Error("Invalid continuation byte")
                }
                function f() {
                    var t, e, r, n, o;
                    if (v > m)
                        throw Error("Invalid byte index");
                    if (v == m)
                        return !1;
                    if (t = 255 & g[v],
                    v++,
                    0 == (128 & t))
                        return t;
                    if (192 == (224 & t)) {
                        var e = p();
                        if (o = (31 & t) << 6 | e,
                        o >= 128)
                            return o;
                        throw Error("Invalid continuation byte")
                    }
                    if (224 == (240 & t)) {
                        if (e = p(),
                        r = p(),
                        o = (15 & t) << 12 | e << 6 | r,
                        o >= 2048)
                            return o;
                        throw Error("Invalid continuation byte")
                    }
                    if (240 == (248 & t) && (e = p(),
                    r = p(),
                    n = p(),
                    o = (15 & t) << 18 | e << 12 | r << 6 | n,
                    o >= 65536 && o <= 1114111))
                        return o;
                    throw Error("Invalid WTF-8 detected")
                }
                function l(t) {
                    g = s(t),
                    m = g.length,
                    v = 0;
                    for (var e, r = []; (e = f()) !== !1; )
                        r.push(e);
                    return a(r)
                }
                var d = "object" == typeof e && e
                  , y = ("object" == typeof t && t && t.exports == d && t,
                "object" == typeof o && o);
                y.global !== y && y.window !== y || (i = y);
                var g, m, v, b = String.fromCharCode, w = {
                    version: "1.0.0",
                    encode: h,
                    decode: l
                };
                n = function() {
                    return w
                }
                .call(e, r, e, t),
                !(void 0 !== n && (t.exports = n))
            }(this)
        }
        ).call(e, r(12)(t), function() {
            return this
        }())
    }
    , function(t, e) {
        !function() {
            "use strict";
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), n = 0; n < t.length; n++)
                r[t.charCodeAt(n)] = n;
            e.encode = function(e) {
                var r, n = new Uint8Array(e), o = n.length, i = "";
                for (r = 0; r < o; r += 3)
                    i += t[n[r] >> 2],
                    i += t[(3 & n[r]) << 4 | n[r + 1] >> 4],
                    i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6],
                    i += t[63 & n[r + 2]];
                return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
                i
            }
            ,
            e.decode = function(t) {
                var e, n, o, i, s, a = .75 * t.length, c = t.length, u = 0;
                "=" === t[t.length - 1] && (a--,
                "=" === t[t.length - 2] && a--);
                var h = new ArrayBuffer(a)
                  , p = new Uint8Array(h);
                for (e = 0; e < c; e += 4)
                    n = r[t.charCodeAt(e)],
                    o = r[t.charCodeAt(e + 1)],
                    i = r[t.charCodeAt(e + 2)],
                    s = r[t.charCodeAt(e + 3)],
                    p[u++] = n << 2 | o >> 4,
                    p[u++] = (15 & o) << 4 | i >> 2,
                    p[u++] = (3 & i) << 6 | 63 & s;
                return h
            }
        }()
    }
    , function(t, e) {
        (function(e) {
            function r(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    if (r.buffer instanceof ArrayBuffer) {
                        var n = r.buffer;
                        if (r.byteLength !== n.byteLength) {
                            var o = new Uint8Array(r.byteLength);
                            o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),
                            n = o.buffer
                        }
                        t[e] = n
                    }
                }
            }
            function n(t, e) {
                e = e || {};
                var n = new i;
                r(t);
                for (var o = 0; o < t.length; o++)
                    n.append(t[o]);
                return e.type ? n.getBlob(e.type) : n.getBlob()
            }
            function o(t, e) {
                return r(t),
                new Blob(t,e || {})
            }
            var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder
              , s = function() {
                try {
                    var t = new Blob(["hi"]);
                    return 2 === t.size
                } catch (t) {
                    return !1
                }
            }()
              , a = s && function() {
                try {
                    var t = new Blob([new Uint8Array([1, 2])]);
                    return 2 === t.size
                } catch (t) {
                    return !1
                }
            }()
              , c = i && i.prototype.append && i.prototype.getBlob;
            t.exports = function() {
                return s ? a ? e.Blob : o : c ? n : void 0
            }()
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, r) {
        function n(t) {
            if (t)
                return o(t)
        }
        function o(t) {
            for (var e in n.prototype)
                t[e] = n.prototype[e];
            return t
        }
        t.exports = n,
        n.prototype.on = n.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
        }
        ,
        n.prototype.once = function(t, e) {
            function r() {
                this.off(t, r),
                e.apply(this, arguments)
            }
            return r.fn = e,
            this.on(t, r),
            this
        }
        ,
        n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length)
                return this._callbacks = {},
                this;
            var r = this._callbacks["$" + t];
            if (!r)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks["$" + t],
                this;
            for (var n, o = 0; o < r.length; o++)
                if (n = r[o],
                n === e || n.fn === e) {
                    r.splice(o, 1);
                    break
                }
            return this
        }
        ,
        n.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1)
              , r = this._callbacks["$" + t];
            if (r) {
                r = r.slice(0);
                for (var n = 0, o = r.length; n < o; ++n)
                    r[n].apply(this, e)
            }
            return this
        }
        ,
        n.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks["$" + t] || []
        }
        ,
        n.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    }
    , function(t, e) {
        e.encode = function(t) {
            var e = "";
            for (var r in t)
                t.hasOwnProperty(r) && (e.length && (e += "&"),
                e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
            return e
        }
        ,
        e.decode = function(t) {
            for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
                var i = r[n].split("=");
                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
            }
            return e
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            var r = function() {};
            r.prototype = e.prototype,
            t.prototype = new r,
            t.prototype.constructor = t
        }
    }
    , function(t, e) {
        "use strict";
        function r(t) {
            var e = "";
            do
                e = s[t % a] + e,
                t = Math.floor(t / a);
            while (t > 0);return e
        }
        function n(t) {
            var e = 0;
            for (h = 0; h < t.length; h++)
                e = e * a + c[t.charAt(h)];
            return e
        }
        function o() {
            var t = r(+new Date);
            return t !== i ? (u = 0,
            i = t) : t + "." + r(u++)
        }
        for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, u = 0, h = 0; h < a; h++)
            c[s[h]] = h;
        o.encode = r,
        o.decode = n,
        t.exports = o
    }
    , function(t, e, r) {
        (function(e) {
            function n() {}
            function o(t) {
                i.call(this, t),
                this.query = this.query || {},
                a || (e.___eio || (e.___eio = []),
                a = e.___eio),
                this.index = a.length;
                var r = this;
                a.push(function(t) {
                    r.onData(t)
                }),
                this.query.j = this.index,
                e.document && e.addEventListener && e.addEventListener("beforeunload", function() {
                    r.script && (r.script.onerror = n)
                }, !1)
            }
            var i = r(25)
              , s = r(37);
            t.exports = o;
            var a, c = /\n/g, u = /\\n/g;
            s(o, i),
            o.prototype.supportsBinary = !1,
            o.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                this.form && (this.form.parentNode.removeChild(this.form),
                this.form = null,
                this.iframe = null),
                i.prototype.doClose.call(this)
            }
            ,
            o.prototype.doPoll = function() {
                var t = this
                  , e = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                e.async = !0,
                e.src = this.uri(),
                e.onerror = function(e) {
                    t.onError("jsonp poll error", e)
                }
                ;
                var r = document.getElementsByTagName("script")[0];
                r ? r.parentNode.insertBefore(e, r) : (document.head || document.body).appendChild(e),
                this.script = e;
                var n = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                n && setTimeout(function() {
                    var t = document.createElement("iframe");
                    document.body.appendChild(t),
                    document.body.removeChild(t)
                }, 100)
            }
            ,
            o.prototype.doWrite = function(t, e) {
                function r() {
                    n(),
                    e()
                }
                function n() {
                    if (o.iframe)
                        try {
                            o.form.removeChild(o.iframe)
                        } catch (t) {
                            o.onError("jsonp polling iframe removal error", t)
                        }
                    try {
                        var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                        i = document.createElement(t)
                    } catch (t) {
                        i = document.createElement("iframe"),
                        i.name = o.iframeId,
                        i.src = "javascript:0"
                    }
                    i.id = o.iframeId,
                    o.form.appendChild(i),
                    o.iframe = i
                }
                var o = this;
                if (!this.form) {
                    var i, s = document.createElement("form"), a = document.createElement("textarea"), h = this.iframeId = "eio_iframe_" + this.index;
                    s.className = "socketio",
                    s.style.position = "absolute",
                    s.style.top = "-1000px",
                    s.style.left = "-1000px",
                    s.target = h,
                    s.method = "POST",
                    s.setAttribute("accept-charset", "utf-8"),
                    a.name = "d",
                    s.appendChild(a),
                    document.body.appendChild(s),
                    this.form = s,
                    this.area = a
                }
                this.form.action = this.uri(),
                n(),
                t = t.replace(u, "\\\n"),
                this.area.value = t.replace(c, "\\n");
                try {
                    this.form.submit()
                } catch (t) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                    "complete" === o.iframe.readyState && r();
                }
                : this.iframe.onload = r
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, r) {
        (function(e) {
            function n(t) {
                var e = t && t.forceBase64;
                e && (this.supportsBinary = !1),
                this.perMessageDeflate = t.perMessageDeflate,
                this.usingBrowserWebSocket = p && !t.forceNode,
                this.usingBrowserWebSocket || (f = o),
                i.call(this, t)
            }
            var o, i = r(26), s = r(27), a = r(36), c = r(37), u = r(38), h = r(3)("engine.io-client:websocket"), p = e.WebSocket || e.MozWebSocket;
            if ("undefined" == typeof window)
                try {
                    o = r(41)
                } catch (t) {}
            var f = p;
            f || "undefined" != typeof window || (f = o),
            t.exports = n,
            c(n, i),
            n.prototype.name = "websocket",
            n.prototype.supportsBinary = !0,
            n.prototype.doOpen = function() {
                if (this.check()) {
                    var t = this.uri()
                      , e = void 0
                      , r = {
                        agent: this.agent,
                        perMessageDeflate: this.perMessageDeflate
                    };
                    r.pfx = this.pfx,
                    r.key = this.key,
                    r.passphrase = this.passphrase,
                    r.cert = this.cert,
                    r.ca = this.ca,
                    r.ciphers = this.ciphers,
                    r.rejectUnauthorized = this.rejectUnauthorized,
                    this.extraHeaders && (r.headers = this.extraHeaders),
                    this.localAddress && (r.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket ? new f(t) : new f(t,e,r)
                    } catch (t) {
                        return this.emit("error", t)
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                    this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
                    this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer",
                    this.addEventListeners()
                }
            }
            ,
            n.prototype.addEventListeners = function() {
                var t = this;
                this.ws.onopen = function() {
                    t.onOpen()
                }
                ,
                this.ws.onclose = function() {
                    t.onClose()
                }
                ,
                this.ws.onmessage = function(e) {
                    t.onData(e.data)
                }
                ,
                this.ws.onerror = function(e) {
                    t.onError("websocket error", e)
                }
            }
            ,
            n.prototype.write = function(t) {
                function r() {
                    n.emit("flush"),
                    setTimeout(function() {
                        n.writable = !0,
                        n.emit("drain")
                    }, 0)
                }
                var n = this;
                this.writable = !1;
                for (var o = t.length, i = 0, a = o; i < a; i++)
                    !function(t) {
                        s.encodePacket(t, n.supportsBinary, function(i) {
                            if (!n.usingBrowserWebSocket) {
                                var s = {};
                                if (t.options && (s.compress = t.options.compress),
                                n.perMessageDeflate) {
                                    var a = "string" == typeof i ? e.Buffer.byteLength(i) : i.length;
                                    a < n.perMessageDeflate.threshold && (s.compress = !1)
                                }
                            }
                            try {
                                n.usingBrowserWebSocket ? n.ws.send(i) : n.ws.send(i, s)
                            } catch (t) {
                                h("websocket closed before onclose event")
                            }
                            --o || r()
                        })
                    }(t[i])
            }
            ,
            n.prototype.onClose = function() {
                i.prototype.onClose.call(this)
            }
            ,
            n.prototype.doClose = function() {
                "undefined" != typeof this.ws && this.ws.close()
            }
            ,
            n.prototype.uri = function() {
                var t = this.query || {}
                  , e = this.secure ? "wss" : "ws"
                  , r = "";
                this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port),
                this.timestampRequests && (t[this.timestampParam] = u()),
                this.supportsBinary || (t.b64 = 1),
                t = a.encode(t),
                t.length && (t = "?" + t);
                var n = this.hostname.indexOf(":") !== -1;
                return e + "://" + (n ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t
            }
            ,
            n.prototype.check = function() {
                return !(!f || "__initialize"in f && this.name === n.prototype.name)
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {}
    , function(t, e) {
        var r = [].indexOf;
        t.exports = function(t, e) {
            if (r)
                return t.indexOf(e);
            for (var n = 0; n < t.length; ++n)
                if (t[n] === e)
                    return n;
            return -1
        }
    }
    , function(t, e) {
        (function(e) {
            var r = /^[\],:{}\s]*$/
              , n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
              , o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
              , i = /(?:^|:|,)(?:\s*\[)+/g
              , s = /^\s+/
              , a = /\s+$/;
            t.exports = function(t) {
                return "string" == typeof t && t ? (t = t.replace(s, "").replace(a, ""),
                e.JSON && JSON.parse ? JSON.parse(t) : r.test(t.replace(n, "@").replace(o, "]").replace(i, "")) ? new Function("return " + t)() : void 0) : null
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, r) {
        "use strict";
        function n(t, e, r) {
            this.io = t,
            this.nsp = e,
            this.json = this,
            this.ids = 0,
            this.acks = {},
            this.receiveBuffer = [],
            this.sendBuffer = [],
            this.connected = !1,
            this.disconnected = !0,
            r && r.query && (this.query = r.query),
            this.io.autoConnect && this.open()
        }
        var o = r(7)
          , i = r(35)
          , s = r(45)
          , a = r(46)
          , c = r(47)
          , u = r(3)("socket.io-client:socket")
          , h = r(29);
        t.exports = e = n;
        var p = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        }
          , f = i.prototype.emit;
        i(n.prototype),
        n.prototype.subEvents = function() {
            if (!this.subs) {
                var t = this.io;
                this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))]
            }
        }
        ,
        n.prototype.open = n.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(),
            this.io.open(),
            "open" === this.io.readyState && this.onopen(),
            this.emit("connecting"),
            this)
        }
        ,
        n.prototype.send = function() {
            var t = s(arguments);
            return t.unshift("message"),
            this.emit.apply(this, t),
            this
        }
        ,
        n.prototype.emit = function(t) {
            if (p.hasOwnProperty(t))
                return f.apply(this, arguments),
                this;
            var e = s(arguments)
              , r = o.EVENT;
            h(e) && (r = o.BINARY_EVENT);
            var n = {
                type: r,
                data: e
            };
            return n.options = {},
            n.options.compress = !this.flags || !1 !== this.flags.compress,
            "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids),
            this.acks[this.ids] = e.pop(),
            n.id = this.ids++),
            this.connected ? this.packet(n) : this.sendBuffer.push(n),
            delete this.flags,
            this
        }
        ,
        n.prototype.packet = function(t) {
            t.nsp = this.nsp,
            this.io.packet(t)
        }
        ,
        n.prototype.onopen = function() {
            u("transport is open - connecting"),
            "/" !== this.nsp && (this.query ? this.packet({
                type: o.CONNECT,
                query: this.query
            }) : this.packet({
                type: o.CONNECT
            }))
        }
        ,
        n.prototype.onclose = function(t) {
            u("close (%s)", t),
            this.connected = !1,
            this.disconnected = !0,
            delete this.id,
            this.emit("disconnect", t)
        }
        ,
        n.prototype.onpacket = function(t) {
            if (t.nsp === this.nsp)
                switch (t.type) {
                case o.CONNECT:
                    this.onconnect();
                    break;
                case o.EVENT:
                    this.onevent(t);
                    break;
                case o.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case o.ACK:
                    this.onack(t);
                    break;
                case o.BINARY_ACK:
                    this.onack(t);
                    break;
                case o.DISCONNECT:
                    this.ondisconnect();
                    break;
                case o.ERROR:
                    this.emit("error", t.data)
                }
        }
        ,
        n.prototype.onevent = function(t) {
            var e = t.data || [];
            u("emitting event %j", e),
            null != t.id && (u("attaching ack callback to event"),
            e.push(this.ack(t.id))),
            this.connected ? f.apply(this, e) : this.receiveBuffer.push(e)
        }
        ,
        n.prototype.ack = function(t) {
            var e = this
              , r = !1;
            return function() {
                if (!r) {
                    r = !0;
                    var n = s(arguments);
                    u("sending ack %j", n);
                    var i = h(n) ? o.BINARY_ACK : o.ACK;
                    e.packet({
                        type: i,
                        id: t,
                        data: n
                    })
                }
            }
        }
        ,
        n.prototype.onack = function(t) {
            var e = this.acks[t.id];
            "function" == typeof e ? (u("calling ack %s with %j", t.id, t.data),
            e.apply(this, t.data),
            delete this.acks[t.id]) : u("bad ack %s", t.id)
        }
        ,
        n.prototype.onconnect = function() {
            this.connected = !0,
            this.disconnected = !1,
            this.emit("connect"),
            this.emitBuffered()
        }
        ,
        n.prototype.emitBuffered = function() {
            var t;
            for (t = 0; t < this.receiveBuffer.length; t++)
                f.apply(this, this.receiveBuffer[t]);
            for (this.receiveBuffer = [],
            t = 0; t < this.sendBuffer.length; t++)
                this.packet(this.sendBuffer[t]);
            this.sendBuffer = []
        }
        ,
        n.prototype.ondisconnect = function() {
            u("server disconnect (%s)", this.nsp),
            this.destroy(),
            this.onclose("io server disconnect")
        }
        ,
        n.prototype.destroy = function() {
            if (this.subs) {
                for (var t = 0; t < this.subs.length; t++)
                    this.subs[t].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }
        ,
        n.prototype.close = n.prototype.disconnect = function() {
            return this.connected && (u("performing disconnect (%s)", this.nsp),
            this.packet({
                type: o.DISCONNECT
            })),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        }
        ,
        n.prototype.compress = function(t) {
            return this.flags = this.flags || {},
            this.flags.compress = t,
            this
        }
    }
    , function(t, e) {
        function r(t, e) {
            var r = [];
            e = e || 0;
            for (var n = e || 0; n < t.length; n++)
                r[n - e] = t[n];
            return r
        }
        t.exports = r
    }
    , function(t, e) {
        "use strict";
        function r(t, e, r) {
            return t.on(e, r),
            {
                destroy: function() {
                    t.removeListener(e, r)
                }
            }
        }
        t.exports = r
    }
    , function(t, e) {
        var r = [].slice;
        t.exports = function(t, e) {
            if ("string" == typeof e && (e = t[e]),
            "function" != typeof e)
                throw new Error("bind() requires a function");
            var n = r.call(arguments, 2);
            return function() {
                return e.apply(t, n.concat(r.call(arguments)))
            }
        }
    }
    , function(t, e) {
        function r(t) {
            t = t || {},
            this.ms = t.min || 100,
            this.max = t.max || 1e4,
            this.factor = t.factor || 2,
            this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
            this.attempts = 0
        }
        t.exports = r,
        r.prototype.duration = function() {
            var t = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var e = Math.random()
                  , r = Math.floor(e * this.jitter * t);
                t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r
            }
            return 0 | Math.min(t, this.max)
        }
        ,
        r.prototype.reset = function() {
            this.attempts = 0
        }
        ,
        r.prototype.setMin = function(t) {
            this.ms = t
        }
        ,
        r.prototype.setMax = function(t) {
            this.max = t
        }
        ,
        r.prototype.setJitter = function(t) {
            this.jitter = t
        }
    }
    ])
});
//! moment.js
//! version : 2.17.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";
    function a() {
        return od.apply(null, arguments)
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function b(a) {
        od = a
    }
    function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
    }
    function d(a) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return null != a && "[object Object]" === Object.prototype.toString.call(a)
    }
    function e(a) {
        var b;
        for (b in a)
            // even if its not own property I'd still call it non-empty
            return !1;
        return !0
    }
    function f(a) {
        return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
    }
    function g(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }
    function h(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c)
            d.push(b(a[c], c));
        return d
    }
    function i(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    function j(a, b) {
        for (var c in b)
            i(b, c) && (a[c] = b[c]);
        return i(b, "toString") && (a.toString = b.toString),
        i(b, "valueOf") && (a.valueOf = b.valueOf),
        a
    }
    function k(a, b, c, d) {
        return rb(a, b, c, d, !0).utc()
    }
    function l() {
        // We need to deep clone this object.
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }
    function m(a) {
        return null == a._pf && (a._pf = l()),
        a._pf
    }
    function n(a) {
        if (null == a._isValid) {
            var b = m(a)
              , c = qd.call(b.parsedDateParts, function(a) {
                return null != a
            })
              , d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
            if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour),
            null != Object.isFrozen && Object.isFrozen(a))
                return d;
            a._isValid = d
        }
        return a._isValid
    }
    function o(a) {
        var b = k(NaN);
        return null != a ? j(m(b), a) : m(b).userInvalidated = !0,
        b
    }
    function p(a) {
        return void 0 === a
    }
    function q(a, b) {
        var c, d, e;
        if (p(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
        p(b._i) || (a._i = b._i),
        p(b._f) || (a._f = b._f),
        p(b._l) || (a._l = b._l),
        p(b._strict) || (a._strict = b._strict),
        p(b._tzm) || (a._tzm = b._tzm),
        p(b._isUTC) || (a._isUTC = b._isUTC),
        p(b._offset) || (a._offset = b._offset),
        p(b._pf) || (a._pf = m(b)),
        p(b._locale) || (a._locale = b._locale),
        rd.length > 0)
            for (c in rd)
                d = rd[c],
                e = b[d],
                p(e) || (a[d] = e);
        return a
    }
    // Moment prototype object
    function r(b) {
        q(this, b),
        this._d = new Date(null != b._d ? b._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        sd === !1 && (sd = !0,
        a.updateOffset(this),
        sd = !1)
    }
    function s(a) {
        return a instanceof r || null != a && null != a._isAMomentObject
    }
    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
    }
    function u(a) {
        var b = +a
          , c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)),
        c
    }
    // compare two arrays, return the number of differences
    function v(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; d < e; d++)
            (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f
    }
    function w(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }
    function x(b, c) {
        var d = !0;
        return j(function() {
            if (null != a.deprecationHandler && a.deprecationHandler(null, b),
            d) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (e = "",
                    "object" == typeof arguments[g]) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0])
                            e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2)
                    } else
                        e = arguments[g];
                    f.push(e)
                }
                w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack),
                d = !1
            }
            return c.apply(this, arguments)
        }, c)
    }
    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c),
        td[b] || (w(c),
        td[b] = !0)
    }
    function z(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }
    function A(a) {
        var b, c;
        for (c in a)
            b = a[c],
            z(b) ? this[c] = b : this["_" + c] = b;
        this._config = a,
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }
    function B(a, b) {
        var c, e = j({}, a);
        for (c in b)
            i(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {},
            j(e[c], a[c]),
            j(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        for (c in a)
            i(a, c) && !i(b, c) && d(a[c]) && (// make sure changes to properties don't modify parent config
            e[c] = j({}, e[c]));
        return e
    }
    function C(a) {
        null != a && this.set(a)
    }
    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d
    }
    function E(a) {
        var b = this._longDateFormat[a]
          , c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }),
        this._longDateFormat[a])
    }
    function F() {
        return this._invalidDate
    }
    function G(a) {
        return this._ordinal.replace("%d", a)
    }
    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }
    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b)
    }
    function J(a, b) {
        var c = a.toLowerCase();
        Dd[c] = Dd[c + "s"] = Dd[b] = a
    }
    function K(a) {
        return "string" == typeof a ? Dd[a] || Dd[a.toLowerCase()] : void 0
    }
    function L(a) {
        var b, c, d = {};
        for (c in a)
            i(a, c) && (b = K(c),
            b && (d[b] = a[c]));
        return d
    }
    function M(a, b) {
        Ed[a] = b
    }
    function N(a) {
        var b = [];
        for (var c in a)
            b.push({
                unit: c,
                priority: Ed[c]
            });
        return b.sort(function(a, b) {
            return a.priority - b.priority
        }),
        b
    }
    function O(b, c) {
        return function(d) {
            return null != d ? (Q(this, b, d),
            a.updateOffset(this, c),
            this) : P(this, b)
        }
    }
    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }
    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }
    // MOMENTS
    function R(a) {
        return a = K(a),
        z(this[a]) ? this[a]() : this
    }
    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++)
                this[c[d].unit](a[c[d].unit])
        } else if (a = K(a),
        z(this[a]))
            return this[a](b);
        return this
    }
    function T(a, b, c) {
        var d = "" + Math.abs(a)
          , e = b - d.length
          , f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }
        ),
        a && (Id[a] = e),
        b && (Id[b[0]] = function() {
            return T(e.apply(this, arguments), b[1], b[2])
        }
        ),
        c && (Id[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        }
        )
    }
    function V(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function W(a) {
        var b, c, d = a.match(Fd);
        for (b = 0,
        c = d.length; b < c; b++)
            Id[d[b]] ? d[b] = Id[d[b]] : d[b] = V(d[b]);
        return function(b) {
            var e, f = "";
            for (e = 0; e < c; e++)
                f += d[e]instanceof Function ? d[e].call(b, a) : d[e];
            return f
        }
    }
    // format date using native date object
    function X(a, b) {
        return a.isValid() ? (b = Y(b, a.localeData()),
        Hd[b] = Hd[b] || W(b),
        Hd[b](a)) : a.localeData().invalidDate()
    }
    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Gd.lastIndex = 0; d >= 0 && Gd.test(a); )
            a = a.replace(Gd, c),
            Gd.lastIndex = 0,
            d -= 1;
        return a
    }
    function Z(a, b, c) {
        $d[a] = z(b) ? b : function(a, d) {
            return a && c ? c : b
        }
    }
    function $(a, b) {
        return i($d, a) ? $d[a](b._strict, b._locale) : new RegExp(_(a))
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function _(a) {
        return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }))
    }
    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function ba(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]),
        f(b) && (d = function(a, c) {
            c[b] = u(a)
        }
        ),
        c = 0; c < a.length; c++)
            _d[a[c]] = d
    }
    function ca(a, b) {
        ba(a, function(a, c, d, e) {
            d._w = d._w || {},
            b(a, d._w, d, e)
        })
    }
    function da(a, b, c) {
        null != b && i(_d, a) && _d[a](b, c._a, c, a)
    }
    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }
    function fa(a, b) {
        return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || ke).test(b) ? "format" : "standalone"][a.month()] : this._months
    }
    function ga(a, b) {
        return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[ke.test(b) ? "format" : "standalone"][a.month()] : this._monthsShort
    }
    function ha(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._monthsParse)
            for (// this is not used
            this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            d = 0; d < 12; ++d)
                f = k([2e3, d]),
                this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(),
                this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        return c ? "MMM" === b ? (e = je.call(this._shortMonthsParse, g),
        e !== -1 ? e : null) : (e = je.call(this._longMonthsParse, g),
        e !== -1 ? e : null) : "MMM" === b ? (e = je.call(this._shortMonthsParse, g),
        e !== -1 ? e : (e = je.call(this._longMonthsParse, g),
        e !== -1 ? e : null)) : (e = je.call(this._longMonthsParse, g),
        e !== -1 ? e : (e = je.call(this._shortMonthsParse, g),
        e !== -1 ? e : null))
    }
    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact)
            return ha.call(this, a, b, c);
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        d = 0; d < 12; d++) {
            // test the regex
            if (// make the regex if we don't have it already
            e = k([2e3, d]),
            c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$","i")),
            c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""),
            this._monthsParse[d] = new RegExp(f.replace(".", ""),"i")),
            c && "MMMM" === b && this._longMonthsParse[d].test(a))
                return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a))
                return d;
            if (!c && this._monthsParse[d].test(a))
                return d
        }
    }
    // MOMENTS
    function ja(a, b) {
        var c;
        if (!a.isValid())
            // No op
            return a;
        if ("string" == typeof b)
            if (/^\d+$/.test(b))
                b = u(b);
            else // TODO: Another silent failure?
            if (b = a.localeData().monthsParse(b),
            !f(b))
                return a;
        return c = Math.min(a.date(), ea(a.year(), b)),
        a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c),
        a
    }
    function ka(b) {
        return null != b ? (ja(this, b),
        a.updateOffset(this, !0),
        this) : P(this, "Month")
    }
    function la() {
        return ea(this.year(), this.month())
    }
    function ma(a) {
        return this._monthsParseExact ? (i(this, "_monthsRegex") || oa.call(this),
        a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (i(this, "_monthsShortRegex") || (this._monthsShortRegex = ne),
        this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    function na(a) {
        return this._monthsParseExact ? (i(this, "_monthsRegex") || oa.call(this),
        a ? this._monthsStrictRegex : this._monthsRegex) : (i(this, "_monthsRegex") || (this._monthsRegex = oe),
        this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
    }
    function oa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [], e = [], f = [];
        for (b = 0; b < 12; b++)
            // make the regex if we don't have it already
            c = k([2e3, b]),
            d.push(this.monthsShort(c, "")),
            e.push(this.months(c, "")),
            f.push(this.months(c, "")),
            f.push(this.monthsShort(c, ""));
        for (// Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        d.sort(a),
        e.sort(a),
        f.sort(a),
        b = 0; b < 12; b++)
            d[b] = aa(d[b]),
            e[b] = aa(e[b]);
        for (b = 0; b < 24; b++)
            f[b] = aa(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")","i")
    }
    // HELPERS
    function pa(a) {
        return qa(a) ? 366 : 365
    }
    function qa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }
    function ra() {
        return qa(this.year())
    }
    function sa(a, b, c, d, e, f, g) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var h = new Date(a,b,c,d,e,f,g);
        //the date constructor remaps years 0-99 to 1900-1999
        return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a),
        h
    }
    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        //the Date.UTC function remaps years 0-99 to 1900-1999
        return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a),
        b
    }
    // start-of-first-week - start-of-year
    function ua(a, b, c) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        d = 7 + b - c
          , // first-week day local weekday -- which local weekday is fwd
        e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function va(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7, i = ua(a, d, e), j = 1 + 7 * (b - 1) + h + i;
        return j <= 0 ? (f = a - 1,
        g = pa(f) + j) : j > pa(a) ? (f = a + 1,
        g = j - pa(a)) : (f = a,
        g = j),
        {
            year: f,
            dayOfYear: g
        }
    }
    function wa(a, b, c) {
        var d, e, f = ua(a.year(), b, c), g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return g < 1 ? (e = a.year() - 1,
        d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c),
        e = a.year() + 1) : (e = a.year(),
        d = g),
        {
            week: d,
            year: e
        }
    }
    function xa(a, b, c) {
        var d = ua(a, b, c)
          , e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7
    }
    // HELPERS
    // LOCALES
    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week
    }
    function za() {
        return this._week.dow
    }
    function Aa() {
        return this._week.doy
    }
    // MOMENTS
    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }
    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }
    // HELPERS
    function Da(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a),
        "number" == typeof a ? a : null) : parseInt(a, 10)
    }
    function Ea(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
    }
    function Fa(a, b) {
        return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : this._weekdays
    }
    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
    }
    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
    }
    function Ia(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            d = 0; d < 7; ++d)
                f = k([2e3, 1]).day(d),
                this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(),
                this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(),
                this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        return c ? "dddd" === b ? (e = je.call(this._weekdaysParse, g),
        e !== -1 ? e : null) : "ddd" === b ? (e = je.call(this._shortWeekdaysParse, g),
        e !== -1 ? e : null) : (e = je.call(this._minWeekdaysParse, g),
        e !== -1 ? e : null) : "dddd" === b ? (e = je.call(this._weekdaysParse, g),
        e !== -1 ? e : (e = je.call(this._shortWeekdaysParse, g),
        e !== -1 ? e : (e = je.call(this._minWeekdaysParse, g),
        e !== -1 ? e : null))) : "ddd" === b ? (e = je.call(this._shortWeekdaysParse, g),
        e !== -1 ? e : (e = je.call(this._weekdaysParse, g),
        e !== -1 ? e : (e = je.call(this._minWeekdaysParse, g),
        e !== -1 ? e : null))) : (e = je.call(this._minWeekdaysParse, g),
        e !== -1 ? e : (e = je.call(this._weekdaysParse, g),
        e !== -1 ? e : (e = je.call(this._shortWeekdaysParse, g),
        e !== -1 ? e : null)))
    }
    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact)
            return Ia.call(this, a, b, c);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        d = 0; d < 7; d++) {
            // test the regex
            if (// make the regex if we don't have it already
            e = k([2e3, 1]).day(d),
            c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$","i"),
            this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$","i"),
            this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$","i")),
            this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""),
            this._weekdaysParse[d] = new RegExp(f.replace(".", ""),"i")),
            c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
                return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a))
                return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a))
                return d;
            if (!c && this._weekdaysParse[d].test(a))
                return d
        }
    }
    // MOMENTS
    function Ka(a) {
        if (!this.isValid())
            return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Da(a, this.localeData()),
        this.add(a - b, "d")) : b
    }
    function La(a) {
        if (!this.isValid())
            return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }
    function Ma(a) {
        if (!this.isValid())
            return null != a ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7)
        }
        return this.day() || 7
    }
    function Na(a) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (i(this, "_weekdaysRegex") || (this._weekdaysRegex = ue),
        this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    function Oa(a) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (i(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ve),
        this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    function Pa(a) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (i(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = we),
        this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    function Qa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d, e, f, g = [], h = [], i = [], j = [];
        for (b = 0; b < 7; b++)
            // make the regex if we don't have it already
            c = k([2e3, 1]).day(b),
            d = this.weekdaysMin(c, ""),
            e = this.weekdaysShort(c, ""),
            f = this.weekdays(c, ""),
            g.push(d),
            h.push(e),
            i.push(f),
            j.push(d),
            j.push(e),
            j.push(f);
        for (// Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        g.sort(a),
        h.sort(a),
        i.sort(a),
        j.sort(a),
        b = 0; b < 7; b++)
            h[b] = aa(h[b]),
            i[b] = aa(i[b]),
            j[b] = aa(j[b]);
        this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")","i")
    }
    // FORMATTING
    function Ra() {
        return this.hours() % 12 || 12
    }
    function Sa() {
        return this.hours() || 24
    }
    function Ta(a, b) {
        U(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }
    // PARSING
    function Ua(a, b) {
        return b._meridiemParse
    }
    // LOCALES
    function Va(a) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return "p" === (a + "").toLowerCase().charAt(0)
    }
    function Wa(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }
    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length; ) {
            for (e = Xa(a[f]).split("-"),
            b = e.length,
            c = Xa(a[f + 1]),
            c = c ? c.split("-") : null; b > 0; ) {
                if (d = Za(e.slice(0, b).join("-")))
                    return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1)
                    //the next array item is better than a shallower substring of this one
                    break;
                b--
            }
            f++
        }
        return null
    }
    function Za(a) {
        var b = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!Be[a] && "undefined" != typeof module && module && module.exports)
            try {
                b = xe._abbr,
                require("./locale/" + a),
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                $a(b)
            } catch (a) {}
        return Be[a]
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function $a(a, b) {
        var c;
        // moment.duration._locale = moment._locale = data;
        return a && (c = p(b) ? bb(a) : _a(a, b),
        c && (xe = c)),
        xe._abbr
    }
    function _a(a, b) {
        if (null !== b) {
            var c = Ae;
            if (b.abbr = a,
            null != Be[a])
                y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                c = Be[a]._config;
            else if (null != b.parentLocale) {
                if (null == Be[b.parentLocale])
                    return Ce[b.parentLocale] || (Ce[b.parentLocale] = []),
                    Ce[b.parentLocale].push({
                        name: a,
                        config: b
                    }),
                    null;
                c = Be[b.parentLocale]._config
            }
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            return Be[a] = new C(B(c, b)),
            Ce[a] && Ce[a].forEach(function(a) {
                _a(a.name, a.config)
            }),
            $a(a),
            Be[a]
        }
        // useful for testing
        return delete Be[a],
        null
    }
    function ab(a, b) {
        if (null != b) {
            var c, d = Ae;
            // MERGE
            null != Be[a] && (d = Be[a]._config),
            b = B(d, b),
            c = new C(b),
            c.parentLocale = Be[a],
            Be[a] = c,
            // backwards compat for now: also set the locale
            $a(a)
        } else
            // pass null for config to unupdate, useful for tests
            null != Be[a] && (null != Be[a].parentLocale ? Be[a] = Be[a].parentLocale : null != Be[a] && delete Be[a]);
        return Be[a]
    }
    // returns locale data
    function bb(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr),
        !a)
            return xe;
        if (!c(a)) {
            if (//short-circuit everything else
            b = Za(a))
                return b;
            a = [a]
        }
        return Ya(a)
    }
    function cb() {
        return wd(Be)
    }
    function db(a) {
        var b, c = a._a;
        return c && m(a).overflow === -2 && (b = c[be] < 0 || c[be] > 11 ? be : c[ce] < 1 || c[ce] > ea(c[ae], c[be]) ? ce : c[de] < 0 || c[de] > 24 || 24 === c[de] && (0 !== c[ee] || 0 !== c[fe] || 0 !== c[ge]) ? de : c[ee] < 0 || c[ee] > 59 ? ee : c[fe] < 0 || c[fe] > 59 ? fe : c[ge] < 0 || c[ge] > 999 ? ge : -1,
        m(a)._overflowDayOfYear && (b < ae || b > ce) && (b = ce),
        m(a)._overflowWeeks && b === -1 && (b = he),
        m(a)._overflowWeekday && b === -1 && (b = ie),
        m(a).overflow = b),
        a
    }
    // date from iso format
    function eb(a) {
        var b, c, d, e, f, g, h = a._i, i = De.exec(h) || Ee.exec(h);
        if (i) {
            for (m(a).iso = !0,
            b = 0,
            c = Ge.length; b < c; b++)
                if (Ge[b][1].exec(i[1])) {
                    e = Ge[b][0],
                    d = Ge[b][2] !== !1;
                    break
                }
            if (null == e)
                return void (a._isValid = !1);
            if (i[3]) {
                for (b = 0,
                c = He.length; b < c; b++)
                    if (He[b][1].exec(i[3])) {
                        // match[2] should be 'T' or space
                        f = (i[2] || " ") + He[b][0];
                        break
                    }
                if (null == f)
                    return void (a._isValid = !1)
            }
            if (!d && null != f)
                return void (a._isValid = !1);
            if (i[4]) {
                if (!Fe.exec(i[4]))
                    return void (a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""),
            kb(a)
        } else
            a._isValid = !1
    }
    // date from iso format or fallback
    function fb(b) {
        var c = Ie.exec(b._i);
        return null !== c ? void (b._d = new Date(+c[1])) : (eb(b),
        void (b._isValid === !1 && (delete b._isValid,
        a.createFromInputFallback(b))))
    }
    // Pick the first defined of two or three arguments.
    function gb(a, b, c) {
        return null != a ? a : null != b ? b : c
    }
    function hb(b) {
        // hooks is actually the exported moment object
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function ib(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            // Default to current date.
            // * if no year, month, day of month are given, default to today
            // * if day of month is given, default month and year
            // * if month is given, default only year
            // * if year is given, don't default anything
            for (d = hb(a),
            //compute day of the year from weeks and weekdays
            a._w && null == a._a[ce] && null == a._a[be] && jb(a),
            //if the day of the year is set, figure out what it is
            a._dayOfYear && (e = gb(a._a[ae], d[ae]),
            a._dayOfYear > pa(e) && (m(a)._overflowDayOfYear = !0),
            c = ta(e, 0, a._dayOfYear),
            a._a[be] = c.getUTCMonth(),
            a._a[ce] = c.getUTCDate()),
            b = 0; b < 3 && null == a._a[b]; ++b)
                a._a[b] = f[b] = d[b];
            // Zero out whatever was not defaulted, including time
            for (; b < 7; b++)
                a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            // Check for 24:00:00.000
            24 === a._a[de] && 0 === a._a[ee] && 0 === a._a[fe] && 0 === a._a[ge] && (a._nextDay = !0,
            a._a[de] = 0),
            a._d = (a._useUTC ? ta : sa).apply(null, f),
            // Apply timezone offset from input. The actual utcOffset can be changed
            // with parseZone.
            null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
            a._nextDay && (a._a[de] = 24)
        }
    }
    function jb(a) {
        var b, c, d, e, f, g, h, i;
        if (b = a._w,
        null != b.GG || null != b.W || null != b.E)
            f = 1,
            g = 4,
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            c = gb(b.GG, a._a[ae], wa(sb(), 1, 4).year),
            d = gb(b.W, 1),
            e = gb(b.E, 1),
            (e < 1 || e > 7) && (i = !0);
        else {
            f = a._locale._week.dow,
            g = a._locale._week.doy;
            var j = wa(sb(), f, g);
            c = gb(b.gg, a._a[ae], j.year),
            // Default to current week.
            d = gb(b.w, j.week),
            null != b.d ? (// weekday -- low day numbers are considered next week
            e = b.d,
            (e < 0 || e > 6) && (i = !0)) : null != b.e ? (// local weekday -- counting starts from begining of week
            e = b.e + f,
            (b.e < 0 || b.e > 6) && (i = !0)) : // default to begining of week
            e = f
        }
        d < 1 || d > xa(c, f, g) ? m(a)._overflowWeeks = !0 : null != i ? m(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g),
        a._a[ae] = h.year,
        a._dayOfYear = h.dayOfYear)
    }
    // date from string and format string
    function kb(b) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (b._f === a.ISO_8601)
            return void eb(b);
        b._a = [],
        m(b).empty = !0;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var c, d, e, f, g, h = "" + b._i, i = h.length, j = 0;
        for (e = Y(b._f, b._locale).match(Fd) || [],
        c = 0; c < e.length; c++)
            f = e[c],
            d = (h.match($(f, b)) || [])[0],
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            d && (g = h.substr(0, h.indexOf(d)),
            g.length > 0 && m(b).unusedInput.push(g),
            h = h.slice(h.indexOf(d) + d.length),
            j += d.length),
            // don't parse if it's not a known token
            Id[f] ? (d ? m(b).empty = !1 : m(b).unusedTokens.push(f),
            da(f, d, b)) : b._strict && !d && m(b).unusedTokens.push(f);
        // add remaining unparsed input length to the string
        m(b).charsLeftOver = i - j,
        h.length > 0 && m(b).unusedInput.push(h),
        // clear _12h flag if hour is <= 12
        b._a[de] <= 12 && m(b).bigHour === !0 && b._a[de] > 0 && (m(b).bigHour = void 0),
        m(b).parsedDateParts = b._a.slice(0),
        m(b).meridiem = b._meridiem,
        // handle meridiem
        b._a[de] = lb(b._locale, b._a[de], b._meridiem),
        ib(b),
        db(b)
    }
    function lb(a, b, c) {
        var d;
        // Fallback
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c),
        d && b < 12 && (b += 12),
        d || 12 !== b || (b = 0),
        b) : b
    }
    // date from string and array of format strings
    function mb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length)
            return m(a).invalidFormat = !0,
            void (a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++)
            f = 0,
            b = q({}, a),
            null != a._useUTC && (b._useUTC = a._useUTC),
            b._f = a._f[e],
            kb(b),
            n(b) && (// if there is any input that was not parsed add a penalty for that format
            f += m(b).charsLeftOver,
            //or tokens
            f += 10 * m(b).unusedTokens.length,
            m(b).score = f,
            (null == d || f < d) && (d = f,
            c = b));
        j(a, c || b)
    }
    function nb(a) {
        if (!a._d) {
            var b = L(a._i);
            a._a = h([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                return a && parseInt(a, 10)
            }),
            ib(a)
        }
    }
    function ob(a) {
        var b = new r(db(pb(a)));
        // Adding is smart enough around DST
        return b._nextDay && (b.add(1, "d"),
        b._nextDay = void 0),
        b
    }
    function pb(a) {
        var b = a._i
          , d = a._f;
        return a._locale = a._locale || bb(a._l),
        null === b || void 0 === d && "" === b ? o({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)),
        s(b) ? new r(db(b)) : (g(b) ? a._d = b : c(d) ? mb(a) : d ? kb(a) : qb(a),
        n(a) || (a._d = null),
        a))
    }
    function qb(b) {
        var d = b._i;
        void 0 === d ? b._d = new Date(a.now()) : g(d) ? b._d = new Date(d.valueOf()) : "string" == typeof d ? fb(b) : c(d) ? (b._a = h(d.slice(0), function(a) {
            return parseInt(a, 10)
        }),
        ib(b)) : "object" == typeof d ? nb(b) : f(d) ? // from milliseconds
        b._d = new Date(d) : a.createFromInputFallback(b)
    }
    function rb(a, b, f, g, h) {
        var i = {};
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        return f !== !0 && f !== !1 || (g = f,
        f = void 0),
        (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0),
        i._isAMomentObject = !0,
        i._useUTC = i._isUTC = h,
        i._l = f,
        i._i = a,
        i._f = b,
        i._strict = g,
        ob(i)
    }
    function sb(a, b, c, d) {
        return rb(a, b, c, d, !1)
    }
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function tb(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]),
        !b.length)
            return sb();
        for (d = b[0],
        e = 1; e < b.length; ++e)
            b[e].isValid() && !b[e][a](d) || (d = b[e]);
        return d
    }
    // TODO: Use [].sort instead?
    function ub() {
        var a = [].slice.call(arguments, 0);
        return tb("isBefore", a)
    }
    function vb() {
        var a = [].slice.call(arguments, 0);
        return tb("isAfter", a)
    }
    function wb(a) {
        var b = L(a)
          , c = b.year || 0
          , d = b.quarter || 0
          , e = b.month || 0
          , f = b.week || 0
          , g = b.day || 0
          , h = b.hour || 0
          , i = b.minute || 0
          , j = b.second || 0
          , k = b.millisecond || 0;
        // representation for dateAddRemove
        this._milliseconds = +k + 1e3 * j + // 1000
        6e4 * i + // 1000 * 60
        1e3 * h * 60 * 60,
        //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +g + 7 * f,
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +e + 3 * d + 12 * c,
        this._data = {},
        this._locale = bb(),
        this._bubble()
    }
    function xb(a) {
        return a instanceof wb
    }
    function yb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
    }
    // FORMATTING
    function zb(a, b) {
        U(a, 0, 0, function() {
            var a = this.utcOffset()
              , c = "+";
            return a < 0 && (a = -a,
            c = "-"),
            c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
        })
    }
    function Ab(a, b) {
        var c = (b || "").match(a);
        if (null === c)
            return null;
        var d = c[c.length - 1] || []
          , e = (d + "").match(Me) || ["-", 0, 0]
          , f = +(60 * e[1]) + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function Bb(b, c) {
        var d, e;
        // Use low-level api, because this fn is low-level api.
        return c._isUTC ? (d = c.clone(),
        e = (s(b) || g(b) ? b.valueOf() : sb(b).valueOf()) - d.valueOf(),
        d._d.setTime(d._d.valueOf() + e),
        a.updateOffset(d, !1),
        d) : sb(b).local()
    }
    function Cb(a) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function Db(b, c) {
        var d, e = this._offset || 0;
        if (!this.isValid())
            return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (b = Ab(Xd, b),
                null === b)
                    return this
            } else
                Math.abs(b) < 16 && (b = 60 * b);
            return !this._isUTC && c && (d = Cb(this)),
            this._offset = b,
            this._isUTC = !0,
            null != d && this.add(d, "m"),
            e !== b && (!c || this._changeInProgress ? Tb(this, Ob(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            a.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? e : Cb(this)
    }
    function Eb(a, b) {
        return null != a ? ("string" != typeof a && (a = -a),
        this.utcOffset(a, b),
        this) : -this.utcOffset()
    }
    function Fb(a) {
        return this.utcOffset(0, a)
    }
    function Gb(a) {
        return this._isUTC && (this.utcOffset(0, a),
        this._isUTC = !1,
        a && this.subtract(Cb(this), "m")),
        this
    }
    function Hb() {
        if (null != this._tzm)
            this.utcOffset(this._tzm);
        else if ("string" == typeof this._i) {
            var a = Ab(Wd, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
        }
        return this
    }
    function Ib(a) {
        return !!this.isValid() && (a = a ? sb(a).utcOffset() : 0,
        (this.utcOffset() - a) % 60 === 0)
    }
    function Jb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function Kb() {
        if (!p(this._isDSTShifted))
            return this._isDSTShifted;
        var a = {};
        if (q(a, this),
        a = pb(a),
        a._a) {
            var b = a._isUTC ? k(a._a) : sb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted
    }
    function Lb() {
        return !!this.isValid() && !this._isUTC
    }
    function Mb() {
        return !!this.isValid() && this._isUTC
    }
    function Nb() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    function Ob(a, b) {
        var c, d, e, g = a, // matching against regexp is expensive, do it on demand
        h = null;
        // checks for null or undefined
        return xb(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : f(a) ? (g = {},
        b ? g[b] = a : g.milliseconds = a) : (h = Ne.exec(a)) ? (c = "-" === h[1] ? -1 : 1,
        g = {
            y: 0,
            d: u(h[ce]) * c,
            h: u(h[de]) * c,
            m: u(h[ee]) * c,
            s: u(h[fe]) * c,
            ms: u(yb(1e3 * h[ge])) * c
        }) : (h = Oe.exec(a)) ? (c = "-" === h[1] ? -1 : 1,
        g = {
            y: Pb(h[2], c),
            M: Pb(h[3], c),
            w: Pb(h[4], c),
            d: Pb(h[5], c),
            h: Pb(h[6], c),
            m: Pb(h[7], c),
            s: Pb(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from"in g || "to"in g) && (e = Rb(sb(g.from), sb(g.to)),
        g = {},
        g.ms = e.milliseconds,
        g.M = e.months),
        d = new wb(g),
        xb(a) && i(a, "_locale") && (d._locale = a._locale),
        d
    }
    function Pb(a, b) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var c = a && parseFloat(a.replace(",", "."));
        // apply sign while we're at it
        return (isNaN(c) ? 0 : c) * b
    }
    function Qb(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()),
        a.clone().add(c.months, "M").isAfter(b) && --c.months,
        c.milliseconds = +b - +a.clone().add(c.months, "M"),
        c
    }
    function Rb(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Bb(b, a),
        a.isBefore(b) ? c = Qb(a, b) : (c = Qb(b, a),
        c.milliseconds = -c.milliseconds,
        c.months = -c.months),
        c) : {
            milliseconds: 0,
            months: 0
        }
    }
    // TODO: remove 'name' arg after deprecation is removed
    function Sb(a, b) {
        return function(c, d) {
            var e, f;
            //invert the arguments, but complain about it
            return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            f = c,
            c = d,
            d = f),
            c = "string" == typeof c ? +c : c,
            e = Ob(c, d),
            Tb(this, e, a),
            this
        }
    }
    function Tb(b, c, d, e) {
        var f = c._milliseconds
          , g = yb(c._days)
          , h = yb(c._months);
        b.isValid() && (e = null == e || e,
        f && b._d.setTime(b._d.valueOf() + f * d),
        g && Q(b, "Date", P(b, "Date") + g * d),
        h && ja(b, P(b, "Month") + h * d),
        e && a.updateOffset(b, g || h))
    }
    function Ub(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
    }
    function Vb(b, c) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var d = b || sb()
          , e = Bb(d, this).startOf("day")
          , f = a.calendarFormat(this, e) || "sameElse"
          , g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, sb(d)))
    }
    function Wb() {
        return new r(this)
    }
    function Xb(a, b) {
        var c = s(a) ? a : sb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(p(b) ? "millisecond" : b),
        "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
    }
    function Yb(a, b) {
        var c = s(a) ? a : sb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(p(b) ? "millisecond" : b),
        "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
    }
    function Zb(a, b, c, d) {
        return d = d || "()",
        ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    }
    function $b(a, b) {
        var c, d = s(a) ? a : sb(a);
        return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"),
        "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(),
        this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
    }
    function _b(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }
    function ac(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }
    function bc(a, b, c) {
        var d, e, f, g;
        // 1000
        // 1000 * 60
        // 1000 * 60 * 60
        // 1000 * 60 * 60 * 24, negate dst
        // 1000 * 60 * 60 * 24 * 7, negate dst
        return this.isValid() ? (d = Bb(a, this),
        d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()),
        b = K(b),
        "year" === b || "month" === b || "quarter" === b ? (g = cc(this, d),
        "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d,
        g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f),
        c ? g : t(g)) : NaN) : NaN
    }
    function cc(a, b) {
        // difference in months
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
        f = a.clone().add(e, "months");
        //check for negative zero, return zero if negative zero
        // linear across the month
        // linear across the month
        return b - f < 0 ? (c = a.clone().add(e - 1, "months"),
        d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"),
        d = (b - f) / (c - f)),
        -(e + d) || 0
    }
    function dc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function ec() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }
    /**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
    function fc() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var a = "moment"
          , b = "";
        this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        b = "Z");
        var c = "[" + a + '("]'
          , d = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
          , e = "-MM-DD[T]HH:mm:ss.SSS"
          , f = b + '[")]';
        return this.format(c + d + e + f)
    }
    function gc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c)
    }
    function hc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || sb(a).isValid()) ? Ob({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }
    function ic(a) {
        return this.from(sb(), a)
    }
    function jc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || sb(a).isValid()) ? Ob({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }
    function kc(a) {
        return this.to(sb(), a)
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function lc(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = bb(a),
        null != b && (this._locale = b),
        this)
    }
    function mc() {
        return this._locale
    }
    function nc(a) {
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (a = K(a)) {
        case "year":
            this.month(0);
            /* falls through */
        case "quarter":
        case "month":
            this.date(1);
            /* falls through */
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
            /* falls through */
        case "hour":
            this.minutes(0);
            /* falls through */
        case "minute":
            this.seconds(0);
            /* falls through */
        case "second":
            this.milliseconds(0)
        }
        // weeks are a special case
        // quarters are also special
        return "week" === a && this.weekday(0),
        "isoWeek" === a && this.isoWeekday(1),
        "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    function oc(a) {
        // 'date' is an alias for 'day', so it should be considered as such.
        return a = K(a),
        void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"),
        this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
    }
    function pc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    function qc() {
        return Math.floor(this.valueOf() / 1e3)
    }
    function rc() {
        return new Date(this.valueOf())
    }
    function sc() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }
    function tc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }
    function uc() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null
    }
    function vc() {
        return n(this)
    }
    function wc() {
        return j({}, m(this))
    }
    function xc() {
        return m(this).overflow
    }
    function yc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    function zc(a, b) {
        U(0, [a, a.length], 0, b)
    }
    // MOMENTS
    function Ac(a) {
        return Ec.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    function Bc(a) {
        return Ec.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    function Cc() {
        return xa(this.year(), 1, 4)
    }
    function Dc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy)
    }
    function Ec(a, b, c, d, e) {
        var f;
        return null == a ? wa(this, d, e).year : (f = xa(a, d, e),
        b > f && (b = f),
        Fc.call(this, a, b, c, d, e))
    }
    function Fc(a, b, c, d, e) {
        var f = va(a, b, c, d, e)
          , g = ta(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()),
        this.month(g.getUTCMonth()),
        this.date(g.getUTCDate()),
        this
    }
    // MOMENTS
    function Gc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }
    // HELPERS
    // MOMENTS
    function Hc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }
    function Ic(a, b) {
        b[ge] = u(1e3 * ("0." + a))
    }
    // MOMENTS
    function Jc() {
        return this._isUTC ? "UTC" : ""
    }
    function Kc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    function Lc(a) {
        return sb(1e3 * a)
    }
    function Mc() {
        return sb.apply(null, arguments).parseZone()
    }
    function Nc(a) {
        return a
    }
    function Oc(a, b, c, d) {
        var e = bb()
          , f = k().set(d, b);
        return e[c](f, a)
    }
    function Pc(a, b, c) {
        if (f(a) && (b = a,
        a = void 0),
        a = a || "",
        null != b)
            return Oc(a, b, c, "month");
        var d, e = [];
        for (d = 0; d < 12; d++)
            e[d] = Oc(a, d, c, "month");
        return e
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function Qc(a, b, c, d) {
        "boolean" == typeof a ? (f(b) && (c = b,
        b = void 0),
        b = b || "") : (b = a,
        c = b,
        a = !1,
        f(b) && (c = b,
        b = void 0),
        b = b || "");
        var e = bb()
          , g = a ? e._week.dow : 0;
        if (null != c)
            return Oc(b, (c + g) % 7, d, "day");
        var h, i = [];
        for (h = 0; h < 7; h++)
            i[h] = Oc(b, (h + g) % 7, d, "day");
        return i
    }
    function Rc(a, b) {
        return Pc(a, b, "months")
    }
    function Sc(a, b) {
        return Pc(a, b, "monthsShort")
    }
    function Tc(a, b, c) {
        return Qc(a, b, c, "weekdays")
    }
    function Uc(a, b, c) {
        return Qc(a, b, c, "weekdaysShort")
    }
    function Vc(a, b, c) {
        return Qc(a, b, c, "weekdaysMin")
    }
    function Wc() {
        var a = this._data;
        return this._milliseconds = Ze(this._milliseconds),
        this._days = Ze(this._days),
        this._months = Ze(this._months),
        a.milliseconds = Ze(a.milliseconds),
        a.seconds = Ze(a.seconds),
        a.minutes = Ze(a.minutes),
        a.hours = Ze(a.hours),
        a.months = Ze(a.months),
        a.years = Ze(a.years),
        this
    }
    function Xc(a, b, c, d) {
        var e = Ob(b, c);
        return a._milliseconds += d * e._milliseconds,
        a._days += d * e._days,
        a._months += d * e._months,
        a._bubble()
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function Yc(a, b) {
        return Xc(this, a, b, 1)
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function Zc(a, b) {
        return Xc(this, a, b, -1)
    }
    function $c(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a)
    }
    function _c() {
        var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        // convert days to months
        // 12 months -> 1 year
        return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * $c(bd(h) + g),
        g = 0,
        h = 0),
        i.milliseconds = f % 1e3,
        a = t(f / 1e3),
        i.seconds = a % 60,
        b = t(a / 60),
        i.minutes = b % 60,
        c = t(b / 60),
        i.hours = c % 24,
        g += t(c / 24),
        e = t(ad(g)),
        h += e,
        g -= $c(bd(e)),
        d = t(h / 12),
        h %= 12,
        i.days = g,
        i.months = h,
        i.years = d,
        this
    }
    function ad(a) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return 4800 * a / 146097
    }
    function bd(a) {
        // the reverse of daysToMonths
        return 146097 * a / 4800
    }
    function cd(a) {
        var b, c, d = this._milliseconds;
        if (a = K(a),
        "month" === a || "year" === a)
            return b = this._days + d / 864e5,
            c = this._months + ad(b),
            "month" === a ? c : c / 12;
        switch (// handle milliseconds separately because of floating point math errors (issue #1867)
        b = this._days + Math.round(bd(this._months)),
        a) {
        case "week":
            return b / 7 + d / 6048e5;
        case "day":
            return b + d / 864e5;
        case "hour":
            return 24 * b + d / 36e5;
        case "minute":
            return 1440 * b + d / 6e4;
        case "second":
            return 86400 * b + d / 1e3;
            // Math.floor prevents floating point math errors here
        case "millisecond":
            return Math.floor(864e5 * b) + d;
        default:
            throw new Error("Unknown unit " + a)
        }
    }
    // TODO: Use this.as('ms')?
    function dd() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12)
    }
    function ed(a) {
        return function() {
            return this.as(a)
        }
    }
    function fd(a) {
        return a = K(a),
        this[a + "s"]()
    }
    function gd(a) {
        return function() {
            return this._data[a]
        }
    }
    function hd() {
        return t(this.days() / 7)
    }
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function id(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }
    function jd(a, b, c) {
        var d = Ob(a).abs()
          , e = of(d.as("s"))
          , f = of(d.as("m"))
          , g = of(d.as("h"))
          , h = of(d.as("d"))
          , i = of(d.as("M"))
          , j = of(d.as("y"))
          , k = e < pf.s && ["s", e] || f <= 1 && ["m"] || f < pf.m && ["mm", f] || g <= 1 && ["h"] || g < pf.h && ["hh", g] || h <= 1 && ["d"] || h < pf.d && ["dd", h] || i <= 1 && ["M"] || i < pf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
        return k[2] = b,
        k[3] = +a > 0,
        k[4] = c,
        id.apply(null, k)
    }
    // This function allows you to set the rounding function for relative time strings
    function kd(a) {
        return void 0 === a ? of : "function" == typeof a && (of = a,
        !0)
    }
    // This function allows you to set a threshold for relative time strings
    function ld(a, b) {
        return void 0 !== pf[a] && (void 0 === b ? pf[a] : (pf[a] = b,
        !0))
    }
    function md(a) {
        var b = this.localeData()
          , c = jd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)),
        b.postformat(c)
    }
    function nd() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var a, b, c, d = qf(this._milliseconds) / 1e3, e = qf(this._days), f = qf(this._months);
        // 3600 seconds -> 60 minutes -> 1 hour
        a = t(d / 60),
        b = t(a / 60),
        d %= 60,
        a %= 60,
        // 12 months -> 1 year
        c = t(f / 12),
        f %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var g = c
          , h = f
          , i = e
          , j = b
          , k = a
          , l = d
          , m = this.asSeconds();
        return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var od, pd;
    pd = Array.prototype.some ? Array.prototype.some : function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
            if (d in b && a.call(this, b[d], d, b))
                return !0;
        return !1
    }
    ;
    var qd = pd
      , rd = a.momentProperties = []
      , sd = !1
      , td = {};
    a.suppressDeprecationWarnings = !1,
    a.deprecationHandler = null;
    var ud;
    ud = Object.keys ? Object.keys : function(a) {
        var b, c = [];
        for (b in a)
            i(a, b) && c.push(b);
        return c
    }
    ;
    var vd, wd = ud, xd = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, yd = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, zd = "Invalid date", Ad = "%d", Bd = /\d{1,2}/, Cd = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Dd = {}, Ed = {}, Fd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Gd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Hd = {}, Id = {}, Jd = /\d/, Kd = /\d\d/, Ld = /\d{3}/, Md = /\d{4}/, Nd = /[+-]?\d{6}/, Od = /\d\d?/, Pd = /\d\d\d\d?/, Qd = /\d\d\d\d\d\d?/, Rd = /\d{1,3}/, Sd = /\d{1,4}/, Td = /[+-]?\d{1,6}/, Ud = /\d+/, Vd = /[+-]?\d+/, Wd = /Z|[+-]\d\d:?\d\d/gi, Xd = /Z|[+-]\d\d(?::?\d\d)?/gi, Yd = /[+-]?\d+(\.\d{1,3})?/, Zd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, $d = {}, _d = {}, ae = 0, be = 1, ce = 2, de = 3, ee = 4, fe = 5, ge = 6, he = 7, ie = 8;
    vd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
        // I know
        var b;
        for (b = 0; b < this.length; ++b)
            if (this[b] === a)
                return b;
        return -1
    }
    ;
    var je = vd;
    // FORMATTING
    U("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    U("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }),
    U("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }),
    // ALIASES
    J("month", "M"),
    // PRIORITY
    M("month", 8),
    // PARSING
    Z("M", Od),
    Z("MM", Od, Kd),
    Z("MMM", function(a, b) {
        return b.monthsShortRegex(a)
    }),
    Z("MMMM", function(a, b) {
        return b.monthsRegex(a)
    }),
    ba(["M", "MM"], function(a, b) {
        b[be] = u(a) - 1
    }),
    ba(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        // if we didn't find a month name, mark the date as invalid.
        null != e ? b[be] = e : m(c).invalidMonth = a
    });
    // LOCALES
    var ke = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , le = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , me = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , ne = Zd
      , oe = Zd;
    // FORMATTING
    U("Y", 0, 0, function() {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a
    }),
    U(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    U(0, ["YYYY", 4], 0, "year"),
    U(0, ["YYYYY", 5], 0, "year"),
    U(0, ["YYYYYY", 6, !0], 0, "year"),
    // ALIASES
    J("year", "y"),
    // PRIORITIES
    M("year", 1),
    // PARSING
    Z("Y", Vd),
    Z("YY", Od, Kd),
    Z("YYYY", Sd, Md),
    Z("YYYYY", Td, Nd),
    Z("YYYYYY", Td, Nd),
    ba(["YYYYY", "YYYYYY"], ae),
    ba("YYYY", function(b, c) {
        c[ae] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
    }),
    ba("YY", function(b, c) {
        c[ae] = a.parseTwoDigitYear(b)
    }),
    ba("Y", function(a, b) {
        b[ae] = parseInt(a, 10)
    }),
    // HOOKS
    a.parseTwoDigitYear = function(a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3)
    }
    ;
    // MOMENTS
    var pe = O("FullYear", !0);
    // FORMATTING
    U("w", ["ww", 2], "wo", "week"),
    U("W", ["WW", 2], "Wo", "isoWeek"),
    // ALIASES
    J("week", "w"),
    J("isoWeek", "W"),
    // PRIORITIES
    M("week", 5),
    M("isoWeek", 5),
    // PARSING
    Z("w", Od),
    Z("ww", Od, Kd),
    Z("W", Od),
    Z("WW", Od, Kd),
    ca(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = u(a)
    });
    var qe = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6
    };
    // FORMATTING
    U("d", 0, "do", "day"),
    U("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a)
    }),
    U("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    }),
    U("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    }),
    U("e", 0, 0, "weekday"),
    U("E", 0, 0, "isoWeekday"),
    // ALIASES
    J("day", "d"),
    J("weekday", "e"),
    J("isoWeekday", "E"),
    // PRIORITY
    M("day", 11),
    M("weekday", 11),
    M("isoWeekday", 11),
    // PARSING
    Z("d", Od),
    Z("e", Od),
    Z("E", Od),
    Z("dd", function(a, b) {
        return b.weekdaysMinRegex(a)
    }),
    Z("ddd", function(a, b) {
        return b.weekdaysShortRegex(a)
    }),
    Z("dddd", function(a, b) {
        return b.weekdaysRegex(a)
    }),
    ca(["dd", "ddd", "dddd"], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        // if we didn't get a weekday name, mark the date as invalid
        null != e ? b.d = e : m(c).invalidWeekday = a
    }),
    ca(["d", "e", "E"], function(a, b, c, d) {
        b[d] = u(a)
    });
    // LOCALES
    var re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , se = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , te = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , ue = Zd
      , ve = Zd
      , we = Zd;
    U("H", ["HH", 2], 0, "hour"),
    U("h", ["hh", 2], 0, Ra),
    U("k", ["kk", 2], 0, Sa),
    U("hmm", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2)
    }),
    U("hmmss", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
    }),
    U("Hmm", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2)
    }),
    U("Hmmss", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
    }),
    Ta("a", !0),
    Ta("A", !1),
    // ALIASES
    J("hour", "h"),
    // PRIORITY
    M("hour", 13),
    Z("a", Ua),
    Z("A", Ua),
    Z("H", Od),
    Z("h", Od),
    Z("HH", Od, Kd),
    Z("hh", Od, Kd),
    Z("hmm", Pd),
    Z("hmmss", Qd),
    Z("Hmm", Pd),
    Z("Hmmss", Qd),
    ba(["H", "HH"], de),
    ba(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a),
        c._meridiem = a
    }),
    ba(["h", "hh"], function(a, b, c) {
        b[de] = u(a),
        m(c).bigHour = !0
    }),
    ba("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[de] = u(a.substr(0, d)),
        b[ee] = u(a.substr(d)),
        m(c).bigHour = !0
    }),
    ba("hmmss", function(a, b, c) {
        var d = a.length - 4
          , e = a.length - 2;
        b[de] = u(a.substr(0, d)),
        b[ee] = u(a.substr(d, 2)),
        b[fe] = u(a.substr(e)),
        m(c).bigHour = !0
    }),
    ba("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[de] = u(a.substr(0, d)),
        b[ee] = u(a.substr(d))
    }),
    ba("Hmmss", function(a, b, c) {
        var d = a.length - 4
          , e = a.length - 2;
        b[de] = u(a.substr(0, d)),
        b[ee] = u(a.substr(d, 2)),
        b[fe] = u(a.substr(e))
    });
    var xe, ye = /[ap]\.?m?\.?/i, ze = O("Hours", !0), Ae = {
        calendar: xd,
        longDateFormat: yd,
        invalidDate: zd,
        ordinal: Ad,
        ordinalParse: Bd,
        relativeTime: Cd,
        months: le,
        monthsShort: me,
        week: qe,
        weekdays: re,
        weekdaysMin: te,
        weekdaysShort: se,
        meridiemParse: ye
    }, Be = {}, Ce = {}, De = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ee = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Fe = /Z|[+-]\d\d(?::?\d\d)?/, Ge = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], // YYYYMM is NOT allowed by the standard
    ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], He = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Ie = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }),
    // constant that refers to the ISO standard
    a.ISO_8601 = function() {}
    ;
    var Je = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var a = sb.apply(null, arguments);
        return this.isValid() && a.isValid() ? a < this ? this : a : o()
    })
      , Ke = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var a = sb.apply(null, arguments);
        return this.isValid() && a.isValid() ? a > this ? this : a : o()
    })
      , Le = function() {
        return Date.now ? Date.now() : +new Date
    };
    zb("Z", ":"),
    zb("ZZ", ""),
    // PARSING
    Z("Z", Xd),
    Z("ZZ", Xd),
    ba(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0,
        c._tzm = Ab(Xd, a)
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var Me = /([\+\-]|\d\d)/gi;
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    a.updateOffset = function() {}
    ;
    // ASP.NET json date format regex
    var Ne = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
      , Oe = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Ob.fn = wb.prototype;
    var Pe = Sb(1, "add")
      , Qe = Sb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Re = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    // FORMATTING
    U(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    U(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    zc("gggg", "weekYear"),
    zc("ggggg", "weekYear"),
    zc("GGGG", "isoWeekYear"),
    zc("GGGGG", "isoWeekYear"),
    // ALIASES
    J("weekYear", "gg"),
    J("isoWeekYear", "GG"),
    // PRIORITY
    M("weekYear", 1),
    M("isoWeekYear", 1),
    // PARSING
    Z("G", Vd),
    Z("g", Vd),
    Z("GG", Od, Kd),
    Z("gg", Od, Kd),
    Z("GGGG", Sd, Md),
    Z("gggg", Sd, Md),
    Z("GGGGG", Td, Nd),
    Z("ggggg", Td, Nd),
    ca(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = u(a)
    }),
    ca(["gg", "GG"], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }),
    // FORMATTING
    U("Q", 0, "Qo", "quarter"),
    // ALIASES
    J("quarter", "Q"),
    // PRIORITY
    M("quarter", 7),
    // PARSING
    Z("Q", Jd),
    ba("Q", function(a, b) {
        b[be] = 3 * (u(a) - 1)
    }),
    // FORMATTING
    U("D", ["DD", 2], "Do", "date"),
    // ALIASES
    J("date", "D"),
    // PRIOROITY
    M("date", 9),
    // PARSING
    Z("D", Od),
    Z("DD", Od, Kd),
    Z("Do", function(a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient
    }),
    ba(["D", "DD"], ce),
    ba("Do", function(a, b) {
        b[ce] = u(a.match(Od)[0], 10)
    });
    // MOMENTS
    var Se = O("Date", !0);
    // FORMATTING
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    // ALIASES
    J("dayOfYear", "DDD"),
    // PRIORITY
    M("dayOfYear", 4),
    // PARSING
    Z("DDD", Rd),
    Z("DDDD", Ld),
    ba(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = u(a)
    }),
    // FORMATTING
    U("m", ["mm", 2], 0, "minute"),
    // ALIASES
    J("minute", "m"),
    // PRIORITY
    M("minute", 14),
    // PARSING
    Z("m", Od),
    Z("mm", Od, Kd),
    ba(["m", "mm"], ee);
    // MOMENTS
    var Te = O("Minutes", !1);
    // FORMATTING
    U("s", ["ss", 2], 0, "second"),
    // ALIASES
    J("second", "s"),
    // PRIORITY
    M("second", 15),
    // PARSING
    Z("s", Od),
    Z("ss", Od, Kd),
    ba(["s", "ss"], fe);
    // MOMENTS
    var Ue = O("Seconds", !1);
    // FORMATTING
    U("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    U(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    U(0, ["SSS", 3], 0, "millisecond"),
    U(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    U(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    U(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    U(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    U(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    U(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    // ALIASES
    J("millisecond", "ms"),
    // PRIORITY
    M("millisecond", 16),
    // PARSING
    Z("S", Rd, Jd),
    Z("SS", Rd, Kd),
    Z("SSS", Rd, Ld);
    var Ve;
    for (Ve = "SSSS"; Ve.length <= 9; Ve += "S")
        Z(Ve, Ud);
    for (Ve = "S"; Ve.length <= 9; Ve += "S")
        ba(Ve, Ic);
    // MOMENTS
    var We = O("Milliseconds", !1);
    // FORMATTING
    U("z", 0, 0, "zoneAbbr"),
    U("zz", 0, 0, "zoneName");
    var Xe = r.prototype;
    Xe.add = Pe,
    Xe.calendar = Vb,
    Xe.clone = Wb,
    Xe.diff = bc,
    Xe.endOf = oc,
    Xe.format = gc,
    Xe.from = hc,
    Xe.fromNow = ic,
    Xe.to = jc,
    Xe.toNow = kc,
    Xe.get = R,
    Xe.invalidAt = xc,
    Xe.isAfter = Xb,
    Xe.isBefore = Yb,
    Xe.isBetween = Zb,
    Xe.isSame = $b,
    Xe.isSameOrAfter = _b,
    Xe.isSameOrBefore = ac,
    Xe.isValid = vc,
    Xe.lang = Re,
    Xe.locale = lc,
    Xe.localeData = mc,
    Xe.max = Ke,
    Xe.min = Je,
    Xe.parsingFlags = wc,
    Xe.set = S,
    Xe.startOf = nc,
    Xe.subtract = Qe,
    Xe.toArray = sc,
    Xe.toObject = tc,
    Xe.toDate = rc,
    Xe.toISOString = ec,
    Xe.inspect = fc,
    Xe.toJSON = uc,
    Xe.toString = dc,
    Xe.unix = qc,
    Xe.valueOf = pc,
    Xe.creationData = yc,
    // Year
    Xe.year = pe,
    Xe.isLeapYear = ra,
    // Week Year
    Xe.weekYear = Ac,
    Xe.isoWeekYear = Bc,
    // Quarter
    Xe.quarter = Xe.quarters = Gc,
    // Month
    Xe.month = ka,
    Xe.daysInMonth = la,
    // Week
    Xe.week = Xe.weeks = Ba,
    Xe.isoWeek = Xe.isoWeeks = Ca,
    Xe.weeksInYear = Dc,
    Xe.isoWeeksInYear = Cc,
    // Day
    Xe.date = Se,
    Xe.day = Xe.days = Ka,
    Xe.weekday = La,
    Xe.isoWeekday = Ma,
    Xe.dayOfYear = Hc,
    // Hour
    Xe.hour = Xe.hours = ze,
    // Minute
    Xe.minute = Xe.minutes = Te,
    // Second
    Xe.second = Xe.seconds = Ue,
    // Millisecond
    Xe.millisecond = Xe.milliseconds = We,
    // Offset
    Xe.utcOffset = Db,
    Xe.utc = Fb,
    Xe.local = Gb,
    Xe.parseZone = Hb,
    Xe.hasAlignedHourOffset = Ib,
    Xe.isDST = Jb,
    Xe.isLocal = Lb,
    Xe.isUtcOffset = Mb,
    Xe.isUtc = Nb,
    Xe.isUTC = Nb,
    // Timezone
    Xe.zoneAbbr = Jc,
    Xe.zoneName = Kc,
    // Deprecations
    Xe.dates = x("dates accessor is deprecated. Use date instead.", Se),
    Xe.months = x("months accessor is deprecated. Use month instead", ka),
    Xe.years = x("years accessor is deprecated. Use year instead", pe),
    Xe.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Eb),
    Xe.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Kb);
    var Ye = C.prototype;
    Ye.calendar = D,
    Ye.longDateFormat = E,
    Ye.invalidDate = F,
    Ye.ordinal = G,
    Ye.preparse = Nc,
    Ye.postformat = Nc,
    Ye.relativeTime = H,
    Ye.pastFuture = I,
    Ye.set = A,
    // Month
    Ye.months = fa,
    Ye.monthsShort = ga,
    Ye.monthsParse = ia,
    Ye.monthsRegex = na,
    Ye.monthsShortRegex = ma,
    // Week
    Ye.week = ya,
    Ye.firstDayOfYear = Aa,
    Ye.firstDayOfWeek = za,
    // Day of Week
    Ye.weekdays = Fa,
    Ye.weekdaysMin = Ha,
    Ye.weekdaysShort = Ga,
    Ye.weekdaysParse = Ja,
    Ye.weekdaysRegex = Na,
    Ye.weekdaysShortRegex = Oa,
    Ye.weekdaysMinRegex = Pa,
    // Hours
    Ye.isPM = Va,
    Ye.meridiem = Wa,
    $a("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10
              , c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }),
    // Side effect imports
    a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a),
    a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
    var Ze = Math.abs
      , $e = ed("ms")
      , _e = ed("s")
      , af = ed("m")
      , bf = ed("h")
      , cf = ed("d")
      , df = ed("w")
      , ef = ed("M")
      , ff = ed("y")
      , gf = gd("milliseconds")
      , hf = gd("seconds")
      , jf = gd("minutes")
      , kf = gd("hours")
      , lf = gd("days")
      , mf = gd("months")
      , nf = gd("years")
      , of = Math.round
      , pf = {
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month
        M: 11
    }
      , qf = Math.abs
      , rf = wb.prototype;
    // Deprecations
    // Side effect imports
    // FORMATTING
    // PARSING
    // Side effect imports
    return rf.abs = Wc,
    rf.add = Yc,
    rf.subtract = Zc,
    rf.as = cd,
    rf.asMilliseconds = $e,
    rf.asSeconds = _e,
    rf.asMinutes = af,
    rf.asHours = bf,
    rf.asDays = cf,
    rf.asWeeks = df,
    rf.asMonths = ef,
    rf.asYears = ff,
    rf.valueOf = dd,
    rf._bubble = _c,
    rf.get = fd,
    rf.milliseconds = gf,
    rf.seconds = hf,
    rf.minutes = jf,
    rf.hours = kf,
    rf.days = lf,
    rf.weeks = hd,
    rf.months = mf,
    rf.years = nf,
    rf.humanize = md,
    rf.toISOString = nd,
    rf.toString = nd,
    rf.toJSON = nd,
    rf.locale = lc,
    rf.localeData = mc,
    rf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", nd),
    rf.lang = Re,
    U("X", 0, 0, "unix"),
    U("x", 0, 0, "valueOf"),
    Z("x", Vd),
    Z("X", Yd),
    ba("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }),
    ba("x", function(a, b, c) {
        c._d = new Date(u(a))
    }),
    a.version = "2.17.0",
    b(sb),
    a.fn = Xe,
    a.min = ub,
    a.max = vb,
    a.now = Le,
    a.utc = k,
    a.unix = Lc,
    a.months = Rc,
    a.isDate = g,
    a.locale = $a,
    a.invalid = o,
    a.duration = Ob,
    a.isMoment = s,
    a.weekdays = Tc,
    a.parseZone = Mc,
    a.localeData = bb,
    a.isDuration = xb,
    a.monthsShort = Sc,
    a.weekdaysMin = Vc,
    a.defineLocale = _a,
    a.updateLocale = ab,
    a.locales = cb,
    a.weekdaysShort = Uc,
    a.normalizeUnits = K,
    a.relativeTimeRounding = kd,
    a.relativeTimeThreshold = ld,
    a.calendarFormat = Ub,
    a.prototype = Xe,
    a
});
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs = saveAs || function(e) {
    "use strict";
    if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
        var t = e.document
          , n = function() {
            return e.URL || e.webkitURL || e
        }
          , o = t.createElementNS("http://www.w3.org/1999/xhtml", "a")
          , r = "download"in o
          , i = function(e) {
            var t = new MouseEvent("click");
            e.dispatchEvent(t)
        }
          , a = e.webkitRequestFileSystem
          , c = e.requestFileSystem || a || e.mozRequestFileSystem
          , u = function(t) {
            (e.setImmediate || e.setTimeout)(function() {
                throw t
            }, 0)
        }
          , f = "application/octet-stream"
          , s = 0
          , d = 500
          , l = function(t) {
            var o = function() {
                "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
            };
            e.chrome ? o() : setTimeout(o, d)
        }
          , v = function(e, t, n) {
            t = [].concat(t);
            for (var o = t.length; o--; ) {
                var r = e["on" + t[o]];
                if ("function" == typeof r)
                    try {
                        r.call(e, n || e)
                    } catch (i) {
                        u(i)
                    }
            }
        }
          , p = function(e) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e],{
                type: e.type
            }) : e
        }
          , w = function(t, u, d) {
            d || (t = p(t));
            var w, y, m, S = this, h = t.type, O = !1, R = function() {
                v(S, "writestart progress write writeend".split(" "))
            }, b = function() {
                if ((O || !w) && (w = n().createObjectURL(t)),
                y)
                    y.location.href = w;
                else {
                    var o = e.open(w, "_blank");
                    void 0 == o && "undefined" != typeof safari && (e.location.href = w)
                }
                S.readyState = S.DONE,
                R(),
                l(w)
            }, g = function(e) {
                return function() {
                    return S.readyState !== S.DONE ? e.apply(this, arguments) : void 0
                }
            }, E = {
                create: !0,
                exclusive: !1
            };
            return S.readyState = S.INIT,
            u || (u = "download"),
            r ? (w = n().createObjectURL(t),
            o.href = w,
            o.download = u,
            void setTimeout(function() {
                i(o),
                R(),
                l(w),
                S.readyState = S.DONE
            })) : (e.chrome && h && h !== f && (m = t.slice || t.webkitSlice,
            t = m.call(t, 0, t.size, f),
            O = !0),
            a && "download" !== u && (u += ".download"),
            (h === f || a) && (y = e),
            c ? (s += t.size,
            void c(e.TEMPORARY, s, g(function(e) {
                e.root.getDirectory("saved", E, g(function(e) {
                    var n = function() {
                        e.getFile(u, E, g(function(e) {
                            e.createWriter(g(function(n) {
                                n.onwriteend = function(t) {
                                    y.location.href = e.toURL(),
                                    S.readyState = S.DONE,
                                    v(S, "writeend", t),
                                    l(e)
                                }
                                ,
                                n.onerror = function() {
                                    var e = n.error;
                                    e.code !== e.ABORT_ERR && b()
                                }
                                ,
                                "writestart progress write abort".split(" ").forEach(function(e) {
                                    n["on" + e] = S["on" + e]
                                }),
                                n.write(t),
                                S.abort = function() {
                                    n.abort(),
                                    S.readyState = S.DONE
                                }
                                ,
                                S.readyState = S.WRITING
                            }), b)
                        }), b)
                    };
                    e.getFile(u, {
                        create: !1
                    }, g(function(e) {
                        e.remove(),
                        n()
                    }), g(function(e) {
                        e.code === e.NOT_FOUND_ERR ? n() : b()
                    }))
                }), b)
            }), b)) : void b())
        }
          , y = w.prototype
          , m = function(e, t, n) {
            return new w(e,t,n)
        };
        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
            return n || (e = p(e)),
            navigator.msSaveOrOpenBlob(e, t || "download")
        }
        : (y.abort = function() {
            var e = this;
            e.readyState = e.DONE,
            v(e, "abort")
        }
        ,
        y.readyState = y.INIT = 0,
        y.WRITING = 1,
        y.DONE = 2,
        y.error = y.onwritestart = y.onprogress = y.onwrite = y.onabort = y.onerror = y.onwriteend = null,
        m)
    }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null != define.amd && define([], function() {
    return saveAs
});
/*! markdown-it 7.0.1 https://github.com//markdown-it/markdown-it @license MIT */
!function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var r;
        r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        r.markdownit = e()
    }
}(function() {
    var e;
    return function e(r, t, n) {
        function s(i, a) {
            if (!t[i]) {
                if (!r[i]) {
                    var c = "function" == typeof require && require;
                    if (!a && c)
                        return c(i, !0);
                    if (o)
                        return o(i, !0);
                    var l = new Error("Cannot find module '" + i + "'");
                    throw l.code = "MODULE_NOT_FOUND",
                    l
                }
                var u = t[i] = {
                    exports: {}
                };
                r[i][0].call(u.exports, function(e) {
                    var t = r[i][1][e];
                    return s(t ? t : e)
                }, u, u.exports, e, r, t, n)
            }
            return t[i].exports
        }
        for (var o = "function" == typeof require && require, i = 0; i < n.length; i++)
            s(n[i]);
        return s
    }({
        1: [function(e, r, t) {
            "use strict";
            r.exports = e("entities/maps/entities.json")
        }
        , {
            "entities/maps/entities.json": 52
        }],
        2: [function(e, r, t) {
            "use strict";
            r.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
        }
        , {}],
        3: [function(e, r, t) {
            "use strict";
            var n = "[a-zA-Z_:][a-zA-Z0-9:._-]*"
              , s = "[^\"'=<>`\\x00-\\x20]+"
              , o = "'[^']*'"
              , i = '"[^"]*"'
              , a = "(?:" + s + "|" + o + "|" + i + ")"
              , c = "(?:\\s+" + n + "(?:\\s*=\\s*" + a + ")?)"
              , l = "<[A-Za-z][A-Za-z0-9\\-]*" + c + "*\\s*\\/?>"
              , u = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>"
              , p = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->"
              , h = "<[?].*?[?]>"
              , f = "<![A-Z]+\\s+[^>]*>"
              , d = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
              , m = new RegExp("^(?:" + l + "|" + u + "|" + p + "|" + h + "|" + f + "|" + d + ")")
              , _ = new RegExp("^(?:" + l + "|" + u + ")");
            r.exports.HTML_TAG_RE = m,
            r.exports.HTML_OPEN_CLOSE_TAG_RE = _
        }
        , {}],
        4: [function(e, r, t) {
            "use strict";
            function n(e) {
                return Object.prototype.toString.call(e)
            }
            function s(e) {
                return "[object String]" === n(e)
            }
            function o(e, r) {
                return y.call(e, r)
            }
            function i(e) {
                var r = Array.prototype.slice.call(arguments, 1);
                return r.forEach(function(r) {
                    if (r) {
                        if ("object" != typeof r)
                            throw new TypeError(r + "must be object");
                        Object.keys(r).forEach(function(t) {
                            e[t] = r[t]
                        })
                    }
                }),
                e
            }
            function a(e, r, t) {
                return [].concat(e.slice(0, r), t, e.slice(r + 1))
            }
            function c(e) {
                return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 !== (65535 & e) && 65534 !== (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))))
            }
            function l(e) {
                if (e > 65535) {
                    e -= 65536;
                    var r = 55296 + (e >> 10)
                      , t = 56320 + (1023 & e);
                    return String.fromCharCode(r, t)
                }
                return String.fromCharCode(e)
            }
            function u(e, r) {
                var t = 0;
                return o(D, r) ? D[r] : 35 === r.charCodeAt(0) && w.test(r) && (t = "x" === r[1].toLowerCase() ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10),
                c(t)) ? l(t) : e
            }
            function p(e) {
                return e.indexOf("\\") < 0 ? e : e.replace(x, "$1")
            }
            function h(e) {
                return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(A, function(e, r, t) {
                    return r ? r : u(e, t)
                })
            }
            function f(e) {
                return S[e]
            }
            function d(e) {
                return q.test(e) ? e.replace(E, f) : e
            }
            function m(e) {
                return e.replace(F, "\\$&")
            }
            function _(e) {
                switch (e) {
                case 9:
                case 32:
                    return !0
                }
                return !1
            }
            function g(e) {
                if (e >= 8192 && e <= 8202)
                    return !0;
                switch (e) {
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 32:
                case 160:
                case 5760:
                case 8239:
                case 8287:
                case 12288:
                    return !0
                }
                return !1
            }
            function k(e) {
                return z.test(e)
            }
            function b(e) {
                switch (e) {
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 123:
                case 124:
                case 125:
                case 126:
                    return !0;
                default:
                    return !1
                }
            }
            function v(e) {
                return e.trim().replace(/\s+/g, " ").toUpperCase()
            }
            var y = Object.prototype.hasOwnProperty
              , x = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g
              , C = /&([a-z#][a-z0-9]{1,31});/gi
              , A = new RegExp(x.source + "|" + C.source,"gi")
              , w = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i
              , D = e("./entities")
              , q = /[&<>"]/
              , E = /[&<>"]/g
              , S = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            }
              , F = /[.?*+^$[\]\\(){}|-]/g
              , z = e("uc.micro/categories/P/regex");
            t.lib = {},
            t.lib.mdurl = e("mdurl"),
            t.lib.ucmicro = e("uc.micro"),
            t.assign = i,
            t.isString = s,
            t.has = o,
            t.unescapeMd = p,
            t.unescapeAll = h,
            t.isValidEntityCode = c,
            t.fromCodePoint = l,
            t.escapeHtml = d,
            t.arrayReplaceAt = a,
            t.isSpace = _,
            t.isWhiteSpace = g,
            t.isMdAsciiPunct = b,
            t.isPunctChar = k,
            t.escapeRE = m,
            t.normalizeReference = v
        }
        , {
            "./entities": 1,
            mdurl: 58,
            "uc.micro": 65,
            "uc.micro/categories/P/regex": 63
        }],
        5: [function(e, r, t) {
            "use strict";
            t.parseLinkLabel = e("./parse_link_label"),
            t.parseLinkDestination = e("./parse_link_destination"),
            t.parseLinkTitle = e("./parse_link_title")
        }
        , {
            "./parse_link_destination": 6,
            "./parse_link_label": 7,
            "./parse_link_title": 8
        }],
        6: [function(e, r, t) {
            "use strict";
            var n = e("../common/utils").isSpace
              , s = e("../common/utils").unescapeAll;
            r.exports = function(e, r, t) {
                var o, i, a = 0, c = r, l = {
                    ok: !1,
                    pos: 0,
                    lines: 0,
                    str: ""
                };
                if (60 === e.charCodeAt(r)) {
                    for (r++; r < t; ) {
                        if (o = e.charCodeAt(r),
                        10 === o || n(o))
                            return l;
                        if (62 === o)
                            return l.pos = r + 1,
                            l.str = s(e.slice(c + 1, r)),
                            l.ok = !0,
                            l;
                        92 === o && r + 1 < t ? r += 2 : r++
                    }
                    return l
                }
                for (i = 0; r < t && (o = e.charCodeAt(r),
                32 !== o) && !(o < 32 || 127 === o); )
                    if (92 === o && r + 1 < t)
                        r += 2;
                    else {
                        if (40 === o && (i++,
                        i > 1))
                            break;
                        if (41 === o && (i--,
                        i < 0))
                            break;
                        r++
                    }
                return c === r ? l : (l.str = s(e.slice(c, r)),
                l.lines = a,
                l.pos = r,
                l.ok = !0,
                l)
            }
        }
        , {
            "../common/utils": 4
        }],
        7: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t) {
                var n, s, o, i, a = -1, c = e.posMax, l = e.pos;
                for (e.pos = r + 1,
                n = 1; e.pos < c; ) {
                    if (o = e.src.charCodeAt(e.pos),
                    93 === o && (n--,
                    0 === n)) {
                        s = !0;
                        break
                    }
                    if (i = e.pos,
                    e.md.inline.skipToken(e),
                    91 === o)
                        if (i === e.pos - 1)
                            n++;
                        else if (t)
                            return e.pos = l,
                            -1
                }
                return s && (a = e.pos),
                e.pos = l,
                a
            }
        }
        , {}],
        8: [function(e, r, t) {
            "use strict";
            var n = e("../common/utils").unescapeAll;
            r.exports = function(e, r, t) {
                var s, o, i = 0, a = r, c = {
                    ok: !1,
                    pos: 0,
                    lines: 0,
                    str: ""
                };
                if (r >= t)
                    return c;
                if (o = e.charCodeAt(r),
                34 !== o && 39 !== o && 40 !== o)
                    return c;
                for (r++,
                40 === o && (o = 41); r < t; ) {
                    if (s = e.charCodeAt(r),
                    s === o)
                        return c.pos = r + 1,
                        c.lines = i,
                        c.str = n(e.slice(a + 1, r)),
                        c.ok = !0,
                        c;
                    10 === s ? i++ : 92 === s && r + 1 < t && (r++,
                    10 === e.charCodeAt(r) && i++),
                    r++
                }
                return c
            }
        }
        , {
            "../common/utils": 4
        }],
        9: [function(e, r, t) {
            "use strict";
            function n(e) {
                var r = e.trim().toLowerCase();
                return !g.test(r) || !!k.test(r)
            }
            function s(e) {
                var r = d.parse(e, !0);
                if (r.hostname && (!r.protocol || b.indexOf(r.protocol) >= 0))
                    try {
                        r.hostname = m.toASCII(r.hostname)
                    } catch (e) {}
                return d.encode(d.format(r))
            }
            function o(e) {
                var r = d.parse(e, !0);
                if (r.hostname && (!r.protocol || b.indexOf(r.protocol) >= 0))
                    try {
                        r.hostname = m.toUnicode(r.hostname)
                    } catch (e) {}
                return d.decode(d.format(r))
            }
            function i(e, r) {
                return this instanceof i ? (r || a.isString(e) || (r = e || {},
                e = "default"),
                this.inline = new h,
                this.block = new p,
                this.core = new u,
                this.renderer = new l,
                this.linkify = new f,
                this.validateLink = n,
                this.normalizeLink = s,
                this.normalizeLinkText = o,
                this.utils = a,
                this.helpers = c,
                this.options = {},
                this.configure(e),
                void (r && this.set(r))) : new i(e,r)
            }
            var a = e("./common/utils")
              , c = e("./helpers")
              , l = e("./renderer")
              , u = e("./parser_core")
              , p = e("./parser_block")
              , h = e("./parser_inline")
              , f = e("linkify-it")
              , d = e("mdurl")
              , m = e("punycode")
              , _ = {
                default: e("./presets/default"),
                zero: e("./presets/zero"),
                commonmark: e("./presets/commonmark")
            }
              , g = /^(vbscript|javascript|file|data):/
              , k = /^data:image\/(gif|png|jpeg|webp);/
              , b = ["http:", "https:", "mailto:"];
            i.prototype.set = function(e) {
                return a.assign(this.options, e),
                this
            }
            ,
            i.prototype.configure = function(e) {
                var r, t = this;
                if (a.isString(e) && (r = e,
                e = _[r],
                !e))
                    throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
                if (!e)
                    throw new Error("Wrong `markdown-it` preset, can't be empty");
                return e.options && t.set(e.options),
                e.components && Object.keys(e.components).forEach(function(r) {
                    e.components[r].rules && t[r].ruler.enableOnly(e.components[r].rules),
                    e.components[r].rules2 && t[r].ruler2.enableOnly(e.components[r].rules2)
                }),
                this
            }
            ,
            i.prototype.enable = function(e, r) {
                var t = [];
                Array.isArray(e) || (e = [e]),
                ["core", "block", "inline"].forEach(function(r) {
                    t = t.concat(this[r].ruler.enable(e, !0))
                }, this),
                t = t.concat(this.inline.ruler2.enable(e, !0));
                var n = e.filter(function(e) {
                    return t.indexOf(e) < 0
                });
                if (n.length && !r)
                    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
                return this
            }
            ,
            i.prototype.disable = function(e, r) {
                var t = [];
                Array.isArray(e) || (e = [e]),
                ["core", "block", "inline"].forEach(function(r) {
                    t = t.concat(this[r].ruler.disable(e, !0))
                }, this),
                t = t.concat(this.inline.ruler2.disable(e, !0));
                var n = e.filter(function(e) {
                    return t.indexOf(e) < 0
                });
                if (n.length && !r)
                    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
                return this
            }
            ,
            i.prototype.use = function(e) {
                var r = [this].concat(Array.prototype.slice.call(arguments, 1));
                return e.apply(e, r),
                this
            }
            ,
            i.prototype.parse = function(e, r) {
                var t = new this.core.State(e,this,r);
                return this.core.process(t),
                t.tokens
            }
            ,
            i.prototype.render = function(e, r) {
                return r = r || {},
                this.renderer.render(this.parse(e, r), this.options, r)
            }
            ,
            i.prototype.parseInline = function(e, r) {
                var t = new this.core.State(e,this,r);
                return t.inlineMode = !0,
                this.core.process(t),
                t.tokens
            }
            ,
            i.prototype.renderInline = function(e, r) {
                return r = r || {},
                this.renderer.render(this.parseInline(e, r), this.options, r)
            }
            ,
            r.exports = i
        }
        , {
            "./common/utils": 4,
            "./helpers": 5,
            "./parser_block": 10,
            "./parser_core": 11,
            "./parser_inline": 12,
            "./presets/commonmark": 13,
            "./presets/default": 14,
            "./presets/zero": 15,
            "./renderer": 16,
            "linkify-it": 53,
            mdurl: 58,
            punycode: 60
        }],
        10: [function(e, r, t) {
            "use strict";
            function n() {
                this.ruler = new s;
                for (var e = 0; e < o.length; e++)
                    this.ruler.push(o[e][0], o[e][1], {
                        alt: (o[e][2] || []).slice()
                    })
            }
            var s = e("./ruler")
              , o = [["table", e("./rules_block/table"), ["paragraph", "reference"]], ["code", e("./rules_block/code")], ["fence", e("./rules_block/fence"), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", e("./rules_block/blockquote"), ["paragraph", "reference", "list"]], ["hr", e("./rules_block/hr"), ["paragraph", "reference", "blockquote", "list"]], ["list", e("./rules_block/list"), ["paragraph", "reference", "blockquote"]], ["reference", e("./rules_block/reference")], ["heading", e("./rules_block/heading"), ["paragraph", "reference", "blockquote"]], ["lheading", e("./rules_block/lheading")], ["html_block", e("./rules_block/html_block"), ["paragraph", "reference", "blockquote"]], ["paragraph", e("./rules_block/paragraph")]];
            n.prototype.tokenize = function(e, r, t) {
                for (var n, s, o = this.ruler.getRules(""), i = o.length, a = r, c = !1, l = e.md.options.maxNesting; a < t && (e.line = a = e.skipEmptyLines(a),
                !(a >= t)) && !(e.sCount[a] < e.blkIndent); ) {
                    if (e.level >= l) {
                        e.line = t;
                        break
                    }
                    for (s = 0; s < i && !(n = o[s](e, a, t, !1)); s++)
                        ;
                    if (e.tight = !c,
                    e.isEmpty(e.line - 1) && (c = !0),
                    a = e.line,
                    a < t && e.isEmpty(a)) {
                        if (c = !0,
                        a++,
                        a < t && "list" === e.parentType && e.isEmpty(a))
                            break;
                        e.line = a
                    }
                }
            }
            ,
            n.prototype.parse = function(e, r, t, n) {
                var s;
                e && (s = new this.State(e,r,t,n),
                this.tokenize(s, s.line, s.lineMax))
            }
            ,
            n.prototype.State = e("./rules_block/state_block"),
            r.exports = n
        }
        , {
            "./ruler": 17,
            "./rules_block/blockquote": 18,
            "./rules_block/code": 19,
            "./rules_block/fence": 20,
            "./rules_block/heading": 21,
            "./rules_block/hr": 22,
            "./rules_block/html_block": 23,
            "./rules_block/lheading": 24,
            "./rules_block/list": 25,
            "./rules_block/paragraph": 26,
            "./rules_block/reference": 27,
            "./rules_block/state_block": 28,
            "./rules_block/table": 29
        }],
        11: [function(e, r, t) {
            "use strict";
            function n() {
                this.ruler = new s;
                for (var e = 0; e < o.length; e++)
                    this.ruler.push(o[e][0], o[e][1])
            }
            var s = e("./ruler")
              , o = [["normalize", e("./rules_core/normalize")], ["block", e("./rules_core/block")], ["inline", e("./rules_core/inline")], ["linkify", e("./rules_core/linkify")], ["replacements", e("./rules_core/replacements")], ["smartquotes", e("./rules_core/smartquotes")]];
            n.prototype.process = function(e) {
                var r, t, n;
                for (n = this.ruler.getRules(""),
                r = 0,
                t = n.length; r < t; r++)
                    n[r](e)
            }
            ,
            n.prototype.State = e("./rules_core/state_core"),
            r.exports = n
        }
        , {
            "./ruler": 17,
            "./rules_core/block": 30,
            "./rules_core/inline": 31,
            "./rules_core/linkify": 32,
            "./rules_core/normalize": 33,
            "./rules_core/replacements": 34,
            "./rules_core/smartquotes": 35,
            "./rules_core/state_core": 36
        }],
        12: [function(e, r, t) {
            "use strict";
            function n() {
                var e;
                for (this.ruler = new s,
                e = 0; e < o.length; e++)
                    this.ruler.push(o[e][0], o[e][1]);
                for (this.ruler2 = new s,
                e = 0; e < i.length; e++)
                    this.ruler2.push(i[e][0], i[e][1])
            }
            var s = e("./ruler")
              , o = [["text", e("./rules_inline/text")], ["newline", e("./rules_inline/newline")], ["escape", e("./rules_inline/escape")], ["backticks", e("./rules_inline/backticks")], ["strikethrough", e("./rules_inline/strikethrough").tokenize], ["emphasis", e("./rules_inline/emphasis").tokenize], ["link", e("./rules_inline/link")], ["image", e("./rules_inline/image")], ["autolink", e("./rules_inline/autolink")], ["html_inline", e("./rules_inline/html_inline")], ["entity", e("./rules_inline/entity")]]
              , i = [["balance_pairs", e("./rules_inline/balance_pairs")], ["strikethrough", e("./rules_inline/strikethrough").postProcess], ["emphasis", e("./rules_inline/emphasis").postProcess], ["text_collapse", e("./rules_inline/text_collapse")]];
            n.prototype.skipToken = function(e) {
                var r, t, n = e.pos, s = this.ruler.getRules(""), o = s.length, i = e.md.options.maxNesting, a = e.cache;
                if ("undefined" != typeof a[n])
                    return void (e.pos = a[n]);
                if (e.level < i)
                    for (t = 0; t < o && (e.level++,
                    r = s[t](e, !0),
                    e.level--,
                    !r); t++)
                        ;
                else
                    e.pos = e.posMax;
                r || e.pos++,
                a[n] = e.pos
            }
            ,
            n.prototype.tokenize = function(e) {
                for (var r, t, n = this.ruler.getRules(""), s = n.length, o = e.posMax, i = e.md.options.maxNesting; e.pos < o; ) {
                    if (e.level < i)
                        for (t = 0; t < s && !(r = n[t](e, !1)); t++)
                            ;
                    if (r) {
                        if (e.pos >= o)
                            break
                    } else
                        e.pending += e.src[e.pos++]
                }
                e.pending && e.pushPending()
            }
            ,
            n.prototype.parse = function(e, r, t, n) {
                var s, o, i, a = new this.State(e,r,t,n);
                for (this.tokenize(a),
                o = this.ruler2.getRules(""),
                i = o.length,
                s = 0; s < i; s++)
                    o[s](a)
            }
            ,
            n.prototype.State = e("./rules_inline/state_inline"),
            r.exports = n
        }
        , {
            "./ruler": 17,
            "./rules_inline/autolink": 37,
            "./rules_inline/backticks": 38,
            "./rules_inline/balance_pairs": 39,
            "./rules_inline/emphasis": 40,
            "./rules_inline/entity": 41,
            "./rules_inline/escape": 42,
            "./rules_inline/html_inline": 43,
            "./rules_inline/image": 44,
            "./rules_inline/link": 45,
            "./rules_inline/newline": 46,
            "./rules_inline/state_inline": 47,
            "./rules_inline/strikethrough": 48,
            "./rules_inline/text": 49,
            "./rules_inline/text_collapse": 50
        }],
        13: [function(e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !0,
                    xhtmlOut: !0,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "\u201c\u201d\u2018\u2019",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ["normalize", "block", "inline"]
                    },
                    block: {
                        rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
                    },
                    inline: {
                        rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                        rules2: ["balance_pairs", "emphasis", "text_collapse"]
                    }
                }
            }
        }
        , {}],
        14: [function(e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "\u201c\u201d\u2018\u2019",
                    highlight: null,
                    maxNesting: 100
                },
                components: {
                    core: {},
                    block: {},
                    inline: {}
                }
            }
        }
        , {}],
        15: [function(e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "\u201c\u201d\u2018\u2019",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ["normalize", "block", "inline"]
                    },
                    block: {
                        rules: ["paragraph"]
                    },
                    inline: {
                        rules: ["text"],
                        rules2: ["balance_pairs", "text_collapse"]
                    }
                }
            }
        }
        , {}],
        16: [function(e, r, t) {
            "use strict";
            function n() {
                this.rules = s({}, a)
            }
            var s = e("./common/utils").assign
              , o = e("./common/utils").unescapeAll
              , i = e("./common/utils").escapeHtml
              , a = {};
            a.code_inline = function(e, r, t, n, s) {
                var o = e[r];
                return "<code" + s.renderAttrs(o) + ">" + i(e[r].content) + "</code>"
            }
            ,
            a.code_block = function(e, r, t, n, s) {
                var o = e[r];
                return "<pre" + s.renderAttrs(o) + "><code>" + i(e[r].content) + "</code></pre>\n"
            }
            ,
            a.fence = function(e, r, t, n, s) {
                var a, c, l, u, p = e[r], h = p.info ? o(p.info).trim() : "", f = "";
                return h && (f = h.split(/\s+/g)[0]),
                a = t.highlight ? t.highlight(p.content, f) || i(p.content) : i(p.content),
                0 === a.indexOf("<pre") ? a + "\n" : h ? (c = p.attrIndex("class"),
                l = p.attrs ? p.attrs.slice() : [],
                c < 0 ? l.push(["class", t.langPrefix + f]) : l[c][1] += " " + t.langPrefix + f,
                u = {
                    attrs: l
                },
                "<pre><code" + s.renderAttrs(u) + ">" + a + "</code></pre>\n") : "<pre><code" + s.renderAttrs(p) + ">" + a + "</code></pre>\n"
            }
            ,
            a.image = function(e, r, t, n, s) {
                var o = e[r];
                return o.attrs[o.attrIndex("alt")][1] = s.renderInlineAsText(o.children, t, n),
                s.renderToken(e, r, t)
            }
            ,
            a.hardbreak = function(e, r, t) {
                return t.xhtmlOut ? "<br />\n" : "<br>\n"
            }
            ,
            a.softbreak = function(e, r, t) {
                return t.breaks ? t.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
            }
            ,
            a.text = function(e, r) {
                return i(e[r].content)
            }
            ,
            a.html_block = function(e, r) {
                return e[r].content
            }
            ,
            a.html_inline = function(e, r) {
                return e[r].content
            }
            ,
            n.prototype.renderAttrs = function(e) {
                var r, t, n;
                if (!e.attrs)
                    return "";
                for (n = "",
                r = 0,
                t = e.attrs.length; r < t; r++)
                    n += " " + i(e.attrs[r][0]) + '="' + i(e.attrs[r][1]) + '"';
                return n
            }
            ,
            n.prototype.renderToken = function(e, r, t) {
                var n, s = "", o = !1, i = e[r];
                return i.hidden ? "" : (i.block && i.nesting !== -1 && r && e[r - 1].hidden && (s += "\n"),
                s += (i.nesting === -1 ? "</" : "<") + i.tag,
                s += this.renderAttrs(i),
                0 === i.nesting && t.xhtmlOut && (s += " /"),
                i.block && (o = !0,
                1 === i.nesting && r + 1 < e.length && (n = e[r + 1],
                "inline" === n.type || n.hidden ? o = !1 : n.nesting === -1 && n.tag === i.tag && (o = !1))),
                s += o ? ">\n" : ">")
            }
            ,
            n.prototype.renderInline = function(e, r, t) {
                for (var n, s = "", o = this.rules, i = 0, a = e.length; i < a; i++)
                    n = e[i].type,
                    s += "undefined" != typeof o[n] ? o[n](e, i, r, t, this) : this.renderToken(e, i, r);
                return s
            }
            ,
            n.prototype.renderInlineAsText = function(e, r, t) {
                for (var n = "", s = 0, o = e.length; s < o; s++)
                    "text" === e[s].type ? n += e[s].content : "image" === e[s].type && (n += this.renderInlineAsText(e[s].children, r, t));
                return n
            }
            ,
            n.prototype.render = function(e, r, t) {
                var n, s, o, i = "", a = this.rules;
                for (n = 0,
                s = e.length; n < s; n++)
                    o = e[n].type,
                    i += "inline" === o ? this.renderInline(e[n].children, r, t) : "undefined" != typeof a[o] ? a[e[n].type](e, n, r, t, this) : this.renderToken(e, n, r, t);
                return i
            }
            ,
            r.exports = n
        }
        , {
            "./common/utils": 4
        }],
        17: [function(e, r, t) {
            "use strict";
            function n() {
                this.__rules__ = [],
                this.__cache__ = null
            }
            n.prototype.__find__ = function(e) {
                for (var r = 0; r < this.__rules__.length; r++)
                    if (this.__rules__[r].name === e)
                        return r;
                return -1
            }
            ,
            n.prototype.__compile__ = function() {
                var e = this
                  , r = [""];
                e.__rules__.forEach(function(e) {
                    e.enabled && e.alt.forEach(function(e) {
                        r.indexOf(e) < 0 && r.push(e)
                    })
                }),
                e.__cache__ = {},
                r.forEach(function(r) {
                    e.__cache__[r] = [],
                    e.__rules__.forEach(function(t) {
                        t.enabled && (r && t.alt.indexOf(r) < 0 || e.__cache__[r].push(t.fn))
                    })
                })
            }
            ,
            n.prototype.at = function(e, r, t) {
                var n = this.__find__(e)
                  , s = t || {};
                if (n === -1)
                    throw new Error("Parser rule not found: " + e);
                this.__rules__[n].fn = r,
                this.__rules__[n].alt = s.alt || [],
                this.__cache__ = null
            }
            ,
            n.prototype.before = function(e, r, t, n) {
                var s = this.__find__(e)
                  , o = n || {};
                if (s === -1)
                    throw new Error("Parser rule not found: " + e);
                this.__rules__.splice(s, 0, {
                    name: r,
                    enabled: !0,
                    fn: t,
                    alt: o.alt || []
                }),
                this.__cache__ = null
            }
            ,
            n.prototype.after = function(e, r, t, n) {
                var s = this.__find__(e)
                  , o = n || {};
                if (s === -1)
                    throw new Error("Parser rule not found: " + e);
                this.__rules__.splice(s + 1, 0, {
                    name: r,
                    enabled: !0,
                    fn: t,
                    alt: o.alt || []
                }),
                this.__cache__ = null
            }
            ,
            n.prototype.push = function(e, r, t) {
                var n = t || {};
                this.__rules__.push({
                    name: e,
                    enabled: !0,
                    fn: r,
                    alt: n.alt || []
                }),
                this.__cache__ = null
            }
            ,
            n.prototype.enable = function(e, r) {
                Array.isArray(e) || (e = [e]);
                var t = [];
                return e.forEach(function(e) {
                    var n = this.__find__(e);
                    if (n < 0) {
                        if (r)
                            return;
                        throw new Error("Rules manager: invalid rule name " + e)
                    }
                    this.__rules__[n].enabled = !0,
                    t.push(e)
                }, this),
                this.__cache__ = null,
                t
            }
            ,
            n.prototype.enableOnly = function(e, r) {
                Array.isArray(e) || (e = [e]),
                this.__rules__.forEach(function(e) {
                    e.enabled = !1
                }),
                this.enable(e, r)
            }
            ,
            n.prototype.disable = function(e, r) {
                Array.isArray(e) || (e = [e]);
                var t = [];
                return e.forEach(function(e) {
                    var n = this.__find__(e);
                    if (n < 0) {
                        if (r)
                            return;
                        throw new Error("Rules manager: invalid rule name " + e)
                    }
                    this.__rules__[n].enabled = !1,
                    t.push(e)
                }, this),
                this.__cache__ = null,
                t
            }
            ,
            n.prototype.getRules = function(e) {
                return null === this.__cache__ && this.__compile__(),
                this.__cache__[e] || []
            }
            ,
            r.exports = n
        }
        , {}],
        18: [function(e, r, t) {
            "use strict";
            var n = e("../common/utils").isSpace;
            r.exports = function(e, r, t, s) {
                var o, i, a, c, l, u, p, h, f, d, m, _, g, k, b, v, y = e.bMarks[r] + e.tShift[r], x = e.eMarks[r];
                if (62 !== e.src.charCodeAt(y++))
                    return !1;
                if (s)
                    return !0;
                for (32 === e.src.charCodeAt(y) && y++,
                u = e.blkIndent,
                e.blkIndent = 0,
                f = d = e.sCount[r] + y - (e.bMarks[r] + e.tShift[r]),
                l = [e.bMarks[r]],
                e.bMarks[r] = y; y < x && (m = e.src.charCodeAt(y),
                n(m)); )
                    9 === m ? d += 4 - d % 4 : d++,
                    y++;
                for (i = y >= x,
                c = [e.sCount[r]],
                e.sCount[r] = d - f,
                a = [e.tShift[r]],
                e.tShift[r] = y - e.bMarks[r],
                _ = e.md.block.ruler.getRules("blockquote"),
                o = r + 1; o < t && !(e.sCount[o] < u) && (y = e.bMarks[o] + e.tShift[o],
                x = e.eMarks[o],
                !(y >= x)); o++)
                    if (62 !== e.src.charCodeAt(y++)) {
                        if (i)
                            break;
                        for (v = !1,
                        k = 0,
                        b = _.length; k < b; k++)
                            if (_[k](e, o, t, !0)) {
                                v = !0;
                                break
                            }
                        if (v)
                            break;
                        l.push(e.bMarks[o]),
                        a.push(e.tShift[o]),
                        c.push(e.sCount[o]),
                        e.sCount[o] = -1
                    } else {
                        for (32 === e.src.charCodeAt(y) && y++,
                        f = d = e.sCount[o] + y - (e.bMarks[o] + e.tShift[o]),
                        l.push(e.bMarks[o]),
                        e.bMarks[o] = y; y < x && (m = e.src.charCodeAt(y),
                        n(m)); )
                            9 === m ? d += 4 - d % 4 : d++,
                            y++;
                        i = y >= x,
                        c.push(e.sCount[o]),
                        e.sCount[o] = d - f,
                        a.push(e.tShift[o]),
                        e.tShift[o] = y - e.bMarks[o]
                    }
                for (p = e.parentType,
                e.parentType = "blockquote",
                g = e.push("blockquote_open", "blockquote", 1),
                g.markup = ">",
                g.map = h = [r, 0],
                e.md.block.tokenize(e, r, o),
                g = e.push("blockquote_close", "blockquote", -1),
                g.markup = ">",
                e.parentType = p,
                h[1] = e.line,
                k = 0; k < a.length; k++)
                    e.bMarks[k + r] = l[k],
                    e.tShift[k + r] = a[k],
                    e.sCount[k + r] = c[k];
                return e.blkIndent = u,
                !0
            }
        }
        , {
            "../common/utils": 4
        }],
        19: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t) {
                var n, s, o, i = 0;
                if (e.sCount[r] - e.blkIndent < 4)
                    return !1;
                for (s = n = r + 1; n < t; )
                    if (e.isEmpty(n)) {
                        if (i++,
                        i >= 2 && "list" === e.parentType)
                            break;
                        n++
                    } else {
                        if (i = 0,
                        !(e.sCount[n] - e.blkIndent >= 4))
                            break;
                        n++,
                        s = n
                    }
                return e.line = s,
                o = e.push("code_block", "code", 0),
                o.content = e.getLines(r, s, 4 + e.blkIndent, !0),
                o.map = [r, e.line],
                !0
            }
        }
        , {}],
        20: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t, n) {
                var s, o, i, a, c, l, u, p = !1, h = e.bMarks[r] + e.tShift[r], f = e.eMarks[r];
                if (h + 3 > f)
                    return !1;
                if (s = e.src.charCodeAt(h),
                126 !== s && 96 !== s)
                    return !1;
                if (c = h,
                h = e.skipChars(h, s),
                o = h - c,
                o < 3)
                    return !1;
                if (u = e.src.slice(c, h),
                i = e.src.slice(h, f),
                i.indexOf("`") >= 0)
                    return !1;
                if (n)
                    return !0;
                for (a = r; (a++,
                !(a >= t)) && (h = c = e.bMarks[a] + e.tShift[a],
                f = e.eMarks[a],
                !(h < f && e.sCount[a] < e.blkIndent)); )
                    if (e.src.charCodeAt(h) === s && !(e.sCount[a] - e.blkIndent >= 4 || (h = e.skipChars(h, s),
                    h - c < o || (h = e.skipSpaces(h),
                    h < f)))) {
                        p = !0;
                        break
                    }
                return o = e.sCount[r],
                e.line = a + (p ? 1 : 0),
                l = e.push("fence", "code", 0),
                l.info = i,
                l.content = e.getLines(r + 1, a, o, !0),
                l.markup = u,
                l.map = [r, e.line],
                !0
            }
        }
        , {}],
        21: [function(e, r, t) {
            "use strict";
            var n = e("../common/utils").isSpace;
            r.exports = function(e, r, t, s) {
                var o, i, a, c, l = e.bMarks[r] + e.tShift[r], u = e.eMarks[r];
                if (o = e.src.charCodeAt(l),
                35 !== o || l >= u)
                    return !1;
                for (i = 1,
                o = e.src.charCodeAt(++l); 35 === o && l < u && i <= 6; )
                    i++,
                    o = e.src.charCodeAt(++l);
                return !(i > 6 || l < u && 32 !== o) && (!!s || (u = e.skipSpacesBack(u, l),
                a = e.skipCharsBack(u, 35, l),
                a > l && n(e.src.charCodeAt(a - 1)) && (u = a),
                e.line = r + 1,
                c = e.push("heading_open", "h" + String(i), 1),
                c.markup = "########".slice(0, i),
                c.map = [r, e.line],
                c = e.push("inline", "", 0),
                c.content = e.src.slice(l, u).trim(),
                c.map = [r, e.line],
                c.children = [],
                c = e.push("heading_close", "h" + String(i), -1),
                c.markup = "########".slice(0, i),
                !0))
            }
        }
        , {
            "../common/utils": 4
        }],
        22: [function(e, r, t) {
            "use strict";
            var n = e("../common/utils").isSpace;
            r.exports = function(e, r, t, s) {
                var o, i, a, c, l = e.bMarks[r] + e.tShift[r], u = e.eMarks[r];
                if (o = e.src.charCodeAt(l++),
                42 !== o && 45 !== o && 95 !== o)
                    return !1;
                for (i = 1; l < u; ) {
                    if (a = e.src.charCodeAt(l++),
                    a !== o && !n(a))
                        return !1;
                    a === o && i++
                }
                return !(i < 3) && (!!s || (e.line = r + 1,
                c = e.push("hr", "hr", 0),
                c.map = [r, e.line],
                c.markup = Array(i + 1).join(String.fromCharCode(o)),
                !0))
            }
        }
        , {
            "../common/utils": 4
        }],
        23: [function(e, r, t) {
            "use strict";
            var n = e("../common/html_blocks")
              , s = e("../common/html_re").HTML_OPEN_CLOSE_TAG_RE
              , o = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [new RegExp("^</?(" + n.join("|") + ")(?=(\\s|/?>|$))","i"), /^$/, !0], [new RegExp(s.source + "\\s*$"), /^$/, !1]];
            r.exports = function(e, r, t, n) {
                var s, i, a, c, l = e.bMarks[r] + e.tShift[r], u = e.eMarks[r];
                if (!e.md.options.html)
                    return !1;
                if (60 !== e.src.charCodeAt(l))
                    return !1;
                for (c = e.src.slice(l, u),
                s = 0; s < o.length && !o[s][0].test(c); s++)
                    ;
                if (s === o.length)
                    return !1;
                if (n)
                    return o[s][2];
                if (i = r + 1,
                !o[s][1].test(c))
                    for (; i < t && !(e.sCount[i] < e.blkIndent); i++)
                        if (l = e.bMarks[i] + e.tShift[i],
                        u = e.eMarks[i],
                        c = e.src.slice(l, u),
                        o[s][1].test(c)) {
                            0 !== c.length && i++;
                            break
                        }
                return e.line = i,
                a = e.push("html_block", "", 0),
                a.map = [r, i],
                a.content = e.getLines(r, i, e.blkIndent, !0),
                !0
            }
        }
        , {
            "../common/html_blocks": 2,
            "../common/html_re": 3
        }],
        24: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t) {
                for (var n, s, o, i, a, c, l, u, p, h = r + 1, f = e.md.block.ruler.getRules("paragraph"); h < t && !e.isEmpty(h); h++)
                    if (!(e.sCount[h] - e.blkIndent > 3)) {
                        if (e.sCount[h] >= e.blkIndent && (c = e.bMarks[h] + e.tShift[h],
                        l = e.eMarks[h],
                        c < l && (p = e.src.charCodeAt(c),
                        (45 === p || 61 === p) && (c = e.skipChars(c, p),
                        c = e.skipSpaces(c),
                        c >= l)))) {
                            u = 61 === p ? 1 : 2;
                            break
                        }
                        if (!(e.sCount[h] < 0)) {
                            for (s = !1,
                            o = 0,
                            i = f.length; o < i; o++)
                                if (f[o](e, h, t, !0)) {
                                    s = !0;
                                    break
                                }
                            if (s)
                                break
                        }
                    }
                return !!u && (n = e.getLines(r, h, e.blkIndent, !1).trim(),
                e.line = h + 1,
                a = e.push("heading_open", "h" + String(u), 1),
                a.markup = String.fromCharCode(p),
                a.map = [r, e.line],
                a = e.push("inline", "", 0),
                a.content = n,
                a.map = [r, e.line - 1],
                a.children = [],
                a = e.push("heading_close", "h" + String(u), -1),
                a.markup = String.fromCharCode(p),
                !0)
            }
        }
        , {}],
        25: [function(e, r, t) {
            "use strict";
            function n(e, r) {
                var t, n, s, o;
                return n = e.bMarks[r] + e.tShift[r],
                s = e.eMarks[r],
                t = e.src.charCodeAt(n++),
                42 !== t && 45 !== t && 43 !== t ? -1 : n < s && (o = e.src.charCodeAt(n),
                !i(o)) ? -1 : n
            }
            function s(e, r) {
                var t, n = e.bMarks[r] + e.tShift[r], s = n, o = e.eMarks[r];
                if (s + 1 >= o)
                    return -1;
                if (t = e.src.charCodeAt(s++),
                t < 48 || t > 57)
                    return -1;
                for (; ; ) {
                    if (s >= o)
                        return -1;
                    t = e.src.charCodeAt(s++);
                    {
                        if (!(t >= 48 && t <= 57)) {
                            if (41 === t || 46 === t)
                                break;
                            return -1
                        }
                        if (s - n >= 10)
                            return -1
                    }
                }
                return s < o && (t = e.src.charCodeAt(s),
                !i(t)) ? -1 : s
            }
            function o(e, r) {
                var t, n, s = e.level + 2;
                for (t = r + 2,
                n = e.tokens.length - 2; t < n; t++)
                    e.tokens[t].level === s && "paragraph_open" === e.tokens[t].type && (e.tokens[t + 2].hidden = !0,
                    e.tokens[t].hidden = !0,
                    t += 2)
            }
            var i = e("../common/utils").isSpace;
            r.exports = function(e, r, t, a) {
                var c, l, u, p, h, f, d, m, _, g, k, b, v, y, x, C, A, w, D, q, E, S, F, z, L, T, R, M, I = !0;
                if ((k = s(e, r)) >= 0)
                    w = !0;
                else {
                    if (!((k = n(e, r)) >= 0))
                        return !1;
                    w = !1
                }
                if (A = e.src.charCodeAt(k - 1),
                a)
                    return !0;
                for (q = e.tokens.length,
                w ? (g = e.bMarks[r] + e.tShift[r],
                C = Number(e.src.substr(g, k - g - 1)),
                L = e.push("ordered_list_open", "ol", 1),
                1 !== C && (L.attrs = [["start", C]])) : L = e.push("bullet_list_open", "ul", 1),
                L.map = S = [r, 0],
                L.markup = String.fromCharCode(A),
                c = r,
                E = !1,
                z = e.md.block.ruler.getRules("list"); c < t; ) {
                    for (v = k,
                    y = e.eMarks[c],
                    l = u = e.sCount[c] + k - (e.bMarks[r] + e.tShift[r]); v < y && (b = e.src.charCodeAt(v),
                    i(b)); )
                        9 === b ? u += 4 - u % 4 : u++,
                        v++;
                    if (D = v,
                    x = D >= y ? 1 : u - l,
                    x > 4 && (x = 1),
                    p = l + x,
                    L = e.push("list_item_open", "li", 1),
                    L.markup = String.fromCharCode(A),
                    L.map = F = [r, 0],
                    f = e.blkIndent,
                    m = e.tight,
                    h = e.tShift[r],
                    d = e.sCount[r],
                    _ = e.parentType,
                    e.blkIndent = p,
                    e.tight = !0,
                    e.parentType = "list",
                    e.tShift[r] = D - e.bMarks[r],
                    e.sCount[r] = u,
                    D >= y && e.isEmpty(r + 1) ? e.line = Math.min(e.line + 2, t) : e.md.block.tokenize(e, r, t, !0),
                    e.tight && !E || (I = !1),
                    E = e.line - r > 1 && e.isEmpty(e.line - 1),
                    e.blkIndent = f,
                    e.tShift[r] = h,
                    e.sCount[r] = d,
                    e.tight = m,
                    e.parentType = _,
                    L = e.push("list_item_close", "li", -1),
                    L.markup = String.fromCharCode(A),
                    c = r = e.line,
                    F[1] = c,
                    D = e.bMarks[r],
                    c >= t)
                        break;
                    if (e.isEmpty(c))
                        break;
                    if (e.sCount[c] < e.blkIndent)
                        break;
                    for (M = !1,
                    T = 0,
                    R = z.length; T < R; T++)
                        if (z[T](e, c, t, !0)) {
                            M = !0;
                            break
                        }
                    if (M)
                        break;
                    if (w) {
                        if (k = s(e, c),
                        k < 0)
                            break
                    } else if (k = n(e, c),
                    k < 0)
                        break;
                    if (A !== e.src.charCodeAt(k - 1))
                        break
                }
                return L = w ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1),
                L.markup = String.fromCharCode(A),
                S[1] = c,
                e.line = c,
                I && o(e, q),
                !0
            }
        }
        , {
            "../common/utils": 4
        }],
        26: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r) {
                for (var t, n, s, o, i, a = r + 1, c = e.md.block.ruler.getRules("paragraph"), l = e.lineMax; a < l && !e.isEmpty(a); a++)
                    if (!(e.sCount[a] - e.blkIndent > 3 || e.sCount[a] < 0)) {
                        for (n = !1,
                        s = 0,
                        o = c.length; s < o; s++)
                            if (c[s](e, a, l, !0)) {
                                n = !0;
                                break
                            }
                        if (n)
                            break
                    }
                return t = e.getLines(r, a, e.blkIndent, !1).trim(),
                e.line = a,
                i = e.push("paragraph_open", "p", 1),
                i.map = [r, e.line],
                i = e.push("inline", "", 0),
                i.content = t,
                i.map = [r, e.line],
                i.children = [],
                i = e.push("paragraph_close", "p", -1),
                !0
            }
        }
        , {}],
        27: [function(e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_destination")
              , s = e("../helpers/parse_link_title")
              , o = e("../common/utils").normalizeReference
              , i = e("../common/utils").isSpace;
            r.exports = function(e, r, t, a) {
                var c, l, u, p, h, f, d, m, _, g, k, b, v, y, x, C = 0, A = e.bMarks[r] + e.tShift[r], w = e.eMarks[r], D = r + 1;
                if (91 !== e.src.charCodeAt(A))
                    return !1;
                for (; ++A < w; )
                    if (93 === e.src.charCodeAt(A) && 92 !== e.src.charCodeAt(A - 1)) {
                        if (A + 1 === w)
                            return !1;
                        if (58 !== e.src.charCodeAt(A + 1))
                            return !1;
                        break
                    }
                for (p = e.lineMax,
                y = e.md.block.ruler.getRules("reference"); D < p && !e.isEmpty(D); D++)
                    if (!(e.sCount[D] - e.blkIndent > 3 || e.sCount[D] < 0)) {
                        for (v = !1,
                        f = 0,
                        d = y.length; f < d; f++)
                            if (y[f](e, D, p, !0)) {
                                v = !0;
                                break
                            }
                        if (v)
                            break
                    }
                for (b = e.getLines(r, D, e.blkIndent, !1).trim(),
                w = b.length,
                A = 1; A < w; A++) {
                    if (c = b.charCodeAt(A),
                    91 === c)
                        return !1;
                    if (93 === c) {
                        _ = A;
                        break
                    }
                    10 === c ? C++ : 92 === c && (A++,
                    A < w && 10 === b.charCodeAt(A) && C++)
                }
                if (_ < 0 || 58 !== b.charCodeAt(_ + 1))
                    return !1;
                for (A = _ + 2; A < w; A++)
                    if (c = b.charCodeAt(A),
                    10 === c)
                        C++;
                    else if (!i(c))
                        break;
                if (g = n(b, A, w),
                !g.ok)
                    return !1;
                if (h = e.md.normalizeLink(g.str),
                !e.md.validateLink(h))
                    return !1;
                for (A = g.pos,
                C += g.lines,
                l = A,
                u = C,
                k = A; A < w; A++)
                    if (c = b.charCodeAt(A),
                    10 === c)
                        C++;
                    else if (!i(c))
                        break;
                for (g = s(b, A, w),
                A < w && k !== A && g.ok ? (x = g.str,
                A = g.pos,
                C += g.lines) : (x = "",
                A = l,
                C = u); A < w && (c = b.charCodeAt(A),
                i(c)); )
                    A++;
                if (A < w && 10 !== b.charCodeAt(A) && x)
                    for (x = "",
                    A = l,
                    C = u; A < w && (c = b.charCodeAt(A),
                    i(c)); )
                        A++;
                return !(A < w && 10 !== b.charCodeAt(A)) && (!!(m = o(b.slice(1, _))) && (!!a || ("undefined" == typeof e.env.references && (e.env.references = {}),
                "undefined" == typeof e.env.references[m] && (e.env.references[m] = {
                    title: x,
                    href: h
                }),
                e.line = r + C + 1,
                !0)))
            }
        }
        , {
            "../common/utils": 4,
            "../helpers/parse_link_destination": 6,
            "../helpers/parse_link_title": 8
        }],
        28: [function(e, r, t) {
            "use strict";
            function n(e, r, t, n) {
                var s, i, a, c, l, u, p, h;
                for (this.src = e,
                this.md = r,
                this.env = t,
                this.tokens = n,
                this.bMarks = [],
                this.eMarks = [],
                this.tShift = [],
                this.sCount = [],
                this.blkIndent = 0,
                this.line = 0,
                this.lineMax = 0,
                this.tight = !1,
                this.parentType = "root",
                this.ddIndent = -1,
                this.level = 0,
                this.result = "",
                i = this.src,
                h = !1,
                a = c = u = p = 0,
                l = i.length; c < l; c++) {
                    if (s = i.charCodeAt(c),
                    !h) {
                        if (o(s)) {
                            u++,
                            9 === s ? p += 4 - p % 4 : p++;
                            continue
                        }
                        h = !0
                    }
                    10 !== s && c !== l - 1 || (10 !== s && c++,
                    this.bMarks.push(a),
                    this.eMarks.push(c),
                    this.tShift.push(u),
                    this.sCount.push(p),
                    h = !1,
                    u = 0,
                    p = 0,
                    a = c + 1)
                }
                this.bMarks.push(i.length),
                this.eMarks.push(i.length),
                this.tShift.push(0),
                this.sCount.push(0),
                this.lineMax = this.bMarks.length - 1
            }
            var s = e("../token")
              , o = e("../common/utils").isSpace;
            n.prototype.push = function(e, r, t) {
                var n = new s(e,r,t);
                return n.block = !0,
                t < 0 && this.level--,
                n.level = this.level,
                t > 0 && this.level++,
                this.tokens.push(n),
                n
            }
            ,
            n.prototype.isEmpty = function(e) {
                return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
            }
            ,
            n.prototype.skipEmptyLines = function(e) {
                for (var r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
                    ;
                return e
            }
            ,
            n.prototype.skipSpaces = function(e) {
                for (var r, t = this.src.length; e < t && (r = this.src.charCodeAt(e),
                o(r)); e++)
                    ;
                return e
            }
            ,
            n.prototype.skipSpacesBack = function(e, r) {
                if (e <= r)
                    return e;
                for (; e > r; )
                    if (!o(this.src.charCodeAt(--e)))
                        return e + 1;
                return e
            }
            ,
            n.prototype.skipChars = function(e, r) {
                for (var t = this.src.length; e < t && this.src.charCodeAt(e) === r; e++)
                    ;
                return e
            }
            ,
            n.prototype.skipCharsBack = function(e, r, t) {
                if (e <= t)
                    return e;
                for (; e > t; )
                    if (r !== this.src.charCodeAt(--e))
                        return e + 1;
                return e
            }
            ,
            n.prototype.getLines = function(e, r, t, n) {
                var s, i, a, c, l, u, p, h = e;
                if (e >= r)
                    return "";
                for (u = new Array(r - e),
                s = 0; h < r; h++,
                s++) {
                    for (i = 0,
                    p = c = this.bMarks[h],
                    l = h + 1 < r || n ? this.eMarks[h] + 1 : this.eMarks[h]; c < l && i < t; ) {
                        if (a = this.src.charCodeAt(c),
                        o(a))
                            9 === a ? i += 4 - i % 4 : i++;
                        else {
                            if (!(c - p < this.tShift[h]))
                                break;
                            i++
                        }
                        c++
                    }
                    u[s] = this.src.slice(c, l)
                }
                return u.join("")
            }
            ,
            n.prototype.Token = s,
            r.exports = n
        }
        , {
            "../common/utils": 4,
            "../token": 51
        }],
        29: [function(e, r, t) {
            "use strict";
            function n(e, r) {
                var t = e.bMarks[r] + e.blkIndent
                  , n = e.eMarks[r];
                return e.src.substr(t, n - t)
            }
            function s(e) {
                var r, t = [], n = 0, s = e.length, o = 0, i = 0, a = !1, c = 0;
                for (r = e.charCodeAt(n); n < s; )
                    96 === r && o % 2 === 0 ? (a = !a,
                    c = n) : 124 !== r || o % 2 !== 0 || a ? 92 === r ? o++ : o = 0 : (t.push(e.substring(i, n)),
                    i = n + 1),
                    n++,
                    n === s && a && (a = !1,
                    n = c + 1),
                    r = e.charCodeAt(n);
                return t.push(e.substring(i)),
                t
            }
            r.exports = function(e, r, t, o) {
                var i, a, c, l, u, p, h, f, d, m, _, g;
                if (r + 2 > t)
                    return !1;
                if (u = r + 1,
                e.sCount[u] < e.blkIndent)
                    return !1;
                if (c = e.bMarks[u] + e.tShift[u],
                c >= e.eMarks[u])
                    return !1;
                if (i = e.src.charCodeAt(c),
                124 !== i && 45 !== i && 58 !== i)
                    return !1;
                if (a = n(e, r + 1),
                !/^[-:| ]+$/.test(a))
                    return !1;
                for (p = a.split("|"),
                d = [],
                l = 0; l < p.length; l++) {
                    if (m = p[l].trim(),
                    !m) {
                        if (0 === l || l === p.length - 1)
                            continue;
                        return !1;
                    }
                    if (!/^:?-+:?$/.test(m))
                        return !1;
                    58 === m.charCodeAt(m.length - 1) ? d.push(58 === m.charCodeAt(0) ? "center" : "right") : 58 === m.charCodeAt(0) ? d.push("left") : d.push("")
                }
                if (a = n(e, r).trim(),
                a.indexOf("|") === -1)
                    return !1;
                if (p = s(a.replace(/^\||\|$/g, "")),
                h = p.length,
                h > d.length)
                    return !1;
                if (o)
                    return !0;
                for (f = e.push("table_open", "table", 1),
                f.map = _ = [r, 0],
                f = e.push("thead_open", "thead", 1),
                f.map = [r, r + 1],
                f = e.push("tr_open", "tr", 1),
                f.map = [r, r + 1],
                l = 0; l < p.length; l++)
                    f = e.push("th_open", "th", 1),
                    f.map = [r, r + 1],
                    d[l] && (f.attrs = [["style", "text-align:" + d[l]]]),
                    f = e.push("inline", "", 0),
                    f.content = p[l].trim(),
                    f.map = [r, r + 1],
                    f.children = [],
                    f = e.push("th_close", "th", -1);
                for (f = e.push("tr_close", "tr", -1),
                f = e.push("thead_close", "thead", -1),
                f = e.push("tbody_open", "tbody", 1),
                f.map = g = [r + 2, 0],
                u = r + 2; u < t && !(e.sCount[u] < e.blkIndent) && (a = n(e, u),
                a.indexOf("|") !== -1); u++) {
                    for (p = s(a.replace(/^\||\|\s*$/g, "")),
                    f = e.push("tr_open", "tr", 1),
                    l = 0; l < h; l++)
                        f = e.push("td_open", "td", 1),
                        d[l] && (f.attrs = [["style", "text-align:" + d[l]]]),
                        f = e.push("inline", "", 0),
                        f.content = p[l] ? p[l].trim() : "",
                        f.children = [],
                        f = e.push("td_close", "td", -1);
                    f = e.push("tr_close", "tr", -1)
                }
                return f = e.push("tbody_close", "tbody", -1),
                f = e.push("table_close", "table", -1),
                _[1] = g[1] = u,
                e.line = u,
                !0
            }
        }
        , {}],
        30: [function(e, r, t) {
            "use strict";
            r.exports = function(e) {
                var r;
                e.inlineMode ? (r = new e.Token("inline","",0),
                r.content = e.src,
                r.map = [0, 1],
                r.children = [],
                e.tokens.push(r)) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
            }
        }
        , {}],
        31: [function(e, r, t) {
            "use strict";
            r.exports = function(e) {
                var r, t, n, s = e.tokens;
                for (t = 0,
                n = s.length; t < n; t++)
                    r = s[t],
                    "inline" === r.type && e.md.inline.parse(r.content, e.md, e.env, r.children)
            }
        }
        , {}],
        32: [function(e, r, t) {
            "use strict";
            function n(e) {
                return /^<a[>\s]/i.test(e)
            }
            function s(e) {
                return /^<\/a\s*>/i.test(e)
            }
            var o = e("../common/utils").arrayReplaceAt;
            r.exports = function(e) {
                var r, t, i, a, c, l, u, p, h, f, d, m, _, g, k, b, v, y = e.tokens;
                if (e.md.options.linkify)
                    for (t = 0,
                    i = y.length; t < i; t++)
                        if ("inline" === y[t].type && e.md.linkify.pretest(y[t].content))
                            for (a = y[t].children,
                            _ = 0,
                            r = a.length - 1; r >= 0; r--)
                                if (l = a[r],
                                "link_close" !== l.type) {
                                    if ("html_inline" === l.type && (n(l.content) && _ > 0 && _--,
                                    s(l.content) && _++),
                                    !(_ > 0) && "text" === l.type && e.md.linkify.test(l.content)) {
                                        for (h = l.content,
                                        v = e.md.linkify.match(h),
                                        u = [],
                                        m = l.level,
                                        d = 0,
                                        p = 0; p < v.length; p++)
                                            g = v[p].url,
                                            k = e.md.normalizeLink(g),
                                            e.md.validateLink(k) && (b = v[p].text,
                                            b = v[p].schema ? "mailto:" !== v[p].schema || /^mailto:/i.test(b) ? e.md.normalizeLinkText(b) : e.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, ""),
                                            f = v[p].index,
                                            f > d && (c = new e.Token("text","",0),
                                            c.content = h.slice(d, f),
                                            c.level = m,
                                            u.push(c)),
                                            c = new e.Token("link_open","a",1),
                                            c.attrs = [["href", k]],
                                            c.level = m++,
                                            c.markup = "linkify",
                                            c.info = "auto",
                                            u.push(c),
                                            c = new e.Token("text","",0),
                                            c.content = b,
                                            c.level = m,
                                            u.push(c),
                                            c = new e.Token("link_close","a",-1),
                                            c.level = --m,
                                            c.markup = "linkify",
                                            c.info = "auto",
                                            u.push(c),
                                            d = v[p].lastIndex);
                                        d < h.length && (c = new e.Token("text","",0),
                                        c.content = h.slice(d),
                                        c.level = m,
                                        u.push(c)),
                                        y[t].children = a = o(a, r, u)
                                    }
                                } else
                                    for (r--; a[r].level !== l.level && "link_open" !== a[r].type; )
                                        r--
            }
        }
        , {
            "../common/utils": 4
        }],
        33: [function(e, r, t) {
            "use strict";
            var n = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g
              , s = /\u0000/g;
            r.exports = function(e) {
                var r;
                r = e.src.replace(n, "\n"),
                r = r.replace(s, "\ufffd"),
                e.src = r
            }
        }
        , {}],
        34: [function(e, r, t) {
            "use strict";
            function n(e, r) {
                return l[r.toLowerCase()]
            }
            function s(e) {
                var r, t, s = 0;
                for (r = e.length - 1; r >= 0; r--)
                    t = e[r],
                    "text" !== t.type || s || (t.content = t.content.replace(c, n)),
                    "link_open" === t.type && "auto" === t.info && s--,
                    "link_close" === t.type && "auto" === t.info && s++
            }
            function o(e) {
                var r, t, n = 0;
                for (r = e.length - 1; r >= 0; r--)
                    t = e[r],
                    "text" !== t.type || n || i.test(t.content) && (t.content = t.content.replace(/\+-/g, "\xb1").replace(/\.{2,}/g, "\u2026").replace(/([?!])\u2026/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1\u2014$2").replace(/(^|\s)--(\s|$)/gm, "$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1\u2013$2")),
                    "link_open" === t.type && "auto" === t.info && n--,
                    "link_close" === t.type && "auto" === t.info && n++
            }
            var i = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/
              , a = /\((c|tm|r|p)\)/i
              , c = /\((c|tm|r|p)\)/gi
              , l = {
                c: "\xa9",
                r: "\xae",
                p: "\xa7",
                tm: "\u2122"
            };
            r.exports = function(e) {
                var r;
                if (e.md.options.typographer)
                    for (r = e.tokens.length - 1; r >= 0; r--)
                        "inline" === e.tokens[r].type && (a.test(e.tokens[r].content) && s(e.tokens[r].children),
                        i.test(e.tokens[r].content) && o(e.tokens[r].children))
            }
        }
        , {}],
        35: [function(e, r, t) {
            "use strict";
            function n(e, r, t) {
                return e.substr(0, r) + t + e.substr(r + 1)
            }
            function s(e, r) {
                var t, s, c, p, h, f, d, m, _, g, k, b, v, y, x, C, A, w, D, q, E;
                for (D = [],
                t = 0; t < e.length; t++) {
                    for (s = e[t],
                    d = e[t].level,
                    A = D.length - 1; A >= 0 && !(D[A].level <= d); A--)
                        ;
                    if (D.length = A + 1,
                    "text" === s.type) {
                        c = s.content,
                        h = 0,
                        f = c.length;
                        e: for (; h < f && (l.lastIndex = h,
                        p = l.exec(c)); ) {
                            if (x = C = !0,
                            h = p.index + 1,
                            w = "'" === p[0],
                            _ = 32,
                            p.index - 1 >= 0)
                                _ = c.charCodeAt(p.index - 1);
                            else
                                for (A = t - 1; A >= 0; A--)
                                    if ("text" === e[A].type) {
                                        _ = e[A].content.charCodeAt(e[A].content.length - 1);
                                        break
                                    }
                            if (g = 32,
                            h < f)
                                g = c.charCodeAt(h);
                            else
                                for (A = t + 1; A < e.length; A++)
                                    if ("text" === e[A].type) {
                                        g = e[A].content.charCodeAt(0);
                                        break
                                    }
                            if (k = a(_) || i(String.fromCharCode(_)),
                            b = a(g) || i(String.fromCharCode(g)),
                            v = o(_),
                            y = o(g),
                            y ? x = !1 : b && (v || k || (x = !1)),
                            v ? C = !1 : k && (y || b || (C = !1)),
                            34 === g && '"' === p[0] && _ >= 48 && _ <= 57 && (C = x = !1),
                            x && C && (x = !1,
                            C = b),
                            x || C) {
                                if (C)
                                    for (A = D.length - 1; A >= 0 && (m = D[A],
                                    !(D[A].level < d)); A--)
                                        if (m.single === w && D[A].level === d) {
                                            m = D[A],
                                            w ? (q = r.md.options.quotes[2],
                                            E = r.md.options.quotes[3]) : (q = r.md.options.quotes[0],
                                            E = r.md.options.quotes[1]),
                                            s.content = n(s.content, p.index, E),
                                            e[m.token].content = n(e[m.token].content, m.pos, q),
                                            h += E.length - 1,
                                            m.token === t && (h += q.length - 1),
                                            c = s.content,
                                            f = c.length,
                                            D.length = A;
                                            continue e
                                        }
                                x ? D.push({
                                    token: t,
                                    pos: p.index,
                                    single: w,
                                    level: d
                                }) : C && w && (s.content = n(s.content, p.index, u))
                            } else
                                w && (s.content = n(s.content, p.index, u))
                        }
                    }
                }
            }
            var o = e("../common/utils").isWhiteSpace
              , i = e("../common/utils").isPunctChar
              , a = e("../common/utils").isMdAsciiPunct
              , c = /['"]/
              , l = /['"]/g
              , u = "\u2019";
            r.exports = function(e) {
                var r;
                if (e.md.options.typographer)
                    for (r = e.tokens.length - 1; r >= 0; r--)
                        "inline" === e.tokens[r].type && c.test(e.tokens[r].content) && s(e.tokens[r].children, e)
            }
        }
        , {
            "../common/utils": 4
        }],
        36: [function(e, r, t) {
            "use strict";
            function n(e, r, t) {
                this.src = e,
                this.env = t,
                this.tokens = [],
                this.inlineMode = !1,
                this.md = r
            }
            var s = e("../token");
            n.prototype.Token = s,
            r.exports = n
        }
        , {
            "../token": 51
        }],
        37: [function(e, r, t) {
            "use strict";
            var n = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/
              , s = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
            r.exports = function(e, r) {
                var t, o, i, a, c, l, u = e.pos;
                return 60 === e.src.charCodeAt(u) && (t = e.src.slice(u),
                !(t.indexOf(">") < 0) && (s.test(t) ? (o = t.match(s),
                a = o[0].slice(1, -1),
                c = e.md.normalizeLink(a),
                !!e.md.validateLink(c) && (r || (l = e.push("link_open", "a", 1),
                l.attrs = [["href", c]],
                l.markup = "autolink",
                l.info = "auto",
                l = e.push("text", "", 0),
                l.content = e.md.normalizeLinkText(a),
                l = e.push("link_close", "a", -1),
                l.markup = "autolink",
                l.info = "auto"),
                e.pos += o[0].length,
                !0)) : !!n.test(t) && (i = t.match(n),
                a = i[0].slice(1, -1),
                c = e.md.normalizeLink("mailto:" + a),
                !!e.md.validateLink(c) && (r || (l = e.push("link_open", "a", 1),
                l.attrs = [["href", c]],
                l.markup = "autolink",
                l.info = "auto",
                l = e.push("text", "", 0),
                l.content = e.md.normalizeLinkText(a),
                l = e.push("link_close", "a", -1),
                l.markup = "autolink",
                l.info = "auto"),
                e.pos += i[0].length,
                !0))))
            }
        }
        , {}],
        38: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r) {
                var t, n, s, o, i, a, c = e.pos, l = e.src.charCodeAt(c);
                if (96 !== l)
                    return !1;
                for (t = c,
                c++,
                n = e.posMax; c < n && 96 === e.src.charCodeAt(c); )
                    c++;
                for (s = e.src.slice(t, c),
                o = i = c; (o = e.src.indexOf("`", i)) !== -1; ) {
                    for (i = o + 1; i < n && 96 === e.src.charCodeAt(i); )
                        i++;
                    if (i - o === s.length)
                        return r || (a = e.push("code_inline", "code", 0),
                        a.markup = s,
                        a.content = e.src.slice(c, o).replace(/[ \n]+/g, " ").trim()),
                        e.pos = i,
                        !0
                }
                return r || (e.pending += s),
                e.pos += s.length,
                !0
            }
        }
        , {}],
        39: [function(e, r, t) {
            "use strict";
            r.exports = function(e) {
                var r, t, n, s, o = e.delimiters, i = e.delimiters.length;
                for (r = 0; r < i; r++)
                    if (n = o[r],
                    n.close)
                        for (t = r - n.jump - 1; t >= 0; ) {
                            if (s = o[t],
                            s.open && s.marker === n.marker && s.end < 0 && s.level === n.level) {
                                n.jump = r - t,
                                n.open = !1,
                                s.end = r,
                                s.jump = 0;
                                break
                            }
                            t -= s.jump + 1
                        }
            }
        }
        , {}],
        40: [function(e, r, t) {
            "use strict";
            r.exports.tokenize = function(e, r) {
                var t, n, s, o = e.pos, i = e.src.charCodeAt(o);
                if (r)
                    return !1;
                if (95 !== i && 42 !== i)
                    return !1;
                for (n = e.scanDelims(e.pos, 42 === i),
                t = 0; t < n.length; t++)
                    s = e.push("text", "", 0),
                    s.content = String.fromCharCode(i),
                    e.delimiters.push({
                        marker: i,
                        jump: t,
                        token: e.tokens.length - 1,
                        level: e.level,
                        end: -1,
                        open: n.can_open,
                        close: n.can_close
                    });
                return e.pos += n.length,
                !0
            }
            ,
            r.exports.postProcess = function(e) {
                var r, t, n, s, o, i, a = e.delimiters, c = e.delimiters.length;
                for (r = 0; r < c; r++)
                    t = a[r],
                    95 !== t.marker && 42 !== t.marker || t.end !== -1 && (n = a[t.end],
                    i = r + 1 < c && a[r + 1].end === t.end - 1 && a[r + 1].token === t.token + 1 && a[t.end - 1].token === n.token - 1 && a[r + 1].marker === t.marker,
                    o = String.fromCharCode(t.marker),
                    s = e.tokens[t.token],
                    s.type = i ? "strong_open" : "em_open",
                    s.tag = i ? "strong" : "em",
                    s.nesting = 1,
                    s.markup = i ? o + o : o,
                    s.content = "",
                    s = e.tokens[n.token],
                    s.type = i ? "strong_close" : "em_close",
                    s.tag = i ? "strong" : "em",
                    s.nesting = -1,
                    s.markup = i ? o + o : o,
                    s.content = "",
                    i && (e.tokens[a[r + 1].token].content = "",
                    e.tokens[a[t.end - 1].token].content = "",
                    r++))
            }
        }
        , {}],
        41: [function(e, r, t) {
            "use strict";
            var n = e("../common/entities")
              , s = e("../common/utils").has
              , o = e("../common/utils").isValidEntityCode
              , i = e("../common/utils").fromCodePoint
              , a = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i
              , c = /^&([a-z][a-z0-9]{1,31});/i;
            r.exports = function(e, r) {
                var t, l, u, p = e.pos, h = e.posMax;
                if (38 !== e.src.charCodeAt(p))
                    return !1;
                if (p + 1 < h)
                    if (t = e.src.charCodeAt(p + 1),
                    35 === t) {
                        if (u = e.src.slice(p).match(a))
                            return r || (l = "x" === u[1][0].toLowerCase() ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10),
                            e.pending += i(o(l) ? l : 65533)),
                            e.pos += u[0].length,
                            !0
                    } else if (u = e.src.slice(p).match(c),
                    u && s(n, u[1]))
                        return r || (e.pending += n[u[1]]),
                        e.pos += u[0].length,
                        !0;
                return r || (e.pending += "&"),
                e.pos++,
                !0
            }
        }
        , {
            "../common/entities": 1,
            "../common/utils": 4
        }],
        42: [function(e, r, t) {
            "use strict";
            for (var n = e("../common/utils").isSpace, s = [], o = 0; o < 256; o++)
                s.push(0);
            "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
                s[e.charCodeAt(0)] = 1
            }),
            r.exports = function(e, r) {
                var t, o = e.pos, i = e.posMax;
                if (92 !== e.src.charCodeAt(o))
                    return !1;
                if (o++,
                o < i) {
                    if (t = e.src.charCodeAt(o),
                    t < 256 && 0 !== s[t])
                        return r || (e.pending += e.src[o]),
                        e.pos += 2,
                        !0;
                    if (10 === t) {
                        for (r || e.push("hardbreak", "br", 0),
                        o++; o < i && (t = e.src.charCodeAt(o),
                        n(t)); )
                            o++;
                        return e.pos = o,
                        !0
                    }
                }
                return r || (e.pending += "\\"),
                e.pos++,
                !0
            }
        }
        , {
            "../common/utils": 4
        }],
        43: [function(e, r, t) {
            "use strict";
            function n(e) {
                var r = 32 | e;
                return r >= 97 && r <= 122
            }
            var s = e("../common/html_re").HTML_TAG_RE;
            r.exports = function(e, r) {
                var t, o, i, a, c = e.pos;
                return !!e.md.options.html && (i = e.posMax,
                !(60 !== e.src.charCodeAt(c) || c + 2 >= i) && (t = e.src.charCodeAt(c + 1),
                !(33 !== t && 63 !== t && 47 !== t && !n(t)) && (!!(o = e.src.slice(c).match(s)) && (r || (a = e.push("html_inline", "", 0),
                a.content = e.src.slice(c, c + o[0].length)),
                e.pos += o[0].length,
                !0))))
            }
        }
        , {
            "../common/html_re": 3
        }],
        44: [function(e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_label")
              , s = e("../helpers/parse_link_destination")
              , o = e("../helpers/parse_link_title")
              , i = e("../common/utils").normalizeReference
              , a = e("../common/utils").isSpace;
            r.exports = function(e, r) {
                var t, c, l, u, p, h, f, d, m, _, g, k, b, v = "", y = e.pos, x = e.posMax;
                if (33 !== e.src.charCodeAt(e.pos))
                    return !1;
                if (91 !== e.src.charCodeAt(e.pos + 1))
                    return !1;
                if (h = e.pos + 2,
                p = n(e, e.pos + 1, !1),
                p < 0)
                    return !1;
                if (f = p + 1,
                f < x && 40 === e.src.charCodeAt(f)) {
                    for (f++; f < x && (c = e.src.charCodeAt(f),
                    a(c) || 10 === c); f++)
                        ;
                    if (f >= x)
                        return !1;
                    for (b = f,
                    m = s(e.src, f, e.posMax),
                    m.ok && (v = e.md.normalizeLink(m.str),
                    e.md.validateLink(v) ? f = m.pos : v = ""),
                    b = f; f < x && (c = e.src.charCodeAt(f),
                    a(c) || 10 === c); f++)
                        ;
                    if (m = o(e.src, f, e.posMax),
                    f < x && b !== f && m.ok)
                        for (_ = m.str,
                        f = m.pos; f < x && (c = e.src.charCodeAt(f),
                        a(c) || 10 === c); f++)
                            ;
                    else
                        _ = "";
                    if (f >= x || 41 !== e.src.charCodeAt(f))
                        return e.pos = y,
                        !1;
                    f++
                } else {
                    if ("undefined" == typeof e.env.references)
                        return !1;
                    if (f < x && 91 === e.src.charCodeAt(f) ? (b = f + 1,
                    f = n(e, f),
                    f >= 0 ? u = e.src.slice(b, f++) : f = p + 1) : f = p + 1,
                    u || (u = e.src.slice(h, p)),
                    d = e.env.references[i(u)],
                    !d)
                        return e.pos = y,
                        !1;
                    v = d.href,
                    _ = d.title
                }
                return r || (l = e.src.slice(h, p),
                e.md.inline.parse(l, e.md, e.env, k = []),
                g = e.push("image", "img", 0),
                g.attrs = t = [["src", v], ["alt", ""]],
                g.children = k,
                g.content = l,
                _ && t.push(["title", _])),
                e.pos = f,
                e.posMax = x,
                !0
            }
        }
        , {
            "../common/utils": 4,
            "../helpers/parse_link_destination": 6,
            "../helpers/parse_link_label": 7,
            "../helpers/parse_link_title": 8
        }],
        45: [function(e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_label")
              , s = e("../helpers/parse_link_destination")
              , o = e("../helpers/parse_link_title")
              , i = e("../common/utils").normalizeReference
              , a = e("../common/utils").isSpace;
            r.exports = function(e, r) {
                var t, c, l, u, p, h, f, d, m, _, g = "", k = e.pos, b = e.posMax, v = e.pos;
                if (91 !== e.src.charCodeAt(e.pos))
                    return !1;
                if (p = e.pos + 1,
                u = n(e, e.pos, !0),
                u < 0)
                    return !1;
                if (h = u + 1,
                h < b && 40 === e.src.charCodeAt(h)) {
                    for (h++; h < b && (c = e.src.charCodeAt(h),
                    a(c) || 10 === c); h++)
                        ;
                    if (h >= b)
                        return !1;
                    for (v = h,
                    f = s(e.src, h, e.posMax),
                    f.ok && (g = e.md.normalizeLink(f.str),
                    e.md.validateLink(g) ? h = f.pos : g = ""),
                    v = h; h < b && (c = e.src.charCodeAt(h),
                    a(c) || 10 === c); h++)
                        ;
                    if (f = o(e.src, h, e.posMax),
                    h < b && v !== h && f.ok)
                        for (m = f.str,
                        h = f.pos; h < b && (c = e.src.charCodeAt(h),
                        a(c) || 10 === c); h++)
                            ;
                    else
                        m = "";
                    if (h >= b || 41 !== e.src.charCodeAt(h))
                        return e.pos = k,
                        !1;
                    h++
                } else {
                    if ("undefined" == typeof e.env.references)
                        return !1;
                    if (h < b && 91 === e.src.charCodeAt(h) ? (v = h + 1,
                    h = n(e, h),
                    h >= 0 ? l = e.src.slice(v, h++) : h = u + 1) : h = u + 1,
                    l || (l = e.src.slice(p, u)),
                    d = e.env.references[i(l)],
                    !d)
                        return e.pos = k,
                        !1;
                    g = d.href,
                    m = d.title
                }
                return r || (e.pos = p,
                e.posMax = u,
                _ = e.push("link_open", "a", 1),
                _.attrs = t = [["href", g]],
                m && t.push(["title", m]),
                e.md.inline.tokenize(e),
                _ = e.push("link_close", "a", -1)),
                e.pos = h,
                e.posMax = b,
                !0
            }
        }
        , {
            "../common/utils": 4,
            "../helpers/parse_link_destination": 6,
            "../helpers/parse_link_label": 7,
            "../helpers/parse_link_title": 8
        }],
        46: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r) {
                var t, n, s = e.pos;
                if (10 !== e.src.charCodeAt(s))
                    return !1;
                for (t = e.pending.length - 1,
                n = e.posMax,
                r || (t >= 0 && 32 === e.pending.charCodeAt(t) ? t >= 1 && 32 === e.pending.charCodeAt(t - 1) ? (e.pending = e.pending.replace(/ +$/, ""),
                e.push("hardbreak", "br", 0)) : (e.pending = e.pending.slice(0, -1),
                e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)),
                s++; s < n && 32 === e.src.charCodeAt(s); )
                    s++;
                return e.pos = s,
                !0
            }
        }
        , {}],
        47: [function(e, r, t) {
            "use strict";
            function n(e, r, t, n) {
                this.src = e,
                this.env = t,
                this.md = r,
                this.tokens = n,
                this.pos = 0,
                this.posMax = this.src.length,
                this.level = 0,
                this.pending = "",
                this.pendingLevel = 0,
                this.cache = {},
                this.delimiters = []
            }
            var s = e("../token")
              , o = e("../common/utils").isWhiteSpace
              , i = e("../common/utils").isPunctChar
              , a = e("../common/utils").isMdAsciiPunct;
            n.prototype.pushPending = function() {
                var e = new s("text","",0);
                return e.content = this.pending,
                e.level = this.pendingLevel,
                this.tokens.push(e),
                this.pending = "",
                e
            }
            ,
            n.prototype.push = function(e, r, t) {
                this.pending && this.pushPending();
                var n = new s(e,r,t);
                return t < 0 && this.level--,
                n.level = this.level,
                t > 0 && this.level++,
                this.pendingLevel = this.level,
                this.tokens.push(n),
                n
            }
            ,
            n.prototype.scanDelims = function(e, r) {
                var t, n, s, c, l, u, p, h, f, d = e, m = !0, _ = !0, g = this.posMax, k = this.src.charCodeAt(e);
                for (t = e > 0 ? this.src.charCodeAt(e - 1) : 32; d < g && this.src.charCodeAt(d) === k; )
                    d++;
                return s = d - e,
                n = d < g ? this.src.charCodeAt(d) : 32,
                p = a(t) || i(String.fromCharCode(t)),
                f = a(n) || i(String.fromCharCode(n)),
                u = o(t),
                h = o(n),
                h ? m = !1 : f && (u || p || (m = !1)),
                u ? _ = !1 : p && (h || f || (_ = !1)),
                r ? (c = m,
                l = _) : (c = m && (!_ || p),
                l = _ && (!m || f)),
                {
                    can_open: c,
                    can_close: l,
                    length: s
                }
            }
            ,
            n.prototype.Token = s,
            r.exports = n
        }
        , {
            "../common/utils": 4,
            "../token": 51
        }],
        48: [function(e, r, t) {
            "use strict";
            r.exports.tokenize = function(e, r) {
                var t, n, s, o, i, a = e.pos, c = e.src.charCodeAt(a);
                if (r)
                    return !1;
                if (126 !== c)
                    return !1;
                if (n = e.scanDelims(e.pos, !0),
                o = n.length,
                i = String.fromCharCode(c),
                o < 2)
                    return !1;
                for (o % 2 && (s = e.push("text", "", 0),
                s.content = i,
                o--),
                t = 0; t < o; t += 2)
                    s = e.push("text", "", 0),
                    s.content = i + i,
                    e.delimiters.push({
                        marker: c,
                        jump: t,
                        token: e.tokens.length - 1,
                        level: e.level,
                        end: -1,
                        open: n.can_open,
                        close: n.can_close
                    });
                return e.pos += n.length,
                !0
            }
            ,
            r.exports.postProcess = function(e) {
                var r, t, n, s, o, i = [], a = e.delimiters, c = e.delimiters.length;
                for (r = 0; r < c; r++)
                    n = a[r],
                    126 === n.marker && n.end !== -1 && (s = a[n.end],
                    o = e.tokens[n.token],
                    o.type = "s_open",
                    o.tag = "s",
                    o.nesting = 1,
                    o.markup = "~~",
                    o.content = "",
                    o = e.tokens[s.token],
                    o.type = "s_close",
                    o.tag = "s",
                    o.nesting = -1,
                    o.markup = "~~",
                    o.content = "",
                    "text" === e.tokens[s.token - 1].type && "~" === e.tokens[s.token - 1].content && i.push(s.token - 1));
                for (; i.length; ) {
                    for (r = i.pop(),
                    t = r + 1; t < e.tokens.length && "s_close" === e.tokens[t].type; )
                        t++;
                    t--,
                    r !== t && (o = e.tokens[t],
                    e.tokens[t] = e.tokens[r],
                    e.tokens[r] = o)
                }
            }
        }
        , {}],
        49: [function(e, r, t) {
            "use strict";
            function n(e) {
                switch (e) {
                case 10:
                case 33:
                case 35:
                case 36:
                case 37:
                case 38:
                case 42:
                case 43:
                case 45:
                case 58:
                case 60:
                case 61:
                case 62:
                case 64:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 123:
                case 125:
                case 126:
                    return !0;
                default:
                    return !1
                }
            }
            r.exports = function(e, r) {
                for (var t = e.pos; t < e.posMax && !n(e.src.charCodeAt(t)); )
                    t++;
                return t !== e.pos && (r || (e.pending += e.src.slice(e.pos, t)),
                e.pos = t,
                !0)
            }
        }
        , {}],
        50: [function(e, r, t) {
            "use strict";
            r.exports = function(e) {
                var r, t, n = 0, s = e.tokens, o = e.tokens.length;
                for (r = t = 0; r < o; r++)
                    n += s[r].nesting,
                    s[r].level = n,
                    "text" === s[r].type && r + 1 < o && "text" === s[r + 1].type ? s[r + 1].content = s[r].content + s[r + 1].content : (r !== t && (s[t] = s[r]),
                    t++);
                r !== t && (s.length = t)
            }
        }
        , {}],
        51: [function(e, r, t) {
            "use strict";
            function n(e, r, t) {
                this.type = e,
                this.tag = r,
                this.attrs = null,
                this.map = null,
                this.nesting = t,
                this.level = 0,
                this.children = null,
                this.content = "",
                this.markup = "",
                this.info = "",
                this.meta = null,
                this.block = !1,
                this.hidden = !1
            }
            n.prototype.attrIndex = function(e) {
                var r, t, n;
                if (!this.attrs)
                    return -1;
                for (r = this.attrs,
                t = 0,
                n = r.length; t < n; t++)
                    if (r[t][0] === e)
                        return t;
                return -1
            }
            ,
            n.prototype.attrPush = function(e) {
                this.attrs ? this.attrs.push(e) : this.attrs = [e]
            }
            ,
            n.prototype.attrSet = function(e, r) {
                var t = this.attrIndex(e)
                  , n = [e, r];
                t < 0 ? this.attrPush(n) : this.attrs[t] = n
            }
            ,
            n.prototype.attrGet = function(e) {
                var r = this.attrIndex(e)
                  , t = null;
                return r >= 0 && (t = this.attrs[r][1]),
                t
            }
            ,
            n.prototype.attrJoin = function(e, r) {
                var t = this.attrIndex(e);
                t < 0 ? this.attrPush([e, r]) : this.attrs[t][1] = this.attrs[t][1] + " " + r
            }
            ,
            r.exports = n
        }
        , {}],
        52: [function(e, r, t) {
            r.exports = {
                Aacute: "\xc1",
                aacute: "\xe1",
                Abreve: "\u0102",
                abreve: "\u0103",
                ac: "\u223e",
                acd: "\u223f",
                acE: "\u223e\u0333",
                Acirc: "\xc2",
                acirc: "\xe2",
                acute: "\xb4",
                Acy: "\u0410",
                acy: "\u0430",
                AElig: "\xc6",
                aelig: "\xe6",
                af: "\u2061",
                Afr: "\ud835\udd04",
                afr: "\ud835\udd1e",
                Agrave: "\xc0",
                agrave: "\xe0",
                alefsym: "\u2135",
                aleph: "\u2135",
                Alpha: "\u0391",
                alpha: "\u03b1",
                Amacr: "\u0100",
                amacr: "\u0101",
                amalg: "\u2a3f",
                amp: "&",
                AMP: "&",
                andand: "\u2a55",
                And: "\u2a53",
                and: "\u2227",
                andd: "\u2a5c",
                andslope: "\u2a58",
                andv: "\u2a5a",
                ang: "\u2220",
                ange: "\u29a4",
                angle: "\u2220",
                angmsdaa: "\u29a8",
                angmsdab: "\u29a9",
                angmsdac: "\u29aa",
                angmsdad: "\u29ab",
                angmsdae: "\u29ac",
                angmsdaf: "\u29ad",
                angmsdag: "\u29ae",
                angmsdah: "\u29af",
                angmsd: "\u2221",
                angrt: "\u221f",
                angrtvb: "\u22be",
                angrtvbd: "\u299d",
                angsph: "\u2222",
                angst: "\xc5",
                angzarr: "\u237c",
                Aogon: "\u0104",
                aogon: "\u0105",
                Aopf: "\ud835\udd38",
                aopf: "\ud835\udd52",
                apacir: "\u2a6f",
                ap: "\u2248",
                apE: "\u2a70",
                ape: "\u224a",
                apid: "\u224b",
                apos: "'",
                ApplyFunction: "\u2061",
                approx: "\u2248",
                approxeq: "\u224a",
                Aring: "\xc5",
                aring: "\xe5",
                Ascr: "\ud835\udc9c",
                ascr: "\ud835\udcb6",
                Assign: "\u2254",
                ast: "*",
                asymp: "\u2248",
                asympeq: "\u224d",
                Atilde: "\xc3",
                atilde: "\xe3",
                Auml: "\xc4",
                auml: "\xe4",
                awconint: "\u2233",
                awint: "\u2a11",
                backcong: "\u224c",
                backepsilon: "\u03f6",
                backprime: "\u2035",
                backsim: "\u223d",
                backsimeq: "\u22cd",
                Backslash: "\u2216",
                Barv: "\u2ae7",
                barvee: "\u22bd",
                barwed: "\u2305",
                Barwed: "\u2306",
                barwedge: "\u2305",
                bbrk: "\u23b5",
                bbrktbrk: "\u23b6",
                bcong: "\u224c",
                Bcy: "\u0411",
                bcy: "\u0431",
                bdquo: "\u201e",
                becaus: "\u2235",
                because: "\u2235",
                Because: "\u2235",
                bemptyv: "\u29b0",
                bepsi: "\u03f6",
                bernou: "\u212c",
                Bernoullis: "\u212c",
                Beta: "\u0392",
                beta: "\u03b2",
                beth: "\u2136",
                between: "\u226c",
                Bfr: "\ud835\udd05",
                bfr: "\ud835\udd1f",
                bigcap: "\u22c2",
                bigcirc: "\u25ef",
                bigcup: "\u22c3",
                bigodot: "\u2a00",
                bigoplus: "\u2a01",
                bigotimes: "\u2a02",
                bigsqcup: "\u2a06",
                bigstar: "\u2605",
                bigtriangledown: "\u25bd",
                bigtriangleup: "\u25b3",
                biguplus: "\u2a04",
                bigvee: "\u22c1",
                bigwedge: "\u22c0",
                bkarow: "\u290d",
                blacklozenge: "\u29eb",
                blacksquare: "\u25aa",
                blacktriangle: "\u25b4",
                blacktriangledown: "\u25be",
                blacktriangleleft: "\u25c2",
                blacktriangleright: "\u25b8",
                blank: "\u2423",
                blk12: "\u2592",
                blk14: "\u2591",
                blk34: "\u2593",
                block: "\u2588",
                bne: "=\u20e5",
                bnequiv: "\u2261\u20e5",
                bNot: "\u2aed",
                bnot: "\u2310",
                Bopf: "\ud835\udd39",
                bopf: "\ud835\udd53",
                bot: "\u22a5",
                bottom: "\u22a5",
                bowtie: "\u22c8",
                boxbox: "\u29c9",
                boxdl: "\u2510",
                boxdL: "\u2555",
                boxDl: "\u2556",
                boxDL: "\u2557",
                boxdr: "\u250c",
                boxdR: "\u2552",
                boxDr: "\u2553",
                boxDR: "\u2554",
                boxh: "\u2500",
                boxH: "\u2550",
                boxhd: "\u252c",
                boxHd: "\u2564",
                boxhD: "\u2565",
                boxHD: "\u2566",
                boxhu: "\u2534",
                boxHu: "\u2567",
                boxhU: "\u2568",
                boxHU: "\u2569",
                boxminus: "\u229f",
                boxplus: "\u229e",
                boxtimes: "\u22a0",
                boxul: "\u2518",
                boxuL: "\u255b",
                boxUl: "\u255c",
                boxUL: "\u255d",
                boxur: "\u2514",
                boxuR: "\u2558",
                boxUr: "\u2559",
                boxUR: "\u255a",
                boxv: "\u2502",
                boxV: "\u2551",
                boxvh: "\u253c",
                boxvH: "\u256a",
                boxVh: "\u256b",
                boxVH: "\u256c",
                boxvl: "\u2524",
                boxvL: "\u2561",
                boxVl: "\u2562",
                boxVL: "\u2563",
                boxvr: "\u251c",
                boxvR: "\u255e",
                boxVr: "\u255f",
                boxVR: "\u2560",
                bprime: "\u2035",
                breve: "\u02d8",
                Breve: "\u02d8",
                brvbar: "\xa6",
                bscr: "\ud835\udcb7",
                Bscr: "\u212c",
                bsemi: "\u204f",
                bsim: "\u223d",
                bsime: "\u22cd",
                bsolb: "\u29c5",
                bsol: "\\",
                bsolhsub: "\u27c8",
                bull: "\u2022",
                bullet: "\u2022",
                bump: "\u224e",
                bumpE: "\u2aae",
                bumpe: "\u224f",
                Bumpeq: "\u224e",
                bumpeq: "\u224f",
                Cacute: "\u0106",
                cacute: "\u0107",
                capand: "\u2a44",
                capbrcup: "\u2a49",
                capcap: "\u2a4b",
                cap: "\u2229",
                Cap: "\u22d2",
                capcup: "\u2a47",
                capdot: "\u2a40",
                CapitalDifferentialD: "\u2145",
                caps: "\u2229\ufe00",
                caret: "\u2041",
                caron: "\u02c7",
                Cayleys: "\u212d",
                ccaps: "\u2a4d",
                Ccaron: "\u010c",
                ccaron: "\u010d",
                Ccedil: "\xc7",
                ccedil: "\xe7",
                Ccirc: "\u0108",
                ccirc: "\u0109",
                Cconint: "\u2230",
                ccups: "\u2a4c",
                ccupssm: "\u2a50",
                Cdot: "\u010a",
                cdot: "\u010b",
                cedil: "\xb8",
                Cedilla: "\xb8",
                cemptyv: "\u29b2",
                cent: "\xa2",
                centerdot: "\xb7",
                CenterDot: "\xb7",
                cfr: "\ud835\udd20",
                Cfr: "\u212d",
                CHcy: "\u0427",
                chcy: "\u0447",
                check: "\u2713",
                checkmark: "\u2713",
                Chi: "\u03a7",
                chi: "\u03c7",
                circ: "\u02c6",
                circeq: "\u2257",
                circlearrowleft: "\u21ba",
                circlearrowright: "\u21bb",
                circledast: "\u229b",
                circledcirc: "\u229a",
                circleddash: "\u229d",
                CircleDot: "\u2299",
                circledR: "\xae",
                circledS: "\u24c8",
                CircleMinus: "\u2296",
                CirclePlus: "\u2295",
                CircleTimes: "\u2297",
                cir: "\u25cb",
                cirE: "\u29c3",
                cire: "\u2257",
                cirfnint: "\u2a10",
                cirmid: "\u2aef",
                cirscir: "\u29c2",
                ClockwiseContourIntegral: "\u2232",
                CloseCurlyDoubleQuote: "\u201d",
                CloseCurlyQuote: "\u2019",
                clubs: "\u2663",
                clubsuit: "\u2663",
                colon: ":",
                Colon: "\u2237",
                Colone: "\u2a74",
                colone: "\u2254",
                coloneq: "\u2254",
                comma: ",",
                commat: "@",
                comp: "\u2201",
                compfn: "\u2218",
                complement: "\u2201",
                complexes: "\u2102",
                cong: "\u2245",
                congdot: "\u2a6d",
                Congruent: "\u2261",
                conint: "\u222e",
                Conint: "\u222f",
                ContourIntegral: "\u222e",
                copf: "\ud835\udd54",
                Copf: "\u2102",
                coprod: "\u2210",
                Coproduct: "\u2210",
                copy: "\xa9",
                COPY: "\xa9",
                copysr: "\u2117",
                CounterClockwiseContourIntegral: "\u2233",
                crarr: "\u21b5",
                cross: "\u2717",
                Cross: "\u2a2f",
                Cscr: "\ud835\udc9e",
                cscr: "\ud835\udcb8",
                csub: "\u2acf",
                csube: "\u2ad1",
                csup: "\u2ad0",
                csupe: "\u2ad2",
                ctdot: "\u22ef",
                cudarrl: "\u2938",
                cudarrr: "\u2935",
                cuepr: "\u22de",
                cuesc: "\u22df",
                cularr: "\u21b6",
                cularrp: "\u293d",
                cupbrcap: "\u2a48",
                cupcap: "\u2a46",
                CupCap: "\u224d",
                cup: "\u222a",
                Cup: "\u22d3",
                cupcup: "\u2a4a",
                cupdot: "\u228d",
                cupor: "\u2a45",
                cups: "\u222a\ufe00",
                curarr: "\u21b7",
                curarrm: "\u293c",
                curlyeqprec: "\u22de",
                curlyeqsucc: "\u22df",
                curlyvee: "\u22ce",
                curlywedge: "\u22cf",
                curren: "\xa4",
                curvearrowleft: "\u21b6",
                curvearrowright: "\u21b7",
                cuvee: "\u22ce",
                cuwed: "\u22cf",
                cwconint: "\u2232",
                cwint: "\u2231",
                cylcty: "\u232d",
                dagger: "\u2020",
                Dagger: "\u2021",
                daleth: "\u2138",
                darr: "\u2193",
                Darr: "\u21a1",
                dArr: "\u21d3",
                dash: "\u2010",
                Dashv: "\u2ae4",
                dashv: "\u22a3",
                dbkarow: "\u290f",
                dblac: "\u02dd",
                Dcaron: "\u010e",
                dcaron: "\u010f",
                Dcy: "\u0414",
                dcy: "\u0434",
                ddagger: "\u2021",
                ddarr: "\u21ca",
                DD: "\u2145",
                dd: "\u2146",
                DDotrahd: "\u2911",
                ddotseq: "\u2a77",
                deg: "\xb0",
                Del: "\u2207",
                Delta: "\u0394",
                delta: "\u03b4",
                demptyv: "\u29b1",
                dfisht: "\u297f",
                Dfr: "\ud835\udd07",
                dfr: "\ud835\udd21",
                dHar: "\u2965",
                dharl: "\u21c3",
                dharr: "\u21c2",
                DiacriticalAcute: "\xb4",
                DiacriticalDot: "\u02d9",
                DiacriticalDoubleAcute: "\u02dd",
                DiacriticalGrave: "`",
                DiacriticalTilde: "\u02dc",
                diam: "\u22c4",
                diamond: "\u22c4",
                Diamond: "\u22c4",
                diamondsuit: "\u2666",
                diams: "\u2666",
                die: "\xa8",
                DifferentialD: "\u2146",
                digamma: "\u03dd",
                disin: "\u22f2",
                div: "\xf7",
                divide: "\xf7",
                divideontimes: "\u22c7",
                divonx: "\u22c7",
                DJcy: "\u0402",
                djcy: "\u0452",
                dlcorn: "\u231e",
                dlcrop: "\u230d",
                dollar: "$",
                Dopf: "\ud835\udd3b",
                dopf: "\ud835\udd55",
                Dot: "\xa8",
                dot: "\u02d9",
                DotDot: "\u20dc",
                doteq: "\u2250",
                doteqdot: "\u2251",
                DotEqual: "\u2250",
                dotminus: "\u2238",
                dotplus: "\u2214",
                dotsquare: "\u22a1",
                doublebarwedge: "\u2306",
                DoubleContourIntegral: "\u222f",
                DoubleDot: "\xa8",
                DoubleDownArrow: "\u21d3",
                DoubleLeftArrow: "\u21d0",
                DoubleLeftRightArrow: "\u21d4",
                DoubleLeftTee: "\u2ae4",
                DoubleLongLeftArrow: "\u27f8",
                DoubleLongLeftRightArrow: "\u27fa",
                DoubleLongRightArrow: "\u27f9",
                DoubleRightArrow: "\u21d2",
                DoubleRightTee: "\u22a8",
                DoubleUpArrow: "\u21d1",
                DoubleUpDownArrow: "\u21d5",
                DoubleVerticalBar: "\u2225",
                DownArrowBar: "\u2913",
                downarrow: "\u2193",
                DownArrow: "\u2193",
                Downarrow: "\u21d3",
                DownArrowUpArrow: "\u21f5",
                DownBreve: "\u0311",
                downdownarrows: "\u21ca",
                downharpoonleft: "\u21c3",
                downharpoonright: "\u21c2",
                DownLeftRightVector: "\u2950",
                DownLeftTeeVector: "\u295e",
                DownLeftVectorBar: "\u2956",
                DownLeftVector: "\u21bd",
                DownRightTeeVector: "\u295f",
                DownRightVectorBar: "\u2957",
                DownRightVector: "\u21c1",
                DownTeeArrow: "\u21a7",
                DownTee: "\u22a4",
                drbkarow: "\u2910",
                drcorn: "\u231f",
                drcrop: "\u230c",
                Dscr: "\ud835\udc9f",
                dscr: "\ud835\udcb9",
                DScy: "\u0405",
                dscy: "\u0455",
                dsol: "\u29f6",
                Dstrok: "\u0110",
                dstrok: "\u0111",
                dtdot: "\u22f1",
                dtri: "\u25bf",
                dtrif: "\u25be",
                duarr: "\u21f5",
                duhar: "\u296f",
                dwangle: "\u29a6",
                DZcy: "\u040f",
                dzcy: "\u045f",
                dzigrarr: "\u27ff",
                Eacute: "\xc9",
                eacute: "\xe9",
                easter: "\u2a6e",
                Ecaron: "\u011a",
                ecaron: "\u011b",
                Ecirc: "\xca",
                ecirc: "\xea",
                ecir: "\u2256",
                ecolon: "\u2255",
                Ecy: "\u042d",
                ecy: "\u044d",
                eDDot: "\u2a77",
                Edot: "\u0116",
                edot: "\u0117",
                eDot: "\u2251",
                ee: "\u2147",
                efDot: "\u2252",
                Efr: "\ud835\udd08",
                efr: "\ud835\udd22",
                eg: "\u2a9a",
                Egrave: "\xc8",
                egrave: "\xe8",
                egs: "\u2a96",
                egsdot: "\u2a98",
                el: "\u2a99",
                Element: "\u2208",
                elinters: "\u23e7",
                ell: "\u2113",
                els: "\u2a95",
                elsdot: "\u2a97",
                Emacr: "\u0112",
                emacr: "\u0113",
                empty: "\u2205",
                emptyset: "\u2205",
                EmptySmallSquare: "\u25fb",
                emptyv: "\u2205",
                EmptyVerySmallSquare: "\u25ab",
                emsp13: "\u2004",
                emsp14: "\u2005",
                emsp: "\u2003",
                ENG: "\u014a",
                eng: "\u014b",
                ensp: "\u2002",
                Eogon: "\u0118",
                eogon: "\u0119",
                Eopf: "\ud835\udd3c",
                eopf: "\ud835\udd56",
                epar: "\u22d5",
                eparsl: "\u29e3",
                eplus: "\u2a71",
                epsi: "\u03b5",
                Epsilon: "\u0395",
                epsilon: "\u03b5",
                epsiv: "\u03f5",
                eqcirc: "\u2256",
                eqcolon: "\u2255",
                eqsim: "\u2242",
                eqslantgtr: "\u2a96",
                eqslantless: "\u2a95",
                Equal: "\u2a75",
                equals: "=",
                EqualTilde: "\u2242",
                equest: "\u225f",
                Equilibrium: "\u21cc",
                equiv: "\u2261",
                equivDD: "\u2a78",
                eqvparsl: "\u29e5",
                erarr: "\u2971",
                erDot: "\u2253",
                escr: "\u212f",
                Escr: "\u2130",
                esdot: "\u2250",
                Esim: "\u2a73",
                esim: "\u2242",
                Eta: "\u0397",
                eta: "\u03b7",
                ETH: "\xd0",
                eth: "\xf0",
                Euml: "\xcb",
                euml: "\xeb",
                euro: "\u20ac",
                excl: "!",
                exist: "\u2203",
                Exists: "\u2203",
                expectation: "\u2130",
                exponentiale: "\u2147",
                ExponentialE: "\u2147",
                fallingdotseq: "\u2252",
                Fcy: "\u0424",
                fcy: "\u0444",
                female: "\u2640",
                ffilig: "\ufb03",
                fflig: "\ufb00",
                ffllig: "\ufb04",
                Ffr: "\ud835\udd09",
                ffr: "\ud835\udd23",
                filig: "\ufb01",
                FilledSmallSquare: "\u25fc",
                FilledVerySmallSquare: "\u25aa",
                fjlig: "fj",
                flat: "\u266d",
                fllig: "\ufb02",
                fltns: "\u25b1",
                fnof: "\u0192",
                Fopf: "\ud835\udd3d",
                fopf: "\ud835\udd57",
                forall: "\u2200",
                ForAll: "\u2200",
                fork: "\u22d4",
                forkv: "\u2ad9",
                Fouriertrf: "\u2131",
                fpartint: "\u2a0d",
                frac12: "\xbd",
                frac13: "\u2153",
                frac14: "\xbc",
                frac15: "\u2155",
                frac16: "\u2159",
                frac18: "\u215b",
                frac23: "\u2154",
                frac25: "\u2156",
                frac34: "\xbe",
                frac35: "\u2157",
                frac38: "\u215c",
                frac45: "\u2158",
                frac56: "\u215a",
                frac58: "\u215d",
                frac78: "\u215e",
                frasl: "\u2044",
                frown: "\u2322",
                fscr: "\ud835\udcbb",
                Fscr: "\u2131",
                gacute: "\u01f5",
                Gamma: "\u0393",
                gamma: "\u03b3",
                Gammad: "\u03dc",
                gammad: "\u03dd",
                gap: "\u2a86",
                Gbreve: "\u011e",
                gbreve: "\u011f",
                Gcedil: "\u0122",
                Gcirc: "\u011c",
                gcirc: "\u011d",
                Gcy: "\u0413",
                gcy: "\u0433",
                Gdot: "\u0120",
                gdot: "\u0121",
                ge: "\u2265",
                gE: "\u2267",
                gEl: "\u2a8c",
                gel: "\u22db",
                geq: "\u2265",
                geqq: "\u2267",
                geqslant: "\u2a7e",
                gescc: "\u2aa9",
                ges: "\u2a7e",
                gesdot: "\u2a80",
                gesdoto: "\u2a82",
                gesdotol: "\u2a84",
                gesl: "\u22db\ufe00",
                gesles: "\u2a94",
                Gfr: "\ud835\udd0a",
                gfr: "\ud835\udd24",
                gg: "\u226b",
                Gg: "\u22d9",
                ggg: "\u22d9",
                gimel: "\u2137",
                GJcy: "\u0403",
                gjcy: "\u0453",
                gla: "\u2aa5",
                gl: "\u2277",
                glE: "\u2a92",
                glj: "\u2aa4",
                gnap: "\u2a8a",
                gnapprox: "\u2a8a",
                gne: "\u2a88",
                gnE: "\u2269",
                gneq: "\u2a88",
                gneqq: "\u2269",
                gnsim: "\u22e7",
                Gopf: "\ud835\udd3e",
                gopf: "\ud835\udd58",
                grave: "`",
                GreaterEqual: "\u2265",
                GreaterEqualLess: "\u22db",
                GreaterFullEqual: "\u2267",
                GreaterGreater: "\u2aa2",
                GreaterLess: "\u2277",
                GreaterSlantEqual: "\u2a7e",
                GreaterTilde: "\u2273",
                Gscr: "\ud835\udca2",
                gscr: "\u210a",
                gsim: "\u2273",
                gsime: "\u2a8e",
                gsiml: "\u2a90",
                gtcc: "\u2aa7",
                gtcir: "\u2a7a",
                gt: ">",
                GT: ">",
                Gt: "\u226b",
                gtdot: "\u22d7",
                gtlPar: "\u2995",
                gtquest: "\u2a7c",
                gtrapprox: "\u2a86",
                gtrarr: "\u2978",
                gtrdot: "\u22d7",
                gtreqless: "\u22db",
                gtreqqless: "\u2a8c",
                gtrless: "\u2277",
                gtrsim: "\u2273",
                gvertneqq: "\u2269\ufe00",
                gvnE: "\u2269\ufe00",
                Hacek: "\u02c7",
                hairsp: "\u200a",
                half: "\xbd",
                hamilt: "\u210b",
                HARDcy: "\u042a",
                hardcy: "\u044a",
                harrcir: "\u2948",
                harr: "\u2194",
                hArr: "\u21d4",
                harrw: "\u21ad",
                Hat: "^",
                hbar: "\u210f",
                Hcirc: "\u0124",
                hcirc: "\u0125",
                hearts: "\u2665",
                heartsuit: "\u2665",
                hellip: "\u2026",
                hercon: "\u22b9",
                hfr: "\ud835\udd25",
                Hfr: "\u210c",
                HilbertSpace: "\u210b",
                hksearow: "\u2925",
                hkswarow: "\u2926",
                hoarr: "\u21ff",
                homtht: "\u223b",
                hookleftarrow: "\u21a9",
                hookrightarrow: "\u21aa",
                hopf: "\ud835\udd59",
                Hopf: "\u210d",
                horbar: "\u2015",
                HorizontalLine: "\u2500",
                hscr: "\ud835\udcbd",
                Hscr: "\u210b",
                hslash: "\u210f",
                Hstrok: "\u0126",
                hstrok: "\u0127",
                HumpDownHump: "\u224e",
                HumpEqual: "\u224f",
                hybull: "\u2043",
                hyphen: "\u2010",
                Iacute: "\xcd",
                iacute: "\xed",
                ic: "\u2063",
                Icirc: "\xce",
                icirc: "\xee",
                Icy: "\u0418",
                icy: "\u0438",
                Idot: "\u0130",
                IEcy: "\u0415",
                iecy: "\u0435",
                iexcl: "\xa1",
                iff: "\u21d4",
                ifr: "\ud835\udd26",
                Ifr: "\u2111",
                Igrave: "\xcc",
                igrave: "\xec",
                ii: "\u2148",
                iiiint: "\u2a0c",
                iiint: "\u222d",
                iinfin: "\u29dc",
                iiota: "\u2129",
                IJlig: "\u0132",
                ijlig: "\u0133",
                Imacr: "\u012a",
                imacr: "\u012b",
                image: "\u2111",
                ImaginaryI: "\u2148",
                imagline: "\u2110",
                imagpart: "\u2111",
                imath: "\u0131",
                Im: "\u2111",
                imof: "\u22b7",
                imped: "\u01b5",
                Implies: "\u21d2",
                incare: "\u2105",
                in: "\u2208",
                infin: "\u221e",
                infintie: "\u29dd",
                inodot: "\u0131",
                intcal: "\u22ba",
                int: "\u222b",
                Int: "\u222c",
                integers: "\u2124",
                Integral: "\u222b",
                intercal: "\u22ba",
                Intersection: "\u22c2",
                intlarhk: "\u2a17",
                intprod: "\u2a3c",
                InvisibleComma: "\u2063",
                InvisibleTimes: "\u2062",
                IOcy: "\u0401",
                iocy: "\u0451",
                Iogon: "\u012e",
                iogon: "\u012f",
                Iopf: "\ud835\udd40",
                iopf: "\ud835\udd5a",
                Iota: "\u0399",
                iota: "\u03b9",
                iprod: "\u2a3c",
                iquest: "\xbf",
                iscr: "\ud835\udcbe",
                Iscr: "\u2110",
                isin: "\u2208",
                isindot: "\u22f5",
                isinE: "\u22f9",
                isins: "\u22f4",
                isinsv: "\u22f3",
                isinv: "\u2208",
                it: "\u2062",
                Itilde: "\u0128",
                itilde: "\u0129",
                Iukcy: "\u0406",
                iukcy: "\u0456",
                Iuml: "\xcf",
                iuml: "\xef",
                Jcirc: "\u0134",
                jcirc: "\u0135",
                Jcy: "\u0419",
                jcy: "\u0439",
                Jfr: "\ud835\udd0d",
                jfr: "\ud835\udd27",
                jmath: "\u0237",
                Jopf: "\ud835\udd41",
                jopf: "\ud835\udd5b",
                Jscr: "\ud835\udca5",
                jscr: "\ud835\udcbf",
                Jsercy: "\u0408",
                jsercy: "\u0458",
                Jukcy: "\u0404",
                jukcy: "\u0454",
                Kappa: "\u039a",
                kappa: "\u03ba",
                kappav: "\u03f0",
                Kcedil: "\u0136",
                kcedil: "\u0137",
                Kcy: "\u041a",
                kcy: "\u043a",
                Kfr: "\ud835\udd0e",
                kfr: "\ud835\udd28",
                kgreen: "\u0138",
                KHcy: "\u0425",
                khcy: "\u0445",
                KJcy: "\u040c",
                kjcy: "\u045c",
                Kopf: "\ud835\udd42",
                kopf: "\ud835\udd5c",
                Kscr: "\ud835\udca6",
                kscr: "\ud835\udcc0",
                lAarr: "\u21da",
                Lacute: "\u0139",
                lacute: "\u013a",
                laemptyv: "\u29b4",
                lagran: "\u2112",
                Lambda: "\u039b",
                lambda: "\u03bb",
                lang: "\u27e8",
                Lang: "\u27ea",
                langd: "\u2991",
                langle: "\u27e8",
                lap: "\u2a85",
                Laplacetrf: "\u2112",
                laquo: "\xab",
                larrb: "\u21e4",
                larrbfs: "\u291f",
                larr: "\u2190",
                Larr: "\u219e",
                lArr: "\u21d0",
                larrfs: "\u291d",
                larrhk: "\u21a9",
                larrlp: "\u21ab",
                larrpl: "\u2939",
                larrsim: "\u2973",
                larrtl: "\u21a2",
                latail: "\u2919",
                lAtail: "\u291b",
                lat: "\u2aab",
                late: "\u2aad",
                lates: "\u2aad\ufe00",
                lbarr: "\u290c",
                lBarr: "\u290e",
                lbbrk: "\u2772",
                lbrace: "{",
                lbrack: "[",
                lbrke: "\u298b",
                lbrksld: "\u298f",
                lbrkslu: "\u298d",
                Lcaron: "\u013d",
                lcaron: "\u013e",
                Lcedil: "\u013b",
                lcedil: "\u013c",
                lceil: "\u2308",
                lcub: "{",
                Lcy: "\u041b",
                lcy: "\u043b",
                ldca: "\u2936",
                ldquo: "\u201c",
                ldquor: "\u201e",
                ldrdhar: "\u2967",
                ldrushar: "\u294b",
                ldsh: "\u21b2",
                le: "\u2264",
                lE: "\u2266",
                LeftAngleBracket: "\u27e8",
                LeftArrowBar: "\u21e4",
                leftarrow: "\u2190",
                LeftArrow: "\u2190",
                Leftarrow: "\u21d0",
                LeftArrowRightArrow: "\u21c6",
                leftarrowtail: "\u21a2",
                LeftCeiling: "\u2308",
                LeftDoubleBracket: "\u27e6",
                LeftDownTeeVector: "\u2961",
                LeftDownVectorBar: "\u2959",
                LeftDownVector: "\u21c3",
                LeftFloor: "\u230a",
                leftharpoondown: "\u21bd",
                leftharpoonup: "\u21bc",
                leftleftarrows: "\u21c7",
                leftrightarrow: "\u2194",
                LeftRightArrow: "\u2194",
                Leftrightarrow: "\u21d4",
                leftrightarrows: "\u21c6",
                leftrightharpoons: "\u21cb",
                leftrightsquigarrow: "\u21ad",
                LeftRightVector: "\u294e",
                LeftTeeArrow: "\u21a4",
                LeftTee: "\u22a3",
                LeftTeeVector: "\u295a",
                leftthreetimes: "\u22cb",
                LeftTriangleBar: "\u29cf",
                LeftTriangle: "\u22b2",
                LeftTriangleEqual: "\u22b4",
                LeftUpDownVector: "\u2951",
                LeftUpTeeVector: "\u2960",
                LeftUpVectorBar: "\u2958",
                LeftUpVector: "\u21bf",
                LeftVectorBar: "\u2952",
                LeftVector: "\u21bc",
                lEg: "\u2a8b",
                leg: "\u22da",
                leq: "\u2264",
                leqq: "\u2266",
                leqslant: "\u2a7d",
                lescc: "\u2aa8",
                les: "\u2a7d",
                lesdot: "\u2a7f",
                lesdoto: "\u2a81",
                lesdotor: "\u2a83",
                lesg: "\u22da\ufe00",
                lesges: "\u2a93",
                lessapprox: "\u2a85",
                lessdot: "\u22d6",
                lesseqgtr: "\u22da",
                lesseqqgtr: "\u2a8b",
                LessEqualGreater: "\u22da",
                LessFullEqual: "\u2266",
                LessGreater: "\u2276",
                lessgtr: "\u2276",
                LessLess: "\u2aa1",
                lesssim: "\u2272",
                LessSlantEqual: "\u2a7d",
                LessTilde: "\u2272",
                lfisht: "\u297c",
                lfloor: "\u230a",
                Lfr: "\ud835\udd0f",
                lfr: "\ud835\udd29",
                lg: "\u2276",
                lgE: "\u2a91",
                lHar: "\u2962",
                lhard: "\u21bd",
                lharu: "\u21bc",
                lharul: "\u296a",
                lhblk: "\u2584",
                LJcy: "\u0409",
                ljcy: "\u0459",
                llarr: "\u21c7",
                ll: "\u226a",
                Ll: "\u22d8",
                llcorner: "\u231e",
                Lleftarrow: "\u21da",
                llhard: "\u296b",
                lltri: "\u25fa",
                Lmidot: "\u013f",
                lmidot: "\u0140",
                lmoustache: "\u23b0",
                lmoust: "\u23b0",
                lnap: "\u2a89",
                lnapprox: "\u2a89",
                lne: "\u2a87",
                lnE: "\u2268",
                lneq: "\u2a87",
                lneqq: "\u2268",
                lnsim: "\u22e6",
                loang: "\u27ec",
                loarr: "\u21fd",
                lobrk: "\u27e6",
                longleftarrow: "\u27f5",
                LongLeftArrow: "\u27f5",
                Longleftarrow: "\u27f8",
                longleftrightarrow: "\u27f7",
                LongLeftRightArrow: "\u27f7",
                Longleftrightarrow: "\u27fa",
                longmapsto: "\u27fc",
                longrightarrow: "\u27f6",
                LongRightArrow: "\u27f6",
                Longrightarrow: "\u27f9",
                looparrowleft: "\u21ab",
                looparrowright: "\u21ac",
                lopar: "\u2985",
                Lopf: "\ud835\udd43",
                lopf: "\ud835\udd5d",
                loplus: "\u2a2d",
                lotimes: "\u2a34",
                lowast: "\u2217",
                lowbar: "_",
                LowerLeftArrow: "\u2199",
                LowerRightArrow: "\u2198",
                loz: "\u25ca",
                lozenge: "\u25ca",
                lozf: "\u29eb",
                lpar: "(",
                lparlt: "\u2993",
                lrarr: "\u21c6",
                lrcorner: "\u231f",
                lrhar: "\u21cb",
                lrhard: "\u296d",
                lrm: "\u200e",
                lrtri: "\u22bf",
                lsaquo: "\u2039",
                lscr: "\ud835\udcc1",
                Lscr: "\u2112",
                lsh: "\u21b0",
                Lsh: "\u21b0",
                lsim: "\u2272",
                lsime: "\u2a8d",
                lsimg: "\u2a8f",
                lsqb: "[",
                lsquo: "\u2018",
                lsquor: "\u201a",
                Lstrok: "\u0141",
                lstrok: "\u0142",
                ltcc: "\u2aa6",
                ltcir: "\u2a79",
                lt: "<",
                LT: "<",
                Lt: "\u226a",
                ltdot: "\u22d6",
                lthree: "\u22cb",
                ltimes: "\u22c9",
                ltlarr: "\u2976",
                ltquest: "\u2a7b",
                ltri: "\u25c3",
                ltrie: "\u22b4",
                ltrif: "\u25c2",
                ltrPar: "\u2996",
                lurdshar: "\u294a",
                luruhar: "\u2966",
                lvertneqq: "\u2268\ufe00",
                lvnE: "\u2268\ufe00",
                macr: "\xaf",
                male: "\u2642",
                malt: "\u2720",
                maltese: "\u2720",
                Map: "\u2905",
                map: "\u21a6",
                mapsto: "\u21a6",
                mapstodown: "\u21a7",
                mapstoleft: "\u21a4",
                mapstoup: "\u21a5",
                marker: "\u25ae",
                mcomma: "\u2a29",
                Mcy: "\u041c",
                mcy: "\u043c",
                mdash: "\u2014",
                mDDot: "\u223a",
                measuredangle: "\u2221",
                MediumSpace: "\u205f",
                Mellintrf: "\u2133",
                Mfr: "\ud835\udd10",
                mfr: "\ud835\udd2a",
                mho: "\u2127",
                micro: "\xb5",
                midast: "*",
                midcir: "\u2af0",
                mid: "\u2223",
                middot: "\xb7",
                minusb: "\u229f",
                minus: "\u2212",
                minusd: "\u2238",
                minusdu: "\u2a2a",
                MinusPlus: "\u2213",
                mlcp: "\u2adb",
                mldr: "\u2026",
                mnplus: "\u2213",
                models: "\u22a7",
                Mopf: "\ud835\udd44",
                mopf: "\ud835\udd5e",
                mp: "\u2213",
                mscr: "\ud835\udcc2",
                Mscr: "\u2133",
                mstpos: "\u223e",
                Mu: "\u039c",
                mu: "\u03bc",
                multimap: "\u22b8",
                mumap: "\u22b8",
                nabla: "\u2207",
                Nacute: "\u0143",
                nacute: "\u0144",
                nang: "\u2220\u20d2",
                nap: "\u2249",
                napE: "\u2a70\u0338",
                napid: "\u224b\u0338",
                napos: "\u0149",
                napprox: "\u2249",
                natural: "\u266e",
                naturals: "\u2115",
                natur: "\u266e",
                nbsp: "\xa0",
                nbump: "\u224e\u0338",
                nbumpe: "\u224f\u0338",
                ncap: "\u2a43",
                Ncaron: "\u0147",
                ncaron: "\u0148",
                Ncedil: "\u0145",
                ncedil: "\u0146",
                ncong: "\u2247",
                ncongdot: "\u2a6d\u0338",
                ncup: "\u2a42",
                Ncy: "\u041d",
                ncy: "\u043d",
                ndash: "\u2013",
                nearhk: "\u2924",
                nearr: "\u2197",
                neArr: "\u21d7",
                nearrow: "\u2197",
                ne: "\u2260",
                nedot: "\u2250\u0338",
                NegativeMediumSpace: "\u200b",
                NegativeThickSpace: "\u200b",
                NegativeThinSpace: "\u200b",
                NegativeVeryThinSpace: "\u200b",
                nequiv: "\u2262",
                nesear: "\u2928",
                nesim: "\u2242\u0338",
                NestedGreaterGreater: "\u226b",
                NestedLessLess: "\u226a",
                NewLine: "\n",
                nexist: "\u2204",
                nexists: "\u2204",
                Nfr: "\ud835\udd11",
                nfr: "\ud835\udd2b",
                ngE: "\u2267\u0338",
                nge: "\u2271",
                ngeq: "\u2271",
                ngeqq: "\u2267\u0338",
                ngeqslant: "\u2a7e\u0338",
                nges: "\u2a7e\u0338",
                nGg: "\u22d9\u0338",
                ngsim: "\u2275",
                nGt: "\u226b\u20d2",
                ngt: "\u226f",
                ngtr: "\u226f",
                nGtv: "\u226b\u0338",
                nharr: "\u21ae",
                nhArr: "\u21ce",
                nhpar: "\u2af2",
                ni: "\u220b",
                nis: "\u22fc",
                nisd: "\u22fa",
                niv: "\u220b",
                NJcy: "\u040a",
                njcy: "\u045a",
                nlarr: "\u219a",
                nlArr: "\u21cd",
                nldr: "\u2025",
                nlE: "\u2266\u0338",
                nle: "\u2270",
                nleftarrow: "\u219a",
                nLeftarrow: "\u21cd",
                nleftrightarrow: "\u21ae",
                nLeftrightarrow: "\u21ce",
                nleq: "\u2270",
                nleqq: "\u2266\u0338",
                nleqslant: "\u2a7d\u0338",
                nles: "\u2a7d\u0338",
                nless: "\u226e",
                nLl: "\u22d8\u0338",
                nlsim: "\u2274",
                nLt: "\u226a\u20d2",
                nlt: "\u226e",
                nltri: "\u22ea",
                nltrie: "\u22ec",
                nLtv: "\u226a\u0338",
                nmid: "\u2224",
                NoBreak: "\u2060",
                NonBreakingSpace: "\xa0",
                nopf: "\ud835\udd5f",
                Nopf: "\u2115",
                Not: "\u2aec",
                not: "\xac",
                NotCongruent: "\u2262",
                NotCupCap: "\u226d",
                NotDoubleVerticalBar: "\u2226",
                NotElement: "\u2209",
                NotEqual: "\u2260",
                NotEqualTilde: "\u2242\u0338",
                NotExists: "\u2204",
                NotGreater: "\u226f",
                NotGreaterEqual: "\u2271",
                NotGreaterFullEqual: "\u2267\u0338",
                NotGreaterGreater: "\u226b\u0338",
                NotGreaterLess: "\u2279",
                NotGreaterSlantEqual: "\u2a7e\u0338",
                NotGreaterTilde: "\u2275",
                NotHumpDownHump: "\u224e\u0338",
                NotHumpEqual: "\u224f\u0338",
                notin: "\u2209",
                notindot: "\u22f5\u0338",
                notinE: "\u22f9\u0338",
                notinva: "\u2209",
                notinvb: "\u22f7",
                notinvc: "\u22f6",
                NotLeftTriangleBar: "\u29cf\u0338",
                NotLeftTriangle: "\u22ea",
                NotLeftTriangleEqual: "\u22ec",
                NotLess: "\u226e",
                NotLessEqual: "\u2270",
                NotLessGreater: "\u2278",
                NotLessLess: "\u226a\u0338",
                NotLessSlantEqual: "\u2a7d\u0338",
                NotLessTilde: "\u2274",
                NotNestedGreaterGreater: "\u2aa2\u0338",
                NotNestedLessLess: "\u2aa1\u0338",
                notni: "\u220c",
                notniva: "\u220c",
                notnivb: "\u22fe",
                notnivc: "\u22fd",
                NotPrecedes: "\u2280",
                NotPrecedesEqual: "\u2aaf\u0338",
                NotPrecedesSlantEqual: "\u22e0",
                NotReverseElement: "\u220c",
                NotRightTriangleBar: "\u29d0\u0338",
                NotRightTriangle: "\u22eb",
                NotRightTriangleEqual: "\u22ed",
                NotSquareSubset: "\u228f\u0338",
                NotSquareSubsetEqual: "\u22e2",
                NotSquareSuperset: "\u2290\u0338",
                NotSquareSupersetEqual: "\u22e3",
                NotSubset: "\u2282\u20d2",
                NotSubsetEqual: "\u2288",
                NotSucceeds: "\u2281",
                NotSucceedsEqual: "\u2ab0\u0338",
                NotSucceedsSlantEqual: "\u22e1",
                NotSucceedsTilde: "\u227f\u0338",
                NotSuperset: "\u2283\u20d2",
                NotSupersetEqual: "\u2289",
                NotTilde: "\u2241",
                NotTildeEqual: "\u2244",
                NotTildeFullEqual: "\u2247",
                NotTildeTilde: "\u2249",
                NotVerticalBar: "\u2224",
                nparallel: "\u2226",
                npar: "\u2226",
                nparsl: "\u2afd\u20e5",
                npart: "\u2202\u0338",
                npolint: "\u2a14",
                npr: "\u2280",
                nprcue: "\u22e0",
                nprec: "\u2280",
                npreceq: "\u2aaf\u0338",
                npre: "\u2aaf\u0338",
                nrarrc: "\u2933\u0338",
                nrarr: "\u219b",
                nrArr: "\u21cf",
                nrarrw: "\u219d\u0338",
                nrightarrow: "\u219b",
                nRightarrow: "\u21cf",
                nrtri: "\u22eb",
                nrtrie: "\u22ed",
                nsc: "\u2281",
                nsccue: "\u22e1",
                nsce: "\u2ab0\u0338",
                Nscr: "\ud835\udca9",
                nscr: "\ud835\udcc3",
                nshortmid: "\u2224",
                nshortparallel: "\u2226",
                nsim: "\u2241",
                nsime: "\u2244",
                nsimeq: "\u2244",
                nsmid: "\u2224",
                nspar: "\u2226",
                nsqsube: "\u22e2",
                nsqsupe: "\u22e3",
                nsub: "\u2284",
                nsubE: "\u2ac5\u0338",
                nsube: "\u2288",
                nsubset: "\u2282\u20d2",
                nsubseteq: "\u2288",
                nsubseteqq: "\u2ac5\u0338",
                nsucc: "\u2281",
                nsucceq: "\u2ab0\u0338",
                nsup: "\u2285",
                nsupE: "\u2ac6\u0338",
                nsupe: "\u2289",
                nsupset: "\u2283\u20d2",
                nsupseteq: "\u2289",
                nsupseteqq: "\u2ac6\u0338",
                ntgl: "\u2279",
                Ntilde: "\xd1",
                ntilde: "\xf1",
                ntlg: "\u2278",
                ntriangleleft: "\u22ea",
                ntrianglelefteq: "\u22ec",
                ntriangleright: "\u22eb",
                ntrianglerighteq: "\u22ed",
                Nu: "\u039d",
                nu: "\u03bd",
                num: "#",
                numero: "\u2116",
                numsp: "\u2007",
                nvap: "\u224d\u20d2",
                nvdash: "\u22ac",
                nvDash: "\u22ad",
                nVdash: "\u22ae",
                nVDash: "\u22af",
                nvge: "\u2265\u20d2",
                nvgt: ">\u20d2",
                nvHarr: "\u2904",
                nvinfin: "\u29de",
                nvlArr: "\u2902",
                nvle: "\u2264\u20d2",
                nvlt: "<\u20d2",
                nvltrie: "\u22b4\u20d2",
                nvrArr: "\u2903",
                nvrtrie: "\u22b5\u20d2",
                nvsim: "\u223c\u20d2",
                nwarhk: "\u2923",
                nwarr: "\u2196",
                nwArr: "\u21d6",
                nwarrow: "\u2196",
                nwnear: "\u2927",
                Oacute: "\xd3",
                oacute: "\xf3",
                oast: "\u229b",
                Ocirc: "\xd4",
                ocirc: "\xf4",
                ocir: "\u229a",
                Ocy: "\u041e",
                ocy: "\u043e",
                odash: "\u229d",
                Odblac: "\u0150",
                odblac: "\u0151",
                odiv: "\u2a38",
                odot: "\u2299",
                odsold: "\u29bc",
                OElig: "\u0152",
                oelig: "\u0153",
                ofcir: "\u29bf",
                Ofr: "\ud835\udd12",
                ofr: "\ud835\udd2c",
                ogon: "\u02db",
                Ograve: "\xd2",
                ograve: "\xf2",
                ogt: "\u29c1",
                ohbar: "\u29b5",
                ohm: "\u03a9",
                oint: "\u222e",
                olarr: "\u21ba",
                olcir: "\u29be",
                olcross: "\u29bb",
                oline: "\u203e",
                olt: "\u29c0",
                Omacr: "\u014c",
                omacr: "\u014d",
                Omega: "\u03a9",
                omega: "\u03c9",
                Omicron: "\u039f",
                omicron: "\u03bf",
                omid: "\u29b6",
                ominus: "\u2296",
                Oopf: "\ud835\udd46",
                oopf: "\ud835\udd60",
                opar: "\u29b7",
                OpenCurlyDoubleQuote: "\u201c",
                OpenCurlyQuote: "\u2018",
                operp: "\u29b9",
                oplus: "\u2295",
                orarr: "\u21bb",
                Or: "\u2a54",
                or: "\u2228",
                ord: "\u2a5d",
                order: "\u2134",
                orderof: "\u2134",
                ordf: "\xaa",
                ordm: "\xba",
                origof: "\u22b6",
                oror: "\u2a56",
                orslope: "\u2a57",
                orv: "\u2a5b",
                oS: "\u24c8",
                Oscr: "\ud835\udcaa",
                oscr: "\u2134",
                Oslash: "\xd8",
                oslash: "\xf8",
                osol: "\u2298",
                Otilde: "\xd5",
                otilde: "\xf5",
                otimesas: "\u2a36",
                Otimes: "\u2a37",
                otimes: "\u2297",
                Ouml: "\xd6",
                ouml: "\xf6",
                ovbar: "\u233d",
                OverBar: "\u203e",
                OverBrace: "\u23de",
                OverBracket: "\u23b4",
                OverParenthesis: "\u23dc",
                para: "\xb6",
                parallel: "\u2225",
                par: "\u2225",
                parsim: "\u2af3",
                parsl: "\u2afd",
                part: "\u2202",
                PartialD: "\u2202",
                Pcy: "\u041f",
                pcy: "\u043f",
                percnt: "%",
                period: ".",
                permil: "\u2030",
                perp: "\u22a5",
                pertenk: "\u2031",
                Pfr: "\ud835\udd13",
                pfr: "\ud835\udd2d",
                Phi: "\u03a6",
                phi: "\u03c6",
                phiv: "\u03d5",
                phmmat: "\u2133",
                phone: "\u260e",
                Pi: "\u03a0",
                pi: "\u03c0",
                pitchfork: "\u22d4",
                piv: "\u03d6",
                planck: "\u210f",
                planckh: "\u210e",
                plankv: "\u210f",
                plusacir: "\u2a23",
                plusb: "\u229e",
                pluscir: "\u2a22",
                plus: "+",
                plusdo: "\u2214",
                plusdu: "\u2a25",
                pluse: "\u2a72",
                PlusMinus: "\xb1",
                plusmn: "\xb1",
                plussim: "\u2a26",
                plustwo: "\u2a27",
                pm: "\xb1",
                Poincareplane: "\u210c",
                pointint: "\u2a15",
                popf: "\ud835\udd61",
                Popf: "\u2119",
                pound: "\xa3",
                prap: "\u2ab7",
                Pr: "\u2abb",
                pr: "\u227a",
                prcue: "\u227c",
                precapprox: "\u2ab7",
                prec: "\u227a",
                preccurlyeq: "\u227c",
                Precedes: "\u227a",
                PrecedesEqual: "\u2aaf",
                PrecedesSlantEqual: "\u227c",
                PrecedesTilde: "\u227e",
                preceq: "\u2aaf",
                precnapprox: "\u2ab9",
                precneqq: "\u2ab5",
                precnsim: "\u22e8",
                pre: "\u2aaf",
                prE: "\u2ab3",
                precsim: "\u227e",
                prime: "\u2032",
                Prime: "\u2033",
                primes: "\u2119",
                prnap: "\u2ab9",
                prnE: "\u2ab5",
                prnsim: "\u22e8",
                prod: "\u220f",
                Product: "\u220f",
                profalar: "\u232e",
                profline: "\u2312",
                profsurf: "\u2313",
                prop: "\u221d",
                Proportional: "\u221d",
                Proportion: "\u2237",
                propto: "\u221d",
                prsim: "\u227e",
                prurel: "\u22b0",
                Pscr: "\ud835\udcab",
                pscr: "\ud835\udcc5",
                Psi: "\u03a8",
                psi: "\u03c8",
                puncsp: "\u2008",
                Qfr: "\ud835\udd14",
                qfr: "\ud835\udd2e",
                qint: "\u2a0c",
                qopf: "\ud835\udd62",
                Qopf: "\u211a",
                qprime: "\u2057",
                Qscr: "\ud835\udcac",
                qscr: "\ud835\udcc6",
                quaternions: "\u210d",
                quatint: "\u2a16",
                quest: "?",
                questeq: "\u225f",
                quot: '"',
                QUOT: '"',
                rAarr: "\u21db",
                race: "\u223d\u0331",
                Racute: "\u0154",
                racute: "\u0155",
                radic: "\u221a",
                raemptyv: "\u29b3",
                rang: "\u27e9",
                Rang: "\u27eb",
                rangd: "\u2992",
                range: "\u29a5",
                rangle: "\u27e9",
                raquo: "\xbb",
                rarrap: "\u2975",
                rarrb: "\u21e5",
                rarrbfs: "\u2920",
                rarrc: "\u2933",
                rarr: "\u2192",
                Rarr: "\u21a0",
                rArr: "\u21d2",
                rarrfs: "\u291e",
                rarrhk: "\u21aa",
                rarrlp: "\u21ac",
                rarrpl: "\u2945",
                rarrsim: "\u2974",
                Rarrtl: "\u2916",
                rarrtl: "\u21a3",
                rarrw: "\u219d",
                ratail: "\u291a",
                rAtail: "\u291c",
                ratio: "\u2236",
                rationals: "\u211a",
                rbarr: "\u290d",
                rBarr: "\u290f",
                RBarr: "\u2910",
                rbbrk: "\u2773",
                rbrace: "}",
                rbrack: "]",
                rbrke: "\u298c",
                rbrksld: "\u298e",
                rbrkslu: "\u2990",
                Rcaron: "\u0158",
                rcaron: "\u0159",
                Rcedil: "\u0156",
                rcedil: "\u0157",
                rceil: "\u2309",
                rcub: "}",
                Rcy: "\u0420",
                rcy: "\u0440",
                rdca: "\u2937",
                rdldhar: "\u2969",
                rdquo: "\u201d",
                rdquor: "\u201d",
                rdsh: "\u21b3",
                real: "\u211c",
                realine: "\u211b",
                realpart: "\u211c",
                reals: "\u211d",
                Re: "\u211c",
                rect: "\u25ad",
                reg: "\xae",
                REG: "\xae",
                ReverseElement: "\u220b",
                ReverseEquilibrium: "\u21cb",
                ReverseUpEquilibrium: "\u296f",
                rfisht: "\u297d",
                rfloor: "\u230b",
                rfr: "\ud835\udd2f",
                Rfr: "\u211c",
                rHar: "\u2964",
                rhard: "\u21c1",
                rharu: "\u21c0",
                rharul: "\u296c",
                Rho: "\u03a1",
                rho: "\u03c1",
                rhov: "\u03f1",
                RightAngleBracket: "\u27e9",
                RightArrowBar: "\u21e5",
                rightarrow: "\u2192",
                RightArrow: "\u2192",
                Rightarrow: "\u21d2",
                RightArrowLeftArrow: "\u21c4",
                rightarrowtail: "\u21a3",
                RightCeiling: "\u2309",
                RightDoubleBracket: "\u27e7",
                RightDownTeeVector: "\u295d",
                RightDownVectorBar: "\u2955",
                RightDownVector: "\u21c2",
                RightFloor: "\u230b",
                rightharpoondown: "\u21c1",
                rightharpoonup: "\u21c0",
                rightleftarrows: "\u21c4",
                rightleftharpoons: "\u21cc",
                rightrightarrows: "\u21c9",
                rightsquigarrow: "\u219d",
                RightTeeArrow: "\u21a6",
                RightTee: "\u22a2",
                RightTeeVector: "\u295b",
                rightthreetimes: "\u22cc",
                RightTriangleBar: "\u29d0",
                RightTriangle: "\u22b3",
                RightTriangleEqual: "\u22b5",
                RightUpDownVector: "\u294f",
                RightUpTeeVector: "\u295c",
                RightUpVectorBar: "\u2954",
                RightUpVector: "\u21be",
                RightVectorBar: "\u2953",
                RightVector: "\u21c0",
                ring: "\u02da",
                risingdotseq: "\u2253",
                rlarr: "\u21c4",
                rlhar: "\u21cc",
                rlm: "\u200f",
                rmoustache: "\u23b1",
                rmoust: "\u23b1",
                rnmid: "\u2aee",
                roang: "\u27ed",
                roarr: "\u21fe",
                robrk: "\u27e7",
                ropar: "\u2986",
                ropf: "\ud835\udd63",
                Ropf: "\u211d",
                roplus: "\u2a2e",
                rotimes: "\u2a35",
                RoundImplies: "\u2970",
                rpar: ")",
                rpargt: "\u2994",
                rppolint: "\u2a12",
                rrarr: "\u21c9",
                Rrightarrow: "\u21db",
                rsaquo: "\u203a",
                rscr: "\ud835\udcc7",
                Rscr: "\u211b",
                rsh: "\u21b1",
                Rsh: "\u21b1",
                rsqb: "]",
                rsquo: "\u2019",
                rsquor: "\u2019",
                rthree: "\u22cc",
                rtimes: "\u22ca",
                rtri: "\u25b9",
                rtrie: "\u22b5",
                rtrif: "\u25b8",
                rtriltri: "\u29ce",
                RuleDelayed: "\u29f4",
                ruluhar: "\u2968",
                rx: "\u211e",
                Sacute: "\u015a",
                sacute: "\u015b",
                sbquo: "\u201a",
                scap: "\u2ab8",
                Scaron: "\u0160",
                scaron: "\u0161",
                Sc: "\u2abc",
                sc: "\u227b",
                sccue: "\u227d",
                sce: "\u2ab0",
                scE: "\u2ab4",
                Scedil: "\u015e",
                scedil: "\u015f",
                Scirc: "\u015c",
                scirc: "\u015d",
                scnap: "\u2aba",
                scnE: "\u2ab6",
                scnsim: "\u22e9",
                scpolint: "\u2a13",
                scsim: "\u227f",
                Scy: "\u0421",
                scy: "\u0441",
                sdotb: "\u22a1",
                sdot: "\u22c5",
                sdote: "\u2a66",
                searhk: "\u2925",
                searr: "\u2198",
                seArr: "\u21d8",
                searrow: "\u2198",
                sect: "\xa7",
                semi: ";",
                seswar: "\u2929",
                setminus: "\u2216",
                setmn: "\u2216",
                sext: "\u2736",
                Sfr: "\ud835\udd16",
                sfr: "\ud835\udd30",
                sfrown: "\u2322",
                sharp: "\u266f",
                SHCHcy: "\u0429",
                shchcy: "\u0449",
                SHcy: "\u0428",
                shcy: "\u0448",
                ShortDownArrow: "\u2193",
                ShortLeftArrow: "\u2190",
                shortmid: "\u2223",
                shortparallel: "\u2225",
                ShortRightArrow: "\u2192",
                ShortUpArrow: "\u2191",
                shy: "\xad",
                Sigma: "\u03a3",
                sigma: "\u03c3",
                sigmaf: "\u03c2",
                sigmav: "\u03c2",
                sim: "\u223c",
                simdot: "\u2a6a",
                sime: "\u2243",
                simeq: "\u2243",
                simg: "\u2a9e",
                simgE: "\u2aa0",
                siml: "\u2a9d",
                simlE: "\u2a9f",
                simne: "\u2246",
                simplus: "\u2a24",
                simrarr: "\u2972",
                slarr: "\u2190",
                SmallCircle: "\u2218",
                smallsetminus: "\u2216",
                smashp: "\u2a33",
                smeparsl: "\u29e4",
                smid: "\u2223",
                smile: "\u2323",
                smt: "\u2aaa",
                smte: "\u2aac",
                smtes: "\u2aac\ufe00",
                SOFTcy: "\u042c",
                softcy: "\u044c",
                solbar: "\u233f",
                solb: "\u29c4",
                sol: "/",
                Sopf: "\ud835\udd4a",
                sopf: "\ud835\udd64",
                spades: "\u2660",
                spadesuit: "\u2660",
                spar: "\u2225",
                sqcap: "\u2293",
                sqcaps: "\u2293\ufe00",
                sqcup: "\u2294",
                sqcups: "\u2294\ufe00",
                Sqrt: "\u221a",
                sqsub: "\u228f",
                sqsube: "\u2291",
                sqsubset: "\u228f",
                sqsubseteq: "\u2291",
                sqsup: "\u2290",
                sqsupe: "\u2292",
                sqsupset: "\u2290",
                sqsupseteq: "\u2292",
                square: "\u25a1",
                Square: "\u25a1",
                SquareIntersection: "\u2293",
                SquareSubset: "\u228f",
                SquareSubsetEqual: "\u2291",
                SquareSuperset: "\u2290",
                SquareSupersetEqual: "\u2292",
                SquareUnion: "\u2294",
                squarf: "\u25aa",
                squ: "\u25a1",
                squf: "\u25aa",
                srarr: "\u2192",
                Sscr: "\ud835\udcae",
                sscr: "\ud835\udcc8",
                ssetmn: "\u2216",
                ssmile: "\u2323",
                sstarf: "\u22c6",
                Star: "\u22c6",
                star: "\u2606",
                starf: "\u2605",
                straightepsilon: "\u03f5",
                straightphi: "\u03d5",
                strns: "\xaf",
                sub: "\u2282",
                Sub: "\u22d0",
                subdot: "\u2abd",
                subE: "\u2ac5",
                sube: "\u2286",
                subedot: "\u2ac3",
                submult: "\u2ac1",
                subnE: "\u2acb",
                subne: "\u228a",
                subplus: "\u2abf",
                subrarr: "\u2979",
                subset: "\u2282",
                Subset: "\u22d0",
                subseteq: "\u2286",
                subseteqq: "\u2ac5",
                SubsetEqual: "\u2286",
                subsetneq: "\u228a",
                subsetneqq: "\u2acb",
                subsim: "\u2ac7",
                subsub: "\u2ad5",
                subsup: "\u2ad3",
                succapprox: "\u2ab8",
                succ: "\u227b",
                succcurlyeq: "\u227d",
                Succeeds: "\u227b",
                SucceedsEqual: "\u2ab0",
                SucceedsSlantEqual: "\u227d",
                SucceedsTilde: "\u227f",
                succeq: "\u2ab0",
                succnapprox: "\u2aba",
                succneqq: "\u2ab6",
                succnsim: "\u22e9",
                succsim: "\u227f",
                SuchThat: "\u220b",
                sum: "\u2211",
                Sum: "\u2211",
                sung: "\u266a",
                sup1: "\xb9",
                sup2: "\xb2",
                sup3: "\xb3",
                sup: "\u2283",
                Sup: "\u22d1",
                supdot: "\u2abe",
                supdsub: "\u2ad8",
                supE: "\u2ac6",
                supe: "\u2287",
                supedot: "\u2ac4",
                Superset: "\u2283",
                SupersetEqual: "\u2287",
                suphsol: "\u27c9",
                suphsub: "\u2ad7",
                suplarr: "\u297b",
                supmult: "\u2ac2",
                supnE: "\u2acc",
                supne: "\u228b",
                supplus: "\u2ac0",
                supset: "\u2283",
                Supset: "\u22d1",
                supseteq: "\u2287",
                supseteqq: "\u2ac6",
                supsetneq: "\u228b",
                supsetneqq: "\u2acc",
                supsim: "\u2ac8",
                supsub: "\u2ad4",
                supsup: "\u2ad6",
                swarhk: "\u2926",
                swarr: "\u2199",
                swArr: "\u21d9",
                swarrow: "\u2199",
                swnwar: "\u292a",
                szlig: "\xdf",
                Tab: "\t",
                target: "\u2316",
                Tau: "\u03a4",
                tau: "\u03c4",
                tbrk: "\u23b4",
                Tcaron: "\u0164",
                tcaron: "\u0165",
                Tcedil: "\u0162",
                tcedil: "\u0163",
                Tcy: "\u0422",
                tcy: "\u0442",
                tdot: "\u20db",
                telrec: "\u2315",
                Tfr: "\ud835\udd17",
                tfr: "\ud835\udd31",
                there4: "\u2234",
                therefore: "\u2234",
                Therefore: "\u2234",
                Theta: "\u0398",
                theta: "\u03b8",
                thetasym: "\u03d1",
                thetav: "\u03d1",
                thickapprox: "\u2248",
                thicksim: "\u223c",
                ThickSpace: "\u205f\u200a",
                ThinSpace: "\u2009",
                thinsp: "\u2009",
                thkap: "\u2248",
                thksim: "\u223c",
                THORN: "\xde",
                thorn: "\xfe",
                tilde: "\u02dc",
                Tilde: "\u223c",
                TildeEqual: "\u2243",
                TildeFullEqual: "\u2245",
                TildeTilde: "\u2248",
                timesbar: "\u2a31",
                timesb: "\u22a0",
                times: "\xd7",
                timesd: "\u2a30",
                tint: "\u222d",
                toea: "\u2928",
                topbot: "\u2336",
                topcir: "\u2af1",
                top: "\u22a4",
                Topf: "\ud835\udd4b",
                topf: "\ud835\udd65",
                topfork: "\u2ada",
                tosa: "\u2929",
                tprime: "\u2034",
                trade: "\u2122",
                TRADE: "\u2122",
                triangle: "\u25b5",
                triangledown: "\u25bf",
                triangleleft: "\u25c3",
                trianglelefteq: "\u22b4",
                triangleq: "\u225c",
                triangleright: "\u25b9",
                trianglerighteq: "\u22b5",
                tridot: "\u25ec",
                trie: "\u225c",
                triminus: "\u2a3a",
                TripleDot: "\u20db",
                triplus: "\u2a39",
                trisb: "\u29cd",
                tritime: "\u2a3b",
                trpezium: "\u23e2",
                Tscr: "\ud835\udcaf",
                tscr: "\ud835\udcc9",
                TScy: "\u0426",
                tscy: "\u0446",
                TSHcy: "\u040b",
                tshcy: "\u045b",
                Tstrok: "\u0166",
                tstrok: "\u0167",
                twixt: "\u226c",
                twoheadleftarrow: "\u219e",
                twoheadrightarrow: "\u21a0",
                Uacute: "\xda",
                uacute: "\xfa",
                uarr: "\u2191",
                Uarr: "\u219f",
                uArr: "\u21d1",
                Uarrocir: "\u2949",
                Ubrcy: "\u040e",
                ubrcy: "\u045e",
                Ubreve: "\u016c",
                ubreve: "\u016d",
                Ucirc: "\xdb",
                ucirc: "\xfb",
                Ucy: "\u0423",
                ucy: "\u0443",
                udarr: "\u21c5",
                Udblac: "\u0170",
                udblac: "\u0171",
                udhar: "\u296e",
                ufisht: "\u297e",
                Ufr: "\ud835\udd18",
                ufr: "\ud835\udd32",
                Ugrave: "\xd9",
                ugrave: "\xf9",
                uHar: "\u2963",
                uharl: "\u21bf",
                uharr: "\u21be",
                uhblk: "\u2580",
                ulcorn: "\u231c",
                ulcorner: "\u231c",
                ulcrop: "\u230f",
                ultri: "\u25f8",
                Umacr: "\u016a",
                umacr: "\u016b",
                uml: "\xa8",
                UnderBar: "_",
                UnderBrace: "\u23df",
                UnderBracket: "\u23b5",
                UnderParenthesis: "\u23dd",
                Union: "\u22c3",
                UnionPlus: "\u228e",
                Uogon: "\u0172",
                uogon: "\u0173",
                Uopf: "\ud835\udd4c",
                uopf: "\ud835\udd66",
                UpArrowBar: "\u2912",
                uparrow: "\u2191",
                UpArrow: "\u2191",
                Uparrow: "\u21d1",
                UpArrowDownArrow: "\u21c5",
                updownarrow: "\u2195",
                UpDownArrow: "\u2195",
                Updownarrow: "\u21d5",
                UpEquilibrium: "\u296e",
                upharpoonleft: "\u21bf",
                upharpoonright: "\u21be",
                uplus: "\u228e",
                UpperLeftArrow: "\u2196",
                UpperRightArrow: "\u2197",
                upsi: "\u03c5",
                Upsi: "\u03d2",
                upsih: "\u03d2",
                Upsilon: "\u03a5",
                upsilon: "\u03c5",
                UpTeeArrow: "\u21a5",
                UpTee: "\u22a5",
                upuparrows: "\u21c8",
                urcorn: "\u231d",
                urcorner: "\u231d",
                urcrop: "\u230e",
                Uring: "\u016e",
                uring: "\u016f",
                urtri: "\u25f9",
                Uscr: "\ud835\udcb0",
                uscr: "\ud835\udcca",
                utdot: "\u22f0",
                Utilde: "\u0168",
                utilde: "\u0169",
                utri: "\u25b5",
                utrif: "\u25b4",
                uuarr: "\u21c8",
                Uuml: "\xdc",
                uuml: "\xfc",
                uwangle: "\u29a7",
                vangrt: "\u299c",
                varepsilon: "\u03f5",
                varkappa: "\u03f0",
                varnothing: "\u2205",
                varphi: "\u03d5",
                varpi: "\u03d6",
                varpropto: "\u221d",
                varr: "\u2195",
                vArr: "\u21d5",
                varrho: "\u03f1",
                varsigma: "\u03c2",
                varsubsetneq: "\u228a\ufe00",
                varsubsetneqq: "\u2acb\ufe00",
                varsupsetneq: "\u228b\ufe00",
                varsupsetneqq: "\u2acc\ufe00",
                vartheta: "\u03d1",
                vartriangleleft: "\u22b2",
                vartriangleright: "\u22b3",
                vBar: "\u2ae8",
                Vbar: "\u2aeb",
                vBarv: "\u2ae9",
                Vcy: "\u0412",
                vcy: "\u0432",
                vdash: "\u22a2",
                vDash: "\u22a8",
                Vdash: "\u22a9",
                VDash: "\u22ab",
                Vdashl: "\u2ae6",
                veebar: "\u22bb",
                vee: "\u2228",
                Vee: "\u22c1",
                veeeq: "\u225a",
                vellip: "\u22ee",
                verbar: "|",
                Verbar: "\u2016",
                vert: "|",
                Vert: "\u2016",
                VerticalBar: "\u2223",
                VerticalLine: "|",
                VerticalSeparator: "\u2758",
                VerticalTilde: "\u2240",
                VeryThinSpace: "\u200a",
                Vfr: "\ud835\udd19",
                vfr: "\ud835\udd33",
                vltri: "\u22b2",
                vnsub: "\u2282\u20d2",
                vnsup: "\u2283\u20d2",
                Vopf: "\ud835\udd4d",
                vopf: "\ud835\udd67",
                vprop: "\u221d",
                vrtri: "\u22b3",
                Vscr: "\ud835\udcb1",
                vscr: "\ud835\udccb",
                vsubnE: "\u2acb\ufe00",
                vsubne: "\u228a\ufe00",
                vsupnE: "\u2acc\ufe00",
                vsupne: "\u228b\ufe00",
                Vvdash: "\u22aa",
                vzigzag: "\u299a",
                Wcirc: "\u0174",
                wcirc: "\u0175",
                wedbar: "\u2a5f",
                wedge: "\u2227",
                Wedge: "\u22c0",
                wedgeq: "\u2259",
                weierp: "\u2118",
                Wfr: "\ud835\udd1a",
                wfr: "\ud835\udd34",
                Wopf: "\ud835\udd4e",
                wopf: "\ud835\udd68",
                wp: "\u2118",
                wr: "\u2240",
                wreath: "\u2240",
                Wscr: "\ud835\udcb2",
                wscr: "\ud835\udccc",
                xcap: "\u22c2",
                xcirc: "\u25ef",
                xcup: "\u22c3",
                xdtri: "\u25bd",
                Xfr: "\ud835\udd1b",
                xfr: "\ud835\udd35",
                xharr: "\u27f7",
                xhArr: "\u27fa",
                Xi: "\u039e",
                xi: "\u03be",
                xlarr: "\u27f5",
                xlArr: "\u27f8",
                xmap: "\u27fc",
                xnis: "\u22fb",
                xodot: "\u2a00",
                Xopf: "\ud835\udd4f",
                xopf: "\ud835\udd69",
                xoplus: "\u2a01",
                xotime: "\u2a02",
                xrarr: "\u27f6",
                xrArr: "\u27f9",
                Xscr: "\ud835\udcb3",
                xscr: "\ud835\udccd",
                xsqcup: "\u2a06",
                xuplus: "\u2a04",
                xutri: "\u25b3",
                xvee: "\u22c1",
                xwedge: "\u22c0",
                Yacute: "\xdd",
                yacute: "\xfd",
                YAcy: "\u042f",
                yacy: "\u044f",
                Ycirc: "\u0176",
                ycirc: "\u0177",
                Ycy: "\u042b",
                ycy: "\u044b",
                yen: "\xa5",
                Yfr: "\ud835\udd1c",
                yfr: "\ud835\udd36",
                YIcy: "\u0407",
                yicy: "\u0457",
                Yopf: "\ud835\udd50",
                yopf: "\ud835\udd6a",
                Yscr: "\ud835\udcb4",
                yscr: "\ud835\udcce",
                YUcy: "\u042e",
                yucy: "\u044e",
                yuml: "\xff",
                Yuml: "\u0178",
                Zacute: "\u0179",
                zacute: "\u017a",
                Zcaron: "\u017d",
                zcaron: "\u017e",
                Zcy: "\u0417",
                zcy: "\u0437",
                Zdot: "\u017b",
                zdot: "\u017c",
                zeetrf: "\u2128",
                ZeroWidthSpace: "\u200b",
                Zeta: "\u0396",
                zeta: "\u03b6",
                zfr: "\ud835\udd37",
                Zfr: "\u2128",
                ZHcy: "\u0416",
                zhcy: "\u0436",
                zigrarr: "\u21dd",
                zopf: "\ud835\udd6b",
                Zopf: "\u2124",
                Zscr: "\ud835\udcb5",
                zscr: "\ud835\udccf",
                zwj: "\u200d",
                zwnj: "\u200c"
            }
        }
        , {}],
        53: [function(e, r, t) {
            "use strict";
            function n(e) {
                var r = Array.prototype.slice.call(arguments, 1);
                return r.forEach(function(r) {
                    r && Object.keys(r).forEach(function(t) {
                        e[t] = r[t]
                    })
                }),
                e
            }
            function s(e) {
                return Object.prototype.toString.call(e)
            }
            function o(e) {
                return "[object String]" === s(e)
            }
            function i(e) {
                return "[object Object]" === s(e)
            }
            function a(e) {
                return "[object RegExp]" === s(e)
            }
            function c(e) {
                return "[object Function]" === s(e)
            }
            function l(e) {
                return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            }
            function u(e) {
                return Object.keys(e || {}).reduce(function(e, r) {
                    return e || k.hasOwnProperty(r)
                }, !1)
            }
            function p(e) {
                e.__index__ = -1,
                e.__text_cache__ = ""
            }
            function h(e) {
                return function(r, t) {
                    var n = r.slice(t);
                    return e.test(n) ? n.match(e)[0].length : 0
                }
            }
            function f() {
                return function(e, r) {
                    r.normalize(e)
                }
            }
            function d(r) {
                function t(e) {
                    return e.replace("%TLDS%", s.src_tlds)
                }
                function n(e, r) {
                    throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + r)
                }
                var s = r.re = e("./lib/re")(r.__opts__)
                  , u = r.__tlds__.slice();
                r.onCompile(),
                r.__tlds_replaced__ || u.push(v),
                u.push(s.src_xn),
                s.src_tlds = u.join("|"),
                s.email_fuzzy = RegExp(t(s.tpl_email_fuzzy), "i"),
                s.link_fuzzy = RegExp(t(s.tpl_link_fuzzy), "i"),
                s.link_no_ip_fuzzy = RegExp(t(s.tpl_link_no_ip_fuzzy), "i"),
                s.host_fuzzy_test = RegExp(t(s.tpl_host_fuzzy_test), "i");
                var d = [];
                r.__compiled__ = {},
                Object.keys(r.__schemas__).forEach(function(e) {
                    var t = r.__schemas__[e];
                    if (null !== t) {
                        var s = {
                            validate: null,
                            link: null
                        };
                        return r.__compiled__[e] = s,
                        i(t) ? (a(t.validate) ? s.validate = h(t.validate) : c(t.validate) ? s.validate = t.validate : n(e, t),
                        void (c(t.normalize) ? s.normalize = t.normalize : t.normalize ? n(e, t) : s.normalize = f())) : o(t) ? void d.push(e) : void n(e, t)
                    }
                }),
                d.forEach(function(e) {
                    r.__compiled__[r.__schemas__[e]] && (r.__compiled__[e].validate = r.__compiled__[r.__schemas__[e]].validate,
                    r.__compiled__[e].normalize = r.__compiled__[r.__schemas__[e]].normalize)
                }),
                r.__compiled__[""] = {
                    validate: null,
                    normalize: f()
                };
                var m = Object.keys(r.__compiled__).filter(function(e) {
                    return e.length > 0 && r.__compiled__[e]
                }).map(l).join("|");
                r.re.schema_test = RegExp("(^|(?!_)(?:[><]|" + s.src_ZPCc + "))(" + m + ")", "i"),
                r.re.schema_search = RegExp("(^|(?!_)(?:[><]|" + s.src_ZPCc + "))(" + m + ")", "ig"),
                r.re.pretest = RegExp("(" + r.re.schema_test.source + ")|(" + r.re.host_fuzzy_test.source + ")|@", "i"),
                p(r)
            }
            function m(e, r) {
                var t = e.__index__
                  , n = e.__last_index__
                  , s = e.__text_cache__.slice(t, n);
                this.schema = e.__schema__.toLowerCase(),
                this.index = t + r,
                this.lastIndex = n + r,
                this.raw = s,
                this.text = s,
                this.url = s
            }
            function _(e, r) {
                var t = new m(e,r);
                return e.__compiled__[t.schema].normalize(t, e),
                t
            }
            function g(e, r) {
                return this instanceof g ? (r || u(e) && (r = e,
                e = {}),
                this.__opts__ = n({}, k, r),
                this.__index__ = -1,
                this.__last_index__ = -1,
                this.__schema__ = "",
                this.__text_cache__ = "",
                this.__schemas__ = n({}, b, e),
                this.__compiled__ = {},
                this.__tlds__ = y,
                this.__tlds_replaced__ = !1,
                this.re = {},
                void d(this)) : new g(e,r)
            }
            var k = {
                fuzzyLink: !0,
                fuzzyEmail: !0,
                fuzzyIP: !1
            }
              , b = {
                "http:": {
                    validate: function(e, r, t) {
                        var n = e.slice(r);
                        return t.re.http || (t.re.http = new RegExp("^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,"i")),
                        t.re.http.test(n) ? n.match(t.re.http)[0].length : 0
                    }
                },
                "https:": "http:",
                "ftp:": "http:",
                "//": {
                    validate: function(e, r, t) {
                        var n = e.slice(r);
                        return t.re.no_http || (t.re.no_http = new RegExp("^" + t.re.src_auth + "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,"i")),
                        t.re.no_http.test(n) ? r >= 3 && ":" === e[r - 3] ? 0 : r >= 3 && "/" === e[r - 3] ? 0 : n.match(t.re.no_http)[0].length : 0
                    }
                },
                "mailto:": {
                    validate: function(e, r, t) {
                        var n = e.slice(r);
                        return t.re.mailto || (t.re.mailto = new RegExp("^" + t.re.src_email_name + "@" + t.re.src_host_strict,"i")),
                        t.re.mailto.test(n) ? n.match(t.re.mailto)[0].length : 0
                    }
                }
            }
              , v = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"
              , y = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
            g.prototype.add = function(e, r) {
                return this.__schemas__[e] = r,
                d(this),
                this
            }
            ,
            g.prototype.set = function(e) {
                return this.__opts__ = n(this.__opts__, e),
                this
            }
            ,
            g.prototype.test = function(e) {
                if (this.__text_cache__ = e,
                this.__index__ = -1,
                !e.length)
                    return !1;
                var r, t, n, s, o, i, a, c, l;
                if (this.re.schema_test.test(e))
                    for (a = this.re.schema_search,
                    a.lastIndex = 0; null !== (r = a.exec(e)); )
                        if (s = this.testSchemaAt(e, r[2], a.lastIndex)) {
                            this.__schema__ = r[2],
                            this.__index__ = r.index + r[1].length,
                            this.__last_index__ = r.index + r[0].length + s;
                            break
                        }
                return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test),
                c >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (t = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = t.index + t[1].length,
                (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "",
                this.__index__ = o,
                this.__last_index__ = t.index + t[0].length))),
                this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = e.indexOf("@"),
                l >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length,
                i = n.index + n[0].length,
                (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:",
                this.__index__ = o,
                this.__last_index__ = i))),
                this.__index__ >= 0
            }
            ,
            g.prototype.pretest = function(e) {
                return this.re.pretest.test(e)
            }
            ,
            g.prototype.testSchemaAt = function(e, r, t) {
                return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(e, t, this) : 0
            }
            ,
            g.prototype.match = function(e) {
                var r = 0
                  , t = [];
                this.__index__ >= 0 && this.__text_cache__ === e && (t.push(_(this, r)),
                r = this.__last_index__);
                for (var n = r ? e.slice(r) : e; this.test(n); )
                    t.push(_(this, r)),
                    n = n.slice(this.__last_index__),
                    r += this.__last_index__;
                return t.length ? t : null
            }
            ,
            g.prototype.tlds = function(e, r) {
                return e = Array.isArray(e) ? e : [e],
                r ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(e, r, t) {
                    return e !== t[r - 1]
                }).reverse(),
                d(this),
                this) : (this.__tlds__ = e.slice(),
                this.__tlds_replaced__ = !0,
                d(this),
                this)
            }
            ,
            g.prototype.normalize = function(e) {
                e.schema || (e.url = "http://" + e.url),
                "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
            }
            ,
            g.prototype.onCompile = function() {}
            ,
            r.exports = g
        }
        , {
            "./lib/re": 54
        }],
        54: [function(e, r, t) {
            "use strict";
            r.exports = function(r) {
                var t = {};
                return t.src_Any = e("uc.micro/properties/Any/regex").source,
                t.src_Cc = e("uc.micro/categories/Cc/regex").source,
                t.src_Z = e("uc.micro/categories/Z/regex").source,
                t.src_P = e("uc.micro/categories/P/regex").source,
                t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"),
                t.src_ZCc = [t.src_Z, t.src_Cc].join("|"),
                t.src_pseudo_letter = "(?:(?!>|<|" + t.src_ZPCc + ")" + t.src_Any + ")",
                t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
                t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/]).)+@)?",
                t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
                t.src_host_terminator = "(?=$|>|<|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))",
                t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[()[\\]{}.,\"'?!\\-<>]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (r && r["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?",
                t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',
                t.src_xn = "xn--[a-z0-9\\-]{1,59}",
                t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})",
                t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))",
                t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain_root + "))",
                t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))",
                t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))",
                t.src_host_strict = t.src_host + t.src_host_terminator,
                t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator,
                t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator,
                t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator,
                t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator,
                t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))",
                t.tpl_email_fuzzy = "(^|<|>|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")",
                t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|]|" + t.src_ZPCc + "))((?![$+<=>^`|])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")",
                t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|]|" + t.src_ZPCc + "))((?![$+<=>^`|])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")",
                t
            }
        }
        , {
            "uc.micro/categories/Cc/regex": 61,
            "uc.micro/categories/P/regex": 63,
            "uc.micro/categories/Z/regex": 64,
            "uc.micro/properties/Any/regex": 66
        }],
        55: [function(e, r, t) {
            "use strict";
            function n(e) {
                var r, t, n = o[e];
                if (n)
                    return n;
                for (n = o[e] = [],
                r = 0; r < 128; r++)
                    t = String.fromCharCode(r),
                    n.push(t);
                for (r = 0; r < e.length; r++)
                    t = e.charCodeAt(r),
                    n[t] = "%" + ("0" + t.toString(16).toUpperCase()).slice(-2);
                return n
            }
            function s(e, r) {
                var t;
                return "string" != typeof r && (r = s.defaultChars),
                t = n(r),
                e.replace(/(%[a-f0-9]{2})+/gi, function(e) {
                    var r, n, s, o, i, a, c, l = "";
                    for (r = 0,
                    n = e.length; r < n; r += 3)
                        s = parseInt(e.slice(r + 1, r + 3), 16),
                        s < 128 ? l += t[s] : 192 === (224 & s) && r + 3 < n && (o = parseInt(e.slice(r + 4, r + 6), 16),
                        128 === (192 & o)) ? (c = s << 6 & 1984 | 63 & o,
                        l += c < 128 ? "\ufffd\ufffd" : String.fromCharCode(c),
                        r += 3) : 224 === (240 & s) && r + 6 < n && (o = parseInt(e.slice(r + 4, r + 6), 16),
                        i = parseInt(e.slice(r + 7, r + 9), 16),
                        128 === (192 & o) && 128 === (192 & i)) ? (c = s << 12 & 61440 | o << 6 & 4032 | 63 & i,
                        l += c < 2048 || c >= 55296 && c <= 57343 ? "\ufffd\ufffd\ufffd" : String.fromCharCode(c),
                        r += 6) : 240 === (248 & s) && r + 9 < n && (o = parseInt(e.slice(r + 4, r + 6), 16),
                        i = parseInt(e.slice(r + 7, r + 9), 16),
                        a = parseInt(e.slice(r + 10, r + 12), 16),
                        128 === (192 & o) && 128 === (192 & i) && 128 === (192 & a)) ? (c = s << 18 & 1835008 | o << 12 & 258048 | i << 6 & 4032 | 63 & a,
                        c < 65536 || c > 1114111 ? l += "\ufffd\ufffd\ufffd\ufffd" : (c -= 65536,
                        l += String.fromCharCode(55296 + (c >> 10), 56320 + (1023 & c))),
                        r += 9) : l += "\ufffd";
                    return l
                })
            }
            var o = {};
            s.defaultChars = ";/?:@&=+$,#",
            s.componentChars = "",
            r.exports = s
        }
        , {}],
        56: [function(e, r, t) {
            "use strict";
            function n(e) {
                var r, t, n = o[e];
                if (n)
                    return n;
                for (n = o[e] = [],
                r = 0; r < 128; r++)
                    t = String.fromCharCode(r),
                    /^[0-9a-z]$/i.test(t) ? n.push(t) : n.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
                for (r = 0; r < e.length; r++)
                    n[e.charCodeAt(r)] = e[r];
                return n
            }
            function s(e, r, t) {
                var o, i, a, c, l, u = "";
                for ("string" != typeof r && (t = r,
                r = s.defaultChars),
                "undefined" == typeof t && (t = !0),
                l = n(r),
                o = 0,
                i = e.length; o < i; o++)
                    if (a = e.charCodeAt(o),
                    t && 37 === a && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3)))
                        u += e.slice(o, o + 3),
                        o += 2;
                    else if (a < 128)
                        u += l[a];
                    else if (a >= 55296 && a <= 57343) {
                        if (a >= 55296 && a <= 56319 && o + 1 < i && (c = e.charCodeAt(o + 1),
                        c >= 56320 && c <= 57343)) {
                            u += encodeURIComponent(e[o] + e[o + 1]),
                            o++;
                            continue
                        }
                        u += "%EF%BF%BD"
                    } else
                        u += encodeURIComponent(e[o]);
                return u
            }
            var o = {};
            s.defaultChars = ";/?:@&=+$,-_.!~*'()#",
            s.componentChars = "-_.!~*'()",
            r.exports = s
        }
        , {}],
        57: [function(e, r, t) {
            "use strict";
            r.exports = function(e) {
                var r = "";
                return r += e.protocol || "",
                r += e.slashes ? "//" : "",
                r += e.auth ? e.auth + "@" : "",
                r += e.hostname && e.hostname.indexOf(":") !== -1 ? "[" + e.hostname + "]" : e.hostname || "",
                r += e.port ? ":" + e.port : "",
                r += e.pathname || "",
                r += e.search || "",
                r += e.hash || ""
            }
        }
        , {}],
        58: [function(e, r, t) {
            "use strict";
            r.exports.encode = e("./encode"),
            r.exports.decode = e("./decode"),
            r.exports.format = e("./format"),
            r.exports.parse = e("./parse")
        }
        , {
            "./decode": 55,
            "./encode": 56,
            "./format": 57,
            "./parse": 59
        }],
        59: [function(e, r, t) {
            "use strict";
            function n() {
                this.protocol = null,
                this.slashes = null,
                this.auth = null,
                this.port = null,
                this.hostname = null,
                this.hash = null,
                this.search = null,
                this.pathname = null
            }
            function s(e, r) {
                if (e && e instanceof n)
                    return e;
                var t = new n;
                return t.parse(e, r),
                t
            }
            var o = /^([a-z0-9.+-]+:)/i
              , i = /:[0-9]*$/
              , a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
              , c = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
              , l = ["{", "}", "|", "\\", "^", "`"].concat(c)
              , u = ["'"].concat(l)
              , p = ["%", "/", "?", ";", "#"].concat(u)
              , h = ["/", "?", "#"]
              , f = 255
              , d = /^[+a-z0-9A-Z_-]{0,63}$/
              , m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
              , _ = {
                javascript: !0,
                "javascript:": !0
            }
              , g = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            };
            n.prototype.parse = function(e, r) {
                var t, n, s, i, c, l = e;
                if (l = l.trim(),
                !r && 1 === e.split("#").length) {
                    var u = a.exec(l);
                    if (u)
                        return this.pathname = u[1],
                        u[2] && (this.search = u[2]),
                        this
                }
                var k = o.exec(l);
                if (k && (k = k[0],
                s = k.toLowerCase(),
                this.protocol = k,
                l = l.substr(k.length)),
                (r || k || l.match(/^\/\/[^@\/]+@[^@\/]+/)) && (c = "//" === l.substr(0, 2),
                !c || k && _[k] || (l = l.substr(2),
                this.slashes = !0)),
                !_[k] && (c || k && !g[k])) {
                    var b = -1;
                    for (t = 0; t < h.length; t++)
                        i = l.indexOf(h[t]),
                        i !== -1 && (b === -1 || i < b) && (b = i);
                    var v, y;
                    for (y = b === -1 ? l.lastIndexOf("@") : l.lastIndexOf("@", b),
                    y !== -1 && (v = l.slice(0, y),
                    l = l.slice(y + 1),
                    this.auth = v),
                    b = -1,
                    t = 0; t < p.length; t++)
                        i = l.indexOf(p[t]),
                        i !== -1 && (b === -1 || i < b) && (b = i);
                    b === -1 && (b = l.length),
                    ":" === l[b - 1] && b--;
                    var x = l.slice(0, b);
                    l = l.slice(b),
                    this.parseHost(x),
                    this.hostname = this.hostname || "";
                    var C = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!C) {
                        var A = this.hostname.split(/\./);
                        for (t = 0,
                        n = A.length; t < n; t++) {
                            var w = A[t];
                            if (w && !w.match(d)) {
                                for (var D = "", q = 0, E = w.length; q < E; q++)
                                    D += w.charCodeAt(q) > 127 ? "x" : w[q];
                                if (!D.match(d)) {
                                    var S = A.slice(0, t)
                                      , F = A.slice(t + 1)
                                      , z = w.match(m);
                                    z && (S.push(z[1]),
                                    F.unshift(z[2])),
                                    F.length && (l = F.join(".") + l),
                                    this.hostname = S.join(".");
                                    break
                                }
                            }
                        }
                    }
                    this.hostname.length > f && (this.hostname = ""),
                    C && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
                }
                var L = l.indexOf("#");
                L !== -1 && (this.hash = l.substr(L),
                l = l.slice(0, L));
                var T = l.indexOf("?");
                return T !== -1 && (this.search = l.substr(T),
                l = l.slice(0, T)),
                l && (this.pathname = l),
                g[s] && this.hostname && !this.pathname && (this.pathname = ""),
                this
            }
            ,
            n.prototype.parseHost = function(e) {
                var r = i.exec(e);
                r && (r = r[0],
                ":" !== r && (this.port = r.substr(1)),
                e = e.substr(0, e.length - r.length)),
                e && (this.hostname = e)
            }
            ,
            r.exports = s
        }
        , {}],
        60: [function(r, t, n) {
            (function(r) {
                !function(s) {
                    function o(e) {
                        throw new RangeError(R[e])
                    }
                    function i(e, r) {
                        for (var t = e.length, n = []; t--; )
                            n[t] = r(e[t]);
                        return n
                    }
                    function a(e, r) {
                        var t = e.split("@")
                          , n = "";
                        t.length > 1 && (n = t[0] + "@",
                        e = t[1]),
                        e = e.replace(T, ".");
                        var s = e.split(".")
                          , o = i(s, r).join(".");
                        return n + o
                    }
                    function c(e) {
                        for (var r, t, n = [], s = 0, o = e.length; s < o; )
                            r = e.charCodeAt(s++),
                            r >= 55296 && r <= 56319 && s < o ? (t = e.charCodeAt(s++),
                            56320 == (64512 & t) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r),
                            s--)) : n.push(r);
                        return n
                    }
                    function l(e) {
                        return i(e, function(e) {
                            var r = "";
                            return e > 65535 && (e -= 65536,
                            r += B(e >>> 10 & 1023 | 55296),
                            e = 56320 | 1023 & e),
                            r += B(e)
                        }).join("")
                    }
                    function u(e) {
                        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : C
                    }
                    function p(e, r) {
                        return e + 22 + 75 * (e < 26) - ((0 != r) << 5)
                    }
                    function h(e, r, t) {
                        var n = 0;
                        for (e = t ? I(e / q) : e >> 1,
                        e += I(e / r); e > M * w >> 1; n += C)
                            e = I(e / M);
                        return I(n + (M + 1) * e / (e + D))
                    }
                    function f(e) {
                        var r, t, n, s, i, a, c, p, f, d, m = [], _ = e.length, g = 0, k = S, b = E;
                        for (t = e.lastIndexOf(F),
                        t < 0 && (t = 0),
                        n = 0; n < t; ++n)
                            e.charCodeAt(n) >= 128 && o("not-basic"),
                            m.push(e.charCodeAt(n));
                        for (s = t > 0 ? t + 1 : 0; s < _; ) {
                            for (i = g,
                            a = 1,
                            c = C; s >= _ && o("invalid-input"),
                            p = u(e.charCodeAt(s++)),
                            (p >= C || p > I((x - g) / a)) && o("overflow"),
                            g += p * a,
                            f = c <= b ? A : c >= b + w ? w : c - b,
                            !(p < f); c += C)
                                d = C - f,
                                a > I(x / d) && o("overflow"),
                                a *= d;
                            r = m.length + 1,
                            b = h(g - i, r, 0 == i),
                            I(g / r) > x - k && o("overflow"),
                            k += I(g / r),
                            g %= r,
                            m.splice(g++, 0, k)
                        }
                        return l(m)
                    }
                    function d(e) {
                        var r, t, n, s, i, a, l, u, f, d, m, _, g, k, b, v = [];
                        for (e = c(e),
                        _ = e.length,
                        r = S,
                        t = 0,
                        i = E,
                        a = 0; a < _; ++a)
                            m = e[a],
                            m < 128 && v.push(B(m));
                        for (n = s = v.length,
                        s && v.push(F); n < _; ) {
                            for (l = x,
                            a = 0; a < _; ++a)
                                m = e[a],
                                m >= r && m < l && (l = m);
                            for (g = n + 1,
                            l - r > I((x - t) / g) && o("overflow"),
                            t += (l - r) * g,
                            r = l,
                            a = 0; a < _; ++a)
                                if (m = e[a],
                                m < r && ++t > x && o("overflow"),
                                m == r) {
                                    for (u = t,
                                    f = C; d = f <= i ? A : f >= i + w ? w : f - i,
                                    !(u < d); f += C)
                                        b = u - d,
                                        k = C - d,
                                        v.push(B(p(d + b % k, 0))),
                                        u = I(b / k);
                                    v.push(B(p(u, 0))),
                                    i = h(t, g, n == s),
                                    t = 0,
                                    ++n
                                }
                            ++t,
                            ++r
                        }
                        return v.join("")
                    }
                    function m(e) {
                        return a(e, function(e) {
                            return z.test(e) ? f(e.slice(4).toLowerCase()) : e
                        })
                    }
                    function _(e) {
                        return a(e, function(e) {
                            return L.test(e) ? "xn--" + d(e) : e
                        })
                    }
                    var g = "object" == typeof n && n && !n.nodeType && n
                      , k = "object" == typeof t && t && !t.nodeType && t
                      , b = "object" == typeof r && r;
                    b.global !== b && b.window !== b && b.self !== b || (s = b);
                    var v, y, x = 2147483647, C = 36, A = 1, w = 26, D = 38, q = 700, E = 72, S = 128, F = "-", z = /^xn--/, L = /[^\x20-\x7E]/, T = /[\x2E\u3002\uFF0E\uFF61]/g, R = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, M = C - A, I = Math.floor, B = String.fromCharCode;
                    if (v = {
                        version: "1.4.1",
                        ucs2: {
                            decode: c,
                            encode: l
                        },
                        decode: f,
                        encode: d,
                        toASCII: _,
                        toUnicode: m
                    },
                    "function" == typeof e && "object" == typeof e.amd && e.amd)
                        e("punycode", function() {
                            return v
                        });
                    else if (g && k)
                        if (t.exports == g)
                            k.exports = v;
                        else
                            for (y in v)
                                v.hasOwnProperty(y) && (g[y] = v[y]);
                    else
                        s.punycode = v
                }(this)
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        61: [function(e, r, t) {
            r.exports = /[\0-\x1F\x7F-\x9F]/
        }
        , {}],
        62: [function(e, r, t) {
            r.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
        }
        , {}],
        63: [function(e, r, t) {
            r.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
        }
        , {}],
        64: [function(e, r, t) {
            r.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
        }
        , {}],
        65: [function(e, r, t) {
            r.exports.Any = e("./properties/Any/regex"),
            r.exports.Cc = e("./categories/Cc/regex"),
            r.exports.Cf = e("./categories/Cf/regex"),
            r.exports.P = e("./categories/P/regex"),
            r.exports.Z = e("./categories/Z/regex")
        }
        , {
            "./categories/Cc/regex": 61,
            "./categories/Cf/regex": 62,
            "./categories/P/regex": 63,
            "./categories/Z/regex": 64,
            "./properties/Any/regex": 66
        }],
        66: [function(e, r, t) {
            r.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
        }
        , {}],
        67: [function(e, r, t) {
            "use strict";
            r.exports = e("./lib/")
        }
        , {
            "./lib/": 9
        }]
    }, {}, [67])(67)
});
