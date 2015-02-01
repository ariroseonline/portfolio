//Stack menu when collapsed
$('#yoyo').on('show.bs.collapse', function() {
	alert('yo')
    Ember.$('.nav-pills').addClass('nav-stacked');
});

//Unstack menu when not collapsed
$('#yoyo').on('hide.bs.collapse', function() {
		alert('yo2')

    Ember.$('.nav-pills').removeClass('nav-stacked');
});