var bio = {
	"name" : "Courtney McIlhenny",
	"role" : "Full-Stack Web Developer",
	"contacts" : {
		"email" : "cmcilhenny@gmail.com",
		"phone" : "917-319-8380",
		"github" : "cmcilhenny",
		"twitter" : "@camcil",
		"location" : "San Francisco"
	},
	"bioPic" : "./images/me.jpg",
	"welcome message" : "Hi. I'm a self-taugh programmer who loves to build and make things with computers. This page is my resume build primarily in JavaScript and JQuery. It references Udacity's JavaScript Basics course, so a special acknowledment goes out to Cameron Pittman and James Williams as well as the folks behind Udacity, and finally, online learning!",
	"skills" : ["HTML", "CSS", "JavaScript", "JQuery", "AngularJS", "AJAX", "JSON", "Ruby", "Rails", "Rspec", "conversationalist", "getting shit done"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedMessage);
$("#topContacts").append(formattedPic);


function displaySkills() {
	// create h3 + ul for skills
	$("#topContacts").append(HTMLskillsStart);
	// loop through skills and add to page
	for (skill in bio.skills) {
		//replace skills & append to page
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
};

displaySkills();

var programming = {
	"experiences" : [
		{
			"company": "Or International Holdings, LLC",
			"title": "Software Consultant",
			"dates": "August 2014 - Present",
			"description": "Designed and coded new website for company. Site will be live mid October. Technologies used: HTML, CSS, JavaScript. "
		},
		{
			"company": "General Assembly",
			"title": "Web Development Immersive Student",
			"dates": "March 2014 - June 2014",
			"description": "Completed General Assembly’s Web Development Immersive program. WDI is a 12-week, full-time course that prepares students for a career in full- stack web development. Worked 1000+ hours developing a portfolio of projects that reflect an understanding of a wide range of relevant programming languages, computer science (algorithms and data structures), Test-Driven-Development (TDD), and other various technologies."
		},
		{
			"company": "General Assembly",
			"title": "Front-End Web Development",
			"dates": "January 2014 - March 2014",
			"description": "Completed General Assembly's Front_end Web Development course. In this poart-time, 10-week course, I learned to design and develop front-end websites using HTML, CSS and JavaScript."
		}
	]
};

function displayProgramming() {

	for (experience in programming.experiences) {
		$("#programmingExperience").append(HTMLprogrammingStart);
		var formattedProgrammingCompany = HTMLprogrammingCompany.replace("%data%", programming.experiences[experience].company);
		console.log(formattedProgrammingCompany);
		$(".programming-entry:last").append(formattedProgrammingCompany);
		
		var formattedProgrammingTitle = HTMLprogrammingTitle.replace("%data%", programming.experiences[experience].title);
		$(".programming-entry:last").append(formattedProgrammingTitle);

		var formattedProgrammingDates = HTMLprogrammingDates.replace("%data%", programming.experiences[experience].dates);
		$(".programming-entry:last").append(formattedProgrammingDates);
	
		var formattedProgrammingDescription = HTMLprogrammingDescription.replace("%data%", programming.experiences[experience].description);
		$(".programming-entry:last").append(formattedProgrammingDescription);
	}
};

displayProgramming();

// for (job in work.jobs) {
// 		// creates a new div for work experience
// 		$("#workExperience").append(HTMLworkStart);
// 		// concat employer and title info
// 		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].company);
// 		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
// 		var formattedEmployerTitle = formattedEmployer + formattedTitle;
// 		// append employer and title info to page
// 		$(".work-entry:last").append(formattedEmployerTitle);
// 		// replace work dates & append employment dates to the page
// 		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
// 		$(".work-entry:last").append(formattedDates);
// 		// replace description & append employment descrition to page 
// 		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
// 		$(".work-entry:last").append(formattedDescription);
// 	}

var work = {
	"jobs" : [
		{
			"company": "OR International Holdings, LLC",
			"role": "Web Developer/Consultant",
			"years": 2014,
			"description": "Designed and coded new webste for OR International Holdings. Site will be live mid October.",
			"location" : "San Francisco, CA"
		},
		{
			"company": "San Francisco America's Cup Organizing Committee",
			"role": "Assistant Director of Development",
			"years": "2012-2013",
			"description": "Planned and executed extensive donor management program ensuring unique, varied, once-in-a-lifetime America's Cup experiences.",
			"location" : "San Francisco, CA"
		},
		{
			"company": "San Francisco Museum of Modern Art",
			"role": "Assistant Director of Development",
			"years": "2008-2012",
			"description": "Organised and oversaw SFMOMA's donor program, including high-profile museum events, donor travel and in-kind donation program. Developed and implemented new department-wide systms including event calendaring system that was adopted museum-wide, resulting in cost savings, increased efficiency and improved coordination.",
			"location" : "San Francisco, CA"
		},
		{
			"company": "MASS MoCA",
			"role": "Manager, Membership & Special Events",
			"years": "2006-2008",
			"description": "Designed and rebuilt memberhip program for start-up museum with significant increase in membership retention, acquisition and revenue. Restructured museum opening event resulting in 400% increase in attendance. Designed and implemented an efficient price structure to streamline special event rentals doubling income year-over-year.",
			"location": "North Adams, MA"
		},
	]
};

function displayWork() {

	for (job in work.jobs) {
		// creates a new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title info
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].company);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		// append employer and title info to page
		$(".work-entry:last").append(formattedEmployerTitle);
		// replace work dates & append employment dates to the page
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
		$(".work-entry:last").append(formattedDates);
		// replace description & append employment descrition to page 
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

var projects = {
	"sites": [
		{
			"title": "beeThree",
			"images": ["./images/beeThreeCover.tiff", "./images/beeThreeListings.tiff"],
			"discription": "A micro-mercado to buy, borrow, and barter goods and services within your social network. Technologies used: Ruby/Rails, JQuery, OmniAuth, Venmo, AWS & S#, Sidekiq.",
			"url": "https://beethree.herokuapp.com",
			"date": "May 2014"
		},
		{
			"title": "PhotoStream",
			"images": ["./images/photostream.jpg", "./images/photoController.tiff"],
			"discription": "A photo-sharing application for large events that utilizes live streaming of images submitted by attendees. Technologies used: Ruby/Rails, JavaScript, AWS & S3.",
			"url": "https://safe-badlands-7426.herokuapp.com/",
			"date": "April 2014"
		},
		{
			"title": "TweeterListener",
			"images": ["./images/ListenerSearch.tiff", "./images/twitterSearchCode.tiff"],
			"discription": "A single page, real-time search application for Twitter that filters by keywaord, location and Twitter handle. Technologies used: AngularJS, Rails, OmniAuth, Geocoder.",
			"url": "https://tweeterlistener.herokuapp.com/",
			"date": "June 2014"
		}
	]
};

function displayProjects() {
	for (project in projects.sites) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("#'>%data%", projects.sites[project].url + "'>" + projects.sites[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.sites[project].date);
		$(".project-entry:last").append(formattedDates);
	
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.sites[project].discription);
		$(".project-entry:last").append(formattedDescription);
// TODO: get images to load.
		// if (projects.sites[project].images.length > 0) {
			// for (image in projects.sites[project].images) {
			// 	var formattedImage = HTMLprojectImage.replace("%data%", projects.site[project].images[image]);
			// 	$(".project-entry:last").append(formattedImage);
			// }
		// }

	}
};
displayProjects();

var education = {
	"schools": [
		{
			"name": "General Assembly",
			"location": "San Francisco",
			"degree": "Web Development Immersive",
			"dates": 2014,
			"url": "https://generalassemb.ly/"
		},
		{
			"name": "General Assembly",
			"location": "San Francisco",
			"degree": "Front-End Web Development",
			"dates": 2014,
			"url": "https://generalassemb.ly/"
		},
		{
			"name": "Washington University",
			"location": "St. Louis, MO",
			"degree": "Bachelor of Art & Bachelor of Fine Art",
			"majors": "Sociology & Fine Art",
			"dates": 2005,
			"url": "http://wustl.edu/"
		}
	]
};

function displayEducation() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
// TODO: finish adding in link to school. but how?
		var HTMLschoolUrl = $(".education-entry:last").html();
		console.log(HTMLschoolUrl);
		var formattedSchoolUrl = HTMLschoolUrl.replace("#", education.schools[school].url);
		console.log(formattedSchoolUrl);


		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		if (education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
			
		}
	
	}
};

displayEducation();


// internationalize name - adjust casing with button click
function inName(name) {
	// trim the white space from outer edges of name and then split it into an array at the space.
	name = bio.name;
	console.log(name);
	name = name.trim().split(" ");
	console.log(name);
	// uppercase whole last name (assuming no middle name)
	name[1] = name[1].toUpperCase();
	// make sure just first letter of first name is uppercase
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	// return internationalized name
	return name[0] + " " + name[1];
};
// append an internationalise button to bottom of page.
$("#main").append(internationalizeButton);

// adding a map of where I've lived and worked
$("#mapDiv").append(googleMap);


