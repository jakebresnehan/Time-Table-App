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

  //Lets get this shiznit started
  start();

  
  //add a listener to the act elements
  $('.act').bind('click', function(e){
    
    //get the id of the act that has been 'tapped'
    var act_id = $(this).attr("id");
    
    //check to see if the act being tapped is already a favourite
    if($(this).hasClass('fav')){
      
      //remove the act from favs
      removeFromFavs(act_id);
      
      //do some fancy pants styling stuff with the element being tapped
      $(this).removeClass('fav').css('background-color','#eee');;
      $(this).animate({ backgroundColor: "#fff" }, 'slow');
      
      //re-build the favs time-table
      buildFavTimeTable(favs);
      
    }
    else{
      
      //add the acts to favs
      addToFavs(act_id);
      
      //do some fancy pants styling stuff with the element being tapped
      $(this).addClass('fav').css('background-color','#9ada9b');
      $(this).animate({ backgroundColor: "#EDFFEF" }, 'slow');
      
      //re-build the favs time-table
      buildFavTimeTable(favs);
      
    }
    
  });
      
  
});

/*
 * This function is called on the first page load
 * It will build the line-ups and the fav's timetable and the favs
 * timetable if the user has already added acts to it
 */
 
function start(){
  
  //loop through all the acts
  for(var i in acts){
    
    //this act is not a fav until proven otherwise
    var faved = false;
    
    //check if there is anything in local storage
    if(localStorage){
      
        //loop through all values in local storage
        for (x=0; x<=localStorage.length-1; x++){
          
            //grab the value of the current local storage item being examined
            var key = localStorage.key(x);
            var val = localStorage.getItem(key);
            
            //if thefavs[i]xamined is in local storage add it to the favs array
            if(val==acts[i].id){
             
              favs.push(acts[i]); 
              faved = true;
             
            }
          
        }
        
    }
    
    //add the current act to the line-up
    addToLineUp(acts[i],faved);
    
  }
  
  //sort the favs array by start time and build the time table.
  if(favs){
    buildFavTimeTable(favs)
  }

}


/*
 *  This function is used to add an act to the line up by creating the HTML elements 
 *  The function is passed an 'act' object and a boolean which determined if the act is a fav
 */
 
function addToLineUp(act,faved){
  
    //convert the acts start and finish time from 24 hour time to AM/PM
    var start = convertTime(act.start);
    var finish = convertTime(act.finish);
    
    //if the act is a favourite, create a string to be added in to the HTML element, else leave it blank
    if(faved)
      favClass="fav";
    else
      favClass="";
    
    //build the HTML string to be inserted in to the time table
    var content = '<li id="'+act.id+'" class="act '+favClass+'">' + '<span class="time">'+start+' : '+finish+'</span>'+act.band+'</li>';
    
    //Grab the correct timetable element and append the HTML string
    $('#'+act.day+'_'+act.stage+'_acts').append(content);
    
}

/*
 * This function builds the favourites time-table from the favs array
 */

function buildFavTimeTable(favs){
  
    //clear the fav timetables ready to be rebuilt
    $('#wed_favs_acts').empty();
    $('#thu_favs_acts').empty();
    $('#fri_favs_acts').empty();
    
    //sort the favs by start time
    favs.sort(function(a,b){return a.start - b.start})
    
    //loop through the favs array
    for(var i in favs){
      
      //convert the start & finish times from 24 hour to AM/PM
      var start = convertTime(favs[i].start);
      var finish = convertTime(favs[i].finish);
      
      //build the HTML string to be inserted in to the time table
      var content = '<li id="'+favs[i].id+'" class="fav">' + '<span class="time">'+start+' : '+finish+'</span>'+favs[i].band+'<span class="stage">'+favs[i].stage+' Stage</span></li>';
      
      //Grab the correct timetable element and append the HTML string
      $('#'+favs[i].day+'_favs_acts').append(content);
      
    }
}

/*
 * This function removes the act with the given ID from the favs array
 */

function removeFromFavs(id){
  
  //loop through the favs array
  for(var i in favs){
    
    //find the matching act object
    if(favs[i].id==id){
      
      //remove that shiz from the favs
      favs.splice(i,1);
      
    }
    
  }
  
  //clear the local storage
  localStorage.clear();
  
  //loop through the fav array
  for(var i in favs){
    
    //add the remaining fav id's back in to local storage
    localStorage[i] = favs[i].id; 
    
  }
      
}

/*
 * This function adds the act with the give ID to the favs array
 */
 
function addToFavs(id){
 
  //loop through all acts
  for(var i in acts){  
       
    //if current act id equals the given id
    if(acts[i].id==id){
      
      //push act[i] to favs array and sort it by start time
      favs.push(acts[i]);
      favs.sort(function(a,b){return a.start - b.start})
      
    }
        
  }
  
  //loop through the fav array
  for(var i in favs){
    
    //add the fav id's to local storage
    localStorage[i] = favs[i].id; 
    
  }
  
}

/*
 * This function convertes the 24hour time provided in to an AM/PM time
 */

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
    
  converted = hr+':'+min+ampm;
  
  return converted;
  
}
