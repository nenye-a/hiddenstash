if (
  document.readyState === 'interactive' ||
  document.readyState === 'complete'
) {
  main();
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}

function main() {
  let addToCartButtonContainer = document.querySelector(
    '#addToCart_feature_div',
  );
  if (addToCartButtonContainer) {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('Click Me'));
    button.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Clicked');
    });
    // This entire next section is for inserting something after an existing element 😱
    if (addToCartButtonContainer.nextSibling) {
      addToCartButtonContainer.parentNode.insertBefore(
        button,
        addToCartButtonContainer.nextSibling,
      );
    } else {
      addToCartButtonContainer.parentNode.appendChild(button);
    }
  }
}
