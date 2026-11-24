const { invoke } = window.__TAURI__.core;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

function transition(page) {
	console.log("transition('" + page + "')");

	/*
	document.querySelector("main").forEach((element) => {
		element.style.animation = "flyout 0.5s ease-out forwards";
	});
	*/
	document.querySelector("main").style.animation = "flyout 0.5s ease-out forwards";
	setTimeout(() => { document.location.replace(page); }, 500);
}
