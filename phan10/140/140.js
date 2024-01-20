/* 
    Take the IIFE below and ar the end of function,
    attach an event listener that changes the color of
    the selected h1 element ('header') to blue, each time
    the body element is clicked. Do not select the h1 element again.

    And now explain to YOURSELF (or someone around you)
    why this worked! Take all the time you need. Think
    about WHEN exactly the callback function is executed,
    and what that means for the variables involved in this example.

    GOOD LUCK 😀
*/
(function(){
    const hearder = document.querySelector('h1');
    hearder.style.color ='red';

    document.querySelector('body').addEventListener('click', function(){
        hearder.style.color = 'blue';
    });
})();