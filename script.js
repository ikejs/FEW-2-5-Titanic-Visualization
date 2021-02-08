import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 20px)'
titanic.style.gridGap = '5px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  const div = document.createElement('div')
  div.setAttribute('data-passenger', JSON.stringify(p));
  return div
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

// Let's loop over each passenger and set some styles 
passengers.forEach((div, i) => {
  const { 
    fields: { 
      survived, 
      sex,
      embarked
    } 
  } = JSON.parse(div.getAttribute('data-passenger'));

  const embarkedColor = () => {
    switch(embarked) {
      case "C": 
        return '#e76f51'
      case "S": 
        return '#f4a261'
      case "Q":
        return '#e76f51'
      default:
        return 'black'
    }
  }

  div.classList.add('passenger');

  div.style.width = '15px'
  div.style.height = '15px'
  div.style.borderRadius = 
    sex === "female" 
      ? '50%'
      : 0;
  div.style.opacity = 
    survived === "Yes" 
      ? 1
      : 0.5;
  div.style.backgroundColor = `${embarkedColor()}`
  // div.style.border = 
  //   embarked 
  //     ? `
  //       3px 
  //       solid 
  //       ${embarkedColor()}` 
  //     : ''
})

const passengerDetails = document.querySelector('#passenger-details')

document.body.addEventListener('mouseover', (e) => {
  if (e.target.matches('.passenger')) {

    const { 
      fields: { 
        name, 
        age,
        fare
      } 
    } = JSON.parse(e.target.getAttribute('data-passenger'));
    
    passengerDetails.style.position = 'block';
    passengerDetails.style.left = `${e.pageX + 3}px`;
    passengerDetails.style.top = `${e.pageY + 3}px`;
    passengerDetails.style.backgroundColor = '#fff';
    passengerDetails.style.border = '1px solid #2a9d8f';
    passengerDetails.style.padding = '0.5em';

    passengerDetails.style.innerHTML = `
      <strong>${name}</strong>
    `;

  }
})