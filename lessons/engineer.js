class Human {
    year;
    pol;
    nationality;

    experience(year) {
        console.log('experience' + year);
    }

    work() {

    }

    family() {

    }

}
class Employer extends Human {
    subordinates;
    wages;
    office

    lead(number) {
        console.log(`subordinates ${number} is worked`);
    }

    setOffice() {

    }

    shout() {
        console.log('Loudly');
    }
}

class Engineer extends Employer {
    constructor(params) {
        super();
        let { year, pol, nationality } = params;
        this.year = year;
        this.pol = pol;
        this.nationality = nationality;
    }
    draw() {

    }
    build() {

    }

    count() {
        
    }

}
class Tester extends Employer {
    constructor(params) {
        super();
        let { year, pol, nationality } = params;
        this.year = year;
        this.pol = pol;
        this.nationality = nationality;
    }
    testIt() {

    }
    argue() {
        console.log('Engineer not right');
    }

    modify() {
        
    }

}