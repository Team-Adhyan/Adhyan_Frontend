// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileNav = document.getElementById("mobileNav")

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex"

  // Animate hamburger menu
  const spans = mobileMenuBtn.querySelectorAll("span")
  if (mobileNav.style.display === "flex") {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on links
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.style.display = "none"
    const spans = mobileMenuBtn.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Custom Cursor
const cursor = document.getElementById("cursor")

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"
})

// Cursor hover effects
document.querySelectorAll("a, button, .card-hover").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
    cursor.style.background = "linear-gradient(45deg, #06b6d4, #14b8a6)"
  })

  element.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)"
    cursor.style.background = "linear-gradient(45deg, #14b8a6, #06b6d4)"
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all animated elements
document.querySelectorAll(".animate-fade-in-up").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "all 0.6s ease-out"
  observer.observe(el)
})

// Staggered animations for grids
document
  .querySelectorAll(
    ".about-grid .about-card, .motive-grid .motive-card, .notes-grid .notes-card, .team-grid .team-card",
  )
  .forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })

// Dynamic year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Add floating animation to background shapes
document.querySelectorAll(".floating-shape").forEach((shape, index) => {
  shape.style.animationDelay = `${index * 2}s`
})

// Enhanced hover effects for cards
document.querySelectorAll(".card-hover").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)"
    this.style.boxShadow = "0 25px 50px rgba(20, 184, 166, 0.25)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
    this.style.boxShadow = "none"
  })
})

// Button hover effects
document.querySelectorAll(".btn-hover").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
    this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)"
  })

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
    this.style.boxShadow = "none"
  })
})

// Parallax effect for floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".floating-shape")

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.1
    shape.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add ripple effect to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("ripple")

    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })
})

// Add ripple CSS
const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
