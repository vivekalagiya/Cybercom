// js coding challenge for BMI 
markHeight = 1.5 //meter
markWeight = 74 //kg
johnHeight = 1.6 //meter
johnWeight = 72 //kg

markBMI = markWeight/(markHeight*markHeight);
johnBMI = johnWeight/(johnHeight*johnHeight);
isMarkHigherBMI = johnBMI<markBMI
console.log("Is mark's BMI is Higher than john's? " + isMarkHigherBMI);

