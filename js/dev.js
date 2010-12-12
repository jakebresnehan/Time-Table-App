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

function act(fav, day, stage, band, start, finish){
  
  var act={
      id: act_id,
      day: day,
      stage: stage,
      band: band,
      start: start,
      finish: finish,
      fav: fav
  }
  
  act_id++;
  
  acts.push(act); 

}

//Wednesday
act(false,"wed","valley","Dj Chris Gill","1500","1600");
act(false,"wed","valley","Anna's Go-Go Academy","1600","1630");
act(false,"wed","valley","Dj Chris Gill","1630","1715");
act(false,"wed","valley","Lilikoi Kaos","1715","1730");
act(false,"wed","valley","Dj Pierre Baroni","1730","1845");
act(false,"wed","valley","Anna's Go-Go Academy","1845","1915");
act(false,"wed","valley","Dj Emma Peel","1915","2015");
act(false,"wed","valley","Lilikoi Kaos","2015","2030");
act(false,"wed","valley","Dj Kano","2030","2200");

//Thursday
act(false,"thu","valley","Ben Wells & The Middle Names","1100","1140");
act(false,"thu","valley","Cloud Control","1200","1240");
act(false,"thu","valley","Daara J Family","1300","1350");
act(false,"thu","valley","The Beautiful Girls","1410","1500");
act(false,"thu","valley","Cold War Kids","1520","1610");
act(false,"thu","valley","Ladyhawke","1630","1720");
act(false,"thu","valley","Tame Impala","1740","1840");
act(false,"thu","valley","The National","1900","2000");
act(false,"thu","valley","The Rapture","2020","2110");
act(false,"thu","valley","The Living End","2130","2230");
act(false,"thu","valley","Joan Jett & The Blackhearts","2250","2350");
act(false,"thu","valley","Sleigh Bells","0010","0040");
act(false,"thu","valley","A-Trak","0050","0150");
act(false,"thu","valley","Beardyman","0200","0300");
act(false,"thu","field","New Saxons","1120","1150");
act(false,"thu","field","Charlie Parr","1210","1300");
act(false,"thu","field","Kitty Daisy & Lewis","1320","1410");
act(false,"thu","field","The Morning Benders","1430","1520");
act(false,"thu","field","Comedy","1530","1630");
act(false,"thu","field","The Soft Pack","1640","1730");
act(false,"thu","field","Tijuana Cartel","1750","1850");
act(false,"thu","field","The Cool Kids","1910","2000");

//Friday
act(false,"fri","valley","Hayley Cooper","1110","1150");
act(false,"fri","valley","The Middle East","1210","1300");
act(false,"fri","valley","Washington","1320","1410");
act(false,"fri","valley","Children Collide","1430","1520");
act(false,"fri","valley","Dan Sultan","1540","1630");
act(false,"fri","valley","Hot Hot Heat","1650","1740");
act(false,"fri","valley","Angus & Julia Stone","1800","1900");
act(false,"fri","valley","Public Enemy","1920","2030");
act(false,"fri","valley","Paul Kelly","2100","2200");
act(false,"fri","valley","Interpol","2230","2330");
act(false,"fri","valley","Klaxons","0000","0100");
act(false,"fri","valley","Peaches Dj Show","0110","0210");
act(false,"fri","valley","The Cuban Brothers","0230","0330");
act(false,"fri","field","Guthrie","1030","1110");
act(false,"fri","field","Boy & Bear","1130","1215");
act(false,"fri","field","Big Scary","1235","1320");
act(false,"fri","field","Junip","1340","1430");
act(false,"fri","field","Comedy","1440","1540");
act(false,"fri","field","Ash Grunwald","1550","1650");
act(false,"fri","field","The Jezabels","1710","1750");
act(false,"fri","field","The Bamboos","1810","1840");
act(false,"fri","field","Edan The Dee Jay","1900","2000");

$(document).ready(function(){
  checkLocalStorage();
  updateLineUps();
})

//Function to check local storage for favs
function checkLocalStorage(){
  
  for (x=0; x<=localStorage.length-1; x++){
          
    //grab the value of the current local storage item being examined
    var key = localStorage.key(x);
    var val = localStorage.getItem(key);
          
    acts[val].fav=true;
    
  }
  
}

