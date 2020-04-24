import renderGetTodayButton from '../components/GetTodayButton';

let addToCartButtonContainer = document.querySelector('#addToCart_feature_div');
let searchResultContainer = document.querySelectorAll(
  'div.s-border-bottom>div.a-section.a-spacing-medium',
);
let dealContainer = document.querySelectorAll('.dealDetailContainer');
if (dealContainer.length > 0) {
  dealContainer.forEach((item) => {
    let button = renderGetTodayButton({
      style: { 'margin-bottom': '10px' },
      onClick: () => {},
      showIcon: false,
      mode: 'small',
    });

    item.appendChild(button);
  });
}
if (searchResultContainer.length > 0) {
  searchResultContainer.forEach((item) => {
    let button = renderGetTodayButton({
      mode: 'small',
      style: { 'margin-top': '5px' },
      onClick: () => {},
    });

    item.appendChild(button);
  });
}
if (addToCartButtonContainer) {
  let button = renderGetTodayButton({
    style: { 'margin-bottom': '10px' },
    onClick: () => {},
  });

  // This entire next section is for inserting something after an existing element 😱
  if (addToCartButtonContainer.nextSibling) {
    if (addToCartButtonContainer.parentNode) {
      addToCartButtonContainer.parentNode.insertBefore(
        button,
        addToCartButtonContainer,
      );
    }
  } else {
    if (addToCartButtonContainer.parentNode) {
      addToCartButtonContainer.parentNode.appendChild(button);
    }
  }
}
