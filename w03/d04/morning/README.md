## There used to be a street named after Chuck Norris, but it was changed because nobody crosses Chuck Norris and lives

Today we are going to build a S.P.A. (single page application) using the [Chuck Norris API](http://www.icndb.com/api/).

Here are the user stories.

- When the page loads, there should be a Chuck Norris joke featured on the page. You should make it an unordered list with a single list item (this will make sense when you do Bonus 2)
- When I click "Get another joke", two things should happen:
  1. The featured joke should be moved to a list of "Previous Jokes"
  2. A new joke should be featured

If you knock that out, here are some bonuses to try:

### Bonus 1: Personalize the jokes

- When the page loads, I should see two fields, one for **First Name** and one for **Last Name**
- When I click "Get another joke", whatever I enter for **First Name** should replace "Chuck" and whatever I enter for **Last Name** should replace "Norris"
- If I leave the **First Name** blank, but enter a value for **Last Name** I should see "Chuck [LAST NAME]" when I click "Get another joke" (Same for thing for leaving **Last Name** blank, but instead I should see "[FIRST NAME] Norris" when I click "Get another joke")

HINT: You'll have to read the api documentation to personalize the joke

### Bonus 2: Load multiple jokes

- When the page loads, I should see a dropdown for how many jokes I would like to see (the values should be 1-10)
- Whatever number I choose, that's how many new jokes I should see featured.

### Bonus 3: Make it purty

Work on your CSS chops and give the page some personality. Try your hand at adding Bootstrap and making it responsive.

ONLY WHEN ALL OTHER STORIES ARE DONE CAN YOU DO THIS.
