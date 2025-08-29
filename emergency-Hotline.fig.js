const hearts = document.getElementsByClassName("heart");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    let totalLove = parseInt(document.getElementById("love_count").innerText) || 0;
    totalLove += 1;
    document.getElementById("love_count").innerText = totalLove;
  });
}

// Call button functionality
const callButtons = document.querySelectorAll(".call-button");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let number = "";

    if (i === 0) {
      number = "999";
      name = "National Emergency Number"
      alert(`📞 ${name} ${number}...`);
    }
    if (i === 1) {
      number = "999";
      name = "Police Helpline Number"
      alert(`📞 ${name} calling ${number}...`);
    }
    if (i === 2) {
      number = "998";
      name = "Fire Service Number"
      alert(`📞  ${name} calling ${number}...`);
    }
    if (i === 3) {
      number = "1994-999999";
      name = "Ambulance Service"
      alert(`📞  ${name} calling ${number}...`);
    }
     if (i === 4) {
      number = "109";
      name = "Women & Child Helpline"
      alert(`📞  ${name} calling ${number}...`);
    }
       if (i === 5) {
      number = "106";
      name = "Anti-Corruption Helpline"
      alert(`📞  ${name} calling ${number}...`);
    }
    // Deduct 5 coins
    let totalcoin = parseInt(document.getElementById("coin_count").innerText) || 0;
    totalcoin -= 5;
    if (totalcoin < 0) totalcoin = 0; // Prevent negative
    document.getElementById("coin_count").innerText = totalcoin;
  });
}
