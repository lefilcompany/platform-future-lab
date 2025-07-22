const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-10 w-20 bg-secondary rounded flex items-center justify-center">
            <span className="font-space font-bold text-secondary-foreground text-sm">LeFil</span>
          </div>
          <div className="font-poppins text-sm">
            <p>© 2025 LeFil - Escola de Marketing do Futuro</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;