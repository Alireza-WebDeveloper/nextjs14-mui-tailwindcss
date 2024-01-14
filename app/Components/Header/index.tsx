import SearchBar from './SearchBar';
import Links from './Links';

// Component
const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 fadeComponent inset-x-0  backdrop-filter  dark:backdrop-brightness-50 backdrop-blur-[8px]">
      <div className="p-2 items-center flex lg:justify-around justify-between flex-wrap  bg-gray-100 dark:bg-gray-900">
        <Links />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
