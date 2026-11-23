document.documentElement.classList.add('js');
(function(){
 var els=document.querySelectorAll('.rv');
 if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
 else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});els.forEach(function(e){io.observe(e)});}
 setTimeout(function(){els.forEach(function(e){if(e.getBoundingClientRect().top<innerHeight)e.classList.add('in')})},50);
 var box=document.getElementById('petals'),sym=['🌸','♡','✿','🩷'],cols=['#e8a0b0','#f4b8c4','#b00010','#f7c9cf'];
 for(var i=0;i<16;i++){var s=document.createElement('span');s.className='p';s.textContent=sym[i%sym.length];
  s.style.left=(Math.random()*100)+'%';s.style.fontSize=(12+Math.random()*14)+'px';s.style.color=cols[i%cols.length];
  s.style.animationDuration=(12+Math.random()*12)+'s';s.style.animationDelay=(-Math.random()*20)+'s';
  s.style.setProperty('--dx',(Math.random()*160-80)+'px');s.style.setProperty('--rot',(Math.random()*540-270)+'deg');box.appendChild(s);}
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 var last=0;
 function burst(x,y,ch,n,sp){for(var i=0;i<n;i++){var e=document.createElement('span');e.textContent=ch[Math.floor(Math.random()*ch.length)];e.style.cssText='position:fixed;left:'+x+'px;top:'+y+'px;pointer-events:none;z-index:50;color:#e8a0b0;font-size:'+(10+Math.random()*12)+'px';document.body.appendChild(e);var a=Math.random()*6.283,d=sp*(.5+Math.random());var an=e.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:1},{transform:'translate(-50%,-50%) translate('+(Math.cos(a)*d)+'px,'+(Math.sin(a)*d+30)+'px) scale(.3)',opacity:0}],{duration:900+Math.random()*500,easing:'ease-out'});an.onfinish=(function(el){return function(){el.remove()}})(e);}}
 addEventListener('pointermove',function(ev){if(ev.pointerType!=='mouse')return;var n=Date.now();if(n-last>70){last=n;burst(ev.clientX,ev.clientY,['✦','♡'],1,30)}});
 addEventListener('click',function(ev){burst(ev.clientX,ev.clientY,['♡','🌸','✦'],12,90)});
})();
