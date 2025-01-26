import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/components/ui/provider';
import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './components/Layout/index.jsx';
import Home from './routes/Home.jsx';
import Categories from './routes/Categories.jsx';
import Account from './routes/Account.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/account" element ={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
