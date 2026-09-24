// Typewriter effect for <p> tags: slow, calm typing with a colored blinking dot.
// Each paragraph starts typing only when it scrolls into view (so it isn't
// "typed" instantly while still hidden behind the fade-up/scroll-item animation).
document.addEventListener("DOMContentLoaded", () => {
    const TYPING_SPEED = 15; // ms per character - slow / calm pace

    const paragraphs = document.querySelectorAll("p");

    const typeParagraph = p => {
        const text = p.textContent.trim();
        let i = 0;

        p.innerHTML = '<span class="typing-dot"></span>';

        const typeChar = () => {
            if (i < text.length) {
                p.innerHTML =
                    text.slice(0, i + 1) + '<span class="typing-dot"></span>';
                i++;
                setTimeout(typeChar, TYPING_SPEED);
            } else {
                // typing finished, drop the blinking dot
                const dot = p.querySelector(".typing-dot");
                if (dot) dot.remove();
            }
        };

        typeChar();
    };

    const typingObserver = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeParagraph(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0
        }
    );

    paragraphs.forEach(p => {
        typingObserver.observe(p);
    });
});
