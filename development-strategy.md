# Name of Project

user story

wireframe

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| button| <button class="btn-style" type="button" id="btnOperation"> | has a listener and an event handeler |
|main form | <form id="mainForm">|object to parse the chikdern elements|
|an input text for first value| <input type="text" id="value1"/>|holds the input|
|an input text for second value|<input type="text" id="value2"/>|holds the input|

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

