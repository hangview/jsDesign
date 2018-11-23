// 代理模式 图片预加载
// 单一职责原则

const LoadingImg = 'http://img.alicdn.com/sns_logo/i1/18584037058093271/T2t10NXSBXXXXXXXXX_!!1596128584-0-mytaobao.jpg';
const ImgSrc = 'http://img04.taobaocdn.com/imgextra/i4/1098448167/TB1I0TpHVXXXXciXXXXXXXXXXXX_!!1098448167-0-tstar.jpg';

const myImg = (function () {
  let imgNode = document.createElement('img');
  document.body.appendChild(imgNode);

  return {
    setSrc: src => imgNode.src = src,
  };
})();

const imgProxy = (function (){
  let img = new Image;
  img.onload = function(){
    myImg.setSrc(this.src);
  };
  return {
    setSrc: function (src) {
      myImg.setSrc(LoadingImg);
      img.src = src;
    }
  }
})();

imgProxy.setSrc(ImgSrc);