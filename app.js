let dcIDArr = [3, 8, 14, 17, 20, 28, 32, 38, 49, 52, 53, 58, 60, 66, 69, 70, 73, 76, 78, 81, 93, 95, 98, 100, 103, 105, 126, 132, 136, 137, 142, 144, 150, 152, 156, 158, 165, 170, 172, 173, 174, 177, 181, 194, 195, 204, 212, 214, 216, 224, 230, 233, 240, 242, 246, 253, 260, 261, 263, 276, 278, 284, 288, 294, 298, 305, 306, 309, 312, 315, 316, 317, 320, 342, 348, 360, 367, 368, 370, 384, 386, 387, 388, 390, 396, 397, 405, 406, 407, 408, 413, 424, 427, 432, 436, 439, 444, 445, 448, 451, 455, 457, 459, 461, 499, 506, 508, 509, 514, 516, 520, 521, 522, 524, 528, 535, 538, 542, 543, 545, 551, 557, 558, 559, 564, 565, 569, 576, 585, 597, 600, 601, 602, 608, 609, 611, 615, 632, 633, 634, 635, 637, 643, 644, 645, 657, 676, 678, 692, 699, 706, 711, 713, 718, 720, 730, 731]
//the array above hold ALL the IDs of DC charcters in the API I access, becaue I need to make a call for each individual character
//let fIDArr = [52, 66, 73, 81, 98, 142, 165, 172, 173, 174, 242, 253, 284, 309, 315, 317, 342, 348, 360, 387, 406, 439, 444, 455, 516, 521, 522, 524, 542, 565, 585, 597, 602, 615, 632, 633, 643, 676, 699, 711, 718, 720, 730] //removed 97, 229, 255, 295, 318, 319, 593, 596, 603
//let mIDArr = [3, 8, 14, 17, 20, 28, 32, 38, 49, 53, 58, 60, 69, 70, 76, 78, 93, 95, 100, 103, 105, 126, 132, 136, 137, 144, 150, 152, 156, 158, 170, 177, 181, 194, 195, 204, 212, 214, 216, 224, 230, 233, 240, 246, 260, 261, 263, 276, 278, 288, 294, 298, 305, 306, 312, 316, 320, 367, 368, 370, 384, 386, 388, 390, 396, 397, 405, 407, 408, 413, 424, 427, 432, 436, 445, 448, 451, 457, 459, 461, 499, 506, 508, 514, 520, 528, 535, 538, 543, 545, 551, 557, 558, 559, 564, 569, 576, 600, 601, 608, 609, 611, 634, 635, 637, 644, 645, 657, 678, 692, 706, 713, 731] //removed: 36, 37, 50, 51, 54, 55, 123, 124, 125, 184, 244, 446, 464, 466, 468, 494, 515, 519, 641, 642, 674, 675
//let oIDArr = [509]

let dcCharacters = []                                                       //Array that will hold each persons info objects
let females = []                                                      //Array that will hold each females info objects
let males = []                                                        //Array that will hold each males info objects
let others = []                                                       //Array that will hold each others info objects
let preference = []                                                   //temporarily holds the array of the users preference
const filterContainer = document.querySelector('#filter-container')   //container for the filters is global because it is references in multiple functions
const profileContainer = document.querySelector('#profile-container') //container for the profiles is global because it is references in multiple functions

const accessAPI = async () => {                                           //async function to call API
  for (let idElement = 1; idElement < dcIDArr.length; idElement++) {
    
    const dcURL = `https://superheroapi.com/api/1967700243378120/${dcIDArr[idElement]}` //API URL

    try {
      const response = await axios.get(dcURL)               //Have to combine the CORS and DC URLs

      const showLoadingDiv = document.querySelector('#loadingDiv');     
      const hideBody = document.querySelectorAll('.hideBody')

      if (idElement !== dcIDArr.length - 1) {                           //Resource: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
          //if (idElement !== 51) {                                     
        showLoadingDiv.style.display = "block"                          //this hides the body until and shows the loading circle until everything loads
        
        hideBody.forEach(element => {
          element.style.display = "none"
        })
      } else {
        showLoadingDiv.style.display = "none"

        hideBody.forEach(element => {
          element.style.display = "block"
        })
      }

      let person = response.data                                       //grabs each persons object from the API
      const gender = response.data.appearance.gender                       //grabs each persons object from the API

      filterGender(gender, person)                                       //This filters each persons object into female, male and other arrays

    } catch (err) {
      console.error(err)
    }
  }
  
  listenForButtonClicks()                                                               //Calls the listen function after this function loads
}
  
