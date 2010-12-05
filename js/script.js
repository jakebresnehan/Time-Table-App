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
act("wed","valley","Lilikoi Kaos","2015","20:30");
act("wed","valley","Dj Kano","2030","2200");
//Thursday Valley
act("thu","valley","Dj Chris Gill","1500","1600");
act("thu","valley","Anna's Go-Go Academy","1600","1630");
act("thu","valley","Dj Chris Gill","1630","1715");
act("thu","valley","Lilikoi Kaos","1715","1730");
act("thu","valley","Dj Pierre Baroni","1730","1845");
act("thu","valley","Anna's Go-Go Academy","1845","1915");
act("thu","valley","Dj Emma Peel","1915","2015");
act("thu","valley","Lilikoi Kaos","2015","20:30");
act("thu","valley","Dj Kano","2030","2200");





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




