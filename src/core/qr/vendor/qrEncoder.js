/**
 * Original QR encoder extracted intact from the monolithic application.
 * Own module scope: no React, no WebGPU and no DOM dependencies for create().
 * This is vendored generated code; do not hand-refactor without parity tests.
 * Source of extraction: src/main.jsx from main@c064f61f.
 */
var e = Object.create;
var t = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var o = Object.getPrototypeOf;
var l = Object.prototype.hasOwnProperty;
var a = (_0x334b9d, _0x31003c) => () => {
  if (!_0x31003c) {
    _0x334b9d((_0x31003c = {
      exports: {}
    }).exports, _0x31003c);
  }
  return _0x31003c.exports;
};
var i = (_0x355282, _0x2bbe3b, _0x52bc5f) => {
  _0x52bc5f = _0x355282 != null ? e(o(_0x355282)) : {};
  return ((_0x34398f, _0xf7f28b, _0x594841, _0xd60be) => {
    if (_0xf7f28b && typeof _0xf7f28b == "object" || typeof _0xf7f28b == "function") {
      var _0x1fafb6;
      var _0x1fdc89 = r(_0xf7f28b);
      for (var _0x279e88 = 0, _0xb70b2a = _0x1fdc89.length; _0x279e88 < _0xb70b2a; _0x279e88++) {
        _0x1fafb6 = _0x1fdc89[_0x279e88];
        if (!l.call(_0x34398f, _0x1fafb6) && _0x1fafb6 !== undefined) {
          t(_0x34398f, _0x1fafb6, {
            get: (_0x280851 => _0xf7f28b[_0x280851]).bind(null, _0x1fafb6),
            enumerable: !(_0xd60be = n(_0xf7f28b, _0x1fafb6)) || _0xd60be.enumerable
          });
        }
      }
    }
    return _0x34398f;
  })(!_0x2bbe3b && _0x355282 && _0x355282.__esModule ? _0x52bc5f : t(_0x52bc5f, "default", {
    value: _0x355282,
    enumerable: true
  }), _0x355282);
};

