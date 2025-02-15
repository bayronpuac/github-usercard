/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/bayronpuac")
  .then(response =>{
    console.log(response); 
    cards.appendChild(UserCard(response.data))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards');
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


const followersArray = ['angel-torres', 'dylanmestyanek', 'Wais-A', 'chelsabeth', 'DannyManzietti', 'mary-clayton', 'adkhiker']; 

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then (res => {
     const card = UserCard(res.data)
     const cards = document.querySelector('.cards')
     cards.appendChild(card)
   })
   .catch (error => {
     console.log("this is an error", error)
   })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function UserCard(user){
  const newCard = document.createElement("div");
  const newImg = document.createElement("img");
  const newCardInfo = document.createElement("div");
  const newh3 = document.createElement("h3");
  const newUsername = document.createElement("p");
  const newLocation = document.createElement("p");
  const newProfile = document.createElement("p");
  const newAddress = document.createElement("a");
  const newFollowers = document.createElement("p");
  const newFollowing = document.createElement("p");
  const newBio = document.createElement("p");


  //Append 
    newCard.appendChild(newImg);
    newCard.appendChild(newCardInfo);
    newCardInfo.appendChild(newh3);
    newCardInfo.appendChild(newUsername);
    newCardInfo.appendChild(newLocation);
    newCardInfo.appendChild(newProfile);
    newProfile.appendChild(newAddress);
    newCardInfo.appendChild(newFollowers);
    newCardInfo.appendChild(newFollowing);
    newCardInfo.appendChild(newBio);

  //Class list
  newCard.classList.add('card');
  newCardInfo.classList.add('card-info');
  newh3.classList.add('name');
  newUsername.classList.add('username');
  


  newImg.src = user.avatar_url;
  newh3.textContent = user.name;
  newUsername.textContent = user.login;
  newLocation.textContent = `Location: ${user.location}`;
  newProfile.textContent = `Profile: ${user.html_url}`
  newFollowers.textContent = `Followers: ${user.followers}`;
  newFollowing.textContent = `Following: ${user.following}`;
  newBio.textContent = `Bio: ${user.bio}`;

  //Context
  

  return newCard;
  
} 



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
