var SimpleRequest=require('./../lib/simple-request');

//get text
var obj={};
var url='http://www.baidu.com';

SimpleRequest.get(url,null,null,obj,'txt',function(){
    console.log(obj.Content.length);
});

//post
var obj2={};
var postData=require('querystring').stringify({
    'email': 15858178942
});
var url='http://www.renren.com/ajax/ShowCaptcha';

SimpleRequest.post(url,null,postData,null,obj2,'txt',function(){
    console.log(obj2.Content);
});

//get json
var obj3={};
var url='http://login.renren.com/ajax/getEncryptKey';
SimpleRequest.get(url,null,null,obj3,'json',function(){
    console.log('parse ok? '+obj3.parseStatus);
    console.log(obj3.Content);
});
