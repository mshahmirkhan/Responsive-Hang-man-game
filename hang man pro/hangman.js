
    // string="shahmir";
    // v=[...string];
    // console.log(value);

// var str;
const input=() => {
    var v=document.getElementById("ourValue").value;
     str = v.toUpperCase();
    Characters=[...str];
    // console.log(Characters);
    console.log("string value is : ",str)

    strL=str.length;
    // console.log(strL);
    displayDash(strL);
    displayBox(strL);




    document.getElementById("text").style.display = "none";

    // arr=[];
    // arr[0]="a";
    // arr[9]="l";
    // console.log(arr);
}


const displayDash =(strL)=>{
    // console.log(strL);

    for (var u=1 ; u<=strL ;u++){
        var div = document.createElement("div");
        div.id="dash";
        div.class="col-sm-1";
        document.getElementById("here").appendChild(div);
    }
}

const displayBox =(strL)=>{


    for (var u=1 ; u<=strL ;u++){
        var div = document.createElement("div");
        div.id="char"+u;
        div.class="col-sm-1";
        div.src="dp.jpeg";
        document.getElementById("Dhere").appendChild(div);
    }
    
}
arr=[];
const displayChar=(k,ch)=>{

    winCount++;
    console.log("value of winConst");
    console.log(winCount);
    arr[k]=ch;
    k++;
    // e=document.getElementById(char1).innerHTML
    console.log(k);
    if(k==1){
        document.getElementById("char1").innerHTML=ch;
    }else if(k==2){
        document.getElementById("char2").innerHTML=ch;
    }else if(k==3){
        document.getElementById("char3").innerHTML=ch;
    }else if(k==4){
        document.getElementById("char4").innerHTML=ch;
    }else if(k==5){
        document.getElementById("char5").innerHTML=ch;
    }else if(k==6){
        document.getElementById("char6").innerHTML=ch;
    }else if(k==7){
        document.getElementById("char7").innerHTML=ch;
    }else if(k==8){
        document.getElementById("char8").innerHTML=ch;
    }else if(k==9){
        document.getElementById("char9").innerHTML=ch;
    }else if(k==10){
        document.getElementById("char10").innerHTML=ch;
    }else if(k==11){
        document.getElementById("char11").innerHTML=ch;
    }else if(k==12){
        document.getElementById("char12").innerHTML=ch;
    }else if(k==13){
        document.getElementById("char13").innerHTML=ch;
    }else if(k==14){
        document.getElementById("char14").innerHTML=ch;
    }else if(k==15){
        document.getElementById("char15").innerHTML=ch;
    }
}

var counter=0;
var winCount=0;


const check=(point)=>{
    c=str.search(point);
    if(c<0){
        console.log("value not exist");
        counter++;
        switch(counter) {
        case 1:
            console.log("one error");
            document.getElementById("images").src="./hangman pictures/1.png";
            break;
        case 2:
            console.log("2 error");
            document.getElementById("images").src="./hangman pictures/2.png";
            break;
        case 3:
            console.log("3 error");
            document.getElementById("images").src="./hangman pictures/3.png";
            break;
        case 4:
            console.log("4 error");
            document.getElementById("images").src="./hangman pictures/4.png";
            break;
        case 5:
            console.log("5 error");
            document.getElementById("images").src="./hangman pictures/5.png";
            break;
        case 6:
            console.log("6 error");
            document.getElementById("images").src="./hangman pictures/6.png";
            break;
        case 7:
            console.log("7 error");
            document.getElementById("images").src="./hangman pictures/7.png";
            break;
        default:
            console.log("Game Over");
            document.getElementById("images").src="./hangman pictures/dead2.png";

            swal("Good job!", "Sorry you lost!", "error");
        }
    }else{
       /////

        var c=str.search(point);
        console.log(c);// index value
        if(c>=0){displayChar(c,point);}

        var c2=str.replace(point, "0");

        var c3=c2.search(point);
            console.log(c3);// index value

        if(c3>0){displayChar(c3,point);}

        var c4=c2.replace(point, "0");
        var c5=c4.search(point);
            console.log(c5);// index value
        if(c5>0){displayChar(c5,point);}

        var c6=c4.replace(point, "0");
        var c7=c6.search(point);
            console.log(c7);// index value
        if(c7>0){displayChar(c7,point);}

        var c8=c6.replace(point, "0");
        var c9=c8.search(point);
            console.log(c9);// index value
        if(c9>0){displayChar(c9,point);}

        var c10=c8.replace(point, "0");
        var c11=c10.search(point);
            console.log(c11);// index value
        if(c11>0){displayChar(c11,point);}


        var a=[arr];
        var x = a.toString();
        var x1=x.replace(",","");
        var x2=x1.replace(",","");
        var x3=x2.replace(",","");
        var x4=x3.replace(",","");
        var x5=x4.replace(",","");
        var x6=x5.replace(",","");
        var x7=x6.replace(",","");
        var x8=x7.replace(",","");
        var x9=x8.replace(",","");
        var x10=x9.replace(",","");
        var x11=x10.replace(",","");
        var x12=x11.replace(",","");
        var x13=x12.replace(",","");
        var x14=x13.replace(",","");
        var x15=x14.replace(",","");




        if(winCount==strL){
            document.getElementById("images").src="./hangman pictures/win.jpeg";
            var r=swal("Good job!", "You are Genius!", "success");
            console.log("here is alert value");
            console.log(r);
            setInterval(function(){ window.location.reload()}, 6000);
           }
        




        // check methord

        // var b=[...Characters]
        console.log(x15);
        console.log(str);
        if(x15==str){
            console.log("check successfully");
        }
    }
}//check



