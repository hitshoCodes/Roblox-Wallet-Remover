function removeElements() {
  const elementsToRemove = document.querySelectorAll(".nav-robux-icon.rbx-menu-item.nav-credit");
  elementsToRemove.forEach((element) => {
    element.remove();
  });
}

setInterval(removeElements, 10);
