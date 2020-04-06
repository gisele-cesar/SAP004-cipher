const cipher = {
  encode (deslocamento, textoNaoProcessado) {
    textoNaoProcessado = textoNaoProcessado.toUpperCase();
    let mensagemNaoProcessada = [];
    let mensagemProcessada = "";
    
    deslocamento = Number(deslocamento);

    for (let i=0;i<textoNaoProcessado.length;i++) {
      mensagemNaoProcessada[i] = (textoNaoProcessado.charAt(i));
      mensagemNaoProcessada[i] = (((mensagemNaoProcessada[i].charCodeAt(0)-65 + deslocamento) % 26) + 65);
      
      if(textoNaoProcessado[i] != " ")
        mensagemProcessada += String.fromCharCode(mensagemNaoProcessada[i]);
      else
        mensagemProcessada += " ";
        
       /* if(textoNaoProcessado.charCodeAt[i] <= 90 && textoNaoProcessado.charCodeAt[i] >= 65)
        {
          mensagemProcessada += String.fromCharCode(mensagemNaoProcessada[i]);
        }        
        else
        {
          mensagemProcessada += textoNaoProcessado.charAt[i]
        }   */     
    }
    return mensagemProcessada;
  },
  decode (deslocamento, textoNaoProcessado) {
    textoNaoProcessado = textoNaoProcessado.toUpperCase();
    let mensagemNaoProcessada = [];
    let mensagemProcessada = "";
    
    deslocamento = Number(deslocamento);

    for (let i=0;i<textoNaoProcessado.length;i++) {
      mensagemNaoProcessada[i] = (textoNaoProcessado.charAt(i));
      mensagemNaoProcessada[i] = (((mensagemNaoProcessada[i].charCodeAt(0)-90 - deslocamento) % 26) + 90);
      
      if(textoNaoProcessado[i] != " ")
        mensagemProcessada += String.fromCharCode(mensagemNaoProcessada[i]);
      else
        mensagemProcessada += " ";
    }
    return mensagemProcessada;
  }
   };


export default cipher;
