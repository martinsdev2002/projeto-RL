# R L Moda Masculina

Landing page institucional e comercial para a **R L Moda Masculina**, uma marca de roupas masculinas de grife. O projeto foi pensado para apresentar a curadoria da loja, transmitir exclusividade e incentivar o visitante a entrar em contato com um consultor.

 Objetivo

A página combina divulgação da marca, apresentação de produtos e captação de contatos. O visitante pode:

- Conhecer a proposta e os diferenciais da R L.
- Explorar uma seleção de produtos com imagens, descrições e preços.
- Favoritar produtos visualmente.
- Tirar dúvidas pelo FAQ expansível.
- Abrir conversas pelo WhatsApp, visitar o Instagram ou enviar um e-mail.
- Preencher um formulário de contato com validação dos campos.

 Tecnologias

- **HTML5:** estrutura semântica, acessível e otimizada para SEO básico.
- **CSS3:** identidade visual, layout responsivo, estados de foco, hover e animações de entrada.
- **JavaScript:** menu mobile, favoritos, preenchimento automático do produto no formulário e validação do contato.
- **Google Fonts:** fontes Manrope e DM Sans, escolhidas para criar contraste entre títulos editoriais e textos de leitura.
- **Imagens do Unsplash:** imagens remotas usadas como referência visual para a coleção e para a atmosfera premium da marca.

Não foi usada nenhuma biblioteca JavaScript ou framework. Isso mantém o carregamento simples e permite abrir o projeto diretamente no navegador.

 Estrutura de arquivos

```text
projeto-RL/
├── index.html   # Conteúdo e estrutura semântica da página
├── style.css    # Identidade visual e responsividade
├── vivid.css    # Ajustes visuais, cores e tipografia
├── script.js    # Interações e validações
└── README.md    # Documentação do projeto
```

 Como executar

1. Abra a pasta do projeto.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Teste a navegação, o menu mobile, o FAQ, os favoritos e o formulário.

Também é possível usar uma extensão como **Live Server** no VS Code para atualizar a página automaticamente durante a edição.

 Personalização antes da publicação

Os dados de contato usados no protótipo são fictícios e devem ser substituídos em `index.html`:

- WhatsApp: `+55 31 99999-9999`
- Instagram: `@rlmodamasculina`
- E-mail: `contato@rlmodamasculina.com.br`
- Localização: `Belo Horizonte · MG`

Os links aparecem no header, FAQ, CTA final, botão flutuante e footer. Para transformar o formulário em captação real, conecte o evento de envio a uma API, serviço de e-mail ou CRM.

 Acessibilidade e SEO

- `lang="pt-BR"`, `title` e `meta description` configurados.
- Hierarquia de títulos com `h1`, `h2` e `h3`.
- Navegação e regiões principais identificadas com HTML semântico e labels ARIA.
- Campos do formulário associados a `label`.
- Estados visíveis de foco via `:focus-visible`.
- Contraste alto na maior parte da interface.
- Textos alternativos nas imagens.
- Navegação por teclado preservada nos links, botões e FAQ.

 Observações

As imagens são carregadas do Unsplash e exigem conexão com a internet. Para publicar com independência externa, baixe imagens autorizadas da marca e substitua as URLs dos atributos `src` no `index.html`.
