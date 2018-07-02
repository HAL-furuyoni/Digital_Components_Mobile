//----------------------------------------------------------------------------
//Common Control
//----------------------------------------------------------------------------
window.onload=function init_check(){
  var ElementsCount = document.CB.elements.length; // チェックボックスの数
   for( i=0 ; i<ElementsCount ; i++ ) {
      document.CB.elements[i].checked = true; // ON・OFFを切り替え
   }
}
function DispFrame(obj,tar){
  if (obj.checked){
    document.getElementById(tar).style.display="block";
  }
  else{
    document.getElementById(tar).style.display="none";
  }
}
//----------------------------------------------------------------------------
//Umbrella
//----------------------------------------------------------------------------
var opcl = 0;
var Umb = new Array();
Umb[0] = new Image();
Umb[0].src = "./images/umbrella_b.png";
Umb[1] = new Image();
Umb[1].src = "./images/umbrella_a.png";
var yukihi = new Array();
yukihi[0] = new Image();
yukihi[0].src = "./images/yukihi_b.png";
yukihi[1] = new Image();
yukihi[1].src = "./images/yukihi_a.png";
function Umb_spin(){
  if( opcl== 0){
    document.getElementById("Umb").src = Umb[opcl].src;
    document.getElementById("Umb_chibi").src = yukihi[opcl].src;
    opcl++;
  }
  else{
    document.getElementById("Umb").src = Umb[opcl].src;
    document.getElementById("Umb_chibi").src = yukihi[opcl].src;
    opcl = 0;
  }
}
//----------------------------------------------------------------------------
//Plan Control
//----------------------------------------------------------------------------
var plan = new Array();
plan[0] = new Image();
plan[0].src = "./images/plan_back.png";
plan[1] = new Image();
plan[1].src = "./images/plan_blue.png";
plan[2] = new Image();
plan[2].src = "./images/plan_red.png";
var p_tactic = 1;
var p_state = 0;
function ImageChange(num){
  if(p_state == 0){
    document.getElementById("Plan1").src = plan[p_tactic].src;
    p_state++;
  }
  else if(p_state==1){
    document.getElementById("Plan1").src = plan[1].src;
    document.getElementById("Plan2").src = plan[2].src;
    document.getElementById("Plan2").style.visibility = "visible";
    p_state++;
  }
  else{
    document.getElementById("Plan1").src = plan[0].src;
    document.getElementById("Plan2").src = plan[0].src;
    document.getElementById("Plan2").style.visibility = "hidden";
    p_tactic = num;
    p_state = 0;
  }
}
//----------------------------------------------------------------------------
//Fujin&Raijin
//----------------------------------------------------------------------------
var n_fujin = 0;
var n_raijin = 0;
var FR_Cgau = new Array();
FR_Cgau[0] = new Image();
FR_Cgau[0].src = "./images/fujin_0x.png";
FR_Cgau[1] = new Image();
FR_Cgau[1].src = "./images/fujin_1x.png";
FR_Cgau[2] = new Image();
FR_Cgau[2].src = "./images/raijin_0x.png";
FR_Cgau[3] = new Image();
FR_Cgau[3].src = "./images/raijin_1x.png";
function DispGauge(nf,nr){
    document.getElementById("fujin").src='./images/fujin_'+
    (nf-nf%10)/10+'x.png';
    document.getElementById('FR_Findex').src = './images/fujin_x'
    +nf%10+'.png';
    document.getElementById("raijin").src='./images/raijin_'+
    (nr-nr%10)/10+'x.png';
    document.getElementById('FR_Rindex').src = './images/raijin_x'
    +nr%10+'.png';

}
function CountUp(flag){
  if(flag==0){
    if(n_fujin>19){n_fujin = 20;}
    else{++n_fujin;}
  }
  else if(flag == 1){
    if(n_raijin>19){n_raijin = 20;}
    else{++n_raijin;}
  }
  DispGauge(n_fujin,n_raijin);
}
function CountDw(flag){
  if(flag==0){
    if(n_fujin>0){--n_fujin;}
  }
  else if(flag==1){
    if(n_raijin>0){--n_raijin;}
  }
  DispGauge(n_fujin,n_raijin);
}
function CountDouble(){
  n_raijin = 2*n_raijin;
  if(n_raijin>19){n_raijin = 20;}
  DispGauge(n_fujin,n_raijin);
}
function CountReset(){
  n_fujin = 0;
  n_raijin = 0;
  DispGauge(n_fujin,n_raijin);
}
