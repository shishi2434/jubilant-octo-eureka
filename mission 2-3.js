//現在時刻を取得し、divの中身を現在時刻に書き換える関数
function datetimeshow() {
    //現在時刻を取得
    var datetime = new Date();
    //「datetime」という日時から「年・月・日・時・分・秒」を取り出す作業
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var day = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    //現在時刻を表示できるように整形し、変数zikokuに格納する
    var zikoku = year+"年"+month+"月"+day+"日"+hour+"時"+minute+"分"+second+"秒";
    //divタグの中身を現在時刻に書き換える
    var object = document.getElementById("datetime");
    object.innerText = zikoku;
}