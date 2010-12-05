$.jQTouch({
  icon: 'css/img/jqtouch.png',
  addGlossToIcon: true,
  statusBar: 'default',
  preloadImages: [
      /*have to read on on why to preLoad and which ones to include
      'css/img/chevron_white.png',*/
      'img/back_button_clicked.png',
      'img/button_clicked.png'
      ]
});  


var act_id = 0;
var acts =  new Array();

function act(day, stage, band, start, finish){
  
  act_id++;
  
  var act={
      id: act_id,
      day: day,
      stage: stage,
      band: band,
      start: start,
      finish: finish
  }
  
  acts.push(act); 

}

//Wednesday Valley Tent
act("wed","valley","Dj Chris Gill","1500","1600");
act("wed","valley","Anna's Go-Go Academy","1600","1630");
act("wed","valley","Dj Chris Gill","1630","1715");
act("wed","valley","Lilikoi Kaos","1715","1730");
act("wed","valley","Dj Pierre Baroni","1730","1845");
act("wed","valley","Anna's Go-Go Academy","1845","1915");
act("wed","valley","Dj Emma Peel","1915","2015");
act("wed","valley","Lilikoi Kaos","2015","2030");
act("wed","valley","Dj Kano","2030","2200");
//Thursday
act("thu","valley","Ben Wells & The Middle Names","1100","1140");
act("thu","valley","Could Control","1200","1240");
act("thu","valley","Daara J Family","1300","1350");
act("thu","valley","The Beautiful Girls","1410","1500");
act("thu","valley","Cold War Kids","1520","1610");
act("thu","valley","Ladyhawke","1630","1720");
act("thu","valley","Tame Impala","1740","1840");
act("thu","valley","The National","1900","2000");
act("thu","valley","The Rapture","2020","2110");
act("thu","valley","The Living End","2130","2230");
act("thu","valley","Joan Jett & The Blackhearts","2250","2350");
act("thu","valley","Sleigh Bells","0010","0040");
act("thu","valley","A-Trak","0050","0150");
act("thu","valley","Beardyman","0200","0300");

act("thu","field","New Saxons","1120","1150");
act("thu","field","Charlie Parr","1210","1300");
act("thu","field","Kitty Daisy & Lewis","1320","1410");
act("thu","field","The Morning Benders","1430","1520");
act("thu","field","Comedy","1530","1630");
act("thu","field","The Soft Pack","1640","1730");
act("thu","field","Tijuana Cartel","1750","1850");
act("thu","field","The Cool Kids","1910","2000");






$(document).ready(function(){
  
  for(var i in acts){
    if(acts[i].day=="wed" && acts[i].stage == "valley"){
      var content = '<li>' + '<span class="time">'+acts[i].start+' : '+acts[i].finish+'</span>'+acts[i].band+'</li>'
      $('#wed_valley_acts').append(content);
    }
  };
  
  
  for(var i in acts){
    if(acts[i].day=="thu" && acts[i].stage == "valley"){
      var content = '<li>' + '<span class="time">'+acts[i].start+' : '+acts[i].finish+'</span>'+acts[i].band+'</li>'
      $('#thu_valley_acts').append(content);
    }
  };
  
  
  for(var i in acts){
     if(acts[i].day=="thu" && acts[i].stage == "field"){
       var content = '<li>' + '<span class="time">'+acts[i].start+' : '+acts[i].finish+'</span>'+acts[i].band+'</li>'
       $('#thu_field_acts').append(content);
     }
   };
   
   for(var i in acts){
      if(acts[i].day=="fri" && acts[i].stage == "valley"){
        var content = '<li>' + '<span class="time">'+acts[i].start+' : '+acts[i].finish+'</span>'+acts[i].band+'</li>'
        $('#fri_valley_acts').append(content);
      }
    };
    
    for(var i in acts){
        if(acts[i].day=="fri" && acts[i].stage == "field"){
          var content = '<li>' + '<span class="time">'+acts[i].start+' : '+acts[i].finish+'</span>'+acts[i].band+'</li>'
          $('#fri_field_acts').append(content);
        }
      };
  
})




