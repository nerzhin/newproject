"use strict";

function Article() {
    this.created = new Date();
    Article.count++;
    Article.last = this.created;
}

Article.count = 0;

Article.showStats = function() {
    console.log('Total: ' + this.count + ', latest: ' + this.last.getDate() + '.' + Number(this.last.getMonth() + 1) + '.' + this.last.getFullYear() + '.');
}