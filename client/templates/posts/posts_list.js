var postData = [
    {
        title: 'Introducing Telescope',
        url: 'http://test.com'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'Main test',
        url: 'http://tester.com'
    }
];
Template.postsList.helpers({
    posts: postData
});