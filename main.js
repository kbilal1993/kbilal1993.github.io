var pages = [
	{
		"title": "About Me",
		"contents": page_main,
	},
	{
		"title": "MatchGorithm",
		"contents": page_matchgorithm,
	},
	{
		"title": "Brick JS",
		"contents": page_brickjs,
	},
	{
		"title": "Coding Experience",
		"contents": page_experience,
	},
	{
		"title": "Other Projects",
		"contents": page_projects,
	},
];

// function to add paragraphs and style them
function paragraph(text) {
    var temp = p(text);
    temp.style.textIndent = "1em";
    temp.style.padding = "2px 5px";
    return temp;
}

function link(text, url) {
	var temp_container = div();
	temp_container.style.display = "flex";
	temp_container.style.justifyContent = "center";
	temp_container.style.margin = "5px";
	var temp = new_text_element('span', text);
	temp.onclick = () => location.href = url;
	temp.style.cursor = "pointer";
	temp.style.textAlign = "center";
	temp.style.padding = "5px";
	temp.style.textSize = "large";
	temp.style.border = "1px solid";
	temp.style.boxShadow = "1px 1px 1px";
	temp.style.backgroundColor = "lightyellow";
	temp.style.fontStyle = "normal";
	add(temp_container, temp);
	return temp_container;
}

function page_main() {
    var temp = div();
    add(temp, paragraph("I am an experienced, well-rounded software developer with an interest in using technology in novel ways."));
    add(temp, paragraph("I am a graduate of the University of Bradford, with a BSc Hons. in Computer Science. My main courses during that time were Data Structures and Algorithms, Large Scale Data-Driven Applications, Sotware Verification and Symbolic and Declarative Computing. While at the university I was an active member of PiSoc, the UoB's largest computing society, and served as the Tech Executive for the 2015/2016 academic year."));
    add(temp, paragraph("In my spare time I like to maintain and fix bicycles. My current favourite is a decommissioned Pashley Mailstar (the old Royal Mail delivery bicycle) with drum brakes and a brand new 5-speed gear hub. It's fantastic for shopping runs but quite heavy compared to modern bikes."));
    return temp;
}

function page_matchgorithm() {
    var temp = div();
    add(temp, link("MatchGorithm (Link pending)"));
    add(temp, paragraph("I am the CTO, co-founder and lead software developer for the tech startup MatchGorithm. I am in charge of planning, development, testing, bugfixing, documentation and deployment."));
    add(temp, paragraph("My friend Paul Bak and I founded MatchGorithm after graduating from university. His plan was to take his final year project, a resource distribution algorithm, and turn it into a viable product. Together we refined the algorithm to be more efficient and cover more real-life use cases. We also developed a platform to handle algorithm access through a graphical interface, accounts and payments."));
    add(temp, paragraph("The MatchGorithm algorithm's purpose is to solve an obscure variant of the Knapsack problem. It was originally created to match university students to professors to help with their final year projects. It was then expanded to be able to allow parents to select various schools around a region, and match the students to the desired schools while taking into account the number of places each school has. After that we added a lot of features to generalize the algorithm's functionality, and now it can solve any situation involving matching clients to a limited amount of resources."));
    add(temp, paragraph("The MatchGorithm platform leverages ExpressJS, PugJS and WebSockets. It's hosted on Google Cloud with Appengine, and we use Google Firestore for the database. Earlier prototypes used different tools, including PostgreSQL, SQLite and Racket"));
    return temp;
}

function page_brickjs() {
    var temp = div();
    add(temp, link("Brick JS", "https://gitlab.com/kbilal1993/brick-js"));
    add(temp, paragraph("Brick JS is a project I created as a means of more conveniently creating single page webapps. It is a clientside JavaScript library which creates websites almost entirely using the Document Object Model, with various wrapper functions to make everything easier. It acts as an alternative to ReactJS and AngularJS, with as few abstractions over preexisting web technologies as possible."));
    add(temp, paragraph("In simpler terms, the purpose of Brick JS is to take features currently provided to web developers and consolidate them into one simple means to develop software. Brick JS lets us ignore HTML and CSS, and any sort of templating, in favour of web pages generated entirely through code. It has no dependencies or requirements, and can be dropped into any project without any extra work."));
    add(temp, paragraph("Brick JS was originally created as a curiosity, but is convenient enough to work with that I find more and more uses for it."));
    return temp;
}

