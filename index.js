// 題目link
// https://yuhsien.notion.site/179caa9730284da48b0a6df66886a447

// 編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。
// function printEvery3(num){
//     for(let i=0;i<=num;i++){
//         if(i % 3 == 0){
//             console.log(i+1);
//         }
//     }
    
// }
// printEvery3(88);

// 編寫一個名為table9to9的函式，它打印出九九乘法表的內容。
// function table9to9(){
//     for(let i =1; i<=9;i++){
//         for(let j=1;j<=9;j++){
//             console.log(i+"*"+j+"="+i*j)
//         }
//     }
// }
// table9to9()

// 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
// function isUpperCase(word) {
//     if (word === undefined) {
//         return "Input is undefined"; 
//     }
//     // 如果少了下面這一行他會去偵測到沒有word[0]就會報error
//     if (word.length === 0) {
//         return false; // 空字串不是大寫字母
//     }
//     else if (word[0] == word[0].toUpperCase()) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let word = '';
// console.log(isUpperCase(word));

// 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。
// function isAllUpperCase(word){
//     let correct = 0
//     if(word.length<1){return false}
//     console.log(word.length);
//     for(let i =0; i<word.length;i++){
//         if(word[i] == word[i].toUpperCase()){
//             correct+=1
//         }
//     }
//     if (correct==word.length) return true
//     else return false
// }
// console.log(isAllUpperCase(""))

