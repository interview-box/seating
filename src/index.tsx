import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');

container && createRoot(container).render(<App />);
