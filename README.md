🪝 React Hooks — Estudos & Prática

Este repositório contém uma série de exercícios práticos desenvolvidos para treinar e fixar os principais Hooks do React, como useState e useEffect. Cada mini-projeto foi feito para trabalhar conceitos específicos, simulando casos reais do dia a dia no front-end.

🚀 Objetivos do Estudo

Entender de forma clara e gradual como funcionam os Hooks.

Praticar estado, efeitos colaterais, props, componentização.

Criar exemplos pequenos, mas próximos da realidade.

Evoluir até se sentir confortável para usar hooks em qualquer projeto React.

📚 Conteúdos Estudados
✔ useState

Hook usado para manipular e armazenar estados dentro de componentes funcionais.

Exercícios feitos com useState:

Produto com Estoque → Controla quantidade restante e bloqueia botão quando zerar.

Contador → Incrementa e decrementa valores.

Tema Claro/Escuro → Alterna classes e estilos.

Lista de Tarefas (TODO) → Gerencia um array dentro do estado.

Banco → Manipula saldo com depósitos e saques.

Online/Offline → Alterna entre dois estados com cliques.

✔ useEffect

Hook usado para executar efeitos colaterais (ações quando algo muda).

Exercícios com useEffect:

Mensagem → Log no console sempre que a mensagem muda.

Timer → Executa intervalo para contar segundos.

📝 Exercícios Implementados
1. Produto com Estoque (Props + useState)

Recebe estoque inicial pelas props.

Diminui o estoque ao clicar em "Comprar".

Botão desabilita quando chegar a zero.

2. Mensagem (Props + useEffect)

Recebe usuário, texto e hora.

useEffect registra no console quando a mensagem mudar.

3. Contador (useState)

Estado numérico.

Botões de + e -.

4. Tema (useState + props)

Recebe texto pelas props.

Alterna entre tema claro e escuro.

5. Lista de Tarefas (useState + arrays)

Input controla nova tarefa.

useState armazena lista inteira.

Renderiza cada item dinamicamente.

6. Banco (useState)

Estado inicial do saldo.

Depósito de 100.

Saque reduz valor com validação.

7. Modo Online/Offline (useState)

Alterna entre "Online" e "Offline".

8. Timer (useEffect + useState)

Conta segundos.

Botão iniciar.

Botão pausar.

Intervalo limpo no cleanup do useEffect.

🧠 Conceitos Fixados
🔹 Estado é a "memória" do componente

Valores que mudam conforme interação do usuário ou eventos.

🔹 Efeitos são ações que acontecem “por fora” do React

console.log, intervalos, timeouts, API, eventos etc.

🔹 Props são valores que o componente pai passa para o filho

Imutáveis (não se alteram dentro do filho).

🔹 Re-renderização ocorre quando o estado muda

O React redesenha o componente automaticamente.
