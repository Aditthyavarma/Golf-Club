// Cursor Effect
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

// Navigation Hover Effects
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

// GSAP Animations
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

document.getElementById("mobile-nav-toggle").onclick = () => {
  document.getElementById("nav").classList.toggle("show");
};

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  updateScrollProgress();
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});

// GSAP From Animations
gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});


// ✅ 1. Time-based greeting
function showGreeting() {
  const hour = new Date().getHours();
  let greetText = "Welcome!";
  if (hour < 12) greetText = "Good Morning!";
  else if (hour < 18) greetText = "Good Afternoon!";
  else greetText = "Good Evening!";

  const greetElem = document.createElement("div");
  greetElem.innerText = greetText;
  greetElem.className = "fixed top-5 left-5 bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg z-50";
  document.body.appendChild(greetElem);
  setTimeout(() => greetElem.remove(), 4000);
}
showGreeting();


// ✅ 2. Dummy Weather Alert Popup
function showWeatherAlert() {
  const alert = document.createElement("div");
  alert.innerHTML = `
    <div class="fixed bottom-5 right-5 bg-red-600 text-white px-5 py-3 rounded-xl shadow-lg z-50">
      ⚠️ High UV index today. Wear sunscreen!
    </div>`;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 5000);
}
setTimeout(showWeatherAlert, 3000);


// ✅ 3. Floating Button (Animated)
const floatBtn = document.createElement("button");
floatBtn.innerText = "Contact Us";
floatBtn.className = "fixed bottom-10 left-5 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-full animate-bounce shadow-lg z-50";
document.body.appendChild(floatBtn);
floatBtn.onclick = () => alert("Redirect to contact form!");


// ✅ 4. Scroll Progress Bar
const scrollBar = document.createElement("div");
scrollBar.id = "scrollProgressBar";
scrollBar.style.position = "fixed";
scrollBar.style.top = "0";
scrollBar.style.left = "0";
scrollBar.style.height = "5px";
scrollBar.style.backgroundColor = "#6366f1";
scrollBar.style.zIndex = "9999";
scrollBar.style.width = "0%";
document.body.appendChild(scrollBar);

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  scrollBar.style.width = `${progress}%`;
}
