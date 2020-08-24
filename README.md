# 1000 Club

### Overview 

  1000 Club is an app desinged for NHL players who want to check their status amongst the game's greats and see how they stack up. Don't worry, even if you're a casual hockey fan like me you can still sign in as some of your favorite players - that's right, even if you're not in the NHL you can log in and pretend to be your all time favorites (even the likes of John Scott and Danny Heatley). 
  
**What is the 1000 Club?**

  The 1000 Club are hockey's greatest point getters of all time (aka all of the players who have recorded at least 1000 points in their career). Goalies not included for obvious reasons. 
  
---------

### Setup 

1. Fork this repo and clone down to your local machine.
2. Run `npm install` in your terminal once you've entered the project directory. 
3. Run `npm start`. 

---------

### How to Use

On sign in you will land at the splash page which will allow you to sign in with a player ID. Before attempting to sign in you may want to click the help link at the top of the page. This will show you a list of notable active players and their IDs so that you can sign in as one of them. I only picked two players per team in this section so if you want to sign in as someone more obscure you can make a fetch call to `https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster` in your console to view the IDs of all currently active players. 

<img width="1439" alt="Screen Shot 2020-01-13 at 3 25 54 PM" src="https://user-images.githubusercontent.com/47998896/72298507-8153ef80-361b-11ea-92fe-2f10a8d244a8.png">

Upon sign in you land on the "Your Stats" page which will display some of your (or your favorite players') career stats and how close they are to joining the club. 

<img width="1440" alt="Screen Shot 2020-01-13 at 3 45 44 PM" src="https://user-images.githubusercontent.com/47998896/72298616-cb3cd580-361b-11ea-9cde-3bf2f99494e9.png">

You can use the menu options at the top to sign out, view the club, or search for another active player. 

If you navigate to the club you will see the club members listed in order of points and some basic information about each presented. 

<img width="1437" alt="Screen Shot 2020-01-13 at 3 47 42 PM" src="https://user-images.githubusercontent.com/47998896/72298704-11923480-361c-11ea-8085-ec8040ffee2b.png">

If you click on the "You vs.Him" link you will be taken to the versus page. Here you can stack up your stats directly with one of the legends and see if you are close to catching them. (Nikita Gusev has a long way to go)

<img width="1439" alt="Screen Shot 2020-01-13 at 3 50 19 PM" src="https://user-images.githubusercontent.com/47998896/72298825-6c2b9080-361c-11ea-99e3-9788042a7838.png">

If you'd rather compare yourself to someone more comparable you can navigate to the "Search Players" section, select a team, and view their current roster. 

<img width="1440" alt="Screen Shot 2020-01-13 at 3 05 47 PM" src="https://user-images.githubusercontent.com/47998896/72298934-b6ad0d00-361c-11ea-903c-dd9d691921b1.png">
<img width="1440" alt="Screen Shot 2020-01-13 at 3 52 57 PM" src="https://user-images.githubusercontent.com/47998896/72298986-d17f8180-361c-11ea-9f11-ce29d06339d4.png">

Once again, you can use the "You vs. Him" link to compare stats with the selected player. 

<img width="1440" alt="Screen Shot 2020-01-13 at 3 53 58 PM" src="https://user-images.githubusercontent.com/47998896/72299029-ef4ce680-361c-11ea-9e51-d1a920543f31.png">

----------

### Notes 

- The best resource I have been able to find on the NHL API can be found [here](https://gitlab.com/dword4/nhlapi) 

- I'm currently working on getting this app up on Github Pages. This section will be updated with a link once it is ready.