var b = a((_0xc6d143, _0x44498f) => {
  _0x44498f.exports = function () {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  };
});
var y = a(_0x46af90 => {
  var _0x28a8a3;
  var _0x41cc80 = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
  _0x46af90.getSymbolSize = function (_0x2d084b) {
    if (!_0x2d084b) {
      throw new Error("\"version\" cannot be null or undefined");
    }
    if (_0x2d084b < 1 || _0x2d084b > 40) {
      throw new Error("\"version\" should be in range from 1 to 40");
    }
    return _0x2d084b * 4 + 17;
  };
  _0x46af90.getSymbolTotalCodewords = function (_0x39ee2f) {
    return _0x41cc80[_0x39ee2f];
  };
  _0x46af90.getBCHDigit = function (_0x2fb17c) {
    let _0x11fc47 = 0;
    while (_0x2fb17c !== 0) {
      _0x11fc47++;
      _0x2fb17c >>>= 1;
    }
    return _0x11fc47;
  };
  _0x46af90.setToSJISFunction = function (_0x1f5baa) {
    if (typeof _0x1f5baa != "function") {
      throw new Error("\"toSJISFunc\" is not a valid function.");
    }
    _0x28a8a3 = _0x1f5baa;
  };
  _0x46af90.isKanjiModeEnabled = function () {
    return _0x28a8a3 !== undefined;
  };
  _0x46af90.toSJIS = function (_0x3b97d8) {
    return _0x28a8a3(_0x3b97d8);
  };
});
var w = a(_0x5ef82f => {
  _0x5ef82f.L = {
    bit: 1
  };
  _0x5ef82f.M = {
    bit: 0
  };
  _0x5ef82f.Q = {
    bit: 3
  };
  _0x5ef82f.H = {
    bit: 2
  };
  _0x5ef82f.isValid = function (_0x303623) {
    return _0x303623 && _0x303623.bit !== undefined && _0x303623.bit >= 0 && _0x303623.bit < 4;
  };
  _0x5ef82f.from = function (_0x449cef, _0x52d1e3) {
    if (_0x5ef82f.isValid(_0x449cef)) {
      return _0x449cef;
    }
    try {
      return function (_0x3526ae) {
        if (typeof _0x3526ae != "string") {
          throw new Error("Param is not a string");
        }
        switch (_0x3526ae.toLowerCase()) {
          case "l":
          case "low":
            return _0x5ef82f.L;
          case "m":
          case "medium":
            return _0x5ef82f.M;
          case "q":
          case "quartile":
            return _0x5ef82f.Q;
          case "h":
          case "high":
            return _0x5ef82f.H;
          default:
            throw new Error("Unknown EC Level: " + _0x3526ae);
        }
      }(_0x449cef);
    } catch (_0x2cd8f5) {
      return _0x52d1e3;
    }
  };
});
var k = a((_0x13e76f, _0x1a7123) => {
  function _0x20ca1e() {
    this.buffer = [];
    this.length = 0;
  }
  _0x20ca1e.prototype = {
    get: function (_0x164150) {
      const _0x5c98a4 = Math.floor(_0x164150 / 8);
      return (this.buffer[_0x5c98a4] >>> 7 - _0x164150 % 8 & 1) == 1;
    },
    put: function (_0x2a55a4, _0x1c3648) {
      for (let _0x276636 = 0; _0x276636 < _0x1c3648; _0x276636++) {
        this.putBit((_0x2a55a4 >>> _0x1c3648 - _0x276636 - 1 & 1) == 1);
      }
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (_0xcea97) {
      const _0x19ad78 = Math.floor(this.length / 8);
      if (this.buffer.length <= _0x19ad78) {
        this.buffer.push(0);
      }
      if (_0xcea97) {
        this.buffer[_0x19ad78] |= 128 >>> this.length % 8;
      }
      this.length++;
    }
  };
  _0x1a7123.exports = _0x20ca1e;
});
var x = a((_0xd4991a, _0x189fd8) => {
  function _0x4073f8(_0x116d97) {
    if (!_0x116d97 || _0x116d97 < 1) {
      throw new Error("BitMatrix size must be defined and greater than 0");
    }
    this.size = _0x116d97;
    this.data = new Uint8Array(_0x116d97 * _0x116d97);
    this.reservedBit = new Uint8Array(_0x116d97 * _0x116d97);
  }
  _0x4073f8.prototype.set = function (_0x5d14d1, _0x2e067b, _0x1f329a, _0x587cc0) {
    const _0x7c35bd = _0x5d14d1 * this.size + _0x2e067b;
    this.data[_0x7c35bd] = _0x1f329a;
    if (_0x587cc0) {
      this.reservedBit[_0x7c35bd] = true;
    }
  };
  _0x4073f8.prototype.get = function (_0x4eba2c, _0x16909f) {
    return this.data[_0x4eba2c * this.size + _0x16909f];
  };
  _0x4073f8.prototype.xor = function (_0x6b88a7, _0x4de86f, _0x2114ed) {
    this.data[_0x6b88a7 * this.size + _0x4de86f] ^= _0x2114ed;
  };
  _0x4073f8.prototype.isReserved = function (_0x47b078, _0x149807) {
    return this.reservedBit[_0x47b078 * this.size + _0x149807];
  };
  _0x189fd8.exports = _0x4073f8;
});
var S = a(_0x2a5a26 => {
  var _0xcd047a = y().getSymbolSize;
  _0x2a5a26.getRowColCoords = function (_0x55648e) {
    if (_0x55648e === 1) {
      return [];
    }
    const _0x444c37 = Math.floor(_0x55648e / 7) + 2;
    const _0x5c43b7 = _0xcd047a(_0x55648e);
    const _0x9de7f5 = _0x5c43b7 === 145 ? 26 : Math.ceil((_0x5c43b7 - 13) / (_0x444c37 * 2 - 2)) * 2;
    const _0x17a2eb = [_0x5c43b7 - 7];
    for (let _0x1acffc = 1; _0x1acffc < _0x444c37 - 1; _0x1acffc++) {
      _0x17a2eb[_0x1acffc] = _0x17a2eb[_0x1acffc - 1] - _0x9de7f5;
    }
    _0x17a2eb.push(6);
    return _0x17a2eb.reverse();
  };
  _0x2a5a26.getPositions = function (_0x4e59b1) {
    const _0x186f86 = [];
    const _0xa95430 = _0x2a5a26.getRowColCoords(_0x4e59b1);
    const _0x3a98a4 = _0xa95430.length;
    for (let _0x41852a = 0; _0x41852a < _0x3a98a4; _0x41852a++) {
      for (let _0x1d64d8 = 0; _0x1d64d8 < _0x3a98a4; _0x1d64d8++) {
        if ((_0x41852a !== 0 || _0x1d64d8 !== 0) && (_0x41852a !== 0 || _0x1d64d8 !== _0x3a98a4 - 1) && (_0x41852a !== _0x3a98a4 - 1 || _0x1d64d8 !== 0)) {
          _0x186f86.push([_0xa95430[_0x41852a], _0xa95430[_0x1d64d8]]);
        }
      }
    }
    return _0x186f86;
  };
});
var C = a(_0x472a64 => {
  var _0x2c2d48 = y().getSymbolSize;
  _0x472a64.getPositions = function (_0x2b62b0) {
    const _0x195ed5 = _0x2c2d48(_0x2b62b0);
    return [[0, 0], [_0x195ed5 - 7, 0], [0, _0x195ed5 - 7]];
  };
});
var E = a(_0x39c110 => {
  _0x39c110.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  function _0x8715f0(_0x4252a0, _0xadbf10, _0x5ebc61) {
    switch (_0x4252a0) {
      case _0x39c110.Patterns.PATTERN000:
        return (_0xadbf10 + _0x5ebc61) % 2 == 0;
      case _0x39c110.Patterns.PATTERN001:
        return _0xadbf10 % 2 == 0;
      case _0x39c110.Patterns.PATTERN010:
        return _0x5ebc61 % 3 == 0;
      case _0x39c110.Patterns.PATTERN011:
        return (_0xadbf10 + _0x5ebc61) % 3 == 0;
      case _0x39c110.Patterns.PATTERN100:
        return (Math.floor(_0xadbf10 / 2) + Math.floor(_0x5ebc61 / 3)) % 2 == 0;
      case _0x39c110.Patterns.PATTERN101:
        return _0xadbf10 * _0x5ebc61 % 2 + _0xadbf10 * _0x5ebc61 % 3 == 0;
      case _0x39c110.Patterns.PATTERN110:
        return (_0xadbf10 * _0x5ebc61 % 2 + _0xadbf10 * _0x5ebc61 % 3) % 2 == 0;
      case _0x39c110.Patterns.PATTERN111:
        return (_0xadbf10 * _0x5ebc61 % 3 + (_0xadbf10 + _0x5ebc61) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + _0x4252a0);
    }
  }
  _0x39c110.isValid = function (_0x58cf46) {
    return _0x58cf46 != null && _0x58cf46 !== "" && !isNaN(_0x58cf46) && _0x58cf46 >= 0 && _0x58cf46 <= 7;
  };
  _0x39c110.from = function (_0x68e463) {
    if (_0x39c110.isValid(_0x68e463)) {
      return parseInt(_0x68e463, 10);
    } else {
      return undefined;
    }
  };
  _0x39c110.getPenaltyN1 = function (_0x5aa3e3) {
    const _0x3f1d5f = _0x5aa3e3.size;
    let _0x823a27 = 0;
    let _0x485485 = 0;
    let _0x19c251 = 0;
    let _0x40c769 = null;
    let _0x4f040d = null;
    for (let _0x5f3eb0 = 0; _0x5f3eb0 < _0x3f1d5f; _0x5f3eb0++) {
      _0x485485 = _0x19c251 = 0;
      _0x40c769 = _0x4f040d = null;
      for (let _0x2b0888 = 0; _0x2b0888 < _0x3f1d5f; _0x2b0888++) {
        let _0x103dbb = _0x5aa3e3.get(_0x5f3eb0, _0x2b0888);
        if (_0x103dbb === _0x40c769) {
          _0x485485++;
        } else {
          if (_0x485485 >= 5) {
            _0x823a27 += _0x485485 - 5 + 3;
          }
          _0x40c769 = _0x103dbb;
          _0x485485 = 1;
        }
        _0x103dbb = _0x5aa3e3.get(_0x2b0888, _0x5f3eb0);
        if (_0x103dbb === _0x4f040d) {
          _0x19c251++;
        } else {
          if (_0x19c251 >= 5) {
            _0x823a27 += _0x19c251 - 5 + 3;
          }
          _0x4f040d = _0x103dbb;
          _0x19c251 = 1;
        }
      }
      if (_0x485485 >= 5) {
        _0x823a27 += _0x485485 - 5 + 3;
      }
      if (_0x19c251 >= 5) {
        _0x823a27 += _0x19c251 - 5 + 3;
      }
    }
    return _0x823a27;
  };
  _0x39c110.getPenaltyN2 = function (_0x38248f) {
    const _0x6b061c = _0x38248f.size;
    let _0x136d07 = 0;
    for (let _0x32d019 = 0; _0x32d019 < _0x6b061c - 1; _0x32d019++) {
      for (let _0x1b0e23 = 0; _0x1b0e23 < _0x6b061c - 1; _0x1b0e23++) {
        const _0x3c9894 = _0x38248f.get(_0x32d019, _0x1b0e23) + _0x38248f.get(_0x32d019, _0x1b0e23 + 1) + _0x38248f.get(_0x32d019 + 1, _0x1b0e23) + _0x38248f.get(_0x32d019 + 1, _0x1b0e23 + 1);
        if (_0x3c9894 === 4 || _0x3c9894 === 0) {
          _0x136d07++;
        }
      }
    }
    return _0x136d07 * 3;
  };
  _0x39c110.getPenaltyN3 = function (_0x24b726) {
    const _0x26fe14 = _0x24b726.size;
    let _0x389416 = 0;
    let _0x15965d = 0;
    let _0x2d84c7 = 0;
    for (let _0x234db0 = 0; _0x234db0 < _0x26fe14; _0x234db0++) {
      _0x15965d = _0x2d84c7 = 0;
      for (let _0x3c484b = 0; _0x3c484b < _0x26fe14; _0x3c484b++) {
        _0x15965d = _0x15965d << 1 & 2047 | _0x24b726.get(_0x234db0, _0x3c484b);
        if (_0x3c484b >= 10 && (_0x15965d === 1488 || _0x15965d === 93)) {
          _0x389416++;
        }
        _0x2d84c7 = _0x2d84c7 << 1 & 2047 | _0x24b726.get(_0x3c484b, _0x234db0);
        if (_0x3c484b >= 10 && (_0x2d84c7 === 1488 || _0x2d84c7 === 93)) {
          _0x389416++;
        }
      }
    }
    return _0x389416 * 40;
  };
  _0x39c110.getPenaltyN4 = function (_0x125e19) {
    let _0x25643b = 0;
    const _0x2c36bc = _0x125e19.data.length;
    for (let _0x1f1ff6 = 0; _0x1f1ff6 < _0x2c36bc; _0x1f1ff6++) {
      _0x25643b += _0x125e19.data[_0x1f1ff6];
    }
    return Math.abs(Math.ceil(_0x25643b * 100 / _0x2c36bc / 5) - 10) * 10;
  };
  _0x39c110.applyMask = function (_0x47e68a, _0x54f33f) {
    const _0x1ab03e = _0x54f33f.size;
    for (let _0x3d37ca = 0; _0x3d37ca < _0x1ab03e; _0x3d37ca++) {
      for (let _0x4b5a7c = 0; _0x4b5a7c < _0x1ab03e; _0x4b5a7c++) {
        if (!_0x54f33f.isReserved(_0x4b5a7c, _0x3d37ca)) {
          _0x54f33f.xor(_0x4b5a7c, _0x3d37ca, _0x8715f0(_0x47e68a, _0x4b5a7c, _0x3d37ca));
        }
      }
    }
  };
  _0x39c110.getBestMask = function (_0x32a380, _0x3ecc4c) {
    const _0x50fc5c = Object.keys(_0x39c110.Patterns).length;
    let _0x378b5a = 0;
    let _0x2173fe = Infinity;
    for (let _0x2ae365 = 0; _0x2ae365 < _0x50fc5c; _0x2ae365++) {
      _0x3ecc4c(_0x2ae365);
      _0x39c110.applyMask(_0x2ae365, _0x32a380);
      const _0x360b6a = _0x39c110.getPenaltyN1(_0x32a380) + _0x39c110.getPenaltyN2(_0x32a380) + _0x39c110.getPenaltyN3(_0x32a380) + _0x39c110.getPenaltyN4(_0x32a380);
      _0x39c110.applyMask(_0x2ae365, _0x32a380);
      if (_0x360b6a < _0x2173fe) {
        _0x2173fe = _0x360b6a;
        _0x378b5a = _0x2ae365;
      }
    }
    return _0x378b5a;
  };
});
var T = a(_0x3fbb57 => {
  var _0x39f3d1 = w();
  var _0x40f959 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
  var _0x513859 = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
  _0x3fbb57.getBlocksCount = function (_0x5dd4da, _0x354c47) {
    switch (_0x354c47) {
      case _0x39f3d1.L:
        return _0x40f959[(_0x5dd4da - 1) * 4 + 0];
      case _0x39f3d1.M:
        return _0x40f959[(_0x5dd4da - 1) * 4 + 1];
      case _0x39f3d1.Q:
        return _0x40f959[(_0x5dd4da - 1) * 4 + 2];
      case _0x39f3d1.H:
        return _0x40f959[(_0x5dd4da - 1) * 4 + 3];
      default:
        return;
    }
  };
  _0x3fbb57.getTotalCodewordsCount = function (_0x1e16b3, _0x484c9d) {
    switch (_0x484c9d) {
      case _0x39f3d1.L:
        return _0x513859[(_0x1e16b3 - 1) * 4 + 0];
      case _0x39f3d1.M:
        return _0x513859[(_0x1e16b3 - 1) * 4 + 1];
      case _0x39f3d1.Q:
        return _0x513859[(_0x1e16b3 - 1) * 4 + 2];
      case _0x39f3d1.H:
        return _0x513859[(_0x1e16b3 - 1) * 4 + 3];
      default:
        return;
    }
  };
});
var P = a(_0x15d82f => {
  var _0x5a1feb = new Uint8Array(512);
  var _0x38496b = new Uint8Array(256);
  (function () {
    let _0x4924f7 = 1;
    for (let _0x388b67 = 0; _0x388b67 < 255; _0x388b67++) {
      _0x5a1feb[_0x388b67] = _0x4924f7;
      _0x38496b[_0x4924f7] = _0x388b67;
      _0x4924f7 <<= 1;
      if (_0x4924f7 & 256) {
        _0x4924f7 ^= 285;
      }
    }
    for (let _0x1c00dd = 255; _0x1c00dd < 512; _0x1c00dd++) {
      _0x5a1feb[_0x1c00dd] = _0x5a1feb[_0x1c00dd - 255];
    }
  })();
  _0x15d82f.log = function (_0x157825) {
    if (_0x157825 < 1) {
      throw new Error("log(" + _0x157825 + ")");
    }
    return _0x38496b[_0x157825];
  };
  _0x15d82f.exp = function (_0x253215) {
    return _0x5a1feb[_0x253215];
  };
  _0x15d82f.mul = function (_0x48887a, _0x1a3b3f) {
    if (_0x48887a === 0 || _0x1a3b3f === 0) {
      return 0;
    } else {
      return _0x5a1feb[_0x38496b[_0x48887a] + _0x38496b[_0x1a3b3f]];
    }
  };
});
var z = a(_0x32e467 => {
  var _0x599b20 = P();
  _0x32e467.mul = function (_0x23599a, _0x4ec529) {
    const _0x5161ca = new Uint8Array(_0x23599a.length + _0x4ec529.length - 1);
    for (let _0x1c7986 = 0; _0x1c7986 < _0x23599a.length; _0x1c7986++) {
      for (let _0x3f9603 = 0; _0x3f9603 < _0x4ec529.length; _0x3f9603++) {
        _0x5161ca[_0x1c7986 + _0x3f9603] ^= _0x599b20.mul(_0x23599a[_0x1c7986], _0x4ec529[_0x3f9603]);
      }
    }
    return _0x5161ca;
  };
  _0x32e467.mod = function (_0xc12e76, _0x1ec746) {
    let _0x3d74ff = new Uint8Array(_0xc12e76);
    while (_0x3d74ff.length - _0x1ec746.length >= 0) {
      const _0x5b7d70 = _0x3d74ff[0];
      for (let _0x49afba = 0; _0x49afba < _0x1ec746.length; _0x49afba++) {
        _0x3d74ff[_0x49afba] ^= _0x599b20.mul(_0x1ec746[_0x49afba], _0x5b7d70);
      }
      let _0x569e10 = 0;
      while (_0x569e10 < _0x3d74ff.length && _0x3d74ff[_0x569e10] === 0) {
        _0x569e10++;
      }
      _0x3d74ff = _0x3d74ff.slice(_0x569e10);
    }
    return _0x3d74ff;
  };
  _0x32e467.generateECPolynomial = function (_0x3b1ff0) {
    let _0x480a4f = new Uint8Array([1]);
    for (let _0x10419b = 0; _0x10419b < _0x3b1ff0; _0x10419b++) {
      _0x480a4f = _0x32e467.mul(_0x480a4f, new Uint8Array([1, _0x599b20.exp(_0x10419b)]));
    }
    return _0x480a4f;
  };
});
var M = a((_0x35764d, _0x31efbe) => {
  var _0x2956a0 = z();
  function _0x7fd416(_0x2c1b39) {
    this.genPoly = undefined;
    this.degree = _0x2c1b39;
    if (this.degree) {
      this.initialize(this.degree);
    }
  }
  _0x7fd416.prototype.initialize = function (_0xc8d6d2) {
    this.degree = _0xc8d6d2;
    this.genPoly = _0x2956a0.generateECPolynomial(this.degree);
  };
  _0x7fd416.prototype.encode = function (_0xc731f1) {
    if (!this.genPoly) {
      throw new Error("Encoder not initialized");
    }
    const _0x435b58 = new Uint8Array(_0xc731f1.length + this.degree);
    _0x435b58.set(_0xc731f1);
    const _0x5040ef = _0x2956a0.mod(_0x435b58, this.genPoly);
    const _0x2f8fc8 = this.degree - _0x5040ef.length;
    if (_0x2f8fc8 > 0) {
      const _0x6f4d2e = new Uint8Array(this.degree);
      _0x6f4d2e.set(_0x5040ef, _0x2f8fc8);
      return _0x6f4d2e;
    }
    return _0x5040ef;
  };
  _0x31efbe.exports = _0x7fd416;
});
var L = a(_0x14d153 => {
  _0x14d153.isValid = function (_0x35c167) {
    return !isNaN(_0x35c167) && _0x35c167 >= 1 && _0x35c167 <= 40;
  };
});
var A = a(_0x18e1b4 => {
  var _0x4e8462 = "[0-9]+";
  var _0x4135e7 = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  var _0x344c02 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (_0x4135e7 = _0x4135e7.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
  _0x18e1b4.KANJI = new RegExp(_0x4135e7, "g");
  _0x18e1b4.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
  _0x18e1b4.BYTE = new RegExp(_0x344c02, "g");
  _0x18e1b4.NUMERIC = new RegExp(_0x4e8462, "g");
  _0x18e1b4.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
  var _0x2c493e = new RegExp("^" + _0x4135e7 + "$");
  var _0x2b89ad = new RegExp("^" + _0x4e8462 + "$");
  var _0x360d14 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  _0x18e1b4.testKanji = function (_0x1c3d9d) {
    return _0x2c493e.test(_0x1c3d9d);
  };
  _0x18e1b4.testNumeric = function (_0x26a73f) {
    return _0x2b89ad.test(_0x26a73f);
  };
  _0x18e1b4.testAlphanumeric = function (_0x38898e) {
    return _0x360d14.test(_0x38898e);
  };
});
var N = a(_0x562667 => {
  var _0xd57ee8 = L();
  var _0x5f55f5 = A();
  _0x562667.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  };
  _0x562667.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  };
  _0x562667.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  };
  _0x562667.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  };
  _0x562667.MIXED = {
    bit: -1
  };
  _0x562667.getCharCountIndicator = function (_0x3ef8a, _0x5926d8) {
    if (!_0x3ef8a.ccBits) {
      throw new Error("Invalid mode: " + _0x3ef8a);
    }
    if (!_0xd57ee8.isValid(_0x5926d8)) {
      throw new Error("Invalid version: " + _0x5926d8);
    }
    if (_0x5926d8 >= 1 && _0x5926d8 < 10) {
      return _0x3ef8a.ccBits[0];
    } else if (_0x5926d8 < 27) {
      return _0x3ef8a.ccBits[1];
    } else {
      return _0x3ef8a.ccBits[2];
    }
  };
  _0x562667.getBestModeForData = function (_0x43c3ba) {
    if (_0x5f55f5.testNumeric(_0x43c3ba)) {
      return _0x562667.NUMERIC;
    } else if (_0x5f55f5.testAlphanumeric(_0x43c3ba)) {
      return _0x562667.ALPHANUMERIC;
    } else if (_0x5f55f5.testKanji(_0x43c3ba)) {
      return _0x562667.KANJI;
    } else {
      return _0x562667.BYTE;
    }
  };
  _0x562667.toString = function (_0x1474a3) {
    if (_0x1474a3 && _0x1474a3.id) {
      return _0x1474a3.id;
    }
    throw new Error("Invalid mode");
  };
  _0x562667.isValid = function (_0x188fb0) {
    return _0x188fb0 && _0x188fb0.bit && _0x188fb0.ccBits;
  };
  _0x562667.from = function (_0x3931f0, _0x5c8a0) {
    if (_0x562667.isValid(_0x3931f0)) {
      return _0x3931f0;
    }
    try {
      return function (_0x39250d) {
        if (typeof _0x39250d != "string") {
          throw new Error("Param is not a string");
        }
        switch (_0x39250d.toLowerCase()) {
          case "numeric":
            return _0x562667.NUMERIC;
          case "alphanumeric":
            return _0x562667.ALPHANUMERIC;
          case "kanji":
            return _0x562667.KANJI;
          case "byte":
            return _0x562667.BYTE;
          default:
            throw new Error("Unknown mode: " + _0x39250d);
        }
      }(_0x3931f0);
    } catch (_0xf908ae) {
      return _0x5c8a0;
    }
  };
});
var R = a(_0x122e41 => {
  var _0x46818e = y();
  var _0x5dbd90 = T();
  var _0x5ad733 = w();
  var _0x277ef4 = N();
  var _0x1f3e6e = L();
  var _0x497351 = _0x46818e.getBCHDigit(7973);
  function _0x4e6a21(_0x19a300, _0x16e7d4) {
    return _0x277ef4.getCharCountIndicator(_0x19a300, _0x16e7d4) + 4;
  }
  function _0x2bed39(_0x2ccae5, _0x31f582) {
    let _0x4b39eb = 0;
    _0x2ccae5.forEach(function (_0x29c388) {
      const _0x278f20 = _0x4e6a21(_0x29c388.mode, _0x31f582);
      _0x4b39eb += _0x278f20 + _0x29c388.getBitsLength();
    });
    return _0x4b39eb;
  }
  _0x122e41.from = function (_0xc6962c, _0x5085e1) {
    if (_0x1f3e6e.isValid(_0xc6962c)) {
      return parseInt(_0xc6962c, 10);
    } else {
      return _0x5085e1;
    }
  };
  _0x122e41.getCapacity = function (_0xe9383e, _0x4dd9c0, _0x4408f3) {
    if (!_0x1f3e6e.isValid(_0xe9383e)) {
      throw new Error("Invalid QR Code version");
    }
    if (_0x4408f3 === undefined) {
      _0x4408f3 = _0x277ef4.BYTE;
    }
    const _0x343265 = (_0x46818e.getSymbolTotalCodewords(_0xe9383e) - _0x5dbd90.getTotalCodewordsCount(_0xe9383e, _0x4dd9c0)) * 8;
    if (_0x4408f3 === _0x277ef4.MIXED) {
      return _0x343265;
    }
    const _0x330008 = _0x343265 - _0x4e6a21(_0x4408f3, _0xe9383e);
    switch (_0x4408f3) {
      case _0x277ef4.NUMERIC:
        return Math.floor(_0x330008 / 10 * 3);
      case _0x277ef4.ALPHANUMERIC:
        return Math.floor(_0x330008 / 11 * 2);
      case _0x277ef4.KANJI:
        return Math.floor(_0x330008 / 13);
      case _0x277ef4.BYTE:
      default:
        return Math.floor(_0x330008 / 8);
    }
  };
  _0x122e41.getBestVersionForData = function (_0x14b8e2, _0x55ce1e) {
    let _0x88437c;
    const _0x49635e = _0x5ad733.from(_0x55ce1e, _0x5ad733.M);
    if (Array.isArray(_0x14b8e2)) {
      if (_0x14b8e2.length > 1) {
        return function (_0xb84429, _0x3b9ebc) {
          for (let _0x23cc09 = 1; _0x23cc09 <= 40; _0x23cc09++) {
            if (_0x2bed39(_0xb84429, _0x23cc09) <= _0x122e41.getCapacity(_0x23cc09, _0x3b9ebc, _0x277ef4.MIXED)) {
              return _0x23cc09;
            }
          }
        }(_0x14b8e2, _0x49635e);
      }
      if (_0x14b8e2.length === 0) {
        return 1;
      }
      _0x88437c = _0x14b8e2[0];
    } else {
      _0x88437c = _0x14b8e2;
    }
    return function (_0x402031, _0x1adeb4, _0x42b24e) {
      for (let _0x101111 = 1; _0x101111 <= 40; _0x101111++) {
        if (_0x1adeb4 <= _0x122e41.getCapacity(_0x101111, _0x42b24e, _0x402031)) {
          return _0x101111;
        }
      }
    }(_0x88437c.mode, _0x88437c.getLength(), _0x49635e);
  };
  _0x122e41.getEncodedBits = function (_0x26a538) {
    if (!_0x1f3e6e.isValid(_0x26a538) || _0x26a538 < 7) {
      throw new Error("Invalid QR Code version");
    }
    let _0x15e0b6 = _0x26a538 << 12;
    while (_0x46818e.getBCHDigit(_0x15e0b6) - _0x497351 >= 0) {
      _0x15e0b6 ^= 7973 << _0x46818e.getBCHDigit(_0x15e0b6) - _0x497351;
    }
    return _0x26a538 << 12 | _0x15e0b6;
  };
});
var I = a(_0x2528a7 => {
  var _0x4f8342 = y();
  var _0x554ef2 = _0x4f8342.getBCHDigit(1335);
  _0x2528a7.getEncodedBits = function (_0x297898, _0x528adc) {
    const _0x2be09d = _0x297898.bit << 3 | _0x528adc;
    let _0x355ed0 = _0x2be09d << 10;
    while (_0x4f8342.getBCHDigit(_0x355ed0) - _0x554ef2 >= 0) {
      _0x355ed0 ^= 1335 << _0x4f8342.getBCHDigit(_0x355ed0) - _0x554ef2;
    }
    return (_0x2be09d << 10 | _0x355ed0) ^ 21522;
  };
});
var D = a((_0x35b3db, _0x181c08) => {
  var _0x4dd97c = N();
  function _0x21a416(_0x168041) {
    this.mode = _0x4dd97c.NUMERIC;
    this.data = _0x168041.toString();
  }
  _0x21a416.getBitsLength = function (_0x3e1aa1) {
    return Math.floor(_0x3e1aa1 / 3) * 10 + (_0x3e1aa1 % 3 ? _0x3e1aa1 % 3 * 3 + 1 : 0);
  };
  _0x21a416.prototype.getLength = function () {
    return this.data.length;
  };
  _0x21a416.prototype.getBitsLength = function () {
    return _0x21a416.getBitsLength(this.data.length);
  };
  _0x21a416.prototype.write = function (_0x277fca) {
    let _0x502bc9;
    let _0x5bbd5c;
    let _0x2e4bfe;
    for (_0x502bc9 = 0; _0x502bc9 + 3 <= this.data.length; _0x502bc9 += 3) {
      _0x5bbd5c = this.data.substr(_0x502bc9, 3);
      _0x2e4bfe = parseInt(_0x5bbd5c, 10);
      _0x277fca.put(_0x2e4bfe, 10);
    }
    const _0x1bb13c = this.data.length - _0x502bc9;
    if (_0x1bb13c > 0) {
      _0x5bbd5c = this.data.substr(_0x502bc9);
      _0x2e4bfe = parseInt(_0x5bbd5c, 10);
      _0x277fca.put(_0x2e4bfe, _0x1bb13c * 3 + 1);
    }
  };
  _0x181c08.exports = _0x21a416;
});
var _ = a((_0xc6af7f, _0x1b668a) => {
  var _0x45eca6 = N();
  var _0x1effda = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
  function _0x1758fb(_0x731fdd) {
    this.mode = _0x45eca6.ALPHANUMERIC;
    this.data = _0x731fdd;
  }
  _0x1758fb.getBitsLength = function (_0xc33764) {
    return Math.floor(_0xc33764 / 2) * 11 + _0xc33764 % 2 * 6;
  };
  _0x1758fb.prototype.getLength = function () {
    return this.data.length;
  };
  _0x1758fb.prototype.getBitsLength = function () {
    return _0x1758fb.getBitsLength(this.data.length);
  };
  _0x1758fb.prototype.write = function (_0x4dcf8e) {
    let _0x1e2de9;
    for (_0x1e2de9 = 0; _0x1e2de9 + 2 <= this.data.length; _0x1e2de9 += 2) {
      let _0x2e017f = _0x1effda.indexOf(this.data[_0x1e2de9]) * 45;
      _0x2e017f += _0x1effda.indexOf(this.data[_0x1e2de9 + 1]);
      _0x4dcf8e.put(_0x2e017f, 11);
    }
    if (this.data.length % 2) {
      _0x4dcf8e.put(_0x1effda.indexOf(this.data[_0x1e2de9]), 6);
    }
  };
  _0x1b668a.exports = _0x1758fb;
});
var B = a((_0x588917, _0x4a6a17) => {
  var _0x24b049 = N();
  function _0x38ac7d(_0x4a74e1) {
    this.mode = _0x24b049.BYTE;
    this.data = typeof _0x4a74e1 == "string" ? new TextEncoder().encode(_0x4a74e1) : new Uint8Array(_0x4a74e1);
  }
  _0x38ac7d.getBitsLength = function (_0x4ae0ba) {
    return _0x4ae0ba * 8;
  };
  _0x38ac7d.prototype.getLength = function () {
    return this.data.length;
  };
  _0x38ac7d.prototype.getBitsLength = function () {
    return _0x38ac7d.getBitsLength(this.data.length);
  };
  _0x38ac7d.prototype.write = function (_0x1180fb) {
    for (let _0x358c4b = 0, _0x5b220c = this.data.length; _0x358c4b < _0x5b220c; _0x358c4b++) {
      _0x1180fb.put(this.data[_0x358c4b], 8);
    }
  };
  _0x4a6a17.exports = _0x38ac7d;
});
var O = a((_0x4996cf, _0x3f750c) => {
  var _0x445290 = N();
  var _0x3f0b18 = y();
  function _0x2fe622(_0x4b3976) {
    this.mode = _0x445290.KANJI;
    this.data = _0x4b3976;
  }
  _0x2fe622.getBitsLength = function (_0x5b82a5) {
    return _0x5b82a5 * 13;
  };
  _0x2fe622.prototype.getLength = function () {
    return this.data.length;
  };
  _0x2fe622.prototype.getBitsLength = function () {
    return _0x2fe622.getBitsLength(this.data.length);
  };
  _0x2fe622.prototype.write = function (_0xb48b71) {
    let _0x2b8a54;
    for (_0x2b8a54 = 0; _0x2b8a54 < this.data.length; _0x2b8a54++) {
      let _0xd0162d = _0x3f0b18.toSJIS(this.data[_0x2b8a54]);
      if (_0xd0162d >= 33088 && _0xd0162d <= 40956) {
        _0xd0162d -= 33088;
      } else {
        if (!(_0xd0162d >= 57408) || !(_0xd0162d <= 60351)) {
          throw new Error("Invalid SJIS character: " + this.data[_0x2b8a54] + "\nMake sure your charset is UTF-8");
        }
        _0xd0162d -= 49472;
      }
      _0xd0162d = (_0xd0162d >>> 8 & 255) * 192 + (_0xd0162d & 255);
      _0xb48b71.put(_0xd0162d, 13);
    }
  };
  _0x3f750c.exports = _0x2fe622;
});
var F = a((_0x176c69, _0x512458) => {
  var _0x8307fd = {
    single_source_shortest_paths: function (_0x156337, _0x290878, _0x17c3c1) {
      var _0x17bdfa = {};
      var _0x56c9f1 = {
        [_0x290878]: 0
      };
      var _0x10fb23;
      var _0x29b665;
      var _0x247269;
      var _0x4b80c7;
      var _0x27eca4;
      var _0x259460;
      var _0x2e59a6;
      var _0x36e54a = _0x8307fd.PriorityQueue.make();
      for (_0x36e54a.push(_0x290878, 0); !_0x36e54a.empty();) {
        _0x29b665 = (_0x10fb23 = _0x36e54a.pop()).value;
        _0x4b80c7 = _0x10fb23.cost;
        for (_0x247269 in _0x27eca4 = _0x156337[_0x29b665] || {}) {
          if (_0x27eca4.hasOwnProperty(_0x247269)) {
            _0x259460 = _0x4b80c7 + _0x27eca4[_0x247269];
            _0x2e59a6 = _0x56c9f1[_0x247269];
            if (_0x56c9f1[_0x247269] === undefined || _0x2e59a6 > _0x259460) {
              _0x56c9f1[_0x247269] = _0x259460;
              _0x36e54a.push(_0x247269, _0x259460);
              _0x17bdfa[_0x247269] = _0x29b665;
            }
          }
        }
      }
      if (_0x17c3c1 !== undefined && _0x56c9f1[_0x17c3c1] === undefined) {
        var _0x3d9491 = ["Could not find a path from ", _0x290878, " to ", _0x17c3c1, "."].join("");
        throw new Error(_0x3d9491);
      }
      return _0x17bdfa;
    },
    extract_shortest_path_from_predecessor_list: function (_0x342c34, _0x453645) {
      var _0x5cc3d9 = [];
      for (var _0x393825 = _0x453645; _0x393825;) {
        _0x5cc3d9.push(_0x393825);
        _0x342c34[_0x393825];
        _0x393825 = _0x342c34[_0x393825];
      }
      _0x5cc3d9.reverse();
      return _0x5cc3d9;
    },
    find_path: function (_0x37eeaa, _0x5c0f20, _0x3cd710) {
      var _0x444ff8 = _0x8307fd.single_source_shortest_paths(_0x37eeaa, _0x5c0f20, _0x3cd710);
      return _0x8307fd.extract_shortest_path_from_predecessor_list(_0x444ff8, _0x3cd710);
    },
    PriorityQueue: {
      make: function (_0x2322ea) {
        var _0x5eab39;
        var _0xa0d3f6 = _0x8307fd.PriorityQueue;
        var _0x3ca117 = {};
        _0x2322ea = _0x2322ea || {};
        for (_0x5eab39 in _0xa0d3f6) {
          if (_0xa0d3f6.hasOwnProperty(_0x5eab39)) {
            _0x3ca117[_0x5eab39] = _0xa0d3f6[_0x5eab39];
          }
        }
        _0x3ca117.queue = [];
        _0x3ca117.sorter = _0x2322ea.sorter || _0xa0d3f6.default_sorter;
        return _0x3ca117;
      },
      default_sorter: function (_0x18bffe, _0x15d048) {
        return _0x18bffe.cost - _0x15d048.cost;
      },
      push: function (_0x43a785, _0x1969e8) {
        var _0x4fee62 = {
          value: _0x43a785,
          cost: _0x1969e8
        };
        this.queue.push(_0x4fee62);
        this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return this.queue.length === 0;
      }
    }
  };
  if (_0x512458 !== undefined) {
    _0x512458.exports = _0x8307fd;
  }
});
var U = a(_0x177174 => {
  var _0x5a80f0 = N();
  var _0x1ff1de = D();
  var _0x2394eb = _();
  var _0xb5a533 = B();
  var _0x4f6dea = O();
  var _0x297db2 = A();
  var _0x134161 = y();
  var _0x109c42 = F();
  function _0x259d06(_0x41c851) {
    return unescape(encodeURIComponent(_0x41c851)).length;
  }
  function _0x16aa1b(_0x4811fe, _0x31e9c6, _0x142f43) {
    const _0xaf2e06 = [];
    let _0x53fb6b;
    while ((_0x53fb6b = _0x4811fe.exec(_0x142f43)) !== null) {
      _0xaf2e06.push({
        data: _0x53fb6b[0],
        index: _0x53fb6b.index,
        mode: _0x31e9c6,
        length: _0x53fb6b[0].length
      });
    }
    return _0xaf2e06;
  }
  function _0x4fcbac(_0xcbebb8) {
    const _0x1ae010 = _0x16aa1b(_0x297db2.NUMERIC, _0x5a80f0.NUMERIC, _0xcbebb8);
    const _0x1c856c = _0x16aa1b(_0x297db2.ALPHANUMERIC, _0x5a80f0.ALPHANUMERIC, _0xcbebb8);
    let _0x551405;
    let _0x4b3992;
    if (_0x134161.isKanjiModeEnabled()) {
      _0x551405 = _0x16aa1b(_0x297db2.BYTE, _0x5a80f0.BYTE, _0xcbebb8);
      _0x4b3992 = _0x16aa1b(_0x297db2.KANJI, _0x5a80f0.KANJI, _0xcbebb8);
    } else {
      _0x551405 = _0x16aa1b(_0x297db2.BYTE_KANJI, _0x5a80f0.BYTE, _0xcbebb8);
      _0x4b3992 = [];
    }
    return _0x1ae010.concat(_0x1c856c, _0x551405, _0x4b3992).sort(function (_0x275843, _0x1a7090) {
      return _0x275843.index - _0x1a7090.index;
    }).map(function (_0x2eeec6) {
      return {
        data: _0x2eeec6.data,
        mode: _0x2eeec6.mode,
        length: _0x2eeec6.length
      };
    });
  }
  function _0x5c2d09(_0x4c313c, _0x273580) {
    switch (_0x273580) {
      case _0x5a80f0.NUMERIC:
        return _0x1ff1de.getBitsLength(_0x4c313c);
      case _0x5a80f0.ALPHANUMERIC:
        return _0x2394eb.getBitsLength(_0x4c313c);
      case _0x5a80f0.KANJI:
        return _0x4f6dea.getBitsLength(_0x4c313c);
      case _0x5a80f0.BYTE:
        return _0xb5a533.getBitsLength(_0x4c313c);
    }
  }
  function _0x15ac30(_0x48d93b, _0x3453a4) {
    let _0x1c4b1d;
    const _0x401117 = _0x5a80f0.getBestModeForData(_0x48d93b);
    _0x1c4b1d = _0x5a80f0.from(_0x3453a4, _0x401117);
    if (_0x1c4b1d !== _0x5a80f0.BYTE && _0x1c4b1d.bit < _0x401117.bit) {
      throw new Error("\"" + _0x48d93b + "\" cannot be encoded with mode " + _0x5a80f0.toString(_0x1c4b1d) + ".\n Suggested mode is: " + _0x5a80f0.toString(_0x401117));
    }
    if (_0x1c4b1d === _0x5a80f0.KANJI && !_0x134161.isKanjiModeEnabled()) {
      _0x1c4b1d = _0x5a80f0.BYTE;
    }
    switch (_0x1c4b1d) {
      case _0x5a80f0.NUMERIC:
        return new _0x1ff1de(_0x48d93b);
      case _0x5a80f0.ALPHANUMERIC:
        return new _0x2394eb(_0x48d93b);
      case _0x5a80f0.KANJI:
        return new _0x4f6dea(_0x48d93b);
      case _0x5a80f0.BYTE:
        return new _0xb5a533(_0x48d93b);
    }
  }
  _0x177174.fromArray = function (_0x501ad8) {
    return _0x501ad8.reduce(function (_0x2b9c4c, _0x521f91) {
      if (typeof _0x521f91 == "string") {
        _0x2b9c4c.push(_0x15ac30(_0x521f91, null));
      } else if (_0x521f91.data) {
        _0x2b9c4c.push(_0x15ac30(_0x521f91.data, _0x521f91.mode));
      }
      return _0x2b9c4c;
    }, []);
  };
  _0x177174.fromString = function (_0x5bc927, _0x3867ba) {
    const _0x31ddb9 = function (_0x291994, _0x33cc37) {
      const _0x5c2858 = {};
      const _0x5adc55 = {
        start: {}
      };
      let _0x22c2d8 = ["start"];
      for (let _0x1ef89d = 0; _0x1ef89d < _0x291994.length; _0x1ef89d++) {
        const _0x2891b = _0x291994[_0x1ef89d];
        const _0x5dcd07 = [];
        for (let _0x1cbc94 = 0; _0x1cbc94 < _0x2891b.length; _0x1cbc94++) {
          const _0x39d201 = _0x2891b[_0x1cbc94];
          const _0x2c721f = "" + _0x1ef89d + _0x1cbc94;
          _0x5dcd07.push(_0x2c721f);
          _0x5c2858[_0x2c721f] = {
            node: _0x39d201,
            lastCount: 0
          };
          _0x5adc55[_0x2c721f] = {};
          for (let _0x32d03e = 0; _0x32d03e < _0x22c2d8.length; _0x32d03e++) {
            const _0x4f627f = _0x22c2d8[_0x32d03e];
            if (_0x5c2858[_0x4f627f] && _0x5c2858[_0x4f627f].node.mode === _0x39d201.mode) {
              _0x5adc55[_0x4f627f][_0x2c721f] = _0x5c2d09(_0x5c2858[_0x4f627f].lastCount + _0x39d201.length, _0x39d201.mode) - _0x5c2d09(_0x5c2858[_0x4f627f].lastCount, _0x39d201.mode);
              _0x5c2858[_0x4f627f].lastCount += _0x39d201.length;
            } else {
              if (_0x5c2858[_0x4f627f]) {
                _0x5c2858[_0x4f627f].lastCount = _0x39d201.length;
              }
              _0x5adc55[_0x4f627f][_0x2c721f] = _0x5c2d09(_0x39d201.length, _0x39d201.mode) + 4 + _0x5a80f0.getCharCountIndicator(_0x39d201.mode, _0x33cc37);
            }
          }
        }
        _0x22c2d8 = _0x5dcd07;
      }
      for (let _0xd956d5 = 0; _0xd956d5 < _0x22c2d8.length; _0xd956d5++) {
        _0x5adc55[_0x22c2d8[_0xd956d5]].end = 0;
      }
      return {
        map: _0x5adc55,
        table: _0x5c2858
      };
    }(function (_0x54f941) {
      const _0x3416b2 = [];
      for (let _0x1b9ade = 0; _0x1b9ade < _0x54f941.length; _0x1b9ade++) {
        const _0x477e05 = _0x54f941[_0x1b9ade];
        switch (_0x477e05.mode) {
          case _0x5a80f0.NUMERIC:
            _0x3416b2.push([_0x477e05, {
              data: _0x477e05.data,
              mode: _0x5a80f0.ALPHANUMERIC,
              length: _0x477e05.length
            }, {
              data: _0x477e05.data,
              mode: _0x5a80f0.BYTE,
              length: _0x477e05.length
            }]);
            break;
          case _0x5a80f0.ALPHANUMERIC:
            _0x3416b2.push([_0x477e05, {
              data: _0x477e05.data,
              mode: _0x5a80f0.BYTE,
              length: _0x477e05.length
            }]);
            break;
          case _0x5a80f0.KANJI:
            _0x3416b2.push([_0x477e05, {
              data: _0x477e05.data,
              mode: _0x5a80f0.BYTE,
              length: _0x259d06(_0x477e05.data)
            }]);
            break;
          case _0x5a80f0.BYTE:
            _0x3416b2.push([{
              data: _0x477e05.data,
              mode: _0x5a80f0.BYTE,
              length: _0x259d06(_0x477e05.data)
            }]);
        }
      }
      return _0x3416b2;
    }(_0x4fcbac(_0x5bc927, _0x134161.isKanjiModeEnabled())), _0x3867ba);
    const _0x5d9d50 = _0x109c42.find_path(_0x31ddb9.map, "start", "end");
    const _0x156509 = [];
    for (let _0xf73daf = 1; _0xf73daf < _0x5d9d50.length - 1; _0xf73daf++) {
      _0x156509.push(_0x31ddb9.table[_0x5d9d50[_0xf73daf]].node);
    }
    return _0x177174.fromArray(_0x156509.reduce(function (_0x31d0c3, _0x2c913d) {
      const _0x548f8c = _0x31d0c3.length - 1 >= 0 ? _0x31d0c3[_0x31d0c3.length - 1] : null;
      if (_0x548f8c && _0x548f8c.mode === _0x2c913d.mode) {
        _0x31d0c3[_0x31d0c3.length - 1].data += _0x2c913d.data;
        return _0x31d0c3;
      } else {
        _0x31d0c3.push(_0x2c913d);
        return _0x31d0c3;
      }
    }, []));
  };
  _0x177174.rawSplit = function (_0x181431) {
    return _0x177174.fromArray(_0x4fcbac(_0x181431, _0x134161.isKanjiModeEnabled()));
  };
});
var j = a(_0x207d9e => {
  var _0x434f3a = y();
  var _0x283db5 = w();
  var _0x54e039 = k();
  var _0x1978c5 = x();
  var _0x4660ed = S();
  var _0x26a0fb = C();
  var _0x5176e1 = E();
  var _0x443e47 = T();
  var _0x211062 = M();
  var _0x2365e0 = R();
  var _0x5e252b = I();
  var _0x26db84 = N();
  var _0x559776 = U();
  function _0x1e19b9(_0x1d0f5c, _0x54f857, _0x2b818c) {
    const _0x79371f = _0x1d0f5c.size;
    const _0x2b1066 = _0x5e252b.getEncodedBits(_0x54f857, _0x2b818c);
    let _0x55bf41;
    let _0x4e8b23;
    for (_0x55bf41 = 0; _0x55bf41 < 15; _0x55bf41++) {
      _0x4e8b23 = (_0x2b1066 >> _0x55bf41 & 1) == 1;
      if (_0x55bf41 < 6) {
        _0x1d0f5c.set(_0x55bf41, 8, _0x4e8b23, true);
      } else if (_0x55bf41 < 8) {
        _0x1d0f5c.set(_0x55bf41 + 1, 8, _0x4e8b23, true);
      } else {
        _0x1d0f5c.set(_0x79371f - 15 + _0x55bf41, 8, _0x4e8b23, true);
      }
      if (_0x55bf41 < 8) {
        _0x1d0f5c.set(8, _0x79371f - _0x55bf41 - 1, _0x4e8b23, true);
      } else if (_0x55bf41 < 9) {
        _0x1d0f5c.set(8, 15 - _0x55bf41 - 1 + 1, _0x4e8b23, true);
      } else {
        _0x1d0f5c.set(8, 15 - _0x55bf41 - 1, _0x4e8b23, true);
      }
    }
    _0x1d0f5c.set(_0x79371f - 8, 8, 1, true);
  }
  function _0x467879(_0x769b59, _0x4d62d3, _0xf9f8c2, _0x3d27e4) {
    let _0x24dc4e;
    if (Array.isArray(_0x769b59)) {
      _0x24dc4e = _0x559776.fromArray(_0x769b59);
    } else {
      if (typeof _0x769b59 != "string") {
        throw new Error("Invalid data");
      }
      {
        let _0x465edc = _0x4d62d3;
        if (!_0x465edc) {
          const _0x27f266 = _0x559776.rawSplit(_0x769b59);
          _0x465edc = _0x2365e0.getBestVersionForData(_0x27f266, _0xf9f8c2);
        }
        _0x24dc4e = _0x559776.fromString(_0x769b59, _0x465edc || 40);
      }
    }
    const _0x39abd1 = _0x2365e0.getBestVersionForData(_0x24dc4e, _0xf9f8c2);
    if (!_0x39abd1) {
      throw new Error("The amount of data is too big to be stored in a QR Code");
    }
    if (_0x4d62d3) {
      if (_0x4d62d3 < _0x39abd1) {
        throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + _0x39abd1 + ".\n");
      }
    } else {
      _0x4d62d3 = _0x39abd1;
    }
    const _0xbe230a = function (_0x1976cc, _0x17a3ac, _0x25755d) {
      const _0x25c230 = new _0x54e039();
      _0x25755d.forEach(function (_0x35a12e) {
        _0x25c230.put(_0x35a12e.mode.bit, 4);
        _0x25c230.put(_0x35a12e.getLength(), _0x26db84.getCharCountIndicator(_0x35a12e.mode, _0x1976cc));
        _0x35a12e.write(_0x25c230);
      });
      const _0x348e21 = (_0x434f3a.getSymbolTotalCodewords(_0x1976cc) - _0x443e47.getTotalCodewordsCount(_0x1976cc, _0x17a3ac)) * 8;
      for (_0x25c230.getLengthInBits() + 4 <= _0x348e21 && _0x25c230.put(0, 4); _0x25c230.getLengthInBits() % 8 != 0;) {
        _0x25c230.putBit(0);
      }
      const _0x44f34a = (_0x348e21 - _0x25c230.getLengthInBits()) / 8;
      for (let _0x3d30e0 = 0; _0x3d30e0 < _0x44f34a; _0x3d30e0++) {
        _0x25c230.put(_0x3d30e0 % 2 ? 17 : 236, 8);
      }
      return function (_0x56b2c3, _0x3efe9f, _0x1c4460) {
        const _0x28777c = _0x434f3a.getSymbolTotalCodewords(_0x3efe9f);
        const _0x13d276 = _0x28777c - _0x443e47.getTotalCodewordsCount(_0x3efe9f, _0x1c4460);
        const _0x469a14 = _0x443e47.getBlocksCount(_0x3efe9f, _0x1c4460);
        const _0x18429a = _0x469a14 - _0x28777c % _0x469a14;
        const _0x5ed58e = Math.floor(_0x28777c / _0x469a14);
        const _0x41b953 = Math.floor(_0x13d276 / _0x469a14);
        const _0x15c4ee = _0x41b953 + 1;
        const _0x20fcf4 = _0x5ed58e - _0x41b953;
        const _0x37a78e = new _0x211062(_0x20fcf4);
        let _0x3491df = 0;
        const _0x225cb6 = new Array(_0x469a14);
        const _0x4d42e5 = new Array(_0x469a14);
        let _0x4a0d3b = 0;
        const _0x2f1d53 = new Uint8Array(_0x56b2c3.buffer);
        for (let _0x129414 = 0; _0x129414 < _0x469a14; _0x129414++) {
          const _0x4d1a65 = _0x129414 < _0x18429a ? _0x41b953 : _0x15c4ee;
          _0x225cb6[_0x129414] = _0x2f1d53.slice(_0x3491df, _0x3491df + _0x4d1a65);
          _0x4d42e5[_0x129414] = _0x37a78e.encode(_0x225cb6[_0x129414]);
          _0x3491df += _0x4d1a65;
          _0x4a0d3b = Math.max(_0x4a0d3b, _0x4d1a65);
        }
        const _0x21a558 = new Uint8Array(_0x28777c);
        let _0x52bb75;
        let _0x489e46;
        let _0x5c7a21 = 0;
        for (_0x52bb75 = 0; _0x52bb75 < _0x4a0d3b; _0x52bb75++) {
          for (_0x489e46 = 0; _0x489e46 < _0x469a14; _0x489e46++) {
            if (_0x52bb75 < _0x225cb6[_0x489e46].length) {
              _0x21a558[_0x5c7a21++] = _0x225cb6[_0x489e46][_0x52bb75];
            }
          }
        }
        for (_0x52bb75 = 0; _0x52bb75 < _0x20fcf4; _0x52bb75++) {
          for (_0x489e46 = 0; _0x489e46 < _0x469a14; _0x489e46++) {
            _0x21a558[_0x5c7a21++] = _0x4d42e5[_0x489e46][_0x52bb75];
          }
        }
        return _0x21a558;
      }(_0x25c230, _0x1976cc, _0x17a3ac);
    }(_0x4d62d3, _0xf9f8c2, _0x24dc4e);
    const _0x5d79b7 = new _0x1978c5(_0x434f3a.getSymbolSize(_0x4d62d3));
    (function (_0x4ec2e8, _0x2966bb) {
      const _0x48fa0d = _0x4ec2e8.size;
      const _0x29e1b5 = _0x26a0fb.getPositions(_0x2966bb);
      for (let _0x526636 = 0; _0x526636 < _0x29e1b5.length; _0x526636++) {
        const _0x534a3f = _0x29e1b5[_0x526636][0];
        const _0x7be56b = _0x29e1b5[_0x526636][1];
        for (let _0x230e9b = -1; _0x230e9b <= 7; _0x230e9b++) {
          if (!(_0x534a3f + _0x230e9b <= -1) && !(_0x48fa0d <= _0x534a3f + _0x230e9b)) {
            for (let _0x348e5e = -1; _0x348e5e <= 7; _0x348e5e++) {
              if (!(_0x7be56b + _0x348e5e <= -1) && !(_0x48fa0d <= _0x7be56b + _0x348e5e)) {
                if (_0x230e9b >= 0 && _0x230e9b <= 6 && (_0x348e5e === 0 || _0x348e5e === 6) || _0x348e5e >= 0 && _0x348e5e <= 6 && (_0x230e9b === 0 || _0x230e9b === 6) || _0x230e9b >= 2 && _0x230e9b <= 4 && _0x348e5e >= 2 && _0x348e5e <= 4) {
                  _0x4ec2e8.set(_0x534a3f + _0x230e9b, _0x7be56b + _0x348e5e, true, true);
                } else {
                  _0x4ec2e8.set(_0x534a3f + _0x230e9b, _0x7be56b + _0x348e5e, false, true);
                }
              }
            }
          }
        }
      }
    })(_0x5d79b7, _0x4d62d3);
    (function (_0x1a231e) {
      const _0x3edf19 = _0x1a231e.size;
      for (let _0xb91712 = 8; _0xb91712 < _0x3edf19 - 8; _0xb91712++) {
        const _0x37ba8a = _0xb91712 % 2 == 0;
        _0x1a231e.set(_0xb91712, 6, _0x37ba8a, true);
        _0x1a231e.set(6, _0xb91712, _0x37ba8a, true);
      }
    })(_0x5d79b7);
    (function (_0x5e2bf7, _0x250124) {
      const _0x2158ee = _0x4660ed.getPositions(_0x250124);
      for (let _0x221c24 = 0; _0x221c24 < _0x2158ee.length; _0x221c24++) {
        const _0x59b9b4 = _0x2158ee[_0x221c24][0];
        const _0x4d5b40 = _0x2158ee[_0x221c24][1];
        for (let _0x3560e7 = -2; _0x3560e7 <= 2; _0x3560e7++) {
          for (let _0x2ae25b = -2; _0x2ae25b <= 2; _0x2ae25b++) {
            if (_0x3560e7 === -2 || _0x3560e7 === 2 || _0x2ae25b === -2 || _0x2ae25b === 2 || _0x3560e7 === 0 && _0x2ae25b === 0) {
              _0x5e2bf7.set(_0x59b9b4 + _0x3560e7, _0x4d5b40 + _0x2ae25b, true, true);
            } else {
              _0x5e2bf7.set(_0x59b9b4 + _0x3560e7, _0x4d5b40 + _0x2ae25b, false, true);
            }
          }
        }
      }
    })(_0x5d79b7, _0x4d62d3);
    _0x1e19b9(_0x5d79b7, _0xf9f8c2, 0);
    if (_0x4d62d3 >= 7) {
      (function (_0x505f99, _0x13a747) {
        const _0x266f04 = _0x505f99.size;
        const _0x6eed4f = _0x2365e0.getEncodedBits(_0x13a747);
        let _0x50e18b;
        let _0x2270c0;
        let _0xf426de;
        for (let _0x3732a2 = 0; _0x3732a2 < 18; _0x3732a2++) {
          _0x50e18b = Math.floor(_0x3732a2 / 3);
          _0x2270c0 = _0x3732a2 % 3 + _0x266f04 - 8 - 3;
          _0xf426de = (_0x6eed4f >> _0x3732a2 & 1) == 1;
          _0x505f99.set(_0x50e18b, _0x2270c0, _0xf426de, true);
          _0x505f99.set(_0x2270c0, _0x50e18b, _0xf426de, true);
        }
      })(_0x5d79b7, _0x4d62d3);
    }
    (function (_0x33136e, _0x584edb) {
      const _0x2acc7d = _0x33136e.size;
      let _0x2f5b1c = -1;
      let _0x2205c5 = _0x2acc7d - 1;
      let _0x2c3d52 = 7;
      let _0x280249 = 0;
      for (let _0xf931b1 = _0x2acc7d - 1; _0xf931b1 > 0; _0xf931b1 -= 2) {
        for (_0xf931b1 === 6 && _0xf931b1--;;) {
          for (let _0x5d66e3 = 0; _0x5d66e3 < 2; _0x5d66e3++) {
            if (!_0x33136e.isReserved(_0x2205c5, _0xf931b1 - _0x5d66e3)) {
              let _0x222986 = false;
              if (_0x280249 < _0x584edb.length) {
                _0x222986 = (_0x584edb[_0x280249] >>> _0x2c3d52 & 1) == 1;
              }
              _0x33136e.set(_0x2205c5, _0xf931b1 - _0x5d66e3, _0x222986);
              _0x2c3d52--;
              if (_0x2c3d52 === -1) {
                _0x280249++;
                _0x2c3d52 = 7;
              }
            }
          }
          _0x2205c5 += _0x2f5b1c;
          if (_0x2205c5 < 0 || _0x2acc7d <= _0x2205c5) {
            _0x2205c5 -= _0x2f5b1c;
            _0x2f5b1c = -_0x2f5b1c;
            break;
          }
        }
      }
    })(_0x5d79b7, _0xbe230a);
    if (isNaN(_0x3d27e4)) {
      _0x3d27e4 = _0x5176e1.getBestMask(_0x5d79b7, _0x1e19b9.bind(null, _0x5d79b7, _0xf9f8c2));
    }
    _0x5176e1.applyMask(_0x3d27e4, _0x5d79b7);
    _0x1e19b9(_0x5d79b7, _0xf9f8c2, _0x3d27e4);
    return {
      modules: _0x5d79b7,
      version: _0x4d62d3,
      errorCorrectionLevel: _0xf9f8c2,
      maskPattern: _0x3d27e4,
      segments: _0x24dc4e
    };
  }
  _0x207d9e.create = function (_0x4d09a1, _0x4473bd) {
    if (_0x4d09a1 === undefined || _0x4d09a1 === "") {
      throw new Error("No input text");
    }
    let _0x5cd606;
    let _0x4abaf7;
    let _0x458c43 = _0x283db5.M;
    if (_0x4473bd !== undefined) {
      _0x458c43 = _0x283db5.from(_0x4473bd.errorCorrectionLevel, _0x283db5.M);
      _0x5cd606 = _0x2365e0.from(_0x4473bd.version);
      _0x4abaf7 = _0x5176e1.from(_0x4473bd.maskPattern);
      if (_0x4473bd.toSJISFunc) {
        _0x434f3a.setToSJISFunction(_0x4473bd.toSJISFunc);
      }
    }
    return _0x467879(_0x4d09a1, _0x5cd606, _0x458c43, _0x4abaf7);
  };
});
var V = a(_0x1c5ba2 => {
  function _0x4eb4fb(_0x4b3800) {
    if (typeof _0x4b3800 == "number") {
      _0x4b3800 = _0x4b3800.toString();
    }
    if (typeof _0x4b3800 != "string") {
      throw new Error("Color should be defined as hex string");
    }
    let _0x3d9aa0 = _0x4b3800.slice().replace("#", "").split("");
    if (_0x3d9aa0.length < 3 || _0x3d9aa0.length === 5 || _0x3d9aa0.length > 8) {
      throw new Error("Invalid hex color: " + _0x4b3800);
    }
    if (_0x3d9aa0.length === 3 || _0x3d9aa0.length === 4) {
      _0x3d9aa0 = Array.prototype.concat.apply([], _0x3d9aa0.map(function (_0x20d0c4) {
        return [_0x20d0c4, _0x20d0c4];
      }));
    }
    if (_0x3d9aa0.length === 6) {
      _0x3d9aa0.push("F", "F");
    }
    const _0x24094e = parseInt(_0x3d9aa0.join(""), 16);
    return {
      r: _0x24094e >> 24 & 255,
      g: _0x24094e >> 16 & 255,
      b: _0x24094e >> 8 & 255,
      a: _0x24094e & 255,
      hex: "#" + _0x3d9aa0.slice(0, 6).join("")
    };
  }
  _0x1c5ba2.getOptions = function (_0x2a4c57) {
    _0x2a4c57 ||= {};
    _0x2a4c57.color ||= {};
    const _0x264705 = _0x2a4c57.margin === undefined || _0x2a4c57.margin === null || _0x2a4c57.margin < 0 ? 4 : _0x2a4c57.margin;
    const _0x40c7a7 = _0x2a4c57.width && _0x2a4c57.width >= 21 ? _0x2a4c57.width : undefined;
    const _0x1f2cb2 = _0x2a4c57.scale || 4;
    return {
      width: _0x40c7a7,
      scale: _0x40c7a7 ? 4 : _0x1f2cb2,
      margin: _0x264705,
      color: {
        dark: _0x4eb4fb(_0x2a4c57.color.dark || "#000000ff"),
        light: _0x4eb4fb(_0x2a4c57.color.light || "#ffffffff")
      },
      type: _0x2a4c57.type,
      rendererOpts: _0x2a4c57.rendererOpts || {}
    };
  };
  _0x1c5ba2.getScale = function (_0x379ef3, _0x5b110f) {
    if (_0x5b110f.width && _0x5b110f.width >= _0x379ef3 + _0x5b110f.margin * 2) {
      return _0x5b110f.width / (_0x379ef3 + _0x5b110f.margin * 2);
    } else {
      return _0x5b110f.scale;
    }
  };
  _0x1c5ba2.getImageWidth = function (_0x5f1cba, _0x3df401) {
    const _0x1de973 = _0x1c5ba2.getScale(_0x5f1cba, _0x3df401);
    return Math.floor((_0x5f1cba + _0x3df401.margin * 2) * _0x1de973);
  };
  _0x1c5ba2.qrToImageData = function (_0x20bc4c, _0xa8f765, _0x4f31ee) {
    const _0x3b7fb5 = _0xa8f765.modules.size;
    const _0xefad56 = _0xa8f765.modules.data;
    const _0x193c2e = _0x1c5ba2.getScale(_0x3b7fb5, _0x4f31ee);
    const _0x2183d = Math.floor((_0x3b7fb5 + _0x4f31ee.margin * 2) * _0x193c2e);
    const _0x46dc4e = _0x4f31ee.margin * _0x193c2e;
    const _0x3d2aae = [_0x4f31ee.color.light, _0x4f31ee.color.dark];
    for (let _0x4ff570 = 0; _0x4ff570 < _0x2183d; _0x4ff570++) {
      for (let _0x10e0ba = 0; _0x10e0ba < _0x2183d; _0x10e0ba++) {
        let _0x2d67ff = (_0x4ff570 * _0x2183d + _0x10e0ba) * 4;
        let _0x24eaf3 = _0x4f31ee.color.light;
        if (_0x4ff570 >= _0x46dc4e && _0x10e0ba >= _0x46dc4e && _0x4ff570 < _0x2183d - _0x46dc4e && _0x10e0ba < _0x2183d - _0x46dc4e) {
          _0x24eaf3 = _0x3d2aae[_0xefad56[Math.floor((_0x4ff570 - _0x46dc4e) / _0x193c2e) * _0x3b7fb5 + Math.floor((_0x10e0ba - _0x46dc4e) / _0x193c2e)] ? 1 : 0];
        }
        _0x20bc4c[_0x2d67ff++] = _0x24eaf3.r;
        _0x20bc4c[_0x2d67ff++] = _0x24eaf3.g;
        _0x20bc4c[_0x2d67ff++] = _0x24eaf3.b;
        _0x20bc4c[_0x2d67ff] = _0x24eaf3.a;
      }
    }
  };
});
var H = a(_0x76be88 => {
  var _0x1f6f78 = V();
  _0x76be88.render = function (_0x5577b4, _0x107d8a, _0x553012) {
    let _0x43e7d9 = _0x553012;
    let _0x4aa860 = _0x107d8a;
    if (_0x43e7d9 === undefined && (!_0x107d8a || !_0x107d8a.getContext)) {
      _0x43e7d9 = _0x107d8a;
      _0x107d8a = undefined;
    }
    if (!_0x107d8a) {
      _0x4aa860 = function () {
        try {
          return document.createElement("canvas");
        } catch (_0x3afbb7) {
          throw new Error("You need to specify a canvas element");
        }
      }();
    }
    _0x43e7d9 = _0x1f6f78.getOptions(_0x43e7d9);
    const _0x16e627 = _0x1f6f78.getImageWidth(_0x5577b4.modules.size, _0x43e7d9);
    const _0x155bd6 = _0x4aa860.getContext("2d");
    const _0x457e68 = _0x155bd6.createImageData(_0x16e627, _0x16e627);
    _0x1f6f78.qrToImageData(_0x457e68.data, _0x5577b4, _0x43e7d9);
    (function (_0x5ac8a3, _0x2e9ac0, _0x2d7c95) {
      _0x5ac8a3.clearRect(0, 0, _0x2e9ac0.width, _0x2e9ac0.height);
      _0x2e9ac0.style ||= {};
      _0x2e9ac0.height = _0x2d7c95;
      _0x2e9ac0.width = _0x2d7c95;
      _0x2e9ac0.style.height = _0x2d7c95 + "px";
      _0x2e9ac0.style.width = _0x2d7c95 + "px";
    })(_0x155bd6, _0x4aa860, _0x16e627);
    _0x155bd6.putImageData(_0x457e68, 0, 0);
    return _0x4aa860;
  };
  _0x76be88.renderToDataURL = function (_0x40c4ac, _0x394602, _0x5d05a3) {
    let _0x36b0c2 = _0x5d05a3;
    if (_0x36b0c2 === undefined && (!_0x394602 || !_0x394602.getContext)) {
      _0x36b0c2 = _0x394602;
      _0x394602 = undefined;
    }
    _0x36b0c2 ||= {};
    const _0x10e20b = _0x76be88.render(_0x40c4ac, _0x394602, _0x36b0c2);
    const _0x8dfee2 = _0x36b0c2.type || "image/png";
    const _0x22cd5f = _0x36b0c2.rendererOpts || {};
    return _0x10e20b.toDataURL(_0x8dfee2, _0x22cd5f.quality);
  };
});
var X = a(_0x164b16 => {
  var _0x42d843 = V();
  function _0x42e99f(_0x23c0ab, _0x1c9917) {
    const _0x413f8e = _0x23c0ab.a / 255;
    const _0x3be932 = _0x1c9917 + "=\"" + _0x23c0ab.hex + "\"";
    if (_0x413f8e < 1) {
      return _0x3be932 + " " + _0x1c9917 + "-opacity=\"" + _0x413f8e.toFixed(2).slice(1) + "\"";
    } else {
      return _0x3be932;
    }
  }
  function _0x319b57(_0x3b9700, _0x2e7f87, _0x55b54a) {
    let _0x47e0c3 = _0x3b9700 + _0x2e7f87;
    if (_0x55b54a !== undefined) {
      _0x47e0c3 += " " + _0x55b54a;
    }
    return _0x47e0c3;
  }
  _0x164b16.render = function (_0x274483, _0x12a2e6, _0x697e75) {
    const _0x39ecc0 = _0x42d843.getOptions(_0x12a2e6);
    const _0x3aee03 = _0x274483.modules.size;
    const _0xd1017a = _0x274483.modules.data;
    const _0x5dbd51 = _0x3aee03 + _0x39ecc0.margin * 2;
    const _0x528408 = _0x39ecc0.color.light.a ? "<path " + _0x42e99f(_0x39ecc0.color.light, "fill") + " d=\"M0 0h" + _0x5dbd51 + "v" + _0x5dbd51 + "H0z\"/>" : "";
    const _0x1907b1 = "<path " + _0x42e99f(_0x39ecc0.color.dark, "stroke") + " d=\"" + function (_0x1f18b7, _0x4d4c69, _0x56eb27) {
      let _0x31e299 = "";
      let _0x2e10e4 = 0;
      let _0x22cf17 = false;
      let _0x2b9704 = 0;
      for (let _0x3d1de0 = 0; _0x3d1de0 < _0x1f18b7.length; _0x3d1de0++) {
        const _0x162e85 = Math.floor(_0x3d1de0 % _0x4d4c69);
        const _0x1a9ea0 = Math.floor(_0x3d1de0 / _0x4d4c69);
        if (!_0x162e85 && !_0x22cf17) {
          _0x22cf17 = true;
        }
        if (_0x1f18b7[_0x3d1de0]) {
          _0x2b9704++;
          if (!(_0x3d1de0 > 0) || !(_0x162e85 > 0) || !_0x1f18b7[_0x3d1de0 - 1]) {
            _0x31e299 += _0x22cf17 ? _0x319b57("M", _0x162e85 + _0x56eb27, 0.5 + _0x1a9ea0 + _0x56eb27) : _0x319b57("m", _0x2e10e4, 0);
            _0x2e10e4 = 0;
            _0x22cf17 = false;
          }
          if (!(_0x162e85 + 1 < _0x4d4c69) || !_0x1f18b7[_0x3d1de0 + 1]) {
            _0x31e299 += _0x319b57("h", _0x2b9704);
            _0x2b9704 = 0;
          }
        } else {
          _0x2e10e4++;
        }
      }
      return _0x31e299;
    }(_0xd1017a, _0x3aee03, _0x39ecc0.margin) + "\"/>";
    const _0x33926c = "viewBox=\"0 0 " + _0x5dbd51 + " " + _0x5dbd51 + "\"";
    const _0x47aba6 = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (_0x39ecc0.width ? "width=\"" + _0x39ecc0.width + "\" height=\"" + _0x39ecc0.width + "\" " : "") + _0x33926c + " shape-rendering=\"crispEdges\">" + _0x528408 + _0x1907b1 + "</svg>\n";
    if (typeof _0x697e75 == "function") {
      _0x697e75(null, _0x47aba6);
    }
    return _0x47aba6;
  };
});
var Y = i(a(_0x4140ce => {
  var _0x3a8da8 = b();
  var _0x4c3241 = j();
  var _0x4bc8e6 = H();
  var _0x401fd3 = X();
  function _0x41ab80(_0x16c717, _0x4b5c53, _0x31c84d, _0x158c84, _0x2b3a73) {
    const _0x43d5d1 = [].slice.call(arguments, 1);
    const _0x17aed8 = _0x43d5d1.length;
    const _0x22ce6f = typeof _0x43d5d1[_0x17aed8 - 1] == "function";
    if (!_0x22ce6f && !_0x3a8da8()) {
      throw new Error("Callback required as last argument");
    }
    if (!_0x22ce6f) {
      if (_0x17aed8 < 1) {
        throw new Error("Too few arguments provided");
      }
      if (_0x17aed8 === 1) {
        _0x31c84d = _0x4b5c53;
        _0x4b5c53 = _0x158c84 = undefined;
      } else if (_0x17aed8 === 2 && !_0x4b5c53.getContext) {
        _0x158c84 = _0x31c84d;
        _0x31c84d = _0x4b5c53;
        _0x4b5c53 = undefined;
      }
      return new Promise(function (_0x80954a, _0x5a18ce) {
        try {
          _0x80954a(_0x16c717(_0x4c3241.create(_0x31c84d, _0x158c84), _0x4b5c53, _0x158c84));
        } catch (_0x79c4b3) {
          _0x5a18ce(_0x79c4b3);
        }
      });
    }
    if (_0x17aed8 < 2) {
      throw new Error("Too few arguments provided");
    }
    if (_0x17aed8 === 2) {
      _0x2b3a73 = _0x31c84d;
      _0x31c84d = _0x4b5c53;
      _0x4b5c53 = _0x158c84 = undefined;
    } else if (_0x17aed8 === 3) {
      if (_0x4b5c53.getContext && _0x2b3a73 === undefined) {
        _0x2b3a73 = _0x158c84;
        _0x158c84 = undefined;
      } else {
        _0x2b3a73 = _0x158c84;
        _0x158c84 = _0x31c84d;
        _0x31c84d = _0x4b5c53;
        _0x4b5c53 = undefined;
      }
    }
    try {
      const _0x395ad6 = _0x4c3241.create(_0x31c84d, _0x158c84);
      _0x2b3a73(null, _0x16c717(_0x395ad6, _0x4b5c53, _0x158c84));
    } catch (_0x4599e1) {
      _0x2b3a73(_0x4599e1);
    }
  }
  _0x4140ce.create = _0x4c3241.create;
  _0x4140ce.toCanvas = _0x41ab80.bind(null, _0x4bc8e6.render);
  _0x4140ce.toDataURL = _0x41ab80.bind(null, _0x4bc8e6.renderToDataURL);
  _0x4140ce.toString = _0x41ab80.bind(null, function (_0x5e2de4, _0x537e7e, _0x365feb) {
    return _0x401fd3.render(_0x5e2de4, _0x365feb);
  });
})(), 1);

export default Y;
