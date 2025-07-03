// aos
AOS.init({
    once: true,
    mirror: false,
})

// header dropdown btn
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown")
    dropdown.classList.toggle("hidden")
}

document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdown")
    const servicesLink = event.target.closest('a[onclick="toggleDropdown()"]')

    if (!servicesLink && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden")
    }
})

// header menu btn
const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("mobile-menu")

let isOpen = false

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen

    menuBtn.classList.toggle("fa-bars", !isOpen)
    menuBtn.classList.toggle("fa-xmark", isOpen)

    if (isOpen) {
        menu.classList.remove("-left-[100%]")
        menu.classList.add("left-0")
    } else {
        menu.classList.remove("left-0")
        menu.classList.add("-left-[100%]")
    }
})
