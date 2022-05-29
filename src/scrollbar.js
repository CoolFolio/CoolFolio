function ScrollBar() {
  const colors = {
    brew: "347AEB",
    valencia: "D44A4A",
    amethyst: "A14AD4",
    royal: "FE8C52",
    emerald: "4AD45A",
  };
  let tag = document.createElement("style");
  tag.innerHTML = `
::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar-thumb {
    background-color: #${colors[localStorage.color]};
}
::-webkit-scrollbar {
    background-color: #191926;
}
`;
  document.head.appendChild(tag);
}

export default ScrollBar;
