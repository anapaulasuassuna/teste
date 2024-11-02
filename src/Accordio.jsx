import Nullstack from "nullstack"

class Accordio extends Nullstack {

    isvisivel = false

  clicou() {
    this.isvisivel = true
    console.log('Clicou aqui', this.isvisivel)
  }

    render({number, title, content, src1, src2, src3, alt1, alt2, alt3}) {
        return(
            <div class="line" onclick={{ isvisivel: !this.isvisivel}}>
                <div class={[`cordeon-header`, this.isvisivel == true ? `cordeon-header active` : '']}>
                    <div class="number">{number}</div>
                    <div class="section-name" >{title}</div>
                </div>
    
                <div class={[`cordeon-body`, this.isvisivel == true ? `cordeon-body active` : '']}>
                    <div class="text-block">
                        {content} 
                    </div>
    
                    <div class="images-block">
                        <img src={src1} alt={alt1}/>
                        <img src={src2} alt={alt2}/>
                        <img src={src3} alt={alt3}/>
                    </div>
                </div>
            </div>

        )
    };
}

export default Accordio

//   <div class="line" onclick={{ isvisivel: !this.isvisivel}}>
//   <div class={[`cordeon-header`, this.isvisivel == true ? `cordeon-header active` : '']}>
//       <div class="number">1</div>
//       <div class="section-name" >Introdução</div>
//   </div>

//   <div class={[`cordeon-body`, this.isvisivel == true ? `cordeon-body active` : '']}>
//       <div class="text-block">
//           Um belo texto explicativo com 
//           algumas poucas palavras 
//       </div>

//       <div class="images-block">
//           <img src="/vscode.png" alt="html tipscode"/>
//           <img src="/Chrome.png" alt="css tipscode"/>
//       </div>
//   </div>
// </div>