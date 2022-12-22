var names = new Array();
names[0]="Jhon";
names[1]="Dhoni";
names[2]="Paul";
names[3]="Chris";
names[4]="Jerry";
names[5]="Moanacoo";
names[6]="Yasoo";
names[7]="Sunny";
names[8]="jimmy";
for(var i=0; i< names.length; i++){
    if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}