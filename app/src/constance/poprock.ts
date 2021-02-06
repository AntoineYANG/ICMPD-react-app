/*
 * @Author: Kanata You 
 * @Date: 2021-02-06 16:49:50 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-06 17:37:58
 */

const poprock: {
  label: string;data: [number, number][]
} [] = [{
  "label": "danceability",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 0.521],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 3.8009999999999997],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0.794],
    [1938, 0.575],
    [1939, 0],
    [1940, 0],
    [1941, 0.946],
    [1942, 37.659],
    [1943, 0],
    [1944, 0],
    [1945, 0.843],
    [1946, 0],
    [1947, 1.7479999999999998],
    [1948, 0],
    [1949, 1.333],
    [1950, 1.048],
    [1951, 1.358],
    [1952, 0],
    [1953, 0],
    [1954, 10.923000000000002],
    [1955, 2.918],
    [1956, 19.426000000000002],
    [1957, 49.29799999999997],
    [1958, 83.05000000000003],
    [1959, 84.26299999999998],
    [1960, 111.08000000000003],
    [1961, 122.31600000000005],
    [1962, 146.42700000000002],
    [1963, 235.77900000000002],
    [1964, 228.5609999999998],
    [1965, 327.70799999999986],
    [1966, 437.14250000000015],
    [1967, 492.12599999999975],
    [1968, 441.30100000000004],
    [1969, 536.457299999999],
    [1970, 606.0629999999999],
    [1971, 557.0136999999997],
    [1972, 492.06100000000055],
    [1973, 548.6185999999996],
    [1974, 568.9524999999992],
    [1975, 501.9467000000003],
    [1976, 489.21100000000024],
    [1977, 616.1085000000012],
    [1978, 551.0889999999999],
    [1979, 629.9110000000007],
    [1980, 587.1234000000005],
    [1981, 571.4879999999998],
    [1982, 569.1716999999999],
    [1983, 638.9993999999991],
    [1984, 525.1445999999999],
    [1985, 564.2805000000006],
    [1986, 516.712],
    [1987, 529.4181999999998],
    [1988, 503.4977999999999],
    [1989, 488.92100000000056],
    [1990, 420.57499999999925],
    [1991, 395.0600999999999],
    [1992, 390.48899999999946],
    [1993, 347.32519999999965],
    [1994, 392.8396000000001],
    [1995, 342.76000000000005],
    [1996, 354.22099999999995],
    [1997, 350.1089999999997],
    [1998, 323.5941000000003],
    [1999, 375.0043999999996],
    [2000, 392.0443000000001],
    [2001, 379.4849999999995],
    [2002, 412.34899999999993],
    [2003, 436.4900000000001],
    [2004, 393.1163999999997],
    [2005, 369.5460000000002],
    [2006, 407.57910000000004],
    [2007, 415.86689999999976],
    [2008, 408.52299999999997],
    [2009, 350.23670000000016],
    [2010, 340.76700000000017],
    [2011, 309.0185],
    [2012, 365.60000000000014],
    [2013, 353.19399999999973],
    [2014, 270.564],
    [2015, 252.68999999999997],
    [2016, 200.5510000000001],
    [2017, 197.12700000000015],
    [2018, 151.693],
    [2019, 179.7069999999998],
    [2020, 140.61599999999996]
  ]
}, {
  "label": "energy",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 0.539],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 1.2659],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0.298],
    [1938, 0.495],
    [1939, 0],
    [1940, 0],
    [1941, 0.81],
    [1942, 34.70989999999999],
    [1943, 0],
    [1944, 0],
    [1945, 0.616],
    [1946, 0],
    [1947, 1.195],
    [1948, 0],
    [1949, 0.8132],
    [1950, 1.155],
    [1951, 1.217],
    [1952, 0],
    [1953, 0],
    [1954, 8.118],
    [1955, 3.348],
    [1956, 20.098199999999995],
    [1957, 40.24029999999998],
    [1958, 70.53630000000001],
    [1959, 72.7401],
    [1960, 103.57139999999997],
    [1961, 115.54780000000005],
    [1962, 138.32970000000003],
    [1963, 218.63319999999993],
    [1964, 265.2502699999999],
    [1965, 394.9669999999996],
    [1966, 518.3176000000001],
    [1967, 520.9597000000002],
    [1968, 466.0102999999991],
    [1969, 576.6995900000007],
    [1970, 639.8260000000007],
    [1971, 599.7216000000002],
    [1972, 519.2307199999996],
    [1973, 627.4701999999986],
    [1974, 618.2300999999995],
    [1975, 585.5842999999988],
    [1976, 611.1590000000002],
    [1977, 734.238618],
    [1978, 658.09318],
    [1979, 759.1748999999994],
    [1980, 751.5768599999997],
    [1981, 764.5995999999994],
    [1982, 731.1169209999998],
    [1983, 837.9639299999986],
    [1984, 734.6916300000013],
    [1985, 740.4263],
    [1986, 733.1227000000002],
    [1987, 724.8163000000014],
    [1988, 696.4084499999996],
    [1989, 673.0227999999998],
    [1990, 592.2142000000005],
    [1991, 542.4130000000005],
    [1992, 540.9044999999999],
    [1993, 464.09920000000005],
    [1994, 552.4237089999999],
    [1995, 494.06541],
    [1996, 470.90570000000014],
    [1997, 489.2237202],
    [1998, 462.2758999999995],
    [1999, 533.69777],
    [2000, 541.3360499999999],
    [2001, 525.9485999999997],
    [2002, 597.2210000000001],
    [2003, 641.8935900000008],
    [2004, 586.79256],
    [2005, 535.9263000000008],
    [2006, 594.4278999999998],
    [2007, 598.6284000000002],
    [2008, 564.7871999999994],
    [2009, 510.0090000000001],
    [2010, 474.93779999999964],
    [2011, 422.19220000000047],
    [2012, 461.98909999999967],
    [2013, 435.16910000000024],
    [2014, 334.11799999999977],
    [2015, 312.3770000000004],
    [2016, 225.1362999999999],
    [2017, 196.01899999999998],
    [2018, 157.85700000000003],
    [2019, 173.2543],
    [2020, 147.27200000000008]
  ]
}, {
  "label": "valence",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 0.806],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 2.5799999999999996],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0.679],
    [1938, 0.726],
    [1939, 0],
    [1940, 0],
    [1941, 0.508],
    [1942, 51.87499999999998],
    [1943, 0],
    [1944, 0],
    [1945, 0.758],
    [1946, 0],
    [1947, 1.512],
    [1948, 0],
    [1949, 2.358],
    [1950, 0.657],
    [1951, 1.72],
    [1952, 0],
    [1953, 0],
    [1954, 12.396],
    [1955, 3.828],
    [1956, 25.367],
    [1957, 61.611999999999995],
    [1958, 101.53500000000005],
    [1959, 100.64469999999996],
    [1960, 141.47250000000005],
    [1961, 164.028],
    [1962, 185.90130000000008],
    [1963, 306.7043999999998],
    [1964, 306.30810000000014],
    [1965, 428.9309000000001],
    [1966, 539.9040999999993],
    [1967, 556.5304999999996],
    [1968, 510.91259999999994],
    [1969, 594.9713000000002],
    [1970, 685.597000000001],
    [1971, 633.8278999999992],
    [1972, 568.6936],
    [1973, 626.5546000000003],
    [1974, 646.1674000000002],
    [1975, 563.3827999999999],
    [1976, 550.0727999999997],
    [1977, 687.0302000000003],
    [1978, 611.4742000000009],
    [1979, 695.9721],
    [1980, 650.0863],
    [1981, 628.9828000000002],
    [1982, 620.9469999999994],
    [1983, 693.3535000000006],
    [1984, 574.4558000000002],
    [1985, 601.1192000000004],
    [1986, 543.3192000000003],
    [1987, 544.4927999999999],
    [1988, 532.8232000000002],
    [1989, 503.7768000000003],
    [1990, 425.0198],
    [1991, 401.38790000000114],
    [1992, 391.4370999999998],
    [1993, 337.28379999999987],
    [1994, 399.3305000000003],
    [1995, 345.06689999999986],
    [1996, 350.8505999999998],
    [1997, 347.9303000000002],
    [1998, 317.6826999999999],
    [1999, 357.7592000000002],
    [2000, 388.81729999999965],
    [2001, 360.8955000000007],
    [2002, 392.7573],
    [2003, 411.6857],
    [2004, 373.83050000000003],
    [2005, 357.4311000000001],
    [2006, 375.2121],
    [2007, 385.21699999999987],
    [2008, 377.4561999999999],
    [2009, 320.11799999999965],
    [2010, 310.31479999999993],
    [2011, 272.0291999999999],
    [2012, 309.85469999999964],
    [2013, 292.11229999999983],
    [2014, 219.22860000000026],
    [2015, 203.31360000000004],
    [2016, 163.51659999999993],
    [2017, 137.62019999999987],
    [2018, 110.52899999999998],
    [2019, 135.28899999999996],
    [2020, 112.47230000000005]
  ]
}, {
  "label": "tempo",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 93.412],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 978.154],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 116.045],
    [1938, 143.95],
    [1939, 0],
    [1940, 0],
    [1941, 195.84300000000002],
    [1942, 9261.011999999999],
    [1943, 0],
    [1944, 0],
    [1945, 179.945],
    [1946, 0],
    [1947, 382.062],
    [1948, 0],
    [1949, 233.81],
    [1950, 349.05],
    [1951, 340.982],
    [1952, 0],
    [1953, 0],
    [1954, 2460.533],
    [1955, 408.265],
    [1956, 4128.6990000000005],
    [1957, 9935.580999999998],
    [1958, 17173.926000000003],
    [1959, 17336.582000000006],
    [1960, 24457.899000000005],
    [1961, 27043.953999999994],
    [1962, 33211.63800000001],
    [1963, 55303.16400000002],
    [1964, 54652.369],
    [1965, 78800.0610000001],
    [1966, 106535.35999999997],
    [1967, 121880.338],
    [1968, 108790.159],
    [1969, 136669.36900000012],
    [1970, 145928.95500000005],
    [1971, 139267.81300000014],
    [1972, 120919.88499999994],
    [1973, 139076.75100000008],
    [1974, 138656.07899999994],
    [1975, 126447.27999999994],
    [1976, 123801.51599999997],
    [1977, 153363.51200000005],
    [1978, 131734.5670000002],
    [1979, 148315.39200000014],
    [1980, 140946.716],
    [1981, 142015.8669999999],
    [1982, 137579.10899999988],
    [1983, 150344.1300000001],
    [1984, 132895.38300000012],
    [1985, 131962.70899999992],
    [1986, 128039.21800000034],
    [1987, 129632.28500000006],
    [1988, 124553.92900000002],
    [1989, 118252.22800000008],
    [1990, 105459.57499999994],
    [1991, 98296.434],
    [1992, 97584.42499999996],
    [1993, 88389.194],
    [1994, 100349.15699999992],
    [1995, 90433.07099999991],
    [1996, 83172.68500000008],
    [1997, 83964.39000000006],
    [1998, 78299.38900000002],
    [1999, 90088.15400000002],
    [2000, 93754.32000000008],
    [2001, 88341.32700000003],
    [2002, 99514.59999999993],
    [2003, 108699.0409999999],
    [2004, 101856.34299999998],
    [2005, 94104.79800000007],
    [2006, 101093.95699999995],
    [2007, 103115.68399999998],
    [2008, 96759.91900000005],
    [2009, 87596.58000000015],
    [2010, 78777.56100000002],
    [2011, 72627.81300000001],
    [2012, 80814.00399999996],
    [2013, 76837.83300000004],
    [2014, 61228.51399999993],
    [2015, 56814.02699999995],
    [2016, 42734.592],
    [2017, 38849.22899999998],
    [2018, 29668.60599999998],
    [2019, 33369.65],
    [2020, 28011.264000000014]
  ]
}, {
  "label": "loudness",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, -9.161],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, -112.05900000000001],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, -13.999],
    [1938, -13.492],
    [1939, 0],
    [1940, 0],
    [1941, -14.556999999999999],
    [1942, -934.2769999999999],
    [1943, 0],
    [1944, 0],
    [1945, -34.998999999999995],
    [1946, 0],
    [1947, -34.967],
    [1948, 0],
    [1949, -49.218999999999994],
    [1950, -45.988],
    [1951, -41.602000000000004],
    [1952, 0],
    [1953, 0],
    [1954, -243.85],
    [1955, -17.32],
    [1956, -337.74399999999997],
    [1957, -869.1590000000001],
    [1958, -1641.2200000000007],
    [1959, -1659.9710000000005],
    [1960, -2543.988999999998],
    [1961, -2560.606],
    [1962, -2892.309999999998],
    [1963, -4974.180999999999],
    [1964, -4153.757000000001],
    [1965, -6088.702000000001],
    [1966, -8705.362999999988],
    [1967, -11090.801999999985],
    [1968, -10666.021999999995],
    [1969, -14087.183999999994],
    [1970, -14306.326000000014],
    [1971, -13721.856999999984],
    [1972, -11900.751999999995],
    [1973, -12814.870000000028],
    [1974, -13034.502],
    [1975, -11369.814999999997],
    [1976, -10075.553000000002],
    [1977, -12505.164999999979],
    [1978, -11091.759],
    [1979, -12042.309000000003],
    [1980, -10624.76800000001],
    [1981, -10613.694999999985],
    [1982, -11135.769999999995],
    [1983, -11940.773],
    [1984, -10790.089000000009],
    [1985, -10800.370999999988],
    [1986, -10273.031000000003],
    [1987, -10452.839000000009],
    [1988, -10208.332999999999],
    [1989, -9388.30899999999],
    [1990, -8126.238],
    [1991, -7839.823000000006],
    [1992, -7302.909000000004],
    [1993, -7153.298000000001],
    [1994, -7280.786999999987],
    [1995, -6402.6169999999975],
    [1996, -5758.761000000003],
    [1997, -5349.435999999997],
    [1998, -4808.399000000001],
    [1999, -5399.332999999996],
    [2000, -5440.357999999993],
    [2001, -4778.477999999997],
    [2002, -5329.393000000002],
    [2003, -5520.025000000001],
    [2004, -5040.612999999998],
    [2005, -4489.570000000001],
    [2006, -4753.579000000002],
    [2007, -4871.7739999999985],
    [2008, -4712.295999999997],
    [2009, -4047.094000000003],
    [2010, -3562.201],
    [2011, -3635.4490000000033],
    [2012, -4234.195000000002],
    [2013, -4080.796000000001],
    [2014, -3224.271999999998],
    [2015, -2850.246],
    [2016, -2376.514999999999],
    [2017, -2256.366000000002],
    [2018, -1497.5449999999996],
    [2019, -1958.5460000000005],
    [2020, -1416.378]
  ]
}, {
  "label": "mode",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 1.0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 4.0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 1.0],
    [1938, 1.0],
    [1939, 0],
    [1940, 0],
    [1941, 1.0],
    [1942, 48.0],
    [1943, 0],
    [1944, 0],
    [1945, 1.0],
    [1946, 0],
    [1947, 2.0],
    [1948, 0],
    [1949, 3.0],
    [1950, 3.0],
    [1951, 3.0],
    [1952, 0],
    [1953, 0],
    [1954, 19.0],
    [1955, 4.0],
    [1956, 29.0],
    [1957, 78.0],
    [1958, 128.0],
    [1959, 129.0],
    [1960, 184.0],
    [1961, 187.0],
    [1962, 223.0],
    [1963, 374.0],
    [1964, 380.0],
    [1965, 544.0],
    [1966, 714.0],
    [1967, 784.0],
    [1968, 726.0],
    [1969, 886.0],
    [1970, 990.0],
    [1971, 923.0],
    [1972, 791.0],
    [1973, 917.0],
    [1974, 894.0],
    [1975, 814.0],
    [1976, 789.0],
    [1977, 935.0],
    [1978, 791.0],
    [1979, 852.0],
    [1980, 853.0],
    [1981, 789.0],
    [1982, 789.0],
    [1983, 837.0],
    [1984, 725.0],
    [1985, 736.0],
    [1986, 719.0],
    [1987, 772.0],
    [1988, 725.0],
    [1989, 696.0],
    [1990, 656.0],
    [1991, 588.0],
    [1992, 603.0],
    [1993, 554.0],
    [1994, 621.0],
    [1995, 553.0],
    [1996, 511.0],
    [1997, 505.0],
    [1998, 485.0],
    [1999, 538.0],
    [2000, 537.0],
    [2001, 528.0],
    [2002, 576.0],
    [2003, 612.0],
    [2004, 533.0],
    [2005, 509.0],
    [2006, 533.0],
    [2007, 571.0],
    [2008, 543.0],
    [2009, 459.0],
    [2010, 442.0],
    [2011, 411.0],
    [2012, 461.0],
    [2013, 407.0],
    [2014, 361.0],
    [2015, 279.0],
    [2016, 235.0],
    [2017, 205.0],
    [2018, 166.0],
    [2019, 190.0],
    [2020, 155.0]
  ]
}, {
  "label": "key",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 4.0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 42.0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 2.0],
    [1938, 1.0],
    [1939, 0],
    [1940, 0],
    [1941, 7.0],
    [1942, 393.0],
    [1943, 0],
    [1944, 0],
    [1945, 6.0],
    [1946, 0],
    [1947, 18.0],
    [1948, 0],
    [1949, 25.0],
    [1950, 20.0],
    [1951, 29.0],
    [1952, 0],
    [1953, 0],
    [1954, 72.0],
    [1955, 17.0],
    [1956, 127.0],
    [1957, 310.0],
    [1958, 706.0],
    [1959, 742.0],
    [1960, 1113.0],
    [1961, 1133.0],
    [1962, 1469.0],
    [1963, 2362.0],
    [1964, 2288.0],
    [1965, 3266.0],
    [1966, 4774.0],
    [1967, 5353.0],
    [1968, 4780.0],
    [1969, 5940.0],
    [1970, 6103.0],
    [1971, 5606.0],
    [1972, 4962.0],
    [1973, 5568.0],
    [1974, 5797.0],
    [1975, 5289.0],
    [1976, 4940.0],
    [1977, 6173.0],
    [1978, 5455.0],
    [1979, 6106.0],
    [1980, 5781.0],
    [1981, 5699.0],
    [1982, 5580.0],
    [1983, 6216.0],
    [1984, 5715.0],
    [1985, 5685.0],
    [1986, 5532.0],
    [1987, 5635.0],
    [1988, 5320.0],
    [1989, 5108.0],
    [1990, 4508.0],
    [1991, 4407.0],
    [1992, 4175.0],
    [1993, 3781.0],
    [1994, 4241.0],
    [1995, 3624.0],
    [1996, 3542.0],
    [1997, 3609.0],
    [1998, 3321.0],
    [1999, 3942.0],
    [2000, 4129.0],
    [2001, 3674.0],
    [2002, 4173.0],
    [2003, 4586.0],
    [2004, 4187.0],
    [2005, 3856.0],
    [2006, 4291.0],
    [2007, 4124.0],
    [2008, 3848.0],
    [2009, 3602.0],
    [2010, 3339.0],
    [2011, 3215.0],
    [2012, 3304.0],
    [2013, 3194.0],
    [2014, 2410.0],
    [2015, 2329.0],
    [2016, 1930.0],
    [2017, 1647.0],
    [2018, 1290.0],
    [2019, 1490.0],
    [2020, 1228.0]
  ]
}, {
  "label": "acousticness",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 0.969],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 7.117],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0.569],
    [1938, 0.267],
    [1939, 0],
    [1940, 0],
    [1941, 1.2770000000000001],
    [1942, 56.196699999999986],
    [1943, 0],
    [1944, 0],
    [1945, 1.786],
    [1946, 0],
    [1947, 2.293],
    [1948, 0],
    [1949, 2.963],
    [1950, 2.644],
    [1951, 2.867],
    [1952, 0],
    [1953, 0],
    [1954, 18.056000000000004],
    [1955, 2.519],
    [1956, 23.504299999999994],
    [1957, 60.16700000000002],
    [1958, 98.68175000000002],
    [1959, 107.38940000000001],
    [1960, 142.824],
    [1961, 161.30850999999996],
    [1962, 175.19830400000004],
    [1963, 263.10496999999975],
    [1964, 196.966224],
    [1965, 263.9852533999999],
    [1966, 329.14190394],
    [1967, 421.8838247599989],
    [1968, 376.5753676999999],
    [1969, 451.4237407],
    [1970, 478.8435878999997],
    [1971, 470.5106163000007],
    [1972, 395.13694719999995],
    [1973, 414.76530939999975],
    [1974, 434.0904928000001],
    [1975, 358.2803622899998],
    [1976, 286.74782322],
    [1977, 335.3523979999993],
    [1978, 248.15477010000023],
    [1979, 253.87438995000022],
    [1980, 225.7724348800003],
    [1981, 200.14120627999984],
    [1982, 210.99252741999993],
    [1983, 222.96428819999983],
    [1984, 168.63137434999985],
    [1985, 197.62058754999993],
    [1986, 183.38579122000002],
    [1987, 188.38802551999993],
    [1988, 173.82076400999986],
    [1989, 152.24264876000007],
    [1990, 156.18623166999998],
    [1991, 132.83576885],
    [1992, 146.35764549999976],
    [1993, 127.87354063999983],
    [1994, 154.08164858999982],
    [1995, 130.99491609999993],
    [1996, 121.21154464000006],
    [1997, 126.04791280000006],
    [1998, 108.93208585],
    [1999, 136.95181115999992],
    [2000, 144.43296092999998],
    [2001, 118.84868342999997],
    [2002, 145.29467945000002],
    [2003, 132.74989479000004],
    [2004, 138.80011245000006],
    [2005, 122.59968958],
    [2006, 133.4929467699999],
    [2007, 142.15931599999996],
    [2008, 136.43805603000015],
    [2009, 107.55437687000011],
    [2010, 83.18935738999997],
    [2011, 105.99317156000001],
    [2012, 130.94235842999987],
    [2013, 127.11546624],
    [2014, 110.1634243],
    [2015, 94.71500583],
    [2016, 90.34260158999993],
    [2017, 79.62661899999995],
    [2018, 56.52859249999998],
    [2019, 79.16215430000003],
    [2020, 48.65641091]
  ]
}, {
  "label": "instrumentalness",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 0.000575],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0.01936201],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0.0],
    [1938, 0.0],
    [1939, 0],
    [1940, 0],
    [1941, 0.0],
    [1942, 0.8797882000000001],
    [1943, 0],
    [1944, 0],
    [1945, 0.844],
    [1946, 0],
    [1947, 0.697],
    [1948, 0],
    [1949, 0.61898701],
    [1950, 1.019],
    [1951, 0.9640719999999999],
    [1952, 0],
    [1953, 0],
    [1954, 0.70070546],
    [1955, 0.00627835],
    [1956, 0.62342276],
    [1957, 3.634004540000001],
    [1958, 12.201891909999995],
    [1959, 3.47376183],
    [1960, 13.561423260000003],
    [1961, 27.752281989999997],
    [1962, 17.85580814],
    [1963, 54.017161449999996],
    [1964, 32.74934222999999],
    [1965, 40.19942407999999],
    [1966, 59.327206940000046],
    [1967, 85.28132294999997],
    [1968, 90.97274340000006],
    [1969, 191.6988627200001],
    [1970, 126.19991929000001],
    [1971, 141.0418000599999],
    [1972, 115.25457236000018],
    [1973, 110.79818304999999],
    [1974, 83.69137479000022],
    [1975, 95.73266894000008],
    [1976, 69.53278803999994],
    [1977, 120.10248445999984],
    [1978, 107.15323145999992],
    [1979, 128.4744995200002],
    [1980, 139.43064527000004],
    [1981, 136.23788128],
    [1982, 94.95529870000013],
    [1983, 157.32849951999987],
    [1984, 135.05502865],
    [1985, 118.57159145000003],
    [1986, 101.29114925999993],
    [1987, 97.65825714000002],
    [1988, 94.35017043000006],
    [1989, 93.92864757],
    [1990, 85.94876924999994],
    [1991, 107.04598786],
    [1992, 72.12407783999996],
    [1993, 102.56715800999999],
    [1994, 86.74628821000003],
    [1995, 95.34282513000007],
    [1996, 59.03867528000001],
    [1997, 76.69442438000007],
    [1998, 61.822109650000016],
    [1999, 74.41160780999996],
    [2000, 75.20920463000003],
    [2001, 56.69921350999996],
    [2002, 65.02761689],
    [2003, 67.55710098000006],
    [2004, 56.99798253999993],
    [2005, 43.78997189000004],
    [2006, 38.52204914000001],
    [2007, 46.25637961000004],
    [2008, 43.41383062],
    [2009, 29.742518959999984],
    [2010, 38.410398220000005],
    [2011, 27.623599670000008],
    [2012, 25.087143530000006],
    [2013, 29.828523760000003],
    [2014, 16.22638103000001],
    [2015, 18.686459350000003],
    [2016, 12.36896264],
    [2017, 8.57166296],
    [2018, 2.3516095299999997],
    [2019, 6.914366819999995],
    [2020, 4.95647017]
  ]
}, {
  "label": "liveness",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 0.946],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0.9243],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0.204],
    [1938, 0.283],
    [1939, 0],
    [1940, 0],
    [1941, 0.308],
    [1942, 17.0567],
    [1943, 0],
    [1944, 0],
    [1945, 0.946],
    [1946, 0],
    [1947, 0.752],
    [1948, 0],
    [1949, 0.6829999999999999],
    [1950, 0.5222],
    [1951, 0.597],
    [1952, 0],
    [1953, 0],
    [1954, 6.5855999999999995],
    [1955, 0.36760000000000004],
    [1956, 6.192799999999999],
    [1957, 15.458799999999997],
    [1958, 24.506899999999998],
    [1959, 29.259400000000014],
    [1960, 44.08019999999999],
    [1961, 46.71299999999999],
    [1962, 53.24969999999999],
    [1963, 88.78410000000002],
    [1964, 97.99249999999998],
    [1965, 150.58430000000004],
    [1966, 207.22749999999965],
    [1967, 204.25860000000043],
    [1968, 202.93230000000017],
    [1969, 234.53310000000002],
    [1970, 286.18440000000044],
    [1971, 262.78759999999977],
    [1972, 208.17080000000007],
    [1973, 247.80829999999986],
    [1974, 274.4566999999998],
    [1975, 237.45409999999998],
    [1976, 293.7304999999999],
    [1977, 281.5312],
    [1978, 249.795],
    [1979, 290.8961000000007],
    [1980, 262.6879999999999],
    [1981, 284.5369999999999],
    [1982, 234.25230000000045],
    [1983, 264.55150000000003],
    [1984, 223.89899999999986],
    [1985, 225.53139999999976],
    [1986, 251.19199999999958],
    [1987, 231.31330000000023],
    [1988, 236.38070000000005],
    [1989, 207.3731000000002],
    [1990, 189.13899999999998],
    [1991, 158.9034],
    [1992, 181.42600000000002],
    [1993, 161.82819999999995],
    [1994, 167.44830000000005],
    [1995, 161.96120000000008],
    [1996, 149.57199999999995],
    [1997, 146.88369999999983],
    [1998, 145.61409999999987],
    [1999, 175.7978999999999],
    [2000, 156.87610000000006],
    [2001, 139.72110000000004],
    [2002, 177.1349999999999],
    [2003, 173.38620000000003],
    [2004, 158.54270000000008],
    [2005, 137.9582999999999],
    [2006, 157.37439999999995],
    [2007, 160.26369999999997],
    [2008, 161.54119999999978],
    [2009, 144.6968000000001],
    [2010, 124.49959999999997],
    [2011, 119.19950000000004],
    [2012, 127.3312],
    [2013, 130.92420000000013],
    [2014, 94.67380000000006],
    [2015, 80.69629999999997],
    [2016, 62.4446],
    [2017, 55.89309999999999],
    [2018, 43.0763],
    [2019, 50.510900000000035],
    [2020, 46.74049999999998]
  ]
}, {
  "label": "speechiness",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 0.508],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0.47080000000000005],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0.0545],
    [1938, 0.056],
    [1939, 0],
    [1940, 0],
    [1941, 0.0799],
    [1942, 3.4838],
    [1943, 0],
    [1944, 0],
    [1945, 0.0806],
    [1946, 0],
    [1947, 0.337],
    [1948, 0],
    [1949, 0.262],
    [1950, 0.30100000000000005],
    [1951, 0.5505],
    [1952, 0],
    [1953, 0],
    [1954, 2.7060999999999997],
    [1955, 0.31589999999999996],
    [1956, 1.7524],
    [1957, 6.3691],
    [1958, 8.241100000000003],
    [1959, 7.6252999999999975],
    [1960, 12.143399999999998],
    [1961, 11.421299999999993],
    [1962, 15.453400000000011],
    [1963, 20.8285],
    [1964, 25.67039999999999],
    [1965, 33.4941],
    [1966, 45.07259999999995],
    [1967, 54.81769999999994],
    [1968, 53.27000000000006],
    [1969, 57.31640000000007],
    [1970, 62.6288],
    [1971, 66.51849999999993],
    [1972, 48.327900000000014],
    [1973, 56.76829999999988],
    [1974, 63.35169999999998],
    [1975, 57.11790000000002],
    [1976, 56.35380000000006],
    [1977, 64.5556],
    [1978, 67.07519999999997],
    [1979, 74.23129999999986],
    [1980, 66.07940000000006],
    [1981, 63.93920000000004],
    [1982, 60.622499999999974],
    [1983, 77.88789999999995],
    [1984, 62.73949999999992],
    [1985, 58.37320000000001],
    [1986, 60.71650000000001],
    [1987, 55.444500000000026],
    [1988, 58.485],
    [1989, 54.47610000000001],
    [1990, 48.290599999999976],
    [1991, 47.19350000000003],
    [1992, 52.211700000000036],
    [1993, 38.522499999999994],
    [1994, 46.14820000000001],
    [1995, 42.306400000000046],
    [1996, 39.05659999999999],
    [1997, 45.06620000000007],
    [1998, 43.25880000000003],
    [1999, 52.15339999999997],
    [2000, 50.6579],
    [2001, 48.13860000000004],
    [2002, 53.07879999999996],
    [2003, 55.885300000000065],
    [2004, 52.5947],
    [2005, 46.623500000000014],
    [2006, 52.31109999999999],
    [2007, 55.01929999999999],
    [2008, 47.34369999999996],
    [2009, 45.091199999999986],
    [2010, 42.629],
    [2011, 39.40460000000002],
    [2012, 37.426500000000004],
    [2013, 47.43000000000003],
    [2014, 31.075400000000002],
    [2015, 28.670499999999993],
    [2016, 27.187600000000003],
    [2017, 24.8287],
    [2018, 19.395600000000005],
    [2019, 25.549099999999985],
    [2020, 16.638300000000008]
  ]
}, {
  "label": "explicit",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 0.0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0.0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0.0],
    [1938, 0.0],
    [1939, 0],
    [1940, 0],
    [1941, 0.0],
    [1942, 0.0],
    [1943, 0],
    [1944, 0],
    [1945, 0.0],
    [1946, 0],
    [1947, 0.0],
    [1948, 0],
    [1949, 0.0],
    [1950, 0.0],
    [1951, 0.0],
    [1952, 0],
    [1953, 0],
    [1954, 0.0],
    [1955, 0.0],
    [1956, 0.0],
    [1957, 0.0],
    [1958, 0.0],
    [1959, 0.0],
    [1960, 0.0],
    [1961, 0.0],
    [1962, 0.0],
    [1963, 0.0],
    [1964, 0.0],
    [1965, 3.0],
    [1966, 0.0],
    [1967, 1.0],
    [1968, 0.0],
    [1969, 0.0],
    [1970, 1.0],
    [1971, 1.0],
    [1972, 4.0],
    [1973, 2.0],
    [1974, 1.0],
    [1975, 1.0],
    [1976, 2.0],
    [1977, 8.0],
    [1978, 16.0],
    [1979, 5.0],
    [1980, 6.0],
    [1981, 20.0],
    [1982, 30.0],
    [1983, 13.0],
    [1984, 28.0],
    [1985, 32.0],
    [1986, 31.0],
    [1987, 30.0],
    [1988, 52.0],
    [1989, 37.0],
    [1990, 40.0],
    [1991, 42.0],
    [1992, 77.0],
    [1993, 21.0],
    [1994, 73.0],
    [1995, 66.0],
    [1996, 82.0],
    [1997, 70.0],
    [1998, 77.0],
    [1999, 76.0],
    [2000, 89.0],
    [2001, 89.0],
    [2002, 63.0],
    [2003, 53.0],
    [2004, 62.0],
    [2005, 53.0],
    [2006, 50.0],
    [2007, 70.0],
    [2008, 49.0],
    [2009, 83.0],
    [2010, 48.0],
    [2011, 57.0],
    [2012, 66.0],
    [2013, 95.0],
    [2014, 48.0],
    [2015, 59.0],
    [2016, 51.0],
    [2017, 48.0],
    [2018, 48.0],
    [2019, 51.0],
    [2020, 30.0]
  ]
}, {
  "label": "duration_ms",
  "data": [
    [1921, 0],
    [1924, 0],
    [1925, 180813.0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 1392286.0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 146133.0],
    [1938, 136707.0],
    [1939, 0],
    [1940, 0],
    [1941, 631467.0],
    [1942, 13034807.0],
    [1943, 0],
    [1944, 0],
    [1945, 305800.0],
    [1946, 0],
    [1947, 656547.0],
    [1948, 0],
    [1949, 297142.0],
    [1950, 572040.0],
    [1951, 343561.0],
    [1952, 0],
    [1953, 0],
    [1954, 3826882.0],
    [1955, 502106.0],
    [1956, 5017944.0],
    [1957, 12071405.0],
    [1958, 21303722.0],
    [1959, 23201375.0],
    [1960, 32840351.0],
    [1961, 33846138.0],
    [1962, 41664852.0],
    [1963, 68653629.0],
    [1964, 69063802.0],
    [1965, 110098776.0],
    [1966, 167531443.0],
    [1967, 203689122.0],
    [1968, 202471032.0],
    [1969, 289811631.0],
    [1970, 303255653.0],
    [1971, 313196203.0],
    [1972, 251106642.0],
    [1973, 289275239.0],
    [1974, 284415772.0],
    [1975, 269672135.0],
    [1976, 271651667.0],
    [1977, 296870494.0],
    [1978, 261288171.0],
    [1979, 285153600.0],
    [1980, 268391817.0],
    [1981, 266955656.0],
    [1982, 262271522.0],
    [1983, 294531743.0],
    [1984, 260886401.0],
    [1985, 272835062.0],
    [1986, 264633723.0],
    [1987, 263722582.0],
    [1988, 260080635.0],
    [1989, 247351086.0],
    [1990, 225478821.0],
    [1991, 209507412.0],
    [1992, 202984272.0],
    [1993, 187910149.0],
    [1994, 207112875.0],
    [1995, 183260668.0],
    [1996, 171528700.0],
    [1997, 170727537.0],
    [1998, 162900326.0],
    [1999, 186519935.0],
    [2000, 182289939.0],
    [2001, 167789544.0],
    [2002, 194774023.0],
    [2003, 213273374.0],
    [2004, 188735510.0],
    [2005, 173425844.0],
    [2006, 189727549.0],
    [2007, 195667213.0],
    [2008, 184902561.0],
    [2009, 160426203.0],
    [2010, 151792435.0],
    [2011, 139198868.0],
    [2012, 152855256.0],
    [2013, 150329695.0],
    [2014, 119056363.0],
    [2015, 105216621.0],
    [2016, 81852897.0],
    [2017, 73303334.0],
    [2018, 53159431.0],
    [2019, 60400282.0],
    [2020, 48234698.0]
  ]
}];

export default poprock;
