# Web15 C1

 - create a cricket score tracker in react as shown in demo video
 - the tracker keeps track of 3 things
   - current score
   - current wicket
   - current over
 - Initialize the values to following:
   - Score: 76
   - Wicket: 2
   - Ball: 50
 - Make sure to follow these initial values otherwise no test cases will pass 
 - There are three Sets of buttons
   - one set of button increases score:
     - there are 3 buttons here: increase by 1 4 and 6
     - clicking on these buttons will increase score by 1, 4 and 6 respectively
   - second and third set have only 1 button
     - 1 button to increase wicket by 1
     - 1 button to increase total balls thrown by 1
 - India will win if it scores anything above 100. eg: 101
 - If india wins, show a text "India Won" in h1 at the bottom
 - if India wins, no buttons should work
 - total wickets obviously should not go above 12.
 - You are allowed to add any css styling you want, you can add more class names to existing buttons, divs or anything else.
 - feel free to add more features
 - only thing you should care about is:
   - do not change currently given classes
   - do not change format of text. eg: score is supposed to be shown like this:

```html
<div>
    Score: <h1 className="scoreCount">100</h1>
</div>
```

do not make it like

```html
<div>
    <h1 className="scoreCount">Score: 100</h1>
</div>
```