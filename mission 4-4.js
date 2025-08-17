//乱数を使ってくじの結果を決め、divタグの内容をくじの結果に書き換える関数
function kansuu(){
    //配列kujiを定義
    var kuji = ["大吉","中吉","小吉"];
    //ランダム関数を使い、０から２の間の乱数を作成
    var suuti1 = Math.random();
    var suuti2 = suuti1 * 3;
    //作成した乱数を切り捨てし、変数suuti2に格納する
    suuti2 = Math.floor(suuti2);
    //変数resultにくじの結果を格納する
    var result = kuji[suuti2];
    //divタグの内容をくじの結果に書き換える
    var object = document.getElementById("omikuji");
    object.innerText = result;
}