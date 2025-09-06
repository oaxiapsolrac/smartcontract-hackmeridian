# Seções de Integrações e API - Capy Vault

## 🔗 **Integrações Implementadas**

### 🎯 **Funcionalidades das Integrações**
- **6 integrações principais** com ferramentas populares
- **Tags visuais** para identificar recursos de cada integração
- **Design responsivo** com hover effects
- **Navegação direta** através do footer

### 📱 **Integrações Disponíveis**

#### **1. Google Workspace**
- **Ícone**: Google
- **Recursos**: Calendário, Drive, Gmail
- **Descrição**: Sincronização completa com serviços Google

#### **2. Bancos**
- **Ícone**: Universidade (banco)
- **Recursos**: PIX, Transferências, Extratos
- **Descrição**: Conexão com contas bancárias

#### **3. Slack**
- **Ícone**: Slack
- **Recursos**: Notificações, Canais, Webhooks
- **Descrição**: Comunicação em tempo real

#### **4. WhatsApp**
- **Ícone**: WhatsApp
- **Recursos**: Lembretes, Notificações, Grupos
- **Descrição**: Notificações diretas

#### **5. Cloud Storage**
- **Ícone**: Nuvem
- **Recursos**: Dropbox, OneDrive, Backup
- **Descrição**: Armazenamento seguro

#### **6. Mais Integrações**
- **Ícone**: Plug
- **Recursos**: Em breve, Sugestões, Personalizado
- **Descrição**: Expansão futura

## 🔧 **API para Desenvolvedores**

### 🎯 **Funcionalidades da API**
- **3 cards informativos** sobre recursos da API
- **Exemplo de código interativo** com 3 linguagens
- **Design profissional** com syntax highlighting
- **Botão CTA** para obter API Key

### 📋 **Recursos da API**

#### **1. RESTful API**
- Autenticação OAuth 2.0
- Rate limiting inteligente
- Respostas JSON padronizadas
- Webhooks em tempo real

#### **2. Documentação Completa**
- Exemplos em Python, Node.js, PHP
- SDKs oficiais
- Postman Collection
- Suporte técnico

#### **3. Segurança Avançada**
- HTTPS obrigatório
- Criptografia de ponta a ponta
- Auditoria completa
- Conformidade GDPR

### 💻 **Exemplos de Código**

#### **Python**
```python
import requests

url = "https://api.capyvault.com/v1/expenses"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "description": "Conta de Luz",
    "amount": 150.00,
    "due_date": "2024-02-15",
    "category": "utilities",
    "split_between": ["user1", "user2", "user3"]
}

response = requests.post(url, json=data, headers=headers)
expense = response.json()
```

#### **JavaScript**
```javascript
const axios = require('axios');

const createExpense = async () => {
    try {
        const response = await axios.post(
            'https://api.capyvault.com/v1/expenses',
            {
                description: 'Conta de Luz',
                amount: 150.00,
                due_date: '2024-02-15',
                category: 'utilities',
                split_between: ['user1', 'user2', 'user3']
            },
            {
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                }
            }
        );
        
        console.log(`Despesa criada: ${response.data.id}`);
    } catch (error) {
        console.error('Erro:', error.response.data);
    }
};
```

#### **cURL**
```bash
curl -X POST https://api.capyvault.com/v1/expenses \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Conta de Luz",
    "amount": 150.00,
    "due_date": "2024-02-15",
    "category": "utilities",
    "split_between": ["user1", "user2", "user3"]
  }'
```

## 🚀 **Como Acessar**

### **Navegação Footer**
- **Recursos**: `#features` - Seção de recursos
- **Preços**: `#pricing` - Seção de preços
- **Integrações**: `#integrations` - Nova seção de integrações
- **API**: `#api` - Nova seção de API

### **Scroll Suave**
- Todos os links do footer funcionam com scroll suave
- Navegação automática para as seções correspondentes
- Header fixo compensado automaticamente

## 📱 **Responsividade**

### **Desktop (>1024px)**
- **Integrações**: Grid 3x2 com cards grandes
- **API**: Layout em duas colunas (info + demo)
- **Código**: Tabs horizontais com exemplos completos

### **Tablet (768px - 1024px)**
- **Integrações**: Grid 2x3 adaptativo
- **API**: Layout em coluna única
- **Código**: Tabs responsivos

### **Mobile (<768px)**
- **Integrações**: Grid 1x6 empilhado
- **API**: Layout em coluna única
- **Código**: Tabs verticais, fonte reduzida

## 🎨 **Design e UX**

### **Integrações**
- **Cards hover**: Elevação e borda dourada
- **Ícones coloridos**: Gradiente dourado consistente
- **Tags visuais**: Chips com cores do tema
- **Animações suaves**: Transições de 0.3s

### **API**
- **Cards informativos**: Hover effects sutis
- **Syntax highlighting**: Tema escuro profissional
- **Tabs interativas**: Troca de linguagens
- **CTA destacado**: Botão principal para API Key

## 🔧 **Funcionalidades Técnicas**

### **JavaScript Implementado**
```javascript
// API Code tabs functionality
const codeTabs = document.querySelectorAll('.code-tab');
codeTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        const codeContainer = this.closest('.code-example');
        
        // Remove active class from all tabs and codes
        codeContainer.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
        codeContainer.querySelectorAll('code').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding code
        this.classList.add('active');
        codeContainer.querySelector(`code.language-${lang}`).classList.add('active');
    });
});
```

### **CSS Features**
- **Grid responsivo**: `grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))`
- **Hover effects**: `transform: translateY(-8px)`
- **Gradientes**: `var(--gradient-primary)`
- **Sombras**: `var(--shadow-heavy)`

## 🎯 **Casos de Uso**

### **Para Usuários**
1. **Ver integrações**: Explorar ferramentas compatíveis
2. **Entender API**: Ver exemplos de código
3. **Navegação rápida**: Acessar seções específicas
4. **Obter API Key**: Registrar para desenvolvimento

### **Para Desenvolvedores**
1. **Documentação**: Exemplos práticos de uso
2. **Múltiplas linguagens**: Python, JavaScript, cURL
3. **Segurança**: Informações sobre proteção de dados
4. **Registro**: Acesso direto para API Key

## 🔮 **Próximas Melhorias**

### **Integrações**
1. **Mais ferramentas**: Trello, Asana, Notion
2. **Status de conexão**: Indicadores visuais
3. **Configuração**: Wizards de setup
4. **Webhooks**: Configuração avançada

### **API**
1. **Playground interativo**: Teste de endpoints
2. **Mais linguagens**: Go, Ruby, PHP
3. **Métricas de uso**: Dashboard de API
4. **Webhooks**: Configuração de eventos

---

**Desenvolvido para Capy Vault - Gestão Inteligente de Moradia Compartilhada**
