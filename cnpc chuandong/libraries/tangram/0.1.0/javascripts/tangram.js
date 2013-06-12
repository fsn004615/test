/*!
 * Tangram Framework
 * Copyright 2012, 2013 Sichuan Dachengrongxin Technologies Co.,Ltd
 */
 
/* 
   页面初始化处理。在页面由多个模板组合而成的时候：
   1. 避免每个模板在尚未包含jQuery库时调用$(document).ready()；
   2. 协调各模板内部的初始化过程。
*/
$(document).ready(function(){
  if ('function' === typeof(main)){
    main();
  }
});
