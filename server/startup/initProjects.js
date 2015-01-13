Meteor.startup(function () {

    if (Projects.find().count() === 0) {
        // init a couple of empty projects
        var projects = [
            {'name': 'Configure makerApp',
                'description': 'Setup user profile and login'},
            {'name': 'Register on Spieleware',
                'description': 'Create maker account on www.spieleware.com/register.'}
        ];

        for (var i = 0; i < projects.length; i++)
            Projects.insert({name: projects[i].name, description: projects[i].description});

    }
});
