//function $(id){
//    return typeof  id === 'string' ? document.getElementById(id) : id;
//}
//
//window.onload = function(){
//   // 获取鼠标滑过的标签
//   var titles = $('tab-head').getElementsByTagName('li');
//   var divs = $('nav-con').getElementsByTagName('div');
//   if (titles.length != divs.length) return;
//   // 遍历titles下所有的li
//    for(var i = 0; i < titles.length; i++){
//       titles[i].id = i;
//       titles[i].onclick = function(){
//          for(var j=0; j<titles.length; j++){
//              titles[j].className = '';
//              divs[j].style.display = 'none';
//          }
//           this.className = 'select';
//           divs[this.id].style.display = 'block';
////           alert(this.id);
//       }
//    }
//
//}


function $(id){
    return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function(){
   // 获取所有的li(标题) 和 标题对应的内容(div)
    var titles = $('tab-head').getElementsByTagName('li');
    var divs = $('nav-con').getElementsByTagName('div');
   //    判断
    if (titles.length != divs.length) return;
    for(var i = 0; i < titles.length; i++){
       titles[i].id = i;
       titles[i].onmouseover = function(){
         for(var j=0; j <titles.length; j++){
             titles[j].className = '';
             divs[j].style.display = 'none';
         }
          this.className = 'select';
          divs[this.id].style.display = 'block';
       }

    }

}

