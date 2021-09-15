
// answers
// 1.
class Shirt {
    constructor(inputTwo, inputOne) {
      (this.colour = inputTwo), (this.shirt = inputOne);
    }
    getColor() {
      return this.colour;
    }
  }
  
  // 2.
  let greenShirt = new Shirt("green", "large");
  let redShirt = new Shirt("red", "medium");
  console.log(greenShirt.getColor() + " /// " + redShirt.getColor());
  
  // ---- further challenge ----
  // 1.
  
  class Wardrobe {
    constructor() {
      this._shirts = [];
    }
  
    addShirt(shirtItem) {
      this.shirts.push(shirtItem);
    }
  
    get shirts() {
      return this._shirts;
    }
  }
  
  // 2.
  let firstWardrobe = new Wardrobe();
  firstWardrobe.addShirt(greenShirt);
  firstWardrobe.addShirt(redShirt);
  console.log(firstWardrobe.shirts);
  