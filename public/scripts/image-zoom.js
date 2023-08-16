document.addEventListener("DOMContentLoaded", () => {
    const contentContainers = document.getElementsByClassName("gallery-grid");

    const modal = document.createElement("div");
    modal.id = "modal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modalImg.style.objectFit = "contain";

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    function disableScroll(e) {
        e.preventDefault();
    }

    function disableKeyScroll(e) {
        if (
            ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(
                e.key
            )
        ) {
            e.preventDefault();
        }
    }

    function activateModal() {
        window.addEventListener("wheel", disableScroll, { passive: false });
        window.addEventListener("touchmove", disableScroll, { passive: false });
        window.addEventListener("keydown", disableKeyScroll, { passive: false });
        window.addEventListener("DOMMouseScroll", disableScroll, { passive: false });
        for (const container of contentContainers) {
            container.style.filter = "blur(3px)";
        }
    }

    function deactivateModal() {
        window.removeEventListener("wheel", disableScroll, { passive: false });
        window.removeEventListener("touchmove", disableScroll, { passive: false });
        window.removeEventListener("keydown", disableKeyScroll, { passive: false });
        window.removeEventListener("DOMMouseScroll", disableScroll, { passive: false });
        for (const container of contentContainers) {
            container.style.filter = "";
        }
    }

    modal.addEventListener("click", (e) => {
        if (e.target !== modalImg) {
            modal.style.display = "none";
            deactivateModal();
        }
    });

    const images = document.getElementsByTagName("img");
    for (const image of images) {
        image.addEventListener("click", () => {
            modalImg.src = image.src;
            modal.style.display = "flex";
            activateModal();
        });
    }

    // Remove the loading bar container when the content has loaded
    const loadingBarContainer = document.getElementById("loading-bar-container");
    if (loadingBarContainer) {
        setTimeout(() => {
            loadingBarContainer.style.opacity = 0;
            setTimeout(() => {
                loadingBarContainer.remove();
            }, 500);
        }, 2500);
    }
});