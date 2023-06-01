

const SALESTAX = 1.12;


class Zine {
    
    constructor(Title,contributor,price) {
        this.title = Title;
        this.contributor = contributor;
        this.price = price;
    }

    // totalPrice() {
    //     return this.price *(1 + 0.12);

    totalPrice() {
        return this.price*(1 + SALESTAX);
    }
    Onecontributor() {
        return this.contributor;
    }
    passedInTitle() {
        return this.Title;
    }

    }


const chefZine = new Zine('Croissants 101', 'Julia Child', 4.00);
console.log(chefZine.totalPrice());
const contZine = new Zine('Share', 'Contributor', 5.00);
console.log(contZine.Onecontributor());
const titleZine = new Zine('Title Name', 'Lola', 10.00);
console.log(contZine.passedInTitle());
