function karatsuba(x, y) {
    x = __addLeadingZero(__makeSimilarBits(x, y)),
    y = __addLeadingZero(__makeSimilarBits(y, x))

    var lenX = x.length,
        lenY = y.length,
        a = x.slice(0, lenX / 2),
        b = x.slice(lenX / 2, lenX),
        c = y.slice(0, lenY / 2),
        d = y.slice(lenY / 2, lenY),
        n = Math.max(lenX, lenY),
        ad, bc, bd, ac

    ad = n > 2 ? karatsuba(a, d) : a * d
    bc = n > 2 ? karatsuba(b, c) : b * c
    ac = n > 2 ? karatsuba(a, c) : a * c
    bd = n > 2 ? karatsuba(b, d) : b * d
    return Math.pow(10, n) * ac + Math.pow(10, n / 2) * (ad + bc) + bd
}

function __makeSimilarBits(x, y) {
    x = String(x)
    y = String(y)
    while (x.length < y.length) {
        x = '0' + x
    }
    return x
}

function __addLeadingZero(x) {
    return x.length % 2 ? '0' + x : x
}
