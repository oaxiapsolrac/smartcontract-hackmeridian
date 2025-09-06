# Página Demo - CapyVault

## Visão Geral

A página demo (`demo.html`) é uma simulação completa da plataforma CapyVault, permitindo que os usuários explorem todas as funcionalidades sem precisar criar uma conta real. Esta página demonstra como seria a experiência real do usuário na plataforma.

## Funcionalidades Implementadas

### 1. Geração de Nome Padrão
- **Localização**: Header da página
- **Funcionalidade**: Gera automaticamente um nome aleatório entre 5 opções pré-definidas
- **Nomes disponíveis**:
  - José Silva Santos
  - Maria Oliveira Costa
  - Carlos Ferreira Lima
  - Ana Paula Rodrigues
  - Pedro Almeida Souza

### 2. Dashboard
- **Visão geral financeira** com 4 cards principais:
  - **Saldo Atual**: R$ 2.450,00 (+12,5% este mês)
  - **Receitas**: R$ 8.750,00 (+8,3% este mês)
  - **Despesas**: R$ 6.300,00 (-5,2% este mês)
  - **Economias**: R$ 15.200,00 (+15,7% este mês)
- **Interatividade**: Cards clicáveis com animações hover
- **Design**: Glassmorphism com gradientes e efeitos de transparência

### 3. Agenda Financeira
- **Layout**: Sidebar com filtros + área principal
- **Filtros disponíveis**:
  - Contas a pagar
  - Contas a receber
  - Investimentos
  - Metas
- **Itens da agenda**:
  - Aluguel (15/Dez) - R$ 1.200,00 (urgente)
  - Energia Elétrica (20/Dez) - R$ 180,00
  - Internet (25/Dez) - R$ 89,90
  - Salário (30/Dez) - R$ 4.500,00 (receita)
- **Funcionalidades**:
  - Botões de editar e marcar como concluído
  - Diferenciação visual entre despesas e receitas
  - Indicadores de urgência

### 4. Gestão Financeira
- **Últimas Transações**:
  - Supermercado (-R$ 156,80)
  - Pagamento Cartão (-R$ 450,00)
  - Depósito (+R$ 1.000,00)
- **Metas Financeiras**:
  - Viagem para Europa (65% - R$ 6.500/R$ 10.000)
  - Reserva de Emergência (80% - R$ 8.000/R$ 10.000)
  - Entrada do Apartamento (25% - R$ 12.500/R$ 50.000)
- **Barras de progresso animadas**

### 5. Relatórios e Análises
- **Gastos por Categoria**:
  - Moradia: 35%
  - Alimentação: 25%
  - Transporte: 20%
  - Lazer: 15%
  - Outros: 5%
- **Evolução Mensal**:
  - Outubro: R$ 2.100
  - Novembro: R$ 2.450
  - Dezembro: R$ 2.800 (atual)
- **Placeholders para gráficos interativos**

### 6. Chat de Suporte
- **Botão flutuante**: Canto inferior direito
- **Funcionalidades**:
  - Abrir/fechar modal de chat
  - Envio de mensagens
  - Respostas automáticas do bot
  - Histórico de conversa
- **Respostas inteligentes** para palavras-chave:
  - "oi", "olá" → Saudação
  - "ajuda" → Oferece suporte
  - "funcionalidades" → Lista recursos
  - "preço" → Informa sobre planos
  - "suporte" → Fornece email de contato
  - "demo" → Explica que está na versão demo
  - "conta" → Orienta para criar conta real

## Design e UX

### Paleta de Cores
- **Gradiente principal**: Roxo para azul (#667eea → #764ba2)
- **Cores de destaque**: 
  - Verde para valores positivos (#10b981)
  - Vermelho para valores negativos (#ef4444)
  - Dourado para elementos principais (#FFD700)

### Efeitos Visuais
- **Glassmorphism**: Fundos translúcidos com blur
- **Animações**: Hover effects, transições suaves
- **Scroll animations**: Elementos aparecem conforme o scroll
- **Notificações**: Sistema de feedback para interações

### Responsividade
- **Desktop**: Layout completo com sidebar
- **Tablet**: Reorganização de grids
- **Mobile**: Layout vertical, botões adaptados

## Navegação

### Header Fixo
- **Logo**: CapyVault com ícone
- **Menu**: Dashboard, Agenda, Finanças, Relatórios
- **Usuário**: Nome gerado + botão "Sair"
- **Navegação suave** entre seções

### Botão "Sair"
- **Funcionalidade**: Retorna para a página principal (`index.html`)
- **Ícone**: Font Awesome sign-out-alt

## Interatividade

### Elementos Clicáveis
- **Cards do dashboard**: Mostram notificação de desenvolvimento
- **Itens da agenda**: Botões de ação funcionais
- **Filtros**: Checkboxes interativos
- **Barras de progresso**: Animação de carregamento

### Sistema de Notificações
- **Posição**: Canto superior direito
- **Duração**: 3 segundos
- **Animação**: Slide in/out
- **Exemplos**:
  - "Funcionalidade de edição em desenvolvimento!"
  - "Item marcado como concluído!"
  - "Filtros aplicados!"

## Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Grid e Flexbox para layout
  - CSS Variables para consistência
  - Media queries para responsividade
  - Animations e transitions
- **JavaScript Vanilla**:
  - DOM manipulation
  - Event handling
  - Local storage (para nome do usuário)
  - Intersection Observer API

### Bibliotecas
- **Font Awesome**: Ícones
- **Google Fonts**: Inter (tipografia)

## Estrutura de Arquivos

```
demo.html          # Página principal da demo
styles.css         # Estilos (incluindo seção demo)
script.js          # JavaScript (incluindo funcionalidades demo)
README_DEMO.md     # Esta documentação
```

## Como Usar

### Acesso
1. Na página principal (`index.html`), clique no botão "Ver Demo"
2. Ou acesse diretamente `demo.html`

### Navegação
1. **Dashboard**: Visão geral inicial
2. **Agenda**: Gerenciamento de contas e compromissos
3. **Finanças**: Controle de transações e metas
4. **Relatórios**: Análises e gráficos

### Chat
1. Clique no botão flutuante (canto inferior direito)
2. Digite sua mensagem
3. Receba respostas automáticas do assistente virtual

## Personalização

### Modificar Nomes Padrão
```javascript
// Em script.js, função generateDefaultName()
const defaultNames = [
    'Seu Nome Aqui',
    'Outro Nome',
    // Adicione mais nomes...
];
```

### Alterar Dados Financeiros
```html
<!-- Em demo.html, seção dashboard -->
<p class="card-value">R$ 2.450,00</p>
<span class="card-change positive">+12,5% este mês</span>
```

### Adicionar Novas Funcionalidades
1. Crie nova seção em `demo.html`
2. Adicione estilos em `styles.css`
3. Implemente JavaScript em `script.js`

## Próximos Passos

### Melhorias Sugeridas
- [ ] Gráficos interativos reais (Chart.js)
- [ ] Sistema de notificações push
- [ ] Modo escuro/claro
- [ ] Mais animações e micro-interações
- [ ] Integração com APIs reais
- [ ] Sistema de autenticação
- [ ] Persistência de dados

### Funcionalidades Avançadas
- [ ] Drag and drop para agenda
- [ ] Filtros avançados
- [ ] Exportação de relatórios
- [ ] Calendário interativo
- [ ] Sistema de lembretes
- [ ] Integração com bancos

## Suporte

Para dúvidas ou sugestões sobre a página demo:
- **Email**: capyvault@gmail.com
- **Chat**: Disponível na própria página demo
- **Documentação**: Este arquivo README_DEMO.md
