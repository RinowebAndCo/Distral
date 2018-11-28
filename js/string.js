/** string.js */
var a;a=String.prototype;a.isEmail=function(){return this.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)?true:false};a.isUrl=function(){return/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(this)};a.trim=function(){return this.replace(/^\s*/,"").replace(/\s*$/,"")};a.empty=function(){return this.length==0?true:false};a.min_length=function(c){return this.length>=c};
a.isFrenchPhoneNumber=function(){var c=this.replace(/ /g,"").replace(/\./g,"").replace(/\-/g,"");c=c.replace(/^0033/g,"").replace(/^\+33/g,"").replace(/^\(0\)/g,"0");return/^0[0-9]{9}$/.test(c)};a.ucfirst=function(){if(this.length==0)return this;return this.charAt(0).toUpperCase()+this.substr(1,this.length-1)};a.ucwords=function(){return this.replace(/^(.)|\s(.)/g,function(c){return c.toUpperCase()})};
a.number_format=function(c,b,d){var e=this,g=isNaN(c=Math.abs(c))?2:c;c=b==undefined?".":b;d=d==undefined?",":d;b=e<0?"-":"";var f=parseInt(e=Math.abs(+e||0).toFixed(g))+"",h=f.length;h=f.length>3?h%3:0;return b+(h?f.substr(0,h)+d:"")+f.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+d)+(g?c+Math.abs(e-f).toFixed(g).slice(2):"")};
a.checkDate=function(c){if(this.trim().empty())return false;switch(c){case "JJ-MM-AAAA":case "DD-MM-YYYY":var b=this.split("-");c=b[0];var d=b[1]-1;b=b[2];break;case "JJ/MM/AAAA":case "DD/MM/YYYY":b=this.split("/");c=b[0];d=b[1]-1;b=b[2];break;default:throw new Error("checkDate: le format d'entr\u00e9e n'est pas reconnu");}var e=new Date(b,d,c);return c==e.getDate()&&d==e.getMonth()&&b==e.getFullYear()};a.reverse=function(){return this.split("").reverse().join("")};
a.base64_decode=function(){data=this;var c,b,d,e,g,f=0,h=0;e="";var i=[];if(!data)return data;data+="";do{c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(data.charAt(f++));b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(data.charAt(f++));e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(data.charAt(f++));g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(data.charAt(f++));d=c<<18|b<<
12|e<<6|g;c=d>>16&255;b=d>>8&255;d=d&255;if(e==64)i[h++]=String.fromCharCode(c);else if(g==64)i[h++]=String.fromCharCode(c,b);else i[h++]=String.fromCharCode(c,b,d)}while(f<data.length);e=i.join("");return e=e.utf8_decode()};
a.utf8_decode=function(){str_data=this;var c=[],b=0,d=0,e=0,g=0,f=0;for(str_data+="";b<str_data.length;){e=str_data.charCodeAt(b);if(e<128){c[d++]=String.fromCharCode(e);b++}else if(e>191&&e<224){g=str_data.charCodeAt(b+1);c[d++]=String.fromCharCode((e&31)<<6|g&63);b+=2}else{g=str_data.charCodeAt(b+1);f=str_data.charCodeAt(b+2);c[d++]=String.fromCharCode((e&15)<<12|(g&63)<<6|f&63);b+=3}}return c.join("")};
compareDate=function(c,b,d){switch(c){case "JJ-MM-AAAA":case "DD-MM-YYYY":b=b.split("-");c=new Date(b[2],b[1]-1,b[0]);b=d.split("-");d=new Date(b[2],b[1]-1,b[0]);break;case "JJ/MM/AAAA":case "DD/MM/YYYY":b=b.split("/");c=new Date(b[2],b[1]-1,b[0]);b=d.split("/");d=new Date(b[2],b[1]-1,b[0]);break;default:throw new Error("checkDate: le format d'entr\u00e9e n'est pas reconnu");}if(c.getTime()==d.getTime())return 0;else if(c.getTime()>d.getTime())return 1;else if(c.getTime()<d.getTime())return-1};