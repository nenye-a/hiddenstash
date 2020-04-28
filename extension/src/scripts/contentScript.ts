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
    iframe.setAttribute('src', 'https://192.168.0.7:19006/'); // TODO: change src
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
  }
}