function page_experience() {
    var temp = div();
    add(temp, paragraph("I started coding with perl 5, a general purpose programming language used commonly on Linux and UNIX systems. I learned the basics of software development with it, as well as a few perl-isms, such as representing data using arrays and hash tables and liberally using jump lists and regular expressions. My earliest projects have been lost to time, but included an application which would take textual data and process it into an image for convenient posting on websites, and a markup language for drawing designs in the Terminal, inspired by Teletext."));
    add(temp, paragraph("When I started studying at university I learned Java and C#, and how to develop software using object oriented methodologies. Most of my work with these languages involved helping other students with their Java and C# projects, though I have a few C# scripts of my own. There is a video game called Space Engineers, which allows users to write scripts in C# to automate parts of the game, and I have authored many scripts which are still used by the community."));
    add(temp, paragraph("I am familiar with functional programming, having learned Haskell and Prolog at university and being self-taught in Scheme and Racket. My largest functional programming project was a prototype of MatchGorithm's algorithm, written in Racket. It included a self-built automated testing suite and GUI for easy manual testing."));
    add(temp, paragraph("I enjoy working with electronics as a hobby. I still have much to learn, but enjoy working with microcontrollers. My largest electronics project was a TAS tool created using the Beaglebone Black, Teensy 2.0 and lots of perl scripting. It was a device which could read a series of video game inputs from a script on the device, and feed them into a game console to automate the game. When working with microcontrollers I tend to use Arduino C, but also like to work with programming environments built into the microcontroller itself, such as ulisp and forth."));
    add(temp, paragraph("I am currently interested in JavaScript and web development as a whole. Developing with JavaScript reminds me of the best parts of using Scheme and perl. My largest projects with JavaScript are the entire MatchGorithm ecosystem and my website development tool, Brick JS."));
    add(temp, paragraph("As for development environments, I mostly use Vim. I like it's unique approach to navigation and editing, and make extensive use of it's marking and macro systems. I'm currently using neovim-qt with the doom-nvim distribution, which comes with lsp support for most popular programming languages."));
    return temp;
}

function page_projects() {
	var temp = div();
	add(temp, link("Crypto Price Checker", "https://github.com/kbilal1993/Crypto-Price-Checker"));
	add(temp, paragraph("A small tool I made to experiment with Electron and REST. Takes an amount of Bitcoin to check for and keeps track of how much that would be worth in £. Uses the CoinGecko API."));
	add(temp, link("Wallpaper Generator", "https://github.com/kbilal1993/wallpaper-generator"));
	add(temp, paragraph("A tool which parametrically generates a simplistic wallpaper for various palettes and screen sizes. Has parameters to finely tune the result, such as the ability to push the wallpaper's pattern down in case the user has a bar on the top of the screen like in MacOS. Created using Racket and it's pict library, to experiment with configuration files."));
	add(temp, link("Prayer Timings Finder", "https://github.com/kbilal1993/prayer-timings-finder"))
	add(temp, paragraph("A script which queries the AlAdhan REST API to find Islamic prayer times for the day. Made to be run on an Android phone with Termux, because I was unsatisfied with the available prayer time apps. Written in Racket, and can run in any Linux terminal. (I recently made an iPhone Shortcuts port of this tool, because Shortcuts is surprisingly powerful and allows users to query REST APIs.)"));
	add(temp, link("QMK keyboard config", "https://github.com/kbilal1993/My-QMK-configs"));
	add(temp, paragraph("Configuration files made to be used with the QMK keyboard firmware, to adjust the functionality of specially built computer keyboards. QMK allows users to define the function of each individual key, and is commonly used with custom ergonomic keyboards. My configuration sets the layout to Colemak by default, puts backspace under the left thumb and provides easy access to Esc and the arrow keys without moving away from the home row. The configurations are written in C."));
	return temp;
}

var easter_egg = "\n \
    ██████╗░░█████╗░░█████╗░██╗\n \
    ██╔══██╗██╔══██╗██╔══██╗██║\n \
    ██████╦╝██║░░██║██║░░██║██║\n \
    ██╔══██╗██║░░██║██║░░██║╚═╝\n \
    ██████╦╝╚█████╔╝╚█████╔╝██╗\n \
    ╚═════╝░░╚════╝░░╚════╝░╚═╝\n \
";

function deploy_easter_egg() {
    console.log(easter_egg);
    console.log("Hello, there!");
}

deploy_easter_egg();

var webapp = new WebApp();
webapp.title = "Portfolio";
webapp.pages = pages;
webapp.apply();

// Changing the style of the background
webapp.div_panel.style.border = "1px solid black";
webapp.div_panel.style.boxShadow = "1px 1px 1px inset";
webapp.div_panel.style.backgroundColor = "lavenderblush";
webapp.div_panel.style.padding = "2px 5px";
webapp.div_panel.style.margin = "5px";
