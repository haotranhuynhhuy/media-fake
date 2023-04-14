import React from 'react';
import { NavLink } from 'react-router-dom';

export interface LinkProps {
  href?: string;
  customClassName?: string;
  useExternal?: boolean;
  target?: string;
  title?: string;
  activeClassName?: string;
  handleClick?: () => void;
  children?: React.ReactNode;
  download?: boolean
}

const Link: React.FC<LinkProps> = ({
  href,
  useExternal,
  title,
  customClassName = '',
  target = '_self',
  activeClassName = '',
  children,
  handleClick,
  download
}) => {
  if (!href) {
    return (
      <div
        className={`${customClassName} ${activeClassName}`}
      >
        {children}
      </div>
    );
  }

  if (useExternal) {
    return (
      <a
        download={download}
        className={`a-link ${customClassName} ${activeClassName}`}
        target={target}
        href={href}
        rel="noreferrer"
        title={title || ''}
        aria-label={title || ''}
      >
        {children}
      </a>
    );
  }
  return (
    <NavLink
      title={title || ''}
      aria-label={title || ''}
      to={href || '#'}
      className={`a-link ${customClassName} ${activeClassName}`}
      onClick={handleClick}
      target={target}
    >
      {children}
    </NavLink>
  );
};

export default Link;
