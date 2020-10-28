console.log('Test');

/* <div class="card3" style="width: 18rem;">
    <img src="https://i.imgur.com/fPeWLtQ.png" class="card-img-top" height="225px" alt="...">
    <div class="card-body">
    <h6 class="card-title">*TOP 5 LOADOUTS* for ZOMBIE ROYALE!</h6>
    <p class="card-text">Need some help setting up your class? Check out the top 5 loadouts to help you conquer those zombies.</p>
    <a href="https://www.youtube.com/watch?v=9nYoknNircY" class="btn btn-primary">Watch Video!</a>
</div>
</div> */


function createNewElement(tagName, text) {
    const newElement = document.createElement(tagName); 
    newElement.textContent = text;  
    return newElement;
}
const parentDiv = document.querySelector('.cards')
const divElement = document.createElement('div');
    divElement.classList.add('card3');
    divElement.setAttribute('style', 'width: 18rem;')
    parentDiv.appendChild(divElement);
const newImg = document.createElement('img');
    newImg.classList.add('card-img-top');
    newImg.setAttribute('src', 'https://i.pinimg.com/originals/12/e5/ee/12e5ee2f7056f210561362d951d3a00a.jpg');
    divElement.appendChild(newImg);
const newP = document.createElement('p');
    newP.classList.add('card4-text');
    newP.textContent('Need some help setting up your class? Check out the top 5 loadouts to help you conquer those zombies.');
divElement.appendChild(newP);




// const form = document.createElement('form');
// {/* <div class="form-group">
//         <label for="exampleInputEmail1">Email address</label>
//         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//     </div> */}
// const divElement = document.createElement('div');
// divElement.classList.add('form-group');
// const emailLabel = document.createElement('label');
// emailLabel.setAttribute('for', 'exampleInputEmail1');
// emailLabel.textContent = 'Email address';
// // append to div
// divElement.appendChild(emailLabel);