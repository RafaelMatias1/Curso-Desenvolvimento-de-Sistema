import './InfPagamento.css';
import imagem_cafe from './imagem/cafe.png'
import imagem_remover from './imagem/remove.png'

function InfPagamento () {

  

  return (  
    <div>
      <div className="container">
        <div className='cima'>  
          <div className='perfil'>

          </div>
        </div>
        <div className='meio'>
          <div className='local'>

            <div className='input'>

              <input placeholder='Nome Completo' className='input1'/><input placeholder='CEP' className='input2'/>
            </div>
            <div className='input'>

              <input placeholder='Estado' className='input3'/><input placeholder='Cidade' className='input4'/>

            </div>
            <div className='input'>

              <input placeholder='Bairro' className='input3'/><input placeholder='Numero da Rua' className='input4'/>

            </div>
            <div className='input'>

              <input placeholder='DDD' className='input5'/><input placeholder='Telefone' className='input6'/>

            </div>

          </div>
          <div className='historico'>
            <div className='compra'>
              <div className='produto'>
                <div className='esquerda'>
                  <img src={imagem_cafe} className='imagem_cafe' /> 
                </div>
                <div className='direita'>
                  <div className='d_cima'>
                    PRÉ TREINO PANIC 450G - ADAPTOGEN SCIENCE (MAÇA VERDE) - Maçã Verde
                  </div>
                  <div className='d_baixo'>
                    <div className='d_b_esquerda'>
                      R$125,75
                    </div>
                    <div className='d_b_direita'>
                      <img src={imagem_remover}/>
                    </div>
                  </div>
                </div>
              </div>           
            </div>
            <div className='botao'>
              <button className='buton'>Prosseguir</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default InfPagamento;