// select the form and review feed
const commentForm = document.querySelector('form');
const commentFeed = document.querySelector('#feed');
let fullName, message;
let comments = [];

// console.log(reviewForm);


function createCard(comment) {
    let {fullName, message} = comment;
    const commentCard = document.createElement('div');
       commentCard.classList= 'comment card';

       // h3 for commentee name
       const cardHeader = document.createElement('h3');
       cardHeader.className = 'commentee';

       // div holding the card details
       const cardContent = document.createElement('div');
       cardContent.className = 'card-content';

       //paragraph holding the comment text
       const cardText = document.createElement('p');
       cardText.className = 'comment-text';

       cardHeader.textContent = fullName;
       commentCard.appendChild(cardHeader); // adds reviewer name to the DOM

       // add review
       cardText.textContent = message;
       cardContent.appendChild(cardText);

       // now add reviews to the page
       commentCard.appendChild(cardContent);
       commentFeed.appendChild(commentCard);
}

// process form submit for comments
commentForm.addEventListener('submit', (e) => {
   e.preventDefault();
   // extract data from the form
   fullName = commentForm.full_name.value;
   message = commentForm.message.value;

   // minor validation
   if(fullName && message) {
       //add this to comment feed if this is correct

       //an abject for the input properties
    const commentDetails = {fullName, message };  //assignment Objects
    comments.push(commentDetails);
    createCard(commentDetails)//create a card view for the review details submmited 
    localStorage.setItem('comments', JSON.stringify(comments));// store the inputs form the form
    commentForm.reset();// clear the form for the next entry

   } else {
       alert(' invalid data.')
   }
});

// get previously stored data
let oldData = localStorage.getItem('comments');// call data
let commentStore =oldData ? JSON.parse(oldData): 'no comments';

// check if there is anything in the comments
//if commentstore doesnot equall t
if(commentStore.length && commentStore != 'no comments') {
    comments = [...commentStore];
    commentStore.forEach(comment => {// create a new card for each entry
      createCard(comment);
  })
}