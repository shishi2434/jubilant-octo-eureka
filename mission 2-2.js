//divタグの内容を取得する
var object = document.getElementById('greeting');
//入力プロンプトを表示して、入力内容を取得する
var text = prompt("挨拶しましょう！");
//入力された内容をdivタグに反映させる
object.innerText = text;
