import { localeOptions, getUserLanguage, saveUserLanguage, showSuccessMessage, showErrorMessage } from "./utils.js" 

(async () => {

    const select = document.getElementById("locale-code");
    const userLocale = await getUserLanguage();

    localeOptions.forEach(({code, name}) => {
        const option = document.createElement("option");
        option.value = code;
        option.innerHTML = name;

        if (userLocale == code) {
            option.selected = true;
        }

        select.append(option);
    });

    const saveButton = document.getElementById("save");
    saveButton.addEventListener("click", async () => {
        const selectedOption = select.value;
        try {
            saveUserLanguage(selectedOption);
            showSuccessMessage();
        } catch(error) {
            showErrorMessage();
        }
    });
})();
