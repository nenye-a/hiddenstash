import { APP_URI, API_URI } from '../constants/uri';

if (
  document.readyState === 'interactive' ||
  document.readyState === 'complete'
) {
  main();
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}

function main() {
  let isCartOpen = false;
  let body = document.querySelector('body');
  if (body) {
    let hiddenstashLogo = chrome.runtime.getURL('hiddenstash-icon.png');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'hiddenstash-app');
    iframe.setAttribute('class', 'hiddenstash-app');
    iframe.setAttribute('frameBorder', '0');

    chrome.storage.local.get('hiddenstashToken', async (result) => {
      let token = '';
      if (result.hiddenstashToken) {
        token = result.hiddenstashToken;
      } else {
        let response = await fetch(`${API_URI}/getToken`);
        let data = response.json();
        data.then((result) => {
          if (result.token) {
            token = result.token;
            chrome.storage.local.set({ hiddenstashToken: token });
          }
        });
      }
      // Here we replace all dots in token to be url safe
      let regexComaSymbol = /[.]/gi;

      iframe.setAttribute(
        'src',
        `${APP_URI}auth/${token.replace(regexComaSymbol, '+')}`,
      );
    });
    Object.assign(iframe.style, {
      width: '410px',
      height: '470px',
      position: 'fixed',
      right: '30px',
      bottom: '30px',
      'z-index': 99999,
    });

    let image = document.createElement('img');
    image.setAttribute('src', hiddenstashLogo);
    image.setAttribute('id', 'hiddenstash-icon');
    Object.assign(image.style, {
      'object-fit': 'contain',
      width: '90px',
      height: '90px',
      position: 'fixed',
      right: '30px',
      bottom: '30px',
      'z-index': 99999,
    });
    image.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      if (body) {
        body.removeChild(image);
        body.appendChild(iframe);
        isCartOpen = true;
      }
    });

    body.appendChild(image);

    // hide iframe when clicking outside iframe
    document.addEventListener('click', (evt: MouseEvent) => {
      let existingIframe = body?.querySelector('#hiddenstash-app');
      // @ts-ignore
      let notClickOnIcon = evt.target.id !== 'hiddenstash-icon';
      if (evt.target !== existingIframe && isCartOpen && notClickOnIcon) {
        body?.removeChild(iframe);
        body?.appendChild(image);
        isCartOpen = false;
      }
    });

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'addItem') {
        image.click();
      }
    });
  }
}
