
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
        dcArr.push(character)
      }

    } catch (err) {
      console.error(err)
    }
    
  }
  console.log(marvelArr)
  console.log(dcArr)


}

getData()

let dcIDArr = [3, 8, 14, 17, 20, 28, 32, 36, 37, 38, 49, 50, 51, 52, 53, 54, 55, 58, 60, 66, 69, 70, 73, 76, 78, 81, 93, 95, 97, 98, 100, 103, 105, 123, 124, 125, 126, 132, 136, 137, 142, 144, 150, 152, 156, 158, 165, 170, 172, 173, 174, 177, 181, 184, 194, 195, 204, 212, 214, 216, 224, 229, 230, 233, 240, 242, 244, 246, 253, 255, 260, 261, 263, 276, 278, 284, 288, 294, 295, 298, 305, 306, 309, 312, 315, 316, 317, 318, 319, 320, 342, 348, 360, 367, 368, 370, 384, 386, 387, 388, 390, 396, 397, 405, 406, 407, 408, 413, 424, 427, 432, 436, 439, 444, 445, 446, 448, 451, 455, 457, 459, 461, 464, 466, 468, 494, 499, 506, 508, 509, 514, 515, 516, 519, 520, 521, 522, 524, 528, 535, 538, 542, 543, 545, 551, 557, 558, 559, 564, 564, 565, 569, 576, 585, 593, 596, 597, 600, 601, 602, 603, 608, 609, 611, 615, 632, 633, 634, 635, 637, 641, 642, 643, 644, 645, 657, 674, 675, 676, 678, 692, 699, 706, 711, 713, 718, 720, 730, 731]


