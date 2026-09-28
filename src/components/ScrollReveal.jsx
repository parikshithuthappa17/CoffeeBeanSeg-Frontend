import { useEffect, useRef } from "react";


const REVEAL_SELECTOR = [
  "main > section > *:not(.glass-card):not(.glass-panel)",
  "main > div > section > *:not(.glass-card):not(.glass-panel)",
  "main .glass-card",
  "main .glass-panel",
].join(",");


function ScrollReveal({ children }) {

  const containerRef = useRef(null);


  useEffect(() => {

    const container = containerRef.current;

    if (!container) {
      return undefined;
    }


    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


    const revealElements = () => {

      const elements = container.querySelectorAll(
        REVEAL_SELECTOR
      );


      let index = 0;


      elements.forEach((element) => {

        if (element.classList.contains("scroll-reveal-ready")) {
          return;
        }


        // Keep navigation/footer and already hidden utility elements out.
        if (
          element.closest("nav") ||
          element.closest("footer") ||
          element.hasAttribute("data-no-reveal") ||
          (element.closest(".glass-card") && !element.classList.contains("glass-card"))
        ) {
          return;
        }


        element.classList.add("scroll-reveal-ready");

        element.style.setProperty(
          "--reveal-delay",
          `${(index % 5) * 70}ms`
        );

        index += 1;
      });


      if (reduceMotion) {
        elements.forEach((element) => {
          element.classList.add("scroll-reveal-visible");
        });
      }
    };


    revealElements();


    if (reduceMotion) {
      return undefined;
    }


    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          entry.target.classList.add(
            "scroll-reveal-visible"
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );


    const observeElements = () => {

      revealElements();

      container
        .querySelectorAll(
          ".scroll-reveal-ready:not(.scroll-reveal-visible)"
        )
        .forEach((element) => observer.observe(element));
    };


    observeElements();


    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });


    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
    });


    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };

  }, []);


  return (
    <div ref={containerRef} className="scroll-reveal-root">
      {children}
    </div>
  );
}


export default ScrollReveal;
