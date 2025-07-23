import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import marketingPlatforms from "@/assets/marketing-platforms.jpg";
import strategyGrowth from "@/assets/strategy-growth.jpg";
import innovationTech from "@/assets/innovation-tech.jpg";
import silvioMeira from "@/assets/Silvio_Meira_0038.jpg";
import rosarioPompeia from "@/assets/Rosario-qc1jd9gqja2bmrqu3r2bm1y00tx3mbrwgvs9jonixs.webp";
import { 
  Target, 
  Zap, 
  TrendingUp, 
  Users, 
  Brain, 
  Rocket, 
  CheckCircle, 
  X, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  Sparkles,
  BarChart3,
  Eye
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 lg:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge superior */}
            <Badge className="mb-6 bg-secondary/20 text-foreground text-lg border-secondary/30 animate-fade-in hover:bg-primary hover:text-background">
              <Sparkles className="w-8 h-8 mr-2" />
              Curso Intensivo 2 Dias • 15 e 16 de Agosto
            </Badge>
            
            <h1 className="font-space text-4xl md:text-7xl font-bold mb-8 leading-tight animate-slide-up">
              Quem não sabe criar estratégia,{" "}
              <span className="relative inline-block">
                <span className="text-primary px-4 py-2 rounded-lg">vive apagando incêndio.</span>
              </span>
            </h1>
            
            <p className="font-space text-xl md:text-3xl mb-6 text-foreground animate-fade-in">
              Aprenda a dominar o marketing de plataformas com quem desenha o futuro do mercado.
            </p>
            
            <p className="font-poppins text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Um curso intensivo e prático para transformar sua marca em um ecossistema de alto impacto.
            </p>
            
            {/* CTA Principal Super Atrativo */}
            <div className="relative inline-block animate-scale-in">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <Button 
                onClick={() => scrollToSection('professores')}
                className="relative font-space text-xl px-12 py-8 h-auto bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:from-secondary/90 hover:to-secondary transform hover:scale-105 transition-all duration-300 shadow-2xl group"
              >
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Quero aprender com os melhores
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Indicadores sociais */}
            <div className="flex items-center justify-center space-x-8 mt-12 text-sm text-muted-foreground animate-fade-in">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-secondary" />
                +500 profissionais impactados
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-secondary" />
                Metodologia validada por IA
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-secondary" />
                Garantia de reembolso
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premissa Inicial */}
      <section className="bg-gradient-to-r from-primary via-primary to-primary/90 py-16 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-secondary to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <div className="flex items-center mb-8">
                  <Brain className="w-12 h-12 text-secondary mr-4" />
                  <h2 className="font-space text-3xl md:text-5xl font-bold text-primary-foreground">
                    Por que esse curso existe?
                  </h2>
                </div>
                
                <div className="space-y-8 text-primary-foreground">
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="font-poppins text-lg leading-relaxed">
                      Todo mundo já entendeu: <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded font-semibold">o marketing mudou.</span>
                      <br />Mas quase ninguém sabe como agir nesse novo contexto.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Target className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="font-poppins text-lg leading-relaxed">
                      As plataformas definem o comportamento do consumidor.
                      <br />E marcas que não entendem isso acabam perdidas, tentando viralizar enquanto perdem dinheiro e relevância.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="font-poppins text-lg leading-relaxed">
                      Este curso é para quem quer <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded font-semibold">jogar o jogo certo</span>:
                      <br />conectar marca e comunidade, escalar resultados e crescer com inteligência.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-transparent rounded-lg blur"></div>
                <img 
                  src={marketingPlatforms} 
                  alt="Marketing de Plataformas" 
                  className="relative w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay com ícones flutuantes */}
                <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm rounded-full p-3 animate-pulse-slow">
                  <BarChart3 className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="absolute bottom-4 left-4 bg-secondary/90 backdrop-blur-sm rounded-full p-3 animate-pulse-slow">
                  <Eye className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="bg-gradient-to-b from-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-secondary/10 text-foreground border-secondary/30">
                <Target className="w-4 h-4 mr-2" />
                Metodologia Exclusiva
              </Badge>
              <h2 className="font-space text-4xl md:text-5xl font-bold mb-8 leading-tight">
                O que você vai <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">aprender?</span>
              </h2>
              <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
                Três módulos para te fazer pensar e agir como estrategista de verdade:
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group border-2 hover:border-secondary transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/5 animate-slide-up">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Número do módulo */}
                  <div className="absolute top-4 right-4 bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-space font-bold text-2xl text-secondary">1</span>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <h3 className="font-space text-2xl font-bold mb-6 text-foreground">
                    Magnetismo de Mercado
                  </h3>
                  
                  <p className="font-poppins text-muted-foreground mb-6 leading-relaxed">
                    Aprenda a se tornar inesquecível em marketplaces e plataformas sociais.
                  </p>
                  
                  <ul className="font-poppins text-sm space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Atração com SEO e visual storytelling
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Estratégias de visibilidade em feeds de alto fluxo
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Posicionamento de marca que converte
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="group border-2 hover:border-secondary transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/5 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-space font-bold text-2xl text-secondary">2</span>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <h3 className="font-space text-2xl font-bold mb-6 text-foreground">
                    Alquimia da Retenção
                  </h3>
                  
                  <p className="font-poppins text-muted-foreground mb-6 leading-relaxed">
                    Transforme cliques em relacionamento duradouro.
                  </p>
                  
                  <ul className="font-poppins text-sm space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Gamificação e fidelização em ambientes multi-vendedor
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Reputação como motor de crescimento
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Jornada do cliente como diferencial competitivo
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="group border-2 hover:border-secondary transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/5 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-space font-bold text-2xl text-secondary">3</span>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <h3 className="font-space text-2xl font-bold mb-6 text-foreground">
                    Catalisador de Conversões
                  </h3>
                  
                  <p className="font-poppins text-muted-foreground mb-6 leading-relaxed">
                    Venda com inteligência e consistência.
                  </p>
                  
                  <ul className="font-poppins text-sm space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Psicologia do consumo digital
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Estratégias de preço e funil de vendas
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      Otimização para escalar resultados
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pra quem é */}
      <section className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-space text-4xl md:text-5xl font-bold mb-8 text-secondary-foreground">
                Pra quem é (e pra quem não é)
              </h2>
              <p className="font-poppins text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
                Clareza total sobre o perfil ideal para este curso intensivo
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Para quem É */}
              <div className="relative">
                <Card className="bg-background p-8 rounded-2xl shadow-2xl border-2 border-background transform hover:scale-105 transition-all duration-300 animate-slide-up">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-8">
                      <div className="bg-secondary/20 p-3 rounded-full mr-4">
                        <CheckCircle className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="font-space text-2xl font-bold text-foreground">
                        Este curso é para você se...
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start group">
                        <div className="bg-secondary p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                          <TrendingUp className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <p className="font-poppins text-foreground leading-relaxed">
                          Já atua com marketing e quer pensar estratégia além do óbvio
                        </p>
                      </div>
                      
                      <div className="flex items-start group">
                        <div className="bg-secondary p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                          <Rocket className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <p className="font-poppins text-foreground leading-relaxed">
                          Quer migrar para o mercado digital com clareza e visão de futuro
                        </p>
                      </div>
                      
                      <div className="flex items-start group">
                        <div className="bg-secondary p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                          <Brain className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <p className="font-poppins text-foreground leading-relaxed">
                          Trabalha com tecnologia, inovação ou vendas e quer conectar com comportamento real de consumo
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Para quem NÃO É */}
              <div className="relative">
                <Card className="bg-primary p-8 rounded-2xl shadow-2xl border-2 border-primary transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-8">
                      <div className="bg-secondary/20 p-3 rounded-full mr-4">
                        <X className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="font-space text-2xl font-bold text-primary-foreground">
                        Não é para você se...
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start group">
                        <div className="bg-secondary p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                          <X className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <p className="font-poppins text-primary-foreground leading-relaxed">
                          Procura um curso técnico ou ferramenta específica
                        </p>
                      </div>
                      
                      <div className="flex items-start group">
                        <div className="bg-secondary p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                          <X className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <p className="font-poppins text-primary-foreground leading-relaxed">
                          Quer fórmula mágica para viralizar
                        </p>
                      </div>
                      
                      <div className="flex items-start group">
                        <div className="bg-secondary p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                          <X className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <p className="font-poppins text-primary-foreground leading-relaxed">
                          Não está disposto a repensar o que entende por marketing
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial da metodologia */}
      <section className="bg-gradient-to-b from-background to-primary/5 py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-transparent rounded-2xl blur"></div>
                <img 
                  src={innovationTech} 
                  alt="Metodologia Inovadora" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-secondary rounded-full p-4 shadow-lg animate-pulse-slow">
                  <Brain className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary rounded-full p-4 shadow-lg animate-pulse-slow">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="animate-slide-up">
                <Badge className="mb-6 bg-secondary/10 text-foreground border-secondary/30">
                  <Brain className="w-4 h-4 mr-2" />
                  Inovação Exclusiva
                </Badge>
                
                <h2 className="font-space text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  O diferencial da <span className="text-secondary-foreground px-4 py-2 rounded-lg">metodologia</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/20 p-3 rounded-full mt-1">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-poppins text-lg leading-relaxed text-muted-foreground">
                        A única escola de marketing com metodologia validada por inteligência artificial, 
                        conectando <strong>3 dimensões</strong> em cada aula:
                      </p>
                      <p className="font-space text-lg font-semibold text-foreground mt-2">
                        Individual, Coletiva e Artificial
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/20 p-3 rounded-full mt-1">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-poppins text-lg leading-relaxed text-muted-foreground mb-2">
                        Tudo isso apoiado na <strong>Teoria AEIOU</strong>:
                      </p>
                      <p className="font-space text-lg font-semibold text-foreground">
                        Estratégia • Inovação • Negócios • Tecnologia • Comunicação
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-secondary/10 to-transparent p-6 rounded-xl border border-secondary/20">
                    <p className="font-poppins text-lg text-foreground">
                      Criada por quem desenvolve o marketing do futuro no Brasil — 
                      e já impactou mais de <span className="bg-primary text-primary-foreground px-2 py-1 rounded font-bold">500 profissionais</span> em todo o país.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professores */}
      <section id="professores" className="bg-gradient-to-br from-primary via-primary to-primary/80 py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-secondary to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
                <Star className="w-4 h-4 mr-2" />
                Autoridades do Mercado
              </Badge>
              <h2 className="font-space text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Quem te ensina
              </h2>
              <p className="font-poppins text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Aprenda diretamente com quem está construindo o futuro do marketing no Brasil
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-background border-2 border-background/20 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-up">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-8">
                    <div className="relative">
                      <div className="h-20 w-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg">
                        <img src={silvioMeira} alt="Silvio Meira Foto" className="w-full h-full object-cover rounded-lg shadow" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2">
                        <Star className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-space text-3xl font-bold mb-4 text-foreground">Silvio Meira</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-secondary/20 text-foreground">Cientista-chefe TDS</Badge>
                        <Badge className="bg-secondary/20 text-foreground">Fundador Porto Digital</Badge>
                        <Badge className="bg-secondary/20 text-foreground">Professor UFPE</Badge>
                      </div>
                      <p className="font-poppins text-lg leading-relaxed text-muted-foreground">
                        Cientista-chefe da TDS Company, fundador do Porto Digital, professor emérito da UFPE 
                        e conselheiro de gigantes como <span className="font-semibold text-foreground">Magalu, CI&T e MRV</span>. 
                        Uma das mentes mais respeitadas em inovação no Brasil.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-2 border-background/20 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <CardContent className="p-10">
                  <div className="flex items-start space-x-8">
                    <div className="relative">
                      <div className="h-20 w-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg">
                        <img src={rosarioPompeia} alt="Rosário Pompeia Foto" className="w-full h-full object-cover rounded-lg shadow" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2">
                        <Sparkles className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-space text-3xl font-bold mb-4 text-foreground">Rosário Pompéia</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-secondary/20 text-foreground">Fundadora LeFil</Badge>
                        <Badge className="bg-secondary/20 text-foreground">+100 Campanhas</Badge>
                        <Badge className="bg-secondary/20 text-foreground">Mestra Comunicação</Badge>
                      </div>
                      <p className="font-poppins text-lg leading-relaxed text-muted-foreground">
                        Fundadora da LeFil e estrategista de marketing com mais de <span className="font-semibold text-foreground">100 campanhas</span> entregues para marcas líderes. 
                        Mestra em Comunicação, especialista em estruturação de times e insights de consumo digital.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-16 animate-fade-in">
              <div className="bg-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20">
                <p className="font-space text-2xl text-primary-foreground leading-relaxed mb-2">
                  Quando você aprende com quem construiu o presente, 
                </p>
                <span className="bg-secondary font-space text-2xl text-secondary-foreground px-4 py-2 rounded-lg">
                    está se preparando para o que vem depois dele.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-gradient-to-b from-background to-secondary/5 py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-secondary/10 text-foreground border-secondary/30">
                <Clock className="w-4 h-4 mr-2" />
                Metodologia Prática
              </Badge>
              <h2 className="font-space text-4xl md:text-5xl font-bold mb-8">
                Como funciona na <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">prática</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-transparent rounded-2xl blur"></div>
                <img 
                  src={strategyGrowth} 
                  alt="Como Funciona" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                {/* Floating elements */}
                <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm rounded-full p-3 animate-pulse-slow">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-3 animate-pulse-slow">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <div className="space-y-8 animate-slide-up">
                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-space text-2xl font-bold text-foreground">Formato:</h3>
                  </div>
                  <p className="font-poppins text-lg text-muted-foreground leading-relaxed ml-16">
                    <strong>100% online e ao vivo</strong> • 15 e 16 de Agosto
                  </p>
                </div>
                
                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Brain className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-space text-2xl font-bold text-foreground">Plataforma:</h3>
                  </div>
                  <p className="font-poppins text-lg text-muted-foreground leading-relaxed ml-16">
                    <strong>Plataforma colaborativa</strong> com IA ativa
                  </p>
                </div>
                
                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary/20 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-space text-2xl font-bold text-foreground">Dinâmica:</h3>
                  </div>
                  <p className="font-poppins text-lg text-muted-foreground leading-relaxed ml-16">
                    <strong>Exposições, perguntas</strong>, IA sintetizando o pensamento coletivo
                  </p>
                </div>
                
                {/* CTA para ementa */}
                <div className="bg-gradient-to-r from-secondary/10 to-transparent p-8 rounded-2xl border border-secondary/20 mt-12">
                  <div className="flex items-center mb-6">
                    <Target className="w-6 h-6 text-secondary mr-3" />
                    <h4 className="font-space text-xl font-bold text-foreground">Quer saber mais detalhes?</h4>
                  </div>
                  
                  <Button 
                    onClick={() => window.open('https://www-lefil-com-br.rds.land/lp-ementa-curso-estrategia-mkt-plataformas-2025', '_blank')}
                    className="w-full h-full font-space text-lg px-8 py-6 h-auto bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground hover:from-secondary/90 hover:to-secondary transform hover:scale-105 transition-all duration-300 shadow-lg group"
                  >
                    <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                    BAIXAR EMENTA COMPLETA
                  </Button>
                  
                  <p className="font-poppins text-sm text-muted-foreground mt-4">
                    Download gratuito • Conteúdo programático completo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preço e Oferta */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/80 py-20 relative overflow-hidden">
        {/* Elementos decorativos animados */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <Badge className="mb-8 bg-primary/60 text-background border-primary/30 text-lg px-6 py-2 hover:bg-background hover:text-primary">
                <Clock className="w-5 h-5 mr-2" />
                Oferta por Tempo Limitado
              </Badge>
              
              <h2 className="font-space text-3xl md:text-5xl font-bold mb-12 text-secondary-foreground leading-tight">
                O que vale mais: seguir tentando sozinho ou aprender em 2 dias o que pode 
                <span className="text-primary px-4 py-2 rounded-lg ml-2">
                  mudar sua atuação inteira?
                </span>
              </h2>
            </div>
            
            <div className="relative mb-12 animate-scale-in">
              {/* Card de preço super atrativo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <Card className="relative bg-background rounded-3xl p-12 shadow-2xl border-2 border-primary/20 transform hover:scale-105 transition-all duration-500">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-secondary/10 p-4 rounded-full mr-4">
                      <Star className="w-8 h-8 text-secondary" />
                    </div>
                    <p className="font-poppins text-xl text-muted-foreground">
                      Por tempo limitado, acesso completo por
                    </p>
                  </div>
                  
                  {/* Preço destacado */}
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-transparent rounded-lg blur"></div>
                    <div className="relative bg-gradient-to-r from-secondary/10 to-secondary/5 p-8 rounded-2xl border-2 border-secondary/20">
                      <div className="font-space text-7xl md:text-8xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        R$129,90
                      </div>
                      <p className="font-poppins text-lg text-muted-foreground">
                        Parcelamento em até <span className="text-secondary font-semibold">4x no cartão</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Elementos de valor */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="flex items-center justify-center p-4 bg-secondary/5 rounded-lg">
                      <Users className="w-6 h-6 text-secondary mr-3" />
                      <span className="font-poppins text-sm font-medium">Turma Limitada</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-secondary/5 rounded-lg">
                      <Shield className="w-6 h-6 text-secondary mr-3" />
                      <span className="font-poppins text-sm font-medium">Garantia Total</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-secondary/5 rounded-lg">
                      <Brain className="w-6 h-6 text-secondary mr-3" />
                      <span className="font-poppins text-sm font-medium">Metodologia IA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* CTA Principal MEGA ATRATIVO */}
            <div className="relative inline-block animate-scale-in">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-lg opacity-60 animate-pulse-slow"></div>
              
              {/* Botão principal */}
              <Button 
                onClick={() => window.open('https://payment-link-v3.pagar.me/pl_xjrb873o5ZQ12GGirf02GkzEWgyOw9Yn', '_blank')}
                className="relative font-space text-xl md:text-2xl px-16 py-8 h-auto bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary transform hover:scale-110 transition-all duration-500 shadow-2xl group rounded-2xl"
              >
                <div className="flex items-center">
                  <Rocket className="w-8 h-8 mr-4 group-hover:animate-bounce" />
                  <span>Sim, eu quero dominar o marketing de plataformas</span>
                  <Sparkles className="w-8 h-8 ml-4 group-hover:animate-spin" />
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-pulse group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </div>
            
            {/* Urgência */}
            <div className="mt-8 flex items-center justify-center text-secondary-foreground/80">
              <Clock className="w-5 h-5 mr-2 animate-pulse" />
              <span className="font-poppins text-sm">
                Restam apenas algumas vagas • Inscrições encerram em breve
              </span>
            </div>
          </div>
        </div>
      </section>

     
                
                {/* Trust indicators */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex items-center justify-center p-4 bg-background/50 backdrop-blur rounded-lg">
                    <Shield className="w-5 h-5 text-secondary mr-2" />
                    <span className="font-poppins text-sm font-medium">100% Seguro</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-background/50 backdrop-blur rounded-lg">
                    <Clock className="w-5 h-5 text-secondary mr-2" />
                    <span className="font-poppins text-sm font-medium">Reembolso Rápido</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-background/50 backdrop-blur rounded-lg">
                    <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                    <span className="font-poppins text-sm font-medium">Sem Complicação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary p-4 z-50 md:hidden">
        <Button 
          onClick={() => window.open('https://payment-link-v3.pagar.me/pl_xjrb873o5ZQ12GGirf02GkzEWgyOw9Yn', '_blank')}
          className="w-full font-space bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          Quero dominar o marketing de plataformas
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
