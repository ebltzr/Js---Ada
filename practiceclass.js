
const SALESTAX =0.12;

class Zine {
    
    constructor(passedInTitle,contributor,price) {
        this.title = passedInTitle;
        this.contributor = contributor;
        this.price = price;
    }

    // totalPrice() {
    //     return this.price *(1 + 0.12);

    totalPrice() {
        return this.price*(1 + SALESTAX)
    }
    }


const chefZine = new Zine('Croissants', '101', 'Julia Child', 4.00);
console.log(chefZine.totalPrice());