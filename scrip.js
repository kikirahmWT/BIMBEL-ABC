// === FUNGSI TOMBOL SCROLL UP ===
const scrollUp = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollUp.classList.add("scroll-active");
  } else {
    scrollUp.classList.remove("scroll-active");
  }

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah efek langsung dari href
      const targetId = this.getAttribute("href"); // ambil href seperti #tentang
      const target = document.querySelector(targetId);

      if (target) {
        // Scroll halus ke elemen yang dituju
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Sembunyikan hamburger menu setelah klik (untuk mobile)
      navLinks.classList.remove("show");
    });
  });

  // Aktifkan animasi counter saat scroll melewati statistik
  const statistikSection = document.querySelector(".statistik");
  const statistikTop = statistikSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (statistikTop < windowHeight - 100 && !started) {
    startCounting();
  }
});

// === FUNGSI COUNTER ANGKA ===
const counters = document.querySelectorAll(".counter");
let started = false;

function startCounting() {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
  started = true;
}

// === FUNGSI SLIDER PROGRAM BELAJAR ===
const container = document.getElementById("programSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn?.addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});
nextBtn?.addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});
