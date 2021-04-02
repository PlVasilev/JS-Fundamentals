function solve() {
    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content
        }
        toString(){
            //console.log(`Post: ${this.title}`);
            //console.log(`Content: ${this.content}`)
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(commnet){
            this.comments.push(commnet);
        }

        toString(){
            //console.log(`Post: ${this.title}`);
            //console.log(`Content: ${this.content}`);
            //console.log(`Rating: ${this.likes - this.dislikes}`);
            //if (this.comments.length > 0){
            //    console.log("Comments:");
            //    for (const comment of this.comments) {
            //        console.log(` * ${comment}`)
            //    }
            let string =  super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0){
                string += "\nComments:";
                this.comments.forEach(c => string += `\n * ${c}`);
            }
            return string;
            }
        }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            //console.log(`Post: ${this.title}`);
            //console.log(`Content: ${this.content}`);
            //console.log(`Views: ${this.views}`)
            return super.toString() + `\nViews: ${this.views}`
        }
    }
    return {Post, SocialMediaPost,BlogPost}
}

let result = solve();
let Post = result.Post;
let post = new Post('title','content');
post.toString();
let SMP = result.SocialMediaPost;
let smp = new SMP('SMP title','SMP content',4,2);
smp.addComment('good');
smp.addComment('very good');
smp.addComment('not so good');
smp.toString();
let BP = result.BlogPost;
let bp = new BP('BP title','BP content');
bp.view();
bp.view();
bp.view();
bp.toString();