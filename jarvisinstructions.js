// UI comp
var d;
const startBtn = document.createElement("button");
startBtn.innerHTML = "Start";
const result = document.createElement("div");
const processing = document.createElement("p");
document.getElementById("myh1").style.color = "white";
document.body.append(startBtn);
document.body.append(result);
document.body.append(processing);

// speech to text
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let toggleBtn = null;
if (typeof SpeechRecognition === "undefined") {
	startBtn.remove();
	result.innerHTML = "<b>Browser does not support Speech API. Please download latest chrome.<b>";
} else {
	const recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.onresult = event => {
		const last = event.results.length - 1;
		const res = event.results[last];
		const text = res[0].transcript;
		if (res.isFinal) {
			processing.innerHTML = "processing ....";

			const response = process(text);
			const p = document.createElement("p");
			p.innerHTML = `You: ${text} </br>JARVIS: ${response}`;
			processing.innerHTML = "";
			result.appendChild(p);

			// text to speech
			speechSynthesis.speak(new SpeechSynthesisUtterance(response));
		} else {
			processing.innerHTML = `listening: ${text}`;
		}
	}
	let listening = false;
	toggleBtn = () => {
		if (listening) {
			recognition.stop();
			startBtn.textContent = "Start";
		} else {
			recognition.start();
			startBtn.textContent = "Stop";
		}
		listening = !listening;
	};
	startBtn.addEventListener("click", toggleBtn);

}

// processor
function process(rawText) {
	let text = rawText.replace(/\s/g, "");
	text = text.toLowerCase();
	let response = null;
	switch(text) {
		case "hijarvis":
			case "hellojarvis":
			case "heyjarvis":
            response = "hi, how are you doing sir ?"; break;
        case "iamgood":
			case "i'mgood":
                response = "Nice to hear that sir"; break;
        case "thanks":
		case "thankyou":
               response = "You're always welcome"; break;
        case "Ijusthaddinner":
			case"Ijustfinisheddinner":
			case"Ifinishedmydinner":
			case "ihavefinishedmydinner":
               response = "Oh nice ! Are you going to bed"; break;
        case "ijustwokeup":
			case"ihavewokenup":
			   response = "Oh ! A very good morning sir "; break;
        case "what'syourname":
			case"whatisyourname":
			response = "My name's JARVIS";  break;
		case "howareyou":
			  case"howareyooudoing":
					response = "I'm good"; break;
		case "whattimeisitjarvis":
			case"whatisthetime":
			case"what'sthetime":
			case"whatisthetimenow":
			response = new Date().toLocaleTimeString() + " sir "; break;
		case "bye":
			response = "Bye!! Meet you soon again sir. "; break;
		case "verygood":
			response = "Thankyou sir"; break;
        case "goodmorningjarvis":
			response = "Good Morning sir !! You have a lot to do today"; break;
		case "goodafternoonjarvis":
			response = "Good Afternoon sir !! Hope you had your lunch !"; break;
		case "goodnightjarvis":
			response = "Good Night sir !! Meet you tommorow"; break;
		case "yes":
			response = "Ok sir"; break;
		case "no":
			response = "Ok sir"; break;
		case "goodeveningjarvis":
			response = "Good evening sir !!"; break;

		case "what'smyschedulefortheevening":
			response = "Sir you have to study from 4 to 6. Then you have to study for olympiads. Then you have to do programming from 8 - 9."; break;
	    case "what'smyscheduleforthemorning":
			response = "Sir you have to study from 9 till 10:15am and then you have online classes from 10:20 till 3pm."; break;
		
			case  "ihaveameetingjarvis":
		window.open(`https://us04web.zoom.us/join=${rawText.replace("search", "")}`, "_blank");
		return `Here you go sir !! Zoom is ready`;
		
		case "ineedtojoinmyclassjarvis":
		window.open(`https://ryangroup.toppr.school/student/class/=${rawText.replace("search", "")}`, "_blank");
		return `Here you go sir !! Toppr is ready`;
		
		case "showmyassignmentsjarvis":
		window.open(`https://ryangroup.toppr.school/student/assignments/?page=1=${rawText.replace("search", "")}`, "_blank");
		return `Here are your assignments sir !!`;break;
		
		case "howmuchchargeisthereinmydevice":
			response = "Sir your device has " + navigator.getBattery().then(function(battery) {
				battery.addEventListener('levelchange', function() {    
					document.write((battery.level*100)+"%");
				}) 
				document.write((battery.level*100)+"%");
			  }) 
				 + "% charge"; break;
		case "whocreatedyou":
			response = "Adhiksit created me"; break;
		
		case "takemetomyclassboard":
		window.open(`https://ryandbeta.myclassboard.com/Login/StudentModules=${rawText.replace("search", "")}`, "_blank");
		return `Here you go !! MCB is ready`;

		case "jarvisopengmail":
		window.open(`https://mail.google.com/mail/u/0/?pli=1#inbox=${rawText.replace("search", "")}`, "_blank");
		return `Here you go !! I have opened Gmail`;

	    case "jarvisopensilverzone":
		window.open(`https://www.silverzone.org/=${rawText.replace("search", "")}`, "_blank");
		return `Silverzone is ready !!`;

		case "jarvisopensofworld":
		   response = 
		   "Here you go !! SOF is ready"
		   location.href = "https://sofworld.org/"; break;

		case "let'splaysomequiz":
			response = 
response("Ok,are you ready ??");
 var score = 0;
 var qn = 0;
 
 var qlist, alist;
 var inputText;

async function respond(inputText) {
	qlist=["Who was the first man to step on the moon ?","Who discovered the dispersion of light ?","Who made the 3 laws of motion ?","Who is called as the father of Mathematics ?","Which is the richest company in the world","Who proposed the theory of relativity ?","Who is called the father of Medicine ?","How many launches were done by apollo missions(Please give only numeric value"];
    alist=["Neil Armstrong","Isaac Newton","Isaac Newton","Albert Einstein","Euclid","Walmart","Hippocrates","9"];
	
	   if(inputText == "yes"){
		   Bot.send("So, here comes your first question");
           await Bot.sleep(4000);
		   Bot.send(qlist[qn]);

	   }
	   else if(inputText == alist[qn]){
		   if(qn == 7){
			  Bot.send("Correct answer");
			  score = score + 1;
			  Bot.send("Thankyou for playing with me"+"Your score is"+ score);

		   }
		
		else{
			qn = qn + 1;
			response("Correct answer");
			score = score + 1;
			response("Here come your next question");
			response(qlist[qn]);

		}
	   }

	 else{
		 response("Incorrect answer");
		 if(qn == 7){
		 response(" Thankyou for playing with me "+" Your score is "+ score);
		 }
	
	   else{
		   qn = qn + 1;
		   Bot.send("Here come your next question");
		   response(qlist[qn]);
		   

	   }
	 }
	   
                 

}
toggleBtn();
		
}
	if (!response) {
		window.open(`http://google.com/search?q=${rawText.replace("search", "")}`, "_blank");
		return `Here are some results for ${rawText}`;
	}
	return response;
}