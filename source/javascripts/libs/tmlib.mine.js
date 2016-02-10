! function() {
    "use strict"
}();
var tm = tm || {};
tm.global = window || global || this, "undefined" != typeof module && module.exports && (module.exports = tm),
    function() {
        tm.VERSION = "0.3.0", tm.LIB_ROOT = function() {
            if (window.document)
                for (var a = document.getElementsByTagName("script"), b = 0, c = a.length; c > b; ++b);
        }(), tm.BROWSER = function() {
            return window.navigator ? /chrome/i.test(navigator.userAgent) ? "Chrome" : /safari/i.test(navigator.userAgent) ? "Safari" : /firefox/i.test(navigator.userAgent) ? "Firefox" : /opera/i.test(navigator.userAgent) ? "Opera" : /getcko/i.test(navigator.userAgent) ? "Getcko" : /msie/i.test(navigator.userAgent) ? "IE" : null : void 0
        }(), tm.VENDER_PREFIX = function() {
            if (window) {
                var a = {
                    Chrome: "webkit",
                    Safari: "webkit",
                    Firefox: "moz",
                    Opera: "o",
                    IE: "ms"
                };
                return a[tm.BROWSER] || ""
            }
        }(), tm.isMobile = function() {
            if (window.navigator) {
                var a = navigator.userAgent;
                return a.indexOf("iPhone") > 0 || a.indexOf("iPad") > 0 || a.indexOf("Android") > 0
            }
        }(), tm.isLocal = function() {
            var a = "file:" == location.protocol;
            return function() {
                return a
            }
        }(), tm.createClass = function(a) {
            a.init = a.init || function() {}, a.superClass = a.superClass || null;
            var b = function() {
                var a = new b.prototype.creator;
                return b.prototype.init.apply(a, arguments), a
            };
            a.superClass && (a.init.owner = b, b.prototype = Object.create(a.superClass.prototype), b.prototype.superInit = function() {
                var a = this.superInit.caller,
                    b = a.owner,
                    c = b.prototype.superClass,
                    d = c.prototype.init;
                d.apply(this, arguments)
            }, b.prototype.constructor = b), b.prototype.selfClass = b;
            for (var c in a) b.prototype[c] = a[c];
            return b.prototype.creator = function() {
                return this
            }, b.prototype.creator.prototype = b.prototype, b._class = !0, b
        }, tm.classes = {};
        var _calssDefinedCallback = {};
        tm.define = function(a, b) {
            {
                var c = a.lastIndexOf("."),
                    d = a.substring(0, c),
                    e = d ? tm.using(d) : tm.global,
                    f = d ? a.substring(c + 1) : a;
                Function.prototype.bind, Array.prototype.unshift
            }
            b._path = a, b._className = f;
            var g = null,
                h = b.superClass;
            if (h && "string" == typeof h) {
                var i = h;
                if (h = tm.using(h), !h._class) return _calssDefinedCallback[i] || (_calssDefinedCallback[i] = []), void _calssDefinedCallback[i].push(function() {
                    tm.define(a, b)
                });
                b.superClass = h, g = tm.createClass(b)
            } else g = tm.createClass(b);
            if (e[f] = tm.classes[a] = g, _calssDefinedCallback[a]) {
                for (var j = _calssDefinedCallback[a], k = 0, l = j.length; l > k; ++k) j[k]();
                delete _calssDefinedCallback[a]
            }
            return g
        }, tm.namespace = function(a, b) {
            var a = tm.using(a);
            b.call(a, a)
        }, tm.using = function(a) {
            if (tm.classes[a]) return tm.classes[a];
            for (var b = a.split(/[,.\/ ]|::/), c = tm.global, d = 0, e = b.length; e > d; ++d) {
                var f = b[d];
                c = c[f] || (c[f] = {})
            }
            return tm.classes[a] = c, c
        }, tm.globalize = function(a) {
            return tm.global.$strict(a), this
        }, tm.import = function(a) {
            var b = tm[a];
            return tm.global.$strict(b), this
        }, tm.setLoop = function(a, b) {
            var c = function() {
                var c = (new Date).getTime();
                a();
                var d = (new Date).getTime() - c,
                    e = b - d;
                e = e > 0 ? e : 0, setTimeout(arguments.callee, e)
            };
            setTimeout(c, b)
        }, tm.inform = function(parent) {
            parent = parent || document.body;
            var eInfo = document.createElement("div");
            with(eInfo.setAttribute("class", "tm-info"), eInfo.addEventListener("mouseover", function() {
                this.style.opacity = .9
            }, !1), eInfo.addEventListener("mouseout", function() {
                this.style.opacity = .25
            }, !1), eInfo.style) position = "absolute", width = "100%", bottom = "0px", left = "0px", right = "0px", margin = "0px", padding = "10px 0px", zIndex = "0", textAlign = "center", fontFamily = '"Meiryo", "メイリオ", "ヒラギノ角ゴ Pro W3", sans-serif', fontSize = "13px", opacity = "0.25", backgroundColor = "rgb(230,230,255)", background = "-webkit-linear-gradient(top, hsla(0, 100%, 100%, 0.8) 0%, hsla(0, 100%, 100%, 0.3) 50%, hsla(0, 100%, 100%, 0.1) 51%, hsla(0, 100%, 100%, 0.2) 100%), rgb(190,190,210)", background = "-moz-linear-gradient(top, hsla(0, 100%, 100%, 0.8) 0%, hsla(0, 100%, 100%, 0.3) 50%, hsla(0, 100%, 100%, 0.1) 51%, hsla(0, 100%, 100%, 0.2) 100%), rgb(190,190,210)", WebkitTransition = "1s", MozTransition = "1s";
            eInfo.innerHTML = "このプログラムで利用している JavaScript ライブラリ 『tmlib.js』 については<a href='{projectLink}'>こちら</a>.".format({
                projectLink: "https://github.com/phi1618/tmlib.js"
            }), parent.appendChild(eInfo)
        }
    }(),
    function() {
        window && (window.requestAnimationFrame || (window.requestAnimationFrame = window[tm.VENDER_PREFIX + "RequestAnimationFrame"] || function(a) {
            window.setTimeout(a, 1e3 / 60)
        }), window.cancelRequestAnimationFrame || (window.cancelRequestAnimationFrame = window[tm.VENDER_PREFIX + "CancelRequestAnimationFrame"] || window.clearTimeout))
    }(),
    function() {
        if (window.document) {
            _loadCheckList = [], tm.addLoadCheckList = function(a) {
                console.assert(void 0 !== a.isLoaded, "isLoaded が定義されていません!!"), _loadCheckList.push(a)
            }, _preloadListners = [], _mainListners = [], tm.preload = function(a) {
                _preloadListners.push(a)
            }, tm.main = function(a) {
                _mainListners.push(a)
            };
            var a = function() {
                    for (var a = 0, b = _preloadListners.length; b > a; ++a) _preloadListners[a]();
                    _preloadListners = []
                },
                b = function() {
                    for (var a = 0, b = _loadCheckList.length; b > a; ++a) {
                        var c = _loadCheckList[a];
                        if (0 == c.isLoaded()) return void setTimeout(arguments.callee, 0)
                    }
                    for (var a = 0, b = _mainListners.length; b > a; ++a) _mainListners[a]();
                    _mainListners = []
                };
            window.addEventListener("load", function() {
                a(), b()
            }, !1)
        }
    }(),
    function() {
        Object.defineProperty(Object.prototype, "defineVariable", {
            value: function(a, b) {
                Object.defineProperty(this, a, {
                    value: b,
                    enumerable: !0,
                    writable: !0
                })
            }
        }), Object.defineProperty(Object.prototype, "defineFunction", {
            value: function(a, b) {
                Object.defineProperty(this, a, {
                    value: b,
                    enumerable: !1,
                    writable: !0
                })
            }
        }), Object.prototype.defineFunction("defineInstanceVariable", function(a, b) {
            Object.defineProperty(this.prototype, a, {
                value: b,
                enumerable: !0,
                writable: !0
            })
        }), Object.prototype.defineFunction("defineInstanceMethod", function(a, b) {
            Object.defineProperty(this.prototype, a, {
                value: b,
                enumerable: !1,
                writable: !0
            })
        }), Object.defineInstanceMethod("setter", function(a, b) {
            Object.defineProperty(this, a, {
                set: b,
                enumerable: !1,
                configurable: !0
            })
        }), Object.defineInstanceMethod("getter", function(a, b) {
            Object.defineProperty(this, a, {
                get: b,
                enumerable: !1,
                configurable: !0
            })
        }), Object.defineInstanceMethod("accessor", function(a, b) {
            Object.defineProperty(this, a, {
                set: b.set,
                get: b.get,
                enumerable: !1,
                configurable: !0
            })
        }), Object.defineInstanceMethod("$forIn", function(a, b) {
            return b = b || this, Object.keys(this).forEach(function(c, d) {
                var e = this[c];
                a.call(b, c, e, d)
            }, this), this
        }), Object.defineInstanceMethod("$has", function(a) {
            return this.hasOwnProperty(a)
        }), Object.defineInstanceMethod("$extend", function() {
            return Array.prototype.forEach.call(arguments, function(a) {
                for (var b in a) this[b] = a[b]
            }, this), this
        }), Object.defineInstanceMethod("$safe", function() {
            return Array.prototype.forEach.call(arguments, function(a) {
                for (var b in a)(void 0 === this[b] || null === this[b]) && (this[b] = a[b])
            }, this), this
        }), Object.defineInstanceMethod("$strict", function() {
            return Array.prototype.forEach.call(arguments, function(a) {
                for (var b in a) console.assert(!this[b], "tm error: {0} is Already".format(b)), this[b] = a[b]
            }, this), this
        }), Object.defineInstanceMethod("$pick", function() {
            var a = {};
            return Array.prototype.forEach.call(arguments, function(b) {
                b in this && (a[b] = this[b])
            }, this), a
        }), Object.defineInstanceMethod("$omit", function() {
            var a = {};
            for (var b in this) - 1 == Array.prototype.indexOf.call(arguments, b) && (a[b] = this[b]);
            return a
        }), Object.defineInstanceMethod("$using", function() {
            return this
        }), Object.defineInstanceMethod("$globalize", function(a) {
            return a ? tm.global[a] = this[a] : tm.global.$strict(this), this
        })
    }(),
    function() {
        Array.prototype.accessor("first", {
            get: function() {
                return this[0]
            },
            set: function(a) {
                this[0] = a
            }
        }), Array.prototype.accessor("last", {
            get: function() {
                return this[this.length - 1]
            },
            set: function(a) {
                this[this.length - 1] = a
            }
        }), Array.defineInstanceMethod("equals", function(a) {
            if (this.length !== a.length) return !1;
            for (var b = 0, c = this.length; c > b; ++b)
                if (this[b] !== a[b]) return !1;
            return !0
        }), Array.defineInstanceMethod("deepEquals", function(a) {
            if (this.length !== a.length) return !1;
            for (var b = 0, c = this.length; c > b; ++b) {
                var d = this[b].deepEquals ? this[b].deepEquals(a[b]) : this[b] === a[b];
                if (d === !1) return !1
            }
            return !0
        }), Array.defineInstanceMethod("contains", function(a, b) {
            return -1 != this.indexOf(a, b)
        }), Array.defineInstanceMethod("at", function(a) {
            return a %= this.length, a += this.length, a %= this.length, this[a]
        }), Array.defineInstanceMethod("swap", function(a, b) {
            var c = this[a];
            return this[a] = this[b], this[b] = c, this
        }), Array.defineInstanceMethod("erase", function(a) {
            var b = this.indexOf(a);
            return b >= 0 && this.splice(b, 1), this
        }), Array.defineInstanceMethod("eraseAll", function(a) {
            for (var b = 0, c = this.length; c > b; ++b) this[b] == a && this.splice(b--, 1);
            return this
        }), Array.defineInstanceMethod("eraseIf", function(a) {
            for (var b = 0, c = this.length; c > b; ++b)
                if (a(this[b], b, this)) {
                    this.splice(b, 1);
                    break
                }
            return this
        }), Array.defineInstanceMethod("eraseIfAll", function(a) {
            for (var b = 0, c = this.length; c > b; ++b) a(this[b], b, this) && this.splice(b, 1);
            return this
        }), Array.defineInstanceMethod("random", function(a, b) {
            return a = a || 0, b = b || this.length - 1, this[Math.rand(a, b)]
        }), Array.defineInstanceMethod("pickup", function(a, b) {
            return a = a || 0, b = b || this.length - 1, this[Math.rand(a, b)]
        }), Array.defineInstanceMethod("uniq", function() {
            return this.filter(function(a, b, c) {
                return c.indexOf(a) === b
            })
        }), Array.defineInstanceMethod("flatten", function(a) {
            var b = null;
            if (a) {
                b = this;
                for (var c = 0; a > c; ++c) b = Array.prototype.concat.apply([], b);
                console.log(b)
            } else b = this.reduce(function(a, b) {
                return a.concat(Array.isArray(b) ? b.flatten() : b)
            }, []);
            return console.log(b), b
        }), Array.defineInstanceMethod("clone", function(a) {
            if (1 == a) {
                for (var b = Array(this.length), c = 0, d = this.length; d > c; ++c) b[c] = this[c].clone ? this[c].clone(a) : this[c];
                return b
            }
            return Array.prototype.slice.apply(this)
        }), Array.defineInstanceMethod("clear", function() {
            return this.length = 0, this
        }), Array.defineInstanceMethod("fill", function(a, b, c) {
            b = b || 0, c = c || this.length;
            for (var d = b; c > d; ++d) this[d] = a;
            return this
        }), Array.defineInstanceMethod("range", function(a, b, c) {
            if (1 == arguments.length) {
                this.clear();
                for (var d = 0; a > d; ++d) this[d] = d
            } else if (b > a) {
                c = c || 1, this.clear();
                for (var d = a, e = 0; b > d; d += c, ++e) this[e] = d
            } else {
                c = c || -1, this.clear();
                for (var d = a, e = 0; d > b; d += c, ++e) this[e] = d
            }
            return this
        }), Array.defineInstanceMethod("shuffle", function() {
            for (var a = 0, b = this.length; b > a; ++a) {
                var c = Math.rand(0, b - 1);
                a != c && this.swap(a, c)
            }
            return this
        }), Array.defineInstanceMethod("sum", function() {
            for (var a = 0, b = 0, c = this.length; c > b; ++b) a += this[b];
            return a
        }), Array.defineInstanceMethod("average", function() {
            for (var a = 0, b = this.length, c = 0; b > c; ++c) a += this[c];
            return a / b
        }), Array.defineInstanceMethod("each", function() {
            return this.forEach.apply(this, arguments), this
        }), Array.defineInstanceMethod("toULElement", function() {}), Array.defineInstanceMethod("toOLElement", function() {}), Array.defineFunction("range", function() {
            return Array.prototype.range.apply([], arguments)
        })
    }(),
    function() {
        var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            b = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        Date.defineInstanceMethod("format", function(c) {
            for (var d = this.getFullYear(), e = this.getMonth(), f = this.getDate(), g = this.getDay(), h = this.getHours(), i = this.getMinutes(), j = this.getSeconds(), k = this.getMilliseconds(), l = "", m = 0, n = c.length; n > m; ++m) {
                var o = c.charAt(m),
                    p = "";
                switch (o) {
                    case "d":
                        p = f.padding(2, "0");
                        break;
                    case "D":
                        p = b[g].substr(0, 3);
                        break;
                    case "j":
                        p = f;
                        break;
                    case "l":
                        p = b[g];
                        break;
                    case "F":
                        p = a[e];
                        break;
                    case "m":
                        p = (e + 1).padding(2, "0");
                        break;
                    case "M":
                        p = a[e].substr(0, 3);
                        break;
                    case "n":
                        p = e + 1;
                        break;
                    case "Y":
                        p = d;
                        break;
                    case "y":
                        p = d.toString().substr(2, 2);
                        break;
                    case "G":
                        p = h;
                        break;
                    case "H":
                        p = h.padding(2, "0");
                        break;
                    case "i":
                        p = i.padding(2, "0");
                        break;
                    case "s":
                        p = j.padding(2, "0");
                        break;
                    case "S":
                        p = k.padding(3, "0");
                        break;
                    default:
                        p = o
                }
                l += p
            }
            return l
        })
    }(),
    function() {
        Function.prototype.bind || Function.defineInstanceMethod("bind", function(a) {
            var b = this;
            return function() {
                b.apply(a, arguments)
            }
        }), Function.prototype.$has("name") || Function.prototype.getter("name", function() {
            return ("" + this).replace(/^\s*function\s*([^\(]*)[\S\s]+$/im, "$1")
        }), Function.defineInstanceMethod("toArrayFunction", function() {
            var a = this;
            return function() {
                for (var b = [], c = 0, d = this.length; d > c; ++c) b.push(a.apply(this[c], arguments));
                return b
            }
        })
    }(),
    function() {
        Math.clamp = function(a, b, c) {
            return b > a ? b : a > c ? c : a
        }, Math.DEG_TO_RAD = Math.PI / 180, Math.RAD_TO_DEG = 180 / Math.PI, Math.degToRad = function(a) {
            return a * Math.DEG_TO_RAD
        }, Math.radToDeg = function(a) {
            return a * Math.RAD_TO_DEG
        }, Math.rand = function(a, b) {
            return window.Math.floor(Math.random() * (b - a + 1)) + a
        }, Math.randf = function(a, b) {
            return window.Math.random() * (b - a) + a
        }, Math.magnitude = function() {
            return Math.sqrt(Math.magnitudeSq.apply(null, arguments))
        }, Math.magnitudeSq = function() {
            for (var a = 0, b = 0, c = arguments.length; c > b; ++b) a += arguments[b] * arguments[b];
            return a
        }, Math.inside = function(a, b, c) {
            return a >= b && c >= a
        }
    }(),
    function() {
        Number.defineInstanceMethod("round", function(a) {
            a = a || 0;
            var b = Math.pow(10, a),
                c = this * b;
            return c = Math.round(c), c / b
        }), Number.defineInstanceMethod("ceil", function(a) {
            a = a || 0;
            var b = Math.pow(10, a),
                c = this * b;
            return c = Math.ceil(c), c / b
        }), Number.defineInstanceMethod("floor", function(a) {
            a = a || 0;
            var b = Math.pow(10, a),
                c = this * b;
            return c = Math.floor(c), c / b
        }), Number.defineInstanceMethod("toInt", function() {
            return 0 | this
        }), Number.defineInstanceMethod("toHex", function() {
            return this.toString(16)
        }), Number.defineInstanceMethod("toBin", function() {
            return this.toString(2)
        }), Number.defineInstanceMethod("toUnsigned", function() {
            return this >>> 0
        }), Number.defineInstanceMethod("padding", function(a, b) {
            var c = this + "";
            for (a -= c.length, b = b || "0"; a-- > 0;) c = b + c;
            return c
        }), Number.defineInstanceMethod("times", function(a, b) {
            b = b || this;
            for (var c = 0; this > c; ++c) a.call(b, c);
            return this
        }), Number.defineInstanceMethod("upto", function(a, b, c) {
            c = c || this;
            for (var d = +this; a >= d; ++d) b.call(c, d);
            return this
        }), Number.defineInstanceMethod("downto", function(a, b, c) {
            c = c || this;
            for (var d = +this; d >= a; --d) b.call(c, d);
            return this
        }), Number.defineInstanceMethod("step", function(a, b, c, d) {
            d = d || this;
            for (var e = +this; a >= e; e += b) c.call(d, e);
            return this
        })
    }(),
    function() {
        String.defineInstanceMethod("format", function(a) {
            var b = void 0;
            if ("object" == typeof a) b = function(b, c) {
                return a[c]
            };
            else {
                var c = arguments;
                b = function(a, b) {
                    return c[parseInt(b)]
                }
            }
            return this.replace(/\{(\w+)\}/g, b)
        }), String.defineInstanceMethod("trim", function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), String.defineInstanceMethod("capitalize", function() {
            return this.replace(/\w+/g, function(a) {
                return a.capitalizeFirstLetter()
            })
        }), String.defineInstanceMethod("capitalizeFirstLetter", function() {
            return this.charAt(0).toUpperCase() + this.substr(1).toLowerCase()
        }), String.defineInstanceMethod("toDash", function() {
            return this.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }), String.defineInstanceMethod("toHash", function() {
            return this.toCRC32()
        }), String.defineInstanceMethod("padding", function(a, b) {
            var c = this.toString();
            for (a -= c.length, b = b || " "; a-- > 0;) c = b + c;
            return c
        }), String.defineInstanceMethod("paddingLeft", function(a, b) {
            var c = this.toString();
            for (a -= c.length, b = b || " "; a-- > 0;) c = b + c;
            return c
        }), String.defineInstanceMethod("paddingRight", function(a, b) {
            var c = this.toString();
            for (a -= c.length, b = b || " "; a-- > 0;) c += b;
            return c
        }), String.defineInstanceMethod("quotemeta", function() {
            return this.replace(/([^0-9A-Za-z_])/g, "\\$1")
        }), String.defineInstanceMethod("repeat", function(a) {
            for (var b = Array(a), c = 0; a > c; ++c) b[c] = this;
            return b.join("")
        }), String.defineInstanceMethod("count", function(a) {
            var b = new RegExp(a, "gm");
            return console.log(this.match(b)), this.match(b).length
        }), String.defineInstanceMethod("toArray", function() {
            for (var a = [], b = 0, c = this.length; c > b; ++b) a.push(this[b]);
            return a
        });
        var a = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".split(" ");
        String.defineInstanceMethod("toCRC32", function() {
            var b = 0,
                c = 0,
                d = 0;
            b = -1 ^ b;
            for (var e = 0, f = this.length; f > e; ++e) d = 255 & (b ^ this.charCodeAt(e)), c = "0x" + a[d], b = b >>> 8 ^ c;
            return (-1 ^ b) >>> 0
        })
    }(),
    function() {
        tm.Item = tm.createClass({
            prev: null,
            next: null,
            data: null,
            init: function() {}
        }), tm.List = tm.createClass({
            init: function() {
                this._length = 0, this._head = tm.Item(), this._tail = tm.Item(), this._head.next = this._tail, this._tail.prev = this._head
            },
            add: function(a) {
                var b = tm.Item();
                return b.data = a, b.prev = this._tail.prev, b.next = this._tail, this._tail.prev.next = b, this._tail.prev = b, ++this._length, this
            },
            remove: function(a) {
                var b = this.getItem(a);
                return b.prev.next = b.next, b.next.prev = b.prev, --this._length, b
            },
            get: function(a) {
                return this.getItem(a).data
            },
            getItem: function(a) {
                for (var b = this._head.next, c = 0; c++ < a;) b = b.next;
                return b
            },
            forEach: function() {},
            clear: function() {},
            clone: function() {},
            getFirst: function() {},
            getLast: function() {},
            indexOf: function() {},
            lastIndexOf: function() {},
            toArray: function() {
                if (this._length <= 0) return [];
                for (var a = this._head.next, b = []; null != a.data;) b.push(a.data), a = a.next;
                return b
            },
            toString: function() {
                for (var a = this.toArray(), b = 0, c = a.length; c > b; ++b) a[b] = a[b].toString();
                return a.join(",")
            }
        })
    }(), tm.event = tm.event || {},
    function() {
        tm.event.Event = tm.createClass({
            type: null,
            init: function(a) {
                this.type = a
            }
        })
    }(),
    function() {
        tm.event.TweenEvent = tm.createClass({
            superClass: tm.event.Event,
            time: null,
            now: null,
            init: function(a, b, c) {
                this.superInit(a), this.time = b, this.now = c
            }
        }), tm.event.TweenEvent.CHANGE = "change", tm.event.TweenEvent.FINISH = "finish", tm.event.TweenEvent.LOOP = "loop", tm.event.TweenEvent.RESUME = "resume", tm.event.TweenEvent.START = "start", tm.event.TweenEvent.STOP = "stop"
    }(),
    function() {
        tm.event.MouseEvent = tm.createClass({
            superClass: tm.event.Event,
            app: null,
            pointing: null,
            init: function(a, b, c) {
                this.superInit(a), this.app = b, this.pointing = c
            }
        })
    }(),
    function() {
        tm.event.TouchEvent = tm.createClass({
            superClass: tm.event.Event,
            app: null,
            pointing: null,
            init: function(a, b, c) {
                this.superInit(a), this.app = b, this.pointing = c
            }
        })
    }(),
    function() {
        tm.event.PointingEvent = tm.createClass({
            superClass: tm.event.Event,
            app: null,
            pointing: null,
            init: function(a, b, c) {
                this.superInit(a), this.app = b, this.pointing = c
            }
        })
    }(), tm.event = tm.event || {},
    function() {
        tm.define("tm.event.EventDispatcher", {
            init: function() {
                this._listeners = {}
            },
            on: function(a, b) {
                return void 0 === this._listeners[a] && (this._listeners[a] = []), this._listeners[a].push(b), this
            },
            off: function(a, b) {
                var c = this._listeners[a],
                    d = c.indexOf(b);
                return -1 != d && c.splice(d, 1), this
            },
            fire: function(a) {
                a.target = this;
                var b = "on" + a.type;
                this[b] && this[b](a);
                var c = this._listeners[a.type];
                if (c)
                    for (var d = c.clone(), e = 0, f = d.length; f > e; ++e) d[e].call(this, a);
                return this
            },
            flare: function(a) {
                var b = tm.event.Event(a);
                return this.fire(b), this
            },
            one: function(a, b) {
                var c = this,
                    d = function() {
                        var e = b.apply(c, arguments);
                        return c.off(a, d), e
                    };
                return this.on(a, d), this
            },
            hasEventListener: function(a) {
                return void 0 !== this._listeners[a] || this["on" + a] ? !0 : !1
            },
            clearEventListener: function(a) {
                var b = "on" + a;
                return this[b] && delete this[b], this._listeners[a] = [], this
            }
        });
        var a = tm.event.EventDispatcher.prototype;
        a.addEventListener = a.on, a.removeEventListener = a.off, a.dispatchEvent = a.fire
    }(), tm.util = tm.util || {},
    function() {
        tm.util.Random = {
            randint: function(a, b) {
                return window.Math.floor(Math.random() * (b - a + 1)) + a
            },
            randfloat: function(a, b) {
                return window.Math.random() * (b - a) + a
            },
            randbool: function() {
                return 1 === this.randint(0, 1)
            }
        }
    }(), tm.util = tm.util || {},
    function() {
        var AJAX_DEFAULT_SETTINGS = {
            type: "GET",
            async: !0,
            data: null,
            contentType: "application/x-www-form-urlencoded",
            dataType: "text",
            responseType: "",
            username: null,
            password: null,
            success: function(a) {
                alert("success!!\n" + a)
            },
            error: function() {
                alert("error!!")
            },
            beforeSend: null
        };
        tm.util.Ajax = {
            load: function(a) {
                for (var b in AJAX_DEFAULT_SETTINGS) a[b] = a[b] || AJAX_DEFAULT_SETTINGS[b]; {
                    var c = new XMLHttpRequest,
                        d = tm.util.Ajax.DATA_CONVERTE_TABLE[a.dataType];
                    a.url
                }
                if (a.data) {
                    var e = "";
                    e = "string" == typeof a.data ? a.data : tm.util.QueryString.stringify(a.data), "GET" == a.type ? (a.url += "?" + e, a.data = null) : "POST" == a.type && (a.data = e)
                }
                c.onreadystatechange = function() {
                    if (4 == c.readyState)
                        if (200 === c.status || 0 === c.status)
                            if ("arraybuffer" !== a.responseType) {
                                var b = d(c.responseText);
                                a.success(b)
                            } else a.success(this.response);
                    else a.error(c.responseText)
                }, c.open(a.type, a.url, a.async, a.username, a.password), "POST" === a.type && c.setRequestHeader("Content-Type", a.contentType), a.responseType && (c.responseType = a.responseType), a.beforeSend && a.beforeSend(c), a.password && (c.withCredentials = !0), c.send(a.data)
            },
            loadJSONP: function(a, b) {
                var c = tm.global;
                c.tmlib_js_dummy_func_count = tm.global.tmlib_js_dummy_func || 0;
                var d = "tmlib_js_dummy_func" + c.tmlib_js_dummy_func_count++;
                c[d] = b;
                var e = document.createElement("script");
                e.type = "text/javascript", e.charset = "UTF-8", e.src = a + "&callback=" + d, e.setAttribute("defer", !0), document.getElementsByTagName("head")[0].appendChild(e)
            }
        }, tm.util.Ajax.DATA_CONVERTE_TABLE = {
            undefined: function(a) {
                return a
            },
            text: function(a) {
                return a
            },
            xml: function(a) {
                var b = new DOMParser,
                    c = b.parseFromString(a, "text/xml");
                return c
            },
            dom: function(a) {
                var b = document.createElement("div");
                return b.innerHTML = a, tm.dom.Element(b)
            },
            json: function(a) {
                try {
                    return JSON.parse(a)
                } catch (b) {
                    console.dir(b), console.dir(a)
                }
            },
            script: function(data) {
                return eval(data), data
            },
            bin: function(a) {
                for (var b = [], c = 0, d = a.length; d > c; ++c) b[c] = 255 & a.charCodeAt(c);
                return b
            }
        }, tm.util.Ajax.DEFAULT_SETTINGS = AJAX_DEFAULT_SETTINGS
    }(), tm.util = tm.util || {},
    function() {
        tm.define("tm.util.File", {
            superClass: "tm.event.EventDispatcher",
            data: null,
            loaded: !1,
            init: function(a) {
                this.superInit(), this.loaded = !1, 1 == arguments.length && this.load(a)
            },
            load: function(a) {
                if ("string" == typeof a) {
                    var b = a;
                    a = {
                        url: b
                    }
                }
                var c = this;
                a.success = function(a) {
                    c.setData(a);
                    var b = tm.event.Event("load");
                    c.dispatchEvent(b)
                }, tm.util.Ajax.load(a)
            },
            setData: function(a) {
                this.data = a, this.loaded = !0
            },
            loadLocalStorage: function() {}
        })
    }(), tm.util = tm.util || {},
    function() {
        tm.util.Timeline = tm.createClass({
            target: null,
            tasks: null,
            fps: 30,
            init: function() {
                this.tasks = [], this.time = 0
            },
            at: function(a, b) {
                return this.tasks.push({
                    time: a,
                    action: b
                }), this
            },
            after: function(a, b) {
                return this.at(this.time + a, b), this
            },
            clear: function() {
                return this.tasks = [], this
            },
            removeTime: function() {},
            removeAction: function() {},
            start: function() {
                this.isPlaying = !0, this._startTime(), this._updateTime()
            },
            resume: function() {
                this.isPlaying = !0, this._resumeTime(), this._updateTime()
            },
            stop: function() {
                this.isPlaying = !1
            },
            rewind: function() {
                this.time = 0
            },
            update: function() {
                if (this.tasks.length > 0)
                    for (var a = 0, b = this.tasks.length; b > a; ++a) {
                        var c = this.tasks[a];
                        this.prev <= c.time && c.time < this.time && c.action()
                    }
            },
            _startTime: function() {
                this.startTime = (new Date).getTime()
            },
            _resumeTime: function() {
                this.startTime = (new Date).getTime() - this.time
            },
            _updateTime: function() {
                this.isPlaying && (this._nextTime(), setTimeout(arguments.callee.bind(this), 1e3 / this.fps))
            },
            _nextTime: function() {
                this.prev = this.time, this.time = (new Date).getTime() - this.startTime, this.update()
            }
        })
    }(), tm.util = tm.util || {},
    function() {
        tm.util.DataManager = {
            data: {}
        }, tm.util.DataManager.save = function() {
            for (var a in this.data) {
                var b = this.data[a];
                localStorage[a] = JSON.stringify(b)
            }
        }, tm.util.DataManager.load = function(a) {
            for (var a in localStorage) this.data[a] = JSON.parse(localStorage[a])
        }, tm.util.DataManager.set = function(a, b) {
            return this.data[a] = b, this
        }, tm.util.DataManager.get = function(a) {
            return this.data[a]
        }
    }(), tm.util = tm.util || {},
    function() {
        tm.define("tm.util.Script", {
            superClass: "tm.event.EventDispatcher",
            element: null,
            loaded: !1,
            init: function(a) {
                this.superInit(), this.loaded = !1, this.element = document.createElement("script"), this.element.type = "text/javascript", this.element.src = a, this.element.charset = "UTF-8", this.element.setAttribute("defer", !0), document.head.appendChild(this.element);
                var b = this;
                this.element.onload = function() {
                    b.loaded = !0, b.fire(tm.event.Event("load"))
                }
            },
            getElement: function() {
                return this.element
            }
        }), tm.util.Script.load = function(a) {
            var b = tm.util.Script(a);
            return b
        }, tm.util.Script.loadStats = function(a) {
            a = a || "r11";
            var b = null;
            return b = -1 != ["r6", "r7", "r8", "r9", "10"].indexOf(a) ? "http://rawgithub.com/mrdoob/stats.js/" + a + "/build/Stats.js" : "http://rawgithub.com/mrdoob/stats.js/" + a + "/build/stats.min.js", this.load(b)
        }, tm.util.Script.loadDatGUI = function(a) {
            a = a || "0.5";
            var b = "http://dat-gui.googlecode.com/git/build/dat.gui.js";
            return this.load(b)
        }, tm.util.Script.loadThree = function(a) {
            var b = "http://rawgithub.com/mrdoob/three.js/{version}/build/three.js";
            a = a || "r55";
            var c = b.format({
                version: a
            });
            return this.load(c)
        }, tm.util.Script.loadBulletML = function(a) {
            var b = "http://rawgithub.com/daishihmr/bulletml.js/{version}/target/bulletml.for.tmlib.js";
            a = a || "v0.4.2";
            var c = b.format({
                version: a
            });
            return this.load(c)
        }
    }(), tm.util = tm.util || {},
    function() {
        tm.util.QueryString = {
            parse: function(a, b, c) {
                b = b || "&", c = c || "=";
                for (var d = {}, e = a.split(b), f = 0, g = e.length; g > f; ++f) {
                    var h = e[f],
                        i = h.indexOf(c);
                    if (i > 0) {
                        var j = h.substring(0, i),
                            k = h.substring(i + 1);
                        d[j] = k
                    }
                }
                return d
            },
            stringify: function(a, b, c) {
                b = b || "&", c = c || "=";
                var d = [];
                for (var e in a) {
                    var f = encodeURIComponent(a[e]);
                    d.push(e + c + f)
                }
                return d.join(b)
            }
        }
    }(), tm.namespace("tm.util.Type", function() {
        var a = this,
            b = Object.prototype.toString;
        this.defineFunction("isObject", function(a) {
            return a === Object(a)
        }), this.defineFunction("isArray", function(a) {
            return "[object Array]" == b.call(a)
        }), this.defineFunction("isArguments", function(a) {
            return "[object Arguments]" == b.call(a)
        }), this.defineFunction("isFunction", function(a) {
            return "[object Function]" == b.call(a)
        }), this.defineFunction("isString", function(a) {
            return "[object String]" == b.call(a)
        }), this.defineFunction("isNumber", function(a) {
            return "[object Number]" == b.call(a)
        }), this.defineFunction("isDate", function(a) {
            return "[object Date]" == b.call(a)
        }), this.defineFunction("isRegExp", function(a) {
            return "[object RegExp]" == b.call(a)
        }), this.defineFunction("isEmpty", function(b) {
            if (!b) return !0;
            if (a.isArray(b) || a.isString(b) || a.isArguments(b)) return 0 === b.length;
            for (var c in b)
                if (c) return !1;
            return !0
        })
    }), tm.define("tm.util.Flow", {
        superClass: "tm.event.EventDispatcher",
        waits: 0,
        counter: 0,
        args: null,
        init: function(a, b) {
            this.superInit(), a = a || 0, b = b || null, this.setup(a, b)
        },
        setup: function(a, b) {
            return this.waits = a, this.callback = b, this.counter = 0, this.args = {}, this._check(), this
        },
        pass: function(a, b) {
            ++this.counter, arguments.length >= 2 && (this.args[a] = b), this._check()
        },
        isFinish: function() {
            return this.counter === this.waits
        },
        _check: function() {
            if (this.isFinish()) {
                var a = this.args;
                this.callback && (this.callback(a), this.args = null, this.callback = null);
                var b = tm.event.Event("flowfinish");
                b.args = a, this.fire(b)
            }
        }
    }), tm.geom = tm.geom || {},
    function() {
        tm.geom.Vector2 = tm.createClass({
            x: 0,
            y: 0,
            init: function(a, b) {
                this.set(a, b)
            },
            clone: function() {
                return tm.geom.Vector2(this.x, this.y)
            },
            equals: function(a) {
                return this.x === a.x && this.y === a.y ? !0 : !1
            },
            equalsNumber: function(a, b) {
                return this.x === a && this.y === b ? !0 : !1
            },
            equalsArray: function(a) {
                return this.x === a[0] && this.y === a[1] ? !0 : !1
            },
            set: function(a, b) {
                this.x = a, this.y = b
            },
            setNumber: function(a, b) {
                return this.x = a, this.y = b, this
            },
            setArray: function(a) {
                return this.x = a[0], this.y = a[1], this
            },
            setObject: function(a) {
                return this.x = a.x, this.y = a.y, this
            },
            setString: function(a) {
                var b = a.match(/(-?\d+(\.{1}\d+)?),\s*(-?\d+(\.{1}\d+)?)/);
                return this.x = parseFloat(b[1]), this.y = parseFloat(b[3]), this
            },
            setSmart: function(a, b) {
                var c = arguments[0];
                if (2 === arguments.length) this.x = a, this.y = b;
                else if (c instanceof Array) this.x = c[0], this.y = c[1];
                else if (c instanceof Object) this.x = c.x, this.y = c.y;
                else if ("string" == typeof c) {
                    var d = c.match(/(-?\d+(\.{1}\d+)?),\s*(-?\d+(\.{1}\d+)?)/);
                    this.x = parseFloat(d[1]), this.y = parseFloat(d[3])
                }
                return this
            },
            setAngle: function(a, b) {
                var c = a * Math.DEG_TO_RAD;
                return b = b || 1, this.x = Math.cos(c) * b, this.y = Math.sin(c) * b, this
            },
            setRadian: function(a, b) {
                return b = b || 1, this.x = Math.cos(a) * b, this.y = Math.sin(a) * b, this
            },
            setDegree: function(a, b) {
                var c = a * Math.DEG_TO_RAD;
                return b = b || 1, this.x = Math.cos(c) * b, this.y = Math.sin(c) * b, this
            },
            setRandom: function(a, b, c) {
                return a = a || 0, b = b || 360, c = c || 1, this.setDegree(Math.randf(a, b), c), this
            },
            add: function(a) {
                return this.x += a.x, this.y += a.y, this
            },
            sub: function(a) {
                return this.x -= a.x, this.y -= a.y, this
            },
            mul: function(a) {
                return this.x *= a, this.y *= a, this
            },
            div: function(a) {
                return a = a || .01, this.x /= a, this.y /= a, this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this
            },
            dot: function(a) {
                return this.x * a.x + this.y * a.y
            },
            cross: function(a) {
                return this.x * a.y - this.y * a.x
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            lengthSquared: function() {
                return this.x * this.x + this.y * this.y
            },
            distance: function(a) {
                return Math.sqrt(Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2))
            },
            distanceSquared: function(a) {
                return Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2)
            },
            normalize: function() {
                var a = this.length();
                return this.div(a), this
            },
            toAngle: function() {
                return Math.atan2(this.y, this.x)
            },
            toStyleString: function() {
                return "{x:{x}, y:{y}}".format(this)
            },
            toString: function() {
                return "{x:{x}, y:{y}}".format(this)
            },
            setX: function(a) {
                return this.x = a, this
            },
            setY: function(a) {
                return this.y = a, this
            }
        }), tm.geom.Vector2.min = function(a, b) {
            return tm.geom.Vector2(a.x < b.x ? a.x : b.x, a.y < b.y ? a.y : b.y)
        }, tm.geom.Vector2.max = function(a, b) {
            return tm.geom.Vector2(a.x > b.x ? a.x : b.x, a.y > b.y ? a.y : b.y)
        }, tm.geom.Vector2.add = function(a, b) {
            return tm.geom.Vector2(a.x + b.x, a.y + b.y)
        }, tm.geom.Vector2.sub = function(a, b) {
            return tm.geom.Vector2(a.x - b.x, a.y - b.y)
        }, tm.geom.Vector2.mul = function(a, b) {
            return tm.geom.Vector2(a.x * b, a.y * b)
        }, tm.geom.Vector2.div = function(a, b) {
            return tm.geom.Vector2(a.x / b, a.y / b)
        }, tm.geom.Vector2.negate = function(a) {
            return tm.geom.Vector2(-a.x, -a.y)
        }, tm.geom.Vector2.dot = function(a, b) {
            return a.x * b.x + a.y * b.y
        }, tm.geom.Vector2.cross = function(a, b) {
            return a.x * b.y - a.y * b.x
        }, tm.geom.Vector2.distance = function(a, b) {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
        }, tm.geom.Vector2.distanceSquared = function(a, b) {
            return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)
        }, tm.geom.Vector2.manhattanDistance = function(a, b) {
            return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
        }, tm.geom.Vector2.reflect = function(a, b) {
            var c = Vector2.dot(a, b),
                d = Vector2.mul(b, 2 * c);
            return tm.geom.Vector2.sub(a, d)
        }, tm.geom.Vector2.lerp = function(a, b, c) {
            return tm.geom.Vector2(a.x + (b.x - a.x) * c, a.y + (b.y - a.y) * c)
        }, tm.geom.Vector2.slerp = function() {}, tm.geom.Vector2.random = function(a, b, c) {
            return a = a || 0, b = b || 360, c = c || 1, tm.geom.Vector2().setDegree(Math.randf(a, b), c)
        }, tm.geom.Vector2.ZERO = tm.geom.Vector2(0, 0), tm.geom.Vector2.LEFT = tm.geom.Vector2(-1, 0), tm.geom.Vector2.RIGHT = tm.geom.Vector2(1, 0), tm.geom.Vector2.UP = tm.geom.Vector2(0, 1), tm.geom.Vector2.DOWN = tm.geom.Vector2(0, -1)
    }(), tm.geom = tm.geom || {},
    function() {
        tm.geom.Vector3 = tm.createClass({
            x: 0,
            y: 0,
            z: 0,
            init: function(a, b, c) {
                this.set(a, b, c)
            },
            set: function(a, b, c) {
                return this.x = a, this.y = b, this.z = c, this
            },
            setNumber: function(a, b, c) {
                return this.x = a, this.y = b, this.z = c, this
            },
            setArray: function(a) {
                return this.x = a[0], this.y = a[1], this.z = a[2], this
            },
            setObject: function(a) {
                return this.x = a.x, this.y = a.y, this.z = a.z, this
            },
            setString: function(a) {
                var b = a.match(/(-?\d+(\.{1}\d+)?),\s*(-?\d+(\.{1}\d+)?),\s*(-?\d+(\.{1}\d+)?)/);
                return this.x = parseFloat(b[1]), this.y = parseFloat(b[3]), this.z = parseFloat(b[5]), this
            },
            setAngle: function(a, b, c) {
                return c = c || 1, this.x = c * Math.cos(a) * Math.sin(b), this.y = c * Math.sin(a), this.z = c * Math.cos(a) * Math.cos(b), this
            },
            setRadian: function(a, b, c) {
                return this.setAngle(a, b, c)
            },
            setDegree: function(a, b, c) {
                return this.setAngle(a * Math.DEG_TO_RAD, b * Math.DEG_TO_RAD, c)
            },
            setSmart: function(a, b, c) {
                var d = arguments[0];
                if (3 === arguments.length) this.x = a, this.y = b, this.z = c;
                else if (d instanceof Array) this.x = d[0], this.y = d[1], this.z = d[2];
                else if (d instanceof Object) this.x = d.x, this.y = d.y, this.z = d.z;
                else if ("string" == typeof d) {
                    var e = d.match(/(-?\d+(\.{1}\d+)?),\s*(-?\d+(\.{1}\d+)?),\s*(-?\d+(\.{1}\d+)?)/);
                    this.x = parseFloat(e[1]), this.y = parseFloat(e[3]), this.z = parseFloat(e[5])
                }
                return this
            },
            add: function(a) {
                return this.x += a.x, this.y += a.y, this.z += a.z, this
            },
            sub: function(a) {
                return this.x -= a.x, this.y -= a.y, this.z -= a.z, this
            },
            mul: function(a) {
                return this.x *= a, this.y *= a, this.z *= a, this
            },
            div: function(a) {
                return console.assert(0 != a, "0 division!!"), this.x /= a, this.y /= a, this.z /= a, this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
            },
            dot: function(a) {
                return this.x * a.x + this.y * a.y + this.z * a.z
            },
            cross: function(a) {
                var b = this.y * a.z - this.z * a.y,
                    c = this.z * a.x - this.x * a.z,
                    d = this.x * a.y - this.y * a.x;
                return this.set(b, c, d), this
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            lengthSquared: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            },
            normalize: function() {
                var a = this.length();
                return this.div(a), this
            },
            toVector2: function() {},
            toAngleXY: function() {
                return Math.atan2(this.y, this.x)
            },
            to3D: function() {},
            equals: function(a, b, c) {
                return this.x === a && this.y === b && this.z === c
            },
            equalsArray: function(a) {
                return this.equals(a[0], a[1], a[2])
            },
            equalsObject: function(a) {
                return this.equals(a.x, a.y, a.z)
            },
            equalsSmart: function() {},
            toStyleString: function() {
                return "{x:{x}, y:{y}, z:{z}}".format(this)
            },
            toString: function() {
                return "{x:{x}, y:{y}, z:{z}}".format(this)
            },
            setX: function(a) {
                return this.x = a, this
            },
            setY: function(a) {
                return this.y = a, this
            },
            setZ: function(a) {
                return this.z = a, this
            }
        }), tm.geom.Vector3.min = function(a, b) {
            return Vector3(a.x < b.x ? a.x : b.x, a.y < b.y ? a.y : b.y, a.z < b.z ? a.z : b.z)
        }, tm.geom.Vector3.max = function(a, b) {
            return Vector3(a.x > b.x ? a.x : b.x, a.y > b.y ? a.y : b.y, a.z > b.z ? a.z : b.z)
        }, tm.geom.Vector3.add = function(a, b) {
            return tm.geom.Vector3(a.x + b.x, a.y + b.y, a.z + b.z)
        }, tm.geom.Vector3.sub = function(a, b) {
            return tm.geom.Vector3(a.x - b.x, a.y - b.y, a.z - b.z)
        }, tm.geom.Vector3.mul = function(a, b) {
            return tm.geom.Vector3(a.x * b, a.y * b, a.z * b)
        }, tm.geom.Vector3.div = function(a, b) {
            return tm.geom.Vector3(a.x / b, a.y / b, a.z / b)
        }, tm.geom.Vector3.dot = function(a, b) {
            return a.x * b.x + a.y * b.y + a.z * b.z
        }, tm.geom.Vector3.cross = function(a, b) {
            return tm.geom.Vector3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x)
        }, tm.geom.Vector3.negate = function(a) {
            return tm.geom.Vector3(-a.x, -a.y, -a.z)
        }, tm.geom.Vector3.distance = function(a, b) {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2))
        }, tm.geom.Vector3.distanceSquared = function(a, b) {
            return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2)
        }, tm.geom.Vector3.manhattanDistance = function(a, b) {
            return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)
        }, tm.geom.Vector3.reflect = function(a, b) {
            var c = Vector3.dot(a, b),
                d = Vector3.mul(b, 2 * c);
            return Vector3.sub(a, d)
        }, tm.geom.Vector3.lerp = function(a, b, c) {
            return tm.geom.Vector3(a.x + (b.x - a.x) * c, a.y + (b.y - a.y) * c, a.z + (b.z - a.z) * c)
        }, tm.geom.Vector3.slerp = function() {}, tm.geom.Vector3.random = function(a, b, c, d, e) {
            return a = a || 0, b = b || 360, c = c || 0, d = d || 360, e = e || 1, TM.Geom.Vector3().setFromDegree(TM.randomf(a, b), TM.randomf(c, d), e)
        }, tm.geom.Vector3.ZERO = tm.geom.Vector3(0, 0, 0), tm.geom.Vector3.LEFT = tm.geom.Vector3(-1, 0, 0), tm.geom.Vector3.RIGHT = tm.geom.Vector3(1, 0, 0), tm.geom.Vector3.UP = tm.geom.Vector3(0, 1, 0), tm.geom.Vector3.DOWN = tm.geom.Vector3(0, -1, 0), tm.geom.Vector3.FORWARD = tm.geom.Vector3(0, 0, -1), tm.geom.Vector3.BACKWARD = tm.geom.Vector3(0, 0, 1)
    }(), tm.geom = tm.geom || {},
    function() {
        tm.define("tm.geom.Matrix33", {
            m: null,
            init: function() {
                this.m = [], arguments.length >= 9 ? this.set.apply(this, arguments) : this.identity()
            },
            clone: function() {
                var a = this.m;
                return tm.geom.Matrix33(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8])
            },
            set: function(a, b, c, d, e, f, g, h, i) {
                return console.assert(arguments.length >= 9, ""), this.m00 = a, this.m01 = b, this.m02 = c, this.m10 = d, this.m11 = e, this.m12 = f, this.m20 = g, this.m21 = h, this.m22 = i, this
            },
            setArray: function(a) {
                return this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]), this
            },
            setObject: function(a) {
                return this.set(a.m00, a.m01, a.m02, a.m10, a.m11, a.m12, a.m20, a.m21, a.m22), this
            },
            identity: function() {
                var a = this.m;
                return a[0] = 1, a[3] = 0, a[6] = 0, a[1] = 0, a[4] = 1, a[7] = 0, a[2] = 0, a[5] = 0, a[8] = 1, this
            },
            transpose: function() {
                return this.m.swap(1, 3), this.m.swap(2, 6), this.m.swap(5, 7), this
            },
            invert: function() {
                var a = this.m,
                    b = a[0],
                    c = a[3],
                    d = a[6],
                    e = a[1],
                    f = a[4],
                    g = a[7],
                    h = a[2],
                    i = a[5],
                    j = a[8],
                    k = this.determinant();
                return this.m00 = (f * j - g * i) / k, this.m01 = (e * j - g * h) / k * -1, this.m02 = (e * i - f * h) / k, this.m10 = (c * j - d * i) / k * -1, this.m11 = (b * j - d * h) / k, this.m12 = (b * i - c * h) / k * -1, this.m20 = (c * g - d * f) / k, this.m21 = (b * g - d * e) / k * -1, this.m22 = (b * f - c * e) / k, this.transpose(), this
            },
            determinant: function() {
                var a = this.m,
                    b = a[0],
                    c = a[3],
                    d = a[6],
                    e = a[1],
                    f = a[4],
                    g = a[7],
                    h = a[2],
                    i = a[5],
                    j = a[8];
                return b * f * j + e * i * d + c * g * h - d * f * h - c * e * j - g * i * b
            },
            zero: function() {
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0), this
            },
            translate: function(a, b) {
                var c = this.m;
                return c[6] = c[0] * a + c[3] * b + c[6], c[7] = c[1] * a + c[4] * b + c[7], c[8] = c[2] * a + c[5] * b + c[8], this
            },
            rotateX: function(a) {
                return this.multiply(tm.geom.Matrix33.rotateX(a))
            },
            rotateY: function(a) {
                return this.multiply(tm.geom.Matrix33.rotateY(a))
            },
            rotateZ: function(a) {
                {
                    var b = (Math.sin(a), Math.cos(a), this.m);
                    b[0], b[1], b[2], b[3], b[4], b[5]
                }
                return this.multiply(tm.geom.Matrix33.rotateZ(a))
            },
            scale: function(a, b) {
                var c = this.m;
                return c[0] *= a, c[3] *= b, c[1] *= a, c[4] *= b, c[2] *= a, c[5] *= b, this
            },
            multiply: function(a) {
                var b = this.m,
                    c = a.m,
                    d = b[0],
                    e = b[3],
                    f = b[6],
                    g = b[1],
                    h = b[4],
                    i = b[7],
                    j = b[2],
                    k = b[5],
                    l = b[8],
                    m = c[0],
                    n = c[3],
                    o = c[6],
                    p = c[1],
                    q = c[4],
                    r = c[7],
                    s = c[2],
                    t = c[5],
                    u = c[8];
                return b[0] = d * m + e * p + f * s, b[3] = d * n + e * q + f * t, b[6] = d * o + e * r + f * u, b[1] = g * m + h * p + i * s, b[4] = g * n + h * q + i * t, b[7] = g * o + h * r + i * u, b[2] = j * m + k * p + l * s, b[5] = j * n + k * q + l * t, b[8] = j * o + k * r + l * u, this
            },
            multiplyVector2: function(a) {
                var b = this.m00 * a.x + this.m01 * a.y + this.m02,
                    c = this.m10 * a.x + this.m11 * a.y + this.m12;
                return tm.geom.Vector2(b, c)
            },
            multiplyVector3: function(a) {
                var b = this.m00 * a.x + this.m01 * a.y + this.m02 * a.z,
                    c = this.m10 * a.x + this.m11 * a.y + this.m12 * a.z,
                    d = this.m20 * a.x + this.m21 * a.y + this.m22 * a.z;
                return tm.geom.Vector3(b, c, d)
            },
            toArray: function() {
                return this.m.slice()
            },
            toString: function() {
                return "|{m00}, {m01}, {m02}|\n|{m10}, {m11}, {m12}|\n|{m20}, {m21}, {m22}|".format(this)
            }
        }), tm.geom.Matrix33.prototype.accessor("m00", {
            get: function() {
                return this.m[0]
            },
            set: function(a) {
                this.m[0] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("m10", {
            get: function() {
                return this.m[1]
            },
            set: function(a) {
                this.m[1] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("m20", {
            get: function() {
                return this.m[2]
            },
            set: function(a) {
                this.m[2] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("m01", {
            get: function() {
                return this.m[3]
            },
            set: function(a) {
                this.m[3] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("m11", {
            get: function() {
                return this.m[4]
            },
            set: function(a) {
                this.m[4] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("m21", {
            get: function() {
                return this.m[5]
            },
            set: function(a) {
                this.m[5] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("m02", {
            get: function() {
                return this.m[6]
            },
            set: function(a) {
                this.m[6] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("m12", {
            get: function() {
                return this.m[7]
            },
            set: function(a) {
                this.m[7] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("m22", {
            get: function() {
                return this.m[8]
            },
            set: function(a) {
                this.m[8] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("a", {
            get: function() {
                return this.m[0]
            },
            set: function(a) {
                this.m[0] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("b", {
            get: function() {
                return this.m[3]
            },
            set: function(a) {
                this.m[3] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("c", {
            get: function() {
                return this.m[1]
            },
            set: function(a) {
                this.m[1] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("d", {
            get: function() {
                return this.m[4]
            },
            set: function(a) {
                this.m[4] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("tx", {
            get: function() {
                return this.m[6]
            },
            set: function(a) {
                this.m[6] = a
            }
        }), tm.geom.Matrix33.prototype.accessor("ty", {
            get: function() {
                return this.m[7]
            },
            set: function(a) {
                this.m[7] = a
            }
        }), tm.geom.Matrix33.translate = function(a, b) {
            return tm.geom.Matrix33(1, 0, a, 0, 1, b, 0, 0, 1)
        }, tm.geom.Matrix33.rotateX = function(a) {
            var b = Math.cos(a),
                c = Math.sin(a);
            return tm.geom.Matrix33(1, 0, 0, 0, b, -c, 0, c, b)
        }, tm.geom.Matrix33.rotateY = function(a) {
            var b = Math.cos(a),
                c = Math.sin(a);
            return tm.geom.Matrix33(b, 0, c, 0, 1, 0, -c, 0, b)
        }, tm.geom.Matrix33.rotateZ = function(a) {
            var b = Math.cos(a),
                c = Math.sin(a);
            return tm.geom.Matrix33(b, -c, 0, c, b, 0, 0, 0, 1)
        }, tm.geom.Matrix33.scale = function(a, b) {
            var c = tm.geom.Matrix33();
            return void 0 == b && (b = a), c.set(a, 0, 0, 0, b, 0, 0, 0, 1), c
        }
    }(), tm.geom = tm.geom || {},
    function() {
        tm.geom.Matrix44 = tm.createClass({
            m: null,
            init: function() {
                this.m = [], arguments.length >= 16 ? this.set.apply(this, arguments) : this.identity()
            },
            set: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                return console.assert(arguments.length >= 16, ""), this.m00 = a, this.m01 = b, this.m02 = c, this.m03 = d, this.m10 = e, this.m11 = f, this.m12 = g, this.m13 = h, this.m20 = i, this.m21 = j, this.m22 = k, this.m23 = l, this.m30 = m, this.m31 = n, this.m32 = o, this.m33 = p, this
            },
            setArray: function(a) {
                return this.set(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]), this
            },
            setObject: function(a) {
                return this.set(a.m00, a.m01, a.m02, a.m03, a.m10, a.m11, a.m12, a.m13, a.m20, a.m21, a.m22, a.m23, a.m30, a.m31, a.m32, a.m33), this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            transpose: function() {
                return this.m.swap(1, 4), this.m.swap(2, 8), this.m.swap(3, 12), this.m.swap(6, 9), this.m.swap(7, 13), this.m.swap(11, 14), this
            },
            translate: function(a, b, c) {
                return this.multiply(tm.geom.Matrix44.translate(a, b, c))
            },
            rotate: function() {
                console.error("Unimplemented")
            },
            rotateX: function(a) {
                return this.multiply(tm.geom.Matrix44.rotateX(a))
            },
            rotateY: function(a) {
                return this.multiply(tm.geom.Matrix44.rotateY(a))
            },
            rotateZ: function(a) {
                return this.multiply(tm.geom.Matrix44.rotateZ(a))
            },
            scale: function(a, b, c) {
                return this.multiply(tm.geom.Matrix44.scale(a, b, c))
            },
            zero: function() {
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), this
            },
            multiply: function(a) {
                var b = this.m00 * a.m00 + this.m01 * a.m10 + this.m02 * a.m20 + this.m03 * a.m30,
                    c = this.m00 * a.m01 + this.m01 * a.m11 + this.m02 * a.m21 + this.m03 * a.m31,
                    d = this.m00 * a.m02 + this.m01 * a.m12 + this.m02 * a.m22 + this.m03 * a.m32,
                    e = this.m00 * a.m03 + this.m01 * a.m13 + this.m02 * a.m23 + this.m03 * a.m33,
                    f = this.m10 * a.m00 + this.m11 * a.m10 + this.m12 * a.m20 + this.m13 * a.m30,
                    g = this.m10 * a.m01 + this.m11 * a.m11 + this.m12 * a.m21 + this.m13 * a.m31,
                    h = this.m10 * a.m02 + this.m11 * a.m12 + this.m12 * a.m22 + this.m13 * a.m32,
                    i = this.m10 * a.m03 + this.m11 * a.m13 + this.m12 * a.m23 + this.m13 * a.m33,
                    j = this.m20 * a.m00 + this.m21 * a.m10 + this.m22 * a.m20 + this.m23 * a.m30,
                    k = this.m20 * a.m01 + this.m21 * a.m11 + this.m22 * a.m21 + this.m23 * a.m31,
                    l = this.m20 * a.m02 + this.m21 * a.m12 + this.m22 * a.m22 + this.m23 * a.m32,
                    m = this.m20 * a.m03 + this.m21 * a.m13 + this.m22 * a.m23 + this.m23 * a.m33,
                    n = this.m30 * a.m00 + this.m31 * a.m10 + this.m32 * a.m20 + this.m33 * a.m30,
                    o = this.m30 * a.m01 + this.m31 * a.m11 + this.m32 * a.m21 + this.m33 * a.m31,
                    p = this.m30 * a.m02 + this.m31 * a.m12 + this.m32 * a.m22 + this.m33 * a.m32,
                    q = this.m30 * a.m03 + this.m31 * a.m13 + this.m32 * a.m23 + this.m33 * a.m33;
                return this.set(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
            },
            getAxisX: function() {
                return TM.Geom.Vector3(this.m00, this.m01, this.m02)
            },
            getAxisY: function() {
                return TM.Geom.Vector3(this.m10, this.m11, this.m12)
            },
            getAxisZ: function() {
                return TM.Geom.Vector3(this.m20, this.m21, this.m22)
            },
            setAxisX: function(a) {
                this.m00 = a.x, this.m01 = a.y, this.m02 = a.z
            },
            setAxisY: function(a) {
                this.m10 = a.x, this.m11 = a.y, this.m12 = a.z
            },
            setAxisZ: function(a) {
                this.m20 = a.x, this.m21 = a.y, this.m22 = a.z
            },
            toMatrix33: function() {},
            toArray: function() {
                return this.m.slice()
            },
            toString: function() {
                return "|{m00}, {m01}, {m02}, {m03}|\n|{m10}, {m11}, {m12}, {m13}|\n|{m20}, {m21}, {m22}, {m23}|\n|{m30}, {m31}, {m32}, {m33}|".format(this)
            }
        }), tm.geom.Matrix44.prototype.accessor("m00", {
            get: function() {
                return this.m[0]
            },
            set: function(a) {
                this.m[0] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m10", {
            get: function() {
                return this.m[1]
            },
            set: function(a) {
                this.m[1] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m20", {
            get: function() {
                return this.m[2]
            },
            set: function(a) {
                this.m[2] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m30", {
            get: function() {
                return this.m[3]
            },
            set: function(a) {
                this.m[3] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m01", {
            get: function() {
                return this.m[4]
            },
            set: function(a) {
                this.m[4] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m11", {
            get: function() {
                return this.m[5]
            },
            set: function(a) {
                this.m[5] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m21", {
            get: function() {
                return this.m[6]
            },
            set: function(a) {
                this.m[6] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m31", {
            get: function() {
                return this.m[7]
            },
            set: function(a) {
                this.m[7] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m02", {
            get: function() {
                return this.m[8]
            },
            set: function(a) {
                this.m[8] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m12", {
            get: function() {
                return this.m[9]
            },
            set: function(a) {
                this.m[9] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m22", {
            get: function() {
                return this.m[10]
            },
            set: function(a) {
                this.m[10] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m32", {
            get: function() {
                return this.m[11]
            },
            set: function(a) {
                this.m[11] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m03", {
            get: function() {
                return this.m[12]
            },
            set: function(a) {
                this.m[12] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m13", {
            get: function() {
                return this.m[13]
            },
            set: function(a) {
                this.m[13] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m23", {
            get: function() {
                return this.m[14]
            },
            set: function(a) {
                this.m[14] = a
            }
        }), tm.geom.Matrix44.prototype.accessor("m33", {
            get: function() {
                return this.m[15]
            },
            set: function(a) {
                this.m[15] = a
            }
        }), tm.geom.Matrix44.translate = function(a, b, c) {
            return tm.geom.Matrix44(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1)
        }, tm.geom.Matrix44.rotateX = function(a) {
            var b = Math.cos(a),
                c = Math.sin(a);
            return tm.geom.Matrix44(1, 0, 0, 0, 0, b, -c, 0, 0, c, b, 0, 0, 0, 0, 1)
        }, tm.geom.Matrix44.rotateY = function(a) {
            var b = Math.cos(a),
                c = Math.sin(a);
            return tm.geom.Matrix44(b, 0, c, 0, 0, 1, 0, 0, -c, 0, b, 0, 0, 0, 0, 1)
        }, tm.geom.Matrix44.rotateZ = function(a) {
            var b = Math.cos(a),
                c = Math.sin(a);
            return tm.geom.Matrix44(b, -c, 0, 0, c, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }, tm.geom.Matrix44.scale = function(a, b, c) {
            var d = tm.geom.Matrix44();
            return void 0 == b && (b = a), void 0 == c && (c = a), d.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1), d
        }, tm.geom.Matrix44.perspective = function(a, b, c, d) {
            var e = 1 / Math.tan(.5 * a * Math.PI / 180),
                f = e / b;
            return tm.geom.Matrix44(f, 0, 0, 0, 0, e, 0, 0, 0, 0, d / (d - c), c * d / (c - d), 0, 0, 1, 0)
        }, tm.geom.Matrix44.ortho = function(a, b, c, d, e, f) {
            var g = b - a,
                h = d - c,
                i = f - e;
            return tm.geom.Matrix44(2 / g, 0, 0, 0, 0, 2 / h, 0, 0, 0, 0, -2 / i, 0, -(a + b) / g, -(d + c) / h, -(f + e) / i, 1).transpose()
        }, tm.geom.Matrix44.lookAt = function(a, b, c) {
            var d = tm.geom.Vector3.sub(a, b).normalize(),
                e = tm.geom.Vector3.cross(c, d).normalize(),
                f = tm.geom.Vector3.cross(d, e).normalize(),
                g = tm.geom.Matrix44(e.x, f.x, d.x, 0, e.y, f.y, d.y, 0, e.z, f.z, d.z, 0, 0, 0, 0, 1),
                h = tm.geom.Matrix44(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -a.x, -a.y, -a.z, 1);
            return h.multiply(g)
        }
    }(), tm.geom = tm.geom || {},
    function() {
        tm.geom.Rect = tm.createClass({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            init: function(a, b, c, d) {
                this.set(a, b, c, d)
            },
            set: function(a, b, c, d) {
                return this.x = a, this.y = b, this.width = c, this.height = d, this
            },
            move: function(a, b) {
                return this.x = a, this.y = b, this
            },
            moveBy: function(a, b) {
                return this.x += a, this.y += b, this
            },
            resize: function(a, b) {
                return this.width = a, this.height = b, this
            },
            resizeBy: function(a, b) {
                return this.width += a, this.height += b, this
            },
            padding: function(a, b, c, d) {
                switch (arguments.length) {
                    case 1:
                        a = b = c = d = arguments[0];
                        break;
                    case 2:
                        a = c = arguments[0], b = d = arguments[1];
                        break;
                    case 3:
                        a = arguments[0], b = d = arguments[1], c = arguments[2]
                }
                return this.x += d, this.y += a, this.width -= d + b, this.height -= a + c, this
            },
            clone: function() {
                return tm.geom.Rect(this.x, this.y, this.width, this.height)
            },
            toCircle: function() {
                return tm.geom.Circle(this.centerX, this.centerY, (this.width < this.height ? this.width : this.height) / 2)
            },
            toArray: function() {
                return [this.x, this.y, this.width, this.height]
            }
        }), tm.geom.Rect.prototype.accessor("left", {
            get: function() {
                return this.x
            },
            set: function(a) {
                this.width -= a - this.x, this.x = a
            }
        }), tm.geom.Rect.prototype.accessor("top", {
            get: function() {
                return this.y
            },
            set: function(a) {
                this.height -= a - this.y, this.y = a
            }
        }), tm.geom.Rect.prototype.accessor("right", {
            get: function() {
                return this.x + this.width
            },
            set: function(a) {
                this.width += a - this.right
            }
        }), tm.geom.Rect.prototype.accessor("bottom", {
            get: function() {
                return this.y + this.height
            },
            set: function(a) {
                this.height += a - this.bottom
            }
        }), tm.geom.Rect.prototype.accessor("centerX", {
            get: function() {
                return this.x + this.width / 2
            },
            set: function() {}
        }), tm.geom.Rect.prototype.accessor("centerY", {
            get: function() {
                return this.y + this.height / 2
            },
            set: function() {}
        })
    }(), tm.geom = tm.geom || {},
    function() {
        tm.define("tm.geom.Circle", {
            x: 0,
            y: 0,
            radius: 0,
            init: function(a, b, c) {
                this.set(a, b, c)
            },
            set: function(a, b, c) {
                return this.x = a, this.y = b, this.radius = c, this
            },
            move: function(a, b) {
                return this.x = a, this.y = b, this
            },
            moveBy: function(a, b) {
                return this.x += a, this.y += b, this
            },
            resize: function(a) {
                return this.radius = a, this
            },
            resizeBy: function(a) {
                return this.radius += a, this
            },
            clone: function() {
                return tm.geom.Circle(this.x, this.y, this.radius)
            },
            toRect: function() {
                return tm.geom.Rect(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
            },
            toArray: function() {
                return [this.x, this.y, this.radius]
            }
        }), tm.geom.Circle.prototype.getter("left", function() {
            return this.x - this.radius
        }), tm.geom.Circle.prototype.getter("top", function() {
            return this.y - this.radius
        }), tm.geom.Circle.prototype.getter("right", function() {
            return this.x + this.radius
        }), tm.geom.Circle.prototype.getter("bottom", function() {
            return this.y + this.radius
        })
    }(), tm.collision = tm.collision || {},
    function() {
        tm.collision, tm.collision.testCircleCircle = function(a, b) {
            var c = tm.geom.Vector2.distanceSquared(a, b);
            return c <= Math.pow(a.radius + b.radius, 2)
        }, tm.collision.testRectRect = function(a, b) {
            return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top
        }
    }(), tm.dom = tm.dom || {},
    function() {
        tm.dom.Element = tm.createClass({
            element: null,
            init: function() {
                this.set.apply(this, arguments)
            },
            set: function(a) {
                this.element = "string" == typeof a ? document.querySelector(a) : void 0 != a ? a : document
            },
            append: function(a) {
                return this.element.appendChild(a.element), this
            },
            prepend: function(a) {
                return this.element.insertBefore(a.element, this.element.firstChild), this
            },
            after: function(a) {
                return this.element.parentNode.insertBefore(a.element, this.element.nextSibling), this
            },
            before: function(a) {
                return this.element.parentNode.insertBefore(a.element, this.element), this
            },
            appendTo: function(a) {
                return a.append(this), this
            },
            prependTo: function(a) {
                return a.prepend(this), this
            },
            clone: function() {
                return tm.dom.Element(this.element.cloneNode(!0))
            },
            remove: function() {
                return this.element.parentNode.removeChild(this.element), this
            },
            create: function(a, b) {
                var c = tm.dom.Element(document.createElement(a));
                return b || (b = "append"), this[b](c), c
            },
            query: function(a, b) {
                var c = b ? this.element.querySelectorAll(a)[b] : this.element.querySelector(a);
                return tm.dom.Element(c)
            },
            queryAll: function(a) {
                var b = this.element.querySelectorAll(a);
                return tm.dom.ElementList(b)
            },
            fixed: function(a, b, c, d) {
                return this.style.set("position", "fixed"), a && (this.x = a), b && (this.y = b), c && (this.width = c), d && (this.height = d), this
            },
            absolute: function(a, b, c, d) {
                return this.style.set("position", "absolute"), a && (this.x = a), b && (this.y = b), c && (this.width = c), d && (this.height = d), this
            },
            fullScreen: function() {
                this.element.webkitRequestFullScreen()
            },
            show: function() {
                this.visible = !0
            },
            hide: function() {
                this.visible = !1
            },
            toString: function() {
                return "tm.dom.element"
            },
            getElement: function() {
                return this.element
            }
        }), tm.dom.Element.prototype.accessor("html", {
            get: function() {
                return this.element.innerHTML
            },
            set: function(a) {
                this.element.innerHTML = a
            }
        }), tm.dom.Element.prototype.accessor("value", {
            get: function() {
                return this.element.value
            },
            set: function(a) {
                this.element.value = a
            }
        }), tm.dom.Element.prototype.accessor("x", {
            get: function() {
                return Number(this.element.style.left.replace("px", ""))
            },
            set: function(a) {
                this.element.style.left = a + "px"
            }
        }), tm.dom.Element.prototype.accessor("y", {
            get: function() {
                return Number(this.element.style.top.replace("px", ""))
            },
            set: function(a) {
                this.element.style.top = a + "px"
            }
        }), tm.dom.Element.prototype.accessor("width", {
            get: function() {
                return Number(this.element.style.width.replace("px", ""))
            },
            set: function(a) {
                this.element.style.width = a + "px"
            }
        }), tm.dom.Element.prototype.accessor("height", {
            get: function() {
                return Number(this.element.style.height.replace("px", ""))
            },
            set: function(a) {
                this.element.style.height = a + "px"
            }
        }), tm.dom.Element.prototype.accessor("color", {
            get: function() {
                return this.element.style.color
            },
            set: function(a) {
                this.element.style.color = a
            }
        }), tm.dom.Element.prototype.accessor("backgroundColor", {
            get: function() {
                return this.element.style.backgroundColor
            },
            set: function(a) {
                this.element.style.backgroundColor = a
            }
        }), tm.dom.Element.prototype.accessor("visible", {
            get: function() {
                return "hidden" != this.element.style.visibility
            },
            set: function(a) {
                this.element.style.visibility = 1 == a ? "visible" : "hidden"
            }
        }), tm.dom.Element.prototype.accessor("text", {
            get: function() {
                return this.element.innerText || this.element.textContent
            },
            set: function(a) {
                this.element.innerText ? this.element.innerText = a : this.element.textContent = a
            }
        }), tm.dom.Element.prototype.getter("classList", function() {
            return this.element.classList
        }), tm.dom.Element.prototype.getter("parent", function() {
            return void 0 != this.element.parentNode ? tm.dom.Element(this.element.parentNode) : null
        }), tm.dom.Element.prototype.getter("prev", function() {
            return void 0 != this.element.previousSibling ? tm.dom.Element(this.element.previousSibling) : null
        }), tm.dom.Element.prototype.getter("next", function() {
            return void 0 != this.element.nextSibling ? tm.dom.Element(this.element.nextSibling) : null
        }), tm.dom.Element.prototype.getter("children", function() {
            return tm.dom.ElementList(this.element.children)
        })
    }(),
    function() {
        tm.dom.ElementList = tm.createClass({
            superClass: Array,
            init: function(a) {
                if ("string" == typeof arguments[0]) {
                    var b = arguments[0];
                    a = document.querySelectorAll(b)
                } else if (void 0 == a) return;
                for (var c = 0, d = a.length; d > c; ++c) this.push(tm.dom.Element(a[c]))
            },
            toString: function() {
                return ""
            }
        })
    }(), tm.dom = tm.dom || {},
    function() {
        Event.prototype.stopPropagation || (Event.prototype.stopPropagation = function() {
            this.cancelBubble = !0
        }), Event.prototype.preventDefault || (Event.prototype.preventDefault = function() {
            this.returnValue = !1
        }), Event.prototype.stop = function() {
            this.preventDefault(), this.stopPropagation()
        }
    }(),
    function() {
        KeyboardEvent.prototype.getter("character", function() {
            return String.fromCharCode(this.keyCode)
        })
    }(),
    function() {
        MouseEvent.prototype.getter("pointX", function() {
            return this.clientX - this.target.getBoundingClientRect().left
        }), MouseEvent.prototype.getter("pointY", function() {
            return this.clientY - this.target.getBoundingClientRect().top
        })
    }(),
    function() {
        void 0 !== window.TouchEvent && (TouchEvent.prototype.getter("pointX", function() {
            return this.touches[0].clientX - this.target.getBoundingClientRect().left
        }), TouchEvent.prototype.getter("pointY", function() {
            return this.touches[0].clientY - this.target.getBoundingClientRect().top
        }))
    }(),
    function() {
        tm.dom.Event = tm.createClass({
            element: null,
            funcList: null,
            funcIndex: 0,
            init: function(a) {
                this.element = a, this.domElement = a.element, this.funcList = {}
            },
            add: function(a, b, c) {
                var d = this.element,
                    e = function(a) {
                        var c = b.apply(d, arguments);
                        return c === !1 && (a.preventDefault(), a.returnValue = !1, a.stopPropagation()), c
                    };
                return this._funcIndex = this._funcIndex || 0, c = c || this._funcIndex++, this.funcList[a] = this.funcList[a] || {}, this.funcList[a][c] = e, b._id = c, this.domElement.addEventListener(a, e, !1), this
            },
            remove: function(a, b) {
                var c = "function" == typeof b ? b._id : b,
                    d = this.getFunc(a, c);
                this.domElement.removeEventListener(a, d, !1), delete this.funcList[a][c]
            },
            click: function(a, b) {
                return this.add("click", a, b), this
            },
            mdlclick: function(a, b) {
                var c = function(b) {
                    1 == b.button && a(b)
                };
                this.add("click", c, b)
            },
            pointstart: function(a, b) {
                this.add(tm.dom.Event.POINT_START, a, b)
            },
            pointmove: function(a, b) {
                this.add(tm.dom.Event.POINT_MOVE, a, b)
            },
            pointend: function(a, b) {
                this.add(tm.dom.Event.POINT_END, a, b)
            },
            hover: function(a, b) {
                return this.add("mouseover", a, b), this
            },
            one: function(a, b, c) {
                var d = this,
                    e = this.element,
                    f = function() {
                        var c = b.apply(e, arguments);
                        return d.remove(a, f), c
                    };
                return this.add(a, f, c), this
            },
            toggle: function(a, b) {
                for (var c = this, d = this.element, e = [], f = 0; f < b.length; ++f) {
                    var g = function(f) {
                        return function() {
                            var g = b[f].apply(d, arguments);
                            if (g !== !1) {
                                var h = (f + 1) % b.length;
                                c.one(a, e[h])
                            }
                        }
                    }(f);
                    e.push(g)
                }
                return this.one(a, e[0]), this
            },
            getFunc: function(a, b) {
                return this.funcList[a][b]
            }
        }), tm.dom.Event.POINT_START = tm.isMobile ? "touchstart" : "mousedown", tm.dom.Event.POINT_MOVE = tm.isMobile ? "touchmove" : "mousemove", tm.dom.Event.POINT_END = tm.isMobile ? "touchend" : "mouseup", tm.dom.Element.prototype.getter("event", function() {
            return this._event || (this._event = tm.dom.Event(this))
        })
    }(), tm.dom = tm.dom || {},
    function() {
        tm.dom.Attr = tm.createClass({
            element: null,
            init: function(a) {
                this.element = a
            },
            set: function(a, b) {
                return this.element.setAttribute(a, b), this
            },
            add: function(a, b) {
                var c = this.get(a);
                return b = c ? c + " " + b : b, this.element.setAttribute(a, b), this
            },
            remove: function(a, b) {
                if (b) {
                    var c = this.get(a),
                        d = c ? c.replace(b, "").replace("  ", " ") : "";
                    this.element.setAttribute(a, d.trim())
                } else this.element.removeAttribute(a);
                return this
            },
            get: function(a) {
                return this.element.getAttribute(a)
            },
            contains: function(a, b) {
                var c = this.get(a);
                return 1 == arguments.length ? null != c : 2 == arguments.length ? (" " + c + " ").indexOf(" " + b + " ") > -1 : !1
            },
            toggle: function(a, b) {
                return this.contains(a, b) ? this.remove(a, b) : this.add(a, b), this
            }
        }), tm.dom.Element.prototype.getter("attr", function() {
            return this._attr || (this._attr = tm.dom.Attr(this.element))
        })
    }(), tm.dom = tm.dom || {},
    function() {
        tm.dom.Style = tm.createClass({
            element: null,
            init: function(a) {
                this.element = a
            },
            set: function(a, b) {
                return this.element.style[a] = b, this
            },
            remove: function(a) {
                return this.element.style.removeProperty(a), this
            },
            clear: function() {
                return this
            },
            get: function(a) {
                return this.element.style[a]
            },
            getPropValue: function(a) {
                return document.defaultView.getComputedStyle(this.element, "").getPropertyValue(a)
            }
        }), tm.dom.Element.prototype.getter("style", function() {
            return this._style || (this._style = tm.dom.Style(this.element))
        })
    }(), tm.dom = tm.dom || {},
    function() {
        var a = tm.VENDER_PREFIX,
            b = a + "Animation",
            c = a + "AnimationEnd",
            d = a + "AnimationPlayState",
            e = a + "AnimationName",
            f = a + "AnimationDuration",
            g = a + "AnimationTimingFunction",
            h = a + "AnimationDelay",
            i = a + "AnimationIterationCount";
        tm.dom.Anim = tm.createClass({
            init: function(a) {
                this.element = a;
                var b = this;
                this.element.addEventListener(c, function() {
                    b.stop()
                }, !1)
            },
            start: function() {
                return this.element.style[d] = "running", this
            },
            stop: function() {
                return this.element.style[d] = "paused", this
            },
            setProperty: function(a) {
                if ("string" == typeof a) this.element.style[b] = a;
                else
                    for (var c in a) {
                        var d = j[c],
                            e = a[c];
                        d.call(this, e)
                    }
                return this
            },
            setName: function(a) {
                return this.element.style[e] = a, this
            },
            setDuration: function(a) {
                return this.element.style[f] = a, this
            },
            setTimingFunction: function(a) {
                return this.element.style[g] = a, this
            },
            setIterationCount: function(a) {
                return this.element.style[i] = a, this
            },
            setDelay: function(a) {
                return this.element.style[h] = a, this
            },
            setDirection: function(a) {
                return this.element.style[f] = a, this
            }
        });
        var j = {
            name: tm.dom.Anim.prototype.setName,
            duration: tm.dom.Anim.prototype.setDuration,
            timingFunction: tm.dom.Anim.prototype.setTimingFunction,
            iterationCount: tm.dom.Anim.prototype.setIterationCount,
            delay: tm.dom.Anim.prototype.setDelay,
            Name: tm.dom.Anim.prototype.setName,
            Duration: tm.dom.Anim.prototype.setDuration,
            TimingFunction: tm.dom.Anim.prototype.setTimingFunction,
            IterationCount: tm.dom.Anim.prototype.setIterationCount,
            Delay: tm.dom.Anim.prototype.setDelay
        };
        tm.dom.Element.prototype.getter("anim", function() {
            return this._anim || (this._anim = tm.dom.Anim(this.element))
        })
    }(),
    function() {
        tm.dom.Trans = tm.createClass({
            element: null,
            init: function(a) {
                this.element = a
            },
            to: function(a, b) {
                return this.set(a).duration(b || 1e3), this
            },
            set: function(a) {
                var c = this.element.style,
                    d = [];
                for (var e in a) {
                    var f = b(e);
                    d.push(f.toDash()), c[f] = a[e] + ""
                }
                return c[tm.dom.Trans.PROPERTY] = d.join(", "), this
            },
            duration: function(a) {
                var b = this.element.style;
                return "number" == typeof a && (a += "ms"), b[tm.dom.Trans.DURATION] = a, this
            },
            easing: function() {
                var a = this.element.style;
                return a[tm.dom.Trans.TIMING_FUNCTION] = func, this
            },
            end: function(a) {
                var b = tm.dom.Element(this.element);
                return b.event.add(tm.dom.Trans.END_EVENT, a), this
            },
            reset: function() {
                var a = this.element.style;
                return a[tm.dom.Trans.PROPERTY] = "none", this
            },
            translate: function(a, b, c) {
                return this.to({
                    transform: "translate({0}px,{1}px)".format(a, b)
                }, c), this
            },
            translate3d: function(a, b, c, d) {
                return this.to({
                    transform: "translate3d({0}px,{1}px,{2}px)".format(a, b, c)
                }, d), this
            },
            rotate: function(a, b) {
                return this.to({
                    transform: "rotate({0}deg)".format(a)
                }, b), this
            },
            rotate3d: function(a, b, c, d, e) {
                return this.to({
                    transform: "rotate3d({0},{1},{2},{3}deg)".format(a, b, c, d)
                }, e), this
            },
            scale: function(a, b, c) {
                return this.to({
                    transform: "scale({0},{1})".format(a, b)
                }, c), this
            },
            transform: function() {},
            setProp: function(a) {
                var c = this.element.style,
                    d = [];
                for (var e in a) {
                    var f = b(e);
                    d.push(f.toDash()), c[f] = a[e]
                }
                return c[tm.dom.Trans.PROPERTY] = d.join(", "), this
            },
            setDuration: function(a) {
                var b = this.element.style;
                return b[tm.dom.Trans.DURATION] = a, this
            },
            setTimingFunction: function(a) {
                var b = this.element.style;
                return b[tm.dom.Trans.TIMING_FUNCTION] = a, this
            },
            resetProp: function() {
                var a = this.element.style;
                return a[tm.dom.Trans.PROPERTY] = "none", this
            },
            setEndFunction: function(a) {
                var b = tm.dom.Element(this.element);
                return b.event.add(tm.dom.Trans.END_EVENT, a), this
            }
        }), tm.dom.Trans.PROPERTY = tm.VENDER_PREFIX + "TransitionProperty", tm.dom.Trans.DURATION = tm.VENDER_PREFIX + "TransitionDuration", tm.dom.Trans.TIMING_FUNCTION = tm.VENDER_PREFIX + "TransitionTimingFunction", tm.dom.Trans.DELAY = tm.VENDER_PREFIX + "TransitionDelay", tm.dom.Trans.END_EVENT = function() {
            return {
                webkit: "webkitTransitionEnd",
                moz: "transitionend",
                o: "oTransitionEnd"
            }[tm.VENDER_PREFIX]
        }(), tm.dom.Element.prototype.getter("trans", function() {
            return this._trans || (this._trans = tm.dom.Trans(this.element))
        });
        var a = {
                transform: !0
            },
            b = function(b) {
                return a[b] === !0 ? "-" + tm.VENDER_PREFIX + b.capitalizeFirstLetter() : b
            }
    }(),
    function() {
        tm.define("tm.dom.Data", {
            element: null,
            init: function(a) {
                this.element = a
            },
            set: function(a, b) {
                var c = "data-" + a.toDash();
                return this.element.setAttribute(c, b), this
            },
            get: function(a) {
                var b = "data-" + a.toDash();
                return this.element.attributes[b].value
            }
        }), tm.dom.Element.prototype.getter("data", function() {
            return this._data || (this._data = tm.dom.Data(this.element))
        })
    }(),
    function() {
        tm.asset = tm.asset || {}, tm.asset.Manager = {
            assets: {},
            get: function(a) {
                return this.assets[a]
            },
            set: function(a, b) {
                return this.assets[a] = b, this
            },
            contains: function(a) {
                return this.assets[a] ? !0 : !1
            }
        }
    }(),
    function() {
        tm.define("tm.asset.Loader", {
            superClass: "tm.event.EventDispatcher",
            init: function() {
                this.superInit(), this.assets = {}
            },
            contains: function(a) {
                return this.assets[a] ? !0 : !1
            },
            load: function(a) {
                return tm.util.Type.isObject(a) ? this._loadByObject(a) : this._loadString(arguments[0], arguments[1], arguments[2]), this
            },
            get: function(a) {
                return this.assets[a]
            },
            set: function(a, b) {
                return this.assets[a] = b, tm.asset.Manager.set(a, b), this
            },
            _load: function(a, b, c) {
                b = b || a, c = function() {
                    var a = b.split("?")[0].split("#")[0];
                    return c || a.split(".").last
                }();
                var d = tm.asset.Loader._funcs[c](b);
                return this.set(a, d), d
            },
            _loadString: function(a, b, c) {
                var d = {};
                d[a] = {
                    url: b,
                    type: c
                }, this._loadByObject(d)
            },
            _loadByObject: function(a) {
                var b = tm.util.Flow(Object.keys(a).length, function() {
                        var a = tm.event.Event("load");
                        this.dispatchEvent(a)
                    }.bind(this)),
                    c = function(a) {
                        b.pass();
                        var c = tm.event.Event("progress");
                        c.asset = a, c.progress = b.counter / b.waits, this.dispatchEvent(c)
                    }.bind(this);
                Object.keys(a).each(function(b) {
                    var d = a[b],
                        e = null;
                    e = "string" == typeof d ? this._load(b, d) : this._load(b, d.url || d.src || d.path, d.type), e.loaded ? c(e) : e.on("load", function() {
                        c(e)
                    })
                }.bind(this))
            }
        }), tm.asset.Loader._funcs = [], tm.asset.Loader.defineFunction("register", function(a, b) {
            this._funcs[a] = b
        });
        var a = function(a) {
                var b = tm.asset.Texture(a);
                return b
            },
            b = function(a) {
                var b = tm.sound.WebAudio(a);
                return b
            },
            c = function(a) {
                var b = tm.asset.MapSheet(a);
                return b
            },
            d = function(a) {
                var b = tm.asset.SpriteSheet(a);
                return b
            },
            e = function(a) {
                var b = tm.util.File();
                if ("string" == typeof a) b.load({
                    url: a,
                    dataType: "json"
                });
                else {
                    b.setData(a), b.loaded = !0
                }
                return b
            };
        tm.asset.Loader.register("png", a), tm.asset.Loader.register("gif", a), tm.asset.Loader.register("jpg", a), tm.asset.Loader.register("jpeg", a), tm.asset.Loader.register("wav", b), tm.asset.Loader.register("mp3", b), tm.asset.Loader.register("ogg", b), tm.asset.Loader.register("m4a", b), tm.asset.Loader.register("json", e), tm.asset.Loader.register("tmx", c), tm.asset.Loader.register("tmss", d)
    }(),
    function() {
        tm.define("tm.asset.Texture", {
            superClass: "tm.event.EventDispatcher",
            element: null,
            loaded: !1,
            init: function(a) {
                this.superInit(), this.element = new Image, tm.isLocal() || (this.element.crossOrigin = "anonymous"), this.element.src = a;
                var b = this;
                this.element.onload = function() {
                    b.loaded = !0;
                    var a = tm.event.Event("load");
                    b.dispatchEvent(a)
                }
            },
            getElement: function() {
                return this.element
            }
        }), tm.asset.Texture.prototype.getter("width", function() {
            return this.element.width
        }), tm.asset.Texture.prototype.getter("height", function() {
            return this.element.height
        })
    }(),
    function() {
        tm.define("tm.asset.SpriteSheet", {
            superClass: "tm.event.EventDispatcher",
            loaded: !1,
            init: function(a) {
                this.superInit(), this.loaded = !1, "string" == typeof a ? this.load(a) : (this.parse(a), this.loaded = !0, this.dispatchEvent(tm.event.Event("load")))
            },
            load: function(a) {
                tm.util.Ajax.load({
                    url: a,
                    dataType: "json",
                    success: function(a) {
                        this.parse(a), this.loaded = !0
                    }.bind(this)
                })
            },
            parse: function(a) {
                if (this.frame = a.frame, "string" == typeof a.image) {
                    if (!tm.asset.Manager.contains(a.image)) {
                        var b = tm.asset.Loader();
                        b.load(a.image)
                    }
                    this.image = tm.asset.Manager.get(a.image)
                } else this.image = a.image;
                if (this.image.loaded === !1) this.image.addEventListener("load", function() {
                    this._calcFrames(a.frame);
                    var b = tm.event.Event("load");
                    this.dispatchEvent(b)
                }.bind(this), !1);
                else {
                    this._calcFrames(a.frame);
                    var c = tm.event.Event("load");
                    this.dispatchEvent(c)
                }
                this._calcAnim(a.animations)
            },
            getFrame: function(a) {
                return this.frames[a]
            },
            getAnimation: function(a) {
                return this.animations[a]
            },
            _calcFrames: function(a) {
                var b = this.frames = [],
                    c = a.width,
                    d = a.height,
                    e = ~~(this.image.width / c),
                    f = ~~(this.image.height / d);
                a.count || (a.count = e * f);
                for (var g = 0, h = a.count; h > g; ++g) {
                    var i = g % e,
                        j = g / e | 0,
                        k = {
                            x: i * c,
                            y: j * d,
                            width: c,
                            height: d
                        };
                    b.push(k)
                }
            },
            _calcAnim: function(a) {
                this.animations = {};
                for (var b in a) {
                    var c = a[b];
                    this.animations[b] = c instanceof Array ? {
                        frames: [].range(c[0], c[1]),
                        next: c[2],
                        frequency: c[3] || 1
                    } : "number" == typeof c ? {
                        frames: [c],
                        next: null,
                        frequency: 1
                    } : {
                        frames: c.frames,
                        next: c.next,
                        frequency: c.frequency || 1
                    }
                }
                this.animations["default"] = {
                    frames: [].range(0, this.frame.count),
                    next: "default",
                    frequency: 1
                }
            }
        })
    }(),
    function() {
        tm.define("tm.asset.MapSheet", {
            superClass: "tm.event.EventDispatcher",
            init: function(a) {
                this.superInit(), this.loaded = !1, "string" == typeof a ? tm.util.Ajax.load({
                    url: a,
                    success: function(a) {
                        var b = this._parse(a);
                        this.$extend(b), this._checkImage()
                    }.bind(this)
                }) : (this.$extend(arguments[0]), this._checkImage())
            },
            _parse: function(a) {
                var b = (Array.prototype.forEach, {}),
                    c = new DOMParser,
                    d = c.parseFromString(a, "text/xml"),
                    e = this._attrToJSON(d.getElementsByTagName("map")[0]);
                return this.$extend(e), b.tilesets = this._parseTilesets(d), b.layers = this._parseLayers(d), b
            },
            _parseTilesets: function(a) {
                var b = Array.prototype.forEach,
                    c = this,
                    d = [],
                    e = a.getElementsByTagName("tileset");
                return b.call(e, function(a) {
                    var b = {},
                        e = c._propertiesToJson(a);
                    b.image = e.src ? e.src : a.getElementsByTagName("image")[0].getAttribute("source"), d.push(b)
                }), d
            },
            _parseLayers: function(a) {
                var b = Array.prototype.forEach,
                    c = [],
                    d = a.getElementsByTagName("map")[0],
                    e = [];
                return b.call(d.childNodes, function(a) {
                    ("layer" == a.tagName || "objectgroup" == a.tagName) && e.push(a)
                }), e.each(function(a) {
                    if ("layer" == a.tagName) {
                        var d = a.getElementsByTagName("data")[0],
                            e = d.getAttribute("encoding"),
                            f = {
                                type: "layer",
                                name: a.getAttribute("name")
                            };
                        "csv" == e ? f.data = this._parseCSV(d.textContent) : "base64" == e && (f.data = this._parseBase64(d.textContent));
                        var g = this._attrToJSON(a);
                        f.$extend(g), c.push(f)
                    } else if ("objectgroup" == a.tagName) {
                        var f = {
                            type: "objectgroup",
                            objects: [],
                            name: a.getAttribute("name")
                        };
                        b.call(a.childNodes, function(a) {
                            if (3 != a.nodeType) {
                                var b = this._attrToJSON(a);
                                b.properties = this._propertiesToJson(a), f.objects.push(b)
                            }
                        }.bind(this)), c.push(f)
                    }
                }.bind(this)), c
            },
            _parseCSV: function(a) {
                var b = a.split(","),
                    c = [];
                return b.each(function(a) {
                    var b = parseInt(a, 10) - 1;
                    c.push(b)
                }), c
            },
            _parseBase64: function(a) {
                var b = atob(a.trim()),
                    c = [];
                b = b.split("").map(function(a) {
                    return a.charCodeAt(0)
                });
                for (var d = 0, e = b.length / 4; e > d; ++d) {
                    var f = b[4 * d];
                    c[d] = parseInt(f, 10) - 1
                }
                return c
            },
            _propertiesToJson: function(a) {
                for (var b = a.getElementsByTagName("properties")[0], c = {}, d = 0; d < b.childNodes.length; d++) {
                    var e = b.childNodes[d];
                    "property" === e.tagName && (c[e.getAttribute("name")] = e.getAttribute("value"))
                }
                return c
            },
            _attrToJSON: function(a) {
                for (var b = {}, c = 0; c < a.attributes.length; c++) {
                    var d = a.attributes[c].value;
                    d = isNaN(parseFloat(d)) ? d : parseFloat(d), b[a.attributes[c].name] = d
                }
                return b
            },
            _checkImage: function() {
                var a = this;
                if (this.tilesets.length) {
                    var b = 0,
                        c = this.tilesets.length,
                        d = function() {
                            if (b++, b == c) {
                                this.loaded = !0;
                                var a = tm.event.Event("load");
                                this.dispatchEvent(a)
                            }
                        }.bind(this);
                    this.tilesets.each(function(e) {
                        var f = tm.asset.Manager.get(e.image);
                        if (f)
                            if (f.loaded) {
                                if (++b, b == c) {
                                    this.loaded = !0;
                                    var g = tm.event.Event("load");
                                    a.dispatchEvent(g)
                                }
                            } else f.addEventListener("load", d);
                        else {
                            var h = tm.asset.Loader();
                            h.load(e.image);
                            var i = tm.asset.Manager.get(e.image);
                            i.addEventListener("load", d)
                        }
                    })
                } else {
                    this.loaded = !0;
                    var e = tm.event.Event("load");
                    this.dispatchEvent(e)
                }
            }
        })
    }(), tm.input = tm.input || {},
    function() {
        tm.input.Keyboard = tm.createClass({
            element: null,
            key: null,
            press: null,
            down: null,
            up: null,
            last: null,
            init: function(a) {
                this.element = a || document, this.key = {}, this.press = {}, this.down = {}, this.up = {}, this.last = {};
                var b = this;
                this.element.addEventListener("keydown", function(a) {
                    b.key[a.keyCode] = !0
                }), this.element.addEventListener("keyup", function(a) {
                    b.key[a.keyCode] = !1
                }), this.element.addEventListener("keypress", function() {})
            },
            run: function(a) {
                var b = this;
                a = a || 30, tm.setLoop(function() {
                    b._update(), b.update && b.update()
                }, 1e3 / a)
            },
            _update: function() {
                for (var a in this.key) this.last[a] = this.press[a], this.press[a] = this.key[a], this.down[a] = (this.press[a] ^ this.last[a]) & this.press[a], this.up[a] = (this.press[a] ^ this.last[a]) & this.last[a];
                return this
            },
            getKey: function(a) {
                return "string" == typeof a && (a = b[a]), 1 == this.press[a]
            },
            getKeyDown: function(a) {
                return "string" == typeof a && (a = b[a]), 1 == this.down[a]
            },
            getKeyUp: function(a) {
                return "string" == typeof a && (a = b[a]), 1 == this.up[a]
            },
            getKeyAngle: function() {
                var b = null,
                    c = this.getKey("left") << 3 | this.getKey("up") << 2 | this.getKey("right") << 1 | this.getKey("down");
                return 0 != c && a.hasOwnProperty(c) && (b = a[c]), b
            },
            getKeyDirection: function() {
                var a = tm.geom.Vector2(0, 0);
                return this.getKey("left") ? a.x = -1 : this.getKey("right") && (a.x = 1), this.getKey("up") ? a.y = -1 : this.getKey("down") && (a.y = 1), a.x && a.y && a.div(Math.SQRT2), a
            },
            setKey: function(a, c) {
                return "string" == typeof a && (a = b[a]), this.key[a] = c, this
            },
            clearKey: function() {
                return this.key = {}, this
            }
        });
        var a = {
                1: 270,
                2: 0,
                4: 90,
                8: 180,
                6: 45,
                3: 315,
                12: 135,
                9: 225,
                14: 90,
                13: 180,
                11: 270,
                7: 0
            },
            b = {
                backspace: 8,
                tab: 9,
                enter: 13,
                "return": 13,
                shift: 16,
                ctrl: 17,
                alt: 18,
                pause: 19,
                capslock: 20,
                escape: 27,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                insert: 45,
                "delete": 46,
                0: 48,
                1: 49,
                2: 50,
                3: 51,
                4: 52,
                5: 53,
                6: 54,
                7: 55,
                8: 56,
                9: 57,
                a: 65,
                A: 65,
                b: 66,
                B: 66,
                c: 67,
                C: 67,
                d: 68,
                D: 68,
                e: 69,
                E: 69,
                f: 70,
                F: 70,
                g: 71,
                G: 71,
                h: 72,
                H: 72,
                i: 73,
                I: 73,
                j: 74,
                J: 74,
                k: 75,
                K: 75,
                l: 76,
                L: 76,
                m: 77,
                M: 77,
                n: 78,
                N: 78,
                o: 79,
                O: 79,
                p: 80,
                P: 80,
                q: 81,
                Q: 81,
                r: 82,
                R: 82,
                s: 83,
                S: 83,
                t: 84,
                T: 84,
                u: 85,
                U: 85,
                v: 86,
                V: 86,
                w: 87,
                W: 87,
                x: 88,
                X: 88,
                y: 89,
                Y: 89,
                z: 90,
                Z: 90,
                numpad0: 96,
                numpad1: 97,
                numpad2: 98,
                numpad3: 99,
                numpad4: 100,
                numpad5: 101,
                numpad6: 102,
                numpad7: 103,
                numpad8: 104,
                numpad9: 105,
                multiply: 106,
                add: 107,
                subtract: 109,
                decimalpoint: 110,
                divide: 111,
                f1: 112,
                f2: 113,
                f3: 114,
                f4: 115,
                f5: 116,
                f6: 117,
                f7: 118,
                f8: 119,
                f9: 120,
                f10: 121,
                f11: 122,
                f12: 123,
                numlock: 144,
                scrolllock: 145,
                semicolon: 186,
                equalsign: 187,
                comma: 188,
                dash: 189,
                period: 190,
                "forward slash": 191,
                "/": 191,
                "grave accent": 192,
                "open bracket": 219,
                "back slash": 220,
                "close bracket": 221,
                "single quote": 222,
                space: 32
            }
    }(), tm.input = tm.input || {},
    function() {
        tm.input.Mouse = tm.createClass({
            element: null,
            init: function(a) {
                this.element = a || window.document, this.position = tm.geom.Vector2(0, 0), this.deltaPosition = tm.geom.Vector2(0, 0), this.prevPosition = tm.geom.Vector2(0, 0), this._x = 0, this._y = 0, this.touches = [];
                var b = this;
                this.element.addEventListener("mousedown", function(a) {
                    b._mousemove(a), b.prevPosition.set(b._x, b._y), b.button |= 1 << a.button
                }), this.element.addEventListener("mouseup", function(a) {
                    b.button &= ~(1 << a.button)
                }), this.element.addEventListener("mousemove", function(a) {
                    b._mousemove(a)
                })
            },
            run: function(a) {
                var b = this;
                return a = a || 30, tm.setLoop(function() {
                    b.update()
                }, 1e3 / a), this
            },
            update: function() {
                this.last = this.press, this.press = this.button, this.down = (this.press ^ this.last) & this.press, this.up = (this.press ^ this.last) & this.last, this.deltaPosition.x = this._x - this.position.x, this.deltaPosition.y = this._y - this.position.y, this.prevPosition.setObject(this.position), this.position.set(this._x, this._y)
            },
            getButton: function(b) {
                return "string" == typeof b && (b = a[b]), 0 != (this.press & b)
            },
            getButtonDown: function(b) {
                return "string" == typeof b && (b = a[b]), 0 != (this.down & b)
            },
            getButtonUp: function(b) {
                return "string" == typeof b && (b = a[b]), 0 != (this.up & b)
            },
            _mousemove: function(a) {
                var b = a.target.getBoundingClientRect();
                this._x = a.clientX - b.left, this._y = a.clientY - b.top
            },
            _mousemoveNormal: function(a) {
                var b = a.target.getBoundingClientRect();
                this._x = a.clientX - b.left, this._y = a.clientY - b.top
            },
            _mousemoveScale: function(a) {
                var b = a.target.getBoundingClientRect();
                this._x = a.clientX - b.left, this._y = a.clientY - b.top, a.target.style.width && (this._x *= a.target.width / parseInt(a.target.style.width)), a.target.style.height && (this._y *= a.target.height / parseInt(a.target.style.height))
            }
        }), tm.input.Mouse.BUTTON_LEFT = 1, tm.input.Mouse.BUTTON_MIDDLE = 2, tm.input.Mouse.BUTTON_RIGHT = 4;
        var a = {
            left: tm.input.Mouse.BUTTON_LEFT,
            middle: tm.input.Mouse.BUTTON_MIDDLE,
            right: tm.input.Mouse.BUTTON_RIGHT
        };
        tm.input.Mouse.prototype.accessor("x", {
            get: function() {
                return this.position.x
            },
            set: function(a) {
                this.position.x = a
            }
        }), tm.input.Mouse.prototype.accessor("y", {
            get: function() {
                return this.position.y
            },
            set: function(a) {
                this.position.y = a
            }
        }), tm.input.Mouse.prototype.accessor("dx", {
            get: function() {
                return this.deltaPosition.x
            },
            set: function(a) {
                this.deltaPosition.x = a
            }
        }), tm.input.Mouse.prototype.accessor("dy", {
            get: function() {
                return this.deltaPosition.y
            },
            set: function(a) {
                this.deltaPosition.y = a
            }
        }), tm.input.Mouse.prototype.getPointing = function() {
            return this.getButton("left")
        }, tm.input.Mouse.prototype.getPointingStart = function() {
            return this.getButtonDown("left")
        }, tm.input.Mouse.prototype.getPointingEnd = function() {
            return this.getButtonUp("left")
        }
    }(), tm.input = tm.input || {},
    function() {
        tm.input.Touch = tm.createClass({
            element: null,
            touched: !1,
            init: function(a) {
                this.element = a || window.document, this.position = tm.geom.Vector2(0, 0), this.deltaPosition = tm.geom.Vector2(0, 0), this.prevPosition = tm.geom.Vector2(0, 0), this._x = 0, this._y = 0, this.touches = [];
                var b = this;
                this.element.addEventListener("touchstart", function(a) {
                    b.touched = !0, b._touchmove(a), b.position.set(b._x, b._y), b.prevPosition.set(b._x, b._y), b._setTouches(a)
                }), this.element.addEventListener("touchend", function(a) {
                    b.touched = !1, b._setTouches(a)
                }), this.element.addEventListener("touchmove", function(a) {
                    b._touchmove(a), a.stop(), b._setTouches(a)
                })
            },
            run: function(a) {
                var b = this;
                return a = a || 30, tm.setLoop(function() {
                    b.update()
                }, 1e3 / a), this
            },
            update: function() {
                this.last = this.now, this.now = Number(this.touched), this.start = (this.now ^ this.last) & this.now, this.end = (this.now ^ this.last) & this.last, this.deltaPosition.x = this._x - this.position.x, this.deltaPosition.y = this._y - this.position.y, this.prevPosition.setObject(this.position), this.position.set(this._x, this._y)
            },
            getTouch: function() {
                return 0 != this.touched
            },
            getTouchStart: function() {
                return 0 != this.start
            },
            getTouchEnd: function() {
                return 0 != this.end
            },
            _touchmove: function(a) {
                var b = a.touches[0],
                    c = a.target.getBoundingClientRect();
                this._x = b.clientX - c.left, this._y = b.clientY - c.top
            },
            _touchmoveScale: function(a) {
                var b = a.touches[0],
                    c = a.target.getBoundingClientRect();
                this._x = b.clientX - c.left, this._y = b.clientY - c.top, a.target.style.width && (this._x *= a.target.width / parseInt(a.target.style.width)), a.target.style.height && (this._y *= a.target.height / parseInt(a.target.style.height))
            },
            _getAdjustPoint: function(a) {
                var b = this.element,
                    c = b.style,
                    d = b.getBoundingClientRect(),
                    a = {
                        x: a.clientX - d.left,
                        y: a.clientY - d.top
                    };
                return c.width && (a.x *= b.width / parseInt(c.width)), c.height && (a.y *= b.height / parseInt(c.height)), a
            },
            _setTouches: function(a) {
                var b = a.touches;
                this.touches.clear();
                for (var c = 0, d = b.length; d > c; ++c) {
                    var e = this._getAdjustPoint(b[c]);
                    this.touches.push(e)
                }
                return this
            }
        }), tm.input.Touch.prototype.accessor("x", {
            get: function() {
                return this.position.x
            },
            set: function(a) {
                this.position.x = a
            }
        }), tm.input.Touch.prototype.accessor("y", {
            get: function() {
                return this.position.y
            },
            set: function(a) {
                this.position.y = a
            }
        }), tm.input.Touch.prototype.accessor("dx", {
            get: function() {
                return this.deltaPosition.x
            },
            set: function(a) {
                this.deltaPosition.x = a
            }
        }), tm.input.Touch.prototype.accessor("dy", {
            get: function() {
                return this.deltaPosition.y
            },
            set: function(a) {
                this.deltaPosition.y = a
            }
        }), tm.input.Touch.prototype.getPointing = tm.input.Touch.prototype.getTouch, tm.input.Touch.prototype.getPointingStart = tm.input.Touch.prototype.getTouchStart, tm.input.Touch.prototype.getPointingEnd = tm.input.Touch.prototype.getTouchEnd
    }(), tm.input = tm.input || {},
    function() {
        tm.input.Accelerometer = tm.createClass({
            init: function() {
                this.gravity = tm.geom.Vector3(0, 0, 0), this.acceleration = tm.geom.Vector3(0, 0, 0), this.rotation = tm.geom.Vector3(0, 0, 0), this.orientation = tm.geom.Vector3(0, 0, 0);
                var a = this;
                window.addEventListener("devicemotion", function(b) {
                    var c = a.acceleration,
                        d = a.gravity,
                        e = a.rotation;
                    b.acceleration && (c.x = b.acceleration.x, c.y = b.acceleration.y, c.z = b.acceleration.z), b.accelerationIncludingGravity && (d.x = b.accelerationIncludingGravity.x, d.y = b.accelerationIncludingGravity.y, d.z = b.accelerationIncludingGravity.z), b.rotationRate && (e.x = e.beta = b.rotationRate.beta, e.y = e.gamma = b.rotationRate.gamma, e.z = e.alpha = b.rotationRate.alpha)
                }), window.addEventListener("deviceorientation", function(b) {
                    var c = a.orientation;
                    c.alpha = b.alpha, c.beta = b.beta, c.gamma = b.gamma
                })
            }
        })
    }(), tm.graphics = tm.graphics || {},
    function() {
        tm.graphics.Color = tm.createClass({
            r: 255,
            g: 255,
            b: 255,
            a: 1,
            init: function() {
                this.set.apply(this, arguments)
            },
            set: function(a, b, c, d) {
                return this.r = a, this.g = b, this.b = c, this.a = void 0 !== d ? d : 1, this
            },
            setFromNumber: function(a, b, c, d) {
                return this.r = a, this.g = b, this.b = c, this.a = void 0 !== d ? d : 1, this
            },
            setFromArray: function(a) {
                return this.set.apply(this, a)
            },
            setFromObject: function(a) {
                return this.set(a.r, a.g, a.b, a.a)
            },
            setFromString: function(a) {
                var b = tm.graphics.Color.stringToNumber(a);
                return this.set(b[0], b[1], b[2], b[3])
            },
            setSmart: function() {
                var a = arguments[0];
                return arguments.length >= 3 ? this.set(arguments.r, arguments.g, arguments.b, arguments.a) : a instanceof Array ? this.setFromArray(a) : a instanceof Object ? this.setFromObject(a) : "string" == typeof a && this.setFromString(a), this
            },
            toStyleAsHex: function() {
                return "#{0}{1}{2}".format(this.r.toString(16).padding(2, "0"), this.g.toString(16).padding(2, "0"), this.b.toString(16).padding(2, "0"))
            },
            toStyleAsRGB: function() {
                return "rgb({r},{g},{b})".format({
                    r: ~~this.r,
                    g: ~~this.g,
                    b: ~~this.b
                })
            },
            toStyleAsRGBA: function() {
                return "rgba({r},{g},{b},{a})".format({
                    r: ~~this.r,
                    g: ~~this.g,
                    b: ~~this.b,
                    a: this.a
                })
            },
            toStyle: function() {
                return "rgba({r},{g},{b},{a})".format({
                    r: ~~this.r,
                    g: ~~this.g,
                    b: ~~this.b,
                    a: this.a
                })
            }
        });
        var a = {
            hex111: {
                reg: /^#(\w{1})(\w{1})(\w{1})$/,
                exec: function(a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            },
            hex222: {
                reg: /^#(\w{2})(\w{2})(\w{2})$/,
                exec: function(a) {
                    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            },
            rgb: {
                reg: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                exec: function(a) {
                    return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])]
                }
            },
            rgba: {
                reg: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1}(\.{1}\d+)?)\)$/,
                exec: function(a) {
                    return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3]), parseFloat(a[4])]
                }
            },
            hsl: {
                reg: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
                exec: function(a) {
                    return tm.graphics.Color.HSLtoRGB(a[1], a[2], a[3])
                }
            },
            hsla: {
                reg: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1}(\.{1}\d+)?)\)$/,
                exec: function(a) {
                    return Color.HSLAtoRGBA(a[1], a[2], a[3], a[4])
                }
            }
        };
        tm.graphics.Color.COLOR_LIST = {
            black: [0, 0, 0],
            silver: [192, 192, 192],
            gray: [128, 128, 128],
            white: [255, 255, 255],
            maroon: [128, 0, 0],
            red: [255, 0, 0],
            purple: [128, 0, 128],
            fuchsia: [255, 0, 255],
            green: [0, 128, 0],
            lime: [0, 255, 0],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            navy: [0, 0, 128],
            blue: [0, 0, 255],
            teal: [0, 128, 128],
            aqua: [0, 255, 255]
        }, tm.graphics.Color.strToNum = tm.graphics.Color.stringToNumber = function(b) {
            var c = null;
            if ("#" === b[0] ? c = 4 == b.length ? "hex111" : "hex222" : "r" === b[0] && "g" === b[1] && "b" === b[2] ? c = "a" == b[3] ? "rgba" : "rgb" : "h" === b[0] && "s" === b[1] && "l" === b[2] && (c = "a" == b[3] ? "hsla" : "hsl"), c) {
                var d = a[c],
                    e = b.match(d.reg);
                value = d.exec(e)
            } else Color.COLOR_LIST[b] && (value = Color.COLOR_LIST[b]);
            return value
        }, tm.graphics.Color.HSLtoRGB = function(a, b, c) {
            var d, e, f;
            if (a %= 360, a += 360, a %= 360, b *= .01, c *= .01, 0 == b) {
                var c = Math.round(255 * c);
                return [c, c, c]
            }
            var g = .5 > c ? c * (1 + b) : c + b - c * b,
                h = 2 * c - g,
                i = (a + 120) % 360;
            return d = 60 > i ? h + (g - h) * i / 60 : 180 > i ? g : h, i = a, e = 60 > i ? h + (g - h) * i / 60 : 180 > i ? g : 240 > i ? h + (g - h) * (240 - i) / 60 : h, i = (a - 120 + 360) % 360, f = 60 > i ? h + (g - h) * i / 60 : 180 > i ? g : 240 > i ? h + (g - h) * (240 - i) / 60 : h, [parseInt(255 * d), parseInt(255 * e), parseInt(255 * f)]
        }, tm.graphics.Color.HSLAtoRGBA = function(a, b, c, d) {
            var e = Color.HSLtoRGB(a, b, c);
            return e[3] = d, rgb
        }, tm.graphics.Color.createStyleRGB = function(a, b, c) {
            return "rgba(" + a + "," + b + "," + c + ")"
        }, tm.graphics.Color.createStyleRGBA = function(a, b, c, d) {
            return "rgba(" + a + "," + b + "," + c + "," + d + ")"
        }, tm.graphics.Color.createStyleHSL = function(a, b, c) {
            return "hsl(" + a + "," + b + "%," + c + "%)"
        }, tm.graphics.Color.createStyleHSLA = function(a, b, c, d) {
            return "hsla(" + a + "," + b + "%," + c + "%," + d + ")"
        }
    }(), tm.graphics = tm.graphics || {},
    function() {
        tm.graphics.Canvas = tm.createClass({
            element: null,
            canvas: null,
            context: null,
            init: function(a) {
                this.canvas = null, this.canvas = "string" == typeof a ? document.querySelector(a) : a || document.createElement("canvas"), this.element = this.canvas, this.context = this.canvas.getContext("2d"), this.context.lineCap = "round", this.context.lineJoin = "round"
            },
            resize: function(a, b) {
                return this.canvas.width = a, this.canvas.height = b, this
            },
            resizeWindow: function() {
                return this.canvas.style.position = "fixed", this.canvas.style.margin = "0px", this.canvas.style.padding = "0px", this.canvas.style.left = "0px", this.canvas.style.top = "0px", this.resize(window.innerWidth, window.innerHeight)
            },
            resizeToFitScreen: function() {
                return this.canvas.style.position = "fixed", this.canvas.style.margin = "0px", this.canvas.style.padding = "0px", this.canvas.style.left = "0px", this.canvas.style.top = "0px", this.resize(window.innerWidth, window.innerHeight)
            },
            fitWindow: function(a) {
                var b = function() {
                    a = void 0 === a ? !0 : a;
                    var b = this.element,
                        c = b.style;
                    c.position = "", c.margin = "0", c.left = "0px", c.top = "0px", c.bottom = "0px", c.right = "0px";
                    var d = b.width / window.innerWidth,
                        e = b.height / window.innerHeight,
                        f = b.height / b.width;
                    d > e ? (c.width = innerWidth + "px", c.height = innerWidth * f + "px") : (c.width = innerHeight / f + "px", c.height = innerHeight + "px")
                }.bind(this);
                b(), a && window.addEventListener("resize", b, !1)
            },
            clear: function(a, b, c, d) {
                return a = a || 0, b = b || 0, c = c || this.width, d = d || this.height, this.context.clearRect(a, b, c, d), this
            },
            clearColor: function(a, b, c, d, e) {
                return b = b || 0, c = c || 0, d = d || this.width, e = e || this.height, this.save(), this.resetTransform(), this.fillStyle = a, this.context.fillRect(b, c, d, e), this.restore(), this
            },
            beginPath: function() {
                return this.context.beginPath(), this
            },
            closePath: function() {
                return this.context.closePath(), this
            },
            moveTo: function(a, b) {
                return this.context.moveTo(a, b), this
            },
            lineTo: function(a, b) {
                return this.context.lineTo(a, b), this
            },
            fill: function() {
                return this.context.fill(), this
            },
            stroke: function() {
                return this.context.stroke(), this
            },
            clip: function() {
                return this.context.clip(), this
            },
            drawPoint: function(a, b) {
                return this.strokeRect(a, b, 1, 1)
            },
            line: function(a, b, c, d) {
                return this.moveTo(a, b).lineTo(c, d)
            },
            drawLine: function(a, b, c, d) {
                return this.beginPath().line(a, b, c, d).stroke()
            },
            drawDashLine: function(a, b, c, d, e) {
                var f = null;
                "string" == typeof e ? f = e : (e = e || 61680, f = e.toString(2)), f = f.padding(16, "1");
                var g = c - a,
                    h = d - b,
                    i = Math.sqrt(g * g + h * h);
                g /= i, h /= i;
                for (var j = a, k = b, l = 0; i > l; ++l) "1" == f[l % 16] && this.drawPoint(j, k), j += g, k += h;
                return this
            },
            drawArrow: function(a, b, c, d, e) {
                var f = c - a,
                    g = d - b,
                    h = 180 * Math.atan2(g, f) / Math.PI;
                return this.drawLine(a, b, c, d), this.fillPolygon(c, d, e || 5, 3, h), this
            },
            lines: function() {
                this.moveTo(arguments[0], arguments[1]);
                for (var a = 1, b = arguments.length / 2; b > a; ++a) this.lineTo(arguments[2 * a], arguments[2 * a + 1]);
                return this
            },
            strokeLines: function() {
                return this.beginPath(), this.lines.apply(this, arguments), this.stroke(), this
            },
            fillLines: function() {
                return this.beginPath(), this.lines.apply(this, arguments), this.fill(), this
            },
            rect: function() {
                return this.context.rect.apply(this.context, arguments), this
            },
            fillRect: function() {
                return this.context.fillRect.apply(this.context, arguments), this
            },
            strokeRect: function() {
                return this.context.strokeRect.apply(this.context, arguments), this
            },
            roundRect: function(a, b, c, d, e) {
                var f = a + e,
                    g = a + c - e,
                    h = b + e,
                    i = b + d - e;
                return this.context.arc(f, h, e, -Math.PI, .5 * -Math.PI, !1), this.context.arc(g, h, e, .5 * -Math.PI, 0, !1), this.context.arc(g, i, e, 0, .5 * Math.PI, !1), this.context.arc(f, i, e, .5 * Math.PI, Math.PI, !1), this.closePath(), this
            },
            fillRoundRect: function(a, b, c, d, e) {
                return this.beginPath().roundRect(a, b, c, d, e).fill()
            },
            strokeRoundRect: function(a, b, c, d, e) {
                return this.beginPath().roundRect(a, b, c, d, e).stroke()
            },
            polygon: function(a, b, c, d, e) {
                var f = 2 * Math.PI / d,
                    g = void 0 != e ? e * Math.PI / 180 : -Math.PI / 2;
                this.moveTo(a + Math.cos(g) * c, b + Math.sin(g) * c);
                for (var h = 1; d > h; ++h) {
                    var i = f * h + g;
                    this.lineTo(a + Math.cos(i) * c, b + Math.sin(i) * c)
                }
                return this.closePath(), this
            },
            fillPolygon: function(a, b, c, d, e) {
                return this.beginPath().polygon(a, b, c, d, e).fill()
            },
            strokePolygon: function(a, b, c, d, e) {
                return this.beginPath().polygon(a, b, c, d, e).stroke()
            },
            star: function(a, b, c, d, e, f) {
                var g = c * (e || .38),
                    h = f ? f * Math.PI / 180 : -Math.PI / 2,
                    i = 2 * Math.PI / d / 2;
                this.moveTo(a + Math.cos(h) * c, b + Math.sin(h) * c);
                for (var j = 1; 2 * d > j; ++j) {
                    var k = i * j + h,
                        l = j % 2 ? g : c;
                    this.lineTo(a + Math.cos(k) * l, b + Math.sin(k) * l)
                }
                return this.closePath(), this
            },
            fillStar: function(a, b, c, d, e, f) {
                return this.beginPath().star(a, b, c, d, e, f).fill()
            },
            strokeStar: function(a, b, c, d, e, f) {
                return this.beginPath().star(a, b, c, d, e, f).stroke()
            },
            heart: function(a, b, c, d) {
                var e = .5 * c,
                    f = void 0 === d ? Math.PI / 4 : Math.degToRad(d),
                    g = Math.cos(f) * e,
                    h = Math.sin(f) * e,
                    i = -e,
                    j = (e * e - g * i) / h,
                    k = j + e,
                    l = e - k / 2;
                return this.moveTo(0 + a, j + b + l), this.arc(-e + a, 0 + b + l, e, Math.PI - f, 2 * Math.PI), this.arc(e + a, 0 + b + l, e, Math.PI, f), this.closePath(), this
            },
            fillHeart: function(a, b, c, d) {
                return this.beginPath().heart(a, b, c, d).fill()
            },
            strokeHeart: function(a, b, c, d) {
                return this.beginPath().heart(a, b, c, d).stroke()
            },
            circle: function(a, b, c) {
                return this.context.arc(a, b, c, 0, 2 * Math.PI, !1), this
            },
            fillCircle: function(a, b, c) {
                var d = this.context;
                return d.beginPath(), d.arc(a, b, c, 0, 2 * Math.PI, !1), d.closePath(), d.fill(), this
            },
            strokeCircle: function(a, b, c) {
                return this.beginPath().circle(a, b, c).stroke()
            },
            arc: function(a, b, c, d, e, f) {
                return this.context.arc(a, b, c, d, e, f), this
            },
            fillArc: function(a, b, c, d, e, f) {
                return this.beginPath().arc(a, b, c, d, e, f).fill()
            },
            strokeArc: function(a, b, c, d, e, f) {
                return this.beginPath().arc(a, b, c, d, e, f).stroke()
            },
            triangle: function(a, b, c, d, e, f) {
                return this.moveTo(a, b).lineTo(c, d).lineTo(e, f), this.closePath(), this
            },
            fillTriangle: function(a, b, c, d, e, f) {
                return this.beginPath().triangle(a, b, c, d, e, f).fill()
            },
            strokeTriangle: function(a, b, c, d, e, f) {
                return this.beginPath().triangle(a, b, c, d, e, f).stroke()
            },
            fillText: function() {
                return this.context.fillText.apply(this.context, arguments)
            },
            strokeText: function() {
                return this.context.strokeText.apply(this.context, arguments)
            },
            fillVerticalText: function(a, b, c) {
                this._drawVerticalText("fillText", a, b, c)
            },
            strokeVerticalText: function(a, b, c) {
                this._drawVerticalText("strokeText", a, b, c)
            },
            _drawVerticalText: function(a, b, c, d) {
                var e = this.context,
                    f = (b.split("\n"), this.context.measureText("あ").width);
                e.save(), e.textAlign = "right", e.textBaseline = "top", Array.prototype.forEach.call(b, function(b, g) {
                    e[a](b, c, d + f * g)
                }), e.restore()
            },
            _drawLabelArea: function(a, b) {
                var c = this.context,
                    d = b.text,
                    e = this.context.measureText("あ").width,
                    f = d.split("\n"),
                    g = (b.lineSpace || 1) * e;
                if (c.save(), b.mode && "horizon" != b.mode) {
                    var h = Math.max(b.height / e | 0, 1),
                        i = b.x + b.width,
                        j = [];
                    f.each(function(a) {
                        for (var b = 0, c = a.length; c > b; b += h) {
                            var d = a.substr(b, h);
                            j.push(d)
                        }
                    });
                    var k = a + "VerticalText";
                    j.each(function(a, c) {
                        this[k](a, i - c * g, b.y + 15)
                    }.bind(this))
                } else {
                    var h = Math.max(b.width / e | 0, 1),
                        j = [];
                    c.textAlign = "left", c.textBaseline = "top", f.each(function(a) {
                        for (var b = 0, c = a.length; c > b; b += h) {
                            var d = a.substr(b, h);
                            j.push(d)
                        }
                    });
                    var k = a + "Text";
                    j.each(function(a, d) {
                        c[k](a, b.x, b.y + d * g + 4)
                    })
                }
                c.restore()
            },
            fillLabelArea: function(a) {
                this._drawLabelArea("fill", a)
            },
            strokeLabelArea: function(a) {
                this._drawLabelArea("stroke", a)
            },
            drawImage: function(a, b, c) {
                this.context.drawImage.apply(this.context, arguments)
            },
            drawTexture: function(a) {
                return arguments[0] = a.element, this.context.drawImage.apply(this.context, arguments), this
            },
            drawBitmap: function(a) {
                return arguments[0] = a.imageData, this.context.putImageData.apply(this.context, arguments), this
            },
            drawScale9Image: function(a, b, c) {
                var d = c.x,
                    e = c.width,
                    f = a.width - (d + e),
                    g = b.width - (d + f),
                    h = c.y;
                return this.drawImage(a, 0, 0, d, h, b.x, b.y, d, h), this.drawImage(a, d, 0, e, h, b.x + d, b.y, g, h), this.drawImage(a, d + e, 0, f, h, b.x + d + g, b.y, f, h), this
            },
            setTransform: function(a, b, c, d, e, f) {
                return this.context.setTransform(a, b, c, d, e, f), this
            },
            resetTransform: function() {
                return this.setTransform(1, 0, 0, 1, 0, 0), this
            },
            setTransformCenter: function() {
                return this.context.setTransform(1, 0, 0, 1, this.width / 2, this.height / 2), this
            },
            transform: function(a, b, c, d, e, f) {
                return this.context.transform(a, b, c, d, e, f), this
            },
            save: function() {
                return this.context.save(), this
            },
            restore: function() {
                return this.context.restore(), this
            },
            translate: function(a, b) {
                return this.context.translate(a, b), this
            },
            rotate: function(a) {
                return this.context.rotate(a), this
            },
            scale: function(a, b) {
                return this.context.scale(a, b), this
            },
            saveAsImage: function(a) {
                a = a || tm.graphics.Canvas.MIME_TYPE_PNG;
                var b = this.canvas.toDataURL(a);
                window.open(b, "save")
            },
            setCompositing: function() {},
            setFillStyle: function(a) {
                return this.context.fillStyle = a, this
            },
            setStrokeStyle: function(a) {
                return this.context.strokeStyle = a, this
            },
            setColorStyle: function(a, b) {
                return b = b || a, this.context.strokeStyle = a, this.context.fillStyle = b, this
            },
            setText: function(a, b, c) {
                var d = this.context;
                d.font = a, d.textAlign = b, d.textBaseline = c
            },
            setLineStyle: function(width, cap, join, miter) {
                with(this.context) lineWidth = width || 1, lineCap = cap || "round", lineJoin = join || "round", miterLimit = miter || 10;
                return this
            },
            setShadow: function(a, b, c, d) {
                var e = this.context;
                return e.shadowColor = a || "black", e.shadowOffsetX = b || 0, e.shadowOffsetY = c || 0, e.shadowBlur = d || 0, this
            },
            getElement: function() {
                return this.element
            }
        }), tm.graphics.Canvas.MIME_TYPE_PNG = "image/png", tm.graphics.Canvas.MIME_TYPE_JPG = "image/jpeg", tm.graphics.Canvas.MIME_TYPE_SVG = "image/svg+xml", tm.graphics.Canvas.prototype.accessor("width", {
            get: function() {
                return this.canvas.width
            },
            set: function(a) {
                this.canvas.width = a
            }
        }), tm.graphics.Canvas.prototype.accessor("height", {
            get: function() {
                return this.canvas.height
            },
            set: function(a) {
                this.canvas.height = a
            }
        }), tm.graphics.Canvas.prototype.accessor("fillStyle", {
            get: function() {
                return this.context.fillStyle
            },
            set: function(a) {
                this.context.fillStyle = a
            }
        }), tm.graphics.Canvas.prototype.accessor("strokeStyle", {
            get: function() {
                return this.context.strokeStyle
            },
            set: function(a) {
                this.context.strokeStyle = a
            }
        }), tm.graphics.Canvas.prototype.accessor("globalAlpha", {
            get: function() {
                return this.context.globalAlpha
            },
            set: function(a) {
                this.context.globalAlpha = a
            }
        }), tm.graphics.Canvas.prototype.accessor("globalCompositeOperation", {
            get: function() {
                return this.context.globalCompositeOperation
            },
            set: function(a) {
                this.context.globalCompositeOperation = a
            }
        }), tm.graphics.Canvas.prototype.accessor("shadowBlur", {
            get: function() {
                return this.context.shadowBlur
            },
            set: function(a) {
                this.context.shadowBlur = a
            }
        }), tm.graphics.Canvas.prototype.accessor("shadowColor", {
            get: function() {
                return this.context.shadowColor
            },
            set: function(a) {
                this.context.shadowColor = a
            }
        }), tm.graphics.Canvas.prototype.accessor("shadowOffsetX", {
            get: function() {
                return this.context.shadowOffsetX
            },
            set: function(a) {
                this.context.shadowOffsetX = a
            }
        }), tm.graphics.Canvas.prototype.accessor("shadowOffsetY", {
            get: function() {
                return this.context.shadowOffsetY
            },
            set: function(a) {
                this.context.shadowOffsetY = a
            }
        }), tm.graphics.Canvas.prototype.accessor("lineCap", {
            get: function() {
                return this.context.lineCap
            },
            set: function(a) {
                this.context.lineCap = a
            }
        }), tm.graphics.Canvas.prototype.accessor("lineJoin", {
            get: function() {
                return this.context.lineJoin
            },
            set: function(a) {
                this.context.lineJoin = a
            }
        }), tm.graphics.Canvas.prototype.accessor("miterLimit", {
            get: function() {
                return this.context.miterLimit
            },
            set: function(a) {
                this.context.miterLimit = a
            }
        }), tm.graphics.Canvas.prototype.accessor("lineWidth", {
            get: function() {
                return this.context.lineWidth
            },
            set: function(a) {
                this.context.lineWidth = a
            }
        }), tm.graphics.Canvas.prototype.accessor("font", {
            get: function() {
                return this.context.font
            },
            set: function(a) {
                this.context.font = a
            }
        }), tm.graphics.Canvas.prototype.accessor("textAlign", {
            get: function() {
                return this.context.textAlign
            },
            set: function(a) {
                this.context.textAlign = a
            }
        }), tm.graphics.Canvas.prototype.accessor("textBaseline", {
            get: function() {
                return this.context.textBaseline
            },
            set: function(a) {
                this.context.textBaseline = a
            }
        }), tm.graphics.Canvas.prototype.getter("centerX", function() {
            return this.canvas.width / 2
        }), tm.graphics.Canvas.prototype.getter("centerY", function() {
            return this.canvas.height / 2
        }), tm.graphics.Canvas.prototype.accessor("imageSmoothingEnabled", {
            get: function() {
                return this.context.imageSmoothingEnabled
            },
            set: function(a) {
                this.context.imageSmoothingEnabled = a, this.context.webkitImageSmoothingEnabled = a, this.context.mozImageSmoothingEnabled = a
            }
        })
    }(), tm.graphics = tm.graphics || {},
    function() {
        tm.graphics.Bitmap = tm.createClass({
            imageData: null,
            init: function() {
                a || (a = document.createElement("canvas"), b = a.getContext("2d")), this._init.apply(this, arguments), this.init = this._init
            },
            _init: function(a) {
                if (1 == arguments.length) this.imageData = a, this.data = a.data;
                else if (2 == arguments.length) {
                    var c = arguments[0],
                        d = arguments[1];
                    this.imageData = b.createImageData(c, d), this.data = this.imageData.data
                }
            },
            getPixelIndex: function(a) {
                var b = 4 * a;
                return [this.data[b + 0], this.data[b + 1], this.data[b + 2], this.data[b + 3]]
            },
            getPixelXY: function(a, b) {
                return this.getPixelIndex(this.posToIndex(a, b))
            },
            getPixel: function(a, b) {
                return this.getPixelIndex(this.posToIndex(a, b))
            },
            getPixelAsNumber: function(a) {
                var b = 4 * a;
                return this.data[b + 3] << 24 | this.data[b + 0] << 16 | this.data[b + 1] << 8 | this.data[b + 2]
            },
            getPixelAsObject: function(a) {
                var b = 4 * a;
                return {
                    r: this.data[b + 0],
                    g: this.data[b + 1],
                    b: this.data[b + 2],
                    a: this.data[b + 3]
                }
            },
            getPixelAsArray: function(a) {
                var b = 4 * a;
                return [this.data[b + 0], this.data[b + 1], this.data[b + 2], this.data[b + 3]]
            },
            getPixelAverage: function(a, b, c, d) {
                var e = [0, 0, 0, 0],
                    f = a,
                    g = a + c,
                    h = b,
                    i = b + d;
                0 > f && (f = 0), g > this.width && (g = this.width), 0 > h && (h = 0), i > this.height && (i = this.height);
                for (var j = [], k = this.width, l = h; i > l; ++l)
                    for (var m = f; g > m; ++m) {
                        var n = k * l + m;
                        j.push(this.getPixelIndex(n))
                    }
                for (var o = o = j.length, l = 0; o > l; ++l) e[0] += j[l][0], e[1] += j[l][1], e[2] += j[l][2], e[3] += j[l][3];
                return e[0] /= o, e[1] /= o, e[2] /= o, e[3] /= o, e
            },
            setPixelIndex: function(a, b, c, d) {
                var e = 4 * a;
                return this.data[e + 0] = b, this.data[e + 1] = c, this.data[e + 2] = d, this
            },
            setPixelXY: function(a, b, c, d, e) {
                return this.setPixelIndex(b * this.imageData.width + a, c, d, e)
            },
            setPixel: function(a, b, c, d) {
                return this.setPixelIndex(y * this.imageData.width + x, b, c, d)
            },
            setPixel32Index: function(a, b, c, d, e) {
                var f = 4 * a;
                return this.data[f + 0] = b, this.data[f + 1] = c, this.data[f + 2] = d, this.data[f + 3] = e, this
            },
            setPixel32: function(a, b, c, d, e, f) {
                return this.setPixel32Index(b * this.width + a, c, d, e, f)
            },
            setPixel32XY: function(a, b, c, d, e, f) {
                return this.setPixel32Index(b * this.width + a, c, d, e, f)
            },
            setPixelFromArray: function(a, b) {
                return this.setPixel(a, b[0], b[1], b[2])
            },
            setPixel32FromArray: function(a, b) {
                return this.setPixel32(a, b[0], b[1], b[2], b[3])
            },
            setPixelFromNumber: function(a, b) {
                return this.setPixel(a, (16711680 & b) >>> 16, (65280 & b) >>> 8, (255 & b) >>> 0)
            },
            setPixel32FromNumber: function(a, b) {
                return this.setPixel32(a, (16711680 & b) >>> 16, (65280 & b) >>> 8, (255 & b) >>> 0, (4278190080 & b) >>> 24)
            },
            setPixelFromObject: function(a, b) {
                return this.setPixel(b.r, b.g, b.b)
            },
            setPixel32FromObject: function(a, b) {
                return this.setPixel32(b.r, b.g, b.b, b.a)
            },
            setPixelFromString: function() {},
            posToIndex: function(a, b) {
                return b * this.imageData.width + a
            },
            filter: function(a) {
                for (var b = 0; b < this.height; ++b)
                    for (var c = 0; c < this.width; ++c) {
                        var d = this.posToIndex(c, b),
                            e = this.getPixel(c, b);
                        a.calc(e, d, c, b, this)
                    }
                return this
            },
            noise: function(a, b) {
                a = a || 0, b = b || 255, range = b - a;
                for (var c = 0, d = this.length; d > c; ++c) {
                    var e = this.getPixelIndex(c);
                    e[0] = Math.random() * range + a, e[1] = Math.random() * range + a, e[2] = Math.random() * range + a, e[3] = 255, this.setPixel32Index(c, e[0], e[1], e[2], e[3])
                }
            },
            applyFilter: function() {}
        }), tm.graphics.Bitmap.prototype.accessor("width", {
            get: function() {
                return this.imageData.width
            },
            set: function(a) {
                this.imageData.width = a
            }
        }), tm.graphics.Bitmap.prototype.accessor("height", {
            get: function() {
                return this.imageData.height
            },
            set: function(a) {
                this.imageData.height = a
            }
        }), tm.graphics.Bitmap.prototype.getter("length", function() {
            return this.imageData.width * this.imageData.height
        }), tm.graphics.Canvas.prototype.getBitmap = function(a, b, c, d) {
            return tm.graphics.Bitmap(this.context.getImageData(a || 0, b || 0, c || this.width, d || this.height))
        }, tm.graphics.Canvas.prototype.createBitmap = function(a, b) {
            return tm.graphics.Bitmap(this.context.createImageData(a || this.width, b || this.height))
        }, tm.asset.Texture.prototype.getBitmap = function(a, b) {
            var c = tm.graphics.Canvas();
            return c.resize(this.width, this.height), c.drawTexture(this, 0, 0, this.width, this.height), c.getBitmap(a, b)
        };
        var a = null,
            b = null
    }(), tm.graphics = tm.graphics || {},
    function() {
        tm.graphics.MonochromeFilter = tm.createClass({
            init: function() {},
            apply: function(a, b) {
                for (var c = a.length, d = 0; c > d; ++d) {
                    var e = a.getPixelIndex(d),
                        f = .3 * e[0] + .59 * e[1] + .11 * e[2];
                    b.setPixel32Index(d, f, f, f, e[3])
                }
                return b
            }
        })
    }(),
    function() {
        tm.graphics.ReverseFilter = tm.createClass({
            init: function() {},
            apply: function(a, b) {
                for (var c = 0, d = a.width * a.height; d > c; ++c) {
                    var e = a.getPixelIndex(c);
                    e[0] = 255 - e[0], e[1] = 255 - e[1], e[2] = 255 - e[2], b.setPixel32Index(c, e[0], e[1], e[2], 255)
                }
                return b
            }
        })
    }(),
    function() {
        tm.graphics.BlurFilter = tm.createClass({
            init: function(a, b, c) {
                this.blurX = a || 4, this.blurY = b || 4, this.quality = c || 1
            },
            apply: function(a, b) {
                for (var c = Math.floor(this.blurX / 2), d = Math.floor(this.blurY / 2), e = this.blurX, f = this.blurY, g = a.width, h = a.height, i = a.length, j = function(a, b) {
                        for (var h = 0; i > h; ++h) {
                            var j = h % g,
                                k = Math.floor(h / g),
                                l = a.getPixelAverage(j - c, k - d, e, f);
                            b.setPixel32Index(h, l[0], l[1], l[2], 255)
                        }
                    }, k = a, l = 0; l < this.quality; ++l) a = k, k = tm.graphics.Bitmap(g, h), j(a, k);
                return b.imageData = k.imageData, b
            }
        })
    }(),
    function() {
        for (var a = [], b = 0; 255 > b; ++b) {
            var c = 0;
            c = 100 > b ? 60 : 150 > b ? 150 : 180 > b ? 180 : 220, a[b] = c
        }
        tm.graphics.ToonFilter = tm.createClass({
            toonTable: null,
            init: function(b) {
                this.toonTable = b || a
            },
            apply: function(a, b) {
                for (var c = 0, d = a.width * a.height; d > c; ++c) {
                    var e = a.getPixelIndex(c),
                        f = this.toonTable[e[0]],
                        g = this.toonTable[e[1]],
                        h = this.toonTable[e[2]];
                    b.setPixel32Index(c, f, g, h, 255)
                }
                return b
            }
        })
    }(),
    function() {
        tm.graphics.ColorMatrixFilter = tm.createClass({
            init: function(a) {
                this.colorMatrix = a
            },
            apply: function(a, b) {
                for (var c = this.colorMatrix, d = 0, e = a.length; e > d; ++d) {
                    var f = a.getPixelIndex(d),
                        g = f[0] * c[0] + f[1] * c[1] + f[2] * c[2] + f[3] * c[3] + c[4],
                        h = f[0] * c[5] + f[1] * c[6] + f[2] * c[7] + f[3] * c[8] + c[9],
                        i = f[0] * c[10] + f[1] * c[11] + f[2] * c[12] + f[3] * c[13] + c[14],
                        j = f[0] * c[15] + f[1] * c[16] + f[2] * c[17] + f[3] * c[18] + c[19];
                    b.setPixel32Index(d, g, h, i, j)
                }
                return b
            }
        })
    }(), tm.graphics = tm.graphics || {},
    function() {
        tm.graphics.Canvas.prototype.setGradient = function(a) {
            this.context.fillStyle = a.gradient
        }
    }(),
    function() {
        tm.graphics.LinearGradient = tm.createClass({
            init: function(c, d, e, f) {
                a || (a = document.createElement("canvas"), b = a.getContext("2d")), this._init(c, d, e, f), this.init = this._init
            },
            _init: function(a, c, d, e) {
                this.gradient = b.createLinearGradient(a, c, d, e)
            },
            addColorStop: function(a, b) {
                return this.gradient.addColorStop(a, b), this
            },
            addColorStopList: function(a) {
                for (var b = 0, c = a.length; c > b; ++b) {
                    var d = a[b].offset,
                        e = a[b].color;
                    this.addColorStop(d, e)
                }
                return this
            },
            toStyle: function() {
                return this.gradient
            }
        }), tm.graphics.RadialGradient = tm.createClass({
            init: function(c, d, e, f, g, h) {
                a || (a = document.createElement("canvas"), b = a.getContext("2d")), this._init(c, d, e, f, g, h), this.init = this._init
            },
            _init: function(a, c, d, e, f, g) {
                this.gradient = b.createRadialGradient(a, c, d, e, f, g)
            },
            addColorStop: function(a, b) {
                return this.gradient.addColorStop(a, b), this
            },
            addColorStopList: function(a) {
                for (var b = 0, c = a.length; c > b; ++b) {
                    var d = a[b].offset,
                        e = a[b].color;
                    this.addColorStop(d, e)
                }
                return this
            },
            toStyle: function() {
                return this.gradient
            }
        });
        var a = null,
            b = null
    }(), tm.anim = tm.anim || {},
    function() {
        tm.anim.Tween = tm.createClass({
            superClass: tm.event.EventDispatcher,
            target: null,
            time: null,
            prop: null,
            nowProps: null,
            now: null,
            begin: null,
            finish: null,
            duration: null,
            isLooping: null,
            isPlaying: null,
            func: Math.linear,
            fps: 30,
            init: function() {
                this.superInit(), this.time = 0, this.nowProps = {}, this.isPlaying = !1, arguments.length > 0 && this.to.apply(this, arguments)
            },
            to: function(a, b, c, d) {
                var e = {};
                for (var f in b) e[f] = a[f];
                return this.fromTo(a, e, b, c, d), this
            },
            by: function(a, b, c, d) {
                var e = {},
                    f = {};
                for (var g in b) e[g] = a[g], f[g] = a[g] + b[g];
                return this.fromTo(a, e, f, c, d), this
            },
            fromTo: function(a, b, c, d, e) {
                this.target = a, this.beginProps = b, this.finishProps = c, this.duration = d, this.changeProps = {};
                for (var f in b) this.changeProps[f] = c[f] - b[f];
                return this.setTransition(e), this
            },
            from: function(a, b, c, d) {
                var e = {};
                for (var f in b) e[f] = a[f];
                return this.fromTo(a, b, e, c, d), this
            },
            setTransition: function(a) {
                return this.func = "function" == typeof a ? a : "string" == typeof a ? tm.anim.easing[a] : tm.anim.easing["default"], this
            },
            resume: function() {
                this.isPlaying = !0, this._resumeTime(), this._updateTime(), this.dispatchEvent(tm.event.TweenEvent("resume", this.time, this.nowProps))
            },
            start: function() {
                this.isPlaying = !0, this._startTime(), this._updateTime(), this.dispatchEvent(tm.event.TweenEvent("start", this.time, this.nowProps))
            },
            stop: function() {
                this.isPlaying = !1, this.dispatchEvent(tm.event.TweenEvent("stop", this.time, this.nowProps))
            },
            rewind: function() {
                this.time = 0, this.update()
            },
            fforward: function() {
                this.time = this.duration, this.update()
            },
            yoyo: function() {
                var a = this.finishProps;
                this.finishProps = this.beginProps, this.beginProps = a;
                for (var b in this.beginProps) this.changeProps[b] = this.finishProps[b] - this.beginProps[b];
                this.start()
            },
            update: function() {
                for (var a in this.changeProps) this.nowProps[a] = this.func(this.time, this.beginProps[a], this.changeProps[a], this.duration), this.target[a] = this.nowProps[a];
                this.dispatchEvent(tm.event.TweenEvent("change", this.time, this.nowProps))
            },
            _resumeTime: function() {
                this.startTime = (new Date).getTime() - this.time
            },
            _startTime: function() {
                this.startTime = (new Date).getTime()
            },
            _updateTime: function() {
                this.isPlaying && (this._setTime((new Date).getTime() - this.startTime), setTimeout(arguments.callee.bind(this), 1e3 / this.fps))
            },
            _setTime: function(a) {
                var b = a;
                b > this.duration ? this.isLooping ? (this.rewind(), this.update(), this.dispatchEvent(tm.event.TweenEvent("loop", this.time, this.nowProps))) : (this.time = this.duration, this.update(), this.stop(), this.dispatchEvent(tm.event.TweenEvent("finish", this.time, this.nowProps))) : (this.time = b, this.update())
            }
        })
    }(),
    function() {
        tm.anim.easing = {
            "default": function(a, b, c, d) {
                return c * a / d + b
            },
            linear: function(a, b, c, d) {
                return c * a / d + b
            },
            swing: function(a, b, c, d) {
                return -c * (a /= d) * (a - 2) + b
            },
            easeInQuad: function(a, b, c, d) {
                return c * (a /= d) * a + b
            },
            easeOutQuad: function(a, b, c, d) {
                return -c * (a /= d) * (a - 2) + b
            },
            easeInOutQuad: function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
            },
            easeInCubic: function(a, b, c, d) {
                return c * (a /= d) * a * a + b
            },
            easeOutCubic: function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a + 1) + b
            },
            easeInOutCubic: function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
            },
            easeOutInCubic: function(a, b, c, d) {
                return d / 2 > a ? tm.anim.easing.easeOutCubic(2 * a, b, c / 2, d) : tm.anim.easing.easeInCubic(2 * a - d, b + c / 2, c / 2, d)
            },
            easeInQuart: function(a, b, c, d) {
                return c * (a /= d) * a * a * a + b
            },
            easeOutQuart: function(a, b, c, d) {
                return -c * ((a = a / d - 1) * a * a * a - 1) + b
            },
            easeInOutQuart: function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
            },
            easeOutInQuart: function(a, b, c, d) {
                return d / 2 > a ? tm.anim.easing.easeOutQuart(2 * a, b, c / 2, d) : tm.anim.easing.easeInQuart(2 * a - d, b + c / 2, c / 2, d)
            },
            easeInQuint: function(a, b, c, d) {
                return c * (a /= d) * a * a * a * a + b
            },
            easeOutQuint: function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a * a * a + 1) + b
            },
            easeInOutQuint: function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
            },
            easeOutInQuint: function(a, b, c, d) {
                return d / 2 > a ? tm.anim.easing.easeOutQuint(2 * a, b, c / 2, d) : tm.anim.easing.easeInQuint(2 * a - d, b + c / 2, c / 2, d)
            },
            easeInSine: function(a, b, c, d) {
                return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
            },
            easeOutSine: function(a, b, c, d) {
                return c * Math.sin(a / d * (Math.PI / 2)) + b
            },
            easeInOutSine: function(a, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
            },
            easeOutInSine: function(a, b, c, d) {
                return d / 2 > a ? tm.anim.easing.easeOutSine(2 * a, b, c / 2, d) : tm.anim.easing.easeInSine(2 * a - d, b + c / 2, c / 2, d)
            },
            easeInExpo: function(a, b, c, d) {
                return 0 == a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b - .001 * c
            },
            easeOutExpo: function(a, b, c, d) {
                return a == d ? b + c : 1.001 * c * (-Math.pow(2, -10 * a / d) + 1) + b
            },
            easeInOutExpo: function(a, b, c, d) {
                return 0 == a ? b : a == d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b - 5e-4 * c : c / 2 * 1.0005 * (-Math.pow(2, -10 * --a) + 2) + b
            },
            easeOutInExpo: function(a, b, c, d) {
                return d / 2 > a ? tm.anim.easing.easeOutExpo(2 * a, b, c / 2, d) : tm.anim.easing.easeInExpo(2 * a - d, b + c / 2, c / 2, d)
            },
            easeInCirc: function(a, b, c, d) {
                return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b
            },
            easeOutCirc: function(a, b, c, d) {
                return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
            },
            easeInOutCirc: function(a, b, c, d) {
                return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
            },
            easeOutInCirc: function(a, b, c, d) {
                return d / 2 > a ? tm.anim.easing.easeOutCirc(2 * a, b, c / 2, d) : tm.anim.easing.easeInCirc(2 * a - d, b + c / 2, c / 2, d)
            },
            easeInElastic: function(a, b, c, d, e, f) {
                var g;
                return 0 == a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - g) * Math.PI / f)) + b)
            },
            easeOutElastic: function(a, b, c, d, e, f) {
                var g;
                return 0 == a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), e * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - g) * Math.PI / f) + c + b)
            },
            easeInOutElastic: function(a, b, c, d, e, f) {
                var g;
                return 0 == a ? b : 2 == (a /= d / 2) ? b + c : (f || (f = .3 * d * 1.5), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), 1 > a ? -.5 * e * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - g) * Math.PI / f) + b : e * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * d - g) * Math.PI / f) * .5 + c + b)
            },
            easeOutInElastic: function(a, b, c, d, e, f) {
                return d / 2 > a ? tm.anim.easing.easeOutElastic(2 * a, b, c / 2, d, e, f) : tm.anim.easing.easeInElastic(2 * a - d, b + c / 2, c / 2, d, e, f)
            },
            easeInBack: function(a, b, c, d, e) {
                return void 0 == e && (e = 1.70158), c * (a /= d) * a * ((e + 1) * a - e) + b
            },
            easeOutBack: function(a, b, c, d, e) {
                return void 0 == e && (e = 1.70158), c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
            },
            easeInOutBack: function(a, b, c, d, e) {
                return void 0 == e && (e = 1.70158), (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b
            },
            easeOutInBack: function(a, b, c, d, e) {
                return d / 2 > a ? tm.anim.easing.easeOutBack(2 * a, b, c / 2, d, e) : tm.anim.easing.easeInBack(2 * a - d, b + c / 2, c / 2, d, e)
            },
            easeInBounce: function(a, b, c, d) {
                return c - tm.anim.easing.easeOutBounce(d - a, 0, c, d) + b
            },
            easeOutBounce: function(a, b, c, d) {
                return (a /= d) < 1 / 2.75 ? 7.5625 * c * a * a + b : 2 / 2.75 > a ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : 2.5 / 2.75 > a ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
            },
            easeInOutBounce: function(a, b, c, d) {
                return d / 2 > a ? .5 * tm.anim.easing.easeInBounce(2 * a, 0, c, d) + b : .5 * tm.anim.easing.easeOutBounce(2 * a - d, 0, c, d) + .5 * c + b
            },
            easeOutInBounce: function(a, b, c, d) {
                return d / 2 > a ? tm.anim.easing.easeOutBounce(2 * a, b, c / 2, d) : tm.anim.easing.easeInBounce(2 * a - d, b + c / 2, c / 2, d)
            }
        }
    }(),
    function() {
        tm.define("tm.app.Timer", {
            frame: 0,
            fps: 30,
            frameTime: 1e3 / 30,
            init: function() {
                this.frame = 0, this.fps = tm.app.Timer.default.fps
            },
            reset: function() {
                return this.frame = 0, this
            },
            update: function() {
                return this.frame = this.frame + 1, this
            },
            getFrame: function() {
                return this.frame
            },
            getSeconds: function() {
                return this._seconds
            },
            getMilliseconds: function() {
                return this._milliseconds
            },
            checkIntervalEnd: function(a) {
                var b = a / this.fps | 0;
                return this.frame % b == 0 ? !0 : !1
            },
            checkBetween: function(a, b) {
                1 == arguments.length && (b = Math.max(a, 0), a = b - this.frameTime);
                var c = this.frame / this.fps * 1e3;
                return b > (c >= a)
            },
            _update: function() {
                var a = this.frame / this.fps;
                this._seconds = 0 | a, this._milliseconds = 1e3 * a | 0
            }
        }), tm.app.Timer.prototype.accessor("frame", {
            get: function() {
                return this._frame
            },
            set: function(a) {
                this._frame = a, this._update()
            }
        }), tm.app.Timer.prototype.accessor("fps", {
            get: function() {
                return this._fps
            },
            set: function(a) {
                a !== this._fps && (this.frameTime = 1e3 / a), this._fps = a, this._update()
            }
        }), tm.app.Timer.default = {
            fps: 30
        }
    }(),
    function() {
        tm.define("tm.app.Updater", {
            app: null,
            init: function(a) {
                this.app = a
            },
            update: function(a) {
                this._updateElement(a)
            },
            _updateElement: function(a) {
                var b = this.app;
                if (0 != a.awake) {
                    if (a.update && a.update(b), a.hasEventListener("enterframe")) {
                        var c = tm.event.Event("enterframe");
                        c.app = b, a.fire(c)
                    }
                    a.interactive && a._checkPointing(b);
                    var d = a.children.length;
                    if (d > 0)
                        for (var e = a.children.slice(), f = 0; d > f; ++f) this._updateElement(e[f])
                }
            }
        })
    }(), tm.app = tm.app || {},
    function() {
        tm.app.BaseApp = tm.createClass({
            superClass: tm.event.EventDispatcher,
            element: null,
            mouse: null,
            touch: null,
            pointing: null,
            keyboard: null,
            accelerometer: null,
            updater: null,
            stats: null,
            timer: null,
            fps: 30,
            isPlaying: null,
            _scenes: null,
            _sceneIndex: 0,
            init: function(a) {
                this.superInit(), this.element = a, this.timer = tm.app.Timer(), this.mouse = tm.input.Mouse(this.element), this.touch = tm.input.Touch(this.element, 0), this.keyboard = tm.input.Keyboard(), this.pointing = tm.isMobile ? this.touch : this.mouse, this.accelerometer = tm.input.Accelerometer(), this.updater = tm.app.Updater(this), this.isPlaying = !0, this._scenes = [tm.app.Scene()], this._sceneIndex = 0, this.element.addEventListener("touchstart", function(a) {
                    a.stop()
                }), this.element.addEventListener("touchmove", function(a) {
                    a.stop()
                }), window.addEventListener("focus", function() {
                    this.fire(tm.event.Event("focus")), this.currentScene.dispatchEvent(tm.event.Event("focus"))
                }.bind(this)), window.addEventListener("blur", function() {
                    this.fire(tm.event.Event("blur")), this.currentScene.dispatchEvent(tm.event.Event("blur"))
                }.bind(this)), this.element.addEventListener(tm.isMobile ? "touchstart" : "mousedown", this._onclick.bind(this))
            },
            run: function() {
                var a = this;
                return void tm.setLoop(function() {
                    a._loop()
                }, this.timer.frameTime);
                var a
            },
            _loop: function() {
                this.update && this.update(), this._update(), this.draw && this.draw(), this._draw(), this.stats && this.stats.update()
            },
            replaceScene: function(a) {
                var b = null;
                return this.currentScene && (b = tm.event.Event("exit"), b.app = this, this.currentScene.dispatchEvent(b), this.currentScene.app = null), b = tm.event.Event("enter"), b.app = this, this.currentScene = a, this.currentScene.app = this, this.currentScene.dispatchEvent(b), this
            },
            pushScene: function(a) {
                this.fire(tm.event.Event("push"));
                var b = tm.event.Event("pause");
                b.app = this, this.currentScene.dispatchEvent(b), this._scenes.push(a), ++this._sceneIndex, this.fire(tm.event.Event("pushed"));
                var b = tm.event.Event("enter");
                return b.app = this, a.app = this, a.dispatchEvent(b), this
            },
            popScene: function() {
                this.fire(tm.event.Event("pop"));
                var a = this._scenes.pop();
                --this._sceneIndex;
                var b = tm.event.Event("exit");
                b.app = this, a.dispatchEvent(b), a.app = null, this.fire(tm.event.Event("poped"));
                var b = tm.event.Event("resume");
                return b.app = this, this.currentScene.dispatchEvent(b), a
            },
            enableStats: function() {
                return window.Stats ? (this.stats = new Stats, this.stats.domElement.style.position = "fixed", this.stats.domElement.style.left = "5px", this.stats.domElement.style.top = "20px", document.body.appendChild(this.stats.domElement)) : console.warn("not defined stats."), this
            },
            enableDatGUI: function() {
                if (window.dat) {
                    var a = new dat.GUI;
                    return a
                }
            },
            start: function() {
                return this.isPlaying = !0, this
            },
            stop: function() {
                return this.isPlaying = !1, this
            },
            _update: function() {
                this.mouse.update(), this.keyboard._update(), this.touch.update(), this.isPlaying && (this.updater.update(this.currentScene), this.timer.update())
            },
            _draw: function() {},
            getElement: function() {
                return this.element
            },
            _onclick: function(a) {
                var b = a.pointX,
                    c = a.pointY;
                this.element.style.width && (b *= this.element.width / parseInt(this.element.style.width)), this.element.style.height && (c *= this.element.height / parseInt(this.element.style.height));
                var d = function(a) {
                    a.children.length > 0 && a.children.each(function(a) {
                        a.hasEventListener("click") && a.isHitPoint && a.isHitPoint(b, c) && a.dispatchEvent(tm.event.Event("click"))
                    })
                };
                d(this.currentScene)
            }
        }), tm.app.BaseApp.prototype.accessor("currentScene", {
            get: function() {
                return this._scenes[this._sceneIndex]
            },
            set: function(a) {
                this._scenes[this._sceneIndex] = a
            }
        }), tm.app.BaseApp.prototype.accessor("frame", {
            get: function() {
                return this.timer.frame
            },
            set: function(a) {
                this.timer.frame = a
            }
        }), tm.app.BaseApp.prototype.accessor("fps", {
            get: function() {
                return this.timer.fps
            },
            set: function(a) {
                this.timer.fps = a
            }
        })
    }(), tm.app = tm.app || {},
    function() {
        tm.app.Element = tm.createClass({
            superClass: tm.event.EventDispatcher,
            parent: null,
            children: null,
            init: function() {
                this.superInit(), this.children = []
            },
            remove: function() {
                return console.assert(this.parent), this.parent.removeChild(this), this.parent = null, this
            },
            addChild: function(a) {
                a.parent && a.remove(), a.parent = this, this.children.push(a);
                var b = tm.event.Event("added");
                return a.dispatchEvent(b), a
            },
            addChildTo: function(a) {
                return a.addChild(this), this
            },
            addChildren: function(a) {
                for (var b = a.slice(), c = beginIndex, d = b.length; d > c; ++c) this.addChild(b[c])
            },
            addChildAt: function(a, b) {
                a.parent && a.remove(), a.parent = this, this.children.splice(b, 0, a);
                var c = tm.event.Event("added");
                return a.dispatchEvent(c), a
            },
            getChildAt: function(a) {
                return this.children.indexOf(a)
            },
            removeChild: function(a) {
                var b = this.children.indexOf(a);
                if (-1 != b) {
                    this.children.splice(b, 1);
                    var c = tm.event.Event("removed");
                    a.dispatchEvent(c)
                }
            },
            removeChildren: function(a) {
                a = a || 0;
                for (var b = this.children.slice(), c = a, d = b.length; d > c; ++c) b[c].remove();
                this.children = []
            },
            getChildByName: function(a) {
                for (var b = 0, c = this.children.length; c > b; ++b)
                    if (this.children[b].name == a) return this.children[b];
                return null
            },
            execChildren: function(a, b) {
                b = b && b.length ? b : [b];
                for (var c = this.children.slice(), d = 0, e = c.length; e > d; ++d) a.apply(c[d], b)
            },
            getParent: function() {
                return this.parent
            },
            getRoot: function() {
                if (!this.parent) return null;
                var a = null;
                for (a = this.parent; null != a.parent; a = a.parent);
                return a
            },
            fromJSON: function(b) {
                var c = function(b, c) {
                    var d = c.init,
                        e = d instanceof Array ? d : [d],
                        f = a[c.type] ? a[c.type] : c.type,
                        g = tm.using(f);
                    console.assert(0 !== Object.keys(g).length, g + " is not defined.");
                    var h = g.apply(null, e).addChildTo(this);
                    h.fromJSON(c), this[b] = h
                }.bind(this);
                for (var d in b) {
                    var e = b[d];
                    if ("children" == d)
                        if (e instanceof Array)
                            for (var f = 0, g = e.length; g > f; ++f) {
                                var b = e[f];
                                c(b.name, b)
                            } else
                                for (var d in e) {
                                    var b = e[d];
                                    c(d, b)
                                } else "type" == d && (d = "__key"), this[d] = e
                }
                return this
            },
            toJSON: function() {}
        });
        var a = {
            Sprite: "tm.display.Sprite",
            Label: "tm.display.Label",
            Shape: "tm.display.Shape",
            CircleShape: "tm.display.CircleShape",
            TriangleShape: "tm.display.TriangleShape",
            RectangleShape: "tm.display.RectangleShape",
            RoundRectangleShape: "tm.display.RoundRectangleShape",
            TextShape: "tm.display.TextShape",
            StarShape: "tm.display.StarShape",
            PolygonShape: "tm.display.PolygonShape",
            HeartShape: "tm.display.HeartShape",
            AnimationSprite: "tm.display.AnimationSprite",
            LabelButton: "tm.ui.LabelButton",
            IconButton: "tm.ui.IconButton",
            GlossyButton: "tm.ui.GlossyButton",
            FlatButton: "tm.ui.FlatButton"
        }
    }(),
    function() {
        tm.define("tm.app.Object2D", {
            superClass: "tm.app.Element",
            position: null,
            scale: null,
            rotation: 0,
            awake: !0,
            _width: 64,
            _height: 64,
            init: function() {
                this.superInit(), this.position = tm.geom.Vector2(0, 0), this.scale = tm.geom.Vector2(1, 1), this.pointing = tm.geom.Vector2(0, 0), this.origin = tm.geom.Vector2(.5, .5), this._matrix = tm.geom.Matrix33(), this._matrix.identity(), this.boundingType = "circle", this.interactive = !1, this.hitFlags = [], this.downFlags = [], this._worldMatrix = tm.geom.Matrix33(), this._worldMatrix.identity(), this._worldAlpha = 1
            },
            getFinalMatrix: function() {
                var a = tm.geom.Matrix33();
                return this.parent && a.multiply(this.parent.getFinalMatrix()), a.translate(this.centerX, this.centerY), a.rotateZ(this.rotation * Math.DEG_TO_RAD), a.scale(this.scaleX, this.scaleY), a
            },
            isHitPoint: function(a, b) {
                var c = this.globalToLocal(tm.geom.Vector2(a, b));
                return this.pointing.x = c.x, this.pointing.y = c.y, c.x * c.x + c.y * c.y < this.radius * this.radius ? !0 : !1
            },
            isHitPointCircle: function(a, b) {
                var c = this.x - a,
                    d = this.y - b;
                return c * c + d * d < this.radius * this.radius ? !0 : !1
            },
            isHitPointRect: function(a, b) {
                var c = this.x - this.width * this.originX,
                    d = this.x + this.width * (1 - this.originX),
                    e = this.y - this.height * this.originY,
                    f = this.y + this.height * (1 - this.originY);
                return a > c && d > a && b > e && f > b ? !0 : !1
            },
            isHitPointCircleHierarchy: function(a, b) {
                var c = this.globalToLocal(tm.geom.Vector2(a, b));
                return this.pointing.x = c.x, this.pointing.y = c.y, c.x * c.x + c.y * c.y < this.radius * this.radius ? !0 : !1
            },
            isHitPointRectHierarchy: function(a, b) {
                var c = this.globalToLocal(tm.geom.Vector2(a, b));
                this.pointing.x = c.x, this.pointing.y = c.y;
                var d = -this.width * this.originX,
                    e = +this.width * (1 - this.originX),
                    f = -this.height * this.originY,
                    g = +this.height * (1 - this.originY);
                return d < c.x && c.x < e && f < c.y && c.y < g ? !0 : !1
            },
            isHitElement: function(a) {
                this.parent.localToGlobal(this);
                return (this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y) < (this.radius + a.radius) * (this.radius + a.radius) ? !0 : !1
            },
            isHitElementCircle: function(a) {
                return tm.collision.testCircleCircle(this.getBoundingCircle(), a.getBoundingCircle())
            },
            isHitElementRect: function(a) {
                return tm.collision.testRectRect(this.getBoundingRect(), a.getBoundingRect())
            },
            getBoundingCircle: function() {
                return tm.geom.Circle(this.centerX, this.centerY, this.radius)
            },
            getBoundingRect: function() {
                return tm.geom.Rect(this.left, this.top, this.width, this.height)
            },
            localToGlobal: function(a) {
                return this.getFinalMatrix().multiplyVector2(a)
            },
            globalToLocal: function(a) {
                var b = this._worldMatrix.clone();
                return b.invert(), b.transpose(), b.multiplyVector2(a)
            },
            setX: function(a) {
                return this.position.x = a, this
            },
            setY: function(a) {
                return this.position.y = a, this
            },
            setPosition: function(a, b) {
                return this.position.x = a, this.position.y = b, this
            },
            setRotation: function(a) {
                return this.rotation = a, this
            },
            setScale: function(a, b) {
                return this.scale.x = a, this.scale.y = arguments.length <= 1 ? a : b, this
            },
            setOrigin: function(a, b) {
                return this.origin.x = a, this.origin.y = b, this
            },
            setWidth: function(a) {
                return this.width = a, this
            },
            setHeight: function(a) {
                return this.height = a, this
            },
            setSize: function(a, b) {
                return this.width = a, this.height = b, this
            },
            wakeUp: function() {
                return this.awake = !0, this
            },
            sleep: function() {
                return this.awake = !1, this
            },
            setInteractive: function(a) {
                return this.interactive = a, this
            },
            setBoundingType: function(a) {
                return this.boundingType = a, this
            },
            _checkPointing: function() {
                console.assert(!1)
            },
            _checkMouse: function(a) {
                this.__checkPointing(a, a.pointing, 0)
            },
            _checkTouch: function(a) {
                this.__checkPointing(a, a.pointing, 0)
            },
            __checkPointing: function(a, b, c) {
                var d = (this.element, this.hitFlags[c]);
                this.hitFlags[c] = this.isHitPoint(b.x, b.y), !d && this.hitFlags[c] && this._dispatchPointingEvent("mouseover", "touchover", "pointingover", a, b), d && !this.hitFlags[c] && this._dispatchPointingEvent("mouseout", "touchout", "pointingout", a, b), this.hitFlags[c] && b.getPointingStart() && (this._dispatchPointingEvent("mousedown", "touchstart", "pointingstart", a, b), this.downFlags[c] = !0), this.downFlags[c] && this._dispatchPointingEvent("mousemove", "touchmove", "pointingmove", a, b), 1 == this.downFlags[c] && b.getPointingEnd() && (this._dispatchPointingEvent("mouseup", "touchend", "pointingend", a, b), this.downFlags[c] = !1)
            },
            _dispatchPointingEvent: function(a, b, c, d, e) {
                this.dispatchEvent(tm.event.MouseEvent(a, d, e)), this.dispatchEvent(tm.event.TouchEvent(b, d, e)), this.dispatchEvent(tm.event.PointingEvent(c, d, e))
            },
            _calcWorldMatrix: function() {
                if (this.parent) {
                    if (this.rotation != this.rotationCache) {
                        this.rotationCache = this.rotation;
                        var a = this.rotation * Math.DEG_TO_RAD;
                        this._sr = Math.sin(a), this._cr = Math.cos(a)
                    }
                    var b = this._matrix.m,
                        c = this.parent._worldMatrix.m,
                        d = this._worldMatrix.m;
                    b[0] = this._cr * this.scale.x, b[1] = -this._sr * this.scale.y, b[3] = this._sr * this.scale.x, b[4] = this._cr * this.scale.y, b[2] = this.position.x, b[5] = this.position.y;
                    var e = b[0],
                        f = b[1],
                        g = b[2],
                        h = b[3],
                        i = b[4],
                        j = b[5],
                        k = c[0],
                        l = c[1],
                        m = c[2],
                        n = c[3],
                        o = c[4],
                        p = c[5];
                    d[0] = k * e + l * h, d[1] = k * f + l * i, d[2] = k * g + l * j + m, d[3] = n * e + o * h, d[4] = n * f + o * i, d[5] = n * g + o * j + p
                }
            },
            _dirtyCalc: function() {
                this._calcWorldMatrix()
            }
        }), tm.app.Object2D.prototype.accessor("x", {
            get: function() {
                return this.position.x
            },
            set: function(a) {
                this.position.x = a
            }
        }), tm.app.Object2D.prototype.accessor("y", {
            get: function() {
                return this.position.y
            },
            set: function(a) {
                this.position.y = a
            }
        }), tm.app.Object2D.prototype.accessor("originX", {
            get: function() {
                return this.origin.x
            },
            set: function(a) {
                this.origin.x = a
            }
        }), tm.app.Object2D.prototype.accessor("originY", {
            get: function() {
                return this.origin.y
            },
            set: function(a) {
                this.origin.y = a
            }
        }), tm.app.Object2D.prototype.accessor("scaleX", {
            get: function() {
                return this.scale.x
            },
            set: function(a) {
                this.scale.x = a
            }
        }), tm.app.Object2D.prototype.accessor("scaleY", {
            get: function() {
                return this.scale.y
            },
            set: function(a) {
                this.scale.y = a
            }
        }), tm.app.Object2D.prototype.accessor("width", {
            get: function() {
                return this._width
            },
            set: function(a) {
                this._width = a
            }
        }), tm.app.Object2D.prototype.accessor("height", {
            get: function() {
                return this._height
            },
            set: function(a) {
                this._height = a
            }
        }), tm.app.Object2D.prototype.accessor("radius", {
            get: function() {
                return void 0 !== this._radius ? this._radius : (this.width + this.height) / 4
            },
            set: function(a) {
                this._radius = a
            }
        }), tm.app.Object2D.prototype.getter("top", function() {
            return this.y - this.height * this.originY
        }), tm.app.Object2D.prototype.getter("right", function() {
            return this.x + this.width * (1 - this.originX)
        }), tm.app.Object2D.prototype.getter("bottom", function() {
            return this.y + this.height * (1 - this.originY)
        }), tm.app.Object2D.prototype.getter("left", function() {
            return this.x - this.width * this.originX
        }), tm.app.Object2D.prototype.accessor("centerX", {
            get: function() {
                return this.x + this.width / 2 - this.width * this.originX
            },
            set: function() {}
        }), tm.app.Object2D.prototype.accessor("centerY", {
            get: function() {
                return this.y + this.height / 2 - this.height * this.originY
            },
            set: function() {}
        }), tm.app.Object2D.prototype.accessor("boundingType", {
            get: function() {
                return this._boundingType
            },
            set: function(a) {
                this._boundingType = a, this._setIsHitFunc()
            }
        }), tm.app.Object2D.prototype.accessor("checkHierarchy", {
            get: function() {
                return this._checkHierarchy
            },
            set: function(a) {
                this._checkHierarchy = a, this._setIsHitFunc()
            }
        });
        var a = {
                rect: tm.app.Object2D.prototype.isHitPointRect,
                circle: tm.app.Object2D.prototype.isHitPointCircle,
                "true": function() {
                    return !0
                },
                "false": function() {
                    return !1
                }
            },
            b = {
                rect: tm.app.Object2D.prototype.isHitPointRectHierarchy,
                circle: tm.app.Object2D.prototype.isHitPointCircleHierarchy,
                "true": function() {
                    return !0
                },
                "false": function() {
                    return !1
                }
            },
            c = {
                rect: tm.app.Object2D.prototype.isHitElementRect,
                circle: tm.app.Object2D.prototype.isHitElementCircle,
                "true": function() {
                    return !0
                },
                "false": function() {
                    return !1
                }
            };
        tm.app.Object2D.prototype._setIsHitFunc = function() {
            {
                var d = this.checkHierarchy ? b : a,
                    e = this.boundingType;
                d[e] ? d[e] : d["true"]
            }
            this.isHitPoint = d[e] ? d[e] : d["true"], this.isHitElement = c[e] ? c[e] : c["true"]
        }, tm.app.Object2D.prototype._checkPointing = tm.isMobile ? tm.app.Object2D.prototype._checkTouch : tm.app.Object2D.prototype._checkMouse
    }(), tm.app = tm.app || {},
    function() {
        tm.app.Scene = tm.createClass({
            superClass: tm.app.Object2D,
            init: function() {
                this.superInit(), this.boundingType = "none", this.setInteractive(!0)
            }
        })
    }(), tm.app = tm.app || {},
    function() {
        tm.app.Collision = tm.createClass({
            element: null,
            collideList: null,
            init: function(a) {
                this.element = a, this.collideList = []
            },
            update: function() {
                for (var a = this.collideList.clone(), b = this.element, c = 0, d = a.length; d > c; ++c) {
                    var e = a[c];
                    if (b.isHitElement(e.element)) {
                        if (e.collide === !1) {
                            var f = tm.event.Event("collisionenter");
                            f.other = e.element, b.dispatchEvent(f)
                        }
                        var f = tm.event.Event("collisionstay");
                        f.other = e.element, b.dispatchEvent(f), e.collide = !0
                    } else {
                        if (1 == e.collide) {
                            var f = tm.event.Event("collisionexit");
                            f.other = e.element, b.dispatchEvent(f)
                        }
                        e.collide = !1
                    }
                }
            },
            add: function(a) {
                this.collideList.push({
                    element: a,
                    collide: !1
                })
            },
            remove: function(a) {
                this.collideList.eraseIf(function(b) {
                    return b.element == a
                })
            }
        }), tm.app.Element.prototype.getter("collision", function() {
            return this._collision || (this._collision = tm.app.Collision(this), this.addEventListener("enterframe", function(a) {
                this._collision.update(a.app)
            })), this._collision
        })
    }(),
    function() {
        tm.define("tm.app.Tweener", {
            superClass: "tm.app.Element",
            init: function(a) {
                this.superInit(), this.setTarget(a || {}), this.loop = !1, this._init()
            },
            _init: function() {
                this._index = 0, this._tasks = [], this._func = this._updateTask, this.isPlaying = !0
            },
            setTarget: function(a) {
                return this.element = a, this
            },
            update: function(a) {
                return void this._func(a)
            },
            _updateTask: function(a) {
                if (this.isPlaying) {
                    var b = this._tasks[this._index];
                    if (!b) return void(this.loop === !0 ? this._index = 0 : this.isPlaying = !1);
                    if (this._index++, "tween" == b.type) {
                        var c = (b.data, b.data.type),
                            d = b.data.args;
                        this._tween = tm.anim.Tween(), this._tween[c].apply(this._tween, d), this._func = this._updateTween, this._func(a)
                    } else "wait" == b.type ? (this._wait = b.data, this._wait.time = 0, this._func = this._updateWait, this._func(a)) : "call" == b.type ? (b.data.func.apply(b.data.self, b.data.args), this._updateTask(a)) : "set" == b.type && (this.element.$extend(b.data.values), this._updateTask(a))
                }
            },
            _updateTween: function(a) {
                var b = this._tween,
                    c = b.time + 1e3 / a.fps;
                b._setTime(c), b.time >= b.duration ? (delete this._tween, this._tween = null, this._func = this._updateTask) : b.update()
            },
            _updateWait: function(a) {
                var b = this._wait;
                b.time += 1e3 / a.fps, b.time >= b.limit && (delete this._wait, this._wait = null, this._func = this._updateTask)
            },
            add: function(a) {
                if (a.target || (a.target = this.element), this._tasks.push({
                        type: "tween",
                        data: a
                    }), 0 == this.isAnimation) {
                    this.isAnimation = !0;
                    var b = tm.event.Event("animationstart");
                    this.element.dispatchEvent(b)
                }
                return this
            },
            by: function(a, b, c) {
                return this._addTweenTask({
                    props: a,
                    duration: b,
                    fn: c,
                    type: "by"
                }), this
            },
            to: function(a, b, c) {
                return this._addTweenTask({
                    props: a,
                    duration: b,
                    fn: c,
                    type: "to"
                }), this
            },
            from: function(a, b, c) {
                return this._addTweenTask({
                    props: a,
                    duration: b,
                    fn: c,
                    type: "from"
                }), this
            },
            move: function(a, b, c, d) {
                return this.to({
                    x: a,
                    y: b
                }, c, d)
            },
            moveBy: function(a, b, c, d) {
                return this.by({
                    x: a,
                    y: b
                }, c, d)
            },
            rotate: function(a, b, c) {
                return this.to({
                    rotation: a
                }, b, c)
            },
            scale: function(a, b, c) {
                return this.to({
                    scaleX: a,
                    scaleY: a
                }, b, c)
            },
            fade: function(a, b) {
                return this.to({
                    alpha: a
                }, b), this
            },
            fadeIn: function(a) {
                return this.fade(1, a), this
            },
            fadeOut: function(a) {
                return this.fade(0, a), this
            },
            _addTweenTask: function(a) {
                if (a.target = void 0 !== a.target ? a.target : this.element, a.duration = void 0 !== a.duration ? a.duration : 1e3, this._tasks.push({
                        type: "tween",
                        data: {
                            args: [a.target, a.props, a.duration, a.fn],
                            type: a.type
                        }
                    }), 0 == this.isAnimation) {
                    this.isAnimation = !0;
                    var b = tm.event.Event("animationstart");
                    this.element.dispatchEvent(b)
                }
                return this
            },
            wait: function(a) {
                return this._tasks.push({
                    type: "wait",
                    data: {
                        limit: a
                    }
                }), this
            },
            call: function(a, b, c) {
                return this._tasks.push({
                    type: "call",
                    data: {
                        func: a,
                        self: b || this,
                        args: c
                    }
                }), this
            },
            set: function(a, b) {
                var c = null;
                return 2 == arguments.length ? (c = {}, c[a] = b) : c = a, this._tasks.push({
                    type: "set",
                    data: {
                        values: c
                    }
                }), this
            },
            play: function() {
                return this.isPlaying = !0, this
            },
            pause: function() {
                return this.isPlaying = !1, this
            },
            rewind: function() {
                return this._func = this._updateTask, this._index = 0, this.play(), this
            },
            setLoop: function(a) {
                return this.loop = a, this
            },
            clear: function() {
                return this._init(), this
            }
        }), tm.app.Element.prototype.getter("tweener", function() {
            return this._tweener || (this._tweener = tm.app.Tweener(this), this.on("enterframe", function(a) {
                this._tweener.update(a.app)
            })), this._tweener
        })
    }(), tm.namespace("tm.app", function() {
        tm.define("tm.app.Timeline", {
            superClass: "tm.app.Element",
            init: function(a) {
                this.superInit(), this.setTarget(a || {}), this.currentFrame = 0, this.currentTime = 0, this.prevTime = 0, this.duration = 0, this.isPlay = !0, this._tweens = [], this._actions = []
            },
            update: function(a) {
                this.isPlay && (this.prevTime <= this.duration && (this._updateTween(), this._updateAction()), this.currentFrame++, this.prevTime = this.currentTime, this.currentTime = this.currentFrame / a.fps * 1e3 | 0)
            },
            _updateTween: function() {
                for (var a = this._tweens, b = 0, c = a.length; c > b; ++b) {
                    var d = a[b];
                    if (!(d.delay > this.currentTime)) {
                        var e = this.currentTime - d.delay;
                        d._setTime(e), d.time >= d.duration || d.update()
                    }
                }
            },
            _updateAction: function() {
                for (var a = this._actions, b = 0, c = a.length; c > b; ++b) {
                    var d = a[b];
                    if (this.prevTime <= d.delay && d.delay < this.currentTime)
                        if ("call" == d.type) d.func.call(d.self);
                        else if ("set" == d.type) {
                        var e = d.props;
                        for (var f in e) this.element[f] = e[f]
                    }
                }
            },
            to: function(a, b, c, d) {
                return console.assert("number" == typeof a, "to の第一引数はdelayに変わりました"), this._addTween({
                    props: b,
                    duration: c,
                    fn: d,
                    delay: a
                }), this
            },
            by: function(a, b, c, d) {
                console.assert("number" == typeof a, "by の第一引数はdelayに変わりました");
                for (var e in b) b[e] += this.element[e] || 0;
                return this._addTween({
                    props: b,
                    duration: c,
                    fn: d,
                    delay: a
                }), this
            },
            call: function(a, b, c) {
                return console.assert("number" == typeof a, "call の第一引数はdelayに変わりました"), this._addAction({
                    type: "call",
                    func: b,
                    self: c || this,
                    delay: a
                }), this
            },
            set: function(a, b) {
                return console.assert("number" == typeof a, "set の第一引数はdelayに変わりました"), this._addAction({
                    type: "set",
                    props: b,
                    delay: a
                }), this
            },
            setTarget: function(a) {
                return this.element = a, this
            },
            getTarget: function() {
                return this.element
            },
            gotoAndPlay: function(a) {
                this.isPlay = !0, this.currentFrame = a, this._updateTween()
            },
            gotoAndStop: function(a) {
                this.currentFrame = a, this.isPlay = !1, this._updateTween()
            },
            _addTween: function(a) {
                a.duration = a.duration || 1e3, a.duration = this._dirty(a.duration), a.delay = a.delay || 0, a.delay = this._dirty(a.delay);
                var b = tm.anim.Tween();
                b.to(this.element, a.props, a.duration, a.fn), b.delay = a.delay, this._tweens.push(b), this._updateDuration(b)
            },
            _addAction: function(a) {
                a.delay = a.delay || 0, a.delay = this._dirty(a.delay), this._actions.push(a), this._updateDuration(a)
            },
            _updateDuration: function(a) {
                var b = a.delay + (a.duration ? a.duration : 0);
                return this.duration < b && (this.duration = b), this
            },
            _dirty: function(a) {
                return a
            },
            load: function(a) {
                for (var b in a.timeline) var c = a.timeline[b];
                return this
            },
            clear: function() {
                return this.currentFrame = 0, this.prevTime = 0, this.currentTime = 0, this.duration = 0, this.isPlay = !0, this._tweens = [], this._actions = [], this
            }
        }), tm.app.Element.prototype.getter("timeline", function() {
            return this._timeline || (this._timeline = tm.app.Timeline(this), this.on("enterframe", function(a) {
                this._timeline.update(a.app)
            })), this._timeline
        })
    }), tm.display = tm.display || {},
    function() {
        tm.display.CanvasApp = tm.createClass({
            superClass: tm.app.BaseApp,
            init: function(a) {
                this.element = a instanceof HTMLCanvasElement ? a : "string" == typeof a ? document.querySelector(a) : document.createElement("canvas"), this.superInit(this.element), this.canvas = tm.graphics.Canvas(this.element), this.renderer = tm.display.CanvasRenderer(this.canvas), this.background = "black", this._scenes = [tm.app.Scene()], this._canvasCache = [], this._canvasCacheCache = [], this.on("push", function() {
                    this._draw();
                    var a = this._canvasCacheCache.pop();
                    if (!a) {
                        var b = this.canvas.element.cloneNode();
                        a = tm.graphics.Canvas(b)
                    }
                    a.clear(), a.drawTexture(this.canvas, 0, 0), this._canvasCache.push(a)
                }), this.on("poped", function() {
                    var a = this._canvasCache.pop();
                    this._draw(), this._canvasCacheCache.push(a)
                })
            },
            resize: function(a, b) {
                return this.width = a, this.height = b, this
            },
            resizeWindow: function() {
                return this.width = innerWidth, this.height = innerHeight, this
            },
            fitWindow: function(a) {
                return this.canvas.fitWindow(a), this.mouse._mousemove = this.mouse._mousemoveScale, this.touch._touchmove = this.touch._touchmoveScale, this
            },
            _draw: function() {
                this.canvas.clear(), this.canvas.fillStyle = "white", this.canvas.strokeStyle = "white", this._canvasCache.last && this.canvas.drawTexture(this._canvasCache.last, 0, 0), this.canvas.save(), this.renderer.render(this.currentScene), this.canvas.restore()
            }
        }), tm.display.CanvasApp.prototype.accessor("width", {
            get: function() {
                return this.canvas.width
            },
            set: function(a) {
                this.canvas.width = a
            }
        }), tm.display.CanvasApp.prototype.accessor("height", {
            get: function() {
                return this.canvas.height
            },
            set: function(a) {
                this.canvas.height = a
            }
        }), tm.display.CanvasApp.prototype.accessor("background", {
            get: function() {
                return this.canvas._background
            },
            set: function(a) {
                this._background = a, this.element.style.background = a
            }
        })
    }(), tm.display = tm.display || {},
    function() {
        tm.display.CanvasElement = tm.createClass({
            superClass: tm.app.Object2D,
            visible: !0,
            clipping: !1,
            fillStyle: "white",
            strokeStyle: "white",
            alpha: 1,
            blendMode: "source-over",
            shadowColor: "black",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 0,
            init: function() {
                this.superInit()
            },
            setAlpha: function(a) {
                return this.alpha = a, this
            },
            setShadowColor: function(a) {
                return this.shadowColor = a, this
            },
            setShadowBlur: function(a) {
                return this.shadowBlur = a, this
            },
            setShadowOffset: function(a, b) {
                return this.shadowOffsetX = a, this.shadowOffsetY = b, this
            },
            drawBoundingCircle: function(a) {
                a.save(), a.lineWidth = 2, a.strokeCircle(0, 0, this.radius), a.restore()
            },
            drawBoundingRect: function(a) {
                a.save(), a.lineWidth = 2, a.strokeRect(-this.width * this.originX, -this.height * this.originY, this.width, this.height), a.restore()
            },
            drawFillRect: function(a) {
                return a.fillRect(-this.width / 2, -this.height / 2, this.width, this.height), this
            },
            drawStrokeRect: function(a) {
                return a.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height), this
            },
            drawFillArc: function(a) {
                return a.beginPath(), a.arc(0, 0, this.radius, 0, 2 * Math.PI, !1), a.fill(), a.closePath(), this
            },
            drawStrokeArc: function(a) {
                return a.beginPath(), a.arc(0, 0, this.radius, 0, 2 * Math.PI, !1), a.stroke(), a.closePath(), this
            },
            setVisible: function(a) {
                return this.visible = a, this
            },
            show: function() {
                return this.visible = !0, this
            },
            hide: function() {
                return this.visible = !1, this
            },
            setFillStyle: function(a) {
                return this.fillStyle = a, this
            },
            setStrokeStyle: function(a) {
                return this.strokeStyle = a, this
            },
            setBlendMode: function(a) {
                return this.blendMode = a, this
            },
            load: function(a) {
                var b = this;
                a.layers.forEach(function(a) {
                    if ("objectgroup" == a.type) {
                        var c = tm.display.CanvasElement().addChildTo(b);
                        c.width = a.width, c.height = a.height, a.objects.forEach(function(a) {
                            var b = tm.using(a.type);
                            0 === Object.keys(b).length && (b = tm.display[a.type]);
                            var d = null;
                            a.properties.init && (d = JSON.parse(a.properties.init));
                            var e = b.apply(null, d).addChildTo(c),
                                f = a.properties;
                            for (var g in f)
                                if ("init" != g) {
                                    var h = f[g];
                                    e[g] = h
                                }
                            e.x = a.x, e.y = a.y, e.width = a.width, e.height = a.height
                        }), b[a.name] = c
                    }
                })
            },
            _calcAlpha: function() {
                return this.parent ? void(this._worldAlpha = this.parent._worldAlpha * this.alpha) : void(this._worldAlpha = this.alpha)
            },
            _dirtyCalc: function() {
                this._calcAlpha(), this._calcWorldMatrix()
            }
        })
    }(), tm.display = tm.display || {},
    function() {
        tm.display.Sprite = tm.createClass({
            superClass: tm.display.CanvasElement,
            init: function(a, b, c) {
                this.superInit(), console.assert("number" != typeof a, "Sprite の第一引数はテクスチャもしくはテクスチャ名に変わりました"), this._frameIndex = 0, this.srcRect = tm.geom.Rect(0, 0, 64, 64), arguments.length >= 1 && (this.setImage(a).fitImage(), void 0 !== b && (this.width = b), void 0 !== c && (this.height = c))
            },
            setImage: function(a, b, c) {
                if ("string" == typeof a) {
                    var d = a;
                    a = tm.asset.Manager.get(d), console.assert(null != a, "don't find '" + d + "' as image.")
                }
                return this._image = a, this.srcRect.x = 0, this.srcRect.y = 0, this.srcRect.width = a.element.width, this.srcRect.height = a.element.height, void 0 !== b && (this.width = b), void 0 !== c && (this.height = c), this
            },
            getImage: function() {
                return this._image
            },
            fitImage: function() {
                return this.width = this.image.width, this.height = this.image.height, this
            },
            setFrameIndex: function(a, b, c) {
                var d = b || this.width,
                    e = c || this.height,
                    f = ~~(this.image.width / d),
                    g = ~~(this.image.height / e),
                    h = f * g;
                a %= h;
                var i = a % f,
                    j = ~~(a / f);
                return this.srcRect.x = i * d, this.srcRect.y = j * e, this.srcRect.width = d, this.srcRect.height = e, this._frameIndex = a, this
            },
            _refreshSize: function() {}
        }), tm.display.Sprite.prototype.accessor("image", {
            get: function() {
                return this._image
            },
            set: function(a) {
                this.setImage(a)
            }
        }), tm.display.Sprite.prototype.accessor("frameIndex", {
            get: function() {
                return this._frameIndex
            },
            set: function(a) {
                this.setFrameIndex(a)
            }
        })
    }(), tm.display = tm.display || {},
    function() {
        tm.display.Shape = tm.createClass({
            superClass: tm.display.CanvasElement,
            init: function(a, b) {
                this.superInit(), a = a || 64, b = b || 64, this.canvas = tm.graphics.Canvas(), this.width = a, this.height = b, this.canvas.resize(a, b)
            },
            renderCircle: function(a) {
                var b = this.canvas;
                a = {}.$extend(tm.display.Shape.DEFAULT_SHAPE_PARAM_CIRCLE, a), b.save(), b.fillStyle = a.fillStyle, b.strokeStyle = a.strokeStyle, b.lineWidth = a.lineWidth, b.fillCircle(this.width / 2, this.height / 2, this.radius), b.strokeCircle(this.width / 2, this.height / 2, this.radius - Number(b.lineWidth) / 2), b.restore()
            },
            renderTriangle: function(a) {
                var b = this.canvas;
                a = {}.$extend(tm.display.Shape.DEFAULT_SHAPE_PARAM_TRIANGLE, a), b.save(), b.fillStyle = a.fillStyle, b.strokeStyle = a.strokeStyle, b.lineWidth = a.lineWidth, b.fillPolygon(this.width / 2, this.height / 2, this.radius, 3), b.strokePolygon(this.width / 2, this.height / 2, this.radius - Number(b.lineWidth) / 2, 3), b.restore()
            },
            renderRectangle: function(a) {
                var b = this.canvas;
                a = {}.$extend(tm.display.Shape.DEFAULT_SHAPE_PARAM_RECTANGLE, a), b.save(), b.fillStyle = a.fillStyle, b.strokeStyle = a.strokeStyle, b.lineWidth = a.lineWidth;
                var c = Number(b.lineWidth),
                    d = c / 2;
                b.fillRect(0, 0, this.width, this.height), b.strokeRect(d, d, this.width - c, this.height - c), b.restore()
            },
            renderRoundRectangle: function(a) {
                var b = this.canvas;
                a = {}.$extend(tm.display.Shape.DEFAULT_SHAPE_PARAM_ROUND_RECTANGLE, a), b.save(), b.fillStyle = a.fillStyle, b.strokeStyle = a.strokeStyle, b.lineWidth = a.lineWidth;
                var c = Number(b.lineWidth),
                    d = c / 2;
                b.fillRoundRect(0, 0, this.width, this.height, a.radius), b.strokeRoundRect(d, d, this.width - c, this.height - c, a.radius), b.restore()
            },
            renderStar: function(a) {
                var b = this.canvas;
                a = {}.$extend(tm.display.Shape.DEFAULT_SHAPE_PARAM_STAR, a), b.save(), b.fillStyle = a.fillStyle, b.strokeStyle = a.strokeStyle, b.lineWidth = a.lineWidth;
                var c = (Number(b.lineWidth), a.sides),
                    d = a.sideIndent,
                    e = a.offsetAngle;
                b.fillStar(this.width / 2, this.height / 2, this.radius, c, d, e), b.strokeStar(this.width / 2, this.height / 2, this.radius - Number(b.lineWidth) / 2, c, d, e), b.restore()
            },
            renderPolygon: function(a) {
                var b = this.canvas;
                a = {}.$extend(tm.display.Shape.DEFAULT_SHAPE_PARAM_POLYGON, a), b.save(), b.fillStyle = a.fillStyle, b.strokeStyle = a.strokeStyle, b.lineWidth = a.lineWidth, b.textAlign = "center", b.textBaseline = "middle";
                var c = (Number(b.lineWidth), a.sides),
                    d = (a.sideIndent, a.offsetAngle);
                b.fillPolygon(this.width / 2, this.height / 2, this.radius, c, d), b.strokePolygon(this.width / 2, this.height / 2, this.radius - Number(b.lineWidth) / 2, c, d), b.restore()
            },
            renderHeart: function(a) {
                var b = this.canvas;
                a = {}.$extend(tm.display.Shape.DEFAULT_SHAPE_PARAM_HEART, a), b.save(), b.fillStyle = a.fillStyle, b.strokeStyle = a.strokeStyle, b.lineWidth = a.lineWidth, b.fillHeart(this.width / 2, this.height / 2, this.radius, a.angle), b.strokeHeart(this.width / 2, this.height / 2, this.radius - Number(b.lineWidth) / 2, a.angle), b.restore()
            },
            renderText: function(a) {
                var b = this.canvas;
                a = {}.$extend(tm.display.Shape.DEFAULT_SHAPE_PARAM_TEXT, a), b.save(), b.fillStyle = a.fillStyle, b.strokeStyle = a.strokeStyle, b.lineWidth = a.lineWidth, b.font = a.font, b.textAlign = a.textAlign, b.textBaseline = a.textBaseline, b.strokeText(a.text, this.width / 2, this.height / 2), b.fillText(a.text, this.width / 2, this.height / 2), b.restore()
            }
        }), tm.display.Shape.DEFAULT_SHAPE_PARAM_CIRCLE = {
            fillStyle: "red",
            strokeStyle: "white",
            lineWidth: "2"
        }, tm.display.Shape.DEFAULT_SHAPE_PARAM_TRIANGLE = {
            fillStyle: "green",
            strokeStyle: "white",
            lineWidth: "2"
        }, tm.display.Shape.DEFAULT_SHAPE_PARAM_RECTANGLE = {
            fillStyle: "blue",
            strokeStyle: "white",
            lineWidth: "2"
        }, tm.display.Shape.DEFAULT_SHAPE_PARAM_ROUND_RECTANGLE = {
            fillStyle: "blue",
            strokeStyle: "white",
            lineWidth: "2",
            radius: 10
        }, tm.display.Shape.DEFAULT_SHAPE_PARAM_STAR = {
            fillStyle: "yellow",
            strokeStyle: "white",
            lineWidth: "2",
            sides: 5,
            sideIndent: void 0,
            offsetAngle: void 0
        }, tm.display.Shape.DEFAULT_SHAPE_PARAM_POLYGON = {
            fillStyle: "cyan",
            strokeStyle: "white",
            lineWidth: "2",
            sides: 5,
            offsetAngle: void 0
        }, tm.display.Shape.DEFAULT_SHAPE_PARAM_HEART = {
            fillStyle: "pink",
            strokeStyle: "white",
            lineWidth: "2",
            angle: 45
        }, tm.display.Shape.DEFAULT_SHAPE_PARAM_TEXT = {
            text: "hello, world",
            fillStyle: "pink",
            strokeStyle: "white",
            lineWidth: "1",
            textAlign: "center",
            textBaseline: "middle",
            font: "24px 'Consolas', 'Monaco', 'ＭＳ ゴシック'"
        }
    }(),
    function() {
        tm.display.CircleShape = tm.createClass({
            superClass: tm.display.Shape,
            init: function(a, b, c) {
                this.superInit(a, b), this.renderCircle(c)
            }
        })
    }(),
    function() {
        tm.display.TriangleShape = tm.createClass({
            superClass: tm.display.Shape,
            init: function(a, b, c) {
                this.superInit(a, b), this.renderTriangle(c)
            }
        })
    }(),
    function() {
        tm.display.RectangleShape = tm.createClass({
            superClass: tm.display.Shape,
            init: function(a, b, c) {
                this.superInit(a, b), this.renderRectangle(c)
            }
        })
    }(),
    function() {
        tm.display.RoundRectangleShape = tm.createClass({
            superClass: tm.display.Shape,
            init: function(a, b, c) {
                this.superInit(a, b), this.renderRoundRectangle(c)
            }
        })
    }(),
    function() {
        tm.display.StarShape = tm.createClass({
            superClass: tm.display.Shape,
            init: function(a, b, c) {
                this.superInit(a, b), this.renderStar(c)
            }
        })
    }(),
    function() {
        tm.display.PolygonShape = tm.createClass({
            superClass: tm.display.Shape,
            init: function(a, b, c) {
                this.superInit(a, b), this.renderPolygon(c)
            }
        })
    }(),
    function() {
        tm.display.HeartShape = tm.createClass({
            superClass: tm.display.Shape,
            init: function(a, b, c) {
                this.superInit(a, b), this.renderHeart(c)
            }
        })
    }(),
    function() {
        tm.define("tm.display.TextShape", {
            superClass: "tm.display.Shape",
            init: function(a, b, c) {
                this.superInit(a, b), this.renderText(c)
            }
        })
    }(), tm.display = tm.display || {},
    function() {
        var a = null,
            b = null;
        tm.display.Label = tm.createClass({
            superClass: tm.display.CanvasElement,
            fill: !0,
            stroke: !1,
            debugBox: !1,
            init: function(a, b) {
                this.superInit(), this.text = a || "", this._fontSize = b || 24, this._fontFamily = tm.display.Label.default.fontFamily, this._fontWeight = "", this._lineHeight = 1.2, this._updateFont(), this.align = tm.display.Label.default.align, this.baseline = tm.display.Label.default.baseline, this.maxWidth = null
            },
            setAlign: function(a) {
                return this.align = a, this
            },
            setBaseline: function(a) {
                return this.baseline = a, this
            },
            setFontSize: function(a) {
                return this.fontSize = a, this
            },
            setFontFamily: function(a) {
                return this.fontFamily = a, this
            },
            setFontWeight: function(a) {
                return this.fontWeight = a, this
            },
            _updateFont: function() {
                this.fontStyle = "{fontWeight} {fontSize}px {fontFamily}".format(this), a || (a = document.createElement("canvas"), b = a.getContext("2d")), b.font = this.fontStyle, this.textSize = b.measureText("あ").width * this.lineHeight
            },
            _updateLines: function() {
                this._lines = (this._text + "").split("\n")
            }
        }), tm.display.Label.prototype.accessor("text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                this._text = null == a || void 0 == a ? "" : a, this._updateLines()
            }
        }), tm.display.Label.prototype.accessor("fontSize", {
            get: function() {
                return this._fontSize
            },
            set: function(a) {
                this._fontSize = a, this._updateFont()
            }
        }), tm.display.Label.prototype.accessor("fontFamily", {
            get: function() {
                return this._fontFamily
            },
            set: function(a) {
                this._fontFamily = a, this._updateFont()
            }
        }), tm.display.Label.prototype.accessor("fontWeight", {
            get: function() {
                return this._fontWeight
            },
            set: function(a) {
                this._fontWeight = a, this._updateFont()
            }
        }), tm.display.Label.prototype.accessor("lineHeight", {
            get: function() {
                return this._lineHeight
            },
            set: function(a) {
                this._lineHeight = a, this._updateFont()
            }
        }), tm.display.Label.default = {
            align: "center",
            baseline: "middle",
            fontFamily: "'HiraKakuProN-W3'"
        }
    }(), tm.display = tm.display || {},
    function() {
        tm.display.AnimationSprite = tm.createClass({
            superClass: tm.display.CanvasElement,
            init: function(a, b, c) {
                if (this.superInit(), "string" == typeof a) {
                    var a = tm.asset.Manager.get(a);
                    console.assert(a, "not found " + a)
                }
                console.assert("object" == typeof a, "AnimationSprite の第一引数はスプライトシートもしくはスプライトシート名に変わりました"), this.ss = a, this.width = b || a.frame.width, this.height = c || a.frame.height, this.currentFrame = 0, this.currentFrameIndex = 0, this.paused = !0, this.currentAnimation = null, this.addEventListener("enterframe", function(a) {
                    this.paused || a.app.frame % this.currentAnimation.frequency !== 0 || this._updateFrame()
                })
            },
            draw: function(a) {
                var b = this.ss.getFrame(this.currentFrame),
                    c = this.ss.image.element;
                a.drawImage(c, b.x, b.y, b.width, b.height, -this.width * this.originX, -this.height * this.originY, this.width, this.height)
            },
            gotoAndPlay: function(a) {
                return a = void 0 !== a ? a : "default", this.paused = !1, this.currentAnimation = this.ss.animations[a], this.currentFrame = 0, this.currentFrameIndex = 0, this._normalizeFrame(), this
            },
            gotoAndStop: function(a) {
                return a = void 0 !== a ? a : "default", this.paused = !0, this.currentAnimation = this.ss.animations[a], this.currentFrame = 0, this.currentFrameIndex = 0, this._normalizeFrame(), this
            },
            _updateFrame: function() {
                this.currentFrameIndex += 1, this._normalizeFrame()
            },
            _normalizeFrame: function() {
                var a = this.currentAnimation;
                if (a)
                    if (this.currentFrameIndex < a.frames.length) this.currentFrame = a.frames[this.currentFrameIndex];
                    else {
                        a.next ? this.gotoAndPlay(a.next) : (this.currentFrameIndex = a.frames.length - 1, this.currentFrame = a.frames[this.currentFrameIndex], this.paused = !0);
                        var b = tm.event.Event("animationend");
                        this.dispatchEvent(b)
                    }
            }
        })
    }(),
    function() {
        tm.define("tm.display.MapSprite", {
            superClass: "tm.display.CanvasElement",
            init: function(a, b, c) {
                this.superInit(), this.mapSheet = "string" == typeof a ? tm.asset.Manager.get(a) : a, this.chipWidth = b || 32, this.chipHeight = c || 32, this.originX = this.originY = 0, this.width = b * this.mapSheet.width, this.height = b * this.mapSheet.height, this._build()
            },
            _build: function() {
                var a = this;
                this.mapSheet.layers.each(function(b) {
                    "objectgroup" == b.type ? a._buildObject(b) : a._buildLayer(b)
                })
            },
            _buildLayer: function(a) {
                var b = this,
                    c = this.mapSheet,
                    d = tm.asset.Manager.get(c.tilesets[0].image),
                    e = d.width / c.tilewidth | 0,
                    f = tm.display.Shape(this.width, this.height).addChildTo(this),
                    g = 1 === a.visible || void 0 === a.visible,
                    h = void 0 === a.opacity ? 1 : a.opacity;
                f.origin.set(0, 0), g && a.data.each(function(a, g) {
                    var i = a;
                    if (-1 != i) {
                        i = Math.abs(i);
                        var j = g % c.width,
                            k = g / c.width | 0,
                            l = i % e,
                            m = i / e | 0,
                            n = j * b.chipWidth,
                            o = k * b.chipHeight;
                        f.canvas.globalAlpha = h, f.canvas.drawTexture(d, l * c.tilewidth, m * c.tileheight, c.tilewidth, c.tileheight, n, o, b.chipWidth, b.chipHeight)
                    }
                }.bind(this))
            },
            _buildObject: function(a) {
                var b = this,
                    c = tm.display.CanvasElement().addChildTo(b);
                c.width = a.width, c.height = a.height, a.objects.forEach(function(a) {
                    var b = tm.using(a.type);
                    0 === Object.keys(b).length && (b = tm.display[a.type]);
                    var d = null;
                    a.properties.init && (d = JSON.parse(a.properties.init));
                    var e = b.apply(null, d).addChildTo(c),
                        f = a.properties;
                    for (var g in f)
                        if ("init" != g) {
                            var h = f[g];
                            e[g] = h
                        }
                    e.x = a.x, e.y = a.y, e.width = a.width, e.height = a.height, c[a.name] = e
                }), b[a.name] = c
            }
        })
    }(),
    function() {
        tm.define("tm.display.CanvasRenderer", {
            canvas: null,
            init: function(a) {
                this.canvas = a, this._context = this.canvas.context
            },
            render: function(a) {
                this.canvas.save(), this.renderObject(a), this.canvas.restore()
            },
            renderObject: function(a) {
                if (a.visible !== !1) {
                    var c = this._context;
                    if (a._dirtyCalc && a._dirtyCalc(), this._checkRenderable(a)) {
                        a.draw || this._setRenderFunction(a), a.fillStyle && (c.fillStyle = a.fillStyle), a.strokeStyle && (c.strokeStyle = a.strokeStyle), c.globalAlpha = a._worldAlpha, c.globalCompositeOperation = a.blendMode, a.shadowBlur ? (c.shadowColor = a.shadowColor, c.shadowOffsetX = a.shadowOffsetX, c.shadowOffsetY = a.shadowOffsetY, c.shadowBlur = a.shadowBlur) : (c.shadowOffsetX = 0, c.shadowOffsetY = 0, c.shadowColor = "rgba(0, 0, 0, 0)");
                        var d = a._worldMatrix.m;
                        if (c.setTransform(d[0], d[3], d[1], d[4], d[2], d[5]), a.clipping) {
                            if (c.save(), a.clip ? a.clip() : b.call(a, this.canvas), c.clip(), a.draw(this.canvas), a.children.length > 0)
                                for (var e = a.children.slice(), f = 0, g = e.length; g > f; ++f) this.renderObject(e[f]);
                            c.restore()
                        } else if (a.draw(this.canvas), a.children.length > 0)
                            for (var e = a.children.slice(), f = 0, g = e.length; g > f; ++f) this.renderObject(e[f])
                    } else if (a.children.length > 0)
                        for (var e = a.children.slice(), f = 0, g = e.length; g > f; ++f) this.renderObject(e[f])
                }
            },
            _checkRenderable: function(a) {
                return void 0 === a._renderable && (a._renderable = a instanceof tm.display.CanvasElement), a._renderable
            },
            _setRenderFunction: function(b) {
                b.draw = b instanceof tm.display.Sprite ? a.sprite : b instanceof tm.display.MapSprite ? function() {} : b instanceof tm.display.Label ? a.label : b instanceof tm.display.Shape ? a.shape : function() {}
            }
        });
        var a = {
                sprite: function(a) {
                    var b = this.srcRect,
                        c = this._image.element;
                    a.context.drawImage(c, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
                },
                shape: function(a) {
                    this.srcRect;
                    a.drawImage(this.canvas.canvas, 0, 0, this.canvas.width, this.canvas.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
                },
                label: function(a) {
                    a.setText(this.fontStyle, this.align, this.baseline), this.fill && this._lines.each(this.maxWidth ? function(b, c) {
                        a.fillText(b, 0, this.textSize * c, this.maxWidth)
                    }.bind(this) : function(b, c) {
                        a.fillText(b, 0, this.textSize * c)
                    }.bind(this)), this.stroke && this._lines.each(this.maxWidth ? function(b, c) {
                        a.strokeText(b, 0, this.textSize * c, this.maxWidth)
                    }.bind(this) : function(b, c) {
                        a.strokeText(b, 0, this.textSize * c)
                    }.bind(this)), this.debugBox && a.strokeRect(0, 0, this.width, -this.size)
                }
            },
            b = function(a) {
                a.beginPath(), a.rect(-this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
            }
    }(),
    function() {
        tm.define("tm.display.BoundingRectRenderer", {
            superClass: "tm.display.CanvasRenderer",
            init: function(a) {
                this.superInit(a)
            },
            _setRenderFunction: function(b) {
                b.draw = a
            }
        });
        var a = function(a) {
            a.save(), a.lineWidth = 2, a.strokeRect(-this.width * this.originX, -this.height * this.originY, this.width, this.height), a.restore()
        }
    }(), tm.ui = tm.ui || {},
    function() {
        tm.ui.Pad = tm.createClass({
            superClass: tm.display.Shape,
            isTouching: !1,
            circle: null,
            init: function() {
                this.superInit(120, 120);
                var a = this.canvas;
                a.fillStyle = "#fff", a.fillCircle(60, 60, 60), a.fillStyle = "#eee", this._createCircle(), this.setInteractive(!0), this.alpha = .75
            },
            _createCircle: function() {
                var a = this.circle = tm.display.Shape(80, 80);
                this.addChild(a);
                var b = a.canvas;
                b.fillStyle = "#222", b.setShadow("black", 2, 2, 2), b.fillCircle(40, 40, 35)
            },
            onpointingstart: function() {
                this.isTouching = !0
            },
            onpointingend: function() {
                this.isTouching = !1, this.circle.position.set(0, 0)
            },
            onpointingmove: function(a) {
                if (0 != this.isTouching) {
                    var b = a.pointing,
                        c = tm.geom.Vector2(b.x - this.x, b.y - this.y),
                        d = c.length();
                    c.div(d), d > 40 && (d = 40), this.angle = Math.radToDeg(c.toAngle()), this.circle.position.set(c.x * d, c.y * d), this.distance = d / 40, this.direction = c.mul(this.distance)
                }
            }
        })
    }(), tm.ui = tm.ui || {},
    function() {
        tm.ui.LabelButton = tm.createClass({
            superClass: tm.display.Label,
            init: function(a) {
                this.superInit(a), this.alpha = tm.ui.LabelButton.DEFAULT_ALPHA, this.setAlign("center").setBaseline("middle"), this.setInteractive(!0), this.boundingType = "rect", this.addEventListener("pointingover", function() {
                    this.tweener.clear(), this.tweener.fadeIn(250)
                }.bind(this)), this.addEventListener("pointingout", function() {
                    this.tweener.clear(), this.tweener.fade(tm.ui.LabelButton.DEFAULT_ALPHA, 250)
                }.bind(this))
            }
        }), tm.ui.LabelButton.DEFAULT_ALPHA = .5
    }(),
    function() {
        tm.ui.IconButton = tm.createClass({
            superClass: tm.display.Sprite,
            init: function(a) {
                a ? this.superInit(a, a.width, a.height) : this.superInit(), this.alpha = tm.ui.IconButton.DEFAULT_ALPHA, this.setInteractive(!0), this.boundingType = "rect", this.addEventListener("pointingover", function() {
                    this.tweener.clear(), this.tweener.fade(1, 250)
                }), this.addEventListener("pointingout", function() {
                    this.tweener.clear(), this.tweener.fade(tm.ui.LabelButton.DEFAULT_ALPHA, 250)
                })
            }
        }), tm.ui.IconButton.DEFAULT_ALPHA = .5
    }(),
    function() {
        tm.ui.GlossyButton = tm.createClass({
            superClass: tm.display.Shape,
            init: function(a, b, c, d) {
                this.superInit(a, b), d = d || "Button", this.backgroundColor = c || "black", this.alpha = tm.ui.GlossyButton.DEFAULT_ALPHA, this.setInteractive(!0), this.boundingType = "rect", this.addEventListener("pointingover", function() {
                    this.tweener.clear(), this.tweener.fade(1, 250)
                }), this.addEventListener("pointingout", function() {
                    this.tweener.clear(), this.tweener.fade(tm.ui.GlossyButton.DEFAULT_ALPHA, 250)
                }), this.label = tm.display.Label(d || "").addChildTo(this), this.label.setAlign("center").setBaseline("middle"), this._refresh()
            },
            setBackgroundColor: function(a) {
                return this.backgroundColor = a, this._refresh(), this
            },
            _refresh: function() {
                var a = this.canvas;
                a.resize(this.width, this.height), a.fillStyle = this.backgroundColor, a.fillRoundRect(2, 2, this.width - 4, this.height - 4, 10), a.strokeStyle = "rgba(100,100,100,0.75)", a.lineWidth = 2, a.strokeRoundRect(2, 2, this.width - 4, this.height - 4, 10), a.roundRect(2, 2, this.width - 4, this.height - 4, 10), a.clip();
                var b = tm.graphics.LinearGradient(0, 0, 0, this.height);
                b.addColorStop(0, "rgba(255,255,255,0.9)"), b.addColorStop(.5, "rgba(255,255,255,0.5)"), b.addColorStop(.51, "rgba(255,255,255,0.2)"), b.addColorStop(1, "rgba(255,255,255,0.0)"), a.setGradient(b), a.fillRect(2, 2, this.width - 4, this.height - 4, 10), this.label.setSize(this.width, this.height)
            }
        }), tm.ui.GlossyButton.DEFAULT_ALPHA = .5
    }(),
    function() {
        tm.define("tm.ui.FlatButton", {
            superClass: tm.display.Shape,
            init: function(a) {
                a.$safe({
                    width: 300,
                    height: 100,
                    bgColor: "rgb(180, 180, 180)",
                    text: "ABC",
                    fontSize: 50,
                    fontFamily: "'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif"
                }), this.superInit(a.width, a.height), this.canvas.clearColor(a.bgColor), this.setInteractive(!0), this.setBoundingType("rect"), this.label = tm.display.Label(a.text).addChildTo(this), this.label.setFontSize(a.fontSize).setFontFamily(a.fontFamily).setAlign("center").setBaseline("middle")
            }
        })
    }(),
    function() {
        tm.define("tm.ui.MenuDialog", {
            superClass: tm.app.Scene,
            titleText: null,
            menu: null,
            descriptions: null,
            showExit: !1,
            title: null,
            selections: [],
            description: null,
            box: null,
            cursor: null,
            _selected: 0,
            _opened: !1,
            _finished: !1,
            _screenWidth: 0,
            _screenHeight: 0,
            init: function(a) {
                this.superInit(), this._screenWidth = a.screenWidth, this._screenHeight = a.screenHeight, this.titleText = a.title, this.menu = [].concat(a.menu), this._selected = ~~a.defaultSelected, this.showExit = !!a.showExit, this.descriptions = a.menuDesctiptions ? a.menuDesctiptions : [].concat(a.menu), this.showExit && (this.menu.push("exit"), this.descriptions.push("前の画面へ戻ります"));
                var b = Math.max(50 * (1 + this.menu.length), 50) + 40;
                this.box = tm.display.RectangleShape(.8 * this._screenWidth, b, {
                    strokeStyle: "rgba(0,0,0,0)",
                    fillStyle: "rgba(43,156,255, 0.8)"
                }).setPosition(.5 * this._screenWidth, .5 * this._screenHeight), this.box.width = 1, this.box.height = 1, this.box.setBoundingType("rect"), this.box.tweener.to({
                    width: .8 * this._screenWidth,
                    height: b
                }, 200, "easeOutExpo").call(this._onOpen.bind(this)), this.box.addChildTo(this), this.description = tm.display.Label("", 14).setAlign("center").setBaseline("middle").setPosition(.5 * this._screenWidth, this._screenHeight - 10).addChildTo(this)
            },
            _onOpen: function() {
                var a = this,
                    b = .5 * this._screenHeight - 25 * this.menu.length;
                this.title = tm.display.Label(this.titleText, 30).setAlign("center").setBaseline("middle").setPosition(.5 * this._screenWidth, b).addChildTo(this), this.cursor = this._createCursor(), this.selections = this.menu.map(function(a, c) {
                    var d = this;
                    b += 50;
                    var e = tm.ui.LabelButton(a).setPosition(.5 * this._screenWidth, b).addChildTo(this);
                    return e.interactive = !0, e.addEventListener("click", function() {
                        if (d._selected === c) d.closeDialog(d._selected);
                        else {
                            d._selected = c;
                            var a = tm.event.Event("menuselect");
                            a.selectValue = d.menu[d._selected], a.selectIndex = c, d.dispatchEvent(a)
                        }
                    }), e.width = .7 * this._screenWidth, e
                }.bind(this)), this.cursor.y = this.selections[this._selected].y, this._opened = !0, this.addEventListener("pointingend", function(b) {
                    var c = b.app.pointing;
                    a.box.isHitPoint(c.x, c.y) || a.closeDialog(a._selected)
                });
                var c = tm.event.Event("menuopened");
                this.dispatchEvent(c)
            },
            _createCursor: function() {
                var a = tm.display.RectangleShape(.7 * this._screenWidth, 30, {
                    strokeStyle: "rgba(0,0,0,0)",
                    fillStyle: "rgba(12,79,138,1)"
                }).addChildTo(this);
                return a.x = .5 * this._screenWidth, a.target = this._selected, a.update = function() {
                    this.target !== this.parent._selected && (this.target = this.parent._selected, this.tweener.clear(), this.tweener.to({
                        y: this.parent.selections[this.parent._selected].y
                    }, 200, "easeOutExpo"))
                }, a
            },
            update: function() {
                this.description.text = this.descriptions[this._selected]
            },
            closeDialog: function(a) {
                this._finished = !0;
                var b = tm.event.Event("menuselected");
                b.selectIndex = a, this.dispatchEvent(b), this.tweener.clear().wait(200).call(function() {
                    this.cursor.remove(), this.title.remove(), this.selections.each(function(a) {
                        a.remove()
                    }), this.box.tweener.clear(), this.box.tweener.to({
                        width: 1,
                        height: 1
                    }, 200, "easeInExpo").call(function() {
                        this.app.popScene();
                        var b = tm.event.Event("menuclosed");
                        b.selectIndex = a, this.dispatchEvent(b)
                    }.bind(this))
                }.bind(this)), this.cursor.tweener.clear().call(function() {
                    this.visible = !this.visible
                }.bind(this.cursor)).setLoop(!0)
            },
            draw: function(a) {
                a.fillStyle = "rgba(0,0,0,0.8)", a.fillRect(0, 0, this._screenWidth, this._screenHeight)
            }
        })
    }(),
    function() {
        var a = {
            bgColor: "rgba(255, 255, 255, 1.0)",
            penColor: "rgba(0, 0, 0, 1.0)",
            lineWidth: 16
        };
        tm.define("tm.ui.Sketch", {
            superClass: "tm.display.Shape",
            init: function(b, c, d) {
                this.superInit(b, c), d = d || {}, d.$safe(a), this._setup(d)
            },
            _setup: function(a) {
                var b = this;
                this.boundingType = "rect", this.setInteractive(!0);
                var c = this.canvas.context;
                c.lineCap = "round", c.lineJoin = "round", c.miterLimit = 10, this.bgColor = a.bgColor, this.penColor = a.penColor, this.lineWidth = a.lineWidth, this.on("pointingstart", function(a) {
                    var c = a.app.pointing;
                    b._drawPoint(c.position)
                }), this.on("pointingmove", function(a) {
                    var c = a.app.pointing;
                    b._drawLine(c.prevPosition, c.position), b.points.push({
                        x: c.x - this.left,
                        y: c.y - this.top
                    })
                }), this.on("pointingend", function() {
                    b.pointsList.push(b.points), b.points = []
                }), this.pointsList = [], this.points = []
            },
            clear: function() {
                return this.canvas.clear(), this.canvas.clearColor(this.bgColor), this.pointsList = [], this.points = [], this
            },
            _drawPoint: function(a) {
                this.canvas.drawPoint(a.x - this.left, a.y - this.top)
            },
            _drawLine: function(a, b) {
                this.canvas.drawLine(a.x - this.left, a.y - this.top, b.x - this.left, b.y - this.top)
            }
        }), tm.ui.Sketch.prototype.accessor("penColor", {
            get: function() {
                return this._penColor
            },
            set: function(a) {
                this._penColor = a, this.canvas.strokeStyle = a
            }
        }), tm.ui.Sketch.prototype.accessor("bgColor", {
            get: function() {
                return this._bgColor
            },
            set: function(a) {
                this._bgColor = a, this.clear()
            }
        }), tm.ui.Sketch.prototype.accessor("lineWidth", {
            get: function() {
                return this._lineWidth
            },
            set: function(a) {
                this._lineWidth = a, this.canvas.lineWidth = a
            }
        })
    }(),
    function() {
        tm.ui.Gauge = tm.createClass({
            superClass: tm.display.CanvasElement,
            animationFlag: !0,
            animationTime: 1e4,
            init: function(a) {
                this.superInit(), a = a || {}, a.$safe({
                    width: 300,
                    height: 25,
                    color: "hsl(220, 100%, 50%)",
                    bgColor: "#444",
                    borderColor: "white",
                    borderWidth: 4
                }), this.$extend(a), this._reset()
            },
            isFull: function() {
                return this._value === this._maxValue
            },
            isEmpty: function() {
                return 0 == this._value
            },
            _reset: function() {
                this.originX = 0, this._value = 100, this._value = this._maxValue = 100
            },
            setValue: function(a) {
                if (a = Math.clamp(a, 0, this._maxValue), this._realValue = a, this._value !== a) {
                    if (this.fire(tm.event.Event("change")), this.isAnimation()) {
                        this.tweener.clear();
                        var b = Math.abs(this._value - a) / 100 * this.animationTime;
                        this.tweener.clear().to({
                            _value: a
                        }, b).call(function() {
                            this.fire(tm.event.Event("changed")), this.isEmpty() ? this.fire(tm.event.Event("empty")) : this.isFull() && this.fire(tm.event.Event("full"))
                        }.bind(this))
                    } else this._value = a, this.fire(tm.event.Event("changed")), this.isEmpty() ? this.fire(tm.event.Event("empty")) : this.isFull() && this.fire(tm.event.Event("full"));
                    return this
                }
            },
            getValue: function() {
                return this.value
            },
            setPercent: function(a) {
                return this.setValue(this._maxValue * a * .01)
            },
            getPercent: function() {
                return this._value / this._maxValue * 100
            },
            setRatio: function() {
                return this.setValue(this._maxValue * percent)
            },
            getRatio: function() {
                return this._value / this._maxValue
            },
            isAnimation: function() {
                return this.animationFlag
            },
            draw: function(a) {
                a.save(), a.fillStyle = this.bgColor, a.fillRect(0, 0, this.width, this.height), a.fillStyle = this.color, a.fillRect(0, 0, this.width * this.getRatio(), this.height), a.strokeStyle = this.borderColor, a.lineWidth = this.borderWidth, a.strokeRect(0, 0, this.width, this.height), a.restore()
            }
        }), tm.ui.Gauge.prototype.accessor("value", {
            get: function() {
                return this._value
            },
            set: function(a) {
                this.setValue(a)
            }
        }), tm.ui.Gauge.prototype.accessor("percent", {
            get: function() {
                return this.getPercent()
            },
            set: function(a) {
                this.setPercent(a)
            }
        }), tm.ui.Gauge.prototype.accessor("ratio", {
            get: function() {
                return this.getRatio()
            },
            set: function(a) {
                this.setRatio(a)
            }
        })
    }(),
    function() {
        tm.define("tm.ui.FlatGauge", {
            superClass: "tm.ui.Gauge",
            init: function(a) {
                this.superInit(a)
            },
            draw: function(a) {
                a.save(), a.save(), a.roundRect(0, 0, this.width, this.height, this.height / 2), a.clip(), a.fillStyle = this.bgColor, a.fillRect(0, 0, this.width, this.height), a.fillStyle = this.color, a.fillRect(0, 0, this.width * this.getRatio(), this.height), a.restore(), a.strokeStyle = this.borderColor, a.lineWidth = this.borderWidth, a.strokeRoundRect(0, 0, this.width, this.height, this.height / 2), a.restore()
            }
        })
    }(),
    function() {
        tm.define("tm.ui.GlossyGauge", {
            superClass: "tm.ui.Gauge",
            init: function(a) {
                a = a || {}, a.borderWidth = a.borderWidth || 2, this.superInit(a)
            },
            draw: function(a) {
                a.save(), a.roundRect(0, 0, this.width, this.height, this.height / 2), a.clip(), a.fillStyle = this.bgColor, a.fillRect(0, 0, this.width, this.height), a.fillStyle = this.color, a.fillRect(0, 0, this.width * this.getRatio(), this.height);
                var b = tm.graphics.LinearGradient(0, 0, 0, this.height);
                b.addColorStop(0, "rgba(255,255,255,0.9)"), b.addColorStop(.5, "rgba(255,255,255,0.5)"), b.addColorStop(.51, "rgba(255,255,255,0.2)"), b.addColorStop(1, "rgba(255,255,255,0.0)"), a.setGradient(b), a.fillRect(0, 0, this.width * this.getRatio(), this.height), a.restore(), a.lineWidth = this.borderWidth, a.strokeStyle = this.borderColor, a.strokeRoundRect(0, 0, this.width, this.height, this.height / 2)
            }
        })
    }(),
    function() {
        tm.define("tm.ui.LabelArea", {
            superClass: "tm.display.Shape",
            init: function(a) {
                a = a || {}, this.superInit(a.width || 150, a.height || 60), this.canvas.clearColor("red"), this.$extend({
                    mode: a.mode || "horizon",
                    _fillStyle: a.fillStyle || "#aaa",
                    _bgColor: a.bgColor || "transparent",
                    _fontSize: a.fontSize || 24,
                    _fontFamily: a.fontFamily || "'Consolas', 'Monaco', 'ＭＳ ゴシック'",
                    _fontWeight: a.fontWeight || "",
                    lineSpace: a.lineSpace || 1
                }), this._updateFont(), this.setText(a.text || "こんにちは,世界!")
            },
            setText: function(a) {
                this._text !== a && (this._text = a, this._renderText())
            },
            _renderText: function() {
                this.canvas.width = this.width, this.canvas.height = this.height, this.canvas.clearColor(this.bgColor), this.canvas.font = this.fontStyle, this.canvas.fillStyle = this.fillStyle, this.canvas.fillLabelArea({
                    text: this._text,
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height,
                    mode: this.mode,
                    lineSpace: this.lineSpace
                })
            },
            _updateFont: function() {
                this.fontStyle = "{fontWeight} {fontSize}px {fontFamily}".format(this), this.text && this._renderText()
            }
        }), tm.ui.LabelArea.prototype.accessor("text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                this.setText(a)
            }
        }), tm.ui.LabelArea.prototype.accessor("fontSize", {
            get: function() {
                return this._fontSize
            },
            set: function(a) {
                this._fontSize = a, this._updateFont()
            }
        }), tm.ui.LabelArea.prototype.accessor("fontFamily", {
            get: function() {
                return this._fontFamily
            },
            set: function(a) {
                this._fontFamily = a, this._updateFont()
            }
        }), tm.ui.LabelArea.prototype.accessor("fontWeight", {
            get: function() {
                return this._fontWeight
            },
            set: function(a) {
                this._fontWeight = a, this._updateFont()
            }
        }), tm.ui.LabelArea.prototype.accessor("fillStyle", {
            get: function() {
                return this._fillStyle
            },
            set: function(a) {
                this._fillStyle = a, this._updateFont()
            }
        }), tm.ui.LabelArea.prototype.accessor("bgColor", {
            get: function() {
                return this._bgColor
            },
            set: function(a) {
                this._bgColor = a, this._updateFont()
            }
        }), tm.ui.LabelArea.prototype.accessor("width", {
            get: function() {
                return this._width
            },
            set: function(a) {
                this._width = a, this.text && this._renderText()
            }
        }), tm.ui.LabelArea.prototype.accessor("height", {
            get: function() {
                return this._height
            },
            set: function(a) {
                this._height = a, this.text && this._renderText()
            }
        })
    }(),
    function() {
        var a = {
            width: 465,
            height: 465,
            bgColor: "transparent"
        };
        tm.define("tm.ui.LoadingScene", {
            superClass: "tm.app.Scene",
            init: function(b) {
                this.superInit(), this.param = b = {}.$extend(a, b), this.fromJSON({
                    children: {
                        stage: {
                            type: "tm.display.CanvasElement"
                        }
                    }
                }), this.stage.fromJSON({
                    children: {
                        bg: {
                            type: "tm.display.Shape",
                            init: [b.width, b.height],
                            originX: 0,
                            originY: 0
                        },
                        piyoLayer: {
                            type: "tm.display.CanvasElement"
                        },
                        label: {
                            type: "tm.display.Label",
                            text: "LOADING",
                            x: b.width / 2,
                            y: b.height / 2 - 20,
                            align: "center",
                            baseline: "middle",
                            fontSize: 46,
                            shadowBlur: 4,
                            shadowColor: "hsl(190, 100%, 50%)"
                        },
                        bar: {
                            type: "tm.ui.Gauge",
                            init: [{
                                width: b.width,
                                height: 10,
                                color: "hsl(200, 100%, 80%)",
                                bgColor: "transparent",
                                borderColor: "transparent",
                                borderWidth: 0
                            }],
                            x: 0,
                            y: 0
                        }
                    }
                });
                var c = this.stage.bg;
                c.canvas.clearColor(b.bgColor);
                var d = this.stage.label;
                d.tweener.to({
                    alpha: 1
                }, 1e3).to({
                    alpha: .5
                }, 1e3).setLoop(!0);
                var e = this.stage.bar;
                e.animationFlag = !1, e.value = 0, e.animationFlag = !0, e.animationTime = 100, this._createHiyoko(b).addChildTo(this.stage.piyoLayer);
                var f = this.stage;
                f.alpha = 0, f.tweener.clear().fadeIn(100).call(function() {
                    if (b.assets) {
                        var a = tm.asset.Loader();
                        a.onload = function() {
                            f.tweener.clear().wait(200).fadeOut(200).call(function() {
                                b.nextScene && this.app.replaceScene(b.nextScene());
                                var a = tm.event.Event("load");
                                this.fire(a)
                            }.bind(this))
                        }.bind(this), a.onprogress = function(a) {
                            e.value = 100 * a.progress;
                            var b = tm.event.Event("progress");
                            b.progress = a.progress, this.fire(b)
                        }.bind(this), a.load(b.assets)
                    }
                }.bind(this))
            },
            onpointingstart: function(a) {
                var b = a.pointing,
                    c = this._createHiyoko(this.param).addChildTo(this.stage.piyoLayer);
                c.x = b.x, c.y = b.y
            },
            _createHiyoko: function(a) {
                var b = tm.display.Shape(84, 84);
                b.x = tm.util.Random.randint(0, a.width), b.y = tm.util.Random.randint(0, a.height), b.canvas.setColorStyle("white", "yellow").fillCircle(42, 42, 32), b.canvas.setColorStyle("white", "black").fillCircle(27, 27, 2), b.canvas.setColorStyle("white", "brown").fillRect(40, 70, 4, 15).fillTriangle(0, 40, 11, 35, 11, 45), b.dir = tm.geom.Vector2.random(0, 360, 4);
                var c = tm.geom.Rect(0, 0, a.width, a.height);
                return c.padding(42), b.update = function() {
                    this.position.add(this.dir), this.x < c.left ? (this.x = c.left, this.dir.x *= -1) : this.x > c.right && (this.x = c.right, this.dir.x *= -1), this.y < c.top ? (this.y = c.top, this.dir.y *= -1) : this.y > c.bottom && (this.y = c.bottom, this.dir.y *= -1), this.dir.x < 0 ? (this.rotation -= 7, this.scaleX = 1) : (this.rotation += 7, this.scaleX = -1)
                }, b
            }
        })
    }(),
    function() {
        tm.define("tm.scene.TitleScene", {
            superClass: "tm.app.Scene",
            init: function(a) {
                this.superInit(), a = {}.$extend(tm.scene.TitleScene.default, a), this.fromJSON({
                    children: {
                        bg: {
                            type: "tm.display.RectangleShape",
                            init: [a.width, a.height, {
                                fillStyle: a.bgColor,
                                strokeStyle: "transparent"
                            }],
                            originX: 0,
                            originY: 0
                        }
                    }
                }), a.bgImage && this.fromJSON({
                    children: {
                        bgImage: {
                            type: "tm.display.Sprite",
                            init: [a.bgImage],
                            originX: 0,
                            originY: 0
                        }
                    }
                }), this.fromJSON({
                    children: {
                        titleLabel: {
                            type: "Label",
                            name: "titleLabel",
                            text: a.title,
                            x: a.width / 2,
                            y: a.height / 10 * 2,
                            fillStyle: a.fontColor,
                            fontSize: a.fontSize,
                            fontFamily: "'Helvetica-Light' 'Meiryo' sans-serif",
                            align: "center",
                            baseline: "middle"
                        },
                        touchLabel: {
                            type: "Label",
                            name: "nextLabel",
                            text: "TOUCH START",
                            x: a.width / 2,
                            y: a.height / 10 * 8,
                            fillStyle: a.fontColor,
                            fontSize: .4 * a.fontSize,
                            fontFamily: "'Helvetica-Light' 'Meiryo' sans-serif",
                            align: "center",
                            baseline: "middle"
                        }
                    }
                }), this.touchLabel.tweener.fadeOut(500).fadeIn(1e3).setLoop(!0), this.autopop = a.autopop
            },
            onpointingstart: function() {
                this.flare("finish"), this.autopop && this.app.popScene()
            }
        }), tm.scene.TitleScene.default = {
            title: "Time is money",
            fontSize: 72,
            fontColor: "#444",
            width: 640,
            height: 960,
            bgColor: "rgb(240,240,240)",
            bgImage: null,
            autopop: !0
        }
    }(),
    function() {
        tm.define("tm.scene.ResultScene", {
            superClass: "tm.app.Scene",
            init: function(a) {
                this.superInit(), a = {}.$extend(tm.scene.ResultScene.default, a), this.fromJSON({
                    children: {
                        bg: {
                            type: "tm.display.RectangleShape",
                            init: [a.width, a.height, {
                                fillStyle: a.bgColor,
                                strokeStyle: "transparent"
                            }],
                            originX: 0,
                            originY: 0
                        }
                    }
                }), a.bgImage && this.fromJSON({
                    children: {
                        bgImage: {
                            type: "tm.display.Sprite",
                            init: [a.bgImage],
                            originX: 0,
                            originY: 0
                        }
                    }
                }), this.fromJSON({
                    children: {
                        scoreText: {
                            type: "Label",
                            text: "score",
                            x: a.width / 2,
                            y: a.height / 10 * 2,
                            fillStyle: a.fontColor,
                            fontSize: .5 * a.fontSize,
                            fontFamily: "'Helvetica-Light' 'Meiryo' sans-serif",
                            align: "center",
                            baseline: "middle"
                        },
                        scoreLabel: {
                            type: "Label",
                            text: a.score,
                            x: a.width / 2,
                            y: a.height / 10 * 3,
                            fillStyle: a.fontColor,
                            fontSize: a.fontSize,
                            fontFamily: "'Helvetica-Light' 'Meiryo' sans-serif",
                            align: "center",
                            baseline: "middle"
                        },
                        shareButton: {
                            type: "FlatButton",
                            init: [{
                                text: "Share",
                                width: 200,
                                bgColor: "hsl(240, 80%, 70%)"
                            }],
                            x: a.width / 10 * 3,
                            y: a.height / 10 * 7
                        },
                        backButton: {
                            type: "FlatButton",
                            init: [{
                                text: "Back",
                                width: 200,
                                bgColor: "hsl(240, 80%, 0%)"
                            }],
                            x: a.width / 10 * 7,
                            y: a.height / 10 * 7
                        }
                    }
                });
                var b = "SCORE: {score}, {message}".format(a),
                    c = tm.social.Twitter.createURL({
                        type: "tweet",
                        text: b,
                        hashtags: a.hashtags,
                        url: a.url
                    });
                this.shareButton.onclick = function() {
                    window.open(c, "share window", "width=400, height=300")
                }, this.backButton.onpointingstart = this._back.bind(this), this.autopop = a.autopop
            },
            _back: function() {
                this.flare("finish"), this.autopop && this.app.popScene()
            }
        }), tm.scene.ResultScene.default = {
            score: 256,
            message: "this is tmlib.js",
            hashtags: "tmlibjs,game",
            related: "tmlib.js tmlife javascript",
            url: "http://phi-jp.github.io/tmlib.js/",
            width: 640,
            height: 960,
            fontColor: "#444",
            fontSize: 90,
            bgColor: "rgb(240,240,240)",
            bgImage: null,
            autopop: !0
        }
    }(),
    function() {
        tm.define("tm.scene.ManagerScene", {
            superClass: "tm.app.Scene",
            init: function(a) {
                this.superInit(), this.setScenes(a.scenes), this.on("enter", function() {
                    var a = tm.event.Event("start");
                    this.fire(a)
                }.bind(this)), this.on("resume", function() {
                    var a = tm.event.Event("next");
                    this.fire(a)
                }.bind(this)), this.commonArguments = {}
            },
            setScenes: function(a) {
                return this.scenes = a, this.sceneIndex = 0, this
            },
            getScene: function(a) {
                return a = "string" == typeof a ? this.labelToIndex(a) : a || 0, this.scenes[a]
            },
            setSceneArgument: function(a, b, c) {
                return this.getScene(a).arguments[b] = c, this
            },
            gotoScene: function(a) {
                a = "string" == typeof a ? this.labelToIndex(a) : a || 0;
                var b = tm.event.Event("prepare");
                this.fire(b);
                var c = this.scenes[a],
                    d = tm.using(c.className),
                    e = c.arguments;
                tm.util.Type.isArray(e) || (e = [e]);
                var f = d.apply(null, e);
                this.app.pushScene(f), this.sceneIndex = a, this.currentScene = f;
                var b = tm.event.Event("goto");
                return b.scene = f, this.fire(b), this
            },
            gotoNext: function() {
                var a = this.scenes[this.sceneIndex],
                    b = null;
                return a.nextLabel ? b = this.labelToIndex(a.nextLabel) : this.sceneIndex + 1 < this.scenes.length && (b = this.sceneIndex + 1), null !== b ? this.gotoScene(b) : this.fire(tm.event.Event("finish")), this
            },
            getCurrentIndex: function() {
                return this.sceneIndex
            },
            getCurrentLabel: function() {
                return this.scenes[this.sceneIndex].label
            },
            labelToIndex: function(a) {
                var b = this.scenes.filter(function(b) {
                    return b.label == a
                })[0];
                return this.scenes.indexOf(b)
            },
            indexToLabel: function(a) {
                return this.scenes[a].label
            },
            onstart: function() {
                this.gotoScene(0)
            },
            onnext: function() {
                this.gotoNext()
            }
        })
    }(),
    function() {
        tm.define("tm.scene.NumericalInputScene", {
            superClass: "tm.app.Scene",
            init: function() {
                this.superInit();
                var a = tm.asset.Loader();
                a.load({
                    ss: "scene/ss.png"
                }), a.onload = function() {
                    this.fromJSON({
                        children: {
                            ss: {
                                type: "tm.display.Sprite",
                                init: "ss",
                                originX: 0,
                                originY: 0,
                                y: -88,
                                alpha: .1
                            }
                        }
                    })
                }.bind(this), this.fromJSON({
                    children: {
                        inputLabel: {
                            type: "tm.display.Label",
                            fillStyle: "white",
                            text: "",
                            fontSize: 64,
                            x: 320,
                            y: 120
                        },
                        buttonGroup: {
                            type: "tm.display.CanvasElement"
                        }
                    }
                }), [1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "OK"].each(function(a, b) {
                    var c = this._createButton(a.toString()).addChildTo(this.buttonGroup),
                        d = b % 3,
                        e = b / 3 | 0;
                    c.x = 190 * d + 130, c.y = 177 * e + 280
                }, this);
                var b = this,
                    c = this.buttonGroup.children;
                c.each(function(a) {
                    a.setInteractive(!0).setBoundingType("circle"), a.radius = 72.5, a.onpointingstart = function() {
                        if ("OK" == this.label.text) {
                            var a = tm.event.Event("decided");
                            a.value = Number(b.inputLabel.text), b.fire(a)
                        } else "C" == this.label.text ? b.inputLabel.text = "" : b.inputLabel.text += this.label.text
                    }
                })
            },
            _createButton: function(a) {
                var b = tm.display.CanvasElement();
                return b.fromJSON({
                    children: {
                        bg: {
                            type: "tm.display.CircleShape",
                            init: [145, 145, {
                                fillStyle: "transparent",
                                strokeStyle: "white"
                            }]
                        },
                        label: {
                            type: "tm.display.Label",
                            text: a,
                            fontSize: 64,
                            fillStyle: "white"
                        }
                    }
                }), b
            }
        })
    }(), tm.three = tm.three || {},
    function() {
        tm.global.THREE && (tm.three.ThreeApp = tm.createClass({
            superClass: tm.app.BaseApp,
            canvas: null,
            background: null,
            _scenes: null,
            _sceneIndex: 0,
            init: function(a) {
                a instanceof HTMLCanvasElement ? this.element = a : "string" == typeof a ? this.element = document.querySelector(a) : (this.element = document.createElement("canvas"), document.body.appendChild(this.element)), this.superInit(this.element), this.renderer = new THREE.WebGLRenderer({
                    canvas: this.element,
                    clearColor: 2236962,
                    clearAlpha: 1
                }), this.renderer.setSize(this.element.width, this.element.height), this._scenes = [tm.three.Scene()]
            },
            resize: function(a, b) {
                return this.width = a, this.height = b, this.renderer.setSize(this.width, this.height), this
            },
            resizeWindow: function() {
                return this.width = innerWidth, this.height = innerHeight, this.renderer.setSize(this.width, this.height), this
            },
            fitWindow: function(a) {
                var b = function() {
                    a = void 0 === a ? !0 : a;
                    var b = this.element,
                        c = b.style;
                    c.position = "absolute", c.left = "0px", c.top = "0px";
                    var d = b.width / window.innerWidth,
                        e = b.height / window.innerHeight,
                        f = b.height / b.width;
                    d > e ? (c.width = innerWidth + "px", c.height = innerWidth * f + "px") : (c.width = innerHeight / f + "px", c.height = innerHeight + "px")
                }.bind(this);
                b(), a && window.addEventListener("resize", b, !1), this.mouse._mousemove = this.mouse._mousemoveScale, this.touch._touchmove = this.touch._touchmoveScale
            },
            _draw: function() {
                for (var a = 0, b = this._scenes.length; b > a; ++a) this.renderer.render(this.currentScene, this.currentScene.camera)
            }
        }), tm.three.ThreeApp.prototype.accessor("width", {
            get: function() {
                return this.element.width
            },
            set: function(a) {
                this.element.width = a
            }
        }), tm.three.ThreeApp.prototype.accessor("height", {
            get: function() {
                return this.element.height
            },
            set: function(a) {
                this.element.height = a
            }
        }))
    }(),
    function() {
        tm.global.THREE && (tm.three.Element = tm.createClass({
            superClass: THREE.Object3D,
            init: function() {
                THREE.Object3D.call(this), tm.event.EventDispatcher.prototype.init.call(this)
            },
            update: function() {},
            _update: function(a) {
                if (0 != this.awake) {
                    this.update(a);
                    var b = tm.event.Event("enterframe");
                    if (b.app = a, this.dispatchEvent(b), this.children.length > 0)
                        for (var c = this.children.slice(), d = 0, e = c.length; e > d; ++d) {
                            var f = c[d];
                            f._update && f._update(a)
                        }
                }
            }
        }), tm.three.Element.prototype.$safe(tm.event.EventDispatcher.prototype))
    }(),
    function() {
        tm.global.THREE && (tm.three.MeshElement = tm.createClass({
            superClass: THREE.Mesh,
            init: function(a, b) {
                b = b || new THREE.MeshNormalMaterial, THREE.Mesh.call(this, a, b), tm.three.Element.prototype.init.call(this)
            }
        }), tm.three.MeshElement.prototype.$safe(tm.three.Element.prototype), tm.three.CubeElement = tm.createClass({
            superClass: tm.three.MeshElement,
            init: function(a, b, c) {
                a = a || 100, b = b || 100, c = c || 100;
                var d = new THREE.CubeGeometry(a, b, c),
                    e = new THREE.MeshNormalMaterial;
                this.superInit(d, e)
            }
        }), tm.three.SphereElement = tm.createClass({
            superClass: tm.three.MeshElement,
            init: function(a, b, c) {
                a = a || 45, b = b || 16, c = c || 12;
                var d = new THREE.SphereGeometry(a, b, c),
                    e = new THREE.MeshNormalMaterial;
                this.superInit(d, e)
            }
        }), tm.three.PlaneElement = tm.createClass({
            superClass: tm.three.MeshElement,
            init: function(a, b) {
                var c = new THREE.PlaneGeometry(a, b),
                    d = new THREE.MeshNormalMaterial;
                this.superInit(c, d)
            }
        }), tm.three.FloorElement = tm.createClass({
            superClass: tm.three.MeshElement,
            init: function(a, b) {
                a = a || 1e3, b = b || 1e3;
                var c = new THREE.PlaneGeometry(a, b),
                    d = new THREE.MeshBasicMaterial;
                this.superInit(c, d), this.rotation.x = -Math.PI / 2, this._render()
            },
            _render: function() {
                var a = tm.graphics.Canvas();
                a.resize(128, 128), a.clearColor("#444"), a.setFillStyle("white"), a.fillRect(0, 0, 64, 64), a.fillRect(64, 64, 64, 64);
                var b = new THREE.Texture(a.element);
                b.wrapS = b.wrapT = THREE.RepeatWrapping, b.repeat.set(10, 10), b.needsUpdate = !0, this.material.map = b
            }
        }), tm.three.TextElement = tm.createClass({
            superClass: tm.three.MeshElement,
            init: function(a, b) {
                var c = new THREE.TextGeometry(a, b),
                    d = new THREE.MeshNormalMaterial;
                this.superInit(c, d)
            }
        }), tm.three.CanvasTexture = tm.createClass({
            superClass: THREE.Texture,
            canvas: null,
            init: function() {
                this.canvas = tm.graphics.Canvas(), THREE.Texture.call(this, this.canvas.element), this.needsUpdate = !0
            }
        }))
    }(),
    function() {
        tm.global.THREE && (tm.three.Scene = tm.createClass({
            superClass: THREE.Scene,
            init: function(a, b) {
                a = a || 60, b = b || 640 / 480, THREE.Scene.call(this), tm.three.Element.prototype.init.call(this), this.camera = new THREE.PerspectiveCamera(a, b, 1, 1e4), this.camera.position.y = 100, this.camera.position.z = 500, this.projector = new THREE.Projector
            },
            intersect: function(a) {
                a = a || this.children;
                var b = this.app.pointing.x,
                    c = this.app.pointing.y;
                b = b / this.app.width * 2 - 1, c = 2 * -(c / this.app.height) + 1;
                var d = new THREE.Vector3(b, c, .5);
                this.projector.unprojectVector(d, this.camera);
                var e = new THREE.Raycaster(this.camera.position, d.sub(this.camera.position).normalize());
                return e.intersectObjects(a)
            }
        }), tm.three.Scene.prototype.$safe(tm.three.Element.prototype))
    }(), tm.sound = tm.sound || {},
    function() {
        tm.sound.globalVolume = 1
    }(),
    function() {
        if (tm.sound.Sound = tm.createClass({
                superClass: tm.event.EventDispatcher,
                element: null,
                loaded: !1,
                isPlay: !1,
                init: function(a) {
                    this.superInit(), this.element = new Audio, this.element.src = a, this.element.load(), this.element.setAttribute("preload", "auto");
                    var b = this;
                    this.element.addEventListener("canplaythrough", function() {
                        b.loaded = !0, b.fire(tm.event.Event("load"))
                    }), this.element.addEventListener("ended", function() {
                        b.isPlay = !1
                    }), this.element.addEventListener("error", function() {
                        console.warn(this.src + "の読み込みに失敗しました")
                    }), this.element.volume = 1, tm.isMobile && (this.loaded = !0)
                },
                play: function() {
                    return this.element.play(), this.isPlay = !0, this
                },
                stop: function() {
                    return this.element.pause(), tm.isMobile || (this.element.currentTime = 0), this.isPlay = !1, this
                },
                pause: function() {
                    return this.element.pause(), this
                },
                clone: function() {
                    return tm.sound.Sound(this.element.src)
                }
            }), tm.sound.Sound.prototype.accessor("volume", {
                get: function() {
                    return this.element.volume
                },
                set: function(a) {
                    this.element.volume = a
                }
            }), void 0 !== (new Audio).loop) tm.sound.Sound.prototype.accessor("loop", {
            get: function() {
                return this.element.loop
            },
            set: function(a) {
                this.element.loop = a
            }
        });
        else {
            var a = function() {
                this.play()
            };
            tm.sound.Sound.prototype.accessor("loop", {
                get: function() {
                    return this.element.loop
                },
                set: function(b) {
                    1 != this.element.loop && 1 == b ? this.element.addEventListener("ended", a, !1) : 1 == this.element.loop && 0 == b && this.element.removeEventListener("ended", a, !1), this.element.loop = b
                }
            })
        }
        tm.sound.Sound.SUPPORT_EXT = function() {
            var a = "",
                b = new Audio;
            return "maybe" == b.canPlayType("audio/wav") ? a = "wav" : "maybe" == b.canPlayType("audio/mp3") ? a = "mp3" : "maybe" == b.canPlayType("audio/ogg") && (a = "ogg"), a
        }()
    }(),
    function() {
        var a = tm.isMobile ? 1 : 4;
        tm.sound.SoundManager = {
            sounds: {}
        }, tm.sound.SoundManager.add = function(b, c, d) {
            d = d || a, -1 == c.split("/").at(-1).indexOf(".") && (c += "." + tm.sound.Sound.SUPPORT_EXT);
            for (var e = this.sounds[b] = [], f = 0; d > f; ++f) {
                var g = tm.sound.Sound(c);
                e.push(g)
            }
            return this
        }, tm.sound.SoundManager.get = function(a) {
          console.log("sound is");
          console.log(a);
            for (var b = this.sounds[a], c = 0, d = b.length; d > c; ++c)
                if (0 == b[c].isPlay) return b[c];
            return b[0]
        }, tm.sound.SoundManager.getByIndex = function(a, b) {
            return this.sounds[a][b]
        }, tm.sound.SoundManager.remove = function() {
            return this
        }, tm.sound.SoundManager.setVolume = function() {
            return this
        }, tm.sound.SoundManager.isLoaded = function() {
            for (var a in this.sounds)
                for (var b = this.sounds[a], c = 0, d = b.length; d > c; ++c)
                    if (0 == b[c].loaded) return !1;
            return !0
        }, tm.addLoadCheckList(tm.sound.SoundManager)
    }(), tm.sound = tm.sound || {},
    function() {
        var a = tm.global.webkitAudioContext ? !0 : !1,
            b = a ? new webkitAudioContext : null;
        tm.sound.WebAudio = tm.createClass({
            superClass: tm.event.EventDispatcher,
            loaded: !1,
            context: null,
            panner: null,
            volume: .8,
            init: function(a) {
                this.superInit(), this.context = b;
                var c = typeof a;
                "string" === c ? (this.loaded = !1, this._load(a)) : "object" === c ? (this._setup(), this.buffer = a, this.loaded = !0, this.dispatchEvent(tm.event.Event("load"))) : (this._setup(), this.loaded = !1)
            },
            play: function(a) {
                void 0 === a && (a = 0), 0 == this.source.playbackState && this.source.noteOn(this.context.currentTime + a);
                var b = this,
                    a = this.source.buffer.duration / this.source.playbackRate.value * 1e3;
                return window.setTimeout(function() {
                    var a = tm.event.Event("ended");
                    b.fire(a)
                }, a), this
            },
            stop: function(a) {
                if (void 0 === a && (a = 0), 0 != this.source.playbackState) {
                    this.source.noteOff(this.context.currentTime + a);
                    var b = this.buffer,
                        c = this.volume,
                        d = this.loop;
                    return this.source = this.context.createBufferSource(), this.source.connect(this.panner), this.buffer = b, this.volume = c, this.loop = d, this
                }
            },
            pause: function() {
                return this.source.disconnect(), this
            },
            resume: function() {
                return this.source.connect(this.panner), this
            },
            clone: function() {
                var a = tm.sound.WebAudio(this.buffer);
                return a.volume = this.volume, a
            },
            setPosition: function(a, b, c) {
                return this.panner.setPosition(a, b || 0, c || 0), this
            },
            setVelocity: function(a, b, c) {
                return this.panner.setVelocity(a, b || 0, c || 0), this
            },
            setOrientation: function(a, b, c) {
                return this.panner.setOrientation(a, b || 0, c || 0), this
            },
            setBuffer: function(a) {
                return this.buffer = a, this
            },
            setLoop: function(a) {
                return this.loop = a, this
            },
            setVolume: function(a) {
                return this.volume = a, this
            },
            setPlaybackRate: function(a) {
                return this.playbackRate = a, this
            },
            _load: function(a) {
                if (this.context) {
                    var b = this;
                    tm.util.Ajax.load({
                        type: "GET",
                        url: a,
                        responseType: "arraybuffer",
                        success: function(a) {
                            b.context.decodeAudioData(a, function(a) {
                                b._setup(), b.buffer = a, b.loaded = !0, b.dispatchEvent(tm.event.Event("load"))
                            })
                        }
                    })
                }
            },
            _setup: function() {
                this.source = this.context.createBufferSource(), this.panner = this.context.createPanner(), this.analyser = this.context.createAnalyser(), this.source.connect(this.panner), this.panner.connect(this.analyser), this.analyser.connect(this.context.destination)
            },
            tone: function(a, b) {
                a = void 0 !== a ? a : 200, b = void 0 !== b ? b : 1;
                for (var c = 1, d = 44100, e = 2, f = this.context.createBuffer(c, b * d, d), g = f.getChannelData(0), h = 0; h < g.length; h++) {
                    var i = h / f.sampleRate,
                        j = a * i * Math.PI;
                    g[h] = Math.sin(j) * e
                }
                return this.buffer = f, this
            }
        }), tm.sound.WebAudio.prototype.accessor("buffer", {
            get: function() {
                return this.source.buffer
            },
            set: function(a) {
                this.source.buffer = a
            }
        }), tm.sound.WebAudio.prototype.accessor("loop", {
            get: function() {
                return this.source.loop
            },
            set: function(a) {
                this.source.loop = a
            }
        }), tm.sound.WebAudio.prototype.accessor("volume", {
            get: function() {
                return this.source.gain.value
            },
            set: function(a) {
                this.source.gain.value = a
            }
        }), tm.sound.WebAudio.prototype.accessor("playbackRate", {
            get: function() {
                return this.source.playbackRate.value
            },
            set: function(a) {
                this.source.playbackRate.value = a
            }
        }), tm.sound.WebAudio.isAvailable = tm.global.webkitAudioContext ? !0 : !1
    }(), tm.social = tm.social || {},
    function() {
        tm.social.Twitter = tm.social.Twitter || {}, tm.social.Twitter.API_URL = "http://api.twitter.com/1";
        var a = "http://twitter.com/intent";
        tm.social.Twitter.createURL = function(b) {
            var c = [];
            for (var d in b)
                if ("type" != d) {
                    var e = encodeURIComponent(b[d]),
                        f = d + "=" + e;
                    c.push(f)
                }
            var g = "{baseURL}/{type}?{param}".format({
                baseURL: a,
                type: b.type,
                param: c.join("&")
            });
            return g
        }
    }(),
    function() {
        var a = "http://api.twitter.com/1/{type}/{kind}.json";
        tm.social.Twitter.api = function(b, c, d, e) {
            var f = a.format({
                    type: b,
                    kind: c
                }),
                g = tm.util.QueryString.stringify(d);
            tm.util.Ajax.loadJSONP(f + "?" + g, e)
        }
    }(),
    function() {
        var a = "http://search.twitter.com/search.json";
        tm.social.Twitter.search = function(b, c) {
            var d = a,
                e = tm.util.QueryString.stringify(b);
            tm.util.Ajax.loadJSONP(d + "?" + e, c)
        }
    }(),
    function() {
        tm.social.Twitter.getFollowers = function(a, b) {
            tm.social.Twitter.api("statuses", "followers", a, b)
        }
    }(), tm.social = tm.social || {},
    function() {
        tm.social.Nineleap = tm.social.Nineleap || {};
        var a = "http://9leap.net/games/{id}/result?score={score}&result={result}";
        tm.social.Nineleap.createURL = function(b, c, d) {
            return a.format({
                id: b,
                score: c,
                result: d
            })
        }, tm.social.Nineleap.postRanking = function(a, b) {
            if ("r.jsgames.jp" == location.hostname) {
                var c = location.pathname.match(/^\/games\/(\d+)/)[1];
                location.replace(this.createURL(c, a, b))
            } else console.warn("9leap に投稿されていません!")
        }
    }(), tm.google = tm.google || {},
    function() {
        tm.google.Chart = tm.google.Chart || {};
        var a = "https://chart.googleapis.com/chart?chst={type}&chld={data}",
            b = "https://chart.googleapis.com/chart?chs={size}&cht={type}&chl={text}&chco={color}";
        tm.google.Chart.createDynamicIcons = function(b, c) {
            return a.format({
                type: b,
                data: c
            })
        }, tm.google.Chart.createQRCode = function(a, c) {
            return c = encodeURIComponent(c), b.format({
                type: "qr",
                size: a,
                text: c
            })
        }, tm.google.Chart.createTeX = function() {}
    }(),
    function() {
        tm.app.Element.prototype.getter("interaction", function() {
            console.assert(!1, "interaction は Object2d に統合されました. obj.setInteractive(true); とすればタッチ判定が有効になります.")
        });
        var a = {
            display: ["Sprite", "Shape", "CircleShape", "TriangleShape", "RectangleShape", "RoundRectangleShape", "StarShape", "PolygonShape", "HeartShape", "TextShape", "CanvasRenderer", "BoundingRectRenderer", "Label", "MapSprite", "CanvasElement", "CanvasApp", "AnimationSprite", "SpriteSheet"],
            ui: ["LabelButton", "IconButton", "GlossyButton", "FlatButton", "LoadingScene"]
        };
        for (var b in a) {
            var c = a[b];
            c.each(function(a) {
                tm.app[a] = tm[b][a]
            })
        }
        tm.asset.AssetManager = tm.asset.Manager
    }();
