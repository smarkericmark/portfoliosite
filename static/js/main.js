///Button controls

function aboutClickOne() {
	//document.getElementById("aboutBox").innerHTML = "While working as a Client Service Advisor, I directly aided a corporate client in recovering over $100,000 in stolen funds after the CEO's email was compromised. That incident drew my interest towards Information Security. That interest became a hobby and then a passion. In 2020 I decided to realign my career towards tech while leveraging self-learning, traditional education, and 5+ years of corporate finance experience.";
	//document.getElementById("aboutIntroBlurb").element.className = "hidden";
	document.getElementById("aboutBlurbOne").classList.add('nothidden');
	document.getElementById("aboutBlurbOne").classList.remove('hidden');


	document.getElementById("aboutIntroBlurb").classList.add('hidden');
	document.getElementById("aboutIntroBlurb").classList.remove('nothidden');
	document.getElementById("aboutBlurbTwo").classList.add('hidden');
	document.getElementById("aboutBlurbTwo").classList.remove('nothidden');
	document.getElementById("aboutBlurbThree").classList.add('hidden');
	document.getElementById("aboutBlurbThree").classList.remove('nothidden');

	
}

function aboutClickTwo() {
	//document.getElementById("aboutBox").innerHTML = "Before learning to pursue a tech-focused career, I was a finance professional. I started as a part-time teller. Within five years, I was traveling across the states to meet with high-profile commercial clients and present treasury proposals. Highlights Include:Yada Yada Yada";

	document.getElementById("aboutBlurbTwo").classList.add('nothidden');
	document.getElementById("aboutBlurbTwo").classList.remove('hidden');


	document.getElementById("aboutIntroBlurb").classList.add('hidden');
	document.getElementById("aboutIntroBlurb").classList.remove('nothidden');
	document.getElementById("aboutBlurbOne").classList.add('hidden');
	document.getElementById("aboutBlurbOne").classList.remove('nothidden');
	document.getElementById("aboutBlurbThree").classList.add('hidden');
	document.getElementById("aboutBlurbThree").classList.remove('nothidden');

}

function aboutClickThree() {
	//document.getElementById("aboutBox").innerHTML = "Wouldn't You Like to Know";

	document.getElementById("aboutBlurbThree").classList.add('nothidden');
	document.getElementById("aboutBlurbThree").classList.remove('hidden');


	document.getElementById("aboutIntroBlurb").classList.add('hidden');
	document.getElementById("aboutIntroBlurb").classList.remove('nothidden');
	document.getElementById("aboutBlurbOne").classList.add('hidden');
	document.getElementById("aboutBlurbOne").classList.remove('nothidden');
	document.getElementById("aboutBlurbTwo").classList.add('hidden');
	document.getElementById("aboutBlurbTwo").classList.remove('nothidden');


}

