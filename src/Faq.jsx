

import Nullstack from "nullstack"
import AccondioFaq from './AccondioFaq'

class Faq extends Nullstack {

  
    render() {
        return(
            <section class="faq">
            <div class="headline">
                <h2>
                    <span>PERGUNTAS MAIS</span>
                    <br />
                    <span>FREQUENTES</span>
                </h2>
            </div>

            <div class="cordeon" id="accordion">
            
            <AccondioFaq number="1" title="Qual é a duração do curso?" 
                content="O Curso Full Stack Turbo possui uma carga horária total de 120 horas, distribuídas em aulas 100% online que você pode acessar no seu próprio ritmo." />
            <AccondioFaq number="2" title="Como funciona o acesso ao curso?" 
                content="Após a compra, você terá acesso imediato e vitalício ao curso através da plataforma Hotmart. Isso permite que você revise o conteúdo sempre que desejar." />
            <AccondioFaq number="3" title="O curso oferece certificado?" 
                content="Sim, ao concluir o curso, você receberá um certificado de 120 horas, que poderá ser adicionado ao seu currículo e perfil profissional." />

            <AccondioFaq number="4" title="Preciso ter conhecimentos prévios em programação?" 
                content="Não é necessário ter conhecimentos prévios. O Curso Full Stack Turbo é estruturado para atender desde iniciantes até profissionais que desejam aprofundar seus conhecimentos." /> 
            
            <AccondioFaq number="5" title="Terei suporte durante o curso?" 
                content="Sim, você terá suporte total da nossa equipe, além de acompanhamento direto do mentor Alisson Suassuna. Também poderá participar da comunidade exclusiva no Discord para tirar dúvidas, promover a troca de conhecimentos e a criação de um networking entre os alunos." />

            <AccondioFaq number="6" title="O que são os 30 projetos reais mencionados?" 
                content="São projetos práticos que você desenvolverá ao longo do curso, aplicando o que aprendeu em situações do mundo real. Esses projetos ajudam a consolidar seu conhecimento e a preparar você para o mercado de trabalho." />  
            
            <AccondioFaq number="7" title="Existe uma garantia de satisfação?" 
                content="Sim, oferecemos uma garantia de satisfação de 7 dias. Se você não estiver satisfeito com o curso, poderá solicitar o reembolso dentro desse período." /> 
    
            <AccondioFaq number="8" title="O curso é atualizado regularmente?" 
                content="Sim, o conteúdo do curso é revisado e atualizado regularmente para garantir que você esteja aprendendo as tecnologias e práticas mais atuais do mercado, tudo SEM custos adicionais." />
            </div>

           
           
            
        </section>

        )
    };
}

export default Faq