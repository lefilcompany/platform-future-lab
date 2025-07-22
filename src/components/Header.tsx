const Header = () => {
  return (
    <header className="bg-background border-b border-border py-4 sticky top-0 z-40 backdrop-blur-sm bg-background/90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=40&h=40&fit=crop&crop=center" 
              alt="Logo Icon" 
              className="h-8 w-8 rounded"
            />
            <span className="font-space font-bold text-foreground">Escola de Marketing do Futuro</span>
          </div>
          <div className="h-8 w-20 bg-secondary rounded flex items-center justify-center">
            <span className="font-space font-bold text-secondary-foreground text-xs">LeFil</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;