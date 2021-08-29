const MOVES =[3, 2, 2, 2, 1, 1]
// 1/6 avanza 3 cuadros
// 2/6 avanza 1 cuadro
// 3/6 avanza 2 cuadros


//Se tira un dado y da un resultado de 0 a 5
class Dice{
    throw(){
        return Math.floor(Math.random()*6);
    }
}


//Se tira el dado y se sustituye en el array de moves
// dando un valor de 1 a 3
let dice=new Dice;
let movement=MOVES[dice.throw()]



class Race{
    constructor(distance, movement){
        //Distancia total a recorrer
        this.distance=distance;
        //La distancia que pueden recorrer por turno
        this.movement=movement;
        //Nombre de los competidores
        this.runner1="Competidor 1";
        this.runner2="Competidor 2";
        //Este lo usaré para sumar las distancias recorridas
        this.runners=[0,0];

    }

    startRace() {
        
        while((this.runners[0] < 100 && this.runners[1] < 100)){
            //Añade lo que avanza el competidor 1
            this.runners[0] += MOVES[dice.throw()];
            //Muestra un mensaje acerca de lo avanzado
            this.speaker(this.runner1, this.runners[0] );
            this.runners[1] += MOVES[dice.throw()];
            this.speaker(this.runner2, this.runners[1]);
        }
        this.objective();
    }

    //Muestra los metros recorridos en la consola
    speaker(runner, distance){
        console.log(`El ${runner} ha recorrido ${distance} metros`);
    }

    objective(){
        if(this.runners[0] >= 100 && this.runners[1] >= 100){
            console.log(`${this.runner1} y ${this.runner2} empataron`);
        } else if(this.runners[0] > this.runners[1]){
            console.log(`${this.runner1} ganó la carrera`);
        } else{
            console.log(`${this.runner2} ganó la carrera`);
        }
    }
}

let race1= new Race(100, movement);
race1.startRace();










