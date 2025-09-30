function operar(operacion) {
    const n1 = parseFloat(document.getElementById("num1").value) || 0;
    const n2 = parseFloat(document.getElementById("num2").value) || 0;
    let resultado;
  
    switch (operacion) {
      case '+':
        resultado = n1 + n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case '*':
        resultado = n1 * n2;
        break;
      case '/':
        resultado = n2 !== 0 ? n1 / n2 : 'Error: División por 0';
        break;
      default:
        resultado = 'Operación no válida';
    }
  
    document.getElementById("resultado").textContent = resultado;
  }
  
  function operar(operacion) {
    const n1 = parseFloat(document.getElementById("num1").value) || 0;
    const n2 = parseFloat(document.getElementById("num2").value) || 0;
    let resultado;
  
    switch (operacion) {
      case '+':
        resultado = n1 + n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case '*':
        resultado = n1 * n2;
        break;
      case '/':
        resultado = n2 !== 0 ? n1 / n2 : 'Error: División por 0';
        break;
      default:
        resultado = 'Operación no válida';
    }
  
    document.getElementById("resultado").textContent = resultado;
  }
  
  // Capturar tecla en inputs para operar
  document.querySelectorAll('#num1, #num2').forEach(input => {
    input.addEventListener('keydown', (event) => {
      const ops = ['+', '-', '*', '/'];
      if (ops.includes(event.key)) {
        event.preventDefault(); // evitar que el símbolo se escriba en el input
        operar(event.key);
      }
    });
  });
  
