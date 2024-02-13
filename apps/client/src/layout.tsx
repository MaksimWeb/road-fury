import * as React from 'react';
import { navigate } from '../src/utils/events';

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [counter, setCounter] = React.useState(0);

  const handleClick = (action: 'plus' | 'minus') => {
    action === 'plus'
      ? setCounter((prev) => prev + 1)
      : setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button type='button' onClick={() => navigate('/about')}>
              Страница Обо мне
            </button>
          </li>
          <li>
            <button type='button' onClick={() => navigate('/contacts')}>
              Страница Контакт
            </button>
          </li>
        </ul>
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <p>Counter: {counter}</p>
        <div style={{ display: 'flex', columnGap: '12px' }}>
          <button type='button' onClick={() => handleClick('minus')}>
            Minus
          </button>
          <button type='button' onClick={() => handleClick('plus')}>
            Plus
          </button>
        </div>
      </div>

      {children}
    </div>
  );
}
