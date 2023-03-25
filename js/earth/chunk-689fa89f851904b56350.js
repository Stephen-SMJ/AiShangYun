(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    1: function (n, t, e) {
        "use strict";
        e.d(t, "i", (function () {
            return r
        })), e.d(t, "j", (function () {
            return i
        })), e.d(t, "o", (function () {
            return u
        })), e.d(t, "l", (function () {
            return o
        })), e.d(t, "q", (function () {
            return a
        })), e.d(t, "w", (function () {
            return c
        })), e.d(t, "h", (function () {
            return l
        })), e.d(t, "r", (function () {
            return f
        })), e.d(t, "a", (function () {
            return s
        })), e.d(t, "d", (function () {
            return h
        })), e.d(t, "e", (function () {
            return p
        })), e.d(t, "g", (function () {
            return g
        })), e.d(t, "f", (function () {
            return v
        })), e.d(t, "k", (function () {
            return d
        })), e.d(t, "n", (function () {
            return y
        })), e.d(t, "p", (function () {
            return m
        })), e.d(t, "t", (function () {
            return b
        })), e.d(t, "s", (function () {
            return M
        })), e.d(t, "u", (function () {
            return x
        })), e.d(t, "v", (function () {
            return w
        })), e.d(t, "b", (function () {
            return _
        })), e.d(t, "c", (function () {
            return j
        })), e.d(t, "m", (function () {
            return O
        }));
        var r = 1e-6, i = 1e-12, u = Math.PI, o = u / 2, a = u / 4, c = 2 * u, l = 180 / u, f = u / 180, s = Math.abs,
            h = Math.atan, p = Math.atan2, g = Math.cos, v = Math.ceil, d = Math.exp, y = (Math.floor, Math.log),
            m = Math.pow, b = Math.sin, M = Math.sign || function (n) {
                return n > 0 ? 1 : n < 0 ? -1 : 0
            }, x = Math.sqrt, w = Math.tan;

        function _(n) {
            return n > 1 ? 0 : n < -1 ? u : Math.acos(n)
        }

        function j(n) {
            return n > 1 ? o : n < -1 ? -o : Math.asin(n)
        }

        function O(n) {
            return (n = b(n / 2)) * n
        }
    }, 107: function (n, t, e) {
        "use strict";

        function r(n, t) {
            n && u.hasOwnProperty(n.type) && u[n.type](n, t)
        }

        var i = {
            Feature: function (n, t) {
                r(n.geometry, t)
            }, FeatureCollection: function (n, t) {
                for (var e = n.features, i = -1, u = e.length; ++i < u;) r(e[i].geometry, t)
            }
        }, u = {
            Sphere: function (n, t) {
                t.sphere()
            }, Point: function (n, t) {
                n = n.coordinates, t.point(n[0], n[1], n[2])
            }, MultiPoint: function (n, t) {
                for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) n = e[r], t.point(n[0], n[1], n[2])
            }, LineString: function (n, t) {
                o(n.coordinates, t, 0)
            }, MultiLineString: function (n, t) {
                for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) o(e[r], t, 0)
            }, Polygon: function (n, t) {
                a(n.coordinates, t)
            }, MultiPolygon: function (n, t) {
                for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) a(e[r], t)
            }, GeometryCollection: function (n, t) {
                for (var e = n.geometries, i = -1, u = e.length; ++i < u;) r(e[i], t)
            }
        };

        function o(n, t, e) {
            var r, i = -1, u = n.length - e;
            for (t.lineStart(); ++i < u;) r = n[i], t.point(r[0], r[1], r[2]);
            t.lineEnd()
        }

        function a(n, t) {
            var e = -1, r = n.length;
            for (t.polygonStart(); ++e < r;) o(n[e], t, 1);
            t.polygonEnd()
        }

        t.a = function (n, t) {
            n && i.hasOwnProperty(n.type) ? i[n.type](n, t) : r(n, t)
        }
    }, 117: function (n, t, e) {
        "use strict";
        e.d(t, "a", (function () {
            return o
        })), e.d(t, "c", (function () {
            return a
        })), e.d(t, "d", (function () {
            return c
        })), e.d(t, "b", (function () {
            return l
        }));
        var r = e(107), i = e(189);

        function u(n, t, e) {
            var u = n.clipExtent && n.clipExtent();
            return n.scale(150).translate([0, 0]), null != u && n.clipExtent(null), Object(r.a)(e, n.stream(i.a)), t(i.a.result()), null != u && n.clipExtent(u), n
        }

        function o(n, t, e) {
            return u(n, (function (e) {
                var r = t[1][0] - t[0][0], i = t[1][1] - t[0][1],
                    u = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                    o = +t[0][0] + (r - u * (e[1][0] + e[0][0])) / 2, a = +t[0][1] + (i - u * (e[1][1] + e[0][1])) / 2;
                n.scale(150 * u).translate([o, a])
            }), e)
        }

        function a(n, t, e) {
            return o(n, [[0, 0], t], e)
        }

        function c(n, t, e) {
            return u(n, (function (e) {
                var r = +t, i = r / (e[1][0] - e[0][0]), u = (r - i * (e[1][0] + e[0][0])) / 2, o = -i * e[0][1];
                n.scale(150 * i).translate([u, o])
            }), e)
        }

        function l(n, t, e) {
            return u(n, (function (e) {
                var r = +t, i = r / (e[1][1] - e[0][1]), u = -i * e[0][0], o = (r - i * (e[1][1] + e[0][1])) / 2;
                n.scale(150 * i).translate([u, o])
            }), e)
        }
    }, 123: function (n, t, e) {
        "use strict";

        function r() {
            this.reset()
        }

        t.a = function () {
            return new r
        }, r.prototype = {
            constructor: r, reset: function () {
                this.s = this.t = 0
            }, add: function (n) {
                u(i, n, this.t), u(this, i.s, this.s), this.s ? this.t += i.t : this.s = i.t
            }, valueOf: function () {
                return this.s
            }
        };
        var i = new r;

        function u(n, t, e) {
            var r = n.s = t + e, i = r - t, u = r - i;
            n.t = t - u + (e - i)
        }
    }, 132: function (n, t, e) {
        "use strict";
        e.d(t, "b", (function () {
            return i
        })), e.d(t, "a", (function () {
            return u
        }));
        var r = e(1);

        function i(n) {
            return function (t, e) {
                var i = Object(r.g)(t), u = Object(r.g)(e), o = n(i * u);
                return [o * u * Object(r.t)(t), o * Object(r.t)(e)]
            }
        }

        function u(n) {
            return function (t, e) {
                var i = Object(r.u)(t * t + e * e), u = n(i), o = Object(r.t)(u), a = Object(r.g)(u);
                return [Object(r.e)(t * o, i * a), Object(r.c)(i && e * o / i)]
            }
        }
    }, 146: function (n, t, e) {
        "use strict";
        t.a = function (n) {
            return n
        }
    }, 148: function (n, t, e) {
        var r, i;
        !function () {
            var u = {version: "3.5.17"}, o = [].slice, a = function (n) {
                return o.call(n)
            }, c = this.document;

            function l(n) {
                return n && (n.ownerDocument || n.document || n).documentElement
            }

            function f(n) {
                return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView)
            }

            if (c) try {
                a(c.documentElement.childNodes)[0].nodeType
            } catch (n) {
                a = function (n) {
                    for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
                    return e
                }
            }
            if (Date.now || (Date.now = function () {
                return +new Date
            }), c) try {
                c.createElement("DIV").style.setProperty("opacity", 0, "")
            } catch (n) {
                var s = this.Element.prototype, h = s.setAttribute, p = s.setAttributeNS,
                    g = this.CSSStyleDeclaration.prototype, v = g.setProperty;
                s.setAttribute = function (n, t) {
                    h.call(this, n, t + "")
                }, s.setAttributeNS = function (n, t, e) {
                    p.call(this, n, t, e + "")
                }, g.setProperty = function (n, t, e) {
                    v.call(this, n, t + "", e)
                }
            }

            function d(n, t) {
                return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }

            function y(n) {
                return null === n ? NaN : +n
            }

            function m(n) {
                return !isNaN(n)
            }

            function b(n) {
                return {
                    left: function (t, e, r, i) {
                        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); r < i;) {
                            var u = r + i >>> 1;
                            n(t[u], e) < 0 ? r = u + 1 : i = u
                        }
                        return r
                    }, right: function (t, e, r, i) {
                        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); r < i;) {
                            var u = r + i >>> 1;
                            n(t[u], e) > 0 ? i = u : r = u + 1
                        }
                        return r
                    }
                }
            }

            u.ascending = d, u.descending = function (n, t) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }, u.min = function (n, t) {
                var e, r, i = -1, u = n.length;
                if (1 === arguments.length) {
                    for (; ++i < u;) if (null != (r = n[i]) && r >= r) {
                        e = r;
                        break
                    }
                    for (; ++i < u;) null != (r = n[i]) && e > r && (e = r)
                } else {
                    for (; ++i < u;) if (null != (r = t.call(n, n[i], i)) && r >= r) {
                        e = r;
                        break
                    }
                    for (; ++i < u;) null != (r = t.call(n, n[i], i)) && e > r && (e = r)
                }
                return e
            }, u.max = function (n, t) {
                var e, r, i = -1, u = n.length;
                if (1 === arguments.length) {
                    for (; ++i < u;) if (null != (r = n[i]) && r >= r) {
                        e = r;
                        break
                    }
                    for (; ++i < u;) null != (r = n[i]) && r > e && (e = r)
                } else {
                    for (; ++i < u;) if (null != (r = t.call(n, n[i], i)) && r >= r) {
                        e = r;
                        break
                    }
                    for (; ++i < u;) null != (r = t.call(n, n[i], i)) && r > e && (e = r)
                }
                return e
            }, u.extent = function (n, t) {
                var e, r, i, u = -1, o = n.length;
                if (1 === arguments.length) {
                    for (; ++u < o;) if (null != (r = n[u]) && r >= r) {
                        e = i = r;
                        break
                    }
                    for (; ++u < o;) null != (r = n[u]) && (e > r && (e = r), i < r && (i = r))
                } else {
                    for (; ++u < o;) if (null != (r = t.call(n, n[u], u)) && r >= r) {
                        e = i = r;
                        break
                    }
                    for (; ++u < o;) null != (r = t.call(n, n[u], u)) && (e > r && (e = r), i < r && (i = r))
                }
                return [e, i]
            }, u.sum = function (n, t) {
                var e, r = 0, i = n.length, u = -1;
                if (1 === arguments.length) for (; ++u < i;) m(e = +n[u]) && (r += e); else for (; ++u < i;) m(e = +t.call(n, n[u], u)) && (r += e);
                return r
            }, u.mean = function (n, t) {
                var e, r = 0, i = n.length, u = -1, o = i;
                if (1 === arguments.length) for (; ++u < i;) m(e = y(n[u])) ? r += e : --o; else for (; ++u < i;) m(e = y(t.call(n, n[u], u))) ? r += e : --o;
                if (o) return r / o
            }, u.quantile = function (n, t) {
                var e = (n.length - 1) * t + 1, r = Math.floor(e), i = +n[r - 1], u = e - r;
                return u ? i + u * (n[r] - i) : i
            }, u.median = function (n, t) {
                var e, r = [], i = n.length, o = -1;
                if (1 === arguments.length) for (; ++o < i;) m(e = y(n[o])) && r.push(e); else for (; ++o < i;) m(e = y(t.call(n, n[o], o))) && r.push(e);
                if (r.length) return u.quantile(r.sort(d), .5)
            }, u.variance = function (n, t) {
                var e, r, i = n.length, u = 0, o = 0, a = -1, c = 0;
                if (1 === arguments.length) for (; ++a < i;) m(e = y(n[a])) && (o += (r = e - u) * (e - (u += r / ++c))); else for (; ++a < i;) m(e = y(t.call(n, n[a], a))) && (o += (r = e - u) * (e - (u += r / ++c)));
                if (c > 1) return o / (c - 1)
            }, u.deviation = function () {
                var n = u.variance.apply(this, arguments);
                return n ? Math.sqrt(n) : n
            };
            var M = b(d);

            function x(n) {
                return n.length
            }

            u.bisectLeft = M.left, u.bisect = u.bisectRight = M.right, u.bisector = function (n) {
                return b(1 === n.length ? function (t, e) {
                    return d(n(t), e)
                } : n)
            }, u.shuffle = function (n, t, e) {
                (u = arguments.length) < 3 && (e = n.length, u < 2 && (t = 0));
                for (var r, i, u = e - t; u;) i = Math.random() * u-- | 0, r = n[u + t], n[u + t] = n[i + t], n[i + t] = r;
                return n
            }, u.permute = function (n, t) {
                for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
                return r
            }, u.pairs = function (n) {
                for (var t = 0, e = n.length - 1, r = n[0], i = new Array(e < 0 ? 0 : e); t < e;) i[t] = [r, r = n[++t]];
                return i
            }, u.transpose = function (n) {
                if (!(i = n.length)) return [];
                for (var t = -1, e = u.min(n, x), r = new Array(e); ++t < e;) for (var i, o = -1, a = r[t] = new Array(i); ++o < i;) a[o] = n[o][t];
                return r
            }, u.zip = function () {
                return u.transpose(arguments)
            }, u.keys = function (n) {
                var t = [];
                for (var e in n) t.push(e);
                return t
            }, u.values = function (n) {
                var t = [];
                for (var e in n) t.push(n[e]);
                return t
            }, u.entries = function (n) {
                var t = [];
                for (var e in n) t.push({key: e, value: n[e]});
                return t
            }, u.merge = function (n) {
                for (var t, e, r, i = n.length, u = -1, o = 0; ++u < i;) o += n[u].length;
                for (e = new Array(o); --i >= 0;) for (t = (r = n[i]).length; --t >= 0;) e[--o] = r[t];
                return e
            };
            var w = Math.abs;

            function _(n) {
                for (var t = 1; n * t % 1;) t *= 10;
                return t
            }

            function j(n, t) {
                for (var e in t) Object.defineProperty(n.prototype, e, {value: t[e], enumerable: !1})
            }

            function O() {
                this._ = Object.create(null)
            }

            u.range = function (n, t, e) {
                if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e == 1 / 0) throw new Error("infinite range");
                var r, i = [], u = _(w(e)), o = -1;
                if (n *= u, t *= u, (e *= u) < 0) for (; (r = n + e * ++o) > t;) i.push(r / u); else for (; (r = n + e * ++o) < t;) i.push(r / u);
                return i
            }, u.map = function (n, t) {
                var e = new O;
                if (n instanceof O) n.forEach((function (n, t) {
                    e.set(n, t)
                })); else if (Array.isArray(n)) {
                    var r, i = -1, u = n.length;
                    if (1 === arguments.length) for (; ++i < u;) e.set(i, n[i]); else for (; ++i < u;) e.set(t.call(n, r = n[i], i), r)
                } else for (var o in n) e.set(o, n[o]);
                return e
            };
            var S = "__proto__", E = "\0";

            function N(n) {
                return (n += "") === S || n[0] === E ? E + n : n
            }

            function k(n) {
                return (n += "")[0] === E ? n.slice(1) : n
            }

            function A(n) {
                return N(n) in this._
            }

            function C(n) {
                return (n = N(n)) in this._ && delete this._[n]
            }

            function z() {
                var n = [];
                for (var t in this._) n.push(k(t));
                return n
            }

            function q() {
                var n = 0;
                for (var t in this._) ++n;
                return n
            }

            function L() {
                for (var n in this._) return !1;
                return !0
            }

            function T() {
                this._ = Object.create(null)
            }

            function R(n) {
                return n
            }

            function D(n, t, e) {
                return function () {
                    var r = e.apply(t, arguments);
                    return r === t ? n : r
                }
            }

            function P(n, t) {
                if (t in n) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e = 0, r = U.length; e < r; ++e) {
                    var i = U[e] + t;
                    if (i in n) return i
                }
            }

            j(O, {
                has: A, get: function (n) {
                    return this._[N(n)]
                }, set: function (n, t) {
                    return this._[N(n)] = t
                }, remove: C, keys: z, values: function () {
                    var n = [];
                    for (var t in this._) n.push(this._[t]);
                    return n
                }, entries: function () {
                    var n = [];
                    for (var t in this._) n.push({key: k(t), value: this._[t]});
                    return n
                }, size: q, empty: L, forEach: function (n) {
                    for (var t in this._) n.call(this, k(t), this._[t])
                }
            }), u.nest = function () {
                var n, t, e = {}, r = [], i = [];

                function o(i, u, a) {
                    if (a >= r.length) return t ? t.call(e, u) : n ? u.sort(n) : u;
                    for (var c, l, f, s, h = -1, p = u.length, g = r[a++], v = new O; ++h < p;) (s = v.get(c = g(l = u[h]))) ? s.push(l) : v.set(c, [l]);
                    return i ? (l = i(), f = function (n, t) {
                        l.set(n, o(i, t, a))
                    }) : (l = {}, f = function (n, t) {
                        l[n] = o(i, t, a)
                    }), v.forEach(f), l
                }

                return e.map = function (n, t) {
                    return o(t, n, 0)
                }, e.entries = function (n) {
                    return function n(t, e) {
                        if (e >= r.length) return t;
                        var u = [], o = i[e++];
                        return t.forEach((function (t, r) {
                            u.push({key: t, values: n(r, e)})
                        })), o ? u.sort((function (n, t) {
                            return o(n.key, t.key)
                        })) : u
                    }(o(u.map, n, 0), 0)
                }, e.key = function (n) {
                    return r.push(n), e
                }, e.sortKeys = function (n) {
                    return i[r.length - 1] = n, e
                }, e.sortValues = function (t) {
                    return n = t, e
                }, e.rollup = function (n) {
                    return t = n, e
                }, e
            }, u.set = function (n) {
                var t = new T;
                if (n) for (var e = 0, r = n.length; e < r; ++e) t.add(n[e]);
                return t
            }, j(T, {
                has: A, add: function (n) {
                    return this._[N(n += "")] = !0, n
                }, remove: C, values: z, size: q, empty: L, forEach: function (n) {
                    for (var t in this._) n.call(this, k(t))
                }
            }), u.behavior = {}, u.rebind = function (n, t) {
                for (var e, r = 1, i = arguments.length; ++r < i;) n[e = arguments[r]] = D(n, t, t[e]);
                return n
            };
            var U = ["webkit", "ms", "moz", "Moz", "o", "O"];

            function F() {
            }

            function H() {
            }

            function I(n) {
                var t = [], e = new O;

                function r() {
                    for (var e, r = t, i = -1, u = r.length; ++i < u;) (e = r[i].on) && e.apply(this, arguments);
                    return n
                }

                return r.on = function (r, i) {
                    var u, o = e.get(r);
                    return arguments.length < 2 ? o && o.on : (o && (o.on = null, t = t.slice(0, u = t.indexOf(o)).concat(t.slice(u + 1)), e.remove(r)), i && t.push(e.set(r, {on: i})), n)
                }, r
            }

            function Y() {
                u.event.preventDefault()
            }

            function Z() {
                for (var n, t = u.event; n = t.sourceEvent;) t = n;
                return t
            }

            function V(n) {
                for (var t = new H, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = I(t);
                return t.of = function (e, r) {
                    return function (i) {
                        try {
                            var o = i.sourceEvent = u.event;
                            i.target = n, u.event = i, t[i.type].apply(e, r)
                        } finally {
                            u.event = o
                        }
                    }
                }, t
            }

            u.dispatch = function () {
                for (var n = new H, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = I(n);
                return n
            }, H.prototype.on = function (n, t) {
                var e = n.indexOf("."), r = "";
                if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
                if (2 === arguments.length) {
                    if (null == t) for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
                    return this
                }
            }, u.event = null, u.requote = function (n) {
                return n.replace(X, "\\$&")
            };
            var X = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, $ = {}.__proto__ ? function (n, t) {
                n.__proto__ = t
            } : function (n, t) {
                for (var e in t) n[e] = t[e]
            };

            function B(n) {
                return $(n, K), n
            }

            var W = function (n, t) {
                return t.querySelector(n)
            }, J = function (n, t) {
                return t.querySelectorAll(n)
            }, G = function (n, t) {
                var e = n.matches || n[P(n, "matchesSelector")];
                return (G = function (n, t) {
                    return e.call(n, t)
                })(n, t)
            };
            "function" == typeof Sizzle && (W = function (n, t) {
                return Sizzle(n, t)[0] || null
            }, J = Sizzle, G = Sizzle.matchesSelector), u.selection = function () {
                return u.select(c.documentElement)
            };
            var K = u.selection.prototype = [];

            function Q(n) {
                return "function" == typeof n ? n : function () {
                    return W(n, this)
                }
            }

            function nn(n) {
                return "function" == typeof n ? n : function () {
                    return J(n, this)
                }
            }

            K.select = function (n) {
                var t, e, r, i, u = [];
                n = Q(n);
                for (var o = -1, a = this.length; ++o < a;) {
                    u.push(t = []), t.parentNode = (r = this[o]).parentNode;
                    for (var c = -1, l = r.length; ++c < l;) (i = r[c]) ? (t.push(e = n.call(i, i.__data__, c, o)), e && "__data__" in i && (e.__data__ = i.__data__)) : t.push(null)
                }
                return B(u)
            }, K.selectAll = function (n) {
                var t, e, r = [];
                n = nn(n);
                for (var i = -1, u = this.length; ++i < u;) for (var o = this[i], c = -1, l = o.length; ++c < l;) (e = o[c]) && (r.push(t = a(n.call(e, e.__data__, c, i))), t.parentNode = e);
                return B(r)
            };
            var tn = "http://www.w3.org/1999/xhtml", en = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: tn,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };

            function rn(n, t) {
                return n = u.ns.qualify(n), null == t ? n.local ? function () {
                    this.removeAttributeNS(n.space, n.local)
                } : function () {
                    this.removeAttribute(n)
                } : "function" == typeof t ? n.local ? function () {
                    var e = t.apply(this, arguments);
                    null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
                } : function () {
                    var e = t.apply(this, arguments);
                    null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
                } : n.local ? function () {
                    this.setAttributeNS(n.space, n.local, t)
                } : function () {
                    this.setAttribute(n, t)
                }
            }

            function un(n) {
                return n.trim().replace(/\s+/g, " ")
            }

            function on(n) {
                return new RegExp("(?:^|\\s+)" + u.requote(n) + "(?:\\s+|$)", "g")
            }

            function an(n) {
                return (n + "").trim().split(/^|\s+/)
            }

            function cn(n, t) {
                var e = (n = an(n).map(ln)).length;
                return "function" == typeof t ? function () {
                    for (var r = -1, i = t.apply(this, arguments); ++r < e;) n[r](this, i)
                } : function () {
                    for (var r = -1; ++r < e;) n[r](this, t)
                }
            }

            function ln(n) {
                var t = on(n);
                return function (e, r) {
                    if (i = e.classList) return r ? i.add(n) : i.remove(n);
                    var i = e.getAttribute("class") || "";
                    r ? (t.lastIndex = 0, t.test(i) || e.setAttribute("class", un(i + " " + n))) : e.setAttribute("class", un(i.replace(t, " ")))
                }
            }

            function fn(n, t, e) {
                return null == t ? function () {
                    this.style.removeProperty(n)
                } : "function" == typeof t ? function () {
                    var r = t.apply(this, arguments);
                    null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
                } : function () {
                    this.style.setProperty(n, t, e)
                }
            }

            function sn(n, t) {
                return null == t ? function () {
                    delete this[n]
                } : "function" == typeof t ? function () {
                    var e = t.apply(this, arguments);
                    null == e ? delete this[n] : this[n] = e
                } : function () {
                    this[n] = t
                }
            }

            function hn(n) {
                return "function" == typeof n ? n : (n = u.ns.qualify(n)).local ? function () {
                    return this.ownerDocument.createElementNS(n.space, n.local)
                } : function () {
                    var t = this.ownerDocument, e = this.namespaceURI;
                    return e === tn && t.documentElement.namespaceURI === tn ? t.createElement(n) : t.createElementNS(e, n)
                }
            }

            function pn() {
                var n = this.parentNode;
                n && n.removeChild(this)
            }

            function gn(n) {
                return {__data__: n}
            }

            function vn(n) {
                return function () {
                    return G(this, n)
                }
            }

            function dn(n) {
                return arguments.length || (n = d), function (t, e) {
                    return t && e ? n(t.__data__, e.__data__) : !t - !e
                }
            }

            function yn(n, t) {
                for (var e = 0, r = n.length; e < r; e++) for (var i, u = n[e], o = 0, a = u.length; o < a; o++) (i = u[o]) && t(i, o, e);
                return n
            }

            function mn(n) {
                return $(n, bn), n
            }

            u.ns = {
                prefix: en, qualify: function (n) {
                    var t = n.indexOf(":"), e = n;
                    return t >= 0 && "xmlns" !== (e = n.slice(0, t)) && (n = n.slice(t + 1)), en.hasOwnProperty(e) ? {
                        space: en[e],
                        local: n
                    } : n
                }
            }, K.attr = function (n, t) {
                if (arguments.length < 2) {
                    if ("string" == typeof n) {
                        var e = this.node();
                        return (n = u.ns.qualify(n)).local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
                    }
                    for (t in n) this.each(rn(t, n[t]));
                    return this
                }
                return this.each(rn(n, t))
            }, K.classed = function (n, t) {
                if (arguments.length < 2) {
                    if ("string" == typeof n) {
                        var e = this.node(), r = (n = an(n)).length, i = -1;
                        if (t = e.classList) {
                            for (; ++i < r;) if (!t.contains(n[i])) return !1
                        } else for (t = e.getAttribute("class"); ++i < r;) if (!on(n[i]).test(t)) return !1;
                        return !0
                    }
                    for (t in n) this.each(cn(t, n[t]));
                    return this
                }
                return this.each(cn(n, t))
            }, K.style = function (n, t, e) {
                var r = arguments.length;
                if (r < 3) {
                    if ("string" != typeof n) {
                        for (e in r < 2 && (t = ""), n) this.each(fn(e, n[e], t));
                        return this
                    }
                    if (r < 2) {
                        var i = this.node();
                        return f(i).getComputedStyle(i, null).getPropertyValue(n)
                    }
                    e = ""
                }
                return this.each(fn(n, t, e))
            }, K.property = function (n, t) {
                if (arguments.length < 2) {
                    if ("string" == typeof n) return this.node()[n];
                    for (t in n) this.each(sn(t, n[t]));
                    return this
                }
                return this.each(sn(n, t))
            }, K.text = function (n) {
                return arguments.length ? this.each("function" == typeof n ? function () {
                    var t = n.apply(this, arguments);
                    this.textContent = null == t ? "" : t
                } : null == n ? function () {
                    this.textContent = ""
                } : function () {
                    this.textContent = n
                }) : this.node().textContent
            }, K.html = function (n) {
                return arguments.length ? this.each("function" == typeof n ? function () {
                    var t = n.apply(this, arguments);
                    this.innerHTML = null == t ? "" : t
                } : null == n ? function () {
                    this.innerHTML = ""
                } : function () {
                    this.innerHTML = n
                }) : this.node().innerHTML
            }, K.append = function (n) {
                return n = hn(n), this.select((function () {
                    return this.appendChild(n.apply(this, arguments))
                }))
            }, K.insert = function (n, t) {
                return n = hn(n), t = Q(t), this.select((function () {
                    return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
                }))
            }, K.remove = function () {
                return this.each(pn)
            }, K.data = function (n, t) {
                var e, r, i = -1, u = this.length;
                if (!arguments.length) {
                    for (n = new Array(u = (e = this[0]).length); ++i < u;) (r = e[i]) && (n[i] = r.__data__);
                    return n
                }

                function o(n, e) {
                    var r, i, u, o = n.length, f = e.length, s = Math.min(o, f), h = new Array(f), p = new Array(f),
                        g = new Array(o);
                    if (t) {
                        var v, d = new O, y = new Array(o);
                        for (r = -1; ++r < o;) (i = n[r]) && (d.has(v = t.call(i, i.__data__, r)) ? g[r] = i : d.set(v, i), y[r] = v);
                        for (r = -1; ++r < f;) (i = d.get(v = t.call(e, u = e[r], r))) ? !0 !== i && (h[r] = i, i.__data__ = u) : p[r] = gn(u), d.set(v, !0);
                        for (r = -1; ++r < o;) r in y && !0 !== d.get(y[r]) && (g[r] = n[r])
                    } else {
                        for (r = -1; ++r < s;) i = n[r], u = e[r], i ? (i.__data__ = u, h[r] = i) : p[r] = gn(u);
                        for (; r < f; ++r) p[r] = gn(e[r]);
                        for (; r < o; ++r) g[r] = n[r]
                    }
                    p.update = h, p.parentNode = h.parentNode = g.parentNode = n.parentNode, a.push(p), c.push(h), l.push(g)
                }

                var a = mn([]), c = B([]), l = B([]);
                if ("function" == typeof n) for (; ++i < u;) o(e = this[i], n.call(e, e.parentNode.__data__, i)); else for (; ++i < u;) o(e = this[i], n);
                return c.enter = function () {
                    return a
                }, c.exit = function () {
                    return l
                }, c
            }, K.datum = function (n) {
                return arguments.length ? this.property("__data__", n) : this.property("__data__")
            }, K.filter = function (n) {
                var t, e, r, i = [];
                "function" != typeof n && (n = vn(n));
                for (var u = 0, o = this.length; u < o; u++) {
                    i.push(t = []), t.parentNode = (e = this[u]).parentNode;
                    for (var a = 0, c = e.length; a < c; a++) (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r)
                }
                return B(i)
            }, K.order = function () {
                for (var n = -1, t = this.length; ++n < t;) for (var e, r = this[n], i = r.length - 1, u = r[i]; --i >= 0;) (e = r[i]) && (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u), u = e);
                return this
            }, K.sort = function (n) {
                n = dn.apply(this, arguments);
                for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
                return this.order()
            }, K.each = function (n) {
                return yn(this, (function (t, e, r) {
                    n.call(t, t.__data__, e, r)
                }))
            }, K.call = function (n) {
                var t = a(arguments);
                return n.apply(t[0] = this, t), this
            }, K.empty = function () {
                return !this.node()
            }, K.node = function () {
                for (var n = 0, t = this.length; n < t; n++) for (var e = this[n], r = 0, i = e.length; r < i; r++) {
                    var u = e[r];
                    if (u) return u
                }
                return null
            }, K.size = function () {
                var n = 0;
                return yn(this, (function () {
                    ++n
                })), n
            };
            var bn = [];

            function Mn(n) {
                var t, e;
                return function (r, i, u) {
                    var o, a = n[u].update, c = a.length;
                    for (u != e && (e = u, t = 0), i >= t && (t = i + 1); !(o = a[t]) && ++t < c;) ;
                    return o
                }
            }

            function xn(n, t, e) {
                var r = "__on" + n, i = n.indexOf("."), o = _n;
                i > 0 && (n = n.slice(0, i));
                var c = wn.get(n);

                function l() {
                    var t = this[r];
                    t && (this.removeEventListener(n, t, t.$), delete this[r])
                }

                return c && (n = c, o = jn), i ? t ? function () {
                    var i = o(t, a(arguments));
                    l.call(this), this.addEventListener(n, this[r] = i, i.$ = e), i._ = t
                } : l : t ? F : function () {
                    var t, e = new RegExp("^__on([^.]+)" + u.requote(n) + "$");
                    for (var r in this) if (t = r.match(e)) {
                        var i = this[r];
                        this.removeEventListener(t[1], i, i.$), delete this[r]
                    }
                }
            }

            u.selection.enter = mn, u.selection.enter.prototype = bn, bn.append = K.append, bn.empty = K.empty, bn.node = K.node, bn.call = K.call, bn.size = K.size, bn.select = function (n) {
                for (var t, e, r, i, u, o = [], a = -1, c = this.length; ++a < c;) {
                    r = (i = this[a]).update, o.push(t = []), t.parentNode = i.parentNode;
                    for (var l = -1, f = i.length; ++l < f;) (u = i[l]) ? (t.push(r[l] = e = n.call(i.parentNode, u.__data__, l, a)), e.__data__ = u.__data__) : t.push(null)
                }
                return B(o)
            }, bn.insert = function (n, t) {
                return arguments.length < 2 && (t = Mn(this)), K.insert.call(this, n, t)
            }, u.select = function (n) {
                var t;
                return "string" == typeof n ? (t = [W(n, c)]).parentNode = c.documentElement : (t = [n]).parentNode = l(n), B([t])
            }, u.selectAll = function (n) {
                var t;
                return "string" == typeof n ? (t = a(J(n, c))).parentNode = c.documentElement : (t = a(n)).parentNode = null, B([t])
            }, K.on = function (n, t, e) {
                var r = arguments.length;
                if (r < 3) {
                    if ("string" != typeof n) {
                        for (e in r < 2 && (t = !1), n) this.each(xn(e, n[e], t));
                        return this
                    }
                    if (r < 2) return (r = this.node()["__on" + n]) && r._;
                    e = !1
                }
                return this.each(xn(n, t, e))
            };
            var wn = u.map({mouseenter: "mouseover", mouseleave: "mouseout"});

            function _n(n, t) {
                return function (e) {
                    var r = u.event;
                    u.event = e, t[0] = this.__data__;
                    try {
                        n.apply(this, t)
                    } finally {
                        u.event = r
                    }
                }
            }

            function jn(n, t) {
                var e = _n(n, t);
                return function (n) {
                    var t = n.relatedTarget;
                    t && (t === this || 8 & t.compareDocumentPosition(this)) || e.call(this, n)
                }
            }

            c && wn.forEach((function (n) {
                "on" + n in c && wn.remove(n)
            }));
            var On, Sn = 0;

            function En(n) {
                var t = ".dragsuppress-" + ++Sn, e = "click" + t,
                    r = u.select(f(n)).on("touchmove" + t, Y).on("dragstart" + t, Y).on("selectstart" + t, Y);
                if (null == On && (On = !("onselectstart" in n) && P(n.style, "userSelect")), On) {
                    var i = l(n).style, o = i[On];
                    i[On] = "none"
                }
                return function (n) {
                    if (r.on(t, null), On && (i[On] = o), n) {
                        var u = function () {
                            r.on(e, null)
                        };
                        r.on(e, (function () {
                            Y(), u()
                        }), !0), setTimeout(u, 0)
                    }
                }
            }

            u.mouse = function (n) {
                return kn(n, Z())
            };
            var Nn = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;

            function kn(n, t) {
                t.changedTouches && (t = t.changedTouches[0]);
                var e = n.ownerSVGElement || n;
                if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    if (Nn < 0) {
                        var i = f(n);
                        if (i.scrollX || i.scrollY) {
                            var o = (e = u.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }, "important"))[0][0].getScreenCTM();
                            Nn = !(o.f || o.e), e.remove()
                        }
                    }
                    return Nn ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
                }
                var a = n.getBoundingClientRect();
                return [t.clientX - a.left - n.clientLeft, t.clientY - a.top - n.clientTop]
            }

            function An() {
                return u.event.changedTouches[0].identifier
            }

            u.touch = function (n, t, e) {
                if (arguments.length < 3 && (e = t, t = Z().changedTouches), t) for (var r, i = 0, u = t.length; i < u; ++i) if ((r = t[i]).identifier === e) return kn(n, r)
            }, u.behavior.drag = function () {
                var n = V(i, "drag", "dragstart", "dragend"), t = null, e = o(F, u.mouse, f, "mousemove", "mouseup"),
                    r = o(An, u.touch, R, "touchmove", "touchend");

                function i() {
                    this.on("mousedown.drag", e).on("touchstart.drag", r)
                }

                function o(e, r, i, o, a) {
                    return function () {
                        var c, l = this, f = u.event.target.correspondingElement || u.event.target, s = l.parentNode,
                            h = n.of(l, arguments), p = 0, g = e(), v = ".drag" + (null == g ? "" : "-" + g),
                            d = u.select(i(f)).on(o + v, b).on(a + v, M), y = En(f), m = r(s, g);

                        function b() {
                            var n, t, e = r(s, g);
                            e && (n = e[0] - m[0], t = e[1] - m[1], p |= n | t, m = e, h({
                                type: "drag",
                                x: e[0] + c[0],
                                y: e[1] + c[1],
                                dx: n,
                                dy: t
                            }))
                        }

                        function M() {
                            r(s, g) && (d.on(o + v, null).on(a + v, null), y(p), h({type: "dragend"}))
                        }

                        c = t ? [(c = t.apply(l, arguments)).x - m[0], c.y - m[1]] : [0, 0], h({type: "dragstart"})
                    }
                }

                return i.origin = function (n) {
                    return arguments.length ? (t = n, i) : t
                }, u.rebind(i, n, "on")
            }, u.touches = function (n, t) {
                return arguments.length < 2 && (t = Z().touches), t ? a(t).map((function (t) {
                    var e = kn(n, t);
                    return e.identifier = t.identifier, e
                })) : []
            };
            var Cn = 1e-6, zn = Cn * Cn, qn = Math.PI, Ln = 2 * qn, Tn = Ln - Cn, Rn = qn / 2, Dn = qn / 180,
                Pn = 180 / qn;

            function Un(n) {
                return n > 0 ? 1 : n < 0 ? -1 : 0
            }

            function Fn(n, t, e) {
                return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
            }

            function Hn(n) {
                return n > 1 ? 0 : n < -1 ? qn : Math.acos(n)
            }

            function In(n) {
                return n > 1 ? Rn : n < -1 ? -Rn : Math.asin(n)
            }

            function Yn(n) {
                return ((n = Math.exp(n)) + 1 / n) / 2
            }

            function Zn(n) {
                return (n = Math.sin(n / 2)) * n
            }

            var Vn = Math.SQRT2;
            u.interpolateZoom = function (n, t) {
                var e, r, i = n[0], u = n[1], o = n[2], a = t[0], c = t[1], l = t[2], f = a - i, s = c - u,
                    h = f * f + s * s;
                if (h < zn) r = Math.log(l / o) / Vn, e = function (n) {
                    return [i + n * f, u + n * s, o * Math.exp(Vn * n * r)]
                }; else {
                    var p = Math.sqrt(h), g = (l * l - o * o + 4 * h) / (2 * o * 2 * p),
                        v = (l * l - o * o - 4 * h) / (2 * l * 2 * p), d = Math.log(Math.sqrt(g * g + 1) - g),
                        y = Math.log(Math.sqrt(v * v + 1) - v);
                    r = (y - d) / Vn, e = function (n) {
                        var t, e = n * r, a = Yn(d),
                            c = o / (2 * p) * (a * (t = Vn * e + d, ((t = Math.exp(2 * t)) - 1) / (t + 1)) - function (n) {
                                return ((n = Math.exp(n)) - 1 / n) / 2
                            }(d));
                        return [i + c * f, u + c * s, o * a / Yn(Vn * e + d)]
                    }
                }
                return e.duration = 1e3 * r, e
            }, u.behavior.zoom = function () {
                var n, t, e, r, i, o, a, l, s, h = {x: 0, y: 0, k: 1}, p = [960, 500], g = Bn, v = 250, d = 0,
                    y = "mousedown.zoom", m = "mousemove.zoom", b = "mouseup.zoom", M = "touchstart.zoom",
                    x = V(w, "zoomstart", "zoom", "zoomend");

                function w(n) {
                    n.on(y, C).on($n + ".zoom", q).on("dblclick.zoom", L).on(M, z)
                }

                function _(n) {
                    return [(n[0] - h.x) / h.k, (n[1] - h.y) / h.k]
                }

                function j(n) {
                    h.k = Math.max(g[0], Math.min(g[1], n))
                }

                function O(n, t) {
                    t = function (n) {
                        return [n[0] * h.k + h.x, n[1] * h.k + h.y]
                    }(t), h.x += n[0] - t[0], h.y += n[1] - t[1]
                }

                function S(n, e, r, i) {
                    n.__chart__ = {
                        x: h.x,
                        y: h.y,
                        k: h.k
                    }, j(Math.pow(2, i)), O(t = e, r), n = u.select(n), v > 0 && (n = n.transition().duration(v)), n.call(w.event)
                }

                function E() {
                    a && a.domain(o.range().map((function (n) {
                        return (n - h.x) / h.k
                    })).map(o.invert)), s && s.domain(l.range().map((function (n) {
                        return (n - h.y) / h.k
                    })).map(l.invert))
                }

                function N(n) {
                    d++ || n({type: "zoomstart"})
                }

                function k(n) {
                    E(), n({type: "zoom", scale: h.k, translate: [h.x, h.y]})
                }

                function A(n) {
                    --d || (n({type: "zoomend"}), t = null)
                }

                function C() {
                    var n = this, t = x.of(n, arguments), e = 0, r = u.select(f(n)).on(m, (function () {
                        e = 1, O(u.mouse(n), i), k(t)
                    })).on(b, (function () {
                        r.on(m, null).on(b, null), o(e), A(t)
                    })), i = _(u.mouse(n)), o = En(n);
                    Ea.call(n), N(t)
                }

                function z() {
                    var n, t = this, e = x.of(t, arguments), r = {}, o = 0,
                        a = ".zoom-" + u.event.changedTouches[0].identifier, c = "touchmove" + a, l = "touchend" + a,
                        f = [], s = u.select(t), p = En(t);

                    function g() {
                        var e = u.touches(t);
                        return n = h.k, e.forEach((function (n) {
                            n.identifier in r && (r[n.identifier] = _(n))
                        })), e
                    }

                    function v() {
                        var n = u.event.target;
                        u.select(n).on(c, d).on(l, m), f.push(n);
                        for (var e = u.event.changedTouches, a = 0, s = e.length; a < s; ++a) r[e[a].identifier] = null;
                        var p = g(), v = Date.now();
                        if (1 === p.length) {
                            if (v - i < 500) {
                                var y = p[0];
                                S(t, y, r[y.identifier], Math.floor(Math.log(h.k) / Math.LN2) + 1), Y()
                            }
                            i = v
                        } else if (p.length > 1) {
                            y = p[0];
                            var b = p[1], M = y[0] - b[0], x = y[1] - b[1];
                            o = M * M + x * x
                        }
                    }

                    function d() {
                        var a, c, l, f, s = u.touches(t);
                        Ea.call(t);
                        for (var h = 0, p = s.length; h < p; ++h, f = null) if (l = s[h], f = r[l.identifier]) {
                            if (c) break;
                            a = l, c = f
                        }
                        if (f) {
                            var g = (g = l[0] - a[0]) * g + (g = l[1] - a[1]) * g, v = o && Math.sqrt(g / o);
                            a = [(a[0] + l[0]) / 2, (a[1] + l[1]) / 2], c = [(c[0] + f[0]) / 2, (c[1] + f[1]) / 2], j(v * n)
                        }
                        i = null, O(a, c), k(e)
                    }

                    function m() {
                        if (u.event.touches.length) {
                            for (var n = u.event.changedTouches, t = 0, i = n.length; t < i; ++t) delete r[n[t].identifier];
                            for (var o in r) return void g()
                        }
                        u.selectAll(f).on(a, null), s.on(y, C).on(M, z), p(), A(e)
                    }

                    v(), N(e), s.on(y, null).on(M, v)
                }

                function q() {
                    var i = x.of(this, arguments);
                    r ? clearTimeout(r) : (Ea.call(this), n = _(t = e || u.mouse(this)), N(i)), r = setTimeout((function () {
                        r = null, A(i)
                    }), 50), Y(), j(Math.pow(2, .002 * Xn()) * h.k), O(t, n), k(i)
                }

                function L() {
                    var n = u.mouse(this), t = Math.log(h.k) / Math.LN2;
                    S(this, n, _(n), u.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1)
                }

                return $n || ($n = "onwheel" in c ? (Xn = function () {
                    return -u.event.deltaY * (u.event.deltaMode ? 120 : 1)
                }, "wheel") : "onmousewheel" in c ? (Xn = function () {
                    return u.event.wheelDelta
                }, "mousewheel") : (Xn = function () {
                    return -u.event.detail
                }, "MozMousePixelScroll")), w.event = function (n) {
                    n.each((function () {
                        var n = x.of(this, arguments), e = h;
                        Aa ? u.select(this).transition().each("start.zoom", (function () {
                            h = this.__chart__ || {x: 0, y: 0, k: 1}, N(n)
                        })).tween("zoom:zoom", (function () {
                            var r = p[0], i = p[1], o = t ? t[0] : r / 2, a = t ? t[1] : i / 2,
                                c = u.interpolateZoom([(o - h.x) / h.k, (a - h.y) / h.k, r / h.k], [(o - e.x) / e.k, (a - e.y) / e.k, r / e.k]);
                            return function (t) {
                                var e = c(t), i = r / e[2];
                                this.__chart__ = h = {x: o - e[0] * i, y: a - e[1] * i, k: i}, k(n)
                            }
                        })).each("interrupt.zoom", (function () {
                            A(n)
                        })).each("end.zoom", (function () {
                            A(n)
                        })) : (this.__chart__ = h, N(n), k(n), A(n))
                    }))
                }, w.translate = function (n) {
                    return arguments.length ? (h = {x: +n[0], y: +n[1], k: h.k}, E(), w) : [h.x, h.y]
                }, w.scale = function (n) {
                    return arguments.length ? (h = {x: h.x, y: h.y, k: null}, j(+n), E(), w) : h.k
                }, w.scaleExtent = function (n) {
                    return arguments.length ? (g = null == n ? Bn : [+n[0], +n[1]], w) : g
                }, w.center = function (n) {
                    return arguments.length ? (e = n && [+n[0], +n[1]], w) : e
                }, w.size = function (n) {
                    return arguments.length ? (p = n && [+n[0], +n[1]], w) : p
                }, w.duration = function (n) {
                    return arguments.length ? (v = +n, w) : v
                }, w.x = function (n) {
                    return arguments.length ? (a = n, o = n.copy(), h = {x: 0, y: 0, k: 1}, w) : a
                }, w.y = function (n) {
                    return arguments.length ? (s = n, l = n.copy(), h = {x: 0, y: 0, k: 1}, w) : s
                }, u.rebind(w, x, "on")
            };
            var Xn, $n, Bn = [0, 1 / 0];

            function Wn() {
            }

            function Jn(n, t, e) {
                return this instanceof Jn ? (this.h = +n, this.s = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof Jn ? new Jn(n.h, n.s, n.l) : mt("" + n, bt, Jn) : new Jn(n, t, e)
            }

            u.color = Wn, Wn.prototype.toString = function () {
                return this.rgb() + ""
            }, u.hsl = Jn;
            var Gn = Jn.prototype = new Wn;

            function Kn(n, t, e) {
                var r, i;

                function u(n) {
                    return Math.round(255 * function (n) {
                        return n > 360 ? n -= 360 : n < 0 && (n += 360), n < 60 ? r + (i - r) * n / 60 : n < 180 ? i : n < 240 ? r + (i - r) * (240 - n) / 60 : r
                    }(n))
                }

                return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t, r = 2 * (e = e < 0 ? 0 : e > 1 ? 1 : e) - (i = e <= .5 ? e * (1 + t) : e + t - e * t), new pt(u(n + 120), u(n), u(n - 120))
            }

            function Qn(n, t, e) {
                return this instanceof Qn ? (this.h = +n, this.c = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof Qn ? new Qn(n.h, n.c, n.l) : lt(n instanceof et ? n.l : (n = Mt((n = u.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new Qn(n, t, e)
            }

            Gn.brighter = function (n) {
                return n = Math.pow(.7, arguments.length ? n : 1), new Jn(this.h, this.s, this.l / n)
            }, Gn.darker = function (n) {
                return n = Math.pow(.7, arguments.length ? n : 1), new Jn(this.h, this.s, n * this.l)
            }, Gn.rgb = function () {
                return Kn(this.h, this.s, this.l)
            }, u.hcl = Qn;
            var nt = Qn.prototype = new Wn;

            function tt(n, t, e) {
                return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new et(e, Math.cos(n *= Dn) * t, Math.sin(n) * t)
            }

            function et(n, t, e) {
                return this instanceof et ? (this.l = +n, this.a = +t, void (this.b = +e)) : arguments.length < 2 ? n instanceof et ? new et(n.l, n.a, n.b) : n instanceof Qn ? tt(n.h, n.c, n.l) : Mt((n = pt(n)).r, n.g, n.b) : new et(n, t, e)
            }

            nt.brighter = function (n) {
                return new Qn(this.h, this.c, Math.min(100, this.l + rt * (arguments.length ? n : 1)))
            }, nt.darker = function (n) {
                return new Qn(this.h, this.c, Math.max(0, this.l - rt * (arguments.length ? n : 1)))
            }, nt.rgb = function () {
                return tt(this.h, this.c, this.l).rgb()
            }, u.lab = et;
            var rt = 18, it = .95047, ut = 1, ot = 1.08883, at = et.prototype = new Wn;

            function ct(n, t, e) {
                var r = (n + 16) / 116, i = r + t / 500, u = r - e / 200;
                return new pt(ht(3.2404542 * (i = ft(i) * it) - 1.5371385 * (r = ft(r) * ut) - .4985314 * (u = ft(u) * ot)), ht(-.969266 * i + 1.8760108 * r + .041556 * u), ht(.0556434 * i - .2040259 * r + 1.0572252 * u))
            }

            function lt(n, t, e) {
                return n > 0 ? new Qn(Math.atan2(e, t) * Pn, Math.sqrt(t * t + e * e), n) : new Qn(NaN, NaN, n)
            }

            function ft(n) {
                return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
            }

            function st(n) {
                return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
            }

            function ht(n) {
                return Math.round(255 * (n <= .00304 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
            }

            function pt(n, t, e) {
                return this instanceof pt ? (this.r = ~~n, this.g = ~~t, void (this.b = ~~e)) : arguments.length < 2 ? n instanceof pt ? new pt(n.r, n.g, n.b) : mt("" + n, pt, Kn) : new pt(n, t, e)
            }

            function gt(n) {
                return new pt(n >> 16, n >> 8 & 255, 255 & n)
            }

            function vt(n) {
                return gt(n) + ""
            }

            at.brighter = function (n) {
                return new et(Math.min(100, this.l + rt * (arguments.length ? n : 1)), this.a, this.b)
            }, at.darker = function (n) {
                return new et(Math.max(0, this.l - rt * (arguments.length ? n : 1)), this.a, this.b)
            }, at.rgb = function () {
                return ct(this.l, this.a, this.b)
            }, u.rgb = pt;
            var dt = pt.prototype = new Wn;

            function yt(n) {
                return n < 16 ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
            }

            function mt(n, t, e) {
                var r, i, u, o = 0, a = 0, c = 0;
                if (r = /([a-z]+)\((.*)\)/.exec(n = n.toLowerCase())) switch (i = r[2].split(","), r[1]) {
                    case"hsl":
                        return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                    case"rgb":
                        return t(wt(i[0]), wt(i[1]), wt(i[2]))
                }
                return (u = _t.get(n)) ? t(u.r, u.g, u.b) : (null == n || "#" !== n.charAt(0) || isNaN(u = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & u) >> 4, o |= o >> 4, a = 240 & u, a |= a >> 4, c = 15 & u, c |= c << 4) : 7 === n.length && (o = (16711680 & u) >> 16, a = (65280 & u) >> 8, c = 255 & u)), t(o, a, c))
            }

            function bt(n, t, e) {
                var r, i, u = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - u, c = (o + u) / 2;
                return a ? (i = c < .5 ? a / (o + u) : a / (2 - o - u), r = n == o ? (t - e) / a + (t < e ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = NaN, i = c > 0 && c < 1 ? 0 : r), new Jn(r, i, c)
            }

            function Mt(n, t, e) {
                var r = st((.4124564 * (n = xt(n)) + .3575761 * (t = xt(t)) + .1804375 * (e = xt(e))) / it),
                    i = st((.2126729 * n + .7151522 * t + .072175 * e) / ut);
                return et(116 * i - 16, 500 * (r - i), 200 * (i - st((.0193339 * n + .119192 * t + .9503041 * e) / ot)))
            }

            function xt(n) {
                return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
            }

            function wt(n) {
                var t = parseFloat(n);
                return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
            }

            dt.brighter = function (n) {
                n = Math.pow(.7, arguments.length ? n : 1);
                var t = this.r, e = this.g, r = this.b, i = 30;
                return t || e || r ? (t && t < i && (t = i), e && e < i && (e = i), r && r < i && (r = i), new pt(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new pt(i, i, i)
            }, dt.darker = function (n) {
                return new pt((n = Math.pow(.7, arguments.length ? n : 1)) * this.r, n * this.g, n * this.b)
            }, dt.hsl = function () {
                return bt(this.r, this.g, this.b)
            }, dt.toString = function () {
                return "#" + yt(this.r) + yt(this.g) + yt(this.b)
            };
            var _t = u.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });

            function jt(n) {
                return "function" == typeof n ? n : function () {
                    return n
                }
            }

            function Ot(n) {
                return function (t, e, r) {
                    return 2 === arguments.length && "function" == typeof e && (r = e, e = null), St(t, e, n, r)
                }
            }

            function St(n, t, e, r) {
                var i = {}, o = u.dispatch("beforesend", "progress", "load", "error"), c = {}, l = new XMLHttpRequest,
                    f = null;

                function s() {
                    var n, t = l.status;
                    if (!t && function (n) {
                        var t = n.responseType;
                        return t && "text" !== t ? n.response : n.responseText
                    }(l) || t >= 200 && t < 300 || 304 === t) {
                        try {
                            n = e.call(i, l)
                        } catch (n) {
                            return void o.error.call(i, n)
                        }
                        o.load.call(i, n)
                    } else o.error.call(i, l)
                }

                return !this.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(n) || (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = s : l.onreadystatechange = function () {
                    l.readyState > 3 && s()
                }, l.onprogress = function (n) {
                    var t = u.event;
                    u.event = n;
                    try {
                        o.progress.call(i, l)
                    } finally {
                        u.event = t
                    }
                }, i.header = function (n, t) {
                    return n = (n + "").toLowerCase(), arguments.length < 2 ? c[n] : (null == t ? delete c[n] : c[n] = t + "", i)
                }, i.mimeType = function (n) {
                    return arguments.length ? (t = null == n ? null : n + "", i) : t
                }, i.responseType = function (n) {
                    return arguments.length ? (f = n, i) : f
                }, i.response = function (n) {
                    return e = n, i
                }, ["get", "post"].forEach((function (n) {
                    i[n] = function () {
                        return i.send.apply(i, [n].concat(a(arguments)))
                    }
                })), i.send = function (e, r, u) {
                    if (2 === arguments.length && "function" == typeof r && (u = r, r = null), l.open(e, n, !0), null == t || "accept" in c || (c.accept = t + ",*/*"), l.setRequestHeader) for (var a in c) l.setRequestHeader(a, c[a]);
                    return null != t && l.overrideMimeType && l.overrideMimeType(t), null != f && (l.responseType = f), null != u && i.on("error", u).on("load", (function (n) {
                        u(null, n)
                    })), o.beforesend.call(i, l), l.send(null == r ? null : r), i
                }, i.abort = function () {
                    return l.abort(), i
                }, u.rebind(i, o, "on"), null == r ? i : i.get(function (n) {
                    return 1 === n.length ? function (t, e) {
                        n(null == t ? e : null)
                    } : n
                }(r))
            }

            _t.forEach((function (n, t) {
                _t.set(n, gt(t))
            })), u.functor = jt, u.xhr = Ot(R), u.dsv = function (n, t) {
                var e = new RegExp('["' + n + "\n]"), r = n.charCodeAt(0);

                function i(n, e, r) {
                    arguments.length < 3 && (r = e, e = null);
                    var i = St(n, t, null == e ? u : o(e), r);
                    return i.row = function (n) {
                        return arguments.length ? i.response(null == (e = n) ? u : o(n)) : e
                    }, i
                }

                function u(n) {
                    return i.parse(n.responseText)
                }

                function o(n) {
                    return function (t) {
                        return i.parse(t.responseText, n)
                    }
                }

                function a(t) {
                    return t.map(c).join(n)
                }

                function c(n) {
                    return e.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
                }

                return i.parse = function (n, t) {
                    var e;
                    return i.parseRows(n, (function (n, r) {
                        if (e) return e(n, r - 1);
                        var i = new Function("d", "return {" + n.map((function (n, t) {
                            return JSON.stringify(n) + ": d[" + t + "]"
                        })).join(",") + "}");
                        e = t ? function (n, e) {
                            return t(i(n), e)
                        } : i
                    }))
                }, i.parseRows = function (n, t) {
                    var e, i, u = {}, o = {}, a = [], c = n.length, l = 0, f = 0;

                    function s() {
                        if (l >= c) return o;
                        if (i) return i = !1, u;
                        var t = l;
                        if (34 === n.charCodeAt(t)) {
                            for (var e = t; e++ < c;) if (34 === n.charCodeAt(e)) {
                                if (34 !== n.charCodeAt(e + 1)) break;
                                ++e
                            }
                            return l = e + 2, 13 === (a = n.charCodeAt(e + 1)) ? (i = !0, 10 === n.charCodeAt(e + 2) && ++l) : 10 === a && (i = !0), n.slice(t + 1, e).replace(/""/g, '"')
                        }
                        for (; l < c;) {
                            var a, f = 1;
                            if (10 === (a = n.charCodeAt(l++))) i = !0; else if (13 === a) i = !0, 10 === n.charCodeAt(l) && (++l, ++f); else if (a !== r) continue;
                            return n.slice(t, l - f)
                        }
                        return n.slice(t)
                    }

                    for (; (e = s()) !== o;) {
                        for (var h = []; e !== u && e !== o;) h.push(e), e = s();
                        t && null == (h = t(h, f++)) || a.push(h)
                    }
                    return a
                }, i.format = function (t) {
                    if (Array.isArray(t[0])) return i.formatRows(t);
                    var e = new T, r = [];
                    return t.forEach((function (n) {
                        for (var t in n) e.has(t) || r.push(e.add(t))
                    })), [r.map(c).join(n)].concat(t.map((function (t) {
                        return r.map((function (n) {
                            return c(t[n])
                        })).join(n)
                    }))).join("\n")
                }, i.formatRows = function (n) {
                    return n.map(a).join("\n")
                }, i
            }, u.csv = u.dsv(",", "text/csv"), u.tsv = u.dsv("\t", "text/tab-separated-values");
            var Et, Nt, kt, At, Ct = this[P(this, "requestAnimationFrame")] || function (n) {
                setTimeout(n, 17)
            };

            function zt(n, t, e) {
                var r = arguments.length;
                r < 2 && (t = 0), r < 3 && (e = Date.now());
                var i = {c: n, t: e + t, n: null};
                return Nt ? Nt.n = i : Et = i, Nt = i, kt || (At = clearTimeout(At), kt = 1, Ct(qt)), i
            }

            function qt() {
                var n = Lt(), t = Tt() - n;
                t > 24 ? (isFinite(t) && (clearTimeout(At), At = setTimeout(qt, t)), kt = 0) : (kt = 1, Ct(qt))
            }

            function Lt() {
                for (var n = Date.now(), t = Et; t;) n >= t.t && t.c(n - t.t) && (t.c = null), t = t.n;
                return n
            }

            function Tt() {
                for (var n, t = Et, e = 1 / 0; t;) t.c ? (t.t < e && (e = t.t), t = (n = t).n) : t = n ? n.n = t.n : Et = t.n;
                return Nt = n, e
            }

            function Rt(n, t) {
                return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
            }

            u.timer = function () {
                zt.apply(this, arguments)
            }, u.timer.flush = function () {
                Lt(), Tt()
            }, u.round = function (n, t) {
                return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
            };
            var Dt = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map((function (n, t) {
                var e = Math.pow(10, 3 * w(8 - t));
                return {
                    scale: t > 8 ? function (n) {
                        return n / e
                    } : function (n) {
                        return n * e
                    }, symbol: n
                }
            }));

            function Pt(n) {
                var t = n.decimal, e = n.thousands, r = n.grouping, i = n.currency, o = r && e ? function (n, t) {
                    for (var i = n.length, u = [], o = 0, a = r[0], c = 0; i > 0 && a > 0 && (c + a + 1 > t && (a = Math.max(1, t - c)), u.push(n.substring(i -= a, i + a)), !((c += a + 1) > t));) a = r[o = (o + 1) % r.length];
                    return u.reverse().join(e)
                } : R;
                return function (n) {
                    var e = Ut.exec(n), r = e[1] || " ", a = e[2] || ">", c = e[3] || "-", l = e[4] || "", f = e[5],
                        s = +e[6], h = e[7], p = e[8], g = e[9], v = 1, d = "", y = "", m = !1, b = !0;
                    switch (p && (p = +p.substring(1)), (f || "0" === r && "=" === a) && (f = r = "0", a = "="), g) {
                        case"n":
                            h = !0, g = "g";
                            break;
                        case"%":
                            v = 100, y = "%", g = "f";
                            break;
                        case"p":
                            v = 100, y = "%", g = "r";
                            break;
                        case"b":
                        case"o":
                        case"x":
                        case"X":
                            "#" === l && (d = "0" + g.toLowerCase());
                        case"c":
                            b = !1;
                        case"d":
                            m = !0, p = 0;
                            break;
                        case"s":
                            v = -1, g = "r"
                    }
                    "$" === l && (d = i[0], y = i[1]), "r" != g || p || (g = "g"), null != p && ("g" == g ? p = Math.max(1, Math.min(21, p)) : "e" != g && "f" != g || (p = Math.max(0, Math.min(20, p)))), g = Ft.get(g) || Ht;
                    var M = f && h;
                    return function (n) {
                        var e = y;
                        if (m && n % 1) return "";
                        var i = n < 0 || 0 === n && 1 / n < 0 ? (n = -n, "-") : "-" === c ? "" : c;
                        if (v < 0) {
                            var l = u.formatPrefix(n, p);
                            n = l.scale(n), e = l.symbol + y
                        } else n *= v;
                        var x, w, _ = (n = g(n, p)).lastIndexOf(".");
                        if (_ < 0) {
                            var j = b ? n.lastIndexOf("e") : -1;
                            j < 0 ? (x = n, w = "") : (x = n.substring(0, j), w = n.substring(j))
                        } else x = n.substring(0, _), w = t + n.substring(_ + 1);
                        !f && h && (x = o(x, 1 / 0));
                        var O = d.length + x.length + w.length + (M ? 0 : i.length),
                            S = O < s ? new Array(O = s - O + 1).join(r) : "";
                        return M && (x = o(S + x, S.length ? s - w.length : 1 / 0)), i += d, n = x + w, ("<" === a ? i + n + S : ">" === a ? S + i + n : "^" === a ? S.substring(0, O >>= 1) + i + n + S.substring(O) : i + (M ? n : S + n)) + e
                    }
                }
            }

            u.formatPrefix = function (n, t) {
                var e = 0;
                return (n = +n) && (n < 0 && (n *= -1), t && (n = u.round(n, Rt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), Dt[8 + e / 3]
            };
            var Ut = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, Ft = u.map({
                b: function (n) {
                    return n.toString(2)
                }, c: function (n) {
                    return String.fromCharCode(n)
                }, o: function (n) {
                    return n.toString(8)
                }, x: function (n) {
                    return n.toString(16)
                }, X: function (n) {
                    return n.toString(16).toUpperCase()
                }, g: function (n, t) {
                    return n.toPrecision(t)
                }, e: function (n, t) {
                    return n.toExponential(t)
                }, f: function (n, t) {
                    return n.toFixed(t)
                }, r: function (n, t) {
                    return (n = u.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))))
                }
            });

            function Ht(n) {
                return n + ""
            }

            var It = u.time = {}, Yt = Date;

            function Zt() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
            }

            Zt.prototype = {
                getDate: function () {
                    return this._.getUTCDate()
                }, getDay: function () {
                    return this._.getUTCDay()
                }, getFullYear: function () {
                    return this._.getUTCFullYear()
                }, getHours: function () {
                    return this._.getUTCHours()
                }, getMilliseconds: function () {
                    return this._.getUTCMilliseconds()
                }, getMinutes: function () {
                    return this._.getUTCMinutes()
                }, getMonth: function () {
                    return this._.getUTCMonth()
                }, getSeconds: function () {
                    return this._.getUTCSeconds()
                }, getTime: function () {
                    return this._.getTime()
                }, getTimezoneOffset: function () {
                    return 0
                }, valueOf: function () {
                    return this._.valueOf()
                }, setDate: function () {
                    Vt.setUTCDate.apply(this._, arguments)
                }, setDay: function () {
                    Vt.setUTCDay.apply(this._, arguments)
                }, setFullYear: function () {
                    Vt.setUTCFullYear.apply(this._, arguments)
                }, setHours: function () {
                    Vt.setUTCHours.apply(this._, arguments)
                }, setMilliseconds: function () {
                    Vt.setUTCMilliseconds.apply(this._, arguments)
                }, setMinutes: function () {
                    Vt.setUTCMinutes.apply(this._, arguments)
                }, setMonth: function () {
                    Vt.setUTCMonth.apply(this._, arguments)
                }, setSeconds: function () {
                    Vt.setUTCSeconds.apply(this._, arguments)
                }, setTime: function () {
                    Vt.setTime.apply(this._, arguments)
                }
            };
            var Vt = Date.prototype;

            function Xt(n, t, e) {
                function r(t) {
                    var e = n(t), r = u(e, 1);
                    return t - e < r - t ? e : r
                }

                function i(e) {
                    return t(e = n(new Yt(e - 1)), 1), e
                }

                function u(n, e) {
                    return t(n = new Yt(+n), e), n
                }

                function o(n, r, u) {
                    var o = i(n), a = [];
                    if (u > 1) for (; o < r;) e(o) % u || a.push(new Date(+o)), t(o, 1); else for (; o < r;) a.push(new Date(+o)), t(o, 1);
                    return a
                }

                n.floor = n, n.round = r, n.ceil = i, n.offset = u, n.range = o;
                var a = n.utc = $t(n);
                return a.floor = a, a.round = $t(r), a.ceil = $t(i), a.offset = $t(u), a.range = function (n, t, e) {
                    try {
                        Yt = Zt;
                        var r = new Zt;
                        return r._ = n, o(r, t, e)
                    } finally {
                        Yt = Date
                    }
                }, n
            }

            function $t(n) {
                return function (t, e) {
                    try {
                        Yt = Zt;
                        var r = new Zt;
                        return r._ = t, n(r, e)._
                    } finally {
                        Yt = Date
                    }
                }
            }

            function Bt(n) {
                var t = n.dateTime, e = n.date, r = n.time, i = n.periods, o = n.days, a = n.shortDays, c = n.months,
                    l = n.shortMonths;

                function f(n) {
                    var t = n.length;

                    function e(e) {
                        for (var r, i, u, o = [], a = -1, c = 0; ++a < t;) 37 === n.charCodeAt(a) && (o.push(n.slice(c, a)), null != (i = Wt[r = n.charAt(++a)]) && (r = n.charAt(++a)), (u = x[r]) && (r = u(e, null == i ? "e" === r ? " " : "0" : i)), o.push(r), c = a + 1);
                        return o.push(n.slice(c, a)), o.join("")
                    }

                    return e.parse = function (t) {
                        var e = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null};
                        if (s(e, n, t, 0) != t.length) return null;
                        "p" in e && (e.H = e.H % 12 + 12 * e.p);
                        var r = null != e.Z && Yt !== Zt, i = new (r ? Zt : Yt);
                        return "j" in e ? i.setFullYear(e.y, 0, e.j) : "W" in e || "U" in e ? ("w" in e || (e.w = "W" in e ? 1 : 0), i.setFullYear(e.y, 0, 1), i.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (i.getDay() + 5) % 7 : e.w + 7 * e.U - (i.getDay() + 6) % 7)) : i.setFullYear(e.y, e.m, e.d), i.setHours(e.H + (e.Z / 100 | 0), e.M + e.Z % 100, e.S, e.L), r ? i._ : i
                    }, e.toString = function () {
                        return n
                    }, e
                }

                function s(n, t, e, r) {
                    for (var i, u, o, a = 0, c = t.length, l = e.length; a < c;) {
                        if (r >= l) return -1;
                        if (37 === (i = t.charCodeAt(a++))) {
                            if (o = t.charAt(a++), !(u = w[o in Wt ? t.charAt(a++) : o]) || (r = u(n, e, r)) < 0) return -1
                        } else if (i != e.charCodeAt(r++)) return -1
                    }
                    return r
                }

                f.utc = function (n) {
                    var t = f(n);

                    function e(n) {
                        try {
                            var e = new (Yt = Zt);
                            return e._ = n, t(e)
                        } finally {
                            Yt = Date
                        }
                    }

                    return e.parse = function (n) {
                        try {
                            Yt = Zt;
                            var e = t.parse(n);
                            return e && e._
                        } finally {
                            Yt = Date
                        }
                    }, e.toString = t.toString, e
                }, f.multi = f.utc.multi = de;
                var h = u.map(), p = Qt(o), g = ne(o), v = Qt(a), d = ne(a), y = Qt(c), m = ne(c), b = Qt(l), M = ne(l);
                i.forEach((function (n, t) {
                    h.set(n.toLowerCase(), t)
                }));
                var x = {
                    a: function (n) {
                        return a[n.getDay()]
                    }, A: function (n) {
                        return o[n.getDay()]
                    }, b: function (n) {
                        return l[n.getMonth()]
                    }, B: function (n) {
                        return c[n.getMonth()]
                    }, c: f(t), d: function (n, t) {
                        return Kt(n.getDate(), t, 2)
                    }, e: function (n, t) {
                        return Kt(n.getDate(), t, 2)
                    }, H: function (n, t) {
                        return Kt(n.getHours(), t, 2)
                    }, I: function (n, t) {
                        return Kt(n.getHours() % 12 || 12, t, 2)
                    }, j: function (n, t) {
                        return Kt(1 + It.dayOfYear(n), t, 3)
                    }, L: function (n, t) {
                        return Kt(n.getMilliseconds(), t, 3)
                    }, m: function (n, t) {
                        return Kt(n.getMonth() + 1, t, 2)
                    }, M: function (n, t) {
                        return Kt(n.getMinutes(), t, 2)
                    }, p: function (n) {
                        return i[+(n.getHours() >= 12)]
                    }, S: function (n, t) {
                        return Kt(n.getSeconds(), t, 2)
                    }, U: function (n, t) {
                        return Kt(It.sundayOfYear(n), t, 2)
                    }, w: function (n) {
                        return n.getDay()
                    }, W: function (n, t) {
                        return Kt(It.mondayOfYear(n), t, 2)
                    }, x: f(e), X: f(r), y: function (n, t) {
                        return Kt(n.getFullYear() % 100, t, 2)
                    }, Y: function (n, t) {
                        return Kt(n.getFullYear() % 1e4, t, 4)
                    }, Z: ge, "%": function () {
                        return "%"
                    }
                }, w = {
                    a: function (n, t, e) {
                        v.lastIndex = 0;
                        var r = v.exec(t.slice(e));
                        return r ? (n.w = d.get(r[0].toLowerCase()), e + r[0].length) : -1
                    }, A: function (n, t, e) {
                        p.lastIndex = 0;
                        var r = p.exec(t.slice(e));
                        return r ? (n.w = g.get(r[0].toLowerCase()), e + r[0].length) : -1
                    }, b: function (n, t, e) {
                        b.lastIndex = 0;
                        var r = b.exec(t.slice(e));
                        return r ? (n.m = M.get(r[0].toLowerCase()), e + r[0].length) : -1
                    }, B: function (n, t, e) {
                        y.lastIndex = 0;
                        var r = y.exec(t.slice(e));
                        return r ? (n.m = m.get(r[0].toLowerCase()), e + r[0].length) : -1
                    }, c: function (n, t, e) {
                        return s(n, x.c.toString(), t, e)
                    }, d: ce, e: ce, H: fe, I: fe, j: le, L: pe, m: ae, M: se, p: function (n, t, e) {
                        var r = h.get(t.slice(e, e += 2).toLowerCase());
                        return null == r ? -1 : (n.p = r, e)
                    }, S: he, U: ee, w: te, W: re, x: function (n, t, e) {
                        return s(n, x.x.toString(), t, e)
                    }, X: function (n, t, e) {
                        return s(n, x.X.toString(), t, e)
                    }, y: ue, Y: ie, Z: oe, "%": ve
                };
                return f
            }

            It.year = Xt((function (n) {
                return (n = It.day(n)).setMonth(0, 1), n
            }), (function (n, t) {
                n.setFullYear(n.getFullYear() + t)
            }), (function (n) {
                return n.getFullYear()
            })), It.years = It.year.range, It.years.utc = It.year.utc.range, It.day = Xt((function (n) {
                var t = new Yt(2e3, 0);
                return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
            }), (function (n, t) {
                n.setDate(n.getDate() + t)
            }), (function (n) {
                return n.getDate() - 1
            })), It.days = It.day.range, It.days.utc = It.day.utc.range, It.dayOfYear = function (n) {
                var t = It.year(n);
                return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
            }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach((function (n, t) {
                t = 7 - t;
                var e = It[n] = Xt((function (n) {
                    return (n = It.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
                }), (function (n, t) {
                    n.setDate(n.getDate() + 7 * Math.floor(t))
                }), (function (n) {
                    var e = It.year(n).getDay();
                    return Math.floor((It.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
                }));
                It[n + "s"] = e.range, It[n + "s"].utc = e.utc.range, It[n + "OfYear"] = function (n) {
                    var e = It.year(n).getDay();
                    return Math.floor((It.dayOfYear(n) + (e + t) % 7) / 7)
                }
            })), It.week = It.sunday, It.weeks = It.sunday.range, It.weeks.utc = It.sunday.utc.range, It.weekOfYear = It.sundayOfYear;
            var Wt = {"-": "", _: " ", 0: "0"}, Jt = /^\s*\d+/, Gt = /^%/;

            function Kt(n, t, e) {
                var r = n < 0 ? "-" : "", i = (r ? -n : n) + "", u = i.length;
                return r + (u < e ? new Array(e - u + 1).join(t) + i : i)
            }

            function Qt(n) {
                return new RegExp("^(?:" + n.map(u.requote).join("|") + ")", "i")
            }

            function ne(n) {
                for (var t = new O, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
                return t
            }

            function te(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 1));
                return r ? (n.w = +r[0], e + r[0].length) : -1
            }

            function ee(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e));
                return r ? (n.U = +r[0], e + r[0].length) : -1
            }

            function re(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e));
                return r ? (n.W = +r[0], e + r[0].length) : -1
            }

            function ie(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 4));
                return r ? (n.y = +r[0], e + r[0].length) : -1
            }

            function ue(n, t, e) {
                Jt.lastIndex = 0;
                var r, i = Jt.exec(t.slice(e, e + 2));
                return i ? (n.y = (r = +i[0]) + (r > 68 ? 1900 : 2e3), e + i[0].length) : -1
            }

            function oe(n, t, e) {
                return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1
            }

            function ae(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 2));
                return r ? (n.m = r[0] - 1, e + r[0].length) : -1
            }

            function ce(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 2));
                return r ? (n.d = +r[0], e + r[0].length) : -1
            }

            function le(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 3));
                return r ? (n.j = +r[0], e + r[0].length) : -1
            }

            function fe(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 2));
                return r ? (n.H = +r[0], e + r[0].length) : -1
            }

            function se(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 2));
                return r ? (n.M = +r[0], e + r[0].length) : -1
            }

            function he(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 2));
                return r ? (n.S = +r[0], e + r[0].length) : -1
            }

            function pe(n, t, e) {
                Jt.lastIndex = 0;
                var r = Jt.exec(t.slice(e, e + 3));
                return r ? (n.L = +r[0], e + r[0].length) : -1
            }

            function ge(n) {
                var t = n.getTimezoneOffset(), e = t > 0 ? "-" : "+", r = w(t) / 60 | 0, i = w(t) % 60;
                return e + Kt(r, "0", 2) + Kt(i, "0", 2)
            }

            function ve(n, t, e) {
                Gt.lastIndex = 0;
                var r = Gt.exec(t.slice(e, e + 1));
                return r ? e + r[0].length : -1
            }

            function de(n) {
                for (var t = n.length, e = -1; ++e < t;) n[e][0] = this(n[e][0]);
                return function (t) {
                    for (var e = 0, r = n[e]; !r[1](t);) r = n[++e];
                    return r[0](t)
                }
            }

            u.locale = function (n) {
                return {numberFormat: Pt(n), timeFormat: Bt(n)}
            };
            var ye = u.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });

            function me() {
            }

            u.format = ye.numberFormat, u.geo = {}, me.prototype = {
                s: 0, t: 0, add: function (n) {
                    Me(n, this.t, be), Me(be.s, this.s, this), this.s ? this.t += be.t : this.s = be.t
                }, reset: function () {
                    this.s = this.t = 0
                }, valueOf: function () {
                    return this.s
                }
            };
            var be = new me;

            function Me(n, t, e) {
                var r = e.s = n + t, i = r - n, u = r - i;
                e.t = n - u + (t - i)
            }

            function xe(n, t) {
                n && _e.hasOwnProperty(n.type) && _e[n.type](n, t)
            }

            u.geo.stream = function (n, t) {
                n && we.hasOwnProperty(n.type) ? we[n.type](n, t) : xe(n, t)
            };
            var we = {
                Feature: function (n, t) {
                    xe(n.geometry, t)
                }, FeatureCollection: function (n, t) {
                    for (var e = n.features, r = -1, i = e.length; ++r < i;) xe(e[r].geometry, t)
                }
            }, _e = {
                Sphere: function (n, t) {
                    t.sphere()
                }, Point: function (n, t) {
                    n = n.coordinates, t.point(n[0], n[1], n[2])
                }, MultiPoint: function (n, t) {
                    for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) n = e[r], t.point(n[0], n[1], n[2])
                }, LineString: function (n, t) {
                    je(n.coordinates, t, 0)
                }, MultiLineString: function (n, t) {
                    for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) je(e[r], t, 0)
                }, Polygon: function (n, t) {
                    Oe(n.coordinates, t)
                }, MultiPolygon: function (n, t) {
                    for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) Oe(e[r], t)
                }, GeometryCollection: function (n, t) {
                    for (var e = n.geometries, r = -1, i = e.length; ++r < i;) xe(e[r], t)
                }
            };

            function je(n, t, e) {
                var r, i = -1, u = n.length - e;
                for (t.lineStart(); ++i < u;) r = n[i], t.point(r[0], r[1], r[2]);
                t.lineEnd()
            }

            function Oe(n, t) {
                var e = -1, r = n.length;
                for (t.polygonStart(); ++e < r;) je(n[e], t, 1);
                t.polygonEnd()
            }

            u.geo.area = function (n) {
                return Se = 0, u.geo.stream(n, Ue), Se
            };
            var Se, Ee, Ne, ke, Ae, Ce, ze, qe, Le, Te, Re, De, Pe = new me, Ue = {
                sphere: function () {
                    Se += 4 * qn
                }, point: F, lineStart: F, lineEnd: F, polygonStart: function () {
                    Pe.reset(), Ue.lineStart = Fe
                }, polygonEnd: function () {
                    var n = 2 * Pe;
                    Se += n < 0 ? 4 * qn + n : n, Ue.lineStart = Ue.lineEnd = Ue.point = F
                }
            };

            function Fe() {
                var n, t, e, r, i;

                function u(n, t) {
                    t = t * Dn / 2 + qn / 4;
                    var u = (n *= Dn) - e, o = u >= 0 ? 1 : -1, a = o * u, c = Math.cos(t), l = Math.sin(t), f = i * l,
                        s = r * c + f * Math.cos(a), h = f * o * Math.sin(a);
                    Pe.add(Math.atan2(h, s)), e = n, r = c, i = l
                }

                Ue.point = function (o, a) {
                    Ue.point = u, e = (n = o) * Dn, r = Math.cos(a = (t = a) * Dn / 2 + qn / 4), i = Math.sin(a)
                }, Ue.lineEnd = function () {
                    u(n, t)
                }
            }

            function He(n) {
                var t = n[0], e = n[1], r = Math.cos(e);
                return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
            }

            function Ie(n, t) {
                return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
            }

            function Ye(n, t) {
                return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
            }

            function Ze(n, t) {
                n[0] += t[0], n[1] += t[1], n[2] += t[2]
            }

            function Ve(n, t) {
                return [n[0] * t, n[1] * t, n[2] * t]
            }

            function Xe(n) {
                var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
                n[0] /= t, n[1] /= t, n[2] /= t
            }

            function $e(n) {
                return [Math.atan2(n[1], n[0]), In(n[2])]
            }

            function Be(n, t) {
                return w(n[0] - t[0]) < Cn && w(n[1] - t[1]) < Cn
            }

            u.geo.bounds = function () {
                var n, t, e, r, i, o, a, c, l, f, s, h = {
                    point: p, lineStart: v, lineEnd: d, polygonStart: function () {
                        h.point = y, h.lineStart = m, h.lineEnd = b, l = 0, Ue.polygonStart()
                    }, polygonEnd: function () {
                        Ue.polygonEnd(), h.point = p, h.lineStart = v, h.lineEnd = d, Pe < 0 ? (n = -(e = 180), t = -(r = 90)) : l > Cn ? r = 90 : l < -Cn && (t = -90), s[0] = n, s[1] = e
                    }
                };

                function p(i, u) {
                    f.push(s = [n = i, e = i]), u < t && (t = u), u > r && (r = u)
                }

                function g(u, o) {
                    var a = He([u * Dn, o * Dn]);
                    if (c) {
                        var l = Ye(c, a), f = Ye([l[1], -l[0], 0], l);
                        Xe(f), f = $e(f);
                        var s = u - i, h = s > 0 ? 1 : -1, g = f[0] * Pn * h, v = w(s) > 180;
                        if (v ^ (h * i < g && g < h * u)) (d = f[1] * Pn) > r && (r = d); else if (v ^ (h * i < (g = (g + 360) % 360 - 180) && g < h * u)) {
                            var d;
                            (d = -f[1] * Pn) < t && (t = d)
                        } else o < t && (t = o), o > r && (r = o);
                        v ? u < i ? M(n, u) > M(n, e) && (e = u) : M(u, e) > M(n, e) && (n = u) : e >= n ? (u < n && (n = u), u > e && (e = u)) : u > i ? M(n, u) > M(n, e) && (e = u) : M(u, e) > M(n, e) && (n = u)
                    } else p(u, o);
                    c = a, i = u
                }

                function v() {
                    h.point = g
                }

                function d() {
                    s[0] = n, s[1] = e, h.point = p, c = null
                }

                function y(n, t) {
                    if (c) {
                        var e = n - i;
                        l += w(e) > 180 ? e + (e > 0 ? 360 : -360) : e
                    } else o = n, a = t;
                    Ue.point(n, t), g(n, t)
                }

                function m() {
                    Ue.lineStart()
                }

                function b() {
                    y(o, a), Ue.lineEnd(), w(l) > Cn && (n = -(e = 180)), s[0] = n, s[1] = e, c = null
                }

                function M(n, t) {
                    return (t -= n) < 0 ? t + 360 : t
                }

                function x(n, t) {
                    return n[0] - t[0]
                }

                function _(n, t) {
                    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
                }

                return function (i) {
                    if (r = e = -(n = t = 1 / 0), f = [], u.geo.stream(i, h), l = f.length) {
                        f.sort(x);
                        for (var o = 1, a = [v = f[0]]; o < l; ++o) _((p = f[o])[0], v) || _(p[1], v) ? (M(v[0], p[1]) > M(v[0], v[1]) && (v[1] = p[1]), M(p[0], v[1]) > M(v[0], v[1]) && (v[0] = p[0])) : a.push(v = p);
                        for (var c, l, p, g = -1 / 0, v = (o = 0, a[l = a.length - 1]); o <= l; v = p, ++o) p = a[o], (c = M(v[1], p[0])) > g && (g = c, n = p[0], e = v[1])
                    }
                    return f = s = null, n === 1 / 0 || t === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[n, t], [e, r]]
                }
            }(), u.geo.centroid = function (n) {
                Ee = Ne = ke = Ae = Ce = ze = qe = Le = Te = Re = De = 0, u.geo.stream(n, We);
                var t = Te, e = Re, r = De, i = t * t + e * e + r * r;
                return i < zn && (t = ze, e = qe, r = Le, Ne < Cn && (t = ke, e = Ae, r = Ce), (i = t * t + e * e + r * r) < zn) ? [NaN, NaN] : [Math.atan2(e, t) * Pn, In(r / Math.sqrt(i)) * Pn]
            };
            var We = {
                sphere: F, point: Je, lineStart: Ke, lineEnd: Qe, polygonStart: function () {
                    We.lineStart = nr
                }, polygonEnd: function () {
                    We.lineStart = Ke
                }
            };

            function Je(n, t) {
                n *= Dn;
                var e = Math.cos(t *= Dn);
                Ge(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
            }

            function Ge(n, t, e) {
                ++Ee, ke += (n - ke) / Ee, Ae += (t - Ae) / Ee, Ce += (e - Ce) / Ee
            }

            function Ke() {
                var n, t, e;

                function r(r, i) {
                    r *= Dn;
                    var u = Math.cos(i *= Dn), o = u * Math.cos(r), a = u * Math.sin(r), c = Math.sin(i),
                        l = Math.atan2(Math.sqrt((l = t * c - e * a) * l + (l = e * o - n * c) * l + (l = n * a - t * o) * l), n * o + t * a + e * c);
                    Ne += l, ze += l * (n + (n = o)), qe += l * (t + (t = a)), Le += l * (e + (e = c)), Ge(n, t, e)
                }

                We.point = function (i, u) {
                    i *= Dn;
                    var o = Math.cos(u *= Dn);
                    n = o * Math.cos(i), t = o * Math.sin(i), e = Math.sin(u), We.point = r, Ge(n, t, e)
                }
            }

            function Qe() {
                We.point = Je
            }

            function nr() {
                var n, t, e, r, i;

                function u(n, t) {
                    n *= Dn;
                    var u = Math.cos(t *= Dn), o = u * Math.cos(n), a = u * Math.sin(n), c = Math.sin(t),
                        l = r * c - i * a, f = i * o - e * c, s = e * a - r * o, h = Math.sqrt(l * l + f * f + s * s),
                        p = e * o + r * a + i * c, g = h && -Hn(p) / h, v = Math.atan2(h, p);
                    Te += g * l, Re += g * f, De += g * s, Ne += v, ze += v * (e + (e = o)), qe += v * (r + (r = a)), Le += v * (i + (i = c)), Ge(e, r, i)
                }

                We.point = function (o, a) {
                    n = o, t = a, We.point = u, o *= Dn;
                    var c = Math.cos(a *= Dn);
                    e = c * Math.cos(o), r = c * Math.sin(o), i = Math.sin(a), Ge(e, r, i)
                }, We.lineEnd = function () {
                    u(n, t), We.lineEnd = Qe, We.point = Je
                }
            }

            function tr(n, t) {
                function e(e, r) {
                    return e = n(e, r), t(e[0], e[1])
                }

                return n.invert && t.invert && (e.invert = function (e, r) {
                    return (e = t.invert(e, r)) && n.invert(e[0], e[1])
                }), e
            }

            function er() {
                return !0
            }

            function rr(n, t, e, r, i) {
                var u = [], o = [];
                if (n.forEach((function (n) {
                    if (!((t = n.length - 1) <= 0)) {
                        var t, e = n[0], r = n[t];
                        if (Be(e, r)) {
                            i.lineStart();
                            for (var a = 0; a < t; ++a) i.point((e = n[a])[0], e[1]);
                            i.lineEnd()
                        } else {
                            var c = new ur(e, n, null, !0), l = new ur(e, null, c, !1);
                            c.o = l, u.push(c), o.push(l), c = new ur(r, n, null, !1), l = new ur(r, null, c, !0), c.o = l, u.push(c), o.push(l)
                        }
                    }
                })), o.sort(t), ir(u), ir(o), u.length) {
                    for (var a = 0, c = e, l = o.length; a < l; ++a) o[a].e = c = !c;
                    for (var f, s, h = u[0]; ;) {
                        for (var p = h, g = !0; p.v;) if ((p = p.n) === h) return;
                        f = p.z, i.lineStart();
                        do {
                            if (p.v = p.o.v = !0, p.e) {
                                if (g) for (a = 0, l = f.length; a < l; ++a) i.point((s = f[a])[0], s[1]); else r(p.x, p.n.x, 1, i);
                                p = p.n
                            } else {
                                if (g) for (a = (f = p.p.z).length - 1; a >= 0; --a) i.point((s = f[a])[0], s[1]); else r(p.x, p.p.x, -1, i);
                                p = p.p
                            }
                            f = (p = p.o).z, g = !g
                        } while (!p.v);
                        i.lineEnd()
                    }
                }
            }

            function ir(n) {
                if (t = n.length) {
                    for (var t, e, r = 0, i = n[0]; ++r < t;) i.n = e = n[r], e.p = i, i = e;
                    i.n = e = n[0], e.p = i
                }
            }

            function ur(n, t, e, r) {
                this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
            }

            function or(n, t, e, r) {
                return function (i, o) {
                    var a, c = t(o), l = i.invert(r[0], r[1]), f = {
                        point: s, lineStart: p, lineEnd: g, polygonStart: function () {
                            f.point = M, f.lineStart = x, f.lineEnd = w, a = [], v = []
                        }, polygonEnd: function () {
                            f.point = s, f.lineStart = p, f.lineEnd = g, a = u.merge(a);
                            var n = function (n, t) {
                                var e = n[0], r = n[1], i = [Math.sin(e), -Math.cos(e), 0], u = 0, o = 0;
                                Pe.reset();
                                for (var a = 0, c = t.length; a < c; ++a) {
                                    var l = t[a], f = l.length;
                                    if (f) for (var s = l[0], h = s[0], p = s[1] / 2 + qn / 4, g = Math.sin(p), v = Math.cos(p), d = 1; ;) {
                                        d === f && (d = 0);
                                        var y = (n = l[d])[0], m = n[1] / 2 + qn / 4, b = Math.sin(m), M = Math.cos(m),
                                            x = y - h, w = x >= 0 ? 1 : -1, _ = w * x, j = _ > qn, O = g * b;
                                        if (Pe.add(Math.atan2(O * w * Math.sin(_), v * M + O * Math.cos(_))), u += j ? x + w * Ln : x, j ^ h >= e ^ y >= e) {
                                            var S = Ye(He(s), He(n));
                                            Xe(S);
                                            var E = Ye(i, S);
                                            Xe(E);
                                            var N = (j ^ x >= 0 ? -1 : 1) * In(E[2]);
                                            (r > N || r === N && (S[0] || S[1])) && (o += j ^ x >= 0 ? 1 : -1)
                                        }
                                        if (!d++) break;
                                        h = y, g = b, v = M, s = n
                                    }
                                }
                                return (u < -Cn || u < Cn && Pe < -Cn) ^ 1 & o
                            }(l, v);
                            a.length ? (b || (o.polygonStart(), b = !0), rr(a, lr, n, e, o)) : n && (b || (o.polygonStart(), b = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), b && (o.polygonEnd(), b = !1), a = v = null
                        }, sphere: function () {
                            o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                        }
                    };

                    function s(t, e) {
                        var r = i(t, e);
                        n(t = r[0], e = r[1]) && o.point(t, e)
                    }

                    function h(n, t) {
                        var e = i(n, t);
                        c.point(e[0], e[1])
                    }

                    function p() {
                        f.point = h, c.lineStart()
                    }

                    function g() {
                        f.point = s, c.lineEnd()
                    }

                    var v, d, y = cr(), m = t(y), b = !1;

                    function M(n, t) {
                        d.push([n, t]);
                        var e = i(n, t);
                        m.point(e[0], e[1])
                    }

                    function x() {
                        m.lineStart(), d = []
                    }

                    function w() {
                        M(d[0][0], d[0][1]), m.lineEnd();
                        var n, t = m.clean(), e = y.buffer(), r = e.length;
                        if (d.pop(), v.push(d), d = null, r) if (1 & t) {
                            var i, u = -1;
                            if ((r = (n = e[0]).length - 1) > 0) {
                                for (b || (o.polygonStart(), b = !0), o.lineStart(); ++u < r;) o.point((i = n[u])[0], i[1]);
                                o.lineEnd()
                            }
                        } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), a.push(e.filter(ar))
                    }

                    return f
                }
            }

            function ar(n) {
                return n.length > 1
            }

            function cr() {
                var n, t = [];
                return {
                    lineStart: function () {
                        t.push(n = [])
                    }, point: function (t, e) {
                        n.push([t, e])
                    }, lineEnd: F, buffer: function () {
                        var e = t;
                        return t = [], n = null, e
                    }, rejoin: function () {
                        t.length > 1 && t.push(t.pop().concat(t.shift()))
                    }
                }
            }

            function lr(n, t) {
                return ((n = n.x)[0] < 0 ? n[1] - Rn - Cn : Rn - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Rn - Cn : Rn - t[1])
            }

            var fr = or(er, (function (n) {
                var t, e = NaN, r = NaN, i = NaN;
                return {
                    lineStart: function () {
                        n.lineStart(), t = 1
                    }, point: function (u, o) {
                        var a = u > 0 ? qn : -qn, c = w(u - e);
                        w(c - qn) < Cn ? (n.point(e, r = (r + o) / 2 > 0 ? Rn : -Rn), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(u, r), t = 0) : i !== a && c >= qn && (w(e - i) < Cn && (e -= i * Cn), w(u - a) < Cn && (u -= a * Cn), r = function (n, t, e, r) {
                            var i, u, o = Math.sin(n - e);
                            return w(o) > Cn ? Math.atan((Math.sin(t) * (u = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) / (i * u * o)) : (t + r) / 2
                        }(e, r, u, o), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = u, r = o), i = a
                    }, lineEnd: function () {
                        n.lineEnd(), e = r = NaN
                    }, clean: function () {
                        return 2 - t
                    }
                }
            }), (function (n, t, e, r) {
                var i;
                if (null == n) i = e * Rn, r.point(-qn, i), r.point(0, i), r.point(qn, i), r.point(qn, 0), r.point(qn, -i), r.point(0, -i), r.point(-qn, -i), r.point(-qn, 0), r.point(-qn, i); else if (w(n[0] - t[0]) > Cn) {
                    var u = n[0] < t[0] ? qn : -qn;
                    i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i)
                } else r.point(t[0], t[1])
            }), [-qn, -qn / 2]);

            function sr(n) {
                var t = Math.cos(n), e = t > 0, r = w(t) > Cn;
                return or(i, (function (n) {
                    var t, a, c, l, f;
                    return {
                        lineStart: function () {
                            l = c = !1, f = 1
                        }, point: function (s, h) {
                            var p, g = [s, h], v = i(s, h),
                                d = e ? v ? 0 : o(s, h) : v ? o(s + (s < 0 ? qn : -qn), h) : 0;
                            if (!t && (l = c = v) && n.lineStart(), v !== c && (p = u(t, g), (Be(t, p) || Be(g, p)) && (g[0] += Cn, g[1] += Cn, v = i(g[0], g[1]))), v !== c) f = 0, v ? (n.lineStart(), p = u(g, t), n.point(p[0], p[1])) : (p = u(t, g), n.point(p[0], p[1]), n.lineEnd()), t = p; else if (r && t && e ^ v) {
                                var y;
                                d & a || !(y = u(g, t, !0)) || (f = 0, e ? (n.lineStart(), n.point(y[0][0], y[0][1]), n.point(y[1][0], y[1][1]), n.lineEnd()) : (n.point(y[1][0], y[1][1]), n.lineEnd(), n.lineStart(), n.point(y[0][0], y[0][1])))
                            }
                            !v || t && Be(t, g) || n.point(g[0], g[1]), t = g, c = v, a = d
                        }, lineEnd: function () {
                            c && n.lineEnd(), t = null
                        }, clean: function () {
                            return f | (l && c) << 1
                        }
                    }
                }), Br(n, 6 * Dn), e ? [0, -n] : [-qn, n - qn]);

                function i(n, e) {
                    return Math.cos(n) * Math.cos(e) > t
                }

                function u(n, e, r) {
                    var i = [1, 0, 0], u = Ye(He(n), He(e)), o = Ie(u, u), a = u[0], c = o - a * a;
                    if (!c) return !r && n;
                    var l = t * o / c, f = -t * a / c, s = Ye(i, u), h = Ve(i, l);
                    Ze(h, Ve(u, f));
                    var p = s, g = Ie(h, p), v = Ie(p, p), d = g * g - v * (Ie(h, h) - 1);
                    if (!(d < 0)) {
                        var y = Math.sqrt(d), m = Ve(p, (-g - y) / v);
                        if (Ze(m, h), m = $e(m), !r) return m;
                        var b, M = n[0], x = e[0], _ = n[1], j = e[1];
                        x < M && (b = M, M = x, x = b);
                        var O = x - M, S = w(O - qn) < Cn;
                        if (!S && j < _ && (b = _, _ = j, j = b), S || O < Cn ? S ? _ + j > 0 ^ m[1] < (w(m[0] - M) < Cn ? _ : j) : _ <= m[1] && m[1] <= j : O > qn ^ (M <= m[0] && m[0] <= x)) {
                            var E = Ve(p, (-g + y) / v);
                            return Ze(E, h), [m, $e(E)]
                        }
                    }
                }

                function o(t, r) {
                    var i = e ? n : qn - n, u = 0;
                    return t < -i ? u |= 1 : t > i && (u |= 2), r < -i ? u |= 4 : r > i && (u |= 8), u
                }
            }

            function hr(n, t, e, r) {
                return function (i) {
                    var u, o = i.a, a = i.b, c = o.x, l = o.y, f = 0, s = 1, h = a.x - c, p = a.y - l;
                    if (u = n - c, h || !(u > 0)) {
                        if (u /= h, h < 0) {
                            if (u < f) return;
                            u < s && (s = u)
                        } else if (h > 0) {
                            if (u > s) return;
                            u > f && (f = u)
                        }
                        if (u = e - c, h || !(u < 0)) {
                            if (u /= h, h < 0) {
                                if (u > s) return;
                                u > f && (f = u)
                            } else if (h > 0) {
                                if (u < f) return;
                                u < s && (s = u)
                            }
                            if (u = t - l, p || !(u > 0)) {
                                if (u /= p, p < 0) {
                                    if (u < f) return;
                                    u < s && (s = u)
                                } else if (p > 0) {
                                    if (u > s) return;
                                    u > f && (f = u)
                                }
                                if (u = r - l, p || !(u < 0)) {
                                    if (u /= p, p < 0) {
                                        if (u > s) return;
                                        u > f && (f = u)
                                    } else if (p > 0) {
                                        if (u < f) return;
                                        u < s && (s = u)
                                    }
                                    return f > 0 && (i.a = {x: c + f * h, y: l + f * p}), s < 1 && (i.b = {
                                        x: c + s * h,
                                        y: l + s * p
                                    }), i
                                }
                            }
                        }
                    }
                }
            }

            var pr = 1e9;

            function gr(n, t, e, r) {
                return function (c) {
                    var l, f, s, h, p, g, v, d, y, m, b, M = c, x = cr(), w = hr(n, t, e, r), _ = {
                        point: S, lineStart: function () {
                            _.point = E, f && f.push(s = []);
                            m = !0, y = !1, v = d = NaN
                        }, lineEnd: function () {
                            l && (E(h, p), g && y && x.rejoin(), l.push(x.buffer()));
                            _.point = S, y && c.lineEnd()
                        }, polygonStart: function () {
                            c = x, l = [], f = [], b = !0
                        }, polygonEnd: function () {
                            c = M, l = u.merge(l);
                            var t = function (n) {
                                for (var t = 0, e = f.length, r = n[1], i = 0; i < e; ++i) for (var u, o = 1, a = f[i], c = a.length, l = a[0]; o < c; ++o) u = a[o], l[1] <= r ? u[1] > r && Fn(l, u, n) > 0 && ++t : u[1] <= r && Fn(l, u, n) < 0 && --t, l = u;
                                return 0 !== t
                            }([n, r]), e = b && t, i = l.length;
                            (e || i) && (c.polygonStart(), e && (c.lineStart(), j(null, null, 1, c), c.lineEnd()), i && rr(l, o, t, j, c), c.polygonEnd()), l = f = s = null
                        }
                    };

                    function j(u, o, c, l) {
                        var f = 0, s = 0;
                        if (null == u || (f = i(u, c)) !== (s = i(o, c)) || a(u, o) < 0 ^ c > 0) do {
                            l.point(0 === f || 3 === f ? n : e, f > 1 ? r : t)
                        } while ((f = (f + c + 4) % 4) !== s); else l.point(o[0], o[1])
                    }

                    function O(i, u) {
                        return n <= i && i <= e && t <= u && u <= r
                    }

                    function S(n, t) {
                        O(n, t) && c.point(n, t)
                    }

                    function E(n, t) {
                        var e = O(n = Math.max(-pr, Math.min(pr, n)), t = Math.max(-pr, Math.min(pr, t)));
                        if (f && s.push([n, t]), m) h = n, p = t, g = e, m = !1, e && (c.lineStart(), c.point(n, t)); else if (e && y) c.point(n, t); else {
                            var r = {a: {x: v, y: d}, b: {x: n, y: t}};
                            w(r) ? (y || (c.lineStart(), c.point(r.a.x, r.a.y)), c.point(r.b.x, r.b.y), e || c.lineEnd(), b = !1) : e && (c.lineStart(), c.point(n, t), b = !1)
                        }
                        v = n, d = t, y = e
                    }

                    return _
                };

                function i(r, i) {
                    return w(r[0] - n) < Cn ? i > 0 ? 0 : 3 : w(r[0] - e) < Cn ? i > 0 ? 2 : 1 : w(r[1] - t) < Cn ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
                }

                function o(n, t) {
                    return a(n.x, t.x)
                }

                function a(n, t) {
                    var e = i(n, 1), r = i(t, 1);
                    return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
                }
            }

            function vr(n) {
                var t = 0, e = qn / 3, r = Fr(n), i = r(t, e);
                return i.parallels = function (n) {
                    return arguments.length ? r(t = n[0] * qn / 180, e = n[1] * qn / 180) : [t / qn * 180, e / qn * 180]
                }, i
            }

            function dr(n, t) {
                var e = Math.sin(n), r = (e + Math.sin(t)) / 2, i = 1 + e * (2 * r - e), u = Math.sqrt(i) / r;

                function o(n, t) {
                    var e = Math.sqrt(i - 2 * r * Math.sin(t)) / r;
                    return [e * Math.sin(n *= r), u - e * Math.cos(n)]
                }

                return o.invert = function (n, t) {
                    var e = u - t;
                    return [Math.atan2(n, e) / r, In((i - (n * n + e * e) * r * r) / (2 * r))]
                }, o
            }

            u.geo.clipExtent = function () {
                var n, t, e, r, i, u, o = {
                    stream: function (n) {
                        return i && (i.valid = !1), (i = u(n)).valid = !0, i
                    }, extent: function (a) {
                        return arguments.length ? (u = gr(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), i && (i.valid = !1, i = null), o) : [[n, t], [e, r]]
                    }
                };
                return o.extent([[0, 0], [960, 500]])
            }, (u.geo.conicEqualArea = function () {
                return vr(dr)
            }).raw = dr, u.geo.albers = function () {
                return u.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            }, u.geo.albersUsa = function () {
                var n, t, e, r, i = u.geo.albers(),
                    o = u.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    a = u.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c = {
                        point: function (t, e) {
                            n = [t, e]
                        }
                    };

                function l(i) {
                    var u = i[0], o = i[1];
                    return n = null, t(u, o), n || (e(u, o), n) || r(u, o), n
                }

                return l.invert = function (n) {
                    var t = i.scale(), e = i.translate(), r = (n[0] - e[0]) / t, u = (n[1] - e[1]) / t;
                    return (u >= .12 && u < .234 && r >= -.425 && r < -.214 ? o : u >= .166 && u < .234 && r >= -.214 && r < -.115 ? a : i).invert(n)
                }, l.stream = function (n) {
                    var t = i.stream(n), e = o.stream(n), r = a.stream(n);
                    return {
                        point: function (n, i) {
                            t.point(n, i), e.point(n, i), r.point(n, i)
                        }, sphere: function () {
                            t.sphere(), e.sphere(), r.sphere()
                        }, lineStart: function () {
                            t.lineStart(), e.lineStart(), r.lineStart()
                        }, lineEnd: function () {
                            t.lineEnd(), e.lineEnd(), r.lineEnd()
                        }, polygonStart: function () {
                            t.polygonStart(), e.polygonStart(), r.polygonStart()
                        }, polygonEnd: function () {
                            t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                        }
                    }
                }, l.precision = function (n) {
                    return arguments.length ? (i.precision(n), o.precision(n), a.precision(n), l) : i.precision()
                }, l.scale = function (n) {
                    return arguments.length ? (i.scale(n), o.scale(.35 * n), a.scale(n), l.translate(i.translate())) : i.scale()
                }, l.translate = function (n) {
                    if (!arguments.length) return i.translate();
                    var u = i.scale(), f = +n[0], s = +n[1];
                    return t = i.translate(n).clipExtent([[f - .455 * u, s - .238 * u], [f + .455 * u, s + .238 * u]]).stream(c).point, e = o.translate([f - .307 * u, s + .201 * u]).clipExtent([[f - .425 * u + Cn, s + .12 * u + Cn], [f - .214 * u - Cn, s + .234 * u - Cn]]).stream(c).point, r = a.translate([f - .205 * u, s + .212 * u]).clipExtent([[f - .214 * u + Cn, s + .166 * u + Cn], [f - .115 * u - Cn, s + .234 * u - Cn]]).stream(c).point, l
                }, l.scale(1070)
            };
            var yr, mr, br, Mr, xr, wr, _r = {
                point: F, lineStart: F, lineEnd: F, polygonStart: function () {
                    mr = 0, _r.lineStart = jr
                }, polygonEnd: function () {
                    _r.lineStart = _r.lineEnd = _r.point = F, yr += w(mr / 2)
                }
            };

            function jr() {
                var n, t, e, r;

                function i(n, t) {
                    mr += r * n - e * t, e = n, r = t
                }

                _r.point = function (u, o) {
                    _r.point = i, n = e = u, t = r = o
                }, _r.lineEnd = function () {
                    i(n, t)
                }
            }

            var Or = {
                point: function (n, t) {
                    n < br && (br = n);
                    n > xr && (xr = n);
                    t < Mr && (Mr = t);
                    t > wr && (wr = t)
                }, lineStart: F, lineEnd: F, polygonStart: F, polygonEnd: F
            };

            function Sr() {
                var n = Er(4.5), t = [], e = {
                    point: r, lineStart: function () {
                        e.point = i
                    }, lineEnd: o, polygonStart: function () {
                        e.lineEnd = a
                    }, polygonEnd: function () {
                        e.lineEnd = o, e.point = r
                    }, pointRadius: function (t) {
                        return n = Er(t), e
                    }, result: function () {
                        if (t.length) {
                            var n = t.join("");
                            return t = [], n
                        }
                    }
                };

                function r(e, r) {
                    t.push("M", e, ",", r, n)
                }

                function i(n, r) {
                    t.push("M", n, ",", r), e.point = u
                }

                function u(n, e) {
                    t.push("L", n, ",", e)
                }

                function o() {
                    e.point = r
                }

                function a() {
                    t.push("Z")
                }

                return e
            }

            function Er(n) {
                return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
            }

            var Nr, kr = {
                point: Ar, lineStart: Cr, lineEnd: zr, polygonStart: function () {
                    kr.lineStart = qr
                }, polygonEnd: function () {
                    kr.point = Ar, kr.lineStart = Cr, kr.lineEnd = zr
                }
            };

            function Ar(n, t) {
                ke += n, Ae += t, ++Ce
            }

            function Cr() {
                var n, t;

                function e(e, r) {
                    var i = e - n, u = r - t, o = Math.sqrt(i * i + u * u);
                    ze += o * (n + e) / 2, qe += o * (t + r) / 2, Le += o, Ar(n = e, t = r)
                }

                kr.point = function (r, i) {
                    kr.point = e, Ar(n = r, t = i)
                }
            }

            function zr() {
                kr.point = Ar
            }

            function qr() {
                var n, t, e, r;

                function i(n, t) {
                    var i = n - e, u = t - r, o = Math.sqrt(i * i + u * u);
                    ze += o * (e + n) / 2, qe += o * (r + t) / 2, Le += o, Te += (o = r * n - e * t) * (e + n), Re += o * (r + t), De += 3 * o, Ar(e = n, r = t)
                }

                kr.point = function (u, o) {
                    kr.point = i, Ar(n = e = u, t = r = o)
                }, kr.lineEnd = function () {
                    i(n, t)
                }
            }

            function Lr(n) {
                var t = 4.5, e = {
                    point: r, lineStart: function () {
                        e.point = i
                    }, lineEnd: o, polygonStart: function () {
                        e.lineEnd = a
                    }, polygonEnd: function () {
                        e.lineEnd = o, e.point = r
                    }, pointRadius: function (n) {
                        return t = n, e
                    }, result: F
                };

                function r(e, r) {
                    n.moveTo(e + t, r), n.arc(e, r, t, 0, Ln)
                }

                function i(t, r) {
                    n.moveTo(t, r), e.point = u
                }

                function u(t, e) {
                    n.lineTo(t, e)
                }

                function o() {
                    e.point = r
                }

                function a() {
                    n.closePath()
                }

                return e
            }

            function Tr(n) {
                var t = .5, e = Math.cos(30 * Dn), r = 16;

                function i(n) {
                    return (r ? o : u)(n)
                }

                function u(t) {
                    return Pr(t, (function (e, r) {
                        e = n(e, r), t.point(e[0], e[1])
                    }))
                }

                function o(t) {
                    var e, i, u, o, c, l, f, s, h, p, g, v, d = {
                        point: y, lineStart: m, lineEnd: M, polygonStart: function () {
                            t.polygonStart(), d.lineStart = x
                        }, polygonEnd: function () {
                            t.polygonEnd(), d.lineStart = m
                        }
                    };

                    function y(e, r) {
                        e = n(e, r), t.point(e[0], e[1])
                    }

                    function m() {
                        s = NaN, d.point = b, t.lineStart()
                    }

                    function b(e, i) {
                        var u = He([e, i]), o = n(e, i);
                        a(s, h, f, p, g, v, s = o[0], h = o[1], f = e, p = u[0], g = u[1], v = u[2], r, t), t.point(s, h)
                    }

                    function M() {
                        d.point = y, t.lineEnd()
                    }

                    function x() {
                        m(), d.point = w, d.lineEnd = _
                    }

                    function w(n, t) {
                        b(e = n, t), i = s, u = h, o = p, c = g, l = v, d.point = b
                    }

                    function _() {
                        a(s, h, f, p, g, v, i, u, e, o, c, l, r, t), d.lineEnd = M, M()
                    }

                    return d
                }

                function a(r, i, u, o, c, l, f, s, h, p, g, v, d, y) {
                    var m = f - r, b = s - i, M = m * m + b * b;
                    if (M > 4 * t && d--) {
                        var x = o + p, _ = c + g, j = l + v, O = Math.sqrt(x * x + _ * _ + j * j),
                            S = Math.asin(j /= O),
                            E = w(w(j) - 1) < Cn || w(u - h) < Cn ? (u + h) / 2 : Math.atan2(_, x), N = n(E, S),
                            k = N[0], A = N[1], C = k - r, z = A - i, q = b * C - m * z;
                        (q * q / M > t || w((m * C + b * z) / M - .5) > .3 || o * p + c * g + l * v < e) && (a(r, i, u, o, c, l, k, A, E, x /= O, _ /= O, j, d, y), y.point(k, A), a(k, A, E, x, _, j, f, s, h, p, g, v, d, y))
                    }
                }

                return i.precision = function (n) {
                    return arguments.length ? (r = (t = n * n) > 0 && 16, i) : Math.sqrt(t)
                }, i
            }

            function Rr(n) {
                var t = Tr((function (t, e) {
                    return n([t * Pn, e * Pn])
                }));
                return function (n) {
                    return Hr(t(n))
                }
            }

            function Dr(n) {
                this.stream = n
            }

            function Pr(n, t) {
                return {
                    point: t, sphere: function () {
                        n.sphere()
                    }, lineStart: function () {
                        n.lineStart()
                    }, lineEnd: function () {
                        n.lineEnd()
                    }, polygonStart: function () {
                        n.polygonStart()
                    }, polygonEnd: function () {
                        n.polygonEnd()
                    }
                }
            }

            function Ur(n) {
                return Fr((function () {
                    return n
                }))()
            }

            function Fr(n) {
                var t, e, r, i, o, a, c = Tr((function (n, e) {
                    return [(n = t(n, e))[0] * l + i, o - n[1] * l]
                })), l = 150, f = 480, s = 250, h = 0, p = 0, g = 0, v = 0, d = 0, y = fr, m = R, b = null, M = null;

                function x(n) {
                    return [(n = r(n[0] * Dn, n[1] * Dn))[0] * l + i, o - n[1] * l]
                }

                function w(n) {
                    return (n = r.invert((n[0] - i) / l, (o - n[1]) / l)) && [n[0] * Pn, n[1] * Pn]
                }

                function _() {
                    r = tr(e = Zr(g, v, d), t);
                    var n = t(h, p);
                    return i = f - n[0] * l, o = s + n[1] * l, j()
                }

                function j() {
                    return a && (a.valid = !1, a = null), x
                }

                return x.stream = function (n) {
                    return a && (a.valid = !1), (a = Hr(y(e, c(m(n))))).valid = !0, a
                }, x.clipAngle = function (n) {
                    return arguments.length ? (y = null == n ? (b = n, fr) : sr((b = +n) * Dn), j()) : b
                }, x.clipExtent = function (n) {
                    return arguments.length ? (M = n, m = n ? gr(n[0][0], n[0][1], n[1][0], n[1][1]) : R, j()) : M
                }, x.scale = function (n) {
                    return arguments.length ? (l = +n, _()) : l
                }, x.translate = function (n) {
                    return arguments.length ? (f = +n[0], s = +n[1], _()) : [f, s]
                }, x.center = function (n) {
                    return arguments.length ? (h = n[0] % 360 * Dn, p = n[1] % 360 * Dn, _()) : [h * Pn, p * Pn]
                }, x.rotate = function (n) {
                    return arguments.length ? (g = n[0] % 360 * Dn, v = n[1] % 360 * Dn, d = n.length > 2 ? n[2] % 360 * Dn : 0, _()) : [g * Pn, v * Pn, d * Pn]
                }, u.rebind(x, c, "precision"), function () {
                    return t = n.apply(this, arguments), x.invert = t.invert && w, _()
                }
            }

            function Hr(n) {
                return Pr(n, (function (t, e) {
                    n.point(t * Dn, e * Dn)
                }))
            }

            function Ir(n, t) {
                return [n, t]
            }

            function Yr(n, t) {
                return [n > qn ? n - Ln : n < -qn ? n + Ln : n, t]
            }

            function Zr(n, t, e) {
                return n ? t || e ? tr(Xr(n), $r(t, e)) : Xr(n) : t || e ? $r(t, e) : Yr
            }

            function Vr(n) {
                return function (t, e) {
                    return [(t += n) > qn ? t - Ln : t < -qn ? t + Ln : t, e]
                }
            }

            function Xr(n) {
                var t = Vr(n);
                return t.invert = Vr(-n), t
            }

            function $r(n, t) {
                var e = Math.cos(n), r = Math.sin(n), i = Math.cos(t), u = Math.sin(t);

                function o(n, t) {
                    var o = Math.cos(t), a = Math.cos(n) * o, c = Math.sin(n) * o, l = Math.sin(t), f = l * e + a * r;
                    return [Math.atan2(c * i - f * u, a * e - l * r), In(f * i + c * u)]
                }

                return o.invert = function (n, t) {
                    var o = Math.cos(t), a = Math.cos(n) * o, c = Math.sin(n) * o, l = Math.sin(t), f = l * i - c * u;
                    return [Math.atan2(c * i + l * u, a * e + f * r), In(f * e - a * r)]
                }, o
            }

            function Br(n, t) {
                var e = Math.cos(n), r = Math.sin(n);
                return function (i, u, o, a) {
                    var c = o * t;
                    null != i ? (i = Wr(e, i), u = Wr(e, u), (o > 0 ? i < u : i > u) && (i += o * Ln)) : (i = n + o * Ln, u = n - .5 * c);
                    for (var l, f = i; o > 0 ? f > u : f < u; f -= c) a.point((l = $e([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], l[1])
                }
            }

            function Wr(n, t) {
                var e = He(t);
                e[0] -= n, Xe(e);
                var r = Hn(-e[1]);
                return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Cn) % (2 * Math.PI)
            }

            function Jr(n, t, e) {
                var r = u.range(n, t - Cn, e).concat(t);
                return function (n) {
                    return r.map((function (t) {
                        return [n, t]
                    }))
                }
            }

            function Gr(n, t, e) {
                var r = u.range(n, t - Cn, e).concat(t);
                return function (n) {
                    return r.map((function (t) {
                        return [t, n]
                    }))
                }
            }

            function Kr(n) {
                return n.source
            }

            function Qr(n) {
                return n.target
            }

            u.geo.path = function () {
                var n, t, e, r, i, o = 4.5;

                function a(n) {
                    return n && ("function" == typeof o && r.pointRadius(+o.apply(this, arguments)), i && i.valid || (i = e(r)), u.geo.stream(n, i)), r.result()
                }

                function c() {
                    return i = null, a
                }

                return a.area = function (n) {
                    return yr = 0, u.geo.stream(n, e(_r)), yr
                }, a.centroid = function (n) {
                    return ke = Ae = Ce = ze = qe = Le = Te = Re = De = 0, u.geo.stream(n, e(kr)), De ? [Te / De, Re / De] : Le ? [ze / Le, qe / Le] : Ce ? [ke / Ce, Ae / Ce] : [NaN, NaN]
                }, a.bounds = function (n) {
                    return xr = wr = -(br = Mr = 1 / 0), u.geo.stream(n, e(Or)), [[br, Mr], [xr, wr]]
                }, a.projection = function (t) {
                    return arguments.length ? (e = (n = t) ? t.stream || Rr(t) : R, c()) : n
                }, a.context = function (n) {
                    return arguments.length ? (r = null == (t = n) ? new Sr : new Lr(n), "function" != typeof o && r.pointRadius(o), c()) : t
                }, a.pointRadius = function (n) {
                    return arguments.length ? (o = "function" == typeof n ? n : (r.pointRadius(+n), +n), a) : o
                }, a.projection(u.geo.albersUsa()).context(null)
            }, u.geo.transform = function (n) {
                return {
                    stream: function (t) {
                        var e = new Dr(t);
                        for (var r in n) e[r] = n[r];
                        return e
                    }
                }
            }, Dr.prototype = {
                point: function (n, t) {
                    this.stream.point(n, t)
                }, sphere: function () {
                    this.stream.sphere()
                }, lineStart: function () {
                    this.stream.lineStart()
                }, lineEnd: function () {
                    this.stream.lineEnd()
                }, polygonStart: function () {
                    this.stream.polygonStart()
                }, polygonEnd: function () {
                    this.stream.polygonEnd()
                }
            }, u.geo.projection = Ur, u.geo.projectionMutator = Fr, (u.geo.equirectangular = function () {
                return Ur(Ir)
            }).raw = Ir.invert = Ir, u.geo.rotation = function (n) {
                function t(t) {
                    return (t = n(t[0] * Dn, t[1] * Dn))[0] *= Pn, t[1] *= Pn, t
                }

                return n = Zr(n[0] % 360 * Dn, n[1] * Dn, n.length > 2 ? n[2] * Dn : 0), t.invert = function (t) {
                    return (t = n.invert(t[0] * Dn, t[1] * Dn))[0] *= Pn, t[1] *= Pn, t
                }, t
            }, Yr.invert = Ir, u.geo.circle = function () {
                var n, t, e = [0, 0], r = 6;

                function i() {
                    var n = "function" == typeof e ? e.apply(this, arguments) : e,
                        r = Zr(-n[0] * Dn, -n[1] * Dn, 0).invert, i = [];
                    return t(null, null, 1, {
                        point: function (n, t) {
                            i.push(n = r(n, t)), n[0] *= Pn, n[1] *= Pn
                        }
                    }), {type: "Polygon", coordinates: [i]}
                }

                return i.origin = function (n) {
                    return arguments.length ? (e = n, i) : e
                }, i.angle = function (e) {
                    return arguments.length ? (t = Br((n = +e) * Dn, r * Dn), i) : n
                }, i.precision = function (e) {
                    return arguments.length ? (t = Br(n * Dn, (r = +e) * Dn), i) : r
                }, i.angle(90)
            }, u.geo.distance = function (n, t) {
                var e, r = (t[0] - n[0]) * Dn, i = n[1] * Dn, u = t[1] * Dn, o = Math.sin(r), a = Math.cos(r),
                    c = Math.sin(i), l = Math.cos(i), f = Math.sin(u), s = Math.cos(u);
                return Math.atan2(Math.sqrt((e = s * o) * e + (e = l * f - c * s * a) * e), c * f + l * s * a)
            }, u.geo.graticule = function () {
                var n, t, e, r, i, o, a, c, l, f, s, h, p = 10, g = p, v = 90, d = 360, y = 2.5;

                function m() {
                    return {type: "MultiLineString", coordinates: b()}
                }

                function b() {
                    return u.range(Math.ceil(r / v) * v, e, v).map(s).concat(u.range(Math.ceil(c / d) * d, a, d).map(h)).concat(u.range(Math.ceil(t / p) * p, n, p).filter((function (n) {
                        return w(n % v) > Cn
                    })).map(l)).concat(u.range(Math.ceil(o / g) * g, i, g).filter((function (n) {
                        return w(n % d) > Cn
                    })).map(f))
                }

                return m.lines = function () {
                    return b().map((function (n) {
                        return {type: "LineString", coordinates: n}
                    }))
                }, m.outline = function () {
                    return {
                        type: "Polygon",
                        coordinates: [s(r).concat(h(a).slice(1), s(e).reverse().slice(1), h(c).reverse().slice(1))]
                    }
                }, m.extent = function (n) {
                    return arguments.length ? m.majorExtent(n).minorExtent(n) : m.minorExtent()
                }, m.majorExtent = function (n) {
                    return arguments.length ? (r = +n[0][0], e = +n[1][0], c = +n[0][1], a = +n[1][1], r > e && (n = r, r = e, e = n), c > a && (n = c, c = a, a = n), m.precision(y)) : [[r, c], [e, a]]
                }, m.minorExtent = function (e) {
                    return arguments.length ? (t = +e[0][0], n = +e[1][0], o = +e[0][1], i = +e[1][1], t > n && (e = t, t = n, n = e), o > i && (e = o, o = i, i = e), m.precision(y)) : [[t, o], [n, i]]
                }, m.step = function (n) {
                    return arguments.length ? m.majorStep(n).minorStep(n) : m.minorStep()
                }, m.majorStep = function (n) {
                    return arguments.length ? (v = +n[0], d = +n[1], m) : [v, d]
                }, m.minorStep = function (n) {
                    return arguments.length ? (p = +n[0], g = +n[1], m) : [p, g]
                }, m.precision = function (u) {
                    return arguments.length ? (y = +u, l = Jr(o, i, 90), f = Gr(t, n, y), s = Jr(c, a, 90), h = Gr(r, e, y), m) : y
                }, m.majorExtent([[-180, -90 + Cn], [180, 90 - Cn]]).minorExtent([[-180, -80 - Cn], [180, 80 + Cn]])
            }, u.geo.greatArc = function () {
                var n, t, e = Kr, r = Qr;

                function i() {
                    return {
                        type: "LineString",
                        coordinates: [n || e.apply(this, arguments), t || r.apply(this, arguments)]
                    }
                }

                return i.distance = function () {
                    return u.geo.distance(n || e.apply(this, arguments), t || r.apply(this, arguments))
                }, i.source = function (t) {
                    return arguments.length ? (e = t, n = "function" == typeof t ? null : t, i) : e
                }, i.target = function (n) {
                    return arguments.length ? (r = n, t = "function" == typeof n ? null : n, i) : r
                }, i.precision = function () {
                    return arguments.length ? i : 0
                }, i
            }, u.geo.interpolate = function (n, t) {
                return e = n[0] * Dn, r = n[1] * Dn, i = t[0] * Dn, u = t[1] * Dn, o = Math.cos(r), a = Math.sin(r), c = Math.cos(u), l = Math.sin(u), f = o * Math.cos(e), s = o * Math.sin(e), h = c * Math.cos(i), p = c * Math.sin(i), g = 2 * Math.asin(Math.sqrt(Zn(u - r) + o * c * Zn(i - e))), v = 1 / Math.sin(g), (d = g ? function (n) {
                    var t = Math.sin(n *= g) * v, e = Math.sin(g - n) * v, r = e * f + t * h, i = e * s + t * p,
                        u = e * a + t * l;
                    return [Math.atan2(i, r) * Pn, Math.atan2(u, Math.sqrt(r * r + i * i)) * Pn]
                } : function () {
                    return [e * Pn, r * Pn]
                }).distance = g, d;
                var e, r, i, u, o, a, c, l, f, s, h, p, g, v, d
            }, u.geo.length = function (n) {
                return Nr = 0, u.geo.stream(n, ni), Nr
            };
            var ni = {
                sphere: F, point: F, lineStart: function () {
                    var n, t, e;

                    function r(r, i) {
                        var u = Math.sin(i *= Dn), o = Math.cos(i), a = w((r *= Dn) - n), c = Math.cos(a);
                        Nr += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = e * u - t * o * c) * a), t * u + e * o * c), n = r, t = u, e = o
                    }

                    ni.point = function (i, u) {
                        n = i * Dn, t = Math.sin(u *= Dn), e = Math.cos(u), ni.point = r
                    }, ni.lineEnd = function () {
                        ni.point = ni.lineEnd = F
                    }
                }, lineEnd: F, polygonStart: F, polygonEnd: F
            };

            function ti(n, t) {
                function e(t, e) {
                    var r = Math.cos(t), i = Math.cos(e), u = n(r * i);
                    return [u * i * Math.sin(t), u * Math.sin(e)]
                }

                return e.invert = function (n, e) {
                    var r = Math.sqrt(n * n + e * e), i = t(r), u = Math.sin(i), o = Math.cos(i);
                    return [Math.atan2(n * u, r * o), Math.asin(r && e * u / r)]
                }, e
            }

            var ei = ti((function (n) {
                return Math.sqrt(2 / (1 + n))
            }), (function (n) {
                return 2 * Math.asin(n / 2)
            }));
            (u.geo.azimuthalEqualArea = function () {
                return Ur(ei)
            }).raw = ei;
            var ri = ti((function (n) {
                var t = Math.acos(n);
                return t && t / Math.sin(t)
            }), R);

            function ii(n, t) {
                var e = Math.cos(n), r = function (n) {
                        return Math.tan(qn / 4 + n / 2)
                    }, i = n === t ? Math.sin(n) : Math.log(e / Math.cos(t)) / Math.log(r(t) / r(n)),
                    u = e * Math.pow(r(n), i) / i;
                if (!i) return ai;

                function o(n, t) {
                    u > 0 ? t < -Rn + Cn && (t = -Rn + Cn) : t > Rn - Cn && (t = Rn - Cn);
                    var e = u / Math.pow(r(t), i);
                    return [e * Math.sin(i * n), u - e * Math.cos(i * n)]
                }

                return o.invert = function (n, t) {
                    var e = u - t, r = Un(i) * Math.sqrt(n * n + e * e);
                    return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(u / r, 1 / i)) - Rn]
                }, o
            }

            function ui(n, t) {
                var e = Math.cos(n), r = n === t ? Math.sin(n) : (e - Math.cos(t)) / (t - n), i = e / r + n;
                if (w(r) < Cn) return Ir;

                function u(n, t) {
                    var e = i - t;
                    return [e * Math.sin(r * n), i - e * Math.cos(r * n)]
                }

                return u.invert = function (n, t) {
                    var e = i - t;
                    return [Math.atan2(n, e) / r, i - Un(r) * Math.sqrt(n * n + e * e)]
                }, u
            }

            (u.geo.azimuthalEquidistant = function () {
                return Ur(ri)
            }).raw = ri, (u.geo.conicConformal = function () {
                return vr(ii)
            }).raw = ii, (u.geo.conicEquidistant = function () {
                return vr(ui)
            }).raw = ui;
            var oi = ti((function (n) {
                return 1 / n
            }), Math.atan);

            function ai(n, t) {
                return [n, Math.log(Math.tan(qn / 4 + t / 2))]
            }

            function ci(n) {
                var t, e = Ur(n), r = e.scale, i = e.translate, u = e.clipExtent;
                return e.scale = function () {
                    var n = r.apply(e, arguments);
                    return n === e ? t ? e.clipExtent(null) : e : n
                }, e.translate = function () {
                    var n = i.apply(e, arguments);
                    return n === e ? t ? e.clipExtent(null) : e : n
                }, e.clipExtent = function (n) {
                    var o = u.apply(e, arguments);
                    if (o === e) {
                        if (t = null == n) {
                            var a = qn * r(), c = i();
                            u([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]])
                        }
                    } else t && (o = null);
                    return o
                }, e.clipExtent(null)
            }

            (u.geo.gnomonic = function () {
                return Ur(oi)
            }).raw = oi, ai.invert = function (n, t) {
                return [n, 2 * Math.atan(Math.exp(t)) - Rn]
            }, (u.geo.mercator = function () {
                return ci(ai)
            }).raw = ai;
            var li = ti((function () {
                return 1
            }), Math.asin);
            (u.geo.orthographic = function () {
                return Ur(li)
            }).raw = li;
            var fi = ti((function (n) {
                return 1 / (1 + n)
            }), (function (n) {
                return 2 * Math.atan(n)
            }));

            function si(n, t) {
                return [Math.log(Math.tan(qn / 4 + t / 2)), -n]
            }

            function hi(n) {
                return n[0]
            }

            function pi(n) {
                return n[1]
            }

            function gi(n) {
                for (var t = n.length, e = [0, 1], r = 2, i = 2; i < t; i++) {
                    for (; r > 1 && Fn(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0;) --r;
                    e[r++] = i
                }
                return e.slice(0, r)
            }

            function vi(n, t) {
                return n[0] - t[0] || n[1] - t[1]
            }

            (u.geo.stereographic = function () {
                return Ur(fi)
            }).raw = fi, si.invert = function (n, t) {
                return [-t, 2 * Math.atan(Math.exp(n)) - Rn]
            }, (u.geo.transverseMercator = function () {
                var n = ci(si), t = n.center, e = n.rotate;
                return n.center = function (n) {
                    return n ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]]
                }, n.rotate = function (n) {
                    return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : [(n = e())[0], n[1], n[2] - 90]
                }, e([0, 0, 90])
            }).raw = si, u.geom = {}, u.geom.hull = function (n) {
                var t = hi, e = pi;
                if (arguments.length) return r(n);

                function r(n) {
                    if (n.length < 3) return [];
                    var r, i = jt(t), u = jt(e), o = n.length, a = [], c = [];
                    for (r = 0; r < o; r++) a.push([+i.call(this, n[r], r), +u.call(this, n[r], r), r]);
                    for (a.sort(vi), r = 0; r < o; r++) c.push([a[r][0], -a[r][1]]);
                    var l = gi(a), f = gi(c), s = f[0] === l[0], h = f[f.length - 1] === l[l.length - 1], p = [];
                    for (r = l.length - 1; r >= 0; --r) p.push(n[a[l[r]][2]]);
                    for (r = +s; r < f.length - h; ++r) p.push(n[a[f[r]][2]]);
                    return p
                }

                return r.x = function (n) {
                    return arguments.length ? (t = n, r) : t
                }, r.y = function (n) {
                    return arguments.length ? (e = n, r) : e
                }, r
            }, u.geom.polygon = function (n) {
                return $(n, di), n
            };
            var di = u.geom.polygon.prototype = [];

            function yi(n, t, e) {
                return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
            }

            function mi(n, t, e, r) {
                var i = n[0], u = e[0], o = t[0] - i, a = r[0] - u, c = n[1], l = e[1], f = t[1] - c, s = r[1] - l,
                    h = (a * (c - l) - s * (i - u)) / (s * o - a * f);
                return [i + h * o, c + h * f]
            }

            function bi(n) {
                var t = n[0], e = n[n.length - 1];
                return !(t[0] - e[0] || t[1] - e[1])
            }

            di.area = function () {
                for (var n, t = -1, e = this.length, r = this[e - 1], i = 0; ++t < e;) n = r, r = this[t], i += n[1] * r[0] - n[0] * r[1];
                return .5 * i
            }, di.centroid = function (n) {
                var t, e, r = -1, i = this.length, u = 0, o = 0, a = this[i - 1];
                for (arguments.length || (n = -1 / (6 * this.area())); ++r < i;) t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], u += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
                return [u * n, o * n]
            }, di.clip = function (n) {
                for (var t, e, r, i, u, o, a = bi(n), c = -1, l = this.length - bi(this), f = this[l - 1]; ++c < l;) {
                    for (t = n.slice(), n.length = 0, i = this[c], u = t[(r = t.length - a) - 1], e = -1; ++e < r;) yi(o = t[e], f, i) ? (yi(u, f, i) || n.push(mi(u, o, f, i)), n.push(o)) : yi(u, f, i) && n.push(mi(u, o, f, i)), u = o;
                    a && n.push(n[0]), f = i
                }
                return n
            };
            var Mi, xi, wi, _i, ji, Oi = [], Si = [];

            function Ei() {
                Xi(this), this.edge = this.site = this.circle = null
            }

            function Ni(n) {
                var t = Oi.pop() || new Ei;
                return t.site = n, t
            }

            function ki(n) {
                Pi(n), wi.remove(n), Oi.push(n), Xi(n)
            }

            function Ai(n) {
                var t = n.circle, e = t.x, r = t.cy, i = {x: e, y: r}, u = n.P, o = n.N, a = [n];
                ki(n);
                for (var c = u; c.circle && w(e - c.circle.x) < Cn && w(r - c.circle.cy) < Cn;) u = c.P, a.unshift(c), ki(c), c = u;
                a.unshift(c), Pi(c);
                for (var l = o; l.circle && w(e - l.circle.x) < Cn && w(r - l.circle.cy) < Cn;) o = l.N, a.push(l), ki(l), l = o;
                a.push(l), Pi(l);
                var f, s = a.length;
                for (f = 1; f < s; ++f) l = a[f], c = a[f - 1], Yi(l.edge, c.site, l.site, i);
                c = a[0], (l = a[s - 1]).edge = Hi(c.site, l.site, null, i), Di(c), Di(l)
            }

            function Ci(n) {
                for (var t, e, r, i, u = n.x, o = n.y, a = wi._; a;) if ((r = zi(a, o) - u) > Cn) a = a.L; else {
                    if (!((i = u - qi(a, o)) > Cn)) {
                        r > -Cn ? (t = a.P, e = a) : i > -Cn ? (t = a, e = a.N) : t = e = a;
                        break
                    }
                    if (!a.R) {
                        t = a;
                        break
                    }
                    a = a.R
                }
                var c = Ni(n);
                if (wi.insert(t, c), t || e) {
                    if (t === e) return Pi(t), e = Ni(t.site), wi.insert(c, e), c.edge = e.edge = Hi(t.site, c.site), Di(t), void Di(e);
                    if (e) {
                        Pi(t), Pi(e);
                        var l = t.site, f = l.x, s = l.y, h = n.x - f, p = n.y - s, g = e.site, v = g.x - f,
                            d = g.y - s, y = 2 * (h * d - p * v), m = h * h + p * p, b = v * v + d * d,
                            M = {x: (d * m - p * b) / y + f, y: (h * b - v * m) / y + s};
                        Yi(e.edge, l, g, M), c.edge = Hi(l, n, null, M), e.edge = Hi(n, g, null, M), Di(t), Di(e)
                    } else c.edge = Hi(t.site, c.site)
                }
            }

            function zi(n, t) {
                var e = n.site, r = e.x, i = e.y, u = i - t;
                if (!u) return r;
                var o = n.P;
                if (!o) return -1 / 0;
                var a = (e = o.site).x, c = e.y, l = c - t;
                if (!l) return a;
                var f = a - r, s = 1 / u - 1 / l, h = f / l;
                return s ? (-h + Math.sqrt(h * h - 2 * s * (f * f / (-2 * l) - c + l / 2 + i - u / 2))) / s + r : (r + a) / 2
            }

            function qi(n, t) {
                var e = n.N;
                if (e) return zi(e, t);
                var r = n.site;
                return r.y === t ? r.x : 1 / 0
            }

            function Li(n) {
                this.site = n, this.edges = []
            }

            function Ti(n, t) {
                return t.angle - n.angle
            }

            function Ri() {
                Xi(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function Di(n) {
                var t = n.P, e = n.N;
                if (t && e) {
                    var r = t.site, i = n.site, u = e.site;
                    if (r !== u) {
                        var o = i.x, a = i.y, c = r.x - o, l = r.y - a, f = u.x - o,
                            s = 2 * (c * (d = u.y - a) - l * f);
                        if (!(s >= -zn)) {
                            var h = c * c + l * l, p = f * f + d * d, g = (d * h - l * p) / s, v = (c * p - f * h) / s,
                                d = v + a, y = Si.pop() || new Ri;
                            y.arc = n, y.site = i, y.x = g + o, y.y = d + Math.sqrt(g * g + v * v), y.cy = d, n.circle = y;
                            for (var m = null, b = ji._; b;) if (y.y < b.y || y.y === b.y && y.x <= b.x) {
                                if (!b.L) {
                                    m = b.P;
                                    break
                                }
                                b = b.L
                            } else {
                                if (!b.R) {
                                    m = b;
                                    break
                                }
                                b = b.R
                            }
                            ji.insert(m, y), m || (_i = y)
                        }
                    }
                }
            }

            function Pi(n) {
                var t = n.circle;
                t && (t.P || (_i = t.N), ji.remove(t), Si.push(t), Xi(t), n.circle = null)
            }

            function Ui(n, t) {
                var e = n.b;
                if (e) return !0;
                var r, i, u = n.a, o = t[0][0], a = t[1][0], c = t[0][1], l = t[1][1], f = n.l, s = n.r, h = f.x,
                    p = f.y, g = s.x, v = s.y, d = (h + g) / 2, y = (p + v) / 2;
                if (v === p) {
                    if (d < o || d >= a) return;
                    if (h > g) {
                        if (u) {
                            if (u.y >= l) return
                        } else u = {x: d, y: c};
                        e = {x: d, y: l}
                    } else {
                        if (u) {
                            if (u.y < c) return
                        } else u = {x: d, y: l};
                        e = {x: d, y: c}
                    }
                } else if (i = y - (r = (h - g) / (v - p)) * d, r < -1 || r > 1) if (h > g) {
                    if (u) {
                        if (u.y >= l) return
                    } else u = {x: (c - i) / r, y: c};
                    e = {x: (l - i) / r, y: l}
                } else {
                    if (u) {
                        if (u.y < c) return
                    } else u = {x: (l - i) / r, y: l};
                    e = {x: (c - i) / r, y: c}
                } else if (p < v) {
                    if (u) {
                        if (u.x >= a) return
                    } else u = {x: o, y: r * o + i};
                    e = {x: a, y: r * a + i}
                } else {
                    if (u) {
                        if (u.x < o) return
                    } else u = {x: a, y: r * a + i};
                    e = {x: o, y: r * o + i}
                }
                return n.a = u, n.b = e, !0
            }

            function Fi(n, t) {
                this.l = n, this.r = t, this.a = this.b = null
            }

            function Hi(n, t, e, r) {
                var i = new Fi(n, t);
                return Mi.push(i), e && Yi(i, n, t, e), r && Yi(i, t, n, r), xi[n.i].edges.push(new Zi(i, n, t)), xi[t.i].edges.push(new Zi(i, t, n)), i
            }

            function Ii(n, t, e) {
                var r = new Fi(n, null);
                return r.a = t, r.b = e, Mi.push(r), r
            }

            function Yi(n, t, e, r) {
                n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
            }

            function Zi(n, t, e) {
                var r = n.a, i = n.b;
                this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
            }

            function Vi() {
                this._ = null
            }

            function Xi(n) {
                n.U = n.C = n.L = n.R = n.P = n.N = null
            }

            function $i(n, t) {
                var e = t, r = t.R, i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
            }

            function Bi(n, t) {
                var e = t, r = t.L, i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
            }

            function Wi(n) {
                for (; n.L;) n = n.L;
                return n
            }

            function Ji(n, t) {
                var e, r, i, u = n.sort(Gi).pop();
                for (Mi = [], xi = new Array(n.length), wi = new Vi, ji = new Vi; ;) if (i = _i, u && (!i || u.y < i.y || u.y === i.y && u.x < i.x)) u.x === e && u.y === r || (xi[u.i] = new Li(u), Ci(u), e = u.x, r = u.y), u = n.pop(); else {
                    if (!i) break;
                    Ai(i.arc)
                }
                t && (function (n) {
                    for (var t, e = Mi, r = hr(n[0][0], n[0][1], n[1][0], n[1][1]), i = e.length; i--;) (!Ui(t = e[i], n) || !r(t) || w(t.a.x - t.b.x) < Cn && w(t.a.y - t.b.y) < Cn) && (t.a = t.b = null, e.splice(i, 1))
                }(t), function (n) {
                    for (var t, e, r, i, u, o, a, c, l, f, s = n[0][0], h = n[1][0], p = n[0][1], g = n[1][1], v = xi, d = v.length; d--;) if ((u = v[d]) && u.prepare()) for (c = (a = u.edges).length, o = 0; o < c;) r = (f = a[o].end()).x, i = f.y, t = (l = a[++o % c].start()).x, e = l.y, (w(r - t) > Cn || w(i - e) > Cn) && (a.splice(o, 0, new Zi(Ii(u.site, f, w(r - s) < Cn && g - i > Cn ? {
                        x: s,
                        y: w(t - s) < Cn ? e : g
                    } : w(i - g) < Cn && h - r > Cn ? {
                        x: w(e - g) < Cn ? t : h,
                        y: g
                    } : w(r - h) < Cn && i - p > Cn ? {
                        x: h,
                        y: w(t - h) < Cn ? e : p
                    } : w(i - p) < Cn && r - s > Cn ? {x: w(e - p) < Cn ? t : s, y: p} : null), u.site, null)), ++c)
                }(t));
                var o = {cells: xi, edges: Mi};
                return wi = ji = Mi = xi = null, o
            }

            function Gi(n, t) {
                return t.y - n.y || t.x - n.x
            }

            Li.prototype.prepare = function () {
                for (var n, t = this.edges, e = t.length; e--;) (n = t[e].edge).b && n.a || t.splice(e, 1);
                return t.sort(Ti), t.length
            }, Zi.prototype = {
                start: function () {
                    return this.edge.l === this.site ? this.edge.a : this.edge.b
                }, end: function () {
                    return this.edge.l === this.site ? this.edge.b : this.edge.a
                }
            }, Vi.prototype = {
                insert: function (n, t) {
                    var e, r, i;
                    if (n) {
                        if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                            for (n = n.R; n.L;) n = n.L;
                            n.L = t
                        } else n.R = t;
                        e = n
                    } else this._ ? (n = Wi(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
                    for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.R && ($i(this, e), e = (n = e).U), e.C = !1, r.C = !0, Bi(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.L && (Bi(this, e), e = (n = e).U), e.C = !1, r.C = !0, $i(this, r)), e = n.U;
                    this._.C = !1
                }, remove: function (n) {
                    n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
                    var t, e, r, i = n.U, u = n.L, o = n.R;
                    if (e = u ? o ? Wi(o) : u : o, i ? i.L === n ? i.L = e : i.R = e : this._ = e, u && o ? (r = e.C, e.C = n.C, e.L = u, u.U = e, e !== o ? (i = e.U, e.U = n.U, n = e.R, i.L = n, e.R = o, o.U = e) : (e.U = i, i = e, n = e.R)) : (r = n.C, n = e), n && (n.U = i), !r) if (n && n.C) n.C = !1; else {
                        do {
                            if (n === this._) break;
                            if (n === i.L) {
                                if ((t = i.R).C && (t.C = !1, i.C = !0, $i(this, i), t = i.R), t.L && t.L.C || t.R && t.R.C) {
                                    t.R && t.R.C || (t.L.C = !1, t.C = !0, Bi(this, t), t = i.R), t.C = i.C, i.C = t.R.C = !1, $i(this, i), n = this._;
                                    break
                                }
                            } else if ((t = i.L).C && (t.C = !1, i.C = !0, Bi(this, i), t = i.L), t.L && t.L.C || t.R && t.R.C) {
                                t.L && t.L.C || (t.R.C = !1, t.C = !0, $i(this, t), t = i.L), t.C = i.C, i.C = t.L.C = !1, Bi(this, i), n = this._;
                                break
                            }
                            t.C = !0, n = i, i = i.U
                        } while (!n.C);
                        n && (n.C = !1)
                    }
                }
            }, u.geom.voronoi = function (n) {
                var t = hi, e = pi, r = t, i = e, u = Ki;
                if (n) return o(n);

                function o(n) {
                    var t = new Array(n.length), e = u[0][0], r = u[0][1], i = u[1][0], o = u[1][1];
                    return Ji(a(n), u).cells.forEach((function (u, a) {
                        var c = u.edges, l = u.site;
                        (t[a] = c.length ? c.map((function (n) {
                            var t = n.start();
                            return [t.x, t.y]
                        })) : l.x >= e && l.x <= i && l.y >= r && l.y <= o ? [[e, o], [i, o], [i, r], [e, r]] : []).point = n[a]
                    })), t
                }

                function a(n) {
                    return n.map((function (n, t) {
                        return {x: Math.round(r(n, t) / Cn) * Cn, y: Math.round(i(n, t) / Cn) * Cn, i: t}
                    }))
                }

                return o.links = function (n) {
                    return Ji(a(n)).edges.filter((function (n) {
                        return n.l && n.r
                    })).map((function (t) {
                        return {source: n[t.l.i], target: n[t.r.i]}
                    }))
                }, o.triangles = function (n) {
                    var t = [];
                    return Ji(a(n)).cells.forEach((function (e, r) {
                        for (var i, u, o, a, c = e.site, l = e.edges.sort(Ti), f = -1, s = l.length, h = l[s - 1].edge, p = h.l === c ? h.r : h.l; ++f < s;) h, i = p, p = (h = l[f].edge).l === c ? h.r : h.l, r < i.i && r < p.i && (o = i, a = p, ((u = c).x - a.x) * (o.y - u.y) - (u.x - o.x) * (a.y - u.y) < 0) && t.push([n[r], n[i.i], n[p.i]])
                    })), t
                }, o.x = function (n) {
                    return arguments.length ? (r = jt(t = n), o) : t
                }, o.y = function (n) {
                    return arguments.length ? (i = jt(e = n), o) : e
                }, o.clipExtent = function (n) {
                    return arguments.length ? (u = null == n ? Ki : n, o) : u === Ki ? null : u
                }, o.size = function (n) {
                    return arguments.length ? o.clipExtent(n && [[0, 0], n]) : u === Ki ? null : u && u[1]
                }, o
            };
            var Ki = [[-1e6, -1e6], [1e6, 1e6]];

            function Qi(n) {
                return n.x
            }

            function nu(n) {
                return n.y
            }

            function tu(n, t, e, r, i, u) {
                if (!n(t, e, r, i, u)) {
                    var o = .5 * (e + i), a = .5 * (r + u), c = t.nodes;
                    c[0] && tu(n, c[0], e, r, o, a), c[1] && tu(n, c[1], o, r, i, a), c[2] && tu(n, c[2], e, a, o, u), c[3] && tu(n, c[3], o, a, i, u)
                }
            }

            function eu(n, t, e, r, i, u, o) {
                var a, c = 1 / 0;
                return function n(l, f, s, h, p) {
                    if (!(f > u || s > o || h < r || p < i)) {
                        if (g = l.point) {
                            var g, v = t - l.x, d = e - l.y, y = v * v + d * d;
                            if (y < c) {
                                var m = Math.sqrt(c = y);
                                r = t - m, i = e - m, u = t + m, o = e + m, a = g
                            }
                        }
                        for (var b = l.nodes, M = .5 * (f + h), x = .5 * (s + p), w = (e >= x) << 1 | t >= M, _ = w + 4; w < _; ++w) if (l = b[3 & w]) switch (3 & w) {
                            case 0:
                                n(l, f, s, M, x);
                                break;
                            case 1:
                                n(l, M, s, h, x);
                                break;
                            case 2:
                                n(l, f, x, M, p);
                                break;
                            case 3:
                                n(l, M, x, h, p)
                        }
                    }
                }(n, r, i, u, o), a
            }

            function ru(n, t) {
                n = u.rgb(n), t = u.rgb(t);
                var e = n.r, r = n.g, i = n.b, o = t.r - e, a = t.g - r, c = t.b - i;
                return function (n) {
                    return "#" + yt(Math.round(e + o * n)) + yt(Math.round(r + a * n)) + yt(Math.round(i + c * n))
                }
            }

            function iu(n, t) {
                var e, r = {}, i = {};
                for (e in n) e in t ? r[e] = lu(n[e], t[e]) : i[e] = n[e];
                for (e in t) e in n || (i[e] = t[e]);
                return function (n) {
                    for (e in r) i[e] = r[e](n);
                    return i
                }
            }

            function uu(n, t) {
                return n = +n, t = +t, function (e) {
                    return n * (1 - e) + t * e
                }
            }

            function ou(n, t) {
                var e, r, i, u = au.lastIndex = cu.lastIndex = 0, o = -1, a = [], c = [];
                for (n += "", t += ""; (e = au.exec(n)) && (r = cu.exec(t));) (i = r.index) > u && (i = t.slice(u, i), a[o] ? a[o] += i : a[++o] = i), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
                    i: o,
                    x: uu(e, r)
                })), u = cu.lastIndex;
                return u < t.length && (i = t.slice(u), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? c[0] ? (t = c[0].x, function (n) {
                    return t(n) + ""
                }) : function () {
                    return t
                } : (t = c.length, function (n) {
                    for (var e, r = 0; r < t; ++r) a[(e = c[r]).i] = e.x(n);
                    return a.join("")
                })
            }

            u.geom.delaunay = function (n) {
                return u.geom.voronoi().triangles(n)
            }, u.geom.quadtree = function (n, t, e, r, i) {
                var u, o = hi, a = pi;
                if (u = arguments.length) return o = Qi, a = nu, 3 === u && (i = e, r = t, e = t = 0), c(n);

                function c(n) {
                    var c, l, f, s, h, p, g, v, d, y = jt(o), m = jt(a);
                    if (null != t) p = t, g = e, v = r, d = i; else if (v = d = -(p = g = 1 / 0), l = [], f = [], h = n.length, u) for (s = 0; s < h; ++s) (c = n[s]).x < p && (p = c.x), c.y < g && (g = c.y), c.x > v && (v = c.x), c.y > d && (d = c.y), l.push(c.x), f.push(c.y); else for (s = 0; s < h; ++s) {
                        var b = +y(c = n[s], s), M = +m(c, s);
                        b < p && (p = b), M < g && (g = M), b > v && (v = b), M > d && (d = M), l.push(b), f.push(M)
                    }
                    var x = v - p, _ = d - g;

                    function j(n, t, e, r, i, u, o, a) {
                        if (!isNaN(e) && !isNaN(r)) if (n.leaf) {
                            var c = n.x, l = n.y;
                            if (null != c) if (w(c - e) + w(l - r) < .01) O(n, t, e, r, i, u, o, a); else {
                                var f = n.point;
                                n.x = n.y = n.point = null, O(n, f, c, l, i, u, o, a), O(n, t, e, r, i, u, o, a)
                            } else n.x = e, n.y = r, n.point = t
                        } else O(n, t, e, r, i, u, o, a)
                    }

                    function O(n, t, e, r, i, u, o, a) {
                        var c = .5 * (i + o), l = .5 * (u + a), f = e >= c, s = r >= l, h = s << 1 | f;
                        n.leaf = !1, f ? i = c : o = c, s ? u = l : a = l, j(n = n.nodes[h] || (n.nodes[h] = {
                            leaf: !0,
                            nodes: [],
                            point: null,
                            x: null,
                            y: null
                        }), t, e, r, i, u, o, a)
                    }

                    x > _ ? d = g + x : v = p + _;
                    var S = {
                        leaf: !0, nodes: [], point: null, x: null, y: null, add: function (n) {
                            j(S, n, +y(n, ++s), +m(n, s), p, g, v, d)
                        }, visit: function (n) {
                            tu(n, S, p, g, v, d)
                        }, find: function (n) {
                            return eu(S, n[0], n[1], p, g, v, d)
                        }
                    };
                    if (s = -1, null == t) {
                        for (; ++s < h;) j(S, n[s], l[s], f[s], p, g, v, d);
                        --s
                    } else n.forEach(S.add);
                    return l = f = n = c = null, S
                }

                return c.x = function (n) {
                    return arguments.length ? (o = n, c) : o
                }, c.y = function (n) {
                    return arguments.length ? (a = n, c) : a
                }, c.extent = function (n) {
                    return arguments.length ? (null == n ? t = e = r = i = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], i = +n[1][1]), c) : null == t ? null : [[t, e], [r, i]]
                }, c.size = function (n) {
                    return arguments.length ? (null == n ? t = e = r = i = null : (t = e = 0, r = +n[0], i = +n[1]), c) : null == t ? null : [r - t, i - e]
                }, c
            }, u.interpolateRgb = ru, u.interpolateObject = iu, u.interpolateNumber = uu, u.interpolateString = ou;
            var au = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cu = new RegExp(au.source, "g");

            function lu(n, t) {
                for (var e, r = u.interpolators.length; --r >= 0 && !(e = u.interpolators[r](n, t));) ;
                return e
            }

            function fu(n, t) {
                var e, r = [], i = [], u = n.length, o = t.length, a = Math.min(n.length, t.length);
                for (e = 0; e < a; ++e) r.push(lu(n[e], t[e]));
                for (; e < u; ++e) i[e] = n[e];
                for (; e < o; ++e) i[e] = t[e];
                return function (n) {
                    for (e = 0; e < a; ++e) i[e] = r[e](n);
                    return i
                }
            }

            u.interpolate = lu, u.interpolators = [function (n, t) {
                var e = typeof t;
                return ("string" === e ? _t.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? ru : ou : t instanceof Wn ? ru : Array.isArray(t) ? fu : "object" === e && isNaN(t) ? iu : uu)(n, t)
            }], u.interpolateArray = fu;
            var su = function () {
                return R
            }, hu = u.map({
                linear: su, poly: function (n) {
                    return function (t) {
                        return Math.pow(t, n)
                    }
                }, quad: function () {
                    return yu
                }, cubic: function () {
                    return mu
                }, sin: function () {
                    return Mu
                }, exp: function () {
                    return xu
                }, circle: function () {
                    return wu
                }, elastic: function (n, t) {
                    var e;
                    arguments.length < 2 && (t = .45);
                    arguments.length ? e = t / Ln * Math.asin(1 / n) : (n = 1, e = t / 4);
                    return function (r) {
                        return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Ln / t)
                    }
                }, back: function (n) {
                    n || (n = 1.70158);
                    return function (t) {
                        return t * t * ((n + 1) * t - n)
                    }
                }, bounce: function () {
                    return _u
                }
            }), pu = u.map({
                in: R, out: vu, "in-out": du, "out-in": function (n) {
                    return du(vu(n))
                }
            });

            function gu(n) {
                return function (t) {
                    return t <= 0 ? 0 : t >= 1 ? 1 : n(t)
                }
            }

            function vu(n) {
                return function (t) {
                    return 1 - n(1 - t)
                }
            }

            function du(n) {
                return function (t) {
                    return .5 * (t < .5 ? n(2 * t) : 2 - n(2 - 2 * t))
                }
            }

            function yu(n) {
                return n * n
            }

            function mu(n) {
                return n * n * n
            }

            function bu(n) {
                if (n <= 0) return 0;
                if (n >= 1) return 1;
                var t = n * n, e = t * n;
                return 4 * (n < .5 ? e : 3 * (n - t) + e - .75)
            }

            function Mu(n) {
                return 1 - Math.cos(n * Rn)
            }

            function xu(n) {
                return Math.pow(2, 10 * (n - 1))
            }

            function wu(n) {
                return 1 - Math.sqrt(1 - n * n)
            }

            function _u(n) {
                return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
            }

            function ju(n, t) {
                return t -= n, function (e) {
                    return Math.round(n + t * e)
                }
            }

            function Ou(n) {
                var t, e, r, i = [n.a, n.b], u = [n.c, n.d], o = Eu(i), a = Su(i, u),
                    c = Eu(((t = u)[0] += (r = -a) * (e = i)[0], t[1] += r * e[1], t)) || 0;
                i[0] * u[1] < u[0] * i[1] && (i[0] *= -1, i[1] *= -1, o *= -1, a *= -1), this.rotate = (o ? Math.atan2(i[1], i[0]) : Math.atan2(-u[0], u[1])) * Pn, this.translate = [n.e, n.f], this.scale = [o, c], this.skew = c ? Math.atan2(a, c) * Pn : 0
            }

            function Su(n, t) {
                return n[0] * t[0] + n[1] * t[1]
            }

            function Eu(n) {
                var t = Math.sqrt(Su(n, n));
                return t && (n[0] /= t, n[1] /= t), t
            }

            u.ease = function (n) {
                var t = n.indexOf("-"), e = t >= 0 ? n.slice(0, t) : n, r = t >= 0 ? n.slice(t + 1) : "in";
                return e = hu.get(e) || su, gu((r = pu.get(r) || R)(e.apply(null, o.call(arguments, 1))))
            }, u.interpolateHcl = function (n, t) {
                n = u.hcl(n), t = u.hcl(t);
                var e = n.h, r = n.c, i = n.l, o = t.h - e, a = t.c - r, c = t.l - i;
                isNaN(a) && (a = 0, r = isNaN(r) ? t.c : r);
                isNaN(o) ? (o = 0, e = isNaN(e) ? t.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360);
                return function (n) {
                    return tt(e + o * n, r + a * n, i + c * n) + ""
                }
            }, u.interpolateHsl = function (n, t) {
                n = u.hsl(n), t = u.hsl(t);
                var e = n.h, r = n.s, i = n.l, o = t.h - e, a = t.s - r, c = t.l - i;
                isNaN(a) && (a = 0, r = isNaN(r) ? t.s : r);
                isNaN(o) ? (o = 0, e = isNaN(e) ? t.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360);
                return function (n) {
                    return Kn(e + o * n, r + a * n, i + c * n) + ""
                }
            }, u.interpolateLab = function (n, t) {
                n = u.lab(n), t = u.lab(t);
                var e = n.l, r = n.a, i = n.b, o = t.l - e, a = t.a - r, c = t.b - i;
                return function (n) {
                    return ct(e + o * n, r + a * n, i + c * n) + ""
                }
            }, u.interpolateRound = ju, u.transform = function (n) {
                var t = c.createElementNS(u.ns.prefix.svg, "g");
                return (u.transform = function (n) {
                    if (null != n) {
                        t.setAttribute("transform", n);
                        var e = t.transform.baseVal.consolidate()
                    }
                    return new Ou(e ? e.matrix : Nu)
                })(n)
            }, Ou.prototype.toString = function () {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
            };
            var Nu = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};

            function ku(n) {
                return n.length ? n.pop() + "," : ""
            }

            function Au(n, t) {
                var e = [], r = [];
                return n = u.transform(n), t = u.transform(t), function (n, t, e, r) {
                    if (n[0] !== t[0] || n[1] !== t[1]) {
                        var i = e.push("translate(", null, ",", null, ")");
                        r.push({i: i - 4, x: uu(n[0], t[0])}, {i: i - 2, x: uu(n[1], t[1])})
                    } else (t[0] || t[1]) && e.push("translate(" + t + ")")
                }(n.translate, t.translate, e, r), function (n, t, e, r) {
                    n !== t ? (n - t > 180 ? t += 360 : t - n > 180 && (n += 360), r.push({
                        i: e.push(ku(e) + "rotate(", null, ")") - 2,
                        x: uu(n, t)
                    })) : t && e.push(ku(e) + "rotate(" + t + ")")
                }(n.rotate, t.rotate, e, r), function (n, t, e, r) {
                    n !== t ? r.push({
                        i: e.push(ku(e) + "skewX(", null, ")") - 2,
                        x: uu(n, t)
                    }) : t && e.push(ku(e) + "skewX(" + t + ")")
                }(n.skew, t.skew, e, r), function (n, t, e, r) {
                    if (n[0] !== t[0] || n[1] !== t[1]) {
                        var i = e.push(ku(e) + "scale(", null, ",", null, ")");
                        r.push({i: i - 4, x: uu(n[0], t[0])}, {i: i - 2, x: uu(n[1], t[1])})
                    } else 1 === t[0] && 1 === t[1] || e.push(ku(e) + "scale(" + t + ")")
                }(n.scale, t.scale, e, r), n = t = null, function (n) {
                    for (var t, i = -1, u = r.length; ++i < u;) e[(t = r[i]).i] = t.x(n);
                    return e.join("")
                }
            }

            function Cu(n, t) {
                return t = (t -= n = +n) || 1 / t, function (e) {
                    return (e - n) / t
                }
            }

            function zu(n, t) {
                return t = (t -= n = +n) || 1 / t, function (e) {
                    return Math.max(0, Math.min(1, (e - n) / t))
                }
            }

            function qu(n) {
                for (var t = n.source, e = n.target, r = function (n, t) {
                    if (n === t) return n;
                    var e = Lu(n), r = Lu(t), i = e.pop(), u = r.pop(), o = null;
                    for (; i === u;) o = i, i = e.pop(), u = r.pop();
                    return o
                }(t, e), i = [t]; t !== r;) t = t.parent, i.push(t);
                for (var u = i.length; e !== r;) i.splice(u, 0, e), e = e.parent;
                return i
            }

            function Lu(n) {
                for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
                return t.push(n), t
            }

            function Tu(n) {
                n.fixed |= 2
            }

            function Ru(n) {
                n.fixed &= -7
            }

            function Du(n) {
                n.fixed |= 4, n.px = n.x, n.py = n.y
            }

            function Pu(n) {
                n.fixed &= -5
            }

            u.interpolateTransform = Au, u.layout = {}, u.layout.bundle = function () {
                return function (n) {
                    for (var t = [], e = -1, r = n.length; ++e < r;) t.push(qu(n[e]));
                    return t
                }
            }, u.layout.chord = function () {
                var n, t, e, r, i, o, a, c = {}, l = 0;

                function f() {
                    var c, f, h, p, g, v = {}, d = [], y = u.range(r), m = [];
                    for (n = [], t = [], c = 0, p = -1; ++p < r;) {
                        for (f = 0, g = -1; ++g < r;) f += e[p][g];
                        d.push(f), m.push(u.range(r)), c += f
                    }
                    for (i && y.sort((function (n, t) {
                        return i(d[n], d[t])
                    })), o && m.forEach((function (n, t) {
                        n.sort((function (n, r) {
                            return o(e[t][n], e[t][r])
                        }))
                    })), c = (Ln - l * r) / c, f = 0, p = -1; ++p < r;) {
                        for (h = f, g = -1; ++g < r;) {
                            var b = y[p], M = m[b][g], x = e[b][M], w = f, _ = f += x * c;
                            v[b + "-" + M] = {index: b, subindex: M, startAngle: w, endAngle: _, value: x}
                        }
                        t[b] = {index: b, startAngle: h, endAngle: f, value: d[b]}, f += l
                    }
                    for (p = -1; ++p < r;) for (g = p - 1; ++g < r;) {
                        var j = v[p + "-" + g], O = v[g + "-" + p];
                        (j.value || O.value) && n.push(j.value < O.value ? {source: O, target: j} : {
                            source: j,
                            target: O
                        })
                    }
                    a && s()
                }

                function s() {
                    n.sort((function (n, t) {
                        return a((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
                    }))
                }

                return c.matrix = function (i) {
                    return arguments.length ? (r = (e = i) && e.length, n = t = null, c) : e
                }, c.padding = function (e) {
                    return arguments.length ? (l = e, n = t = null, c) : l
                }, c.sortGroups = function (e) {
                    return arguments.length ? (i = e, n = t = null, c) : i
                }, c.sortSubgroups = function (t) {
                    return arguments.length ? (o = t, n = null, c) : o
                }, c.sortChords = function (t) {
                    return arguments.length ? (a = t, n && s(), c) : a
                }, c.chords = function () {
                    return n || f(), n
                }, c.groups = function () {
                    return t || f(), t
                }, c
            }, u.layout.force = function () {
                var n, t, e, r, i, o, a = {}, c = u.dispatch("start", "tick", "end"), l = [1, 1], f = .9, s = Uu,
                    h = Fu, p = -30, g = Hu, v = .1, d = .64, y = [], m = [];

                function b(n) {
                    return function (t, e, r, i) {
                        if (t.point !== n) {
                            var u = t.cx - n.x, o = t.cy - n.y, a = i - e, c = u * u + o * o;
                            if (a * a / d < c) {
                                if (c < g) {
                                    var l = t.charge / c;
                                    n.px -= u * l, n.py -= o * l
                                }
                                return !0
                            }
                            if (t.point && c && c < g) {
                                l = t.pointCharge / c;
                                n.px -= u * l, n.py -= o * l
                            }
                        }
                        return !t.charge
                    }
                }

                function M(n) {
                    n.px = u.event.x, n.py = u.event.y, a.resume()
                }

                return a.tick = function () {
                    if ((e *= .99) < .005) return n = null, c.end({type: "end", alpha: e = 0}), !0;
                    var t, a, s, h, g, d, M, x, w, _ = y.length, j = m.length;
                    for (a = 0; a < j; ++a) h = (s = m[a]).source, (d = (x = (g = s.target).x - h.x) * x + (w = g.y - h.y) * w) && (x *= d = e * i[a] * ((d = Math.sqrt(d)) - r[a]) / d, w *= d, g.x -= x * (M = h.weight + g.weight ? h.weight / (h.weight + g.weight) : .5), g.y -= w * M, h.x += x * (M = 1 - M), h.y += w * M);
                    if ((M = e * v) && (x = l[0] / 2, w = l[1] / 2, a = -1, M)) for (; ++a < _;) (s = y[a]).x += (x - s.x) * M, s.y += (w - s.y) * M;
                    if (p) for (!function n(t, e, r) {
                        var i = 0, u = 0;
                        if (t.charge = 0, !t.leaf) for (var o, a = t.nodes, c = a.length, l = -1; ++l < c;) null != (o = a[l]) && (n(o, e, r), t.charge += o.charge, i += o.charge * o.cx, u += o.charge * o.cy);
                        if (t.point) {
                            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                            var f = e * r[t.point.index];
                            t.charge += t.pointCharge = f, i += f * t.point.x, u += f * t.point.y
                        }
                        t.cx = i / t.charge, t.cy = u / t.charge
                    }(t = u.geom.quadtree(y), e, o), a = -1; ++a < _;) (s = y[a]).fixed || t.visit(b(s));
                    for (a = -1; ++a < _;) (s = y[a]).fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * f, s.y -= (s.py - (s.py = s.y)) * f);
                    c.tick({type: "tick", alpha: e})
                }, a.nodes = function (n) {
                    return arguments.length ? (y = n, a) : y
                }, a.links = function (n) {
                    return arguments.length ? (m = n, a) : m
                }, a.size = function (n) {
                    return arguments.length ? (l = n, a) : l
                }, a.linkDistance = function (n) {
                    return arguments.length ? (s = "function" == typeof n ? n : +n, a) : s
                }, a.distance = a.linkDistance, a.linkStrength = function (n) {
                    return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
                }, a.friction = function (n) {
                    return arguments.length ? (f = +n, a) : f
                }, a.charge = function (n) {
                    return arguments.length ? (p = "function" == typeof n ? n : +n, a) : p
                }, a.chargeDistance = function (n) {
                    return arguments.length ? (g = n * n, a) : Math.sqrt(g)
                }, a.gravity = function (n) {
                    return arguments.length ? (v = +n, a) : v
                }, a.theta = function (n) {
                    return arguments.length ? (d = n * n, a) : Math.sqrt(d)
                }, a.alpha = function (t) {
                    return arguments.length ? (t = +t, e ? t > 0 ? e = t : (n.c = null, n.t = NaN, n = null, c.end({
                        type: "end",
                        alpha: e = 0
                    })) : t > 0 && (c.start({type: "start", alpha: e = t}), n = zt(a.tick)), a) : e
                }, a.start = function () {
                    var n, t, e, u = y.length, c = m.length, f = l[0], g = l[1];
                    for (n = 0; n < u; ++n) (e = y[n]).index = n, e.weight = 0;
                    for (n = 0; n < c; ++n) "number" == typeof (e = m[n]).source && (e.source = y[e.source]), "number" == typeof e.target && (e.target = y[e.target]), ++e.source.weight, ++e.target.weight;
                    for (n = 0; n < u; ++n) e = y[n], isNaN(e.x) && (e.x = v("x", f)), isNaN(e.y) && (e.y = v("y", g)), isNaN(e.px) && (e.px = e.x), isNaN(e.py) && (e.py = e.y);
                    if (r = [], "function" == typeof s) for (n = 0; n < c; ++n) r[n] = +s.call(this, m[n], n); else for (n = 0; n < c; ++n) r[n] = s;
                    if (i = [], "function" == typeof h) for (n = 0; n < c; ++n) i[n] = +h.call(this, m[n], n); else for (n = 0; n < c; ++n) i[n] = h;
                    if (o = [], "function" == typeof p) for (n = 0; n < u; ++n) o[n] = +p.call(this, y[n], n); else for (n = 0; n < u; ++n) o[n] = p;

                    function v(e, r) {
                        if (!t) {
                            for (t = new Array(u), l = 0; l < u; ++l) t[l] = [];
                            for (l = 0; l < c; ++l) {
                                var i = m[l];
                                t[i.source.index].push(i.target), t[i.target.index].push(i.source)
                            }
                        }
                        for (var o, a = t[n], l = -1, f = a.length; ++l < f;) if (!isNaN(o = a[l][e])) return o;
                        return Math.random() * r
                    }

                    return a.resume()
                }, a.resume = function () {
                    return a.alpha(.1)
                }, a.stop = function () {
                    return a.alpha(0)
                }, a.drag = function () {
                    if (t || (t = u.behavior.drag().origin(R).on("dragstart.force", Tu).on("drag.force", M).on("dragend.force", Ru)), !arguments.length) return t;
                    this.on("mouseover.force", Du).on("mouseout.force", Pu).call(t)
                }, u.rebind(a, c, "on")
            };
            var Uu = 20, Fu = 1, Hu = 1 / 0;

            function Iu(n, t) {
                return u.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = Bu, n
            }

            function Yu(n, t) {
                for (var e = [n]; null != (n = e.pop());) if (t(n), (i = n.children) && (r = i.length)) for (var r, i; --r >= 0;) e.push(i[r])
            }

            function Zu(n, t) {
                for (var e = [n], r = []; null != (n = e.pop());) if (r.push(n), (u = n.children) && (i = u.length)) for (var i, u, o = -1; ++o < i;) e.push(u[o]);
                for (; null != (n = r.pop());) t(n)
            }

            function Vu(n) {
                return n.children
            }

            function Xu(n) {
                return n.value
            }

            function $u(n, t) {
                return t.value - n.value
            }

            function Bu(n) {
                return u.merge(n.map((function (n) {
                    return (n.children || []).map((function (t) {
                        return {source: n, target: t}
                    }))
                })))
            }

            u.layout.hierarchy = function () {
                var n = $u, t = Vu, e = Xu;

                function r(i) {
                    var u, o = [i], a = [];
                    for (i.depth = 0; null != (u = o.pop());) if (a.push(u), (l = t.call(r, u, u.depth)) && (c = l.length)) {
                        for (var c, l, f; --c >= 0;) o.push(f = l[c]), f.parent = u, f.depth = u.depth + 1;
                        e && (u.value = 0), u.children = l
                    } else e && (u.value = +e.call(r, u, u.depth) || 0), delete u.children;
                    return Zu(i, (function (t) {
                        var r, i;
                        n && (r = t.children) && r.sort(n), e && (i = t.parent) && (i.value += t.value)
                    })), a
                }

                return r.sort = function (t) {
                    return arguments.length ? (n = t, r) : n
                }, r.children = function (n) {
                    return arguments.length ? (t = n, r) : t
                }, r.value = function (n) {
                    return arguments.length ? (e = n, r) : e
                }, r.revalue = function (n) {
                    return e && (Yu(n, (function (n) {
                        n.children && (n.value = 0)
                    })), Zu(n, (function (n) {
                        var t;
                        n.children || (n.value = +e.call(r, n, n.depth) || 0), (t = n.parent) && (t.value += n.value)
                    }))), n
                }, r
            }, u.layout.partition = function () {
                var n = u.layout.hierarchy(), t = [1, 1];

                function e(e, r) {
                    var i = n.call(this, e, r);
                    return function n(t, e, r, i) {
                        var u = t.children;
                        if (t.x = e, t.y = t.depth * i, t.dx = r, t.dy = i, u && (o = u.length)) {
                            var o, a, c, l = -1;
                            for (r = t.value ? r / t.value : 0; ++l < o;) n(a = u[l], e, c = a.value * r, i), e += c
                        }
                    }(i[0], 0, t[0], t[1] / function n(t) {
                        var e = t.children, r = 0;
                        if (e && (i = e.length)) for (var i, u = -1; ++u < i;) r = Math.max(r, n(e[u]));
                        return 1 + r
                    }(i[0])), i
                }

                return e.size = function (n) {
                    return arguments.length ? (t = n, e) : t
                }, Iu(e, n)
            }, u.layout.pie = function () {
                var n = Number, t = Wu, e = 0, r = Ln, i = 0;

                function o(a) {
                    var c, l = a.length, f = a.map((function (t, e) {
                            return +n.call(o, t, e)
                        })), s = +("function" == typeof e ? e.apply(this, arguments) : e),
                        h = ("function" == typeof r ? r.apply(this, arguments) : r) - s,
                        p = Math.min(Math.abs(h) / l, +("function" == typeof i ? i.apply(this, arguments) : i)),
                        g = p * (h < 0 ? -1 : 1), v = u.sum(f), d = v ? (h - l * g) / v : 0, y = u.range(l), m = [];
                    return null != t && y.sort(t === Wu ? function (n, t) {
                        return f[t] - f[n]
                    } : function (n, e) {
                        return t(a[n], a[e])
                    }), y.forEach((function (n) {
                        m[n] = {data: a[n], value: c = f[n], startAngle: s, endAngle: s += c * d + g, padAngle: p}
                    })), m
                }

                return o.value = function (t) {
                    return arguments.length ? (n = t, o) : n
                }, o.sort = function (n) {
                    return arguments.length ? (t = n, o) : t
                }, o.startAngle = function (n) {
                    return arguments.length ? (e = n, o) : e
                }, o.endAngle = function (n) {
                    return arguments.length ? (r = n, o) : r
                }, o.padAngle = function (n) {
                    return arguments.length ? (i = n, o) : i
                }, o
            };
            var Wu = {};

            function Ju(n) {
                return n.x
            }

            function Gu(n) {
                return n.y
            }

            function Ku(n, t, e) {
                n.y0 = t, n.y = e
            }

            u.layout.stack = function () {
                var n = R, t = to, e = eo, r = Ku, i = Ju, o = Gu;

                function a(c, l) {
                    if (!(p = c.length)) return c;
                    var f = c.map((function (t, e) {
                        return n.call(a, t, e)
                    })), s = f.map((function (n) {
                        return n.map((function (n, t) {
                            return [i.call(a, n, t), o.call(a, n, t)]
                        }))
                    })), h = t.call(a, s, l);
                    f = u.permute(f, h), s = u.permute(s, h);
                    var p, g, v, d, y = e.call(a, s, l), m = f[0].length;
                    for (v = 0; v < m; ++v) for (r.call(a, f[0][v], d = y[v], s[0][v][1]), g = 1; g < p; ++g) r.call(a, f[g][v], d += s[g - 1][v][1], s[g][v][1]);
                    return c
                }

                return a.values = function (t) {
                    return arguments.length ? (n = t, a) : n
                }, a.order = function (n) {
                    return arguments.length ? (t = "function" == typeof n ? n : Qu.get(n) || to, a) : t
                }, a.offset = function (n) {
                    return arguments.length ? (e = "function" == typeof n ? n : no.get(n) || eo, a) : e
                }, a.x = function (n) {
                    return arguments.length ? (i = n, a) : i
                }, a.y = function (n) {
                    return arguments.length ? (o = n, a) : o
                }, a.out = function (n) {
                    return arguments.length ? (r = n, a) : r
                }, a
            };
            var Qu = u.map({
                "inside-out": function (n) {
                    var t, e, r = n.length, i = n.map(ro), o = n.map(io), a = u.range(r).sort((function (n, t) {
                        return i[n] - i[t]
                    })), c = 0, l = 0, f = [], s = [];
                    for (t = 0; t < r; ++t) e = a[t], c < l ? (c += o[e], f.push(e)) : (l += o[e], s.push(e));
                    return s.reverse().concat(f)
                }, reverse: function (n) {
                    return u.range(n.length).reverse()
                }, default: to
            }), no = u.map({
                silhouette: function (n) {
                    var t, e, r, i = n.length, u = n[0].length, o = [], a = 0, c = [];
                    for (e = 0; e < u; ++e) {
                        for (t = 0, r = 0; t < i; t++) r += n[t][e][1];
                        r > a && (a = r), o.push(r)
                    }
                    for (e = 0; e < u; ++e) c[e] = (a - o[e]) / 2;
                    return c
                }, wiggle: function (n) {
                    var t, e, r, i, u, o, a, c, l, f = n.length, s = n[0], h = s.length, p = [];
                    for (p[0] = c = l = 0, e = 1; e < h; ++e) {
                        for (t = 0, i = 0; t < f; ++t) i += n[t][e][1];
                        for (t = 0, u = 0, a = s[e][0] - s[e - 1][0]; t < f; ++t) {
                            for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); r < t; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
                            u += o * n[t][e][1]
                        }
                        p[e] = c -= i ? u / i * a : 0, c < l && (l = c)
                    }
                    for (e = 0; e < h; ++e) p[e] -= l;
                    return p
                }, expand: function (n) {
                    var t, e, r, i = n.length, u = n[0].length, o = 1 / i, a = [];
                    for (e = 0; e < u; ++e) {
                        for (t = 0, r = 0; t < i; t++) r += n[t][e][1];
                        if (r) for (t = 0; t < i; t++) n[t][e][1] /= r; else for (t = 0; t < i; t++) n[t][e][1] = o
                    }
                    for (e = 0; e < u; ++e) a[e] = 0;
                    return a
                }, zero: eo
            });

            function to(n) {
                return u.range(n.length)
            }

            function eo(n) {
                for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
                return r
            }

            function ro(n) {
                for (var t, e = 1, r = 0, i = n[0][1], u = n.length; e < u; ++e) (t = n[e][1]) > i && (r = e, i = t);
                return r
            }

            function io(n) {
                return n.reduce(uo, 0)
            }

            function uo(n, t) {
                return n + t[1]
            }

            function oo(n, t) {
                return ao(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
            }

            function ao(n, t) {
                for (var e = -1, r = +n[0], i = (n[1] - r) / t, u = []; ++e <= t;) u[e] = i * e + r;
                return u
            }

            function co(n) {
                return [u.min(n), u.max(n)]
            }

            function lo(n, t) {
                return n.value - t.value
            }

            function fo(n, t) {
                var e = n._pack_next;
                n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
            }

            function so(n, t) {
                n._pack_next = t, t._pack_prev = n
            }

            function ho(n, t) {
                var e = t.x - n.x, r = t.y - n.y, i = n.r + t.r;
                return .999 * i * i > e * e + r * r
            }

            function po(n) {
                if ((t = n.children) && (c = t.length)) {
                    var t, e, r, i, u, o, a, c, l = 1 / 0, f = -1 / 0, s = 1 / 0, h = -1 / 0;
                    if (t.forEach(go), (e = t[0]).x = -e.r, e.y = 0, b(e), c > 1 && ((r = t[1]).x = r.r, r.y = 0, b(r), c > 2)) for (yo(e, r, i = t[2]), b(i), fo(e, i), e._pack_prev = i, fo(i, r), r = e._pack_next, u = 3; u < c; u++) {
                        yo(e, r, i = t[u]);
                        var p = 0, g = 1, v = 1;
                        for (o = r._pack_next; o !== r; o = o._pack_next, g++) if (ho(o, i)) {
                            p = 1;
                            break
                        }
                        if (1 == p) for (a = e._pack_prev; a !== o._pack_prev && !ho(a, i); a = a._pack_prev, v++) ;
                        p ? (g < v || g == v && r.r < e.r ? so(e, r = o) : so(e = a, r), u--) : (fo(e, i), r = i, b(i))
                    }
                    var d = (l + f) / 2, y = (s + h) / 2, m = 0;
                    for (u = 0; u < c; u++) (i = t[u]).x -= d, i.y -= y, m = Math.max(m, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
                    n.r = m, t.forEach(vo)
                }

                function b(n) {
                    l = Math.min(n.x - n.r, l), f = Math.max(n.x + n.r, f), s = Math.min(n.y - n.r, s), h = Math.max(n.y + n.r, h)
                }
            }

            function go(n) {
                n._pack_next = n._pack_prev = n
            }

            function vo(n) {
                delete n._pack_next, delete n._pack_prev
            }

            function yo(n, t, e) {
                var r = n.r + e.r, i = t.x - n.x, u = t.y - n.y;
                if (r && (i || u)) {
                    var o = t.r + e.r, a = i * i + u * u, c = .5 + ((r *= r) - (o *= o)) / (2 * a),
                        l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
                    e.x = n.x + c * i + l * u, e.y = n.y + c * u - l * i
                } else e.x = n.x + r, e.y = n.y
            }

            function mo(n, t) {
                return n.parent == t.parent ? 1 : 2
            }

            function bo(n) {
                var t = n.children;
                return t.length ? t[0] : n.t
            }

            function Mo(n) {
                var t, e = n.children;
                return (t = e.length) ? e[t - 1] : n.t
            }

            function xo(n, t, e) {
                var r = e / (t.i - n.i);
                t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e
            }

            function wo(n, t, e) {
                return n.a.parent === t.parent ? n.a : e
            }

            function _o(n) {
                return {x: n.x, y: n.y, dx: n.dx, dy: n.dy}
            }

            function jo(n, t) {
                var e = n.x + t[3], r = n.y + t[0], i = n.dx - t[1] - t[3], u = n.dy - t[0] - t[2];
                return i < 0 && (e += i / 2, i = 0), u < 0 && (r += u / 2, u = 0), {x: e, y: r, dx: i, dy: u}
            }

            function Oo(n) {
                var t = n[0], e = n[n.length - 1];
                return t < e ? [t, e] : [e, t]
            }

            function So(n) {
                return n.rangeExtent ? n.rangeExtent() : Oo(n.range())
            }

            function Eo(n, t, e, r) {
                var i = e(n[0], n[1]), u = r(t[0], t[1]);
                return function (n) {
                    return u(i(n))
                }
            }

            function No(n, t) {
                var e, r = 0, i = n.length - 1, u = n[r], o = n[i];
                return o < u && (e = r, r = i, i = e, e = u, u = o, o = e), n[r] = t.floor(u), n[i] = t.ceil(o), n
            }

            function ko(n) {
                return n ? {
                    floor: function (t) {
                        return Math.floor(t / n) * n
                    }, ceil: function (t) {
                        return Math.ceil(t / n) * n
                    }
                } : Ao
            }

            u.layout.histogram = function () {
                var n = !0, t = Number, e = co, r = oo;

                function i(i, o) {
                    for (var a, c, l = [], f = i.map(t, this), s = e.call(this, f, o), h = r.call(this, s, f, o), p = (o = -1, f.length), g = h.length - 1, v = n ? 1 : 1 / p; ++o < g;) (a = l[o] = []).dx = h[o + 1] - (a.x = h[o]), a.y = 0;
                    if (g > 0) for (o = -1; ++o < p;) (c = f[o]) >= s[0] && c <= s[1] && ((a = l[u.bisect(h, c, 1, g) - 1]).y += v, a.push(i[o]));
                    return l
                }

                return i.value = function (n) {
                    return arguments.length ? (t = n, i) : t
                }, i.range = function (n) {
                    return arguments.length ? (e = jt(n), i) : e
                }, i.bins = function (n) {
                    return arguments.length ? (r = "number" == typeof n ? function (t) {
                        return ao(t, n)
                    } : jt(n), i) : r
                }, i.frequency = function (t) {
                    return arguments.length ? (n = !!t, i) : n
                }, i
            }, u.layout.pack = function () {
                var n, t = u.layout.hierarchy().sort(lo), e = 0, r = [1, 1];

                function i(i, u) {
                    var o = t.call(this, i, u), a = o[0], c = r[0], l = r[1],
                        f = null == n ? Math.sqrt : "function" == typeof n ? n : function () {
                            return n
                        };
                    if (a.x = a.y = 0, Zu(a, (function (n) {
                        n.r = +f(n.value)
                    })), Zu(a, po), e) {
                        var s = e * (n ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
                        Zu(a, (function (n) {
                            n.r += s
                        })), Zu(a, po), Zu(a, (function (n) {
                            n.r -= s
                        }))
                    }
                    return function n(t, e, r, i) {
                        var u = t.children;
                        if (t.x = e += i * t.x, t.y = r += i * t.y, t.r *= i, u) for (var o = -1, a = u.length; ++o < a;) n(u[o], e, r, i)
                    }(a, c / 2, l / 2, n ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o
                }

                return i.size = function (n) {
                    return arguments.length ? (r = n, i) : r
                }, i.radius = function (t) {
                    return arguments.length ? (n = null == t || "function" == typeof t ? t : +t, i) : n
                }, i.padding = function (n) {
                    return arguments.length ? (e = +n, i) : e
                }, Iu(i, t)
            }, u.layout.tree = function () {
                var n = u.layout.hierarchy().sort(null).value(null), t = mo, e = [1, 1], r = null;

                function i(i, u) {
                    var l = n.call(this, i, u), f = l[0], s = function (n) {
                        var t, e = {A: null, children: [n]}, r = [e];
                        for (; null != (t = r.pop());) for (var i, u = t.children, o = 0, a = u.length; o < a; ++o) r.push((u[o] = i = {
                            _: u[o],
                            parent: t,
                            children: (i = u[o].children) && i.slice() || [],
                            A: null,
                            a: null,
                            z: 0,
                            m: 0,
                            c: 0,
                            s: 0,
                            t: null,
                            i: o
                        }).a = i);
                        return e.children[0]
                    }(f);
                    if (Zu(s, o), s.parent.m = -s.z, Yu(s, a), r) Yu(f, c); else {
                        var h = f, p = f, g = f;
                        Yu(f, (function (n) {
                            n.x < h.x && (h = n), n.x > p.x && (p = n), n.depth > g.depth && (g = n)
                        }));
                        var v = t(h, p) / 2 - h.x, d = e[0] / (p.x + t(p, h) / 2 + v), y = e[1] / (g.depth || 1);
                        Yu(f, (function (n) {
                            n.x = (n.x + v) * d, n.y = n.depth * y
                        }))
                    }
                    return l
                }

                function o(n) {
                    var e = n.children, r = n.parent.children, i = n.i ? r[n.i - 1] : null;
                    if (e.length) {
                        !function (n) {
                            var t, e = 0, r = 0, i = n.children, u = i.length;
                            for (; --u >= 0;) (t = i[u]).z += e, t.m += e, e += t.s + (r += t.c)
                        }(n);
                        var u = (e[0].z + e[e.length - 1].z) / 2;
                        i ? (n.z = i.z + t(n._, i._), n.m = n.z - u) : n.z = u
                    } else i && (n.z = i.z + t(n._, i._));
                    n.parent.A = function (n, e, r) {
                        if (e) {
                            for (var i, u = n, o = n, a = e, c = u.parent.children[0], l = u.m, f = o.m, s = a.m, h = c.m; a = Mo(a), u = bo(u), a && u;) c = bo(c), (o = Mo(o)).a = n, (i = a.z + s - u.z - l + t(a._, u._)) > 0 && (xo(wo(a, n, r), n, i), l += i, f += i), s += a.m, l += u.m, h += c.m, f += o.m;
                            a && !Mo(o) && (o.t = a, o.m += s - f), u && !bo(c) && (c.t = u, c.m += l - h, r = n)
                        }
                        return r
                    }(n, i, n.parent.A || r[0])
                }

                function a(n) {
                    n._.x = n.z + n.parent.m, n.m += n.parent.m
                }

                function c(n) {
                    n.x *= e[0], n.y = n.depth * e[1]
                }

                return i.separation = function (n) {
                    return arguments.length ? (t = n, i) : t
                }, i.size = function (n) {
                    return arguments.length ? (r = null == (e = n) ? c : null, i) : r ? null : e
                }, i.nodeSize = function (n) {
                    return arguments.length ? (r = null == (e = n) ? null : c, i) : r ? e : null
                }, Iu(i, n)
            }, u.layout.cluster = function () {
                var n = u.layout.hierarchy().sort(null).value(null), t = mo, e = [1, 1], r = !1;

                function i(i, o) {
                    var a, c = n.call(this, i, o), l = c[0], f = 0;
                    Zu(l, (function (n) {
                        var e = n.children;
                        e && e.length ? (n.x = function (n) {
                            return n.reduce((function (n, t) {
                                return n + t.x
                            }), 0) / n.length
                        }(e), n.y = function (n) {
                            return 1 + u.max(n, (function (n) {
                                return n.y
                            }))
                        }(e)) : (n.x = a ? f += t(n, a) : 0, n.y = 0, a = n)
                    }));
                    var s = function n(t) {
                        var e = t.children;
                        return e && e.length ? n(e[0]) : t
                    }(l), h = function n(t) {
                        var e, r = t.children;
                        return r && (e = r.length) ? n(r[e - 1]) : t
                    }(l), p = s.x - t(s, h) / 2, g = h.x + t(h, s) / 2;
                    return Zu(l, r ? function (n) {
                        n.x = (n.x - l.x) * e[0], n.y = (l.y - n.y) * e[1]
                    } : function (n) {
                        n.x = (n.x - p) / (g - p) * e[0], n.y = (1 - (l.y ? n.y / l.y : 1)) * e[1]
                    }), c
                }

                return i.separation = function (n) {
                    return arguments.length ? (t = n, i) : t
                }, i.size = function (n) {
                    return arguments.length ? (r = null == (e = n), i) : r ? null : e
                }, i.nodeSize = function (n) {
                    return arguments.length ? (r = null != (e = n), i) : r ? e : null
                }, Iu(i, n)
            }, u.layout.treemap = function () {
                var n, t = u.layout.hierarchy(), e = Math.round, r = [1, 1], i = null, o = _o, a = !1, c = "squarify",
                    l = .5 * (1 + Math.sqrt(5));

                function f(n, t) {
                    for (var e, r, i = -1, u = n.length; ++i < u;) r = (e = n[i]).value * (t < 0 ? 0 : t), e.area = isNaN(r) || r <= 0 ? 0 : r
                }

                function s(n) {
                    var t = n.children;
                    if (t && t.length) {
                        var e, r, i, u = o(n), a = [], l = t.slice(), h = 1 / 0,
                            v = "slice" === c ? u.dx : "dice" === c ? u.dy : "slice-dice" === c ? 1 & n.depth ? u.dy : u.dx : Math.min(u.dx, u.dy);
                        for (f(l, u.dx * u.dy / n.value), a.area = 0; (i = l.length) > 0;) a.push(e = l[i - 1]), a.area += e.area, "squarify" !== c || (r = p(a, v)) <= h ? (l.pop(), h = r) : (a.area -= a.pop().area, g(a, v, u, !1), v = Math.min(u.dx, u.dy), a.length = a.area = 0, h = 1 / 0);
                        a.length && (g(a, v, u, !0), a.length = a.area = 0), t.forEach(s)
                    }
                }

                function h(n) {
                    var t = n.children;
                    if (t && t.length) {
                        var e, r = o(n), i = t.slice(), u = [];
                        for (f(i, r.dx * r.dy / n.value), u.area = 0; e = i.pop();) u.push(e), u.area += e.area, null != e.z && (g(u, e.z ? r.dx : r.dy, r, !i.length), u.length = u.area = 0);
                        t.forEach(h)
                    }
                }

                function p(n, t) {
                    for (var e, r = n.area, i = 0, u = 1 / 0, o = -1, a = n.length; ++o < a;) (e = n[o].area) && (e < u && (u = e), e > i && (i = e));
                    return t *= t, (r *= r) ? Math.max(t * i * l / r, r / (t * u * l)) : 1 / 0
                }

                function g(n, t, r, i) {
                    var u, o = -1, a = n.length, c = r.x, l = r.y, f = t ? e(n.area / t) : 0;
                    if (t == r.dx) {
                        for ((i || f > r.dy) && (f = r.dy); ++o < a;) (u = n[o]).x = c, u.y = l, u.dy = f, c += u.dx = Math.min(r.x + r.dx - c, f ? e(u.area / f) : 0);
                        u.z = !0, u.dx += r.x + r.dx - c, r.y += f, r.dy -= f
                    } else {
                        for ((i || f > r.dx) && (f = r.dx); ++o < a;) (u = n[o]).x = c, u.y = l, u.dx = f, l += u.dy = Math.min(r.y + r.dy - l, f ? e(u.area / f) : 0);
                        u.z = !1, u.dy += r.y + r.dy - l, r.x += f, r.dx -= f
                    }
                }

                function v(e) {
                    var i = n || t(e), u = i[0];
                    return u.x = u.y = 0, u.value ? (u.dx = r[0], u.dy = r[1]) : u.dx = u.dy = 0, n && t.revalue(u), f([u], u.dx * u.dy / u.value), (n ? h : s)(u), a && (n = i), i
                }

                return v.size = function (n) {
                    return arguments.length ? (r = n, v) : r
                }, v.padding = function (n) {
                    if (!arguments.length) return i;

                    function t(t) {
                        var e = n.call(v, t, t.depth);
                        return null == e ? _o(t) : jo(t, "number" == typeof e ? [e, e, e, e] : e)
                    }

                    function e(t) {
                        return jo(t, n)
                    }

                    var r;
                    return o = null == (i = n) ? _o : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, v
                }, v.round = function (n) {
                    return arguments.length ? (e = n ? Math.round : Number, v) : e != Number
                }, v.sticky = function (t) {
                    return arguments.length ? (a = t, n = null, v) : a
                }, v.ratio = function (n) {
                    return arguments.length ? (l = n, v) : l
                }, v.mode = function (n) {
                    return arguments.length ? (c = n + "", v) : c
                }, Iu(v, t)
            }, u.random = {
                normal: function (n, t) {
                    var e = arguments.length;
                    return e < 2 && (t = 1), e < 1 && (n = 0), function () {
                        var e, r, i;
                        do {
                            i = (e = 2 * Math.random() - 1) * e + (r = 2 * Math.random() - 1) * r
                        } while (!i || i > 1);
                        return n + t * e * Math.sqrt(-2 * Math.log(i) / i)
                    }
                }, logNormal: function () {
                    var n = u.random.normal.apply(u, arguments);
                    return function () {
                        return Math.exp(n())
                    }
                }, bates: function (n) {
                    var t = u.random.irwinHall(n);
                    return function () {
                        return t() / n
                    }
                }, irwinHall: function (n) {
                    return function () {
                        for (var t = 0, e = 0; e < n; e++) t += Math.random();
                        return t
                    }
                }
            }, u.scale = {};
            var Ao = {floor: R, ceil: R};

            function Co(n, t, e, r) {
                var i = [], o = [], a = 0, c = Math.min(n.length, t.length) - 1;
                for (n[c] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++a <= c;) i.push(e(n[a - 1], n[a])), o.push(r(t[a - 1], t[a]));
                return function (t) {
                    var e = u.bisect(n, t, 1, c) - 1;
                    return o[e](i[e](t))
                }
            }

            function zo(n, t) {
                return u.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
            }

            function qo(n, t) {
                return No(n, ko(Lo(n, t)[2])), No(n, ko(Lo(n, t)[2])), n
            }

            function Lo(n, t) {
                null == t && (t = 10);
                var e = Oo(n), r = e[1] - e[0], i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
                    u = t / r * i;
                return u <= .15 ? i *= 10 : u <= .35 ? i *= 5 : u <= .75 && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e
            }

            function To(n, t) {
                return u.range.apply(u, Lo(n, t))
            }

            function Ro(n, t, e) {
                var r = Lo(n, t);
                if (e) {
                    var i = Ut.exec(e);
                    if (i.shift(), "s" === i[8]) {
                        var o = u.formatPrefix(Math.max(w(r[0]), w(r[1])));
                        return i[7] || (i[7] = "." + Po(o.scale(r[2]))), i[8] = "f", e = u.format(i.join("")), function (n) {
                            return e(o.scale(n)) + o.symbol
                        }
                    }
                    i[7] || (i[7] = "." + function (n, t) {
                        var e = Po(t[2]);
                        return n in Do ? Math.abs(e - Po(Math.max(w(t[0]), w(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
                    }(i[8], r)), e = i.join("")
                } else e = ",." + Po(r[2]) + "f";
                return u.format(e)
            }

            u.scale.linear = function () {
                return function n(t, e, r, i) {
                    var u, o;

                    function a() {
                        var n = Math.min(t.length, e.length) > 2 ? Co : Eo, a = i ? zu : Cu;
                        return u = n(t, e, a, r), o = n(e, t, a, lu), c
                    }

                    function c(n) {
                        return u(n)
                    }

                    return c.invert = function (n) {
                        return o(n)
                    }, c.domain = function (n) {
                        return arguments.length ? (t = n.map(Number), a()) : t
                    }, c.range = function (n) {
                        return arguments.length ? (e = n, a()) : e
                    }, c.rangeRound = function (n) {
                        return c.range(n).interpolate(ju)
                    }, c.clamp = function (n) {
                        return arguments.length ? (i = n, a()) : i
                    }, c.interpolate = function (n) {
                        return arguments.length ? (r = n, a()) : r
                    }, c.ticks = function (n) {
                        return To(t, n)
                    }, c.tickFormat = function (n, e) {
                        return Ro(t, n, e)
                    }, c.nice = function (n) {
                        return qo(t, n), a()
                    }, c.copy = function () {
                        return n(t, e, r, i)
                    }, a()
                }([0, 1], [0, 1], lu, !1)
            };
            var Do = {s: 1, g: 1, p: 1, r: 1, e: 1};

            function Po(n) {
                return -Math.floor(Math.log(n) / Math.LN10 + .01)
            }

            u.scale.log = function () {
                return function n(t, e, r, i) {
                    function o(n) {
                        return (r ? Math.log(n < 0 ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(e)
                    }

                    function a(n) {
                        return r ? Math.pow(e, n) : -Math.pow(e, -n)
                    }

                    function c(n) {
                        return t(o(n))
                    }

                    return c.invert = function (n) {
                        return a(t.invert(n))
                    }, c.domain = function (n) {
                        return arguments.length ? (r = n[0] >= 0, t.domain((i = n.map(Number)).map(o)), c) : i
                    }, c.base = function (n) {
                        return arguments.length ? (e = +n, t.domain(i.map(o)), c) : e
                    }, c.nice = function () {
                        var n = No(i.map(o), r ? Math : Fo);
                        return t.domain(n), i = n.map(a), c
                    }, c.ticks = function () {
                        var n = Oo(i), t = [], u = n[0], c = n[1], l = Math.floor(o(u)), f = Math.ceil(o(c)),
                            s = e % 1 ? 2 : e;
                        if (isFinite(f - l)) {
                            if (r) {
                                for (; l < f; l++) for (var h = 1; h < s; h++) t.push(a(l) * h);
                                t.push(a(l))
                            } else for (t.push(a(l)); l++ < f;) for (h = s - 1; h > 0; h--) t.push(a(l) * h);
                            for (l = 0; t[l] < u; l++) ;
                            for (f = t.length; t[f - 1] > c; f--) ;
                            t = t.slice(l, f)
                        }
                        return t
                    }, c.tickFormat = function (n, t) {
                        if (!arguments.length) return Uo;
                        arguments.length < 2 ? t = Uo : "function" != typeof t && (t = u.format(t));
                        var r = Math.max(1, e * n / c.ticks().length);
                        return function (n) {
                            var i = n / a(Math.round(o(n)));
                            return i * e < e - .5 && (i *= e), i <= r ? t(n) : ""
                        }
                    }, c.copy = function () {
                        return n(t.copy(), e, r, i)
                    }, zo(c, t)
                }(u.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            };
            var Uo = u.format(".0e"), Fo = {
                floor: function (n) {
                    return -Math.ceil(-n)
                }, ceil: function (n) {
                    return -Math.floor(-n)
                }
            };

            function Ho(n) {
                return function (t) {
                    return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
                }
            }

            u.scale.pow = function () {
                return function n(t, e, r) {
                    var i = Ho(e), u = Ho(1 / e);

                    function o(n) {
                        return t(i(n))
                    }

                    return o.invert = function (n) {
                        return u(t.invert(n))
                    }, o.domain = function (n) {
                        return arguments.length ? (t.domain((r = n.map(Number)).map(i)), o) : r
                    }, o.ticks = function (n) {
                        return To(r, n)
                    }, o.tickFormat = function (n, t) {
                        return Ro(r, n, t)
                    }, o.nice = function (n) {
                        return o.domain(qo(r, n))
                    }, o.exponent = function (n) {
                        return arguments.length ? (i = Ho(e = n), u = Ho(1 / e), t.domain(r.map(i)), o) : e
                    }, o.copy = function () {
                        return n(t.copy(), e, r)
                    }, zo(o, t)
                }(u.scale.linear(), 1, [0, 1])
            }, u.scale.sqrt = function () {
                return u.scale.pow().exponent(.5)
            }, u.scale.ordinal = function () {
                return function n(t, e) {
                    var r, i, o;

                    function a(n) {
                        return i[((r.get(n) || ("range" === e.t ? r.set(n, t.push(n)) : NaN)) - 1) % i.length]
                    }

                    function c(n, e) {
                        return u.range(t.length).map((function (t) {
                            return n + e * t
                        }))
                    }

                    return a.domain = function (n) {
                        if (!arguments.length) return t;
                        t = [], r = new O;
                        for (var i, u = -1, o = n.length; ++u < o;) r.has(i = n[u]) || r.set(i, t.push(i));
                        return a[e.t].apply(a, e.a)
                    }, a.range = function (n) {
                        return arguments.length ? (i = n, o = 0, e = {t: "range", a: arguments}, a) : i
                    }, a.rangePoints = function (n, r) {
                        arguments.length < 2 && (r = 0);
                        var u = n[0], l = n[1], f = t.length < 2 ? (u = (u + l) / 2, 0) : (l - u) / (t.length - 1 + r);
                        return i = c(u + f * r / 2, f), o = 0, e = {t: "rangePoints", a: arguments}, a
                    }, a.rangeRoundPoints = function (n, r) {
                        arguments.length < 2 && (r = 0);
                        var u = n[0], l = n[1],
                            f = t.length < 2 ? (u = l = Math.round((u + l) / 2), 0) : (l - u) / (t.length - 1 + r) | 0;
                        return i = c(u + Math.round(f * r / 2 + (l - u - (t.length - 1 + r) * f) / 2), f), o = 0, e = {
                            t: "rangeRoundPoints",
                            a: arguments
                        }, a
                    }, a.rangeBands = function (n, r, u) {
                        arguments.length < 2 && (r = 0), arguments.length < 3 && (u = r);
                        var l = n[1] < n[0], f = n[l - 0], s = n[1 - l], h = (s - f) / (t.length - r + 2 * u);
                        return i = c(f + h * u, h), l && i.reverse(), o = h * (1 - r), e = {
                            t: "rangeBands",
                            a: arguments
                        }, a
                    }, a.rangeRoundBands = function (n, r, u) {
                        arguments.length < 2 && (r = 0), arguments.length < 3 && (u = r);
                        var l = n[1] < n[0], f = n[l - 0], s = n[1 - l],
                            h = Math.floor((s - f) / (t.length - r + 2 * u));
                        return i = c(f + Math.round((s - f - (t.length - r) * h) / 2), h), l && i.reverse(), o = Math.round(h * (1 - r)), e = {
                            t: "rangeRoundBands",
                            a: arguments
                        }, a
                    }, a.rangeBand = function () {
                        return o
                    }, a.rangeExtent = function () {
                        return Oo(e.a[0])
                    }, a.copy = function () {
                        return n(t, e)
                    }, a.domain(t)
                }([], {t: "range", a: [[]]})
            }, u.scale.category10 = function () {
                return u.scale.ordinal().range(Io)
            }, u.scale.category20 = function () {
                return u.scale.ordinal().range(Yo)
            }, u.scale.category20b = function () {
                return u.scale.ordinal().range(Zo)
            }, u.scale.category20c = function () {
                return u.scale.ordinal().range(Vo)
            };
            var Io = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(vt),
                Yo = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(vt),
                Zo = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(vt),
                Vo = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(vt);

            function Xo() {
                return 0
            }

            u.scale.quantile = function () {
                return function n(t, e) {
                    var r;

                    function i() {
                        var n = 0, i = e.length;
                        for (r = []; ++n < i;) r[n - 1] = u.quantile(t, n / i);
                        return o
                    }

                    function o(n) {
                        if (!isNaN(n = +n)) return e[u.bisect(r, n)]
                    }

                    return o.domain = function (n) {
                        return arguments.length ? (t = n.map(y).filter(m).sort(d), i()) : t
                    }, o.range = function (n) {
                        return arguments.length ? (e = n, i()) : e
                    }, o.quantiles = function () {
                        return r
                    }, o.invertExtent = function (n) {
                        return (n = e.indexOf(n)) < 0 ? [NaN, NaN] : [n > 0 ? r[n - 1] : t[0], n < r.length ? r[n] : t[t.length - 1]]
                    }, o.copy = function () {
                        return n(t, e)
                    }, i()
                }([], [])
            }, u.scale.quantize = function () {
                return function n(t, e, r) {
                    var i, u;

                    function o(n) {
                        return r[Math.max(0, Math.min(u, Math.floor(i * (n - t))))]
                    }

                    function a() {
                        return i = r.length / (e - t), u = r.length - 1, o
                    }

                    return o.domain = function (n) {
                        return arguments.length ? (t = +n[0], e = +n[n.length - 1], a()) : [t, e]
                    }, o.range = function (n) {
                        return arguments.length ? (r = n, a()) : r
                    }, o.invertExtent = function (n) {
                        return [n = (n = r.indexOf(n)) < 0 ? NaN : n / i + t, n + 1 / i]
                    }, o.copy = function () {
                        return n(t, e, r)
                    }, a()
                }(0, 1, [0, 1])
            }, u.scale.threshold = function () {
                return function n(t, e) {
                    function r(n) {
                        if (n <= n) return e[u.bisect(t, n)]
                    }

                    return r.domain = function (n) {
                        return arguments.length ? (t = n, r) : t
                    }, r.range = function (n) {
                        return arguments.length ? (e = n, r) : e
                    }, r.invertExtent = function (n) {
                        return n = e.indexOf(n), [t[n - 1], t[n]]
                    }, r.copy = function () {
                        return n(t, e)
                    }, r
                }([.5], [0, 1])
            }, u.scale.identity = function () {
                return function n(t) {
                    function e(n) {
                        return +n
                    }

                    return e.invert = e, e.domain = e.range = function (n) {
                        return arguments.length ? (t = n.map(e), e) : t
                    }, e.ticks = function (n) {
                        return To(t, n)
                    }, e.tickFormat = function (n, e) {
                        return Ro(t, n, e)
                    }, e.copy = function () {
                        return n(t)
                    }, e
                }([0, 1])
            }, u.svg = {}, u.svg.arc = function () {
                var n = Bo, t = Wo, e = Xo, r = $o, i = Jo, u = Go, o = Ko;

                function a() {
                    var a = Math.max(0, +n.apply(this, arguments)), l = Math.max(0, +t.apply(this, arguments)),
                        f = i.apply(this, arguments) - Rn, s = u.apply(this, arguments) - Rn, h = Math.abs(s - f),
                        p = f > s ? 0 : 1;
                    if (l < a && (g = l, l = a, a = g), h >= Tn) return c(l, p) + (a ? c(a, 1 - p) : "") + "Z";
                    var g, v, d, y, m, b, M, x, w, _, j, O, S = 0, E = 0, N = [];
                    if ((y = (+o.apply(this, arguments) || 0) / 2) && (d = r === $o ? Math.sqrt(a * a + l * l) : +r.apply(this, arguments), p || (E *= -1), l && (E = In(d / l * Math.sin(y))), a && (S = In(d / a * Math.sin(y)))), l) {
                        m = l * Math.cos(f + E), b = l * Math.sin(f + E), M = l * Math.cos(s - E), x = l * Math.sin(s - E);
                        var k = Math.abs(s - f - 2 * E) <= qn ? 0 : 1;
                        if (E && Qo(m, b, M, x) === p ^ k) {
                            var A = (f + s) / 2;
                            m = l * Math.cos(A), b = l * Math.sin(A), M = x = null
                        }
                    } else m = b = 0;
                    if (a) {
                        w = a * Math.cos(s - S), _ = a * Math.sin(s - S), j = a * Math.cos(f + S), O = a * Math.sin(f + S);
                        var C = Math.abs(f - s + 2 * S) <= qn ? 0 : 1;
                        if (S && Qo(w, _, j, O) === 1 - p ^ C) {
                            var z = (f + s) / 2;
                            w = a * Math.cos(z), _ = a * Math.sin(z), j = O = null
                        }
                    } else w = _ = 0;
                    if (h > Cn && (g = Math.min(Math.abs(l - a) / 2, +e.apply(this, arguments))) > .001) {
                        v = a < l ^ p ? 0 : 1;
                        var q = g, L = g;
                        if (h < qn) {
                            var T = null == j ? [w, _] : null == M ? [m, b] : mi([m, b], [j, O], [M, x], [w, _]),
                                R = m - T[0], D = b - T[1], P = M - T[0], U = x - T[1],
                                F = 1 / Math.sin(Math.acos((R * P + D * U) / (Math.sqrt(R * R + D * D) * Math.sqrt(P * P + U * U))) / 2),
                                H = Math.sqrt(T[0] * T[0] + T[1] * T[1]);
                            L = Math.min(g, (a - H) / (F - 1)), q = Math.min(g, (l - H) / (F + 1))
                        }
                        if (null != M) {
                            var I = na(null == j ? [w, _] : [j, O], [m, b], l, q, p), Y = na([M, x], [w, _], l, q, p);
                            g === q ? N.push("M", I[0], "A", q, ",", q, " 0 0,", v, " ", I[1], "A", l, ",", l, " 0 ", 1 - p ^ Qo(I[1][0], I[1][1], Y[1][0], Y[1][1]), ",", p, " ", Y[1], "A", q, ",", q, " 0 0,", v, " ", Y[0]) : N.push("M", I[0], "A", q, ",", q, " 0 1,", v, " ", Y[0])
                        } else N.push("M", m, ",", b);
                        if (null != j) {
                            var Z = na([m, b], [j, O], a, -L, p), V = na([w, _], null == M ? [m, b] : [M, x], a, -L, p);
                            g === L ? N.push("L", V[0], "A", L, ",", L, " 0 0,", v, " ", V[1], "A", a, ",", a, " 0 ", p ^ Qo(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - p, " ", Z[1], "A", L, ",", L, " 0 0,", v, " ", Z[0]) : N.push("L", V[0], "A", L, ",", L, " 0 0,", v, " ", Z[0])
                        } else N.push("L", w, ",", _)
                    } else N.push("M", m, ",", b), null != M && N.push("A", l, ",", l, " 0 ", k, ",", p, " ", M, ",", x), N.push("L", w, ",", _), null != j && N.push("A", a, ",", a, " 0 ", C, ",", 1 - p, " ", j, ",", O);
                    return N.push("Z"), N.join("")
                }

                function c(n, t) {
                    return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n
                }

                return a.innerRadius = function (t) {
                    return arguments.length ? (n = jt(t), a) : n
                }, a.outerRadius = function (n) {
                    return arguments.length ? (t = jt(n), a) : t
                }, a.cornerRadius = function (n) {
                    return arguments.length ? (e = jt(n), a) : e
                }, a.padRadius = function (n) {
                    return arguments.length ? (r = n == $o ? $o : jt(n), a) : r
                }, a.startAngle = function (n) {
                    return arguments.length ? (i = jt(n), a) : i
                }, a.endAngle = function (n) {
                    return arguments.length ? (u = jt(n), a) : u
                }, a.padAngle = function (n) {
                    return arguments.length ? (o = jt(n), a) : o
                }, a.centroid = function () {
                    var e = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2,
                        r = (+i.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Rn;
                    return [Math.cos(r) * e, Math.sin(r) * e]
                }, a
            };
            var $o = "auto";

            function Bo(n) {
                return n.innerRadius
            }

            function Wo(n) {
                return n.outerRadius
            }

            function Jo(n) {
                return n.startAngle
            }

            function Go(n) {
                return n.endAngle
            }

            function Ko(n) {
                return n && n.padAngle
            }

            function Qo(n, t, e, r) {
                return (n - e) * t - (t - r) * n > 0 ? 0 : 1
            }

            function na(n, t, e, r, i) {
                var u = n[0] - t[0], o = n[1] - t[1], a = (i ? r : -r) / Math.sqrt(u * u + o * o), c = a * o,
                    l = -a * u, f = n[0] + c, s = n[1] + l, h = t[0] + c, p = t[1] + l, g = (f + h) / 2,
                    v = (s + p) / 2, d = h - f, y = p - s, m = d * d + y * y, b = e - r, M = f * p - h * s,
                    x = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, b * b * m - M * M)), w = (M * y - d * x) / m,
                    _ = (-M * d - y * x) / m, j = (M * y + d * x) / m, O = (-M * d + y * x) / m, S = w - g, E = _ - v,
                    N = j - g, k = O - v;
                return S * S + E * E > N * N + k * k && (w = j, _ = O), [[w - c, _ - l], [w * e / b, _ * e / b]]
            }

            function ta(n) {
                var t = hi, e = pi, r = er, i = ra, u = i.key, o = .7;

                function a(u) {
                    var a, c = [], l = [], f = -1, s = u.length, h = jt(t), p = jt(e);

                    function g() {
                        c.push("M", i(n(l), o))
                    }

                    for (; ++f < s;) r.call(this, a = u[f], f) ? l.push([+h.call(this, a, f), +p.call(this, a, f)]) : l.length && (g(), l = []);
                    return l.length && g(), c.length ? c.join("") : null
                }

                return a.x = function (n) {
                    return arguments.length ? (t = n, a) : t
                }, a.y = function (n) {
                    return arguments.length ? (e = n, a) : e
                }, a.defined = function (n) {
                    return arguments.length ? (r = n, a) : r
                }, a.interpolate = function (n) {
                    return arguments.length ? (u = "function" == typeof n ? i = n : (i = ea.get(n) || ra).key, a) : u
                }, a.tension = function (n) {
                    return arguments.length ? (o = n, a) : o
                }, a
            }

            u.svg.line = function () {
                return ta(R)
            };
            var ea = u.map({
                linear: ra, "linear-closed": ia, step: function (n) {
                    var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]];
                    for (; ++t < e;) i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
                    e > 1 && i.push("H", r[0]);
                    return i.join("")
                }, "step-before": ua, "step-after": oa, basis: la, "basis-open": function (n) {
                    if (n.length < 4) return ra(n);
                    var t, e = [], r = -1, i = n.length, u = [0], o = [0];
                    for (; ++r < 3;) t = n[r], u.push(t[0]), o.push(t[1]);
                    e.push(fa(pa, u) + "," + fa(pa, o)), --r;
                    for (; ++r < i;) t = n[r], u.shift(), u.push(t[0]), o.shift(), o.push(t[1]), ga(e, u, o);
                    return e.join("")
                }, "basis-closed": function (n) {
                    var t, e, r = -1, i = n.length, u = i + 4, o = [], a = [];
                    for (; ++r < 4;) e = n[r % i], o.push(e[0]), a.push(e[1]);
                    t = [fa(pa, o), ",", fa(pa, a)], --r;
                    for (; ++r < u;) e = n[r % i], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), ga(t, o, a);
                    return t.join("")
                }, bundle: function (n, t) {
                    var e = n.length - 1;
                    if (e) for (var r, i, u = n[0][0], o = n[0][1], a = n[e][0] - u, c = n[e][1] - o, l = -1; ++l <= e;) r = n[l], i = l / e, r[0] = t * r[0] + (1 - t) * (u + i * a), r[1] = t * r[1] + (1 - t) * (o + i * c);
                    return la(n)
                }, cardinal: function (n, t) {
                    return n.length < 3 ? ra(n) : n[0] + aa(n, ca(n, t))
                }, "cardinal-open": function (n, t) {
                    return n.length < 4 ? ra(n) : n[1] + aa(n.slice(1, -1), ca(n, t))
                }, "cardinal-closed": function (n, t) {
                    return n.length < 3 ? ia(n) : n[0] + aa((n.push(n[0]), n), ca([n[n.length - 2]].concat(n, [n[1]]), t))
                }, monotone: function (n) {
                    return n.length < 3 ? ra(n) : n[0] + aa(n, function (n) {
                        var t, e, r, i, u = [], o = function (n) {
                            var t = 0, e = n.length - 1, r = [], i = n[0], u = n[1], o = r[0] = va(i, u);
                            for (; ++t < e;) r[t] = (o + (o = va(i = u, u = n[t + 1]))) / 2;
                            return r[t] = o, r
                        }(n), a = -1, c = n.length - 1;
                        for (; ++a < c;) t = va(n[a], n[a + 1]), w(t) < Cn ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, (i = e * e + r * r) > 9 && (i = 3 * t / Math.sqrt(i), o[a] = i * e, o[a + 1] = i * r));
                        a = -1;
                        for (; ++a <= c;) i = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), u.push([i || 0, o[a] * i || 0]);
                        return u
                    }(n))
                }
            });

            function ra(n) {
                return n.length > 1 ? n.join("L") : n + "Z"
            }

            function ia(n) {
                return n.join("L") + "Z"
            }

            function ua(n) {
                for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) i.push("V", (r = n[t])[1], "H", r[0]);
                return i.join("")
            }

            function oa(n) {
                for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) i.push("H", (r = n[t])[0], "V", r[1]);
                return i.join("")
            }

            function aa(n, t) {
                if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return ra(n);
                var e = n.length != t.length, r = "", i = n[0], u = n[1], o = t[0], a = o, c = 1;
                if (e && (r += "Q" + (u[0] - 2 * o[0] / 3) + "," + (u[1] - 2 * o[1] / 3) + "," + u[0] + "," + u[1], i = n[1], c = 2), t.length > 1) {
                    a = t[1], u = n[c], c++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1];
                    for (var l = 2; l < t.length; l++, c++) u = n[c], a = t[l], r += "S" + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1]
                }
                if (e) {
                    var f = n[c];
                    r += "Q" + (u[0] + 2 * a[0] / 3) + "," + (u[1] + 2 * a[1] / 3) + "," + f[0] + "," + f[1]
                }
                return r
            }

            function ca(n, t) {
                for (var e, r = [], i = (1 - t) / 2, u = n[0], o = n[1], a = 1, c = n.length; ++a < c;) e = u, u = o, o = n[a], r.push([i * (o[0] - e[0]), i * (o[1] - e[1])]);
                return r
            }

            function la(n) {
                if (n.length < 3) return ra(n);
                var t = 1, e = n.length, r = n[0], i = r[0], u = r[1], o = [i, i, i, (r = n[1])[0]],
                    a = [u, u, u, r[1]], c = [i, ",", u, "L", fa(pa, o), ",", fa(pa, a)];
                for (n.push(n[e - 1]); ++t <= e;) r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), ga(c, o, a);
                return n.pop(), c.push("L", r), c.join("")
            }

            function fa(n, t) {
                return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
            }

            ea.forEach((function (n, t) {
                t.key = n, t.closed = /-closed$/.test(n)
            }));
            var sa = [0, 2 / 3, 1 / 3, 0], ha = [0, 1 / 3, 2 / 3, 0], pa = [0, 1 / 6, 2 / 3, 1 / 6];

            function ga(n, t, e) {
                n.push("C", fa(sa, t), ",", fa(sa, e), ",", fa(ha, t), ",", fa(ha, e), ",", fa(pa, t), ",", fa(pa, e))
            }

            function va(n, t) {
                return (t[1] - n[1]) / (t[0] - n[0])
            }

            function da(n) {
                for (var t, e, r, i = -1, u = n.length; ++i < u;) e = (t = n[i])[0], r = t[1] - Rn, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
                return n
            }

            function ya(n) {
                var t = hi, e = hi, r = 0, i = pi, u = er, o = ra, a = o.key, c = o, l = "L", f = .7;

                function s(a) {
                    var s, h, p, g = [], v = [], d = [], y = -1, m = a.length, b = jt(t), M = jt(r),
                        x = t === e ? function () {
                            return h
                        } : jt(e), w = r === i ? function () {
                            return p
                        } : jt(i);

                    function _() {
                        g.push("M", o(n(d), f), l, c(n(v.reverse()), f), "Z")
                    }

                    for (; ++y < m;) u.call(this, s = a[y], y) ? (v.push([h = +b.call(this, s, y), p = +M.call(this, s, y)]), d.push([+x.call(this, s, y), +w.call(this, s, y)])) : v.length && (_(), v = [], d = []);
                    return v.length && _(), g.length ? g.join("") : null
                }

                return s.x = function (n) {
                    return arguments.length ? (t = e = n, s) : e
                }, s.x0 = function (n) {
                    return arguments.length ? (t = n, s) : t
                }, s.x1 = function (n) {
                    return arguments.length ? (e = n, s) : e
                }, s.y = function (n) {
                    return arguments.length ? (r = i = n, s) : i
                }, s.y0 = function (n) {
                    return arguments.length ? (r = n, s) : r
                }, s.y1 = function (n) {
                    return arguments.length ? (i = n, s) : i
                }, s.defined = function (n) {
                    return arguments.length ? (u = n, s) : u
                }, s.interpolate = function (n) {
                    return arguments.length ? (a = "function" == typeof n ? o = n : (o = ea.get(n) || ra).key, c = o.reverse || o, l = o.closed ? "M" : "L", s) : a
                }, s.tension = function (n) {
                    return arguments.length ? (f = n, s) : f
                }, s
            }

            function ma(n) {
                return n.radius
            }

            function ba(n) {
                return [n.x, n.y]
            }

            function Ma(n) {
                return function () {
                    var t = n.apply(this, arguments), e = t[0], r = t[1] - Rn;
                    return [e * Math.cos(r), e * Math.sin(r)]
                }
            }

            function xa() {
                return 64
            }

            function wa() {
                return "circle"
            }

            function _a(n) {
                var t = Math.sqrt(n / qn);
                return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
            }

            u.svg.line.radial = function () {
                var n = ta(da);
                return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
            }, ua.reverse = oa, oa.reverse = ua, u.svg.area = function () {
                return ya(R)
            }, u.svg.area.radial = function () {
                var n = ya(da);
                return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
            }, u.svg.chord = function () {
                var n = Kr, t = Qr, e = ma, r = Jo, i = Go;

                function u(e, r) {
                    var i, u, l = o(this, n, e, r), f = o(this, t, e, r);
                    return "M" + l.p0 + a(l.r, l.p1, l.a1 - l.a0) + (u = f, (i = l).a0 == u.a0 && i.a1 == u.a1 ? c(l.r, l.p1, l.r, l.p0) : c(l.r, l.p1, f.r, f.p0) + a(f.r, f.p1, f.a1 - f.a0) + c(f.r, f.p1, l.r, l.p0)) + "Z"
                }

                function o(n, t, u, o) {
                    var a = t.call(n, u, o), c = e.call(n, a, o), l = r.call(n, a, o) - Rn, f = i.call(n, a, o) - Rn;
                    return {
                        r: c,
                        a0: l,
                        a1: f,
                        p0: [c * Math.cos(l), c * Math.sin(l)],
                        p1: [c * Math.cos(f), c * Math.sin(f)]
                    }
                }

                function a(n, t, e) {
                    return "A" + n + "," + n + " 0 " + +(e > qn) + ",1 " + t
                }

                function c(n, t, e, r) {
                    return "Q 0,0 " + r
                }

                return u.radius = function (n) {
                    return arguments.length ? (e = jt(n), u) : e
                }, u.source = function (t) {
                    return arguments.length ? (n = jt(t), u) : n
                }, u.target = function (n) {
                    return arguments.length ? (t = jt(n), u) : t
                }, u.startAngle = function (n) {
                    return arguments.length ? (r = jt(n), u) : r
                }, u.endAngle = function (n) {
                    return arguments.length ? (i = jt(n), u) : i
                }, u
            }, u.svg.diagonal = function () {
                var n = Kr, t = Qr, e = ba;

                function r(r, i) {
                    var u = n.call(this, r, i), o = t.call(this, r, i), a = (u.y + o.y) / 2,
                        c = [u, {x: u.x, y: a}, {x: o.x, y: a}, o];
                    return "M" + (c = c.map(e))[0] + "C" + c[1] + " " + c[2] + " " + c[3]
                }

                return r.source = function (t) {
                    return arguments.length ? (n = jt(t), r) : n
                }, r.target = function (n) {
                    return arguments.length ? (t = jt(n), r) : t
                }, r.projection = function (n) {
                    return arguments.length ? (e = n, r) : e
                }, r
            }, u.svg.diagonal.radial = function () {
                var n = u.svg.diagonal(), t = ba, e = n.projection;
                return n.projection = function (n) {
                    return arguments.length ? e(Ma(t = n)) : t
                }, n
            }, u.svg.symbol = function () {
                var n = wa, t = xa;

                function e(e, r) {
                    return (ja.get(n.call(this, e, r)) || _a)(t.call(this, e, r))
                }

                return e.type = function (t) {
                    return arguments.length ? (n = jt(t), e) : n
                }, e.size = function (n) {
                    return arguments.length ? (t = jt(n), e) : t
                }, e
            };
            var ja = u.map({
                circle: _a, cross: function (n) {
                    var t = Math.sqrt(n / 5) / 2;
                    return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
                }, diamond: function (n) {
                    var t = Math.sqrt(n / (2 * Sa)), e = t * Sa;
                    return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z"
                }, square: function (n) {
                    var t = Math.sqrt(n) / 2;
                    return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
                }, "triangle-down": function (n) {
                    var t = Math.sqrt(n / Oa), e = t * Oa / 2;
                    return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
                }, "triangle-up": function (n) {
                    var t = Math.sqrt(n / Oa), e = t * Oa / 2;
                    return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
                }
            });
            u.svg.symbolTypes = ja.keys();
            var Oa = Math.sqrt(3), Sa = Math.tan(30 * Dn);
            K.transition = function (n) {
                for (var t, e, r = Aa || ++qa, i = Ra(n), u = [], o = Ca || {
                    time: Date.now(),
                    ease: bu,
                    delay: 0,
                    duration: 250
                }, a = -1, c = this.length; ++a < c;) {
                    u.push(t = []);
                    for (var l = this[a], f = -1, s = l.length; ++f < s;) (e = l[f]) && Da(e, f, i, r, o), t.push(e)
                }
                return ka(u, i, r)
            }, K.interrupt = function (n) {
                return this.each(null == n ? Ea : Na(Ra(n)))
            };
            var Ea = Na(Ra());

            function Na(n) {
                return function () {
                    var t, e, r;
                    (t = this[n]) && (r = t[e = t.active]) && (r.timer.c = null, r.timer.t = NaN, --t.count ? delete t[e] : delete this[n], t.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index))
                }
            }

            function ka(n, t, e) {
                return $(n, za), n.namespace = t, n.id = e, n
            }

            var Aa, Ca, za = [], qa = 0;

            function La(n, t, e, r) {
                var i = n.id, u = n.namespace;
                return yn(n, "function" == typeof e ? function (n, o, a) {
                    n[u][i].tween.set(t, r(e.call(n, n.__data__, o, a)))
                } : (e = r(e), function (n) {
                    n[u][i].tween.set(t, e)
                }))
            }

            function Ta(n) {
                return null == n && (n = ""), function () {
                    this.textContent = n
                }
            }

            function Ra(n) {
                return null == n ? "__transition__" : "__transition_" + n + "__"
            }

            function Da(n, t, e, r, i) {
                var u, o, a, c, l, f = n[e] || (n[e] = {active: 0, count: 0}), s = f[r];

                function h(e) {
                    var i = f.active, h = f[i];
                    for (var g in h && (h.timer.c = null, h.timer.t = NaN, --f.count, delete f[i], h.event && h.event.interrupt.call(n, n.__data__, h.index)), f) if (+g < r) {
                        var v = f[g];
                        v.timer.c = null, v.timer.t = NaN, --f.count, delete f[g]
                    }
                    o.c = p, zt((function () {
                        return o.c && p(e || 1) && (o.c = null, o.t = NaN), 1
                    }), 0, u), f.active = r, s.event && s.event.start.call(n, n.__data__, t), l = [], s.tween.forEach((function (e, r) {
                        (r = r.call(n, n.__data__, t)) && l.push(r)
                    })), c = s.ease, a = s.duration
                }

                function p(i) {
                    for (var u = i / a, o = c(u), h = l.length; h > 0;) l[--h].call(n, o);
                    if (u >= 1) return s.event && s.event.end.call(n, n.__data__, t), --f.count ? delete f[r] : delete n[e], 1
                }

                s || (u = i.time, o = zt((function (n) {
                    var t = s.delay;
                    if (o.t = t + u, t <= n) return h(n - t);
                    o.c = h
                }), 0, u), s = f[r] = {
                    tween: new O,
                    time: u,
                    timer: o,
                    delay: i.delay,
                    duration: i.duration,
                    ease: i.ease,
                    index: t
                }, i = null, ++f.count)
            }

            za.call = K.call, za.empty = K.empty, za.node = K.node, za.size = K.size, u.transition = function (n, t) {
                return n && n.transition ? Aa ? n.transition(t) : n : u.selection().transition(n)
            }, u.transition.prototype = za, za.select = function (n) {
                var t, e, r, i = this.id, u = this.namespace, o = [];
                n = Q(n);
                for (var a = -1, c = this.length; ++a < c;) {
                    o.push(t = []);
                    for (var l = this[a], f = -1, s = l.length; ++f < s;) (r = l[f]) && (e = n.call(r, r.__data__, f, a)) ? ("__data__" in r && (e.__data__ = r.__data__), Da(e, f, u, i, r[u][i]), t.push(e)) : t.push(null)
                }
                return ka(o, u, i)
            }, za.selectAll = function (n) {
                var t, e, r, i, u, o = this.id, a = this.namespace, c = [];
                n = nn(n);
                for (var l = -1, f = this.length; ++l < f;) for (var s = this[l], h = -1, p = s.length; ++h < p;) if (r = s[h]) {
                    u = r[a][o], e = n.call(r, r.__data__, h, l), c.push(t = []);
                    for (var g = -1, v = e.length; ++g < v;) (i = e[g]) && Da(i, g, a, o, u), t.push(i)
                }
                return ka(c, a, o)
            }, za.filter = function (n) {
                var t, e, r = [];
                "function" != typeof n && (n = vn(n));
                for (var i = 0, u = this.length; i < u; i++) {
                    r.push(t = []);
                    for (var o, a = 0, c = (o = this[i]).length; a < c; a++) (e = o[a]) && n.call(e, e.__data__, a, i) && t.push(e)
                }
                return ka(r, this.namespace, this.id)
            }, za.tween = function (n, t) {
                var e = this.id, r = this.namespace;
                return arguments.length < 2 ? this.node()[r][e].tween.get(n) : yn(this, null == t ? function (t) {
                    t[r][e].tween.remove(n)
                } : function (i) {
                    i[r][e].tween.set(n, t)
                })
            }, za.attr = function (n, t) {
                if (arguments.length < 2) {
                    for (t in n) this.attr(t, n[t]);
                    return this
                }
                var e = "transform" == n ? Au : lu, r = u.ns.qualify(n);

                function i() {
                    this.removeAttribute(r)
                }

                function o() {
                    this.removeAttributeNS(r.space, r.local)
                }

                function a(n) {
                    return null == n ? i : (n += "", function () {
                        var t, i = this.getAttribute(r);
                        return i !== n && (t = e(i, n), function (n) {
                            this.setAttribute(r, t(n))
                        })
                    })
                }

                function c(n) {
                    return null == n ? o : (n += "", function () {
                        var t, i = this.getAttributeNS(r.space, r.local);
                        return i !== n && (t = e(i, n), function (n) {
                            this.setAttributeNS(r.space, r.local, t(n))
                        })
                    })
                }

                return La(this, "attr." + n, t, r.local ? c : a)
            }, za.attrTween = function (n, t) {
                var e = u.ns.qualify(n);
                return this.tween("attr." + n, e.local ? function (n, r) {
                    var i = t.call(this, n, r, this.getAttributeNS(e.space, e.local));
                    return i && function (n) {
                        this.setAttributeNS(e.space, e.local, i(n))
                    }
                } : function (n, r) {
                    var i = t.call(this, n, r, this.getAttribute(e));
                    return i && function (n) {
                        this.setAttribute(e, i(n))
                    }
                })
            }, za.style = function (n, t, e) {
                var r = arguments.length;
                if (r < 3) {
                    if ("string" != typeof n) {
                        for (e in r < 2 && (t = ""), n) this.style(e, n[e], t);
                        return this
                    }
                    e = ""
                }

                function i() {
                    this.style.removeProperty(n)
                }

                function u(t) {
                    return null == t ? i : (t += "", function () {
                        var r, i = f(this).getComputedStyle(this, null).getPropertyValue(n);
                        return i !== t && (r = lu(i, t), function (t) {
                            this.style.setProperty(n, r(t), e)
                        })
                    })
                }

                return La(this, "style." + n, t, u)
            }, za.styleTween = function (n, t, e) {
                function r(r, i) {
                    var u = t.call(this, r, i, f(this).getComputedStyle(this, null).getPropertyValue(n));
                    return u && function (t) {
                        this.style.setProperty(n, u(t), e)
                    }
                }

                return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
            }, za.text = function (n) {
                return La(this, "text", n, Ta)
            }, za.remove = function () {
                var n = this.namespace;
                return this.each("end.transition", (function () {
                    var t;
                    this[n].count < 2 && (t = this.parentNode) && t.removeChild(this)
                }))
            }, za.ease = function (n) {
                var t = this.id, e = this.namespace;
                return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = u.ease.apply(u, arguments)), yn(this, (function (r) {
                    r[e][t].ease = n
                })))
            }, za.delay = function (n) {
                var t = this.id, e = this.namespace;
                return arguments.length < 1 ? this.node()[e][t].delay : yn(this, "function" == typeof n ? function (r, i, u) {
                    r[e][t].delay = +n.call(r, r.__data__, i, u)
                } : (n = +n, function (r) {
                    r[e][t].delay = n
                }))
            }, za.duration = function (n) {
                var t = this.id, e = this.namespace;
                return arguments.length < 1 ? this.node()[e][t].duration : yn(this, "function" == typeof n ? function (r, i, u) {
                    r[e][t].duration = Math.max(1, n.call(r, r.__data__, i, u))
                } : (n = Math.max(1, n), function (r) {
                    r[e][t].duration = n
                }))
            }, za.each = function (n, t) {
                var e = this.id, r = this.namespace;
                if (arguments.length < 2) {
                    var i = Ca, o = Aa;
                    try {
                        Aa = e, yn(this, (function (t, i, u) {
                            Ca = t[r][e], n.call(t, t.__data__, i, u)
                        }))
                    } finally {
                        Ca = i, Aa = o
                    }
                } else yn(this, (function (i) {
                    var o = i[r][e];
                    (o.event || (o.event = u.dispatch("start", "end", "interrupt"))).on(n, t)
                }));
                return this
            }, za.transition = function () {
                for (var n, t, e, r = this.id, i = ++qa, u = this.namespace, o = [], a = 0, c = this.length; a < c; a++) {
                    o.push(n = []);
                    for (var l, f = 0, s = (l = this[a]).length; f < s; f++) (t = l[f]) && Da(t, f, u, i, {
                        time: (e = t[u][r]).time,
                        ease: e.ease,
                        delay: e.delay + e.duration,
                        duration: e.duration
                    }), n.push(t)
                }
                return ka(o, u, i)
            }, u.svg.axis = function () {
                var n, t = u.scale.linear(), e = Pa, r = 6, i = 6, o = 3, c = [10], l = null;

                function f(a) {
                    a.each((function () {
                        var a, f = u.select(this), s = this.__chart__ || t, h = this.__chart__ = t.copy(),
                            p = null == l ? h.ticks ? h.ticks.apply(h, c) : h.domain() : l,
                            g = null == n ? h.tickFormat ? h.tickFormat.apply(h, c) : R : n,
                            v = f.selectAll(".tick").data(p, h),
                            d = v.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Cn),
                            y = u.transition(v.exit()).style("opacity", Cn).remove(),
                            m = u.transition(v.order()).style("opacity", 1), b = Math.max(r, 0) + o, M = So(h),
                            x = f.selectAll(".domain").data([0]),
                            w = (x.enter().append("path").attr("class", "domain"), u.transition(x));
                        d.append("line"), d.append("text");
                        var _, j, O, S, E = d.select("line"), N = m.select("line"), k = v.select("text").text(g),
                            A = d.select("text"), C = m.select("text"), z = "top" === e || "left" === e ? -1 : 1;
                        if ("bottom" === e || "top" === e ? (a = Fa, _ = "x", O = "y", j = "x2", S = "y2", k.attr("dy", z < 0 ? "0em" : ".71em").style("text-anchor", "middle"), w.attr("d", "M" + M[0] + "," + z * i + "V0H" + M[1] + "V" + z * i)) : (a = Ha, _ = "y", O = "x", j = "y2", S = "x2", k.attr("dy", ".32em").style("text-anchor", z < 0 ? "end" : "start"), w.attr("d", "M" + z * i + "," + M[0] + "H0V" + M[1] + "H" + z * i)), E.attr(S, z * r), A.attr(O, z * b), N.attr(j, 0).attr(S, z * r), C.attr(_, 0).attr(O, z * b), h.rangeBand) {
                            var q = h, L = q.rangeBand() / 2;
                            s = h = function (n) {
                                return q(n) + L
                            }
                        } else s.rangeBand ? s = h : y.call(a, h, s);
                        d.call(a, s, h), m.call(a, h, h)
                    }))
                }

                return f.scale = function (n) {
                    return arguments.length ? (t = n, f) : t
                }, f.orient = function (n) {
                    return arguments.length ? (e = n in Ua ? n + "" : Pa, f) : e
                }, f.ticks = function () {
                    return arguments.length ? (c = a(arguments), f) : c
                }, f.tickValues = function (n) {
                    return arguments.length ? (l = n, f) : l
                }, f.tickFormat = function (t) {
                    return arguments.length ? (n = t, f) : n
                }, f.tickSize = function (n) {
                    var t = arguments.length;
                    return t ? (r = +n, i = +arguments[t - 1], f) : r
                }, f.innerTickSize = function (n) {
                    return arguments.length ? (r = +n, f) : r
                }, f.outerTickSize = function (n) {
                    return arguments.length ? (i = +n, f) : i
                }, f.tickPadding = function (n) {
                    return arguments.length ? (o = +n, f) : o
                }, f.tickSubdivide = function () {
                    return arguments.length && f
                }, f
            };
            var Pa = "bottom", Ua = {top: 1, right: 1, bottom: 1, left: 1};

            function Fa(n, t, e) {
                n.attr("transform", (function (n) {
                    var r = t(n);
                    return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"
                }))
            }

            function Ha(n, t, e) {
                n.attr("transform", (function (n) {
                    var r = t(n);
                    return "translate(0," + (isFinite(r) ? r : e(n)) + ")"
                }))
            }

            u.svg.brush = function () {
                var n, t, e = V(h, "brushstart", "brush", "brushend"), r = null, i = null, o = [0, 0], a = [0, 0],
                    c = !0, l = !0, s = Ya[0];

                function h(n) {
                    n.each((function () {
                        var n = u.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", d).on("touchstart.brush", d),
                            t = n.selectAll(".background").data([0]);
                        t.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), n.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var e = n.selectAll(".resize").data(s, R);
                        e.exit().remove(), e.enter().append("g").attr("class", (function (n) {
                            return "resize " + n
                        })).style("cursor", (function (n) {
                            return Ia[n]
                        })).append("rect").attr("x", (function (n) {
                            return /[ew]$/.test(n) ? -3 : null
                        })).attr("y", (function (n) {
                            return /^[ns]/.test(n) ? -3 : null
                        })).attr("width", 6).attr("height", 6).style("visibility", "hidden"), e.style("display", h.empty() ? "none" : null);
                        var o, a = u.transition(n), c = u.transition(t);
                        r && (o = So(r), c.attr("x", o[0]).attr("width", o[1] - o[0]), g(a)), i && (o = So(i), c.attr("y", o[0]).attr("height", o[1] - o[0]), v(a)), p(a)
                    }))
                }

                function p(n) {
                    n.selectAll(".resize").attr("transform", (function (n) {
                        return "translate(" + o[+/e$/.test(n)] + "," + a[+/^s/.test(n)] + ")"
                    }))
                }

                function g(n) {
                    n.select(".extent").attr("x", o[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", o[1] - o[0])
                }

                function v(n) {
                    n.select(".extent").attr("y", a[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", a[1] - a[0])
                }

                function d() {
                    var s, d, y = this, m = u.select(u.event.target), b = e.of(y, arguments), M = u.select(y),
                        x = m.datum(), w = !/^(n|s)$/.test(x) && r, _ = !/^(e|w)$/.test(x) && i,
                        j = m.classed("extent"), O = En(y), S = u.mouse(y),
                        E = u.select(f(y)).on("keydown.brush", (function () {
                            32 == u.event.keyCode && (j || (s = null, S[0] -= o[1], S[1] -= a[1], j = 2), Y())
                        })).on("keyup.brush", (function () {
                            32 == u.event.keyCode && 2 == j && (S[0] += o[1], S[1] += a[1], j = 0, Y())
                        }));
                    if (u.event.changedTouches ? E.on("touchmove.brush", A).on("touchend.brush", z) : E.on("mousemove.brush", A).on("mouseup.brush", z), M.interrupt().selectAll("*").interrupt(), j) S[0] = o[0] - S[0], S[1] = a[0] - S[1]; else if (x) {
                        var N = +/w$/.test(x), k = +/^n/.test(x);
                        d = [o[1 - N] - S[0], a[1 - k] - S[1]], S[0] = o[N], S[1] = a[k]
                    } else u.event.altKey && (s = S.slice());

                    function A() {
                        var n = u.mouse(y), t = !1;
                        d && (n[0] += d[0], n[1] += d[1]), j || (u.event.altKey ? (s || (s = [(o[0] + o[1]) / 2, (a[0] + a[1]) / 2]), S[0] = o[+(n[0] < s[0])], S[1] = a[+(n[1] < s[1])]) : s = null), w && C(n, r, 0) && (g(M), t = !0), _ && C(n, i, 1) && (v(M), t = !0), t && (p(M), b({
                            type: "brush",
                            mode: j ? "move" : "resize"
                        }))
                    }

                    function C(e, r, i) {
                        var u, f, h = So(r), p = h[0], g = h[1], v = S[i], d = i ? a : o, y = d[1] - d[0];
                        if (j && (p -= v, g -= y + v), u = (i ? l : c) ? Math.max(p, Math.min(g, e[i])) : e[i], j ? f = (u += v) + y : (s && (v = Math.max(p, Math.min(g, 2 * s[i] - u))), v < u ? (f = u, u = v) : f = v), d[0] != u || d[1] != f) return i ? t = null : n = null, d[0] = u, d[1] = f, !0
                    }

                    function z() {
                        A(), M.style("pointer-events", "all").selectAll(".resize").style("display", h.empty() ? "none" : null), u.select("body").style("cursor", null), E.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), O(), b({type: "brushend"})
                    }

                    M.style("pointer-events", "none").selectAll(".resize").style("display", null), u.select("body").style("cursor", m.style("cursor")), b({type: "brushstart"}), A()
                }

                return h.event = function (r) {
                    r.each((function () {
                        var r = e.of(this, arguments), i = {x: o, y: a, i: n, j: t}, c = this.__chart__ || i;
                        this.__chart__ = i, Aa ? u.select(this).transition().each("start.brush", (function () {
                            n = c.i, t = c.j, o = c.x, a = c.y, r({type: "brushstart"})
                        })).tween("brush:brush", (function () {
                            var e = fu(o, i.x), u = fu(a, i.y);
                            return n = t = null, function (n) {
                                o = i.x = e(n), a = i.y = u(n), r({type: "brush", mode: "resize"})
                            }
                        })).each("end.brush", (function () {
                            n = i.i, t = i.j, r({type: "brush", mode: "resize"}), r({type: "brushend"})
                        })) : (r({type: "brushstart"}), r({type: "brush", mode: "resize"}), r({type: "brushend"}))
                    }))
                }, h.x = function (n) {
                    return arguments.length ? (s = Ya[!(r = n) << 1 | !i], h) : r
                }, h.y = function (n) {
                    return arguments.length ? (s = Ya[!r << 1 | !(i = n)], h) : i
                }, h.clamp = function (n) {
                    return arguments.length ? (r && i ? (c = !!n[0], l = !!n[1]) : r ? c = !!n : i && (l = !!n), h) : r && i ? [c, l] : r ? c : i ? l : null
                }, h.extent = function (e) {
                    var u, c, l, f, s;
                    return arguments.length ? (r && (u = e[0], c = e[1], i && (u = u[0], c = c[0]), n = [u, c], r.invert && (u = r(u), c = r(c)), c < u && (s = u, u = c, c = s), u == o[0] && c == o[1] || (o = [u, c])), i && (l = e[0], f = e[1], r && (l = l[1], f = f[1]), t = [l, f], i.invert && (l = i(l), f = i(f)), f < l && (s = l, l = f, f = s), l == a[0] && f == a[1] || (a = [l, f])), h) : (r && (n ? (u = n[0], c = n[1]) : (u = o[0], c = o[1], r.invert && (u = r.invert(u), c = r.invert(c)), c < u && (s = u, u = c, c = s))), i && (t ? (l = t[0], f = t[1]) : (l = a[0], f = a[1], i.invert && (l = i.invert(l), f = i.invert(f)), f < l && (s = l, l = f, f = s))), r && i ? [[u, l], [c, f]] : r ? [u, c] : i && [l, f])
                }, h.clear = function () {
                    return h.empty() || (o = [0, 0], a = [0, 0], n = t = null), h
                }, h.empty = function () {
                    return !!r && o[0] == o[1] || !!i && a[0] == a[1]
                }, u.rebind(h, e, "on")
            };
            var Ia = {
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                }, Ya = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
                Za = It.format = ye.timeFormat, Va = Za.utc, Xa = Va("%Y-%m-%dT%H:%M:%S.%LZ");

            function $a(n) {
                return n.toISOString()
            }

            function Ba(n, t, e) {
                function r(t) {
                    return n(t)
                }

                function i(n, e) {
                    var r = (n[1] - n[0]) / e, i = u.bisect(Ja, r);
                    return i == Ja.length ? [t.year, Lo(n.map((function (n) {
                        return n / 31536e6
                    })), e)[2]] : i ? t[r / Ja[i - 1] < Ja[i] / r ? i - 1 : i] : [Qa, Lo(n, e)[2]]
                }

                return r.invert = function (t) {
                    return Wa(n.invert(t))
                }, r.domain = function (t) {
                    return arguments.length ? (n.domain(t), r) : n.domain().map(Wa)
                }, r.nice = function (n, t) {
                    var e = r.domain(), u = Oo(e), o = null == n ? i(u, 10) : "number" == typeof n && i(u, n);

                    function a(e) {
                        return !isNaN(e) && !n.range(e, Wa(+e + 1), t).length
                    }

                    return o && (n = o[0], t = o[1]), r.domain(No(e, t > 1 ? {
                        floor: function (t) {
                            for (; a(t = n.floor(t));) t = Wa(t - 1);
                            return t
                        }, ceil: function (t) {
                            for (; a(t = n.ceil(t));) t = Wa(+t + 1);
                            return t
                        }
                    } : n))
                }, r.ticks = function (n, t) {
                    var e = Oo(r.domain()),
                        u = null == n ? i(e, 10) : "number" == typeof n ? i(e, n) : !n.range && [{range: n}, t];
                    return u && (n = u[0], t = u[1]), n.range(e[0], Wa(+e[1] + 1), t < 1 ? 1 : t)
                }, r.tickFormat = function () {
                    return e
                }, r.copy = function () {
                    return Ba(n.copy(), t, e)
                }, zo(r, n)
            }

            function Wa(n) {
                return new Date(n)
            }

            Za.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? $a : Xa, $a.parse = function (n) {
                var t = new Date(n);
                return isNaN(t) ? null : t
            }, $a.toString = Xa.toString, It.second = Xt((function (n) {
                return new Yt(1e3 * Math.floor(n / 1e3))
            }), (function (n, t) {
                n.setTime(n.getTime() + 1e3 * Math.floor(t))
            }), (function (n) {
                return n.getSeconds()
            })), It.seconds = It.second.range, It.seconds.utc = It.second.utc.range, It.minute = Xt((function (n) {
                return new Yt(6e4 * Math.floor(n / 6e4))
            }), (function (n, t) {
                n.setTime(n.getTime() + 6e4 * Math.floor(t))
            }), (function (n) {
                return n.getMinutes()
            })), It.minutes = It.minute.range, It.minutes.utc = It.minute.utc.range, It.hour = Xt((function (n) {
                var t = n.getTimezoneOffset() / 60;
                return new Yt(36e5 * (Math.floor(n / 36e5 - t) + t))
            }), (function (n, t) {
                n.setTime(n.getTime() + 36e5 * Math.floor(t))
            }), (function (n) {
                return n.getHours()
            })), It.hours = It.hour.range, It.hours.utc = It.hour.utc.range, It.month = Xt((function (n) {
                return (n = It.day(n)).setDate(1), n
            }), (function (n, t) {
                n.setMonth(n.getMonth() + t)
            }), (function (n) {
                return n.getMonth()
            })), It.months = It.month.range, It.months.utc = It.month.utc.range;
            var Ja = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                Ga = [[It.second, 1], [It.second, 5], [It.second, 15], [It.second, 30], [It.minute, 1], [It.minute, 5], [It.minute, 15], [It.minute, 30], [It.hour, 1], [It.hour, 3], [It.hour, 6], [It.hour, 12], [It.day, 1], [It.day, 2], [It.week, 1], [It.month, 1], [It.month, 3], [It.year, 1]],
                Ka = Za.multi([[".%L", function (n) {
                    return n.getMilliseconds()
                }], [":%S", function (n) {
                    return n.getSeconds()
                }], ["%I:%M", function (n) {
                    return n.getMinutes()
                }], ["%I %p", function (n) {
                    return n.getHours()
                }], ["%a %d", function (n) {
                    return n.getDay() && 1 != n.getDate()
                }], ["%b %d", function (n) {
                    return 1 != n.getDate()
                }], ["%B", function (n) {
                    return n.getMonth()
                }], ["%Y", er]]), Qa = {
                    range: function (n, t, e) {
                        return u.range(Math.ceil(n / e) * e, +t, e).map(Wa)
                    }, floor: R, ceil: R
                };
            Ga.year = It.year, It.scale = function () {
                return Ba(u.scale.linear(), Ga, Ka)
            };
            var nc = Ga.map((function (n) {
                return [n[0].utc, n[1]]
            })), tc = Va.multi([[".%L", function (n) {
                return n.getUTCMilliseconds()
            }], [":%S", function (n) {
                return n.getUTCSeconds()
            }], ["%I:%M", function (n) {
                return n.getUTCMinutes()
            }], ["%I %p", function (n) {
                return n.getUTCHours()
            }], ["%a %d", function (n) {
                return n.getUTCDay() && 1 != n.getUTCDate()
            }], ["%b %d", function (n) {
                return 1 != n.getUTCDate()
            }], ["%B", function (n) {
                return n.getUTCMonth()
            }], ["%Y", er]]);

            function ec(n) {
                return JSON.parse(n.responseText)
            }

            function rc(n) {
                var t = c.createRange();
                return t.selectNode(c.body), t.createContextualFragment(n.responseText)
            }

            nc.year = It.year.utc, It.scale.utc = function () {
                return Ba(u.scale.linear(), nc, tc)
            }, u.text = Ot((function (n) {
                return n.responseText
            })), u.json = function (n, t) {
                return St(n, "application/json", ec, t)
            }, u.html = function (n, t) {
                return St(n, "text/html", rc, t)
            }, u.xml = Ot((function (n) {
                return n.responseXML
            })), this.d3 = u, void 0 === (i = "function" == typeof (r = u) ? r.call(t, e, t, n) : r) || (n.exports = i)
        }()
    }, 157: function (n, t, e) {
        "use strict";

        function r(n) {
            return function (t) {
                var e = new i;
                for (var r in n) e[r] = n[r];
                return e.stream = t, e
            }
        }

        function i() {
        }

        e.d(t, "b", (function () {
            return r
        })), t.a = function (n) {
            return {stream: r(n)}
        }, i.prototype = {
            constructor: i, point: function (n, t) {
                this.stream.point(n, t)
            }, sphere: function () {
                this.stream.sphere()
            }, lineStart: function () {
                this.stream.lineStart()
            }, lineEnd: function () {
                this.stream.lineEnd()
            }, polygonStart: function () {
                this.stream.polygonStart()
            }, polygonEnd: function () {
                this.stream.polygonEnd()
            }
        }
    }, 158: function (n, t, e) {
        "use strict";
        e.d(t, "a", (function () {
            return h
        })), e.d(t, "b", (function () {
            return g
        }));
        var r, i, u, o, a, c = e(123), l = e(1), f = e(78), s = e(107), h = Object(c.a)(), p = Object(c.a)(), g = {
            point: f.a, lineStart: f.a, lineEnd: f.a, polygonStart: function () {
                h.reset(), g.lineStart = v, g.lineEnd = d
            }, polygonEnd: function () {
                var n = +h;
                p.add(n < 0 ? l.w + n : n), this.lineStart = this.lineEnd = this.point = f.a
            }, sphere: function () {
                p.add(l.w)
            }
        };

        function v() {
            g.point = y
        }

        function d() {
            m(r, i)
        }

        function y(n, t) {
            g.point = m, r = n, i = t, n *= l.r, t *= l.r, u = n, o = Object(l.g)(t = t / 2 + l.q), a = Object(l.t)(t)
        }

        function m(n, t) {
            n *= l.r, t = (t *= l.r) / 2 + l.q;
            var e = n - u, r = e >= 0 ? 1 : -1, i = r * e, c = Object(l.g)(t), f = Object(l.t)(t), s = a * f,
                p = o * c + s * Object(l.g)(i), g = s * r * Object(l.t)(i);
            h.add(Object(l.e)(g, p)), u = n, o = c, a = f
        }

        t.c = function (n) {
            return p.reset(), Object(s.a)(n, g), 2 * p
        }
    }, 165: function (n, t, e) {
        "use strict";
        e.d(t, "b", (function () {
            return o
        }));
        var r = e(204), i = e(1);

        function u(n, t) {
            return [Object(i.a)(n) > i.o ? n + Math.round(-n / i.w) * i.w : n, t]
        }

        function o(n, t, e) {
            return (n %= i.w) ? t || e ? Object(r.a)(c(n), l(t, e)) : c(n) : t || e ? l(t, e) : u
        }

        function a(n) {
            return function (t, e) {
                return [(t += n) > i.o ? t - i.w : t < -i.o ? t + i.w : t, e]
            }
        }

        function c(n) {
            var t = a(n);
            return t.invert = a(-n), t
        }

        function l(n, t) {
            var e = Object(i.g)(n), r = Object(i.t)(n), u = Object(i.g)(t), o = Object(i.t)(t);

            function a(n, t) {
                var a = Object(i.g)(t), c = Object(i.g)(n) * a, l = Object(i.t)(n) * a, f = Object(i.t)(t),
                    s = f * e + c * r;
                return [Object(i.e)(l * u - s * o, c * e - f * r), Object(i.c)(s * u + l * o)]
            }

            return a.invert = function (n, t) {
                var a = Object(i.g)(t), c = Object(i.g)(n) * a, l = Object(i.t)(n) * a, f = Object(i.t)(t),
                    s = f * u - l * o;
                return [Object(i.e)(l * u + f * o, c * e + s * r), Object(i.c)(s * e - c * r)]
            }, a
        }

        u.invert = u, t.a = function (n) {
            function t(t) {
                return (t = n(t[0] * i.r, t[1] * i.r))[0] *= i.h, t[1] *= i.h, t
            }

            return n = o(n[0] * i.r, n[1] * i.r, n.length > 2 ? n[2] * i.r : 0), t.invert = function (t) {
                return (t = n.invert(t[0] * i.r, t[1] * i.r))[0] *= i.h, t[1] *= i.h, t
            }, t
        }
    }, 166: function (n, t, e) {
        "use strict";
        var r = e(1), i = e(216), u = function (n, t, e, r, i, u) {
            var o, a = n[0], c = n[1], l = 0, f = 1, s = t[0] - a, h = t[1] - c;
            if (o = e - a, s || !(o > 0)) {
                if (o /= s, s < 0) {
                    if (o < l) return;
                    o < f && (f = o)
                } else if (s > 0) {
                    if (o > f) return;
                    o > l && (l = o)
                }
                if (o = i - a, s || !(o < 0)) {
                    if (o /= s, s < 0) {
                        if (o > f) return;
                        o > l && (l = o)
                    } else if (s > 0) {
                        if (o < l) return;
                        o < f && (f = o)
                    }
                    if (o = r - c, h || !(o > 0)) {
                        if (o /= h, h < 0) {
                            if (o < l) return;
                            o < f && (f = o)
                        } else if (h > 0) {
                            if (o > f) return;
                            o > l && (l = o)
                        }
                        if (o = u - c, h || !(o < 0)) {
                            if (o /= h, h < 0) {
                                if (o > f) return;
                                o > l && (l = o)
                            } else if (h > 0) {
                                if (o < l) return;
                                o < f && (f = o)
                            }
                            return l > 0 && (n[0] = a + l * s, n[1] = c + l * h), f < 1 && (t[0] = a + f * s, t[1] = c + f * h), !0
                        }
                    }
                }
            }
        }, o = e(218), a = e(731);
        e.d(t, "a", (function () {
            return f
        }));
        var c = 1e9, l = -c;

        function f(n, t, e, f) {
            function s(r, i) {
                return n <= r && r <= e && t <= i && i <= f
            }

            function h(r, i, u, o) {
                var a = 0, c = 0;
                if (null == r || (a = p(r, u)) !== (c = p(i, u)) || v(r, i) < 0 ^ u > 0) do {
                    o.point(0 === a || 3 === a ? n : e, a > 1 ? f : t)
                } while ((a = (a + u + 4) % 4) !== c); else o.point(i[0], i[1])
            }

            function p(i, u) {
                return Object(r.a)(i[0] - n) < r.i ? u > 0 ? 0 : 3 : Object(r.a)(i[0] - e) < r.i ? u > 0 ? 2 : 1 : Object(r.a)(i[1] - t) < r.i ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
            }

            function g(n, t) {
                return v(n.x, t.x)
            }

            function v(n, t) {
                var e = p(n, 1), r = p(t, 1);
                return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
            }

            return function (r) {
                var p, v, d, y, m, b, M, x, w, _, j, O = r, S = Object(i.a)(), E = {
                    point: N, lineStart: function () {
                        E.point = k, v && v.push(d = []);
                        _ = !0, w = !1, M = x = NaN
                    }, lineEnd: function () {
                        p && (k(y, m), b && w && S.rejoin(), p.push(S.result()));
                        E.point = N, w && O.lineEnd()
                    }, polygonStart: function () {
                        O = S, p = [], v = [], j = !0
                    }, polygonEnd: function () {
                        var t = function () {
                            for (var t = 0, e = 0, r = v.length; e < r; ++e) for (var i, u, o = v[e], a = 1, c = o.length, l = o[0], s = l[0], h = l[1]; a < c; ++a) i = s, u = h, l = o[a], s = l[0], h = l[1], u <= f ? h > f && (s - i) * (f - u) > (h - u) * (n - i) && ++t : h <= f && (s - i) * (f - u) < (h - u) * (n - i) && --t;
                            return t
                        }(), e = j && t, i = (p = Object(a.a)(p)).length;
                        (e || i) && (r.polygonStart(), e && (r.lineStart(), h(null, null, 1, r), r.lineEnd()), i && Object(o.a)(p, g, t, h, r), r.polygonEnd());
                        O = r, p = v = d = null
                    }
                };

                function N(n, t) {
                    s(n, t) && O.point(n, t)
                }

                function k(r, i) {
                    var o = s(r, i);
                    if (v && d.push([r, i]), _) y = r, m = i, b = o, _ = !1, o && (O.lineStart(), O.point(r, i)); else if (o && w) O.point(r, i); else {
                        var a = [M = Math.max(l, Math.min(c, M)), x = Math.max(l, Math.min(c, x))],
                            h = [r = Math.max(l, Math.min(c, r)), i = Math.max(l, Math.min(c, i))];
                        u(a, h, n, t, e, f) ? (w || (O.lineStart(), O.point(a[0], a[1])), O.point(h[0], h[1]), o || O.lineEnd(), j = !1) : o && (O.lineStart(), O.point(r, i), j = !1)
                    }
                    M = r, x = i, w = o
                }

                return E
            }
        }
    }, 188: function (n, t, e) {
        "use strict";
        var r = e(1);
        t.a = function (n, t) {
            return Object(r.a)(n[0] - t[0]) < r.i && Object(r.a)(n[1] - t[1]) < r.i
        }
    }, 189: function (n, t, e) {
        "use strict";
        var r = e(78), i = 1 / 0, u = i, o = -i, a = o, c = {
            point: function (n, t) {
                n < i && (i = n);
                n > o && (o = n);
                t < u && (u = t);
                t > a && (a = t)
            }, lineStart: r.a, lineEnd: r.a, polygonStart: r.a, polygonEnd: r.a, result: function () {
                var n = [[i, u], [o, a]];
                return o = a = -(u = i = 1 / 0), n
            }
        };
        t.a = c
    }, 198: function (n, t, e) {
        "use strict";
        e.d(t, "b", (function () {
            return i
        }));
        var r = e(92);

        function i(n, t) {
            return [n, t]
        }

        i.invert = i, t.a = function () {
            return Object(r.a)(i).scale(152.63)
        }
    }, 201: function (n, t, e) {
        "use strict";
        var r = e(215), i = e(1);
        t.a = Object(r.a)((function () {
            return !0
        }), (function (n) {
            var t, e = NaN, r = NaN, u = NaN;
            return {
                lineStart: function () {
                    n.lineStart(), t = 1
                }, point: function (o, a) {
                    var c = o > 0 ? i.o : -i.o, l = Object(i.a)(o - e);
                    Object(i.a)(l - i.o) < i.i ? (n.point(e, r = (r + a) / 2 > 0 ? i.l : -i.l), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(c, r), n.point(o, r), t = 0) : u !== c && l >= i.o && (Object(i.a)(e - u) < i.i && (e -= u * i.i), Object(i.a)(o - c) < i.i && (o -= c * i.i), r = function (n, t, e, r) {
                        var u, o, a = Object(i.t)(n - e);
                        return Object(i.a)(a) > i.i ? Object(i.d)((Object(i.t)(t) * (o = Object(i.g)(r)) * Object(i.t)(e) - Object(i.t)(r) * (u = Object(i.g)(t)) * Object(i.t)(n)) / (u * o * a)) : (t + r) / 2
                    }(e, r, o, a), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(c, r), t = 0), n.point(e = o, r = a), u = c
                }, lineEnd: function () {
                    n.lineEnd(), e = r = NaN
                }, clean: function () {
                    return 2 - t
                }
            }
        }), (function (n, t, e, r) {
            var u;
            if (null == n) u = e * i.l, r.point(-i.o, u), r.point(0, u), r.point(i.o, u), r.point(i.o, 0), r.point(i.o, -u), r.point(0, -u), r.point(-i.o, -u), r.point(-i.o, 0), r.point(-i.o, u); else if (Object(i.a)(n[0] - t[0]) > i.i) {
                var o = n[0] < t[0] ? i.o : -i.o;
                u = e * o / 2, r.point(-o, u), r.point(0, u), r.point(o, u)
            } else r.point(t[0], t[1])
        }), [-i.o, -i.l])
    }, 204: function (n, t, e) {
        "use strict";
        t.a = function (n, t) {
            function e(e, r) {
                return e = n(e, r), t(e[0], e[1])
            }

            return n.invert && t.invert && (e.invert = function (e, r) {
                return (e = t.invert(e, r)) && n.invert(e[0], e[1])
            }), e
        }
    }, 212: function (n, t, e) {
        "use strict";
        var r = e(70), i = e(213), u = e(1), o = e(188), a = e(215);
        t.a = function (n) {
            var t = Object(u.g)(n), e = 6 * u.r, c = t > 0, l = Object(u.a)(t) > u.i;

            function f(n, e) {
                return Object(u.g)(n) * Object(u.g)(e) > t
            }

            function s(n, e, i) {
                var o = Object(r.a)(n), a = Object(r.a)(e), c = [1, 0, 0], l = Object(r.c)(o, a), f = Object(r.d)(l, l),
                    s = l[0], h = f - s * s;
                if (!h) return !i && n;
                var p = t * f / h, g = -t * s / h, v = Object(r.c)(c, l), d = Object(r.f)(c, p), y = Object(r.f)(l, g);
                Object(r.b)(d, y);
                var m = v, b = Object(r.d)(d, m), M = Object(r.d)(m, m), x = b * b - M * (Object(r.d)(d, d) - 1);
                if (!(x < 0)) {
                    var w = Object(u.u)(x), _ = Object(r.f)(m, (-b - w) / M);
                    if (Object(r.b)(_, d), _ = Object(r.g)(_), !i) return _;
                    var j, O = n[0], S = e[0], E = n[1], N = e[1];
                    S < O && (j = O, O = S, S = j);
                    var k = S - O, A = Object(u.a)(k - u.o) < u.i;
                    if (!A && N < E && (j = E, E = N, N = j), A || k < u.i ? A ? E + N > 0 ^ _[1] < (Object(u.a)(_[0] - O) < u.i ? E : N) : E <= _[1] && _[1] <= N : k > u.o ^ (O <= _[0] && _[0] <= S)) {
                        var C = Object(r.f)(m, (-b + w) / M);
                        return Object(r.b)(C, d), [_, Object(r.g)(C)]
                    }
                }
            }

            function h(t, e) {
                var r = c ? n : u.o - n, i = 0;
                return t < -r ? i |= 1 : t > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
            }

            return Object(a.a)(f, (function (n) {
                var t, e, r, i, a;
                return {
                    lineStart: function () {
                        i = r = !1, a = 1
                    }, point: function (p, g) {
                        var v, d = [p, g], y = f(p, g),
                            m = c ? y ? 0 : h(p, g) : y ? h(p + (p < 0 ? u.o : -u.o), g) : 0;
                        if (!t && (i = r = y) && n.lineStart(), y !== r && (!(v = s(t, d)) || Object(o.a)(t, v) || Object(o.a)(d, v)) && (d[0] += u.i, d[1] += u.i, y = f(d[0], d[1])), y !== r) a = 0, y ? (n.lineStart(), v = s(d, t), n.point(v[0], v[1])) : (v = s(t, d), n.point(v[0], v[1]), n.lineEnd()), t = v; else if (l && t && c ^ y) {
                            var b;
                            m & e || !(b = s(d, t, !0)) || (a = 0, c ? (n.lineStart(), n.point(b[0][0], b[0][1]), n.point(b[1][0], b[1][1]), n.lineEnd()) : (n.point(b[1][0], b[1][1]), n.lineEnd(), n.lineStart(), n.point(b[0][0], b[0][1])))
                        }
                        !y || t && Object(o.a)(t, d) || n.point(d[0], d[1]), t = d, r = y, e = m
                    }, lineEnd: function () {
                        r && n.lineEnd(), t = null
                    }, clean: function () {
                        return a | (i && r) << 1
                    }
                }
            }), (function (t, r, u, o) {
                Object(i.a)(o, n, e, u, t, r)
            }), c ? [0, -n] : [-u.o, n - u.o])
        }
    }, 213: function (n, t, e) {
        "use strict";
        var r = e(70), i = function (n) {
            return function () {
                return n
            }
        }, u = e(1), o = e(165);

        function a(n, t, e, i, o, a) {
            if (e) {
                var l = Object(u.g)(t), f = Object(u.t)(t), s = i * e;
                null == o ? (o = t + i * u.w, a = t - s / 2) : (o = c(l, o), a = c(l, a), (i > 0 ? o < a : o > a) && (o += i * u.w));
                for (var h, p = o; i > 0 ? p > a : p < a; p -= s) h = Object(r.g)([l, -f * Object(u.g)(p), -f * Object(u.t)(p)]), n.point(h[0], h[1])
            }
        }

        function c(n, t) {
            (t = Object(r.a)(t))[0] -= n, Object(r.e)(t);
            var e = Object(u.b)(-t[1]);
            return ((-t[2] < 0 ? -e : e) + u.w - u.i) % u.w
        }

        e.d(t, "a", (function () {
            return a
        }));
        t.b = function () {
            var n, t, e = i([0, 0]), r = i(90), c = i(6), l = {
                point: function (e, r) {
                    n.push(e = t(e, r)), e[0] *= u.h, e[1] *= u.h
                }
            };

            function f() {
                var i = e.apply(this, arguments), f = r.apply(this, arguments) * u.r,
                    s = c.apply(this, arguments) * u.r;
                return n = [], t = Object(o.b)(-i[0] * u.r, -i[1] * u.r, 0).invert, a(l, f, s, 1), i = {
                    type: "Polygon",
                    coordinates: [n]
                }, n = t = null, i
            }

            return f.center = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : i([+n[0], +n[1]]), f) : e
            }, f.radius = function (n) {
                return arguments.length ? (r = "function" == typeof n ? n : i(+n), f) : r
            }, f.precision = function (n) {
                return arguments.length ? (c = "function" == typeof n ? n : i(+n), f) : c
            }, f
        }
    }, 215: function (n, t, e) {
        "use strict";
        var r = e(216), i = e(218), u = e(1), o = e(217), a = e(731);

        function c(n) {
            return n.length > 1
        }

        function l(n, t) {
            return ((n = n.x)[0] < 0 ? n[1] - u.l - u.i : u.l - n[1]) - ((t = t.x)[0] < 0 ? t[1] - u.l - u.i : u.l - t[1])
        }

        t.a = function (n, t, e, u) {
            return function (f) {
                var s, h, p, g = t(f), v = Object(r.a)(), d = t(v), y = !1, m = {
                    point: b, lineStart: x, lineEnd: w, polygonStart: function () {
                        m.point = _, m.lineStart = j, m.lineEnd = O, h = [], s = []
                    }, polygonEnd: function () {
                        m.point = b, m.lineStart = x, m.lineEnd = w, h = Object(a.a)(h);
                        var n = Object(o.a)(s, u);
                        h.length ? (y || (f.polygonStart(), y = !0), Object(i.a)(h, l, n, e, f)) : n && (y || (f.polygonStart(), y = !0), f.lineStart(), e(null, null, 1, f), f.lineEnd()), y && (f.polygonEnd(), y = !1), h = s = null
                    }, sphere: function () {
                        f.polygonStart(), f.lineStart(), e(null, null, 1, f), f.lineEnd(), f.polygonEnd()
                    }
                };

                function b(t, e) {
                    n(t, e) && f.point(t, e)
                }

                function M(n, t) {
                    g.point(n, t)
                }

                function x() {
                    m.point = M, g.lineStart()
                }

                function w() {
                    m.point = b, g.lineEnd()
                }

                function _(n, t) {
                    p.push([n, t]), d.point(n, t)
                }

                function j() {
                    d.lineStart(), p = []
                }

                function O() {
                    _(p[0][0], p[0][1]), d.lineEnd();
                    var n, t, e, r, i = d.clean(), u = v.result(), o = u.length;
                    if (p.pop(), s.push(p), p = null, o) if (1 & i) {
                        if ((t = (e = u[0]).length - 1) > 0) {
                            for (y || (f.polygonStart(), y = !0), f.lineStart(), n = 0; n < t; ++n) f.point((r = e[n])[0], r[1]);
                            f.lineEnd()
                        }
                    } else o > 1 && 2 & i && u.push(u.pop().concat(u.shift())), h.push(u.filter(c))
                }

                return m
            }
        }
    }, 216: function (n, t, e) {
        "use strict";
        var r = e(78);
        t.a = function () {
            var n, t = [];
            return {
                point: function (t, e) {
                    n.push([t, e])
                }, lineStart: function () {
                    t.push(n = [])
                }, lineEnd: r.a, rejoin: function () {
                    t.length > 1 && t.push(t.pop().concat(t.shift()))
                }, result: function () {
                    var e = t;
                    return t = [], n = null, e
                }
            }
        }
    }, 217: function (n, t, e) {
        "use strict";
        var r = e(123), i = e(70), u = e(1), o = Object(r.a)();

        function a(n) {
            return Object(u.a)(n[0]) <= u.o ? n[0] : Object(u.s)(n[0]) * ((Object(u.a)(n[0]) + u.o) % u.w - u.o)
        }

        t.a = function (n, t) {
            var e = a(t), r = t[1], c = Object(u.t)(r), l = [Object(u.t)(e), -Object(u.g)(e), 0], f = 0, s = 0;
            o.reset(), 1 === c ? r = u.l + u.i : -1 === c && (r = -u.l - u.i);
            for (var h = 0, p = n.length; h < p; ++h) if (v = (g = n[h]).length) for (var g, v, d = g[v - 1], y = a(d), m = d[1] / 2 + u.q, b = Object(u.t)(m), M = Object(u.g)(m), x = 0; x < v; ++x, y = _, b = O, M = S, d = w) {
                var w = g[x], _ = a(w), j = w[1] / 2 + u.q, O = Object(u.t)(j), S = Object(u.g)(j), E = _ - y,
                    N = E >= 0 ? 1 : -1, k = N * E, A = k > u.o, C = b * O;
                if (o.add(Object(u.e)(C * N * Object(u.t)(k), M * S + C * Object(u.g)(k))), f += A ? E + N * u.w : E, A ^ y >= e ^ _ >= e) {
                    var z = Object(i.c)(Object(i.a)(d), Object(i.a)(w));
                    Object(i.e)(z);
                    var q = Object(i.c)(l, z);
                    Object(i.e)(q);
                    var L = (A ^ E >= 0 ? -1 : 1) * Object(u.c)(q[2]);
                    (r > L || r === L && (z[0] || z[1])) && (s += A ^ E >= 0 ? 1 : -1)
                }
            }
            return (f < -u.i || f < u.i && o < -u.i) ^ 1 & s
        }
    }, 218: function (n, t, e) {
        "use strict";
        var r = e(188);

        function i(n, t, e, r) {
            this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
        }

        function u(n) {
            if (t = n.length) {
                for (var t, e, r = 0, i = n[0]; ++r < t;) i.n = e = n[r], e.p = i, i = e;
                i.n = e = n[0], e.p = i
            }
        }

        t.a = function (n, t, e, o, a) {
            var c, l, f = [], s = [];
            if (n.forEach((function (n) {
                if (!((t = n.length - 1) <= 0)) {
                    var t, e, u = n[0], o = n[t];
                    if (Object(r.a)(u, o)) {
                        for (a.lineStart(), c = 0; c < t; ++c) a.point((u = n[c])[0], u[1]);
                        a.lineEnd()
                    } else f.push(e = new i(u, n, null, !0)), s.push(e.o = new i(u, null, e, !1)), f.push(e = new i(o, n, null, !1)), s.push(e.o = new i(o, null, e, !0))
                }
            })), f.length) {
                for (s.sort(t), u(f), u(s), c = 0, l = s.length; c < l; ++c) s[c].e = e = !e;
                for (var h, p, g = f[0]; ;) {
                    for (var v = g, d = !0; v.v;) if ((v = v.n) === g) return;
                    h = v.z, a.lineStart();
                    do {
                        if (v.v = v.o.v = !0, v.e) {
                            if (d) for (c = 0, l = h.length; c < l; ++c) a.point((p = h[c])[0], p[1]); else o(v.x, v.n.x, 1, a);
                            v = v.n
                        } else {
                            if (d) for (h = v.p.z, c = h.length - 1; c >= 0; --c) a.point((p = h[c])[0], p[1]); else o(v.x, v.p.x, -1, a);
                            v = v.p
                        }
                        h = (v = v.o).z, d = !d
                    } while (!v.v);
                    a.lineEnd()
                }
            }
        }
    }, 240: function (n, t, e) {
        "use strict";
        e.d(t, "a", (function () {
            return o
        }));
        var r = e(1), i = e(132), u = e(92), o = Object(i.b)((function (n) {
            return (n = Object(r.b)(n)) && n / Object(r.t)(n)
        }));
        o.invert = Object(i.a)((function (n) {
            return n
        })), t.b = function () {
            return Object(u.a)(o).scale(79.4188).clipAngle(179.999)
        }
    }, 241: function (n, t, e) {
        "use strict";
        e.d(t, "a", (function () {
            return o
        }));
        var r = e(1), i = e(132), u = e(92), o = Object(i.b)((function (n) {
            return Object(r.u)(2 / (1 + n))
        }));
        o.invert = Object(i.a)((function (n) {
            return 2 * Object(r.c)(n / 2)
        })), t.b = function () {
            return Object(u.a)(o).scale(124.75).clipAngle(179.999)
        }
    }, 242: function (n, t, e) {
        "use strict";
        e.d(t, "b", (function () {
            return o
        }));
        var r = e(1), i = e(132), u = e(92);

        function o(n, t) {
            return [Object(r.g)(t) * Object(r.t)(n), Object(r.t)(t)]
        }

        o.invert = Object(i.a)(r.c), t.a = function () {
            return Object(u.a)(o).scale(249.5).clipAngle(90 + r.i)
        }
    }, 243: function (n, t, e) {
        "use strict";
        e.d(t, "b", (function () {
            return o
        }));
        var r = e(1), i = e(132), u = e(92);

        function o(n, t) {
            var e = Object(r.g)(t), i = Object(r.g)(n) * e;
            return [e * Object(r.t)(n) / i, Object(r.t)(t) / i]
        }

        o.invert = Object(i.a)(r.d), t.a = function () {
            return Object(u.a)(o).scale(144.049).clipAngle(60)
        }
    }, 287: function (n, t, e) {
        "use strict";
        var r, i, u, o, a, c, l, f, s, h, p, g, v, d, y, m, b = e(1), M = e(78), x = e(107), w = {
            sphere: M.a, point: _, lineStart: O, lineEnd: N, polygonStart: function () {
                w.lineStart = k, w.lineEnd = A
            }, polygonEnd: function () {
                w.lineStart = O, w.lineEnd = N
            }
        };

        function _(n, t) {
            n *= b.r, t *= b.r;
            var e = Object(b.g)(t);
            j(e * Object(b.g)(n), e * Object(b.t)(n), Object(b.t)(t))
        }

        function j(n, t, e) {
            ++r, u += (n - u) / r, o += (t - o) / r, a += (e - a) / r
        }

        function O() {
            w.point = S
        }

        function S(n, t) {
            n *= b.r, t *= b.r;
            var e = Object(b.g)(t);
            d = e * Object(b.g)(n), y = e * Object(b.t)(n), m = Object(b.t)(t), w.point = E, j(d, y, m)
        }

        function E(n, t) {
            n *= b.r, t *= b.r;
            var e = Object(b.g)(t), r = e * Object(b.g)(n), u = e * Object(b.t)(n), o = Object(b.t)(t),
                a = Object(b.e)(Object(b.u)((a = y * o - m * u) * a + (a = m * r - d * o) * a + (a = d * u - y * r) * a), d * r + y * u + m * o);
            i += a, c += a * (d + (d = r)), l += a * (y + (y = u)), f += a * (m + (m = o)), j(d, y, m)
        }

        function N() {
            w.point = _
        }

        function k() {
            w.point = C
        }

        function A() {
            z(g, v), w.point = _
        }

        function C(n, t) {
            g = n, v = t, n *= b.r, t *= b.r, w.point = z;
            var e = Object(b.g)(t);
            d = e * Object(b.g)(n), y = e * Object(b.t)(n), m = Object(b.t)(t), j(d, y, m)
        }

        function z(n, t) {
            n *= b.r, t *= b.r;
            var e = Object(b.g)(t), r = e * Object(b.g)(n), u = e * Object(b.t)(n), o = Object(b.t)(t),
                a = y * o - m * u, g = m * r - d * o, v = d * u - y * r, M = Object(b.u)(a * a + g * g + v * v),
                x = Object(b.c)(M), w = M && -x / M;
            s += w * a, h += w * g, p += w * v, i += x, c += x * (d + (d = r)), l += x * (y + (y = u)), f += x * (m + (m = o)), j(d, y, m)
        }

        t.a = function (n) {
            r = i = u = o = a = c = l = f = s = h = p = 0, Object(x.a)(n, w);
            var t = s, e = h, g = p, v = t * t + e * e + g * g;
            return v < b.j && (t = c, e = l, g = f, i < b.i && (t = u, e = o, g = a), (v = t * t + e * e + g * g) < b.j) ? [NaN, NaN] : [Object(b.e)(e, t) * b.h, Object(b.c)(g / Object(b.u)(v)) * b.h]
        }
    }, 288: function (n, t, e) {
        "use strict";
        var r, i, u, o, a, c, l, f, s, h, p = e(123), g = e(158), v = e(70), d = e(1), y = e(107), m = Object(p.a)(),
            b = {
                point: M, lineStart: w, lineEnd: _, polygonStart: function () {
                    b.point = j, b.lineStart = O, b.lineEnd = S, m.reset(), g.b.polygonStart()
                }, polygonEnd: function () {
                    g.b.polygonEnd(), b.point = M, b.lineStart = w, b.lineEnd = _, g.a < 0 ? (r = -(u = 180), i = -(o = 90)) : m > d.i ? o = 90 : m < -d.i && (i = -90), h[0] = r, h[1] = u
                }, sphere: function () {
                    r = -(u = 180), i = -(o = 90)
                }
            };

        function M(n, t) {
            s.push(h = [r = n, u = n]), t < i && (i = t), t > o && (o = t)
        }

        function x(n, t) {
            var e = Object(v.a)([n * d.r, t * d.r]);
            if (f) {
                var c = Object(v.c)(f, e), l = [c[1], -c[0], 0], p = Object(v.c)(l, c);
                Object(v.e)(p), p = Object(v.g)(p);
                var g, y = n - a, m = y > 0 ? 1 : -1, b = p[0] * d.h * m, M = Object(d.a)(y) > 180;
                M ^ (m * a < b && b < m * n) ? (g = p[1] * d.h) > o && (o = g) : M ^ (m * a < (b = (b + 360) % 360 - 180) && b < m * n) ? (g = -p[1] * d.h) < i && (i = g) : (t < i && (i = t), t > o && (o = t)), M ? n < a ? E(r, n) > E(r, u) && (u = n) : E(n, u) > E(r, u) && (r = n) : u >= r ? (n < r && (r = n), n > u && (u = n)) : n > a ? E(r, n) > E(r, u) && (u = n) : E(n, u) > E(r, u) && (r = n)
            } else s.push(h = [r = n, u = n]);
            t < i && (i = t), t > o && (o = t), f = e, a = n
        }

        function w() {
            b.point = x
        }

        function _() {
            h[0] = r, h[1] = u, b.point = M, f = null
        }

        function j(n, t) {
            if (f) {
                var e = n - a;
                m.add(Object(d.a)(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
            } else c = n, l = t;
            g.b.point(n, t), x(n, t)
        }

        function O() {
            g.b.lineStart()
        }

        function S() {
            j(c, l), g.b.lineEnd(), Object(d.a)(m) > d.i && (r = -(u = 180)), h[0] = r, h[1] = u, f = null
        }

        function E(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }

        function N(n, t) {
            return n[0] - t[0]
        }

        function k(n, t) {
            return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t
        }

        t.a = function (n) {
            var t, e, a, c, l, f, p;
            if (o = u = -(r = i = 1 / 0), s = [], Object(y.a)(n, b), e = s.length) {
                for (s.sort(N), t = 1, l = [a = s[0]]; t < e; ++t) k(a, (c = s[t])[0]) || k(a, c[1]) ? (E(a[0], c[1]) > E(a[0], a[1]) && (a[1] = c[1]), E(c[0], a[1]) > E(a[0], a[1]) && (a[0] = c[0])) : l.push(a = c);
                for (f = -1 / 0, t = 0, a = l[e = l.length - 1]; t <= e; a = c, ++t) c = l[t], (p = E(a[1], c[0])) > f && (f = p, r = c[0], u = a[1])
            }
            return s = h = null, r === 1 / 0 || i === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[r, i], [u, o]]
        }
    }, 289: function (n, t, e) {
        "use strict";
        var r = e(1);
        t.a = function (n, t) {
            var e = n[0] * r.r, i = n[1] * r.r, u = t[0] * r.r, o = t[1] * r.r, a = Object(r.g)(i), c = Object(r.t)(i),
                l = Object(r.g)(o), f = Object(r.t)(o), s = a * Object(r.g)(e), h = a * Object(r.t)(e),
                p = l * Object(r.g)(u), g = l * Object(r.t)(u),
                v = 2 * Object(r.c)(Object(r.u)(Object(r.m)(o - i) + a * l * Object(r.m)(u - e))), d = Object(r.t)(v),
                y = v ? function (n) {
                    var t = Object(r.t)(n *= v) / d, e = Object(r.t)(v - n) / d, i = e * s + t * p, u = e * h + t * g,
                        o = e * c + t * f;
                    return [Object(r.e)(u, i) * r.h, Object(r.e)(o, Object(r.u)(i * i + u * u)) * r.h]
                } : function () {
                    return [e * r.h, i * r.h]
                };
            return y.distance = v, y
        }
    }, 36: function (n, t, e) {
        var r = e(16);
        n.exports = function (n) {
            return Object(r(n))
        }
    }, 70: function (n, t, e) {
        "use strict";
        e.d(t, "g", (function () {
            return i
        })), e.d(t, "a", (function () {
            return u
        })), e.d(t, "d", (function () {
            return o
        })), e.d(t, "c", (function () {
            return a
        })), e.d(t, "b", (function () {
            return c
        })), e.d(t, "f", (function () {
            return l
        })), e.d(t, "e", (function () {
            return f
        }));
        var r = e(1);

        function i(n) {
            return [Object(r.e)(n[1], n[0]), Object(r.c)(n[2])]
        }

        function u(n) {
            var t = n[0], e = n[1], i = Object(r.g)(e);
            return [i * Object(r.g)(t), i * Object(r.t)(t), Object(r.t)(e)]
        }

        function o(n, t) {
            return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
        }

        function a(n, t) {
            return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
        }

        function c(n, t) {
            n[0] += t[0], n[1] += t[1], n[2] += t[2]
        }

        function l(n, t) {
            return [n[0] * t, n[1] * t, n[2] * t]
        }

        function f(n) {
            var t = Object(r.u)(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
            n[0] /= t, n[1] /= t, n[2] /= t
        }
    }, 731: function (n, t, e) {
        "use strict";

        function r(n) {
            return Array.from(function* (n) {
                for (const t of n) yield* t
            }(n))
        }

        e.d(t, "a", (function () {
            return r
        }))
    }, 78: function (n, t, e) {
        "use strict";

        function r() {
        }

        e.d(t, "a", (function () {
            return r
        }))
    }, 92: function (n, t, e) {
        "use strict";
        var r = e(201), i = e(212), u = e(166), o = e(204), a = e(146), c = e(1), l = e(165), f = e(157), s = e(117),
            h = e(70), p = 16, g = Object(c.g)(30 * c.r), v = function (n, t) {
                return +t ? function (n, t) {
                    function e(r, i, u, o, a, l, f, s, h, p, v, d, y, m) {
                        var b = f - r, M = s - i, x = b * b + M * M;
                        if (x > 4 * t && y--) {
                            var w = o + p, _ = a + v, j = l + d, O = Object(c.u)(w * w + _ * _ + j * j),
                                S = Object(c.c)(j /= O),
                                E = Object(c.a)(Object(c.a)(j) - 1) < c.i || Object(c.a)(u - h) < c.i ? (u + h) / 2 : Object(c.e)(_, w),
                                N = n(E, S), k = N[0], A = N[1], C = k - r, z = A - i, q = M * C - b * z;
                            (q * q / x > t || Object(c.a)((b * C + M * z) / x - .5) > .3 || o * p + a * v + l * d < g) && (e(r, i, u, o, a, l, k, A, E, w /= O, _ /= O, j, y, m), m.point(k, A), e(k, A, E, w, _, j, f, s, h, p, v, d, y, m))
                        }
                    }

                    return function (t) {
                        var r, i, u, o, a, c, l, f, s, g, v, d, y = {
                            point: m, lineStart: b, lineEnd: x, polygonStart: function () {
                                t.polygonStart(), y.lineStart = w
                            }, polygonEnd: function () {
                                t.polygonEnd(), y.lineStart = b
                            }
                        };

                        function m(e, r) {
                            e = n(e, r), t.point(e[0], e[1])
                        }

                        function b() {
                            f = NaN, y.point = M, t.lineStart()
                        }

                        function M(r, i) {
                            var u = Object(h.a)([r, i]), o = n(r, i);
                            e(f, s, l, g, v, d, f = o[0], s = o[1], l = r, g = u[0], v = u[1], d = u[2], p, t), t.point(f, s)
                        }

                        function x() {
                            y.point = m, t.lineEnd()
                        }

                        function w() {
                            b(), y.point = _, y.lineEnd = j
                        }

                        function _(n, t) {
                            M(r = n, t), i = f, u = s, o = g, a = v, c = d, y.point = M
                        }

                        function j() {
                            e(f, s, l, g, v, d, i, u, r, o, a, c, p, t), y.lineEnd = x, x()
                        }

                        return y
                    }
                }(n, t) : function (n) {
                    return Object(f.b)({
                        point: function (t, e) {
                            t = n(t, e), this.stream.point(t[0], t[1])
                        }
                    })
                }(n)
            };
        e.d(t, "a", (function () {
            return b
        })), e.d(t, "b", (function () {
            return M
        }));
        var d = Object(f.b)({
            point: function (n, t) {
                this.stream.point(n * c.r, t * c.r)
            }
        });

        function y(n, t, e) {
            function r(r, i) {
                return [t + n * r, e - n * i]
            }

            return r.invert = function (r, i) {
                return [(r - t) / n, (e - i) / n]
            }, r
        }

        function m(n, t, e, r) {
            var i = Object(c.g)(r), u = Object(c.t)(r), o = i * n, a = u * n, l = i / n, f = u / n,
                s = (u * e - i * t) / n, h = (u * t + i * e) / n;

            function p(n, r) {
                return [o * n - a * r + t, e - a * n - o * r]
            }

            return p.invert = function (n, t) {
                return [l * n - f * t + s, h - f * n - l * t]
            }, p
        }

        function b(n) {
            return M((function () {
                return n
            }))()
        }

        function M(n) {
            var t, e, h, p, g, b, M, x, w, _, j = 150, O = 480, S = 250, E = 0, N = 0, k = 0, A = 0, C = 0, z = 0,
                q = null, L = r.a, T = null, R = a.a, D = .5;

            function P(n) {
                return x(n[0] * c.r, n[1] * c.r)
            }

            function U(n) {
                return (n = x.invert(n[0], n[1])) && [n[0] * c.h, n[1] * c.h]
            }

            function F() {
                var n = m(j, 0, 0, z).apply(null, t(E, N)), r = (z ? m : y)(j, O - n[0], S - n[1], z);
                return e = Object(l.b)(k, A, C), M = Object(o.a)(t, r), x = Object(o.a)(e, M), b = v(M, D), H()
            }

            function H() {
                return w = _ = null, P
            }

            return P.stream = function (n) {
                return w && _ === n ? w : w = d(function (n) {
                    return Object(f.b)({
                        point: function (t, e) {
                            var r = n(t, e);
                            return this.stream.point(r[0], r[1])
                        }
                    })
                }(e)(L(b(R(_ = n)))))
            }, P.preclip = function (n) {
                return arguments.length ? (L = n, q = void 0, H()) : L
            }, P.postclip = function (n) {
                return arguments.length ? (R = n, T = h = p = g = null, H()) : R
            }, P.clipAngle = function (n) {
                return arguments.length ? (L = +n ? Object(i.a)(q = n * c.r) : (q = null, r.a), H()) : q * c.h
            }, P.clipExtent = function (n) {
                return arguments.length ? (R = null == n ? (T = h = p = g = null, a.a) : Object(u.a)(T = +n[0][0], h = +n[0][1], p = +n[1][0], g = +n[1][1]), H()) : null == T ? null : [[T, h], [p, g]]
            }, P.scale = function (n) {
                return arguments.length ? (j = +n, F()) : j
            }, P.translate = function (n) {
                return arguments.length ? (O = +n[0], S = +n[1], F()) : [O, S]
            }, P.center = function (n) {
                return arguments.length ? (E = n[0] % 360 * c.r, N = n[1] % 360 * c.r, F()) : [E * c.h, N * c.h]
            }, P.rotate = function (n) {
                return arguments.length ? (k = n[0] % 360 * c.r, A = n[1] % 360 * c.r, C = n.length > 2 ? n[2] % 360 * c.r : 0, F()) : [k * c.h, A * c.h, C * c.h]
            }, P.angle = function (n) {
                return arguments.length ? (z = n % 360 * c.r, F()) : z * c.h
            }, P.precision = function (n) {
                return arguments.length ? (b = v(M, D = n * n), H()) : Object(c.u)(D)
            }, P.fitExtent = function (n, t) {
                return Object(s.a)(P, n, t)
            }, P.fitSize = function (n, t) {
                return Object(s.c)(P, n, t)
            }, P.fitWidth = function (n, t) {
                return Object(s.d)(P, n, t)
            }, P.fitHeight = function (n, t) {
                return Object(s.b)(P, n, t)
            }, function () {
                return t = n.apply(this, arguments), P.invert = t.invert && U, F()
            }
        }
    }
}]);