$.jQTouch({
  icon: 'css/img/falls_icon.png',
    addGlossToIcon: false,
    startupScreen: 'css/img/falls_loading.png',
    statusBar: 'default',
    preloadImages: [
    'css/img/falls_loading.png'
        /*have to read on on why to preLoad and which ones to include*/
        ]
  
});  

var act_id = 200;
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

//Tuesday
act(false,"tue","grand","Dj Miss Goldie","1400","1430");
act(false,"tue","grand","Anna's Go-Go Academy","1500","1530");
act(false,"tue","grand","The Putbacks","1630","1730");
act(false,"tue","grand","Dj Mohair Slim + Lilikoi Kaos","1730","1845");
act(false,"tue","grand","Anna's Go-Go Academy","1845","1915");
act(false,"tue","grand","The Megahorns","1915","2000");
act(false,"tue","grand","Dj Manchild + Lilikoi Kaos","2000","2100");
act(false,"tue","grand","Kitty Daisy & Lewis","2100","2200");
act(false,"tue","grand","Dj Russ Dewbury","2200","2300");
act(false,"tue","grand","Melb Ska Orchestra","2300","0030");
act(false,"tue","grand","Dj Mohair Slim & Dj Manchild","0030","0100");

//Wednesday
act(false,"wed","valley","Welcome To Country","1130","1200");
act(false,"wed","valley","Eagle And The Worm","1220","1300");
act(false,"wed","valley","Last Dinosaurs","1320","1400");
act(false,"wed","valley","Sally Seltmann","1420","1510");
act(false,"wed","valley","Tim And Jean","1530","1610");
act(false,"wed","valley","Jonathan Boulet","1630","1720");
act(false,"wed","valley","Marina & The Dimonds","1740","1840");
act(false,"wed","valley","The Cool Kids","1900","1950");
act(false,"wed","valley","Dan Sultan","2010","2110");
act(false,"wed","valley","Ladyhawke","2130","2230");
act(false,"wed","valley","The Living End","2250","0000");
act(false,"wed","valley","Peaches Dj Show","0010","0100");
act(false,"wed","valley","Yacht Club Dj's","0110","0200");

//Thursday
act(false,"thu","valley","Ball Park Music","1100","1140");
act(false,"thu","valley","The Middle East","1200","1250");
act(false,"thu","valley","Ash Grundwald","1310","1400");
act(false,"thu","valley","Children Collide","1420","1505");
act(false,"thu","valley","Washington","1525","1610");
act(false,"thu","valley","Hot Hot Heat","1630","1730");
act(false,"thu","valley","Angus & Julia Stone","1750","1850");
act(false,"thu","valley","Public Enemy","1910","2020");
act(false,"thu","valley","The Cuban Brothers","2030","2045");
act(false,"thu","valley","Paul Kely","2110","2200");
act(false,"thu","valley","Interpol","2230","2330");
act(false,"thu","valley","Klaxons","2350","0050");
act(false,"thu","valley","The Public Opinion Afro Orchestra","0110","0200");


act(false,"thu","grand","Jinja Safari","1120","1210");
act(false,"thu","grand","Big Scary","1230","1310");
act(false,"thu","grand","Boy and Bear","1330","1410");
act(false,"thu","grand","The Jezabels","1430","1520");
act(false,"thu","grand","The Bedroom Philosopher","1530","1630");
act(false,"thu","grand","Junip","1640","1730");
act(false,"thu","grand","Jamaica","1750","1830");
act(false,"thu","grand","The Bamboos","1850","1930");
act(false,"thu","grand","Richard In Your Mind","1950","2230");
act(false,"thu","grand","Djanimals","2250","2130");
act(false,"thu","grand","Edan The Dee Jay","2145","2245");
act(false,"thu","grand","Fight Facilities","2300","0000");
act(false,"thu","grand","The Cuban Brothers","0010","0100");
act(false,"thu","grand","Hook N Sling","0100","0200");
act(false,"thu","grand","Andy Murphy & Chardy","0200","0400");

//Friday
act(false,"fri","valley","Gold Fields","1120","1210");
act(false,"fri","valley","Cloud Control","1230","1320");
act(false,"fri","valley","The Soft Pack","1340","1430");
act(false,"fri","valley","Daara J Family","1450","1540");
act(false,"fri","valley","The Beautiful Girls","1610","1710");
act(false,"fri","valley","Cold War Kids","1730","1830");
act(false,"fri","valley","Beardyman","1850","1910");
act(false,"fri","valley","Tame Implala","1930","2020");
act(false,"fri","valley","The National","2040","2140");
act(false,"fri","valley","The Rapture","2200","2250");
act(false,"fri","valley","Joan Jett and the Blackhearts","2310","0005");
act(false,"fri","valley","Sleigh Bells","0030","0100");
act(false,"fri","valley","A- Trak","0110","0220");



act(false,"fri","grand","World End Press","1230","1240");
act(false,"fri","grand","Charlie Parr","1300","1350");
act(false,"fri","grand","Tom Glesson, Josh Earl, Nazeem Hussain, Michael Chamberlin","1400","1500");
act(false,"fri","grand","The Morning Benders","1520","1610");
act(false,"fri","grand","Tijuana Cartel","1640","1730");
act(false,"fri","grand","Dan Kelly's Dream Band","1750","1840");
act(false,"fri","grand","Thundamentals","2000","2045");
act(false,"fri","grand","Sampology AV Dj Set","2100","2200");
act(false,"fri","grand","The Revenge","2200","2300");
act(false,"fri","grand","Casiokids","2320","0020");
act(false,"fri","grand","Beardyman","0050","0150");
act(false,"fri","grand","Street Party Dj's","0200","0400");
act(false,"fri","grand","Opulent Sound","0400","0600");

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
  $('#tue ul').empty();
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
    
    //chec   k for timetable clashes, add extra classes to HTML string below as necessary
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
    acts[act_id].fav=false;
  }
  
  if(element.hasClass('non-fav')){
    acts[act_id].fav=true;
  }
  
  if(element.hasClass('removable')){
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