export default class Todo {
  constructor({ id, title, content }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.done = false;
    this.done_date = null;
    this.reg_date = new Date();
  }
}
