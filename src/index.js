function fetchData() {
  return fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(data => functionData(data));
}

// collect the (div#character-bar) and "detailed-info" elements by id, you will place these elements within the span tags 
function functionData(data) {
  const characterBar = document.getElementById("character-bar");
  const detailedInfo = document.getElementById("detailed-info");
  const votesForm = document.getElementById("votes-form");
  const characterForm = document.getElementById("character-form");
  const resetVotesBtn = document.getElementById("reset-votes");
  const characterName = document.getElementById('name');
  const characterVotes = document.getElementById('vote-count');
  const characterImage = document.getElementById('image');
  const Votes = document.getElementById('votes');

  // Loop through the character data and create a span element for each character

  
  data.forEach(character => {
    const span = document.createElement("span");
    span.textContent = character.name;
//Add a click event listener to display character details when clicked
    span.addEventListener("click", () => {
      characterName.textContent = character.name
      characterImage.src = character.image
      characterVotes.textContent = character.votes

    });
    //add the number of votes from the input field to the character displayed in the `div#detailed-info` && prevent default behavior 
    characterBar.appendChild(span);
    votesForm.addEventListener('submit', (e)=>{
      votecount = votes.value;
      characterVotes.textContent = votecount
      e.preventDefault()

})
  });

}

document.addEventListener('DOMContentLoaded',fetchData)