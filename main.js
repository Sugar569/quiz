//クイズ用データ(問題、回答、答え)
let question = [
    [
        "山形県の県庁所在地はどこ？",
        "1.天童市",
        "2.東根市",
        "3.山形市",
        "3"
],
    [
        "山形県のお米といえば？",
        "1.ひとめぼれ",
        "2.はえぬき",
        "3.コシヒカリ",
        "2"
],
    [
        "山形県の果物といえば？",
        "1.さくらんぼ",
        "2.マンゴー",
        "3.みかん",
        "1"
]
]


//htmlデータ取得
const Quiz = document.getElementById('question');
const Ans1 = document.getElementById('ans1');
const Ans2 = document.getElementById('ans2');
const Ans3 = document.getElementById('ans3');


//正解数と問題数
let correct = 0;
let quizCnt = 0;


//関数(問題と回答のセット)を実行
function quizSet() {
    Quiz.textContent = question[quizCnt][0];
    Ans1.textContent = question[quizCnt][1];
    Ans2.textContent = question[quizCnt][2];
    Ans3.textContent = question[quizCnt][3];
}

quizSet();


//回答チェック
function answerCheck(ans) {
    if(ans == question[quizCnt][4]) {
        alert("正解!!");
        correct ++;
    }else{
        alert("不正解…");
    }
    quizCnt ++;
    if(quizCnt == question.length) {
        Quiz.textContent = `正解数は${correct}でした！`;
        Quiz.textContent = "";
        Quiz.textContent = "";
        Quiz.textContent = "";
    }else{
        quizSet();
    }
}