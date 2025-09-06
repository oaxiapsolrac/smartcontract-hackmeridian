# Página de Login - Capy Vault

## Funcionalidades Implementadas

### 🎨 Design
- **Cores consistentes**: Mantém a paleta de cores do site principal (dourado #FFD700, preto #1a1a1a)
- **Design responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interface moderna**: Design limpo e profissional com animações suaves

### 🔐 Funcionalidades de Login
- **Campos de entrada**: E-mail e senha com validação
- **Toggle de senha**: Botão para mostrar/ocultar a senha
- **Lembrar de mim**: Checkbox para manter o usuário logado
- **Esqueceu a senha**: Link para recuperação de senha (demo)
- **Login social**: Botões para Google e Facebook (demo)

### 🚀 Navegação
- **Botão "Voltar"**: Seta no canto superior esquerdo para retornar ao site principal
- **Integração completa**: Todos os botões "Começar Grátis" e "Entrar" redirecionam para esta página

### 📱 Responsividade
- **Mobile-first**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação automática para diferentes tamanhos de tela
- **Touch-friendly**: Botões e campos otimizados para toque

## Como Usar

### 1. Acesso à Página
- Clique em qualquer botão "Começar Grátis" ou "Entrar" no site principal
- Ou acesse diretamente: `login.html`

### 2. Funcionalidades Demo
- **Login**: Preencha qualquer e-mail e senha para testar
- **Toggle de senha**: Clique no ícone do olho para mostrar/ocultar
- **Botões sociais**: Clique para ver mensagens de demo
- **Links**: Todos os links mostram mensagens informativas

### 3. Voltar ao Site Principal
- Clique na seta no canto superior esquerdo
- Ou use o botão "Voltar" do navegador

## Estrutura de Arquivos

```
├── index.html          # Site principal
├── login.html          # Página de login
├── styles.css          # Estilos principais
├── script.js           # JavaScript principal
└── README_LOGIN.md     # Este arquivo
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript**: Interatividade e validação
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia Inter

## Personalização

### Cores
As cores são definidas como variáveis CSS no arquivo `styles.css`:
```css
:root {
    --primary-color: #FFD700;      /* Dourado */
    --primary-dark: #FFC800;       /* Dourado escuro */
    --secondary-color: #1a1a1a;    /* Preto */
    --text-primary: #333333;       /* Texto principal */
    --text-secondary: #666666;     /* Texto secundário */
}
```

### Funcionalidades
Para implementar funcionalidades reais:
1. Substitua as funções de demo no JavaScript
2. Conecte com backend/API
3. Implemente autenticação real
4. Adicione validação de segurança

## Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Próximos Passos

1. **Backend Integration**: Conectar com API de autenticação
2. **Validação Avançada**: Implementar validação de força de senha
3. **Recuperação de Senha**: Página de reset de senha
4. **Cadastro**: Página de criação de conta
5. **Autenticação Social**: Integração real com Google/Facebook
6. **Dashboard**: Página após login bem-sucedido

---

**Desenvolvido para Capy Vault - Gestão Inteligente de Moradia Compartilhada**
