const characterData = {
    "characters": [
      {
        "id": 1,
        "name": "Mr. Cute",
        "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 2,
        "name": "Mx. Monkey",
        "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 3,
        "name": "Ms. Zebra",
        "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        "votes": 0
      },
      {
        "id": 4,
        "name": "Dr. Lion",
        "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        "votes": 0
      },
      {
        "id": 5,
        "name": "Mme. Panda",
        "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        "votes": 0
      }
    ]
  };

/* collect the element (div#character-bar) in which the span tag will be placed 
//const characterBar = document.getElementById("character-bar");

//set up loop for the characterNames array using forEach and set up a span element for each one
//characterNames.forEach((name) => {
   
  //  const spanElement = document.createElement("span");
  
    // Set the text content of the span to the character name
    //spanElement.textContent = name;
  
    // Add the span element to the character-bar div
    //characterBar.appendChild(spanElement);
  //});

/*console.log(characterBar.appendChild(spanElement));*/




// collect the (div#character-bar) and "detailed-info" elements by id, you will place these elements within the span tags 

const characterBar = document.getElementById("character-bar");
const detailedInfo = document.getElementById("detailed-info");

//console.log(characterBar)

// Loop through the character data and create a span element for each character
characterData.characters.forEach((character) => {
  // Create a span element
  const spanElement = document.createElement("span");

  // Set the character's name as the text content of the span
  spanElement.textContent = character.name;
//console.log(spanElement)


  // Add a click event listener to display character details when clicked
  spanElement.addEventListener("click", () => {
    // Update the detailed-info div with character details
    detailedInfo.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>Votes: ${character.votes}</p>
    `;
  });
  

  // add the span element to the character-bar div
  characterBar.appendChild(spanElement);
});


const votesForm = document.getElementById("votes-form");
const voteCountInput = document.getElementById("vote-count");


