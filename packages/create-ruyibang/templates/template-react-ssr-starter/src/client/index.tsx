import { hydrateRoot } from 'react-dom/client';
import App from 'src/application';

const domNode = document.getElementById('root');

hydrateRoot(domNode, <App />);
