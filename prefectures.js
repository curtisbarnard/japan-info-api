class Prefecture {
  constructor(
    engName,
    jName,
    island,
    region,
    largeCity,
    size,
    highest,
    population2020
  ) {
    this.engName = engName;
    this.jName = jName;
    this.island = island;
    this.region = region;
    this.largeCity = largeCity;
    this.totalArea = {
      size: size,
      unit: 'km^2',
    };
    this.elevation = {
      highest: highest,
      unit: 'm',
    };
    this.population = {
      pop2020: population2020,
    };
  }
}

// prefecture objects in alphabetical order
const aichi = new Prefecture(
  'Aichi',
  '愛知県',
  'Honshu',
  'Chubu',
  'Nagoya',
  5173.07,
  1415.2,
  7542415
);
const aomori = new Prefecture(
  'Aomori',
  '青森県',
  'Honshu',
  'Tohoku',
  'Aomori',
  9645.64,
  1624.7,
  1237984
);
const akita = new Prefecture(
  'Akita',
  '秋田県',
  'Honshu',
  'Tohoku',
  'Akita',
  11637.52,
  1637,
  959502
);
const chiba = new Prefecture(
  'Chiba',
  '千葉県',
  'Honshu',
  'Kanto',
  'Chiba',
  5157.57,
  408.2,
  6284480
);
const ehime = new Prefecture(
  'Ehime',
  '愛媛県',
  'Shikoku',
  'Shikoku',
  'Matsuyama',
  5676.19,
  1982,
  1334841
);
const fukui = new Prefecture(
  'Fukui',
  '福井県',
  'Honshu',
  'Chubu',
  'Fukui',
  4190.52,
  1256.6,
  766863
);
const fukuoka = new Prefecture(
  'Fukuoka',
  '福岡県',
  'Kyushu',
  'Kyushu',
  'Fukuoka',
  4986.51,
  1229,
  5135214
);
const fukushima = new Prefecture(
  'Fukushima',
  '福島県',
  'Honshu',
  'Tohoku',
  'Iwaki',
  13784.14,
  1021.8,
  1833152
);
const gifu = new Prefecture(
  'Gifu',
  '岐阜県',
  'Honshu',
  'Chubu',
  'Gifu',
  10621.29,
  328.9,
  1978742
);
const gunma = new Prefecture(
  'Gunma',
  '群馬県',
  'Honshu',
  'Kanto',
  'Takasaki',
  6362.28,
  2578,
  1939110
);
const hiroshima = new Prefecture(
  'Hiroshima',
  '広島県',
  'Honshu',
  'Chugoku',
  'Hiroshima',
  8479.65,
  1346,
  2799702
);
const hokkaido = new Prefecture(
  'Hokkaido',
  '北海道',
  'Hokkaido',
  'Hokkaido',
  'Sapporo',
  83424.44,
  2290.9,
  5224614
);
const hyogo = new Prefecture(
  'Hyogo',
  '兵庫県',
  'Honshu',
  'Kansai',
  'Kobe',
  8401.02,
  1509.6,
  5465002
);
const ibaraki = new Prefecture(
  'Ibaraki',
  '茨城県',
  'Honshu',
  'Kanto',
  'Mito',
  6097.39,
  1021.8,
  2867009
);
const ishikawa = new Prefecture(
  'Ishikawa',
  '石川県',
  'Honshu',
  'Chubu',
  'Kanazawa',
  4186.21,
  2702,
  1132526
);
const iwate = new Prefecture(
  'Iwate',
  '岩手県',
  'Honshu',
  'Tohoku',
  'Morioka',
  15275.01,
  2038,
  1210534
);
const kagawa = new Prefecture(
  'Kagawa',
  '香川県',
  'Shikoku',
  'Shikoku',
  'Takamatsu',
  1876.78,
  1062,
  950244
);
const kagoshima = new Prefecture(
  'Kagoshima',
  '鹿児島県',
  'Kyushu',
  'Kyushu',
  'Kagoshima',
  9187.06,
  1936,
  1588256
);
const kanagawa = new Prefecture(
  'Kanagawa',
  '神奈川県',
  'Honshu',
  'Kanto',
  'Yokohama',
  2416.11,
  1675,
  9237337
);
const kochi = new Prefecture(
  'Kochi',
  '高知県',
  'Shikoku',
  'Shikoku',
  'Kochi',
  7103.63,
  1897,
  691527
);
const kumamoto = new Prefecture(
  'Kumamoto',
  '熊本県',
  'Kyushu',
  'Kyushu',
  'Kumamoto',
  7409.46,
  1739,
  1738301
);
const kyoto = new Prefecture(
  'Kyoto',
  '京都府',
  'Honshu',
  'Kansai',
  'Kyoto',
  4612.2,
  971,
  2578087
);
const mie = new Prefecture(
  'Mie',
  '三重県',
  'Honshu',
  'Kansai',
  'Yokkaichi',
  5774.49,
  1695,
  1770254
);
const miyagi = new Prefecture(
  'Miyagi',
  '宮城県',
  'Honshu',
  'Tohoku',
  'Sendai',
  7282.29,
  1832,
  2301996
);
const miyazaki = new Prefecture(
  'Miyazaki',
  '宮崎県',
  'Kyushu',
  'Kyushu',
  'Miyazaki',
  7735.22,
  1756,
  1069576
);
const nagano = new Prefecture(
  'Nagano',
  '長野県',
  'Honshu',
  'Chubu',
  'Nagano',
  13561.56,
  3190,
  2048011
);
const nagasaki = new Prefecture(
  'Nagasaki',
  '長崎県',
  'Kyushu',
  'Kyushu',
  'Nagasaki',
  4130.98,
  1483,
  1312317
);
const nara = new Prefecture(
  'Nara',
  '奈良県',
  'Honshu',
  'Kansai',
  'Nara',
  3690.94,
  1915,
  1324473
);
const niigata = new Prefecture(
  'Niigata',
  '新潟県',
  'Honshu',
  'Chubu',
  'Niigata',
  12583.96,
  2819,
  2201272
);
const oita = new Prefecture(
  'Oita',
  '大分県',
  'Kyushu',
  'Kyushu',
  'Oita',
  6340.76,
  1791,
  1123852
);
const okayama = new Prefecture(
  'Okayama',
  '岡山県',
  'Honshu',
  'Chugoku',
  'Okayama',
  7114.33,
  1344,
  1888432
);
const okinawa = new Prefecture(
  'Okinawa',
  '沖縄県',
  'Ryukyu Islands',
  'Kyushu',
  'Naha',
  2282.59,
  526,
  1467480
);
const osaka = new Prefecture(
  'Osaka',
  '大阪府',
  'Honshu',
  'Kansai',
  'Osaka',
  1905.32,
  959,
  8837685
);
const saga = new Prefecture(
  'Saga',
  '佐賀県',
  'Kyushu',
  'Kyushu',
  'Saga',
  2440.69,
  1076,
  811442
);
const saitama = new Prefecture(
  'Saitama',
  '埼玉県',
  'Honshu',
  'Kanto',
  'Saitama',
  3797.75,
  2484,
  7344765
);
const shiga = new Prefecture(
  'Shiga',
  '滋賀県',
  'Honshu',
  'Kansai',
  'Otsu',
  4017.38,
  1377,
  1413610
);
const shimane = new Prefecture(
  'Shimane',
  '島根県',
  'Honshu',
  'Chugoku',
  'Matsue',
  6707.89,
  1347,
  671126
);
const shizuoka = new Prefecture(
  'Shizuoka',
  '静岡県',
  'Honshu',
  'Chubu',
  'Hamamatsu',
  7777.35,
  3776,
  3633202
);
const tochigi = new Prefecture(
  'Tochigi',
  '栃木県',
  'Honshu',
  'Kanto',
  'Utsunomiya',
  6408.09,
  2578,
  1933146
);
const tokushima = new Prefecture(
  'Tokushima',
  '徳島県',
  'Shikoku',
  'Shikoku',
  'Tokushima',
  4146.75,
  1955,
  719559
);
const tokyo = new Prefecture(
  'Tokyo',
  '東京都',
  'Honshu',
  'Kanto',
  'Tokyo',
  2194.03,
  2017,
  14047594
);
const tottori = new Prefecture(
  'Tottori',
  '鳥取県',
  'Honshu',
  'Chugoku',
  'Tottori',
  3507.14,
  1729,
  553407
);
const toyama = new Prefecture(
  'Toyama',
  '富山県',
  'Honshu',
  'Chubu',
  'Toyama',
  4247.58,
  3015,
  1034814
);
const wakayama = new Prefecture(
  'Wakayama',
  '和歌山県',
  'Honshu',
  'Kansai',
  'Wakayama',
  4724.65,
  1382,
  922584
);
const yamagata = new Prefecture(
  'Yamagata',
  '山形県',
  'Honshu',
  'Tohoku',
  'Yamagata',
  9323.15,
  2236,
  1068027
);
const yamaguchi = new Prefecture(
  'Yamaguchi',
  '山口県',
  'Honshu',
  'Chugoku',
  'Shimonoseki',
  6112.54,
  1338,
  1342059
);
const yamanashi = new Prefecture(
  'Yamanashi',
  '山梨県',
  'Honshu',
  'Chubu',
  'Kofu',
  4465.27,
  3776,
  809974
);
// export object with all prefecture data within
module.exports = {
  aichi: aichi,
  aomori: aomori,
  akita: akita,
  chiba: chiba,
  ehime: ehime,
  fukui: fukui,
  fukuoka: fukuoka,
  fukushima: fukushima,
  gifu: gifu,
  gunma: gunma,
  hiroshima: hiroshima,
  hokkaido: hokkaido,
  hyogo: hyogo,
  ibaraki: ibaraki,
  ishikawa: ishikawa,
  iwate: iwate,
  kagawa: kagawa,
  kagoshima: kagoshima,
  kanagawa: kanagawa,
  kochi: kochi,
  kumamoto: kumamoto,
  kyoto: kyoto,
  mie: mie,
  miyagi: miyagi,
  miyazaki: miyazaki,
  nagano: nagano,
  nagasaki: nagasaki,
  nara: nara,
  niigata: niigata,
  oita: oita,
  okayama: okayama,
  okinawa: okinawa,
  osaka: osaka,
  saga: saga,
  saitama: saitama,
  shiga: shiga,
  shimane: shimane,
  shizuoka: shizuoka,
  tochigi: tochigi,
  tokushima: tokushima,
  tokyo: tokyo,
  tottori: tottori,
  toyama: toyama,
  wakayama: wakayama,
  yamagata: yamagata,
  yamaguchi: yamaguchi,
  yamanashi: yamanashi,
};
