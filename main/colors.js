var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackGroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
  function nightdayhandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackGroundColor('black');
      Body.setColor('white');
      self.value = 'day';

      Links.setColor('powderblue');
    } else {
      Body.setBackGroundColor('white');
      Body.setColor('black');
      self.value = 'night';

      Links.setColor('blue');
    }
  }
