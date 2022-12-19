var Links = {
  setColor : function(color){
    // self = document.querySelector('#night_day')
    var alist = document.querySelectorAll('.ali');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i ++ ; }
    }
}

  var Body = {
    setColor:function (color) {
      document.querySelector('body').style.color=color;
    }, // 객체의 property는 콤마로 구분
    setbgColor:function (color){
      document.querySelector('body').style.backgroundColor=color;
    }
  }

  function nightdayhandler(self){
    if(self.value === 'night') {
      Body.setColor('white');
      Body.setbgColor('black');
      document.querySelector('.title').style.color='white';
      self.value = 'day';
      document.querySelector('.mylink').style.color='white';
      Links.setColor('#E6FFE6');
      }
    else {
      Body.setColor('black');
      Body.setbgColor('white');
      document.querySelector('.title').style.color='black';
      self.value = 'night';
      document.querySelector('.mylink').style.color='black';
      Links.setColor('#FF1493');
    }
  }
