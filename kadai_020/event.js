// btnというidを持つHTML要素を取得して定数に代入。
const addBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得して定数に代入。
const textChange = document.getElementById('text');

// 新しくh2要素を作成し，定数text2に代入。
const text2 = document.createElement('h2');
// 作成したh2要素にテキストを追加。
text2.textContent = 'ボタンをクリックしました';

// HTML要素がクリックされたときにイベント処理を実行。
addBtn.addEventListener('click', () => {
        // idがbtnの要素の前にtext2を追加。
        document.querySelector('#btn').before(text2);
        // HTML要素がクリックされたとき，idがtextの要素を非表示。
        textChange.style.display = 'none';
});
