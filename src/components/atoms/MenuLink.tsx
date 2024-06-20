import React from 'react';
import '../../scss/Navbar.scss';
import { AnalyticsEvents, Firebase } from '../../utils/firebase';

interface MenuLinkProps {
  sectionLink: string;
  sectionName: string;
  onClick?: () => void; // Define onClick as optional prop
}

const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

const smoothScrollTo = (endY: number, duration: number) => {
  const startY = window.scrollY;
  const distance = endY - startY;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const nextY = easeInOutCubic(timeElapsed, startY, distance, duration);

    window.scrollTo(0, nextY);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, endY); // Ensure we end up at the exact position
    }
  };

  requestAnimationFrame(step);
};

const MenuLink: React.FC<MenuLinkProps> = ({ sectionLink, sectionName, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(); // Call onClick if it's defined
    }
    Firebase.instance.aLog(AnalyticsEvents.navClicked, sectionName);

    // Scroll to the section
    const section = document.getElementById(sectionLink);
    if (section) {
      const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - (navbarHeight/2);
      smoothScrollTo(sectionTop, 600); // 600ms duration for smooth scroll
    }
  };

  return (
    <a
      className="navbutton"
      href={`#${sectionLink}`}
      onClick={handleClick}
    >
      {sectionName}
    </a>
  );
};

export default MenuLink;
