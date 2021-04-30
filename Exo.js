function mastermind(){
    let tablePossible = ["A", "B", "C", "D", "E"];
    let devinette = [];
    for(let i = 0; i < 3; i++){
        devinette[i] = tablePossible[Math.floor((Math.random() * 5) + 0)];
    }
    console.log(devinette);
    var reponse = prompt("Choisi les 3 bonnes lettres (choix entre A,B,C,D et E)");
    let correction = [];
    for(let y = 0; y <= 2; y++){
        for(let i = 0; i < 3; i++){
            if(devinette.includes(reponse[i])){
                if(reponse[i] == devinette[i]){
                    correction[i] = 'oui';
                } 
                else{
                    correction[i] = 'presque';
                }
            } 
            else if(!devinette.includes(reponse[i])){
                correction[i] = 'non';
            }
        }
        if(correction[0] == 'oui' && correction[1] == 'oui' && correction[2] == 'oui'){
            alert('GG you won');
            return;
        }
        else if(y == 2){
            alert('you suck');
            return;
        }
        reponse = prompt(reponse + '\r\n' + correction[0] + ',' + correction[1] + ',' + correction[2]);
    }
    console.log(correction);
}

mastermind();
