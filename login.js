let n=8;
let count=0;
for(i=1;i<=n;i++){
     if(n%i==0){
         count++
      }
}if(count==2){
    console.log("prime")
}else{
    console.log("not prime")
}



let str="madem";
let bag=" "

for(let i=str.length-1;i>=0;i--){
     bag=bag+str[i];
}if(str==bag){
    console.log("palindrome")
}else{
    console.log("not a palindrome")
}
     


