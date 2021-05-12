class Human {
    year;
    pol;
    nationality;   

    work() {

    }

    relax() {

    }

    family() {

    }

}
class Employer extends Human {
    subordinates;
    wages;
    office;
    constructor() {
        super();
    }

    experience(year) {
        console.log('experience' + year);
    }

    lead(number) {
        console.log(`subordinates ${number} is worked`);
    }

    setOffice() {

    }

    
}

class Engineer extends Employer {
    constructor(params) {
        super();
        let { year, pol, nationality } = params;
        this.year = 32;
        this.pol = M;
        this.nationality = BR;
    }
    draw() {

    }
    build() {

    }

    shout() {
        console.log('Loudly');
    }

}
class Tester extends Employer {
    constructor(params) {
        super();
        let { year, pol, nationality } = params;
        this.year = 25;
        this.pol = M;
        this.nationality = UKR;
    }
    testIt() {

    }
    argue() {
        console.log('Engineer not right');
    }

    modify() {
        
    }

}