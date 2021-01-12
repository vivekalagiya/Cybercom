johnScore = [89,120,103]
mikeScore = [116,94,123]
var johnScore1 = 89;
var johnScore2 = 120;
var johnScore3 = 103;
var mikeScore1 = 105;
var mikeScore2 = 97;
var mikeScore3 = 188;

var avgScore = function(score1,score2,score3) 
{
    return (score1 + score2 + score3)/3 ;
}
var avgJohn = avgScore(johnScore1,johnScore2,johnScore3);
var avgMike = avgScore(mikeScore1,mikeScore2,mikeScore3);
console.log(avgJohn,avgMike);
if (avgJohn>avgMike)
{
    console.log("John is winner!!!");
}
else if(avgMike>avgJohn)
{
    console.log("Mike is winner!!!");
}
else
{
    console.log("Match is draw!!!");
}
var maryScore1 = 97;
var maryScore2 = 134;
var maryScore3 = 105;
var avgMary = avgScore(maryScore1,maryScore2,maryScore3);
if(avgJohn>avgMary && avgJohn>avgMike)
{
    console.log("John is winner!!!");
    
}
else if(avgMary>avgJohn && avgMary>avgMike)
{
    console.log("Mary is winner!!!");
    
}
else if(avgMike>avgMary && avgMike>avgJohn)
{
    console.log("Mike is winner!!!");
    
}
else if(avgMike === avgMary)
{
    console.log("average draw between Mike and Mary. ");
}
else if(avgJohn == avgMike)
{
    console.log("average draw between John and Mike. ")
}
else 
{
    console.log("average draw between John and Mary. ")
}