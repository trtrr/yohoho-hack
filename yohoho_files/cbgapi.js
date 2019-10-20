/* JS */
gapi.loaded_0(function(_) {
    var window = this;
    var qb, Mb, vf, Na, Te;
    _.b = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    _._DumpException = function(a) {
        throw a;
    };
    _.aa = [];
    qb = function(a) {
        var c = 0;
        return function() {
            return c < a.length ? {
                done: !1,
                value: a[c++]
            } : {
                done: !0
            }
        }
    };
    _.PK = function(a) {
        var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return c ? c.call(a) : {
            next: qb(a)
        }
    };
    _.jb = "function" == typeof Object.create ? Object.create : function(a) {
        var c = function() {};
        c.prototype = a;
        return new c
    };
    if ("function" == typeof Object.setPrototypeOf) Mb = Object.setPrototypeOf;
    else {
        var Xb;
        a: {
            var bc = {
                    a: !0
                },
                ye = {};
            try {
                ye.__proto__ = bc;
                Xb = ye.a;
                break a
            } catch (a) {}
            Xb = !1
        }
        Mb = Xb ? function(a, c) {
            a.__proto__ = c;
            if (a.__proto__ !== c) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    _.fe = Mb;
    vf = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, f) {
        a != Array.prototype && a != Object.prototype && (a[c] = f.value)
    };
    Na = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    Te = function(a, c) {
        if (c) {
            var f = Na;
            a = a.split(".");
            for (var g = 0; g < a.length - 1; g++) {
                var h = a[g];
                h in f || (f[h] = {});
                f = f[h]
            }
            a = a[a.length - 1];
            g = f[a];
            c = c(g);
            c != g && null != c && vf(f, a, {
                configurable: !0,
                writable: !0,
                value: c
            })
        }
    };
    Te("Array.prototype.find", function(a) {
        return a ? a : function(c, f) {
            a: {
                var g = this;g instanceof String && (g = String(g));
                for (var h = g.length, l = 0; l < h; l++) {
                    var n = g[l];
                    if (c.call(f, n, l, g)) {
                        c = n;
                        break a
                    }
                }
                c = void 0
            }
            return c
        }
    });
    var Le = function(a, c, f) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
        if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
        return a + ""
    };
    Te("String.prototype.startsWith", function(a) {
        return a ? a : function(c, f) {
            var g = Le(this, c, "startsWith"),
                h = g.length,
                l = c.length;
            f = Math.max(0, Math.min(f | 0, g.length));
            for (var n = 0; n < l && f < h;)
                if (g[f++] != c[n++]) return !1;
            return n >= l
        }
    });
    Te("String.prototype.repeat", function(a) {
        return a ? a : function(c) {
            var f = Le(this, null, "repeat");
            if (0 > c || 1342177279 < c) throw new RangeError("Invalid count value");
            c |= 0;
            for (var g = ""; c;)
                if (c & 1 && (g += f), c >>>= 1) f += f;
            return g
        }
    });
    var Pa = function() {
            Pa = function() {};
            Na.Symbol || (Na.Symbol = ib)
        },
        Ed = function(a, c) {
            this.LE = a;
            vf(this, "description", {
                configurable: !0,
                writable: !0,
                value: c
            })
        };
    Ed.prototype.toString = function() {
        return this.LE
    };
    var ib = function() {
            function a(f) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new Ed("jscomp_symbol_" + (f || "") + "_" + c++, f)
            }
            var c = 0;
            return a
        }(),
        sb = function() {
            Pa();
            var a = Na.Symbol.iterator;
            a || (a = Na.Symbol.iterator = Na.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && vf(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Fb(qb(this))
                }
            });
            sb = function() {}
        },
        Fb = function(a) {
            sb();
            a = {
                next: a
            };
            a[Na.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        Me = function(a, c) {
            sb();
            a instanceof String && (a += "");
            var f = 0,
                g = {
                    next: function() {
                        if (f < a.length) {
                            var h = f++;
                            return {
                                value: c(h, a[h]),
                                done: !1
                            }
                        }
                        g.next = function() {
                            return {
                                done: !0,
                                value: void 0
                            }
                        };
                        return g.next()
                    }
                };
            g[Symbol.iterator] = function() {
                return g
            };
            return g
        };
    Te("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Me(this, function(c) {
                return c
            })
        }
    });
    Te("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Me(this, function(c, f) {
                return f
            })
        }
    });
    Te("Object.is", function(a) {
        return a ? a : function(c, f) {
            return c === f ? 0 !== c || 1 / c === 1 / f : c !== c && f !== f
        }
    });
    Te("Array.prototype.includes", function(a) {
        return a ? a : function(c, f) {
            var g = this;
            g instanceof String && (g = String(g));
            var h = g.length;
            f = f || 0;
            for (0 > f && (f = Math.max(f + h, 0)); f < h; f++) {
                var l = g[f];
                if (l === c || Object.is(l, c)) return !0
            }
            return !1
        }
    });
    Te("String.prototype.includes", function(a) {
        return a ? a : function(c, f) {
            return -1 !== Le(this, c, "includes").indexOf(c, f || 0)
        }
    });
    var wf = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    Te("WeakMap", function(a) {
        function c() {}

        function f(t) {
            var v = typeof t;
            return "object" === v && null !== t || "function" === v
        }

        function g(t) {
            if (!wf(t, l)) {
                var v = new c;
                vf(t, l, {
                    value: v
                })
            }
        }

        function h(t) {
            var v = Object[t];
            v && (Object[t] = function(w) {
                if (w instanceof c) return w;
                g(w);
                return v(w)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var t = Object.seal({}),
                        v = Object.seal({}),
                        w = new a([
                            [t, 2],
                            [v, 3]
                        ]);
                    if (2 != w.get(t) || 3 != w.get(v)) return !1;
                    w["delete"](t);
                    w.set(v, 4);
                    return !w.has(t) && 4 == w.get(v)
                } catch (A) {
                    return !1
                }
            }()) return a;
        var l = "$jscomp_hidden_" + Math.random();
        h("freeze");
        h("preventExtensions");
        h("seal");
        var n = 0,
            q = function(t) {
                this.El = (n += Math.random() + 1).toString();
                if (t) {
                    t = _.PK(t);
                    for (var v; !(v = t.next()).done;) v = v.value, this.set(v[0], v[1])
                }
            };
        q.prototype.set = function(t, v) {
            if (!f(t)) throw Error("La");
            g(t);
            if (!wf(t, l)) throw Error("ua`" + t);
            t[l][this.El] = v;
            return this
        };
        q.prototype.get = function(t) {
            return f(t) && wf(t, l) ? t[l][this.El] : void 0
        };
        q.prototype.has = function(t) {
            return f(t) && wf(t, l) && wf(t[l], this.El)
        };
        q.prototype["delete"] = function(t) {
            return f(t) && wf(t, l) && wf(t[l], this.El) ? delete t[l][this.El] : !1
        };
        return q
    });
    Te("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var q = Object.seal({
                            x: 4
                        }),
                        t = new a(_.PK([
                            [q, "s"]
                        ]));
                    if ("s" != t.get(q) || 1 != t.size || t.get({
                            x: 4
                        }) || t.set({
                            x: 4
                        }, "t") != t || 2 != t.size) return !1;
                    var v = t.entries(),
                        w = v.next();
                    if (w.done || w.value[0] != q || "s" != w.value[1]) return !1;
                    w = v.next();
                    return w.done || 4 != w.value[0].x || "t" != w.value[1] || !v.next().done ? !1 : !0
                } catch (A) {
                    return !1
                }
            }()) return a;
        sb();
        var c = new WeakMap,
            f = function(q) {
                this.bw = {};
                this.p4 = l();
                this.size = 0;
                if (q) {
                    q = _.PK(q);
                    for (var t; !(t = q.next()).done;) t = t.value, this.set(t[0], t[1])
                }
            };
        f.prototype.set = function(q, t) {
            q = 0 === q ? 0 : q;
            var v = g(this, q);
            v.list || (v.list = this.bw[v.id] = []);
            v.DK ? v.DK.value = t : (v.DK = {
                next: this.p4,
                qia: this.p4.qia,
                head: this.p4,
                key: q,
                value: t
            }, v.list.push(v.DK), this.p4.qia.next = v.DK, this.p4.qia = v.DK, this.size++);
            return this
        };
        f.prototype["delete"] = function(q) {
            q = g(this, q);
            return q.DK && q.list ? (q.list.splice(q.index, 1), q.list.length || delete this.bw[q.id], q.DK.qia.next = q.DK.next, q.DK.next.qia = q.DK.qia, q.DK.head = null, this.size--, !0) : !1
        };
        f.prototype.clear = function() {
            this.bw = {};
            this.p4 = this.p4.qia = l();
            this.size = 0
        };
        f.prototype.has = function(q) {
            return !!g(this, q).DK
        };
        f.prototype.get = function(q) {
            return (q = g(this, q).DK) && q.value
        };
        f.prototype.entries = function() {
            return h(this, function(q) {
                return [q.key, q.value]
            })
        };
        f.prototype.keys = function() {
            return h(this, function(q) {
                return q.key
            })
        };
        f.prototype.values = function() {
            return h(this, function(q) {
                return q.value
            })
        };
        f.prototype.forEach = function(q, t) {
            for (var v = this.entries(), w; !(w = v.next()).done;) w = w.value, q.call(t, w[1], w[0], this)
        };
        f.prototype[Symbol.iterator] = f.prototype.entries;
        var g = function(q, t) {
                var v = t && typeof t;
                "object" == v || "function" == v ? c.has(t) ? v = c.get(t) : (v = "" + ++n, c.set(t, v)) : v = "p_" + t;
                var w = q.bw[v];
                if (w && wf(q.bw, v))
                    for (q = 0; q < w.length; q++) {
                        var A = w[q];
                        if (t !== t && A.key !== A.key || t === A.key) return {
                            id: v,
                            list: w,
                            index: q,
                            DK: A
                        }
                    }
                return {
                    id: v,
                    list: w,
                    index: -1,
                    DK: void 0
                }
            },
            h = function(q, t) {
                var v = q.p4;
                return Fb(function() {
                    if (v) {
                        for (; v.head != q.p4;) v = v.qia;
                        for (; v.next != v.head;) return v = v.next, {
                            done: !1,
                            value: t(v)
                        };
                        v = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            l = function() {
                var q = {};
                return q.qia = q.next = q.head = q
            },
            n = 0;
        return f
    });
    Te("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var f = Object.seal({
                            x: 4
                        }),
                        g = new a(_.PK([f]));
                    if (!g.has(f) || 1 != g.size || g.add(f) != g || 1 != g.size || g.add({
                            x: 4
                        }) != g || 2 != g.size) return !1;
                    var h = g.entries(),
                        l = h.next();
                    if (l.done || l.value[0] != f || l.value[1] != f) return !1;
                    l = h.next();
                    return l.done || l.value[0] == f || 4 != l.value[0].x || l.value[1] != l.value[0] ? !1 : h.next().done
                } catch (n) {
                    return !1
                }
            }()) return a;
        sb();
        var c = function(f) {
            this.Ka = new Map;
            if (f) {
                f = _.PK(f);
                for (var g; !(g = f.next()).done;) this.add(g.value)
            }
            this.size = this.Ka.size
        };
        c.prototype.add = function(f) {
            f = 0 === f ? 0 : f;
            this.Ka.set(f, f);
            this.size = this.Ka.size;
            return this
        };
        c.prototype["delete"] = function(f) {
            f = this.Ka["delete"](f);
            this.size = this.Ka.size;
            return f
        };
        c.prototype.clear = function() {
            this.Ka.clear();
            this.size = 0
        };
        c.prototype.has = function(f) {
            return this.Ka.has(f)
        };
        c.prototype.entries = function() {
            return this.Ka.entries()
        };
        c.prototype.values = function() {
            return this.Ka.values()
        };
        c.prototype.keys = c.prototype.values;
        c.prototype[Symbol.iterator] = c.prototype.values;
        c.prototype.forEach = function(f, g) {
            var h = this;
            this.Ka.forEach(function(l) {
                return f.call(g, l, l, h)
            })
        };
        return c
    });
    Te("Array.from", function(a) {
        return a ? a : function(c, f, g) {
            f = null != f ? f : function(q) {
                return q
            };
            var h = [],
                l = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
            if ("function" == typeof l) {
                c = l.call(c);
                for (var n = 0; !(l = c.next()).done;) h.push(f.call(g, l.value, n++))
            } else
                for (l = c.length, n = 0; n < l; n++) h.push(f.call(g, c[n], n));
            return h
        }
    });
    Te("Promise", function(a) {
        function c() {
            this.h1 = null
        }

        function f(n) {
            return n instanceof h ? n : new h(function(q) {
                q(n)
            })
        }
        if (a) return a;
        c.prototype.mH = function(n) {
            if (null == this.h1) {
                this.h1 = [];
                var q = this;
                this.nH(function() {
                    q.yH()
                })
            }
            this.h1.push(n)
        };
        var g = Na.setTimeout;
        c.prototype.nH = function(n) {
            g(n, 0)
        };
        c.prototype.yH = function() {
            for (; this.h1 && this.h1.length;) {
                var n = this.h1;
                this.h1 = [];
                for (var q = 0; q < n.length; ++q) {
                    var t = n[q];
                    n[q] = null;
                    try {
                        t()
                    } catch (v) {
                        this.wH(v)
                    }
                }
            }
            this.h1 = null
        };
        c.prototype.wH = function(n) {
            this.nH(function() {
                throw n;
            })
        };
        var h = function(n) {
            this.ub = 0;
            this.rW = void 0;
            this.qu = [];
            var q = this.lH();
            try {
                n(q.resolve, q.reject)
            } catch (t) {
                q.reject(t)
            }
        };
        h.prototype.lH = function() {
            function n(v) {
                return function(w) {
                    t || (t = !0, v.call(q, w))
                }
            }
            var q = this,
                t = !1;
            return {
                resolve: n(this.GH),
                reject: n(this.no)
            }
        };
        h.prototype.GH = function(n) {
            if (n === this) this.no(new TypeError("A Promise cannot resolve to itself"));
            else if (n instanceof h) this.PH(n);
            else {
                a: switch (typeof n) {
                    case "object":
                        var q = null != n;
                        break a;
                    case "function":
                        q = !0;
                        break a;
                    default:
                        q = !1
                }
                q ? this.AH(n) : this.oH(n)
            }
        };
        h.prototype.AH = function(n) {
            var q = void 0;
            try {
                q = n.then
            } catch (t) {
                this.no(t);
                return
            }
            "function" == typeof q ? this.ZH(q, n) : this.oH(n)
        };
        h.prototype.no = function(n) {
            this.vH(2, n)
        };
        h.prototype.oH = function(n) {
            this.vH(1, n)
        };
        h.prototype.vH = function(n, q) {
            if (0 != this.ub) throw Error("g`" + n + "`" + q + "`" + this.ub);
            this.ub = n;
            this.rW = q;
            this.zH()
        };
        h.prototype.zH = function() {
            if (null != this.qu) {
                for (var n = 0; n < this.qu.length; ++n) l.mH(this.qu[n]);
                this.qu = null
            }
        };
        var l = new c;
        h.prototype.PH = function(n) {
            var q = this.lH();
            n.WG(q.resolve, q.reject)
        };
        h.prototype.ZH = function(n, q) {
            var t = this.lH();
            try {
                n.call(q, t.resolve, t.reject)
            } catch (v) {
                t.reject(v)
            }
        };
        h.prototype.then = function(n, q) {
            function t(F, z) {
                return "function" == typeof F ? function(I) {
                    try {
                        v(F(I))
                    } catch (E) {
                        w(E)
                    }
                } : z
            }
            var v, w, A = new h(function(F, z) {
                v = F;
                w = z
            });
            this.WG(t(n, v), t(q, w));
            return A
        };
        h.prototype["catch"] = function(n) {
            return this.then(void 0, n)
        };
        h.prototype.WG = function(n, q) {
            function t() {
                switch (v.ub) {
                    case 1:
                        n(v.rW);
                        break;
                    case 2:
                        q(v.rW);
                        break;
                    default:
                        throw Error("Ya`" + v.ub);
                }
            }
            var v = this;
            null == this.qu ? l.mH(t) : this.qu.push(t)
        };
        h.resolve = f;
        h.reject = function(n) {
            return new h(function(q, t) {
                t(n)
            })
        };
        h.race = function(n) {
            return new h(function(q, t) {
                for (var v = _.PK(n), w = v.next(); !w.done; w = v.next()) f(w.value).WG(q, t)
            })
        };
        h.all = function(n) {
            var q = _.PK(n),
                t = q.next();
            return t.done ? f([]) : new h(function(v, w) {
                function A(I) {
                    return function(E) {
                        F[I] = E;
                        z--;
                        0 == z && v(F)
                    }
                }
                var F = [],
                    z = 0;
                do F.push(void 0), z++, f(t.value).WG(A(F.length - 1), w), t = q.next(); while (!t.done)
            })
        };
        return h
    });
    _.na = _.na || {};
    _.D = this || self;
    _.da = function(a) {
        var c = typeof a;
        if ("object" == c)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return c;
                var f = Object.prototype.toString.call(a);
                if ("[object Window]" == f) return "object";
                if ("[object Array]" == f || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == f || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == c && "undefined" == typeof a.call) return "object";
        return c
    };
    _.ea = function(a) {
        return "array" == _.da(a)
    };
    _.oa = "closure_uid_" + (1E9 * Math.random() >>> 0);
    _.pa = Date.now || function() {
        return +new Date
    };
    _.Mu = function(a, c) {
        a = a.split(".");
        var f = _.D;
        a[0] in f || "undefined" == typeof f.execScript || f.execScript("var " + a[0]);
        for (var g; a.length && (g = a.shift());) a.length || void 0 === c ? f = f[g] && f[g] !== Object.prototype[g] ? f[g] : f[g] = {} : f[g] = c
    };
    _.J = function(a, c) {
        function f() {}
        f.prototype = c.prototype;
        a.T = c.prototype;
        a.prototype = new f;
        a.prototype.constructor = a;
        a.yc = function(g, h, l) {
            for (var n = Array(arguments.length - 2), q = 2; q < arguments.length; q++) n[q - 2] = arguments[q];
            return c.prototype[h].apply(g, n)
        }
    };
    gadgets = window.gadgets || {};
    osapi = window.osapi = window.osapi || {};
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        csi: {
            rate: .01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            blogger: {
                url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            appfinder: {
                url: "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            useGapiForXd3: !0,
            xd3: "/static/proxy.html",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        },
        client: {
            perApiBatch: !0
        }
    });
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "onload"
        },
        iframes: {
            ":source:": "3p"
        }
    });
    var ia, la;
    _.gh = function() {};
    _.re = function(a) {
        var c = _.da(a);
        return "array" == c || "object" == c && "number" == typeof a.length
    };
    _.Vg = function(a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c
    };
    _.vd = function(a) {
        return "function" == _.da(a)
    };
    ia = function(a, c, f) {
        return a.call.apply(a.bind, arguments)
    };
    la = function(a, c, f) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var g = Array.prototype.slice.call(arguments, 2);
            return function() {
                var h = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(h, g);
                return a.apply(c, h)
            }
        }
        return function() {
            return a.apply(c, arguments)
        }
    };
    _.H = function(a, c, f) {
        _.H = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : la;
        return _.H.apply(null, arguments)
    };
    _.se = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, _.se);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a))
    };
    _.J(_.se, Error);
    _.se.prototype.name = "CustomError";
    var RO = function(a, c) {
        a = a.split("%s");
        for (var f = "", g = a.length - 1, h = 0; h < g; h++) f += a[h] + (h < c.length ? c[h] : "%s");
        _.se.call(this, f + a[g])
    };
    _.J(RO, _.se);
    RO.prototype.name = "AssertionError";
    _.we = Array.prototype.indexOf ? function(a, c) {
        return Array.prototype.indexOf.call(a, c, void 0)
    } : function(a, c) {
        if ("string" === typeof a) return "string" !== typeof c || 1 != c.length ? -1 : a.indexOf(c, 0);
        for (var f = 0; f < a.length; f++)
            if (f in a && a[f] === c) return f;
        return -1
    };
    _.Wf = Array.prototype.lastIndexOf ? function(a, c) {
        return Array.prototype.lastIndexOf.call(a, c, a.length - 1)
    } : function(a, c) {
        var f = a.length - 1;
        0 > f && (f = Math.max(0, a.length + f));
        if ("string" === typeof a) return "string" !== typeof c || 1 != c.length ? -1 : a.lastIndexOf(c, f);
        for (; 0 <= f; f--)
            if (f in a && a[f] === c) return f;
        return -1
    };
    _.Be = Array.prototype.forEach ? function(a, c, f) {
        Array.prototype.forEach.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = "string" === typeof a ? a.split("") : a, l = 0; l < g; l++) l in h && c.call(f, h[l], l, a)
    };
    _.Ce = Array.prototype.filter ? function(a, c) {
        return Array.prototype.filter.call(a, c, void 0)
    } : function(a, c) {
        for (var f = a.length, g = [], h = 0, l = "string" === typeof a ? a.split("") : a, n = 0; n < f; n++)
            if (n in l) {
                var q = l[n];
                c.call(void 0, q, n, a) && (g[h++] = q)
            }
        return g
    };
    _.De = Array.prototype.map ? function(a, c) {
        return Array.prototype.map.call(a, c, void 0)
    } : function(a, c) {
        for (var f = a.length, g = Array(f), h = "string" === typeof a ? a.split("") : a, l = 0; l < f; l++) l in h && (g[l] = c.call(void 0, h[l], l, a));
        return g
    };
    _.Ee = Array.prototype.some ? function(a, c, f) {
        return Array.prototype.some.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = "string" === typeof a ? a.split("") : a, l = 0; l < g; l++)
            if (l in h && c.call(f, h[l], l, a)) return !0;
        return !1
    };
    _.Fe = Array.prototype.every ? function(a, c, f) {
        return Array.prototype.every.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = "string" === typeof a ? a.split("") : a, l = 0; l < g; l++)
            if (l in h && !c.call(f, h[l], l, a)) return !1;
        return !0
    };
    _.ve = function(a, c) {
        return 0 <= (0, _.we)(a, c)
    };
    var jd;
    _.cc = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    _.wd = function(a, c) {
        var f = 0;
        a = (0, _.cc)(String(a)).split(".");
        c = (0, _.cc)(String(c)).split(".");
        for (var g = Math.max(a.length, c.length), h = 0; 0 == f && h < g; h++) {
            var l = a[h] || "",
                n = c[h] || "";
            do {
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""];
                if (0 == l[0].length && 0 == n[0].length) break;
                f = jd(0 == l[1].length ? 0 : parseInt(l[1], 10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || jd(0 == l[2].length, 0 == n[2].length) || jd(l[2], n[2]);
                l = l[3];
                n = n[3]
            } while (0 == f)
        }
        return f
    };
    jd = function(a, c) {
        return a < c ? -1 : a > c ? 1 : 0
    };
    a: {
        var Xe = _.D.navigator;
        if (Xe) {
            var Ye = Xe.userAgent;
            if (Ye) {
                _.We = Ye;
                break a
            }
        }
        _.We = ""
    }
    _.pf = function(a) {
        return -1 != _.We.indexOf(a)
    };
    var tf;
    _.qf = function(a, c, f) {
        for (var g in a) c.call(f, a[g], g, a)
    };
    tf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    _.sf = function(a, c) {
        for (var f, g, h = 1; h < arguments.length; h++) {
            g = arguments[h];
            for (f in g) a[f] = g[f];
            for (var l = 0; l < tf.length; l++) f = tf[l], Object.prototype.hasOwnProperty.call(g, f) && (a[f] = g[f])
        }
    };
    _.$e = function() {
        return _.pf("Opera")
    };
    _.B = function() {
        return _.pf("Trident") || _.pf("MSIE")
    };
    _.hq = function(a) {
        var c = !1,
            f;
        return function() {
            c || (f = a(), c = !0);
            return f
        }
    };
    var Us, Kh;
    _.ou = function(a, c) {
        this.C5 = a === Kh && c || "";
        this.sda = Us
    };
    _.ou.prototype.nK = !0;
    _.ou.prototype.cR = function() {
        return this.C5
    };
    _.ru = function(a) {
        return a instanceof _.ou && a.constructor === _.ou && a.sda === Us ? a.C5 : "type_error:Const"
    };
    _.Nq = function(a) {
        return new _.ou(Kh, a)
    };
    Us = {};
    Kh = {};
    _.Re = _.Nq("");
    var xB = function() {
        this.Ga = ""
    };
    xB.prototype.nK = !0;
    xB.prototype.cR = function() {
        return this.Ga.toString()
    };
    xB.prototype.XY = function(a) {
        this.Ga = a;
        return this
    };
    (new xB).XY("");
    var pu;
    _.su = function(a, c) {
        this.Dj = a === _.rW && c || "";
        this.rda = pu
    };
    _.su.prototype.nK = !0;
    _.su.prototype.cR = function() {
        return this.Dj.toString()
    };
    _.su.prototype.mK = !0;
    _.su.prototype.Im = _.b(1);
    _.oG = function(a) {
        if (a instanceof _.su && a.constructor === _.su && a.rda === pu) return a.Dj;
        _.da(a);
        return "type_error:SafeUrl"
    };
    _.vU = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.jw = function(a) {
        if (a instanceof _.su) return a;
        a = "object" == typeof a && a.nK ? a.cR() : String(a);
        _.vU.test(a) || (a = "about:invalid#zClosurez");
        return new _.su(_.rW, a)
    };
    pu = {};
    _.rW = {};
    var rm, vs, NQ, qu, Pv, To, MQ, zH;
    _.pm = function() {
        this.M8 = "";
        this.qda = nm
    };
    _.pm.prototype.nK = !0;
    var nm = {};
    _.pm.prototype.cR = function() {
        return this.M8
    };
    _.Bw = function(a) {
        if (a instanceof _.pm && a.constructor === _.pm && a.qda === nm) return a.M8;
        _.da(a);
        return "type_error:SafeStyle"
    };
    _.pm.prototype.XY = function(a) {
        this.M8 = a;
        return this
    };
    rm = (new _.pm).XY("");
    _.cp = function(a) {
        var c = "",
            f;
        for (f in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(f)) throw Error("e`" + f);
            var g = a[f];
            null != g && (g = _.ea(g) ? (0, _.De)(g, vs).join(" ") : vs(g), c += f + ":" + g + ";")
        }
        return c ? (new _.pm).XY(c) : rm
    };
    vs = function(a) {
        if (a instanceof _.su) return 'url("' + _.oG(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof _.ou) a = _.ru(a);
        else {
            a = String(a);
            var c = a.replace(To, "$1").replace(To, "$1").replace(Pv, "url");
            if (qu.test(c)) {
                if (c = !MQ.test(a)) {
                    for (var f = c = !0, g = 0; g < a.length; g++) {
                        var h = a.charAt(g);
                        "'" == h && f ? c = !c : '"' == h && c && (f = !f)
                    }
                    c = c && f && NQ(a)
                }
                a = c ? zH(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new RO("Value does not allow [{;}], got: %s.", [a]);
        return a
    };
    NQ = function(a) {
        for (var c = !0, f = /^[-_a-zA-Z0-9]$/, g = 0; g < a.length; g++) {
            var h = a.charAt(g);
            if ("]" == h) {
                if (c) return !1;
                c = !0
            } else if ("[" == h) {
                if (!c) return !1;
                c = !1
            } else if (!c && !f.test(h)) return !1
        }
        return c
    };
    qu = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/;
    Pv = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
    To = /\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
    MQ = /\/\*/;
    zH = function(a) {
        return a.replace(Pv, function(c, f, g, h) {
            var l = "";
            g = g.replace(/^(['"])(.*)\1$/, function(n, q, t) {
                l = q;
                return t
            });
            c = _.jw(g).cR();
            return f + l + c + l + h
        })
    };
    _.xm = function() {
        this.L8 = "";
        this.pda = _.Bl
    };
    _.xm.prototype.nK = !0;
    _.Bl = {};
    _.iM = function(a) {
        a = _.ru(a);
        return 0 === a.length ? ns : (new _.xm).XY(a)
    };
    _.xm.prototype.cR = function() {
        return this.L8
    };
    _.xm.prototype.XY = function(a) {
        this.L8 = a;
        return this
    };
    var ns = (new _.xm).XY("");
    var XM;
    _.NG = function() {
        this.d_ = "";
        this.oda = XM;
        this.Z$ = null
    };
    _.NG.prototype.mK = !0;
    _.NG.prototype.Im = _.b(0);
    _.NG.prototype.nK = !0;
    _.NG.prototype.cR = function() {
        return this.d_.toString()
    };
    _.OG = function(a) {
        if (a instanceof _.NG && a.constructor === _.NG && a.oda === XM) return a.d_;
        _.da(a);
        return "type_error:SafeHtml"
    };
    XM = {};
    _.uf = function(a, c) {
        return (new _.NG).XY(a, c)
    };
    _.NG.prototype.XY = function(a, c) {
        this.d_ = a;
        this.Z$ = c;
        return this
    };
    _.uf("<!DOCTYPE html>", 0);
    _.RG = _.uf("", 0);
    _.Pp = _.uf("<br>", 0);
    _.Hq = _.hq(function() {
        var a = document.createElement("div"),
            c = document.createElement("div");
        c.appendChild(document.createElement("div"));
        a.appendChild(c);
        c = a.firstChild.firstChild;
        a.innerHTML = _.OG(_.RG);
        return !c.parentElement
    });
    _.Gf = String.prototype.repeat ? function(a, c) {
        return a.repeat(c)
    } : function(a, c) {
        return Array(c + 1).join(a)
    };
    _.ne = 2147483648 * Math.random() | 0;
    _.mZ = function() {
        return _.pf("iPhone") && !_.pf("iPod") && !_.pf("iPad")
    };
    _.wk = function() {
        return _.mZ() || _.pf("iPad") || _.pf("iPod")
    };
    var lh = function(a) {
            lh[" "](a);
            return a
        },
        Oe;
    lh[" "] = _.gh;
    _.Eo = function(a, c) {
        try {
            return lh(a[c]), !0
        } catch (f) {}
        return !1
    };
    Oe = function(a, c) {
        var f = Zk;
        return Object.prototype.hasOwnProperty.call(f, a) ? f[a] : f[a] = c(a)
    };
    var Pe, Ze, Zk, Ar;
    _.cf = _.$e();
    _.W = _.B();
    _.yk = _.pf("Edge");
    _.Vi = _.yk || _.W;
    _.df = _.pf("Gecko") && !(-1 != _.We.toLowerCase().indexOf("webkit") && !_.pf("Edge")) && !(_.pf("Trident") || _.pf("MSIE")) && !_.pf("Edge");
    _.ef = -1 != _.We.toLowerCase().indexOf("webkit") && !_.pf("Edge");
    _.ff = _.ef && _.pf("Mobile");
    _.Gg = _.pf("Macintosh");
    _.Im = _.pf("Windows");
    _.Jg = _.pf("Linux") || _.pf("CrOS");
    _.kO = _.pf("Android");
    _.yO = _.mZ();
    _.WP = _.pf("iPad");
    _.XQ = _.pf("iPod");
    _.DU = _.wk();
    Pe = function() {
        var a = _.D.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Bf = "",
            Pf = function() {
                var a = _.We;
                if (_.df) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (_.yk) return /Edge\/([\d\.]+)/.exec(a);
                if (_.W) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.ef) return /WebKit\/(\S+)/.exec(a);
                if (_.cf) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Pf && (Bf = Pf ? Pf[1] : "");
        if (_.W) {
            var xk = Pe();
            if (null != xk && xk > parseFloat(Bf)) {
                Ze = String(xk);
                break a
            }
        }
        Ze = Bf
    }
    _.Se = Ze;
    Zk = {};
    _.sl = function(a) {
        return Oe(a, function() {
            return 0 <= _.wd(_.Se, a)
        })
    };
    _.gq = function(a) {
        return Number(_.Ue) >= a
    };
    Ar = _.D.document && _.W ? Pe() : void 0;
    _.Ue = Ar;
    var pe, Af, Mh, ci, lk, rk, sk, im, dr, WD, Nf, Xo;
    _.d = function(a, c) {
        return _.aa[a] = c
    };
    _.su.prototype.Im = _.d(1, function() {
        return 1
    });
    _.NG.prototype.Im = _.d(0, function() {
        return this.Z$
    });
    pe = 0;
    _.oe = function(a) {
        return a[_.oa] || (a[_.oa] = ++pe)
    };
    _.bj = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.ze = function(a) {
        var c = a.length;
        if (0 < c) {
            for (var f = Array(c), g = 0; g < c; g++) f[g] = a[g];
            return f
        }
        return []
    };
    _.Xg = function(a, c) {
        return 0 == a.lastIndexOf(c, 0)
    };
    Mh = /&/g;
    ci = /</g;
    lk = />/g;
    rk = /"/g;
    sk = /'/g;
    im = /\x00/g;
    dr = /[\x00&<>"']/;
    _.jr = function(a, c) {
        if (c) a = a.replace(Mh, "&amp;").replace(ci, "&lt;").replace(lk, "&gt;").replace(rk, "&quot;").replace(sk, "&#39;").replace(im, "&#0;");
        else {
            if (!dr.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Mh, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ci, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(lk, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(rk, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(sk, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(im, "&#0;"))
        }
        return a
    };
    _.hg = {};
    WD = {};
    _.qE = function(a, c, f) {
        this.N8 = a === _.hg && c || "";
        this.qh = a === _.hg && f || null;
        this.tda = WD
    };
    _.qE.prototype.nK = !0;
    _.qE.prototype.cR = function() {
        return this.N8.toString()
    };
    _.qE.prototype.mK = !0;
    _.qE.prototype.Im = function() {
        return 1
    };
    _.IB = function(a) {
        if (a instanceof _.qE && a.constructor === _.qE && a.tda === WD) return a.N8;
        _.da(a);
        return "type_error:TrustedResourceUrl"
    };
    _.wx = function(a) {
        return _.IB(a).toString()
    };
    _.nq = function(a) {
        return new _.qE(_.hg, _.ru(a), null)
    };
    _.Lm = function(a) {
        if (a instanceof _.su) return a;
        a = "object" == typeof a && a.nK ? a.cR() : String(a);
        _.vU.test(a) || (a = "about:invalid#zClosurez");
        return new _.su(_.rW, a)
    };
    _.eG = function(a) {
        if (a instanceof _.NG) return a;
        var c = "object" == typeof a,
            f = null;
        c && a.mK && (f = a.Im());
        return _.uf(_.jr(c && a.nK ? a.cR() : String(a)), f)
    };
    _.KQ = function(a, c) {
        if ((0, _.Hq)())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = _.OG(c)
    };
    _.ht = function(a, c) {
        c = c instanceof _.su ? c : _.Lm(c);
        a.href = _.oG(c)
    };
    _.He = function(a) {
        return a = _.jr(a, void 0)
    };
    _.Cg = function(a) {
        return String(a).replace(/\-([a-z])/g, function(c, f) {
            return f.toUpperCase()
        })
    };
    Nf = !_.W || _.gq(9);
    Xo = !_.df && !_.W || _.W && _.gq(9) || _.df && _.sl("1.9.1");
    _.ag = _.W && !_.sl("9");
    _.Zn = _.W || _.cf || _.ef;
    _.qm = _.W && !_.gq(9);
    var Ff, Of, pg;
    _.xf = function(a) {
        return a ? new _.yf(_.zf(a)) : Af || (Af = new _.yf)
    };
    _.Ci = function(a, c) {
        return "string" === typeof c ? a.getElementById(c) : c
    };
    _.Cf = function(a, c, f, g) {
        a = g || a;
        c = c && "*" != c ? String(c).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (c || f)) return a.querySelectorAll(c + (f ? "." + f : ""));
        if (f && a.getElementsByClassName) {
            a = a.getElementsByClassName(f);
            if (c) {
                g = {};
                for (var h = 0, l = 0, n; n = a[l]; l++) c == n.nodeName && (g[h++] = n);
                g.length = h;
                return g
            }
            return a
        }
        a = a.getElementsByTagName(c || "*");
        if (f) {
            g = {};
            for (l = h = 0; n = a[l]; l++) c = n.className, "function" == typeof c.split && _.ve(c.split(/\s+/), f) && (g[h++] = n);
            g.length = h;
            return g
        }
        return a
    };
    _.Ef = function(a, c) {
        _.qf(c, function(f, g) {
            f && "object" == typeof f && f.nK && (f = f.cR());
            "style" == g ? a.style.cssText = f : "class" == g ? a.className = f : "for" == g ? a.htmlFor = f : Ff.hasOwnProperty(g) ? a.setAttribute(Ff[g], f) : _.Xg(g, "aria-") || _.Xg(g, "data-") ? a.setAttribute(g, f) : a[g] = f
        })
    };
    Ff = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.jg = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.Mf = function(a, c) {
        var f = String(c[0]),
            g = c[1];
        if (!Nf && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', _.He(g.name), '"');
            if (g.type) {
                f.push(' type="', _.He(g.type), '"');
                var h = {};
                _.sf(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = _.Ls(a, f);
        g && ("string" === typeof g ? f.className = g : _.ea(g) ? f.className = g.join(" ") : _.Ef(f, g));
        2 < c.length && Of(a, f, c, 2);
        return f
    };
    Of = function(a, c, f, g) {
        function h(n) {
            n && c.appendChild("string" === typeof n ? a.createTextNode(n) : n)
        }
        for (; g < f.length; g++) {
            var l = f[g];
            !_.re(l) || _.Vg(l) && 0 < l.nodeType ? h(l) : (0, _.Be)(pg(l) ? _.ze(l) : l, h)
        }
    };
    _.Br = function(a) {
        return _.Ls(document, a)
    };
    _.Ls = function(a, c) {
        c = String(c);
        "application/xhtml+xml" === a.contentType && (c = c.toLowerCase());
        return a.createElement(c)
    };
    _.Qx = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    _.xp = function(a, c) {
        Of(_.zf(a), a, arguments, 1)
    };
    _.Qf = function(a) {
        for (var c; c = a.firstChild;) a.removeChild(c)
    };
    _.Rf = function(a, c) {
        c.parentNode && c.parentNode.insertBefore(a, c)
    };
    _.Tf = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.Uf = function(a) {
        var c, f = a.parentNode;
        if (f && 11 != f.nodeType) {
            if (a.removeNode) return a.removeNode(!1);
            for (; c = a.firstChild;) f.insertBefore(c, a);
            return _.Tf(a)
        }
    };
    _.SO = function(a) {
        return Xo && void 0 != a.children ? a.children : (0, _.Ce)(a.childNodes, function(c) {
            return 1 == c.nodeType
        })
    };
    _.iz = function(a) {
        return _.Vg(a) && 1 == a.nodeType
    };
    _.Yf = function(a, c) {
        if (!a || !c) return !1;
        if (a.contains && 1 == c.nodeType) return a == c || a.contains(c);
        if ("undefined" != typeof a.compareDocumentPosition) return a == c || !!(a.compareDocumentPosition(c) & 16);
        for (; c && a != c;) c = c.parentNode;
        return c == a
    };
    _.zf = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.Zf = function(a, c) {
        if ("textContent" in a) a.textContent = c;
        else if (3 == a.nodeType) a.data = String(c);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(c)
        } else _.Qf(a), a.appendChild(_.zf(a).createTextNode(String(c)))
    };
    pg = function(a) {
        if (a && "number" == typeof a.length) {
            if (_.Vg(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (_.vd(a)) return "function" == typeof a.item
        }
        return !1
    };
    _.yf = function(a) {
        this.wc = a || _.D.document || document
    };
    _.k = _.yf.prototype;
    _.k.Ha = _.xf;
    _.k.v5 = _.b(2);
    _.k.Wb = function() {
        return this.wc
    };
    _.k.Kb = function(a) {
        return _.Ci(this.wc, a)
    };
    _.k.getElementsByTagName = function(a, c) {
        return (c || this.wc).getElementsByTagName(String(a))
    };
    _.k.R = function(a, c, f) {
        return _.Mf(this.wc, arguments)
    };
    _.k.createElement = function(a) {
        return _.Ls(this.wc, a)
    };
    _.k.createTextNode = function(a) {
        return this.wc.createTextNode(String(a))
    };
    _.k.Aa = function() {
        var a = this.wc;
        return a.parentWindow || a.defaultView
    };
    _.k.appendChild = function(a, c) {
        a.appendChild(c)
    };
    _.k.append = _.xp;
    _.k.canHaveChildren = _.Qx;
    _.k.u0 = _.Qf;
    _.k.Sl = _.Rf;
    _.k.removeNode = _.Tf;
    _.k.Hp = _.Uf;
    _.k.NR = _.SO;
    _.k.isElement = _.iz;
    _.k.contains = _.Yf;
    _.k.kJ = _.b(3);
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    _.ta = window;
    _.ua = document;
    _.Ha = _.ta.location;
    _.Ia = /\[native code\]/;
    _.Ka = function(a, c, f) {
        return a[c] = a[c] || f
    };
    _.r = function() {
        var a;
        if ((a = Object.create) && _.Ia.test(a)) a = a(null);
        else {
            a = {};
            for (var c in a) a[c] = void 0
        }
        return a
    };
    _.Qa = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    _.Sl = function(a, c) {
        a = a || {};
        for (var f in a) _.Qa(a, f) && (c[f] = a[f])
    };
    _.Ua = _.Ka(_.ta, "gapi", {});
    _.e = function(a, c, f) {
        var g = new RegExp("([#].*&|[#])" + c + "=([^&#]*)", "g");
        c = new RegExp("([?#].*&|[?#])" + c + "=([^&#]*)", "g");
        if (a = a && (g.exec(a) || c.exec(a))) try {
            f = decodeURIComponent(a[2])
        } catch (h) {}
        return f
    };
    _.Xa = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
    _.Za = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g");
    _.lc = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i");
    _.La = function(a, c, f) {
        _.ra(a, c, f, "add", "at")
    };
    _.ra = function(a, c, f, g, h) {
        if (a[g + "EventListener"]) a[g + "EventListener"](c, f, !1);
        else if (a[h + "tachEvent"]) a[h + "tachEvent"]("on" + c, f)
    };
    _.bb = _.Ka(_.ta, "___jsl", _.r());
    _.Ka(_.bb, "I", 0);
    _.Ka(_.bb, "hel", 10);
    var ya, za, Aa, Ba, Da, Ea, Hg;
    ya = function(a) {
        var c = window.___jsl = window.___jsl || {};
        c[a] = c[a] || [];
        return c[a]
    };
    za = function(a) {
        var c = window.___jsl = window.___jsl || {};
        c.cfg = !a && c.cfg || {};
        return c.cfg
    };
    Aa = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    };
    Ba = function(a, c, f) {
        if (c && "object" === typeof c)
            for (var g in c) !Object.prototype.hasOwnProperty.call(c, g) || f && "___goc" === g && "undefined" === typeof c[g] || (a[g] && c[g] && "object" === typeof a[g] && "object" === typeof c[g] && !Aa(a[g]) && !Aa(c[g]) ? Ba(a[g], c[g]) : c[g] && "object" === typeof c[g] ? (a[g] = Aa(c[g]) ? [] : {}, Ba(a[g], c[g])) : a[g] = c[g])
    };
    Da = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
            try {
                var c = window.JSON.parse(a)
            } catch (f) {}
            if ("object" === typeof c) return c;
            try {
                c = (new Function("return (" + a + "\n)"))()
            } catch (f) {}
            if ("object" === typeof c) return c;
            try {
                c = (new Function("return ({" + a + "\n})"))()
            } catch (f) {}
            return "object" === typeof c ? c : {}
        }
    };
    Ea = function(a, c) {
        var f = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (f = a.pop());
        Ba(f, c);
        a.push(f)
    };
    Hg = function(a) {
        za(!0);
        var c = window.___gcfg,
            f = ya("cu"),
            g = window.___gu;
        c && c !== g && (Ea(f, c), window.___gu = c);
        c = ya("cu");
        var h = document.scripts || document.getElementsByTagName("script") || [];
        g = [];
        var l = [];
        l.push.apply(l, ya("us"));
        for (var n = 0; n < h.length; ++n)
            for (var q = h[n], t = 0; t < l.length; ++t) q.src && 0 == q.src.indexOf(l[t]) && g.push(q);
        0 == g.length && 0 < h.length && h[h.length - 1].src && g.push(h[h.length - 1]);
        for (h = 0; h < g.length; ++h) g[h].getAttribute("gapi_processed") || (g[h].setAttribute("gapi_processed", !0), (l = g[h]) ? (n = l.nodeType, l = 3 == n || 4 == n ? l.nodeValue : l.textContent || l.innerText || l.innerHTML || "") : l = void 0, (l = Da(l)) && c.push(l));
        a && Ea(f, a);
        g = ya("cd");
        a = 0;
        for (c = g.length; a < c; ++a) Ba(za(), g[a], !0);
        g = ya("ci");
        a = 0;
        for (c = g.length; a < c; ++a) Ba(za(), g[a], !0);
        a = 0;
        for (c = f.length; a < c; ++a) Ba(za(), f[a], !0)
    };
    _.P = function(a, c) {
        var f = za();
        if (!a) return f;
        a = a.split("/");
        for (var g = 0, h = a.length; f && "object" === typeof f && g < h; ++g) f = f[a[g]];
        return g === a.length && void 0 !== f ? f : c
    };
    _.Fa = function(a, c) {
        var f;
        if ("string" === typeof a) {
            var g = f = {};
            a = a.split("/");
            for (var h = 0, l = a.length; h < l - 1; ++h) {
                var n = {};
                g = g[a[h]] = n
            }
            g[a[h]] = c
        } else f = a;
        Hg(f)
    };
    var Ga = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.Ka(_.bb, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    Ga && Ga();
    Hg();
    _.Mu("gapi.config.get", _.P);
    _.Mu("gapi.config.update", _.Fa);
    _.Gl = function(a, c) {
        for (var f = 1; f < arguments.length; f++) {
            var g = arguments[f];
            if (_.re(g)) {
                var h = a.length || 0,
                    l = g.length || 0;
                a.length = h + l;
                for (var n = 0; n < l; n++) a[h + n] = g[n]
            } else a.push(g)
        }
    };
    _.RE = function(a) {
        for (var c = {}, f = 0, g = 0; g < a.length;) {
            var h = a[g++];
            var l = h;
            l = _.Vg(l) ? "o" + _.oe(l) : (typeof l).charAt(0) + l;
            Object.prototype.hasOwnProperty.call(c, l) || (c[l] = !0, a[f++] = h)
        }
        a.length = f
    };
    _.Gt = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    _.Df = function(a, c) {
        var f = c || document;
        if (f.getElementsByClassName) a = f.getElementsByClassName(a)[0];
        else {
            f = document;
            var g = c || f;
            a = g.querySelectorAll && g.querySelector && a ? g.querySelector(a ? "." + a : "") : _.Cf(f, "*", a, c)[0] || null
        }
        return a || null
    };
    var Kd;
    Kd = window.console;
    _.kd = function(a) {
        Kd && Kd.log && Kd.log(a)
    };
    _.nH = function(a) {
        Kd && (Kd.error ? Kd.error(a) : Kd.log && Kd.log(a))
    };
    _.Hm = function(a) {
        Kd && (Kd.warn ? Kd.warn(a) : Kd.log && Kd.log(a))
    };
    _.ke = function() {};
    var Qe, af, aj, yu, Zi, mk, Iu, vl, xl, zD, jq, qt, Is, Js, AF, aH, DH, QL, SL, bN, aR, CR, DR, ES, KT, xU, pV, vW, KX, me, SE, qy, QA;
    aj = void 0;
    yu = function(a) {
        try {
            return _.D.JSON.parse.call(_.D.JSON, a)
        } catch (c) {
            return !1
        }
    };
    Zi = function(a) {
        return Object.prototype.toString.call(a)
    };
    mk = Zi(0);
    Iu = Zi(new Date(0));
    vl = Zi(!0);
    xl = Zi("");
    zD = Zi({});
    jq = Zi([]);
    qt = function(a, c) {
        if (c)
            for (var f = 0, g = c.length; f < g; ++f)
                if (a === c[f]) throw new TypeError("Converting circular structure to JSON");
        g = typeof a;
        if ("undefined" !== g) {
            f = Array.prototype.slice.call(c || [], 0);
            f[f.length] = a;
            c = [];
            var h = Zi(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (h !== jq || a.constructor !== Array && a.constructor !== Object) && (h !== zD || a.constructor !== Array && a.constructor !== Object) && h !== xl && h !== mk && h !== vl && h !== Iu)) return qt(a.toJSON.call(a), f);
            if (null == a) c[c.length] = "null";
            else if (h === mk) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), c[c.length] = String(a);
            else if (h === vl) c[c.length] = String(!!Number(a));
            else {
                if (h === Iu) return qt(a.toISOString.call(a), f);
                if (h === jq && Zi(a.length) === mk) {
                    c[c.length] = "[";
                    var l = 0;
                    for (g = Number(a.length) >> 0; l < g; ++l) l && (c[c.length] = ","), c[c.length] = qt(a[l], f) || "null";
                    c[c.length] = "]"
                } else if (h == xl && Zi(a.length) === mk) {
                    c[c.length] = '"';
                    l = 0;
                    for (f = Number(a.length) >> 0; l < f; ++l) g = String.prototype.charAt.call(a, l),
                        h = String.prototype.charCodeAt.call(a, l), c[c.length] = "\b" === g ? "\\b" : "\f" === g ? "\\f" : "\n" === g ? "\\n" : "\r" === g ? "\\r" : "\t" === g ? "\\t" : "\\" === g || '"' === g ? "\\" + g : 31 >= h ? "\\u" + (h + 65536).toString(16).substr(1) : 32 <= h && 65535 >= h ? g : "\ufffd";
                    c[c.length] = '"'
                } else if ("object" === g) {
                    c[c.length] = "{";
                    g = 0;
                    for (l in a) Object.prototype.hasOwnProperty.call(a, l) && (h = qt(a[l], f), void 0 !== h && (g++ && (c[c.length] = ","), c[c.length] = qt(l), c[c.length] = ":", c[c.length] = h));
                    c[c.length] = "}"
                } else return
            }
            return c.join("")
        }
    };
    Is = /[\0-\x07\x0b\x0e-\x1f]/;
    Js = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
    AF = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
    aH = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
    DH = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
    QL = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
    SL = /[ \t\n\r]+/g;
    bN = /[^"]:/;
    aR = /""/g;
    CR = /true|false|null/g;
    DR = /00/;
    ES = /[\{]([^0\}]|0[^:])/;
    KT = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
    xU = /[^\[,:][\[\{]/;
    pV = /^(\{|\}|\[|\]|,|:|0)+/;
    vW = /\u2028/g;
    KX = /\u2029/g;
    me = function(a) {
        a = String(a);
        if (Is.test(a) || Js.test(a) || AF.test(a) || aH.test(a)) return !1;
        var c = a.replace(DH, '""');
        c = c.replace(QL, "0");
        c = c.replace(SL, "");
        if (bN.test(c)) return !1;
        c = c.replace(aR, "0");
        c = c.replace(CR, "0");
        if (DR.test(c) || ES.test(c) || KT.test(c) || xU.test(c) || !c || (c = c.replace(pV, ""))) return !1;
        a = a.replace(vW, "\\u2028").replace(KX, "\\u2029");
        c = void 0;
        try {
            c = aj ? [yu(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (f) {
            return !1
        }
        return c && 1 === c.length ? c[0] : !1
    };
    SE = function() {
        var a = ((_.D.document || {}).scripts || []).length;
        if ((void 0 === Qe || void 0 === aj || af !== a) && -1 !== af) {
            Qe = aj = !1;
            af = -1;
            try {
                try {
                    aj = !!_.D.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.D.JSON.stringify.call(_.D.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === yu("true") && 3 === yu('[{"a":3}]')[0].a
                } catch (c) {}
                Qe = aj && !yu("[00]") && !yu('"\u0007"') && !yu('"\\0"') && !yu('"\\v"')
            } finally {
                af = a
            }
        }
    };
    _.of = function(a) {
        if (-1 === af) return !1;
        SE();
        return (Qe ? yu : me)(a)
    };
    _.mf = function(a) {
        if (-1 !== af) return SE(), aj ? _.D.JSON.stringify.call(_.D.JSON, a) : qt(a)
    };
    qy = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString();
    QA = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
    };
    Date.prototype.toISOString = qy ? QA : Date.prototype.toISOString;
    _.Qw = function() {
        return _.pf("Firefox") || _.pf("FxiOS")
    };
    _.DY = function() {
        return (_.pf("Chrome") || _.pf("CriOS")) && !_.pf("Edge")
    };
    _.GY = function() {
        return _.pf("Safari") && !(_.DY() || _.pf("Coast") || _.$e() || _.pf("Edge") || _.pf("Edg/") || _.pf("OPR") || _.Qw() || _.pf("Silk") || _.pf("Android"))
    };
    _.BM = function() {
        return _.pf("Android") && !(_.DY() || _.Qw() || _.$e() || _.pf("Silk"))
    };
    _.ux = _.Qw();
    _.mN = _.mZ() || _.pf("iPod");
    _.nN = _.pf("iPad");
    _.oN = _.BM();
    _.tx = _.DY();
    _.vx = _.GY() && !_.wk();
    var XH;
    XH = {};
    _.ch = null;
    _.Bv = _.df || _.ef && !_.vx || _.cf || !_.vx && !_.W && "function" == typeof _.D.atob;
    _.aB = function(a, c) {
        void 0 === c && (c = 0);
        _.vi();
        c = XH[c];
        for (var f = [], g = 0; g < a.length; g += 3) {
            var h = a[g],
                l = g + 1 < a.length,
                n = l ? a[g + 1] : 0,
                q = g + 2 < a.length,
                t = q ? a[g + 2] : 0,
                v = h >> 2;
            h = (h & 3) << 4 | n >> 4;
            n = (n & 15) << 2 | t >> 6;
            t &= 63;
            q || (t = 64, l || (n = 64));
            f.push(c[v], c[h], c[n] || "", c[t] || "")
        }
        return f.join("")
    };
    _.vi = function() {
        if (!_.ch) {
            _.ch = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), c = ["+/=", "+/", "-_=", "-_.", "-_"], f = 0; 5 > f; f++) {
                var g = a.concat(c[f].split(""));
                XH[f] = g;
                for (var h = 0; h < g.length; h++) {
                    var l = g[h];
                    void 0 === _.ch[l] && (_.ch[l] = h)
                }
            }
        }
    };
    _.Hb = {};
    _.au = function(a) {
        return _.Hb[a || "token"] || null
    };
    var wb = function() {
        this.fY = -1
    };
    _.xb = function() {
        this.fY = 64;
        this.Ej = [];
        this.i6 = [];
        this.uda = [];
        this.V4 = [];
        this.V4[0] = 128;
        for (var a = 1; a < this.fY; ++a) this.V4[a] = 0;
        this.G5 = this.b0 = 0;
        this.reset()
    };
    _.J(_.xb, wb);
    _.xb.prototype.reset = function() {
        this.Ej[0] = 1732584193;
        this.Ej[1] = 4023233417;
        this.Ej[2] = 2562383102;
        this.Ej[3] = 271733878;
        this.Ej[4] = 3285377520;
        this.G5 = this.b0 = 0
    };
    var Cm = function(a, c, f) {
        f || (f = 0);
        var g = a.uda;
        if ("string" === typeof c)
            for (var h = 0; 16 > h; h++) g[h] = c.charCodeAt(f) << 24 | c.charCodeAt(f + 1) << 16 | c.charCodeAt(f + 2) << 8 | c.charCodeAt(f + 3), f += 4;
        else
            for (h = 0; 16 > h; h++) g[h] = c[f] << 24 | c[f + 1] << 16 | c[f + 2] << 8 | c[f + 3], f += 4;
        for (h = 16; 80 > h; h++) {
            var l = g[h - 3] ^ g[h - 8] ^ g[h - 14] ^ g[h - 16];
            g[h] = (l << 1 | l >>> 31) & 4294967295
        }
        c = a.Ej[0];
        f = a.Ej[1];
        var n = a.Ej[2],
            q = a.Ej[3],
            t = a.Ej[4];
        for (h = 0; 80 > h; h++) {
            if (40 > h)
                if (20 > h) {
                    l = q ^ f & (n ^ q);
                    var v = 1518500249
                } else l = f ^ n ^ q, v = 1859775393;
            else 60 > h ? (l = f & n | q & (f | n), v = 2400959708) : (l = f ^ n ^ q, v = 3395469782);
            l = (c << 5 | c >>> 27) + l + t + v + g[h] & 4294967295;
            t = q;
            q = n;
            n = (f << 30 | f >>> 2) & 4294967295;
            f = c;
            c = l
        }
        a.Ej[0] = a.Ej[0] + c & 4294967295;
        a.Ej[1] = a.Ej[1] + f & 4294967295;
        a.Ej[2] = a.Ej[2] + n & 4294967295;
        a.Ej[3] = a.Ej[3] + q & 4294967295;
        a.Ej[4] = a.Ej[4] + t & 4294967295
    };
    _.xb.prototype.update = function(a, c) {
        if (null != a) {
            void 0 === c && (c = a.length);
            for (var f = c - this.fY, g = 0, h = this.i6, l = this.b0; g < c;) {
                if (0 == l)
                    for (; g <= f;) Cm(this, a, g), g += this.fY;
                if ("string" === typeof a)
                    for (; g < c;) {
                        if (h[l] = a.charCodeAt(g), ++l, ++g, l == this.fY) {
                            Cm(this, h);
                            l = 0;
                            break
                        }
                    } else
                        for (; g < c;)
                            if (h[l] = a[g], ++l, ++g, l == this.fY) {
                                Cm(this, h);
                                l = 0;
                                break
                            }
            }
            this.b0 = l;
            this.G5 += c
        }
    };
    _.xb.prototype.digest = function() {
        var a = [],
            c = 8 * this.G5;
        56 > this.b0 ? this.update(this.V4, 56 - this.b0) : this.update(this.V4, this.fY - (this.b0 - 56));
        for (var f = this.fY - 1; 56 <= f; f--) this.i6[f] = c & 255, c /= 256;
        Cm(this, this.i6);
        for (f = c = 0; 5 > f; f++)
            for (var g = 24; 0 <= g; g -= 8) a[c] = this.Ej[f] >> g & 255, ++c;
        return a
    };
    var dp;
    _.bp = function(a) {
        this.wc = a || {
            cookie: ""
        }
    };
    _.k = _.bp.prototype;
    _.k.isEnabled = function() {
        return navigator.cookieEnabled
    };
    _.k.set = function(a, c, f, g, h, l) {
        if ("object" === typeof f) {
            var n = f.Lh;
            l = f.secure;
            h = f.domain;
            g = f.path;
            f = f.Fr
        }
        if (/[;=\s]/.test(a)) throw Error("O`" + a);
        if (/[;\r\n]/.test(c)) throw Error("aa`" + c);
        void 0 === f && (f = -1);
        h = h ? ";domain=" + h : "";
        g = g ? ";path=" + g : "";
        l = l ? ";secure" : "";
        f = 0 > f ? "" : 0 == f ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.pa)() + 1E3 * f)).toUTCString();
        this.wc.cookie = a + "=" + c + h + g + f + l + (null != n ? ";samesite=" + n : "")
    };
    _.k.get = function(a, c) {
        for (var f = a + "=", g = (this.wc.cookie || "").split(";"), h = 0, l; h < g.length; h++) {
            l = (0, _.cc)(g[h]);
            if (0 == l.lastIndexOf(f, 0)) return l.substr(f.length);
            if (l == a) return ""
        }
        return c
    };
    _.k.remove = function(a, c, f) {
        var g = this.YR(a);
        this.set(a, "", 0, c, f);
        return g
    };
    _.k.$b = function() {
        return dp(this).keys
    };
    _.k.Va = function() {
        return dp(this).values
    };
    _.k.isEmpty = function() {
        return !this.wc.cookie
    };
    _.k.Da = function() {
        return this.wc.cookie ? (this.wc.cookie || "").split(";").length : 0
    };
    _.k.YR = function(a) {
        return void 0 !== this.get(a)
    };
    _.k.zn = function(a) {
        for (var c = dp(this).values, f = 0; f < c.length; f++)
            if (c[f] == a) return !0;
        return !1
    };
    _.k.clear = function() {
        for (var a = dp(this).keys, c = a.length - 1; 0 <= c; c--) this.remove(a[c])
    };
    dp = function(a) {
        a = (a.wc.cookie || "").split(";");
        for (var c = [], f = [], g, h, l = 0; l < a.length; l++) h = (0, _.cc)(a[l]), g = h.indexOf("="), -1 == g ? (c.push(""), f.push(h)) : (c.push(h.substring(0, g)), f.push(h.substring(g + 1)));
        return {
            keys: c,
            values: f
        }
    };
    _.hp = new _.bp("undefined" == typeof document ? null : document);
    _.ma = function(a, c) {
        var f = Array.prototype.slice.call(arguments, 1);
        return function() {
            var g = f.slice();
            g.push.apply(g, arguments);
            return a.apply(this, g)
        }
    };
    _.ue = function(a, c) {
        a: {
            for (var f = a.length, g = "string" === typeof a ? a.split("") : a, h = 0; h < f; h++)
                if (h in g && c.call(void 0, g[h], h, a)) {
                    c = h;
                    break a
                }
            c = -1
        }
        return 0 > c ? null : "string" === typeof a ? a.charAt(c) : a[c]
    };
    _.ih = [];
    _.kh = [];
    _.jh = !1;
    _.hh = function(a) {
        _.ih[_.ih.length] = a;
        if (_.jh)
            for (var c = 0; c < _.kh.length; c++) a((0, _.H)(_.kh[c].wrap, _.kh[c]))
    };
    var jk, kk, Ht, hD;
    jk = null;
    kk = /^[\w+/_-]+[=]{0,2}$/;
    Ht = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && kk.test(a) ? a : ""
    };
    _.Qt = function(a) {
        if (a && a != _.D) return Ht(a.document);
        null === jk && (jk = Ht(_.D.document));
        return jk
    };
    _.yY = function(a, c) {
        for (var f in a)
            if (!(f in c) || a[f] !== c[f]) return !1;
        for (var g in c)
            if (!(g in a)) return !1;
        return !0
    };
    _.rf = function(a) {
        var c = {},
            f;
        for (f in a) c[f] = a[f];
        return c
    };
    _.vC = function(a) {
        return a
    };
    _.jO = function(a, c) {
        a.src = c.qh ? c.qh : _.wx(c)
    };
    _.fv = function(a, c) {
        a.src = _.IB(c);
        (c = _.Qt()) && a.setAttribute("nonce", c)
    };
    _.cu = function(a) {
        var c = window.location;
        a = a instanceof _.su ? a : _.Lm(a);
        c.href = _.oG(a)
    };
    hD = function(a, c) {
        this.cea = a;
        this.Cha = c;
        this.M4 = 0;
        this.p4 = null
    };
    hD.prototype.get = function() {
        if (0 < this.M4) {
            this.M4--;
            var a = this.p4;
            this.p4 = a.next;
            a.next = null
        } else a = this.cea();
        return a
    };
    hD.prototype.put = function(a) {
        this.Cha(a);
        100 > this.M4 && (this.M4++, a.next = this.p4, this.p4 = a)
    };
    var tp, $o, ep, Yo;
    tp = function(a) {
        _.D.setTimeout(function() {
            throw a;
        }, 0)
    };
    _.qk = function(a) {
        a = Yo(a);
        !_.vd(_.D.setImmediate) || _.D.Window && _.D.Window.prototype && !_.pf("Edge") && _.D.Window.prototype.setImmediate == _.D.setImmediate ? ($o || ($o = ep()), $o(a)) : _.D.setImmediate(a)
    };
    ep = function() {
        var a = _.D.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.pf("Presto") && (a = function() {
            var h = _.Br("IFRAME");
            h.style.display = "none";
            _.jO(h, _.nq(_.Re));
            document.documentElement.appendChild(h);
            var l = h.contentWindow;
            h = l.document;
            h.open();
            h.write(_.OG(_.RG));
            h.close();
            var n = "callImmediate" + Math.random(),
                q = "file:" == l.location.protocol ? "*" : l.location.protocol + "//" + l.location.host;
            h = (0, _.H)(function(t) {
                if (("*" == q || t.origin == q) && t.data == n) this.port1.onmessage()
            }, this);
            l.addEventListener("message", h, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    l.postMessage(n, q)
                }
            }
        });
        if ("undefined" !== typeof a && !_.B()) {
            var c = new a,
                f = {},
                g = f;
            c.port1.onmessage = function() {
                if (void 0 !== f.next) {
                    f = f.next;
                    var h = f.cb;
                    f.cb = null;
                    h()
                }
            };
            return function(h) {
                g.next = {
                    cb: h
                };
                g = g.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in _.Br("SCRIPT") ? function(h) {
            var l = _.Br("SCRIPT");
            l.onreadystatechange = function() {
                l.onreadystatechange = null;
                l.parentNode.removeChild(l);
                l = null;
                h();
                h = null
            };
            document.documentElement.appendChild(l)
        } : function(h) {
            _.D.setTimeout(h, 0)
        }
    };
    Yo = _.vC;
    _.hh(function(a) {
        Yo = a
    });
    var LD = function() {
            this.N5 = this.Y0 = null
        },
        xE = new hD(function() {
            return new uE
        }, function(a) {
            a.reset()
        });
    LD.prototype.add = function(a, c) {
        var f = xE.get();
        f.set(a, c);
        this.N5 ? this.N5.next = f : this.Y0 = f;
        this.N5 = f
    };
    LD.prototype.remove = function() {
        var a = null;
        this.Y0 && (a = this.Y0, this.Y0 = this.Y0.next, this.Y0 || (this.N5 = null), a.next = null);
        return a
    };
    var uE = function() {
        this.next = this.scope = this.fn = null
    };
    uE.prototype.set = function(a, c) {
        this.fn = a;
        this.scope = c;
        this.next = null
    };
    uE.prototype.reset = function() {
        this.next = this.scope = this.fn = null
    };
    var um, Pm, up, Lp, Ap;
    _.Qp = function(a, c) {
        um || Pm();
        up || (um(), up = !0);
        Lp.add(a, c)
    };
    Pm = function() {
        if (_.D.Promise && _.D.Promise.resolve) {
            var a = _.D.Promise.resolve(void 0);
            um = function() {
                a.then(Ap)
            }
        } else um = function() {
            _.qk(Ap)
        }
    };
    up = !1;
    Lp = new LD;
    Ap = function() {
        for (var a; a = Lp.remove();) {
            try {
                a.fn.call(a.scope)
            } catch (c) {
                tp(c)
            }
            xE.put(a)
        }
        up = !1
    };
    _.Rp = function(a) {
        a.prototype.$goog_Thenable = !0
    };
    _.Wp = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (c) {
            return !1
        }
    };
    var Xq, Bs, Mq, uq;
    _.C = function(a, c) {
        this.ub = 0;
        this.rW = void 0;
        this.B_ = this.iY = this.Vb = null;
        this.j4 = this.Q6 = !1;
        if (a != _.gh) try {
            var f = this;
            a.call(c, function(g) {
                f.fl(2, g)
            }, function(g) {
                f.fl(3, g)
            })
        } catch (g) {
            this.fl(3, g)
        }
    };
    Xq = function() {
        this.next = this.context = this.o0 = this.uJ = this.xZ = null;
        this.b1 = !1
    };
    Xq.prototype.reset = function() {
        this.context = this.o0 = this.uJ = this.xZ = null;
        this.b1 = !1
    };
    Bs = new hD(function() {
        return new Xq
    }, function(a) {
        a.reset()
    });
    _.Dt = function(a, c, f) {
        var g = Bs.get();
        g.uJ = a;
        g.o0 = c;
        g.context = f;
        return g
    };
    _.Nu = function(a) {
        if (a instanceof _.C) return a;
        var c = new _.C(_.gh);
        c.fl(2, a);
        return c
    };
    _.$H = function(a) {
        return new _.C(function(c, f) {
            f(a)
        })
    };
    _.dq = function(a, c, f) {
        Vp(a, c, f, null) || _.Qp(_.ma(c, a))
    };
    _.Pr = function(a) {
        return new _.C(function(c, f) {
            var g = a.length,
                h = [];
            if (g)
                for (var l = function(v, w) {
                        g--;
                        h[v] = w;
                        0 == g && c(h)
                    }, n = function(v) {
                        f(v)
                    }, q = 0, t; q < a.length; q++) t = a[q], _.dq(t, _.ma(l, q), n);
            else c(h)
        })
    };
    _.Su = function() {
        var a, c, f = new _.C(function(g, h) {
            a = g;
            c = h
        });
        return new Bp(f, a, c)
    };
    _.C.prototype.then = function(a, c, f) {
        return uq(this, _.vd(a) ? a : null, _.vd(c) ? c : null, f)
    };
    _.Rp(_.C);
    _.C.prototype.r9 = function(a, c) {
        return uq(this, null, a, c)
    };
    _.C.prototype.cancel = function(a) {
        if (0 == this.ub) {
            var c = new tq(a);
            _.Qp(function() {
                Mq(this, c)
            }, this)
        }
    };
    Mq = function(a, c) {
        if (0 == a.ub)
            if (a.Vb) {
                var f = a.Vb;
                if (f.iY) {
                    for (var g = 0, h = null, l = null, n = f.iY; n && (n.b1 || (g++, n.xZ == a && (h = n), !(h && 1 < g))); n = n.next) h || (l = n);
                    h && (0 == f.ub && 1 == g ? Mq(f, c) : (l ? (g = l, g.next == f.B_ && (f.B_ = g), g.next = g.next.next) : ju(f), Wq(f, h, 3, c)))
                }
                a.Vb = null
            } else a.fl(3, c)
    };
    _.lr = function(a, c) {
        a.iY || 2 != a.ub && 3 != a.ub || er(a);
        a.B_ ? a.B_.next = c : a.iY = c;
        a.B_ = c
    };
    uq = function(a, c, f, g) {
        var h = _.Dt(null, null, null);
        h.xZ = new _.C(function(l, n) {
            h.uJ = c ? function(q) {
                try {
                    var t = c.call(g, q);
                    l(t)
                } catch (v) {
                    n(v)
                }
            } : l;
            h.o0 = f ? function(q) {
                try {
                    var t = f.call(g, q);
                    void 0 === t && q instanceof tq ? n(q) : l(t)
                } catch (v) {
                    n(v)
                }
            } : n
        });
        h.xZ.Vb = a;
        _.lr(a, h);
        return h.xZ
    };
    _.C.prototype.ria = function(a) {
        this.ub = 0;
        this.fl(2, a)
    };
    _.C.prototype.sia = function(a) {
        this.ub = 0;
        this.fl(3, a)
    };
    _.C.prototype.fl = function(a, c) {
        0 == this.ub && (this === c && (a = 3, c = new TypeError("Promise cannot resolve to itself")), this.ub = 1, Vp(c, this.ria, this.sia, this) || (this.rW = c, this.ub = a, this.Vb = null, er(this), 3 != a || c instanceof tq || wq(this, c)))
    };
    var Vp = function(a, c, f, g) {
            if (a instanceof _.C) return _.lr(a, _.Dt(c || _.gh, f || null, g)), !0;
            if (_.Wp(a)) return a.then(c, f, g), !0;
            if (_.Vg(a)) try {
                var h = a.then;
                if (_.vd(h)) return bq(a, h, c, f, g), !0
            } catch (l) {
                return f.call(g, l), !0
            }
            return !1
        },
        bq = function(a, c, f, g, h) {
            var l = !1,
                n = function(t) {
                    l || (l = !0, f.call(h, t))
                },
                q = function(t) {
                    l || (l = !0, g.call(h, t))
                };
            try {
                c.call(a, n, q)
            } catch (t) {
                q(t)
            }
        },
        er = function(a) {
            a.Q6 || (a.Q6 = !0, _.Qp(a.uea, a))
        },
        ju = function(a) {
            var c = null;
            a.iY && (c = a.iY, a.iY = c.next, c.next = null);
            a.iY || (a.B_ = null);
            return c
        };
    _.C.prototype.uea = function() {
        for (var a; a = ju(this);) Wq(this, a, this.ub, this.rW);
        this.Q6 = !1
    };
    var Wq = function(a, c, f, g) {
            if (3 == f && c.o0 && !c.b1)
                for (; a && a.j4; a = a.Vb) a.j4 = !1;
            if (c.xZ) c.xZ.Vb = null, xs(c, f, g);
            else try {
                c.b1 ? c.uJ.call(c.context) : xs(c, f, g)
            } catch (h) {
                nr.call(null, h)
            }
            Bs.put(c)
        },
        xs = function(a, c, f) {
            2 == c ? a.uJ.call(a.context, f) : a.o0 && a.o0.call(a.context, f)
        },
        wq = function(a, c) {
            a.j4 = !0;
            _.Qp(function() {
                a.j4 && nr.call(null, c)
            })
        },
        nr = tp,
        tq = function(a) {
            _.se.call(this, a)
        };
    _.J(tq, _.se);
    tq.prototype.name = "cancel";
    var Bp = function(a, c, f) {
        this.promise = a;
        this.resolve = c;
        this.reject = f
    };
    var lo;
    _.fh = function(a, c) {
        a = a.split(".");
        c = c || _.D;
        for (var f = 0; f < a.length; f++)
            if (c = c[a[f]], null == c) return null;
        return c
    };
    _.xe = function(a, c) {
        c = (0, _.we)(a, c);
        var f;
        (f = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return f
    };
    lo = function(a, c) {
        for (var f in a)
            if (c.call(void 0, a[f], f, a)) return !0;
        return !1
    };
    _.hi = function(a, c) {
        for (var f in a)
            if (a[f] == c) return !0;
        return !1
    };
    _.dh = function() {
        this.Oj = this.Oj;
        this.XZ = this.XZ
    };
    _.dh.prototype.Oj = !1;
    _.dh.prototype.Ma = function() {
        return this.Oj
    };
    _.dh.prototype.U = function() {
        this.Oj || (this.Oj = !0, this.wj())
    };
    _.pD = function(a, c) {
        _.Yi(a, _.ma(_.eh, c))
    };
    _.Yi = function(a, c) {
        a.Oj ? c() : (a.XZ || (a.XZ = []), a.XZ.push(c))
    };
    _.dh.prototype.wj = function() {
        if (this.XZ)
            for (; this.XZ.length;) this.XZ.shift()()
    };
    _.eh = function(a) {
        a && "function" == typeof a.U && a.U()
    };
    _.mh = function(a, c) {
        this.type = a;
        this.currentTarget = this.target = c;
        this.defaultPrevented = this.Ad = !1;
        this.Tg = !0
    };
    _.mh.prototype.stopPropagation = function() {
        this.Ad = !0
    };
    _.mh.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Tg = !1
    };
    var yh, Jh;
    _.Ih = !_.W || _.gq(9);
    yh = !_.W || _.gq(9);
    Jh = _.W && !_.sl("9");
    !_.ef || _.sl("528");
    _.df && _.sl("1.9b") || _.W && _.sl("8") || _.cf && _.sl("9.5") || _.ef && _.sl("528");
    _.df && !_.sl("8") || _.W && _.sl("9");
    var yn = function() {
        if (!_.D.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            c = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            _.D.addEventListener("test", _.gh, c), _.D.removeEventListener("test", _.gh, c)
        } catch (f) {}
        return a
    }();
    _.AO = _.ef ? "webkitTransitionEnd" : _.cf ? "otransitionend" : "transitionend";
    _.nh = function(a, c) {
        _.mh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.TW = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.fW = null;
        a && this.init(a, c)
    };
    _.J(_.nh, _.mh);
    var BH = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    _.nh.prototype.init = function(a, c) {
        var f = this.type = a.type,
            g = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = c;
        (c = a.relatedTarget) ? _.df && (_.Eo(c, "nodeName") || (c = null)): "mouseover" == f ? c = a.fromElement : "mouseout" == f && (c = a.toElement);
        this.relatedTarget = c;
        g ? (this.clientX = void 0 !== g.clientX ? g.clientX : g.pageX, this.clientY = void 0 !== g.clientY ? g.clientY : g.pageY, this.screenX = g.screenX || 0, this.screenY = g.screenY || 0) : (this.offsetX = _.ef || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = _.ef || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == f ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.TW = _.Gg ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : BH[a.pointerType] || "";
        this.state = a.state;
        this.fW = a;
        a.defaultPrevented && this.preventDefault()
    };
    _.nh.prototype.stopPropagation = function() {
        _.nh.T.stopPropagation.call(this);
        this.fW.stopPropagation ? this.fW.stopPropagation() : this.fW.cancelBubble = !0
    };
    _.nh.prototype.preventDefault = function() {
        _.nh.T.preventDefault.call(this);
        var a = this.fW;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Jh) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (c) {}
    };
    var Lh;
    _.cC = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.wB = function(a) {
        return !(!a || !a[_.cC])
    };
    Lh = 0;
    var oh = function(a, c, f, g, h) {
            this.listener = a;
            this.f5 = null;
            this.src = c;
            this.type = f;
            this.capture = !!g;
            this.Tc = h;
            this.key = ++Lh;
            this.gR = this.If = !1
        },
        hs = function(a) {
            a.gR = !0;
            a.listener = null;
            a.f5 = null;
            a.src = null;
            a.Tc = null
        };
    _.ts = function(a) {
        this.src = a;
        this.Wq = {};
        this.i3 = 0
    };
    _.ts.prototype.add = function(a, c, f, g, h) {
        var l = a.toString();
        a = this.Wq[l];
        a || (a = this.Wq[l] = [], this.i3++);
        var n = zs(a, c, g, h); - 1 < n ? (c = a[n], f || (c.If = !1)) : (c = new oh(c, this.src, l, !!g, h), c.If = f, a.push(c));
        return c
    };
    _.ts.prototype.remove = function(a, c, f, g) {
        a = a.toString();
        if (!(a in this.Wq)) return !1;
        var h = this.Wq[a];
        c = zs(h, c, f, g);
        return -1 < c ? (hs(h[c]), Array.prototype.splice.call(h, c, 1), 0 == h.length && (delete this.Wq[a], this.i3--), !0) : !1
    };
    _.et = function(a, c) {
        var f = c.type;
        if (!(f in a.Wq)) return !1;
        var g = _.xe(a.Wq[f], c);
        g && (hs(c), 0 == a.Wq[f].length && (delete a.Wq[f], a.i3--));
        return g
    };
    _.ts.prototype.removeAll = function(a) {
        a = a && a.toString();
        var c = 0,
            f;
        for (f in this.Wq)
            if (!a || f == a) {
                for (var g = this.Wq[f], h = 0; h < g.length; h++) ++c, hs(g[h]);
                delete this.Wq[f];
                this.i3--
            }
        return c
    };
    _.ts.prototype.Q_ = function(a, c, f, g) {
        a = this.Wq[a.toString()];
        var h = -1;
        a && (h = zs(a, c, f, g));
        return -1 < h ? a[h] : null
    };
    _.ts.prototype.hasListener = function(a, c) {
        var f = void 0 !== a,
            g = f ? a.toString() : "",
            h = void 0 !== c;
        return lo(this.Wq, function(l) {
            for (var n = 0; n < l.length; ++n)
                if (!(f && l[n].type != g || h && l[n].capture != c)) return !0;
            return !1
        })
    };
    var zs = function(a, c, f, g) {
        for (var h = 0; h < a.length; ++h) {
            var l = a[h];
            if (!l.gR && l.listener == c && l.capture == !!f && l.Tc == g) return h
        }
        return -1
    };
    var lt, vh, st, qh, th, Gk, Fh, Gh, xh, lC;
    lt = "closure_lm_" + (1E6 * Math.random() | 0);
    vh = {};
    st = 0;
    _.ph = function(a, c, f, g, h) {
        if (g && g.once) return _.zh(a, c, f, g, h);
        if (_.ea(c)) {
            for (var l = 0; l < c.length; l++) _.ph(a, c[l], f, g, h);
            return null
        }
        f = _.tl(f);
        return _.wB(a) ? a.Ei(c, f, _.Vg(g) ? !!g.capture : !!g, h) : qh(a, c, f, !1, g, h)
    };
    qh = function(a, c, f, g, h, l) {
        if (!c) throw Error("u");
        var n = _.Vg(h) ? !!h.capture : !!h,
            q = _.zt(a);
        q || (a[lt] = q = new _.ts(a));
        f = q.add(c, f, g, n, l);
        if (f.f5) return f;
        g = th();
        f.f5 = g;
        g.src = a;
        g.listener = f;
        if (a.addEventListener) yn || (h = n), void 0 === h && (h = !1), a.addEventListener(c.toString(), g, h);
        else if (a.attachEvent) a.attachEvent(Gk(c.toString()), g);
        else if (a.addListener && a.removeListener) a.addListener(g);
        else throw Error("c");
        st++;
        return f
    };
    th = function() {
        var a = xh,
            c = yh ? function(f) {
                return a.call(c.src, c.listener, f)
            } : function(f) {
                f = a.call(c.src, c.listener, f);
                if (!f) return f
            };
        return c
    };
    _.zh = function(a, c, f, g, h) {
        if (_.ea(c)) {
            for (var l = 0; l < c.length; l++) _.zh(a, c[l], f, g, h);
            return null
        }
        f = _.tl(f);
        return _.wB(a) ? a.bZ(c, f, _.Vg(g) ? !!g.capture : !!g, h) : qh(a, c, f, !0, g, h)
    };
    _.Ch = function(a) {
        if ("number" === typeof a || !a || a.gR) return !1;
        var c = a.src;
        if (_.wB(c)) return c.PG(a);
        var f = a.type,
            g = a.f5;
        c.removeEventListener ? c.removeEventListener(f, g, a.capture) : c.detachEvent ? c.detachEvent(Gk(f), g) : c.addListener && c.removeListener && c.removeListener(g);
        st--;
        (f = _.zt(c)) ? (_.et(f, a), 0 == f.i3 && (f.src = null, c[lt] = null)) : hs(a);
        return !0
    };
    Gk = function(a) {
        return a in vh ? vh[a] : vh[a] = "on" + a
    };
    Fh = function(a, c, f, g) {
        var h = !0;
        if (a = _.zt(a))
            if (c = a.Wq[c.toString()])
                for (c = c.concat(), a = 0; a < c.length; a++) {
                    var l = c[a];
                    l && l.capture == f && !l.gR && (l = Gh(l, g), h = h && !1 !== l)
                }
            return h
    };
    Gh = function(a, c) {
        var f = a.listener,
            g = a.Tc || a.src;
        a.If && _.Ch(a);
        return f.call(g, c)
    };
    xh = function(a, c) {
        if (a.gR) return !0;
        if (!yh) {
            var f = c || _.fh("window.event");
            c = new _.nh(f, this);
            var g = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a: {
                    var h = !1;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (n) {
                        h = !0
                    }
                    if (h || void 0 == f.returnValue) f.returnValue = !0
                }
                f = [];
                for (h = c.currentTarget; h; h = h.parentNode) f.push(h);a = a.type;
                for (h = f.length - 1; !c.Ad && 0 <= h; h--) {
                    c.currentTarget = f[h];
                    var l = Fh(f[h], a, !0, c);
                    g = g && l
                }
                for (h = 0; !c.Ad && h < f.length; h++) c.currentTarget = f[h],
                l = Fh(f[h], a, !1, c),
                g = g && l
            }
            return g
        }
        return Gh(a, new _.nh(c, this))
    };
    _.zt = function(a) {
        a = a[lt];
        return a instanceof _.ts ? a : null
    };
    lC = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.tl = function(a) {
        if (_.vd(a)) return a;
        a[lC] || (a[lC] = function(c) {
            return a.handleEvent(c)
        });
        return a[lC]
    };
    _.hh(function(a) {
        xh = a(xh)
    });
    _.oL = function(a, c) {
        a.prototype = (0, _.jb)(c.prototype);
        a.prototype.constructor = a;
        if (_.fe)(0, _.fe)(a, c);
        else
            for (var f in c)
                if ("prototype" != f)
                    if (Object.defineProperties) {
                        var g = Object.getOwnPropertyDescriptor(c, f);
                        g && Object.defineProperty(a, f, g)
                    } else a[f] = c[f];
        a.T = c.prototype
    };
    _.Up = function(a) {
        a.Tl = void 0;
        a.ma = function() {
            return a.Tl ? a.Tl : a.Tl = new a
        }
    };
    _.hT = function(a, c) {
        var f = a.length - c.length;
        return 0 <= f && a.indexOf(c, f) == f
    };
    _.Og = function(a) {
        for (var c in a) return !1;
        return !0
    };
    _.Ah = function(a, c, f, g, h) {
        if (_.ea(c))
            for (var l = 0; l < c.length; l++) _.Ah(a, c[l], f, g, h);
        else g = _.Vg(g) ? !!g.capture : !!g, f = _.tl(f), _.wB(a) ? a.nx(c, f, g, h) : a && (a = _.zt(a)) && (c = a.Q_(c, f, g, h)) && _.Ch(c)
    };
    _.Hh = function() {
        _.dh.call(this);
        this.zY = new _.ts(this);
        this.vda = this;
        this.z8 = null
    };
    _.J(_.Hh, _.dh);
    _.Hh.prototype[_.cC] = !0;
    _.k = _.Hh.prototype;
    _.k.KR = function() {
        return this.z8
    };
    _.k.tj = _.b(18);
    _.k.addEventListener = function(a, c, f, g) {
        _.ph(this, a, c, f, g)
    };
    _.k.removeEventListener = function(a, c, f, g) {
        _.Ah(this, a, c, f, g)
    };
    _.k.dispatchEvent = function(a) {
        var c, f = this.KR();
        if (f)
            for (c = []; f; f = f.KR()) c.push(f);
        f = this.vda;
        var g = a.type || a;
        if ("string" === typeof a) a = new _.mh(a, f);
        else if (a instanceof _.mh) a.target = a.target || f;
        else {
            var h = a;
            a = new _.mh(g, f);
            _.sf(a, h)
        }
        h = !0;
        if (c)
            for (var l = c.length - 1; !a.Ad && 0 <= l; l--) {
                var n = a.currentTarget = c[l];
                h = n.ef(g, !0, a) && h
            }
        a.Ad || (n = a.currentTarget = f, h = n.ef(g, !0, a) && h, a.Ad || (h = n.ef(g, !1, a) && h));
        if (c)
            for (l = 0; !a.Ad && l < c.length; l++) n = a.currentTarget = c[l], h = n.ef(g, !1, a) && h;
        return h
    };
    _.k.wj = function() {
        _.Hh.T.wj.call(this);
        this.LI();
        this.z8 = null
    };
    _.k.Ei = function(a, c, f, g) {
        return this.zY.add(String(a), c, !1, f, g)
    };
    _.k.bZ = function(a, c, f, g) {
        return this.zY.add(String(a), c, !0, f, g)
    };
    _.k.nx = function(a, c, f, g) {
        return this.zY.remove(String(a), c, f, g)
    };
    _.k.PG = function(a) {
        return _.et(this.zY, a)
    };
    _.k.LI = function(a) {
        this.zY && this.zY.removeAll(a)
    };
    _.k.ef = function(a, c, f) {
        a = this.zY.Wq[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var g = !0, h = 0; h < a.length; ++h) {
            var l = a[h];
            if (l && !l.gR && l.capture == c) {
                var n = l.listener,
                    q = l.Tc || l.src;
                l.If && this.PG(l);
                g = !1 !== n.call(q, f) && g
            }
        }
        return g && 0 != f.Tg
    };
    _.k.Q_ = function(a, c, f, g) {
        return this.zY.Q_(String(a), c, f, g)
    };
    _.k.hasListener = function(a, c) {
        return this.zY.hasListener(void 0 !== a ? String(a) : void 0, c)
    };
    var d_, f_, q_, s_, E_, I_, T_, U2, BF;
    oauth2 = {};
    _.c_ = !1;
    d_ = function(a) {
        try {
            _.c_ && window.console && window.console.log && window.console.log(a)
        } catch (c) {}
    };
    f_ = function(a, c) {
        if (!a) return -1;
        if (a.indexOf) return a.indexOf(c, void 0);
        for (var f = 0, g = a.length; f < g; f++)
            if (a[f] === c) return f;
        return -1
    };
    q_ = function(a, c) {
        function f() {}
        if (!a) throw "Child class cannot be empty.";
        if (!c) throw "Parent class cannot be empty.";
        f.prototype = c.prototype;
        a.prototype = new f;
        a.prototype.constructor = a
    };
    s_ = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    };
    _.A_ = function(a) {
        var c = {};
        if (a)
            for (var f in a) a.hasOwnProperty(f) && (c[f] = a[f]);
        return c
    };
    E_ = function(a) {
        var c = location.hash;
        a = new RegExp("[&#]" + a + "=([^&]*)");
        c = decodeURIComponent(c);
        c = a.exec(c);
        return null == c ? "" : c[1].replace(/\+/g, " ")
    };
    I_ = function(a, c, f) {
        if (a.addEventListener) a.addEventListener(c, f, !1);
        else if (a.attachEvent) a.attachEvent("on" + c, f);
        else throw "Add event handler for " + c + " failed.";
    };
    T_ = {
        token: 1,
        id_token: 1
    };
    U2 = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10)
    };
    _.l0 = window.JSON;
    BF = function(a) {
        this.b$ = a || [];
        this.hg = {}
    };
    BF.prototype.addEventListener = function(a, c) {
        if (!(0 <= f_(this.b$, a))) throw "Unrecognized event type: " + a;
        if (!s_(c)) throw "The listener for event '" + a + "' is not a function.";
        this.hg[a] || (this.hg[a] = []);
        0 > f_(this.hg[a], c) && this.hg[a].push(c)
    };
    BF.prototype.removeEventListener = function(a, c) {
        if (!(0 <= f_(this.b$, a))) throw "Unrecognized event type: " + a;
        s_(c) && this.hg[a] && this.hg[a].length && (c = f_(this.hg[a], c), 0 <= c && this.hg[a].splice(c, 1))
    };
    BF.prototype.dispatchEvent = function(a) {
        var c = a.type;
        if (!(c && 0 <= f_(this.b$, c))) throw "Failed to dispatch unrecognized event type: " + c;
        if (this.hg[c] && this.hg[c].length)
            for (var f = 0, g = this.hg[c].length; f < g; f++) this.hg[c][f](a)
    };
    var CF, UZ, VG, QQ, QD, Qu, NU, JX, KJ, LX, np;
    CF = {};
    UZ = {};
    VG = {
        google: {
            authServerUrl: "https://accounts.google.com/o/oauth2/auth",
            idpIFrameUrl: "https://accounts.google.com/o/oauth2/iframe"
        }
    };
    _.zI = function(a, c) {
        if (a = VG[a]) return a[c]
    };
    _.lT = function(a, c) {
        if (!a) throw Error("da");
        if (!c.authServerUrl) throw Error("ia");
        if (!c.idpIFrameUrl) throw Error("ja");
        VG[a] = {
            authServerUrl: c.authServerUrl,
            idpIFrameUrl: c.idpIFrameUrl
        }
    };
    _.RP = void 0;
    QQ = function(a) {
        a.style.position = "absolute";
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.left = "-9999px";
        a.style.top = "-9999px";
        a.style.right = "-9999px";
        a.style.bottom = "-9999px";
        a.style.display = "none";
        a.setAttribute("aria-hidden", "true")
    };
    QD = function() {
        this.Jr = window;
        this.wba = this.u1 = this.B$ = this.h8 = null
    };
    QD.prototype.open = function(a, c, f, g) {
        TD(this);
        this.B$ ? (this.u1 && (this.u1(), this.u1 = null), FF(this)) : this.B$ = "authPopup" + Math.floor(1E6 * Math.random() + 1);
        a: {
            this.h8 = this.Jr.open(a, this.B$, c);
            try {
                this.h8.focus();
                if (this.h8.closed || "undefined" == typeof this.h8.closed) throw Error("pa");
                _.RP = this.h8
            } catch (h) {
                g && setTimeout(g, 0);
                this.h8 = null;
                break a
            }
            f && (this.u1 = f, PF(this))
        }
    };
    var TD = function(a) {
            try {
                if (null == a.h8 || a.h8.closed) a.h8 = null, a.B$ = null, FF(a), a.u1 && (a.u1(), a.u1 = null)
            } catch (c) {
                a.h8 = null, a.B$ = null, FF(a)
            }
        },
        PF = function(a) {
            a.wba = window.setInterval(function() {
                TD(a)
            }, 300)
        },
        FF = function(a) {
            a.wba && (window.clearInterval(a.wba), a.wba = null)
        };
    UZ = UZ || {};
    var t0 = function(a, c) {
        this.Jf = a;
        this.kV = c;
        this.p_ = null;
        this.kU = !1
    };
    t0.prototype.start = function() {
        if (!this.kU && !this.p_) {
            var a = this;
            this.p_ = window.setTimeout(function() {
                a.clear();
                a.kU || (a.Jf(), a.kU = !0)
            }, UZ.nV(this.kV))
        }
    };
    t0.prototype.clear = function() {
        this.p_ && (window.clearTimeout(this.p_), this.p_ = null)
    };
    var M1 = function(a, c) {
        var f = UZ.aV;
        this.WV = UZ.oU;
        this.pV = f;
        this.Jf = a;
        this.kV = c;
        this.p_ = null;
        this.kU = !1;
        var g = this;
        this.sV = function() {
            document[g.WV] || (g.clear(), g.start())
        }
    };
    M1.prototype.start = function() {
        if (!this.kU && !this.p_) {
            I_(document, this.pV, this.sV);
            var a = this;
            this.p_ = window.setTimeout(function() {
                a.clear();
                a.kU || (a.Jf(), a.kU = !0)
            }, UZ.nV(this.kV))
        }
    };
    M1.prototype.clear = function() {
        var a = this.pV,
            c = this.sV,
            f = document;
        if (f.removeEventListener) f.removeEventListener(a, c, !1);
        else if (f.detachEvent) f.detachEvent("on" + a, c);
        else throw "Remove event handler for " + a + " failed.";
        this.p_ && (window.clearTimeout(this.p_), this.p_ = null)
    };
    UZ.oU = null;
    UZ.aV = null;
    UZ.uY = function() {
        var a = document;
        "undefined" !== typeof a.hidden ? (UZ.oU = "hidden", UZ.aV = "visibilitychange") : "undefined" !== typeof a.msHidden ? (UZ.oU = "msHidden", UZ.aV = "msvisibilitychange") : "undefined" !== typeof a.webkitHidden && (UZ.oU = "webkitHidden", UZ.aV = "webkitvisibilitychange")
    };
    UZ.uY();
    UZ.VV = function(a, c) {
        return UZ.oU && UZ.aV ? new M1(a, c) : new t0(a, c)
    };
    UZ.nV = function(a) {
        return Math.max(1, a - (new Date).getTime())
    };
    var eP = function(a, c) {
            document.cookie = "G_ENABLED_IDPS=" + a + ";domain=." + c + ";expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/"
        },
        v0 = function() {
            function a() {
                h[0] = 1732584193;
                h[1] = 4023233417;
                h[2] = 2562383102;
                h[3] = 271733878;
                h[4] = 3285377520;
                w = v = 0
            }

            function c(A) {
                for (var F = n, z = 0; 64 > z; z += 4) F[z / 4] = A[z] << 24 | A[z + 1] << 16 | A[z + 2] << 8 | A[z + 3];
                for (z = 16; 80 > z; z++) A = F[z - 3] ^ F[z - 8] ^ F[z - 14] ^ F[z - 16], F[z] = (A << 1 | A >>> 31) & 4294967295;
                A = h[0];
                var I = h[1],
                    E = h[2],
                    K = h[3],
                    U = h[4];
                for (z = 0; 80 > z; z++) {
                    if (40 > z)
                        if (20 > z) {
                            var ka = K ^ I & (E ^ K);
                            var S = 1518500249
                        } else ka = I ^ E ^ K, S = 1859775393;
                    else 60 > z ? (ka = I & E | K & (I | E), S = 2400959708) : (ka = I ^ E ^ K, S = 3395469782);
                    ka = ((A << 5 | A >>> 27) & 4294967295) + ka + U + S + F[z] & 4294967295;
                    U = K;
                    K = E;
                    E = (I << 30 | I >>> 2) & 4294967295;
                    I = A;
                    A = ka
                }
                h[0] = h[0] + A & 4294967295;
                h[1] = h[1] + I & 4294967295;
                h[2] = h[2] + E & 4294967295;
                h[3] = h[3] + K & 4294967295;
                h[4] = h[4] + U & 4294967295
            }

            function f(A, F) {
                if ("string" === typeof A) {
                    A = unescape(encodeURIComponent(A));
                    for (var z = [], I = 0, E = A.length; I < E; ++I) z.push(A.charCodeAt(I));
                    A = z
                }
                F || (F = A.length);
                z = 0;
                if (0 == v)
                    for (; z + 64 < F;) c(A.slice(z, z + 64)), z += 64, w += 64;
                for (; z < F;)
                    if (l[v++] = A[z++], w++, 64 == v)
                        for (v = 0, c(l); z + 64 < F;) c(A.slice(z, z + 64)), z += 64, w += 64
            }

            function g() {
                var A = [],
                    F = 8 * w;
                56 > v ? f(q, 56 - v) : f(q, 64 - (v - 56));
                for (var z = 63; 56 <= z; z--) l[z] = F & 255, F >>>= 8;
                c(l);
                for (z = F = 0; 5 > z; z++)
                    for (var I = 24; 0 <= I; I -= 8) A[F++] = h[z] >> I & 255;
                return A
            }
            for (var h = [], l = [], n = [], q = [128], t = 1; 64 > t; ++t) q[t] = 0;
            var v, w;
            a();
            return {
                reset: a,
                update: f,
                digest: g,
                Of: function() {
                    for (var A = g(), F = "", z = 0; z < A.length; z++) F += "0123456789ABCDEF".charAt(Math.floor(A[z] / 16)) + "0123456789ABCDEF".charAt(A[z] % 16);
                    return F
                }
            }
        },
        A0 = window.crypto,
        B0 = !1,
        H0 = 0,
        L0 = 1,
        c1 = 0,
        F1 = "",
        I1 = function(a) {
            a = a || window.event;
            var c = a.screenX + a.clientX << 16;
            c += a.screenY + a.clientY;
            c *= (new Date).getTime() % 1E6;
            L0 = L0 * c % c1;
            if (3 == ++H0)
                if (a = window, c = I1, a.removeEventListener) a.removeEventListener("mousemove", c, !1);
                else if (a.detachEvent) a.detachEvent("onmousemove", c);
            else throw Error("la`mousemove");
        },
        L1 = function(a) {
            var c = v0();
            c.update(a);
            return c.Of()
        };
    B0 = !!A0 && "function" == typeof A0.getRandomValues;
    B0 || (c1 = 1E6 * (screen.width * screen.width + screen.height), F1 = L1(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + Math.random()), I_(window, "mousemove", I1));
    CF = CF || {};
    CF.KS = "ssIFrame_";
    _.MI = function(a, c) {
        this.Rd = a;
        if (!this.Rd) throw Error("Fb");
        a = _.zI(a, "idpIFrameUrl");
        if (!a) throw Error("Gb");
        this.Laa = a;
        if (!c) throw Error("Hb");
        this.y0 = c;
        a = this.Laa;
        c = document.createElement("a");
        c.setAttribute("href", a);
        a = [c.protocol, "//", c.hostname];
        "http:" == c.protocol && "" != c.port && "0" != c.port && "80" != c.port ? (a.push(":"), a.push(c.port)) : "https:" == c.protocol && "" != c.port && "0" != c.port && "443" != c.port && (a.push(":"), a.push(c.port));
        this.Maa = a.join("");
        this.Gha = [location.protocol, "//", location.host].join("");
        this.bka = this.A7 = !1;
        this.eka = null;
        this.S4 = [];
        this.A2 = [];
        this.PU = {};
        this.a2 = void 0
    };
    _.MI.prototype.show = function() {
        var a = this.a2;
        a.style.position = "fixed";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.left = "0px";
        a.style.top = "0px";
        a.style.right = "0px";
        a.style.bottom = "0px";
        a.style.display = "block";
        a.style.zIndex = "9999999";
        a.style.overflow = "hidden";
        a.setAttribute("aria-hidden", "false")
    };
    _.MI.prototype.Gl = function() {
        QQ(this.a2)
    };
    _.MI.prototype.tS = function(a) {
        if (this.A7) a && a(this);
        else {
            if (!this.a2) {
                var c = CF.KS + this.Rd;
                var f = this.Rd;
                var g = location.hostname;
                var h, l = document.cookie.match("(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)");
                l && 2 < l.length && (h = l[2]);
                (l = h && 0 <= f_(h.split("|"), f)) ? eP(h, g): eP(h ? h + "|" + f : f, g);
                f = !l;
                l = this.Laa;
                var n = this.Gha;
                g = this.y0;
                h = document.createElement("iframe");
                h.setAttribute("id", c);
                c = "allow-scripts allow-same-origin";
                document.requestStorageAccess && s_(document.requestStorageAccess) && (c += " allow-storage-access-by-user-activation");
                h.setAttribute("sandbox", c);
                QQ(h);
                h.setAttribute("frame-border", "0");
                c = [l, "#origin=", encodeURIComponent(n)];
                c.push("&rpcToken=");
                c.push(encodeURIComponent(g));
                f && c.push("&clearCache=1");
                _.c_ && c.push("&debug=1");
                document.body.appendChild(h);
                h.setAttribute("src", c.join(""));
                this.a2 = h
            }
            a && this.S4.push(a)
        }
    };
    _.MI.prototype.vY = function() {
        return this.eka
    };
    Qu = function(a) {
        for (var c = 0; c < a.S4.length; c++) a.S4[c](a);
        a.S4 = []
    };
    _.BX = function(a, c, f, g) {
        if (a.A7) {
            if (a.A7 && a.bka) throw a = "Failed to communicate with IDP IFrame due to unitialization error: " + a.vY(), d_(a), Error(a);
            NU(a, {
                method: c,
                params: f
            }, g)
        } else a.A2.push({
            rpc: {
                method: c,
                params: f
            },
            callback: g
        }), a.tS()
    };
    NU = function(a, c, f) {
        if (f) {
            for (var g = c.id; !g || a.PU[g];) g = (new Date).getMilliseconds() + "-" + (1E6 * Math.random() + 1);
            c.id = g;
            a.PU[g] = f
        }
        c.rpcToken = a.y0;
        a.a2.contentWindow.postMessage(_.l0.stringify(c), a.Maa)
    };
    JX = function(a) {
        if (a && 0 <= a.indexOf("::")) throw Error("Ib");
    };
    _.MI.prototype.LJ = function(a, c, f, g, h, l, n, q) {
        JX(l);
        c = _.A_(c);
        _.BX(this, "getTokenResponse", {
            clientId: a,
            loginHint: f,
            request: c,
            sessionSelector: g,
            forceRefresh: n,
            skipCache: q,
            id: l
        }, h)
    };
    _.MI.prototype.Gt = function(a, c, f, g, h) {
        c = _.A_(c);
        _.BX(this, "listIdpSessions", {
            clientId: a,
            request: c,
            sessionSelector: f,
            forceRefresh: h
        }, g)
    };
    KJ = function(a, c, f) {
        JX(c.identifier);
        _.BX(a, "getSessionSelector", c, f)
    };
    _.jY = function(a, c, f, g, h) {
        JX(c.identifier);
        _.BX(a, "setSessionSelector", {
            domain: c.domain,
            crossSubDomains: c.crossSubDomains,
            policy: c.policy,
            id: c.id,
            hint: g,
            disabled: !!f
        }, h)
    };
    LX = function(a, c, f) {
        _.BX(a, "monitorClient", {
            clientId: c
        }, f)
    };
    _.MI.prototype.Ic = _.b(25);
    _.MI.prototype.Sz = function(a, c) {
        _.BX(this, "showDialog", {
            RY: a
        }, c)
    };
    _.MI.prototype.iA = _.b(27);
    CF.wS = {};
    CF.ES = function(a) {
        return CF.wS[a]
    };
    CF.tS = function(a, c) {
        var f = CF.ES(a);
        if (!f) {
            f = String;
            if (B0) {
                var g = new window.Uint32Array(1);
                A0.getRandomValues(g);
                g = Number("0." + g[0])
            } else g = L0, g += parseInt(F1.substr(0, 20), 16), F1 = L1(F1), g /= c1 + Math.pow(16, 20);
            f = f(2147483647 * g);
            f = new _.MI(a, f);
            CF.wS[a] = f
        }
        f.tS(c)
    };
    CF.TS = function(a) {
        for (var c in CF.wS) {
            var f = CF.ES(c);
            if (f && f.a2 && f.a2.contentWindow == a.source && f.Maa == a.origin) return f
        }
    };
    CF.Pja = function(a) {
        for (var c in CF.wS) {
            var f = CF.ES(c);
            if (f && f.Maa == a) return f
        }
    };
    CF = CF || {};
    var RX = function() {
        var a = [],
            c;
        for (c in QX) a.push(QX[c]);
        BF.call(this, a);
        this.VY = {};
        d_("EventBus is ready.")
    };
    q_(RX, BF);
    var QX = {
            MS: "sessionSelectorChanged",
            vS: "sessionStateChanged",
            uS: "authResult",
            gY: "displayIFrame"
        },
        gN = function(a) {
            var c = SX;
            a && (c.VY[a] || (c.VY[a] = []))
        },
        UX = function(a, c, f) {
            return c && a.VY[c] && 0 <= f_(a.VY[c], f)
        };
    _.k = RX.prototype;
    _.k.fT = function(a) {
        var c, f = !!a.source && (a.source.opener === window || a.source === _.RP);
        if (c = f ? CF.Pja(a.origin) : CF.TS(a)) {
            try {
                var g = _.l0.parse(a.data)
            } catch (h) {
                d_("Bad event, an error happened when parsing data.");
                return
            }
            if (!f) {
                if (!g || !g.rpcToken || g.rpcToken != c.y0) {
                    d_("Bad event, no RPC token.");
                    return
                }
                if (g.id && !g.method) {
                    f = g;
                    if (a = c.PU[f.id]) delete c.PU[f.id], a(f.result, f.error);
                    return
                }
            }
            "fireIdpEvent" != g.method ? d_("Bad IDP event, method unknown.") : (a = g.params) && a.type && this.Kaa[a.type] ? (g = this.Kaa[a.type], f && !g.Oja ? d_("Bad IDP event. Source window cannot be a popup.") : g.Us && !g.Us.call(this, c, a) ? d_("Bad IDP event.") : g.Tc.call(this, c, a)) : d_("Bad IDP event.")
        } else d_("Bad event, no corresponding Idp Stub.")
    };
    _.k.iT = function(a, c) {
        return UX(this, a.Rd, c.clientId)
    };
    _.k.hT = function(a, c) {
        c = c.clientId;
        return !c || UX(this, a.Rd, c)
    };
    _.k.RS = function(a, c) {
        return UX(this, a.Rd, c.clientId)
    };
    _.k.cT = function(a) {
        a.A7 = !0;
        Qu(a);
        for (var c = 0; c < a.A2.length; c++) NU(a, a.A2[c].rpc, a.A2[c].callback);
        a.A2 = []
    };
    _.k.gka = function(a, c) {
        c = {
            error: c.error
        };
        a.A7 = !0;
        a.bka = !0;
        a.eka = c;
        a.A2 = [];
        Qu(a)
    };
    _.k.yS = function(a, c) {
        c.originIdp = a.Rd;
        this.dispatchEvent(c)
    };
    var SX = new RX,
        aP = SX,
        jP = {};
    jP.idpReady = {
        Tc: aP.cT
    };
    jP.idpError = {
        Tc: aP.gka
    };
    jP.sessionStateChanged = {
        Tc: aP.yS,
        Us: aP.iT
    };
    jP.sessionSelectorChanged = {
        Tc: aP.yS,
        Us: aP.hT
    };
    jP.authResult = {
        Tc: aP.yS,
        Us: aP.RS,
        Oja: !0
    };
    jP.displayIFrame = {
        Tc: aP.yS
    };
    SX.Kaa = jP || {};
    I_(window, "message", function(a) {
        SX.fT.call(SX, a)
    });
    _.j0 = function(a, c) {
        this.Ux = !1;
        if (!a) throw Error("Jb");
        var f = [],
            g;
        for (g in a) f.push(a[g]);
        BF.call(this, f);
        this.Db = [location.protocol, "//", location.host].join("");
        this.Ix = c.crossSubDomains ? c.domain || this.Db : this.Db;
        if (!c) throw Error("Kb");
        if (!c.idpId) throw Error("Lb");
        if (!_.zI(c.idpId, "authServerUrl") || !_.zI(c.idpId, "idpIFrameUrl")) throw Error("Mb`" + c.idpId);
        this.Rd = c.idpId;
        this.$k = void 0;
        this.iea = !!c.disableTokenRefresh;
        this.ZY = !!c.forceTokenRefresh;
        this.e$ = !!c.skipTokenCache;
        this.setOptions(c);
        this.F_ = [];
        this.RV = this.G7 = !1;
        this.iQ = void 0;
        this.cca();
        this.Rx = void 0;
        var h = this,
            l = function() {
                d_("Token Manager is ready.");
                if (h.F_.length)
                    for (var n = 0; n < h.F_.length; n++) h.F_[n].call(h);
                h.G7 = !0;
                h.F_ = []
            };
        CF.tS(this.Rd, function(n) {
            h.Rx = n;
            n.A7 && n.bka ? (h.RV = !0, h.iQ = n.vY(), h.fka(h.iQ)) : h.$k ? LX(h.Rx, h.$k, function(q) {
                if (q) {
                    q = h.Rd;
                    var t = h.$k,
                        v = SX;
                    q && t && (v.VY[q] || (v.VY[q] = []), 0 > f_(v.VY[q], t) && v.VY[q].push(t));
                    l()
                } else h.iQ = {
                    error: "Not a valid origin for the client: " + h.Db + " has not been whitelisted for client ID " + h.$k + ". Please go to https://console.developers.google.com/ and whitelist this origin for your project's client ID."
                }, h.RV = !0, h.fka(h.iQ)
            }) : (gN(h.Rd), l())
        })
    };
    q_(_.j0, BF);
    _.j0.prototype.setOptions = function() {};
    _.j0.prototype.cca = function() {};
    _.j0.prototype.fka = function() {};
    _.j0.prototype.vY = function() {
        return this.iQ
    };
    np = function(a, c, f) {
        return function() {
            c.apply(a, f)
        }
    };
    _.gr = function(a, c, f) {
        if (a.G7) c.apply(a, f);
        else {
            if (a.RV) throw a.iQ;
            a.F_.push(np(a, c, f))
        }
    };
    _.j0.prototype.bG = _.b(28);
    _.j0.prototype.iA = _.b(26);
    _.YX = function(a, c) {
        _.j0.call(this, a, c);
        this.kga = new QD;
        this.S8 = this.ija = null;
        X2(this)
    };
    q_(_.YX, _.j0);
    _.YX.prototype.setOptions = function() {};
    var MJ = function(a, c) {
            a.Cs = {
                crossSubDomains: !!c.crossSubDomains,
                id: c.sessionSelectorId,
                domain: a.Ix
            };
            c.crossSubDomains && (a.Cs.policy = c.policy)
        },
        TJ = function(a, c) {
            if (!c.authParameters) throw Error("Ja");
            if (!c.authParameters.scope) throw Error("Ka");
            if (!c.authParameters.response_type) throw Error("ma");
            a.bY = c.authParameters;
            a.bY.redirect_uri || (a.bY.redirect_uri = [location.protocol, "//", location.host, location.pathname].join(""));
            a.x0 = _.A_(c.rpcAuthParameters || a.bY);
            if (!a.x0.scope) throw Error("Qa");
            if (!a.x0.response_type) throw Error("mb");
            a: {
                var f = a.x0.response_type.split(" ");
                for (var g = 0, h = f.length; g < h; g++)
                    if (f[g] && !T_[f[g]]) {
                        f = !0;
                        break a
                    }
                f = !1
            }
            if (f) throw Error("rb");
            c.enableSerialConsent && (a.x0.enable_serial_consent = !0);
            c.authResultIdentifier && (a.Hda = c.authResultIdentifier);
            c.spec_compliant && (a.x0.spec_compliant = c.spec_compliant)
        };
    _.YX.prototype.cca = function() {
        var a = this;
        SX.addEventListener(QX.MS, function(c) {
            a.Ux && a.Cs && c.originIdp == a.Rd && !c.crossSubDomains == !a.Cs.crossSubDomains && c.domain == a.Cs.domain && c.id == a.Cs.id && a.Hba(c)
        });
        SX.addEventListener(QX.vS, function(c) {
            a.Ux && c.originIdp == a.Rd && c.clientId == a.$k && a.Iba(c)
        });
        SX.addEventListener(QX.uS, function(c) {
            _.RP = void 0;
            a.Ux && c.originIdp == a.Rd && c.clientId == a.$k && c.id == a.X4 && (a.ija && (window.clearTimeout(a.ija), a.ija = null), a.X4 = void 0, a.k8(c))
        });
        SX.addEventListener(QX.gY, function(c) {
            a.Ux && c.originIdp == a.Rd && (c.Gl ? a.Rx.Gl() : a.Rx.show())
        })
    };
    _.YX.prototype.Hba = function() {};
    _.YX.prototype.Iba = function() {};
    _.YX.prototype.k8 = function() {};
    var ZX = function(a, c) {
            A2(a);
            a.iea || (a.S8 = UZ.VV(function() {
                a.LJ(!0)
            }, c - 3E5), navigator.onLine && a.S8.start())
        },
        A2 = function(a) {
            a.S8 && (a.S8.clear(), a.S8 = null)
        },
        X2 = function(a) {
            var c = window;
            U2() && (c = document.body);
            I_(c, "online", function() {
                a.S8 && a.S8.start()
            });
            I_(c, "offline", function() {
                a.S8 && a.S8.clear()
            })
        };
    _.k = _.YX.prototype;
    _.k.LJ = function() {};
    _.k.Sz = function(a, c) {
        this.Rx.Sz(a, c)
    };
    _.k.oV = _.b(29);
    _.k.cu = function(a, c) {
        if (!this.$k) throw Error("pb");
        this.Rx.Gt(this.$k, this.x0, this.Cs, a, c)
    };
    _.k.Gt = function(a, c) {
        _.gr(this, this.cu, [a, c])
    };
    _.bY = function(a) {
        this.Bp = void 0;
        this.eJ = !1;
        this.E0 = void 0;
        _.YX.call(this, _.aY, a)
    };
    q_(_.bY, _.YX);
    _.aY = {
        LS: "noSessionBound",
        lS: "userLoggedOut",
        IS: "activeSessionChanged",
        vS: "sessionStateChanged",
        QS: "tokenReady",
        PS: "tokenFailed",
        uS: "authResult",
        ERROR: "error"
    };
    _.bY.prototype.setOptions = function(a) {
        if (!a.clientId) throw Error("Nb");
        this.$k = a.clientId;
        this.El = a.id;
        MJ(this, a);
        TJ(this, a)
    };
    _.bY.prototype.fka = function(a) {
        this.dispatchEvent({
            type: _.aY.ERROR,
            error: "idpiframe_initialization_failed",
            details: a.error,
            idpId: this.Rd
        })
    };
    var cY = function(a) {
        A2(a);
        a.E0 = void 0;
        a.Q7 = void 0
    };
    _.k = _.bY.prototype;
    _.k.Hba = function(a) {
        var c = a.newValue || {};
        if (this.Bp != c.hint || this.eJ != !!c.disabled) {
            a = this.Bp;
            var f = !this.Bp || this.eJ;
            cY(this);
            this.Bp = c.hint;
            this.eJ = !!c.disabled;
            (c = !this.Bp || this.eJ) && !f ? this.dispatchEvent({
                type: _.aY.lS,
                idpId: this.Rd
            }) : c || (a != this.Bp && this.dispatchEvent({
                type: _.aY.IS,
                idpId: this.Rd
            }), this.Bp && this.LJ())
        }
    };
    _.k.Iba = function(a) {
        this.eJ || (this.Bp ? a.user || this.E0 ? a.user == this.Bp && (this.E0 ? a.sessionState ? this.E0 = a.sessionState : (cY(this), this.dispatchEvent({
            type: _.aY.lS,
            idpId: this.Rd
        })) : a.sessionState && (this.E0 = a.sessionState, this.LJ())) : this.LJ() : this.dispatchEvent({
            type: _.aY.vS,
            idpId: this.Rd
        }))
    };
    _.k.k8 = function(a) {
        this.dispatchEvent({
            type: _.aY.uS,
            authResult: a.authResult
        })
    };
    _.k.lja = _.b(31);
    _.k.H1 = function(a) {
        _.gr(this, this.a7, [a])
    };
    _.k.a7 = function(a) {
        KJ(this.Rx, this.Cs, a)
    };
    _.k.DS = function(a, c, f) {
        if (!a) throw Error("Ob");
        cY(this);
        this.Bp = a;
        this.eJ = !1;
        c && _.jY(this.Rx, this.Cs, !1, this.Bp);
        this.Ux = !0;
        this.LJ(f, !0)
    };
    _.k.start = function() {
        _.gr(this, this.Bv, [])
    };
    _.k.Bv = function() {
        var a = this.$k == E_("client_id") ? E_("login_hint") : void 0;
        var c = this.$k == E_("client_id") ? E_("state") : void 0;
        this.BA = c;
        if (a) window.history.replaceState ? window.history.replaceState(null, document.title, window.location.href.split("#")[0]) : window.location.href.hash = "", this.DS(a, !0, !0);
        else {
            var f = this;
            this.H1(function(g) {
                f.Ux = !0;
                g && g.hint ? (cY(f), f.Bp = g.hint, f.eJ = !!g.disabled, f.eJ ? f.dispatchEvent({
                    type: _.aY.lS,
                    idpId: f.Rd
                }) : f.DS(g.hint)) : (cY(f), f.Bp = void 0, f.eJ = !(!g || !g.disabled), f.dispatchEvent({
                    type: _.aY.LS,
                    autoOpenAuthUrl: !f.eJ,
                    idpId: f.Rd
                }))
            })
        }
    };
    _.k.Bea = _.b(32);
    _.k.LJ = function(a, c) {
        var f = this;
        this.Rx.LJ(this.$k, this.x0, this.Bp, this.Cs, function(g, h) {
            (h = h || g.error) ? "user_logged_out" == h ? (cY(f), f.dispatchEvent({
                type: _.aY.lS,
                idpId: f.Rd
            })) : (f.Q7 = null, f.dispatchEvent({
                type: _.aY.PS,
                idpId: f.Rd,
                error: h
            })): (f.Q7 = g, f.E0 = g.session_state, ZX(f, g.expires_at), g.idpId = f.Rd, c && f.BA && (g.state = f.BA, f.BA = void 0), f.dispatchEvent({
                type: _.aY.QS,
                idpId: f.Rd,
                response: g
            }))
        }, this.El, a)
    };
    _.k.Ic = _.b(24);
    _.k.a9 = _.b(33);
    _.aK = function(a) {
        this.V5 = null;
        _.YX.call(this, {}, a);
        this.Ux = !0
    };
    q_(_.aK, _.YX);
    _.k = _.aK.prototype;
    _.k.setOptions = function(a) {
        if (!a.clientId) throw Error("Nb");
        this.$k = a.clientId;
        this.El = a.id;
        MJ(this, a);
        TJ(this, a)
    };
    _.k.fka = function(a) {
        this.V5 && (this.V5({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.error
            }
        }), this.V5 = null)
    };
    _.k.k8 = function(a) {
        if (this.V5) {
            var c = this.V5;
            this.V5 = null;
            c(a)
        }
    };
    _.k.lja = _.b(30);
    _.k.H1 = function(a) {
        this.RV ? a(this.vY()) : _.gr(this, this.a7, [a])
    };
    _.k.a7 = function(a) {
        KJ(this.Rx, this.Cs, a)
    };
    _.OF = function(a, c, f) {
        a.RV ? f(a.vY()) : _.gr(a, a.Yt, [c, f])
    };
    _.aK.prototype.Yt = function(a, c) {
        this.Rx.LJ(this.$k, this.x0, a, this.Cs, function(f, g) {
            g ? c({
                error: g
            }) : c(f)
        }, this.El, this.ZY, this.e$)
    };
    _.aK.prototype.aka = _.b(34);
    var tE = function(a, c, f) {
            if (!a.Ux) throw Error("nb");
            c ? _.jY(a.Rx, a.Cs, !0, void 0, f) : _.jY(a.Rx, a.Cs, !0, a.Bp, f)
        },
        $R = function(a) {
            if (!a.Ux) throw Error("nb");
            return a.Q7
        },
        P1, RQ, Q1, SF, nv, Tz, rl, mO, V_, mY, Ks, N1;
    _.aK.prototype.aka = _.d(34, function(a, c) {
        var f = this.Rx,
            g = this.$k,
            h = this.Cs,
            l = _.A_(this.x0);
        delete l.response_type;
        _.BX(f, "getOnlineCode", {
            clientId: g,
            loginHint: a,
            request: l,
            sessionSelector: h
        }, c)
    });
    _.bY.prototype.a9 = _.d(33, function(a) {
        $R(this) && $R(this).access_token && (this.Rx.Ic(this.$k, $R(this).access_token, a), tE(this, !0))
    });
    _.bY.prototype.Bea = _.d(32, function() {
        var a = this;
        this.H1(function(c) {
            c && c.hint ? c.disabled ? a.dispatchEvent({
                type: _.aY.lS,
                idpId: a.Rd
            }) : a.LJ(!0) : a.dispatchEvent({
                type: _.aY.LS,
                idpId: a.Rd
            })
        })
    });
    _.bY.prototype.lja = _.d(31, function() {
        var a = this;
        return function(c) {
            c && c.authResult && c.authResult.login_hint && a.DS(c.authResult.login_hint, a.eJ || c.authResult.login_hint != a.Bp, !0)
        }
    });
    _.aK.prototype.lja = _.d(30, function(a) {
        var c = this;
        return function(f) {
            f && f.authResult && f.authResult.login_hint ? c.H1(function(g) {
                _.jY(c.Rx, c.Cs, g && g.disabled, f.authResult.login_hint, function() {
                    _.OF(c, f.authResult.login_hint, a)
                })
            }) : a(f && f.authResult && f.authResult.error ? f.authResult : f && f.authResult && !f.authResult.login_hint ? {
                error: "wrong_response_type"
            } : {
                error: "unknown_error"
            })
        }
    });
    _.YX.prototype.oV = _.d(29, function() {
        this.$k && _.BX(this.Rx, "startPolling", {
            clientId: this.$k,
            origin: this.Db,
            id: this.X4
        }, void 0)
    });
    _.MI.prototype.Ic = _.d(25, function(a, c, f) {
        _.BX(this, "revoke", {
            clientId: a,
            token: c
        }, f)
    });
    _.bY.prototype.Ic = _.d(24, function(a) {
        _.gr(this, this.a9, [a])
    });
    P1 = function() {
        var a = navigator.userAgent,
            c;
        if (c = !!a && -1 != a.indexOf("CriOS")) c = -1, (a = a.match(/CriOS\/(\d+)/)) && a[1] && (c = parseInt(a[1], 10) || -1), c = 48 > c;
        return c
    };
    RQ = function() {
        var a = navigator.userAgent.toLowerCase();
        if (!(-1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android"))) return !1;
        var c = /version\/(\d+)\.(\d+)[\.0-9]*/.exec(navigator.userAgent.toLowerCase());
        if (!c || 3 > c.length) return !1;
        a = parseInt(c[1], 10);
        c = parseInt(c[2], 10);
        return 12 < a || 12 == a && 1 <= c
    };
    Q1 = function(a, c, f, g, h, l, n) {
        var q = _.zI(a, "authServerUrl");
        if (!q) throw Error("ka`" + a);
        a = _.A_(g);
        a.response_type = n || "permission";
        a.client_id = f;
        a.ss_domain = c;
        if (l && l.extraQueryParams)
            for (var t in l.extraQueryParams) a[t] = l.extraQueryParams[t];
        h && RQ() && !a.prompt && (a.prompt = "select_account");
        c = q + (0 > q.indexOf("?") ? "?" : "&");
        f = [];
        for (var v in a)
            if (a.hasOwnProperty(v)) {
                h = a[v];
                if (null === h || void 0 === h) h = "";
                f.push(encodeURIComponent(v) + "=" + encodeURIComponent(h))
            }
        return c + f.join("&")
    };
    SF = function(a, c, f, g) {
        if (!a.$k) throw Error("ob");
        a.X4 = f || a.Hda || "auth" + Math.floor(1E6 * Math.random() + 1);
        c = c || {};
        c.extraQueryParams = c.extraQueryParams || {};
        if (!c.extraQueryParams.redirect_uri) {
            var h = a.Db.split("//");
            f = c.extraQueryParams;
            var l = h[0],
                n = l.indexOf(":");
            0 < n && (l = l.substring(0, n));
            h = ["storagerelay://", l, "/", h[1], "?"];
            h.push("id=" + a.X4);
            f.redirect_uri = h.join("")
        }
        return Q1(a.Rd, a.Ix, a.$k, a.bY, !0, c, g)
    };
    nv = function(a, c, f) {
        if (!a.$k) throw Error("ob");
        return Q1(a.Rd, a.Ix, a.$k, a.bY, !1, c, f)
    };
    Tz = function(a, c) {
        a.ija && window.clearTimeout(a.ija);
        a.ija = window.setTimeout(function() {
            a.X4 == c && (_.RP = void 0, a.ija = null, a.X4 = void 0, a.k8({
                authResult: {
                    error: "popup_closed_by_user"
                }
            }))
        }, 1E3)
    };
    rl = function(a, c, f) {
        if (!a.$k) throw Error("Pb");
        f = f || {};
        f = SF(a, f.sessionMeta, f.oneTimeId, f.responseType);
        (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject || P1()) && _.gr(a, a.oV, []);
        var g = a.X4;
        a.kga.open(f, c, function() {
            a.X4 == g && Tz(a, g)
        }, function() {
            a.X4 = void 0;
            a.k8({
                authResult: {
                    error: "popup_blocked_by_browser"
                }
            })
        })
    };
    mO = function(a) {
        _.gr(a, a.Bea, [])
    };
    V_ = function(a, c, f) {
        a.RV ? f(a.vY()) : _.gr(a, a.aka, [c, f])
    };
    mY = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.yx = function(a) {
        for (var c = [], f = 0, g = 0; f < a.length;) {
            var h = a[f++];
            if (128 > h) c[g++] = String.fromCharCode(h);
            else if (191 < h && 224 > h) {
                var l = a[f++];
                c[g++] = String.fromCharCode((h & 31) << 6 | l & 63)
            } else if (239 < h && 365 > h) {
                l = a[f++];
                var n = a[f++],
                    q = a[f++];
                h = ((h & 7) << 18 | (l & 63) << 12 | (n & 63) << 6 | q & 63) - 65536;
                c[g++] = String.fromCharCode(55296 + (h >> 10));
                c[g++] = String.fromCharCode(56320 + (h & 1023))
            } else l = a[f++], n = a[f++], c[g++] = String.fromCharCode((h & 15) << 12 | (l & 63) << 6 | n & 63)
        }
        return c.join("")
    };
    _.nw = function(a, c) {
        function f(t) {
            for (; g < a.length;) {
                var v = a.charAt(g++),
                    w = _.ch[v];
                if (null != w) return w;
                if (!_.Gt(v)) throw Error("Sa`" + v);
            }
            return t
        }
        _.vi();
        for (var g = 0;;) {
            var h = f(-1),
                l = f(0),
                n = f(64),
                q = f(64);
            if (64 === q && -1 === h) break;
            c(h << 2 | l >> 4);
            64 != n && (c(l << 4 & 240 | n >> 2), 64 != q && c(n << 6 & 192 | q))
        }
    };
    Ks = function(a) {
        var c = [];
        _.nw(a, function(f) {
            c.push(f)
        });
        return c
    };
    _.RF = function(a, c) {
        _.Hb[c || "token"] = a
    };
    _.Kb = function(a) {
        delete _.Hb[a || "token"]
    };
    N1 = function() {
        var a = window.crypto || window.msCrypto;
        a && a.getRandomValues && (this.pT = !0, this.bT = Infinity);
        if (1 > this.bT) {
            var c = this.pB;
            a = this.bT;
            this.pB = "";
            this.bT = 1;
            a = Math.max(0, a);
            if (!this.pT) {
                c = this.oT + c;
                var f = new _.xb;
                f.update(c);
                c = String.fromCharCode.apply(String, f.digest());
                this.kT += a;
                this.kT >= this.bT ? (f.reset(), f.update("SEED_SALT:" + c + this.pB), this.pB = String.fromCharCode.apply(String, f.digest()), this.oT = "", this.kT = 0) : this.oT = c
            }
        }
    };
    _.k = N1.prototype;
    _.k.pT = !1;
    _.k.pB = "";
    _.k.oT = "";
    _.k.kT = 0;
    _.k.bT = -1;
    var U1 = function(a) {
            var c = S1,
                f = [];
            if (c.pT) a = new window.Uint8Array(Math.min(65536, a || 1)), (window.crypto || window.msCrypto).getRandomValues(a), f = [].slice.call(a);
            else {
                if (0 > c.bT || 0 == c.pB.length) throw new T1;
                var g = new _.xb;
                g.update("RANDOM_SALT:" + c.pB);
                var h = g.digest();
                null !== h && (g.reset(), g.update("SEED_SALT:" + c.pB), c.pB = String.fromCharCode.apply(String, g.digest()), f = h.slice(0, a || h.length))
            }
            return f
        },
        T1 = function() {};
    _.J(T1, Error);
    T1.prototype.name = "Insufficient Entropy";
    _.l0 = {
        parse: function(a) {
            a = _.of("[" + String(a) + "]");
            if (!1 === a || 1 !== a.length) throw new SyntaxError("JSON parsing failed.");
            return a[0]
        },
        stringify: function(a) {
            return _.mf(a)
        }
    };
    _.aK.prototype.S3 = function(a, c) {
        _.gr(this, this.C8, [a, c])
    };
    _.aK.prototype.C8 = function(a, c) {
        this.Rx.S3(this.$k, a, this.x0, this.Cs, c)
    };
    _.MI.prototype.S3 = function(a, c, f, g, h) {
        f = _.A_(f);
        _.BX(this, "gsi:fetchLoginHint", {
            clientId: a,
            loginHint: c,
            request: f,
            sessionSelector: g
        }, h)
    };
    var pF, kZ = ["client_id", "cookie_policy", "scope"],
        GN = "client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection gsiwebsdk".split(" "),
        iw = ["authuser", "after_redirect", "access_type", "hl"],
        EB = ["login_hint", "prompt"],
        wW = {
            clientid: "client_id",
            cookiepolicy: "cookie_policy"
        },
        UD = ["approval_prompt", "authuser", "login_hint", "prompt", "hd"],
        WF = ["login_hint", "g-oauth-window", "status"],
        nY = Math.min(_.P("oauth-flow/authWindowWidth", 599), screen.width - 20),
        oY = Math.min(_.P("oauth-flow/authWindowHeight", 600), screen.height - 30);
    var uO = function(a) {
        _.se.call(this, a)
    };
    _.oL(uO, _.se);
    uO.prototype.name = "gapi.auth2.ExternallyVisibleError";
    var cm = function() {};
    cm.prototype.select = function(a, c) {
        if (a.sessions && 1 == a.sessions.length && (a = a.sessions[0], a.login_hint)) {
            c(a);
            return
        }
        c()
    };
    var gv = function() {};
    gv.prototype.select = function(a, c) {
        if (a.sessions && a.sessions.length)
            for (var f = 0; f < a.sessions.length; f++) {
                var g = a.sessions[f];
                if (g.login_hint) {
                    c(g);
                    return
                }
            }
        c()
    };
    var KW = function(a) {
        this.Uka = a
    };
    KW.prototype.select = function(a, c) {
        if (a.sessions)
            for (var f = 0; f < a.sessions.length; f++) {
                var g = a.sessions[f];
                if (g.session_state && g.session_state.extraQueryParams && g.session_state.extraQueryParams.authuser == this.Uka) {
                    g.login_hint ? c(g) : c();
                    return
                }
            }
        c()
    };
    var dm = function(a) {
        this.$K = a;
        this.UH = []
    };
    dm.prototype.select = function(a) {
        var c = 0,
            f = this,
            g = function(h) {
                if (h) a(h);
                else {
                    var l = f.UH[c];
                    l ? (c++, f.$K.Gt(function(n) {
                        n ? l.select(n, g) : g()
                    })) : a()
                }
            };
        g()
    };
    var WW = function(a) {
            a = new dm(a);
            a.UH.push(new cm);
            return a
        },
        iv = function(a) {
            a = new dm(a);
            a.UH.push(new gv);
            return a
        },
        lX = function(a, c) {
            void 0 === c || null === c ? c = WW(a) : (a = new dm(a), a.UH.push(new KW(c)), c = a);
            return c
        };
    var mF = function(a) {
        this.Tc = a;
        this.kh = !0
    };
    mF.prototype.remove = function() {
        this.kh = !1
    };
    mF.prototype.trigger = function() {};
    var nF = function(a) {
            this.remove = function() {
                a.remove()
            };
            this.trigger = function() {
                a.trigger()
            }
        },
        sF = function() {
            this.hg = []
        };
    sF.prototype.add = function(a) {
        this.hg.push(a)
    };
    sF.prototype.notify = function(a) {
        for (var c = this.hg, f = [], g = 0; g < c.length; g++) {
            var h = c[g];
            h.kh && (f.push(h), _.qk(pY(h.Tc, a)))
        }
        this.hg = f
    };
    var pY = function(a, c) {
        return function() {
            a(c)
        }
    };
    var xF = function(a) {
        this.Ab = null;
        this.Aia = new vF(this);
        this.hg = new sF;
        void 0 != a && this.set(a)
    };
    xF.prototype.set = function(a) {
        a != this.Ab && (this.Ab = a, this.Aia.value = a, this.hg.notify(this.Ab))
    };
    xF.prototype.get = function() {
        return this.Ab
    };
    xF.prototype.Ei = function(a) {
        a = new yF(this, a);
        this.hg.add(a);
        return a
    };
    var yF = function(a, c) {
        mF.call(this, c);
        this.sga = a
    };
    _.J(yF, mF);
    yF.prototype.trigger = function() {
        var a = this.Tc;
        a(this.sga.get())
    };
    var vF = function(a) {
        this.value = null;
        this.Ei = function(c) {
            return new nF(a.Ei(c))
        }
    };
    var hY = {
            iU: "fetch_basic_profile",
            TT: "login_hint",
            $ja: "prompt",
            Qs: "redirect_uri",
            dU: "scope",
            Hka: "ux_mode",
            pC: "state"
        },
        iY = function(a) {
            this.jA = {};
            if (a && !_.Og(a))
                if ("function" == typeof a.get) this.jA = a.get();
                else
                    for (var c in hY) {
                        var f = hY[c];
                        f in a && (this.jA[f] = a[f])
                    }
        };
    iY.prototype.get = function() {
        return this.jA
    };
    iY.prototype.yca = function(a) {
        this.jA.scope = a;
        return this
    };
    iY.prototype.P1 = function() {
        return this.jA.scope
    };
    var qF = function(a, c) {
        var f = a.jA.scope;
        c = mY(c.split(" "), f ? f.split(" ") : []);
        _.RE(c);
        a.jA.scope = c.join(" ")
    };
    _.k = iY.prototype;
    _.k.Vha = function(a) {
        this.jA.prompt = a;
        return this
    };
    _.k.ifa = function() {
        return this.jA.prompt
    };
    _.k.Pha = function() {
        _.Hm("Property app_package_name no longer supported and was not set");
        return this
    };
    _.k.Fea = function() {
        _.Hm("Property app_package_name no longer supported")
    };
    _.k.Jd = function(a) {
        this.jA.state = a
    };
    _.k.getState = function() {
        return this.jA.state
    };
    var ol = function() {
            return ["toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + nY, "height=" + oY, "top=" + (screen.height - oY) / 2, "left=" + (screen.width - nY) / 2].join()
        },
        XE = function(a) {
            a = a && a.id_token;
            if (!a || !a.split(".")[1]) return null;
            a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
            return JSON.parse(_.yx(Ks(a)))
        },
        bm = function() {
            pF = _.P("auth2/idpValue", "google");
            var a = _.P("oauth-flow/authUrl", "https://accounts.google.com/o/oauth2/auth"),
                c = _.P("oauth-flow/idpIframeUrl", "https://accounts.google.com/o/oauth2/iframe");
            _.lT(pF, {
                authServerUrl: a,
                idpIFrameUrl: c
            })
        },
        Gw = function(a, c, f) {
            for (var g = 0; g < c.length; g++) {
                var h = c[g];
                if (g === c.length - 1) {
                    a[h] = f;
                    break
                }
                _.Vg(a[h]) || (a[h] = {});
                a = a[h]
            }
        },
        uA = function() {
            var a = window.location.origin;
            a || (a = window.location.protocol + "//" + window.location.host);
            return a
        };
    var WE = function(a) {
        var c = a ? (c = XE(a)) ? c.sub : null : null;
        this.El = c;
        this.Zi = a ? _.rf(a) : null
    };
    _.k = WE.prototype;
    _.k.getId = function() {
        return this.El
    };
    _.k.eU = function() {
        var a = XE(this.Zi);
        return a ? a.hd : null
    };
    _.k.jz = function() {
        return !!this.Zi
    };
    _.k.DT = function(a) {
        if (a) return this.Zi;
        a = HE;
        var c = _.rf(this.Zi);
        !a.d2 || a.u7 || a.Ofa || (delete c.access_token, delete c.scope);
        return c
    };
    _.k.T8 = function() {
        return HE.T8()
    };
    _.k.BT = function() {
        this.Zi = null
    };
    _.k.Dl = function() {
        return this.Zi ? this.Zi.scope : null
    };
    _.k.update = function(a) {
        this.El = a.El;
        this.Zi = a.Zi;
        this.Zi.id_token ? this.w3 = new PG(this.Zi) : this.w3 && (this.w3 = null)
    };
    var wE = function(a) {
        return a.Zi && "object" == typeof a.Zi.session_state ? _.rf(a.Zi.session_state.extraQueryParams || {}) : {}
    };
    _.k = WE.prototype;
    _.k.fk = function() {
        var a = wE(this);
        return a && void 0 !== a.authuser && null !== a.authuser ? a.authuser : null
    };
    _.k.W2 = function(a) {
        var c = HE,
            f = new iY(a);
        c.u7 = f.P1() ? !0 : !1;
        HE.d2 && qF(f, "openid profile email");
        return new _.C(function(g, h) {
            var l = wE(this);
            l.login_hint = this.getId();
            l.scope = f.P1();
            qY(c, g, h, l)
        }, this)
    };
    _.k.Q1 = function(a) {
        return new _.C(function(c, f) {
            var g = a || {},
                h = HE;
            g.login_hint = this.getId();
            h.Q1(g).then(c, f)
        }, this)
    };
    _.k.sY = function(a) {
        return this.W2(a)
    };
    _.k.disconnect = function() {
        return HE.disconnect()
    };
    _.k.rY = function() {
        return this.w3
    };
    _.k.qV = function(a) {
        if (!this.jz()) return !1;
        var c = this.Zi && this.Zi.scope ? this.Zi.scope.split(" ") : "";
        return (0, _.Fe)(a ? a.split(" ") : [], function(f) {
            return _.ve(c, f)
        })
    };
    var PG = function(a) {
        a = XE(a);
        this.Eea = a.sub;
        this.ig = a.name;
        this.ofa = a.given_name;
        this.wea = a.family_name;
        this.Paa = a.picture;
        this.U3 = a.email
    };
    _.k = PG.prototype;
    _.k.getId = function() {
        return this.Eea
    };
    _.k.getName = function() {
        return this.ig
    };
    _.k.CY = function() {
        return this.ofa
    };
    _.k.BY = function() {
        return this.wea
    };
    _.k.Uea = function() {
        return this.Paa
    };
    _.k.a4 = function() {
        return this.U3
    };
    var Ay = function(a, c, f) {
            this.j8 = c;
            this.Xo = a;
            for (var g in a) a.hasOwnProperty(g) && Qv(this, g);
            if (f && f.length)
                for (a = 0; a < f.length; a++) this[f[a]] = this.j8[f[a]]
        },
        Qv = function(a, c) {
            a[c] = function() {
                return a.Xo[c].apply(a.j8, arguments)
            }
        };
    Ay.prototype.then = function(a, c, f) {
        var g = this;
        return _.Nu().then(function() {
            return EQ(g.j8, a, c, f)
        })
    };
    _.Rp(Ay);
    var Ex;
    Ex = function(a) {
        var c = location;
        if (a && "none" != a) return "single_host_origin" == a ? c.protocol + "//" + c.host : a
    };
    _.tY = function(a) {
        if (!a) throw new uO("No cookiePolicy");
        var c = window.location.hostname;
        "single_host_origin" == a && (a = window.location.protocol + "//" + c);
        if ("none" == a) return null;
        var f = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);
        if (!f) throw new uO("Invalid cookiePolicy");
        a = f[2];
        f = f[1];
        var g = {};
        g.dotValue = a.split(".").length;
        g.isSecure = -1 != f.indexOf("https");
        g.domain = a;
        if (!_.hT(c, "." + a) && !_.hT(c, a)) throw new uO("Invalid cookiePolicy domain");
        return g
    };
    var S1;
    S1 = new N1;
    _.V1 = function() {
        try {
            for (var a = [], c = 0; 64 > a.length && 128 > c;) a.push.apply(a, U1(64 - a.length)), c++;
            if (64 > a.length) throw new T1;
            var f = a.slice(0, 64)
        } catch (g) {
            for (f = [], a = 0; 64 > a; a++) f[a] = Math.floor(256 * Math.random())
        }
        return _.aB(f, 3).substring(0, 64)
    };
    var vm, km, Xx, ey, Mm, Nm, Om, gz, my, ym, zm, Tm;
    vm = function(a) {
        var c = a || {},
            f = km();
        (0, _.Be)(GN, function(g) {
            "undefined" === typeof c[g] && "undefined" !== typeof f[g] && (c[g] = f[g])
        });
        return c
    };
    km = function() {
        for (var a = {}, c = document.getElementsByTagName("meta"), f = 0; f < c.length; ++f)
            if (c[f].name) {
                var g = c[f].name;
                if (0 == g.indexOf("google-signin-")) {
                    g = g.substring(14);
                    var h = c[f].content;
                    wW[g] && (g = wW[g]);
                    _.ve(GN, g) && h && (a[g] = "true" == h ? !0 : "false" == h ? !1 : h)
                }
            }
        return a
    };
    Xx = function(a) {
        return String(a).replace(/_([a-z])/g, function(c, f) {
            return f.toUpperCase()
        })
    };
    ey = function(a) {
        (0, _.Be)(GN, function(c) {
            var f = Xx(c);
            "undefined" !== typeof a[f] && "undefined" === typeof a[c] && (a[c] = a[f], delete a[f])
        })
    };
    Mm = function(a) {
        a = vm(a);
        ey(a);
        a.cookie_policy || (a.cookie_policy = "single_host_origin");
        var c = GN + iw,
            f;
        for (f in a) 0 > c.indexOf(f) && delete a[f];
        return a
    };
    Nm = function(a, c) {
        if (!a) throw new uO("Empty initial options.");
        for (var f = 0; f < kZ.length; ++f)
            if (!(c && "scope" == kZ[f] || a[kZ[f]])) throw new uO("Missing required parameter '" + kZ[f] + "'");
        _.tY(a.cookie_policy)
    };
    Om = function(a) {
        var c = {
            authParameters: {
                redirect_uri: void 0,
                response_type: "token id_token",
                scope: a.scope,
                "openid.realm": a.openid_realm
            },
            clientId: a.client_id,
            crossSubDomains: !0,
            domain: Ex(a.cookie_policy),
            disableTokenRefresh: !!a.disable_token_refresh,
            idpId: pF
        };
        _.gS(c, a);
        (0, _.Be)(EB, function(f) {
            a[f] && (c.authParameters[f] = a[f])
        });
        "boolean" == typeof a.enable_serial_consent && (c.enableSerialConsent = a.enable_serial_consent);
        return c
    };
    _.gS = function() {};
    gz = function(a) {
        var c = a.client_id,
            f = a.cookie_policy,
            g = a.scope,
            h = a.openid_realm,
            l = a.hosted_domain,
            n = a.oidc_spec_compliant,
            q = a.nonce,
            t = my(a),
            v = {
                authParameters: {
                    response_type: t,
                    scope: g,
                    "openid.realm": h
                },
                rpcAuthParameters: {
                    response_type: t,
                    scope: g,
                    "openid.realm": h
                },
                clientId: c,
                crossSubDomains: !0,
                domain: Ex(f),
                idpId: pF
            };
        l && (v.authParameters.hd = l, v.rpcAuthParameters.hd = l);
        n && (v.rpcAuthParameters.spec_compliant = n, q = q || _.V1());
        q && (v.authParameters.nonce = q, v.rpcAuthParameters.nonce = q, v.forceTokenRefresh = !0, v.skipTokenCache = !0);
        (0, _.Be)(EB.concat(iw), function(w) {
            a[w] && (v.authParameters[w] = a[w])
        });
        void 0 !== a.authuser && null !== a.authuser && (v.authParameters.authuser = a.authuser);
        "boolean" == typeof a.include_granted_scopes && (c = new Tm(a.response_type || "token"), Cs(c) && (v.authParameters.include_granted_scopes = a.include_granted_scopes), Ey(c) && (v.rpcAuthParameters.include_granted_scopes = a.include_granted_scopes, !1 === a.include_granted_scopes && (v.forceTokenRefresh = !0, v.skipTokenCache = !0)));
        "boolean" == typeof a.enable_serial_consent && (v.enableSerialConsent = a.enable_serial_consent);
        return v
    };
    my = function(a) {
        a = new Tm(a.response_type || "token");
        var c = [];
        Ey(a) && c.push("token");
        kn(a, "id_token") && c.push("id_token");
        0 == c.length && (c = ["token", "id_token"]);
        return c.join(" ")
    };
    ym = ["permission", "id_token"];
    zm = /(^|[^_])token/;
    Tm = function(a) {
        this.E2 = [];
        this.uja(a)
    };
    Tm.prototype.uja = function(a) {
        a ? ((0 <= a.indexOf("permission") || a.match(zm)) && this.E2.push("permission"), 0 <= a.indexOf("id_token") && this.E2.push("id_token"), 0 <= a.indexOf("code") && this.E2.push("code")) : this.E2 = ym
    };
    var Cs = function(a) {
            return kn(a, "code")
        },
        Ey = function(a) {
            return kn(a, "permission")
        };
    Tm.prototype.toString = function() {
        return this.E2.join(" ")
    };
    var kn = function(a, c) {
        var f = !1;
        (0, _.Be)(a.E2, function(g) {
            g == c && (f = !0)
        });
        return f
    };
    var HE, FQ, jF, IF, kF, EQ;
    HE = null;
    _.GQ = function() {
        return HE ? FQ() : null
    };
    FQ = function() {
        return new Ay(jF.prototype, HE, ["currentUser", "isSignedIn"])
    };
    jF = function(a) {
        delete a.include_granted_scopes;
        this.jA = Om(a);
        this.aea = a.cookie_policy;
        this.Ofa = !!a.scope;
        (this.d2 = !1 !== a.fetch_basic_profile) && (this.jA.authParameters.scope = pZ(this, "openid profile email"));
        this.Z1 = a.hosted_domain;
        this.Gka = a.ux_mode || "popup";
        this.Sia = a.redirect_uri || null;
        IF(this)
    };
    IF = function(a) {
        a.currentUser = new xF(new WE(null));
        a.isSignedIn = new xF(!1);
        a.$K = new _.bY(a.jA);
        a.z4 = null;
        a.cka = null;
        a.lga = new _.C(function(c, f) {
            this.z4 = c;
            this.cka = f
        }, a);
        a.R4 = {};
        a.GS = !0;
        kF(a);
        a.$K.start()
    };
    kF = function(a) {
        a.$K.addEventListener("error", function(c) {
            a.GS && a.z4 && (a.GS = !1, a.cka({
                error: c.error,
                details: c.details
            }), a.z4 = null, a.cka = null)
        });
        a.$K.addEventListener("authResult", function(c) {
            c && c.authResult && a.xx(c);
            a.$K.lja()(c)
        });
        a.$K.addEventListener("tokenReady", function(c) {
            var f = new WE(c.response);
            if (a.Z1 && a.Z1 != f.eU()) a.xx({
                type: "tokenFailed",
                reason: "Account domain does not match hosted_domain specified by gapi.auth2.init.",
                accountDomain: f.eU(),
                expectedDomain: a.Z1
            });
            else {
                a.currentUser.get().update(f);
                var g = a.currentUser;
                g.hg.notify(g.Ab);
                a.isSignedIn.set(!0);
                f = f.fk();
                (g = _.tY(a.aea)) && f && _.hp.set(["G_AUTHUSER_", "https:" === window.location.protocol && g.Gb ? "S" : "H", g.Ke].join(""), f, void 0, void 0, g.domain, g.isSecure);
                _.RF(c.response);
                a.xx(c)
            }
        });
        a.$K.addEventListener("noSessionBound", function(c) {
            a.GS && c.autoOpenAuthUrl ? (a.GS = !1, WW(a.$K).select(function(f) {
                if (f && f.login_hint) {
                    var g = a.$K;
                    _.gr(g, g.DS, [f.login_hint, !0])
                } else a.currentUser.set(new WE(null)), a.isSignedIn.set(!1), _.Kb(), a.xx(c)
            })) : (a.currentUser.set(new WE(null)), a.isSignedIn.set(!1), _.Kb(), a.xx(c))
        });
        a.$K.addEventListener("tokenFailed", function(c) {
            a.xx(c)
        });
        a.$K.addEventListener("userLoggedOut", function(c) {
            a.currentUser.get().BT();
            var f = a.currentUser;
            f.hg.notify(f.Ab);
            a.isSignedIn.set(!1);
            _.Kb();
            a.xx(c)
        })
    };
    EQ = function(a, c, f, g) {
        return a.lga.then(function(h) {
            if (c) return c(h.DY)
        }, f, g)
    };
    jF.prototype.xx = function(a) {
        if (a) {
            this.GS = !1;
            var c = a.type || "";
            if (this.R4[c]) this.R4[c](a);
            this.z4 && (this.z4({
                DY: this
            }), this.cka = this.z4 = null)
        }
    };
    var vP = function(a, c) {
            _.qf(c, function(f, g) {
                a.R4[g] = function(h) {
                    a.R4 = {};
                    f(h)
                }
            })
        },
        qY = function(a, c, f, g) {
            g = _.rf(g);
            a.Z1 && (g.hd = a.Z1);
            var h = g.ux_mode || a.Gka;
            delete g.ux_mode;
            delete g.app_package_name;
            var l = {
                sessionMeta: {
                    extraQueryParams: g
                },
                responseType: "permission id_token"
            };
            "redirect" == h ? (g.redirect_uri || (g.redirect_uri = a.Sia || uA() + window.location.pathname), xA(a, l)) : (delete g.redirect_uri, pP(a, l), vP(a, {
                authResult: function(n) {
                    n.authResult && n.authResult.error ? f(n.authResult) : vP(a, {
                        tokenReady: function() {
                            c(a.currentUser.get())
                        },
                        tokenFailed: f
                    })
                }
            }))
        };
    jF.prototype.W2 = function(a) {
        return new _.C(function(c, f) {
            var g = new iY(a);
            this.u7 = g.P1() ? !0 : !1;
            this.d2 ? (g.jA.fetch_basic_profile = !0, qF(g, "email profile openid")) : g.jA.fetch_basic_profile = !1;
            var h = pZ(this, g.P1());
            g.yca(h);
            qY(this, c, f, g.get())
        }, this)
    };
    jF.prototype.Q1 = function(a) {
        var c = a || {};
        this.u7 = !!c.scope;
        a = pZ(this, c.scope);
        if ("" == a) return _.$H({
            error: "Missing required parameter: scope"
        });
        var f = {
            scope: a,
            access_type: "offline",
            include_granted_scopes: !0
        };
        (0, _.Be)(UD, function(g) {
            null != c[g] && (f[g] = c[g])
        });
        f.hasOwnProperty("prompt") || f.hasOwnProperty("approval_prompt") || (f.prompt = "consent");
        return "postmessage" == c.redirect_uri || void 0 == c.redirect_uri ? OZ(this, f) : RZ(this, f, c.redirect_uri)
    };
    var RZ = function(a, c, f) {
            c.redirect_uri = f;
            xA(a, {
                sessionMeta: {
                    extraQueryParams: c
                },
                responseType: "code id_token"
            });
            return _.Nu({
                message: "Redirecting to IDP."
            })
        },
        OZ = function(a, c) {
            c.origin = uA();
            delete c.redirect_uri;
            pP(a, {
                sessionMeta: {
                    extraQueryParams: c
                },
                responseType: "code permission id_token"
            });
            return new _.C(function(f, g) {
                vP(this, {
                    authResult: function(h) {
                        (h = h && h.authResult) && h.code ? f({
                            code: h.code
                        }) : g(h && h.error ? h : {
                            error: "unknown_error"
                        })
                    }
                })
            }, a)
        },
        pP = function(a, c) {
            Gw(c, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
            rl(a.$K, ol(), c)
        },
        xA = function(a, c) {
            Gw(c, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
            c = c || {};
            window.location.assign(nv(a.$K, c.sessionMeta, c.responseType))
        };
    jF.prototype.BT = function(a) {
        var c = a || !1;
        return new _.C(function(f) {
            tE(this.$K, c, function() {
                f()
            })
        }, this)
    };
    jF.prototype.g7 = function() {
        return this.jA.authParameters.scope
    };
    var pZ = function(a, c) {
        a = a.g7();
        c = mY(c ? c.split(" ") : [], a ? a.split(" ") : []);
        _.RE(c);
        return c.join(" ")
    };
    jF.prototype.T8 = function() {
        var a = this;
        return new _.C(function(c, f) {
            vP(a, {
                noSessionBound: f,
                tokenFailed: f,
                userLoggedOut: f,
                tokenReady: function(g) {
                    c(g.response)
                }
            });
            mO(a.$K)
        })
    };
    jF.prototype.Fda = function(a, c, f, g) {
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            var h = this;
            _.ph(a, "click", function() {
                var l = c;
                "function" == typeof c && (l = c());
                h.W2(l).then(function(n) {
                    f && f(n)
                }, function(n) {
                    g && g(n)
                })
            })
        } else g && g({
            error: "Could not attach click handler to the element. Reason: element not found."
        })
    };
    jF.prototype.disconnect = function() {
        return new _.C(function(a) {
            this.$K.Ic(function() {
                a()
            })
        }, this)
    };
    var xY;
    _.C.prototype["catch"] = _.C.prototype.r9;
    xY = null;
    _.hN = function(a) {
        a = Mm(a);
        if (HE) {
            if (_.yY(a, xY || {})) return FQ();
            throw new uO("gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().");
        }
        Nm(a, !1 !== a.fetch_basic_profile);
        bm();
        xY = a;
        HE = new jF(a);
        _.bb.ga = 1;
        return FQ()
    };
    var ZF, An, Bn, uw, zn, kH;
    _.jH = function(a, c) {
        bm();
        a = Mm(a);
        Nm(a);
        var f = gz(a),
            g = new _.aK(f);
        "none" == a.prompt ? Bn(g, a, function(h) {
            h.status = h.error ? {
                signed_in: !1,
                method: null,
                google_logged_in: !1
            } : {
                signed_in: !0,
                method: "AUTO",
                google_logged_in: !0
            };
            c(h)
        }) : ZF(g, a, function(h) {
            if (h.error) h.status = {
                signed_in: !1,
                method: null,
                google_logged_in: !1
            };
            else {
                var l = h.access_token || h.id_token;
                h.status = {
                    signed_in: !!l,
                    method: "PROMPT",
                    google_logged_in: !!l
                }
            }
            h["g-oauth-window"] = g.kga.h8;
            c(h)
        })
    };
    ZF = function(a, c, f) {
        var g = new Tm(c.response_type);
        f = An(a, g, f);
        var h = {
            responseType: g.toString()
        };
        Gw(h, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], c.gsiwebsdk || "2");
        Cs(g) && Gw(h, ["sessionMeta", "extraQueryParams", "access_type"], c.access_type || "offline");
        c.redirect_uri && Gw(h, ["sessionMeta", "extraQueryParams", "redirect_uri"], c.redirect_uri);
        c.state && Gw(h, ["sessionMeta", "extraQueryParams", "state"], c.state);
        c = ol();
        a.RV ? f({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.vY().error
            }
        }) : (a.V5 = f, rl(a, c, h))
    };
    An = function(a, c, f) {
        if (Ey(c)) {
            var g = zn(f);
            return function(h) {
                h && h.authResult && !h.authResult.error ? a.lja(function(l) {
                    l && !l.error ? (l = _.rf(l), Cs(c) && (l.code = h.authResult.code), g(l)) : g(l ? l : {
                        error: "unknown_error"
                    })
                })(h) : g(h && h.authResult ? h.authResult : {
                    error: "unknown_error"
                })
            }
        }
        return function(h) {
            h && h.authResult && !h.authResult.error ? f(_.rf(h.authResult)) : f(h && h.authResult ? h.authResult : {
                error: "unknown_error"
            })
        }
    };
    Bn = function(a, c, f) {
        if (Cs(new Tm(c.response_type)) && "offline" == c.access_type) f({
            error: "immediate_failed",
            error_subtype: "access_denied"
        });
        else {
            var g = zn(f);
            c.login_hint ? a.S3(c.login_hint, function(h) {
                h ? uw(a, c, h, g) : f({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : void 0 !== c.authuser && null !== c.authuser ? lX(a, c.authuser).select(function(h) {
                h && h.login_hint ? uw(a, c, h.login_hint, g) : g({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : a.H1(function(h) {
                h && h.hint ? uw(a, c, h.hint, g) : h && h.disabled ? g({
                    error: "immediate_failed",
                    error_subtype: "no_user_bound"
                }) : ("first_valid" == c.session_selection ? iv(a) : WW(a)).select(function(l) {
                    l && l.login_hint ? uw(a, c, l.login_hint, g) : g({
                        error: "immediate_failed",
                        error_subtype: "no_user_bound"
                    })
                })
            })
        }
    };
    uw = function(a, c, f, g) {
        c = new Tm(c.response_type);
        var h = 0,
            l = {},
            n = function(q) {
                !q || q.error ? g(q) : (h--, _.sf(l, q), 0 == h && g(l))
            };
        (Ey(c) || kn(c, "id_token")) && h++;
        Cs(c) && h++;
        (Ey(c) || kn(c, "id_token")) && _.OF(a, f, n);
        Cs(c) && V_(a, f, n)
    };
    zn = function(a) {
        return function(c) {
            if (!c || c.error) _.Kb(), c ? a(c) : a({
                error: "unknown_error"
            });
            else {
                if (c.access_token) {
                    var f = _.rf(c);
                    kH(f);
                    delete f.id_token;
                    delete f.code;
                    _.RF(f)
                }
                a(c)
            }
        }
    };
    kH = function(a) {
        (0, _.Be)(WF, function(c) {
            delete a[c]
        })
    };
    _.Mu("gapi.auth2.init", _.hN);
    _.Mu("gapi.auth2.authorize", function(a, c) {
        if (null != HE) throw new uO("gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters).");
        _.jH(a, function(f) {
            kH(f);
            c(f)
        })
    });
    _.Mu("gapi.auth2._gt", function() {
        return _.au()
    });
    _.Mu("gapi.auth2.enableDebugLogs", function(a) {
        a = !1 !== a;
        _.c_ = "0" != a && !!a
    });
    _.Mu("gapi.auth2.getAuthInstance", _.GQ);
    _.Mu("gapi.auth2.BasicProfile", PG);
    _.Mu("gapi.auth2.BasicProfile.prototype.getId", PG.prototype.getId);
    _.Mu("gapi.auth2.BasicProfile.prototype.getName", PG.prototype.getName);
    _.Mu("gapi.auth2.BasicProfile.prototype.getGivenName", PG.prototype.CY);
    _.Mu("gapi.auth2.BasicProfile.prototype.getFamilyName", PG.prototype.BY);
    _.Mu("gapi.auth2.BasicProfile.prototype.getImageUrl", PG.prototype.Uea);
    _.Mu("gapi.auth2.BasicProfile.prototype.getEmail", PG.prototype.a4);
    _.Mu("gapi.auth2.GoogleAuth", jF);
    _.Mu("gapi.auth2.GoogleAuth.prototype.attachClickHandler", jF.prototype.Fda);
    _.Mu("gapi.auth2.GoogleAuth.prototype.disconnect", jF.prototype.disconnect);
    _.Mu("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", jF.prototype.Q1);
    _.Mu("gapi.auth2.GoogleAuth.prototype.signIn", jF.prototype.W2);
    _.Mu("gapi.auth2.GoogleAuth.prototype.signOut", jF.prototype.BT);
    _.Mu("gapi.auth2.GoogleAuth.prototype.getInitialScopes", jF.prototype.g7);
    _.Mu("gapi.auth2.GoogleUser", WE);
    _.Mu("gapi.auth2.GoogleUser.prototype.grant", WE.prototype.sY);
    _.Mu("gapi.auth2.GoogleUser.prototype.getId", WE.prototype.getId);
    _.Mu("gapi.auth2.GoogleUser.prototype.isSignedIn", WE.prototype.jz);
    _.Mu("gapi.auth2.GoogleUser.prototype.getAuthResponse", WE.prototype.DT);
    _.Mu("gapi.auth2.GoogleUser.prototype.getBasicProfile", WE.prototype.rY);
    _.Mu("gapi.auth2.GoogleUser.prototype.getGrantedScopes", WE.prototype.Dl);
    _.Mu("gapi.auth2.GoogleUser.prototype.getHostedDomain", WE.prototype.eU);
    _.Mu("gapi.auth2.GoogleUser.prototype.grantOfflineAccess", WE.prototype.Q1);
    _.Mu("gapi.auth2.GoogleUser.prototype.hasGrantedScopes", WE.prototype.qV);
    _.Mu("gapi.auth2.GoogleUser.prototype.reloadAuthResponse", WE.prototype.T8);
    _.Mu("gapi.auth2.LiveValue", xF);
    _.Mu("gapi.auth2.LiveValue.prototype.listen", xF.prototype.Ei);
    _.Mu("gapi.auth2.LiveValue.prototype.get", xF.prototype.get);
    _.Mu("gapi.auth2.SigninOptionsBuilder", iY);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName", iY.prototype.Fea);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName", iY.prototype.Pha);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getScope", iY.prototype.P1);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setScope", iY.prototype.yca);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", iY.prototype.ifa);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", iY.prototype.Vha);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.get", iY.prototype.get);
    _.gS = function(a, c) {
        var f = c.oidc_spec_compliant;
        c = c.nonce;
        f && (a.spec_compliant = f, c = c || _.V1());
        c && (a.authParameters.nonce = c, a.forceTokenRefresh = !0, a.skipTokenCache = !0)
    };
    (function() {
        function a(h, l) {
            if (!(h < f) && g)
                if (2 === h && g.warn) g.warn(l);
                else if (3 === h && g.error) try {
                g.error(l)
            } catch (n) {} else g.log && g.log(l)
        }
        var c = function(h) {
            a(1, h)
        };
        _.Lb = function(h) {
            a(2, h)
        };
        _.sa = function(h) {
            a(3, h)
        };
        _.Fc = function() {};
        c.INFO = 1;
        c.WARNING = 2;
        c.NONE = 4;
        var f = 1,
            g = window.console ? window.console : window.opera ? window.opera.postError : void 0;
        return c
    })();
    _.fq = function(a) {
        return encodeURIComponent(String(a))
    };
    _.Eh = function(a) {
        return null == a ? "" : String(a)
    };
    _.Xi = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.Am = function(a, c) {
        if (!c) return a;
        var f = a.indexOf("#");
        0 > f && (f = a.length);
        var g = a.indexOf("?");
        if (0 > g || g > f) {
            g = f;
            var h = ""
        } else h = a.substring(g + 1, f);
        a = [a.substr(0, g), h, a.substr(f)];
        f = a[1];
        a[1] = c ? f ? f + "&" + c : c : f;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };
    _.$i = function(a, c, f) {
        if (_.ea(c))
            for (var g = 0; g < c.length; g++) _.$i(a, String(c[g]), f);
        else null != c && f.push(a + ("" === c ? "" : "=" + _.fq(c)))
    };
    _.Bm = function(a) {
        var c = [],
            f;
        for (f in a) _.$i(f, a[f], c);
        return c.join("&")
    };
    _.Dm = function(a, c) {
        c = _.Bm(c);
        return _.Am(a, c)
    };
    _.Nb = function(a, c, f) {
        for (var g = 0, h = c.length; 0 <= (g = a.indexOf(c, g)) && g < f;) {
            var l = a.charCodeAt(g - 1);
            if (38 == l || 63 == l)
                if (l = a.charCodeAt(g + h), !l || 61 == l || 38 == l || 35 == l) return g;
            g += h + 1
        }
        return -1
    };
    _.jZ = /#|$/;
    var mm, uu, sm, tm, SP, Dg, dg, eg, bg;
    _.Ne = function(a, c) {
        return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
    };
    _.X = function(a, c) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== c ? c : 0
    };
    _.k = _.X.prototype;
    _.k.clone = function() {
        return new _.X(this.x, this.y)
    };
    _.k.equals = function(a) {
        return a instanceof _.X && _.Ne(this, a)
    };
    _.k.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.k.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.k.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.k.translate = function(a, c) {
        a instanceof _.X ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof c && (this.y += c));
        return this
    };
    _.k.scale = function(a, c) {
        this.x *= a;
        this.y *= "number" === typeof c ? c : a;
        return this
    };
    _.fg = function(a, c) {
        this.width = a;
        this.height = c
    };
    _.k = _.fg.prototype;
    _.k.clone = function() {
        return new _.fg(this.width, this.height)
    };
    _.k.aspectRatio = function() {
        return this.width / this.height
    };
    _.k.isEmpty = function() {
        return !(this.width * this.height)
    };
    _.k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.k.scale = function(a, c) {
        this.width *= a;
        this.height *= "number" === typeof c ? c : a;
        return this
    };
    _.Lf = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Ct = function(a) {
        a = a.document;
        a = _.Lf(a) ? a.documentElement : a.body;
        return new _.fg(a.clientWidth, a.clientHeight)
    };
    _.ig = function(a) {
        return _.Ct(a || window)
    };
    _.Kf = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.ef && _.Lf(a) ? a.documentElement : a.body || a.documentElement
    };
    _.Jf = function(a) {
        var c = _.Kf(a);
        a = a.parentWindow || a.defaultView;
        return _.W && _.sl("10") && a.pageYOffset != c.scrollTop ? new _.X(c.scrollLeft, c.scrollTop) : new _.X(a.pageXOffset || c.scrollLeft, a.pageYOffset || c.scrollTop)
    };
    _.EO = function(a, c, f, g) {
        return _.Cf(a.wc, c, f, g)
    };
    _.Ae = function(a, c, f) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, f)
    };
    _.Gp = function(a, c, f, g) {
        return Array.prototype.splice.apply(a, _.Ae(arguments, 1))
    };
    _.CM = function(a, c, f) {
        if (null !== a && c in a) throw Error("p`" + c);
        a[c] = f
    };
    mm = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    _.wm = function(a) {
        if (a instanceof _.xm && a.constructor === _.xm && a.pda === _.Bl) return a.L8;
        _.da(a);
        return "type_error:SafeStyleSheet"
    };
    uu = /^[a-zA-Z0-9-]+$/;
    sm = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    tm = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    SP = function(a) {
        var c = _.eG(_.RG),
            f = c.Im(),
            g = [],
            h = function(l) {
                _.ea(l) ? (0, _.Be)(l, h) : (l = _.eG(l), g.push(_.OG(l).toString()), l = l.Im(), 0 == f ? f = l : 0 != l && f != l && (f = null))
            };
        (0, _.Be)(a, h);
        return _.uf(g.join(_.OG(c).toString()), f)
    };
    _.tu = function(a) {
        return SP(Array.prototype.slice.call(arguments))
    };
    _.Dr = function(a, c, f) {
        var g = String(a);
        if (!uu.test(g)) throw Error("y");
        if (g.toUpperCase() in tm) throw Error("y");
        a = String(a);
        g = null;
        var h = "<" + a,
            l = "";
        if (c)
            for (t in c) {
                if (!uu.test(t)) throw Error("y");
                var n = c[t];
                if (null != n) {
                    var q = t;
                    if (n instanceof _.ou) n = _.ru(n);
                    else if ("style" == q.toLowerCase()) {
                        if (!_.Vg(n)) throw Error("y");
                        n instanceof _.pm || (n = _.cp(n));
                        n = _.Bw(n)
                    } else {
                        if (/^on/i.test(q)) throw Error("y");
                        if (q.toLowerCase() in sm)
                            if (n instanceof _.qE) n = _.wx(n);
                            else if (n instanceof _.su) n = _.oG(n).toString();
                        else if ("string" === typeof n) n = _.jw(n).cR();
                        else throw Error("y");
                    }
                    n.nK && (n = n.cR());
                    q = q + '="' + _.jr(String(n)) + '"';
                    l += " " + q
                }
            }
        var t = h + l;
        null == f ? f = [] : _.ea(f) || (f = [f]);
        !0 === mm[a.toLowerCase()] ? t += ">" : (f = _.tu(f), t += ">" + _.OG(f).toString() + "</" + a + ">", g = f.Im());
        (c = c && c.dir) && (g = /^(ltr|rtl|auto)$/i.test(c) ? 0 : null);
        return _.uf(t, g)
    };
    Dg = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(c, f, g) {
            return f + g.toUpperCase()
        })
    };
    _.Ng = function(a, c, f) {
        return _.Mf(document, arguments)
    };
    _.bw = function(a) {
        var c;
        if (_.Zn && !(_.W && _.sl("9") && !_.sl("10") && _.D.SVGElement && a instanceof _.D.SVGElement) && (c = a.parentElement)) return c;
        c = a.parentNode;
        return _.iz(c) ? c : null
    };
    dg = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    eg = {
        IMG: " ",
        BR: "\n"
    };
    bg = function(a, c, f) {
        if (!(a.nodeName in dg))
            if (3 == a.nodeType) f ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
            else if (a.nodeName in eg) c.push(eg[a.nodeName]);
        else
            for (a = a.firstChild; a;) bg(a, c, f), a = a.nextSibling
    };
    _.$f = function(a) {
        if (_.ag && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var c = [];
            bg(a, c, !0);
            a = c.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        _.ag || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    };
    _.cg = function(a) {
        var c = [];
        bg(a, c, !1);
        return c.join("")
    };
    _.Pg = function(a, c, f, g) {
        this.top = a;
        this.right = c;
        this.bottom = f;
        this.left = g
    };
    _.k = _.Pg.prototype;
    _.k.Ne = function() {
        return this.right - this.left
    };
    _.k.getHeight = function() {
        return this.bottom - this.top
    };
    _.k.clone = function() {
        return new _.Pg(this.top, this.right, this.bottom, this.left)
    };
    _.k.contains = function(a) {
        return this && a ? a instanceof _.Pg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.k.expand = function(a, c, f, g) {
        _.Vg(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(c), this.bottom += Number(f), this.left -= Number(g));
        return this
    };
    _.k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    _.k.translate = function(a, c) {
        a instanceof _.X ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof c && (this.top += c, this.bottom += c));
        return this
    };
    _.k.scale = function(a, c) {
        c = "number" === typeof c ? c : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };
    var bZ, qg, xg, zg, Sg, Rg;
    _.Mg = function(a, c, f) {
        if ("string" === typeof c)(c = _.Fg(a, c)) && (a.style[c] = f);
        else
            for (var g in c) {
                f = a;
                var h = c[g],
                    l = _.Fg(f, g);
                l && (f.style[l] = h)
            }
    };
    bZ = {};
    _.Fg = function(a, c) {
        var f = bZ[c];
        if (!f) {
            var g = _.Cg(c);
            f = g;
            void 0 === a.style[g] && (g = (_.ef ? "Webkit" : _.df ? "Moz" : _.W ? "ms" : _.cf ? "O" : null) + Dg(g), void 0 !== a.style[g] && (f = g));
            bZ[c] = f
        }
        return f
    };
    _.lg = function(a, c) {
        var f = _.zf(a);
        return f.defaultView && f.defaultView.getComputedStyle && (a = f.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
    };
    _.mg = function(a, c) {
        return a.currentStyle ? a.currentStyle[c] : null
    };
    _.ng = function(a, c) {
        return _.lg(a, c) || _.mg(a, c) || a.style && a.style[c]
    };
    _.Zg = function(a, c, f) {
        if (c instanceof _.X) {
            var g = c.x;
            c = c.y
        } else g = c, c = f;
        a.style.left = xg(g, !1);
        a.style.top = xg(c, !1)
    };
    qg = function(a) {
        try {
            var c = a.getBoundingClientRect()
        } catch (f) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        _.W && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
        return c
    };
    _.Yr = function(a, c) {
        c = c || _.Kf(document);
        var f = c || _.Kf(document);
        var g = _.sg(a),
            h = _.sg(f),
            l = _.Ug(f);
        if (f == _.Kf(document)) {
            var n = g.x - f.scrollLeft;
            g = g.y - f.scrollTop;
            _.W && !_.gq(10) && (n += l.left, g += l.top)
        } else n = g.x - h.x - l.left, g = g.y - h.y - l.top;
        a = zg(a);
        l = f.clientHeight - a.height;
        h = f.scrollLeft;
        var q = f.scrollTop;
        h += Math.min(n, Math.max(n - (f.clientWidth - a.width), 0));
        q += Math.min(g, Math.max(g - l, 0));
        f = new _.X(h, q);
        c.scrollLeft = f.x;
        c.scrollTop = f.y
    };
    _.sg = function(a) {
        var c = _.zf(a),
            f = new _.X(0, 0);
        var g = c ? _.zf(c) : document;
        g = !_.W || _.gq(9) || _.Lf(_.xf(g).wc) ? g.documentElement : g.body;
        if (a == g) return f;
        a = qg(a);
        c = _.Jf(_.xf(c).wc);
        f.x = a.left + c.x;
        f.y = a.top + c.y;
        return f
    };
    _.tg = function(a, c) {
        var f = new _.X(0, 0),
            g = _.jg(_.zf(a));
        if (!_.Eo(g, "parent")) return f;
        do {
            var h = g == c ? _.sg(a) : _.Kt(a);
            f.x += h.x;
            f.y += h.y
        } while (g && g != c && g != g.parent && (a = g.frameElement) && (g = g.parent));
        return f
    };
    _.Kt = function(a) {
        a = qg(a);
        return new _.X(a.left, a.top)
    };
    _.wg = function(a, c, f) {
        if (c instanceof _.fg) f = c.height, c = c.width;
        else if (void 0 == f) throw Error("r");
        a.style.width = xg(c, !0);
        a.style.height = xg(f, !0)
    };
    xg = function(a, c) {
        "number" == typeof a && (a = (c ? Math.round(a) : a) + "px");
        return a
    };
    _.Nt = function(a) {
        var c = zg;
        if ("none" != _.ng(a, "display")) return c(a);
        var f = a.style,
            g = f.display,
            h = f.visibility,
            l = f.position;
        f.visibility = "hidden";
        f.position = "absolute";
        f.display = "inline";
        a = c(a);
        f.display = g;
        f.position = l;
        f.visibility = h;
        return a
    };
    zg = function(a) {
        var c = a.offsetWidth,
            f = a.offsetHeight,
            g = _.ef && !c && !f;
        return (void 0 === c || g) && a.getBoundingClientRect ? (a = qg(a), new _.fg(a.right - a.left, a.bottom - a.top)) : new _.fg(c, f)
    };
    _.Ag = function(a, c) {
        a = a.style;
        "opacity" in a ? a.opacity = c : "MozOpacity" in a ? a.MozOpacity = c : "filter" in a && (a.filter = "" === c ? "" : "alpha(opacity=" + 100 * Number(c) + ")")
    };
    _.Rj = function(a, c) {
        a.style.display = c ? "" : "none"
    };
    _.tO = function(a) {
        var c = _.xf(void 0),
            f = c.Wb();
        if (_.W && f.createStyleSheet) return c = f.createStyleSheet(), _.QF(c, a), c;
        f = _.EO(c, "HEAD")[0];
        if (!f) {
            var g = _.EO(c, "BODY")[0];
            f = c.R("HEAD");
            g.parentNode.insertBefore(f, g)
        }
        g = c.R("STYLE");
        _.QF(g, a);
        c.appendChild(f, g);
        return g
    };
    _.QF = function(a, c) {
        c = _.wm(c);
        _.W && void 0 !== a.cssText ? a.cssText = c : a.innerHTML = c
    };
    _.Eg = function(a) {
        return "rtl" == _.ng(a, "direction")
    };
    _.Bg = _.df ? "MozUserSelect" : _.ef || _.yk ? "WebkitUserSelect" : null;
    _.Qg = function(a, c) {
        if (/^\d+px?$/.test(c)) return parseInt(c, 10);
        var f = a.style.left,
            g = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = f;
        a.runtimeStyle.left = g;
        return +c
    };
    Sg = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    Rg = function(a, c) {
        if ("none" == _.mg(a, c + "Style")) return 0;
        c = _.mg(a, c + "Width");
        return c in Sg ? Sg[c] : _.Qg(a, c)
    };
    _.Ug = function(a) {
        if (_.W && !_.gq(9)) {
            var c = Rg(a, "borderLeft"),
                f = Rg(a, "borderRight"),
                g = Rg(a, "borderTop");
            a = Rg(a, "borderBottom");
            return new _.Pg(g, f, a, c)
        }
        c = _.lg(a, "borderLeftWidth");
        f = _.lg(a, "borderRightWidth");
        g = _.lg(a, "borderTopWidth");
        a = _.lg(a, "borderBottomWidth");
        return new _.Pg(parseFloat(g), parseFloat(f), parseFloat(a), parseFloat(c))
    };
    _.Sf = function(a, c) {
        c.parentNode && c.parentNode.insertBefore(a, c.nextSibling)
    };
    _.Si = "StopIteration" in _.D ? _.D.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    _.Mi = function() {};
    _.Mi.prototype.next = function() {
        throw _.Si;
    };
    _.Mi.prototype.xc = function() {
        return this
    };
    _.Pi = function(a, c) {
        this.Ka = {};
        this.Ye = [];
        this.IE = this.Kf = 0;
        var f = arguments.length;
        if (1 < f) {
            if (f % 2) throw Error("q");
            for (var g = 0; g < f; g += 2) this.set(arguments[g], arguments[g + 1])
        } else a && this.addAll(a)
    };
    _.k = _.Pi.prototype;
    _.k.Da = function() {
        return this.Kf
    };
    _.k.Va = function() {
        Qi(this);
        for (var a = [], c = 0; c < this.Ye.length; c++) a.push(this.Ka[this.Ye[c]]);
        return a
    };
    _.k.$b = function() {
        Qi(this);
        return this.Ye.concat()
    };
    _.k.YR = function(a) {
        return _.Ri(this.Ka, a)
    };
    _.k.zn = _.b(4);
    _.k.equals = function(a, c) {
        if (this === a) return !0;
        if (this.Kf != a.Da()) return !1;
        c = c || kA;
        Qi(this);
        for (var f, g = 0; f = this.Ye[g]; g++)
            if (!c(this.get(f), a.get(f))) return !1;
        return !0
    };
    var kA = function(a, c) {
        return a === c
    };
    _.Pi.prototype.isEmpty = function() {
        return 0 == this.Kf
    };
    _.Pi.prototype.clear = function() {
        this.Ka = {};
        this.IE = this.Kf = this.Ye.length = 0
    };
    _.Pi.prototype.remove = function(a) {
        return _.Ri(this.Ka, a) ? (delete this.Ka[a], this.Kf--, this.IE++, this.Ye.length > 2 * this.Kf && Qi(this), !0) : !1
    };
    var Qi = function(a) {
        if (a.Kf != a.Ye.length) {
            for (var c = 0, f = 0; c < a.Ye.length;) {
                var g = a.Ye[c];
                _.Ri(a.Ka, g) && (a.Ye[f++] = g);
                c++
            }
            a.Ye.length = f
        }
        if (a.Kf != a.Ye.length) {
            var h = {};
            for (f = c = 0; c < a.Ye.length;) g = a.Ye[c], _.Ri(h, g) || (a.Ye[f++] = g, h[g] = 1), c++;
            a.Ye.length = f
        }
    };
    _.k = _.Pi.prototype;
    _.k.get = function(a, c) {
        return _.Ri(this.Ka, a) ? this.Ka[a] : c
    };
    _.k.set = function(a, c) {
        _.Ri(this.Ka, a) || (this.Kf++, this.Ye.push(a), this.IE++);
        this.Ka[a] = c
    };
    _.k.addAll = function(a) {
        if (a instanceof _.Pi)
            for (var c = a.$b(), f = 0; f < c.length; f++) this.set(c[f], a.get(c[f]));
        else
            for (c in a) this.set(c, a[c])
    };
    _.k.forEach = function(a, c) {
        for (var f = this.$b(), g = 0; g < f.length; g++) {
            var h = f[g],
                l = this.get(h);
            a.call(c, l, h, this)
        }
    };
    _.k.clone = function() {
        return new _.Pi(this)
    };
    _.k.xc = function(a) {
        Qi(this);
        var c = 0,
            f = this.IE,
            g = this,
            h = new _.Mi;
        h.next = function() {
            if (f != g.IE) throw Error("z");
            if (c >= g.Ye.length) throw _.Si;
            var l = g.Ye[c++];
            return a ? l : g.Ka[l]
        };
        return h
    };
    _.Ri = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    _.Li = function(a) {
        var c = [],
            f = 0,
            g;
        for (g in a) c[f++] = a[g];
        return c
    };
    _.Ki = function(a) {
        var c = [],
            f = 0,
            g;
        for (g in a) c[f++] = g;
        return c
    };
    _.yH = function(a, c) {
        var f = _.re(c),
            g = f ? c : arguments;
        for (f = f ? 0 : 1; f < g.length; f++) {
            if (null == a) return;
            a = a[g[f]]
        }
        return a
    };
    _.Ni = function(a) {
        if (a.Va && "function" == typeof a.Va) return a.Va();
        if ("string" === typeof a) return a.split("");
        if (_.re(a)) {
            for (var c = [], f = a.length, g = 0; g < f; g++) c.push(a[g]);
            return c
        }
        return _.Li(a)
    };
    _.hz = function(a) {
        if (a.$b && "function" == typeof a.$b) return a.$b();
        if (!a.Va || "function" != typeof a.Va) {
            if (_.re(a) || "string" === typeof a) {
                var c = [];
                a = a.length;
                for (var f = 0; f < a; f++) c.push(f);
                return c
            }
            return _.Ki(a)
        }
    };
    _.Oi = function(a, c, f) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(c, f);
        else if (_.re(a) || "string" === typeof a)(0, _.Be)(a, c, f);
        else
            for (var g = _.hz(a), h = _.Ni(a), l = h.length, n = 0; n < l; n++) c.call(f, h[n], g && g[n], a)
    };
    var jB, LA, lj, oj, sj, uj, tj, mj, vj, pj;
    _.wT = function(a) {
        if (!(a instanceof Array)) {
            a = _.PK(a);
            for (var c, f = []; !(c = a.next()).done;) f.push(c.value);
            a = f
        }
        return a
    };
    _.kD = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, _.pa)()).toString(36)
    };
    _.as = function(a, c) {
        var f = c || document;
        return f.querySelectorAll && f.querySelector ? f.querySelectorAll("." + a) : _.Cf(document, "*", a, c)
    };
    jB = function(a, c) {
        if (a) {
            a = a.split("&");
            for (var f = 0; f < a.length; f++) {
                var g = a[f].indexOf("="),
                    h = null;
                if (0 <= g) {
                    var l = a[f].substring(0, g);
                    h = a[f].substring(g + 1)
                } else l = a[f];
                c(l, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
            }
        }
    };
    _.lZ = function(a, c) {
        var f = a.search(_.jZ),
            g = _.Nb(a, c, f);
        if (0 > g) return null;
        var h = a.indexOf("&", g);
        if (0 > h || h > f) h = f;
        g += c.length + 1;
        return decodeURIComponent(a.substr(g, h - g).replace(/\+/g, " "))
    };
    _.cj = function(a, c) {
        this.Ix = this.xC = this.KA = "";
        this.PT = null;
        this.X6 = this.iW = "";
        this.zD = this.I7 = !1;
        var f;
        a instanceof _.cj ? (this.zD = void 0 !== c ? c : a.zD, _.KA(this, a.KA), _.ZN(this, a.xC), _.fm(this, a.Ix), _.gj(this, a.PT), this.setPath(a.getPath()), _.hj(this, a.Xq.clone()), this.i_(a.b4())) : a && (f = String(a).match(_.Xi)) ? (this.zD = !!c, _.KA(this, f[1] || "", !0), _.ZN(this, f[2] || "", !0), _.fm(this, f[3] || "", !0), _.gj(this, f[4]), this.setPath(f[5] || "", !0), _.hj(this, f[6] || "", !0), this.i_(f[7] || "", !0)) : (this.zD = !!c, this.Xq = new _.ij(null, this.zD))
    };
    _.cj.prototype.toString = function() {
        var a = [],
            c = this.KA;
        c && a.push(lj(c, sj, !0), ":");
        var f = this.Ix;
        if (f || "file" == c) a.push("//"), (c = this.xC) && a.push(lj(c, sj, !0), "@"), a.push(_.fq(f).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), f = this.PT, null != f && a.push(":", String(f));
        if (f = this.getPath()) this.Ix && "/" != f.charAt(0) && a.push("/"), a.push(lj(f, "/" == f.charAt(0) ? tj : uj, !0));
        (f = this.Xq.toString()) && a.push("?", f);
        (f = this.b4()) && a.push("#", lj(f, vj));
        return a.join("")
    };
    _.cj.prototype.resolve = function(a) {
        var c = this.clone(),
            f = !!a.KA;
        f ? _.KA(c, a.KA) : f = !!a.xC;
        f ? _.ZN(c, a.xC) : f = !!a.Ix;
        f ? _.fm(c, a.Ix) : f = null != a.PT;
        var g = a.getPath();
        if (f) _.gj(c, a.PT);
        else if (f = !!a.iW) {
            if ("/" != g.charAt(0))
                if (this.Ix && !this.iW) g = "/" + g;
                else {
                    var h = c.getPath().lastIndexOf("/"); - 1 != h && (g = c.getPath().substr(0, h + 1) + g)
                }
            h = g;
            if (".." == h || "." == h) g = "";
            else if (-1 != h.indexOf("./") || -1 != h.indexOf("/.")) {
                g = _.Xg(h, "/");
                h = h.split("/");
                for (var l = [], n = 0; n < h.length;) {
                    var q = h[n++];
                    "." == q ? g && n == h.length && l.push("") : ".." == q ? ((1 < l.length || 1 == l.length && "" != l[0]) && l.pop(), g && n == h.length && l.push("")) : (l.push(q), g = !0)
                }
                g = l.join("/")
            } else g = h
        }
        f ? c.setPath(g) : f = a.Fc();
        f ? _.hj(c, a.Xq.clone()) : f = !!a.X6;
        f && c.i_(a.b4());
        return c
    };
    _.cj.prototype.clone = function() {
        return new _.cj(this)
    };
    _.KA = function(a, c, f) {
        _.GU(a);
        a.KA = f ? LA(c, !0) : c;
        a.KA && (a.KA = a.KA.replace(/:$/, ""));
        return a
    };
    _.ZN = function(a, c, f) {
        _.GU(a);
        a.xC = f ? LA(c) : c;
        return a
    };
    _.fm = function(a, c, f) {
        _.GU(a);
        a.Ix = f ? LA(c, !0) : c;
        return a
    };
    _.gj = function(a, c) {
        _.GU(a);
        if (c) {
            c = Number(c);
            if (isNaN(c) || 0 > c) throw Error("B`" + c);
            a.PT = c
        } else a.PT = null;
        return a
    };
    _.cj.prototype.getPath = function() {
        return this.iW
    };
    _.cj.prototype.setPath = function(a, c) {
        _.GU(this);
        this.iW = c ? LA(a, !0) : a;
        return this
    };
    _.cj.prototype.Fc = function() {
        return "" !== this.Xq.toString()
    };
    _.hj = function(a, c, f) {
        _.GU(a);
        c instanceof _.ij ? (a.Xq = c, a.Xq.s9(a.zD)) : (f || (c = lj(c, mj)), a.Xq = new _.ij(c, a.zD));
        return a
    };
    _.cj.prototype.uj = function(a, c) {
        return _.hj(this, a, c)
    };
    _.cj.prototype.getQuery = function() {
        return this.Xq.toString()
    };
    _.nj = function(a, c, f) {
        _.GU(a);
        a.Xq.set(c, f);
        return a
    };
    _.cj.prototype.Mh = function(a) {
        return this.Xq.get(a)
    };
    _.cj.prototype.b4 = function() {
        return this.X6
    };
    _.cj.prototype.i_ = function(a, c) {
        _.GU(this);
        this.X6 = c ? LA(a) : a;
        return this
    };
    _.cj.prototype.removeParameter = function(a) {
        _.GU(this);
        this.Xq.remove(a);
        return this
    };
    _.GU = function(a) {
        if (a.I7) throw Error("C");
    };
    _.cj.prototype.s9 = function(a) {
        this.zD = a;
        this.Xq && this.Xq.s9(a)
    };
    _.Kp = function(a) {
        return a instanceof _.cj ? a.clone() : new _.cj(a, void 0)
    };
    LA = function(a, c) {
        return a ? c ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    };
    lj = function(a, c, f) {
        return "string" === typeof a ? (a = encodeURI(a).replace(c, oj), f && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    };
    oj = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    };
    sj = /[#\/\?@]/g;
    uj = /[#\?:]/g;
    tj = /[#\?]/g;
    mj = /[#\?@]/g;
    vj = /#/g;
    _.ij = function(a, c) {
        this.Kf = this.hj = null;
        this.mA = a || null;
        this.zD = !!c
    };
    pj = function(a) {
        a.hj || (a.hj = new _.Pi, a.Kf = 0, a.mA && jB(a.mA, function(c, f) {
            a.add(decodeURIComponent(c.replace(/\+/g, " ")), f)
        }))
    };
    _.k = _.ij.prototype;
    _.k.Da = function() {
        pj(this);
        return this.Kf
    };
    _.k.add = function(a, c) {
        pj(this);
        this.mA = null;
        a = qj(this, a);
        var f = this.hj.get(a);
        f || this.hj.set(a, f = []);
        f.push(c);
        this.Kf += 1;
        return this
    };
    _.k.remove = function(a) {
        pj(this);
        a = qj(this, a);
        return this.hj.YR(a) ? (this.mA = null, this.Kf -= this.hj.get(a).length, this.hj.remove(a)) : !1
    };
    _.k.clear = function() {
        this.hj = this.mA = null;
        this.Kf = 0
    };
    _.k.isEmpty = function() {
        pj(this);
        return 0 == this.Kf
    };
    _.k.YR = function(a) {
        pj(this);
        a = qj(this, a);
        return this.hj.YR(a)
    };
    _.k.zn = function(a) {
        var c = this.Va();
        return _.ve(c, a)
    };
    _.k.forEach = function(a, c) {
        pj(this);
        this.hj.forEach(function(f, g) {
            (0, _.Be)(f, function(h) {
                a.call(c, h, g, this)
            }, this)
        }, this)
    };
    _.k.$b = function() {
        pj(this);
        for (var a = this.hj.Va(), c = this.hj.$b(), f = [], g = 0; g < c.length; g++)
            for (var h = a[g], l = 0; l < h.length; l++) f.push(c[g]);
        return f
    };
    _.k.Va = function(a) {
        pj(this);
        var c = [];
        if ("string" === typeof a) this.YR(a) && (c = _.bj(c, this.hj.get(qj(this, a))));
        else {
            a = this.hj.Va();
            for (var f = 0; f < a.length; f++) c = _.bj(c, a[f])
        }
        return c
    };
    _.k.set = function(a, c) {
        pj(this);
        this.mA = null;
        a = qj(this, a);
        this.YR(a) && (this.Kf -= this.hj.get(a).length);
        this.hj.set(a, [c]);
        this.Kf += 1;
        return this
    };
    _.k.get = function(a, c) {
        if (!a) return c;
        a = this.Va(a);
        return 0 < a.length ? String(a[0]) : c
    };
    _.k.setValues = function(a, c) {
        this.remove(a);
        0 < c.length && (this.mA = null, this.hj.set(qj(this, a), _.ze(c)), this.Kf += c.length)
    };
    _.k.toString = function() {
        if (this.mA) return this.mA;
        if (!this.hj) return "";
        for (var a = [], c = this.hj.$b(), f = 0; f < c.length; f++) {
            var g = c[f],
                h = _.fq(g);
            g = this.Va(g);
            for (var l = 0; l < g.length; l++) {
                var n = h;
                "" !== g[l] && (n += "=" + _.fq(g[l]));
                a.push(n)
            }
        }
        return this.mA = a.join("&")
    };
    _.k.clone = function() {
        var a = new _.ij;
        a.mA = this.mA;
        this.hj && (a.hj = this.hj.clone(), a.Kf = this.Kf);
        return a
    };
    var qj = function(a, c) {
        c = String(c);
        a.zD && (c = c.toLowerCase());
        return c
    };
    _.ij.prototype.s9 = function(a) {
        a && !this.zD && (pj(this), this.mA = null, this.hj.forEach(function(c, f) {
            var g = f.toLowerCase();
            f != g && (this.remove(f), this.setValues(g, c))
        }, this));
        this.zD = a
    };
    _.ij.prototype.extend = function(a) {
        for (var c = 0; c < arguments.length; c++) _.Oi(arguments[c], function(f, g) {
            this.add(g, f)
        }, this)
    };
    _.W && _.sl(8);
    var ap, Vk;
    ap = {};
    _.OT = {};
    _.So = function() {
        throw Error("L");
    };
    _.So.prototype.wu = null;
    _.So.prototype.getContent = function() {
        return this.content
    };
    _.So.prototype.toString = function() {
        return this.content
    };
    _.kW = function(a) {
        if (a.eW !== ap) throw Error("$a");
        return _.uf(a.toString(), a.wu || null)
    };
    Vk = function() {
        _.So.call(this)
    };
    _.J(Vk, _.So);
    Vk.prototype.eW = ap;
    _.GT = function(a, c) {
        return null != a && a.eW === c
    };
    var yG, ZP, US, UL, WL, VL;
    yG = function(a) {
        if (null != a) switch (a.wu) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    };
    _.AG = function(a) {
        return _.GT(a, ap) ? a : a instanceof _.NG ? (0, _.zG)(_.OG(a).toString(), a.Im()) : (0, _.zG)(_.He(String(String(a))), yG(a))
    };
    _.zG = function(a) {
        function c(f) {
            this.content = f
        }
        c.prototype = a.prototype;
        return function(f, g) {
            f = new c(String(f));
            void 0 !== g && (f.wu = g);
            return f
        }
    }(Vk);
    _.vk = function(a) {
        function c(f) {
            this.content = f
        }
        c.prototype = a.prototype;
        return function(f, g) {
            f = String(f);
            if (!f) return "";
            f = new c(f);
            void 0 !== g && (f.wu = g);
            return f
        }
    }(Vk);
    _.dM = function(a) {
        return _.GT(a, ap) ? String(String(a.getContent()).replace(WL, "").replace(VL, "&lt;")).replace(UL, US) : _.He(String(a))
    };
    ZP = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };
    US = function(a) {
        return ZP[a]
    };
    UL = /[\x00\x22\x27\x3c\x3e]/g;
    WL = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
    VL = /</g;
    _.ZL = function(a) {
        return _.Vg(a) ? a instanceof _.So ? _.kW(a) : _.eG("zSoyz") : _.eG(String(a))
    };
    _.YL = {};
    try {
        _.tO(_.iM(_.Nq(".abcRioButton{-webkit-border-radius:1px;border-radius:1px;-webkit-box-shadow 0 2px 4px 0px rgba(0,0,0,.25);box-shadow:0 2px 4px 0 rgba(0,0,0,.25);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color .218s,border-color .218s,box-shadow .218s;transition:background-color .218s,border-color .218s,box-shadow .218s;-webkit-user-select:none;-webkit-appearance:none;background-color:#fff;background-image:none;color:#262626;cursor:pointer;outline:none;overflow:hidden;position:relative;text-align:center;vertical-align:middle;white-space:nowrap;width:auto}.abcRioButton:hover{-webkit-box-shadow:0 0 3px 3px rgba(66,133,244,.3);box-shadow:0 0 3px 3px rgba(66,133,244,.3)}.abcRioButtonBlue{background-color:#4285f4;border:none;color:#fff}.abcRioButtonBlue:hover{background-color:#4285f4}.abcRioButtonBlue:active{background-color:#3367d6}.abcRioButtonLightBlue{background-color:#fff;color:#757575}.abcRioButtonLightBlue:active{background-color:#eee;color:#6d6d6d}.abcRioButtonIcon{float:left}.abcRioButtonBlue .abcRioButtonIcon{background-color:#fff;-webkit-border-radius:1px;border-radius:1px}.abcRioButtonSvg{display:block}.abcRioButtonContents{font-family:Roboto,arial,sans-serif;font-size:14px;font-weight:500;letter-spacing:.21px;margin-left:6px;margin-right:6px;vertical-align:top}.abcRioButtonContentWrapper{height:100%;width:100%}.abcRioButtonBlue .abcRioButtonContentWrapper{border:1px solid transparent}.abcRioButtonErrorWrapper,.abcRioButtonWorkingWrapper{display:none;height:100%;width:100%}.abcRioButtonErrorIcon,.abcRioButtonWorkingIcon{margin-left:auto;margin-right:auto}.abcRioButtonErrorState,.abcRioButtonWorkingState{border:1px solid #d5d5d5;border:1px solid rgba(0,0,0,.17);-webkit-box-shadow:0 1px 0 rgba(0,0,0,.05);box-shadow:0 1px 0 rgba(0,0,0,.05);color:#262626}.abcRioButtonErrorState:hover,.abcRioButtonWorkingState:hover{border:1px solid #aaa;border:1px solid rgba(0,0,0,.25);-webkit-box-shadow:0 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 0 rgba(0,0,0,.1)}.abcRioButtonErrorState:active,.abcRioButtonWorkingState:active{border:1px solid #aaa;border:1px solid rgba(0,0,0,.25);-webkit-box-shadow:inset 0 1px 0 #ddd;box-shadow:inset 0 1px 0 #ddd;color:#262626}.abcRioButtonWorkingState,.abcRioButtonWorkingState:hover{background-color:#f5f5f5}.abcRioButtonWorkingState:active{background-color:#e5e5e5}.abcRioButtonErrorState,.abcRioButtonErrorState:hover{background-color:#fff}.abcRioButtonErrorState:active{background-color:#e5e5e5}.abcRioButtonWorkingState .abcRioButtonWorkingWrapper,.abcRioButtonErrorState .abcRioButtonErrorWrapper{display:block}.abcRioButtonErrorState .abcRioButtonContentWrapper,.abcRioButtonWorkingState .abcRioButtonContentWrapper,.abcRioButtonErrorState .abcRioButtonWorkingWrapper{display:none}.-webkit-keyframes abcRioButtonWorkingIconPathSpinKeyframes{0%{-webkit-transform:rotate(0)}} ")))
    } catch (a) {
        _.sa("Failed to install rio button styles : " + a)
    };
    var D_ = {},
        B_ = {},
        TL = {},
        v_ = {},
        D0 = function(a) {
            return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
        },
        w_ = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i,
        z_ = function(a) {
            _.GT(a, v_) ? a = D0(a.getContent()) : null == a ? a = "" : a instanceof _.pm ? a = D0(_.Bw(a)) : a instanceof _.xm ? a = D0(_.wm(a)) : (a = String(a), a = w_.test(a) ? a : "zSoyz");
            return a
        },
        XL = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        yZ = function(a, c) {
            var f = c || _.YL;
            c = f.height;
            var g = f.color,
                h = f.width,
                l = f.XU;
            f = f.VU;
            var n = '<span id="not_signed_in' + _.dM(l) + '">';
            n = (f ? n + "Sign in with Google" : n + "Sign in") + ('</span><span id="connected' + _.dM(l) + '" style="display:none">');
            c = {
                content: (0, _.vk)((f ? n + "Signed in with Google" : n + "Signed in") + "</span>"),
                color: g,
                height: c,
                width: h
            };
            g = Math.floor(6.2 + c.height / 5);
            h = {
                fV: (0, _.vk)('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="' + _.dM(18) + 'px" height="' + _.dM(18) + 'px" viewBox="0 0 48 48" class="' + _.dM("abcRioButtonSvg") + '"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>'),
                width: 18,
                height: 18,
                Zy: "abcRioButtonIconImage abcRioButtonIconImage18"
            };
            l = h.fV;
            f = h.height;
            n = h.Zy;
            var q = h.styles;
            h = (0, _.zG)('<div style="width:' + _.dM(z_(h.width)) + "px;height:" + _.dM(z_(f)) + "px;" + (q ? _.dM(z_(q)) : "") + '" class="' + _.dM("abcRioButtonSvgImageWithFallback") + (n ? " " + _.dM(n) : "") + '">' + _.AG(l) + "</div>");
            h = (0, _.zG)("" + h);
            var t = {
                fontSize: g,
                WU: !0,
                bV: 18,
                cV: (0, _.vk)("" + h)
            };
            for (K in c) K in t || (t[K] = c[K]);
            g = t.content;
            var v = t.height;
            h = t.WU;
            var w = t.bV;
            l = t.cV;
            var A = t.dV,
                F = t.eV;
            f = t.fontSize;
            var z = t.attributes,
                I = t.Zy;
            n = t.ZU;
            q = t.$U;
            var E = t.width;
            c = t.hV;
            var K = t.gV;
            var U = "";
            t = t.color;
            switch (_.Vg(t) ? t.toString() : t) {
                case "blue":
                    U += " abcRioButtonBlue";
                    break;
                case "light_blue":
                    U += " abcRioButtonLightBlue"
            }
            t = '<div style="height:' + _.dM(z_(v)) + "px;" + (E ? "width:" + _.dM(z_(E)) + "px;" : "") + '" class="' + _.dM("abcRioButton") + _.dM(U) + (I ? " " + _.dM(I) : "") + '"';
            z ? (_.GT(z, TL) ? z = z.getContent().replace(/([^"'\s])$/, "$1 ") : (z = String(z), z = XL.test(z) ? z : "zSoyz"), z = " " + z) : z = "";
            A = t + z + (A ? ' jsaction="' + _.dM(A) + '"' : "") + (F ? ' jsname="' + _.dM(F) + '"' : "") + '><div class="' + _.dM("abcRioButtonContentWrapper") + '">';
            v -= 2;
            F = h ? Math.round((v - w) / 2) : 0;
            w = A;
            g = (h ? '<div class="' + _.dM("abcRioButtonIcon") + '" style="padding:' + _.dM(z_(F)) + 'px">' + _.AG(l) + "</div>" : "") + (g ? '<span style="' + (f ? "font-size:" + _.dM(z_(f)) + "px;" : "") + (6 < F && !E ? "margin-left:" + _.dM(z_(F)) + "px;margin-right:" + _.dM(z_(F)) + "px;" : "") + "line-height:" + _.dM(z_(v)) + 'px;" class="' + _.dM("abcRioButtonContents") + (n ? " " + _.dM(n) : "") + '"' + (q ? ' jsname="' + _.dM(q) + '"' : "") + ">" + _.AG(g) + "</span>" : "") + "</div>";
            c ? (c = '<div class="' + _.dM("abcRioButtonWorkingWrapper") + '">', h = "" + y_({
                Oc: v,
                MU: 14,
                jU: 14,
                marginTop: Math.round(.1 * v),
                dT: 2,
                eI: 2,
                Zy: "abcRioButtonSvg abcRioButtonWorkingIcon",
                content: (0, _.vk)('<g id="' + _.dM("ozIdWidgetRioButtonWorkingSvg") + '" fill="#aaaaaa" transform="rotate(0,7,7)"><path class="' + _.dM("abcRioButtonWorkingIconPathSpinAnimation") + '" d="M5.5,1.5h3v4h4v3h-4v4h-3v-4h-4v-3h4z"></path></g>'),
                UU: "abcRioButtonWorkingSvgFallback"
            }), h = (0, _.zG)(h), c = c + h + "</div>") : c = "";
            c = g + c;
            K ? (K = '<div class="' + _.dM("abcRioButtonErrorWrapper") + '">', g = "" + y_({
                Oc: v,
                MU: 20,
                jU: 18,
                marginTop: Math.round(.1 * v),
                dT: 0,
                eI: 0,
                Zy: "abcRioButtonSvg abcRioButtonErrorIcon",
                content: (0, _.vk)('<path fill="#DD4B39" d="m19.8059,16.041-8.74-15.404c-.223-.394-.635-.637-1.078-.637-.443,0-.855,.243-1.078,.637l-8.739,15.404c-.227,.396-.227,.9-.005,1.299 .223,.398 .637,.66 1.283,.66h17.279c.445,0 .859-.262 1.082-.66 .22-.399 .22-.902-.004-1.299zm-9.798-1.041c-.552,0-1-.463-1-1.02 0-.555 .448-1.002 1-1.002 .552,0 1,.447 1,1.002-.001,.557-.448,1.02-1,1.02zm.999-9-.375,5h-1.25l-.374-5h.004l-.004-.02c0-.551 .448-.996 1-.996 .552,0 1,.449 1,1-.001,.007-.004,.016-.004,.016h.003z"></path>'),
                UU: "abcRioButtonErrorSvgFallback"
            }), g = (0, _.zG)(g), K = K + g + "</div>") : K = "";
            K = (0, _.zG)(w + (c + K + "</div>"));
            K = (0, _.zG)("" + K);
            K = (0, _.zG)("" + K);
            K = _.ZL(K);
            _.KQ(a, K)
        },
        y_ = function(a) {
            var c = a.content,
                f = a.Oc,
                g = a.UU,
                h = a.jU,
                l = a.MU,
                n = a.dT,
                q = a.eI,
                t = a.marginTop,
                v = a.marginBottom,
                w = a.Zy;
            a = a.dir;
            a = null != a ? a : 1;
            t = null != t ? t : 0;
            v = null != v ? v : t;
            n = null != n ? n : 0;
            var A = null != q ? q : 0;
            q = 0 < a ? n : A;
            a = 0 < a ? A : n;
            n = (f - t - v) / h;
            c = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="' + _.dM(Math.round(n * l) + q + a) + 'px" height="' + _.dM(f) + 'px" viewBox="' + _.dM(-(q / n)) + " " + _.dM(-(v / n)) + " " + _.dM(l + (q + a) / n) + " " + _.dM(h + (t + v) / n) + '" class="' + _.dM("abcRioButtonSvg") + " " + (w ? _.dM(w) : "") + '">' + _.AG(c) + "</svg>";
            h = "";
            switch (_.Vg(f) ? f.toString() : f) {
                case 13:
                    h += "" + g + "-13";
                    break;
                case 18:
                    h += "" + g + "-18";
                    break;
                case 22:
                    h += "" + g + "-22"
            }
            c += '<div class="' + _.dM(g) + " " + _.dM(h) + '"></div>';
            return (0, _.zG)(c)
        },
        tW, F_ = function(a, c, f) {
            this.vb = a;
            this.u8 = c;
            this.jA = f;
            this.El = _.kD();
            this.y6()
        };
    F_.prototype.y6 = function() {
        yZ(this.vb, {
            width: this.jA.width,
            height: this.jA.height,
            color: this.jA.color,
            XU: this.El,
            VU: this.jA.longTitle
        });
        this.vb.firstChild.onclick = (0, _.H)(function() {
            this.u8();
            return !1
        }, this)
    };
    var G_ = function(a, c) {
        var f = (c ? "connected" : "not_signed_in") + a.El;
        if (a = document.getElementById((c ? "not_signed_in" : "connected") + a.El)) a.style.display = "none";
        if (f = document.getElementById(f)) f.style.display = ""
    };
    var H_ = function(a, c) {
            this.vb = "string" === typeof a ? document.getElementById(a) : a;
            this.jA = c || {};
            if (!D_) throw Error({
                error: "gapi not available, please include https://apis.google.com/js/platform.js in your code"
            });
            if (!B_) throw Error({
                error: "gapi.auth2 not available, call gapi.load('auth2') before gapi.signin2.render."
            });
            this.y_ = (a = _.GQ()) ? a : _.hN()
        },
        QG = function(a) {
            var c = a.jA.longtitle ? 180 : 120;
            return {
                width: parseInt(a.jA.width || a.vb.style.width || c, 10),
                height: parseInt(a.jA.height || a.vb.style.height || 36, 10),
                color: "dark" == a.jA.theme ? "blue" : "light_blue",
                longTitle: a.jA.longtitle
            }
        },
        U_ = function(a) {
            return "function" === typeof a ? a : "string" === typeof a && "function" === typeof window[a] ? window[a] : _.gh
        };
    H_.prototype.l8 = function() {
        var a = this.jA.scope || "",
            c = U_(this.jA.onsuccess),
            f = U_(this.jA.onfailure);
        "offline" == this.jA.accesstype ? this.y_.Q1({
            scope: a,
            redirect_uri: this.jA.redirecturi
        }).then(c, f) : this.y_.W2(this.jA).then(c, f)
    };
    H_.prototype.S = function() {
        this.A3 = new F_(this.vb, (0, _.H)(this.l8, this), QG(this));
        var a = this.jA.scope || "";
        this.y_.currentUser.Ei((0, _.H)(function(c) {
            G_(this.A3, c.qV(a))
        }, this));
        G_(this.A3, this.y_.currentUser.get().qV(a));
        this.y_.then((0, _.H)(function(c) {
            c = c.currentUser.get();
            c.qV(a) && U_(this.jA.onsuccess)(c)
        }, this))
    };
    tW = function(a, c) {
        (new H_(a, c)).S()
    };
    _.Mu("gapi.signin2.go", tW);
    _.Mu("gapi.signin2.render", tW);
});
// Google Inc.