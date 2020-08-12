const navLi = document.querySelectorAll("#navigation li");

navLi.forEach((el) => {
  ["click", "touchstart"].forEach((event) => {
    el.addEventListener(
      event,
      () => {
        navLi.forEach((_el) => _el.classList.remove("active"));
        el.classList.add("active");
      },
      true
    );
  });
});

new ML.Tabs(".tabs", {
  tab_class: "tabs__tab",
  nav_class: "tabs__nav",
  nav_item_class: "tabs__nav-item",
  active_class: "tabs__active",
});

AOS.init();

const $firstImage = $(".first-image");

$(".product__image").on("click", function () {
  if ($(this).hasClass("first-image")) return;
  const $img = $(this).find("img").clone();
  $firstImage.find("img").replaceWith($img);
  $firstImage.find("a").attr("href", $(this).find("a").attr("href"));
});
