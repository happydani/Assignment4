

        //////////////////////////////////////////////////
        //   Practice with Objects        

        //////////////////////////
        //
        // Practice with JavaScript OOP Concepts (20 points)
        //

//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:
        
// 1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 

/*
var ANIMAL = ANIMAL || {};
ANIMAL.Dog = function() {
    this._color = color;
}
ANIMAL.Cat = function(speak) {
    this._speak = speak;
}
window.console.log(ANIMAL.Cat.prototype = new ANIMAL.Cat("meow"));
*/


// 2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.

/*
var Cat = {
    vocalization: "purr"
}

var Dog = function(vocalization) {
    this.vocalization = vocalization;
}

// 3.	Directly underneath, create a new instance of the Dog class.

var myDog = new Dog("bark");
window.console.log(myDog.vocalization);
*/


// 4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.

/*
var Animal = function(vocalization) {
    this.vocalization = vocalization;
}

// 5.	Now, change the code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.

var myAnimal = new Animal("bark");
if (myAnimal instanceof Animal) {
    window.console.log('The Animal has been created to ' + myAnimal.vocalization);
 }
*/



// 6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 

/*
var Animal = function(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

var myAnimal = new Animal("dog", "Shetland Sheepdog", "tricolor", 32, 45);
// var myAnimal = new Animal("cat", "Himalayn", "blue point", 12, 18);

// 7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

for (var property in myAnimal) {
    console.log(property);
}


// 8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

var speak = {
    type: "dog",
    color: "tricolor"
};

    if (myAnimal.type == 'dog') {
        window.console.log('The ' + myAnimal.color + ' dog '  + 'is barking!');
    }
    else if (myAnimal.type == 'cat') {
        window.console.log('The ' + myAnimal.color + ' cat ' + 'is meowing!');    
    }
    else {
        window.console.log('This is not a cat nor a dog!'); 
    }
*/

// 9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. 

/*
function Animal(theType, theBreed, theColor, theHeight, theLength) {
    var type = theType;
    var breed = theBreed;
    var color = theColor;
    var height = theHeight;
    var length = theLength;
    this._animalType = type;
    
 //   console.log('2. I got here! ' + type); 
    
    var checkType = function() {
       // window.console.log('3. I got here! ' + type); 
        
        if (type == "dog") {
            window.console.log('This is a ' + type);
            return "dog";
        }
        else if (type == "cat") {
            window.console.log('This is a ' + type);
            return "cat";  
        }
        else { 
            window.console.log('This is neither a cat nor a dog!'); 
            return;
        }
        
    } 
    checkType(); 
}

var myAnimal = new Animal("cat", "Himalayan", "blue seal point", 12, 18);

    
//Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
    
//    window.console.log('5. I got here! ' ); 

Animal.prototype.speak = function() {
//        window.console.log('6. I got here! '); 
        window.console.log('The ' + this._animalType + ' has made a noise!');
    return;
}
myAnimal.speak();
*/




// 10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.

/*

var paragraph = 'A big bad wolf wrote to the litte red riding hood,  "When will you take the basket to your grandmother?"';
var word = 'the';
String.prototype.findWords = function(paragraph, word) {
    var num = 0;
    var p = paragraph;
    var index = -1;
  
    index = p.search(word + ' ');
    while (index !== -1) {
//        window.console.log('4. The index is: ' + index);
        num++;
        p = p.slice(index + word.length, p.length);
//        window.console.log('p is: ' + p);
        index = p.search(' ' + word);     
    };
    window.alert('I found ' + '"' + word + '"' + ' ' + num + ' times!');    
    return num;
}
var findMyWord = new String.prototype.findWords(paragraph, word);
*/



//////////////////////////
//   The Recipe Card (15 points)	
 
/*Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper
*/

/*

var Recipe = function() {
    var title = "Guacamole";
    var servings = 4;
    var arrIngredients = [['3','Avocados'],
                           ['1','Lime'],
                           ['1 Teaspoon','Salt'],
                           ['1/2 Cup','Onion'],
                           ['3 Tablespoons','Cilantro'],
                           ['2 Diced','Tomatoes'],
                           ['1 Teaspoon','Garlic'],
                           ['1 Pinch','Ground Pepper']];
    var self = {
        displayInfo: function() {        
            window.console.log(title);
            window.console.log('Serves: ' + servings);
            window.console.log('Ingredients:');
            for (var i=0 in arrIngredients){
                window.console.log('- ' + arrIngredients[i][0] + ' ' +  arrIngredients[i][1]);
            }
            return;
        } 
    }
    return self; 
};

var favRecipe = new Recipe();
favRecipe.displayInfo();
*/

//////////////////////////
// The Reading List (15 points)

// Keep track of which books you read and which books you want to read! 
// Create an array of objects, where each object describes a book and has properties for the 
// title (a string)
//author (a string), 
// and alreadyRead (a boolean indicating if you read it yet). 

//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.   
            
var Books = [{title: "The Hobbit", author:"J.R.R. Tolkien", alreadyRead: true},
             {title: "Deception Point", author:"J.R.R. Tolkien", alreadyRead: true},
             {title: "Assertive Discipline for Parents", author:"Lee Canter", alreadyRead: false},
             {title: "Simply Understanding the Bible", author:"Irving Jensen", alreadyRead: true},
             {title: "Successful Christian Parenting", author:"John MacArthur", alreadyRead: false}];

for (var i=0; i < Books.length; i++) {
    if (Books[i].alreadyRead == true){
        window.console.log('You already read "' + Books[i].title + '" by ' + Books[i].author + '.');
    }
    else 
        window.console.log('You still need to read "' + Books[i].title + '" by ' + Books[i].author + '.');
}