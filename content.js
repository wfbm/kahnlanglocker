(async () => {

    const src = chrome.runtime.getURL("./utils.js");
    const { langKey, getUserLanguage } = await import(src);

    const href = window.location.href;
    const url = URL.parse(href);

    if (url.searchParams.has(langKey)) {
        return;
    }

    const langValue = await getUserLanguage(); 

    url.searchParams.set(langKey, langValue);

    window.location.href = url.href;
})();