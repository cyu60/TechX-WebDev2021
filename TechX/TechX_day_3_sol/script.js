console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

function onSubmit() {
	// TODO
	console.log(document.getElementById("contact-form"))
	console.log(document.getElementsByName("name")[0].value)
	console.log(document.getElementsByName("subject")[0].value)
	console.log(document.getElementsByName("email")[0].value)
	console.log(document.getElementsByName("message")[0].value)
	let name = document.getElementsByName("name")[0].value;
	let email = document.getElementsByName("email")[0].value;
	let subject = document.getElementsByName("subject")[0].value;
	let message = document.getElementsByName("message")[0].value;

	if (name === "" || email === "" || subject === "" || message === "") {
		alert("Please fill out the full form!")
	} else {
		alert("Thanks " + name + " for reaching out to me! \n I'll get back to you soon through emailing " + email)
	}
}