var Tshircount = 0;
var Pantcount = 0;
var Shirtcount = 0;
var Casualcount = 0;
var Formalcount = 0;
var Watchcount = 0;
var Sunglassescount = 0;

function Tshertscouter(){
    Tshircount++;
};
function Pantscounter(){
    Pantcount++;
};
function Shirtcounter(){
    Shirtcount++;
};
function Casualcounter(){
    Casualcount++;
};
function Formalcounter(){
    Formalcount++;
};
function Watchcounter(){
    Watchcount++;
};
function Sunglassescounter(){
    Sunglassescount++;
};
function display(){
    alert(
         "T-shirt/s "+ Tshircount +"\n Pant/s "+Pantcount+"\n Shirt/s "+Shirtcount+"\n Casual Shose "+Casualcount+
         "\n Formal Shose "+Formalcount+"\n Watch/es "+Watchcount+"\n Sunglass/es "+Sunglassescount
         );
};