accessAPI()                                                                //Accesses the API before user can interact with the program

//----------------------------------filterGender--------------------------------------//

function filterGender(gender, person) {                                     //filters each persons object under human, male or other
  dcCharacters.push(person)

  if (gender === 'Female') {
    females.push(person)
  } else if (gender === 'Male') {
    males.push(person)
  } else {
    others.push(person)
  }
}

//----------------------------------removeProfiles--------------------------------------//

function removeProfiles() {                                               //removes profiles as long as the profile-container has them.
  // const removeDiv = document.querySelector('#profile-container')
  while (profileContainer.lastChild) {
    profileContainer.removeChild(profileContainer.lastChild)
  }
}

//-----------------------------------getDropdownValues-------------------------------------//

function getDropdownValues(e) {                                         //checks if the filters have been clicked and filters the users preference based on that info
  e.preventDefault()
  listenForButtonClicks()

  const raceValue = document.querySelector('#select-rFilter').value           //holds the value of the Race filter
  const alignmentValue = document.querySelector('#select-aFilter').value      //holds the value of the Select filter
    
  removeProfiles()
  
  preference.forEach(person => {
    let originalRace

    if (person.appearance.race !== 'Human') {                                  //If they're not human, their race temporarily becomes "Other"
    originalRace = person.appearance.race

      person.appearance.race = 'Other'
    }

    if (raceValue !== 'Race' && alignmentValue !== 'Alignment') {             //If both filter options are chosen, then ...
      if (person.appearance.race === raceValue && person.biography.alignment === alignmentValue) {    //checks if requirements are met
        if (person.appearance.race === 'Other') {                             //returns the persons race back to their original race
          person.appearance.race = originalRace
        }
        profile(person)                                                       //prints profiles
      } else {
        if (person.appearance.race === 'Other') {
          person.appearance.race = originalRace
        }
      }

    } else if (raceValue !== 'Race' && alignmentValue === 'Alignment') {    //If the Race filter was chosen, then ...
      if (person.appearance.race === raceValue) {
        
        if (person.appearance.race === 'Other') {
          person.appearance.race = originalRace
        }
        profile(person)
      } else {
        if (person.appearance.race === 'Other') {
          person.appearance.race = originalRace
        }
      }

    } else if (raceValue === 'Race' && alignmentValue !== 'Alignment') {    //If the Alignment filter was chosen, then ...
      if (person.biography.alignment === alignmentValue) {
        if (person.appearance.race === 'Other') {
          person.appearance.race = originalRace
        }
        profile(person)
      } else {
        if (person.appearance.race === 'Other') {
          person.appearance.race = originalRace
        }
      }
    }
  })
  
  isNoProfileMatch()                                                       //This function checks to see if the profile container does have children
}

//-----------------------------------listenForButtonClicks-------------------------------------//

function listenForButtonClicks() {                                                 //Listens for the click of the clear, female, male and other buttons
  const clearButton = document.querySelector('#clearButton')
  clearButton.addEventListener('click', () => {                     //removes the filter options and profiles from the page
    while (filterContainer.lastChild) {
      filterContainer.removeChild(filterContainer.lastChild)        
    }
    removeProfiles()
    })
  
  const femaleButton = document.querySelector('#femaleButton')
  femaleButton.addEventListener('click', () => {
    removeProfiles()                                              //removes any existing profiles on the page
    showFilters()                                                 //shows the filters

    females.forEach((person) => {                                 //shows each profile inside the female object-array
      profile(person)
    })
    
    preference = females                                           //makes preference (a global variable) equal to females
  })

  const maleButton = document.querySelector('#maleButton')
  maleButton.addEventListener('click', () => {
    removeProfiles()
    showFilters()

    males.forEach((person) => {
      profile(person)
    })

    preference = males
  })

  const otherButton = document.querySelector('#otherButton')
  otherButton.addEventListener('click', () => {
    removeProfiles()
    showFilters()

    others.forEach((person) => {
      profile(person)
    })   

    preference = others
  })
}

