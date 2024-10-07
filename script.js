// Translations for each language
const translations = {
    en: {
        title: "Illuminate: Embracing Your Inner Sparkle",
        prologueTitle: "Prologue",
        prologueContent: "Start your journey by embracing your inner sparkle...",
        footer: "&copy; 2024 Illuminate. All rights reserved."
    },
    fr: {
        title: "Illuminez : Éveillez Votre Éclat Intérieur",
        prologueTitle: "Prologue",
        prologueContent: "Commencez votre voyage en éveillant votre éclat intérieur...",
        footer: "&copy; 2024 Illuminez. Tous droits réservés."
    },
    de: {
        title: "Erleuchten: Entfalten Sie Ihr Inneres Strahlen",
        prologueTitle: "Prolog",
        prologueContent: "Beginnen Sie Ihre Reise, indem Sie Ihr inneres Strahlen annehmen...",
        footer: "&copy; 2024 Erleuchten. Alle Rechte vorbehalten."
    },
    es: {
        title: "Iluminar: Abrazando Tu Brillo Interior",
        prologueTitle: "Prólogo",
        prologueContent: "Comienza tu viaje abrazando tu brillo interior...",
        footer: "&copy; 2024 Iluminar. Todos los derechos reservados."
    },
    ar: {
        title: "أضيء: احتضان بريقك الداخلي",
        prologueTitle: "مقدمة",
        prologueContent: "ابدأ رحلتك من خلال احتضان بريقك الداخلي...",
        footer: "&copy; 2024 أضيء. جميع الحقوق محفوظة."
    }
};

// Function to switch language content
function switchLanguage(lang) {
    const translation = translations[lang];
    
    // Update text content based on language
    document.getElementById("page-title").textContent = translation.title;
    document.getElementById("prologue-title").textContent = translation.prologueTitle;
    document.getElementById("prologue-content").textContent = translation.prologueContent;
    document.getElementById("footer-text").innerHTML = translation.footer;
}

// Add event listeners to language buttons
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedLang = e.target.getAttribute('data-lang');
        switchLanguage(selectedLang);
    });
});

// Optional: Automatically set the language to the last selected language if the page reloads
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLang);

    // Save selected language when a button is clicked
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', lang);
        });
    });
});
