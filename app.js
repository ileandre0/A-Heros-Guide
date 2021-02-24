
const accessAPI = async (gender) => {

  let dcIDArr = [3, 8, 14, 17, 20, 28, 32, 36, 37, 38, 49, 50, 51, 52, 53, 54, 55, 58, 60, 66, 69, 70, 73, 76, 78, 81, 93, 95, 97, 98, 100, 103, 105, 123, 124, 125, 126, 132, 136, 137, 142, 144, 150, 152, 156, 158, 165, 170, 172, 173, 174, 177, 181, 184, 194, 195, 204, 212, 214, 216, 224, 229, 230, 233, 240, 242, 244, 246, 253, 255, 260, 261, 263, 276, 278, 284, 288, 294, 295, 298, 305, 306, 309, 312, 315, 316, 317, 318, 319, 320, 342, 348, 360, 367, 368, 370, 384, 386, 387, 388, 390, 396, 397, 405, 406, 407, 408, 413, 424, 427, 432, 436, 439, 444, 445, 446, 448, 451, 455, 457, 459, 461, 464, 466, 468, 494, 499, 506, 508, 509, 514, 515, 516, 519, 520, 521, 522, 524, 528, 535, 538, 542, 543, 545, 551, 557, 558, 559, 564, 565, 569, 576, 585, 593, 596, 597, 600, 601, 602, 603, 608, 609, 611, 615, 632, 633, 634, 635, 637, 641, 642, 643, 644, 645, 657, 674, 675, 676, 678, 692, 699, 706, 711, 713, 718, 720, 730, 731]
  let fIDArr = [52, 66, 73, 81, 97, 98, 142, 165, 172, 173, 174, 229, 242, 253, 255, 284, 295, 309, 315, 317, 318, 319, 342, 348, 360, 387, 406, 439, 444, 455, 516, 521, 522, 524, 542, 565, 585, 593, 596, 597, 602, 603, 615, 632, 633, 643, 676, 699, 711, 718, 720, 730]
  let mIDArr = [3, 8, 14, 17, 20, 28, 32, 36, 37, 38, 49, 50, 51, 53, 54, 55, 58, 60, 69, 70, 76, 78, 93, 95, 100, 103, 105, 123, 124, 125, 126, 132, 136, 137, 144, 150, 152, 156, 158, 170, 177, 181, 184, 194, 195, 204, 212, 214, 216, 224, 230, 233, 240, 244, 246, 260, 261, 263, 276, 278, 288, 294, 298, 305, 306, 312, 316, 320, 367, 368, 370, 384, 386, 388, 390, 396, 397, 405, 407, 408, 413, 424, 427, 432, 436, 445, 446, 448, 451, 457, 459, 461, 464, 466, 468, 494, 499, 506, 508, 514, 515, 519, 520, 528, 535, 538, 543, 545, 551, 557, 558, 559, 564, 569, 576, 600, 601, 608, 609, 611, 634, 635, 637, 641, 642, 644, 645, 657, 674, 675, 678, 692, 706, 713, 731]
  let oIDArr = [509]
  let preference = []
  //console.log(dcIDArr.length) 
  //console.log(fIDArr.length) 
  //console.log(mIDArr.length)    

  if (gender === 'female') {
    preference = fIDArr
    //console.log(fIDArr)
  } else if (gender === 'male') {
    preference = mIDArr
    //console.log(mIDArr)
  } else {
    preference = oIDArr
    //console.log(oIDArr)
  }

  for (let id = 0; id < preference.length; id++) {
  
    const CORS = 'https://cors-anywhere.herokuapp.com/'

    const marvelURL = `https://superheroapi.com/api/1967700243378120/${preference[id]}`

    try {
      
      const response = await axios.get(`${CORS}${marvelURL}`)
      //const character = response.data
      const character = response.data
      const publisher = response.data.biography.publisher
      //const gen = response.data.appearance.gender
      //console.log(response.data.name, publisher)
      //console.log(character, publisher)

      /*if (publisher === 'DC Comics') {
        console.log(dcIDArr[id])
      }*/
      profile(character)
      
      /*if (gen === 'Female') {
        fIDArr.push(dcIDArr[id])
      } else if (gen === 'Male') {
        mIDArr.push(dcIDArr[id])
      } else {
        oIDArr.push(dcIDArr[id])
      }*/

    } catch (err) {
      console.error(err)
    }
  }
  

  

  //console.log(dcIDArr)
  // console.log(fIDArr)
  // console.log(mIDArr)
  // console.log(oIDArr)

}

//accessAPI()

//------------------------------------------------------------------------//
const profile = (person) => {
  console.log("Profile Info:", person)
  console.log('Inside profile')
  const dataContainer = document.querySelector('#profile-container')
  console.log(dataContainer)

  const profileInfo = `
    <img src=${person.image.url} alt='${person.name} class='image'>
    <h2> ${person.name} </h2>
    <h3> ${person.work.base} </h3>
    <div class='specs'>
      <p> Hi. My name is ${person.name}, but you may know me as ${person.biography.aliases[0]}. I was born in ${person.biography.place-of-birth}, which makes me ${person.appearance.race}. I have an intelligence and power level of ${person.powerstats.intelligence}, and ${person.pwerststs.power}, respectively. Take a look at my specs below for more info.
      <Interested? contact me, if you can.
    </div>
  `
  console.log(profileInfo)
  dataContainer.instertAdjecentHTML('beforeend', profileInfo)
}

//------------------------------------------------------------------------//
const femaleButton = document.querySelector('#female')    
//console.log(femaleButton)
femaleButton.addEventListener('click', (e) => {
  e.preventDefault()
  accessAPI('female')
}) 

const maleButton = document.querySelector('#male')    
//console.log(maleButton)
maleButton.addEventListener('click', (e) => {
  e.preventDefault()
  accessAPI('male')
}) 

const otherButton = document.querySelector('#other')    
//console.log(otherButton)
otherButton.addEventListener('click', (e) => {
  e.preventDefault()
  accessAPI('other')
}) 


/*
const getData = async () => {
  let marvelArr = []
  let dcArr = []
  
  const CORS = 'https://cors-anywhere.herokuapp.com/'
  
  for (let i = 1; i < 732; i++) {
    const marvelURL = `https://superheroapi.com/api/1967700243378120/${i}`
  
    try {
    
      const response = await axios.get(`${CORS}${marvelURL}`)
      const character = response.data
      const publisher = response.data.biography.publisher
      //console.log(response.data.name, publisher)
    
  
      if (publisher === 'Marvel Comics') {
        marvelArr.push(character)
      } else if (publisher === 'Superman Prime One-Million' || publisher === 'DC Comics') {
        marvelArr.push(character)
      }
  
    } catch (err) {
      console.error(err)
    }
  
    console.log(marvelArr)
    console.log(dcArr)
  }
  
  }
  
getData()*/