//-----------------------------------showFilters-------------------------------------//

function showFilters() {                                                          //shows the filters on the page
  if (filterContainer.lastChild === null) {                                       //if the filters are already there then nothing happens
    let filters = `
      <p class='text' id='filterTitle'>Filters:
      <select name='filter' id='select-rFilter'>
        <option disabled selected value = 'Race'>Race</option>
        <option value = 'Human'>Human</option>
        <option value = 'Other'>Other</option>
      </select>
      <select name='filter' id='select-aFilter'>
        <option disabled selected value = 'Alignment'>Alignment</option>
        <option value = 'good'>Good</option>
        <option value = 'bad'>Bad</option>
      </select>
      <button type='click' class='buttons' id='matchButton'>Match</button> </p>
    `
    filterContainer.insertAdjacentHTML('beforeend', filters)
  } 

  const matchButton = document.querySelector('#matchButton')                              //listens fo the 'match' button the be clicked to read in all the values
  matchButton.addEventListener('click', getDropdownValues)
}

//----------------------------------profile--------------------------------------//
function profile(person) {                                                                //prints out all the character profile information
  const profileInfo = document.createElement('div')
  profileInfo.className = 'characterProfiles'

  isProfileInfoEmpty(person)

  profileInfo.innerHTML = 
    `<img src=${person.image.url} alt='${person.name}' id='image'>
    <h2 class='text' id='profileName'> ${person.name} </h2>
    <h3 class='text' id='profileLocation'> ${person.work.base} </h3>
    <h2 class='text' id='story'>Story</h2>
    <div class='bioPara'>
      <p class='text' id='storyParagraph'> Hi. My name is ${person.name}. I am ${person.appearance.race}, currently living in ${person.work.base}. I'm here looking for love just like you. Take a look at my specs for more info. If you think we'd be a great match, then contact me ... if you can.</p>
    </div>
    <h2 class='text' id='specs'>Specs</h2>
    <div class='specsPara'>
      <ul>
        <li class='text'>Intelligence: ${person.powerstats.intelligence}</li>
        <li class='text'>Strength: ${person.powerstats.strength}</li>
        <li class='text'>Speed: ${person.powerstats.speed}</li>
        <li class='text'>Durability: ${person.powerstats.durability}</li>
        <li class='text'>Power: ${person.powerstats.power}</li>
        <li class='text'>Combat: ${person.powerstats.combat}</li>
      </ul>
    </div>
    `
  
  profileContainer.appendChild(profileInfo)
}

function isNoProfileMatch() {                                                                //checks to see if you don't have matches based off your filters places a message on the screen.
  if (profileContainer.hasChildNodes() === false) {
    const noMatchFound = document.createElement('div')
    noMatchFound.innerHTML = `
      <p class='text' id='noMatchtext'>Oops!</p>
      <p class='text' id='noMatchtext'>Looks like there is no one who meets your requirements.</p> 
      <p class='text' id='noMatchtext'>Let's not be picky. Your options are limited.</p>
      <p class='text' id='noMatchtext'>Update your preference and filters and keep searching.</p>
      `
  profileContainer.appendChild(noMatchFound)
}
}

function isProfileInfoEmpty(person) {                                                             //checks if there are any important profile info missing and fills them with general info
  if (person.appearance.race === '-' || person.appearance.race === null || person.appearance.race === 'null') {
    person.appearance.race = 'non-Human'
  }

  if (person.work.base === '-' || person.work.base === null || person.work.base === 'null') {
    person.work.base = 'nowhere, yet everywhere'
  }

}
