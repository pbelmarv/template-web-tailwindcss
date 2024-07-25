const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
    if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.toggle(navOpenedClass);

        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }
});

// Swiper
const swiper = new Swiper(".swiper", {
    loop: true,

    // Si se necesita paginación
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Faq
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
    const faqBtn = item.querySelector(".faq__btn");

    item.addEventListener("click", () => {
        const isOpen = item.classList.toggle("open");
        const iconClass = isOpen ? "ri-subtract-fill" : "ri-add-fill";
        let iconElement = faqBtn.querySelector("i");
        iconElement.classList = `${iconClass} text-2xl`;
    });
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 3000,
    delay: 600,
});

// Hero
sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".hero__img");

// Stats
sr.reveal(".stats__item", {
    delay: 600,
    distance: "100px",
    interval: 100,
    origin: "top",
});

// Servicios
sr.reveal(".services");
sr.reveal(".services__top");
sr.reveal(".stats__item", {
    delay: 600,
    distance: "100px",
    interval: 100,
    origin: "bottom",
});

// Appointment
sr.reveal(".appointment__title");
sr.reveal(".appointment__form");

// Testimonios
sr.reveal(".textimonial");
sr.reveal(".textimonial__container");

// Equipo
sr.reveal(".team__title");
sr.reveal(".team__slider");

// Faq
sr.reveal(".faq__title");
sr.reveal(".faq__item", {
    delay: 600,
    distance: "100px",
    interval: 100,
    origin: "bottom",
});

// Departamentos
sr.reveal(".departaments__bg");
sr.reveal(".departaments__container");

// blog
sr.reveal(".blog__title");
sr.reveal(".blog__post", {
    delay: 600,
    distance: "100px",
    interval: 100,
    origin: "bottom",
});

// Brands
sr.reveal(".brands__logo", {
    delay: 600,
    distance: "100px",
    interval: 100,
    origin: "bottom",
});

// Noticias
sr.reveal(".newsletter");
sr.reveal(".newsletter__container");

// Footer
sr.reveal(".footer_item", {
    delay: 600,
    distance: "100px",
    interval: 100,
    origin: "bottom",
});

document.addEventListener("DOMContentLoaded", () => {
    const allLinks = document.querySelectorAll("a");
    const allTabs = document.querySelectorAll(".tab-content");

    const switchTab = (linkId) => {
        allTabs.forEach((tab) => {
            tab.classList.toggle("hidden", tab.id !== `${linkId}-content`);
        });
    };

    const handleTabClick = (event) => {
        event.preventDefault();
        const linkId = event.target.id;
        allLinks.forEach((link) => {
            const isCurrentLink = link.id === linkId;
            link.classList.toggle("bg-gray-100", isCurrentLink);
            link.classList.toggle("text-gray-400", isCurrentLink);
            link.classList.toggle("text-gray-400", !isCurrentLink);
        });
        switchTab(linkId);
    };

    allLinks.forEach((link) => {
        link.addEventListener("click", handleTabClick);
    });

    const currentHash = window.location.hash;
    const activeLink = currentHash
        ? document.querySelector(`a[href="${currentHash}"]`)
        : document.querySelector("a");
    handleTabClick({ target: activeLink });
});
