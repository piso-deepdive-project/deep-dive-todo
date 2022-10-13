class Todo {

    #id;
    #title;
    #content;
    #done;
    #done_date;
    #reg_date;
    #todo_list_id;

    constructor({id,title,content,todo_list_id}){
        this.#id = id; // 유일값 아무래도 심볼이 좋지않을까?
        this.#title = title; // 문자열 투두의 제목
        this.#content = content; //문자열 투두의 내용
        this.#done = false; //boolean
        this.#done_date = null; //done이 false로 바뀌는 순간 등록
        this.#reg_date = new Date(); // 생성과 동시에 
        
        this.#todo_list_id = todo_list_id; // 들어가야할 할일목록의 번호 참조키?
    }

    get todo() {
        return {
            id: this.#id,
            title:this.#title,
            content:this.#content,
            reg_date:this.#reg_date,
        };
    }

    get done() {
        return [this.#done, this.#done_date];
    }
    
    set toggleDone(done){
        this.#done = !done;
        this.#done_date = new Date();
    }

}

const todo = new Todo({
    id:1,
    title:"할 일 제목",
    content:"FUCKING CHANGES",
    todo_list_id:1,
});

console.log(todo.title);
// console.log(todo.#title);
console.log(todo.getByName("title"));