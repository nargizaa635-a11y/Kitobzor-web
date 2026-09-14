document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // SERTIFIKAT TEKSHIRISH
    // ==============================

    const verifyButton = document.getElementById("verifyBtn");
    const certificateInput = document.getElementById("certificateId");
    const verificationResult = document.getElementById("verificationResult");

    if (verifyButton && certificateInput && verificationResult) {

        verifyButton.addEventListener("click", function () {

            const certificateId =
                certificateInput.value.trim().toUpperCase();

            if (certificateId === "") {

                verificationResult.innerHTML = `
                    <div>
                        ⚠️ Sertifikat raqamini kiriting.
                    </div>
                `;

                return;
            }

            if (certificateId === "KZ-2026-00184") {

                verificationResult.innerHTML = `
                    <div>
                        <h3>✅ Sertifikat haqiqiy</h3>

                        <p><b>Ishtirokchi:</b> GRUT</p>

                        <p>
                            <b>Challenge:</b>
                            Oqshom go‘zalliklari
                        </p>

                        <p><b>Natija:</b> 90%</p>

                        <p>
                            <b>Sertifikat:</b>
                            KZ-2026-00184
                        </p>

                        <p><b>Sana:</b> 14.09.2026</p>
                    </div>
                `;

            } else {

                verificationResult.innerHTML = `
                    <div>
                        <h3>❌ Sertifikat topilmadi</h3>

                        <p>
                            Kiritilgan sertifikat raqami
                            topilmadi.
                        </p>
                    </div>
                `;
            }
        });


        // ENTER bosilganda ham tekshiradi
        certificateInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                verifyButton.click();
            }

        });

    }


    // ==============================
    // SMOOTH SCROLL
    // ==============================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    console.log("Kitobzor ishga tushdi ✅");

});
