
// answer
// 1-----------------
const shirt = {
    colour: "red",
    size: "large",
    getColor() {
      return this.colour;
    },
  };
  
  console.log(shirt.colour);
  console.log(shirt.getColor());
  
  // 2-----------------
  const shirt2 = {
      colour: "green",
      size: "large",
      getColor() {
        return this.colour;
      },
    };
  
    const shirt3 = {
      colour: "orange",
      size: "medium",
      getColor() {
        return this.colour;
      },
    };
  
    // 3-----------------
    const wardrobe = [];
  
    wardrobe.push(shirt);
    wardrobe.push(shirt2);
    wardrobe.push(shirt3);
  
    // 4-----------------
    for (i=0; i < wardrobe.length; i++) {
        console.log("Loop: " + wardrobe[i].getColor());
    }