'use client' 
 
export default function Multiplicar() {   
  return (
    <>
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let resultado = num1 * num2;
        document.getElementById("resultado").value = resultado;   
    </>    
  )
};