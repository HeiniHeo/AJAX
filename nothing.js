
// <div id="test">
//     <h2>FIRST CONTENT</h2>
//     <button type="button" onclick="changeDoc()">CHANGE CONTENT</button>
// </div>

// <script>
//     function changeDoc(){
//         var trial = new XMLHttpRequest();
//         trial.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 document.getElementById('test').innerHTML = this.responseText;
//             }
//         }
//         trial.open('GET','URL',true);
//         trial.send();
//     }
// </script> 





// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//     }
// }

// xhr.open('get', 'http://localhost:3000', true) // xhr에서 open매서드 ==> 요청 request method/url/xml상태
// xhr.send();