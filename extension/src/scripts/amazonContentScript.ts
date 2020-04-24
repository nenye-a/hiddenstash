import renderGetTodayButton from '../components/GetTodayButton';
import insertNodeAfterExistingElement from '../helpers/insertNodeAfterExistingElement';

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

  insertNodeAfterExistingElement(button, addToCartButtonContainer);
}
