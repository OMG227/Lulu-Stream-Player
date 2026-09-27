const clock = document.getElementById("clock");
const form = document.getElementById("urlForm");
const input = document.getElementById("streamUrl");
const player = document.getElementById("player");
const placeholder = document.getElementById("placeholder");
const message = document.getElementById("message");
const activeUrl = document.getElementById("activeUrl");
const clearButton = document.getElementById("clear");

function updateClock() {
clock.textContent = new Date().toLocaleTimeString("en-GB", {
hour12: false
});
}

setInterval(updateClock, 1000);
updateClock();

function showMessage(text) {
message.textContent = text;
message.style.display = "block";

clearTimeout(showMessage.timer);

showMessage.timer = setTimeout(() => {
message.style.display = "none";
}, 3500);
}

function loadPlayer(url, save = true) {
try {
const parsed = new URL(url);

if (!["http:", "https:"].includes(parsed.protocol)) {
  throw new Error();
}

player.src = parsed.href;
placeholder.style.display = "none";
activeUrl.textContent = parsed.href;

if (save) {
  localStorage.setItem("luluEmbedUrl", parsed.href);
}

showMessage("PLAYER LOADED // " + parsed.hostname);

} catch {
showMessage("INVALID URL // MASUKKAN URL EMBED YANG VALID");
}
}

form.addEventListener("submit", function (event) {
event.preventDefault();

const url = input.value.trim();

if (url) {
loadPlayer(url);
}
});

clearButton.addEventListener("click", function () {
player.src = "about:blank";
placeholder.style.display = "grid";
activeUrl.textContent = "NONE";
input.value = "";

localStorage.removeItem("luluEmbedUrl");

showMessage("PLAYER CLEARED");
});

const savedUrl = localStorage.getItem("luluEmbedUrl");

if (savedUrl) {
input.value = savedUrl;
loadPlayer(savedUrl, false);
}
