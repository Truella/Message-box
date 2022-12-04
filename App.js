const button = document.getElementById("button");
const currentMessage = document.getElementById("currentMessage");
const input = document.getElementById("input");
const paragraph = document.getElementById("para");
const label = document.querySelectorAll(".label");
input.addEventListener("input", function () {
				if(input.value.length > 0) {
				button.classList.add("focus")
}
else {		
				button.classList.add("idleButton")
}
})

button.addEventListener("click", function () {
				if(input.value.length > 0) {
								paragraph.innerHTML = currentMessage.innerHTML ;
								label[0].style.display = "block";
								label[1].style.display = "block";
				currentMessage.innerHTML = input.value;
				input.value = "";
				}else {
								alert("you need to type a message before submitting!")
				}
})
