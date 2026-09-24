document.addEventListener("DOMContentLoaded", () => {
    // Any top-level content block that doesn't already play the on-load
    // fade-up animation automatically gets the on-scroll animation instead,
    // so new sections/elements are covered without editing this file.
    const autoTargets = document.querySelectorAll(
        "body > *:not(script):not(.animate-fade-up):not(#scroll-container):not(#calculator), #scroll-container > *:not(script)"
    );

    autoTargets.forEach(el => {
        if (
            !el.classList.contains("animate-fade-up") &&
            !el.classList.contains("scroll-item")
        ) {
            el.classList.add("scroll-item");
        }
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    document.querySelectorAll(".scroll-item").forEach(item => {
        observer.observe(item);
    });
});
