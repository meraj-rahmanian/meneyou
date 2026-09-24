// Typing animation - Faster & smoother (no pauses)
document.addEventListener("DOMContentLoaded", () => {
    const TYPING_SPEED = 8; // خیلی سریع‌تر (قبلاً 50 بود)

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
                setTimeout(typeChar, TYPING_SPEED); // پیوسته و بدون مکث
            } else {
                // حذف نقطه blinking بعد از پایان تایپ
                const dot = p.querySelector(".typing-dot");
                if (dot) dot.remove();
            }
        };

        typeChar();
    };

    // شروع تایپ فقط وقتی به دید کاربر می‌رسه
    const typingObserver = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeParagraph(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    paragraphs.forEach(p => {
        typingObserver.observe(p);
    });
});
