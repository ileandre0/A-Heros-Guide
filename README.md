# Project Overview

## myHero?

""

## Project Description

My project is an bachelor/bachelorette application for Marvel heroes and vilians. When users first enter the application they will be welcomed and prompted to choose whether they're looking for a male, female or other. Then a list will generate of all the heros and villians who are under that category. At the top of the screen there will be a filter that further targets the kind of person the user is looking for: race (human/other), alignment, intellegence and power.

https://www.edatingdoc.com/wp-content/uploads/Witty-Dating-Profile-Example.jpg
https://dq1eylutsoz4u.cloudfront.net/2018/10/30173251/match-dating-profile-examples-bio.jpg
https://i.pinimg.com/originals/78/c3/53/78c3536a3d53f53cfcb73af7a5b4e807.jpg

## API and Data Sample

**API:** https://superheroapi.com/
```
{
    "response": "success",
    "id": "644",
    "name": "Superman",
    "powerstats": {
        "intelligence": "94",
        "strength": "100",
        "speed": "100",
        "durability": "100",
        "power": "100",
        "combat": "85"
    },
    "biography": {
        "full-name": "Clark Kent",
        "alter-egos": "Superman Prime One-Million",
        "aliases": [
            "Clark Joseph Kent",
            "The Man of Steel",
            "the Man of Tomorrow",
            "the Last Son of Krypton",
            "Big Blue",
            "the Metropolis Marvel",
            "the Action Ace"
        ],
        "place-of-birth": "Krypton",
        "first-appearance": "ACTION COMICS #1",
        "publisher": "Superman Prime One-Million",
        "alignment": "good"
    },
    "appearance": {
        "gender": "Male",
        "race": "Kryptonian",
        "height": [
            "6'3",
            "191 cm"
        ],
        "weight": [
            "225 lb",
            "101 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"
    },
    "work": {
        "occupation": "Reporter for the Daily Planet and novelist",
        "base": "Metropolis"
    },
    "connections": {
        "group-affiliation": "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
        "relatives": "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
    }

```
## Wireframes

Intro page: https://wireframe.cc/S1XLu5
Search Results: https://wireframe.cc/DUTgM1

## MVP/PostMVP

#### MVP 

1) Drop down menu for filter options

2) Submission button that generates profiles based on filter choices

3) Use external API to render data to screen

4) Button components for the "Welcome" screen

5) Media query for ipad or desktop

6)  Button to return to the home page from the displayed profiles screen 


#### PostMVP  

1) Add second API to insert bio paragraph (and another profile photo)

2) Incorporate forms for messageing

3) Incorporate a 'like' button


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval | Incomplete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 24| Pseudocode / actual code | Incomplete
|Feb 25| Initial Clickable Model/MVP  | Incomplete
|Feb 26| Styling with CSS | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

Time vs Importance Graph: https://wireframe.cc/e6pyvw

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.	

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedo code | L | 2hrs |  |  |
| Basic HTML | H | 1hr|  |  |
| API Functionality | H | 2hrs|  |  |
| CSS Basics and functionality | H | 3hrs|  |  |
| Create style buttons | H | 2hrs|  |  |
| JavaScript Dropdown Menu | H | 3hrs|  |  |
| JS funtionality | H | 2hrs |  |  |
| Testing | H | 3hrs |  |  |
| Css General Styling | H | 8hrs |  |  |
| CSS Media queries | H | 2hrs |  |  |
| Total | H | 34hrs |  |  |

## Code Snippet

This code is from a algorithms homework assignment. This function that takes two arrays of integers and checks for the unique integers between them, then returns an array that contains all those uniques nummbers. I am proud of this snippet of code because this is my own code I wrote when I couldn't find code that made sense.

```
const arrayDiffs = (arr1, arr2) => {

  let newArr = arr1.concat(arr2)                      
  let commonArr = []                                  



  newArr.forEach(int => {                             
    if (arr1.includes(int, 0) === false) {            
      commonArr.push(int)                             
    } else if (arr2.includes(int, 0) === false) {     
      commonArr.push(int)
    }
  })

  return commonArr                                    
  
};
```


## Change Log
 None.
