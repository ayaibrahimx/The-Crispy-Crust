import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useState } from 'react';

function AppLayout() {
  const [query, setQuery] = useState('');

  return (
    <div className="font-roboto text-slate-100">
      <Header query={query} setQuery={setQuery} />
      <div className="overflow-hidden ">
        <main className=" mx-auto max-w-4xl ">
          <Outlet context={[query]} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
