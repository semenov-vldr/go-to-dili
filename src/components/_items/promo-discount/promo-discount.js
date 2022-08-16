const promoDiscount = document.querySelector('.promo-discount');
const closePromoDiscount = promoDiscount.querySelector('.promo-discount__close');



closePromoDiscount.addEventListener('click', () => {
  promoDiscount.style.display = "none";
  console.log(closePromoDiscount);
})
