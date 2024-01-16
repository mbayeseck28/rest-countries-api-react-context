import { useEffect } from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './DarkMode.css';

const DarkMode = () => {
  useEffect(() => {
    document.title = 'Note Hack';
    const body = document.querySelector('body');
    let bg = localStorage.getItem('bg');
    if (bg.startsWith('"') && bg.endsWith('"')) {
      bg = bg.slice(1, -1);
    }
    body.setAttribute('data-theme', bg);
  }, []);

  const setDarkMode = () => {
    localStorage.setItem('bg', JSON.stringify('dark'));
    document.querySelector('body').setAttribute('data-theme', 'dark');
  };
  const setLightMode = () => {
    localStorage.setItem('bg', JSON.stringify('light'));
    document.querySelector('body').setAttribute('data-theme', 'light');
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
