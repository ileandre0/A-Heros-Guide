let dcIDArr = [3, 8, 14, 17, 20, 28, 32, 36, 37, 38, 49, 50, 51, 52, 53, 54, 55, 58, 60, 66, 69, 70, 73, 76, 78, 81, 93, 95, 97, 98, 100, 103, 105, 123, 124, 125, 126, 132, 136, 137, 142, 144, 150, 152, 156, 158, 165, 170, 172, 173, 174, 177, 181, 184, 194, 195, 204, 212, 214, 216, 224, 229, 230, 233, 240, 242, 246, 253, 255, 260, 261, 263, 276, 278, 284, 288, 294, 295, 298, 305, 306, 309, 312, 315, 316, 317, 318, 319, 320, 342, 348, 360, 367, 368, 370, 384, 386, 387, 388, 390, 396, 397, 405, 406, 407, 408, 413, 424, 427, 432, 436, 439, 444, 445, 446, 448, 451, 455, 457, 459, 461, 464, 466, 468, 494, 499, 506, 508, 509, 514, 515, 516, 519, 520, 521, 522, 524, 528, 535, 538, 542, 543, 545, 551, 557, 558, 559, 564, 565, 569, 576, 585, 593, 597, 600, 601, 602, 603, 608, 609, 611, 615, 632, 633, 634, 635, 637, 641, 642, 643, 644, 645, 657, 674, 675, 676, 678, 692, 699, 706, 711, 713, 718, 720, 730, 731]
//let fIDArr = [52, 66, 73, 81, 97, 98, 142, 165, 172, 173, 174, 229, 242, 253, 255, 284, 295, 309, 315, 317, 318, 319, 342, 348, 360, 387, 406, 439, 444, 455, 516, 521, 522, 524, 542, 565, 585, 593, 597, 602, 603, 615, 632, 633, 643, 676, 699, 711, 718, 720, 730] //removed 596
//let mIDArr = [3, 8, 14, 17, 20, 28, 32, 36, 37, 38, 49, 50, 51, 53, 54, 55, 58, 60, 69, 70, 76, 78, 93, 95, 100, 103, 105, 123, 124, 125, 126, 132, 136, 137, 144, 150, 152, 156, 158, 170, 177, 181, 184, 194, 195, 204, 212, 214, 216, 224, 230, 233, 240, 246, 260, 261, 263, 276, 278, 288, 294, 298, 305, 306, 312, 316, 320, 367, 368, 370, 384, 386, 388, 390, 396, 397, 405, 407, 408, 413, 424, 427, 432, 436, 445, 446, 448, 451, 457, 459, 461, 464, 466, 468, 494, 499, 506, 508, 514, 515, 519, 520, 528, 535, 538, 543, 545, 551, 557, 558, 559, 564, 569, 576, 600, 601, 608, 609, 611, 634, 635, 637, 641, 642, 644, 645, 657, 674, 675, 678, 692, 706, 713, 731] //removed: 244
//let oIDArr = [509]

let dcChar = []
let females = []
let males = []
let others = []
let preference = []
const filterContainer = document.querySelector('#filter-container')

const accessAPI = async () => {                                           //async function to call API
    //for (let idElement = 1; idElement < dcIDArr.length; idElement++) {
      for (let idElement = 50; idElement < 59; idElement++) {                       //make a call to the API for each DC character in my array using their ID
      
      //const CORS = 'https://cors-anywhere.herokuapp.com/'                 //Solve CORS error I had with accessing the API. Have to ask for permission.

      const dcURL = `https://superheroapi.com/api/1967700243378120/${dcIDArr[idElement]}` //API URL

        try {
        const response = await axios.get(dcURL)               //Have to combine the CORS and DC URLs

        //const response = await axios.get(`${CORS}${dcURL}`)               //Have to combine the CORS and DC URLs

          const showloadingDivs = document.querySelector('#loadingDivs');
          //if (idElement !== dcIDArr.length - 1) {
          if (idElement !== 58) {                                     //Resource: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
            showloadingDivs.style.display = "block"
          } else {
            showloadingDivs.style.display = "none"
          }

        let character = response.data          
        const gen = response.data.appearance.gender

        arrFiltering(gen, character)                                       //This filters each character into female, male and other arrays

      } catch (err) {
        console.error(err)
      }
      }
  
    console.log('done')
    listen()                                                               //Calls the listen function after this function loads
}
  
accessAPI()                                                                //Accesses the API before user can interact with the program

//----------------------------------Loading--------------------------------------//
function isLoading() {
  const image = document.images[0]
  const downloadingImage = new Image()
  downloadingImage.onload = function () {
    image.src =  this.src
  }
  downloadingImage.src = 'https://media4.giphy.com/media/l3vRnoppYtfEbemBO/giphy.webp?cid=ecf05e47a01k2lsdfw3rv1rpxwpjhxkvgyazeykez9k4j2ds&rid=giphy.webp'
}


//----------------------------------arrFiltering--------------------------------------//

const arrFiltering = (gen, character) => {
  
  dcChar.push(character)

  if (gen === 'Female') {
    females.push(character)
  } else if (gen === 'Male') {
    males.push(character)
  } else {
    others.push(character)
  }

  console.log('arrayfilters')
}

//----------------------------------removeProfiles--------------------------------------//

const removeProfiles = () => {
  const removeDiv = document.querySelector('#profile-container')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
    //console.log('removed')
  }
}

//-----------------------------------getFilterValues-------------------------------------//

