let count = 0; // Contador inicial

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn'); // variável para todos os botões pertencentes a classe btn

btns.forEach(function (btn){ //Estrutura de repetição forEach para executar a função a cada click no botão (decremento, reset e incremento)
  btn.addEventListener('click', function(e){ //Método para aguardar a chamada através do click nos botões (btn)
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList; //Variável que retorna uma DOMlist (array) 
    if(styles.contains('decrease')){ // Se clicarmos no decremento o contador diminui
      count--;
    }else if(styles.contains('increase')){ // Se clicarmos no incremento o contador aumenta
      count++;
    }else { //Contador inicia-se com 0
      count = 0;
    }if(count > 0) { //Se o contador for maior que zero o número fica verde
      value.style.color = 'green';
    }if(count < 0){ //Se o contador for menor que zero o número fica vermelho
      value.style.color = 'red';
    }if(count === 0){ //Se o contador for igual a zero o número fica cinza escuro
      value.style.color = '#222';
    }
    value.textContent = count; //Método que mostra cada novo valor (atualizado) na tela
  });
});