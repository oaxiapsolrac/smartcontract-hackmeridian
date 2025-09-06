# Capy Vault - Sistema Integrado de Navegação

## Visão Geral

O Capy Vault agora possui um sistema de navegação integrado que permite que todas as páginas (`index.html`, `login.html`, `demo.html`) funcionem como um site único e coeso, sem a necessidade de recarregar a página entre as seções.

## Arquivos Principais

### `main.html` - Ponto de Entrada Principal
- **Função**: Arquivo principal que integra todas as páginas
- **Recursos**:
  - Loading inicial com animação
  - Navegação global fixa no canto superior direito
  - Breadcrumb para orientação do usuário
  - Sistema SPA (Single Page Application)

### `app.js` - Sistema de Navegação
- **Função**: Gerencia toda a navegação entre as páginas
- **Recursos**:
  - Carregamento dinâmico de conteúdo
  - Interceptação de links e botões
  - Gerenciamento de estado
  - Animações de transição

## Como Usar

### Opção 1: Usar o Sistema Integrado (Recomendado)
1. Abra `main.html` no navegador
2. Use a navegação global no canto superior direito
3. Navegue entre as seções sem recarregar a página

### Opção 2: Usar Páginas Individuais
- `index.html` - Página inicial
- `login.html` - Página de login
- `demo.html` - Página de demonstração

## Funcionalidades

### Navegação Global
- **Início**: Leva para a página principal
- **Login**: Leva para a página de login
- **Demo**: Leva para a página de demonstração

### Breadcrumb
- Mostra a localização atual no site
- Formato: Início > [Página Atual]

### Loading e Animações
- Loading inicial com logo animado
- Transições suaves entre páginas
- Indicadores de carregamento

### Responsividade
- Funciona em dispositivos móveis
- Navegação adaptativa
- Interface otimizada para touch

## Estrutura de URLs

O sistema usa hash-based routing:
- `#home` - Página inicial
- `#login` - Página de login  
- `#demo` - Página de demonstração

## Compatibilidade

### Navegadores Suportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Funcionalidades JavaScript
- ES6+ (Classes, Arrow Functions, etc.)
- Fetch API
- History API
- DOM Manipulation

## Personalização

### Modificar Navegação
Edite o arquivo `app.js` na seção `setupNavigationButtons()`:

```javascript
// Exemplo: Adicionar novo botão
if (e.target.textContent.includes('Novo Botão')) {
    e.preventDefault();
    this.navigateTo('nova-pagina');
}
```

### Adicionar Novas Páginas
1. Adicione a página no objeto `pages` no construtor
2. Implemente a lógica específica em `executePageScripts()`
3. Adicione o botão na navegação global em `main.html`

### Estilos Personalizados
- Edite `styles.css` para modificar aparência
- Use as classes CSS existentes para manter consistência
- Adicione animações personalizadas no `app.js`

## Troubleshooting

### Problemas Comuns

1. **Páginas não carregam**
   - Verifique se todos os arquivos estão na mesma pasta
   - Confirme que o servidor web está rodando
   - Verifique o console do navegador para erros

2. **Navegação não funciona**
   - Certifique-se de que `app.js` está sendo carregado
   - Verifique se os IDs dos elementos estão corretos
   - Confirme que os eventos estão sendo registrados

3. **Estilos não aplicam**
   - Verifique se `styles.css` está sendo carregado
   - Confirme que as classes CSS estão corretas
   - Verifique se não há conflitos de CSS

### Debug
- Abra o console do navegador (F12)
- Verifique se há erros JavaScript
- Use `console.log()` para debug
- Verifique a aba Network para problemas de carregamento

## Performance

### Otimizações Implementadas
- Carregamento lazy de conteúdo
- Cache de páginas já visitadas
- Animações otimizadas com CSS
- Transições suaves

### Métricas Recomendadas
- Tempo de carregamento inicial: < 3s
- Transição entre páginas: < 500ms
- Tamanho total dos arquivos: < 2MB

## Segurança

### Considerações
- Validação de entrada nos formulários
- Sanitização de conteúdo HTML
- Proteção contra XSS
- Validação de URLs

### Implementações
- Escape de conteúdo dinâmico
- Validação de dados de formulário
- Sanitização de HTML carregado
- Verificação de URLs antes do carregamento

## Próximos Passos

### Melhorias Sugeridas
1. **PWA (Progressive Web App)**
   - Service Worker para cache offline
   - Manifest para instalação
   - Push notifications

2. **Autenticação Real**
   - Sistema de login funcional
   - Gerenciamento de sessão
   - Proteção de rotas

3. **Backend Integration**
   - API REST para dados
   - WebSocket para tempo real
   - Database integration

4. **Analytics**
   - Tracking de navegação
   - Métricas de performance
   - User behavior analysis

## Suporte

Para dúvidas ou problemas:
1. Verifique este README
2. Consulte o console do navegador
3. Teste em diferentes navegadores
4. Verifique a compatibilidade de dispositivos

---

**Capy Vault** - Gestão Inteligente de Moradia Compartilhada

