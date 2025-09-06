# Seção de Contato - Capy Vault

## 📧 **Funcionalidades Implementadas**

### 🎯 **Informações de Contato**
- **E-mail de Suporte**: `capyvault@gmail.com`
- **Horário de Atendimento**: Segunda a Sexta (8h às 18h) e Sábado (9h às 14h)
- **Tempo de Resposta**: Até 24 horas (prioridade para casos urgentes)

### 📝 **Formulário de Contato**
- **Campos obrigatórios**: Nome, E-mail, Assunto, Mensagem
- **Tipos de assunto**: Suporte Técnico, Vendas e Planos, Parcerias, Sugestões, Outro
- **Validação**: E-mail válido e campos preenchidos
- **Feedback**: Mensagens de sucesso e erro em tempo real

### 🎨 **Design e UX**
- **Layout responsivo**: Funciona em desktop, tablet e mobile
- **Cores consistentes**: Mantém a identidade visual do site
- **Animações suaves**: Hover effects e transições
- **Acessibilidade**: Labels claros e navegação por teclado

## 🚀 **Como Acessar**

### 1. **Navegação Principal**
- Clique em "Contato" no menu de navegação superior
- A página rolará automaticamente para a seção de contato

### 2. **Navegação Footer**
- Clique em "Contato" na seção "Suporte" do footer
- Mesmo comportamento de scroll suave

### 3. **Acesso Direto**
- URL: `index.html#contact`
- Ou role até o final da página

## 📱 **Responsividade**

### **Desktop (>1024px)**
- Layout em duas colunas
- Formulário à direita, informações à esquerda
- Espaçamento otimizado

### **Tablet (768px - 1024px)**
- Layout adaptativo
- Formulário e informações em coluna única
- Espaçamento reduzido

### **Mobile (<768px)**
- Layout em coluna única
- Campos do formulário empilhados
- Padding otimizado para toque

## 🔧 **Funcionalidades Técnicas**

### **Validação de Formulário**
```javascript
// Validação de campos obrigatórios
if (!data.name || !data.email || !data.subject || !data.message) {
    showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
    return;
}

// Validação de e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(data.email)) {
    showMessage('Por favor, insira um e-mail válido.', 'error');
    return;
}
```

### **Feedback Visual**
- **Loading**: Spinner durante envio
- **Sucesso**: Mensagem verde com confirmação
- **Erro**: Mensagem vermelha com detalhes
- **Auto-hide**: Mensagens desaparecem após 5 segundos

## 📧 **E-mail de Suporte**

### **Endereço**
- **E-mail**: `capyvault@gmail.com`
- **Link direto**: `mailto:capyvault@gmail.com`

### **Tipos de Suporte**
- **Suporte Técnico**: Problemas com a plataforma
- **Vendas e Planos**: Dúvidas sobre preços e planos
- **Parcerias**: Oportunidades de negócio
- **Sugestões**: Melhorias e feedback
- **Outro**: Demais assuntos

## 🎯 **Casos de Uso**

### **Para Usuários**
1. **Problemas técnicos**: Relatar bugs ou dificuldades
2. **Dúvidas sobre planos**: Esclarecer preços e recursos
3. **Sugestões**: Propor melhorias para a plataforma
4. **Parcerias**: Propor colaborações

### **Para Administradores**
1. **Monitoramento**: Acompanhar feedback dos usuários
2. **Suporte**: Responder dúvidas e problemas
3. **Melhorias**: Coletar sugestões para desenvolvimento
4. **Vendas**: Converter leads em clientes

## 🔄 **Fluxo de Funcionamento**

### **1. Usuário Acessa**
- Navega para a seção de contato
- Visualiza informações de suporte

### **2. Preenche Formulário**
- Insere dados pessoais
- Seleciona tipo de assunto
- Escreve mensagem detalhada

### **3. Validação**
- Sistema verifica campos obrigatórios
- Valida formato do e-mail
- Mostra feedback em tempo real

### **4. Envio**
- Botão mostra loading
- Simula envio (demo)
- Confirma sucesso

### **5. Resposta**
- E-mail automático de confirmação
- Resposta da equipe em até 24h
- Acompanhamento do caso

## 🛠 **Personalização**

### **Alterar E-mail de Suporte**
```html
<a href="mailto:capyvault@gmail.com" class="contact-link">
    <i class="fas fa-envelope"></i>
    capyvault@gmail.com
</a>
```

### **Modificar Horários**
```html
<div class="contact-card">
    <h3>Horário de Atendimento</h3>
    <p>Segunda a Sexta: 8h às 18h</p>
    <p>Sábado: 9h às 14h</p>
</div>
```

### **Adicionar Novos Tipos de Assunto**
```html
<select id="subject" name="subject" required>
    <option value="">Selecione um assunto</option>
    <option value="suporte">Suporte Técnico</option>
    <option value="vendas">Vendas e Planos</option>
    <option value="parceria">Parcerias</option>
    <option value="sugestao">Sugestões</option>
    <option value="novo-tipo">Novo Tipo</option>
    <option value="outro">Outro</option>
</select>
```

## 📊 **Métricas Sugeridas**

### **Para Implementar**
1. **Taxa de conversão**: Formulários enviados vs. visualizações
2. **Tempo de resposta**: Tempo médio para responder usuários
3. **Satisfação**: Avaliação do suporte pelos usuários
4. **Tipos de assunto**: Distribuição por categoria

## 🔮 **Próximas Melhorias**

1. **Chat em tempo real**: Integração com chat bot
2. **FAQ integrado**: Base de conhecimento
3. **Sistema de tickets**: Acompanhamento de casos
4. **Notificações push**: Alertas de resposta
5. **Upload de arquivos**: Anexos no formulário
6. **Integração CRM**: Gestão de leads e clientes

---

**Desenvolvido para Capy Vault - Gestão Inteligente de Moradia Compartilhada**