const Q=()=>{
    check("Q");
    document. getElementById("Q"). disabled = true;
    document. getElementById("Q"). style. backgroundColor = 'gray';
}


const W=()=>{
    check("W");
    document. getElementById("W"). disabled = true;
    document. getElementById("W"). style. backgroundColor = 'gray';
}


const E=()=>{
    check("E");
    document. getElementById("E"). disabled = true;
    document. getElementById("E"). style. backgroundColor = 'gray';
}


const R=()=>{
    check("R");
    document. getElementById("R"). disabled = true;
    document. getElementById("R"). style. backgroundColor = 'gray';
}


const T=()=>{
    check("T");
    document. getElementById("T"). disabled = true;
    document. getElementById("T"). style. backgroundColor = 'gray';
}


const Y=()=>{
    check("Y");
    document. getElementById("Y"). disabled = true;
    document. getElementById("Y"). style. backgroundColor = 'gray';
}


const U=()=>{
    check("U");
    document. getElementById("U"). disabled = true;
    document. getElementById("U"). style. backgroundColor = 'gray';
}


const I=()=>{
    check("I");
    document. getElementById("I"). disabled = true;
    document. getElementById("I"). style. backgroundColor = 'gray';
}


const O=()=>{
    check("O");
    document. getElementById("O"). disabled = true;
    document. getElementById("O"). style. backgroundColor = 'gray';
}


const P=()=>{
    check("P");
    document. getElementById("P"). disabled = true;
    document. getElementById("P"). style. backgroundColor = 'gray';
}


const A=()=>{
    check("A");
    document. getElementById("A"). disabled = true;
    document. getElementById("A"). style. backgroundColor = 'gray';
}


const S=()=>{
    check("S");
    document. getElementById("S"). disabled = true;
    document. getElementById("S"). style. backgroundColor = 'gray';
}


const D=()=>{
    check("D");
    document. getElementById("D"). disabled = true;
    document. getElementById("D"). style. backgroundColor = 'gray';
}


const F=()=>{
    check("F");
    document. getElementById("F"). disabled = true;
    document. getElementById("F"). style. backgroundColor = 'gray';
}


const G=()=>{
    check("G");
    document. getElementById("G"). disabled = true;
    document. getElementById("G"). style. backgroundColor = 'gray';
}


const H=()=>{
    check("H");
    document. getElementById("H"). disabled = true;
    document. getElementById("H"). style. backgroundColor = 'gray';
}


const J=()=>{
    check("J");
    document. getElementById("J"). disabled = true;
    document. getElementById("J"). style. backgroundColor = 'gray';
}


const K=()=>{
    check("K");
    document. getElementById("K"). disabled = true;
    document. getElementById("K"). style. backgroundColor = 'gray';
}


const L=()=>{
    check("L");
    document. getElementById("L"). disabled = true;
    document. getElementById("L"). style. backgroundColor = 'gray';
}


const Z=()=>{
    check("Z");
    document. getElementById("Z"). disabled = true;
    document. getElementById("Z"). style. backgroundColor = 'gray';
}


const X=()=>{
    check("X");
    document. getElementById("X"). disabled = true;
    document. getElementById("X"). style. backgroundColor = 'gray';
}


const C=()=>{
    check("C");
    document. getElementById("C"). disabled = true;
    document. getElementById("C"). style. backgroundColor = 'gray';
}


const V=()=>{
    check("V");
    document. getElementById("V"). disabled = true;
    document. getElementById("V"). style. backgroundColor = 'gray';
}


const B=()=>{
    check("B");
    document. getElementById("B"). disabled = true;
    document. getElementById("B"). style. backgroundColor = 'gray';
}


const N=()=>{
    check("N");
    document. getElementById("N"). disabled = true;
    document. getElementById("N"). style. backgroundColor = 'gray';
}


const M=()=>{
    check("M");
    document. getElementById("M"). disabled = true;
    document. getElementById("M"). style. backgroundColor = 'gray';
}

