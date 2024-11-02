import './CallToAction.css'

export default function CallToAction() {
    return (
        <section class="cta" id="cta">

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

                    <img src="/logos-cartões.png" alt="cartões de crédito" />
                </div>

                <button class="btn-s">
                    Inscreva-se Agora
                </button>
            </div>
        </section> 
    )
}