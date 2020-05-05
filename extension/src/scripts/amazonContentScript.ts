import renderGetTodayButton from '../components/GetTodayButton';
import insertNodeAfterExistingElement from '../helpers/insertNodeAfterExistingElement';

let addToCartButtonContainer = document.querySelector(
  '#addToCart_feature_div>.a-button-stack',
);
let searchResultContainer = document.querySelectorAll(
  'div.s-border-bottom>div.a-section.a-spacing-medium',
);
let dealContainer = document.querySelectorAll('div.dealContainer.dealTile');

if (dealContainer.length > 0) {
  dealContainer.forEach((item) => {
    let stackButtonContainer = item.querySelector('.a-row.stackToBottom');
    let productName = item.querySelector('a#dealTitle')?.textContent;
    let price = item.querySelector('.priceBlock>span.dealPriceText')
      ?.textContent;
    let source = item.querySelector('a#dealTitle')?.getAttribute('href');
    let productImage = item.querySelector('img')?.getAttribute('src');
    let button = renderGetTodayButton({
      style: { 'margin-bottom': '10px' },
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log(productName, price, source, productImage);
      },
    });

    stackButtonContainer?.appendChild(button);
  });
}
if (searchResultContainer.length > 0) {
  searchResultContainer.forEach((item) => {
    let productName = item.querySelector('h2')?.textContent;
    let price = item.querySelector('a>span.a-price>span.a-offscreen')
      ?.textContent;
    let source = item.querySelector('h2>a')?.getAttribute('href');
    let productImage = item.querySelector('img')?.getAttribute('src');
    let button = renderGetTodayButton({
      mode: 'small',
      style: { 'margin-top': '5px' },
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log(productName, price, source, productImage);
      },
    });

    item.appendChild(button);
  });
}
if (addToCartButtonContainer) {
  let productName = document
    .querySelector('#productTitle')
    ?.textContent?.trim();
  let price = document.querySelector('#priceblock_ourprice')?.textContent;
  let productImage = document
    .querySelector('div#imgTagWrapperId>img')
    ?.getAttribute('src');
  let source = window.location.href;
  let button = renderGetTodayButton({
    style: { 'margin-bottom': '10px' },
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log(productName, price, productImage, source);
    },
  });

  insertNodeAfterExistingElement(button, addToCartButtonContainer);
}
