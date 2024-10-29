

 function supra(a:()=>void){
  setTimeout(a,1000);
    
}
supra(()=>{
    console.log("this is a time function");
})