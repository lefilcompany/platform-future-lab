import LogoEscola from '../assets/Logos-MARKETING-DO-FUTURO-bg-branco.svg';
import LogoPortoDigital from '../assets/04_PD_Horizontal_PNG_Preta.png';

const Header = () => {
  return (
    <header className="bg-background border-b border-black border-b-2 py-4 sticky top-0 z-40 backdrop-blur-sm bg-background/90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={LogoEscola}
              alt="Logo Escola Marketing do Futuro" 
              className="h-24 w-full rounded"
            />
          </div>
          <div className="h-14 w-42 bg-secondary rounded flex items-center justify-center p-4">
            <img src={LogoPortoDigital}
            alt="Logo Porto Digital" 
            className="h-8 w-40" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;