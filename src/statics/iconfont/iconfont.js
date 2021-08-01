!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    d =
      '<svg><symbol id="icon-Aa" viewBox="0 0 1024 1024"><path d="M680.75 849.5H591.5375l-63.73125-184.78125H267.5375L207.35 849.5H118.25l238.05-675h86.34375L680.75 849.5zM502.71875 588.44375L408.33125 307.8125c-2.98125-8.94375-6.1875-24.69375-9.675-47.025h-2.025c-2.98125 20.3625-6.35625 36-10.06875 47.025L292.90625 588.44375h209.8125z m205.3125 4.8375C735.875 576.575 768.05 568.25 804.44375 568.25c67.5 0 101.25 33.975 101.25 101.98125v172.9125h-49.10625v-41.5125h-1.2375c-19.40625 31.95-47.98125 47.86875-85.78125 47.86875-27.225 0-48.76875-7.03125-64.8-21.15-16.03125-14.0625-24.075-33.13125-24.075-57.0375 0-50.2875 30.99375-79.425 92.86875-87.75l83.025-11.1375c0-43.875-18.9-65.8125-56.7-65.8125-33.58125 0-64.18125 10.8-91.85625 32.5125v-45.84375z m83.025 123.6375c-22.95 2.925-38.75625 8.38125-47.475 16.5375-8.71875 8.1-12.99375 19.40625-12.99375 33.975 0 12.76875 4.725 23.175 14.175 31.33125 9.45 8.1 21.9375 12.15 37.40625 12.15 21.65625 0 39.43125-7.3125 53.4375-21.88125 13.95-14.56875 20.98125-32.85 20.98125-54.9v-25.7625l-65.53125 8.55z"  ></path></symbol><symbol id="icon-fangdajing" viewBox="0 0 1024 1024"><path d="M961.342 950.21c-11.211 11.005-29.444 11.005-40.663 0L690.544 723.717c-64.236 51.257-145.998 82.106-235.123 82.106-206.295 0-373.535-164.567-373.535-367.641 0-202.999 167.24-367.575 373.535-367.575 206.295 0 373.539 164.577 373.539 367.575 0 94.944-36.888 181.2-96.908 246.406l229.29 225.581a28.013 28.013 0 0 1 0 40.04zM455.42 127.195c-174.532 0-316.103 139.266-316.103 310.987 0 171.798 141.576 311.062 316.103 311.062 174.602 0 316.113-139.265 316.113-311.062 0.001-171.721-141.511-310.987-316.113-310.987z m0 0"  ></path></symbol><symbol id="icon-yumaobi" viewBox="0 0 1072 1024"><path d="M69.095619 999.862857c121.904762-365.714286 440.905143-975.238095 975.238095-975.238095-250.441143 200.94781-365.714286 670.47619-548.571428 670.47619h-182.857143l-182.857143 304.761905h-60.952381z" fill="#666666" ></path></symbol></svg>',
    l = (l = document.getElementsByTagName("script"))[
      l.length - 1
    ].getAttribute("data-injectcss"),
    a = function (e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    c || ((c = !0), o());
  }
  function m() {
    try {
      i.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(m, 50);
    }
    s();
  }
  (t = function () {
    var e, t;
    ((t = document.createElement("div")).innerHTML = d),
      (d = null),
      (e = t.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (e = document.body).firstChild ? a(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        m(),
        (i.onreadystatechange = function () {
          "complete" == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
