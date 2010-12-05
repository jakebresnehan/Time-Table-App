$.jQTouch({
  icon: 'css/img/jqtouch.png',
  addGlossToIcon: true,
  statusBar: 'default',
  preloadImages: [
      /*have to read on on why to preLoad and which ones to include*/
      ]
});  



var act_id = 0;
var acts =  new Array();
var favs = new Array();

function act(day, stage, band, start, finish){
  
  act_id++;
  
  var act={
      id: 'id_'+act_id,
      day: day,
      stage: stage,
      band: band,
      start: start,
      finish: finish
  }
  
  acts.push(act); 

}

//Wednesday
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
act("thu","valley","Cloud Control","1200","1240");
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

//Friday
act("fri","valley","Hayley Cooper","1110","1150");
act("fri","valley","The Middle East","1210","1300");
act("fri","valley","Washington","1320","1410");
act("fri","valley","Children Collide","1430","1520");
act("fri","valley","Dan Sultan","1540","1630");
act("fri","valley","Hot Hot Heat","1650","1740");
act("fri","valley","Angus & Julia Stone","1800","1900");
act("fri","valley","Public Enemy","1920","2030");
act("fri","valley","Paul Kelly","2100","2200");
act("fri","valley","Interpol","2230","2330");
act("fri","valley","Klaxons","0000","0100");
act("fri","valley","Peaches Dj Show","0110","0210");
act("fri","valley","The Cuban Brothers","0230","0330");
act("fri","field","Guthrie","1030","1110");
act("fri","field","Boy & Bear","1130","1215");
act("fri","field","Big Scary","1235","1320");
act("fri","field","Junip","1340","1430");
act("fri","field","Comedy","1440","1540");
act("fri","field","Ash Grunwald","1550","1650");
act("fri","field","The Jezabels","1710","1750");
act("fri","field","The Bamboos","1810","1840");
act("fri","field","Edan The Dee Jay","1900","2000");

$(document).ready(function(){
  
  //Build line ups
  for(var i in acts){
    var content = '<li id="'+acts[i].id+'" class="act">' + '<span class="time">'+acts[i].start+' : '+acts[i].finish+'</span>'+acts[i].band+'</li>'
    $('#'+acts[i].day+'_'+acts[i].stage+'_acts').append(content);
  }
  
  //on tap, add/remove the act from the personal timetable
  $('.act').tap( function(e){
    
    //get the id of the act that has been 'tapped'
    var act_id = $(this).attr("id");
    
    if($(this).hasClass('fav')){
      
      for(var i in favs){
        if(favs[i].id==act_id){
          favs.splice(i,1);
        }
      }
      
      $(this).removeClass('fav');
      
    }
    else{
   
      //match the id with the id of the act in the acts array
      for(var i in acts){     
        if(acts[i].id==act_id){
          //TODO add act_id to html5 storage
          //push act[i] to favs array and sort it by start time
          favs.push(acts[i]);
          favs.sort(function(a,b){return a.start - b.start})
          $(this).addClass('fav');
        }
        
      }
        
    }
    
    //clear the fav timetables ready to be rebuilt
    $('#wed_favs_acts').empty();
    $('#thu_favs_acts').empty();
    $('#fri_favs_acts').empty();
    
    //after act is added/removed, rebuild the fav timetable
    for(var i in favs){
      
      var content = '<li id="'+favs[i].id+'" class="fav">' + '<span class="time">'+favs[i].start+' : '+favs[i].finish+'</span>'+favs[i].band+'<span class="stage">'+favs[i].stage+' Stage</span></li>';
      $('#'+favs[i].day+'_favs_acts').append(content);
      
    }

  });
  
})





