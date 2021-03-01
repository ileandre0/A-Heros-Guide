# Project Overview

## myHero?

myHero? URL:
NOTE: You must request temporary access at https://cors-anywhere.herokuapp.com/corsdemo before using this program.

## Project Description

My project is an bachelor/bachelorette application for DC Comics heroes and vilians. When users first enter the application they will be welcomed and prompted to choose whether they're looking for a male, female or other. Then a list will generate of all the heros and villians who are under that category. At the top of the screen there will be filters that further targets the kind of person the user is looking for: Race (human/other) and Alignment (good/bad).

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

https://wireframe.cc/S1XLu5

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
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Feb 23| Project Approval | Complete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Complete
|Feb 24| Pseudocode / actual code | Complete
|Feb 25| Initial Clickable Model/MVP  | Complete
|Feb 26| Styling with CSS | Complete
|March 1| Presentations | Complete

## Priority Matrix

Time vs Importance Graph: https://wireframe.cc/e6pyvw

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedo code | L | 2hrs | 0.5hr | 0.5hr |
| Basic HTML | H | 1hr| 0.5hr | 0.5hr |
| API Functionality | H | 2hrs| 6hrs | 6hrs |
| CSS Basics and functionality | H | 3hrs| 7hrs | 7hrs |
| Create style buttons | H | 2hrs| 1.5hrs | 1.5hrs |
| JavaScript Dropdown Menu | H | 3hrs| 6hrs | 6hrs |
| JS funtionality | H | 2hrs | 44hrs | 44hrs |
| Testing | H | 3hrs | 4hrs | 4hrs |
| CSS General Styling | H | 8hrs | 10hrs | 10hrs |
| CSS Media queries | H | 2hrs | 1.5hrs | 1.5hrs |
| Event Handlers | M | 2hrs | 2.5hrs | 2.5hrs |
| Total | H | 30hrs | 83.5hrs | 83.5hrs |

## Code Snippet

I chose this code snippet because I was able to determine whether the filter buttons were clicked and filter the people accordingly without having to create event listeners. The first 'if' statements checks if the 'Race' and 'Alignment' filter options are not equal to their default values of 'Race' and 'Alignment', which indicates that they've been changed. The second 'if' statement checks if the peoples race and alignments match the users option choices. The third 'if' statement checks if a persons race was temporarily changed to 'Other' and fixes it back to their original race before printing out their profile. The 'else' statement changes everyone who didn't meet the filter requirement races back to their original race.

NOTE: This is a part of a larger 'if/else' statement

```
 if (raceValue !== 'Race' && alignmentValue !== 'Alignment') {             
      if (person.appearance.race === raceValue && person.biography.alignment === alignmentValue) { 
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
```

## Change Log
 1) Changed the which hero and vilians group I am accessing from Marvel to DC.
 2) Change my MVP 'Home' button to a 'Clear' button since, there wasn't a second screen.
