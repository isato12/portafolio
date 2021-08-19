/*!
 * jQuery Smoove v0.2.10 (http://smoove.js.org/)
 * Copyright (c) 2017 Adam Bouqdib
 * Licensed under GPL-2.0 (http://abemedia.co.uk/license)
 */

// !(function (a, b, c) {
//   function d(a, b, c) {
//     function d(a) {
//       return a.charAt(0).toUpperCase() + a.slice(1);
//     }
//     for (var e = ["webkit", "moz", "ms", "o"], f = {}, g = 0; g < e.length; g++)
//       c && (b = b.replace(c, "-" + e[g] + "-" + c)), (f[d(e[g]) + d(a)] = b);
//     return (f[a] = b), f;
//   }
//   function e(c) {
//     for (
//       var e = a(b).height(), f = a(b).width(), g = 0;
//       g < a.fn.smoove.items.length;
//       g++
//     ) {
//       var h = a.fn.smoove.items[g],
//         i = h.params;
//       if (i.min_width > f || i.min_height > e) return !1;
//       var j = !c || ("down" === c && "1" === h.css("opacity")) ? 0 : i.offset,
//         k = a(b).scrollTop() + e - h.data("top");
//       if (
//         ("string" == typeof j &&
//           j.indexOf("%") &&
//           (j = (parseInt(j) / 100) * e),
//         k < j)
//       ) {
//         !1 !== i.opacity && h.css({ opacity: i.opacity });
//         for (
//           var l = [],
//             m = [
//               "move",
//               "move3D",
//               "moveX",
//               "moveY",
//               "moveZ",
//               "rotate",
//               "rotate3d",
//               "rotateX",
//               "rotateY",
//               "rotateZ",
//               "scale",
//               "scale3d",
//               "scaleX",
//               "scaleY",
//               "skew",
//               "skewX",
//               "skewY",
//             ],
//             n = 0;
//           n < m.length;
//           n++
//         )
//           void 0 !== i[m[n]] && (l[m[n]] = i[m[n]]);
//         var o = "";
//         for (var p in l)
//           o += p.replace("move", "translate") + "(" + l[p] + ") ";
//         o &&
//           (h.css(d("transform", o)),
//           h.parent().css(d("perspective", i.perspective)),
//           i.transformOrigin && h.css(d("transformOrigin", i.transformOrigin)));
//       } else h.css("opacity", 1).css(d("transform", ""));
//     }
//   }
//   (a.fn.smoove = function (b) {
//     return a.fn.smoove.init(this, a.extend({}, a.fn.smoove.defaults, b)), this;
//   }),
//     (a.fn.smoove.items = []),
//     (a.fn.smoove.loaded = !1),
//     (a.fn.smoove.defaults = {
//       offset: 150,
//       opacity: 0,
//       transition: "all 1s ease, opacity 1.5s ease",
//       transformStyle: "preserve-3d",
//       transformOrigin: !1,
//       perspective: 1e3,
//       min_width: 768,
//       min_height: !1,
//     }),
//     (a.fn.smoove.init = function (f, g) {
//       if (
//         (f.each(function () {
//           var b = a(this),
//             c = (b.params = a.extend({}, g, b.data()));
//           (b.params.opacity = b.params.opacity / 100),
//             b.data("top", b.offset().top),
//             (c.transition = d("transition", c.transition, "transform")),
//             b.css(c.transition),
//             a.fn.smoove.items.push(b);
//         }),
//         !a.fn.smoove.loaded)
//       ) {
//         a.fn.smoove.loaded = !0;
//         var h,
//           i = !1,
//           j = 0,
//           k = a(b).height(),
//           l = a(b).width(),
//           m = a(c).height();
//         a("body").width() === a(b).width() &&
//           a("body").css("overflow-x", "hidden"),
//           a(b).resize(function () {
//             clearTimeout(h),
//               (h = setTimeout(function () {
//                 var f = a(b).height(),
//                   g = a(b).width(),
//                   h = k > f ? (h = "up") : "down",
//                   i = a.fn.smoove.items;
//                 if (((k = f), l !== g)) {
//                   for (var j = 0; j < i.length; j++)
//                     i[j].css(d("transform", "")).css(d("transition", ""));
//                   var n = setInterval(function () {
//                     var d = a(c).height();
//                     if (d === m) {
//                       b.clearInterval(n);
//                       for (var f = 0; f < i.length; f++)
//                         i[f].data("top", i[f].offset().top),
//                           i[f].css(i[f].params.transition);
//                       e(h);
//                     }
//                     m = d;
//                   }, 500);
//                 } else e(h);
//                 l = g;
//               }, 500));
//           }),
//           a(b).on("load", function () {
//             e(),
//               a(b).scroll(function () {
//                 i = !0;
//               }),
//               setInterval(function () {
//                 if (i) {
//                   i = !1;
//                   var c = a(b).scrollTop(),
//                     d = c < j ? (d = "up") : "down";
//                   (j = c), e(d);
//                 }
//               }, 250);
//           });
//       }
//     });
// })(jQuery, window, document);

//efectos scroll

