//乱数を使ってくじの結果を決め、divタグの内容をくじの結果に書き換える関数
function kansuu(){
    //配列kujiを定義 大吉：6.25％、中吉：12.5%、小吉：18.75％、吉：25％、凶：37.5%
    var kuji = ["大吉","中吉","中吉","小吉","小吉","小吉","吉","吉","吉","吉","凶","凶","凶","凶","凶","凶"];
    //ランダム関数を使い、０から２の間の乱数を作成
    var suuti1 = Math.random();
    var suuti2 = suuti1 * 16;
    //作成した乱数を切り捨てし、変数suuti2に格納する
    suuti2 = Math.floor(suuti2);
    //変数resultにくじの結果を格納する
    var result = kuji[suuti2];
    //3秒後 → divタグの内容をくじの結果に書き換える
    setTimeout(() => {
        var object = document.getElementById("omikuji");
        object.innerText = result;
    }, 3000);
    
}

const start = document.getElementById('start'); // 開始ボタン
const image = document.getElementById('image'); // ロゴ画像

// スタートボタンをクリックしたら
start.addEventListener('click', () => {
  // 画像を時計回りに1回転させる
  image.animate(
    // 途中の状態を表す配列
    [
      { transform: 'rotate(0deg)'  }, // 開始時の状態（0度）
      { transform: 'rotate(25deg)' }, // 終了時の状態（360度）
      { transform: 'rotate(-25deg)'},
      { transform: 'rotate(0deg)'  }
    ], 
    // タイミングに関する設定
    {
      fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
      duration: 500, // 再生時間（1000ミリ秒）
      iterations: 6
    },
  );
});