function getFilterValues(e) {
  e.preventDefault()
  listen()
    console.log('match')
    const raceValue = document.querySelector('#select-rFilter').value
    const alignmentValue = document.querySelector('#select-aFilter').value
    
    //console.log('before filters')
    removeProfiles()
    //filters(raceValue, alignmentValue, peopleArr)
    console.log(raceValue, alignmentValue)
    preference.forEach(char => {
    let currentRace

    if (char.appearance.race !== 'Human') {
      console.log('1', char.appearance.race)
      currentRace = char.appearance.race
      // if (char.appearance.race === '-' || char.appearance.race === null || char.appearance.race === 'null') {
      //   currentRace = 'Other'
      // }

      char.appearance.race = 'Other'
      console.log('2', currentRace)
      console.log('3', char.appearance.race)
    }

    if (raceValue !== 'Race' && alignmentValue !== 'Alignment') {
      if (char.appearance.race === raceValue && char.biography.alignment === alignmentValue) {
        
        if (char.appearance.race === 'Other') {
          if (char.appearance.race === '-' || char.appearance.race === null || char.appearance.race === 'null') {
            currentRace = 'not Human'
          }
          char.appearance.race = currentRace
        }
        profile(char)
        console.log(`Both ${raceValue} and ${alignmentValue}`)
      }
    } else if (raceValue !== 'Race' && alignmentValue === 'Alignment') {
      
      if (char.appearance.race === raceValue) {
        if (char.appearance.race === 'Other') {
          if (char.appearance.race === '-' || char.appearance.race === null || char.appearance.race === 'null') {
            currentRace = 'not Human'
          }
          char.appearance.race = currentRace
        }
        profile(char)
        console.log(`${raceValue} only, alignment doesn't matter.`)
      }
    } else if (raceValue === 'Race' && alignmentValue !== 'Alignment') {
      
      if (char.biography.alignment === alignmentValue) {
        if (char.appearance.race === 'Other') {
          if (char.appearance.race === '-' || char.appearance.race === null || char.appearance.race === 'null') {
            currentRace = 'not Human'
          }
          char.appearance.race = currentRace
        }
        profile(char)
        console.log(`Race doesn't matter, as long as they are ${alignmentValue}.`)
      }
    } else {
      if (char.appearance.race === 'Other') {
        if (char.appearance.race === '-' || char.appearance.race === null || char.appearance.race === 'null') {
          currentRace = 'not Human'
        }
        char.appearance.race = currentRace
      }
      profile(char)
    }
    
      console.log('in filters')
    })
}

//-----------------------------------listen-------------------------------------//

function listen() {

  const homeButton = document.querySelector('#homeButton')
  homeButton.addEventListener('click', () => {
    
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

    console.log('female')
    
    preference = females
    
  })

  const maleButton = document.querySelector('#maleButton')
  maleButton.addEventListener('click', () => {
  
    removeProfiles()
    showFilters()

    males.forEach((person) => {
      profile(person)
    })

    console.log('male')

    preference = males
    
  })

  const otherButton = document.querySelector('#otherButton')
  otherButton.addEventListener('click', () => {

    //console.log('clicked')

    removeProfiles()
    showFilters()

    others.forEach((person) => {
      profile(person)
    })   

    console.log('other')

    preference = others

  })


}

//-----------------------------------showFilters-------------------------------------//

function showFilters() {

  // const filterContainer = document.querySelector('#filter-container')

  // while (filterContainer.lastChild) {
  //   filterContainer.removeChild(filterContainer.lastChild)
  // }

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

  //getFilterValues(preference)
  const matchButton = document.querySelector('#matchButton')
  matchButton.addEventListener('click', getFilterValues)

}



//----------------------------------profile--------------------------------------//
function profile(person) {
  console.log("Profile Info:", person)
  //console.log('Inside profile')
  const profileContainer = document.querySelector('#profile-container')
  const profileInfo = document.createElement('div')
  profileInfo.className = 'characterProfiles'
  //console.log(dataContainer)

  profileInfo.innerHTML = 
    `<img src=${person.image.url} alt='${person.name}' id='image'>
    <h2 class='text' id='profileName'> ${person.name} </h2>
    <h3 class='text' id='profileLocation'> ${person.work.base} </h3>
    <h2 class='text' id='story'>Story</h2>
    <div class='bioPara'>
      <p class='text' id='storyParagraph'> Hi. My name is ${person.name}, but you may know me as ${person.biography.aliases[0]}. I am ${person.appearance.race}, currently living in ${person.work.base}. I have an intelligence and power level of ${person.powerstats.intelligence}, and ${person.powerstats.power}, respectively. Take a look at my specs for more info. Interested? Contact me, if you can.</p>
    </div>
    `
    //<h2 class='text' id='specs'>Specs</h2>
    // <div class='specsPara'>
    //   <ul>
    //     <li class='text'>Intelligence: ${person.powerstats.intelligence}</li>
    //     <li class='text'>Strength: ${person.powerstats.strength}</li>
    //     <li class='text'>Speed: ${person.powerstats.speed}</li>
    //     <li class='text'>Durability: ${person.powerstats.durability}</li>
    //     <li class='text'>Power: ${person.powerstats.power}</li>
    //     <li class='text'>Combat: ${person.powerstats.combat}</li>
    //   </ul>
    // </div>
    
  
  //console.log(profileInfo)
  profileContainer.appendChild(profileInfo)
  
}

