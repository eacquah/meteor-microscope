if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'My first post',
        url: 'http://first.com'
    });
    Posts.insert({
        title: 'My 2nd post',
        url: 'http://2nd.com'
    });
    Posts.insert({
        title: 'wicked post',
        url: 'http://wicked.com'
    });
}