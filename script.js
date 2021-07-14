let displayNumber=(num)=>inpt.value+=num

let removeNumber=()=>inpt.value=inpt.value.slice(0,-1)

let clearNumber=()=>inpt.value="";

let evaluateNumber=()=>{
if(inpt.value==""){
    inpt.value=0;
}
    else{
        try{
            inpt.value=eval(inpt.value)
        }
        catch{
            inpt.value="error"
        }
    }
}