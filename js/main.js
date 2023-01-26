console.log('Javascript is running');

/*JS Comment
The let statement creates a variable, a chunk of computer memory that can hold
references to data that you want to sav. We storing a reference to an element on the page with this line-
look for the element with the ID we specificy inside of the round brackets (the image tag with the ID of
bitmapGraphic) 

Document referes to the index.html page; querySelector is HOW JS uses CSS to select elements on the page (called method)*/

/* Step #1 - Select the elements you want the user to interact with */
let bitmapGraphic = document.querySelector("bitmapGraphic")

/* Step #3 - What happens when events are triggered? */
function logID() {
    console.log(this.id);
}


/* Step #2 - How do you want the user to interact with the element? */
bitmapGraphic.addEventListener('click', logID);