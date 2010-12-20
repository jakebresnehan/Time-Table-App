var festival = 'marion bay';
var newFav = new Array();
newFav[0]=festival;

var act_id = 0;
var acts =  new Array();
var favs = new Array();
var keep = new Array();


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