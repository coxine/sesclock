setInterval("NowTime()", 1000);

function NowTime() {
    var time = new Date()
    var y = time.getFullYear()
        mo = time.getMonth() + 1,
        d = time.getDate(),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();
    h = check(h);
    m = check(m);
    s = check(s);
    document.getElementById("nowtime").innerHTML = y + "年" + mo + "月" + d + "日  " + h + ":" + m + ":" + s;
}

function check(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};
var km = prompt("请输入考试的年级和科目：");
var sj = prompt("请输入考试的起止时间：");
alert("设置成功，祝您考出好成绩！");
document.getElementById("subject").innerHTML = km;
document.getElementById("time").innerHTML = sj;