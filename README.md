# HW1

- Instructions:
    - Hmmm... there seems to be a semi-finished website here, let's see how we can customise it for our own:
        - Go to the html page:
            - Change the content to fit you rather than [[Chinat Yu]]
            - The title seems a bit off, change it to an H1 header
            - Change the references to the pdf and the image to fit your own
            - Add more profolios for your page
        - Go to the CSS page:
            - The 3 dots on the top of the page seems be all black, can we fix that?
                - Hint: red is `#FC6058`, yellow is `#FEC02F`, green is `#2ACA3E` 
                - SOLUTION
```javascript
#dot-1{
	background-color:  #FC6058;
}

#dot-2{
	background-color:  #FEC02F;
}

#dot-3{
	background-color:  #2ACA3E;
}
```
            - Try and comment out some of the blocks and then refresh the page, do you notice any differences? eg height, width, display, boarder...


# HW2

- Instructions
  - We are going to make the webpage more dynamic by allowing you to change your own colors
  - Add files
    - Take a look at the change in the folder structure. Do you notice the new CSS files? What are in them?
      - They offer alternative CSS styling settings to the page
  - Add html components
    - ```

<!-- Here we are going to add some styling to the Theme -->

				<h5 style="text-align: center;line-height: 0;">Personalize Theme</h5>

				<div id="theme-options-wrapper">
					<div data-mode="light" id="light-mode" class="theme-dot"></div>
					<div data-mode="blue" id="blue-mode" class="theme-dot"></div>
					<div data-mode="green" id="green-mode" class="theme-dot"></div>
					<div data-mode="purple" id="purple-mode" class="theme-dot"></div>
				</div>

				<p id="settings-note">*Theme settings will be saved for<br>your next visit</p>```
- Finish writing up the script
    - Now it is time that we need to add on the functionalities to the script to make sure that when we press a button, the background color changes 
    - Connect `script.js` to the file, check that the console prints "its working"
        - ```
<!-- We need to make sure that the script is being attached! -->
<script type="text/javascript" src="script.js"></script>```
    - Add the code to handle the change in the color, what are the different conditions that we need to consider?
        - SOLUTIONS
            - ```
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

localStorage.setItem('theme', mode)```
