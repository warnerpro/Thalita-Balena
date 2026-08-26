const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-coupon]").forEach((couponButton) => {
  couponButton.addEventListener("click", async () => {
    const coupon = couponButton.dataset.coupon;

    try {
      await navigator.clipboard.writeText(coupon);
      couponButton.querySelector("strong").textContent = "Copiado";
      window.setTimeout(() => {
        couponButton.querySelector("strong").textContent = "Copiar";
      }, 1800);
    } catch {
      couponButton.querySelector("strong").textContent = coupon;
    }
  });
});
