function classSolution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        };

        toString() {
            return `Post: ${this.title}\n` + `Content: ${this.content}\n`;
        };
    };

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        };

        addComment(comment) {
            this._comments.push(comment);
        };

        toString() {
            let output = super.toString();
            output += `Rating: ${Number(this.likes - this.dislikes)}`;

            if (this._comments.length > 0) {
                output += `\nComments:`;

                this._comments.forEach(c => {
                    output += `\n * ${c}`;
                });
            };

            return output;
        };
    };

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        };

        view() {
            this.views++;
            return this;
        };

        toString() {
            let output = super.toString();
            output += `Views: ${this.views}`;

            return output;
        };
    };

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
};
