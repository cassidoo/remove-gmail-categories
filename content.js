function removeDivs() {
  const divsToRemove = document.querySelectorAll('[role="menuitem"][title="Social"], [role="menuitem"][title="Updates"], [role="menuitem"][title="Forums"], [role="menuitem"][title="Promotions"]');

  divsToRemove.forEach(div => {
    div.remove();
  });
}

removeDivs();

const observer = new MutationObserver(removeDivs);
observer.observe(document.body, { childList: true, subtree: true });
