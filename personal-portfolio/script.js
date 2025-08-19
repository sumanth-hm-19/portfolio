function typeWriter(element, text, speed, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      setTimeout(callback, 500); // wait a little before next line
    }
  }
  typing();
}

function startTypingSequence() {
  const nameEl = document.getElementById("typed-name");
  const roleEl = document.getElementById("typed-role");
  const taglineEl = document.getElementById("typed-tagline");

  // clear old text
  nameEl.textContent = "";
  roleEl.textContent = "";
  taglineEl.textContent = "";

  // typing sequence
  typeWriter(nameEl, "Hi, I’m Sumanth HM", 100, () => {
    typeWriter(roleEl, "Data Analyst | Aspiring Data Engineer", 100, () => {
      typeWriter(taglineEl, "Turning raw data into insights & building scalable pipelines with Python, SQL, and GCP.", 50);
    });
  });
}

// Run first time
startTypingSequence();

// Repeat every 25s
setInterval(startTypingSequence, 25000);



