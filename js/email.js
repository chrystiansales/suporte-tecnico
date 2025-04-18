document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("3DSagyWzbczF7-hIf"); // Sua chave pública

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Captura dos valores
      const nome = document.getElementById("nome").value.trim();
      const escola = document.getElementById("escola").value.trim();
      const email = document.getElementById("email").value.trim();
      const modulo = "Educação";
      const tipo = document.getElementById("tipo").value.trim();
      const datahora = new Date().toLocaleString();
      const mensagem = document.getElementById("mensagem").value.trim();

      // Validações
      if (nome.length < 3) {
        updateStatus("Nome inválido (mínimo 3 letras)", "red");
        return;
      }

      if (escola.length < 3) {
        updateStatus("Nome inválido (mínimo 3 letras)", "red");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        updateStatus("Email inválido.", "red");
        return;
      }

      if (mensagem.length < 10) {
        updateStatus("Mensagem muito curta (mínimo 10 caracteres).", "red");
        return;
      }

      // Parâmetros para o template
      const templateParams = {
        nome: nome,
        escola: escola,
        email: email,
        datahora: datahora,
        modulo: modulo,
        tipo: tipo,
        mensagem: mensagem,
      };

      // Envio do e-mail
      emailjs
        .send("service_wflw2hq", "template_46j8pi5", templateParams)
        .then(() => {
          updateStatus("E-mail enviado com sucesso!", "green");
          document.getElementById("contactForm").reset();
        })
        .catch((error) => {
          console.error("Erro:", error);
          updateStatus("Falha no envio. Verifique o console.", "red");
        });
    });

  function updateStatus(text, color) {
    const statusElement = document.getElementById("status");
    statusElement.textContent = text;
    statusElement.style.color = color;
    setTimeout(() => (statusElement.textContent = ""), 5000);
  }
});