//Update the line ups
function updateLineUps(){
  
  favs.length=0;
  $('#wed ul').empty();
  $('#thu ul').empty();
  $('#fri ul').empty();
  $('#my_timetable ul').empty().hide();
  localStorage.clear();
  
  for(var i in acts){
    
    //convert the acts start and finish time from 24 hour time to AM/PM
    var start = convertTime(acts[i].start);
    var finish = convertTime(acts[i].finish);
    
    //if the act is a favourite, create a string to be added in to the HTML element, else leave it blank
    if(acts[i].fav){
      
      favClass="fav";
      favs.push(acts[i]);
      localStorage[i]=acts[i].id;
      
    }
    else
      favClass="non-fav";
    
    //build the HTML string to be inserted in to the time table    
    var content = '<li id="'+acts[i].id+'" class="act '+favClass+'">' + '<h3>'+acts[i].band+'</h3><p class="time">'+start+' - '+finish+'</p></li>';
    
    //Grab the correct timetable element and append the HTML string
    $('#'+acts[i].day+'_'+acts[i].stage+'_acts').append(content);
    
  }
  
  favs.sort(function(a,b){return a.start - b.start});
  
  for(var i in favs){
      
    //convert the start & finish times from 24 hour to AM/PM
    var start = convertTime(favs[i].start);
    var finish = convertTime(favs[i].finish);
    
    //check for timetable clashes, add extra classes to HTML string below as necessary
    var clash = checkForClashes(favs,i);
                
    //build the HTML string to be inserted in to the time table ' +clash+ '
    var content = '<li id="'+favs[i].id+'" class="act removable ' +clash+ '">' + '<h3>'+favs[i].band+'</h3><p class="time">'+start+' - '+finish+' @<span> '+favs[i].stage+' Stage</span></li>';
  
    //Grab the correct timetable element and append the HTML string
    $('#'+favs[i].day+'_favs_acts').append(content).show();
    
  }
  
  $('.act').click(function(e){
    eventHandler($(this));
  }); 
  
}

function convertTime(time){
  
  var ampm;
  var hr;
  var min;
  var converted;
  
  if(time<0100){
    ampm="am";
    hr = 12;
    min = time.substring(2,4);
  }
  else if(time<1000){
    ampm="am";
    hr = time.substring(1,2);
    min = time.substring(2,4);
  }
  else if(time<1200){
    ampm="am";
    hr = time.substring(0,2);
    min = time.substring(2,4);
  }
  else if(time<1300){
    ampm="pm";
    hr = time.substring(0,2);
    min = time.substring(2,4);
  }
  else{
    ampm="pm";
    hr = time.substring(0,2)-12;
    min = time.substring(2,4);
  }
    
  converted = hr+':'+min+' '+ampm;
  
  return converted;
  
}

function eventHandler(element){
  
  var act_id = element.attr("id");
  
  if(element.hasClass('fav')){
    console.log('eventHandled: fav');
    acts[act_id].fav=false;
  }
  
  if(element.hasClass('non-fav')){
    console.log('eventHandled: non-fav');
    acts[act_id].fav=true;
  }
  
  if(element.hasClass('removable')){
    console.log('eventHandled: removable');
    acts[act_id].fav=false;
  }
  
  $('.act').unbind('click');
    
  updateLineUps();
}

function checkForClashes(favs,i)
{
    var retval = "";
      
    var prevFavToday = -1;
    var nextFavToday = -1;

    // clash before:
    // get the index of the act starting before the ith act on the day
    for (j=0; j<i; j++){
      if (favs[i].day == favs[j].day){
      prevFavToday = j;
      }
    }

    // if there's a clash with the item on the timetable add classes to HTML string
    if(prevFavToday > -1){
      if (favs[i].start < favs[prevFavToday].finish){
        retval += " fav_clash_prev";
      }
    }

    // clash after:
    // get the index of the act starting after the ith act on the day
    for (j=favs.length-1; j>i; j--){
      if (favs[i].day == favs[j].day){
      nextFavToday = j;
      }
    }

    // add class to HTML string
    if(nextFavToday > -1){
      if (favs[i].finish > favs[nextFavToday].start){
        retval += " fav_clash_next";
      }
    }
   
    return retval;
 }