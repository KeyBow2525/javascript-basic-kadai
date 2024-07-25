
const square = (num) => {
    console.log(num * num);
}

// 合格基準に触らないと思ったので余分なことしています。申し訳ございません。
const ranNum = Math.floor(Math.random() * 20 );
console.log('2乗する値は' + ranNum + 'です');

square(ranNum);
