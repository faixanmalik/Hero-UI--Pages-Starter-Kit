import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';


export default function ThemeToggle({}) {

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <SunIcon className="m-2 cursor-pointer h-[1.3rem] w-[1.3rem] text-foreground transition-all" />
      ) : (
        <MoonIcon className="m-2 cursor-pointer h-[1.3rem] w-[1.3rem] text-foreground transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
