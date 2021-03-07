(function (t) {
  function e(e) {
    for (
      var r, o, s = e[0], c = e[1], l = e[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (o = s[d]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
        (i[o] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
    u && u(e);
    while (p.length) p.shift()();
    return n.push.apply(n, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < n.length; e++) {
      for (var a = n[e], r = !0, s = 1; s < a.length; s++) {
        var c = a[s];
        0 !== i[c] && (r = !1);
      }
      r && (n.splice(e--, 1), (t = o((o.s = a[0]))));
    }
    return t;
  }
  var r = {},
    i = { app: 0 },
    n = [];
  function o(e) {
    if (r[e]) return r[e].exports;
    var a = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = t),
    (o.c = r),
    (o.d = function (t, e, a) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (o.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          o.d(
            a,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return a;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default'];
            }
          : function () {
              return t;
            };
      return o.d(e, 'a', e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = '/korean-rainbow-united/');
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = s.push.bind(s);
  (s.push = e), (s = s.slice());
  for (var l = 0; l < s.length; l++) e(s[l]);
  var u = c;
  n.push([0, 'chunk-vendors']), a();
})({
  0: function (t, e, a) {
    t.exports = a('56d7');
  },
  '06f3': function (t, e, a) {
    t.exports =
      a.p +
      'img/thumb-1935553555_7bTOmqvF_a3d2a5b58c04f5a1ebc7dbd63a5e8e4bb80509e9_400x0.bd24182c.jpg';
  },
  '0c06': function (t, e, a) {
    t.exports =
      a.p +
      'img/thumb-3556132028_QPeA56wu_c7f9c088eda6b32c992dddbf58de2acb6538dc09_400x0.6080d91a.png';
  },
  '56d7': function (t, e, a) {
    'use strict';
    a.r(e);
    a('e623'), a('e379'), a('5dc8'), a('37e1');
    var r = a('2b0e'),
      i = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          'v-app',
          { attrs: { id: 'inspire' } },
          [
            r(
              'v-app-bar',
              {
                attrs: {
                  app: '',
                  'clipped-right': '',
                  flat: '',
                  src: a('6a40'),
                },
              },
              [
                r(
                  'v-toolbar-title',
                  {
                    staticStyle: { color: '#fff', cursor: 'pointer' },
                    on: {
                      click: function (e) {
                        return t.$router.push('/');
                      },
                    },
                  },
                  [t._v(' Korean Rainbow United ')]
                ),
                r('v-spacer'),
                t._l(t.items, function (e) {
                  return r(
                    'v-toolbar-items',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: !t.isMobile,
                          expression: '!isMobile',
                        },
                      ],
                      key: e.title,
                      attrs: { 'd-flex': '' },
                    },
                    [
                      r(
                        'v-btn',
                        {
                          attrs: {
                            color: '#fff',
                            to: e.to,
                            id: 'logo',
                            text: '',
                            depressed: '',
                          },
                        },
                        [t._v(t._s(e.title))]
                      ),
                    ],
                    1
                  );
                }),
                r('v-spacer'),
                r('v-app-bar-nav-icon', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: t.isMobile,
                      expression: 'isMobile',
                    },
                  ],
                  attrs: { color: '#fff' },
                  on: {
                    click: function (e) {
                      t.drawer = !t.drawer;
                    },
                  },
                }),
              ],
              2
            ),
            r(
              'v-navigation-drawer',
              {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: t.isMobile,
                    expression: 'isMobile',
                  },
                ],
                staticClass: 'd-flex d-sm-none',
                attrs: { app: '', clipped: '', right: '' },
                model: {
                  value: t.drawer,
                  callback: function (e) {
                    t.drawer = e;
                  },
                  expression: 'drawer',
                },
              },
              [
                r(
                  'v-list',
                  t._l(t.items, function (e) {
                    return r(
                      'v-list-item',
                      { key: e.title, attrs: { to: e.to, link: '' } },
                      [
                        r(
                          'v-list-item-icon',
                          [r('v-icon', [t._v(t._s(e.icon))])],
                          1
                        ),
                        r(
                          'v-list-item-content',
                          [r('v-list-item-title', [t._v(t._s(e.title))])],
                          1
                        ),
                      ],
                      1
                    );
                  }),
                  1
                ),
              ],
              1
            ),
            r(
              'v-container',
              { staticClass: 'mt-15', attrs: { fluid: '' } },
              [r('router-view')],
              1
            ),
            r(
              'v-footer',
              {
                staticClass: 'mt-10',
                attrs: { app: '', dark: '', padless: '' },
              },
              [
                r(
                  'v-card',
                  {
                    staticClass: 'white--text text-center',
                    attrs: { flat: '', tile: '' },
                  },
                  [
                    r(
                      'v-card-text',
                      t._l(t.icons, function (e) {
                        return r(
                          'v-btn',
                          {
                            key: e,
                            staticClass: 'mx-4 white--text',
                            attrs: { icon: '' },
                          },
                          [
                            r('v-icon', { attrs: { size: '24px' } }, [
                              t._v(' ' + t._s(e) + ' '),
                            ]),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                    r('v-card-text', { staticClass: 'white--text' }, [
                      t._v(' ' + t._s(new Date().getFullYear()) + ' — '),
                      r('strong', [t._v('Korean Rainbow United')]),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      n = [],
      o = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'v-footer',
          { attrs: { dark: '', padless: '' } },
          [
            a(
              'v-card',
              {
                staticClass: 'indigo lighten-1 white--text text-center',
                attrs: { flat: '', tile: '' },
              },
              [
                a(
                  'v-card-text',
                  t._l(t.icons, function (e) {
                    return a(
                      'v-btn',
                      {
                        key: e,
                        staticClass: 'mx-4 white--text',
                        attrs: { icon: '' },
                      },
                      [
                        a('v-icon', { attrs: { size: '24px' } }, [
                          t._v(' ' + t._s(e) + ' '),
                        ]),
                      ],
                      1
                    );
                  }),
                  1
                ),
                a('v-card-text', { staticClass: 'white--text pt-0' }, [
                  t._v(' Lorem ipsum dolor sit amet '),
                ]),
                a('v-divider'),
                a('v-card-text', { staticClass: 'white--text' }, [
                  t._v(' ' + t._s(new Date().getFullYear()) + ' — '),
                  a('strong', [t._v('Vuetify')]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      s = [],
      c = a('2877'),
      l = a('6544'),
      u = a.n(l),
      d = a('8336'),
      p = a('b0af'),
      v = a('99d9'),
      f = a('ce7e'),
      m = a('553a'),
      b = a('132d'),
      h = {},
      _ = Object(c['a'])(h, o, s, !1, null, null, null),
      w = _.exports;
    u()(_, {
      VBtn: d['a'],
      VCard: p['a'],
      VCardText: v['a'],
      VDivider: f['a'],
      VFooter: m['a'],
      VIcon: b['a'],
    });
    var x = {
        name: 'App',
        components: { Footer: w },
        data: function () {
          return {
            isMobile: !1,
            drawer: null,
            items: [
              { title: 'About Us', icon: 'mdi-calendar', to: '/about' },
              { title: 'News', icon: 'mdi-lead-pencil', to: '/news' },
              {
                title: 'Contact Us',
                icon: 'mdi-book-open-variant',
                to: '/contact',
              },
            ],
            icons: [
              'mdi-facebook',
              'mdi-twitter',
              'mdi-linkedin',
              'mdi-instagram',
            ],
          };
        },
        beforeDestroy: function () {
          'undefined' !== typeof window &&
            window.removeEventListener('resize', this.onResize, {
              passive: !0,
            });
        },
        mounted: function () {
          this.onResize(),
            window.addEventListener('resize', this.onResize, { passive: !0 });
        },
        methods: {
          onResize: function () {
            this.isMobile = window.innerWidth < 600;
          },
        },
      },
      g = x,
      y = a('7496'),
      V = a('40dc'),
      C = a('5bc1'),
      k = a('a523'),
      j = a('8860'),
      O = a('da13'),
      S = a('5d23'),
      E = a('34c3'),
      T = a('f774'),
      z = a('2fa4'),
      M = a('2a7f'),
      $ = Object(c['a'])(g, i, n, !1, null, '0cefb641', null),
      I = $.exports;
    u()($, {
      VApp: y['a'],
      VAppBar: V['a'],
      VAppBarNavIcon: C['a'],
      VBtn: d['a'],
      VCard: p['a'],
      VCardText: v['a'],
      VContainer: k['a'],
      VFooter: m['a'],
      VIcon: b['a'],
      VList: j['a'],
      VListItem: O['a'],
      VListItemContent: S['a'],
      VListItemIcon: E['a'],
      VListItemTitle: S['b'],
      VNavigationDrawer: T['a'],
      VSpacer: z['a'],
      VToolbarItems: M['a'],
      VToolbarTitle: M['b'],
    });
    var P = a('8c4f'),
      R = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'div',
          { staticClass: 'home' },
          [
            a(
              'v-container',
              [a('slider', { staticClass: 'slider' }), a('supporters')],
              1
            ),
          ],
          1
        );
      },
      L = [],
      A = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          'v-carousel',
          {
            attrs: { cycle: '' },
            model: {
              value: t.model,
              callback: function (e) {
                t.model = e;
              },
              expression: 'model',
            },
          },
          t._l(t.colors, function (e, r) {
            return a(
              'v-carousel-item',
              { key: e },
              [
                a(
                  'v-sheet',
                  { attrs: { color: e, height: '100%', tile: '' } },
                  [
                    a(
                      'v-row',
                      {
                        staticClass: 'fill-height',
                        attrs: { align: 'center', justify: 'center' },
                      },
                      [
                        a('div', { staticClass: 'display-3' }, [
                          t._v('Slide ' + t._s(r + 1)),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          }),
          1
        );
      },
      F = [],
      N = {
        data: function () {
          return {
            model: 0,
            colors: [
              'primary',
              'secondary',
              'yellow darken-2',
              'red',
              'orange',
            ],
          };
        },
      },
      U = N,
      B = a('5e66'),
      D = a('3e35'),
      q = a('0fd9b'),
      H = a('8dd9'),
      J = Object(c['a'])(U, A, F, !1, null, '17c24d38', null),
      K = J.exports;
    u()(J, {
      VCarousel: B['a'],
      VCarouselItem: D['a'],
      VRow: q['a'],
      VSheet: H['a'],
    });
    var W = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          'div',
          { staticClass: 'mt-15' },
          [
            t._m(0),
            r(
              'VueSlickCarousel',
              t._b({}, 'VueSlickCarousel', t.settings, !1),
              [
                r(
                  'div',
                  [
                    r(
                      'v-avatar',
                      { attrs: { tile: '', size: '150' } },
                      [
                        r('v-img', {
                          attrs: {
                            src: a('06f3'),
                            height: '150',
                            width: '150',
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                r(
                  'div',
                  [
                    r(
                      'v-avatar',
                      { attrs: { tile: '', size: '150' } },
                      [
                        r('v-img', {
                          attrs: {
                            src: a('78e1'),
                            height: '150',
                            width: '150',
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                r(
                  'div',
                  [
                    r(
                      'v-avatar',
                      { attrs: { tile: '', size: '150' } },
                      [
                        r('v-img', {
                          attrs: {
                            src: a('869a'),
                            height: '150',
                            width: '150',
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                r(
                  'div',
                  [
                    r(
                      'v-avatar',
                      { attrs: { tile: '', size: '150' } },
                      [
                        r('v-img', {
                          attrs: {
                            src: a('0c06'),
                            height: '150',
                            width: '150',
                            to: '/',
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            ),
          ],
          1
        );
      },
      Y = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'd-flex justify-center mb-10' }, [
            a('h1', [t._v('OUR SUPPORTERS')]),
          ]);
        },
      ],
      Q = a('a7ab'),
      G = a.n(Q),
      X =
        (a('7b8d'),
        a('6a2c'),
        {
          data: function () {
            return {
              settings: {
                centerMode: !0,
                focusOnSelect: !0,
                infinite: !0,
                slidesToShow: 3,
                autoplay: !0,
                speed: 2e3,
                autoplaySpeed: 2e3,
              },
            };
          },
          name: 'Supporters',
          components: { VueSlickCarousel: G.a },
        }),
      Z = X,
      tt = a('8212'),
      et = a('adda'),
      at = Object(c['a'])(Z, W, Y, !1, null, null, null),
      rt = at.exports;
    u()(at, { VAvatar: tt['a'], VImg: et['a'] });
    var it = { name: 'Home', components: { Slider: K, Supporters: rt } },
      nt = it,
      ot = Object(c['a'])(nt, R, L, !1, null, null, null),
      st = ot.exports;
    u()(ot, { VContainer: k['a'] });
    var ct = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', [t._v(' Contact ')]);
      },
      lt = [],
      ut = {},
      dt = ut,
      pt = Object(c['a'])(dt, ct, lt, !1, null, '7b978bde', null),
      vt = pt.exports,
      ft = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      mt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a('div', { staticClass: 'about' }, [
            a('h1', [t._v('This is an about page')]),
          ]);
        },
      ],
      bt = {},
      ht = Object(c['a'])(bt, ft, mt, !1, null, null, null),
      _t = ht.exports,
      wt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a('div', [t._v(' this is news ')]);
      },
      xt = [],
      gt = {},
      yt = gt,
      Vt = Object(c['a'])(yt, wt, xt, !1, null, '55524e95', null),
      Ct = Vt.exports;
    r['a'].use(P['a']);
    var kt = [
        { path: '/', name: 'Home', component: st },
        { path: '/about', name: 'About', component: _t },
        { path: '/contact', name: 'Contact', component: vt },
        { path: '/news', name: 'News', component: Ct },
      ],
      jt = new P['a']({ routes: kt }),
      Ot = jt,
      St = a('2f62');
    r['a'].use(St['a']);
    var Et = new St['a'].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      }),
      Tt = a('f309');
    r['a'].use(Tt['a']);
    var zt = new Tt['a']({});
    (r['a'].config.productionTip = !1),
      new r['a']({
        router: Ot,
        store: Et,
        vuetify: zt,
        render: function (t) {
          return t(I);
        },
      }).$mount('#app');
  },
  '6a40': function (t, e, a) {
    t.exports = a.p + 'img/rainbow-colors-background.1ea5b979.jpg';
  },
  '78e1': function (t, e, a) {
    t.exports =
      a.p +
      'img/thumb-1935553555_crBW4kSz_2c13261790d92be25c0faa1c0158bcd7045d7c86_400x0.dd59fb99.jpg';
  },
  '869a': function (t, e, a) {
    t.exports =
      a.p +
      'img/thumb-3068397611_hE2UcFsp_33bf10cb80029aad92618c8f04c959561e2a65e9_400x0.d7c30373.jpg';
  },
});
//# sourceMappingURL=app.04d7a242.js.map
