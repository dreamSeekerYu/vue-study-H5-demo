/* eslint-disable */
import EXIF from 'exif-js'

function h(s) {
  var u = this;
  var K = Math.round;
  var S = Math.floor;
  var o = new Array(64);
  var R = new Array(64);
  var Y = new Array(64);
  var af = new Array(64);
  var I;
  var p;
  var y;
  var ab;
  var Q = new Array(65535);
  var t = new Array(65535);
  var W = new Array(64);
  var Z = new Array(64);
  var q = [];
  var J = 0;
  var i = 7;
  var L = new Array(64);
  var l = new Array(64);
  var ac = new Array(64);
  var m = new Array(256);
  var M = new Array(2048);
  var H;
  var V = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63];
  var n = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
  var j = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var G = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125];
  var A = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  var F = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  var ag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var v = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119];
  var C = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

  function T(ao) {
    var an = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99];
    for (var am = 0; am < 64; am++) {
      var ar = S((an[am] * ao + 50) / 100);
      if (ar < 1) {
        ar = 1
      } else {
        if (ar > 255) {
          ar = 255
        }
      }
      o[V[am]] = ar
    }
    var ap = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
    for (var al = 0; al < 64; al++) {
      var aq = S((ap[al] * ao + 50) / 100);
      if (aq < 1) {
        aq = 1
      } else {
        if (aq > 255) {
          aq = 255
        }
      }
      R[V[al]] = aq
    }
    var ak = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379];
    var aj = 0;
    for (var at = 0; at < 8; at++) {
      for (var ai = 0; ai < 8; ai++) {
        Y[aj] = (1 / (o[V[aj]] * ak[at] * ak[ai] * 8));
        af[aj] = (1 / (R[V[aj]] * ak[at] * ak[ai] * 8));
        aj++
      }
    }
  }

  function P(am, an) {
    var al = 0;
    var ao = 0;
    var ak = new Array();
    for (var ai = 1; ai <= 16; ai++) {
      for (var aj = 1; aj <= am[ai]; aj++) {
        ak[an[ao]] = [];
        ak[an[ao]][0] = al;
        ak[an[ao]][1] = ai;
        ao++;
        al++
      }
      al *= 2
    }
    return ak
  }

  function ae() {
    I = P(n, j);
    p = P(F, ag);
    y = P(G, A);
    ab = P(v, C)
  }

  function D() {
    var aj = 1;
    var al = 2;
    for (var ai = 1; ai <= 15; ai++) {
      for (var ak = aj; ak < al; ak++) {
        t[32767 + ak] = ai;
        Q[32767 + ak] = [];
        Q[32767 + ak][1] = ai;
        Q[32767 + ak][0] = ak
      }
      for (var am = -(al - 1); am <= -aj; am++) {
        t[32767 + am] = ai;
        Q[32767 + am] = [];
        Q[32767 + am][1] = ai;
        Q[32767 + am][0] = al - 1 + am
      }
      aj <<= 1;
      al <<= 1
    }
  }

  function ad() {
    for (var ai = 0; ai < 256; ai++) {
      M[ai] = 19595 * ai;
      M[(ai + 256) >> 0] = 38470 * ai;
      M[(ai + 512) >> 0] = 7471 * ai + 32768;
      M[(ai + 768) >> 0] = -11059 * ai;
      M[(ai + 1024) >> 0] = -21709 * ai;
      M[(ai + 1280) >> 0] = 32768 * ai + 8421375;
      M[(ai + 1536) >> 0] = -27439 * ai;
      M[(ai + 1792) >> 0] = -5329 * ai
    }
  }

  function ah(aj) {
    var ak = aj[0];
    var ai = aj[1] - 1;
    while (ai >= 0) {
      if (ak & (1 << ai)) {
        J |= (1 << i)
      }
      ai--;
      i--;
      if (i < 0) {
        if (J == 255) {
          z(255);
          z(0)
        } else {
          z(J)
        }
        i = 7;
        J = 0
      }
    }
  }

  function z(ai) {
    q.push(m[ai])
  }

  function O(ai) {
    z((ai >> 8) & 255);
    z((ai) & 255)
  }

  function U(a6, aD) {
    var aU, aT, aS, aR, aQ, aO, aN, aL;
    var aX = 0;
    var aZ;
    const aC = 8;
    const aw = 64;
    for (aZ = 0; aZ < aC; ++aZ) {
      aU = a6[aX];
      aT = a6[aX + 1];
      aS = a6[aX + 2];
      aR = a6[aX + 3];
      aQ = a6[aX + 4];
      aO = a6[aX + 5];
      aN = a6[aX + 6];
      aL = a6[aX + 7];
      var a7 = aU + aL;
      var aW = aU - aL;
      var a5 = aT + aN;
      var aY = aT - aN;
      var a4 = aS + aO;
      var a0 = aS - aO;
      var a3 = aR + aQ;
      var a1 = aR - aQ;
      var aA = a7 + a3;
      var ax = a7 - a3;
      var az = a5 + a4;
      var ay = a5 - a4;
      a6[aX] = aA + az;
      a6[aX + 4] = aA - az;
      var aI = (ay + ax) * 0.707106781;
      a6[aX + 2] = ax + aI;
      a6[aX + 6] = ax - aI;
      aA = a1 + a0;
      az = a0 + aY;
      ay = aY + aW;
      var aE = (aA - ay) * 0.382683433;
      var aH = 0.5411961 * aA + aE;
      var aF = 1.306562965 * ay + aE;
      var aG = az * 0.707106781;
      var at = aW + aG;
      var ar = aW - aG;
      a6[aX + 5] = ar + aH;
      a6[aX + 3] = ar - aH;
      a6[aX + 1] = at + aF;
      a6[aX + 7] = at - aF;
      aX += 8
    }
    aX = 0;
    for (aZ = 0; aZ < aC; ++aZ) {
      aU = a6[aX];
      aT = a6[aX + 8];
      aS = a6[aX + 16];
      aR = a6[aX + 24];
      aQ = a6[aX + 32];
      aO = a6[aX + 40];
      aN = a6[aX + 48];
      aL = a6[aX + 56];
      var av = aU + aL;
      var aB = aU - aL;
      var ap = aT + aN;
      var aJ = aT - aN;
      var am = aS + aO;
      var aM = aS - aO;
      var aj = aR + aQ;
      var a2 = aR - aQ;
      var au = av + aj;
      var ai = av - aj;
      var ao = ap + am;
      var al = ap - am;
      a6[aX] = au + ao;
      a6[aX + 32] = au - ao;
      var aq = (al + ai) * 0.707106781;
      a6[aX + 16] = ai + aq;
      a6[aX + 48] = ai - aq;
      au = a2 + aM;
      ao = aM + aJ;
      al = aJ + aB;
      var aV = (au - al) * 0.382683433;
      var an = 0.5411961 * au + aV;
      var a9 = 1.306562965 * al + aV;
      var ak = ao * 0.707106781;
      var a8 = aB + ak;
      var aK = aB - ak;
      a6[aX + 40] = aK + an;
      a6[aX + 24] = aK - an;
      a6[aX + 8] = a8 + a9;
      a6[aX + 56] = a8 - a9;
      aX++
    }
    var aP;
    for (aZ = 0; aZ < aw; ++aZ) {
      aP = a6[aZ] * aD[aZ];
      W[aZ] = (aP > 0) ? ((aP + 0.5) | 0) : ((aP - 0.5) | 0)
    }
    return W
  }

  function aa() {
    O(65504);
    O(16);
    z(74);
    z(70);
    z(73);
    z(70);
    z(0);
    z(1);
    z(1);
    z(0);
    O(1);
    O(1);
    z(0);
    z(0)
  }

  function N(aj, ai) {
    O(65472);
    O(17);
    z(8);
    O(ai);
    O(aj);
    z(3);
    z(1);
    z(17);
    z(0);
    z(2);
    z(17);
    z(1);
    z(3);
    z(17);
    z(1)
  }

  function B() {
    O(65499);
    O(132);
    z(0);
    for (var aj = 0; aj < 64; aj++) {
      z(o[aj])
    }
    z(1);
    for (var ai = 0; ai < 64; ai++) {
      z(R[ai])
    }
  }

  function x() {
    O(65476);
    O(418);
    z(0);
    for (var am = 0; am < 16; am++) {
      z(n[am + 1])
    }
    for (var al = 0; al <= 11; al++) {
      z(j[al])
    }
    z(16);
    for (var ak = 0; ak < 16; ak++) {
      z(G[ak + 1])
    }
    for (var aj = 0; aj <= 161; aj++) {
      z(A[aj])
    }
    z(1);
    for (var ai = 0; ai < 16; ai++) {
      z(F[ai + 1])
    }
    for (var ap = 0; ap <= 11; ap++) {
      z(ag[ap])
    }
    z(17);
    for (var ao = 0; ao < 16; ao++) {
      z(v[ao + 1])
    }
    for (var an = 0; an <= 161; an++) {
      z(C[an])
    }
  }

  function w() {
    O(65498);
    O(12);
    z(3);
    z(1);
    z(0);
    z(2);
    z(17);
    z(3);
    z(17);
    z(0);
    z(63);
    z(0)
  }

  function r(am, ai, at, ay, ax) {
    var ao = ax[0];
    var ak = ax[240];
    var al;
    const az = 16;
    const ap = 63;
    const an = 64;
    var aA = U(am, ai);
    for (var au = 0; au < an; ++au) {
      Z[V[au]] = aA[au]
    }
    var aw = Z[0] - at;
    at = Z[0];
    if (aw == 0) {
      ah(ay[0])
    } else {
      al = 32767 + aw;
      ah(ay[t[al]]);
      ah(Q[al])
    }
    var aj = 63;
    for (; (aj > 0) && (Z[aj] == 0); aj--) {
    }
    if (aj == 0) {
      ah(ao);
      return at
    }
    var av = 1;
    var aC;
    while (av <= aj) {
      var ar = av;
      for (; (Z[av] == 0) && (av <= aj); ++av) {
      }
      var aq = av - ar;
      if (aq >= az) {
        aC = aq >> 4;
        for (var aB = 1; aB <= aC; ++aB) {
          ah(ak)
        }
        aq = aq & 15
      }
      al = 32767 + Z[av];
      ah(ax[(aq << 4) + t[al]]);
      ah(Q[al]);
      av++
    }
    if (aj != ap) {
      ah(ao)
    }
    return at
  }

  function E() {
    var aj = String.fromCharCode;
    for (var ai = 0; ai < 256; ai++) {
      m[ai] = aj(ai)
    }
  }

  this.encode = function (ay, at, aJ) {
    var ak = new Date().getTime();
    if (at) {
      k(at)
    }
    q = new Array();
    J = 0;
    i = 7;
    O(65496);
    aa();
    B();
    N(ay.width, ay.height);
    x();
    w();
    var au = 0;
    var aA = 0;
    var ax = 0;
    J = 0;
    i = 7;
    this.encode.displayName = "_encode_";
    var aH = ay.data;
    var aC = ay.width;
    var aw = ay.height;
    var aB = aC * 4;
    var aj = aC * 3;
    var ar, aq = 0;
    var av, aG, aI;
    var al, az, an, ap, ao;
    while (aq < aw) {
      ar = 0;
      while (ar < aB) {
        al = aB * aq + ar;
        az = al;
        an = -1;
        ap = 0;
        for (ao = 0; ao < 64; ao++) {
          ap = ao >> 3;
          an = (ao & 7) * 4;
          az = al + (ap * aB) + an;
          if (aq + ap >= aw) {
            az -= (aB * (aq + 1 + ap - aw))
          }
          if (ar + an >= aB) {
            az -= ((ar + an) - aB + 4)
          }
          av = aH[az++];
          aG = aH[az++];
          aI = aH[az++];
          L[ao] = ((M[av] + M[(aG + 256) >> 0] + M[(aI + 512) >> 0]) >> 16) - 128;
          l[ao] = ((M[(av + 768) >> 0] + M[(aG + 1024) >> 0] + M[(aI + 1280) >> 0]) >> 16) - 128;
          ac[ao] = ((M[(av + 1280) >> 0] + M[(aG + 1536) >> 0] + M[(aI + 1792) >> 0]) >> 16) - 128
        }
        au = r(L, Y, au, I, y);
        aA = r(l, af, aA, p, ab);
        ax = r(ac, af, ax, p, ab);
        ar += 32
      }
      aq += 8
    }
    if (i >= 0) {
      var aE = [];
      aE[1] = i + 1;
      aE[0] = (1 << (i + 1)) - 1;
      ah(aE)
    }
    O(65497);
    if (aJ) {
      var aF = q.length;
      var aK = new Uint8Array(aF);
      for (var aD = 0; aD < aF; aD++) {
        aK[aD] = q[aD].charCodeAt()
      }
      q = [];
      var ai = new Date().getTime() - ak;
      return aK
    }
    var am = "data:image/jpeg;base64," + btoa(q.join(""));
    q = [];
    var ai = new Date().getTime() - ak;
    return am
  };
  function k(aj) {
    if (aj <= 0) {
      aj = 1
    }
    if (aj > 100) {
      aj = 100
    }
    if (H == aj) {
      return
    }
    var ai = 0;
    if (aj < 50) {
      ai = Math.floor(5000 / aj)
    } else {
      ai = Math.floor(200 - aj * 2)
    }
    T(ai);
    H = aj
  }

  function X() {
    var aj = new Date().getTime();
    if (!s) {
      s = 50
    }
    E();
    ae();
    D();
    ad();
    k(s);
    var ai = new Date().getTime() - aj
  }

  X()
}
function c() {
  var i = {
    weixin: /micromessenger(\/[\d\.]+)*/,
    qq: /mqqbrowser(\/[\d\.]+)*/,
    uc: /ucbrowser(\/[\d\.]+)*/,
    chrome: /(?:chrome|crios)(\/[\d\.]+)*/,
    firefox: /firefox(\/[\d\.]+)*/,
    opera: /opera(\/|\s)([\d\.]+)*/,
    sougou: /sogoumobilebrowser(\/[\d\.]+)*/,
    baidu: /baidubrowser(\/[\d\.]+)*/,
    360: /360browser([\d\.]*)/,
    safari: /safari(\/[\d\.]+)*/,
    ie: /msie\s([\d\.]+)*/
  };
  var j = navigator.userAgent.toLowerCase();
  for (var k in i) {
    if (i[k].test(j)) {
      return k
    }
  }
  return ""
}
function b() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return "ios"
  } else {
    if (/(Android)/i.test(navigator.userAgent)) {
      return "android"
    } else {
      return ""
    }
  }
}
var e = "canvasResize", a = {
  newsize: function (j, l, i, k, n) {
    var o = n ? "h" : "";
    if ((i && j > i) || (k && l > k)) {
      var m = j / l;
      if ((m >= 1 || k === 0) && i && !n) {
        j = i;
        l = (i / m) >> 0
      } else {
        if (n && m <= (i / k)) {
          j = i;
          l = (i / m) >> 0;
          o = "w"
        } else {
          j = (k * m) >> 0;
          l = k
        }
      }
    }
    return { width: j, height: l, cropped: o }
  }, dataURLtoBlob: function (n) {
    var j = n.split(",")[0].split(":")[1].split(";")[0];
    var p = atob(n.split(",")[1]);
    var m = new ArrayBuffer(p.length);
    var k = new Uint8Array(m);
    for (var l = 0; l < p.length; l++) {
      k[l] = p.charCodeAt(l)
    }
    var o = (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
    if (o) {
      o = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
      o.append(m);
      return o.getBlob(j)
    } else {
      o = new Blob([m], { type: (j) });
      return o
    }
  }, detectSubsampling: function (k) {
    var j = k.width, m = k.height;
    if (j * m > 1048576) {
      var l = document.createElement("canvas");
      l.width = l.height = 1;
      var i = l.getContext("2d");
      i.drawImage(k, -j + 1, 0);
      return i.getImageData(0, 0, 1, 1).data[3] === 0
    } else {
      return false
    }
  }, rotate: function (i, k) {
    var j = {
      1: { 90: 6, 180: 3, 270: 8 },
      2: { 90: 7, 180: 4, 270: 5 },
      3: { 90: 8, 180: 1, 270: 6 },
      4: { 90: 5, 180: 2, 270: 7 },
      5: { 90: 2, 180: 7, 270: 4 },
      6: { 90: 3, 180: 8, 270: 1 },
      7: { 90: 4, 180: 5, 270: 2 },
      8: { 90: 1, 180: 6, 270: 3 }
    };
    return j[i][k] ? j[i][k] : i
  }, transformCoordinate: function (l, m, i, k) {
    switch (k) {
      case 5:
      case 6:
      case 7:
      case 8:
        l.width = i;
        l.height = m;
        break;
      default:
        l.width = m;
        l.height = i
    }
    var j = l.getContext("2d");
    switch (k) {
      case 1:
        break;
      case 2:
        j.translate(m, 0);
        j.scale(-1, 1);
        break;
      case 3:
        j.translate(m, i);
        j.rotate(Math.PI);
        break;
      case 4:
        j.translate(0, i);
        j.scale(1, -1);
        break;
      case 5:
        j.rotate(0.5 * Math.PI);
        j.scale(1, -1);
        break;
      case 6:
        j.rotate(0.5 * Math.PI);
        j.translate(0, -i);
        break;
      case 7:
        j.rotate(0.5 * Math.PI);
        j.translate(m, -i);
        j.scale(-1, 1);
        break;
      case 8:
        j.rotate(-0.5 * Math.PI);
        j.translate(-m, 0);
        break;
      default:
        break
    }
  }, detectVerticalSquash: function (m, j, r) {
    var i = document.createElement("canvas");
    i.width = 1;
    i.height = r;
    var s = i.getContext("2d");
    s.drawImage(m, 0, 0);
    var l = s.getImageData(0, 0, 1, r).data;
    var p = 0;
    var n = r;
    var q = r;
    while (q > p) {
      var k = l[(q - 1) * 4 + 3];
      if (k === 0) {
        n = q
      } else {
        p = q
      }
      q = (n + p) >> 1
    }
    var o = q / r;
    return o === 0 ? 1 : o
  }, callback: function (i) {
    return i
  }, extend: function () {
    var n = arguments[0] || {}, k = 1, m = arguments.length, j = false;
    if (n.constructor === Boolean) {
      j = n;
      n = arguments[1] || {}
    }
    if (m === 1) {
      n = this;
      k = 0
    }
    var o;
    for (; k < m; k++) {
      if ((o = arguments[k]) !== null) {
        for (var l in o) {
          if (n === o[l]) {
            continue
          }
          if (j && typeof o[l] === "object" && n[l]) {
            a.extend(n[l], o[l])
          } else {
            if (o[l] !== undefined) {
              n[l] = o[l]
            }
          }
        }
      }
    }
    return n
  }
}, g = { width: 300, height: 0, crop: false, quality: 80, rotate: 0, callback: a.callback };
function d(j, i) {
  this.file = j;
  this.options = a.extend({}, g, i);
  this._defaults = g;
  this._name = e;
  this.init()
}
d.prototype = {
  init: function () {
    var k = this;
    var j = this.file;
    var i = new FileReader();
    i.onloadend = function (m) {
      var n = m.target.result;
      if (!/^data\:([^\;]+)\;base64,/gmi.test(n)) {
        n = n.replace(/^data\:.*base64,/gmi, "data:" + (j.type || "image/jpeg") + ";base64,")
      }
      var l = new Image();
      l.onload = function (o) {
        EXIF.getData(l, function () {
          var r = EXIF.getTag(this, "Orientation") || 1;
          r = a.rotate(r, k.options.rotate);
          var E = (r >= 5 && r <= 8) ? a.newsize(l.height, l.width, k.options.width, k.options.height, k.options.crop) : a.newsize(l.width, l.height, k.options.width, k.options.height, k.options.crop);
          var t = l.width, C = l.height;
          var I = E.width, F = E.height;
          var q = document.createElement("canvas");
          var J = q.getContext("2d");
          J.save();
          a.transformCoordinate(q, I, F, r);
          if (a.detectSubsampling(l)) {
            t /= 2;
            C /= 2
          }
          var N = 1024;
          var p = document.createElement("canvas");
          p.width = p.height = N;
          var s = p.getContext("2d");
          var K = a.detectVerticalSquash(l, t, C);
          if (c() === "uc" && b() !== "ios") {
            q.width = I;
            q.height = F;
            J.drawImage(l, 0, 0, t, C, 0, 0, I, F)
          } else {
            var D = 0;
            while (D < C) {
              var O = D + N > C ? C - D : N;
              var G = 0;
              while (G < t) {
                var H = G + N > t ? t - G : N;
                s.clearRect(0, 0, N, N);
                s.drawImage(l, -G, -D);
                var A = Math.floor(G * I / t);
                var B = Math.ceil(H * I / t);
                var z = Math.floor(D * F / C / K);
                var M = Math.ceil(O * F / C / K);
                J.drawImage(p, 0, 0, H, O, A, z, B, M);
                G += N
              }
              D += N
            }
          }
          J.restore();
          p = s = null;
          var u = document.createElement("canvas");
          u.width = E.cropped === "h" ? F : I;
          u.height = E.cropped === "w" ? I : F;
          var w = E.cropped === "h" ? (F - I) * 0.5 : 0;
          var v = E.cropped === "w" ? (I - F) * 0.5 : 0;
          var newctx = u.getContext("2d");
          newctx.drawImage(q, w, v, I, F);
          var P;
          if (j.type === "image/png") {
            P = u.toDataURL(j.type)
          } else {
            if (b !== "ios") {
              var L = newctx.getImageData(0, 0, u.width, u.height);
              P = new h().encode(L, k.options.quality)
            } else {
              P = u.toDataURL("image/jpeg", (k.options.quality * 0.01))
            }
          }
          k.options.callback(P, u.width, u.height)
        })
      };
      l.src = n
    };
    i.readAsDataURL(j)
  }
};
export default function (j, i) {
  if (typeof j === "string") {
    return a[j](i)
  } else {
    return new d(j, i)
  }
}
