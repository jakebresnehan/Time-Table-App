
$(document).ready(function(){

  //Lets get this shiznit started
  initiliasation();
  
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
      
    }
    else{
      
      //add the acts to favs
      addToFavs(act_id);
      
      //do some fancy pants styling stuff with the element being tapped
      $(this).addClass('fav').css('background-color','#9ada9b');
      $(this).animate({ backgroundColor: "#EDFFEF" }, 'slow');
      
    }
      
  
}

/*
 * This function is called on the first page load
 * It will build the line-ups and the fav's timetable and the favs
 * timetable if the user has already added acts to it
 */
 
function initialisation(){
  
  //loop through all the acts
  for(var i in acts){
    
    //this act is not a fav until proven otherwise
    var faved = false;
    
    //check if there is anything in local storage
    if(localStorage){
      
        //loop through all values in local storage
        for (i=0; i<=localStorage.length-1; i++)
        {
          
            //grab the value of the current local storage item being examined
            var key = localStorage.key(i);
            var val = localStorage.getItem(key);
            
            //if the current acts being examined is in local storage add it to the favs array
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
  favs.sort(function(a,b){return a.start - b.start})
  buildFavTimeTable(favs)

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
    
    //loop through the favs array
    for(var i in favs){
      
      //convert the start & finish times from 24 hour to AM/PM
      var start = convertTime(favs.start);
      var finish = convertTime(favs.finish);
      
      //build the HTML string to be inserted in to the time table
      var content = '<li id="'+favs.id+'" class="fav">' + '<span class="time">'+start+' : '+finish+'</span>'+favs.band+'<span class="stage">'+favs.stage+' Stage</span></li>';
      
      //Grab the correct timetable element and append the HTML string
      $('#'+favs.day+'_favs_acts').append(content);
      
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
