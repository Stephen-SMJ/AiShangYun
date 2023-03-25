(window.webpackJsonp = window.webpackJsonp || []).push([[126], {
    112: function (e, t, r) {
        (function (e) {
            /*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
            !function () {
                "use strict";
                var e = 0, t = {};

                function r(i) {
                    if (!i) throw new Error("No options passed to Waypoint constructor");
                    if (!i.element) throw new Error("No element option passed to Waypoint constructor");
                    if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
                    this.key = "waypoint-" + e, this.options = r.Adapter.extend({}, r.defaults, i), this.element = this.options.element, this.adapter = new r.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = r.Group.findOrCreate({
                        name: this.options.group,
                        axis: this.axis
                    }), this.context = r.Context.findOrCreateByElement(this.options.context), r.offsetAliases[this.options.offset] && (this.options.offset = r.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), t[this.key] = this, e += 1
                }

                r.prototype.queueTrigger = function (e) {
                    this.group.queueTrigger(this, e)
                }, r.prototype.trigger = function (e) {
                    this.enabled && this.callback && this.callback.apply(this, e)
                }, r.prototype.destroy = function () {
                    this.context.remove(this), this.group.remove(this), delete t[this.key]
                }, r.prototype.disable = function () {
                    return this.enabled = !1, this
                }, r.prototype.enable = function () {
                    return this.context.refresh(), this.enabled = !0, this
                }, r.prototype.next = function () {
                    return this.group.next(this)
                }, r.prototype.previous = function () {
                    return this.group.previous(this)
                }, r.invokeAll = function (e) {
                    var r = [];
                    for (var i in t) r.push(t[i]);
                    for (var o = 0, a = r.length; o < a; o++) r[o][e]()
                }, r.destroyAll = function () {
                    r.invokeAll("destroy")
                }, r.disableAll = function () {
                    r.invokeAll("disable")
                }, r.enableAll = function () {
                    for (var e in r.Context.refreshAll(), t) t[e].enabled = !0;
                    return this
                }, r.refreshAll = function () {
                    r.Context.refreshAll()
                }, r.viewportHeight = function () {
                    return window.innerHeight || document.documentElement.clientHeight
                }, r.viewportWidth = function () {
                    return document.documentElement.clientWidth
                }, r.adapters = [], r.defaults = {
                    context: window,
                    continuous: !0,
                    enabled: !0,
                    group: "default",
                    horizontal: !1,
                    offset: 0
                }, r.offsetAliases = {
                    "bottom-in-view": function () {
                        return this.context.innerHeight() - this.adapter.outerHeight()
                    }, "right-in-view": function () {
                        return this.context.innerWidth() - this.adapter.outerWidth()
                    }
                }, window.Waypoint = r
            }(), function () {
                "use strict";

                function e(e) {
                    window.setTimeout(e, 1e3 / 60)
                }

                var t = 0, r = {}, i = window.Waypoint, o = window.onload;

                function a(e) {
                    this.element = e, this.Adapter = i.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + t, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                        x: this.adapter.scrollLeft(),
                        y: this.adapter.scrollTop()
                    }, this.waypoints = {
                        vertical: {},
                        horizontal: {}
                    }, e.waypointContextKey = this.key, r[e.waypointContextKey] = this, t += 1, i.windowContext || (i.windowContext = !0, i.windowContext = new a(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
                }

                a.prototype.add = function (e) {
                    var t = e.options.horizontal ? "horizontal" : "vertical";
                    this.waypoints[t][e.key] = e, this.refresh()
                }, a.prototype.checkEmpty = function () {
                    var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                        t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                        i = this.element == this.element.window;
                    e && t && !i && (this.adapter.off(".waypoints"), delete r[this.key])
                }, a.prototype.createThrottledResizeHandler = function () {
                    var e = this;

                    function t() {
                        e.handleResize(), e.didResize = !1
                    }

                    this.adapter.on("resize.waypoints", (function () {
                        e.didResize || (e.didResize = !0, i.requestAnimationFrame(t))
                    }))
                }, a.prototype.createThrottledScrollHandler = function () {
                    var e = this;

                    function t() {
                        e.handleScroll(), e.didScroll = !1
                    }

                    this.adapter.on("scroll.waypoints", (function () {
                        e.didScroll && !i.isTouch || (e.didScroll = !0, i.requestAnimationFrame(t))
                    }))
                }, a.prototype.handleResize = function () {
                    i.Context.refreshAll()
                }, a.prototype.handleScroll = function () {
                    var e = {}, t = {
                        horizontal: {
                            newScroll: this.adapter.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.adapter.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    };
                    for (var r in t) {
                        var i = t[r], o = i.newScroll > i.oldScroll ? i.forward : i.backward;
                        for (var a in this.waypoints[r]) {
                            var n = this.waypoints[r][a];
                            if (null !== n.triggerPoint) {
                                var s = i.oldScroll < n.triggerPoint, h = i.newScroll >= n.triggerPoint;
                                (s && h || !s && !h) && (n.queueTrigger(o), e[n.group.id] = n.group)
                            }
                        }
                    }
                    for (var l in e) e[l].flushTriggers();
                    this.oldScroll = {x: t.horizontal.newScroll, y: t.vertical.newScroll}
                }, a.prototype.innerHeight = function () {
                    return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
                }, a.prototype.remove = function (e) {
                    delete this.waypoints[e.axis][e.key], this.checkEmpty()
                }, a.prototype.innerWidth = function () {
                    return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
                }, a.prototype.destroy = function () {
                    var e = [];
                    for (var t in this.waypoints) for (var r in this.waypoints[t]) e.push(this.waypoints[t][r]);
                    for (var i = 0, o = e.length; i < o; i++) e[i].destroy()
                }, a.prototype.refresh = function () {
                    var e, t = this.element == this.element.window, r = t ? void 0 : this.adapter.offset(), o = {};
                    for (var a in this.handleScroll(), e = {
                        horizontal: {
                            contextOffset: t ? 0 : r.left,
                            contextScroll: t ? 0 : this.oldScroll.x,
                            contextDimension: this.innerWidth(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: t ? 0 : r.top,
                            contextScroll: t ? 0 : this.oldScroll.y,
                            contextDimension: this.innerHeight(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }) {
                        var n = e[a];
                        for (var s in this.waypoints[a]) {
                            var h, l, c, p, u = this.waypoints[a][s], f = u.options.offset, d = u.triggerPoint, m = 0,
                                y = null == d;
                            u.element !== u.element.window && (m = u.adapter.offset()[n.offsetProp]), "function" == typeof f ? f = f.apply(u) : "string" == typeof f && (f = parseFloat(f), u.options.offset.indexOf("%") > -1 && (f = Math.ceil(n.contextDimension * f / 100))), h = n.contextScroll - n.contextOffset, u.triggerPoint = Math.floor(m + h - f), l = d < n.oldScroll, c = u.triggerPoint >= n.oldScroll, p = !l && !c, !y && (l && c) ? (u.queueTrigger(n.backward), o[u.group.id] = u.group) : !y && p ? (u.queueTrigger(n.forward), o[u.group.id] = u.group) : y && n.oldScroll >= u.triggerPoint && (u.queueTrigger(n.forward), o[u.group.id] = u.group)
                        }
                    }
                    return i.requestAnimationFrame((function () {
                        for (var e in o) o[e].flushTriggers()
                    })), this
                }, a.findOrCreateByElement = function (e) {
                    return a.findByElement(e) || new a(e)
                }, a.refreshAll = function () {
                    for (var e in r) r[e].refresh()
                }, a.findByElement = function (e) {
                    return r[e.waypointContextKey]
                }, window.onload = function () {
                    o && o(), a.refreshAll()
                }, i.requestAnimationFrame = function (t) {
                    (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
                }, i.Context = a
            }(), function () {
                "use strict";

                function e(e, t) {
                    return e.triggerPoint - t.triggerPoint
                }

                function t(e, t) {
                    return t.triggerPoint - e.triggerPoint
                }

                var r = {vertical: {}, horizontal: {}}, i = window.Waypoint;

                function o(e) {
                    this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), r[this.axis][this.name] = this
                }

                o.prototype.add = function (e) {
                    this.waypoints.push(e)
                }, o.prototype.clearTriggerQueues = function () {
                    this.triggerQueues = {up: [], down: [], left: [], right: []}
                }, o.prototype.flushTriggers = function () {
                    for (var r in this.triggerQueues) {
                        var i = this.triggerQueues[r], o = "up" === r || "left" === r;
                        i.sort(o ? t : e);
                        for (var a = 0, n = i.length; a < n; a += 1) {
                            var s = i[a];
                            (s.options.continuous || a === i.length - 1) && s.trigger([r])
                        }
                    }
                    this.clearTriggerQueues()
                }, o.prototype.next = function (t) {
                    this.waypoints.sort(e);
                    var r = i.Adapter.inArray(t, this.waypoints);
                    return r === this.waypoints.length - 1 ? null : this.waypoints[r + 1]
                }, o.prototype.previous = function (t) {
                    this.waypoints.sort(e);
                    var r = i.Adapter.inArray(t, this.waypoints);
                    return r ? this.waypoints[r - 1] : null
                }, o.prototype.queueTrigger = function (e, t) {
                    this.triggerQueues[t].push(e)
                }, o.prototype.remove = function (e) {
                    var t = i.Adapter.inArray(e, this.waypoints);
                    t > -1 && this.waypoints.splice(t, 1)
                }, o.prototype.first = function () {
                    return this.waypoints[0]
                }, o.prototype.last = function () {
                    return this.waypoints[this.waypoints.length - 1]
                }, o.findOrCreate = function (e) {
                    return r[e.axis][e.name] || new o(e)
                }, i.Group = o
            }(), function () {
                "use strict";
                var t = e, r = window.Waypoint;

                function i(e) {
                    this.$element = t(e)
                }

                t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function (e, t) {
                    i.prototype[t] = function () {
                        var e = Array.prototype.slice.call(arguments);
                        return this.$element[t].apply(this.$element, e)
                    }
                })), t.each(["extend", "inArray", "isEmptyObject"], (function (e, r) {
                    i[r] = t[r]
                })), r.adapters.push({name: "jquery", Adapter: i}), r.Adapter = i
            }(), function () {
                "use strict";
                var t = window.Waypoint;

                function r(e) {
                    return function () {
                        var r = [], i = arguments[0];
                        return e.isFunction(arguments[0]) && ((i = e.extend({}, arguments[1])).handler = arguments[0]), this.each((function () {
                            var o = e.extend({}, i, {element: this});
                            "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]), r.push(new t(o))
                        })), r
                    }
                }

                e && (e.fn.waypoint = r(e)), window.Zepto && (window.Zepto.fn.waypoint = r(window.Zepto))
            }()
        }).call(this, r(0))
    }, 15: function (e, t, r) {
        "use strict";
        r(41);
        t.a = function (e) {
            return "string" == typeof e && (e = e.split(".")), e.reduce((function (e, t) {
                return void 0 !== e && void 0 !== e[t] ? e[t] : void 0
            }), window.CFJS.config)
        }
    }, 48: function (e, t, r) {
        "use strict";
        r(71), r(61), r(41);
        var i, o = 3, a = 100;

        function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e >= o ? Promise.resolve({}) : new Promise((function (t, r) {
                var i = new XMLHttpRequest;
                i.open("GET", "/cdn-cgi/trace", !0), i.timeout = 4500, i.onload = function () {
                    if (200 === i.status || 0 === i.status) {
                        var e = i.responseText.split("\n");
                        t(function (e) {
                            for (var t = {}, r = 0; r < e.length - 1; r++) {
                                var i = e[r].split("=");
                                t[i[0].trim()] = i[1].trim()
                            }
                            return t
                        }(e))
                    } else r(Error(i.statusText))
                }, i.ontimeout = function () {
                    r(Error("Orange cloud timeout"))
                }, i.onerror = function () {
                    r(Error("Orange cloud network Error"))
                }, 0 === e ? i.send() : setTimeout((function () {
                    i.send()
                }), a)
            })).catch((function () {
                return n(e + 1)
            }))
        }

        t.a = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (e || void 0 === i) && (i = n()), i
        }
    }, 49: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return c
        })), r.d(t, "g", (function () {
            return p
        })), r.d(t, "e", (function () {
            return u
        })), r.d(t, "f", (function () {
            return f
        })), r.d(t, "b", (function () {
            return d
        })), r.d(t, "d", (function () {
            return m
        })), r.d(t, "c", (function () {
            return y
        }));
        r(130), r(41), r(80), r(113), r(71), r(61);
        var i, o = r(96), a = r(15), n = r(76), s = r(74), h = "cfmrk_", l = 864e5;

        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return i && !e || (i = window.location.href.indexOf("/lp/") > -1 && -1 === window.location.href.indexOf("/ddos-b/") ? Promise.resolve(!0) : Object(n.a)().then((function (e) {
                return !e || u(s.a)
            }))), i
        }

        function p(e) {
            f({name: h + e, value: "1"})
        }

        function u(e) {
            return "1" === d(h + e)
        }

        function f(e) {
            var t = e.name, r = e.value, i = e.path, o = void 0 === i ? "/" : i, n = e.domain,
                s = void 0 === n ? Object(a.a)("cookieDomain") : n, h = e.daysToExpire, c = void 0 === h ? 365 : h,
                p = new Date;
            p.setTime(p.getTime() + c * l);
            var u = p.toGMTString();
            document.cookie = "".concat(t, "=").concat(r, "; path=").concat(o, "; domain=").concat(s, "; expires=").concat(u)
        }

        function d(e) {
            if (document.cookie) return Object(o.parse)(document.cookie)[e]
        }

        function m() {
            var e = d("sparrow_id");
            if (e && e.length > 0) try {
                var t = JSON.parse(decodeURIComponent(e));
                if ("USER_ID" === t.identityType) return t.identity
            } catch (e) {
                console.log("ID Error: ".concat(e))
            }
            return ""
        }

        function y() {
            var e = d("_gaexp"), t = "";
            return e && (e = (e = (e = e.replace(/GAX[0-9].[0-9]./, "")).split("!")).map((function (e) {
                var t = e.split("."), r = t[0], i = t[t.length - 1];
                return "{'experimentId':'".concat(r, "','variant':").concat(i, "}")
            })), t = "[".concat(e.toString(), "]")), t
        }
    }, 715: function (e, t) {
        e.exports = {
            CF_DATACENTERS: [{lat: "38.95315", lon: "-77.44774"}, {lat: "33.640068", lon: "-84.44403"}, {
                lat: "36.1263",
                lon: "-86.6774"
            }, {lat: "42.3600825", lon: "-71.0588801"}, {lat: "41.976913", lon: "-87.90488"}, {
                lat: "32.89746",
                lon: "-97.036125"
            }, {lat: "39.8561", lon: "-104.6737"}, {lat: "42.2123985", lon: "-83.3534012"}, {
                lat: "29.7604",
                lon: "-95.3698"
            }, {lat: "30.4941006", lon: "-81.6878967"}, {lat: "39.2975998", lon: "-94.7138977"}, {
                lat: "36.1699",
                lon: "-115.1728"
            }, {lat: "33.943398", lon: "-118.40828"}, {lat: "26.1758003", lon: "-98.2386017"}, {
                lat: "25.796",
                lon: "-80.27824"
            }, {lat: "44.883015", lon: "-93.21092"}, {lat: "45.457714", lon: "-73.74991"}, {
                lat: "51.0486",
                lon: "-114.0708"
            }, {lat: "40.68907", lon: "-74.17876"}, {lat: "41.2523634", lon: "-95.99798829999999"}, {
                lat: "36.8618604",
                lon: "-76.23534159999997"
            }, {lat: "19.43333", lon: "-99.13333"}, {lat: "9.0647", lon: "-79.3844"}, {
                lat: "39.871898",
                lon: "-75.241096"
            }, {lat: "33.435036", lon: "-112.00016"}, {lat: "40.4915009", lon: "-80.2329025"}, {
                lat: "45.588997",
                lon: "-122.5929"
            }, {lat: "38.6954002", lon: "-121.5910034"}, {lat: "37.366737", lon: "-121.92638"}, {
                lat: "47.44384",
                lon: "-122.301735"
            }, {lat: "38.6270025", lon: "-90.19940419999999"}, {lat: "32.975500", lon: "-117.533203"}, {
                lat: "40.45",
                lon: "-111.533203"
            }, {lat: "32.18", lon: "-86.23"}, {lat: "39.76838", lon: "-86.15804"}, {
                lat: "30.3964996",
                lon: "-84.3503036"
            }, {lat: "35.1175", lon: "-89.971111"}, {lat: "27.975500", lon: "-82.533203"}, {
                lat: "43.681583",
                lon: "-79.61146"
            }, {lat: "52.1332", lon: "-106.6700"}, {lat: "49.1947", lon: "-123.17919"}, {
                lat: "49.893607",
                lon: "-97.14294009"
            }, {lat: "52.30907", lon: "4.763385"}, {lat: "37.93635", lon: "23.946486"}, {
                lat: "41.390205",
                lon: "2.154007"
            }, {lat: "50.89717", lon: "4.483602"}, {lat: "44.8184013", lon: "20.3090992"}, {
                lat: "52.553944",
                lon: "13.291722"
            }, {lat: "44.571156", lon: "26.077063"}, {lat: "47.4369011", lon: "19.2556"}, {
                lat: "55.62905",
                lon: "12.647601"
            }, {lat: "53.42728", lon: "-6.24357"}, {lat: "51.278328", lon: "6.76558"}, {
                lat: "50.050735",
                lon: "8.570773"
            }, {lat: "53.63128", lon: "10.006414"}, {lat: "60.31795", lon: "24.96645"}, {
                lat: "50.341244",
                lon: "30.895206"
            }, {lat: "38.7812996", lon: "-9.1359196"}, {lat: "51.469604", lon: "-0.453566"}, {
                lat: "49.505332",
                lon: "6.113280"
            }, {lat: "40.46515", lon: "-3.570209"}, {lat: "53.362907", lon: "-2.273354"}, {
                lat: "43.44178",
                lon: "5.222137"
            }, {lat: "48.1351", lon: "11.5820"}, {lat: "45.627403", lon: "8.71237"}, {
                lat: "55.414566",
                lon: "37.899494"
            }, {lat: "60.19419", lon: "11.100411"}, {lat: "49.003197", lon: "2.567023"}, {
                lat: "50.10619",
                lon: "14.266638"
            }, {lat: "56.9235992", lon: "23.9710999"}, {lat: "41.8044444", lon: "12.2508333"}, {
                lat: "42.688343",
                lon: "23.41443"
            }, {lat: "59.64982", lon: "17.930365"}, {lat: "48.11972", lon: "16.563583"}, {
                lat: "52.170906",
                lon: "20.97329"
            }, {lat: "45.8150108", lon: "15.9819189"}, {lat: "47.450603", lon: "8.561746"}, {
                lat: "41.0082376",
                lon: "28.9783589"
            }, {lat: "64.12652059999999", lon: "-21.8174392"}, {lat: "55.953252", lon: "-3.188267"}, {
                lat: "54.687156",
                lon: "25.279651"
            }, {lat: "47.0", lon: "28.9166"}, {lat: "59.4370", lon: "24.7536"}, {
                lat: "-37.004787",
                lon: "174.78352"
            }, {lat: "-27.4697707", lon: "153.0251235"}, {lat: "-37.669613", lon: "144.84978"}, {
                lat: "-31.933603",
                lon: "115.960236"
            }, {lat: "-33.932922", lon: "151.1799"}, {lat: "12.982267", lon: "80.16378"}, {
                lat: "12.982267",
                lon: "80.16378"
            }, {lat: "22.315248", lon: "113.93649"}, {lat: "22.315248", lon: "113.93649"}, {
                lat: "22.198745",
                lon: "113.543873"
            }, {lat: "25.07639", lon: "121.22389"}, {lat: "2.755672", lon: "101.70539"}, {
                lat: "19.095509",
                lon: "72.87497"
            }, {lat: "19.095509", lon: "72.87497"}, {lat: "28.556555", lon: "77.10079"}, {
                lat: "34.43533",
                lon: "135.24397"
            }, {lat: "11.5466003", lon: "104.8440018"}, {lat: "37.448524", lon: "126.45123"}, {
                lat: "1.361173",
                lon: "103.990204"
            }, {lat: "35.773212", lon: "140.38744"}, {lat: "14.509602", lon: "121.01251"}, {
                lat: "10.32",
                lon: "123.75"
            }, {lat: "14.509602", lon: "121.01251"}, {lat: "13.693062", lon: "100.752045"}, {
                lat: "13.693062",
                lon: "100.752045"
            }, {lat: "13.693062", lon: "100.752045"}, {lat: "13.693062", lon: "100.752045"}, {
                lat: "7.1802",
                lon: "79.8843"
            }, {lat: "40.1473007", lon: "44.3959007"}, {lat: "27.7172453", lon: "85.3239605"}, {
                lat: "-34.81273",
                lon: "-58.539833"
            }, {lat: "-12.019421", lon: "-77.107666"}, {lat: "6.171382", lon: "-75.42821"}, {
                lat: "4.598056",
                lon: "-74.075833"
            }, {lat: "-0.1291667", lon: "-78.3575"}, {lat: "-22.8099995", lon: "-43.2505569"}, {
                lat: "-33.397175",
                lon: "-70.79382"
            }, {lat: "-33.397175", lon: "-70.79382"}, {lat: "-23.425669", lon: "-46.481926"}, {
                lat: "12.1889",
                lon: "-68.9598007"
            }, {lat: "30.120106", lon: "31.40647"}, {lat: "-26.132664", lon: "28.231314"}, {
                lat: "-33.9249",
                lon: "18.4241"
            }, {lat: "-8.838333", lon: "13.234443"}, {lat: "11.8251", lon: "42.5903"}, {
                lat: "-4.0327",
                lon: "39.60325"
            }, {lat: "-20.223031", lon: "57.468383"}, {lat: "-29.85868", lon: "31.02184"}, {
                lat: "25.267569",
                lon: "51.558067"
            }, {lat: "32.0853", lon: "34.781768"}, {lat: "33.1545", lon: "44.1404"}, {
                lat: "24.7136",
                lon: "46.6753"
            }, {lat: "25.248665", lon: "55.352917"}, {lat: "29.240116", lon: "47.971252"}, {
                lat: "23.588078",
                lon: "58.29022"
            }, {lat: "33.893791", lon: "35.501777"}, {lat: "22.639444", lon: "113.81084"}, {
                lat: "23.387861",
                lon: "113.29734"
            }, {lat: "23.387861", lon: "113.29734"}, {lat: "30.236935", lon: "120.43236"}, {
                lat: "26.85",
                lon: "112.5"
            }, {lat: "34.736362", lon: "112.38541"}, {lat: "36.265884", lon: "120.38236"}, {
                lat: "41.861084",
                lon: "123.426926"
            }, {lat: "39.122627", lon: "117.3399"}, {lat: "34.441154", lon: "108.75605"}, {
                lat: "38.274376",
                lon: "114.69443"
            }, {lat: "34.52752", lon: "113.84024"}, {lat: "22.61321", lon: "108.1675"}, {
                lat: "31.3",
                lon: "120.63333"
            }, {lat: "36.85769", lon: "117.20688"}, {lat: "30.776598", lon: "114.209625"}, {
                lat: "31.49289",
                lon: "120.42438"
            }, {lat: "27.83815", lon: "113.08673"}, {lat: "31.22463", lon: "121.19656"}, {
                lat: "29.868336",
                lon: "121.54399"
            }, {lat: "31.22463", lon: "121.19656"}, {lat: "29.563010", lon: "106.551556"}, {
                lat: "39.122627",
                lon: "117.3399"
            }],
            LARGEST_CITIES: [{y: 31.22222, x: 121.45806, p: 22315474}, {
                y: -34.61315,
                x: -58.37723,
                p: 13076300
            }, {y: 19.07283, x: 72.88261, p: 12691836}, {y: 19.42847, x: -99.12766, p: 12294193}, {
                y: 39.9075,
                x: 116.39723,
                p: 11716620
            }, {y: 24.9056, x: 67.0822, p: 11624219}, {y: 41.01384, x: 28.94966, p: 11174257}, {
                y: 39.14222,
                x: 117.17667,
                p: 11090314
            }, {y: 23.11667, x: 113.25, p: 11071424}, {y: 28.65381, x: 77.22897, p: 10927986}, {
                y: 14.6042,
                x: 120.9822,
                p: 10444527
            }, {y: 55.75222, x: 37.61556, p: 10381222}, {y: 22.54554, x: 114.0683, p: 10358381}, {
                y: 23.7104,
                x: 90.40744,
                p: 10356500
            }, {y: 37.566, x: 126.9784, p: 10349312}, {y: -23.5475, x: -46.63611, p: 10021295}, {
                y: 30.58333,
                x: 114.26667,
                p: 9785388
            }, {y: 6.45407, x: 3.39467, p: 9e6}, {y: -6.21462, x: 106.84513, p: 8540121}, {
                y: 35.6895,
                x: 139.69171,
                p: 8336599
            }, {y: 40.71427, x: -74.00597, p: 8175133}, {y: 23.04889, x: 113.74472, p: 8e6}, {
                y: 25.04776,
                x: 121.53185,
                p: 7871900
            }, {y: -4.32758, x: 15.31357, p: 7785965}, {y: -12.04318, x: -77.02824, p: 7737002}, {
                y: 30.06263,
                x: 31.24967,
                p: 7734614
            }, {y: 4.60971, x: -74.08175, p: 7674366}, {y: 51.50853, x: -.12574, p: 7556900}, {
                y: 51.51279,
                x: -.09184,
                p: 7556900
            }, {y: 29.56278, x: 106.55278, p: 7457600}, {y: 30.66667, x: 104.06667, p: 7415590}, {
                y: 32.06167,
                x: 118.77778,
                p: 7165292
            }, {y: 35.69439, x: 51.42151, p: 7153309}, {y: 30.79508, x: 106.08473, p: 715e4}, {
                y: 22.28552,
                x: 114.15769,
                p: 7012738
            }, {y: 34.25833, x: 108.92861, p: 6501190}, {y: 31.54972, x: 74.34361, p: 6310888}, {
                y: 41.79222,
                x: 123.43278,
                p: 6255921
            }, {y: 30.29365, x: 120.16142, p: 6241971}, {y: -22.90278, x: -43.2075, p: 6023699}, {
                y: 45.75,
                x: 126.65,
                p: 5878939
            }, {y: 33.34058, x: 44.40088, p: 5672513}, {y: 36.18528, x: 117.12, p: 5499e3}, {
                y: 31.30408,
                x: 120.59538,
                p: 5345961
            }, {y: 23.36814, x: 116.71479, p: 5329024}, {y: 13.75398, x: 100.50144, p: 5104476}, {
                y: 12.97194,
                x: 77.59369,
                p: 5104047
            }, {y: 59.93863, x: 30.31413, p: 5028e3}, {y: -33.45694, x: -70.64827, p: 4837295}, {
                y: 22.56263,
                x: 88.36304,
                p: 4631392
            }, {y: -33.86785, x: 151.20732, p: 4627345}, {y: 16.80528, x: 96.15611, p: 4477638}, {
                y: 36.66833,
                x: 116.99722,
                p: 4335989
            }, {y: 13.08784, x: 80.27847, p: 4328063}, {y: 34.75778, x: 113.64861, p: 4253913}, {
                y: -37.814,
                x: 144.96332,
                p: 4246375
            }, {y: 24.68773, x: 46.72185, p: 4205961}, {y: 43.88, x: 125.32278, p: 4193073}, {
                y: 38.91222,
                x: 121.60222,
                p: 4087733
            }, {y: 22.3384, x: 91.83168, p: 3920222}, {y: 25.03889, x: 102.71833, p: 3855346}, {
                y: 31.21564,
                x: 29.95527,
                p: 3811516
            }, {y: 34.05223, x: -118.24368, p: 3792621}, {y: 23.02579, x: 72.58727, p: 3719710}, {
                y: 36.06605,
                x: 120.36939,
                p: 3718835
            }, {y: 35.10278, x: 129.04028, p: 3678555}, {y: 5.30966, x: -4.01266, p: 3677115}, {
                y: 12.00012,
                x: 8.51672,
                p: 3626068
            }, {y: 23.02677, x: 113.13148, p: 36e5}, {y: 17.38405, x: 78.45636, p: 3597816}, {
                y: 29.45679,
                x: 119.88872,
                p: 359e4
            }, {y: 35.44778, x: 139.6425, p: 3574443}, {y: 7.37756, x: 3.90591, p: 3565108}, {
                y: 1.28967,
                x: 103.85007,
                p: 3547809
            }, {y: 31.56887, x: 120.28857, p: 3543719}, {y: 24.47979, x: 118.08187, p: 3531347}, {
                y: 39.91987,
                x: 32.85427,
                p: 3517182
            }, {y: 34.57952, x: 105.74238, p: 35e5}, {y: 29.87819, x: 121.54945, p: 3491597}, {
                y: 10.82302,
                x: 106.62965,
                p: 3467331
            }, {y: 32.6475, x: 110.77806, p: 346e4}, {y: -33.92584, x: 18.42322, p: 3433441}, {
                y: 37.86944,
                x: 112.56028,
                p: 3426519
            }, {y: 52.52437, x: 13.41053, p: 3426354}, {y: 39.63333, x: 118.18333, p: 3372102}, {
                y: 31.86389,
                x: 117.28083,
                p: 3310268
            }, {y: 45.50884, x: -73.58781, p: 3268513}, {y: 40.4165, x: -3.70256, p: 3255944}, {
                y: 39.03385,
                x: 125.75432,
                p: 3222e3
            }, {y: 33.58831, x: -7.61138, p: 3144909}, {y: 36.79056, x: 118.06333, p: 3129228}, {
                y: 21.31992,
                x: 110.5723,
                p: 3121275
            }, {y: -29.8579, x: 31.0292, p: 3120282}, {y: 28.19874, x: 112.97087, p: 3093980}, {
                y: 34.52813,
                x: 69.17233,
                p: 3043532
            }, {y: 43.80096, x: 87.60046, p: 3029372}, {y: 10.48801, x: -66.87919, p: 3e6}, {
                y: 18.51957,
                x: 73.85535,
                p: 2935744
            }, {y: 21.19594, x: 72.83023, p: 2894504}, {y: 21.54238, x: 39.19797, p: 2867446}, {
                y: 38.04139,
                x: 114.47861,
                p: 2834942
            }, {y: 26.4478, x: 80.34627, p: 2823249}, {y: 50.45466, x: 30.5238, p: 2797553}, {
                y: -8.83682,
                x: 13.23432,
                p: 2776168
            }, {y: 14.6488, x: 121.0509, p: 2761720}, {y: 9.02497, x: 38.74689, p: 2757729}, {
                y: -1.28333,
                x: 36.81667,
                p: 2750547
            }, {y: -12.97111, x: -38.51083, p: 2711840}, {y: 26.91962, x: 75.78781, p: 2711758}, {
                y: -6.82349,
                x: 39.26951,
                p: 2698652
            }, {y: 41.85003, x: -87.65005, p: 2695598}, {y: 36.05701, x: 103.83987, p: 2628426}, {
                y: 37.45646,
                x: 126.70515,
                p: 2628e3
            }, {y: 22.92833, x: 112.03954, p: 2612800}, {y: 43.70011, x: -79.4163, p: 26e5}, {
                y: 30.53302,
                x: 47.79747,
                p: 26e5
            }, {y: 19.03681, x: 73.01582, p: 26e5}, {y: 34.69374, x: 135.50218, p: 2592413}, {
                y: 2.03711,
                x: 45.34375,
                p: 2587183
            }, {y: 35.87028, x: 128.59111, p: 2566540}, {y: 31.41667, x: 73.08333, p: 2506595}, {
                y: 38.41273,
                x: 27.13838,
                p: 2500603
            }, {y: 14.6937, x: -17.44406, p: 2476400}, {y: 26.83928, x: 80.92313, p: 2472011}, {
                y: 30.00808,
                x: 31.21093,
                p: 2443203
            }, {y: -3.71722, x: -38.54306, p: 24e5}, {y: 3.43722, x: -76.5225, p: 2392877}, {
                y: -7.24917,
                x: 112.75083,
                p: 2374658
            }, {y: -19.92083, x: -43.93778, p: 2373224}, {y: 28.68333, x: 115.88333, p: 2357839}, {
                y: 14.71331,
                x: -17.45472,
                p: 2352057
            }, {y: 41.89193, x: 12.51133, p: 2318895}, {y: 36.31559, x: 59.56796, p: 2307177}, {
                y: 40.6501,
                x: -73.94958,
                p: 2300664
            }, {y: 40.68149, x: -73.83652, p: 2272771}, {y: 21.14631, x: 79.08491, p: 2228018}, {
                y: 10.63167,
                x: -71.64056,
                p: 2225e3
            }, {y: -15.77972, x: -47.92972, p: 2207718}, {y: 18.50012, x: -69.98857, p: 2201941}, {
                y: 35.18147,
                x: 136.90641,
                p: 2191279
            }, {y: -27.46794, x: 153.02809, p: 2189878}, {y: 23.13302, x: -82.38304, p: 2163824}, {
                y: 48.85341,
                x: 2.3488,
                p: 2138551
            }, {y: 29.76328, x: -95.36327, p: 2099451}, {y: 36.33306, x: 43.1049, p: 2065597}, {
                y: -26.20227,
                x: 28.04363,
                p: 2026469
            }, {y: 22.31667, x: 114.18333, p: 2019533}, {y: 30.50316, x: 47.81507, p: 2015483}, {
                y: 43.25654,
                x: 76.92848,
                p: 2000900
            }, {y: 6.25184, x: -75.56359, p: 1999979}, {y: 41.26465, x: 69.21627, p: 1978028}, {
                y: 36.7525,
                x: 3.04197,
                p: 1977663
            }, {y: 15.55177, x: 32.53241, p: 1974647}, {y: 5.55602, x: -.1969, p: 1963264}, {
                y: -2.20584,
                x: -79.90795,
                p: 1952029
            }, {y: 39.6086, x: 109.78157, p: 1940653}, {y: 15.35472, x: 44.20667, p: 1937451}, {
                y: 33.88894,
                x: 35.49442,
                p: 1916100
            }, {y: -31.95224, x: 115.8614, p: 1896548}, {y: 43.06417, x: 141.34695, p: 1883027}, {
                y: 43.85083,
                x: 126.56028,
                p: 1881977
            }, {y: 44.43225, x: 26.10626, p: 1877155}, {y: 9.535, x: -13.68778, p: 1871242}, {
                y: 49.24966,
                x: -123.11934,
                p: 1837969
            }, {y: 22.71792, x: 75.8333, p: 1837041}, {y: 19.35738, x: -99.0671, p: 1820888}, {
                y: 19.61725,
                x: -99.06601,
                p: 1806226
            }, {y: 9.53795, x: -13.67729, p: 1767200}, {y: 10.24694, x: -67.59583, p: 1754256}, {
                y: 3.58333,
                x: 98.66667,
                p: 1750971
            }, {y: 33.6007, x: 73.0679, p: 1743101}, {y: 53.9, x: 27.56667, p: 1742124}, {
                y: 47.49801,
                x: 19.03991,
                p: 1741041
            }, {y: 36.335, x: 43.11889, p: 1739800}, {y: 53.57532, x: 10.01534, p: 1739117}, {
                y: -25.42778,
                x: -49.27306,
                p: 1718421
            }, {y: 52.22977, x: 21.01178, p: 1702139}, {y: -6.90389, x: 107.61861, p: 1699719}, {
                y: -26.26781,
                x: 27.85849,
                p: 1695047
            }, {y: 48.20849, x: 16.37208, p: 1691468}, {y: 34.01325, x: -6.83255, p: 1655753}, {
                y: 20.66682,
                x: -103.39182,
                p: 1640589
            }, {y: 41.38879, x: 2.15899, p: 1621537}, {y: -25.74486, x: 28.18783, p: 1619438}, {
                y: 36.20124,
                x: 37.16117,
                p: 1602264
            }, {y: 25.60222, x: 85.11936, p: 1599920}, {y: 23.25469, x: 77.40289, p: 1599914}, {
                y: -3.10194,
                x: -60.025,
                p: 1598210
            }, {y: 32.12278, x: 114.06556, p: 1590668}, {y: 19.04334, x: -98.20193, p: 1590256}, {
                y: 10.52641,
                x: 7.43879,
                p: 1582102
            }, {y: 11.56245, x: 104.91601, p: 1573544}, {y: 33.5102, x: 36.29128, p: 1569394}, {
                y: 32.65246,
                x: 51.67462,
                p: 1547164
            }, {y: 30.90015, x: 75.85229, p: 1545368}, {y: -17.82772, x: 31.05337, p: 1542813}, {
                y: 34.6913,
                x: 135.183,
                p: 1528478
            }, {y: 39.95233, x: -75.16379, p: 1526006}, {y: -6.2349, x: 106.9896, p: 1520119}, {
                y: 22.61626,
                x: 120.31333,
                p: 1519711
            }, {y: 31.73333, x: -106.48333, p: 1512354}, {y: 40.78343, x: -73.96625, p: 1487536}, {
                y: -25.30066,
                x: -57.63591,
                p: 1482200
            }, {y: -8.05389, x: -34.88111, p: 1478098}, {y: 36.32139, x: 127.41972, p: 1475221}, {
                y: 6.68848,
                x: -1.62443,
                p: 1468609
            }, {y: 6.13328, x: 102.2386, p: 1459994}, {y: 35.02107, x: 135.75385, p: 1459640}, {
                y: 3.1412,
                x: 101.68653,
                p: 1453975
            }, {y: 35.83266, x: 50.99155, p: 1448075}, {y: 33.44838, x: -112.07404, p: 1445632}, {
                y: 27.70169,
                x: 85.3206,
                p: 1442271
            }, {y: -2.91673, x: 104.7458, p: 1441500}, {y: 30.19556, x: 71.47528, p: 1437230}, {
                y: 21.0245,
                x: 105.84117,
                p: 1431270
            }, {y: 49.98081, x: 36.25272, p: 1430885}, {y: 27.18333, x: 78.01667, p: 1430055}, {
                y: -31.4135,
                x: -64.18105,
                p: 1428214
            }, {y: 38.08, x: 46.2919, p: 1424641}, {y: 55.0415, x: 82.9346, p: 1419007}, {
                y: 35.15472,
                x: 126.91556,
                p: 1416938
            }, {y: 40.19266, x: 29.08403, p: 1412701}, {y: 22.29941, x: 73.20812, p: 1409476}, {
                y: -1.45583,
                x: -48.50444,
                p: 1407737
            }, {y: 41.85583, x: 123.92333, p: 1400646}, {y: -.22985, x: -78.52495, p: 1399814}, {
                y: 33.60639,
                x: 130.41806,
                p: 1392289
            }, {y: -18.91368, x: 47.53613, p: 1391433}, {y: 34.68361, x: 112.45361, p: 1390581}, {
                y: 25.39242,
                x: 68.37366,
                p: 1386330
            }, {y: 40.84985, x: -73.86641, p: 1385108}, {y: 10.16202, x: -68.00765, p: 1385083}, {
                y: 32.16167,
                x: 74.18831,
                p: 1384471
            }, {y: 10.96854, x: -74.78132, p: 1380425}, {y: 28.15861, x: 113.62709, p: 138e4}, {
                y: 32.5027,
                x: -117.00371,
                p: 1376457
            }, {y: -11.66089, x: 27.47938, p: 1373770}, {y: -30.03306, x: -51.23, p: 1372741}, {
                y: -6.17806,
                x: 106.63,
                p: 1372124
            }, {y: -17.78629, x: -63.18117, p: 1364389}, {y: 36.60056, x: 114.46778, p: 1358318}, {
                y: .31628,
                x: 32.58219,
                p: 1353189
            }, {y: 56.8519, x: 60.6122, p: 1349772}, {y: 22.80979, x: 89.56439, p: 1342339}, {
                y: 4.04827,
                x: 9.70428,
                p: 1338082
            }, {y: 29.42412, x: -98.49363, p: 1327407}, {y: 29.44768, x: 75.67206, p: 1324570}, {
                y: 21.42664,
                x: 39.82563,
                p: 1323624
            }, {y: -5.14, x: 119.4221, p: 1321717}, {y: 32.71533, x: -117.15726, p: 1307402}, {
                y: 35.52056,
                x: 139.71722,
                p: 1306785
            }, {y: -6.28862, x: 106.71789, p: 1303569}, {y: 40.65222, x: 109.82222, p: 1301768}, {
                y: 24.46861,
                x: 39.61417,
                p: 13e5
            }, {y: 3.86667, x: 11.51667, p: 1299369}, {y: 12.65, x: -8, p: 1297281}, {
                y: 19.99727,
                x: 73.79096,
                p: 1289497
            }, {y: -6.9932, x: 110.4203, p: 1288084}, {y: -4.26613, x: 15.28318, p: 1284609}, {
                y: 18.62292,
                x: 73.80696,
                p: 1284606
            }, {y: 56.32867, x: 44.00205, p: 1284164}, {y: 31.95522, x: 35.94503, p: 1275857}, {
                y: 7.20417,
                x: 124.43972,
                p: 1273715
            }, {y: 44.80401, x: 20.46513, p: 1273651}, {y: -34.90328, x: -56.18816, p: 1270737}, {
                y: -15.40669,
                x: 28.28713,
                p: 1267440
            }, {y: 19.2437, x: 73.13554, p: 1262255}, {y: 19.19704, x: 72.96355, p: 1261517}, {
                y: 48.13743,
                x: 11.57549,
                p: 1260391
            }, {y: 59.33258, x: 18.0649, p: 1253309}, {y: 33.9, x: 35.48333, p: 1251739}, {
                y: 29.61031,
                x: 52.53113,
                p: 1249942
            }, {y: 37.00167, x: 35.32889, p: 1248988}, {y: 37.29111, x: 127.00889, p: 1242724}, {
                y: 45.46427,
                x: 9.18951,
                p: 1236837
            }, {y: 18.53917, x: -72.335, p: 1234742}, {y: 19.40061, x: -99.01483, p: 1232220}, {
                y: -34.92866,
                x: 138.59863,
                p: 1225235
            }, {y: 28.97155, x: 77.71934, p: 1223184}, {y: 19.23114, x: 82.54826, p: 1220946}, {
                y: 28.41252,
                x: 77.31977,
                p: 1220229
            }, {y: 34.008, x: 71.57849, p: 1218773}, {y: 7.07306, x: 125.61278, p: 1212504}, {
                y: 21.97473,
                x: 96.08359,
                p: 1208099
            }, {y: 15.64453, x: 32.47773, p: 12e5}, {y: 19.4517, x: -70.69703, p: 12e5}, {
                y: 29.37455,
                x: 113.09481,
                p: 12e5
            }, {y: 41.12361, x: 122.99, p: 1199275}, {y: 34.18045, x: 117.15707, p: 1199193}, {
                y: 28.66249,
                x: 77.43777,
                p: 1199191
            }, {y: -6.4, x: 106.81861, p: 1198129}, {y: 32.78306, x: -96.80667, p: 1197816}, {
                y: 35.90807,
                x: 139.65657,
                p: 1193350
            }, {y: 19.49016, x: -99.10978, p: 1193161}, {y: 19.21667, x: 73.08333, p: 1193e3}, {
                y: -25.96553,
                x: 32.58322,
                p: 1191613
            }, {y: 22.8694, x: -98.75886, p: 1185772}, {y: 26.06139, x: 119.30611, p: 1179720}, {
                y: 22.29161,
                x: 70.79322,
                p: 1177362
            }, {y: -32.94682, x: -60.63932, p: 1173533}, {y: 26.58333, x: 106.71667, p: 1171633}, {
                y: -16.67861,
                x: -49.25389,
                p: 1171195
            }, {y: -23.46278, x: -46.53333, p: 1169577}, {y: 50.08804, x: 14.42076, p: 1165581}, {
                y: 25.31668,
                x: 83.01041,
                p: 1164404
            }, {y: 55.67594, x: 12.56553, p: 1153615}, {y: 42.69751, x: 23.32415, p: 1152556}, {
                y: 32.87519,
                x: 13.18746,
                p: 1150989
            }, {y: 4.77742, x: 7.0134, p: 1148665}, {y: 34.39627, x: 132.45937, p: 1143841}, {
                y: 26.86879,
                x: 100.22072,
                p: 1137600
            }, {y: 25.0657, x: 55.17128, p: 1137347}, {y: 53.20007, x: 50.15, p: 1134730}, {
                y: 54.99244,
                x: 73.36859,
                p: 1129281
            }, {y: 6.33815, x: 5.62575, p: 1125058}, {y: 25.67507, x: -100.31847, p: 1122874}, {
                y: 7.16083,
                x: 124.475,
                p: 1121974
            }, {y: 40.37767, x: 49.89201, p: 1116513}, {y: 21.13052, x: -101.671, p: 1114626}, {
                y: 11.84692,
                x: 13.15712,
                p: 1112449
            }, {y: 55.78874, x: 49.12214, p: 1104738}, {y: 40.18111, x: 44.51361, p: 1093485}, {
                y: 31.63661,
                x: 74.87476,
                p: 1092450
            }, {y: 12.36566, x: -1.53388, p: 1086505}, {y: 35.88333, x: 139.63333, p: 1077730}, {
                y: 47.23135,
                x: 39.72328,
                p: 1074482
            }, {y: 25.44894, x: 81.83329, p: 1073438}, {y: 37.65639, x: 126.835, p: 1073069}, {
                y: 37.05944,
                x: 37.3825,
                p: 1065975
            }, {y: 17.68009, x: 83.20161, p: 1063178}, {y: 38.26889, x: 140.87195, p: 1063103}, {
                y: 38.25759,
                x: 140.8667,
                p: 1063103
            }, {y: 55.15402, x: 61.42915, p: 1062919}, {y: 40.09361, x: 113.29139, p: 1052678}, {
                y: 41.69411,
                x: 44.83368,
                p: 1049498
            }, {y: 31.64615, x: 120.74221, p: 1047700}, {y: 24.1469, x: 120.6839, p: 1040725}, {
                y: 10.01531,
                x: 77.482,
                p: 1034724
            }, {y: 34.33778, x: 108.70261, p: 1034081}, {y: 54.74306, x: 55.96779, p: 1033338}, {
                y: 48.45,
                x: 34.98333,
                p: 1032822
            }, {y: 37.43861, x: 127.13778, p: 1031935}, {y: -22.90556, x: -47.06083, p: 1031554}, {
                y: 23.16697,
                x: 79.95006,
                p: 1030168
            }, {y: 22.57688, x: 88.31857, p: 1027672}, {y: 32.62639, x: 116.99694, p: 1027655}, {
                y: 48.023,
                x: 37.80224,
                p: 1024700
            }, {y: 53.33306, x: -6.24889, p: 1024027}, {y: 51.05011, x: -114.08529, p: 1019942}, {
                y: 50.85045,
                x: 4.34878,
                p: 1019022
            }, {y: 19.87757, x: 75.34226, p: 1016441}, {y: 48.71939, x: 44.50183, p: 1011417}, {
                y: -22.75917,
                x: -43.45111,
                p: 1002118
            }, {y: 23.5418, x: 116.36581, p: 1001985}, {y: 46.47747, x: 30.73262, p: 1001558}, {
                y: 35.99502,
                x: 119.40259,
                p: 1e6
            }, {y: 18.53017, x: 73.85263, p: 1e6}, {y: 33.83333, x: 130.83333, p: 997536}, {
                y: 17.67152,
                x: 75.91044,
                p: 997281
            }, {y: 38.85111, x: 115.49028, p: 995652}, {y: 14.64072, x: -90.51327, p: 994938}, {
                y: 41.28861,
                x: 123.765,
                p: 987717
            }, {y: 20.72356, x: -103.38479, p: 987516}, {y: 52.48142, x: -1.89983, p: 984333}, {
                y: 58.01046,
                x: 56.25017,
                p: 982419
            }, {y: 34.08842, x: 74.80298, p: 975857}, {y: 11.11128, x: 7.7227, p: 975153}, {
                y: 12.13282,
                x: -86.2504,
                p: 973087
            }, {y: -33.91799, x: 25.57007, p: 967677}, {y: 34.03715, x: -4.9998, p: 964891}, {
                y: 50.93333,
                x: 6.95,
                p: 963395
            }, {y: 35.53722, x: 129.31667, p: 962865}, {y: 30.73629, x: 76.7884, p: 960787}, {
                y: 11.00555,
                x: 76.96612,
                p: 959823
            }, {y: 40.85631, x: 14.24641, p: 959470}, {y: -9.66583, x: -35.73528, p: 954991}, {
                y: 10.39972,
                x: -75.51444,
                p: 952024
            }, {y: 31.77359, x: 119.95401, p: 949018}, {y: 24.49258, x: 39.58572, p: 946697}, {
                y: 37.33939,
                x: -121.89496,
                p: 945942
            }, {y: 6.30054, x: -10.7969, p: 939524}, {y: 17.99702, x: -76.79358, p: 937700}, {
                y: 36.19257,
                x: 44.01062,
                p: 932800
            }, {y: 56.01839, x: 92.86717, p: 927200}, {y: 19.745, x: 96.12972, p: 925e3}, {
                y: 26.26841,
                x: 73.00594,
                p: 921476
            }, {y: 35.60472, x: 140.12333, p: 919729}, {y: -2.52972, x: -44.30278, p: 917237}, {
                y: 9.91735,
                x: 78.11962,
                p: 909908
            }, {y: 34.0531, x: -6.79846, p: 903485}, {y: 33.97444, x: 116.79167, p: 903039}, {
                y: -17.3895,
                x: -66.1568,
                p: 900414
            }, {y: 5.41613, x: -4.0159, p: 9e5}, {y: 33.30563, x: 44.18477, p: 9e5}, {
                y: 34.7986,
                x: 114.30742,
                p: 9e5
            }, {y: 42.87, x: 74.59, p: 9e5}, {y: 34.6401, x: 50.8764, p: 9e5}, {
                y: 26.1844,
                x: 91.7458,
                p: 899094
            }, {y: 5.10658, x: 7.36667, p: 897560}, {y: 33.73847, x: 113.30119, p: 889675}, {
                y: 26.22983,
                x: 78.17337,
                p: 882458
            }, {y: 47.34088, x: 123.96045, p: 882364}, {y: 3.03333, x: 101.45, p: 879867}, {
                y: -32.89084,
                x: -68.82717,
                p: 876884
            }, {y: 37.87135, x: 32.48464, p: 875530}, {y: -6.13603, x: 23.58979, p: 874761}, {
                y: 16.51928,
                x: 80.63049,
                p: 874587
            }, {y: 14.76457, x: -17.39071, p: 874062}, {y: 45.07049, x: 7.68682, p: 870456}, {
                y: 12.29791,
                x: 76.63925,
                p: 868313
            }, {y: 27.99942, x: 120.66682, p: 865672}, {y: 51.54056, x: 46.00861, p: 863725}, {
                y: 14.0818,
                x: -87.20681,
                p: 850848
            }, {y: 37.49889, x: 126.78306, p: 850731}, {y: 51.67204, x: 39.1843, p: 848752}, {
                y: 23.34777,
                x: 85.33856,
                p: 846454
            }, {y: 19.47851, x: -99.23963, p: 846185}, {y: 47.90771, x: 106.88324, p: 844818}, {
                y: 10.99081,
                x: 104.78498,
                p: 843931
            }, {y: 31.31901, x: 48.6842, p: 841145}, {y: -16.39889, x: -71.535, p: 841130}, {
                y: -.94924,
                x: 100.35427,
                p: 840352
            }, {y: 15.34776, x: 75.13378, p: 840214}, {y: 31.63416, x: -7.99994, p: 839296}, {
                y: 3.15,
                x: 101.53333,
                p: 833571
            }, {y: 39.76838, x: -86.15804, p: 829718}, {y: 30.33218, x: -81.65565, p: 821784}, {
                y: -22.78556,
                x: -43.31167,
                p: 818329
            }, {y: 9.92849, x: 8.89212, p: 816824}, {y: 39.46975, x: -.37739, p: 814208}, {
                y: 8.49664,
                x: 4.54214,
                p: 814192
            }, {y: -12.05659, x: -77.11814, p: 813264}, {y: -16.5, x: -68.15, p: 812799}, {
                y: 45.41117,
                x: -75.69812,
                p: 812129
            }, {y: 10.07389, x: -69.32278, p: 809490}, {y: 28.63528, x: -106.08889, p: 809232}, {
                y: 37.77493,
                x: -122.41942,
                p: 805235
            }, {y: 22.81667, x: 108.31667, p: 803788}, {y: 8.484, x: -13.22994, p: 802639}, {
                y: 1.4655,
                x: 103.7578,
                p: 802489
            }, {y: 31.76904, x: 35.21633, p: 801e3}, {y: -5.42544, x: 105.25803, p: 800348}, {
                y: -6.59444,
                x: 106.78917,
                p: 8e5
            }, {y: 45.81313, x: 15.97753, p: 8e5}, {y: -4.05466, x: 39.66359, p: 799668}, {
                y: 10.31672,
                x: 123.89071,
                p: 798634
            }, {y: 23.61387, x: 58.5922, p: 797e3}, {y: 47.82289, x: 35.19031, p: 796217}, {
                y: 43.29695,
                x: 5.38107,
                p: 794811
            }, {y: 32.07275, x: 36.08796, p: 792665}, {y: 39.9179, x: 32.86268, p: 792189}, {
                y: 30.26715,
                x: -97.74306,
                p: 790390
            }, {y: 39.96118, x: -82.99879, p: 787033}, {y: 36.76639, x: 3.47717, p: 786499}, {
                y: 31.32556,
                x: 75.57917,
                p: 785178
            }, {y: 8.4855, x: 76.94924, p: 784153}, {y: 34.58333, x: 135.46667, p: 782339}, {
                y: 36.09944,
                x: 114.32889,
                p: 781129
            }, {y: -26.82414, x: -65.2226, p: 781023}, {y: 11.65117, x: 78.15867, p: 778396}, {
                y: 10.8155,
                x: 78.69651,
                p: 775484
            }, {y: 34.72682, x: 36.72339, p: 775404}, {y: 40.81056, x: 111.65222, p: 774477}, {
                y: 13.51366,
                x: 2.1098,
                p: 774235
            }, {y: 22.99083, x: 120.21333, p: 771235}, {y: 30.01556, x: 120.87111, p: 77e4}, {
                y: 51.75,
                x: 19.46667,
                p: 768755
            }, {y: 26.43442, x: 50.10326, p: 768602}, {y: 36.62554, x: 101.75739, p: 767531}, {
                y: 34.3838,
                x: 47.0553,
                p: 766706
            }, {y: 25.18254, x: 75.83907, p: 763088}, {y: -5.795, x: -35.20944, p: 763043}, {
                y: 20.27241,
                x: 85.83385,
                p: 762243
            }, {y: 39.93167, x: 119.58833, p: 759718}, {y: 26.88946, x: 112.61888, p: 759602}, {
                y: 36.90812,
                x: 30.69556,
                p: 758188
            }, {y: 50.06143, x: 19.93658, p: 755050}, {y: 27.88334, x: 78.07475, p: 753207}, {
                y: 16.06778,
                x: 108.22083,
                p: 752493
            }, {y: -29.61679, x: 30.39278, p: 750845}, {y: 6.13748, x: 1.21227, p: 749700}, {
                y: -8.11599,
                x: -79.02998,
                p: 747450
            }, {y: -7.9797, x: 112.6304, p: 746716}, {y: 8.35122, x: -62.64102, p: 746535}, {
                y: 28.34702,
                x: 79.42193,
                p: 745435
            }, {y: -1.94995, x: 30.05885, p: 745261}, {y: -5.08917, x: -42.80194, p: 744512}, {
                y: 35.30889,
                x: 113.86722,
                p: 743601
            }, {y: -23.69389, x: -46.565, p: 743372}, {y: 47.35118, x: 130.30012, p: 743307}, {
                y: 56.946,
                x: 24.10589,
                p: 742572
            }, {y: 52.37403, x: 4.88969, p: 741636}, {y: 32.72541, x: -97.32085, p: 741206}, {
                y: 7.85257,
                x: 3.93125,
                p: 736072
            }, {y: 30.199, x: 67.00971, p: 733675}, {y: 35.22709, x: -80.84313, p: 731424}, {
                y: -20.44278,
                x: -54.64639,
                p: 729151
            }, {y: 37.95, x: 58.38333, p: 727700}, {y: 19.35867, x: -99.20329, p: 727034}, {
                y: 34.37002,
                x: 73.47082,
                p: 725e3
            }, {y: 25.67678, x: -100.25646, p: 724921}, {y: 41.03903, x: 28.85671, p: 724270}, {
                y: 35.56496,
                x: 45.4329,
                p: 723170
            }, {y: 7.89391, x: -72.50782, p: 721398}, {y: 28.83893, x: 78.77684, p: 721139}, {
                y: 12.10672,
                x: 15.0444,
                p: 721081
            }, {y: 39.50972, x: 116.69472, p: 720119}, {y: 32.97944, x: 114.02944, p: 72e4}, {
                y: 37.47649,
                x: 121.44081,
                p: 719332
            }, {y: 49.83826, x: 24.02324, p: 717803}, {y: 20.97537, x: -89.61696, p: 717175}, {
                y: 19.54005,
                x: -99.19538,
                p: 715767
            }, {y: 42.33143, x: -83.04575, p: 713777}, {y: 53.55014, x: -113.46871, p: 712391}, {
                y: 35.82194,
                x: 127.14889,
                p: 711424
            }, {y: 27.83333, x: 113.15, p: 709358}, {y: 3.04384, x: 101.58062, p: 708296}, {
                y: 19.30023,
                x: 73.05881,
                p: 707035
            }, {y: .53333, x: 101.45, p: 703956}, {y: 37.38283, x: -5.97317, p: 703206}, {
                y: 53.5303,
                x: 49.3461,
                p: 702879
            }, {y: -8.18028, x: -35.00139, p: 702621}, {y: 34.97695, x: 138.38306, p: 701561}, {
                y: 18.5,
                x: -70,
                p: 701269
            }, {y: 24.374, x: 88.60114, p: 700133}, {y: -1.24204, x: 116.89419, p: 7e5}, {
                y: 35.20889,
                x: 111.73861,
                p: 699514
            }, {y: -20.15, x: 28.58333, p: 699385}, {y: 45.81444, x: 15.97798, p: 698966}, {
                y: 30.42018,
                x: -9.59815,
                p: 698310
            }, {y: 43.84864, x: 18.35644, p: 696731}, {y: -34.92145, x: -57.95453, p: 694167}, {
                y: 36.81897,
                x: 10.16579,
                p: 693210
            }, {y: 40.81, x: 114.87944, p: 692602}, {y: 6.36536, x: 2.41833, p: 690584}, {
                y: 29.34162,
                x: 104.77689,
                p: 689961
            }, {y: 42.01556, x: 121.65889, p: 689050}, {y: 6.44258, x: 7.5022, p: 688862}, {
                y: 35.76727,
                x: -5.79975,
                p: 688356
            }, {y: 30.24706, x: 115.04814, p: 688090}, {y: 41.27194, x: 123.17306, p: 687890}, {
                y: 32.80589,
                x: 130.69181,
                p: 680423
            }, {y: 21.23333, x: 81.63333, p: 679995}, {y: 6.11278, x: 125.17167, p: 679588}, {
                y: 38.53575,
                x: 68.77905,
                p: 679400
            }, {y: -23.5325, x: -46.79167, p: 677856}, {y: 22.14982, x: -100.97916, p: 677704}, {
                y: -25.96222,
                x: 32.45889,
                p: 675422
            }, {y: 24.79032, x: -107.38782, p: 675e3}, {y: 41.65606, x: -.87734, p: 674317}, {
                y: 26.75479,
                x: 83.37235,
                p: 674246
            }, {y: 27.85, x: 112.9, p: 674189}, {y: 4.5841, x: 101.0829, p: 673318}, {
                y: 43.5789,
                x: -79.6583,
                p: 668549
            }, {y: 35.70506, x: 115.01409, p: 666322}, {y: 32.03028, x: 120.87472, p: 666251}, {
                y: 44.58333,
                x: 129.6,
                p: 665915
            }, {y: 37.97945, x: 23.71622, p: 664046}, {y: -23.66389, x: -46.53833, p: 662373}, {
                y: 18.08581,
                x: -15.9785,
                p: 661400
            }, {y: -4.77609, x: 11.86352, p: 659084}, {y: 21.88234, x: -102.28259, p: 658179}, {
                y: 47.90966,
                x: 33.38044,
                p: 652380
            }, {y: 16.86336, x: -99.8901, p: 652136}, {y: -7.115, x: -34.86306, p: 650883}, {
                y: 37.32361,
                x: 126.82194,
                p: 650728
            }, {y: 32.11486, x: 20.06859, p: 650629}, {y: 50.11552, x: 8.68417, p: 65e4}, {
                y: 45.04484,
                x: 38.97603,
                p: 649851
            }, {y: 25.28194, x: 110.28639, p: 649352}, {y: 31.75872, x: -106.48693, p: 649121}, {
                y: 38.13205,
                x: 13.33561,
                p: 648260
            }, {y: 6.93194, x: 79.84778, p: 648034}, {y: 35.14953, x: -90.04898, p: 646889}, {
                y: -13.96692,
                x: 33.78725,
                p: 646750
            }, {y: 35.69111, x: -.64167, p: 645984}, {y: 37.91363, x: 40.21721, p: 644763}, {
                y: 14.5243,
                x: 121.0792,
                p: 644473
            }, {y: 35.08676, x: -90.05676, p: 641608}, {y: 54.32824, x: 48.38657, p: 640680}, {
                y: 33.51667,
                x: 73.91667,
                p: 64e4
            }, {y: 34.66167, x: 133.935, p: 639652}, {y: 21.28145, x: 110.34271, p: 637790}, {
                y: 29.07694,
                x: 48.08389,
                p: 637411
            }, {y: -7.78278, x: 110.36083, p: 636660}, {y: 43.76681, x: -79.4163, p: 636e3}, {
                y: 47.00556,
                x: 28.8575,
                p: 635994
            }, {y: 51.1, x: 17.03333, p: 634893}, {y: 36.63722, x: 127.48972, p: 634596}, {
                y: 37.3925,
                x: 126.92694,
                p: 634367
            }, {y: 35.40417, x: 8.12417, p: 634332}, {y: 32.21086, x: 119.45508, p: 632552}, {
                y: 49.8844,
                x: -97.14704,
                p: 632063
            }, {y: 40.12917, x: 124.39472, p: 631973}, {y: 56.84976, x: 53.20448, p: 631038}, {
                y: -8.11278,
                x: -35.01472,
                p: 630008
            }, {y: 24.8, x: 113.58333, p: 628749}, {y: 33.3575, x: 120.1573, p: 628441}, {
                y: 19.3467,
                x: -99.16174,
                p: 628063
            }, {y: -19.93167, x: -44.05361, p: 627123}, {y: 20.58806, x: -100.38806, p: 626495}, {
                y: 21.21667,
                x: 81.43333,
                p: 625138
            }, {y: 41.18806, x: 122.04944, p: 625040}, {y: 11.58901, x: 43.14503, p: 623891}, {
                y: 25.42321,
                x: -101.0053,
                p: 621250
            }, {y: 34.31417, x: 47.065, p: 621100}, {y: 39.29038, x: -76.61219, p: 620961}, {
                y: -21.1775,
                x: -47.81028,
                p: 619746
            }, {y: 14.79781, x: 42.95452, p: 617871}, {y: 42.35843, x: -71.05977, p: 617594}, {
                y: 14.58691,
                x: 121.0614,
                p: 617301
            }, {y: 22.80278, x: 86.18545, p: 616338}, {y: 20.04583, x: 110.34167, p: 615835}, {
                y: 13.57952,
                x: 44.02091,
                p: 615222
            }, {y: -23.17944, x: -45.88694, p: 613764}, {y: 32.49069, x: 119.90812, p: 612356}, {
                y: 37.06306,
                x: 114.49417,
                p: 611739
            }, {y: 55.86515, x: -4.25763, p: 610268}, {y: 19.23496, x: 72.85976, p: 609617}, {
                y: 47.60621,
                x: -122.33207,
                p: 608660
            }, {y: 19.29707, x: -99.16787, p: 607545}, {y: 57.62987, x: 39.87368, p: 606730}, {
                y: -26.18848,
                x: 28.32078,
                p: 605344
            }, {y: 34.7, x: 137.73333, p: 605098}, {y: 9.93988, x: 76.26022, p: 604696}, {
                y: 41.10778,
                x: 121.14167,
                p: 604269
            }, {y: 20.93333, x: 77.75, p: 603837}, {y: 24.46667, x: 54.36667, p: 603492}, {
                y: 20.86481,
                x: 106.68345,
                p: 602695
            }, {y: 38.89511, x: -77.03637, p: 601723}, {y: 33.72148, x: 73.04329, p: 601600}, {
                y: 35.46806,
                x: 44.39222,
                p: 601433
            }, {y: 16.85438, x: 74.56417, p: 601214}, {y: 39.73915, x: -104.9847, p: 600158}, {
                y: 46.63611,
                x: 131.15389,
                p: 6e5
            }, {y: -7.70623, x: 114.00976, p: 6e5}, {y: 43.77223, x: -79.25666, p: 6e5}, {
                y: 53.36056,
                x: 83.76361,
                p: 599579
            }, {y: 51.9225, x: 4.47917, p: 598199}, {y: 37.87917, x: 114.65167, p: 597130}, {
                y: 32.62781,
                x: -115.45446,
                p: 597099
            }, {y: 29.1026, x: -110.97732, p: 595811}, {y: 43.0389, x: -87.90647, p: 594833}, {
                y: 37.28077,
                x: 49.58319,
                p: 594590
            }, {y: 7.15571, x: 3.34509, p: 593100}, {y: 51.45657, x: 7.01228, p: 593085}, {
                y: 38.73222,
                x: 35.48528,
                p: 592840
            }, {y: 19.70078, x: -101.18443, p: 592797}, {y: -28.00029, x: 153.43088, p: 591473}, {
                y: 40.66482,
                x: 122.22833,
                p: 591159
            }, {y: 9.05785, x: 7.49508, p: 590400}, {y: 24.51333, x: 117.65556, p: 589831}, {
                y: 48.78232,
                x: 9.17702,
                p: 589793
            }, {y: 51.51494, x: 7.466, p: 588462}, {y: 43.10562, x: 131.87353, p: 587022}, {
                y: 52.29778,
                x: 104.29639,
                p: 586695
            }, {y: -15.78499, x: 35.00854, p: 584877}, {y: 18.00747, x: -76.78319, p: 583958}, {
                y: 45.52345,
                x: -122.67621,
                p: 583776
            }, {y: 36.17497, x: -115.13722, p: 583756}, {y: 41.02252, x: 29.02369, p: 582666}, {
                y: 44.4264,
                x: 8.91519,
                p: 580223
            }, {y: 59.91273, x: 10.74609, p: 58e4}, {y: 20.46497, x: 85.87927, p: 58e4}, {
                y: 35.46756,
                x: -97.51643,
                p: 579999
            }, {y: 35.65583, x: 139.32389, p: 579399}, {y: 48.48271, x: 135.08379, p: 579e3}, {
                y: 48.43776,
                x: 135.13329,
                p: 578303
            }, {y: .39241, x: 9.45356, p: 578156}, {y: 30.28321, x: 57.07879, p: 577514}, {
                y: -6.77137,
                x: -79.84088,
                p: 577375
            }, {y: 37.55274, x: 45.07605, p: 577307}, {y: 41.00231, x: 28.8598, p: 576799}, {
                y: 32.94083,
                x: 117.36083,
                p: 576648
            }, {y: 28.02094, x: 73.30749, p: 576015}, {y: 41.01643, x: 29.12476, p: 573265}, {
                y: 51.22172,
                x: 6.77616,
                p: 573057
            }, {y: -3.31987, x: 114.59075, p: 572837}, {y: 44.3023, x: 86.03694, p: 572772}, {
                y: 7.12539,
                x: -73.1198,
                p: 571820
            }, {y: 42.33343, x: -71.04949, p: 571281}, {y: 1.55, x: 110.33333, p: 570407}, {
                y: 52.40692,
                x: 16.92993,
                p: 570352
            }, {y: 19.18095, x: -96.1429, p: 568313}, {y: 36.72016, x: -4.42034, p: 568305}, {
                y: 7.69385,
                x: -5.03031,
                p: 567481
            }, {y: 15.33805, x: 38.93184, p: 563930}, {y: 13.06269, x: 5.24322, p: 563861}, {
                y: -18.91861,
                x: -48.27722,
                p: 563536
            }, {y: 6.14543, x: 6.78845, p: 561066}, {y: 35.69306, x: 139.98333, p: 560743}, {
                y: 39.91833,
                x: 127.53639,
                p: 559056
            }, {y: -23.50167, x: -47.45806, p: 558862}, {y: 60.16952, x: 24.93545, p: 558457}, {
                y: 18,
                x: 79.58333,
                p: 557802
            }, {y: 20.02472, x: -75.82194, p: 555865}, {y: 43.16143, x: 124.37785, p: 555609}, {
                y: 31.56019,
                x: 130.55814,
                p: 555352
            }, {y: -7.55611, x: 110.83167, p: 555308}, {y: 33.58861, x: 119.01917, p: 555230}, {
                y: 21.77445,
                x: 72.1525,
                p: 554978
            }, {y: -38.00228, x: -57.55754, p: 553935}, {y: 29.4, x: 71.68333, p: 552607}, {
                y: 29.4963,
                x: 60.8629,
                p: 551980
            }, {y: 12.77944, x: 45.03667, p: 550602}, {y: 19.16023, x: 77.31497, p: 550564}, {
                y: 51.7727,
                x: 55.0988,
                p: 550204
            }, {y: 42.67272, x: 21.16688, p: 55e4}, {y: 35.22806, x: 128.68111, p: 55e4}, {
                y: 46.79927,
                x: 130.31633,
                p: 549549
            }, {y: 14.62578, x: 121.12251, p: 549543}, {y: 29.58354, x: 105.06216, p: 546854}, {
                y: 53.07516,
                x: 8.80777,
                p: 546501
            }, {y: 35.08449, x: -106.65114, p: 545852}, {y: 33.89352, x: -5.54727, p: 545705}, {
                y: 25.33737,
                x: 55.41206,
                p: 543733
            }, {y: 25.01427, x: 121.46719, p: 543342}, {y: 32.08361, x: 72.67111, p: 542603}, {
                y: 4.36122,
                x: 18.55496,
                p: 542393
            }, {y: 54.68916, x: 25.2798, p: 542366}, {y: 21.17429, x: -86.84656, p: 542043}, {
                y: 32.39722,
                x: 119.43583,
                p: 539715
            }, {y: 53.7557, x: 87.1099, p: 539616}, {y: .51528, x: 25.19099, p: 539158}, {
                y: 31.25654,
                x: 32.28411,
                p: 538378
            }, {y: 36.79526, x: 34.61792, p: 537842}, {y: 5.51667, x: 5.75, p: 536023}, {
                y: 28.88162,
                x: 120.03308,
                p: 536e3
            }, {y: 6.60086, x: 3.48818, p: 535619}, {y: 39.02111, x: 117.64694, p: 535298}, {
                y: 22.58333,
                x: 113.08333,
                p: 532419
            }, {y: 36.16589, x: -86.78444, p: 530852}, {y: 21.27028, x: 40.41583, p: 530848}, {
                y: -19.84361,
                x: 34.83889,
                p: 530604
            }, {y: 16.29974, x: 80.45729, p: 530577}, {y: 14.85, x: -15.88333, p: 529176}, {
                y: 46.81228,
                x: -71.21454,
                p: 528595
            }, {y: 34.79922, x: 48.51456, p: 528256}, {y: 38.31667, x: 116.86667, p: 527681}, {
                y: 13.68935,
                x: -89.18718,
                p: 525990
            }, {y: 19.42155, x: -98.95038, p: 525389}, {y: 25.54389, x: -103.41898, p: 524066}, {
                y: 30.32443,
                x: 78.03392,
                p: 522081
            }, {y: -15.59611, x: -56.09667, p: 521934}, {y: 19.44506, x: -99.14612, p: 521348}, {
                y: 19.58547,
                x: -99.26035,
                p: 521034
            }, {y: 3.10726, x: 101.60671, p: 520698}, {y: 22.20056, x: 113.54611, p: 520400}, {
                y: 19.30157,
                x: 72.85107,
                p: 520301
            }, {y: 41.0435, x: 28.87619, p: 520235}, {y: 54.6269, x: 39.6916, p: 520173}, {
                y: 32.22174,
                x: -110.92648,
                p: 520116
            }, {y: 43.25011, x: -79.84963, p: 519949}, {y: 57.15222, x: 65.52722, p: 519119}, {
                y: 23.49957,
                x: 87.32155,
                p: 518872
            }, {y: -34.72418, x: -58.25265, p: 518788}, {y: 26.44976, x: 74.64116, p: 517911}, {
                y: 38.71667,
                x: -9.13333,
                p: 517802
            }, {y: 29.04638, x: 111.6783, p: 517780}, {y: 35.23972, x: 113.23306, p: 517540}, {
                y: 19.21667,
                x: 73.15,
                p: 516584
            }, {y: 16.69563, x: 74.23167, p: 516142}, {y: 52.60311, x: 39.57076, p: 515655}, {
                y: 26.71004,
                x: 88.42851,
                p: 515574
            }, {y: 52.37052, x: 9.73322, p: 515140}, {y: 39.77667, x: 30.52056, p: 514869}, {
                y: 34.79049,
                x: 48.57011,
                p: 514102
            }, {y: -24.7859, x: -65.41166, p: 512686}, {y: 53.20066, x: 45.00464, p: 512602}, {
                y: -25.99636,
                x: 28.2268,
                p: 511655
            }, {y: 20.76957, x: 72.96134, p: 510879}, {y: 46.96591, x: 31.9974, p: 510840}, {
                y: -16.82333,
                x: -49.24389,
                p: 510770
            }, {y: -33.61169, x: -70.57577, p: 510417}, {y: 14.55027, x: 121.03269, p: 510383}, {
                y: 55.72545,
                x: 52.41122,
                p: 509870
            }, {y: 31.33728, x: 118.37351, p: 507524}, {y: 19.28786, x: -99.65324, p: 505881}, {
                y: 37.90222,
                x: 139.02361,
                p: 505272
            }, {y: 28.65156, x: 77.18859, p: 505241}, {y: 51.33962, x: 12.37129, p: 504971}, {
                y: 59.99675,
                x: 30.3899,
                p: 504641
            }, {y: 51.43247, x: 6.76516, p: 504358}, {y: 23.68333, x: 86.98333, p: 504271}, {
                y: 57.70716,
                x: 11.96679,
                p: 504084
            }, {y: 34.09174, x: 49.68916, p: 503647}, {y: 46.34968, x: 48.04076, p: 502533}, {
                y: 22.27694,
                x: 113.56778,
                p: 501199
            }, {y: 36.03222, x: 129.365, p: 5e5}]
        }
    }, 727: function (e, t, r) {
        "use strict";
        r.r(t);
        var i = r(0), o = r.n(i), a = r(106), n = r.n(a);
        r(112), r(148);

        function s() {
            return {
                children: [{
                    children: [{
                        attributes: {
                            Vertex: {
                                itemSize: 3,
                                type: "ARRAY_BUFFER"
                            }
                        }, name: "", primitives: [{count: 64380, first: 0, mode: "TRIANGLES"}]
                    }],
                    name: "continents.osg",
                    stateset: {
                        material: {
                            ambient: [.2, .2, .2, 1],
                            diffuse: [.840188, .394383, .783099, 1],
                            emission: [0, 0, 0, 1],
                            name: "",
                            shininess: 0,
                            specular: [0, 0, 0, 1]
                        }
                    }
                }]
            }
        }

        var h, l, c, p, u, f, d, m, y, g, v, x, w, _, b, M, S, A, T, E, C, P, L, D, R, F, U, V, z, B, N, O, k, I, G, W,
            H, j, X, q, Y, K, Z, Q, J, $ = {REVISION: "67"};
        self.console = self.console || {
            info: function () {
            }, log: function () {
            }, debug: function () {
            }, warn: function () {
            }, error: function () {
            }
        }, function () {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !self.requestAnimationFrame; ++r) self.requestAnimationFrame = self[t[r] + "RequestAnimationFrame"], self.cancelAnimationFrame = self[t[r] + "CancelAnimationFrame"] || self[t[r] + "CancelRequestAnimationFrame"];
            void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout && (self.requestAnimationFrame = function (t) {
                var r = Date.now(), i = Math.max(0, 16 - (r - e)), o = self.setTimeout((function () {
                    t(r + i)
                }), i);
                return e = r + i, o
            }), void 0 === self.cancelAnimationFrame && void 0 !== self.clearTimeout && (self.cancelAnimationFrame = function (e) {
                self.clearTimeout(e)
            })
        }(), $.CullFaceNone = 0, $.CullFaceBack = 1, $.CullFaceFront = 2, $.CullFaceFrontBack = 3, $.FrontFaceDirectionCW = 0, $.FrontFaceDirectionCCW = 1, $.BasicShadowMap = 0, $.PCFShadowMap = 1, $.PCFSoftShadowMap = 2, $.FrontSide = 0, $.BackSide = 1, $.DoubleSide = 2, $.NoShading = 0, $.FlatShading = 1, $.SmoothShading = 2, $.NoColors = 0, $.FaceColors = 1, $.VertexColors = 2, $.NoBlending = 0, $.NormalBlending = 1, $.AdditiveBlending = 2, $.SubtractiveBlending = 3, $.MultiplyBlending = 4, $.CustomBlending = 5, $.AddEquation = 100, $.SubtractEquation = 101, $.ReverseSubtractEquation = 102, $.ZeroFactor = 200, $.OneFactor = 201, $.SrcColorFactor = 202, $.OneMinusSrcColorFactor = 203, $.SrcAlphaFactor = 204, $.OneMinusSrcAlphaFactor = 205, $.DstAlphaFactor = 206, $.OneMinusDstAlphaFactor = 207, $.DstColorFactor = 208, $.OneMinusDstColorFactor = 209, $.SrcAlphaSaturateFactor = 210, $.MultiplyOperation = 0, $.MixOperation = 1, $.AddOperation = 2, $.UVMapping = function () {
        }, $.CubeReflectionMapping = function () {
        }, $.CubeRefractionMapping = function () {
        }, $.SphericalReflectionMapping = function () {
        }, $.SphericalRefractionMapping = function () {
        }, $.RepeatWrapping = 1e3, $.ClampToEdgeWrapping = 1001, $.MirroredRepeatWrapping = 1002, $.NearestFilter = 1003, $.NearestMipMapNearestFilter = 1004, $.NearestMipMapLinearFilter = 1005, $.LinearFilter = 1006, $.LinearMipMapNearestFilter = 1007, $.LinearMipMapLinearFilter = 1008, $.UnsignedByteType = 1009, $.ByteType = 1010, $.ShortType = 1011, $.UnsignedShortType = 1012, $.IntType = 1013, $.UnsignedIntType = 1014, $.FloatType = 1015, $.UnsignedShort4444Type = 1016, $.UnsignedShort5551Type = 1017, $.UnsignedShort565Type = 1018, $.AlphaFormat = 1019, $.RGBFormat = 1020, $.RGBAFormat = 1021, $.LuminanceFormat = 1022, $.LuminanceAlphaFormat = 1023, $.RGB_S3TC_DXT1_Format = 2001, $.RGBA_S3TC_DXT1_Format = 2002, $.RGBA_S3TC_DXT3_Format = 2003, $.RGBA_S3TC_DXT5_Format = 2004, $.Color = function (e) {
            return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(e)
        }, $.Color.prototype = {
            constructor: $.Color, r: 1, g: 1, b: 1, set: function (e) {
                return e instanceof $.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
            }, setHex: function (e) {
                return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
            }, setRGB: function (e, t, r) {
                return this.r = e, this.g = t, this.b = r, this
            }, setHSL: function (e, t, r) {
                if (0 === t) this.r = this.g = this.b = r; else {
                    var i = function (e, t, r) {
                        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - r) : e
                    }, o = r <= .5 ? r * (1 + t) : r + t - r * t, a = 2 * r - o;
                    this.r = i(a, o, e + 1 / 3), this.g = i(a, o, e), this.b = i(a, o, e - 1 / 3)
                }
                return this
            }, setStyle: function (e) {
                if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
                    var t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
                    return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, this
                }
                if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)) {
                    t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e);
                    return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, this
                }
                if (/^\#([0-9a-f]{6})$/i.test(e)) {
                    t = /^\#([0-9a-f]{6})$/i.exec(e);
                    return this.setHex(parseInt(t[1], 16)), this
                }
                if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
                    t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
                    return this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)), this
                }
                if (/^(\w+)$/i.test(e)) return this.setHex($.ColorKeywords[e]), this
            }, copy: function (e) {
                return this.r = e.r, this.g = e.g, this.b = e.b, this
            }, copyGammaToLinear: function (e) {
                return this.r = e.r * e.r, this.g = e.g * e.g, this.b = e.b * e.b, this
            }, copyLinearToGamma: function (e) {
                return this.r = Math.sqrt(e.r), this.g = Math.sqrt(e.g), this.b = Math.sqrt(e.b), this
            }, convertGammaToLinear: function () {
                var e = this.r, t = this.g, r = this.b;
                return this.r = e * e, this.g = t * t, this.b = r * r, this
            }, convertLinearToGamma: function () {
                return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
            }, getHex: function () {
                return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
            }, getHexString: function () {
                return ("000000" + this.getHex().toString(16)).slice(-6)
            }, getHSL: function (e) {
                var t, r, i = e || {h: 0, s: 0, l: 0}, o = this.r, a = this.g, n = this.b, s = Math.max(o, a, n),
                    h = Math.min(o, a, n), l = (h + s) / 2;
                if (h === s) t = 0, r = 0; else {
                    var c = s - h;
                    switch (r = l <= .5 ? c / (s + h) : c / (2 - s - h), s) {
                        case o:
                            t = (a - n) / c + (a < n ? 6 : 0);
                            break;
                        case a:
                            t = (n - o) / c + 2;
                            break;
                        case n:
                            t = (o - a) / c + 4
                    }
                    t /= 6
                }
                return i.h = t, i.s = r, i.l = l, i
            }, getStyle: function () {
                return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
            }, offsetHSL: function (e, t, r) {
                var i = this.getHSL();
                return i.h += e, i.s += t, i.l += r, this.setHSL(i.h, i.s, i.l), this
            }, add: function (e) {
                return this.r += e.r, this.g += e.g, this.b += e.b, this
            }, addColors: function (e, t) {
                return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
            }, addScalar: function (e) {
                return this.r += e, this.g += e, this.b += e, this
            }, multiply: function (e) {
                return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
            }, multiplyScalar: function (e) {
                return this.r *= e, this.g *= e, this.b *= e, this
            }, lerp: function (e, t) {
                return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
            }, equals: function (e) {
                return e.r === this.r && e.g === this.g && e.b === this.b
            }, fromArray: function (e) {
                return this.r = e[0], this.g = e[1], this.b = e[2], this
            }, toArray: function () {
                return [this.r, this.g, this.b]
            }, clone: function () {
                return (new $.Color).setRGB(this.r, this.g, this.b)
            }
        }, $.ColorKeywords = {
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
        }, $.Quaternion = function (e, t, r, i) {
            this._x = e || 0, this._y = t || 0, this._z = r || 0, this._w = void 0 !== i ? i : 1
        }, $.Quaternion.prototype = {
            constructor: $.Quaternion, _x: 0, _y: 0, _z: 0, _w: 0, get x() {
                return this._x
            }, set x(e) {
                this._x = e, this.onChangeCallback()
            }, get y() {
                return this._y
            }, set y(e) {
                this._y = e, this.onChangeCallback()
            }, get z() {
                return this._z
            }, set z(e) {
                this._z = e, this.onChangeCallback()
            }, get w() {
                return this._w
            }, set w(e) {
                this._w = e, this.onChangeCallback()
            }, set: function (e, t, r, i) {
                return this._x = e, this._y = t, this._z = r, this._w = i, this.onChangeCallback(), this
            }, copy: function (e) {
                return this._x = e._x, this._y = e._y, this._z = e._z, this._w = e._w, this.onChangeCallback(), this
            }, setFromEuler: function (e, t) {
                if (e instanceof $.Euler == !1) throw new Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
                var r = Math.cos(e._x / 2), i = Math.cos(e._y / 2), o = Math.cos(e._z / 2), a = Math.sin(e._x / 2),
                    n = Math.sin(e._y / 2), s = Math.sin(e._z / 2);
                return "XYZ" === e.order ? (this._x = a * i * o + r * n * s, this._y = r * n * o - a * i * s, this._z = r * i * s + a * n * o, this._w = r * i * o - a * n * s) : "YXZ" === e.order ? (this._x = a * i * o + r * n * s, this._y = r * n * o - a * i * s, this._z = r * i * s - a * n * o, this._w = r * i * o + a * n * s) : "ZXY" === e.order ? (this._x = a * i * o - r * n * s, this._y = r * n * o + a * i * s, this._z = r * i * s + a * n * o, this._w = r * i * o - a * n * s) : "ZYX" === e.order ? (this._x = a * i * o - r * n * s, this._y = r * n * o + a * i * s, this._z = r * i * s - a * n * o, this._w = r * i * o + a * n * s) : "YZX" === e.order ? (this._x = a * i * o + r * n * s, this._y = r * n * o + a * i * s, this._z = r * i * s - a * n * o, this._w = r * i * o - a * n * s) : "XZY" === e.order && (this._x = a * i * o - r * n * s, this._y = r * n * o - a * i * s, this._z = r * i * s + a * n * o, this._w = r * i * o + a * n * s), !1 !== t && this.onChangeCallback(), this
            }, setFromAxisAngle: function (e, t) {
                var r = t / 2, i = Math.sin(r);
                return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(r), this.onChangeCallback(), this
            }, setFromRotationMatrix: function (e) {
                var t, r = e.elements, i = r[0], o = r[4], a = r[8], n = r[1], s = r[5], h = r[9], l = r[2], c = r[6],
                    p = r[10], u = i + s + p;
                return u > 0 ? (t = .5 / Math.sqrt(u + 1), this._w = .25 / t, this._x = (c - h) * t, this._y = (a - l) * t, this._z = (n - o) * t) : i > s && i > p ? (t = 2 * Math.sqrt(1 + i - s - p), this._w = (c - h) / t, this._x = .25 * t, this._y = (o + n) / t, this._z = (a + l) / t) : s > p ? (t = 2 * Math.sqrt(1 + s - i - p), this._w = (a - l) / t, this._x = (o + n) / t, this._y = .25 * t, this._z = (h + c) / t) : (t = 2 * Math.sqrt(1 + p - i - s), this._w = (n - o) / t, this._x = (a + l) / t, this._y = (h + c) / t, this._z = .25 * t), this.onChangeCallback(), this
            }, setFromUnitVectors: function (e, t) {
                return void 0 === h && (h = new $.Vector3), (l = e.dot(t) + 1) < 1e-6 ? (l = 0, Math.abs(e.x) > Math.abs(e.z) ? h.set(-e.y, e.x, 0) : h.set(0, -e.z, e.y)) : h.crossVectors(e, t), this._x = h.x, this._y = h.y, this._z = h.z, this._w = l, this.normalize(), this
            }, inverse: function () {
                return this.conjugate().normalize(), this
            }, conjugate: function () {
                return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
            }, lengthSq: function () {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            }, length: function () {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }, normalize: function () {
                var e = this.length();
                return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
            }, multiply: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
            }, multiplyQuaternions: function (e, t) {
                var r = e._x, i = e._y, o = e._z, a = e._w, n = t._x, s = t._y, h = t._z, l = t._w;
                return this._x = r * l + a * n + i * h - o * s, this._y = i * l + a * s + o * n - r * h, this._z = o * l + a * h + r * s - i * n, this._w = a * l - r * n - i * s - o * h, this.onChangeCallback(), this
            }, multiplyVector3: function (e) {
                return console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
            }, slerp: function (e, t) {
                var r = this._x, i = this._y, o = this._z, a = this._w, n = a * e._w + r * e._x + i * e._y + o * e._z;
                if (n < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, n = -n) : this.copy(e), n >= 1) return this._w = a, this._x = r, this._y = i, this._z = o, this;
                var s = Math.acos(n), h = Math.sqrt(1 - n * n);
                if (Math.abs(h) < .001) return this._w = .5 * (a + this._w), this._x = .5 * (r + this._x), this._y = .5 * (i + this._y), this._z = .5 * (o + this._z), this;
                var l = Math.sin((1 - t) * s) / h, c = Math.sin(t * s) / h;
                return this._w = a * l + this._w * c, this._x = r * l + this._x * c, this._y = i * l + this._y * c, this._z = o * l + this._z * c, this.onChangeCallback(), this
            }, equals: function (e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
            }, fromArray: function (e) {
                return this._x = e[0], this._y = e[1], this._z = e[2], this._w = e[3], this.onChangeCallback(), this
            }, toArray: function () {
                return [this._x, this._y, this._z, this._w]
            }, onChange: function (e) {
                return this.onChangeCallback = e, this
            }, onChangeCallback: function () {
            }, clone: function () {
                return new $.Quaternion(this._x, this._y, this._z, this._w)
            }
        }, $.Quaternion.slerp = function (e, t, r, i) {
            return r.copy(e).slerp(t, i)
        }, $.Vector2 = function (e, t) {
            this.x = e || 0, this.y = t || 0
        }, $.Vector2.prototype = {
            constructor: $.Vector2, set: function (e, t) {
                return this.x = e, this.y = t, this
            }, setX: function (e) {
                return this.x = e, this
            }, setY: function (e) {
                return this.y = e, this
            }, setComponent: function (e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, getComponent: function (e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, copy: function (e) {
                return this.x = e.x, this.y = e.y, this
            }, add: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
            }, addVectors: function (e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this
            }, addScalar: function (e) {
                return this.x += e, this.y += e, this
            }, sub: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
            }, subVectors: function (e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this
            }, multiply: function (e) {
                return this.x *= e.x, this.y *= e.y, this
            }, multiplyScalar: function (e) {
                return this.x *= e, this.y *= e, this
            }, divide: function (e) {
                return this.x /= e.x, this.y /= e.y, this
            }, divideScalar: function (e) {
                if (0 !== e) {
                    var t = 1 / e;
                    this.x *= t, this.y *= t
                } else this.x = 0, this.y = 0;
                return this
            }, min: function (e) {
                return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this
            }, max: function (e) {
                return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this
            }, clamp: function (e, t) {
                return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this
            }, clampScalar: function (e, t) {
                return void 0 === c && (c = new $.Vector2, p = new $.Vector2), c.set(e, e), p.set(t, t), this.clamp(c, p)
            }, floor: function () {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            }, ceil: function () {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            }, round: function () {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            }, roundToZero: function () {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
            }, negate: function () {
                return this.multiplyScalar(-1)
            }, dot: function (e) {
                return this.x * e.x + this.y * e.y
            }, lengthSq: function () {
                return this.x * this.x + this.y * this.y
            }, length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, normalize: function () {
                return this.divideScalar(this.length())
            }, distanceTo: function (e) {
                return Math.sqrt(this.distanceToSquared(e))
            }, distanceToSquared: function (e) {
                var t = this.x - e.x, r = this.y - e.y;
                return t * t + r * r
            }, setLength: function (e) {
                var t = this.length();
                return 0 !== t && e !== t && this.multiplyScalar(e / t), this
            }, lerp: function (e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
            }, equals: function (e) {
                return e.x === this.x && e.y === this.y
            }, fromArray: function (e) {
                return this.x = e[0], this.y = e[1], this
            }, toArray: function () {
                return [this.x, this.y]
            }, clone: function () {
                return new $.Vector2(this.x, this.y)
            }
        }, $.Vector3 = function (e, t, r) {
            this.x = e || 0, this.y = t || 0, this.z = r || 0
        }, $.Vector3.prototype = {
            constructor: $.Vector3, set: function (e, t, r) {
                return this.x = e, this.y = t, this.z = r, this
            }, setX: function (e) {
                return this.x = e, this
            }, setY: function (e) {
                return this.y = e, this
            }, setZ: function (e) {
                return this.z = e, this
            }, setComponent: function (e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, getComponent: function (e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, copy: function (e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this
            }, add: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
            }, addScalar: function (e) {
                return this.x += e, this.y += e, this.z += e, this
            }, addVectors: function (e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
            }, sub: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
            }, subVectors: function (e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
            }, multiply: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
            }, multiplyScalar: function (e) {
                return this.x *= e, this.y *= e, this.z *= e, this
            }, multiplyVectors: function (e, t) {
                return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
            }, applyEuler: function (e) {
                return e instanceof $.Euler == 0 && console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code."), void 0 === u && (u = new $.Quaternion), this.applyQuaternion(u.setFromEuler(e)), this
            }, applyAxisAngle: function () {
                var e;
                return function (t, r) {
                    return void 0 === e && (e = new $.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, r)), this
                }
            }(), applyMatrix3: function (e) {
                var t = this.x, r = this.y, i = this.z, o = e.elements;
                return this.x = o[0] * t + o[3] * r + o[6] * i, this.y = o[1] * t + o[4] * r + o[7] * i, this.z = o[2] * t + o[5] * r + o[8] * i, this
            }, applyMatrix4: function (e) {
                var t = this.x, r = this.y, i = this.z, o = e.elements;
                return this.x = o[0] * t + o[4] * r + o[8] * i + o[12], this.y = o[1] * t + o[5] * r + o[9] * i + o[13], this.z = o[2] * t + o[6] * r + o[10] * i + o[14], this
            }, applyProjection: function (e) {
                var t = this.x, r = this.y, i = this.z, o = e.elements,
                    a = 1 / (o[3] * t + o[7] * r + o[11] * i + o[15]);
                return this.x = (o[0] * t + o[4] * r + o[8] * i + o[12]) * a, this.y = (o[1] * t + o[5] * r + o[9] * i + o[13]) * a, this.z = (o[2] * t + o[6] * r + o[10] * i + o[14]) * a, this
            }, applyQuaternion: function (e) {
                var t = this.x, r = this.y, i = this.z, o = e.x, a = e.y, n = e.z, s = e.w, h = s * t + a * i - n * r,
                    l = s * r + n * t - o * i, c = s * i + o * r - a * t, p = -o * t - a * r - n * i;
                return this.x = h * s + p * -o + l * -n - c * -a, this.y = l * s + p * -a + c * -o - h * -n, this.z = c * s + p * -n + h * -a - l * -o, this
            }, transformDirection: function (e) {
                var t = this.x, r = this.y, i = this.z, o = e.elements;
                return this.x = o[0] * t + o[4] * r + o[8] * i, this.y = o[1] * t + o[5] * r + o[9] * i, this.z = o[2] * t + o[6] * r + o[10] * i, this.normalize(), this
            }, divide: function (e) {
                return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
            }, divideScalar: function (e) {
                if (0 !== e) {
                    var t = 1 / e;
                    this.x *= t, this.y *= t, this.z *= t
                } else this.x = 0, this.y = 0, this.z = 0;
                return this
            }, min: function (e) {
                return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this
            }, max: function (e) {
                return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this
            }, clamp: function (e, t) {
                return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this
            }, clampScalar: function () {
                var e, t;
                return function (r, i) {
                    return void 0 === e && (e = new $.Vector3, t = new $.Vector3), e.set(r, r, r), t.set(i, i, i), this.clamp(e, t)
                }
            }(), floor: function () {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
            }, ceil: function () {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
            }, round: function () {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
            }, roundToZero: function () {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
            }, negate: function () {
                return this.multiplyScalar(-1)
            }, dot: function (e) {
                return this.x * e.x + this.y * e.y + this.z * e.z
            }, lengthSq: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }, length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }, lengthManhattan: function () {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            }, normalize: function () {
                return this.divideScalar(this.length())
            }, setLength: function (e) {
                var t = this.length();
                return 0 !== t && e !== t && this.multiplyScalar(e / t), this
            }, lerp: function (e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
            }, cross: function (e, t) {
                if (void 0 !== t) return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
                var r = this.x, i = this.y, o = this.z;
                return this.x = i * e.z - o * e.y, this.y = o * e.x - r * e.z, this.z = r * e.y - i * e.x, this
            }, crossVectors: function (e, t) {
                var r = e.x, i = e.y, o = e.z, a = t.x, n = t.y, s = t.z;
                return this.x = i * s - o * n, this.y = o * a - r * s, this.z = r * n - i * a, this
            }, projectOnVector: function () {
                var e, t;
                return function (r) {
                    return void 0 === e && (e = new $.Vector3), e.copy(r).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t)
                }
            }(), projectOnPlane: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new $.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
                }
            }(), reflect: function () {
                var e;
                return function (t) {
                    return void 0 === e && (e = new $.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
                }
            }(), angleTo: function (e) {
                var t = this.dot(e) / (this.length() * e.length());
                return Math.acos($.Math.clamp(t, -1, 1))
            }, distanceTo: function (e) {
                return Math.sqrt(this.distanceToSquared(e))
            }, distanceToSquared: function (e) {
                var t = this.x - e.x, r = this.y - e.y, i = this.z - e.z;
                return t * t + r * r + i * i
            }, setEulerFromRotationMatrix: function (e, t) {
                console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")
            }, setEulerFromQuaternion: function (e, t) {
                console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")
            }, getPositionFromMatrix: function (e) {
                return console.warn("DEPRECATED: Vector3's .getPositionFromMatrix() has been renamed to .setFromMatrixPosition(). Please update your code."), this.setFromMatrixPosition(e)
            }, getScaleFromMatrix: function (e) {
                return console.warn("DEPRECATED: Vector3's .getScaleFromMatrix() has been renamed to .setFromMatrixScale(). Please update your code."), this.setFromMatrixScale(e)
            }, getColumnFromMatrix: function (e, t) {
                return console.warn("DEPRECATED: Vector3's .getColumnFromMatrix() has been renamed to .setFromMatrixColumn(). Please update your code."), this.setFromMatrixColumn(e, t)
            }, setFromMatrixPosition: function (e) {
                return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
            }, setFromMatrixScale: function (e) {
                var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
                    r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
                    i = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
                return this.x = t, this.y = r, this.z = i, this
            }, setFromMatrixColumn: function (e, t) {
                var r = 4 * e, i = t.elements;
                return this.x = i[r], this.y = i[r + 1], this.z = i[r + 2], this
            }, equals: function (e) {
                return e.x === this.x && e.y === this.y && e.z === this.z
            }, fromArray: function (e) {
                return this.x = e[0], this.y = e[1], this.z = e[2], this
            }, toArray: function () {
                return [this.x, this.y, this.z]
            }, clone: function () {
                return new $.Vector3(this.x, this.y, this.z)
            }
        }, $.Vector4 = function (e, t, r, i) {
            this.x = e || 0, this.y = t || 0, this.z = r || 0, this.w = void 0 !== i ? i : 1
        }, $.Vector4.prototype = {
            constructor: $.Vector4, set: function (e, t, r, i) {
                return this.x = e, this.y = t, this.z = r, this.w = i, this
            }, setX: function (e) {
                return this.x = e, this
            }, setY: function (e) {
                return this.y = e, this
            }, setZ: function (e) {
                return this.z = e, this
            }, setW: function (e) {
                return this.w = e, this
            }, setComponent: function (e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    case 3:
                        this.w = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, getComponent: function (e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    case 3:
                        return this.w;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }, copy: function (e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
            }, add: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
            }, addScalar: function (e) {
                return this.x += e, this.y += e, this.z += e, this.w += e, this
            }, addVectors: function (e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
            }, sub: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
            }, subVectors: function (e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
            }, multiplyScalar: function (e) {
                return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
            }, applyMatrix4: function (e) {
                var t = this.x, r = this.y, i = this.z, o = this.w, a = e.elements;
                return this.x = a[0] * t + a[4] * r + a[8] * i + a[12] * o, this.y = a[1] * t + a[5] * r + a[9] * i + a[13] * o, this.z = a[2] * t + a[6] * r + a[10] * i + a[14] * o, this.w = a[3] * t + a[7] * r + a[11] * i + a[15] * o, this
            }, divideScalar: function (e) {
                if (0 !== e) {
                    var t = 1 / e;
                    this.x *= t, this.y *= t, this.z *= t, this.w *= t
                } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
                return this
            }, setAxisAngleFromQuaternion: function (e) {
                this.w = 2 * Math.acos(e.w);
                var t = Math.sqrt(1 - e.w * e.w);
                return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
            }, setAxisAngleFromRotationMatrix: function (e) {
                var t, r, i, o, a = e.elements, n = a[0], s = a[4], h = a[8], l = a[1], c = a[5], p = a[9], u = a[2],
                    f = a[6], d = a[10];
                if (Math.abs(s - l) < .01 && Math.abs(h - u) < .01 && Math.abs(p - f) < .01) {
                    if (Math.abs(s + l) < .1 && Math.abs(h + u) < .1 && Math.abs(p + f) < .1 && Math.abs(n + c + d - 3) < .1) return this.set(1, 0, 0, 0), this;
                    t = Math.PI;
                    var m = (n + 1) / 2, y = (c + 1) / 2, g = (d + 1) / 2, v = (s + l) / 4, x = (h + u) / 4,
                        w = (p + f) / 4;
                    return m > y && m > g ? m < .01 ? (r = 0, i = .707106781, o = .707106781) : (i = v / (r = Math.sqrt(m)), o = x / r) : y > g ? y < .01 ? (r = .707106781, i = 0, o = .707106781) : (r = v / (i = Math.sqrt(y)), o = w / i) : g < .01 ? (r = .707106781, i = .707106781, o = 0) : (r = x / (o = Math.sqrt(g)), i = w / o), this.set(r, i, o, t), this
                }
                var _ = Math.sqrt((f - p) * (f - p) + (h - u) * (h - u) + (l - s) * (l - s));
                return Math.abs(_) < .001 && (_ = 1), this.x = (f - p) / _, this.y = (h - u) / _, this.z = (l - s) / _, this.w = Math.acos((n + c + d - 1) / 2), this
            }, min: function (e) {
                return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this.w > e.w && (this.w = e.w), this
            }, max: function (e) {
                return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this.w < e.w && (this.w = e.w), this
            }, clamp: function (e, t) {
                return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w), this
            }, clampScalar: function () {
                var e, t;
                return function (r, i) {
                    return void 0 === e && (e = new $.Vector4, t = new $.Vector4), e.set(r, r, r, r), t.set(i, i, i, i), this.clamp(e, t)
                }
            }(), floor: function () {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
            }, ceil: function () {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
            }, round: function () {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
            }, roundToZero: function () {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
            }, negate: function () {
                return this.multiplyScalar(-1)
            }, dot: function (e) {
                return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
            }, lengthSq: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }, length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }, lengthManhattan: function () {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            }, normalize: function () {
                return this.divideScalar(this.length())
            }, setLength: function (e) {
                var t = this.length();
                return 0 !== t && e !== t && this.multiplyScalar(e / t), this
            }, lerp: function (e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
            }, equals: function (e) {
                return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
            }, fromArray: function (e) {
                return this.x = e[0], this.y = e[1], this.z = e[2], this.w = e[3], this
            }, toArray: function () {
                return [this.x, this.y, this.z, this.w]
            }, clone: function () {
                return new $.Vector4(this.x, this.y, this.z, this.w)
            }
        }, $.Euler = function (e, t, r, i) {
            this._x = e || 0, this._y = t || 0, this._z = r || 0, this._order = i || $.Euler.DefaultOrder
        }, $.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], $.Euler.DefaultOrder = "XYZ", $.Euler.prototype = {
            constructor: $.Euler, _x: 0, _y: 0, _z: 0, _order: $.Euler.DefaultOrder, get x() {
                return this._x
            }, set x(e) {
                this._x = e, this.onChangeCallback()
            }, get y() {
                return this._y
            }, set y(e) {
                this._y = e, this.onChangeCallback()
            }, get z() {
                return this._z
            }, set z(e) {
                this._z = e, this.onChangeCallback()
            }, get order() {
                return this._order
            }, set order(e) {
                this._order = e, this.onChangeCallback()
            }, set: function (e, t, r, i) {
                return this._x = e, this._y = t, this._z = r, this._order = i || this._order, this.onChangeCallback(), this
            }, copy: function (e) {
                return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
            }, setFromRotationMatrix: function (e, t) {
                var r = $.Math.clamp, i = e.elements, o = i[0], a = i[4], n = i[8], s = i[1], h = i[5], l = i[9],
                    c = i[2], p = i[6], u = i[10];
                return "XYZ" === (t = t || this._order) ? (this._y = Math.asin(r(n, -1, 1)), Math.abs(n) < .99999 ? (this._x = Math.atan2(-l, u), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(p, h), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-r(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(n, u), this._z = Math.atan2(s, h)) : (this._y = Math.atan2(-c, o), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(r(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-c, u), this._z = Math.atan2(-a, h)) : (this._y = 0, this._z = Math.atan2(s, o))) : "ZYX" === t ? (this._y = Math.asin(-r(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(p, u), this._z = Math.atan2(s, o)) : (this._x = 0, this._z = Math.atan2(-a, h))) : "YZX" === t ? (this._z = Math.asin(r(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-c, o)) : (this._x = 0, this._y = Math.atan2(n, u))) : "XZY" === t ? (this._z = Math.asin(-r(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(p, h), this._y = Math.atan2(n, o)) : (this._x = Math.atan2(-l, u), this._y = 0)) : console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: " + t), this._order = t, this.onChangeCallback(), this
            }, setFromQuaternion: function (e, t, r) {
                var i = $.Math.clamp, o = e.x * e.x, a = e.y * e.y, n = e.z * e.z, s = e.w * e.w;
                return "XYZ" === (t = t || this._order) ? (this._x = Math.atan2(2 * (e.x * e.w - e.y * e.z), s - o - a + n), this._y = Math.asin(i(2 * (e.x * e.z + e.y * e.w), -1, 1)), this._z = Math.atan2(2 * (e.z * e.w - e.x * e.y), s + o - a - n)) : "YXZ" === t ? (this._x = Math.asin(i(2 * (e.x * e.w - e.y * e.z), -1, 1)), this._y = Math.atan2(2 * (e.x * e.z + e.y * e.w), s - o - a + n), this._z = Math.atan2(2 * (e.x * e.y + e.z * e.w), s - o + a - n)) : "ZXY" === t ? (this._x = Math.asin(i(2 * (e.x * e.w + e.y * e.z), -1, 1)), this._y = Math.atan2(2 * (e.y * e.w - e.z * e.x), s - o - a + n), this._z = Math.atan2(2 * (e.z * e.w - e.x * e.y), s - o + a - n)) : "ZYX" === t ? (this._x = Math.atan2(2 * (e.x * e.w + e.z * e.y), s - o - a + n), this._y = Math.asin(i(2 * (e.y * e.w - e.x * e.z), -1, 1)), this._z = Math.atan2(2 * (e.x * e.y + e.z * e.w), s + o - a - n)) : "YZX" === t ? (this._x = Math.atan2(2 * (e.x * e.w - e.z * e.y), s - o + a - n), this._y = Math.atan2(2 * (e.y * e.w - e.x * e.z), s + o - a - n), this._z = Math.asin(i(2 * (e.x * e.y + e.z * e.w), -1, 1))) : "XZY" === t ? (this._x = Math.atan2(2 * (e.x * e.w + e.y * e.z), s - o + a - n), this._y = Math.atan2(2 * (e.x * e.z + e.y * e.w), s + o - a - n), this._z = Math.asin(i(2 * (e.z * e.w - e.x * e.y), -1, 1))) : console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: " + t), this._order = t, !1 !== r && this.onChangeCallback(), this
            }, reorder: (f = new $.Quaternion, function (e) {
                f.setFromEuler(this), this.setFromQuaternion(f, e)
            }), equals: function (e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
            }, fromArray: function (e) {
                return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
            }, toArray: function () {
                return [this._x, this._y, this._z, this._order]
            }, onChange: function (e) {
                return this.onChangeCallback = e, this
            }, onChangeCallback: function () {
            }, clone: function () {
                return new $.Euler(this._x, this._y, this._z, this._order)
            }
        }, $.Line3 = function (e, t) {
            this.start = void 0 !== e ? e : new $.Vector3, this.end = void 0 !== t ? t : new $.Vector3
        }, $.Line3.prototype = {
            constructor: $.Line3, set: function (e, t) {
                return this.start.copy(e), this.end.copy(t), this
            }, copy: function (e) {
                return this.start.copy(e.start), this.end.copy(e.end), this
            }, center: function (e) {
                return (e || new $.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
            }, delta: function (e) {
                return (e || new $.Vector3).subVectors(this.end, this.start)
            }, distanceSq: function () {
                return this.start.distanceToSquared(this.end)
            }, distance: function () {
                return this.start.distanceTo(this.end)
            }, at: function (e, t) {
                var r = t || new $.Vector3;
                return this.delta(r).multiplyScalar(e).add(this.start)
            }, closestPointToPointParameter: (d = new $.Vector3, m = new $.Vector3, function (e, t) {
                d.subVectors(e, this.start), m.subVectors(this.end, this.start);
                var r = m.dot(m), i = m.dot(d) / r;
                return t && (i = $.Math.clamp(i, 0, 1)), i
            }), closestPointToPoint: function (e, t, r) {
                var i = this.closestPointToPointParameter(e, t), o = r || new $.Vector3;
                return this.delta(o).multiplyScalar(i).add(this.start)
            }, applyMatrix4: function (e) {
                return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
            }, equals: function (e) {
                return e.start.equals(this.start) && e.end.equals(this.end)
            }, clone: function () {
                return (new $.Line3).copy(this)
            }
        }, $.Box2 = function (e, t) {
            this.min = void 0 !== e ? e : new $.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new $.Vector2(-1 / 0, -1 / 0)
        }, $.Box2.prototype = {
            constructor: $.Box2, set: function (e, t) {
                return this.min.copy(e), this.max.copy(t), this
            }, setFromPoints: function (e) {
                if (e.length > 0) {
                    var t = e[0];
                    this.min.copy(t), this.max.copy(t);
                    for (var r = 1, i = e.length; r < i; r++) (t = e[r]).x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x), t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y)
                } else this.makeEmpty();
                return this
            }, setFromCenterAndSize: function () {
                var e = new $.Vector2;
                return function (t, r) {
                    var i = e.copy(r).multiplyScalar(.5);
                    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
                }
            }(), copy: function (e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            }, makeEmpty: function () {
                return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
            }, empty: function () {
                return this.max.x < this.min.x || this.max.y < this.min.y
            }, center: function (e) {
                return (e || new $.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
            }, size: function (e) {
                return (e || new $.Vector2).subVectors(this.max, this.min)
            }, expandByPoint: function (e) {
                return this.min.min(e), this.max.max(e), this
            }, expandByVector: function (e) {
                return this.min.sub(e), this.max.add(e), this
            }, expandByScalar: function (e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            }, containsPoint: function (e) {
                return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
            }, containsBox: function (e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
            }, getParameter: function (e, t) {
                return (t || new $.Vector2).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
            }, isIntersectionBox: function (e) {
                return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
            }, clampPoint: function (e, t) {
                return (t || new $.Vector2).copy(e).clamp(this.min, this.max)
            }, distanceToPoint: function () {
                var e = new $.Vector2;
                return function (t) {
                    return e.copy(t).clamp(this.min, this.max).sub(t).length()
                }
            }(), intersect: function (e) {
                return this.min.max(e.min), this.max.min(e.max), this
            }, union: function (e) {
                return this.min.min(e.min), this.max.max(e.max), this
            }, translate: function (e) {
                return this.min.add(e), this.max.add(e), this
            }, equals: function (e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }, clone: function () {
                return (new $.Box2).copy(this)
            }
        }, $.Box3 = function (e, t) {
            this.min = void 0 !== e ? e : new $.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new $.Vector3(-1 / 0, -1 / 0, -1 / 0)
        }, $.Box3.prototype = {
            constructor: $.Box3,
            set: function (e, t) {
                return this.min.copy(e), this.max.copy(t), this
            },
            addPoint: function (e) {
                return e.x < this.min.x ? this.min.x = e.x : e.x > this.max.x && (this.max.x = e.x), e.y < this.min.y ? this.min.y = e.y : e.y > this.max.y && (this.max.y = e.y), e.z < this.min.z ? this.min.z = e.z : e.z > this.max.z && (this.max.z = e.z), this
            },
            setFromPoints: function (e) {
                if (e.length > 0) {
                    var t = e[0];
                    this.min.copy(t), this.max.copy(t);
                    for (var r = 1, i = e.length; r < i; r++) this.addPoint(e[r])
                } else this.makeEmpty();
                return this
            },
            setFromCenterAndSize: function () {
                var e = new $.Vector3;
                return function (t, r) {
                    var i = e.copy(r).multiplyScalar(.5);
                    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
                }
            }(),
            setFromObject: function () {
                var e = new $.Vector3;
                return function (t) {
                    var r = this;
                    return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse((function (t) {
                        if (void 0 !== t.geometry && void 0 !== t.geometry.vertices) for (var i = t.geometry.vertices, o = 0, a = i.length; o < a; o++) e.copy(i[o]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e)
                    })), this
                }
            }(),
            copy: function (e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            },
            makeEmpty: function () {
                return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
            },
            empty: function () {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            },
            center: function (e) {
                return (e || new $.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
            },
            size: function (e) {
                return (e || new $.Vector3).subVectors(this.max, this.min)
            },
            expandByPoint: function (e) {
                return this.min.min(e), this.max.max(e), this
            },
            expandByVector: function (e) {
                return this.min.sub(e), this.max.add(e), this
            },
            expandByScalar: function (e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            },
            containsPoint: function (e) {
                return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
            },
            containsBox: function (e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
            },
            getParameter: function (e, t) {
                return (t || new $.Vector3).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
            },
            isIntersectionBox: function (e) {
                return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
            },
            clampPoint: function (e, t) {
                return (t || new $.Vector3).copy(e).clamp(this.min, this.max)
            },
            distanceToPoint: function () {
                var e = new $.Vector3;
                return function (t) {
                    return e.copy(t).clamp(this.min, this.max).sub(t).length()
                }
            }(),
            getBoundingSphere: function () {
                var e = new $.Vector3;
                return function (t) {
                    var r = t || new $.Sphere;
                    return r.center = this.center(), r.radius = .5 * this.size(e).length(), r
                }
            }(),
            intersect: function (e) {
                return this.min.max(e.min), this.max.min(e.max), this
            },
            union: function (e) {
                return this.min.min(e.min), this.max.max(e.max), this
            },
            applyMatrix4: (y = [new $.Vector3, new $.Vector3, new $.Vector3, new $.Vector3, new $.Vector3, new $.Vector3, new $.Vector3, new $.Vector3], function (e) {
                return y[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), y[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), y[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), y[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), y[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), y[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), y[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), y[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.makeEmpty(), this.setFromPoints(y), this
            }),
            translate: function (e) {
                return this.min.add(e), this.max.add(e), this
            },
            equals: function (e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            },
            clone: function () {
                return (new $.Box3).copy(this)
            }
        }, $.Matrix3 = function (e, t, r, i, o, a, n, s, h) {
            this.elements = new Float32Array(9);
            var l = this.elements;
            l[0] = void 0 !== e ? e : 1, l[3] = t || 0, l[6] = r || 0, l[1] = i || 0, l[4] = void 0 !== o ? o : 1, l[7] = a || 0, l[2] = n || 0, l[5] = s || 0, l[8] = void 0 !== h ? h : 1
        }, $.Matrix3.prototype = {
            constructor: $.Matrix3, set: function (e, t, r, i, o, a, n, s, h) {
                var l = this.elements;
                return l[0] = e, l[3] = t, l[6] = r, l[1] = i, l[4] = o, l[7] = a, l[2] = n, l[5] = s, l[8] = h, this
            }, identity: function () {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
            }, copy: function (e) {
                var t = e.elements;
                return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
            }, multiplyVector3: function (e) {
                return console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
            }, multiplyVector3Array: function (e) {
                return console.warn("DEPRECATED: Matrix3's .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
            }, applyToVector3Array: function () {
                var e = new $.Vector3;
                return function (t, r, i) {
                    void 0 === r && (r = 0), void 0 === i && (i = t.length);
                    for (var o = 0, a = r; o < i; o += 3, a += 3) e.x = t[a], e.y = t[a + 1], e.z = t[a + 2], e.applyMatrix3(this), t[a] = e.x, t[a + 1] = e.y, t[a + 2] = e.z;
                    return t
                }
            }(), multiplyScalar: function (e) {
                var t = this.elements;
                return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
            }, determinant: function () {
                var e = this.elements, t = e[0], r = e[1], i = e[2], o = e[3], a = e[4], n = e[5], s = e[6], h = e[7],
                    l = e[8];
                return t * a * l - t * n * h - r * o * l + r * n * s + i * o * h - i * a * s
            }, getInverse: function (e, t) {
                var r = e.elements, i = this.elements;
                i[0] = r[10] * r[5] - r[6] * r[9], i[1] = -r[10] * r[1] + r[2] * r[9], i[2] = r[6] * r[1] - r[2] * r[5], i[3] = -r[10] * r[4] + r[6] * r[8], i[4] = r[10] * r[0] - r[2] * r[8], i[5] = -r[6] * r[0] + r[2] * r[4], i[6] = r[9] * r[4] - r[5] * r[8], i[7] = -r[9] * r[0] + r[1] * r[8], i[8] = r[5] * r[0] - r[1] * r[4];
                var o = r[0] * i[0] + r[1] * i[3] + r[2] * i[6];
                if (0 === o) {
                    var a = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
                    if (t) throw new Error(a);
                    return console.warn(a), this.identity(), this
                }
                return this.multiplyScalar(1 / o), this
            }, transpose: function () {
                var e, t = this.elements;
                return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
            }, flattenToArrayOffset: function (e, t) {
                var r = this.elements;
                return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e
            }, getNormalMatrix: function (e) {
                return this.getInverse(e).transpose(), this
            }, transposeIntoArray: function (e) {
                var t = this.elements;
                return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
            }, fromArray: function (e) {
                return this.elements.set(e), this
            }, toArray: function () {
                var e = this.elements;
                return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
            }, clone: function () {
                var e = this.elements;
                return new $.Matrix3(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8])
            }
        }, $.Matrix4 = function (e, t, r, i, o, a, n, s, h, l, c, p, u, f, d, m) {
            this.elements = new Float32Array(16);
            var y = this.elements;
            y[0] = void 0 !== e ? e : 1, y[4] = t || 0, y[8] = r || 0, y[12] = i || 0, y[1] = o || 0, y[5] = void 0 !== a ? a : 1, y[9] = n || 0, y[13] = s || 0, y[2] = h || 0, y[6] = l || 0, y[10] = void 0 !== c ? c : 1, y[14] = p || 0, y[3] = u || 0, y[7] = f || 0, y[11] = d || 0, y[15] = void 0 !== m ? m : 1
        },$.Matrix4.prototype = {
            constructor: $.Matrix4, set: function (e, t, r, i, o, a, n, s, h, l, c, p, u, f, d, m) {
                var y = this.elements;
                return y[0] = e, y[4] = t, y[8] = r, y[12] = i, y[1] = o, y[5] = a, y[9] = n, y[13] = s, y[2] = h, y[6] = l, y[10] = c, y[14] = p, y[3] = u, y[7] = f, y[11] = d, y[15] = m, this
            }, identity: function () {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            }, copy: function (e) {
                return this.elements.set(e.elements), this
            }, extractPosition: function (e) {
                return console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
            }, copyPosition: function (e) {
                var t = this.elements, r = e.elements;
                return t[12] = r[12], t[13] = r[13], t[14] = r[14], this
            }, extractRotation: function () {
                var e = new $.Vector3;
                return function (t) {
                    var r = this.elements, i = t.elements, o = 1 / e.set(i[0], i[1], i[2]).length(),
                        a = 1 / e.set(i[4], i[5], i[6]).length(), n = 1 / e.set(i[8], i[9], i[10]).length();
                    return r[0] = i[0] * o, r[1] = i[1] * o, r[2] = i[2] * o, r[4] = i[4] * a, r[5] = i[5] * a, r[6] = i[6] * a, r[8] = i[8] * n, r[9] = i[9] * n, r[10] = i[10] * n, this
                }
            }(), makeRotationFromEuler: function (e) {
                e instanceof $.Euler == !1 && console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
                var t = this.elements, r = e.x, i = e.y, o = e.z, a = Math.cos(r), n = Math.sin(r), s = Math.cos(i),
                    h = Math.sin(i), l = Math.cos(o), c = Math.sin(o);
                if ("XYZ" === e.order) {
                    var p = a * l, u = a * c, f = n * l, d = n * c;
                    t[0] = s * l, t[4] = -s * c, t[8] = h, t[1] = u + f * h, t[5] = p - d * h, t[9] = -n * s, t[2] = d - p * h, t[6] = f + u * h, t[10] = a * s
                } else if ("YXZ" === e.order) {
                    var m = s * l, y = s * c, g = h * l, v = h * c;
                    t[0] = m + v * n, t[4] = g * n - y, t[8] = a * h, t[1] = a * c, t[5] = a * l, t[9] = -n, t[2] = y * n - g, t[6] = v + m * n, t[10] = a * s
                } else if ("ZXY" === e.order) {
                    m = s * l, y = s * c, g = h * l, v = h * c;
                    t[0] = m - v * n, t[4] = -a * c, t[8] = g + y * n, t[1] = y + g * n, t[5] = a * l, t[9] = v - m * n, t[2] = -a * h, t[6] = n, t[10] = a * s
                } else if ("ZYX" === e.order) {
                    p = a * l, u = a * c, f = n * l, d = n * c;
                    t[0] = s * l, t[4] = f * h - u, t[8] = p * h + d, t[1] = s * c, t[5] = d * h + p, t[9] = u * h - f, t[2] = -h, t[6] = n * s, t[10] = a * s
                } else if ("YZX" === e.order) {
                    var x = a * s, w = a * h, _ = n * s, b = n * h;
                    t[0] = s * l, t[4] = b - x * c, t[8] = _ * c + w, t[1] = c, t[5] = a * l, t[9] = -n * l, t[2] = -h * l, t[6] = w * c + _, t[10] = x - b * c
                } else if ("XZY" === e.order) {
                    x = a * s, w = a * h, _ = n * s, b = n * h;
                    t[0] = s * l, t[4] = -c, t[8] = h * l, t[1] = x * c + b, t[5] = a * l, t[9] = w * c - _, t[2] = _ * c - w, t[6] = n * l, t[10] = b * c + x
                }
                return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            }, setRotationFromQuaternion: function (e) {
                return console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code."), this.makeRotationFromQuaternion(e)
            }, makeRotationFromQuaternion: function (e) {
                var t = this.elements, r = e.x, i = e.y, o = e.z, a = e.w, n = r + r, s = i + i, h = o + o, l = r * n,
                    c = r * s, p = r * h, u = i * s, f = i * h, d = o * h, m = a * n, y = a * s, g = a * h;
                return t[0] = 1 - (u + d), t[4] = c - g, t[8] = p + y, t[1] = c + g, t[5] = 1 - (l + d), t[9] = f - m, t[2] = p - y, t[6] = f + m, t[10] = 1 - (l + u), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            }, lookAt: (x = new $.Vector3, w = new $.Vector3, _ = new $.Vector3, function (e, t, r) {
                var i = this.elements;
                return _.subVectors(e, t).normalize(), 0 === _.length() && (_.z = 1), x.crossVectors(r, _).normalize(), 0 === x.length() && (_.x += 1e-4, x.crossVectors(r, _).normalize()), w.crossVectors(_, x), i[0] = x.x, i[4] = w.x, i[8] = _.x, i[1] = x.y, i[5] = w.y, i[9] = _.y, i[2] = x.z, i[6] = w.z, i[10] = _.z, this
            }), multiply: function (e, t) {
                return void 0 !== t ? (console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
            }, multiplyMatrices: function (e, t) {
                var r = e.elements, i = t.elements, o = this.elements, a = r[0], n = r[4], s = r[8], h = r[12],
                    l = r[1], c = r[5], p = r[9], u = r[13], f = r[2], d = r[6], m = r[10], y = r[14], g = r[3],
                    v = r[7], x = r[11], w = r[15], _ = i[0], b = i[4], M = i[8], S = i[12], A = i[1], T = i[5],
                    E = i[9], C = i[13], P = i[2], L = i[6], D = i[10], R = i[14], F = i[3], U = i[7], V = i[11],
                    z = i[15];
                return o[0] = a * _ + n * A + s * P + h * F, o[4] = a * b + n * T + s * L + h * U, o[8] = a * M + n * E + s * D + h * V, o[12] = a * S + n * C + s * R + h * z, o[1] = l * _ + c * A + p * P + u * F, o[5] = l * b + c * T + p * L + u * U, o[9] = l * M + c * E + p * D + u * V, o[13] = l * S + c * C + p * R + u * z, o[2] = f * _ + d * A + m * P + y * F, o[6] = f * b + d * T + m * L + y * U, o[10] = f * M + d * E + m * D + y * V, o[14] = f * S + d * C + m * R + y * z, o[3] = g * _ + v * A + x * P + w * F, o[7] = g * b + v * T + x * L + w * U, o[11] = g * M + v * E + x * D + w * V, o[15] = g * S + v * C + x * R + w * z, this
            }, multiplyToArray: function (e, t, r) {
                var i = this.elements;
                return this.multiplyMatrices(e, t), r[0] = i[0], r[1] = i[1], r[2] = i[2], r[3] = i[3], r[4] = i[4], r[5] = i[5], r[6] = i[6], r[7] = i[7], r[8] = i[8], r[9] = i[9], r[10] = i[10], r[11] = i[11], r[12] = i[12], r[13] = i[13], r[14] = i[14], r[15] = i[15], this
            }, multiplyScalar: function (e) {
                var t = this.elements;
                return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
            }, multiplyVector3: function (e) {
                return console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
            }, multiplyVector4: function (e) {
                return console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            }, multiplyVector3Array: function (e) {
                return console.warn("DEPRECATED: Matrix4's .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
            }, applyToVector3Array: function () {
                var e = new $.Vector3;
                return function (t, r, i) {
                    void 0 === r && (r = 0), void 0 === i && (i = t.length);
                    for (var o = 0, a = r; o < i; o += 3, a += 3) e.x = t[a], e.y = t[a + 1], e.z = t[a + 2], e.applyMatrix4(this), t[a] = e.x, t[a + 1] = e.y, t[a + 2] = e.z;
                    return t
                }
            }(), rotateAxis: function (e) {
                console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
            }, crossVector: function (e) {
                return console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            }, determinant: function () {
                var e = this.elements, t = e[0], r = e[4], i = e[8], o = e[12], a = e[1], n = e[5], s = e[9], h = e[13],
                    l = e[2], c = e[6], p = e[10], u = e[14];
                return e[3] * (+o * s * c - i * h * c - o * n * p + r * h * p + i * n * u - r * s * u) + e[7] * (+t * s * u - t * h * p + o * a * p - i * a * u + i * h * l - o * s * l) + e[11] * (+t * h * c - t * n * u - o * a * c + r * a * u + o * n * l - r * h * l) + e[15] * (-i * n * l - t * s * c + t * n * p + i * a * c - r * a * p + r * s * l)
            }, transpose: function () {
                var e, t = this.elements;
                return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
            }, flattenToArrayOffset: function (e, t) {
                var r = this.elements;
                return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e[t + 9] = r[9], e[t + 10] = r[10], e[t + 11] = r[11], e[t + 12] = r[12], e[t + 13] = r[13], e[t + 14] = r[14], e[t + 15] = r[15], e
            }, getPosition: function () {
                var e = new $.Vector3;
                return function () {
                    console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                    var t = this.elements;
                    return e.set(t[12], t[13], t[14])
                }
            }(), setPosition: function (e) {
                var t = this.elements;
                return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
            }, getInverse: function (e, t) {
                var r = this.elements, i = e.elements, o = i[0], a = i[4], n = i[8], s = i[12], h = i[1], l = i[5],
                    c = i[9], p = i[13], u = i[2], f = i[6], d = i[10], m = i[14], y = i[3], g = i[7], v = i[11],
                    x = i[15];
                r[0] = c * m * g - p * d * g + p * f * v - l * m * v - c * f * x + l * d * x, r[4] = s * d * g - n * m * g - s * f * v + a * m * v + n * f * x - a * d * x, r[8] = n * p * g - s * c * g + s * l * v - a * p * v - n * l * x + a * c * x, r[12] = s * c * f - n * p * f - s * l * d + a * p * d + n * l * m - a * c * m, r[1] = p * d * y - c * m * y - p * u * v + h * m * v + c * u * x - h * d * x, r[5] = n * m * y - s * d * y + s * u * v - o * m * v - n * u * x + o * d * x, r[9] = s * c * y - n * p * y - s * h * v + o * p * v + n * h * x - o * c * x, r[13] = n * p * u - s * c * u + s * h * d - o * p * d - n * h * m + o * c * m, r[2] = l * m * y - p * f * y + p * u * g - h * m * g - l * u * x + h * f * x, r[6] = s * f * y - a * m * y - s * u * g + o * m * g + a * u * x - o * f * x, r[10] = a * p * y - s * l * y + s * h * g - o * p * g - a * h * x + o * l * x, r[14] = s * l * u - a * p * u - s * h * f + o * p * f + a * h * m - o * l * m, r[3] = c * f * y - l * d * y - c * u * g + h * d * g + l * u * v - h * f * v, r[7] = a * d * y - n * f * y + n * u * g - o * d * g - a * u * v + o * f * v, r[11] = n * l * y - a * c * y - n * h * g + o * c * g + a * h * v - o * l * v, r[15] = a * c * u - n * l * u + n * h * f - o * c * f - a * h * d + o * l * d;
                var w = o * r[0] + h * r[4] + u * r[8] + y * r[12];
                if (0 == w) {
                    var _ = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
                    if (t) throw new Error(_);
                    return console.warn(_), this.identity(), this
                }
                return this.multiplyScalar(1 / w), this
            }, translate: function (e) {
                console.warn("DEPRECATED: Matrix4's .translate() has been removed.")
            }, rotateX: function (e) {
                console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")
            }, rotateY: function (e) {
                console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")
            }, rotateZ: function (e) {
                console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")
            }, rotateByAxis: function (e, t) {
                console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")
            }, scale: function (e) {
                var t = this.elements, r = e.x, i = e.y, o = e.z;
                return t[0] *= r, t[4] *= i, t[8] *= o, t[1] *= r, t[5] *= i, t[9] *= o, t[2] *= r, t[6] *= i, t[10] *= o, t[3] *= r, t[7] *= i, t[11] *= o, this
            }, getMaxScaleOnAxis: function () {
                var e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                    r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                return Math.sqrt(Math.max(t, Math.max(r, i)))
            }, makeTranslation: function (e, t, r) {
                return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this
            }, makeRotationX: function (e) {
                var t = Math.cos(e), r = Math.sin(e);
                return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this
            }, makeRotationY: function (e) {
                var t = Math.cos(e), r = Math.sin(e);
                return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this
            }, makeRotationZ: function (e) {
                var t = Math.cos(e), r = Math.sin(e);
                return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            }, makeRotationAxis: function (e, t) {
                var r = Math.cos(t), i = Math.sin(t), o = 1 - r, a = e.x, n = e.y, s = e.z, h = o * a, l = o * n;
                return this.set(h * a + r, h * n - i * s, h * s + i * n, 0, h * n + i * s, l * n + r, l * s - i * a, 0, h * s - i * n, l * s + i * a, o * s * s + r, 0, 0, 0, 0, 1), this
            }, makeScale: function (e, t, r) {
                return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this
            }, compose: function (e, t, r) {
                return this.makeRotationFromQuaternion(t), this.scale(r), this.setPosition(e), this
            }, decompose: (g = new $.Vector3, v = new $.Matrix4, function (e, t, r) {
                var i = this.elements, o = g.set(i[0], i[1], i[2]).length(), a = g.set(i[4], i[5], i[6]).length(),
                    n = g.set(i[8], i[9], i[10]).length();
                this.determinant() < 0 && (o = -o), e.x = i[12], e.y = i[13], e.z = i[14], v.elements.set(this.elements);
                var s = 1 / o, h = 1 / a, l = 1 / n;
                return v.elements[0] *= s, v.elements[1] *= s, v.elements[2] *= s, v.elements[4] *= h, v.elements[5] *= h, v.elements[6] *= h, v.elements[8] *= l, v.elements[9] *= l, v.elements[10] *= l, t.setFromRotationMatrix(v), r.x = o, r.y = a, r.z = n, this
            }), makeFrustum: function (e, t, r, i, o, a) {
                var n = this.elements, s = 2 * o / (t - e), h = 2 * o / (i - r), l = (t + e) / (t - e),
                    c = (i + r) / (i - r), p = -(a + o) / (a - o), u = -2 * a * o / (a - o);
                return n[0] = s, n[4] = 0, n[8] = l, n[12] = 0, n[1] = 0, n[5] = h, n[9] = c, n[13] = 0, n[2] = 0, n[6] = 0, n[10] = p, n[14] = u, n[3] = 0, n[7] = 0, n[11] = -1, n[15] = 0, this
            }, makePerspective: function (e, t, r, i) {
                var o = r * Math.tan($.Math.degToRad(.5 * e)), a = -o, n = a * t, s = o * t;
                return this.makeFrustum(n, s, a, o, r, i)
            }, makeOrthographic: function (e, t, r, i, o, a) {
                var n = this.elements, s = t - e, h = r - i, l = a - o, c = (t + e) / s, p = (r + i) / h,
                    u = (a + o) / l;
                return n[0] = 2 / s, n[4] = 0, n[8] = 0, n[12] = -c, n[1] = 0, n[5] = 2 / h, n[9] = 0, n[13] = -p, n[2] = 0, n[6] = 0, n[10] = -2 / l, n[14] = -u, n[3] = 0, n[7] = 0, n[11] = 0, n[15] = 1, this
            }, fromArray: function (e) {
                return this.elements.set(e), this
            }, toArray: function () {
                var e = this.elements;
                return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
            }, clone: function () {
                var e = this.elements;
                return new $.Matrix4(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15])
            }
        },$.Ray = function (e, t) {
            this.origin = void 0 !== e ? e : new $.Vector3, this.direction = void 0 !== t ? t : new $.Vector3
        },$.Ray.prototype = {
            constructor: $.Ray,
            set: function (e, t) {
                return this.origin.copy(e), this.direction.copy(t), this
            },
            copy: function (e) {
                return this.origin.copy(e.origin), this.direction.copy(e.direction), this
            },
            at: function (e, t) {
                return (t || new $.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)
            },
            recast: function () {
                var e = new $.Vector3;
                return function (t) {
                    return this.origin.copy(this.at(t, e)), this
                }
            }(),
            closestPointToPoint: function (e, t) {
                var r = t || new $.Vector3;
                r.subVectors(e, this.origin);
                var i = r.dot(this.direction);
                return i < 0 ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(i).add(this.origin)
            },
            distanceToPoint: function () {
                var e = new $.Vector3;
                return function (t) {
                    var r = e.subVectors(t, this.origin).dot(this.direction);
                    return r < 0 ? this.origin.distanceTo(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin), e.distanceTo(t))
                }
            }(),
            distanceSqToSegment: function (e, t, r, i) {
                var o, a, n, s, h = e.clone().add(t).multiplyScalar(.5), l = t.clone().sub(e).normalize(),
                    c = .5 * e.distanceTo(t), p = this.origin.clone().sub(h), u = -this.direction.dot(l),
                    f = p.dot(this.direction), d = -p.dot(l), m = p.lengthSq(), y = Math.abs(1 - u * u);
                if (y >= 0) if (a = u * f - d, s = c * y, (o = u * d - f) >= 0) if (a >= -s) if (a <= s) {
                    var g = 1 / y;
                    n = (o *= g) * (o + u * (a *= g) + 2 * f) + a * (u * o + a + 2 * d) + m
                } else a = c, n = -(o = Math.max(0, -(u * a + f))) * o + a * (a + 2 * d) + m; else a = -c, n = -(o = Math.max(0, -(u * a + f))) * o + a * (a + 2 * d) + m; else a <= -s ? n = -(o = Math.max(0, -(-u * c + f))) * o + (a = o > 0 ? -c : Math.min(Math.max(-c, -d), c)) * (a + 2 * d) + m : a <= s ? (o = 0, n = (a = Math.min(Math.max(-c, -d), c)) * (a + 2 * d) + m) : n = -(o = Math.max(0, -(u * c + f))) * o + (a = o > 0 ? c : Math.min(Math.max(-c, -d), c)) * (a + 2 * d) + m; else a = u > 0 ? -c : c, n = -(o = Math.max(0, -(u * a + f))) * o + a * (a + 2 * d) + m;
                return r && r.copy(this.direction.clone().multiplyScalar(o).add(this.origin)), i && i.copy(l.clone().multiplyScalar(a).add(h)), n
            },
            isIntersectionSphere: function (e) {
                return this.distanceToPoint(e.center) <= e.radius
            },
            isIntersectionPlane: function (e) {
                var t = e.distanceToPoint(this.origin);
                return 0 === t || e.normal.dot(this.direction) * t < 0
            },
            distanceToPlane: function (e) {
                var t = e.normal.dot(this.direction);
                if (0 == t) return 0 == e.distanceToPoint(this.origin) ? 0 : null;
                var r = -(this.origin.dot(e.normal) + e.constant) / t;
                return r >= 0 ? r : null
            },
            intersectPlane: function (e, t) {
                var r = this.distanceToPlane(e);
                return null === r ? null : this.at(r, t)
            },
            isIntersectionBox: (T = new $.Vector3, function (e) {
                return null !== this.intersectBox(e, T)
            }),
            intersectBox: function (e, t) {
                var r, i, o, a, n, s, h = 1 / this.direction.x, l = 1 / this.direction.y, c = 1 / this.direction.z,
                    p = this.origin;
                return h >= 0 ? (r = (e.min.x - p.x) * h, i = (e.max.x - p.x) * h) : (r = (e.max.x - p.x) * h, i = (e.min.x - p.x) * h), l >= 0 ? (o = (e.min.y - p.y) * l, a = (e.max.y - p.y) * l) : (o = (e.max.y - p.y) * l, a = (e.min.y - p.y) * l), r > a || o > i ? null : ((o > r || r != r) && (r = o), (a < i || i != i) && (i = a), c >= 0 ? (n = (e.min.z - p.z) * c, s = (e.max.z - p.z) * c) : (n = (e.max.z - p.z) * c, s = (e.min.z - p.z) * c), r > s || n > i ? null : ((n > r || r != r) && (r = n), (s < i || i != i) && (i = s), i < 0 ? null : this.at(r >= 0 ? r : i, t)))
            },
            intersectTriangle: (b = new $.Vector3, M = new $.Vector3, S = new $.Vector3, A = new $.Vector3, function (e, t, r, i, o) {
                M.subVectors(t, e), S.subVectors(r, e), A.crossVectors(M, S);
                var a, n = this.direction.dot(A);
                if (n > 0) {
                    if (i) return null;
                    a = 1
                } else {
                    if (!(n < 0)) return null;
                    a = -1, n = -n
                }
                b.subVectors(this.origin, e);
                var s = a * this.direction.dot(S.crossVectors(b, S));
                if (s < 0) return null;
                var h = a * this.direction.dot(M.cross(b));
                if (h < 0) return null;
                if (s + h > n) return null;
                var l = -a * b.dot(A);
                return l < 0 ? null : this.at(l / n, o)
            }),
            applyMatrix4: function (e) {
                return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
            },
            equals: function (e) {
                return e.origin.equals(this.origin) && e.direction.equals(this.direction)
            },
            clone: function () {
                return (new $.Ray).copy(this)
            }
        },$.Sphere = function (e, t) {
            this.center = void 0 !== e ? e : new $.Vector3, this.radius = void 0 !== t ? t : 0
        },$.Sphere.prototype = {
            constructor: $.Sphere, set: function (e, t) {
                return this.center.copy(e), this.radius = t, this
            }, setFromPoints: (E = new $.Box3, function (e, t) {
                var r = this.center;
                void 0 !== t ? r.copy(t) : E.setFromPoints(e).center(r);
                for (var i = 0, o = 0, a = e.length; o < a; o++) i = Math.max(i, r.distanceToSquared(e[o]));
                return this.radius = Math.sqrt(i), this
            }), copy: function (e) {
                return this.center.copy(e.center), this.radius = e.radius, this
            }, empty: function () {
                return this.radius <= 0
            }, containsPoint: function (e) {
                return e.distanceToSquared(this.center) <= this.radius * this.radius
            }, distanceToPoint: function (e) {
                return e.distanceTo(this.center) - this.radius
            }, intersectsSphere: function (e) {
                var t = this.radius + e.radius;
                return e.center.distanceToSquared(this.center) <= t * t
            }, clampPoint: function (e, t) {
                var r = this.center.distanceToSquared(e), i = t || new $.Vector3;
                return i.copy(e), r > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)), i
            }, getBoundingBox: function (e) {
                var t = e || new $.Box3;
                return t.set(this.center, this.center), t.expandByScalar(this.radius), t
            }, applyMatrix4: function (e) {
                return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
            }, translate: function (e) {
                return this.center.add(e), this
            }, equals: function (e) {
                return e.center.equals(this.center) && e.radius === this.radius
            }, clone: function () {
                return (new $.Sphere).copy(this)
            }
        },$.Frustum = function (e, t, r, i, o, a) {
            this.planes = [void 0 !== e ? e : new $.Plane, void 0 !== t ? t : new $.Plane, void 0 !== r ? r : new $.Plane, void 0 !== i ? i : new $.Plane, void 0 !== o ? o : new $.Plane, void 0 !== a ? a : new $.Plane]
        },$.Frustum.prototype = {
            constructor: $.Frustum, set: function (e, t, r, i, o, a) {
                var n = this.planes;
                return n[0].copy(e), n[1].copy(t), n[2].copy(r), n[3].copy(i), n[4].copy(o), n[5].copy(a), this
            }, copy: function (e) {
                for (var t = this.planes, r = 0; r < 6; r++) t[r].copy(e.planes[r]);
                return this
            }, setFromMatrix: function (e) {
                var t = this.planes, r = e.elements, i = r[0], o = r[1], a = r[2], n = r[3], s = r[4], h = r[5],
                    l = r[6], c = r[7], p = r[8], u = r[9], f = r[10], d = r[11], m = r[12], y = r[13], g = r[14],
                    v = r[15];
                return t[0].setComponents(n - i, c - s, d - p, v - m).normalize(), t[1].setComponents(n + i, c + s, d + p, v + m).normalize(), t[2].setComponents(n + o, c + h, d + u, v + y).normalize(), t[3].setComponents(n - o, c - h, d - u, v - y).normalize(), t[4].setComponents(n - a, c - l, d - f, v - g).normalize(), t[5].setComponents(n + a, c + l, d + f, v + g).normalize(), this
            }, intersectsObject: (L = new $.Sphere, function (e) {
                var t = e.geometry;
                return null === t.boundingSphere && t.computeBoundingSphere(), L.copy(t.boundingSphere), L.applyMatrix4(e.matrixWorld), this.intersectsSphere(L)
            }), intersectsSphere: function (e) {
                for (var t = this.planes, r = e.center, i = -e.radius, o = 0; o < 6; o++) {
                    if (t[o].distanceToPoint(r) < i) return !1
                }
                return !0
            }, intersectsBox: (C = new $.Vector3, P = new $.Vector3, function (e) {
                for (var t = this.planes, r = 0; r < 6; r++) {
                    var i = t[r];
                    C.x = i.normal.x > 0 ? e.min.x : e.max.x, P.x = i.normal.x > 0 ? e.max.x : e.min.x, C.y = i.normal.y > 0 ? e.min.y : e.max.y, P.y = i.normal.y > 0 ? e.max.y : e.min.y, C.z = i.normal.z > 0 ? e.min.z : e.max.z, P.z = i.normal.z > 0 ? e.max.z : e.min.z;
                    var o = i.distanceToPoint(C), a = i.distanceToPoint(P);
                    if (o < 0 && a < 0) return !1
                }
                return !0
            }), containsPoint: function (e) {
                for (var t = this.planes, r = 0; r < 6; r++) if (t[r].distanceToPoint(e) < 0) return !1;
                return !0
            }, clone: function () {
                return (new $.Frustum).copy(this)
            }
        },$.Plane = function (e, t) {
            this.normal = void 0 !== e ? e : new $.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
        },$.Plane.prototype = {
            constructor: $.Plane, set: function (e, t) {
                return this.normal.copy(e), this.constant = t, this
            }, setComponents: function (e, t, r, i) {
                return this.normal.set(e, t, r), this.constant = i, this
            }, setFromNormalAndCoplanarPoint: function (e, t) {
                return this.normal.copy(e), this.constant = -t.dot(this.normal), this
            }, setFromCoplanarPoints: function () {
                var e = new $.Vector3, t = new $.Vector3;
                return function (r, i, o) {
                    var a = e.subVectors(o, i).cross(t.subVectors(r, i)).normalize();
                    return this.setFromNormalAndCoplanarPoint(a, r), this
                }
            }(), copy: function (e) {
                return this.normal.copy(e.normal), this.constant = e.constant, this
            }, normalize: function () {
                var e = 1 / this.normal.length();
                return this.normal.multiplyScalar(e), this.constant *= e, this
            }, negate: function () {
                return this.constant *= -1, this.normal.negate(), this
            }, distanceToPoint: function (e) {
                return this.normal.dot(e) + this.constant
            }, distanceToSphere: function (e) {
                return this.distanceToPoint(e.center) - e.radius
            }, projectPoint: function (e, t) {
                return this.orthoPoint(e, t).sub(e).negate()
            }, orthoPoint: function (e, t) {
                var r = this.distanceToPoint(e);
                return (t || new $.Vector3).copy(this.normal).multiplyScalar(r)
            }, isIntersectionLine: function (e) {
                var t = this.distanceToPoint(e.start), r = this.distanceToPoint(e.end);
                return t < 0 && r > 0 || r < 0 && t > 0
            }, intersectLine: function () {
                var e = new $.Vector3;
                return function (t, r) {
                    var i = r || new $.Vector3, o = t.delta(e), a = this.normal.dot(o);
                    if (0 == a) return 0 == this.distanceToPoint(t.start) ? i.copy(t.start) : void 0;
                    var n = -(t.start.dot(this.normal) + this.constant) / a;
                    return n < 0 || n > 1 ? void 0 : i.copy(o).multiplyScalar(n).add(t.start)
                }
            }(), coplanarPoint: function (e) {
                return (e || new $.Vector3).copy(this.normal).multiplyScalar(-this.constant)
            }, applyMatrix4: function () {
                var e = new $.Vector3, t = new $.Vector3, r = new $.Matrix3;
                return function (i, o) {
                    var a = o || r.getNormalMatrix(i), n = e.copy(this.normal).applyMatrix3(a),
                        s = this.coplanarPoint(t);
                    return s.applyMatrix4(i), this.setFromNormalAndCoplanarPoint(n, s), this
                }
            }(), translate: function (e) {
                return this.constant = this.constant - e.dot(this.normal), this
            }, equals: function (e) {
                return e.normal.equals(this.normal) && e.constant == this.constant
            }, clone: function () {
                return (new $.Plane).copy(this)
            }
        },$.Math = {
            generateUUID: function () {
                var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                    r = new Array(36), i = 0;
                return function () {
                    for (var o = 0; o < 36; o++) 8 == o || 13 == o || 18 == o || 23 == o ? r[o] = "-" : 14 == o ? r[o] = "4" : (i <= 2 && (i = 33554432 + 16777216 * Math.random() | 0), e = 15 & i, i >>= 4, r[o] = t[19 == o ? 3 & e | 8 : e]);
                    return r.join("")
                }
            }(), clamp: function (e, t, r) {
                return e < t ? t : e > r ? r : e
            }, clampBottom: function (e, t) {
                return e < t ? t : e
            }, mapLinear: function (e, t, r, i, o) {
                return i + (e - t) * (o - i) / (r - t)
            }, smoothstep: function (e, t, r) {
                return e <= t ? 0 : e >= r ? 1 : (e = (e - t) / (r - t)) * e * (3 - 2 * e)
            }, smootherstep: function (e, t, r) {
                return e <= t ? 0 : e >= r ? 1 : (e = (e - t) / (r - t)) * e * e * (e * (6 * e - 15) + 10)
            }, random16: function () {
                return (65280 * Math.random() + 255 * Math.random()) / 65535
            }, randInt: function (e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }, randFloat: function (e, t) {
                return e + Math.random() * (t - e)
            }, randFloatSpread: function (e) {
                return e * (.5 - Math.random())
            }, sign: function (e) {
                return e < 0 ? -1 : e > 0 ? 1 : 0
            }, degToRad: (R = Math.PI / 180, function (e) {
                return e * R
            }), radToDeg: (D = 180 / Math.PI, function (e) {
                return e * D
            }), isPowerOfTwo: function (e) {
                return 0 == (e & e - 1) && 0 !== e
            }
        },$.Spline = function (e) {
            this.points = e;
            var t, r, i, o, a, n, s, h, l, c = [], p = {x: 0, y: 0, z: 0};

            function u(e, t, r, i, o, a, n) {
                var s = .5 * (r - e), h = .5 * (i - t);
                return (2 * (t - r) + s + h) * n + (-3 * (t - r) - 2 * s - h) * a + s * o + t
            }

            this.initFromArray = function (e) {
                this.points = [];
                for (var t = 0; t < e.length; t++) this.points[t] = {x: e[t][0], y: e[t][1], z: e[t][2]}
            }, this.getPoint = function (e) {
                return t = (this.points.length - 1) * e, r = Math.floor(t), i = t - r, c[0] = 0 === r ? r : r - 1, c[1] = r, c[2] = r > this.points.length - 2 ? this.points.length - 1 : r + 1, c[3] = r > this.points.length - 3 ? this.points.length - 1 : r + 2, n = this.points[c[0]], s = this.points[c[1]], h = this.points[c[2]], l = this.points[c[3]], a = i * (o = i * i), p.x = u(n.x, s.x, h.x, l.x, i, o, a), p.y = u(n.y, s.y, h.y, l.y, i, o, a), p.z = u(n.z, s.z, h.z, l.z, i, o, a), p
            }, this.getControlPointsArray = function () {
                var e, t, r = this.points.length, i = [];
                for (e = 0; e < r; e++) t = this.points[e], i[e] = [t.x, t.y, t.z];
                return i
            }, this.getLength = function (e) {
                var t, r, i, o, a = 0, n = 0, s = 0, h = new $.Vector3, l = new $.Vector3, c = [], p = 0;
                for (c[0] = 0, e || (e = 100), i = this.points.length * e, h.copy(this.points[0]), t = 1; t < i; t++) r = t / i, o = this.getPoint(r), l.copy(o), p += l.distanceTo(h), h.copy(o), a = (this.points.length - 1) * r, (n = Math.floor(a)) != s && (c[n] = p, s = n);
                return c[c.length] = p, {chunks: c, total: p}
            }, this.reparametrizeByArcLength = function (e) {
                var t, r, i, o, a, n, s, h, l = [], c = new $.Vector3, p = this.getLength();
                for (l.push(c.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
                    for (n = p.chunks[t] - p.chunks[t - 1], s = Math.ceil(e * n / p.total), o = (t - 1) / (this.points.length - 1), a = t / (this.points.length - 1), r = 1; r < s - 1; r++) i = o + r * (1 / s) * (a - o), h = this.getPoint(i), l.push(c.copy(h).clone());
                    l.push(c.copy(this.points[t]).clone())
                }
                this.points = l
            }
        },$.Triangle = function (e, t, r) {
            this.a = void 0 !== e ? e : new $.Vector3, this.b = void 0 !== t ? t : new $.Vector3, this.c = void 0 !== r ? r : new $.Vector3
        },$.Triangle.normal = (F = new $.Vector3, function (e, t, r, i) {
            var o = i || new $.Vector3;
            o.subVectors(r, t), F.subVectors(e, t), o.cross(F);
            var a = o.lengthSq();
            return a > 0 ? o.multiplyScalar(1 / Math.sqrt(a)) : o.set(0, 0, 0)
        }),$.Triangle.barycoordFromPoint = function () {
            var e = new $.Vector3, t = new $.Vector3, r = new $.Vector3;
            return function (i, o, a, n, s) {
                e.subVectors(n, o), t.subVectors(a, o), r.subVectors(i, o);
                var h = e.dot(e), l = e.dot(t), c = e.dot(r), p = t.dot(t), u = t.dot(r), f = h * p - l * l,
                    d = s || new $.Vector3;
                if (0 == f) return d.set(-2, -1, -1);
                var m = 1 / f, y = (p * c - l * u) * m, g = (h * u - l * c) * m;
                return d.set(1 - y - g, g, y)
            }
        }(),$.Triangle.containsPoint = function () {
            var e = new $.Vector3;
            return function (t, r, i, o) {
                var a = $.Triangle.barycoordFromPoint(t, r, i, o, e);
                return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
            }
        }(),$.Triangle.prototype = {
            constructor: $.Triangle, set: function (e, t, r) {
                return this.a.copy(e), this.b.copy(t), this.c.copy(r), this
            }, setFromPointsAndIndices: function (e, t, r, i) {
                return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[i]), this
            }, copy: function (e) {
                return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
            }, area: function () {
                var e = new $.Vector3, t = new $.Vector3;
                return function () {
                    return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
                }
            }(), midpoint: function (e) {
                return (e || new $.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            }, normal: function (e) {
                return $.Triangle.normal(this.a, this.b, this.c, e)
            }, plane: function (e) {
                return (e || new $.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
            }, barycoordFromPoint: function (e, t) {
                return $.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
            }, containsPoint: function (e) {
                return $.Triangle.containsPoint(e, this.a, this.b, this.c)
            }, equals: function (e) {
                return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
            }, clone: function () {
                return (new $.Triangle).copy(this)
            }
        },$.Vertex = function (e) {
            return console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead."), e
        },$.Clock = function (e) {
            this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
        },$.Clock.prototype = {
            constructor: $.Clock, start: function () {
                this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(), this.oldTime = this.startTime, this.running = !0
            }, stop: function () {
                this.getElapsedTime(), this.running = !1
            }, getElapsedTime: function () {
                return this.getDelta(), this.elapsedTime
            }, getDelta: function () {
                var e = 0;
                if (this.autoStart && !this.running && this.start(), this.running) {
                    var t = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
                    e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e
                }
                return e
            }
        },$.EventDispatcher = function () {
        },$.EventDispatcher.prototype = {
            constructor: $.EventDispatcher, apply: function (e) {
                e.addEventListener = $.EventDispatcher.prototype.addEventListener, e.hasEventListener = $.EventDispatcher.prototype.hasEventListener, e.removeEventListener = $.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = $.EventDispatcher.prototype.dispatchEvent
            }, addEventListener: function (e, t) {
                void 0 === this._listeners && (this._listeners = {});
                var r = this._listeners;
                void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t)
            }, hasEventListener: function (e, t) {
                if (void 0 === this._listeners) return !1;
                var r = this._listeners;
                return void 0 !== r[e] && -1 !== r[e].indexOf(t)
            }, removeEventListener: function (e, t) {
                if (void 0 !== this._listeners) {
                    var r = this._listeners[e];
                    if (void 0 !== r) {
                        var i = r.indexOf(t);
                        -1 !== i && r.splice(i, 1)
                    }
                }
            }, dispatchEvent: function (e) {
                if (void 0 !== this._listeners) {
                    var t = this._listeners[e.type];
                    if (void 0 !== t) {
                        e.target = this;
                        for (var r = [], i = t.length, o = 0; o < i; o++) r[o] = t[o];
                        for (o = 0; o < i; o++) r[o].call(this, e)
                    }
                }
            }
        },function (e) {
            e.Raycaster = function (t, r, i, o) {
                this.ray = new e.Ray(t, r), this.near = i || 0, this.far = o || 1 / 0
            };
            var t = new e.Sphere, r = new e.Ray, i = (new e.Plane, new e.Vector3, new e.Vector3), o = new e.Matrix4,
                a = function (e, t) {
                    return e.distance - t.distance
                }, n = new e.Vector3, s = new e.Vector3, h = new e.Vector3, l = function (a, c, p) {
                    if (a instanceof e.Sprite) {
                        if (i.setFromMatrixPosition(a.matrixWorld), (u = c.ray.distanceToPoint(i)) > a.scale.x) return p;
                        p.push({distance: u, point: a.position, face: null, object: a})
                    } else if (a instanceof e.LOD) {
                        i.setFromMatrixPosition(a.matrixWorld);
                        var u = c.ray.origin.distanceTo(i);
                        l(a.getObjectForDistance(u), c, p)
                    } else if (a instanceof e.Mesh) {
                        if (null === (G = a.geometry).boundingSphere && G.computeBoundingSphere(), t.copy(G.boundingSphere), t.applyMatrix4(a.matrixWorld), !1 === c.ray.isIntersectionSphere(t)) return p;
                        if (o.getInverse(a.matrixWorld), r.copy(c.ray).applyMatrix4(o), null !== G.boundingBox && !1 === r.isIntersectionBox(G.boundingBox)) return p;
                        if (G instanceof e.BufferGeometry) {
                            if (void 0 === (U = a.material)) return p;
                            var f = G.attributes, d = c.precision;
                            if (void 0 !== f.index) {
                                var m = f.index.array, y = f.position.array;
                                0 === (A = G.offsets).length && (A = [{start: 0, count: y.length, index: 0}]);
                                for (var g = 0, v = A.length; g < v; ++g) for (var x = A[g].start, w = A[g].count, _ = A[g].index, b = x, M = x + w; b < M; b += 3) {
                                    if (T = _ + m[b], E = _ + m[b + 1], C = _ + m[b + 2], n.set(y[3 * T], y[3 * T + 1], y[3 * T + 2]), s.set(y[3 * E], y[3 * E + 1], y[3 * E + 2]), h.set(y[3 * C], y[3 * C + 1], y[3 * C + 2]), U.side === e.BackSide) var S = r.intersectTriangle(h, s, n, !0); else S = r.intersectTriangle(n, s, h, U.side !== e.DoubleSide);
                                    if (null !== S) S.applyMatrix4(a.matrixWorld), (u = c.ray.origin.distanceTo(S)) < d || u < c.near || u > c.far || p.push({
                                        distance: u,
                                        point: S,
                                        indices: [T, E, C],
                                        face: null,
                                        faceIndex: null,
                                        object: a
                                    })
                                }
                            } else {
                                var A = G.offsets;
                                for (y = f.position.array, b = 0, M = f.position.array.length; b < M; b += 3) {
                                    if (T = b, E = b + 1, C = b + 2, n.set(y[3 * T], y[3 * T + 1], y[3 * T + 2]), s.set(y[3 * E], y[3 * E + 1], y[3 * E + 2]), h.set(y[3 * C], y[3 * C + 1], y[3 * C + 2]), U.side === e.BackSide) S = r.intersectTriangle(h, s, n, !0); else S = r.intersectTriangle(n, s, h, U.side !== e.DoubleSide);
                                    if (null !== S) S.applyMatrix4(a.matrixWorld), (u = c.ray.origin.distanceTo(S)) < d || u < c.near || u > c.far || p.push({
                                        distance: u,
                                        point: S,
                                        indices: [T, E, C],
                                        face: null,
                                        faceIndex: null,
                                        object: a
                                    })
                                }
                            }
                        } else if (G instanceof e.Geometry) for (var T, E, C, P = a.material instanceof e.MeshFaceMaterial, L = !0 === P ? a.material.materials : null, D = (d = c.precision, G.vertices), R = 0, F = G.faces.length; R < F; R++) {
                            var U, V = G.faces[R];
                            if (void 0 !== (U = !0 === P ? L[V.materialIndex] : a.material)) {
                                if (T = D[V.a], E = D[V.b], C = D[V.c], !0 === U.morphTargets) {
                                    var z = G.morphTargets, B = a.morphTargetInfluences;
                                    n.set(0, 0, 0), s.set(0, 0, 0), h.set(0, 0, 0);
                                    for (var N = 0, O = z.length; N < O; N++) {
                                        var k = B[N];
                                        if (0 !== k) {
                                            var I = z[N].vertices;
                                            n.x += (I[V.a].x - T.x) * k, n.y += (I[V.a].y - T.y) * k, n.z += (I[V.a].z - T.z) * k, s.x += (I[V.b].x - E.x) * k, s.y += (I[V.b].y - E.y) * k, s.z += (I[V.b].z - E.z) * k, h.x += (I[V.c].x - C.x) * k, h.y += (I[V.c].y - C.y) * k, h.z += (I[V.c].z - C.z) * k
                                        }
                                    }
                                    n.add(T), s.add(E), h.add(C), T = n, E = s, C = h
                                }
                                if (U.side === e.BackSide) S = r.intersectTriangle(C, E, T, !0); else S = r.intersectTriangle(T, E, C, U.side !== e.DoubleSide);
                                if (null !== S) S.applyMatrix4(a.matrixWorld), (u = c.ray.origin.distanceTo(S)) < d || u < c.near || u > c.far || p.push({
                                    distance: u,
                                    point: S,
                                    face: V,
                                    faceIndex: R,
                                    object: a
                                })
                            }
                        }
                    } else if (a instanceof e.Line) {
                        var G, W = (d = c.linePrecision) * d;
                        if (null === (G = a.geometry).boundingSphere && G.computeBoundingSphere(), t.copy(G.boundingSphere), t.applyMatrix4(a.matrixWorld), !1 === c.ray.isIntersectionSphere(t)) return p;
                        if (o.getInverse(a.matrixWorld), r.copy(c.ray).applyMatrix4(o), G instanceof e.Geometry) {
                            var H = (D = G.vertices).length, j = new e.Vector3, X = new e.Vector3,
                                q = a.type === e.LineStrip ? 1 : 2;
                            for (b = 0; b < H - 1; b += q) {
                                if (!(r.distanceSqToSegment(D[b], D[b + 1], X, j) > W)) (u = r.origin.distanceTo(X)) < c.near || u > c.far || p.push({
                                    distance: u,
                                    point: j.clone().applyMatrix4(a.matrixWorld),
                                    face: null,
                                    faceIndex: null,
                                    object: a
                                })
                            }
                        }
                    }
                }, c = function (e, t, r) {
                    for (var i = e.getDescendants(), o = 0, a = i.length; o < a; o++) l(i[o], t, r)
                };
            e.Raycaster.prototype.precision = 1e-4, e.Raycaster.prototype.linePrecision = 1, e.Raycaster.prototype.set = function (e, t) {
                this.ray.set(e, t)
            }, e.Raycaster.prototype.intersectObject = function (e, t) {
                var r = [];
                return !0 === t && c(e, this, r), l(e, this, r), r.sort(a), r
            }, e.Raycaster.prototype.intersectObjects = function (e, t) {
                for (var r = [], i = 0, o = e.length; i < o; i++) l(e[i], this, r), !0 === t && c(e[i], this, r);
                return r.sort(a), r
            }
        }($),$.Object3D = function () {
            this.id = $.Object3DIdCount++, this.uuid = $.Math.generateUUID(), this.name = "", this.parent = void 0, this.children = [], this.up = new $.Vector3(0, 1, 0), this.position = new $.Vector3;
            var e = this;
            Object.defineProperties(this, {
                rotation: {
                    enumerable: !0, value: (new $.Euler).onChange((function () {
                        e.quaternion.setFromEuler(e.rotation, !1)
                    }))
                }, quaternion: {
                    enumerable: !0, value: (new $.Quaternion).onChange((function () {
                        e.rotation.setFromQuaternion(e.quaternion, void 0, !1)
                    }))
                }, scale: {enumerable: !0, value: new $.Vector3(1, 1, 1)}
            }), this.renderDepth = null, this.rotationAutoUpdate = !0, this.matrix = new $.Matrix4, this.matrixWorld = new $.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.userData = {}
        },$.Object3D.prototype = {
            constructor: $.Object3D, get eulerOrder() {
                return console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order."), this.rotation.order
            }, set eulerOrder(e) {
                console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order."), this.rotation.order = e
            }, get useQuaternion() {
                console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")
            }, set useQuaternion(e) {
                console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")
            }, applyMatrix: function (e) {
                this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
            }, setRotationFromAxisAngle: function (e, t) {
                this.quaternion.setFromAxisAngle(e, t)
            }, setRotationFromEuler: function (e) {
                this.quaternion.setFromEuler(e, !0)
            }, setRotationFromMatrix: function (e) {
                this.quaternion.setFromRotationMatrix(e)
            }, setRotationFromQuaternion: function (e) {
                this.quaternion.copy(e)
            }, rotateOnAxis: (V = new $.Quaternion, function (e, t) {
                return V.setFromAxisAngle(e, t), this.quaternion.multiply(V), this
            }), rotateX: function () {
                var e = new $.Vector3(1, 0, 0);
                return function (t) {
                    return this.rotateOnAxis(e, t)
                }
            }(), rotateY: function () {
                var e = new $.Vector3(0, 1, 0);
                return function (t) {
                    return this.rotateOnAxis(e, t)
                }
            }(), rotateZ: function () {
                var e = new $.Vector3(0, 0, 1);
                return function (t) {
                    return this.rotateOnAxis(e, t)
                }
            }(), translateOnAxis: function () {
                var e = new $.Vector3;
                return function (t, r) {
                    return e.copy(t), e.applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(r)), this
                }
            }(), translate: function (e, t) {
                return console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed."), this.translateOnAxis(t, e)
            }, translateX: function () {
                var e = new $.Vector3(1, 0, 0);
                return function (t) {
                    return this.translateOnAxis(e, t)
                }
            }(), translateY: function () {
                var e = new $.Vector3(0, 1, 0);
                return function (t) {
                    return this.translateOnAxis(e, t)
                }
            }(), translateZ: function () {
                var e = new $.Vector3(0, 0, 1);
                return function (t) {
                    return this.translateOnAxis(e, t)
                }
            }(), localToWorld: function (e) {
                return e.applyMatrix4(this.matrixWorld)
            }, worldToLocal: (U = new $.Matrix4, function (e) {
                return e.applyMatrix4(U.getInverse(this.matrixWorld))
            }), lookAt: function () {
                var e = new $.Matrix4;
                return function (t) {
                    e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
                }
            }(), add: function (e) {
                if (e !== this) {
                    if (e instanceof $.Object3D) {
                        void 0 !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({type: "added"}), this.children.push(e);
                        for (var t = this; void 0 !== t.parent;) t = t.parent;
                        void 0 !== t && t instanceof $.Scene && t.__addObject(e)
                    }
                } else console.warn("THREE.Object3D.add: An object can't be added as a child of itself.")
            }, remove: function (e) {
                var t = this.children.indexOf(e);
                if (-1 !== t) {
                    e.parent = void 0, e.dispatchEvent({type: "removed"}), this.children.splice(t, 1);
                    for (var r = this; void 0 !== r.parent;) r = r.parent;
                    void 0 !== r && r instanceof $.Scene && r.__removeObject(e)
                }
            }, traverse: function (e) {
                e(this);
                for (var t = 0, r = this.children.length; t < r; t++) this.children[t].traverse(e)
            }, getObjectById: function (e, t) {
                for (var r = 0, i = this.children.length; r < i; r++) {
                    var o = this.children[r];
                    if (o.id === e) return o;
                    if (!0 === t && void 0 !== (o = o.getObjectById(e, t))) return o
                }
            }, getObjectByName: function (e, t) {
                for (var r = 0, i = this.children.length; r < i; r++) {
                    var o = this.children[r];
                    if (o.name === e) return o;
                    if (!0 === t && void 0 !== (o = o.getObjectByName(e, t))) return o
                }
            }, getChildByName: function (e, t) {
                return console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e, t)
            }, getDescendants: function (e) {
                void 0 === e && (e = []), Array.prototype.push.apply(e, this.children);
                for (var t = 0, r = this.children.length; t < r; t++) this.children[t].getDescendants(e);
                return e
            }, updateMatrix: function () {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
            }, updateMatrixWorld: function (e) {
                !0 === this.matrixAutoUpdate && this.updateMatrix(), !0 !== this.matrixWorldNeedsUpdate && !0 !== e || (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
                for (var t = 0, r = this.children.length; t < r; t++) this.children[t].updateMatrixWorld(e)
            }, clone: function (e, t) {
                if (void 0 === e && (e = new $.Object3D), void 0 === t && (t = !0), e.name = this.name, e.up.copy(this.up), e.position.copy(this.position), e.quaternion.copy(this.quaternion), e.scale.copy(this.scale), e.renderDepth = this.renderDepth, e.rotationAutoUpdate = this.rotationAutoUpdate, e.matrix.copy(this.matrix), e.matrixWorld.copy(this.matrixWorld), e.matrixAutoUpdate = this.matrixAutoUpdate, e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, e.visible = this.visible, e.castShadow = this.castShadow, e.receiveShadow = this.receiveShadow, e.frustumCulled = this.frustumCulled, e.userData = JSON.parse(JSON.stringify(this.userData)), !0 === t) for (var r = 0; r < this.children.length; r++) {
                    var i = this.children[r];
                    e.add(i.clone())
                }
                return e
            }
        },$.EventDispatcher.prototype.apply($.Object3D.prototype),$.Object3DIdCount = 0,$.Projector = function () {
            var e, t, r, i, o, a, n, s, h, l, c, p, u = [], f = 0, d = [], m = 0, y = [], g = 0, v = [], x = 0, w = [],
                _ = 0, b = {objects: [], lights: [], elements: []}, M = new $.Vector3, S = new $.Vector3,
                A = new $.Vector3, T = new $.Vector3, E = new $.Vector4,
                C = new $.Box3(new $.Vector3(-1, -1, -1), new $.Vector3(1, 1, 1)), P = new $.Box3, L = new Array(3),
                D = (new Array(4), new $.Matrix4), R = new $.Matrix4, F = new $.Matrix4, U = new $.Matrix3,
                V = new $.Frustum, z = new $.Vector4, B = new $.Vector4;
            this.projectVector = function (e, t) {
                return t.matrixWorldInverse.getInverse(t.matrixWorld), R.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), e.applyProjection(R)
            }, this.unprojectVector = (p = new $.Matrix4, function (e, t) {
                return p.getInverse(t.projectionMatrix), R.multiplyMatrices(t.matrixWorld, p), e.applyProjection(R)
            }), this.pickingRay = function (e, t) {
                e.z = -1;
                var r = new $.Vector3(e.x, e.y, 1);
                return this.unprojectVector(e, t), this.unprojectVector(r, t), r.sub(e).normalize(), new $.Raycaster(e, r)
            };
            var N = function (r) {
                if (!1 !== r.visible) {
                    r instanceof $.Light ? b.lights.push(r) : (r instanceof $.Mesh || r instanceof $.Line || r instanceof $.Sprite) && (!1 !== r.frustumCulled && !0 !== V.intersectsObject(r) || ((e = function () {
                        if (t === f) {
                            var e = new $.RenderableObject;
                            return u.push(e), f++, t++, e
                        }
                        return u[t++]
                    }()).id = r.id, e.object = r, null !== r.renderDepth ? e.z = r.renderDepth : (T.setFromMatrixPosition(r.matrixWorld), T.applyProjection(R), e.z = T.z), b.objects.push(e)));
                    for (var i = 0, o = r.children.length; i < o; i++) N(r.children[i])
                }
            }, O = new function () {
                var e = [], t = [], i = null, a = null, s = new $.Matrix3, h = function (e) {
                    var t = e.position, r = e.positionWorld, i = e.positionScreen;
                    r.copy(t).applyMatrix4(c), i.copy(r).applyMatrix4(R);
                    var o = 1 / i.w;
                    i.x *= o, i.y *= o, i.z *= o, e.visible = i.x >= -1 && i.x <= 1 && i.y >= -1 && i.y <= 1 && i.z >= -1 && i.z <= 1
                }, l = function (e, t, r) {
                    return !0 === e.visible || !0 === t.visible || !0 === r.visible || (L[0] = e.positionScreen, L[1] = t.positionScreen, L[2] = r.positionScreen, C.isIntersectionBox(P.setFromPoints(L)))
                }, p = function (e, t, r) {
                    return (r.positionScreen.x - e.positionScreen.x) * (t.positionScreen.y - e.positionScreen.y) - (r.positionScreen.y - e.positionScreen.y) * (t.positionScreen.x - e.positionScreen.x) < 0
                };
                return {
                    setObject: function (r) {
                        a = (i = r).material, s.getNormalMatrix(i.matrixWorld), e.length = 0, t.length = 0
                    },
                    projectVertex: h,
                    checkTriangleVisibility: l,
                    checkBackfaceCulling: p,
                    pushVertex: function (e, t, i) {
                        (r = k()).position.set(e, t, i), h(r)
                    },
                    pushNormal: function (t, r, i) {
                        e.push(t, r, i)
                    },
                    pushUv: function (e, r) {
                        t.push(e, r)
                    },
                    pushLine: function (e, t) {
                        var r = d[e], o = d[t];
                        (n = G()).id = i.id, n.v1.copy(r), n.v2.copy(o), n.z = (r.positionScreen.z + o.positionScreen.z) / 2, n.material = i.material, b.elements.push(n)
                    },
                    pushTriangle: function (r, n, h) {
                        var c = d[r], u = d[n], f = d[h];
                        if (!1 !== l(c, u, f) && (a.side === $.DoubleSide || !0 === p(c, u, f))) {
                            (o = I()).id = i.id, o.v1.copy(c), o.v2.copy(u), o.v3.copy(f), o.z = (c.positionScreen.z + u.positionScreen.z + f.positionScreen.z) / 3;
                            for (var m = 0; m < 3; m++) {
                                var y = 3 * arguments[m], g = o.vertexNormalsModel[m];
                                g.set(e[y], e[y + 1], e[y + 2]), g.applyMatrix3(s).normalize();
                                var v = 2 * arguments[m], x = o.uvs[m];
                                x.set(t[v], t[v + 1])
                            }
                            o.vertexNormalsLength = 3, o.material = i.material, b.elements.push(o)
                        }
                    }
                }
            };

            function k() {
                if (i === m) {
                    var e = new $.RenderableVertex;
                    return d.push(e), m++, i++, e
                }
                return d[i++]
            }

            function I() {
                if (a === g) {
                    var e = new $.RenderableFace;
                    return y.push(e), g++, a++, e
                }
                return y[a++]
            }

            function G() {
                if (s === x) {
                    var e = new $.RenderableLine;
                    return v.push(e), x++, s++, e
                }
                return v[s++]
            }

            function W() {
                if (l === _) {
                    var e = new $.RenderableSprite;
                    return w.push(e), _++, l++, e
                }
                return w[l++]
            }

            function H(e, t) {
                return e.z !== t.z ? t.z - e.z : e.id !== t.id ? e.id - t.id : 0
            }

            function j(e, t) {
                var r = 0, i = 1, o = e.z + e.w, a = t.z + t.w, n = -e.z + e.w, s = -t.z + t.w;
                return o >= 0 && a >= 0 && n >= 0 && s >= 0 || !(o < 0 && a < 0 || n < 0 && s < 0) && (o < 0 ? r = Math.max(r, o / (o - a)) : a < 0 && (i = Math.min(i, o / (o - a))), n < 0 ? r = Math.max(r, n / (n - s)) : s < 0 && (i = Math.min(i, n / (n - s))), !(i < r) && (e.lerp(t, r), t.lerp(e, 1 - i), !0))
            }

            this.projectScene = function (e, r, p, u) {
                var f, m, y, g, v, x, w, _, T;
                a = 0, s = 0, l = 0, b.elements.length = 0, !0 === e.autoUpdate && e.updateMatrixWorld(), void 0 === r.parent && r.updateMatrixWorld(), D.copy(r.matrixWorldInverse.getInverse(r.matrixWorld)), R.multiplyMatrices(r.projectionMatrix, D), V.setFromMatrix(R), function (e, r) {
                    t = 0, b.objects.length = 0, b.lights.length = 0, N(e), !0 === r && b.objects.sort(H)
                }(e, p);
                for (var C = 0, P = b.objects.length; C < P; C++) if (m = (f = b.objects[C].object).geometry, O.setObject(f), c = f.matrixWorld, i = 0, f instanceof $.Mesh) {
                    if (m instanceof $.BufferGeometry) {
                        var L = m.attributes, X = m.offsets;
                        if (void 0 === L.position) continue;
                        for (var q = 0, Y = (Te = L.position.array).length; q < Y; q += 3) O.pushVertex(Te[q], Te[q + 1], Te[q + 2]);
                        if (void 0 !== L.normal) {
                            var K = L.normal.array;
                            for (q = 0, Y = K.length; q < Y; q += 3) O.pushNormal(K[q], K[q + 1], K[q + 2])
                        }
                        if (void 0 !== L.uv) {
                            var Z = L.uv.array;
                            for (q = 0, Y = Z.length; q < Y; q += 2) O.pushUv(Z[q], Z[q + 1])
                        }
                        if (void 0 !== L.index) {
                            var Q = L.index.array;
                            if (X.length > 0) for (C = 0; C < X.length; C++) {
                                var J = X[C], ee = J.index;
                                for (q = J.start, Y = J.start + J.count; q < Y; q += 3) O.pushTriangle(Q[q] + ee, Q[q + 1] + ee, Q[q + 2] + ee)
                            } else for (q = 0, Y = Q.length; q < Y; q += 3) O.pushTriangle(Q[q], Q[q + 1], Q[q + 2])
                        } else for (q = 0, Y = Te.length / 3; q < Y; q += 3) O.pushTriangle(q, q + 1, q + 2)
                    } else if (m instanceof $.Geometry) {
                        y = m.vertices, g = m.faces, w = m.faceVertexUvs[0], U.getNormalMatrix(c), T = !0 === (_ = f.material instanceof $.MeshFaceMaterial) ? f.material : null;
                        for (var te = 0, re = y.length; te < re; te++) {
                            var ie = y[te];
                            O.pushVertex(ie.x, ie.y, ie.z)
                        }
                        for (var oe = 0, ae = g.length; oe < ae; oe++) {
                            v = g[oe];
                            var ne = !0 === _ ? T.materials[v.materialIndex] : f.material;
                            if (void 0 !== ne) {
                                var se = ne.side, he = d[v.a], le = d[v.b], ce = d[v.c];
                                if (!0 === ne.morphTargets) {
                                    var pe = m.morphTargets, ue = f.morphTargetInfluences, fe = he.position,
                                        de = le.position, me = ce.position;
                                    M.set(0, 0, 0), S.set(0, 0, 0), A.set(0, 0, 0);
                                    for (var ye = 0, ge = pe.length; ye < ge; ye++) {
                                        var ve = ue[ye];
                                        if (0 !== ve) {
                                            var xe = pe[ye].vertices;
                                            M.x += (xe[v.a].x - fe.x) * ve, M.y += (xe[v.a].y - fe.y) * ve, M.z += (xe[v.a].z - fe.z) * ve, S.x += (xe[v.b].x - de.x) * ve, S.y += (xe[v.b].y - de.y) * ve, S.z += (xe[v.b].z - de.z) * ve, A.x += (xe[v.c].x - me.x) * ve, A.y += (xe[v.c].y - me.y) * ve, A.z += (xe[v.c].z - me.z) * ve
                                        }
                                    }
                                    he.position.add(M), le.position.add(S), ce.position.add(A), O.projectVertex(he), O.projectVertex(le), O.projectVertex(ce)
                                }
                                if (!1 !== O.checkTriangleVisibility(he, le, ce)) {
                                    var we = O.checkBackfaceCulling(he, le, ce);
                                    if (se !== $.DoubleSide) {
                                        if (se === $.FrontSide && !1 === we) continue;
                                        if (se === $.BackSide && !0 === we) continue
                                    }
                                    (o = I()).id = f.id, o.v1.copy(he), o.v2.copy(le), o.v3.copy(ce), o.normalModel.copy(v.normal), !1 !== we || se !== $.BackSide && se !== $.DoubleSide || o.normalModel.negate(), o.normalModel.applyMatrix3(U).normalize(), x = v.vertexNormals;
                                    for (var _e = 0, be = Math.min(x.length, 3); _e < be; _e++) {
                                        var Me = o.vertexNormalsModel[_e];
                                        Me.copy(x[_e]), !1 !== we || se !== $.BackSide && se !== $.DoubleSide || Me.negate(), Me.applyMatrix3(U).normalize()
                                    }
                                    o.vertexNormalsLength = x.length;
                                    var Se = w[oe];
                                    if (void 0 !== Se) for (var Ae = 0; Ae < 3; Ae++) o.uvs[Ae].copy(Se[Ae]);
                                    o.color = v.color, o.material = ne, o.z = (he.positionScreen.z + le.positionScreen.z + ce.positionScreen.z) / 3, b.elements.push(o)
                                }
                            }
                        }
                    }
                } else if (f instanceof $.Line) {
                    if (m instanceof $.BufferGeometry) {
                        if (void 0 !== (L = m.attributes).position) {
                            var Te;
                            for (q = 0, Y = (Te = L.position.array).length; q < Y; q += 3) O.pushVertex(Te[q], Te[q + 1], Te[q + 2]);
                            if (void 0 !== L.index) for (q = 0, Y = (Q = L.index.array).length; q < Y; q += 2) O.pushLine(Q[q], Q[q + 1]); else for (q = 0, Y = Te.length / 3 - 1; q < Y; q++) O.pushLine(q, q + 1)
                        }
                    } else if (m instanceof $.Geometry) {
                        if (F.multiplyMatrices(R, c), 0 === (y = f.geometry.vertices).length) continue;
                        (he = k()).positionScreen.copy(y[0]).applyMatrix4(F);
                        var Ee = f.type === $.LinePieces ? 2 : 1;
                        for (te = 1, re = y.length; te < re; te++) (he = k()).positionScreen.copy(y[te]).applyMatrix4(F), (te + 1) % Ee > 0 || (le = d[i - 2], z.copy(he.positionScreen), B.copy(le.positionScreen), !0 === j(z, B) && (z.multiplyScalar(1 / z.w), B.multiplyScalar(1 / B.w), (n = G()).id = f.id, n.v1.positionScreen.copy(z), n.v2.positionScreen.copy(B), n.z = Math.max(z.z, B.z), n.material = f.material, f.material.vertexColors === $.VertexColors && (n.vertexColors[0].copy(f.geometry.colors[te]), n.vertexColors[1].copy(f.geometry.colors[te - 1])), b.elements.push(n)))
                    }
                } else if (f instanceof $.Sprite) {
                    E.set(c.elements[12], c.elements[13], c.elements[14], 1), E.applyMatrix4(R);
                    var Ce = 1 / E.w;
                    E.z *= Ce, E.z >= -1 && E.z <= 1 && ((h = W()).id = f.id, h.x = E.x * Ce, h.y = E.y * Ce, h.z = E.z, h.object = f, h.rotation = f.rotation, h.scale.x = f.scale.x * Math.abs(h.x - (E.x + r.projectionMatrix.elements[0]) / (E.w + r.projectionMatrix.elements[12])), h.scale.y = f.scale.y * Math.abs(h.y - (E.y + r.projectionMatrix.elements[5]) / (E.w + r.projectionMatrix.elements[13])), h.material = f.material, b.elements.push(h))
                }
                return !0 === u && b.elements.sort(H), b
            }
        },$.Face3 = function (e, t, r, i, o, a) {
            this.a = e, this.b = t, this.c = r, this.normal = i instanceof $.Vector3 ? i : new $.Vector3, this.vertexNormals = i instanceof Array ? i : [], this.color = o instanceof $.Color ? o : new $.Color, this.vertexColors = o instanceof Array ? o : [], this.vertexTangents = [], this.materialIndex = void 0 !== a ? a : 0
        },$.Face3.prototype = {
            constructor: $.Face3, clone: function () {
                var e, t, r = new $.Face3(this.a, this.b, this.c);
                for (r.normal.copy(this.normal), r.color.copy(this.color), r.materialIndex = this.materialIndex, e = 0, t = this.vertexNormals.length; e < t; e++) r.vertexNormals[e] = this.vertexNormals[e].clone();
                for (e = 0, t = this.vertexColors.length; e < t; e++) r.vertexColors[e] = this.vertexColors[e].clone();
                for (e = 0, t = this.vertexTangents.length; e < t; e++) r.vertexTangents[e] = this.vertexTangents[e].clone();
                return r
            }
        },$.Face4 = function (e, t, r, i, o, a, n) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new $.Face3(e, t, r, o, a, n)
        },$.BufferAttribute = function () {
        },$.BufferAttribute.prototype = {
            constructor: $.BufferAttribute, get length() {
                return this.array.length
            }, set: function (e) {
                this.array.set(e)
            }, setX: function (e, t) {
                this.array[e * this.itemSize] = t
            }, setY: function (e, t) {
                this.array[e * this.itemSize + 1] = t
            }, setZ: function (e, t) {
                this.array[e * this.itemSize + 2] = t
            }, setXY: function (e, t, r) {
                e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r
            }, setXYZ: function (e, t, r, i) {
                e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r, this.array[e + 2] = i
            }, setXYZW: function (e, t, r, i, o) {
                e *= this.itemSize, this.array[e] = t, this.array[e + 1] = r, this.array[e + 2] = i, this.array[e + 3] = o
            }
        },$.Int8Attribute = function (e, t) {
            this.array = new Int8Array(e * t), this.itemSize = t
        },$.Int8Attribute.prototype = Object.create($.BufferAttribute.prototype),$.Uint8Attribute = function (e, t) {
            this.array = new Uint8Array(e * t), this.itemSize = t
        },$.Uint8Attribute.prototype = Object.create($.BufferAttribute.prototype),$.Uint8ClampedAttribute = function (e, t) {
            this.array = new Uint8ClampedArray(e * t), this.itemSize = t
        },$.Uint8ClampedAttribute.prototype = Object.create($.BufferAttribute.prototype),$.Int16Attribute = function (e, t) {
            this.array = new Int16Array(e * t), this.itemSize = t
        },$.Int16Attribute.prototype = Object.create($.BufferAttribute.prototype),$.Uint16Attribute = function (e, t) {
            this.array = new Uint16Array(e * t), this.itemSize = t
        },$.Uint16Attribute.prototype = Object.create($.BufferAttribute.prototype),$.Int32Attribute = function (e, t) {
            this.array = new Int32Array(e * t), this.itemSize = t
        },$.Int32Attribute.prototype = Object.create($.BufferAttribute.prototype),$.Uint32Attribute = function (e, t) {
            this.array = new Uint32Array(e * t), this.itemSize = t
        },$.Uint32Attribute.prototype = Object.create($.BufferAttribute.prototype),$.Float32Attribute = function (e, t) {
            this.array = new Float32Array(e * t), this.itemSize = t
        },$.Float32Attribute.prototype = Object.create($.BufferAttribute.prototype),$.Float64Attribute = function (e, t) {
            this.array = new Float64Array(e * t), this.itemSize = t
        },$.Float64Attribute.prototype = Object.create($.BufferAttribute.prototype),$.BufferGeometry = function () {
            this.id = $.GeometryIdCount++, this.uuid = $.Math.generateUUID(), this.name = "", this.attributes = {}, this.drawcalls = [], this.offsets = this.drawcalls, this.boundingBox = null, this.boundingSphere = null
        },$.BufferGeometry.prototype = {
            constructor: $.BufferGeometry, addAttribute: function (e, t) {
                if (t instanceof $.BufferAttribute == !1) return console.warn("DEPRECATED: BufferGeometry's addAttribute() now expects ( name, attribute )."), void (this.attributes[e] = {
                    array: arguments[1],
                    itemSize: arguments[2]
                });
                this.attributes[e] = t
            }, getAttribute: function (e) {
                return this.attributes[e]
            }, addDrawCall: function (e, t, r) {
                this.drawcalls.push({start: e, count: t, index: void 0 !== r ? r : 0})
            }, applyMatrix: function (e) {
                var t = this.attributes.position;
                void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0);
                var r = this.attributes.normal;
                void 0 !== r && ((new $.Matrix3).getNormalMatrix(e).applyToVector3Array(r.array), r.needsUpdate = !0)
            }, computeBoundingBox: function () {
                null === this.boundingBox && (this.boundingBox = new $.Box3);
                var e = this.attributes.position.array;
                if (e) {
                    var t = this.boundingBox;
                    e.length >= 3 && (t.min.x = t.max.x = e[0], t.min.y = t.max.y = e[1], t.min.z = t.max.z = e[2]);
                    for (var r = 3, i = e.length; r < i; r += 3) {
                        var o = e[r], a = e[r + 1], n = e[r + 2];
                        o < t.min.x ? t.min.x = o : o > t.max.x && (t.max.x = o), a < t.min.y ? t.min.y = a : a > t.max.y && (t.max.y = a), n < t.min.z ? t.min.z = n : n > t.max.z && (t.max.z = n)
                    }
                }
                void 0 !== e && 0 !== e.length || (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0))
            }, computeBoundingSphere: function () {
                var e = new $.Box3, t = new $.Vector3;
                return function () {
                    null === this.boundingSphere && (this.boundingSphere = new $.Sphere);
                    var r = this.attributes.position.array;
                    if (r) {
                        e.makeEmpty();
                        for (var i = this.boundingSphere.center, o = 0, a = r.length; o < a; o += 3) t.set(r[o], r[o + 1], r[o + 2]), e.addPoint(t);
                        e.center(i);
                        var n = 0;
                        for (o = 0, a = r.length; o < a; o += 3) t.set(r[o], r[o + 1], r[o + 2]), n = Math.max(n, i.distanceToSquared(t));
                        this.boundingSphere.radius = Math.sqrt(n)
                    }
                }
            }(), computeFaceNormals: function () {
            }, computeVertexNormals: function () {
                if (this.attributes.position) {
                    var e, t, r, i, o = this.attributes.position.array.length;
                    if (void 0 === this.attributes.normal) this.attributes.normal = {
                        itemSize: 3,
                        array: new Float32Array(o)
                    }; else for (e = 0, t = this.attributes.normal.array.length; e < t; e++) this.attributes.normal.array[e] = 0;
                    var a, n, s, h, l, c, p = this.attributes.position.array, u = this.attributes.normal.array,
                        f = new $.Vector3, d = new $.Vector3, m = new $.Vector3, y = new $.Vector3, g = new $.Vector3;
                    if (this.attributes.index) {
                        var v = this.attributes.index.array,
                            x = this.offsets.length > 0 ? this.offsets : [{start: 0, count: v.length, index: 0}];
                        for (r = 0, i = x.length; r < i; ++r) {
                            var w = x[r].start, _ = x[r].count, b = x[r].index;
                            for (e = w, t = w + _; e < t; e += 3) a = b + v[e], n = b + v[e + 1], s = b + v[e + 2], h = p[3 * a], l = p[3 * a + 1], c = p[3 * a + 2], f.set(h, l, c), h = p[3 * n], l = p[3 * n + 1], c = p[3 * n + 2], d.set(h, l, c), h = p[3 * s], l = p[3 * s + 1], c = p[3 * s + 2], m.set(h, l, c), y.subVectors(m, d), g.subVectors(f, d), y.cross(g), u[3 * a] += y.x, u[3 * a + 1] += y.y, u[3 * a + 2] += y.z, u[3 * n] += y.x, u[3 * n + 1] += y.y, u[3 * n + 2] += y.z, u[3 * s] += y.x, u[3 * s + 1] += y.y, u[3 * s + 2] += y.z
                        }
                    } else for (e = 0, t = p.length; e < t; e += 9) h = p[e], l = p[e + 1], c = p[e + 2], f.set(h, l, c), h = p[e + 3], l = p[e + 4], c = p[e + 5], d.set(h, l, c), h = p[e + 6], l = p[e + 7], c = p[e + 8], m.set(h, l, c), y.subVectors(m, d), g.subVectors(f, d), y.cross(g), u[e] = y.x, u[e + 1] = y.y, u[e + 2] = y.z, u[e + 3] = y.x, u[e + 4] = y.y, u[e + 5] = y.z, u[e + 6] = y.x, u[e + 7] = y.y, u[e + 8] = y.z;
                    this.normalizeNormals(), this.normalsNeedUpdate = !0
                }
            }, computeTangents: function () {
                if (void 0 !== this.attributes.index && void 0 !== this.attributes.position && void 0 !== this.attributes.normal && void 0 !== this.attributes.uv) {
                    var e = this.attributes.index.array, t = this.attributes.position.array,
                        r = this.attributes.normal.array, i = this.attributes.uv.array, o = t.length / 3;
                    if (void 0 === this.attributes.tangent) {
                        var a = 4 * o;
                        this.attributes.tangent = {itemSize: 4, array: new Float32Array(a)}
                    }
                    for (var n, s, h, l, c, p, u, f, d, m, y, g, v, x, w, _, b, M, S, A, T, E, C, P, L, D, R = this.attributes.tangent.array, F = [], U = [], V = 0; V < o; V++) F[V] = new $.Vector3, U[V] = new $.Vector3;
                    var z, B, N, O, k, I, G, W, H, j, X = new $.Vector3, q = new $.Vector3, Y = this.offsets;
                    for (N = 0, O = Y.length; N < O; ++N) {
                        var K = Y[N].start, Z = Y[N].count, Q = Y[N].index;
                        for (z = K, B = K + Z; z < B; z += 3) k = Q + e[z], I = Q + e[z + 1], G = Q + e[z + 2], H = I, j = G, n = t[3 * (W = k)], s = t[3 * W + 1], h = t[3 * W + 2], l = t[3 * H], c = t[3 * H + 1], p = t[3 * H + 2], u = t[3 * j], f = t[3 * j + 1], d = t[3 * j + 2], m = i[2 * W], y = i[2 * W + 1], g = i[2 * H], v = i[2 * H + 1], x = i[2 * j], w = i[2 * j + 1], _ = l - n, b = u - n, M = c - s, S = f - s, A = p - h, T = d - h, D = 1 / ((E = g - m) * (L = w - y) - (C = x - m) * (P = v - y)), X.set((L * _ - P * b) * D, (L * M - P * S) * D, (L * A - P * T) * D), q.set((E * b - C * _) * D, (E * S - C * M) * D, (E * T - C * A) * D), F[W].add(X), F[H].add(X), F[j].add(X), U[W].add(q), U[H].add(q), U[j].add(q)
                    }
                    var J, ee, te, re = new $.Vector3, ie = new $.Vector3, oe = new $.Vector3, ae = new $.Vector3;
                    for (N = 0, O = Y.length; N < O; ++N) {
                        K = Y[N].start, Z = Y[N].count, Q = Y[N].index;
                        for (z = K, B = K + Z; z < B; z += 3) k = Q + e[z], I = Q + e[z + 1], G = Q + e[z + 2], ne(k), ne(I), ne(G)
                    }
                } else console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");

                function ne(e) {
                    oe.x = r[3 * e], oe.y = r[3 * e + 1], oe.z = r[3 * e + 2], ae.copy(oe), ee = F[e], re.copy(ee), re.sub(oe.multiplyScalar(oe.dot(ee))).normalize(), ie.crossVectors(ae, ee), te = ie.dot(U[e]), J = te < 0 ? -1 : 1, R[4 * e] = re.x, R[4 * e + 1] = re.y, R[4 * e + 2] = re.z, R[4 * e + 3] = J
                }
            }, computeOffsets: function (e) {
                var t = e;
                void 0 === e && (t = 65535);
                Date.now();
                for (var r = this.attributes.index.array, i = this.attributes.position.array, o = (i.length, r.length / 3), a = new Uint16Array(r.length), n = 0, s = 0, h = [{
                    start: 0,
                    count: 0,
                    index: 0
                }], l = h[0], c = 0, p = new Int32Array(6), u = new Int32Array(i.length), f = new Int32Array(i.length), d = 0; d < i.length; d++) u[d] = -1, f[d] = -1;
                for (var m = 0; m < o; m++) {
                    c = 0;
                    for (var y = 0; y < 3; y++) {
                        -1 == u[w = r[3 * m + y]] ? (p[2 * y] = w, p[2 * y + 1] = -1, c++) : u[w] < l.index ? (p[2 * y] = w, p[2 * y + 1] = -1) : (p[2 * y] = w, p[2 * y + 1] = u[w])
                    }
                    if (s + c > l.index + t) {
                        var g = {start: n, count: 0, index: s};
                        h.push(g), l = g;
                        for (var v = 0; v < 6; v += 2) {
                            (x = p[v + 1]) > -1 && x < l.index && (p[v + 1] = -1)
                        }
                    }
                    for (v = 0; v < 6; v += 2) {
                        var x, w = p[v];
                        -1 === (x = p[v + 1]) && (x = s++), u[w] = x, f[x] = w, a[n++] = x - l.index, l.count++
                    }
                }
                return this.reorderBuffers(a, f, s), this.offsets = h, h
            }, merge: function () {
            }, normalizeNormals: function () {
                for (var e, t, r, i, o = this.attributes.normal.array, a = 0, n = o.length; a < n; a += 3) e = o[a], t = o[a + 1], r = o[a + 2], i = 1 / Math.sqrt(e * e + t * t + r * r), o[a] *= i, o[a + 1] *= i, o[a + 2] *= i
            }, reorderBuffers: function (e, t, r) {
                var i = {},
                    o = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
                for (var a in this.attributes) if ("index" != a) for (var n = this.attributes[a].array, s = 0, h = o.length; s < h; s++) {
                    var l = o[s];
                    if (n instanceof l) {
                        i[a] = new l(this.attributes[a].itemSize * r);
                        break
                    }
                }
                for (var c = 0; c < r; c++) {
                    var p = t[c];
                    for (var a in this.attributes) if ("index" != a) for (var u = this.attributes[a].array, f = this.attributes[a].itemSize, d = i[a], m = 0; m < f; m++) d[c * f + m] = u[p * f + m]
                }
                for (var a in this.attributes.index.array = e, this.attributes) "index" != a && (this.attributes[a].array = i[a], this.attributes[a].numItems = this.attributes[a].itemSize * r)
            }, clone: function () {
                var e = new $.BufferGeometry,
                    t = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
                for (var r in this.attributes) {
                    for (var i = this.attributes[r], o = i.array, a = {
                        itemSize: i.itemSize,
                        array: null
                    }, n = 0, s = t.length; n < s; n++) {
                        var h = t[n];
                        if (o instanceof h) {
                            a.array = new h(o);
                            break
                        }
                    }
                    e.attributes[r] = a
                }
                for (n = 0, s = this.offsets.length; n < s; n++) {
                    var l = this.offsets[n];
                    e.offsets.push({start: l.start, index: l.index, count: l.count})
                }
                return e
            }, dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }
        },$.EventDispatcher.prototype.apply($.BufferGeometry.prototype),$.Geometry = function () {
            this.id = $.GeometryIdCount++, this.uuid = $.Math.generateUUID(), this.name = "", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.dynamic = !0, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.tangentsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.buffersNeedUpdate = !1
        },$.Geometry.prototype = {
            constructor: $.Geometry, applyMatrix: function (e) {
                for (var t = (new $.Matrix3).getNormalMatrix(e), r = 0, i = this.vertices.length; r < i; r++) {
                    this.vertices[r].applyMatrix4(e)
                }
                for (r = 0, i = this.faces.length; r < i; r++) {
                    var o = this.faces[r];
                    o.normal.applyMatrix3(t).normalize();
                    for (var a = 0, n = o.vertexNormals.length; a < n; a++) o.vertexNormals[a].applyMatrix3(t).normalize()
                }
                this.boundingBox instanceof $.Box3 && this.computeBoundingBox(), this.boundingSphere instanceof $.Sphere && this.computeBoundingSphere()
            }, computeFaceNormals: function () {
                for (var e = new $.Vector3, t = new $.Vector3, r = 0, i = this.faces.length; r < i; r++) {
                    var o = this.faces[r], a = this.vertices[o.a], n = this.vertices[o.b], s = this.vertices[o.c];
                    e.subVectors(s, n), t.subVectors(a, n), e.cross(t), e.normalize(), o.normal.copy(e)
                }
            }, computeVertexNormals: function (e) {
                var t, r, i, o, a, n;
                for (n = new Array(this.vertices.length), t = 0, r = this.vertices.length; t < r; t++) n[t] = new $.Vector3;
                if (e) {
                    var s, h, l, c = new $.Vector3, p = new $.Vector3;
                    new $.Vector3, new $.Vector3, new $.Vector3;
                    for (i = 0, o = this.faces.length; i < o; i++) a = this.faces[i], s = this.vertices[a.a], h = this.vertices[a.b], l = this.vertices[a.c], c.subVectors(l, h), p.subVectors(s, h), c.cross(p), n[a.a].add(c), n[a.b].add(c), n[a.c].add(c)
                } else for (i = 0, o = this.faces.length; i < o; i++) n[(a = this.faces[i]).a].add(a.normal), n[a.b].add(a.normal), n[a.c].add(a.normal);
                for (t = 0, r = this.vertices.length; t < r; t++) n[t].normalize();
                for (i = 0, o = this.faces.length; i < o; i++) (a = this.faces[i]).vertexNormals[0] = n[a.a].clone(), a.vertexNormals[1] = n[a.b].clone(), a.vertexNormals[2] = n[a.c].clone()
            }, computeMorphNormals: function () {
                var e, t, r, i, o;
                for (r = 0, i = this.faces.length; r < i; r++) for ((o = this.faces[r]).__originalFaceNormal ? o.__originalFaceNormal.copy(o.normal) : o.__originalFaceNormal = o.normal.clone(), o.__originalVertexNormals || (o.__originalVertexNormals = []), e = 0, t = o.vertexNormals.length; e < t; e++) o.__originalVertexNormals[e] ? o.__originalVertexNormals[e].copy(o.vertexNormals[e]) : o.__originalVertexNormals[e] = o.vertexNormals[e].clone();
                var a = new $.Geometry;
                for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
                    if (!this.morphNormals[e]) {
                        this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                        var n = this.morphNormals[e].faceNormals, s = this.morphNormals[e].vertexNormals;
                        for (r = 0, i = this.faces.length; r < i; r++) h = new $.Vector3, l = {
                            a: new $.Vector3,
                            b: new $.Vector3,
                            c: new $.Vector3
                        }, n.push(h), s.push(l)
                    }
                    var h, l, c = this.morphNormals[e];
                    for (a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals(), r = 0, i = this.faces.length; r < i; r++) o = this.faces[r], h = c.faceNormals[r], l = c.vertexNormals[r], h.copy(o.normal), l.a.copy(o.vertexNormals[0]), l.b.copy(o.vertexNormals[1]), l.c.copy(o.vertexNormals[2])
                }
                for (r = 0, i = this.faces.length; r < i; r++) (o = this.faces[r]).normal = o.__originalFaceNormal, o.vertexNormals = o.__originalVertexNormals
            }, computeTangents: function () {
                var e, t, r, i, o, a, n, s, h, l, c, p, u, f, d, m, y, g, v, x, w, _, b, M, S, A, T, E, C, P, L, D, R,
                    F, U = [], V = [], z = new $.Vector3, B = new $.Vector3, N = new $.Vector3, O = new $.Vector3,
                    k = new $.Vector3;
                for (r = 0, i = this.vertices.length; r < i; r++) U[r] = new $.Vector3, V[r] = new $.Vector3;
                for (e = 0, t = this.faces.length; e < t; e++) n = this.faces[e], s = this.faceVertexUvs[0][e], E = this, C = n.a, P = n.b, L = n.c, D = 0, R = 1, F = 2, h = E.vertices[C], l = E.vertices[P], c = E.vertices[L], p = s[D], u = s[R], f = s[F], d = l.x - h.x, m = c.x - h.x, y = l.y - h.y, g = c.y - h.y, v = l.z - h.z, x = c.z - h.z, w = u.x - p.x, _ = f.x - p.x, b = u.y - p.y, M = f.y - p.y, S = 1 / (w * M - _ * b), z.set((M * d - b * m) * S, (M * y - b * g) * S, (M * v - b * x) * S), B.set((w * m - _ * d) * S, (w * g - _ * y) * S, (w * x - _ * v) * S), U[C].add(z), U[P].add(z), U[L].add(z), V[C].add(B), V[P].add(B), V[L].add(B);
                var I = ["a", "b", "c", "d"];
                for (e = 0, t = this.faces.length; e < t; e++) for (n = this.faces[e], o = 0; o < Math.min(n.vertexNormals.length, 3); o++) k.copy(n.vertexNormals[o]), a = n[I[o]], A = U[a], N.copy(A), N.sub(k.multiplyScalar(k.dot(A))).normalize(), O.crossVectors(n.vertexNormals[o], A), T = O.dot(V[a]) < 0 ? -1 : 1, n.vertexTangents[o] = new $.Vector4(N.x, N.y, N.z, T);
                this.hasTangents = !0
            }, computeLineDistances: function () {
                for (var e = 0, t = this.vertices, r = 0, i = t.length; r < i; r++) r > 0 && (e += t[r].distanceTo(t[r - 1])), this.lineDistances[r] = e
            }, computeBoundingBox: function () {
                null === this.boundingBox && (this.boundingBox = new $.Box3), this.boundingBox.setFromPoints(this.vertices)
            }, computeBoundingSphere: function () {
                null === this.boundingSphere && (this.boundingSphere = new $.Sphere), this.boundingSphere.setFromPoints(this.vertices)
            }, merge: function (e, t, r) {
                if (e instanceof $.Geometry != !1) {
                    var i, o = this.vertices.length, a = (this.faceVertexUvs[0].length, this.vertices), n = e.vertices,
                        s = this.faces, h = e.faces, l = this.faceVertexUvs[0], c = e.faceVertexUvs[0];
                    void 0 === r && (r = 0), void 0 !== t && (i = (new $.Matrix3).getNormalMatrix(t));
                    for (var p = 0, u = n.length; p < u; p++) {
                        var f = n[p].clone();
                        void 0 !== t && f.applyMatrix4(t), a.push(f)
                    }
                    for (p = 0, u = h.length; p < u; p++) {
                        var d, m, y, g = h[p], v = g.vertexNormals, x = g.vertexColors;
                        (d = new $.Face3(g.a + o, g.b + o, g.c + o)).normal.copy(g.normal), void 0 !== i && d.normal.applyMatrix3(i).normalize();
                        for (var w = 0, _ = v.length; w < _; w++) m = v[w].clone(), void 0 !== i && m.applyMatrix3(i).normalize(), d.vertexNormals.push(m);
                        d.color.copy(g.color);
                        for (w = 0, _ = x.length; w < _; w++) y = x[w], d.vertexColors.push(y.clone());
                        d.materialIndex = g.materialIndex + r, s.push(d)
                    }
                    for (p = 0, u = c.length; p < u; p++) {
                        var b = c[p], M = [];
                        if (void 0 !== b) {
                            for (w = 0, _ = b.length; w < _; w++) M.push(new $.Vector2(b[w].x, b[w].y));
                            l.push(M)
                        }
                    }
                } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e)
            }, mergeVertices: function () {
                var e, t, r, i, o, a, n, s, h = {}, l = [], c = [], p = Math.pow(10, 4);
                for (r = 0, i = this.vertices.length; r < i; r++) e = this.vertices[r], void 0 === h[t = Math.round(e.x * p) + "_" + Math.round(e.y * p) + "_" + Math.round(e.z * p)] ? (h[t] = r, l.push(this.vertices[r]), c[r] = l.length - 1) : c[r] = c[h[t]];
                var u = [];
                for (r = 0, i = this.faces.length; r < i; r++) {
                    (o = this.faces[r]).a = c[o.a], o.b = c[o.b], o.c = c[o.c], a = [o.a, o.b, o.c];
                    for (var f = 0; f < 3; f++) if (a[f] == a[(f + 1) % 3]) {
                        f, u.push(r);
                        break
                    }
                }
                for (r = u.length - 1; r >= 0; r--) {
                    var d = u[r];
                    for (this.faces.splice(d, 1), n = 0, s = this.faceVertexUvs.length; n < s; n++) this.faceVertexUvs[n].splice(d, 1)
                }
                var m = this.vertices.length - l.length;
                return this.vertices = l, m
            }, makeGroups: (z = 0, function (e, t) {
                var r, i, o, a, n, s = {}, h = this.morphTargets.length, l = this.morphNormals.length;
                for (this.geometryGroups = {}, r = 0, i = this.faces.length; r < i; r++) o = this.faces[r], (a = e ? o.materialIndex : 0) in s || (s[a] = {
                    hash: a,
                    counter: 0
                }), (n = s[a].hash + "_" + s[a].counter) in this.geometryGroups || (this.geometryGroups[n] = {
                    faces3: [],
                    materialIndex: a,
                    vertices: 0,
                    numMorphTargets: h,
                    numMorphNormals: l
                }), this.geometryGroups[n].vertices + 3 > t && (s[a].counter += 1, (n = s[a].hash + "_" + s[a].counter) in this.geometryGroups || (this.geometryGroups[n] = {
                    faces3: [],
                    materialIndex: a,
                    vertices: 0,
                    numMorphTargets: h,
                    numMorphNormals: l
                })), this.geometryGroups[n].faces3.push(r), this.geometryGroups[n].vertices += 3;
                for (var c in this.geometryGroupsList = [], this.geometryGroups) this.geometryGroups[c].id = z++, this.geometryGroupsList.push(this.geometryGroups[c])
            }), clone: function () {
                for (var e = new $.Geometry, t = this.vertices, r = 0, i = t.length; r < i; r++) e.vertices.push(t[r].clone());
                var o = this.faces;
                for (r = 0, i = o.length; r < i; r++) e.faces.push(o[r].clone());
                var a = this.faceVertexUvs[0];
                for (r = 0, i = a.length; r < i; r++) {
                    for (var n = a[r], s = [], h = 0, l = n.length; h < l; h++) s.push(new $.Vector2(n[h].x, n[h].y));
                    e.faceVertexUvs[0].push(s)
                }
                return e
            }, dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }
        },$.EventDispatcher.prototype.apply($.Geometry.prototype),$.GeometryIdCount = 0,$.Camera = function () {
            $.Object3D.call(this), this.matrixWorldInverse = new $.Matrix4, this.projectionMatrix = new $.Matrix4
        },$.Camera.prototype = Object.create($.Object3D.prototype),$.Camera.prototype.lookAt = function () {
            var e = new $.Matrix4;
            return function (t) {
                e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
            }
        }(),$.Camera.prototype.clone = function (e) {
            return void 0 === e && (e = new $.Camera), $.Object3D.prototype.clone.call(this, e), e.matrixWorldInverse.copy(this.matrixWorldInverse), e.projectionMatrix.copy(this.projectionMatrix), e
        },$.OrthographicCamera = function (e, t, r, i, o, a) {
            $.Camera.call(this), this.left = e, this.right = t, this.top = r, this.bottom = i, this.near = void 0 !== o ? o : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
        },$.OrthographicCamera.prototype = Object.create($.Camera.prototype),$.OrthographicCamera.prototype.updateProjectionMatrix = function () {
            this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
        },$.OrthographicCamera.prototype.clone = function () {
            var e = new $.OrthographicCamera;
            return $.Camera.prototype.clone.call(this, e), e.left = this.left, e.right = this.right, e.top = this.top, e.bottom = this.bottom, e.near = this.near, e.far = this.far, e
        },$.PerspectiveCamera = function (e, t, r, i) {
            $.Camera.call(this), this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== i ? i : 2e3, this.updateProjectionMatrix()
        },$.PerspectiveCamera.prototype = Object.create($.Camera.prototype),$.PerspectiveCamera.prototype.setLens = function (e, t) {
            void 0 === t && (t = 24), this.fov = 2 * $.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
        },$.PerspectiveCamera.prototype.setViewOffset = function (e, t, r, i, o, a) {
            this.fullWidth = e, this.fullHeight = t, this.x = r, this.y = i, this.width = o, this.height = a, this.updateProjectionMatrix()
        },$.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
            if (this.fullWidth) {
                var e = this.fullWidth / this.fullHeight, t = Math.tan($.Math.degToRad(.5 * this.fov)) * this.near,
                    r = -t, i = e * r, o = e * t, a = Math.abs(o - i), n = Math.abs(t - r);
                this.projectionMatrix.makeFrustum(i + this.x * a / this.fullWidth, i + (this.x + this.width) * a / this.fullWidth, t - (this.y + this.height) * n / this.fullHeight, t - this.y * n / this.fullHeight, this.near, this.far)
            } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
        },$.PerspectiveCamera.prototype.clone = function () {
            var e = new $.PerspectiveCamera;
            return $.Camera.prototype.clone.call(this, e), e.fov = this.fov, e.aspect = this.aspect, e.near = this.near, e.far = this.far, e
        },$.Light = function (e) {
            $.Object3D.call(this), this.color = new $.Color(e)
        },$.Light.prototype = Object.create($.Object3D.prototype),$.Light.prototype.clone = function (e) {
            return void 0 === e && (e = new $.Light), $.Object3D.prototype.clone.call(this, e), e.color.copy(this.color), e
        },$.AmbientLight = function (e) {
            $.Light.call(this, e)
        },$.AmbientLight.prototype = Object.create($.Light.prototype),$.AmbientLight.prototype.clone = function () {
            var e = new $.AmbientLight;
            return $.Light.prototype.clone.call(this, e), e
        },$.AreaLight = function (e, t) {
            $.Light.call(this, e), this.normal = new $.Vector3(0, -1, 0), this.right = new $.Vector3(1, 0, 0), this.intensity = void 0 !== t ? t : 1, this.width = 1, this.height = 1, this.constantAttenuation = 1.5, this.linearAttenuation = .5, this.quadraticAttenuation = .1
        },$.AreaLight.prototype = Object.create($.Light.prototype),$.DirectionalLight = function (e, t) {
            $.Light.call(this, e), this.position.set(0, 1, 0), this.target = new $.Object3D, this.intensity = void 0 !== t ? t : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new $.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0], this.shadowCascadeWidth = [512, 512, 512], this.shadowCascadeHeight = [512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
        },$.DirectionalLight.prototype = Object.create($.Light.prototype),$.DirectionalLight.prototype.clone = function () {
            var e = new $.DirectionalLight;
            return $.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.castShadow = this.castShadow, e.onlyShadow = this.onlyShadow, e.shadowCameraNear = this.shadowCameraNear, e.shadowCameraFar = this.shadowCameraFar, e.shadowCameraLeft = this.shadowCameraLeft, e.shadowCameraRight = this.shadowCameraRight, e.shadowCameraTop = this.shadowCameraTop, e.shadowCameraBottom = this.shadowCameraBottom, e.shadowCameraVisible = this.shadowCameraVisible, e.shadowBias = this.shadowBias, e.shadowDarkness = this.shadowDarkness, e.shadowMapWidth = this.shadowMapWidth, e.shadowMapHeight = this.shadowMapHeight, e.shadowCascade = this.shadowCascade, e.shadowCascadeOffset.copy(this.shadowCascadeOffset), e.shadowCascadeCount = this.shadowCascadeCount, e.shadowCascadeBias = this.shadowCascadeBias.slice(0), e.shadowCascadeWidth = this.shadowCascadeWidth.slice(0), e.shadowCascadeHeight = this.shadowCascadeHeight.slice(0), e.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0), e.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0), e
        },$.HemisphereLight = function (e, t, r) {
            $.Light.call(this, e), this.position.set(0, 100, 0), this.groundColor = new $.Color(t), this.intensity = void 0 !== r ? r : 1
        },$.HemisphereLight.prototype = Object.create($.Light.prototype),$.HemisphereLight.prototype.clone = function () {
            var e = new $.HemisphereLight;
            return $.Light.prototype.clone.call(this, e), e.groundColor.copy(this.groundColor), e.intensity = this.intensity, e
        },$.PointLight = function (e, t, r) {
            $.Light.call(this, e), this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0
        },$.PointLight.prototype = Object.create($.Light.prototype),$.PointLight.prototype.clone = function () {
            var e = new $.PointLight;
            return $.Light.prototype.clone.call(this, e), e.intensity = this.intensity, e.distance = this.distance, e
        },$.SpotLight = function (e, t, r, i, o) {
            $.Light.call(this, e), this.position.set(0, 1, 0), this.target = new $.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.exponent = void 0 !== o ? o : 10, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
        },$.SpotLight.prototype = Object.create($.Light.prototype),$.SpotLight.prototype.clone = function () {
            var e = new $.SpotLight;
            return $.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.distance = this.distance, e.angle = this.angle, e.exponent = this.exponent, e.castShadow = this.castShadow, e.onlyShadow = this.onlyShadow, e.shadowCameraNear = this.shadowCameraNear, e.shadowCameraFar = this.shadowCameraFar, e.shadowCameraFov = this.shadowCameraFov, e.shadowCameraVisible = this.shadowCameraVisible, e.shadowBias = this.shadowBias, e.shadowDarkness = this.shadowDarkness, e.shadowMapWidth = this.shadowMapWidth, e.shadowMapHeight = this.shadowMapHeight, e
        },$.Cache = function () {
            this.files = {}
        },$.Cache.prototype = {
            constructor: $.Cache, add: function (e, t) {
                this.files[e] = t
            }, get: function (e) {
                return this.files[e]
            }, remove: function (e) {
                delete this.files[e]
            }, clear: function () {
                this.files = {}
            }
        },$.Loader = function (e) {
            this.showStatus = e, this.statusDomElement = e ? $.Loader.prototype.addStatusElement() : null, this.imageLoader = new $.ImageLoader, this.onLoadStart = function () {
            }, this.onLoadProgress = function () {
            }, this.onLoadComplete = function () {
            }
        },$.Loader.prototype = {
            constructor: $.Loader, crossOrigin: void 0, addStatusElement: function () {
                var e = document.createElement("div");
                return e.style.position = "absolute", e.style.right = "0px", e.style.top = "0px", e.style.fontSize = "0.8em", e.style.textAlign = "left", e.style.background = "rgba(0,0,0,0.25)", e.style.color = "#fff", e.style.width = "120px", e.style.padding = "0.5em 0.5em 0.5em 0.5em", e.style.zIndex = 1e3, e.innerHTML = "Loading ...", e
            }, updateProgress: function (e) {
                var t = "Loaded ";
                e.total ? t += (100 * e.loaded / e.total).toFixed(0) + "%" : t += (e.loaded / 1024).toFixed(2) + " KB", this.statusDomElement.innerHTML = t
            }, extractUrlBase: function (e) {
                var t = e.split("/");
                return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
            }, initMaterials: function (e, t) {
                for (var r = [], i = 0; i < e.length; ++i) r[i] = this.createMaterial(e[i], t);
                return r
            }, needsTangents: function (e) {
                for (var t = 0, r = e.length; t < r; t++) {
                    if (e[t] instanceof $.ShaderMaterial) return !0
                }
                return !1
            }, createMaterial: function (e, t) {
                var r = this;

                function i(e) {
                    var t = Math.log(e) / Math.LN2;
                    return Math.pow(2, Math.round(t))
                }

                function o(e, o, a, n, s, h, l) {
                    var c = /\.dds$/i.test(a), p = t + a;
                    if (c) {
                        var u = $.ImageUtils.loadCompressedTexture(p);
                        e[o] = u
                    } else {
                        u = document.createElement("canvas");
                        e[o] = new $.Texture(u)
                    }
                    if (e[o].sourceFile = a, n && (e[o].repeat.set(n[0], n[1]), 1 !== n[0] && (e[o].wrapS = $.RepeatWrapping), 1 !== n[1] && (e[o].wrapT = $.RepeatWrapping)), s && e[o].offset.set(s[0], s[1]), h) {
                        var f = {repeat: $.RepeatWrapping, mirror: $.MirroredRepeatWrapping};
                        void 0 !== f[h[0]] && (e[o].wrapS = f[h[0]]), void 0 !== f[h[1]] && (e[o].wrapT = f[h[1]])
                    }
                    if (l && (e[o].anisotropy = l), !c) {
                        u = e[o];
                        r.imageLoader.crossOrigin = r.crossOrigin, r.imageLoader.load(p, (function (e) {
                            if (!1 === $.Math.isPowerOfTwo(e.width) || !1 === $.Math.isPowerOfTwo(e.height)) {
                                var t = i(e.width), r = i(e.height);
                                u.image.width = t, u.image.height = r, u.image.getContext("2d").drawImage(e, 0, 0, t, r)
                            } else u.image = e;
                            u.needsUpdate = !0
                        }))
                    }
                }

                function a(e) {
                    return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
                }

                var n = "MeshLambertMaterial", s = {
                    color: 15658734,
                    opacity: 1,
                    map: null,
                    lightMap: null,
                    normalMap: null,
                    bumpMap: null,
                    wireframe: !1
                };
                if (e.shading) {
                    var h = e.shading.toLowerCase();
                    "phong" === h ? n = "MeshPhongMaterial" : "basic" === h && (n = "MeshBasicMaterial")
                }
                if (void 0 !== e.blending && void 0 !== $[e.blending] && (s.blending = $[e.blending]), (void 0 !== e.transparent || e.opacity < 1) && (s.transparent = e.transparent), void 0 !== e.depthTest && (s.depthTest = e.depthTest), void 0 !== e.depthWrite && (s.depthWrite = e.depthWrite), void 0 !== e.visible && (s.visible = e.visible), void 0 !== e.flipSided && (s.side = $.BackSide), void 0 !== e.doubleSided && (s.side = $.DoubleSide), void 0 !== e.wireframe && (s.wireframe = e.wireframe), void 0 !== e.vertexColors && ("face" === e.vertexColors ? s.vertexColors = $.FaceColors : e.vertexColors && (s.vertexColors = $.VertexColors)), e.colorDiffuse ? s.color = a(e.colorDiffuse) : e.DbgColor && (s.color = e.DbgColor), e.colorSpecular && (s.specular = a(e.colorSpecular)), e.colorAmbient && (s.ambient = a(e.colorAmbient)), e.colorEmissive && (s.emissive = a(e.colorEmissive)), e.transparency && (s.opacity = e.transparency), e.specularCoef && (s.shininess = e.specularCoef), e.mapDiffuse && t && o(s, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy), e.mapLight && t && o(s, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy), e.mapBump && t && o(s, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy), e.mapNormal && t && o(s, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy), e.mapSpecular && t && o(s, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy), e.mapBumpScale && (s.bumpScale = e.mapBumpScale), e.mapNormal) {
                    var l = $.ShaderLib.normalmap, c = $.UniformsUtils.clone(l.uniforms);
                    c.tNormal.value = s.normalMap, e.mapNormalFactor && c.uNormalScale.value.set(e.mapNormalFactor, e.mapNormalFactor), s.map && (c.tDiffuse.value = s.map, c.enableDiffuse.value = !0), s.specularMap && (c.tSpecular.value = s.specularMap, c.enableSpecular.value = !0), s.lightMap && (c.tAO.value = s.lightMap, c.enableAO.value = !0), c.diffuse.value.setHex(s.color), c.specular.value.setHex(s.specular), c.ambient.value.setHex(s.ambient), c.shininess.value = s.shininess, void 0 !== s.opacity && (c.opacity.value = s.opacity);
                    var p = {
                        fragmentShader: l.fragmentShader,
                        vertexShader: l.vertexShader,
                        uniforms: c,
                        lights: !0,
                        fog: !0
                    }, u = new $.ShaderMaterial(p);
                    s.transparent && (u.transparent = !0)
                } else u = new $[n](s);
                return void 0 !== e.DbgName && (u.name = e.DbgName), u
            }
        },$.XHRLoader = function (e) {
            this.cache = new $.Cache, this.manager = void 0 !== e ? e : $.DefaultLoadingManager
        },$.XHRLoader.prototype = {
            constructor: $.XHRLoader, load: function (e, t, r, i) {
                var o = this, a = o.cache.get(e);
                if (void 0 === a) {
                    var n = new XMLHttpRequest;
                    void 0 !== t && n.addEventListener("load", (function (r) {
                        o.cache.add(e, r.target.responseText), t(r.target.responseText), o.manager.itemEnd(e)
                    }), !1), void 0 !== r && n.addEventListener("progress", (function (e) {
                        r(e)
                    }), !1), void 0 !== i && n.addEventListener("error", (function (e) {
                        i(e)
                    }), !1), void 0 !== this.crossOrigin && (n.crossOrigin = this.crossOrigin), n.open("GET", e, !0), n.send(null), o.manager.itemStart(e)
                } else t(a)
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }
        },$.ImageLoader = function (e) {
            this.cache = new $.Cache, this.manager = void 0 !== e ? e : $.DefaultLoadingManager
        },$.ImageLoader.prototype = {
            constructor: $.ImageLoader, load: function (e, t, r, i) {
                var o = this, a = o.cache.get(e);
                if (void 0 === a) {
                    var n = document.createElement("img");
                    return void 0 !== t && n.addEventListener("load", (function (r) {
                        o.cache.add(e, this), t(this), o.manager.itemEnd(e)
                    }), !1), void 0 !== r && n.addEventListener("progress", (function (e) {
                        r(e)
                    }), !1), void 0 !== i && n.addEventListener("error", (function (e) {
                        i(e)
                    }), !1), void 0 !== this.crossOrigin && (n.crossOrigin = this.crossOrigin), n.src = e, o.manager.itemStart(e), n
                }
                t(a)
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }
        },$.JSONLoader = function (e) {
            $.Loader.call(this, e), this.withCredentials = !1
        },$.JSONLoader.prototype = Object.create($.Loader.prototype),$.JSONLoader.prototype.load = function (e, t, r) {
            r = r && "string" == typeof r ? r : this.extractUrlBase(e), this.onLoadStart(), this.loadAjaxJSON(this, e, t, r)
        },$.JSONLoader.prototype.loadAjaxJSON = function (e, t, r, i, o) {
            var a = new XMLHttpRequest, n = 0;
            a.onreadystatechange = function () {
                if (a.readyState === a.DONE) if (200 === a.status || 0 === a.status) {
                    if (a.responseText) {
                        var s = JSON.parse(a.responseText);
                        if (void 0 !== s.metadata && "scene" === s.metadata.type) return void console.error('THREE.JSONLoader: "' + t + '" seems to be a Scene. Use THREE.SceneLoader instead.');
                        var h = e.parse(s, i);
                        r(h.geometry, h.materials)
                    } else console.error('THREE.JSONLoader: "' + t + '" seems to be unreachable or the file is empty.');
                    e.onLoadComplete()
                } else console.error("THREE.JSONLoader: Couldn't load \"" + t + '" (' + a.status + ")"); else a.readyState === a.LOADING ? o && (0 === n && (n = a.getResponseHeader("Content-Length")), o({
                    total: n,
                    loaded: a.responseText.length
                })) : a.readyState === a.HEADERS_RECEIVED && void 0 !== o && (n = a.getResponseHeader("Content-Length"))
            }, a.open("GET", t, !0), a.withCredentials = this.withCredentials, a.send(null)
        },$.JSONLoader.prototype.parse = function (e, t) {
            var r = new $.Geometry, i = void 0 !== e.scale ? 1 / e.scale : 1;
            if (function (t) {
                function i(e, t) {
                    return e & 1 << t
                }

                var o, a, n, s, h, l, c, p, u, f, d, m, y, g, v, x, w, _, b, M, S, A, T, E, C, P, L, D = e.faces,
                    R = e.vertices, F = e.normals, U = e.colors, V = 0;
                if (void 0 !== e.uvs) {
                    for (o = 0; o < e.uvs.length; o++) e.uvs[o].length && V++;
                    for (o = 0; o < V; o++) r.faceVertexUvs[o] = []
                }
                s = 0, h = R.length;
                for (; s < h;) (_ = new $.Vector3).x = R[s++] * t, _.y = R[s++] * t, _.z = R[s++] * t, r.vertices.push(_);
                s = 0, h = D.length;
                for (; s < h;) if (f = D[s++], d = i(f, 0), m = i(f, 1), y = i(f, 3), g = i(f, 4), v = i(f, 5), x = i(f, 6), w = i(f, 7), d) {
                    if ((M = new $.Face3).a = D[s], M.b = D[s + 1], M.c = D[s + 3], (S = new $.Face3).a = D[s + 1], S.b = D[s + 2], S.c = D[s + 3], s += 4, m && (u = D[s++], M.materialIndex = u, S.materialIndex = u), n = r.faces.length, y) for (o = 0; o < V; o++) for (E = e.uvs[o], r.faceVertexUvs[o][n] = [], r.faceVertexUvs[o][n + 1] = [], a = 0; a < 4; a++) p = D[s++], P = E[2 * p], L = E[2 * p + 1], C = new $.Vector2(P, L), 2 !== a && r.faceVertexUvs[o][n].push(C), 0 !== a && r.faceVertexUvs[o][n + 1].push(C);
                    if (g && (c = 3 * D[s++], M.normal.set(F[c++], F[c++], F[c]), S.normal.copy(M.normal)), v) for (o = 0; o < 4; o++) c = 3 * D[s++], T = new $.Vector3(F[c++], F[c++], F[c]), 2 !== o && M.vertexNormals.push(T), 0 !== o && S.vertexNormals.push(T);
                    if (x && (l = D[s++], A = U[l], M.color.setHex(A), S.color.setHex(A)), w) for (o = 0; o < 4; o++) l = D[s++], A = U[l], 2 !== o && M.vertexColors.push(new $.Color(A)), 0 !== o && S.vertexColors.push(new $.Color(A));
                    r.faces.push(M), r.faces.push(S)
                } else {
                    if ((b = new $.Face3).a = D[s++], b.b = D[s++], b.c = D[s++], m && (u = D[s++], b.materialIndex = u), n = r.faces.length, y) for (o = 0; o < V; o++) for (E = e.uvs[o], r.faceVertexUvs[o][n] = [], a = 0; a < 3; a++) p = D[s++], P = E[2 * p], L = E[2 * p + 1], C = new $.Vector2(P, L), r.faceVertexUvs[o][n].push(C);
                    if (g && (c = 3 * D[s++], b.normal.set(F[c++], F[c++], F[c])), v) for (o = 0; o < 3; o++) c = 3 * D[s++], T = new $.Vector3(F[c++], F[c++], F[c]), b.vertexNormals.push(T);
                    if (x && (l = D[s++], b.color.setHex(U[l])), w) for (o = 0; o < 3; o++) l = D[s++], b.vertexColors.push(new $.Color(U[l]));
                    r.faces.push(b)
                }
            }(i), function () {
                var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
                if (e.skinWeights) for (var i = 0, o = e.skinWeights.length; i < o; i += t) {
                    var a = e.skinWeights[i], n = t > 1 ? e.skinWeights[i + 1] : 0,
                        s = t > 2 ? e.skinWeights[i + 2] : 0, h = t > 3 ? e.skinWeights[i + 3] : 0;
                    r.skinWeights.push(new $.Vector4(a, n, s, h))
                }
                if (e.skinIndices) for (i = 0, o = e.skinIndices.length; i < o; i += t) {
                    var l = e.skinIndices[i], c = t > 1 ? e.skinIndices[i + 1] : 0,
                        p = t > 2 ? e.skinIndices[i + 2] : 0, u = t > 3 ? e.skinIndices[i + 3] : 0;
                    r.skinIndices.push(new $.Vector4(l, c, p, u))
                }
                r.bones = e.bones, r.bones && r.bones.length > 0 && (r.skinWeights.length !== r.skinIndices.length || r.skinIndices.length !== r.vertices.length) && console.warn("When skinning, number of vertices (" + r.vertices.length + "), skinIndices (" + r.skinIndices.length + "), and skinWeights (" + r.skinWeights.length + ") should match.");
                r.animation = e.animation, r.animations = e.animations
            }(), function (t) {
                var i, o, a, n, s, h, l, c, p, u, f;
                if (void 0 !== e.morphTargets) for (s = 0, h = e.morphTargets.length; s < h; s++) for (r.morphTargets[s] = {}, r.morphTargets[s].name = e.morphTargets[s].name, r.morphTargets[s].vertices = [], a = r.morphTargets[s].vertices, n = e.morphTargets[s].vertices, i = 0, o = n.length; i < o; i += 3) {
                    var d = new $.Vector3;
                    d.x = n[i] * t, d.y = n[i + 1] * t, d.z = n[i + 2] * t, a.push(d)
                }
                if (void 0 !== e.morphColors) for (s = 0, h = e.morphColors.length; s < h; s++) for (r.morphColors[s] = {}, r.morphColors[s].name = e.morphColors[s].name, r.morphColors[s].colors = [], p = r.morphColors[s].colors, u = e.morphColors[s].colors, l = 0, c = u.length; l < c; l += 3) (f = new $.Color(16755200)).setRGB(u[l], u[l + 1], u[l + 2]), p.push(f)
            }(i), r.computeFaceNormals(), r.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length) return {geometry: r};
            var o = this.initMaterials(e.materials, t);
            return this.needsTangents(o) && r.computeTangents(), {geometry: r, materials: o}
        },$.LoadingManager = function (e, t, r) {
            var i = this, o = 0, a = 0;
            this.onLoad = e, this.onProgress = t, this.onError = r, this.itemStart = function (e) {
                a++
            }, this.itemEnd = function (e) {
                o++, void 0 !== i.onProgress && i.onProgress(e, o, a), o === a && void 0 !== i.onLoad && i.onLoad()
            }
        },$.DefaultLoadingManager = new $.LoadingManager,$.BufferGeometryLoader = function (e) {
            this.manager = void 0 !== e ? e : $.DefaultLoadingManager
        },$.BufferGeometryLoader.prototype = {
            constructor: $.BufferGeometryLoader, load: function (e, t, r, i) {
                var o = this, a = new $.XHRLoader;
                a.setCrossOrigin(this.crossOrigin), a.load(e, (function (e) {
                    t(o.parse(JSON.parse(e)))
                }))
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, parse: function (e) {
                var t = new $.BufferGeometry, r = e.attributes, i = e.offsets, o = e.boundingSphere;
                for (var a in r) {
                    var n = r[a];
                    t.attributes[a] = {itemSize: n.itemSize, array: new self[n.type](n.array)}
                }
                return void 0 !== i && (t.offsets = JSON.parse(JSON.stringify(i))), void 0 !== o && (t.boundingSphere = new $.Sphere((new $.Vector3).fromArray(void 0 !== o.center ? o.center : [0, 0, 0]), o.radius)), t
            }
        },$.MaterialLoader = function (e) {
            this.manager = void 0 !== e ? e : $.DefaultLoadingManager
        },$.MaterialLoader.prototype = {
            constructor: $.MaterialLoader, load: function (e, t, r, i) {
                var o = this, a = new $.XHRLoader;
                a.setCrossOrigin(this.crossOrigin), a.load(e, (function (e) {
                    t(o.parse(JSON.parse(e)))
                }))
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, parse: function (e) {
                var t = new $[e.type];
                if (void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.ambient && t.ambient.setHex(e.ambient), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.materials) for (var r = 0, i = e.materials.length; r < i; r++) t.materials.push(this.parse(e.materials[r]));
                return t
            }
        },$.ObjectLoader = function (e) {
            this.manager = void 0 !== e ? e : $.DefaultLoadingManager
        },$.ObjectLoader.prototype = {
            constructor: $.ObjectLoader, load: function (e, t, r, i) {
                var o = this, a = new $.XHRLoader(o.manager);
                a.setCrossOrigin(this.crossOrigin), a.load(e, (function (e) {
                    t(o.parse(JSON.parse(e)))
                }))
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, parse: function (e) {
                var t = this.parseGeometries(e.geometries), r = this.parseMaterials(e.materials);
                return this.parseObject(e.object, t, r)
            }, parseGeometries: function (e) {
                var t = {};
                if (void 0 !== e) for (var r = new $.JSONLoader, i = new $.BufferGeometryLoader, o = 0, a = e.length; o < a; o++) {
                    var n, s = e[o];
                    switch (s.type) {
                        case"PlaneGeometry":
                            n = new $.PlaneGeometry(s.width, s.height, s.widthSegments, s.heightSegments);
                            break;
                        case"BoxGeometry":
                        case"CubeGeometry":
                            n = new $.BoxGeometry(s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                            break;
                        case"CircleGeometry":
                            n = new $.CircleGeometry(s.radius, s.segments);
                            break;
                        case"CylinderGeometry":
                            n = new $.CylinderGeometry(s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded);
                            break;
                        case"SphereGeometry":
                            n = new $.SphereGeometry(s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                            break;
                        case"IcosahedronGeometry":
                            n = new $.IcosahedronGeometry(s.radius, s.detail);
                            break;
                        case"TorusGeometry":
                            n = new $.TorusGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                            break;
                        case"TorusKnotGeometry":
                            n = new $.TorusKnotGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.p, s.q, s.heightScale);
                            break;
                        case"BufferGeometry":
                            n = i.parse(s.data);
                            break;
                        case"Geometry":
                            n = r.parse(s.data).geometry
                    }
                    n.uuid = s.uuid, void 0 !== s.name && (n.name = s.name), t[s.uuid] = n
                }
                return t
            }, parseMaterials: function (e) {
                var t = {};
                if (void 0 !== e) for (var r = new $.MaterialLoader, i = 0, o = e.length; i < o; i++) {
                    var a = e[i], n = r.parse(a);
                    n.uuid = a.uuid, void 0 !== a.name && (n.name = a.name), t[a.uuid] = n
                }
                return t
            }, parseObject: function () {
                var e = new $.Matrix4;
                return function (t, r, i) {
                    var o;
                    switch (t.type) {
                        case"Scene":
                            o = new $.Scene;
                            break;
                        case"PerspectiveCamera":
                            o = new $.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                            break;
                        case"OrthographicCamera":
                            o = new $.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                            break;
                        case"AmbientLight":
                            o = new $.AmbientLight(t.color);
                            break;
                        case"DirectionalLight":
                            o = new $.DirectionalLight(t.color, t.intensity);
                            break;
                        case"PointLight":
                            o = new $.PointLight(t.color, t.intensity, t.distance);
                            break;
                        case"SpotLight":
                            o = new $.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent);
                            break;
                        case"HemisphereLight":
                            o = new $.HemisphereLight(t.color, t.groundColor, t.intensity);
                            break;
                        case"Mesh":
                            var a = r[t.geometry], n = i[t.material];
                            void 0 === a && console.error("THREE.ObjectLoader: Undefined geometry " + t.geometry), void 0 === n && console.error("THREE.ObjectLoader: Undefined material " + t.material), o = new $.Mesh(a, n);
                            break;
                        case"Sprite":
                            void 0 === (n = i[t.material]) && console.error("THREE.ObjectLoader: Undefined material " + t.material), o = new $.Sprite(n);
                            break;
                        default:
                            o = new $.Object3D
                    }
                    if (o.uuid = t.uuid, void 0 !== t.name && (o.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position), void 0 !== t.rotation && o.rotation.fromArray(t.rotation), void 0 !== t.scale && o.scale.fromArray(t.scale)), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.userData && (o.userData = t.userData), void 0 !== t.children) for (var s in t.children) o.add(this.parseObject(t.children[s], r, i));
                    return o
                }
            }()
        },$.SceneLoader = function () {
            this.onLoadStart = function () {
            }, this.onLoadProgress = function () {
            }, this.onLoadComplete = function () {
            }, this.callbackSync = function () {
            }, this.callbackProgress = function () {
            }, this.geometryHandlers = {}, this.hierarchyHandlers = {}, this.addGeometryHandler("ascii", $.JSONLoader)
        },$.SceneLoader.prototype = {
            constructor: $.SceneLoader, load: function (e, t, r, i) {
                var o = this, a = new $.XHRLoader(o.manager);
                a.setCrossOrigin(this.crossOrigin), a.load(e, (function (r) {
                    o.parse(JSON.parse(r), t, e)
                }))
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }, addGeometryHandler: function (e, t) {
                this.geometryHandlers[e] = {loaderClass: t}
            }, addHierarchyHandler: function (e, t) {
                this.hierarchyHandlers[e] = {loaderClass: t}
            }, parse: function (e, t, r) {
                var i, o, a, n, s, h, l, c, p, u, f, d, m = this, y = $.Loader.prototype.extractUrlBase(r), g = [],
                    v = e;
                for (var x in this.geometryHandlers) {
                    var w = this.geometryHandlers[x].loaderClass;
                    this.geometryHandlers[x].loaderObject = new w
                }
                for (var x in this.hierarchyHandlers) {
                    w = this.hierarchyHandlers[x].loaderClass;
                    this.hierarchyHandlers[x].loaderObject = new w
                }
                if (c = 0, p = 0, d = {
                    scene: new $.Scene,
                    geometries: {},
                    face_materials: {},
                    materials: {},
                    textures: {},
                    objects: {},
                    cameras: {},
                    lights: {},
                    fogs: {},
                    empties: {},
                    groups: {}
                }, v.transform) {
                    var _ = v.transform.position, b = v.transform.rotation, M = v.transform.scale;
                    _ && d.scene.position.fromArray(_), b && d.scene.rotation.fromArray(b), M && d.scene.scale.fromArray(M), (_ || b || M) && (d.scene.updateMatrix(), d.scene.updateMatrixWorld())
                }

                function S(e, t) {
                    return "relativeToHTML" == t ? e : y + e
                }

                function A() {
                    !function e(t, r) {
                        var n, s, h, c, p;
                        for (var u in r) {
                            var f = d.objects[u], y = r[u];
                            if (void 0 === f) {
                                if (y.type && y.type in m.hierarchyHandlers) {
                                    if (void 0 === y.loading) {
                                        var g = {
                                            type: 1,
                                            url: 1,
                                            material: 1,
                                            position: 1,
                                            rotation: 1,
                                            scale: 1,
                                            visible: 1,
                                            children: 1,
                                            userData: 1,
                                            skin: 1,
                                            morph: 1,
                                            mirroredLoop: 1,
                                            duration: 1
                                        }, x = {};
                                        for (var w in y) w in g || (x[w] = y[w]);
                                        o = d.materials[y.material], y.loading = !0;
                                        var _ = m.hierarchyHandlers[y.type].loaderObject;
                                        _.options ? _.load(S(y.url, v.urlBaseType), C(u, t, o, y)) : _.load(S(y.url, v.urlBaseType), C(u, t, o, y), x)
                                    }
                                } else if (void 0 !== y.geometry) {
                                    if (i = d.geometries[y.geometry]) {
                                        var b = !1;
                                        if (o = d.materials[y.material], b = o instanceof $.ShaderMaterial, s = y.position, h = y.rotation, c = y.scale, n = y.matrix, p = y.quaternion, y.material || (o = new $.MeshFaceMaterial(d.face_materials[y.geometry])), o instanceof $.MeshFaceMaterial && 0 === o.materials.length && (o = new $.MeshFaceMaterial(d.face_materials[y.geometry])), o instanceof $.MeshFaceMaterial) for (var M = 0; M < o.materials.length; M++) b = b || o.materials[M] instanceof $.ShaderMaterial;
                                        b && i.computeTangents(), y.skin ? f = new $.SkinnedMesh(i, o) : y.morph ? (f = new $.MorphAnimMesh(i, o), void 0 !== y.duration && (f.duration = y.duration), void 0 !== y.time && (f.time = y.time), void 0 !== y.mirroredLoop && (f.mirroredLoop = y.mirroredLoop), o.morphNormals && i.computeMorphNormals()) : f = new $.Mesh(i, o), f.name = u, n ? (f.matrixAutoUpdate = !1, f.matrix.set(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15])) : (f.position.fromArray(s), p ? f.quaternion.fromArray(p) : f.rotation.fromArray(h), f.scale.fromArray(c)), f.visible = y.visible, f.castShadow = y.castShadow, f.receiveShadow = y.receiveShadow, t.add(f), d.objects[u] = f
                                    }
                                } else if ("AmbientLight" === y.type || "PointLight" === y.type || "DirectionalLight" === y.type || "SpotLight" === y.type || "HemisphereLight" === y.type || "AreaLight" === y.type) {
                                    var A = y.color, T = y.intensity, E = y.distance, P = y.position, L = y.rotation;
                                    switch (y.type) {
                                        case"AmbientLight":
                                            l = new $.AmbientLight(A);
                                            break;
                                        case"PointLight":
                                            (l = new $.PointLight(A, T, E)).position.fromArray(P);
                                            break;
                                        case"DirectionalLight":
                                            (l = new $.DirectionalLight(A, T)).position.fromArray(y.direction);
                                            break;
                                        case"SpotLight":
                                            (l = new $.SpotLight(A, T, E, 1)).angle = y.angle, l.position.fromArray(P), l.target.set(P[0], P[1] - E, P[2]), l.target.applyEuler(new $.Euler(L[0], L[1], L[2], "XYZ"));
                                            break;
                                        case"HemisphereLight":
                                            (l = new $.DirectionalLight(A, T, E)).target.set(P[0], P[1] - E, P[2]), l.target.applyEuler(new $.Euler(L[0], L[1], L[2], "XYZ"));
                                            break;
                                        case"AreaLight":
                                            (l = new $.AreaLight(A, T)).position.fromArray(P), l.width = y.size, l.height = y.size_y
                                    }
                                    t.add(l), l.name = u, d.lights[u] = l, d.objects[u] = l
                                } else "PerspectiveCamera" === y.type || "OrthographicCamera" === y.type ? (s = y.position, h = y.rotation, p = y.quaternion, "PerspectiveCamera" === y.type ? a = new $.PerspectiveCamera(y.fov, y.aspect, y.near, y.far) : "OrthographicCamera" === y.type && (a = new $.OrthographicCamera(y.left, y.right, y.top, y.bottom, y.near, y.far)), a.name = u, a.position.fromArray(s), void 0 !== p ? a.quaternion.fromArray(p) : void 0 !== h && a.rotation.fromArray(h), t.add(a), d.cameras[u] = a, d.objects[u] = a) : (s = y.position, h = y.rotation, c = y.scale, p = y.quaternion, (f = new $.Object3D).name = u, f.position.fromArray(s), p ? f.quaternion.fromArray(p) : f.rotation.fromArray(h), f.scale.fromArray(c), f.visible = void 0 !== y.visible && y.visible, t.add(f), d.objects[u] = f, d.empties[u] = f);
                                if (f) {
                                    if (void 0 !== y.userData) for (var D in y.userData) {
                                        var R = y.userData[D];
                                        f.userData[D] = R
                                    }
                                    if (void 0 !== y.groups) for (M = 0; M < y.groups.length; M++) {
                                        var F = y.groups[M];
                                        void 0 === d.groups[F] && (d.groups[F] = []), d.groups[F].push(u)
                                    }
                                }
                            }
                            void 0 !== f && void 0 !== y.children && e(f, y.children)
                        }
                    }(d.scene, v.objects)
                }

                function T(e, t, r, i, o) {
                    var a = o.position, n = o.rotation, s = o.quaternion, h = o.scale;
                    e.position.fromArray(a), s ? e.quaternion.fromArray(s) : e.rotation.fromArray(n), e.scale.fromArray(h), i && e.traverse((function (e) {
                        e.material = i
                    }));
                    var l = void 0 === o.visible || o.visible;
                    e.traverse((function (e) {
                        e.visible = l
                    })), r.add(e), e.name = t, d.objects[t] = e, A()
                }

                function E(e) {
                    return function (t, r) {
                        t.name = e, function (e, t, r) {
                            d.geometries[r] = e, d.face_materials[r] = t, A()
                        }(t, r, e), c -= 1, m.onLoadComplete(), L()
                    }
                }

                function C(e, t, r, i) {
                    return function (o) {
                        T(o.content ? o.content : o.dae ? o.scene : o, e, t, r, i), c -= 1, m.onLoadComplete(), L()
                    }
                }

                function P(e) {
                    return function (t, r) {
                        t.name = e, d.geometries[e] = t, d.face_materials[e] = r
                    }
                }

                function L() {
                    var e = {totalModels: u, totalTextures: f, loadedModels: u - c, loadedTextures: f - p};
                    m.callbackProgress(e, d), m.onLoadProgress(), 0 === c && 0 === p && (!function () {
                        for (var e = 0; e < g.length; e++) {
                            var t = g[e], r = d.objects[t.targetName];
                            r ? t.object.target = r : (t.object.target = new $.Object3D, d.scene.add(t.object.target)), t.object.target.userData.targetInverse = t.object
                        }
                    }(), t(d))
                }

                var D, R, F, U, V, z, B, N, O, k = function (e) {
                    return function () {
                        !function (e) {
                            p -= e, L(), m.onLoadComplete()
                        }(e)
                    }
                };

                function I(e, t) {
                    if (t(e), void 0 !== e.children) for (var r in e.children) I(e.children[r], t)
                }

                for (D in v.fogs) "linear" === (R = v.fogs[D]).type ? n = new $.Fog(0, R.near, R.far) : "exp2" === R.type && (n = new $.FogExp2(0, R.density)), h = R.color, n.color.setRGB(h[0], h[1], h[2]), d.fogs[D] = n;
                for (F in v.geometries) (U = v.geometries[F]).type in this.geometryHandlers && (c += 1, m.onLoadStart());
                for (var G in v.objects) I(v.objects[G], (function (e) {
                    e.type && e.type in m.hierarchyHandlers && (c += 1, m.onLoadStart())
                }));
                for (F in u = c, v.geometries) if ("cube" === (U = v.geometries[F]).type) (i = new $.BoxGeometry(U.width, U.height, U.depth, U.widthSegments, U.heightSegments, U.depthSegments)).name = F, d.geometries[F] = i; else if ("plane" === U.type) (i = new $.PlaneGeometry(U.width, U.height, U.widthSegments, U.heightSegments)).name = F, d.geometries[F] = i; else if ("sphere" === U.type) (i = new $.SphereGeometry(U.radius, U.widthSegments, U.heightSegments)).name = F, d.geometries[F] = i; else if ("cylinder" === U.type) (i = new $.CylinderGeometry(U.topRad, U.botRad, U.height, U.radSegs, U.heightSegs)).name = F, d.geometries[F] = i; else if ("torus" === U.type) (i = new $.TorusGeometry(U.radius, U.tube, U.segmentsR, U.segmentsT)).name = F, d.geometries[F] = i; else if ("icosahedron" === U.type) (i = new $.IcosahedronGeometry(U.radius, U.subdivisions)).name = F, d.geometries[F] = i; else if (U.type in this.geometryHandlers) {
                    var W = {};
                    for (var H in U) "type" !== H && "url" !== H && (W[H] = U[H]);
                    this.geometryHandlers[U.type].loaderObject.load(S(U.url, v.urlBaseType), E(F), W)
                } else if ("embedded" === U.type) {
                    var j = v.embeds[U.id];
                    if (j.metadata = v.metadata, j) {
                        var X = this.geometryHandlers.ascii.loaderObject.parse(j, "");
                        P(F)(X.geometry, X.materials)
                    }
                }
                for (V in v.textures) if ((z = v.textures[V]).url instanceof Array) {
                    p += z.url.length;
                    for (var q = 0; q < z.url.length; q++) m.onLoadStart()
                } else p += 1, m.onLoadStart();
                for (V in f = p, v.textures) {
                    if (void 0 !== (z = v.textures[V]).mapping && void 0 !== $[z.mapping] && (z.mapping = new $[z.mapping]), z.url instanceof Array) {
                        for (var Y = z.url.length, K = [], Z = 0; Z < Y; Z++) K[Z] = S(z.url[Z], v.urlBaseType);
                        s = (Q = /\.dds$/i.test(K[0])) ? $.ImageUtils.loadCompressedTextureCube(K, z.mapping, k(Y)) : $.ImageUtils.loadTextureCube(K, z.mapping, k(Y))
                    } else {
                        var Q = /\.dds$/i.test(z.url), J = S(z.url, v.urlBaseType), ee = k(1);
                        if (s = Q ? $.ImageUtils.loadCompressedTexture(J, z.mapping, ee) : $.ImageUtils.loadTexture(J, z.mapping, ee), void 0 !== $[z.minFilter] && (s.minFilter = $[z.minFilter]), void 0 !== $[z.magFilter] && (s.magFilter = $[z.magFilter]), z.anisotropy && (s.anisotropy = z.anisotropy), z.repeat && (s.repeat.set(z.repeat[0], z.repeat[1]), 1 !== z.repeat[0] && (s.wrapS = $.RepeatWrapping), 1 !== z.repeat[1] && (s.wrapT = $.RepeatWrapping)), z.offset && s.offset.set(z.offset[0], z.offset[1]), z.wrap) {
                            var te = {repeat: $.RepeatWrapping, mirror: $.MirroredRepeatWrapping};
                            void 0 !== te[z.wrap[0]] && (s.wrapS = te[z.wrap[0]]), void 0 !== te[z.wrap[1]] && (s.wrapT = te[z.wrap[1]])
                        }
                    }
                    d.textures[V] = s
                }
                for (B in v.materials) {
                    for (O in (N = v.materials[B]).parameters) if ("envMap" === O || "map" === O || "lightMap" === O || "bumpMap" === O) N.parameters[O] = d.textures[N.parameters[O]]; else if ("shading" === O) N.parameters[O] = "flat" === N.parameters[O] ? $.FlatShading : $.SmoothShading; else if ("side" === O) "double" == N.parameters[O] ? N.parameters[O] = $.DoubleSide : "back" == N.parameters[O] ? N.parameters[O] = $.BackSide : N.parameters[O] = $.FrontSide; else if ("blending" === O) N.parameters[O] = N.parameters[O] in $ ? $[N.parameters[O]] : $.NormalBlending; else if ("combine" === O) N.parameters[O] = N.parameters[O] in $ ? $[N.parameters[O]] : $.MultiplyOperation; else if ("vertexColors" === O) "face" == N.parameters[O] ? N.parameters[O] = $.FaceColors : N.parameters[O] && (N.parameters[O] = $.VertexColors); else if ("wrapRGB" === O) {
                        var re = N.parameters[O];
                        N.parameters[O] = new $.Vector3(re[0], re[1], re[2])
                    }
                    if (void 0 !== N.parameters.opacity && N.parameters.opacity < 1 && (N.parameters.transparent = !0), N.parameters.normalMap) {
                        var ie = $.ShaderLib.normalmap, oe = $.UniformsUtils.clone(ie.uniforms),
                            ae = N.parameters.color, ne = N.parameters.specular, se = N.parameters.ambient,
                            he = N.parameters.shininess;
                        oe.tNormal.value = d.textures[N.parameters.normalMap], N.parameters.normalScale && oe.uNormalScale.value.set(N.parameters.normalScale[0], N.parameters.normalScale[1]), N.parameters.map && (oe.tDiffuse.value = N.parameters.map, oe.enableDiffuse.value = !0), N.parameters.envMap && (oe.tCube.value = N.parameters.envMap, oe.enableReflection.value = !0, oe.reflectivity.value = N.parameters.reflectivity), N.parameters.lightMap && (oe.tAO.value = N.parameters.lightMap, oe.enableAO.value = !0), N.parameters.specularMap && (oe.tSpecular.value = d.textures[N.parameters.specularMap], oe.enableSpecular.value = !0), N.parameters.displacementMap && (oe.tDisplacement.value = d.textures[N.parameters.displacementMap], oe.enableDisplacement.value = !0, oe.uDisplacementBias.value = N.parameters.displacementBias, oe.uDisplacementScale.value = N.parameters.displacementScale), oe.diffuse.value.setHex(ae), oe.specular.value.setHex(ne), oe.ambient.value.setHex(se), oe.shininess.value = he, N.parameters.opacity && (oe.opacity.value = N.parameters.opacity);
                        var le = {
                            fragmentShader: ie.fragmentShader,
                            vertexShader: ie.vertexShader,
                            uniforms: oe,
                            lights: !0,
                            fog: !0
                        };
                        o = new $.ShaderMaterial(le)
                    } else o = new $[N.type](N.parameters);
                    o.name = B, d.materials[B] = o
                }
                for (B in v.materials) if ((N = v.materials[B]).parameters.materials) {
                    var ce = [];
                    for (Z = 0; Z < N.parameters.materials.length; Z++) {
                        var pe = N.parameters.materials[Z];
                        ce.push(d.materials[pe])
                    }
                    d.materials[B].materials = ce
                }
                A(), d.cameras && v.defaults.camera && (d.currentCamera = d.cameras[v.defaults.camera]), d.fogs && v.defaults.fog && (d.scene.fog = d.fogs[v.defaults.fog]), m.callbackSync(d), L()
            }
        },$.TextureLoader = function (e) {
            this.manager = void 0 !== e ? e : $.DefaultLoadingManager
        },$.TextureLoader.prototype = {
            constructor: $.TextureLoader, load: function (e, t, r, i) {
                var o = new $.ImageLoader(this.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(e, (function (e) {
                    var r = new $.Texture(e);
                    r.needsUpdate = !0, void 0 !== t && t(r)
                }))
            }, setCrossOrigin: function (e) {
                this.crossOrigin = e
            }
        },$.Material = function () {
            this.id = $.MaterialIdCount++, this.uuid = $.Math.generateUUID(), this.name = "", this.side = $.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = $.NormalBlending, this.blendSrc = $.SrcAlphaFactor, this.blendDst = $.OneMinusSrcAlphaFactor, this.blendEquation = $.AddEquation, this.depthTest = !0, this.depthWrite = !0, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this.needsUpdate = !0
        },$.Material.prototype = {
            constructor: $.Material, setValues: function (e) {
                if (void 0 !== e) for (var t in e) {
                    var r = e[t];
                    if (void 0 !== r) {
                        if (t in this) {
                            var i = this[t];
                            i instanceof $.Color ? i.set(r) : i instanceof $.Vector3 && r instanceof $.Vector3 ? i.copy(r) : this[t] = "overdraw" == t ? Number(r) : r
                        }
                    } else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
                }
            }, clone: function (e) {
                return void 0 === e && (e = new $.Material), e.name = this.name, e.side = this.side, e.opacity = this.opacity, e.transparent = this.transparent, e.blending = this.blending, e.blendSrc = this.blendSrc, e.blendDst = this.blendDst, e.blendEquation = this.blendEquation, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.polygonOffset = this.polygonOffset, e.polygonOffsetFactor = this.polygonOffsetFactor, e.polygonOffsetUnits = this.polygonOffsetUnits, e.alphaTest = this.alphaTest, e.overdraw = this.overdraw, e.visible = this.visible, e
            }, dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }
        },$.EventDispatcher.prototype.apply($.Material.prototype),$.MaterialIdCount = 0,$.LineBasicMaterial = function (e) {
            $.Material.call(this), this.color = new $.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = !1, this.fog = !0, this.setValues(e)
        },$.LineBasicMaterial.prototype = Object.create($.Material.prototype),$.LineBasicMaterial.prototype.clone = function () {
            var e = new $.LineBasicMaterial;
            return $.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.linecap = this.linecap, e.linejoin = this.linejoin, e.vertexColors = this.vertexColors, e.fog = this.fog, e
        },$.LineDashedMaterial = function (e) {
            $.Material.call(this), this.color = new $.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
        },$.LineDashedMaterial.prototype = Object.create($.Material.prototype),$.LineDashedMaterial.prototype.clone = function () {
            var e = new $.LineDashedMaterial;
            return $.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.scale = this.scale, e.dashSize = this.dashSize, e.gapSize = this.gapSize, e.vertexColors = this.vertexColors, e.fog = this.fog, e
        },$.MeshBasicMaterial = function (e) {
            $.Material.call(this), this.color = new $.Color(16777215), this.map = null, this.lightMap = null, this.specularMap = null, this.envMap = null, this.combine = $.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = $.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = $.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(e)
        },$.MeshBasicMaterial.prototype = Object.create($.Material.prototype),$.MeshBasicMaterial.prototype.clone = function () {
            var e = new $.MeshBasicMaterial;
            return $.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e
        },$.MeshLambertMaterial = function (e) {
            $.Material.call(this), this.color = new $.Color(16777215), this.ambient = new $.Color(16777215), this.emissive = new $.Color(0), this.wrapAround = !1, this.wrapRGB = new $.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.specularMap = null, this.envMap = null, this.combine = $.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = $.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = $.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
        },$.MeshLambertMaterial.prototype = Object.create($.Material.prototype),$.MeshLambertMaterial.prototype.clone = function () {
            var e = new $.MeshLambertMaterial;
            return $.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
        },$.MeshPhongMaterial = function (e) {
            $.Material.call(this), this.color = new $.Color(16777215), this.ambient = new $.Color(16777215), this.emissive = new $.Color(0), this.specular = new $.Color(1118481), this.shininess = 30, this.metal = !1, this.wrapAround = !1, this.wrapRGB = new $.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new $.Vector2(1, 1), this.specularMap = null, this.envMap = null, this.combine = $.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = $.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = $.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
        },$.MeshPhongMaterial.prototype = Object.create($.Material.prototype),$.MeshPhongMaterial.prototype.clone = function () {
            var e = new $.MeshPhongMaterial;
            return $.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.specular.copy(this.specular), e.shininess = this.shininess, e.metal = this.metal, e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalScale.copy(this.normalScale), e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
        },$.MeshDepthMaterial = function (e) {
            $.Material.call(this), this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
        },$.MeshDepthMaterial.prototype = Object.create($.Material.prototype),$.MeshDepthMaterial.prototype.clone = function () {
            var e = new $.MeshDepthMaterial;
            return $.Material.prototype.clone.call(this, e), e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
        },$.MeshNormalMaterial = function (e) {
            $.Material.call(this, e), this.shading = $.FlatShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e)
        },$.MeshNormalMaterial.prototype = Object.create($.Material.prototype),$.MeshNormalMaterial.prototype.clone = function () {
            var e = new $.MeshNormalMaterial;
            return $.Material.prototype.clone.call(this, e), e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
        },$.MeshFaceMaterial = function (e) {
            this.materials = e instanceof Array ? e : []
        },$.MeshFaceMaterial.prototype.clone = function () {
            for (var e = new $.MeshFaceMaterial, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
            return e
        },$.ParticleSystemMaterial = function (e) {
            $.Material.call(this), this.color = new $.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = !1, this.fog = !0, this.setValues(e)
        },$.ParticleSystemMaterial.prototype = Object.create($.Material.prototype),$.ParticleSystemMaterial.prototype.clone = function () {
            var e = new $.ParticleSystemMaterial;
            return $.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.size = this.size, e.sizeAttenuation = this.sizeAttenuation, e.vertexColors = this.vertexColors, e.fog = this.fog, e
        },$.ParticleBasicMaterial = $.ParticleSystemMaterial,$.ShaderMaterial = function (e) {
            $.Material.call(this), this.fragmentShader = "void main() {}", this.vertexShader = "void main() {}", this.uniforms = {}, this.defines = {}, this.attributes = null, this.shading = $.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = $.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            }, this.index0AttributeName = void 0, this.setValues(e)
        },$.ShaderMaterial.prototype = Object.create($.Material.prototype),$.ShaderMaterial.prototype.clone = function () {
            var e = new $.ShaderMaterial;
            return $.Material.prototype.clone.call(this, e), e.fragmentShader = this.fragmentShader, e.vertexShader = this.vertexShader, e.uniforms = $.UniformsUtils.clone(this.uniforms), e.attributes = this.attributes, e.defines = this.defines, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.fog = this.fog, e.lights = this.lights, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
        },$.RawShaderMaterial = function (e) {
            $.ShaderMaterial.call(this, e)
        },$.RawShaderMaterial.prototype = Object.create($.ShaderMaterial.prototype),$.RawShaderMaterial.prototype.clone = function () {
            var e = new $.RawShaderMaterial;
            return $.ShaderMaterial.prototype.clone.call(this, e), e
        },$.SpriteMaterial = function (e) {
            $.Material.call(this), this.color = new $.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(e)
        },$.SpriteMaterial.prototype = Object.create($.Material.prototype),$.SpriteMaterial.prototype.clone = function () {
            var e = new $.SpriteMaterial;
            return $.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.rotation = this.rotation, e.fog = this.fog, e
        },$.SpriteCanvasMaterial = function (e) {
            $.Material.call(this), this.color = new $.Color(16777215), this.program = function (e, t) {
            }, this.setValues(e)
        },$.SpriteCanvasMaterial.prototype = Object.create($.Material.prototype),$.SpriteCanvasMaterial.prototype.clone = function () {
            var e = new $.SpriteCanvasMaterial;
            return $.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.program = this.program, e
        },$.ParticleCanvasMaterial = $.SpriteCanvasMaterial,$.Texture = function (e, t, r, i, o, a, n, s, h) {
            this.id = $.TextureIdCount++, this.uuid = $.Math.generateUUID(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = void 0 !== t ? t : new $.UVMapping, this.wrapS = void 0 !== r ? r : $.ClampToEdgeWrapping, this.wrapT = void 0 !== i ? i : $.ClampToEdgeWrapping, this.magFilter = void 0 !== o ? o : $.LinearFilter, this.minFilter = void 0 !== a ? a : $.LinearMipMapLinearFilter, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== n ? n : $.RGBAFormat, this.type = void 0 !== s ? s : $.UnsignedByteType, this.offset = new $.Vector2(0, 0), this.repeat = new $.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this._needsUpdate = !1, this.onUpdate = null
        },$.Texture.prototype = {
            constructor: $.Texture, get needsUpdate() {
                return this._needsUpdate
            }, set needsUpdate(e) {
                !0 === e && this.update(), this._needsUpdate = e
            }, clone: function (e) {
                return void 0 === e && (e = new $.Texture), e.image = this.image, e.mipmaps = this.mipmaps.slice(0), e.mapping = this.mapping, e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.format = this.format, e.type = this.type, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.generateMipmaps = this.generateMipmaps, e.premultiplyAlpha = this.premultiplyAlpha, e.flipY = this.flipY, e.unpackAlignment = this.unpackAlignment, e
            }, update: function () {
                this.dispatchEvent({type: "update"})
            }, dispose: function () {
                this.dispatchEvent({type: "dispose"})
            }
        },$.EventDispatcher.prototype.apply($.Texture.prototype),$.TextureIdCount = 0,$.CompressedTexture = function (e, t, r, i, o, a, n, s, h, l, c) {
            $.Texture.call(this, null, a, n, s, h, l, i, o, c), this.image = {
                width: t,
                height: r
            }, this.mipmaps = e, this.generateMipmaps = !1
        },$.CompressedTexture.prototype = Object.create($.Texture.prototype),$.CompressedTexture.prototype.clone = function () {
            var e = new $.CompressedTexture;
            return $.Texture.prototype.clone.call(this, e), e
        },$.DataTexture = function (e, t, r, i, o, a, n, s, h, l, c) {
            $.Texture.call(this, null, a, n, s, h, l, i, o, c), this.image = {data: e, width: t, height: r}
        },$.DataTexture.prototype = Object.create($.Texture.prototype),$.DataTexture.prototype.clone = function () {
            var e = new $.DataTexture;
            return $.Texture.prototype.clone.call(this, e), e
        },$.ParticleSystem = function (e, t) {
            $.Object3D.call(this), this.geometry = void 0 !== e ? e : new $.Geometry, this.material = void 0 !== t ? t : new $.ParticleSystemMaterial({color: 16777215 * Math.random()}), this.sortParticles = !1, this.frustumCulled = !1
        },$.ParticleSystem.prototype = Object.create($.Object3D.prototype),$.ParticleSystem.prototype.clone = function (e) {
            return void 0 === e && (e = new $.ParticleSystem(this.geometry, this.material)), e.sortParticles = this.sortParticles, $.Object3D.prototype.clone.call(this, e), e
        },$.Line = function (e, t, r) {
            $.Object3D.call(this), this.geometry = void 0 !== e ? e : new $.Geometry, this.material = void 0 !== t ? t : new $.LineBasicMaterial({color: 16777215 * Math.random()}), this.type = void 0 !== r ? r : $.LineStrip
        },$.LineStrip = 0,$.LinePieces = 1,$.Line.prototype = Object.create($.Object3D.prototype),$.Line.prototype.clone = function (e) {
            return void 0 === e && (e = new $.Line(this.geometry, this.material, this.type)), $.Object3D.prototype.clone.call(this, e), e
        },$.Mesh = function (e, t) {
            $.Object3D.call(this), this.geometry = void 0 !== e ? e : new $.Geometry, this.material = void 0 !== t ? t : new $.MeshBasicMaterial({color: 16777215 * Math.random()}), this.updateMorphTargets()
        },$.Mesh.prototype = Object.create($.Object3D.prototype),$.Mesh.prototype.updateMorphTargets = function () {
            if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
                this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (var e = 0, t = this.geometry.morphTargets.length; e < t; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
            }
        },$.Mesh.prototype.getMorphTargetIndexByName = function (e) {
            return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : 0
        },$.Mesh.prototype.clone = function (e, t) {
            return void 0 === e && (e = new $.Mesh(this.geometry, this.material)), $.Object3D.prototype.clone.call(this, e, t), e
        },$.Bone = function (e) {
            $.Object3D.call(this), this.skin = e, this.skinMatrix = new $.Matrix4, this.accumulatedRotWeight = 0, this.accumulatedPosWeight = 0, this.accumulatedSclWeight = 0
        },$.Bone.prototype = Object.create($.Object3D.prototype),$.Bone.prototype.update = function (e, t) {
            this.matrixAutoUpdate && (t |= this.updateMatrix()), (t || this.matrixWorldNeedsUpdate) && (e ? this.skinMatrix.multiplyMatrices(e, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0, this.accumulatedRotWeight = 0, this.accumulatedPosWeight = 0, this.accumulatedSclWeight = 0);
            for (var r = 0, i = this.children.length; r < i; r++) this.children[r].update(this.skinMatrix, t)
        },$.Skeleton = function (e, t) {
            var r, i, o, a, n;
            if (this.useVertexTexture = void 0 === t || t, this.bones = [], this.boneMatrices = [], void 0 !== e) {
                for (var s = 0; s < e.length; ++s) o = (i = e[s]).pos, a = i.rotq, n = i.scl, (r = this.addBone()).name = i.name, r.position.set(o[0], o[1], o[2]), r.quaternion.set(a[0], a[1], a[2], a[3]), void 0 !== n ? r.scale.set(n[0], n[1], n[2]) : r.scale.set(1, 1, 1);
                for (s = 0; s < e.length; ++s) -1 !== (i = e[s]).parent && this.bones[i.parent].add(this.bones[s]);
                var h, l = this.bones.length;
                if (this.useVertexTexture) h = l > 256 ? 64 : l > 64 ? 32 : l > 16 ? 16 : 8, this.boneTextureWidth = h, this.boneTextureHeight = h, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new $.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, $.RGBAFormat, $.FloatType), this.boneTexture.minFilter = $.NearestFilter, this.boneTexture.magFilter = $.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1; else this.boneMatrices = new Float32Array(16 * l)
            }
        },$.Skeleton.prototype = Object.create($.Mesh.prototype),$.Skeleton.prototype.addBone = function (e) {
            return void 0 === e && (e = new $.Bone(this)), this.bones.push(e), e
        },$.Skeleton.prototype.calculateInverses = function (e) {
            this.boneInverses = [];
            for (var t = 0, r = this.bones.length; t < r; ++t) {
                var i = new $.Matrix4;
                i.getInverse(this.bones[t].skinMatrix), this.boneInverses.push(i)
            }
        },$.SkinnedMesh = function (e, t, r) {
            $.Mesh.call(this, e, t), this.skeleton = new $.Skeleton(this.geometry && this.geometry.bones, r);
            for (var i = 0; i < this.skeleton.bones.length; ++i) {
                var o = this.skeleton.bones[i];
                void 0 === o.parent && this.add(o)
            }
            this.identityMatrix = new $.Matrix4, this.pose()
        },$.SkinnedMesh.prototype = Object.create($.Mesh.prototype),$.SkinnedMesh.prototype.updateMatrixWorld = (B = new $.Matrix4, function (e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent ? this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
            for (var t = 0, r = this.children.length; t < r; t++) {
                var i = this.children[t];
                i instanceof $.Bone ? i.update(this.identityMatrix, !1) : i.updateMatrixWorld(!0)
            }
            void 0 === this.skeleton.boneInverses && this.skeleton.calculateInverses();
            for (var o = 0, a = this.skeleton.bones.length; o < a; o++) B.multiplyMatrices(this.skeleton.bones[o].skinMatrix, this.skeleton.boneInverses[o]), B.flattenToArrayOffset(this.skeleton.boneMatrices, 16 * o);
            this.skeleton.useVertexTexture && (this.skeleton.boneTexture.needsUpdate = !0)
        }),$.SkinnedMesh.prototype.pose = function () {
            this.updateMatrixWorld(!0), this.normalizeSkinWeights()
        },$.SkinnedMesh.prototype.normalizeSkinWeights = function () {
            if (this.geometry instanceof $.Geometry) for (var e = 0; e < this.geometry.skinIndices.length; e++) {
                var t = this.geometry.skinWeights[e], r = 1 / t.lengthManhattan();
                r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1)
            }
        },$.SkinnedMesh.prototype.clone = function (e) {
            return void 0 === e && (e = new $.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)), $.Mesh.prototype.clone.call(this, e), e
        },$.MorphAnimMesh = function (e, t) {
        },$.MorphAnimMesh.prototype = Object.create($.Mesh.prototype),$.MorphAnimMesh.prototype.setFrameRange = function (e, t) {
            this.startKeyframe = e, this.endKeyframe = t, this.length = this.endKeyframe - this.startKeyframe + 1



