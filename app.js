//Access - Control - Allow - Origin: *

const getData = async () => {

const CORS = 'https://cors-anywhere.herokuapp.com/'

const marvelURL = "https://superheroapi.com/api/1967700243378120/2"

    try{
      
      const response = await axios.get(`${CORS}${marvelURL}`)
    
      console.log(response)

      //return response;

  } catch (err) {
    console.error(err)
  }
    

}

getData()


