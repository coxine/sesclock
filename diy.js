// 使用箭头函数和模板字符串
setInterval(() => {
//获取当前日期时间
    let time = new Date();
    let y = time.getFullYear();
    let mo = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
//补0
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById("nowtime").innerHTML = `${y}年${mo}月${d}日  ${h}:${m}:${s}`;
}, 1000);

// 用户输入
const km = prompt("请输入考试的年级和科目：");
const sj = prompt("请输入考试的起止时间：");
alert("设置成功，祝您考出好成绩！");

//更改界面
document.getElementById("subject").innerHTML = km;
document.getElementById("time").innerHTML = sj;
