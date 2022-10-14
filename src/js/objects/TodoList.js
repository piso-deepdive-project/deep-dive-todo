class TodoList{
    #id;
    #title;
    #description;
    #reg_date;
    #todos;

    constructor({id,title,description}){
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#reg_date = new Date();
        this.#todos = [];
    }

    get listInfo(){
        return{
            id: this.#id,
            title: this.#title,
            description: this.#description,
            reg_date: this.#reg_date,
        }
    }

    set listData(title){
        //todo 불러오기.
    }
    

}