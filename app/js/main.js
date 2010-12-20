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
    
    valSplit = val.split(',');

    if(valSplit[0]==festival){
      var id=valSplit[1];
      acts[id].fav=true;
    }
    else{
      keep.push(key,val);
    }
    
  }
  
}

//Update the line ups
function updateLineUps(){
  
  favs.length=0;
  
  if(festival=="lorne")
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
      newFav[1]=acts[i].id;
      localStorage.setItem(festival+acts[i].id,newFav);
      
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
  
  for(var i in keep){
    localStorage[i]=keep[i];
  }
  
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