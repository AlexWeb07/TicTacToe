x=true;
var pl1="";
var pl2="";
function handleLoad(){
    pl1=prompt("Enter your name:");
    pl2=prompt("Enter your opponent name:");
    if(pl1=="" || pl2=="")
    {
        alert("Enter valid name!!");
        location.reload();
    }
    else{
        alert(pl1+"'s first turn!!");
    document.getElementById("pl2").innerHTML=pl2+": ×";
    document.getElementById("pl1").innerHTML=pl1+": ○";
    }
}
function handleClick(id){
    x=!x;
    x?document.getElementById(id).innerHTML="×":document.getElementById(id).innerHTML="○";
    !x?document.getElementById(id).style.color="blue":document.getElementById(id).style.color="red";
    document.getElementById(id).style.pointerEvents="none";
    p1=document.getElementById("p1").innerHTML;
    p2=document.getElementById("p2").innerHTML;
    p3=document.getElementById("p3").innerHTML;
    p4=document.getElementById("p4").innerHTML;
    p5=document.getElementById("p5").innerHTML;
    p6=document.getElementById("p6").innerHTML;
    p7=document.getElementById("p7").innerHTML;
    p8=document.getElementById("p8").innerHTML;
    p9=document.getElementById("p9").innerHTML;
    restart=document.getElementById("restart");

    if((p1==p2 && p2==p3 && p3!="")
    || (p1==p5 && p5==p9 && p9!="")
    || (p1==p4 && p4==p7 && p7!="") 
    || (p2==p5 && p5==p8 && p8!="") 
    || (p3==p6 && p6==p9 && p9!="") 
    || (p4==p5 && p5==p6 && p6!="") 
    || (p7==p8 && p8==p9 && p9!="") 
    || (p7==p5 && p5==p3 && p3!=""))
    {
        restart.style.display="inline";
        !x?document.getElementById("res").innerHTML=pl1+" Won"
            :document.getElementById("res").innerHTML=pl2+" Won";
        p1=document.getElementById("p1").style.pointerEvents="none";
        p2=document.getElementById("p2").style.pointerEvents="none";
        p3=document.getElementById("p3").style.pointerEvents="none";
        p4=document.getElementById("p4").style.pointerEvents="none";
        p5=document.getElementById("p5").style.pointerEvents="none";
        p6=document.getElementById("p6").style.pointerEvents="none";
        p7=document.getElementById("p7").style.pointerEvents="none";
        p8=document.getElementById("p8").style.pointerEvents="none";
        p9=document.getElementById("p9").style.pointerEvents="none";
    }
    else if(p1!="" && p2!="" && p3!="" && p4!="" && p5!="" && p6!="" && p7!="" && p8!="" && p9!="")
    {
        restart.style.display="inline";
        document.getElementById("res").innerHTML="It's a tie!!";
        p1=document.getElementById("p1").style.pointerEvents="none";
        p2=document.getElementById("p2").style.pointerEvents="none";
        p3=document.getElementById("p3").style.pointerEvents="none";
        p4=document.getElementById("p4").style.pointerEvents="none";
        p5=document.getElementById("p5").style.pointerEvents="none";
        p6=document.getElementById("p6").style.pointerEvents="none";
        p7=document.getElementById("p7").style.pointerEvents="none";
        p8=document.getElementById("p8").style.pointerEvents="none";
        p9=document.getElementById("p9").style.pointerEvents="none";
        
    }
}
function reStart(){
    restart.style.display="none";
    x=true;
    p1=document.getElementById("p1").style.pointerEvents="all";
    p2=document.getElementById("p2").style.pointerEvents="all";
    p3=document.getElementById("p3").style.pointerEvents="all";
    p4=document.getElementById("p4").style.pointerEvents="all";
    p5=document.getElementById("p5").style.pointerEvents="all";
    p6=document.getElementById("p6").style.pointerEvents="all";
    p7=document.getElementById("p7").style.pointerEvents="all";
    p8=document.getElementById("p8").style.pointerEvents="all";
    p9=document.getElementById("p9").style.pointerEvents="all";
    document.getElementById("p1").innerHTML="";
    document.getElementById("p2").innerHTML="";
    document.getElementById("p3").innerHTML="";
    document.getElementById("p4").innerHTML="";
    document.getElementById("p5").innerHTML="";
    document.getElementById("p6").innerHTML="";
    document.getElementById("p7").innerHTML="";
    document.getElementById("p8").innerHTML="";
    document.getElementById("p9").innerHTML="";
    document.getElementById("res").innerHTML="";
}
function handleChange(){
    location.reload();
}
