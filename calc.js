window.onload = function()
{
    document.getElementById('mbutton').onclick = doCalc;
    document.getElementById('subtbutton').onclick = doCalc;
    document.getElementById('addbutton').onclick = doCalc;
}

function doCalc() {
    var Aval1 = document.index.anum1.value,
        Aval2 = document.index.anum2.value,
        Aval3 = document.index.anum3.value,
        Aval4 = document.index.anum4.value,
        Aval5 = document.index.anum5.value,
        Aval6 = document.index.anum6.value,
        Aval7 = document.index.anum7.value,
        Aval8 = document.index.anum8.value,        
        Aval9 = document.index.anum9.value,

        Bval1 = document.index.bnum1.value,
        Bval2 = document.index.bnum2.value,
        Bval3 = document.index.bnum3.value,
        Bval4 = document.index.bnum4.value,
        Bval5 = document.index.bnum5.value,
        Bval6 = document.index.bnum6.value,
        Bval7 = document.index.bnum7.value,
        Bval8 = document.index.bnum8.value,        
        Bval9 = document.index.bnum9.value;

    var A = $M([
        [Aval1,Aval2,Aval3],
        [Aval4,Aval5,Aval6],
        [Aval7,Aval8,Aval9],
        ]);
    var B = $M([
        [Bval1,Bval2,Bval3],
        [Bval4,Bval5,Bval6],
        [Bval7,Bval8,Bval9]
        ]);  
    if (this.value == "x") {
        var res = A.x(B);
        document.index.cnum1.value = res.e(1,1);
        document.index.cnum2.value = res.e(1,2);
        document.index.cnum3.value = res.e(1,3);
        document.index.cnum4.value = res.e(2,1);
        document.index.cnum5.value = res.e(2,2);
        document.index.cnum6.value = res.e(2,3);
        document.index.cnum7.value = res.e(3,1);
        document.index.cnum8.value = res.e(3,2);
        document.index.cnum9.value = res.e(3,3);

    } else if (this.value == "-") {
        var res = A.subtract(B);
        document.index.cnum1.value = res.e(1,1);
        document.index.cnum2.value = res.e(1,2);
        document.index.cnum3.value = res.e(1,3);
        document.index.cnum4.value = res.e(2,1);
        document.index.cnum5.value = res.e(2,2);
        document.index.cnum6.value = res.e(2,3);
        document.index.cnum7.value = res.e(3,1);
        document.index.cnum8.value = res.e(3,2);
        document.index.cnum9.value = res.e(3,3);
    } else if (this.value == "+") {
        document.index.cnum1.value = check_num(Aval1,Bval1);
        
        document.index.cnum2.value = check_num(Aval2 ,Bval2);
        document.index.cnum3.value = check_num(Aval3 ,Bval3);
        document.index.cnum4.value = check_num(Aval4 ,Bval4);
        document.index.cnum5.value = check_num(Aval5 ,Bval5);
        document.index.cnum6.value = check_num(Aval6 ,Bval6);
        document.index.cnum7.value = check_num(Aval7 ,Bval7);
        document.index.cnum8.value = check_num(Aval8 ,Bval8);
        document.index.cnum9.value = check_num(Aval9 ,Bval9);          
    }
}
function check_num(x,y){
    if(x =="" && y==""){
        return 0;
    }else if(x =="" ){
        return parseFloat(y);
    }else if(y =="" ){ 
        return parseFloat(x);
    }else{
        return parseFloat(x)+ parseFloat(y);;
    }
}
