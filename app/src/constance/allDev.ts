/*
 * @Author: Kanata You 
 * @Date: 2021-02-07 22:57:47 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-07 23:03:29
 */

const data = [{
  "genre": "Country",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0.0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 16.0],
    [1936, 55.0],
    [1937, 32.0],
    [1938, 165.0],
    [1939, 0],
    [1940, 0],
    [1941, 2.0],
    [1942, 0],
    [1943, 0],
    [1944, 0],
    [1945, 5.0],
    [1946, 112.0],
    [1947, 174.0],
    [1948, 0],
    [1949, 80.0],
    [1950, 447.0],
    [1951, 594.5],
    [1952, 708.0],
    [1953, 12.0],
    [1954, 634.0],
    [1955, 460.0],
    [1956, 1569.0],
    [1957, 1686.0],
    [1958, 1519.0],
    [1959, 2393.0],
    [1960, 2471.0],
    [1961, 2393.5],
    [1962, 1865.0],
    [1963, 4310.0],
    [1964, 3020.0],
    [1965, 2626.0],
    [1966, 2592.5],
    [1967, 2641.0],
    [1968, 4756.0],
    [1969, 2422.5],
    [1970, 2729.0],
    [1971, 2939.0],
    [1972, 2923.0],
    [1973, 3827.5],
    [1974, 4045.5],
    [1975, 6526.5],
    [1976, 4456.833333333334],
    [1977, 3058.5],
    [1978, 4908.0],
    [1979, 3543.5],
    [1980, 4310.0],
    [1981, 4788.0],
    [1982, 3767.9999999999995],
    [1983, 2445.0],
    [1984, 2555.800000000001],
    [1985, 3637.000000000001],
    [1986, 2825.5],
    [1987, 5668.0],
    [1988, 3448.866666666667],
    [1989, 4383.0],
    [1990, 3989.0000000000027],
    [1991, 5485.0],
    [1992, 4541.5],
    [1993, 4929.333333333333],
    [1994, 5256.0],
    [1995, 6170.000000000001],
    [1996, 5725.0],
    [1997, 4153.5],
    [1998, 5541.999999999998],
    [1999, 5273.833333333336],
    [2000, 5163.166666666667],
    [2001, 3409.5],
    [2002, 5737.5],
    [2003, 4161.5],
    [2004, 7966.5],
    [2005, 5425.0],
    [2006, 6420.0],
    [2007, 5652.0],
    [2008, 5842.0],
    [2009, 6366.5],
    [2010, 8279.5],
    [2011, 5709.0],
    [2012, 3506.333333333333],
    [2013, 5313.75],
    [2014, 6181.095833333335],
    [2015, 3737.5],
    [2016, 3350.5],
    [2017, 3496.5],
    [2018, 3752.5],
    [2019, 4195.5],
    [2020, 1897.5]
  ]
}, {
  "genre": "Latin",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 1.0],
    [1940, 0],
    [1941, 11.5],
    [1942, 0],
    [1943, 0],
    [1944, 1.0],
    [1945, 0],
    [1946, 72.0],
    [1947, 0.0],
    [1948, 668.0],
    [1949, 401.0],
    [1950, 168.0],
    [1951, 163.0],
    [1952, 7.0],
    [1953, 0.0],
    [1954, 21.0],
    [1955, 777.0],
    [1956, 526.0],
    [1957, 803.0],
    [1958, 1650.0],
    [1959, 867.0],
    [1960, 1159.0],
    [1961, 513.75],
    [1962, 876.0],
    [1963, 1520.5],
    [1964, 1847.1666666666667],
    [1965, 1833.5],
    [1966, 923.0],
    [1967, 4035.0],
    [1968, 1750.5],
    [1969, 1189.5],
    [1970, 1643.5],
    [1971, 1615.0],
    [1972, 2942.0],
    [1973, 2214.0],
    [1974, 1226.5],
    [1975, 2135.0],
    [1976, 1047.0],
    [1977, 1435.0],
    [1978, 3372.5],
    [1979, 1513.0],
    [1980, 3367.1666666666665],
    [1981, 1794.0833333333333],
    [1982, 2224.0],
    [1983, 2203.0],
    [1984, 6363.0],
    [1985, 3293.0],
    [1986, 3834.0],
    [1987, 3060.0],
    [1988, 5421.25],
    [1989, 3694.0],
    [1990, 6717.0],
    [1991, 6381.0],
    [1992, 6594.5],
    [1993, 5845.0],
    [1994, 5183.999999999999],
    [1995, 5904.0],
    [1996, 4284.499999999999],
    [1997, 4463.0],
    [1998, 5744.5],
    [1999, 5706.0],
    [2000, 2226.0],
    [2001, 5389.428571428574],
    [2002, 4102.0],
    [2003, 4111.5],
    [2004, 3972.0],
    [2005, 4276.0],
    [2006, 5969.5],
    [2007, 3553.0],
    [2008, 2073.666666666667],
    [2009, 3503.8333333333335],
    [2010, 4437.5],
    [2011, 2218.0],
    [2012, 3017.5],
    [2013, 1610.0],
    [2014, 2287.0],
    [2015, 1694.0],
    [2016, 1499.6666666666665],
    [2017, 2106.333333333334],
    [2018, 1982.5],
    [2019, 3811.0000000000005],
    [2020, 2481.3333333333335]
  ]
}, {
  "genre": "Vocal",
  "value": [
    [1925, 21.0],
    [1926, 0],
    [1927, 21.5],
    [1928, 10.0],
    [1929, 0],
    [1930, 112.0],
    [1931, 0],
    [1932, 22.0],
    [1933, 3645.0],
    [1934, 110.0],
    [1935, 247.0],
    [1936, 365.5],
    [1937, 721.0],
    [1938, 133.0],
    [1939, 202.16666666666666],
    [1940, 139.0],
    [1941, 388.5],
    [1942, 176.0],
    [1943, 217.0],
    [1944, 713.0],
    [1945, 1213.0],
    [1946, 470.5],
    [1947, 28.0],
    [1948, 1115.5],
    [1949, 1032.0],
    [1950, 921.0],
    [1951, 794.0],
    [1952, 998.0],
    [1953, 667.0],
    [1954, 2730.5],
    [1955, 4267.0],
    [1956, 8081.0],
    [1957, 8335.0],
    [1958, 8586.5],
    [1959, 6545.333333333333],
    [1960, 4535.2],
    [1961, 4247.0],
    [1962, 6503.999999999999],
    [1963, 3896.5],
    [1964, 5445.0],
    [1965, 3925.5],
    [1966, 4116.5],
    [1967, 4226.0],
    [1968, 2733.0],
    [1969, 2169.5],
    [1970, 818.0],
    [1971, 1346.0],
    [1972, 1037.0],
    [1973, 665.0],
    [1974, 942.5],
    [1975, 571.0],
    [1976, 1006.3333333333334],
    [1977, 616.0],
    [1978, 1309.5],
    [1979, 758.0],
    [1980, 1153.0],
    [1981, 992.5],
    [1982, 427.0],
    [1983, 707.0],
    [1984, 700.5],
    [1985, 389.16666666666663],
    [1986, 618.5],
    [1987, 1792.3333333333335],
    [1988, 1245.0],
    [1989, 791.5],
    [1990, 970.5],
    [1991, 997.5],
    [1992, 1011.0],
    [1993, 1330.0],
    [1994, 461.5],
    [1995, 657.4],
    [1996, 1285.0],
    [1997, 807.0],
    [1998, 841.5],
    [1999, 781.0],
    [2000, 418.0],
    [2001, 445.42857142857144],
    [2002, 511.0],
    [2003, 1200.3333333333333],
    [2004, 804.5],
    [2005, 795.5],
    [2006, 308.5],
    [2007, 703.0],
    [2008, 414.1666666666667],
    [2009, 601.0],
    [2010, 201.0],
    [2011, 252.5],
    [2012, 61.0],
    [2013, 1249.0],
    [2014, 55.5],
    [2015, 392.0],
    [2016, 29.0],
    [2017, 0],
    [2018, 0],
    [2019, 231.0],
    [2020, 0]
  ]
}, {
  "genre": "Unknown",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 0],
    [1942, 0],
    [1943, 0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 0],
    [1948, 0],
    [1949, 0],
    [1950, 0],
    [1951, 0],
    [1952, 0],
    [1953, 0],
    [1954, 0],
    [1955, 0],
    [1956, 0],
    [1957, 0],
    [1958, 0],
    [1959, 0],
    [1960, 0],
    [1961, 0],
    [1962, 0],
    [1963, 0],
    [1964, 0],
    [1965, 0],
    [1966, 0],
    [1967, 0],
    [1968, 0],
    [1969, 0],
    [1970, 0],
    [1971, 0],
    [1972, 0],
    [1973, 0],
    [1974, 0],
    [1975, 32.0],
    [1976, 0],
    [1977, 0],
    [1978, 0],
    [1979, 0],
    [1980, 0],
    [1981, 0],
    [1982, 0],
    [1983, 0],
    [1984, 0],
    [1985, 0],
    [1986, 0],
    [1987, 0],
    [1988, 0],
    [1989, 0],
    [1990, 0],
    [1991, 47.0],
    [1992, 280.0],
    [1993, 0],
    [1994, 55.0],
    [1995, 38.0],
    [1996, 89.0],
    [1997, 0],
    [1998, 0],
    [1999, 0],
    [2000, 0],
    [2001, 0],
    [2002, 0],
    [2003, 0],
    [2004, 0],
    [2005, 0],
    [2006, 0],
    [2007, 0],
    [2008, 0],
    [2009, 0],
    [2010, 0],
    [2011, 0],
    [2012, 0],
    [2013, 0],
    [2014, 0],
    [2015, 0],
    [2016, 0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "Avant-Garde",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 38.0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0.0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 2.0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 439.0],
    [1942, 0],
    [1943, 0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 0],
    [1948, 28.0],
    [1949, 0],
    [1950, 10.5],
    [1951, 0],
    [1952, 0],
    [1953, 0],
    [1954, 56.0],
    [1955, 104.0],
    [1956, 442.0],
    [1957, 123.0],
    [1958, 11.0],
    [1959, 469.5],
    [1960, 519.0],
    [1961, 12.0],
    [1962, 166.0],
    [1963, 68.0],
    [1964, 65.0],
    [1965, 79.0],
    [1966, 77.0],
    [1967, 55.0],
    [1968, 20.0],
    [1969, 300.0],
    [1970, 0],
    [1971, 0],
    [1972, 29.0],
    [1973, 0],
    [1974, 0],
    [1975, 0],
    [1976, 0],
    [1977, 0],
    [1978, 125.0],
    [1979, 29.0],
    [1980, 187.0],
    [1981, 24.0],
    [1982, 174.0],
    [1983, 0],
    [1984, 208.0],
    [1985, 0],
    [1986, 448.5],
    [1987, 0],
    [1988, 0],
    [1989, 0],
    [1990, 0],
    [1991, 37.0],
    [1992, 0],
    [1993, 0],
    [1994, 0],
    [1995, 110.0],
    [1996, 0],
    [1997, 237.0],
    [1998, 334.0],
    [1999, 0],
    [2000, 138.0],
    [2001, 39.0],
    [2002, 39.0],
    [2003, 81.0],
    [2004, 0],
    [2005, 45.0],
    [2006, 50.0],
    [2007, 0],
    [2008, 0],
    [2009, 113.0],
    [2010, 0],
    [2011, 52.0],
    [2012, 112.0],
    [2013, 0],
    [2014, 0],
    [2015, 0],
    [2016, 60.0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "R&B;",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 2.0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0.0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 3.0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 6.0],
    [1942, 15.0],
    [1943, 0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 7.0],
    [1948, 0],
    [1949, 2.0],
    [1950, 46.0],
    [1951, 33.0],
    [1952, 96.0],
    [1953, 17.0],
    [1954, 188.0],
    [1955, 0.0],
    [1956, 756.0],
    [1957, 1575.0],
    [1958, 1930.0],
    [1959, 3093.0],
    [1960, 2904.2],
    [1961, 3199.0],
    [1962, 4180.0],
    [1963, 3602.0],
    [1964, 5639.0],
    [1965, 5191.0],
    [1966, 5028.0],
    [1967, 5307.0],
    [1968, 7624.0],
    [1969, 5982.5],
    [1970, 6960.0],
    [1971, 10125.5],
    [1972, 11837.5],
    [1973, 9046.5],
    [1974, 6938.5],
    [1975, 8585.0],
    [1976, 8609.5],
    [1977, 6119.0],
    [1978, 6614.5],
    [1979, 6742.5],
    [1980, 6435.0],
    [1981, 4748.0],
    [1982, 7003.5],
    [1983, 4981.0],
    [1984, 4733.0],
    [1985, 5665.75],
    [1986, 5841.0],
    [1987, 6144.0],
    [1988, 3862.5],
    [1989, 4470.75],
    [1990, 4482.0],
    [1991, 7582.0],
    [1992, 6495.0],
    [1993, 7367.5],
    [1994, 7138.333333333333],
    [1995, 7214.65],
    [1996, 8460.0],
    [1997, 8605.0],
    [1998, 6951.500000000001],
    [1999, 7567.700000000001],
    [2000, 9271.999999999998],
    [2001, 9277.428571428572],
    [2002, 6734.0],
    [2003, 8110.0],
    [2004, 7538.333333333333],
    [2005, 9283.5],
    [2006, 7439.0],
    [2007, 8212.0],
    [2008, 8682.833333333334],
    [2009, 5731.333333333333],
    [2010, 5500.0],
    [2011, 6554.5],
    [2012, 7503.500000000001],
    [2013, 4969.0],
    [2014, 6894.5],
    [2015, 8182.0],
    [2016, 8042.333333333333],
    [2017, 6075.166666666667],
    [2018, 5127.5],
    [2019, 5636.0],
    [2020, 6950.166666666666]
  ]
}, {
  "genre": "Electronic",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0.0],
    [1941, 0],
    [1942, 0],
    [1943, 0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 0],
    [1948, 0],
    [1949, 19.5],
    [1950, 144.0],
    [1951, 0],
    [1952, 0.0],
    [1953, 0],
    [1954, 0],
    [1955, 0],
    [1956, 0],
    [1957, 0],
    [1958, 0],
    [1959, 0],
    [1960, 0],
    [1961, 0],
    [1962, 0],
    [1963, 50.0],
    [1964, 0],
    [1965, 0],
    [1966, 0],
    [1967, 0],
    [1968, 84.0],
    [1969, 0],
    [1970, 154.0],
    [1971, 0],
    [1972, 92.0],
    [1973, 71.0],
    [1974, 422.0],
    [1975, 566.5],
    [1976, 149.0],
    [1977, 536.0],
    [1978, 367.0],
    [1979, 634.0],
    [1980, 89.0],
    [1981, 546.0],
    [1982, 0],
    [1983, 288.0],
    [1984, 0],
    [1985, 161.0],
    [1986, 324.0],
    [1987, 254.5],
    [1988, 90.0],
    [1989, 570.0],
    [1990, 876.0],
    [1991, 740.0],
    [1992, 1280.0],
    [1993, 1355.0],
    [1994, 1498.5],
    [1995, 1021.0],
    [1996, 2819.0],
    [1997, 2119.0],
    [1998, 2954.0],
    [1999, 1531.5],
    [2000, 1788.5],
    [2001, 2940.5],
    [2002, 1648.0],
    [2003, 927.5],
    [2004, 942.5],
    [2005, 1233.0],
    [2006, 2221.5],
    [2007, 1711.0],
    [2008, 1693.0],
    [2009, 1359.3333333333335],
    [2010, 2475.5],
    [2011, 3421.5],
    [2012, 2139.5],
    [2013, 2412.833333333333],
    [2014, 2248.0],
    [2015, 3381.6666666666665],
    [2016, 2601.5],
    [2017, 2201.1666666666665],
    [2018, 2386.0],
    [2019, 1984.8333333333335],
    [2020, 2896.5]
  ]
}, {
  "genre": "Folk",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 0],
    [1942, 0],
    [1943, 1.0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 0],
    [1948, 0],
    [1949, 251.0],
    [1950, 0],
    [1951, 13.0],
    [1952, 245.0],
    [1953, 33.0],
    [1954, 275.0],
    [1955, 300.0],
    [1956, 370.0],
    [1957, 115.0],
    [1958, 537.0],
    [1959, 637.0],
    [1960, 1033.0],
    [1961, 492.0],
    [1962, 1012.0],
    [1963, 1163.0],
    [1964, 1721.0],
    [1965, 3472.5],
    [1966, 1481.0],
    [1967, 1769.0],
    [1968, 1132.0],
    [1969, 1898.0],
    [1970, 1441.0],
    [1971, 1703.5],
    [1972, 1202.0],
    [1973, 603.0],
    [1974, 892.0],
    [1975, 1302.0],
    [1976, 697.0],
    [1977, 876.0],
    [1978, 211.0],
    [1979, 328.0],
    [1980, 284.0],
    [1981, 127.0],
    [1982, 25.0],
    [1983, 132.0],
    [1984, 21.0],
    [1985, 132.0],
    [1986, 0],
    [1987, 196.0],
    [1988, 95.0],
    [1989, 559.0],
    [1990, 371.0],
    [1991, 343.0],
    [1992, 160.0],
    [1993, 67.0],
    [1994, 266.0],
    [1995, 34.0],
    [1996, 451.0],
    [1997, 146.0],
    [1998, 638.0],
    [1999, 191.5],
    [2000, 166.33333333333331],
    [2001, 255.0],
    [2002, 57.0],
    [2003, 501.0],
    [2004, 232.0],
    [2005, 321.0],
    [2006, 234.0],
    [2007, 274.0],
    [2008, 0],
    [2009, 44.0],
    [2010, 0],
    [2011, 275.0],
    [2012, 49.0],
    [2013, 12.75],
    [2014, 57.0],
    [2015, 0],
    [2016, 0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "Blues",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0.0],
    [1928, 0.0],
    [1929, 0],
    [1930, 107.0],
    [1931, 0],
    [1932, 0],
    [1933, 3.0],
    [1934, 0],
    [1935, 0],
    [1936, 13.0],
    [1937, 31.0],
    [1938, 0],
    [1939, 114.0],
    [1940, 0],
    [1941, 17.0],
    [1942, 0],
    [1943, 0],
    [1944, 5.0],
    [1945, 118.0],
    [1946, 0],
    [1947, 344.0],
    [1948, 0],
    [1949, 136.0],
    [1950, 0],
    [1951, 11.0],
    [1952, 10.0],
    [1953, 10.0],
    [1954, 9.0],
    [1955, 25.0],
    [1956, 415.0],
    [1957, 1108.0],
    [1958, 921.0],
    [1959, 372.0],
    [1960, 1900.5],
    [1961, 529.0],
    [1962, 986.0],
    [1963, 197.0],
    [1964, 416.0],
    [1965, 733.0],
    [1966, 1595.0],
    [1967, 1371.0],
    [1968, 1741.6666666666665],
    [1969, 1683.0],
    [1970, 404.0],
    [1971, 1470.35],
    [1972, 601.0],
    [1973, 636.0],
    [1974, 529.0],
    [1975, 87.0],
    [1976, 532.0],
    [1977, 591.0],
    [1978, 479.0],
    [1979, 259.0],
    [1980, 214.0],
    [1981, 305.0],
    [1982, 439.5],
    [1983, 118.0],
    [1984, 113.0],
    [1985, 106.0],
    [1986, 535.0],
    [1987, 169.0],
    [1988, 25.0],
    [1989, 1065.0],
    [1990, 359.0],
    [1991, 491.0],
    [1992, 278.0],
    [1993, 381.0],
    [1994, 580.0],
    [1995, 92.0],
    [1996, 164.0],
    [1997, 469.5],
    [1998, 211.0],
    [1999, 207.0],
    [2000, 391.0],
    [2001, 188.0],
    [2002, 112.0],
    [2003, 162.28571428571428],
    [2004, 152.0],
    [2005, 283.0],
    [2006, 93.0],
    [2007, 132.0],
    [2008, 40.0],
    [2009, 185.0],
    [2010, 0],
    [2011, 88.0],
    [2012, 0],
    [2013, 0],
    [2014, 9.9375],
    [2015, 26.0],
    [2016, 0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "Comedy/Spoken",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 0],
    [1942, 0],
    [1943, 2.0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 2.0],
    [1948, 0],
    [1949, 0],
    [1950, 17.5],
    [1951, 0],
    [1952, 0],
    [1953, 24.0],
    [1954, 6.5],
    [1955, 0.0],
    [1956, 125.0],
    [1957, 9.5],
    [1958, 0],
    [1959, 665.0],
    [1960, 239.0],
    [1961, 78.0],
    [1962, 89.0],
    [1963, 210.0],
    [1964, 210.0],
    [1965, 380.0],
    [1966, 52.0],
    [1967, 0],
    [1968, 207.0],
    [1969, 0],
    [1970, 0],
    [1971, 15.5],
    [1972, 21.0],
    [1973, 24.0],
    [1974, 0],
    [1975, 286.0],
    [1976, 25.0],
    [1977, 0],
    [1978, 226.0],
    [1979, 276.0],
    [1980, 44.0],
    [1981, 0],
    [1982, 327.0],
    [1983, 352.0],
    [1984, 197.0],
    [1985, 233.0],
    [1986, 457.0],
    [1987, 0],
    [1988, 64.0],
    [1989, 79.5],
    [1990, 111.0],
    [1991, 0],
    [1992, 0],
    [1993, 183.0],
    [1994, 77.5],
    [1995, 0],
    [1996, 74.0],
    [1997, 448.0],
    [1998, 89.0],
    [1999, 37.0],
    [2000, 0],
    [2001, 58.0],
    [2002, 41.0],
    [2003, 181.0],
    [2004, 76.0],
    [2005, 39.0],
    [2006, 44.0],
    [2007, 40.0],
    [2008, 231.0],
    [2009, 392.0],
    [2010, 0],
    [2011, 279.0],
    [2012, 0],
    [2013, 28.5],
    [2014, 0],
    [2015, 0],
    [2016, 59.0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "Jazz",
  "value": [
    [1925, 27.0],
    [1926, 6.0],
    [1927, 1.5],
    [1928, 58.0],
    [1929, 0],
    [1930, 1.0],
    [1931, 0],
    [1932, 38.0],
    [1933, 0],
    [1934, 25.0],
    [1935, 8.0],
    [1936, 60.5],
    [1937, 292.0],
    [1938, 147.0],
    [1939, 447.8333333333333],
    [1940, 90.0],
    [1941, 20.0],
    [1942, 196.0],
    [1943, 0],
    [1944, 56.0],
    [1945, 250.5],
    [1946, 180.5],
    [1947, 3.0],
    [1948, 29.0],
    [1949, 289.0],
    [1950, 267.5],
    [1951, 1641.5],
    [1952, 1471.0],
    [1953, 1433.8333333333335],
    [1954, 3832.5],
    [1955, 5303.0],
    [1956, 6483.000000000002],
    [1957, 11012.499999999996],
    [1958, 5652.500000000001],
    [1959, 10881.500000000002],
    [1960, 5599.099999999999],
    [1961, 7697.25],
    [1962, 7180.0],
    [1963, 7112.0],
    [1964, 5115.166666666666],
    [1965, 3099.9999999999995],
    [1966, 2396.0],
    [1967, 2224.0],
    [1968, 3102.0],
    [1969, 1827.0000000000002],
    [1970, 1276.0],
    [1971, 1512.55],
    [1972, 1301.5],
    [1973, 2052.5],
    [1974, 2664.0],
    [1975, 2067.0],
    [1976, 2529.0],
    [1977, 2114.0],
    [1978, 1634.0],
    [1979, 1183.5],
    [1980, 1324.5],
    [1981, 2020.1666666666665],
    [1982, 1119.5],
    [1983, 778.9999999999999],
    [1984, 585.6999999999999],
    [1985, 1163.0],
    [1986, 1810.0],
    [1987, 1905.0],
    [1988, 1534.1333333333332],
    [1989, 1404.0],
    [1990, 809.5],
    [1991, 1645.4999999999998],
    [1992, 1310.5],
    [1993, 831.5],
    [1994, 1014.1666666666667],
    [1995, 915.55],
    [1996, 814.5],
    [1997, 1183.0],
    [1998, 635.0],
    [1999, 1375.8],
    [2000, 519.5],
    [2001, 751.0],
    [2002, 801.5],
    [2003, 415.5],
    [2004, 570.0],
    [2005, 429.0],
    [2006, 650.5],
    [2007, 434.0],
    [2008, 472.0],
    [2009, 547.0],
    [2010, 97.0],
    [2011, 301.0],
    [2012, 138.0],
    [2013, 48.0],
    [2014, 145.0],
    [2015, 151.0],
    [2016, 0],
    [2017, 0],
    [2018, 102.0],
    [2019, 66.0],
    [2020, 21.0]
  ]
}, {
  "genre": "Classical",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 1.0],
    [1928, 0.0],
    [1929, 1.0],
    [1930, 0],
    [1931, 0.0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 1.0],
    [1936, 0.0],
    [1937, 0.0],
    [1938, 1.0],
    [1939, 0],
    [1940, 0.0],
    [1941, 9.0],
    [1942, 28.0],
    [1943, 0],
    [1944, 7.0],
    [1945, 20.5],
    [1946, 34.0],
    [1947, 9.0],
    [1948, 23.5],
    [1949, 172.0],
    [1950, 243.0],
    [1951, 44.0],
    [1952, 41.0],
    [1953, 411.0],
    [1954, 447.0],
    [1955, 1407.0],
    [1956, 1349.0],
    [1957, 3093.0],
    [1958, 1703.0],
    [1959, 596.0],
    [1960, 1115.0],
    [1961, 1699.0],
    [1962, 784.3333333333333],
    [1963, 619.0],
    [1964, 1334.0],
    [1965, 82.0],
    [1966, 148.0],
    [1967, 275.0],
    [1968, 183.0],
    [1969, 86.5],
    [1970, 160.0],
    [1971, 235.0],
    [1972, 23.0],
    [1973, 403.0],
    [1974, 295.0],
    [1975, 109.0],
    [1976, 953.0],
    [1977, 229.0],
    [1978, 93.0],
    [1979, 178.0],
    [1980, 154.0],
    [1981, 1958.0],
    [1982, 353.0],
    [1983, 200.0],
    [1984, 605.0],
    [1985, 282.66666666666663],
    [1986, 45.0],
    [1987, 388.0],
    [1988, 583.0],
    [1989, 304.0],
    [1990, 632.5],
    [1991, 583.0],
    [1992, 285.0],
    [1993, 157.0],
    [1994, 439.0],
    [1995, 594.0],
    [1996, 96.0],
    [1997, 473.0],
    [1998, 224.0],
    [1999, 256.0],
    [2000, 340.5],
    [2001, 173.0],
    [2002, 338.0],
    [2003, 342.0],
    [2004, 342.0],
    [2005, 91.0],
    [2006, 378.0],
    [2007, 56.0],
    [2008, 0],
    [2009, 0],
    [2010, 163.0],
    [2011, 0],
    [2012, 0],
    [2013, 62.0],
    [2014, 212.0],
    [2015, 64.0],
    [2016, 0],
    [2017, 96.0],
    [2018, 63.0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "Children's",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 0],
    [1942, 0],
    [1943, 0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 0],
    [1948, 0],
    [1949, 0],
    [1950, 0],
    [1951, 0],
    [1952, 0],
    [1953, 0],
    [1954, 0],
    [1955, 0],
    [1956, 0],
    [1957, 0],
    [1958, 0],
    [1959, 0],
    [1960, 82.0],
    [1961, 188.0],
    [1962, 102.0],
    [1963, 12.0],
    [1964, 0],
    [1965, 0],
    [1966, 55.0],
    [1967, 20.0],
    [1968, 0],
    [1969, 0],
    [1970, 0],
    [1971, 0],
    [1972, 160.0],
    [1973, 0],
    [1974, 0],
    [1975, 0],
    [1976, 0],
    [1977, 0],
    [1978, 0],
    [1979, 75.0],
    [1980, 0],
    [1981, 0],
    [1982, 0],
    [1983, 0],
    [1984, 0],
    [1985, 0],
    [1986, 0],
    [1987, 0],
    [1988, 0],
    [1989, 0],
    [1990, 0],
    [1991, 0],
    [1992, 0],
    [1993, 0],
    [1994, 33.0],
    [1995, 0],
    [1996, 0],
    [1997, 92.0],
    [1998, 0],
    [1999, 0],
    [2000, 225.0],
    [2001, 0],
    [2002, 0],
    [2003, 139.0],
    [2004, 0],
    [2005, 0],
    [2006, 46.0],
    [2007, 0],
    [2008, 0],
    [2009, 0],
    [2010, 0],
    [2011, 75.5],
    [2012, 0],
    [2013, 0],
    [2014, 0],
    [2015, 0],
    [2016, 0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "International",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 20.0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 28.0],
    [1938, 0],
    [1939, 3.0],
    [1940, 6.0],
    [1941, 11.0],
    [1942, 24.0],
    [1943, 0.0],
    [1944, 19.0],
    [1945, 33.0],
    [1946, 51.0],
    [1947, 1.0],
    [1948, 3.0],
    [1949, 122.0],
    [1950, 68.0],
    [1951, 89.0],
    [1952, 102.0],
    [1953, 208.0],
    [1954, 23.0],
    [1955, 91.0],
    [1956, 236.0],
    [1957, 325.0],
    [1958, 213.0],
    [1959, 158.0],
    [1960, 437.0],
    [1961, 248.0],
    [1962, 446.0],
    [1963, 198.0],
    [1964, 800.6666666666667],
    [1965, 339.0],
    [1966, 272.0],
    [1967, 221.0],
    [1968, 531.0],
    [1969, 910.5],
    [1970, 496.5],
    [1971, 486.5],
    [1972, 793.0],
    [1973, 300.0],
    [1974, 447.5],
    [1975, 330.0],
    [1976, 428.6666666666667],
    [1977, 761.0],
    [1978, 550.5],
    [1979, 783.0],
    [1980, 493.3333333333333],
    [1981, 878.25],
    [1982, 1308.0],
    [1983, 991.0],
    [1984, 1181.0],
    [1985, 628.5],
    [1986, 1067.0],
    [1987, 1242.5],
    [1988, 230.5],
    [1989, 1202.0000000000002],
    [1990, 1194.0],
    [1991, 315.0],
    [1992, 595.0],
    [1993, 862.0],
    [1994, 497.5],
    [1995, 449.5],
    [1996, 255.5],
    [1997, 293.5],
    [1998, 668.0],
    [1999, 138.5],
    [2000, 354.5],
    [2001, 384.0],
    [2002, 191.0],
    [2003, 134.5],
    [2004, 113.0],
    [2005, 533.0],
    [2006, 134.5],
    [2007, 254.0],
    [2008, 191.16666666666666],
    [2009, 1256.3333333333333],
    [2010, 55.0],
    [2011, 84.0],
    [2012, 59.0],
    [2013, 152.0],
    [2014, 0],
    [2015, 0],
    [2016, 60.0],
    [2017, 28.0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "Religious",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 0],
    [1942, 5.0],
    [1943, 0],
    [1944, 0],
    [1945, 7.5],
    [1946, 0],
    [1947, 0],
    [1948, 0],
    [1949, 0],
    [1950, 0],
    [1951, 62.0],
    [1952, 0],
    [1953, 0],
    [1954, 0],
    [1955, 0],
    [1956, 153.0],
    [1957, 0],
    [1958, 288.0],
    [1959, 0],
    [1960, 17.0],
    [1961, 21.0],
    [1962, 85.0],
    [1963, 45.0],
    [1964, 0],
    [1965, 0],
    [1966, 0],
    [1967, 0],
    [1968, 64.0],
    [1969, 0],
    [1970, 0],
    [1971, 0],
    [1972, 119.5],
    [1973, 0],
    [1974, 0],
    [1975, 83.0],
    [1976, 0],
    [1977, 58.0],
    [1978, 133.0],
    [1979, 60.0],
    [1980, 27.0],
    [1981, 0],
    [1982, 278.0],
    [1983, 196.0],
    [1984, 95.0],
    [1985, 244.0],
    [1986, 182.0],
    [1987, 290.0],
    [1988, 343.75],
    [1989, 912.0],
    [1990, 542.5],
    [1991, 1024.0],
    [1992, 391.0],
    [1993, 683.0],
    [1994, 222.0],
    [1995, 592.9],
    [1996, 516.0],
    [1997, 421.0],
    [1998, 702.0],
    [1999, 603.5],
    [2000, 925.0],
    [2001, 964.4285714285714],
    [2002, 775.0],
    [2003, 1560.5],
    [2004, 505.0],
    [2005, 1605.0],
    [2006, 1424.0],
    [2007, 518.0],
    [2008, 1277.666666666667],
    [2009, 1225.0],
    [2010, 1239.0],
    [2011, 1803.0],
    [2012, 988.0],
    [2013, 1578.1875],
    [2014, 804.3125],
    [2015, 745.0],
    [2016, 591.3333333333334],
    [2017, 753.5],
    [2018, 372.0],
    [2019, 257.0],
    [2020, 326.0]
  ]
}, {
  "genre": "Stage & Screen",
  "value": [
    [1925, 0],
    [1926, 0.0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0.0],
    [1936, 1.0],
    [1937, 0],
    [1938, 0],
    [1939, 29.0],
    [1940, 0],
    [1941, 19.0],
    [1942, 0.0],
    [1943, 50.0],
    [1944, 0],
    [1945, 18.0],
    [1946, 20.0],
    [1947, 120.0],
    [1948, 0],
    [1949, 118.5],
    [1950, 11.0],
    [1951, 0],
    [1952, 9.0],
    [1953, 0.3333333333333333],
    [1954, 134.0],
    [1955, 0],
    [1956, 386.0],
    [1957, 135.0],
    [1958, 0],
    [1959, 359.6666666666667],
    [1960, 594.0],
    [1961, 111.0],
    [1962, 84.5],
    [1963, 29.0],
    [1964, 399.0],
    [1965, 761.0],
    [1966, 985.0],
    [1967, 935.0],
    [1968, 61.0],
    [1969, 93.0],
    [1970, 274.0],
    [1971, 25.5],
    [1972, 0],
    [1973, 139.0],
    [1974, 175.0],
    [1975, 0],
    [1976, 525.0],
    [1977, 34.0],
    [1978, 0],
    [1979, 769.0],
    [1980, 590.0],
    [1981, 366.0],
    [1982, 227.0],
    [1983, 671.5],
    [1984, 150.5],
    [1985, 373.16666666666663],
    [1986, 773.0],
    [1987, 692.6666666666666],
    [1988, 337.0],
    [1989, 198.0],
    [1990, 1006.0],
    [1991, 547.0],
    [1992, 1007.0],
    [1993, 298.0],
    [1994, 549.0],
    [1995, 1182.0],
    [1996, 43.0],
    [1997, 973.5],
    [1998, 483.0],
    [1999, 277.0],
    [2000, 623.8333333333334],
    [2001, 1422.0],
    [2002, 896.0],
    [2003, 2137.666666666667],
    [2004, 1269.0],
    [2005, 604.0],
    [2006, 1100.0],
    [2007, 618.0],
    [2008, 363.0],
    [2009, 447.0],
    [2010, 335.0],
    [2011, 245.0],
    [2012, 369.0],
    [2013, 1237.0],
    [2014, 424.0],
    [2015, 0],
    [2016, 0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "Easy Listening",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 0],
    [1942, 0.0],
    [1943, 0],
    [1944, 8.0],
    [1945, 2.0],
    [1946, 1.0],
    [1947, 110.0],
    [1948, 0],
    [1949, 6.0],
    [1950, 124.5],
    [1951, 0.0],
    [1952, 302.0],
    [1953, 31.833333333333332],
    [1954, 635.5],
    [1955, 75.0],
    [1956, 494.0],
    [1957, 542.0],
    [1958, 1566.0],
    [1959, 967.0],
    [1960, 1049.0],
    [1961, 1051.0],
    [1962, 1841.0],
    [1963, 1175.0],
    [1964, 722.5],
    [1965, 1010.0],
    [1966, 404.0],
    [1967, 354.0],
    [1968, 391.0],
    [1969, 45.0],
    [1970, 98.0],
    [1971, 64.0],
    [1972, 25.0],
    [1973, 39.0],
    [1974, 41.5],
    [1975, 29.0],
    [1976, 59.5],
    [1977, 103.5],
    [1978, 81.5],
    [1979, 209.0],
    [1980, 38.0],
    [1981, 0],
    [1982, 115.0],
    [1983, 0],
    [1984, 10.5],
    [1985, 0],
    [1986, 15.5],
    [1987, 255.5],
    [1988, 82.0],
    [1989, 58.0],
    [1990, 0],
    [1991, 34.0],
    [1992, 61.0],
    [1993, 48.0],
    [1994, 0],
    [1995, 0],
    [1996, 51.5],
    [1997, 21.5],
    [1998, 48.0],
    [1999, 45.0],
    [2000, 0],
    [2001, 0],
    [2002, 43.0],
    [2003, 0],
    [2004, 23.5],
    [2005, 44.0],
    [2006, 112.0],
    [2007, 0],
    [2008, 0],
    [2009, 46.0],
    [2010, 0],
    [2011, 0],
    [2012, 102.0],
    [2013, 438.0],
    [2014, 107.0],
    [2015, 0],
    [2016, 0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "New Age",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 0],
    [1941, 0.0],
    [1942, 0],
    [1943, 0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 0],
    [1948, 0],
    [1949, 0],
    [1950, 0],
    [1951, 0],
    [1952, 0],
    [1953, 0],
    [1954, 0],
    [1955, 0],
    [1956, 0],
    [1957, 0],
    [1958, 0],
    [1959, 0],
    [1960, 0],
    [1961, 0],
    [1962, 0],
    [1963, 0],
    [1964, 33.0],
    [1965, 0],
    [1966, 0],
    [1967, 0],
    [1968, 0],
    [1969, 0],
    [1970, 0],
    [1971, 0],
    [1972, 32.0],
    [1973, 131.0],
    [1974, 0],
    [1975, 37.0],
    [1976, 75.0],
    [1977, 82.0],
    [1978, 28.0],
    [1979, 23.0],
    [1980, 349.0],
    [1981, 478.0],
    [1982, 504.0],
    [1983, 51.0],
    [1984, 347.0],
    [1985, 70.0],
    [1986, 359.0],
    [1987, 589.5],
    [1988, 655.0],
    [1989, 0],
    [1990, 39.0],
    [1991, 1194.0],
    [1992, 119.0],
    [1993, 448.0],
    [1994, 575.5],
    [1995, 580.0],
    [1996, 156.0],
    [1997, 125.5],
    [1998, 100.0],
    [1999, 121.5],
    [2000, 740.0],
    [2001, 303.0],
    [2002, 94.0],
    [2003, 52.0],
    [2004, 40.0],
    [2005, 499.0],
    [2006, 48.0],
    [2007, 268.0],
    [2008, 296.0],
    [2009, 218.0],
    [2010, 48.0],
    [2011, 48.0],
    [2012, 0],
    [2013, 57.0],
    [2014, 0],
    [2015, 60.0],
    [2016, 67.0],
    [2017, 0],
    [2018, 0],
    [2019, 0],
    [2020, 0]
  ]
}, {
  "genre": "Pop/Rock",
  "value": [
    [1925, 3.0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 8.0],
    [1931, 0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 0],
    [1937, 4.0],
    [1938, 0.0],
    [1939, 0],
    [1940, 0],
    [1941, 7.0],
    [1942, 248.0],
    [1943, 0],
    [1944, 0],
    [1945, 1.5],
    [1946, 0],
    [1947, 5.0],
    [1948, 0],
    [1949, 0.0],
    [1950, 3.0],
    [1951, 6.0],
    [1952, 0],
    [1953, 0],
    [1954, 133.0],
    [1955, 27.0],
    [1956, 1020.0],
    [1957, 2488.0],
    [1958, 3890.0],
    [1959, 4395.0],
    [1960, 4735.0],
    [1961, 5004.5],
    [1962, 6754.166666666666],
    [1963, 12143.0],
    [1964, 12231.5],
    [1965, 17870.5],
    [1966, 24734.0],
    [1967, 31246.0],
    [1968, 28300.833333333336],
    [1969, 38656.5],
    [1970, 42523.0],
    [1971, 39839.6],
    [1972, 34314.5],
    [1973, 41987.5],
    [1974, 36181.0],
    [1975, 35163.0],
    [1976, 36084.16666666667],
    [1977, 43021.0],
    [1978, 36804.5],
    [1979, 41571.5],
    [1980, 39196.0],
    [1981, 38453.0],
    [1982, 38646.5],
    [1983, 42196.5],
    [1984, 38921.99999999999],
    [1985, 38506.75],
    [1986, 37690.0],
    [1987, 40413.0],
    [1988, 38414.0],
    [1989, 37394.25],
    [1990, 33169.0],
    [1991, 32595.0],
    [1992, 32852.5],
    [1993, 29912.666666666668],
    [1994, 36169.5],
    [1995, 32102.0],
    [1996, 30620.5],
    [1997, 31212.0],
    [1998, 28505.5],
    [1999, 33793.166666666664],
    [2000, 35260.16666666667],
    [2001, 34588.28571428572],
    [2002, 38407.5],
    [2003, 40658.21428571429],
    [2004, 38236.66666666667],
    [2005, 36491.5],
    [2006, 40102.0],
    [2007, 40075.5],
    [2008, 38473.0],
    [2009, 34330.66666666667],
    [2010, 32203.5],
    [2011, 30285.0],
    [2012, 35473.66666666667],
    [2013, 34440.79166666667],
    [2014, 27593.154166666667],
    [2015, 26682.833333333332],
    [2016, 21019.166666666668],
    [2017, 20584.833333333332],
    [2018, 16218.5],
    [2019, 18922.5],
    [2020, 13416.5]
  ]
}, {
  "genre": "Reggae",
  "value": [
    [1925, 0],
    [1926, 0],
    [1927, 0],
    [1928, 0],
    [1929, 0],
    [1930, 0],
    [1931, 31.0],
    [1932, 0],
    [1933, 0],
    [1934, 0],
    [1935, 0],
    [1936, 34.0],
    [1937, 0],
    [1938, 0],
    [1939, 0],
    [1940, 160.0],
    [1941, 0],
    [1942, 24.0],
    [1943, 0],
    [1944, 0],
    [1945, 0],
    [1946, 0],
    [1947, 0.0],
    [1948, 0],
    [1949, 0],
    [1950, 0],
    [1951, 0],
    [1952, 35.0],
    [1953, 0],
    [1954, 0],
    [1955, 97.0],
    [1956, 0],
    [1957, 17.0],
    [1958, 0],
    [1959, 96.0],
    [1960, 0],
    [1961, 0],
    [1962, 0],
    [1963, 72.0],
    [1964, 345.0],
    [1965, 927.0],
    [1966, 382.0],
    [1967, 1201.0],
    [1968, 1020.0],
    [1969, 1266.5],
    [1970, 572.0],
    [1971, 204.0],
    [1972, 93.0],
    [1973, 3102.0],
    [1974, 558.0],
    [1975, 1325.0],
    [1976, 3481.0],
    [1977, 3021.0],
    [1978, 2880.0],
    [1979, 1049.0],
    [1980, 1603.0],
    [1981, 606.0],
    [1982, 1668.0],
    [1983, 1581.0],
    [1984, 2503.0],
    [1985, 350.0],
    [1986, 399.0],
    [1987, 227.0],
    [1988, 652.0],
    [1989, 67.0],
    [1990, 637.0],
    [1991, 1006.0],
    [1992, 710.0],
    [1993, 1288.0],
    [1994, 418.5],
    [1995, 774.0],
    [1996, 771.5],
    [1997, 628.0],
    [1998, 255.0],
    [1999, 727.0],
    [2000, 986.5],
    [2001, 1110.0],
    [2002, 2487.5],
    [2003, 887.5],
    [2004, 492.0],
    [2005, 1547.5],
    [2006, 889.5],
    [2007, 875.5],
    [2008, 751.5],
    [2009, 597.0],
    [2010, 344.0],
    [2011, 498.0],
    [2012, 546.5],
    [2013, 246.1875],
    [2014, 309.5],
    [2015, 178.0],
    [2016, 299.5],
    [2017, 157.5],
    [2018, 193.0],
    [2019, 167.16666666666669],
    [2020, 113.0]
  ]
}];


export default data;
