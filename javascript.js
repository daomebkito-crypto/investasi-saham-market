
/* =====================================
   KONFIGURASI WEBSITE
   PT MARKET SAHAM INVESTASI
===================================== */

// NOMOR WHATSAPP ADMIN
const adminWhatsApp = "6287867485284";


// =====================================
// DATA PAKET INVESTASI
// =====================================

const investmentPackages = [
    {
        name: "PAKET BASIC",
        price: "Rp200.000",
        description: "Pilihan awal untuk mengenal produk investasi.",
        duration: "Sesuai ketentuan produk",
        risk: "Pelajari risiko produk",
        features: [
            "Informasi produk",
            "Penjelasan mekanisme",
            "Layanan konsultasi"
        ]
    },

    {
        name: "PAKET PREMIUM",
        price: "Rp500.000",
        description: "Pilihan dengan informasi dan layanan lebih lengkap.",
        duration: "Sesuai ketentuan produk",
        risk: "Pelajari risiko produk",
        features: [
            "Informasi produk",
            "Penjelasan mekanisme",
            "Layanan konsultasi",
            "Informasi laporan produk"
        ]
    },

    {
        name: "PAKET EXCLUSIVE",
        price: "Rp1.000.000",
        description: "Pilihan untuk calon investor yang ingin mempelajari produk lebih lanjut.",
        duration: "Sesuai ketentuan produk",
        risk: "Pelajari risiko produk",
        features: [
            "Informasi produk",
            "Penjelasan mekanisme",
            "Layanan konsultasi",
            "Informasi laporan produk",
            "Pendampingan informasi"
        ]
    }
];


// =====================================
// MENAMPILKAN PAKET INVESTASI
// =====================================

const investmentGrid = document.getElementById("investmentGrid");

if (investmentGrid) {

    investmentPackages.forEach(function (paket) {

        const card = document.createElement("div");

        card.className = "investment-card";

        card.innerHTML = `
            <h3>${paket.name}</h3>

            <div class="price">
                ${paket.price}
            </div>

            <p>${paket.description}</p>

            <p><strong>Jangka waktu:</strong><br>
            ${paket.duration}</p>

            <p><strong>Risiko:</strong><br>
            ${paket.risk}</p>

            <div class="package-features">
                ${paket.features.map(function (fitur) {
                    return `<p>✓ ${fitur}</p>`;
                }).join("")}
            </div>

            <a
                href="#"
                class="btn-invest"
                data-package="${paket.name}"
            >
                Tanya Informasi
            </a>
        `;

        investmentGrid.appendChild(card);

    });

}


// =====================================
// TOMBOL WHATSAPP PAKET INVESTASI
// =====================================

document.addEventListener("click", function (event) {

    const button = event.target.closest(".btn-invest");

    if (!button) return;

    event.preventDefault();

    const packageName = button.dataset.package;

    const message =
        `Halo Admin PT MARKET SAHAM INVESTASI, saya ingin mendapatkan informasi mengenai ${packageName}. Mohon penjelasannya mengenai produk, ketentuan, dan risikonya.`;

    const whatsappURL =
        `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});


// =====================================
// KALKULATOR SIMULASI INVESTASI
// =====================================

const calculateButton = document.getElementById("calculateButton");

if (calculateButton) {

    calculateButton.addEventListener("click", function () {

        const amount = Number(
            document.getElementById("investmentAmount").value
        );

        const rate = Number(
            document.getElementById("investmentRate").value
        );

        const duration = Number(
            document.getElementById("investmentDuration").value
        );

        const result = document.getElementById("simulationResult");

        if (
            !Number.isFinite(amount) ||
            !Number.isFinite(rate) ||
            !Number.isFinite(duration) ||
            amount <= 0 ||
            rate < 0 ||
            rate > 100 ||
            duration <= 0 ||
            !Number.isInteger(duration)
        ) {

            result.textContent =
                "Mohon masukkan nominal, persentase, dan jangka waktu yang valid.";

            return;
        }

        // SIMULASI MATEMATIKA BUNGA MAJEMUK
        // Bukan jaminan atau proyeksi hasil investasi.

        const finalAmount =
            amount * Math.pow(1 + rate / 100, duration);

        const estimatedProfit =
            finalAmount - amount;

        const formatRupiah = function (number) {

            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0
            }).format(number);

        };

        result.innerHTML = `
            <h3>Hasil Simulasi Ilustratif</h3>

            <p>Modal awal:</p>
            <strong>${formatRupiah(amount)}</strong>

            <p>Asumsi imbal hasil tahunan:</p>
            <strong>${rate}%</strong>

            <p>Jangka waktu:</p>
            <strong>${duration} tahun</strong>

            <hr>

            <p>Perkiraan nilai akhir:</p>
            <strong>${formatRupiah(finalAmount)}</strong>

            <p>Perkiraan selisih nilai:</p>
            <strong>${formatRupiah(estimatedProfit)}</strong>
        `;

    });

}


// =====================================
// TOMBOL WHATSAPP KONTAK
// =====================================

const whatsappLinks = document.querySelectorAll(".whatsapp-link");

whatsappLinks.forEach(function (link) {

    link.href =
        `https://wa.me/${adminWhatsApp}?text=` +
        encodeURIComponent(
            "Halo Admin PT MARKET SAHAM INVESTASI, saya ingin mendapatkan informasi lebih lanjut mengenai layanan dan produk investasi."
        );

});


// =====================================
// ANIMASI SCROLL
// =====================================

const animatedElements = document.querySelectorAll(
    ".advantage-card, .investment-card, .step-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-element");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(function (element) {

        element.classList.add("hidden-element");

        observer.observe(element);

    });

}

console.log("PT MARKET SAHAM INVESTASI berhasil dijalankan!");


// =====================================
// MENU NAVIGASI RESPONSIF
// =====================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("is-open");

        menuToggle.classList.toggle("is-active", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu" : "Buka menu"
        );

    });

    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("is-open");

            menuToggle.classList.remove("is-active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Buka menu");

        });

    });

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navMenu.classList.remove("is-open");

            menuToggle.classList.remove("is-active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Buka menu");

        }

    });

}
