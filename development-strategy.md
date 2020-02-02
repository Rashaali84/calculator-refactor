# calculator-refactor

| _Step Name_                | User Story                                                                                                       | Changes in HTML                                                                                     | Changes in CSS                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **add-html** | As a web developer I want to layout the basic folders for my projects so I can navigate correctly | an index with all required html tags  | an empty main `style.css` , an empty java-script files |
| **add-DOM**    | As a web developer Iwould like to add the needed ids to highlight the elements that I will use in the js files|changes in html tags with ids  |an empty main `style.css` and empty js files  |
| **add-listener**           | As a web developer I would like to add a listener for my calculate button so when i clicked it a calculation happens |no changes   | an empty main `style.css` and update listener.js file  |
| **add-handeler**             | As a web developer I would like to add a function to check  inputs and pass them to the logic js file| no chnages |no changes in the style.css , update the handeler.js file |
 | **add-Logic**             | As a web developer I would like to add the core logic of my calculator so I can have a completer operations for div , mul , add, min| no chnages |no changes in the style.css , update the Logic.js file |
 | **add-CSS**             | As a web developer I would like to add have a good style for my calculator| no chnages |major changes in  the style.css , no changes in th js files |
 
 

wireframe :  https://wireframe.cc/fGnuIN

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| button| id="btnOperation"| has a listener and an event handeler |
|main form | id="mainForm"|object to parse the childern elements|
|an input text for first value|  id="value1"|holds the input|
|an input text for second value|id="value2"|holds the input|

## Styling

| class name | description | role |
| --- | --- | --- |
| body |formate the whole body tag | formate a container for the calculator |
|container|container style for the calculator| formate the outer line of the calculator|
|col|class for the columns style|formate the color and styles of columns|
|btn-style|class to style the submit button|style the button calculate to look nicer|
|header|class for the main header|to give style to the main title|
|results|class to give style to the output results|formate the output text of the program|

## Listeners

|  type | attached to | callback |
| --- | --- | --- |
| event0listner for 'click' event| attached to the button which has the id ="btnOperation" | the call back for funcion calc() in listener.js|

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| function calculateHandler(a, b, op)| first value and second value and opertion type| call other function in logic.js|and wrtie out the results | 

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|   calculate = doMath(op, a, b);| operation and the two values | return the final result to handeler | do the whole logic |

