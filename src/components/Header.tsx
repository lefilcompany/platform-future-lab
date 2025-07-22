const Header = () => {
  return (
    <header className="bg-background border-b border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="h-12 w-24 bg-secondary rounded flex items-center justify-center">
            <span className="font-space font-bold text-secondary-foreground text-sm">LeFil</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;