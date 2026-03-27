(() => {
  function getGalleries() {
    return [
      ...document.querySelectorAll("gallery"),
      ...document.querySelectorAll("div.gallery"),
    ];
  }

  function resolveGutter(el) {
    const gutAttr = el.getAttribute("gutter") || el.getAttribute("data-gutter");
    return gutAttr ? parseInt(gutAttr, 10) : 8;
  }

  // Ensure Packery items are direct children: wrap & hoist any descendant <img>
  function normalizeChildren(el) {
    // 1) Collect all descendant <img> that are NOT already inside a direct .gallery-item child
    const imgs = [...el.querySelectorAll("img")];

    imgs.forEach((img) => {
      // If this image is already the only child of a direct .gallery-item child, keep it
      const parent = img.parentElement;
      const isDirectItem =
        parent && parent.classList.contains("gallery-item") && parent.parentElement === el;

      if (isDirectItem) return;

      // Create a new wrapper as a direct child of the gallery
      const wrapper = document.createElement("div");
      wrapper.className = "gallery-item";

      // Move wrapper to end of gallery, then move the image into it
      el.appendChild(wrapper);
      wrapper.appendChild(img);
      // If we just stole the <img> from a <p>, the empty <p> will be left behind — harmless.
    });

    // 2) If author provided custom wrappers, ensure they are direct children
    // (move them up one level if needed)
    [...el.querySelectorAll(".gallery-item")].forEach((item) => {
      if (item.parentElement !== el) {
        el.appendChild(item);
      }
    });
  }

  function initOne(el) {
    // Turn <gallery> into a normal element with a class
    el.classList.add("gallery");

    const gutter = resolveGutter(el);
    el.style.setProperty("--gutter", `${gutter}px`);

    normalizeChildren(el);

    const pck = new Packery(el, {
      itemSelector: ".gallery-item",
      percentPosition: true,
      gutter,
      resize: true,
    });

    const layout = () => pck.layout();

    // Layout after images load
    if (window.imagesLoaded) {
      imagesLoaded(el, layout);
    } else {
      // basic fallback if imagesLoaded not present
      const imgs = el.querySelectorAll("img");
      let c = 0;
      imgs.forEach((i) => {
        if (i.complete) { if (++c === imgs.length) layout(); }
        else {
          i.addEventListener("load", () => { if (++c === imgs.length) layout(); });
          i.addEventListener("error", () => { if (++c === imgs.length) layout(); });
        }
      });
    }

    // Relayout on resize/hash/slideshow events if present
    ["resize", "hashchange", "slidechange"].forEach((ev) =>
      window.addEventListener(ev, layout)
    );
    document.addEventListener("slidechange", layout);

    // Relayout when the gallery actually becomes visible (hidden slides case)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) layout(); }),
      { threshold: 0.25 }
    );
    io.observe(el);
  }

  function boot() {
    getGalleries().forEach(initOne);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
