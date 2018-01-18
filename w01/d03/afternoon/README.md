# CSS Basics

### Learning Objectives
- Construct a CSS rule using selectors, declarations, properties, and values
- Articulate the pros and cons of stylesheets, styles in the head, and in-line styles
- Define "cascading" in the context of CSS specificity
- Style the size, color, border, text, and font of all elements of a given tag on a page
- Demonstrate the use of class and ID selectors to target specific element(s)

![](http://i.imgur.com/Q3cUg29.gif)

## What is CSS?
If HTML is a set of instructions telling the browser what to display, CSS tells it how to display it.

CSS stands for:

- **C**ascading
- **S**tyle
- **S**heet

It provides the browser with precise instructions on how to style each element we want displayed on the page and can affect the text format - like font, size, color - the size and position of various objects on the page, colors, spacial layouts, etc. There are literally hundreds of different properties we can use to style HTML elements on a webpage.

#### Adding CSS

There are three different ways to use CSS to style your HTML:

1. Inline
2. Internal Style Sheet
3. External Stylesheets (Head)


## CSS Selectors
As you can see, there's more than one place to target elements. There's also multiple WAYS you can target elements.

| Pattern   | Meaning                                             |
|:----------|:----------------------------------------------------|
| `*`         | any element                                         |
| `E`         | an element of type E                                |
| `E, F`      | any element of type E and any element with type F   |
| `#myid`     | any element with ID equal to "myid"                 |
| `.myclass`  | any element with class equal to "myclass"           |
| `E#myid`    | an E element with ID equal to "myid"                |
| `E.myclass` | an E element with class equal to "myclass"          |
| `E F`       | an F element child of an E element                  |
| `E > F`     | an F element that is a direct child of an E element |

#### The 'Class' Selector

The class selector finds elements with a specific class, and as an attribute, class allows us to target several elements that may share similarities. Note that:

- Classes are **NOT** unique
- You can use the same class on multiple elements
- You can use multiple classes on the same element
- You can select a class using `.class-name {}`

#### The 'ID' Selector

The ID selector uses the id attribute of an HTML tag to find one specific element. We can give any name we want to our ID attribute, besides the obvious reserved words, such as tag names, etc.

- An ID is **unique** within a page.
- You should use the id selector when you want to find a single, unique element.
- In the CSS document, you use a hashtag (#) to denote an ID

## CSS Specificity
While CSS cascades from top to bottom, the CSS that is applied depends on **specificity** as well.

The following list of selector types is by increasing specificity:

- Universal selectors (e.g., '\*')
- Type selectors (e.g., h1)
- Class selectors (e.g., .example)
- Attributes selectors (e.g., [type="radio"])
- Pseudo-classes (e.g., :hover)
- ID selectors (e.g., #example)
- Inline style (e.g., style="font-weight:bold")


You can read more about CSS specificity [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
You can access a CSS specificity calculator [here](http://specificity.keegan.st)


## You Do: Style using classes and ids
Using what we've started in class, see how far you can get through these exercises in 10 minutes:

- make an unordered HTML list of the following animals:  

  - mouse  
  - canary  
  - penguin  
  - salmon  
  - cat  
  - goldfish  
  - dog  
  - sheep  
  - parakeet  
  - tuna  

- make all the mammals red, all the birds blue, and all the fish orange using CSS classes
- apply the following colors to the list using IDs:

    - mouse - <span style = "color: gray">gray</span>
    - canary - <span style = "color: orangeRed">orangeRed</span>
    - penguin - <span style = "color: black">black</span>
    - salmon - <span style = "color: salmon">salmon</span>  
    - cat - <span style = "color: sienna">sienna</span>
    - goldfish - <span style = "color: gold">gold</span>  
    - dog - <span style = "color: tan">tan</span>  
    - sheep - <span style = "color: steelBlue">steelBlue</span>
    - parakeet - <span style = "color: lime">lime</span>  
    - tuna - <span style = "color: purple">purple</span>

- add the following background colors to your existing classes:
    - mammal - lavenderBlush
    - bird - lightGray
    - fish - lightYellow

## Combinations

- If you want to apply a set of styles to multiple groups, separate with a comma.
- If you want to specify both element and class/id, chain without a space. Example: `li#not`
- If you want to apply a set of styles to a dependent of an element or group, separate with a space. Example: '.container h2' will apply styles to all h2 elements within an element with the class `container`

## You Do: Using CSS to select class and id attributes
Go back to your code from the previous independent practice problem and continue to work through these exercises:

- make the mammals bold
- make the birds italic
- make the fish underlined
- create a new unordered ordered list add a list item for each the following plants:

    - Dogwood Tree
    - Oak Tree
    - Saguaro
    - Kelp
    - Venus Fly Trap
    - Cedar

- give all ul's a border with a width of 3 pixels, a color of plum, and a style of dotted. Also, give them a border radius of 5px.
- give all li's a top border of 3 pixels, a color of seagreen, and a style of solid.

## You Do: [CSS Diner](http://flukeout.github.io/)
Please complete this exercise on your own. It's an interactive walkthrough on the different ways you can select elements in CSS. Don't worry if you don't get to the end. The important part is that you get through the earlier basic CSS selectors and, if you have time, give the more advanced selectors and pseudo-selectors a spin.
