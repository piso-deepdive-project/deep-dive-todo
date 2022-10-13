# Todo

## variables
|key|data type|default|description|
|---|---|---|----|
|id|number| X|This is id of Todo Content|
|title|string|""| title of Todo|
|content|string|""| content of Todo|
|done|boolean|false| check you've done todo whether not.|
|done_date|Date|null| date that Todo has done.|
|reg_date|Date|new Date()| date that create Todo|
|todo_list_id|Symbol|X| This is id of TodoList that connect to Todo|

## methods | properties
### method name ( parameter ) - type
- todo () accessor property - getter
    - return {  
        &nbsp;&nbsp;    id,  
        &nbsp;&nbsp;    title,  
        &nbsp;&nbsp;    content,  
        &nbsp;&nbsp;    reg_date,  
        }
    - it returns an object that contains id, title, content, reg_date
- done () accessor property -getter, setter
    - done() - getter
        - return done
        - it returns an done value.
    - done(boolean done) - setter
        - it allocate anti value of done.
## path
__src/js/objects/Todo.js__