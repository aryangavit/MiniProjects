//const items = document.querySelectorAll('li');

const button = document.querySelector('button')
const ul = document.querySelector('ul');
button.innerText = "Add new todo";


// items.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//         console.log(e.target);
//         console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     });
// });


ul.addEventListener('click',(e)=>{
    console.log('event in UL');
});

/* event deligation can be useful when we need to attach event listeners to many different elements, 

instead of adding event listener to every LI element created, as follows: */


button.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent = `new todo`;
    ul.append(li);
    // li.addEventListener('click',e=>{
    //     console.log('event in LI');
    //     e.stopPropagation();
    //     e.target.remove();
    // });
});


/* we can just remove all event listeners from li and attack a 
single event listner for ul*/

ul.addEventListener('click',e=>{
    console.log(e.target);
    //to delete the li tag that we click, first we need to check if we clicked actually is a li tag
    if(e.target.tagName=== 'LI'){
        e.target.remove();
    }
});