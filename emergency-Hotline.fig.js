const hearts = document.getElementsByClassName("heart");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    let totalLove =
      parseInt(document.getElementById("love_count").innerText) || 0;
    totalLove += 1;
    document.getElementById("love_count").innerText = totalLove;
  });
}
const copies = document.getElementsByClassName("copy-button");

for (let i = 0; i < copies.length; i++) {
  copies[i].addEventListener("click", function () {
    let totalcopy =
      parseInt(document.getElementById("copy_count").innerText) || 0;
    totalcopy += 1;
    document.getElementById("copy_count").innerText = totalcopy;
     const number = this.closest("div.bg-white").querySelector("h3.text-2xl").innerText.trim();
    const url = `${number}`;
    navigator.clipboard.writeText(url).then(() => {
      alert(`The number has copied: ${url}`);
    });
  });
}
 
// Call button functionality
const callButtons = document.querySelectorAll(".call-button");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let number = "";
    let name = " ";
    if (i === 0) {
      number = "999";
      name = "National Emergency Number";
      alert(`📞 ${name} ${number}...`);
    }
    if (i === 1) {
      number = "999";
      name = "Police Helpline Number";
      alert(`📞 ${name} calling ${number}...`);
    }
    if (i === 2) {
      number = "998";
      name = "Fire Service Number";
      alert(`📞  ${name} calling ${number}...`);
    }
    if (i === 3) {
      number = "1994-999999";
      name = "Ambulance Service";
      alert(`📞  ${name} calling ${number}...`);
    }
    if (i === 4) {
      number = "109";
      name = "Women & Child Helpline";
      alert(`📞  ${name} calling ${number}...`);
    }
    if (i === 5) {
      number = "106";
      name = "Anti-Corruption Helpline";
      alert(`📞  ${name} calling ${number}...`);
    }
    if (i === 6) {
      number = "16216";
      name = "Electricity Helpline";
      alert(`📞  ${name} calling ${number}...`);
    }
    if (i === 7) {
      number = "16445";
      name = "Brac Helpline";
      alert(`📞  ${name} calling ${number}...`);
    }
    if (i === 8) {
      number = "163";
      name = "Bangladesh Railway Helpline ";
      alert(`📞  ${name} calling ${number}...`);
    }
    // Deduct 5 coins
    let totalcoin =
      parseInt(document.getElementById("coin_count").innerText) || 0;
    totalcoin -= 20;
    if (totalcoin < 0){
      alert("Don't have enough money to call")
      return;
    } // Prevent negative
    document.getElementById("coin_count").innerText = totalcoin;
    // history update
    const histoycontainer = document.getElementById("call-history"); // FIX: quotes added
    const now = new Date(); // FIX: define now
    const timeString = now.toLocaleTimeString();

    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center p-3 bg-gray-50 rounded-lg";
    historyItem.innerHTML = `
        <div>
            <h3 class="font-medium">${name}</h3>
            <p class="text-gray-500 text-sm">${number}</p>
        </div>
        <span class="text-xs text-gray-500">${timeString}</span>
    `;

    histoycontainer.appendChild(historyItem);
  });
}
document.getElementById("clear-button").addEventListener("click", function () {
  document.getElementById("call-history").innerHTML = "";
});
