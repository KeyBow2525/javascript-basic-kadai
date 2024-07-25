/*
メモ
Date()
getFullYear()
getMonth()　→　1月を0として数値化
getDate()
*/

// 現在の時間を取得。
const date = new Date();

// 年月日を宣言し代入。
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(year + '年' + month + '月' + day + '日');
