$(document).ready(function(){
  
  $('.sessiontm').html('25');
  $('.breaktm').html('1');
  
  $('.hh').html($('.sessiontm').html());
  $('.mm').html('00');
  $('.txt').html('Session');
  
   $('.start').click(function(){
      hhInt=setInterval(sesionmm,250);
  })
   
  $('.plus').click(function(){
    
  tempx=$(this).next().html();
    tempx++;
    $(this).next().html(tempx);
    $('.hh').html($(this).next().html());
    
 if($(this).prev().text()=='Session Length')
   {
     $('.txt').html('Session');
$('.hh').html($('.sessiontm').html());
  $('.mm').html('00');
     clearInterval(hhInt);
    }
  
  
if($(this).prev().text()=='Break Length')
   {
     $('.txt').html('Break!');
 $('.hh').html($('.breaktm').html());
  $('.mm').html('00');
   clearInterval(hhInt); 
   }    
  
  })
  
   $('.minus').click(function(){
    
    tempy=$(this).prev().html();
    if(tempy!=1)
      {
    tempy--;
    $(this).prev().html(tempy);
 $('.hh').html($(this).prev().html());
        
      }   
   
   if($(this).prev().prev().prev().text()=='Session Length')
   {
     $('.txt').html('Session');
$('.hh').html($('.sessiontm').html());
  $('.mm').html('00');
     clearInterval(hhInt);
     }
  
if($(this).prev().prev().prev().text()=='Break Length')
   {
     $('.txt').html('Break!');
 $('.hh').html($('.breaktm').html());
  $('.mm').html('00');
     clearInterval(hhInt);
   }     
   
   })
    
  
  $('.pause').click(function(){
    clearInterval(hhInt);
   })
   
  $('.reset').click(function(){
 
    $('.txt').html('Session');
    $('.sessiontm').html('25');
  $('.breaktm').html('1');
  $('.hh').html($('.sessiontm').html());
  $('.mm').html('00');
  clearInterval(hhInt);
 $('.circ').css({'background-color':'#fff','color':'rgb(100,100,100)'});
    })
})

function sesionmm(){
  
  var a=(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
  var b=(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
  var c=(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
  
  $('.circ').css({'background-color':'rgb('+a+','+b+','+c+')','color':'#fff','border-color':'rgb('+b+','+c+','+a+')'});
  
  
  var temp=$('.mm').text();
  var temp2=$('.hh').text();
  
  if(temp==00 && temp2!=0) 
 {  
   temp=60;
   temp2--;
   temp--;
   $('.hh').html(temp2);
   $('.mm').html(temp);
 }
  else if(temp>=1 && temp<=10)
    {
      temp--;
     $('.mm').html('0'+temp); 
    }
  else if(temp>10 && temp<=60){
      temp--;
   $('.mm').html(temp);
  }
  
  else if(temp2==0 && temp==00)
    {
    
     if($('.txt').text()=='Session')
       {
        $('.txt').html('Break!');
$('.hh').html($('.breaktm').html());
    $('.mm').html('00');
       } 
      
      else if($('.txt').text()=='Break!')
        {
      $('.txt').html('Session'); $('.hh').html($('.sessiontm').html());
    $('.mm').html('00');
        }
      
    }
  
}