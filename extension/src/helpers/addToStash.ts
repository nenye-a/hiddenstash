import { API_URI } from '../constants/uri';

export type AddStashParam = {
  name?: string;
  price?: number;
  source?: string;
  imgUrl?: string;
};

export default async function addToStash(params: AddStashParam) {
  let { name, price, source, imgUrl } = params;

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
    fetch(`${API_URI}/stashItem/add`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        name: name?.trim(),
        price,
        source,
        imgUrl,
      }),
      method: 'POST',
    });
  });
  // TODO: open iframe on success
}
