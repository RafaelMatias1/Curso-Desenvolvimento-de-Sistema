function MathChallenge(num: number): number {
    // Converte o número para uma string
    let digits = num.toString();
  
    // Encontra o primeiro dígito que não está em ordem crescente
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
      i--;
    }
  
    // Se não houver um dígito fora de ordem, o número não tem permutações maiores
    if (i < 0) {
      return -1;
    }
  
    // Encontra o menor dígito maior que o dígito fora de ordem
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
      j--;
    }
  
    // Troca os dígitos fora de ordem e o menor dígito maior
    let temp = digits[i];
    digits[i] = digits[j];  
    digits[j] = temp;
  
    // Ordena os dígitos restantes em ordem crescente
    digits = digits.substring(0, i + 1) + digits.substring(i + 1).split('').sort().join('');
  
    // Converte a string de dígitos de volta para um número
    return parseInt(digits);
  }