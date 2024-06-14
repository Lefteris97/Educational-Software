const db = require('../database');

class Reply{
    constructor(user_id, post_id, content){
        this.user_id = user_id;
        this.post_id = post_id;
        this.content = content;
    }

    save(){
        let q = `
        INSERT INTO replies(
            user_id,
            post_id,
            content
        )
        VALUES(
            '${this.user_id}',
            '${this.post_id}',
            '${this.post}'
        )
        `;

        db.execute(q);
    }
}

module.exports = Reply