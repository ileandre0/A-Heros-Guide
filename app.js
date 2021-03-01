let dcIDArr = [3, 8, 14, 17, 20, 28, 32, 38, 49, 52, 53, 58, 60, 66, 69, 70, 73, 76, 78, 81, 93, 95, 98, 100, 103, 105, 126, 132, 136, 137, 142, 144, 150, 152, 156, 158, 165, 170, 172, 173, 174, 177, 181, 194, 195, 204, 212, 214, 216, 224, 230, 233, 240, 242, 246, 253, 260, 261, 263, 276, 278, 284, 288, 294, 298, 305, 306, 309, 312, 315, 316, 317, 320, 342, 348, 360, 367, 368, 370, 384, 386, 387, 388, 390, 396, 397, 405, 406, 407, 408, 413, 424, 427, 432, 436, 439, 444, 445, 448, 451, 455, 457, 459, 461, 499, 506, 508, 509, 514, 516, 520, 521, 522, 524, 528, 535, 538, 542, 543, 545, 551, 557, 558, 559, 564, 565, 569, 576, 585, 597, 600, 601, 602, 608, 609, 611, 615, 632, 633, 634, 635, 637, 643, 644, 645, 657, 676, 678, 692, 699, 706, 711, 713, 718, 720, 730, 731]
//let fIDArr = [52, 66, 73, 81, 98, 142, 165, 172, 173, 174, 242, 253, 284, 309, 315, 317, 342, 348, 360, 387, 406, 439, 444, 455, 516, 521, 522, 524, 542, 565, 585, 597, 602, 615, 632, 633, 643, 676, 699, 711, 718, 720, 730] //removed 97, 229, 255, 295, 318, 319, 593, 596, 603
//let mIDArr = [3, 8, 14, 17, 20, 28, 32, 38, 49, 53, 58, 60, 69, 70, 76, 78, 93, 95, 100, 103, 105, 126, 132, 136, 137, 144, 150, 152, 156, 158, 170, 177, 181, 194, 195, 204, 212, 214, 216, 224, 230, 233, 240, 246, 260, 261, 263, 276, 278, 288, 294, 298, 305, 306, 312, 316, 320, 367, 368, 370, 384, 386, 388, 390, 396, 397, 405, 407, 408, 413, 424, 427, 432, 436, 445, 448, 451, 457, 459, 461, 499, 506, 508, 514, 520, 528, 535, 538, 543, 545, 551, 557, 558, 559, 564, 569, 576, 600, 601, 608, 609, 611, 634, 635, 637, 644, 645, 657, 678, 692, 706, 713, 731] //removed: 36, 37, 50, 51, 54, 55, 123, 124, 125, 184, 244, 446, 464, 466, 468, 494, 515, 519, 641, 642, 674, 675
//let oIDArr = [509]

let dcChar = []
let females = []
let males = []
let others = []
let preference = []
const filterContainer = document.querySelector('#filter-container')
const profileContainer = document.querySelector('#profile-container')

const accessAPI = async () => {                                           //async function to call API
  for (let idElement = 1; idElement < dcIDArr.length; idElement++) {
    
    const dcURL = `https://superheroapi.com/api/1967700243378120/${dcIDArr[idElement]}` //API URL

    try {
      const response = await axios.get(dcURL)               //Have to combine the CORS and DC URLs

      const showloadingDiv = document.querySelector('#loadingDiv');     
      const hideBody = document.querySelectorAll('.hideBody')

      if (idElement !== dcIDArr.length - 1) {                           //Resource: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
          //if (idElement !== 51) {                                     
        showloadingDiv.style.display = "block"                          //this hides the body until and shows the loading circle until everything loads
        
        hideBody.forEach(element => {
          element.style.display = "none"
        })
      } else {
        showloadingDiv.style.display = "none"

        hideBody.forEach(element => {
          element.style.display = "block"
        })
      }

      let person = response.data                                       //grabs each persons object from the API
      const gen = response.data.appearance.gender                       //grabs each persons object from the API

      arrFiltering(gen, person)                                       //This filters each persons object into female, male and other arrays

    } catch (err) {
      console.error(err)
    }
  }
  
  listen()                                                               //Calls the listen function after this function loads
}
  
accessAPI()                                                                //Accesses the API before user can interact with the program

//----------------------------------arrFiltering--------------------------------------//

function arrFiltering(gen, person) {                                     //filters each persons object under human, male or other
  dcChar.push(person)

  if (gen === 'Female') {
    females.push(person)
  } else if (gen === 'Male') {
    males.push(person)
  } else {
    others.push(person)
  }
}

