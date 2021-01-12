for(var i=1;i<=20;i++){
    console.log(i)
}

//for loop
var vivek = ['vivek','alagiya',21,2000,true]
for(var i=0;i<=vivek.length;i++){
    console.log(vivek[i])
}

//while loop
var i = 0
while(i<vivek.length){
    console.log(vivek[i])
    i++
}

//continue and break statements
var vivek = ['vivek',21,'alagiya',2000,true]
for(var i=0;i<=vivek.length;i++){
    if (typeof vivek[i] !== 'string') 
     break;
    console.log(vivek[i]) 
}

//looping backwards
for(var i=vivek.length;i>=0;i--){
    console.log(vivek[i]) 
}