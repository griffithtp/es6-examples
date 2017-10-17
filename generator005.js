/*
practical example of generator with recursion
 */
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('Good comment', []),
  new Comment('Bad comment', []),
  new Comment('Interesting comment', []),
];

const tree = new Comment('Great post', children);
//tree;
let comments = [];
for (let comment of tree) {
  comments.push(comment);
}
console.log(comments);
