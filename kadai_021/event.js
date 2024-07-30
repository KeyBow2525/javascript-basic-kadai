// btnというidを持つHTML要素を取得して定数に代入。
const addBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得して定数に代入。
const textChange = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行。
addBtn.addEventListener('click', () => {
        // HTML要素がクリックされた2秒後に文章を書き換える。
        setTimeout(() => {
            textChange.textContent = 'ボタンをクリックしました';
        }, 2000);
});

