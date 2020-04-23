if (
  document.readyState === 'interactive' ||
  document.readyState === 'complete'
) {
  main();
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}

function main() {
  // TODO: move to other function
  let addToCartButtonContainer = document.querySelector(
    '#addToCart_feature_div',
  );
  if (addToCartButtonContainer) {
    // TODO: add styling
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('Click Me'));
    button.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Clicked');
    });
    // This entire next section is for inserting something after an existing element 😱
    if (addToCartButtonContainer.nextSibling) {
      if (addToCartButtonContainer.parentNode) {
        addToCartButtonContainer.parentNode.insertBefore(
          button,
          addToCartButtonContainer.nextSibling,
        );
      }
    } else {
      if (addToCartButtonContainer.parentNode) {
        addToCartButtonContainer.parentNode.appendChild(button);
      }
    }
  }
}
