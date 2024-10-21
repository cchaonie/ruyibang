import { hydrateRoot } from 'react-dom/client';
import App from '..';

const domNode = document.getElementById('root');

hydrateRoot(domNode, <App />);