//----------------------------------removeProfiles--------------------------------------//

function removeProfiles() {
  const removeDiv = document.querySelector('#profile-container')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

//-----------------------------------getFilterValues-------------------------------------//

function getFilterValues(e) {
  e.preventDefault()
  listen()

  const raceValue = document.querySelector('#select-rFilter').value
  const alignmentValue = document.querySelector('#select-aFilter').value
    
  removeProfiles()
  
  preference.forEach(person => {
    let currentRace

    if (person.appearance.race !== 'Human') {
      currentRace = person.appearance.race

      person.appearance.race = 'Other'
    }

    if (raceValue !== 'Race' && alignmentValue !== 'Alignment') {
      if (person.appearance.race === raceValue && person.biography.alignment === alignmentValue) {
        if (person.appearance.race === 'Other') {
          person.appearance.race = currentRace
        }
        profile(person)
      } else {
        if (person.appearance.race === 'Other') {
          person.appearance.race = currentRace
        }
      }

    } else if (raceValue !== 'Race' && alignmentValue === 'Alignment') {
      if (person.appearance.race === raceValue) {
        
        if (person.appearance.race === 'Other') {
          person.appearance.race = currentRace
        }
        profile(person)
      } else {
        if (person.appearance.race === 'Other') {
          person.appearance.race = currentRace
        }
      }

    } else if (raceValue === 'Race' && alignmentValue !== 'Alignment') {
      if (person.biography.alignment === alignmentValue) {
        if (person.appearance.race === 'Other') {
          person.appearance.race = currentRace
        }
        profile(person)
      } else {
        if (person.appearance.race === 'Other') {
          person.appearance.race = currentRace
        }
      }

    } else {
      if (person.appearance.race === 'Other') {
        person.appearance.race = currentRace
      }
      profile(person)
    }
  })
  
  isNoMatch()  
}

//-----------------------------------listen-------------------------------------//

function listen() {
  const clearButton = document.querySelector('#clearButton')
  clearButton.addEventListener('click', () => {
    while (filterContainer.lastChild) {
      filterContainer.removeChild(filterContainer.lastChild)
    }
    removeProfiles()
    })
  
  const femaleButton = document.querySelector('#femaleButton')
  femaleButton.addEventListener('click', () => {
    removeProfiles()
    showFilters()

    females.forEach((person) => {
      profile(person)
    })
    
    preference = females
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

function showFilters() {
  if (filterContainer.lastChild === null) {
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

    
    const matchButton = document.querySelector('#matchButton')
    matchButton.addEventListener('click', getFilterValues)
  } 

  const matchButton = document.querySelector('#matchButton')
  matchButton.addEventListener('click', getFilterValues)
}

//----------------------------------profile--------------------------------------//
function profile(person) {
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

function isNoMatch() {
  if (checkForProfile.lastChild === null) {
    const noMatchFound = document.createElement('div')
    noMatchFound.innerHTML = `
      <p class='text'>Oops!</p>
      <pclass='text'>Looks like there is nobody who meets your requirements.</p> 
      <pclass='text'>Let's not be picky. Your options are limited.</p>
      <pclass='text'>Update your filters and keep searching.</p>`
  }

  profileContainer.appendChild(noMathchFound)
}

function isProfileInfoEmpty(person) {
  if (person.appearance.race === '-' || person.appearance.race === null || person.appearance.race === 'null') {
    person.appearance.race = 'not Human'
  }

  if (person.work.base === '-' || person.work.base === null || person.work.base === 'null') {
    person.work.base = 'nowhere, yet everywhere'
  }

  if (person.powerstats.intelligence === '-' || person.powerstats.intelligence === null || person.powerstats.intelligence === 'null') {
    person.powerstats.intelligence = 'TBD'
  }

  if (person.powerstats.strength === '-' || person.powerstats.strength === null || person.powerstats.strength === 'null') {
    person.powerstats.strength === 'TBD'
  }

  if (person.powerstats.speed === '-' || person.powerstats.speed === null || person.powerstats.speed === 'null') {
    person.powerstats.speed === 'TBD'
  }

  if (person.powerstats.power === '-' || person.powerstats.power === null || person.powerstats.power === 'null') {
    person.powerstats.power === 'TBD'
  }

  if (person.powerstats.combat === '-' || person.powerstats.combat === null || person.powerstats.combat === 'null') {
    person.powerstats.combat=== 'TBD'
  }
}
