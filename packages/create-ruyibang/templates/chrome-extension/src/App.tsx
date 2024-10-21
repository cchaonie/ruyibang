import { useEffect, useState } from 'react';

import './App.css';

export const App = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    function handleTargetOptions() {
      return document.title;
    }

    async function init() {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          func: handleTargetOptions,
        })
        .then((injectionResults) => {
          const res = injectionResults[0].result;
          setGreeting(res);
        });
    }

    init();
  }, []);

  return (
    <div className="w-80 p-2">
      <h1>Hello Chrome Extension</h1>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};
