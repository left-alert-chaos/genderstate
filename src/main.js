const { invoke } = window.__TAURI__.core;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

function transition(page) {
	console.log("transition('" + page + "')");

	document.querySelectorAll("*").forEach((element) => {
		element.style.animation = "flyout 0.75s ease-out forwards";
	});
	setTimeout(() => { document.location.replace(page); }, 750);
}

/*
document.getElementById("exitButton").addEventListener("click", (_) => {
	document.querySelectorAll("*").forEach((element) => {
		element.style.animation = "flyout 0.75s ease-out forwards";
	});
});
*/
