// 配列の宣言と値の代入を行う
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// 1～14までの数値を順番に出力する
for (let i = 0; i <= 15; i++) {
  console.log(holidays[i]);
}
// インデックス番号の変数を0とする。
let i = 0;
// インデックス番号変数が、holidaysの要素数を下回っていればループを実行する。
while (i < holidays.length) {
    // インデックス番号を指定してコンソールに出力
  console.log(holidays[i]);
    // インデックス番号を1加算する。
  i++;
}

