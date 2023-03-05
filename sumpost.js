
no_thumb_sum = 300;
thumb_sum = 200;
thumb_h = 220;
thumb_w = 300;
//<![CDATA[
function removeHtmlTag(t,e){if(-1!=t.indexOf("<")){for(var n=t.split("<"),i=0;i<n.length;i++)-1!=n[i].indexOf(">")&&(n[i]=n[i].substring(n[i].indexOf(">")+1,n[i].length));t=n.join("")}for(e=e<t.length-1?e:t.length-2;" "!=t.charAt(e-1)&&-1!=t.indexOf(" ",e);)e++;return t=t.substring(0,e-1),t+"..."}function createSummaryAndThumb(t,e,n){var i=document.getElementById(t),m="",r=i.getElementsByTagName("img"),s=no_thumb_sum;r.length>=1&&(m='<span class="posts-thumb" style="float:left; margin-right: 10px;"><a href="'+e+'" title="'+n+'"><img src="'+r[0].src+'" width="'+thumb_w+'px" height="'+thumb_h+'px" /></a></span>',s=thumb_sum);var g=m+"<div>"+removeHtmlTag(i.innerHTML,s)+"</div>";i.innerHTML=g}
//]]>
