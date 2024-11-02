import Nullstack from 'nullstack'
import Accordio from './Accordio'
import SlideShow from './SlideShow'
import Footer from './Footer'
import Faq from './Faq'


import CallToAction from './course-full-stack-turbo/CallToAction'
//import Header from './SalesPageFst/Header'

class Home extends Nullstack {

 

  render() {
    return (
      <>

        {/* <Header /> */}

        <header>
            <div class="logo">
                <img src="/tipscode-logo.webp" alt="logo da tipscode" />
            </div>

            <nav>
                <ul>
                    <li>
                        <a href="#sobre">Curso</a>
                    </li>
                    <li>
                        <a href="#metodo">Método</a>
                    </li>
                    <li>
                        <a href="#beneficios">Benefícios</a>
                    </li>
                    <li>
                        <a href="#grade">Grade</a>
                    </li>
                    <li>
                        <a href="#depoimentos">Depoimentos</a>
                    </li>
                    <li>
                        <a href="#mentor">Mentor</a>
                    </li>
                    <li>
                        <a href="#cta" class="btn">Inscreva-se Agora</a>
                    </li>
                </ul>
            </nav>

            <a href="https://api.whatsapp.com/send/?phone=5588999073834&text=Estou+vindo+do+site%21&type=phone_number&app_absent=0" target="_blank" class="wpp-btn">
                <img src="/wpp-icon.png" alt="WhatsApp Icon" />

                <span class="call">
                    Chamar
                </span>
            </a>
        </header>

        <section class="hero">
   
        <div class="col main-col">
            <div class="headline">
                <div class="title">
                    <span>FST</span>
                    <span>2.0</span>
                </div>

                <h1>
                    <span>SUPERE LIMITES E ACELERE NA PROGRAMAÇÃO</span>
                    <span>COM O FULL STACK TURBO</span>
                </h1>

                <p>
                Bem-vindo ao Full Stack Turbo,  o motor de alta performance que vai te impulsionar para a linha de chegada da programação moderna. Em vez de andar a passos lentos, você vai dominar rapidamente tecnologias como JavaScript, ReactJS, NodeJS e ExpressJS para criar sites dinâmicos e aplicações robustas. Seja o especialista que as empresas estão buscando!
                </p>
            </div>

            <button class="btn-s" onclick="location.href='#cta'">
                Inscreva-se Agora
            </button>
        </div>

        <div class="col"></div>
        <div class="col">
            <div class="video">
                <video autoplay muted plays-inline loop src="/video-test.mp4" class="clip" type="mp4"></video>
            </div>
        </div>
        </section>

        <div class="marquee">
          <div class="text-wrapper">
              <img src="/HTML.png" alt="html logo" />
              <img src="/CSS.png" alt="css logo"/>
              <img src="/BOOTSTRAP.png" alt="bootstrap logo"/>
              <img src="/JAVASCRIPT.png" alt="javascript logo"/>
              <img src="/REACT.JS.png" alt="react js logo"/>
              <img src="/NODE.JS.png" alt="node js logo"/>
              <img src="/EXPRESS.JS.png" alt="express js logo"/>
              <img src="/EJS.png" alt="ejs logo"/>
              <img src="/SQL.png" alt="sql logo"/>
              <img src="/MONGODB.png" alt="mongo db logo"/>
              <img src="/MONGOOSE.png" alt="mongoose logo"/>
              <img src="/GIT.png" alt="git logo"/>
              <img src="/GITHUB.png" alt="github logo"/>
              <img src="/TERMINAL LINUX.png" alt="linux logo"/>
          </div>
        </div>

        <section class="sobre" id="sobre">
       
        <div class="col main-col">
            <div class="headline">

                <h2>
                    <span>MAIS SOBRE O</span>
                    <br />
                    <span>FULL STACK TURBO</span>
                </h2>

                <p>
                O Full Stack Turbo já colocou mais de 3 mil desenvolvedores na pista, saindo do zero direto para a linha de chegada como profissionais prontos para o mercado. Você está começando ou mudando de carreira? Esse é o seu ponto de partida.
                <br/><br/>
                    <br /> <br />
                    Projetado para ser o motor de alta performance da sua carreira profissional, o Full Stack Turbo oferece um plano de aprendizagem progressivo, te guiando passo a passo pelos fundamentos até a maestria em desenvolvimento web. Cada fase é otimizada para que você avance em velocidade máxima, aprendendo a enfrentar desafios e criar soluções inovadoras que colocam você à frente da concorrência.
                </p>
            </div>

            <button class="btn-s" onclick="location.href='#cta'">
                Inscreva-se Agora
            </button>
        </div>

        <div class="col"></div>

        <div class="col">
            <img src="/mais-sobre-o-turbo.png" alt="o motor do full stack turbo" />
        </div>
        </section>
        
        <section class="step-by-step" id="metodo">

          <div class="col">
              <img src="/img-step-by-step.png" alt="Sobre o método step-by-step" />
          </div>

          <div class="col"></div>


            <div class="col main-col">
              <div class="headline">

              <h2>
                  <span>O MÉTODO</span>
                  <br />
                  <span>STEP-BY-STEP</span>
              </h2>

              <p>
                  Nosso método validado, Step by Step, é composto por 5 fases chamadas de STEP. Em cada step, você terá 45 dias de estudos, dedicando de 30 a 60 minutos por dia, utilizando a técnica de pomodoro para melhorar sua eficiência no estudo.
                  <br />
                  <br />
                  Todos os detalhes de como usar esse método estão em uma aula bem detalhada. Com o método Step by Step, é mais fácil fazer o que tem que ser feito. É quase impossível errar e você nunca fica perdido, sem saber o que fazer.
                  <br />
                  <br />
                  No Full Stack Turbo, você não apenas adquirirá conhecimento teórico, mas também colocará em prática cada conceito, garantindo um entendimento profundo e habilidades prontas para o mercado.
              </p>
            </div>

            <button class="btn-s" onclick="location.href='#cta'">
                Inscreva-se Agora
            </button>
          </div>
        </section>

        <div class="marquee">
          <div class="text-wrapper">
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
            <h3>o start para o seu futuro</h3>
          </div>
        </div>

        <section class="pq-fazer" id="beneficios">
          <div class="col col-1">
              <div class="headline">

                  <h2>
                      <span>POR QUE FAZER O</span>
                      <br />
                      <span>FULL STACK TURBO</span>
                  </h2>

                  <p>
                      É fato que o mercado de trabalho está, a cada dia, com várias novas oportunidades. Então, você precisa de preparo, precisa dominar os requisitos necessários e conseguir se destacar entre tantos concorrentes.
                      <br />
                      <br />
                      Hoje, se você quer oferecer um serviço ou produto no mercado digital, precisa de profissionais capazes de desenvolver o necessário para que isso aconteça.
                      <br />
                      <br />
                      Nenhum grande programador começou do topo. Então, você precisa de um ponto de partida, e o Full Stack Turbo é ideal para fornecer as ferramentas, o conhecimento e a prática necessários para desbravar esse mundo.

                  </p>
              </div>
          </div>
          <div class="col col-2">
              <div class="salary">
                  <div class="seniority">
                      Dev Junior
                  </div>
                  <div class="bar-bg">
                      <div class="bar">
                          R$ 3.150,00
                      </div>
                  </div>
              </div>
          </div>
          <div class="col col-3">
              <div class="salary">
                  <div class="seniority">
                      Dev Pleno
                  </div>
                  <div class="bar-bg">
                      <div class="bar">
                          R$ 5.850,00
                      </div>
                  </div>
              </div>
          </div>
          <div class="col col-4">
              <div class="salary">
                  <div class="seniority">
                      Dev Senior
                  </div>
                  <div class="bar-bg">
                      <div class="bar">
                          R$ 9.750,00
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <section class="acesso">
          <div class="acesso-content">
              <div class="headline acesso-headline">
                  <h2>
                      <span>VEJA O QUE SÓ UM</span>
                      <br />
                      <span>ALUNO TEM ACESSO</span>
                  </h2>
              </div>

          
              <div class="card card-1">
                  <h4>Metodologia Step by Step</h4>
              </div>

              <div class="card card-2">
                  <h4>30 projetos reais para colocar em prática</h4>
              </div>

              <div class="card card-3">
                  <h4>Acompanhamento direto com o professor</h4>
              </div>

              <div class="card card-4">
                  <h4>Certificado de 120 horas</h4>
              </div>

              <div class="card card-5">
                  <h4>Suporte  total   da nossa equipe</h4>
              </div>

              <div class="card card-6">
                  <h4>Acesso Imediado após a compra</h4>
              </div>

              <div class="card card-7">
                  <h4>Aulas 100% online</h4>
              </div>

              <div class="card card-8">
                  <h4>Material de apoio para cada módulo</h4>
              </div>

            
              <div class="ec-1 ec"></div>
              <div class="ec-2 ec"></div>
              <div class="ec-3 ec"></div>
          </div>
        </section>

        <section class="grade" id="grade">
          <div class="headline">
              <h2>
                  <span>A GRADE MAIS CURRICULAR</span>
                  <br />
                  <span>COMPLETA DO MERCADO</span>
              </h2>
          </div>

          <div class="cordeon" id="accordion">
             
              <Accordio number='1' title="Introdução" content="Um belo texto explicativo com algumas poucas palavras" src1='/vscode.png' alt1="VsCode" src2='/Chrome.png' alt2='Chrome' />
              <Accordio number='2' title="Web design" content="Um belo texto explicativo com algumas poucas palavras" src1='/BOOTSTRAP.png' alt1="Bootstrap" src2='/CSS.png' alt2='CSS3' src3="/HTML.png" alt3="HTML5" />
              <Accordio number='3' title="Front-End" content="Um belo texto explicativo com algumas poucas palavras" src1='/JAVASCRIPT.png' alt1="javascript" src2='/REACT.JS.png' alt2='Reactjs' />
              <Accordio number='4' title="Back-End" content="Um belo texto explicativo com algumas poucas palavras" src1='/NODE.JS.png' alt1="Nodejs" src2='/EJS.png' alt2='EJS' src3="/EXPRESS.JS.png" alt3="Expressjs" />
              <Accordio number='5' title="Banco de Dados" content="Um belo texto explicativo com algumas poucas palavras" src1='/SQL.png' alt1="SQL" src2='/MONGODB.png' alt2='MongoDb' src3="/MONGOOSE.png" alt3="Mongoose" />
              <Accordio number='6' title="Ferramentas Dev" content="Um belo texto explicativo com algumas poucas palavras" src1='/GIT.png' alt1="Git" src2='/GITHUB.png' alt2='Github' src3="/terminal-linux.png" alt3="Terminal Linux" />
              <Accordio number='7' title="Bônus" content="Um belo texto explicativo com algumas poucas palavras" src1='/google-logo.png' alt1="google" src2='https://avatar.iran.liara.run/public/1' alt2='engenheiro facebook tipscode' src3="/fb-logo.png" alt3="Facebook" />
          </div>
        </section>

        <SlideShow title="O QUE DIZEM" subTitle="NOSSOS ALUNOS"/>

         <section id="mentor">
        <div class="mentor-title">
            <div class="headline mentor-headline">
                <h2>
                    <span>QUEM SERÁ O</span>
                    <br />
                    <span>SEU MENTOR</span>
                </h2>
            </div>
        </div>

        <div class="mentor-img">
            <div class="mentor-name-mobile">
                ALISSON <br /> SUASSUNA
            </div>
            <img src="/mentor.png" alt="Alisson Suassuna da TipsCode" />
        </div>
        <div class="mentor-content">
            <div class="divisor">

                <div class="mentor-name">
                    ALISSON
                </div>

                <div class="about">
                    <h4>1. FORMAÇÃO ACADÊMICA</h4>
                    <p>Com mais de 10 anos de experiência como desenvolvedor full stack, Alisson Suassuna é um líder reconhecido 
                        na área de tecnologia. Formado em Sistemas de Informação pela [Faculdade], Alisson combina conhecimento 
                        acadêmico com uma vasta experiência prática no mercado.</p>
                </div>
            </div>
            
            <div class="divisor">
                <div class="about">
                    <h4>2. MENTOR</h4>
                    <p>Alisson já mentorou mais de 2 mil alunos, ajudando cada um a alcançar seus objetivos profissionais. 
                        Seu compromisso com a educação de qualidade e o sucesso de seus alunos é um valor inegociável e 
                        alicerce de sua carreira como docente.</p>
                </div>
            </div>

            <div class="divisor">
                <div class="about">
                    <h4>3. MÉTODO</h4>
                    <p>Como fundador e CEO da TipsCode, Alisson desenvolveu o Método Step by Step, uma abordagem que transforma 
                        iniciantes em profissionais capacitados. Este método é a espinha dorsal do Curso Full Stack Turbo, 
                        garantindo que cada aluno tenha uma jornada de aprendizado estruturada e eficaz.</p>
                </div>
            </div>

            <div class="divisor">

                <div class="mentor-name">
                    SUASSUNA
                </div>

                <div class="about">
                    <h4>4. EXPÊRIENCIA</h4>
                    <p>Com mais de [X] projetos concluídos, Alisson traz toda uma experiência prática para suas aulas. 
                        Ele entende os desafios do mercado e está pronto para compartilhar suas estratégias e conhecimentos com você.
                    </p>
                </div>
            </div>
        </div>
        </section>

        {/* <section class="cta" id="cta">

            <div class="col col-ft">
                <div class="full item-1">
                    FULL
                </div>

                <div class="chamada item-2">
                    <div class="headline cta-headline">
                        <h2>
                            <span>INVISTA NO</span>
                            <br />
                            <span>SEU FUTURO</span>
                        </h2>
                    </div>
                </div>

                <div class="turbo item-3">
                    TURBO
                </div>
            </div>

            <div class="col col-s">
                <div class="stack">
                    STACK
                </div>
            </div>


            <div class="col main-col">
                <div class="headline">

                    <div class="title">
                        <span>FST</span>
                        <span>2.0</span>
                    </div>

                    <div class="price">
                        <p>De <span>R$497,00</span></p>
                        <h2>Por <span>12x</span> De <span>R$29,62</span></h2>
                        <p>Ou À Vista Por R$297,00</p>
                    </div>

                    <ul>
                        <li><span>.</span> Aulas 100% online</li>
                        <li><span>.</span> Material de Apoio</li>
                        <li><span>.</span> Mais de 30 projetos REAIS</li>
                        <li><span>.</span> Acompanhamento direto</li>
                        <li><span>.</span> Certificado de 120 horas</li>
                        <li><span>.</span> Acesso imediato a plataforma  Hotmart</li>
                        <li><span>.</span> comunidade Exclusiva no Discord</li>
                    </ul>

                    <img src="public/logos-cartões.png" alt="cartões de crédito" />
                </div>

                <button class="btn-s">
                    Inscreva-se Agora
                </button>
            </div>
        </section>  */}
        <CallToAction />

         <SlideShow title="Quem Indica" />

       <Faq />

        <Footer />
      </>
    )
  }

}

export default Home
