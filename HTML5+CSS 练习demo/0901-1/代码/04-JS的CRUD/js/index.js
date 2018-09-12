/**
 * Created by xiaomage on 15/9/1.
 */

// 插入
//1. write

// document.write('hello world!');
// document.write('<img src="img/img_03.jpg">');
// document.write('<input>');
// document.write('<input type="date">');
document.write('hello word');
document.write('<img src="img/img_03.jpg">');
document.write('<input>');
document.write('<input type = "date">');


// 2.
  var btn = document.createElement('button');
  btn.innerHTML = '百度一下,你就不知道';
  btn.style.border = '10px solid #ddd';
  btn.style.width = '100px';
  btn.style.height = '200px';
  btn.style.background = 'red';
  // 把按钮加入到body
//    document.body.appendChild(btn);
  // 把按钮加入到div
   var div = document.getElementsByClassName('test')[0];
   div.appendChild(btn);
  console.log(btn);
//
//
//// 删除
//// 1
  var img = document.getElementsByClassName('icon')[0];
  document.body.removeChild(img);
// 推荐做法
   img.parentNode.removeChild(img);
   btn.parentNode.removeChild(btn);
//
//
//// 2
     img.remove();
     btn.remove();
//


//// 修改
   btn.innerHTML = '百度一下,你就知道';
   btn.style.border = '1px solid #ddd';
   btn.style.backgroundColor = 'blue';
   btn.style.color = 'white';
//
//// 修改连接
   var a = document.getElementsByClassName('xmg')[0];
   a.href = 'http://www.520it.com';
   a.target = '_blank';
//
//
//// 查询
    console.log(document.body.children);
//
   function find(o){
      for(var i = 0; i < o.length; i++){
         console.log(o[i]);
      }
   }

    find(document.body.children);
//
    var dives = document.getElementsByClassName('test1');
//    console.log(dives);

    find(dives);

  // console.log(document.body.innerHTML);
   console.log(document.body.outerHTML);








