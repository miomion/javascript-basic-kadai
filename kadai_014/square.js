const nijou = (num) => {
    const answer = num * num;
    return answer; // 計算結果を戻り値として返します
};

// 関数の戻り値を変数に格納してから、それをコンソールに出力する
const result1 = nijou(4);
console.log(result1); // 16が出力される

const result2 = nijou(20);
console.log(result2); // 400が出力される
