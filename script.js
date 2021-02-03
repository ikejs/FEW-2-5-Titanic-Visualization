import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(27, 23px)'
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

  div.style.width = '20px'
  div.style.height = '20px'
  div.style.borderRadius = 
    sex === "male" 
      ? '50%'
      : 0;
  div.style.backgroundColor = 
    survived === "Yes" 
      ? '#2a9d8f'
      : '#264653';
  div.style.border = 
    embarked 
      ? `
        3px 
        solid 
        ${embarkedColor()}` 
      : ''
})

// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 



// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'



