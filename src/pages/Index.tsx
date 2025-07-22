import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import marketingPlatforms from "@/assets/marketing-platforms.jpg";
import strategyGrowth from "@/assets/strategy-growth.jpg";
import innovationTech from "@/assets/innovation-tech.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-space text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Quem não sabe criar estratégia,{" "}
              <span className="text-secondary">vive apagando incêndio.</span>
            </h1>
            <p className="font-space text-xl md:text-2xl mb-4 text-foreground">
              Aprenda a dominar o marketing de plataformas com quem desenha o futuro do mercado.
            </p>
            <p className="font-poppins text-lg md:text-xl mb-8 text-muted-foreground">
              Um curso intensivo e prático para transformar sua marca em um ecossistema de alto impacto.
            </p>
            <Button 
              onClick={() => scrollToSection('professores')}
              className="font-space text-lg px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Quero aprender com os melhores
            </Button>
          </div>
        </div>
      </section>

      {/* Premissa Inicial */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-space text-3xl md:text-4xl font-bold mb-8 text-primary-foreground">
                  Por que esse curso existe?
                </h2>
                <div className="space-y-6 text-primary-foreground">
                  <p className="font-poppins text-lg">
                    Todo mundo já entendeu: <strong>o marketing mudou.</strong>
                    <br />Mas quase ninguém sabe como agir nesse novo contexto.
                  </p>
                  <p className="font-poppins text-lg">
                    As plataformas definem o comportamento do consumidor.
                    <br />E marcas que não entendem isso acabam perdidas, tentando viralizar enquanto perdem dinheiro e relevância.
                  </p>
                  <p className="font-poppins text-lg">
                    Este curso é para quem quer <span className="text-secondary font-semibold">jogar o jogo certo</span>:
                    <br />conectar marca e comunidade, escalar resultados e crescer com inteligência.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src={marketingPlatforms} 
                  alt="Marketing de Plataformas" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-space text-3xl md:text-4xl font-bold mb-6">
                O que você vai aprender?
              </h2>
              <p className="font-poppins text-lg text-muted-foreground">
                Três módulos para te fazer pensar e agir como estrategista de verdade:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-8">
                  <div className="h-4 w-4 bg-secondary rounded-full mb-6"></div>
                  <h3 className="font-space text-xl font-bold mb-4">
                    Módulo 1: Magnetismo de Mercado
                  </h3>
                  <p className="font-poppins text-muted-foreground mb-4">
                    Aprenda a se tornar inesquecível em marketplaces e plataformas sociais.
                  </p>
                  <ul className="font-poppins text-sm space-y-2">
                    <li>• Atração com SEO e visual storytelling</li>
                    <li>• Estratégias de visibilidade em feeds de alto fluxo</li>
                    <li>• Posicionamento de marca que converte</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-8">
                  <div className="h-4 w-4 bg-secondary rounded-full mb-6"></div>
                  <h3 className="font-space text-xl font-bold mb-4">
                    Módulo 2: Alquimia da Retenção
                  </h3>
                  <p className="font-poppins text-muted-foreground mb-4">
                    Transforme cliques em relacionamento duradouro.
                  </p>
                  <ul className="font-poppins text-sm space-y-2">
                    <li>• Gamificação e fidelização em ambientes multi-vendedor</li>
                    <li>• Reputação como motor de crescimento</li>
                    <li>• Jornada do cliente como diferencial competitivo</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-8">
                  <div className="h-4 w-4 bg-secondary rounded-full mb-6"></div>
                  <h3 className="font-space text-xl font-bold mb-4">
                    Módulo 3: Catalisador de Conversões
                  </h3>
                  <p className="font-poppins text-muted-foreground mb-4">
                    Venda com inteligência e consistência.
                  </p>
                  <ul className="font-poppins text-sm space-y-2">
                    <li>• Psicologia do consumo digital</li>
                    <li>• Estratégias de preço e funil de vendas</li>
                    <li>• Otimização para escalar resultados</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pra quem é */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-foreground">
              Pra quem é (e pra quem não é)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-background p-8 rounded-lg">
                <h3 className="font-space text-2xl font-bold mb-6 text-foreground">
                  Este curso é para você se...
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-poppins text-foreground">
                      Já atua com marketing e quer pensar estratégia além do óbvio
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-poppins text-foreground">
                      Quer migrar para o mercado digital com clareza e visão de futuro
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-poppins text-foreground">
                      Trabalha com tecnologia, inovação ou vendas e quer conectar com comportamento real de consumo
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary p-8 rounded-lg">
                <h3 className="font-space text-2xl font-bold mb-6 text-primary-foreground">
                  Não é para você se...
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-poppins text-primary-foreground">
                      Procura um curso técnico ou ferramenta específica
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-poppins text-primary-foreground">
                      Quer fórmula mágica para viralizar
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-poppins text-primary-foreground">
                      Não está disposto a repensar o que entende por marketing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial da metodologia */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={innovationTech} 
                  alt="Metodologia Inovadora" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-left">
                <h2 className="font-space text-3xl md:text-4xl font-bold mb-6">
                  O diferencial da metodologia
                </h2>
                <p className="font-poppins text-lg mb-6 text-muted-foreground">
                  A única escola de marketing com metodologia validada por inteligência artificial, 
                  conectando 3 dimensões em cada aula: <strong>Individual, Coletiva e Artificial.</strong>
                </p>
                <p className="font-poppins text-lg mb-6 text-muted-foreground">
                  Tudo isso apoiado na <strong>Teoria AEIOU</strong>: 
                  Estratégia, Inovação, Negócios, Tecnologia e Comunicação.
                </p>
                <p className="font-poppins text-lg text-secondary-foreground">
                  Criada por quem desenvolve o marketing do futuro no Brasil — 
                  e já impactou mais de <span className="text-secondary font-bold">500 profissionais</span> em todo o país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professores */}
      <section id="professores" className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
              Quem te ensina
            </h2>
            
            <div className="space-y-12">
              <Card className="bg-background border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-space text-2xl font-bold text-secondary-foreground">SM</span>
                    </div>
                    <div>
                      <h3 className="font-space text-2xl font-bold mb-4">Silvio Meira</h3>
                      <p className="font-poppins text-muted-foreground mb-4">
                        Cientista-chefe da TDS Company, fundador do Porto Digital, professor emérito da UFPE 
                        e conselheiro de gigantes como Magalu, CI&T e MRV. Uma das mentes mais respeitadas em inovação no Brasil.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-space text-2xl font-bold text-secondary-foreground">RP</span>
                    </div>
                    <div>
                      <h3 className="font-space text-2xl font-bold mb-4">Rosário Pompéia</h3>
                      <p className="font-poppins text-muted-foreground mb-4">
                        Fundadora da LeFil e estrategista de marketing com mais de 100 campanhas entregues para marcas líderes. 
                        Mestra em Comunicação, especialista em estruturação de times e insights de consumo digital.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <p className="font-space text-xl text-center mt-12 text-primary-foreground">
              Quando você aprende com quem construiu o presente, 
              <span className="text-secondary"> está se preparando para o que vem depois dele.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-12">
              Como funciona na prática
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={strategyGrowth} 
                  alt="Como Funciona" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-space text-xl font-bold mb-3">Formato:</h3>
                    <p className="font-poppins text-muted-foreground">
                      100% online e ao vivo (15 e 16 de agosto)
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-space text-xl font-bold mb-3">Plataforma:</h3>
                    <p className="font-poppins text-muted-foreground">
                      Plataforma colaborativa com IA ativa
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-space text-xl font-bold mb-3">Dinâmica:</h3>
                    <p className="font-poppins text-muted-foreground">
                      Exposições, perguntas, IA sintetizando o pensamento coletivo
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    onClick={() => window.open('https://www-lefil-com-br.rds.land/lp-ementa-curso-estrategia-mkt-plataformas-2025', '_blank')}
                    variant="outline" 
                    className="font-space border-2 border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    BAIXAR EMENTA
                  </Button>
                  <p className="font-poppins text-sm text-muted-foreground mt-4">
                    Para saber mais sobre o curso, baixe a ementa ao clicar no botão acima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preço e Oferta */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-8 text-secondary-foreground">
              O que vale mais: seguir tentando sozinho ou aprender em 2 dias o que pode mudar sua atuação inteira?
            </h2>
            
            <div className="bg-background rounded-lg p-8 mb-8">
              <p className="font-poppins text-lg mb-4 text-muted-foreground">
                Por tempo limitado, acesso completo por
              </p>
              <div className="font-space text-5xl md:text-6xl font-bold mb-4 text-foreground">
                R$129,90
              </div>
              <p className="font-poppins text-muted-foreground">
                Parcelamento em até 4x no cartão.
              </p>
            </div>
            
            <Button 
              onClick={() => window.open('https://payment-link-v3.pagar.me/pl_xjrb873o5ZQ12GGirf02GkzEWgyOw9Yn', '_blank')}
              size="lg"
              className="font-space text-lg px-12 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Sim, eu quero dominar o marketing de plataformas
            </Button>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-space text-2xl md:text-3xl font-bold mb-6">
              Garantia / Confiança
            </h2>
            <p className="font-poppins text-lg text-muted-foreground">
              Se após a primeira aula você sentir que o curso não entrega o que promete, 
              você pode solicitar reembolso integral. <strong>Sem perguntas.</strong>
            </p>
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
