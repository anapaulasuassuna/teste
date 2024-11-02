import Nullstack from 'nullstack'
import './Application.css'

class SlideShow extends Nullstack {

    previewSlider() {
        console.log('Passou')
        const element = document.getElementById("slide-01");
            element.scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
            block: "nearest",
        });
    }

    nextSlider() {
        const element = document.getElementById("slide-05");
            element.scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
            block: "nearest",
        });
    };



  render({title, subTitle}) {
    return (
     
        <section id="depoimentos">
        <div class="headline">
            <h2>
                <span>{title}</span>
                <br />
                <span>{subTitle}</span>
                
            </h2>
        </div>

        <div class="arrow-right">
            <img onclick={this.previewSlider} src="/arrow-right-svgrepo-com.svg" alt="" style="transform: rotate(3.142rad);" />
            <img onclick={this.nextSlider} src="/arrow-right-svgrepo-com.svg" alt="" />
        </div>
        
        <div class="slider">
            <div class="slide-card" id="slide-01">
                <div class="img-card">
                    <div class="alu-name">
                        Gustavo
                    </div>
                </div>

                <div class="dep-card">
                    <p>
                        "...Contratado com apenas 2 meses de curso, vale a pena pessoal..."
                    </p>
                </div>
            </div>
            <div class="slide-card" id="slide-02">
                <div class="img-card">
                    <div class="alu-name">
                        Renan Silva
                    </div>
                </div>

                <div class="dep-card">
                    <p>
                        "...Peguei meu primeiro rojeto de trabalho, o cliente fechou comigo hoje..."
                    </p>
                </div>
            </div>
            <div class="slide-card" id="slide-03">
                <div class="img-card">
                    <div class="alu-name">
                        Ari
                    </div>
                </div>

                <div class="dep-card">
                    <p>
                        "lá pra aula 80 consegui meu primeiro trampo com React, vale muito a pena pessoal"
                    </p>
                </div>
            </div>
            <div class="slide-card" id="slide-04">
                <div class="img-card">
                    <div class="alu-name">
                        João Amorin
                    </div>
                </div>

                <div class="dep-card">
                    <p>
                        "Consegui um emprego apenas um mês após o curso e me recoloquei no mercado"
                    </p>
                </div>
            </div>
            <div class="slide-card" id="slide-05">
                <div class="img-card">
                    <div class="alu-name">
                        João Amorin
                    </div>
                </div>

                <div class="dep-card">
                    <p>
                        "Consegui um emprego apenas um mês após o curso e me recoloquei no mercado"
                    </p>
                </div>
            </div>
        </div>
        </section>
       
    )
  }

}

export default SlideShow



