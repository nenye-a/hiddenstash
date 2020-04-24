import hiddenstashIcon from '../../assets/hiddenstash-icon.png';
import { THEME_COLOR, BORDER_COLOR } from '../constants/colors';

type Props = {
  mode?: 'small' | 'default';
  style?: { [key: string]: string | number }; // TODO: refine type
  onClick?: () => void;
};

export default function renderGetTodayButton(props: Props) {
  let { mode = 'default', style, onClick } = props;
  let button = document.createElement('button');

  let textContainer = document.createElement('div');

  // TODO: change font family
  Object.assign(textContainer.style, {
    color: '#fff',
    display: 'flex',
    'align-items': 'center',
    ...(mode === 'small'
      ? {
          'font-size': '10px',
        }
      : {
          'font-size': '14px',
          flex: 1,
          'justify-content': 'center',
        }),
  });
  let textNode = document.createTextNode('Get Today');

  textContainer.appendChild(textNode);
  let icon = document.createElement('img');
  icon.setAttribute('src', hiddenstashIcon);
  Object.assign(icon.style, {
    'object-fit': 'contain',
    ...(mode === 'small'
      ? {
          height: '10px',
          width: '10px',
        }
      : { height: '20px', width: '20px' }),
  });
  button.appendChild(icon);
  button.appendChild(textContainer);
  Object.assign(button.style, {
    display: 'flex',
    'align-items': 'center',
    'border-radius': '5px',
    'background-color': THEME_COLOR,
    ...(mode === 'small'
      ? { height: '21px', border: 'none' }
      : {
          height: '30px',
          'border-color': BORDER_COLOR,
          width: '100%',
          'box-shadow': `0px 2px 5px ${BORDER_COLOR}`,
        }),
    ...style,
  });

  button.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    onClick && onClick();
  });
  return button;
}
