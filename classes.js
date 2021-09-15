// We're going to create a class that makes a shirt for us as a template!
// Use the previous exercise as a reference:
const shirtObject = {
  colour: "red",
  size: "large",
  getColor() {
    return this.colour;
  },
};
// 1. Create a class called Shirt.
// In the constructor, we need to define the same two properties our objects had (size, colour)
// Outside of the constructor but inside the class, create a method for getColor.

// 2. Create two new instances of shirt with different colours and sizes.
// console log the getColor of both instances.

// ---- Further Challenges ----

// Let's create a class that manages all of our shirts called Wardrobe!
// 1. Created a class called Wardrobe.
// In the constructor, define an empty array property called shirts
// Add a method to the class called addShirt()
// Code this method so that, when it is called, it should take in a parameter and push the parameter to its array
// Create a method called getShirt() that returns the class' array

// 2. Create one new instances of Wardrobe.
// Use the addShirt() method to add your earlier two shirt instances to the array
// Console.log the array using the getShirt() method.
// extension: you can make this getShirt() method a getter method called shirts if you want an extra challenge (remember to make the shirts property private like _shirts)
