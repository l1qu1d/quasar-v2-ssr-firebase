void 0 === process.env.NODE_ENV && (process.env.NODE_ENV = "production"),
  (() => {
    var e = {
        118: (e) => {
          e.exports.UY = function (e) {
            return e;
          };
        },
        660: (e, r, t) => {
          "use strict";
          t.r(r), t.d(r, { default: () => s });
          const n = require("compression");
          var o = t.n(n);
          const s = (0, t(118).UY)(({ app: e }) => {
            e.use(o()({ threshold: 0 }));
          });
        },
        100: (e, r, t) => {
          "use strict";
          t.r(r), t.d(r, { default: () => n });
          const n = (0, t(118).UY)(
            ({ app: e, resolve: r, render: t, serve: n }) => {
              e.get(r.urlPath("*"), (e, r) => {
                r.setHeader("Content-Type", "text/html"),
                  t({ req: e, res: r })
                    .then((e) => {
                      r.send(e);
                    })
                    .catch((e) => {
                      e.url
                        ? e.code
                          ? r.redirect(e.code, e.url)
                          : r.redirect(e.url)
                        : 404 === e.code
                        ? r.status(404).send("404 | Page Not Found")
                        : r.status(500).send("500 | Internal Server Error");
                    });
              });
            }
          );
        },
      },
      r = {};
    function t(n) {
      var o = r[n];
      if (void 0 !== o) return o.exports;
      var s = (r[n] = { exports: {} });
      return e[n](s, s.exports, t), s.exports;
    }
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
      (t.d = (e, r) => {
        for (var n in r)
          t.o(r, n) &&
            !t.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
      }),
      (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (t.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    (() => {
      "use strict";
      t.r(n);
      const e = require("path"),
        r = require("express");
      var o = t.n(r);
      const s = require("@vue/server-renderer"),
        a = require("@quasar/ssr-helpers/create-renderer");
      var i = t.n(a);
      const u = require("./render-template.js");
      var d = t.n(u);
      const c = require("./quasar.server-manifest.json");
      var l = t.n(c);
      const v = require("./quasar.client-manifest.json");
      var p = t.n(v);
      const m = o()(),
        f = (e) => e || "/",
        h = __dirname,
        g = (0, e.join)(__dirname, "www");
      function b() {
        return (0, e.join)(g, ...arguments);
      }
      const q = (e, r = {}) =>
          o().static(b(e), {
            ...r,
            maxAge: void 0 === r.maxAge ? 2592e6 : r.maxAge,
          }),
        y = i()({
          vueRenderToString: s.renderToString,
          basedir: __dirname,
          serverManifest: l(),
          clientManifest: p(),
        });
      var P;
      m.use(f("/"), q(".")),
        ((P = {
          app: m,
          resolve: {
            urlPath: f,
            root() {
              return (0, e.join)(h, ...arguments);
            },
            public: b,
          },
          publicPath: "/",
          folders: { root: h, public: g },
          render: (e) => y(e, d()),
          serve: { static: q },
        }),
        Promise.all([
          Promise.resolve().then(t.bind(t, 660)),
          Promise.resolve().then(t.bind(t, 100)),
        ]).then(async (e) => {
          const r = e.map((e) => e.default);
          for (let e = 0; e < r.length; e++)
            try {
              await r[e](P);
            } catch (e) {
              return void console.error("[Quasar SSR] middleware error:", e);
            }
        }));
      exports.handler = m;
    })();
  })();
