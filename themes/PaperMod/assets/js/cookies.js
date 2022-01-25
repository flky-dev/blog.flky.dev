const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".btn-cookie-accept");
const nopeCookieButton = document.querySelector(".btn-cookie-deny");
const cookieBannerDisplayed = "cookieBannerDisplayed"
const analyticsIsAllowed = "analyticsIsAllowed"

// Anonymous, self hosted and privacy oriented analytics powered by Ackee. Don't worry, I'm not facebook^^ 
const analytics = (state) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://analytics.flky.dev/tracker.js";
    script.setAttribute("data-ackee-server", "https://analytics.flky.dev");
    script.setAttribute("data-ackee-domain-id", "92cee36f-4b2a-4df4-87d9-7532b5692618");
    script.setAttribute("data-ackee-opts", `{ \"ignoreLocalhost\": true, \"detailed\": ${state} }`);
    document.head.appendChild(script);
}


if (localStorage.getItem(analyticsIsAllowed) === "true") {
    analytics(state="true");
}

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem(cookieBannerDisplayed, "true");
    localStorage.setItem(analyticsIsAllowed, "true");
    analytics(state="true");
});

nopeCookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem(cookieBannerDisplayed, "true");
    localStorage.setItem(analyticsIsAllowed, "false");
    analytics(state="false");
});

setTimeout(() => {
    if (!localStorage.getItem(cookieBannerDisplayed)) {
        cookieContainer.classList.add("active");

    }
}, 100);