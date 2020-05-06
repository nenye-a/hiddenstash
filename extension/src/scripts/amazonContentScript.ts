import renderGetTodayButton from '../components/GetTodayButton';
import {
  addToStash,
  getPriceNumber,
  insertNodeAfterExistingElement,
} from '../helpers';

type AddItemParam = {
  name?: string | null;
  price?: string | null;
  source?: string | null;
  imgUrl?: string | null;
};
let addToCartButtonContainer = document.querySelector(
  '#addToCart_feature_div>.a-button-stack',
);
let searchResultContainer = document.querySelectorAll(
  'div.s-border-bottom>div.a-section.a-spacing-medium',
);
let dealContainer = document.querySelectorAll('div.dealContainer.dealTile');

let addItemToStash = (param: AddItemParam) => {
  let { name, price, source, imgUrl } = param;
  addToStash({
    name: name || undefined,
    price: price ? getPriceNumber(price) : undefined,
    source: `https://amazon.com${source}` || undefined,
    imgUrl: imgUrl || undefined,
  });
};
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
        addItemToStash({
          name: productName,
          price,
          source,
          imgUrl: productImage,
        });
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
        addItemToStash({
          name: productName,
          price,
          source,
          imgUrl: productImage,
        });
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
      addItemToStash({
        name: productName,
        price,
        source,
        imgUrl: productImage,
      });
    },
  });

  insertNodeAfterExistingElement(button, addToCartButtonContainer);
}
