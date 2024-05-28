import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../ThemeContext';

const ThemedLink = ({ to, onClick, className, children }) => {
  const { theme } = useContext(ThemeContext);

  // Determine if the link is currently selected
  const isSelected = className.includes('selected');

  // Determine the background color based on selection and theme
  const backgroundColor = isSelected ? (theme === 'light' ? 'black' : 'white') : 'transparent';

  // Determine the text color based on selection and theme
  const textColor = isSelected ? (theme === 'light' ? 'white' : 'black') : (theme === 'light' ? 'black' : 'white');

  // Combine styles based on theme and selection
  const linkStyles = {
    color: textColor,
    backgroundColor: backgroundColor,
  };

  return (
    <Link
      to={to}
      onClick={onClick}
      className={className}
      style={linkStyles}
    >
      {children}
    </Link>
  );
};

export default ThemedLink;
