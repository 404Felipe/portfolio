export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 1000,
  });

  sr.reveal(".delaySmallReveal", { delay: 100 });
  sr.reveal(".delayMediumReveal", { delay: 200 });
  sr.reveal(".delayLargeReveal", { delay: 300 });
  sr.reveal(".delayExtraBigReveal", { delay: 500 });
  sr.reveal(".intervalCardReveal", { interval: 300 });
}
