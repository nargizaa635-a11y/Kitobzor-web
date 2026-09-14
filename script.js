// ==========================================
// KITOBZOR — Frontend JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // 1. Smooth scroll
    // -----------------------------
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // -----------------------------
    // 2. Sertifikat tekshirish
    // -----------------------------
    const verifyButton = document.querySelector("#verifyBtn");
    const certificateInput = document.querySelector("#certificateId");
    const verificationResult = document.querySelector("#verificationResult");

    if (verifyButton && certificateInput && verificationResult) {

        verifyButton.addEventListener("click", () => {

            const certificateId =
                certificateInput.value.trim().toUpperCase();

            if (!certificateId) {
                verificationResult.innerHTML = `
                    <div class="verification-error">
                        ⚠️ Sertifikat raqamini kiriting.
                    </div>
                `;
                return;
            }

            // Hozircha demo sertifikat
            if (certificateId === "KZ-2026-00184") {

                verificationResult.innerHTML = `
                    <div class="verification-success">
                        <div class="verification-icon">✓</div>

                        <div>
                            <strong>✅ Sertifikat haqiqiy</strong>

                            <p>
                                <b>Ishtirokchi:</b> GRUT
                            </p>

                            <p>
                                <b>Challenge:</b> Oqshom go‘zalliklari
                            </p>

                            <p>
                                <b>Natija:</b> 90%
                            </p>

                            <p>
                                <b>Sertifikat raqami:</b>
                                KZ-2026-00184
                            </p>

                            <p>
                                <b>Sana:</b> 14.09.2026
                            </p>
                        </div>
                    </div>
                `;

            } else {

                verificationResult.innerHTML = `
                    <div class="verification-error">
                        <div class="verification-icon">!</div>

                        <div>
                            <strong>❌ Sertifikat topilmadi</strong>

                            <p>
                                Kiritilgan sertifikat raqami
                                ma'lumotlar bazasidan topilmadi.
                            </p>

                            <small>
                                Raqamni qayta tekshirib ko‘ring.
                            </small>
                        </div>
                    </div>
                `;
            }
        });


        // Enter tugmasi bilan tekshirish
        certificateInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                verifyButton.click();
            }
        });
    }


    // -----------------------------
    // 3. Challenge tugmasi
    // -----------------------------
    const challengeButtons =
        document.querySelectorAll('a[href="#challenge"]');

    challengeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const challengeSection =
                document.querySelector("#challenge");

            if (challengeSection) {
                challengeSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // -----------------------------
    // 4. Botga kirish
    // -----------------------------
    const botLinks =
        document.querySelectorAll('a[href="#bot"]');

    botLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            alert(
                "📚 Kitobzor botiga tez orada shu yerdan kirishingiz mumkin!"
            );
        });
    });


    // -----------------------------
    // 5. Scroll reveal
    // -----------------------------
    const revealElements =
        document.querySelectorAll(
            ".feature-card, .challenge-card, .certificate-section, .cta-section"
        );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            observer.observe(element);
        });
    }


    // -----------------------------
    // 6. Header scroll effect
    // -----------------------------
    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });
    }


    console.log("📚 Kitobzor website ishga tushdi!");
});
