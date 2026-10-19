export const langKey = "lang";

export const localeOptions = [
    { code: "de-DE", name: "Deutsch (Deutschland)" },
    { code: "en-GB", name: "English (United Kingdom)" },
    { code: "en-US", name: "English (United States)" },
    { code: "es-ES", name: "Español (España)" },
    { code: "es-MX", name: "Español (México)" },
    { code: "fr-FR", name: "Français (France)" },
    { code: "it-IT", name: "Italiano (Italia)" },
    { code: "ja-JP", name: "日本語 (日本)" },
    { code: "pt-BR", name: "Português (Brasil)" },
    { code: "pt-PT", name: "Português (Portugal)" },
    { code: "zh-CN", name: "简体中文 (中国)" }
];

export async function getUserLanguage() {
    const fromStorage = await chrome.storage.local.get([langKey]);

    if (fromStorage && fromStorage[langKey]) {
        return fromStorage[langKey];
    }

    return navigator.language || navigator.userLanguage;
}

export async function saveUserLanguage(value) {
    await chrome.storage.local.set({ lang: value });
}

function showTempElement(id) {
    const elem = document.getElementById(id);
    elem.style = "display: block"
    hideElement(elem);
}

function hideElement(elem) {
    setTimeout(() => {
        elem.style = "display: none"
    }, 3000);
}

export function showSuccessMessage() {
    showTempElement("success-message");
}

export function showErrorMessage() {
    showTempElement("error-message");
}
