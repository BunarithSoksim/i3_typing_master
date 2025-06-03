// Global variables
let currentUser = null;
let testText = "";
let testStartTime = null;
let testTimer = null;
let testDuration = 60;
let currentPosition = 0;
let correctChars = 0;
let totalChars = 0;
let testActive = false;

// Sample texts for typing test
const sampleTexts = [
  "The quick brown fox jumps over the lazy dog. This pangram contains all letters of the alphabet and is commonly used for typing practice. It helps improve finger dexterity and muscle memory.",
  "Technology has revolutionized the way we communicate, work, and live. From smartphones to artificial intelligence, we are witnessing unprecedented changes in our daily lives.",
  "Learning to type efficiently is a valuable skill in today's digital world. With practice and dedication, anyone can improve their typing speed and accuracy significantly.",
  "The art of programming requires patience, logic, and creativity. Developers must think systematically while crafting elegant solutions to complex problems.",
  "Climate change is one of the most pressing issues of our time. It requires global cooperation and immediate action to protect our planet for future generations.",
];

// Page navigation
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  if (pageId === "typing-test") {
    resetTest();
  } else if (pageId === "results") {
    loadResults();
  }
}

// User management
function getUsers() {
  const users = JSON.parse(localStorage.getItem("typingUsers") || "[]");
  return users;
}

function saveUser(userData) {
  const users = getUsers();
  users.push(userData);
  localStorage.setItem("typingUsers", JSON.stringify(users));
}

function findUser(email) {
  const users = getUsers();
  return users.find((user) => user.email === email);
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
}

function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
  currentUser = user;
}

// Form handlers
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("regFullName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

    // Remove any existing messages
    const existingMessage = document.querySelector(
      ".success-message, .error-message"
    );
    if (existingMessage) {
      existingMessage.remove();
    }

    if (password !== confirmPassword) {
      showMessage("Passwords do not match!", "error", "registerForm");
      return;
    }

    if (findUser(email)) {
      showMessage("User already exists!", "error", "registerForm");
      return;
    }

    const userData = {
      fullName,
      email,
      password,
      registeredAt: new Date().toISOString(),
      testResults: [],
    };

    saveUser(userData);
    setCurrentUser(userData);
    showMessage("Registration successful!", "success", "registerForm");

    setTimeout(() => {
      showPage("typing-test");
    }, 1500);
  });

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Remove any existing messages
  const existingMessage = document.querySelector(
    ".success-message, .error-message"
  );
  if (existingMessage) {
    existingMessage.remove();
  }

  const user = findUser(email);

  if (!user || user.password !== password) {
    showMessage("Invalid email or password!", "error", "loginForm");
    return;
  }

  setCurrentUser(user);
  showMessage("Login successful!", "success", "loginForm");

  setTimeout(() => {
    showPage("typing-test");
  }, 1500);
});

document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("resetEmail").value;

  // Remove any existing messages
  const existingMessage = document.querySelector(
    ".success-message, .error-message"
  );
  if (existingMessage) {
    existingMessage.remove();
  }

  const user = findUser(email);

  if (!user) {
    showMessage("Email not found!", "error", "resetForm");
    return;
  }

  showMessage(
    "Password reset link sent to your email!",
    "success",
    "resetForm"
  );

  setTimeout(() => {
    showPage("login");
  }, 2000);
});

function showMessage(message, type, formId) {
  const messageDiv = document.createElement("div");
  messageDiv.className =
    type === "success" ? "success-message" : "error-message";
  messageDiv.textContent = message;

  const form = document.getElementById(formId);
  form.insertBefore(messageDiv, form.firstChild);
}

// Typing test functionality
function startTest() {
  if (testActive) return;

  testActive = true;
  testText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
  currentPosition = 0;
  correctChars = 0;
  totalChars = 0;
  testStartTime = Date.now();

  displayText();
  document.getElementById("textInput").disabled = false;
  document.getElementById("textInput").focus();
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("resetBtn").style.display = "inline-block";

  // Start timer
  let timeLeft = testDuration;
  document.getElementById("timer").textContent = timeLeft;

  testTimer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      endTest();
    }
  }, 1000);
}

