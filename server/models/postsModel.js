const db = require('../database');

class Post{
    constructor(user_id, title, content){
        this.user_id = user_id;
        this.title = title;
        this.content = content;
    }

    save(){
        let q = `
        INSERT INTO posts(
            user_id,
            title,
            content
        )
        VALUES(
            '${this.user_id}',
            '${this.title}',
            '${this.content}'
        )
        `;

        return db.execute(q);
    }
}

module.exports = Post