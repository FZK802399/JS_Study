// 增加
// 1
  document.write('<img src="img/icon_01.png">');

// 2
  //  createElement根据标签名创建标签
  var div = document.createElement('div');
  div.innerHTML = '我是MT';
  document.body.appendChild(div);

  // 往div中插入标签
  var img = document.createElement('img');
  img.src ='img/icon_02.png';
  img.style.display = 'block';
  div.appendChild(img);


// 删除
   var div = document.getElementById('test1');
   var p = document.getElementById('test2');
//   console.log(div, p);
   // 1
//     document.body.removeChild(div);
//     document.body.removeChild(p);
//
//    div.parentNode.removeChild(div);
//    p.parentNode.removeChild(p);

//   // 2
//      div.remove();
//      p.remove();


// 查询
   // innerHTML  拿到<body>....</body>
   var html = document.body.innerHTML;
//   console.log(html);
   var html1  = document.body.outerHTML;
//    console.log(html1);

   for(var pname in document.body){
       console.log(pname, document.body[pname]);
   }





