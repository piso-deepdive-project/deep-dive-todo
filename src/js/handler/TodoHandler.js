
export default class TodoHandler{
    #url = "http://localhost:3000/todo/";
    todos = null;

    getTodo = async () => {

        const response = await fetch(this.#url, {
            "method" : "get",
        });

        if(!response.ok){
            throw new Error(`HTTP ERROR status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }

    postTodo = async () => {

        const POSTDATA = {
            "TEST1":"TESTPOSTDATFROME",
            "TEST2":"TESTPOSTDATFROME",
        };

        const response = await fetch(this.#url, {
            "method" : "POST",
            "headers": {
                "Content-Type":"application/json",
            },
            "body": JSON.stringify(POSTDATA),
        });

        if(!response.ok){
        }

        const data = await response.json();
        
        return data;
    }

};


/*
export default function TodoHandler(){

    let url = "http://localhost:3000/todo/";
    let getTodo='',postTod='';
 
    this.getTodo = async () => {

        const response = await fetch(url, {
            "method" : "get",
        });

        if(!response.ok){
            throw new Error(`HTTP ERROR status: ${response.status}`);
        }

        const data = await response.json();
        
        return data;
    }

    this.postTodo = async () => {

        const POSTDATA = {
            "TEST1":"TESTPOSTDATFROME",
            "TEST2":"TESTPOSTDATFROME",
        }

        const response = await fetch(url, {
            "method" : "POST",
            "headers": {
                "Content-Type":"application/json",
            },
            "body": POSTDATA,
        });

        if(!response.ok){
            throw new Error(`HTTP ERROR status: ${response.status}`);
        }

        const data = await response.json();
        
        return data;
    }

    return this;
}
*/
