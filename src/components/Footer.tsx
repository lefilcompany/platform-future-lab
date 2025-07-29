import LogoPortoDigital from '../assets/03_PD_Horizontal_PNG_Branca.png';
import LogoEscola from '../assets/Logos - MARKETING DO FUTURO - bg preto (1).png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-full w-full rounded flex items-center justify-center space-x-16">
            <img src={LogoEscola}
            alt="Logo Escola" 
            className="h-32 w-74" />
            <img src={LogoPortoDigital}
            alt="Logo Porto Digital" 
            className="h-12 w-60" />
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