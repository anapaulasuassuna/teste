import Nullstack from "nullstack"

class AccondioFaq extends Nullstack {

    isvisivel = false

  clicou() {
    this.isvisivel = true
    console.log('Clicou aqui', this.isvisivel)
  }

    render({number, title, content}) {
        return(
            <div class="line faq" onclick={{ isvisivelFaq: !this.isvisivelFaq}}>
                <div class="cordeon-header" >
                    <div class="number">{number}</div>
                    <div class="question">
                    {title}
                    </div>
                </div>

                <div class={[`cordeon-body`, this.isvisivelFaq == true ? `cordeon-body active` : '']}>
                
                    <div class="text-block">
                    {content}
                    </div>
                </div>
        </div>

        )
    };
}

export default AccondioFaq
