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

    // Check if translation exists for selected language
    if (translation) {
        // Update content on the page
        document.getElementById("page-title").textContent = translation.title;
        document.getElementById("prologue-title").textContent = translation.prologueTitle;
        document.getElementById("prologue-content").textContent = translation.prologueContent;
        document.getElementById("footer-text").innerHTML = translation.footer;
        console.log(`Switched to language: ${lang}`);  // Debugging log
    } else {
        console.error(`No translation available for ${lang}`);
    }
}

// Add event listeners to language buttons
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            switchLanguage(selectedLang);  // Switch language based on button click
            localStorage.setItem('selectedLanguage', selectedLang);  // Save language preference
        });
    });

    // Load the saved language on page load
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';  // Default to English
    switchLanguage(savedLang);  // Apply the saved language
    console.log(`Loaded saved language: ${savedLang}`);  // Debugging log
});
