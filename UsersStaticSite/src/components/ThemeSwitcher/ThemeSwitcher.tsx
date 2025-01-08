import React, { useCallback, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun, ChevronDown, Check } from 'lucide-react';
import useMediaQuery from '../../hooks/useMediaQuery';

type ThemeMode = 'light' | 'dark';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');

  const handleMouseEnter = useCallback(() => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setIsDropdownOpen(true);
  }, [closeTimeout]);

  const handleMouseLeave = useCallback(() => {
    const time = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
    setCloseTimeout(time);
  }, []);

  const handleSelect = (mode: ThemeMode) => {
    if (mode === 'dark' && !isDarkMode) {
      toggleTheme();
    }
    if (mode === 'light' && isDarkMode) {
      toggleTheme();
    }
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative flex items-center z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-2 pt-4 lg:p-0 rounded-md"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label="Trocar tema"
      >
        {isMobileOrTablet ? (
          <span className="text-h4 text-white">Mudar o tema</span>
        ) : isDarkMode ? (
          <Moon className="w-5 h-5 text-white " />
        ) : (
          <Sun className="w-5 h-5 text-white" />
        )}
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
            }`}
        />
      </button>


      {isDropdownOpen && (
        <div className="absolute top-10 right-50 lg:right-0 w-[132px] h-[86px] py-2 bg-white dark:bg-lightGrey rounded-lg">
          <button
            aria-live='polite'
            onClick={() => handleSelect('light')}
            className="flex items-center justify-between w-[120px] h-[37px] gap-2 mx-1.5 px-2 hover:bg-primary text-black dark:text-white hover:text-white rounded-md"
          >
            <div className='flex items-center gap-1'>
              <Sun className="w-4 h-4" />
              <span className='text-level-2'>Claro</span>
            </div>
            {!isDarkMode && <Check className="w-4 h-4" />}
          </button>
          <button
            onClick={() => handleSelect('dark')}
            className="flex items-center justify-between w-[120px] h-[37px] gap-2 mx-1.5 px-2 hover:bg-primary text-black dark:text-white hover:text-white rounded-md"
          >
            <div className='flex items-center gap-1'>
              <Moon className="w-4 h-4" />
              <span className='text-level-2'>Escuro</span>
            </div>
            {isDarkMode && <Check className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;