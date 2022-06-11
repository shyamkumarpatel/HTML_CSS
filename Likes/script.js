function incrementLikes(inputID){
    var numberOfLikes = document.querySelector(inputID);
    console.log(inputID,": ", ++numberOfLikes.innerText);
}
