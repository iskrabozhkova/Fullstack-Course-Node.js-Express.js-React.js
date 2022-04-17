export const DEFAULT_AUTOR_ID = 2

export default class Post {
    constructor(title = '', content = '',  tags = [], imageUrl='', authorId = DEFAULT_AUTOR_ID,  active = true) {
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.authorId = authorId;
        this.active = active;
    }
}