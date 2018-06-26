#### 地图截屏 [map-snapshot](http://jozhi.github.io/demo/map-snapshot/)

​	用到了 [html2canvas](http://jozhi.github.io/demo/map-snapshot/html2canvas.min.js) 插件，因为涉及到需要截取 OpenLayers 的资源，所以配置了可使用跨域 img 渲染的配置。

``` javascript
html2canvas(document.querySelector("#map"),{
  useCORS : true,
  allowTaint :true
}).then(canvas => {
  document.body.appendChild(canvas)
});
```





其他问题：

​	另外使用了canvas2image 用来实现一键下载图片，渲染非跨域资源能够正常工作。

​	因为使用了非本地资源的地图图片等来渲染 canvas，导致无法使用 canvas 的 toDataURL 属性，所以也没有办法做一键截屏下载的方法。



​	

相关链接：

​	https://html2canvas.hertzen.com/configuration

​	https://github.com/niklasvh/html2canvas

​	https://www.jianshu.com/p/6a07e974a7e8

​	https://github.com/hongru/canvas2image