function displayText() {
  const textDisplay = document.getElementById("textDisplay");
  let html = "";

  for (let i = 0; i < testText.length; i++) {
    if (i < currentPosition) {
      html += `<span class="correct">${testText[i]}</span>`;
    } else if (i === currentPosition) {
      html += `<span class="current">${testText[i]}</span>`;
    } else {
      html += testText[i];
    }
  }

  textDisplay.innerHTML = html;
}

function endTest() {
  if (!testActive) return;

  testActive = false;
  clearInterval(testTimer);
  document.getElementById("textInput").disabled = true;
  document.getElementById("startBtn").style.display = "inline-block";
  document.getElementById("resetBtn").style.display = "none";

  const timeElapsed = (Date.now() - testStartTime) / 1000;
  const wpm = Math.round(correctChars / 5 / (timeElapsed / 60));
  const accuracy = Math.round((correctChars / Math.max(totalChars, 1)) * 100);

  // Save result
  const result = {
    date: new Date().toISOString(),
    wpm: wpm,
    accuracy: accuracy,
    timeElapsed: timeElapsed,
  };

  saveTestResult(result);

  alert(`Test completed!\nWPM: ${wpm}\nAccuracy: ${accuracy}%`);
}

function resetTest() {
  testActive = false;
  clearInterval(testTimer);

  document.getElementById("textInput").value = "";
  document.getElementById("textInput").disabled = true;
  document.getElementById("textDisplay").innerHTML =
    'Click "Start Test" to begin...';
  document.getElementById("wpm").textContent = "0";
  document.getElementById("accuracy").textContent = "100%";
  document.getElementById("timer").textContent = "60";
  document.getElementById("startBtn").style.display = "inline-block";
  document.getElementById("resetBtn").style.display = "none";

  currentPosition = 0;
  correctChars = 0;
  totalChars = 0;
}

function saveTestResult(result) {
  const user = getCurrentUser();
  if (!user) return;

  const users = getUsers();
  const userIndex = users.findIndex((u) => u.email === user.email);

  if (userIndex !== -1) {
    users[userIndex].testResults = users[userIndex].testResults || [];
    users[userIndex].testResults.push(result);
    localStorage.setItem("typingUsers", JSON.stringify(users));

    // Update current user
    setCurrentUser(users[userIndex]);
  }
}

function loadResults() {
  const user = getCurrentUser();
  const resultsContainer = document.getElementById("resultsContainer");

  if (!user || !user.testResults || user.testResults.length === 0) {
    resultsContainer.innerHTML =
      '<p style="text-align: center; color: #666;">No test results found. Take a typing test to see your results here!</p>';
    return;
  }

  const sortedResults = user.testResults.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  resultsContainer.innerHTML = sortedResults
    .map(
      (result) => `
                <div class="result-card">
                    <div class="result-header">
                        <div class="result-date">${new Date(
                          result.date
                        ).toLocaleDateString()}</div>
                        <div class="result-wpm">${result.wpm} WPM</div>
                    </div>
                    <div>
                        <strong>Accuracy:</strong> ${result.accuracy}% | 
                        <strong>Time:</strong> ${Math.round(
                          result.timeElapsed
                        )}s
                    </div>
                </div>
            `
    )
    .join("");
}

// Real-time typing feedback
document.getElementById("textInput").addEventListener("input", function (e) {
  if (!testActive) return;

  const input = e.target.value;
  const inputLength = input.length;

  if (inputLength > testText.length) {
    e.target.value = input.slice(0, testText.length);
    return;
  }

  currentPosition = inputLength;
  totalChars = Math.max(totalChars, inputLength);

  // Calculate correct characters
  correctChars = 0;
  for (let i = 0; i < inputLength; i++) {
    if (input[i] === testText[i]) {
      correctChars++;
    }
  }

  // Update display
  displayText();

  // Update stats
  const timeElapsed = (Date.now() - testStartTime) / 1000;
  const wpm = Math.round(correctChars / 5 / (timeElapsed / 60)) || 0;
  const accuracy = Math.round((correctChars / Math.max(totalChars, 1)) * 100);

  document.getElementById("wpm").textContent = wpm;
  document.getElementById("accuracy").textContent = accuracy + "%";

  // Check if test is complete
  if (inputLength === testText.length) {
    endTest();
  }
});

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  currentUser = getCurrentUser();
  resetTest();
});
