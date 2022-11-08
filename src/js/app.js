import TodoHandler from "./handler/TodoHandler.js";

(()=>{

    const handler = new TodoHandler();

    const tmp  = document.querySelector('h1');
    getBt.addEventListener('click', (e)=>{
        handler.getTodo()
        .then(v=>{
            const p = document.createElement("ss");

            v.forEach(i=>{p.textContent+=JSON.stringify(i)});

            tmp.appendChild(p);
        });
    });
    postBt.addEventListener('click', (e)=>{
        handler.postTodo()
        .then(v=>console.log(v));
    });

})();