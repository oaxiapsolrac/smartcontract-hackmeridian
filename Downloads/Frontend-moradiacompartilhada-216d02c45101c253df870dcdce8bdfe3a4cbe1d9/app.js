// Capy Vault - Sistema de Navegação Integrado
class CapyVaultApp {
    constructor() {
        this.currentPage = 'home';
        this.pages = {
            home: { file: 'index.html', title: 'Capy Vault - Gestão Inteligente de Moradia Compartilhada' },
            login: { file: 'login.html', title: 'Login - Capy Vault' },
            demo: { file: 'demo.html', title: 'Conta Demo - Capy Vault' }
        };
        
        this.init();
    }

    init() {
        // Configurar navegação baseada em hash
        this.setupHashNavigation();
        
        // Configurar botões de navegação
        this.setupNavigationButtons();
        
        // Carregar página inicial baseada no hash ou padrão
        this.loadPageFromHash();
        
        // Configurar interceptação de links
        this.setupLinkInterception();
    }

    setupHashNavigation() {
        window.addEventListener('hashchange', () => {
            this.loadPageFromHash();
        });
    }

    setupNavigationButtons() {
        // Botões "Entrar" -> login
        document.addEventListener('click', (e) => {
            if (e.target.textContent.includes('Entrar') || 
                e.target.closest('.btn')?.textContent.includes('Entrar')) {
                e.preventDefault();
                this.navigateTo('login');
            }
            
            // Botões "Começar Grátis" -> login
            if (e.target.textContent.includes('Começar Grátis') || 
                e.target.closest('.btn')?.textContent.includes('Começar Grátis')) {
                e.preventDefault();
                this.navigateTo('login');
            }
            
            // Botões "Ver Demo" -> demo
            if (e.target.textContent.includes('Ver Demo') || 
                e.target.closest('.btn')?.textContent.includes('Ver Demo')) {
                e.preventDefault();
                this.navigateTo('demo');
            }
            
            // Botões "Começar Agora" -> login
            if (e.target.textContent.includes('Começar Agora') || 
                e.target.closest('.btn')?.textContent.includes('Começar Agora')) {
                e.preventDefault();
                this.navigateTo('login');
            }
            
            // Botões "Sair" -> home
            if (e.target.textContent.includes('Sair') || 
                e.target.closest('.btn')?.textContent.includes('Sair')) {
                e.preventDefault();
                this.navigateTo('home');
            }
            
            // Links "Voltar ao início" -> home
            if (e.target.textContent.includes('Voltar ao início') || 
                e.target.closest('a')?.textContent.includes('Voltar ao início')) {
                e.preventDefault();
                this.navigateTo('home');
            }
        });
    }

    setupLinkInterception() {
        // Interceptar cliques em links que apontam para os arquivos HTML
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href) {
                const url = new URL(link.href);
                const pathname = url.pathname.split('/').pop();
                
                if (pathname === 'index.html' || pathname === '') {
                    e.preventDefault();
                    this.navigateTo('home');
                } else if (pathname === 'login.html') {
                    e.preventDefault();
                    this.navigateTo('login');
                } else if (pathname === 'demo.html') {
                    e.preventDefault();
                    this.navigateTo('demo');
                }
            }
        });
    }

    loadPageFromHash() {
        const hash = window.location.hash.slice(1) || 'home';
        this.navigateTo(hash);
    }

    async navigateTo(pageName) {
        if (!this.pages[pageName]) {
            console.error(`Página ${pageName} não encontrada`);
            return;
        }

        try {
            // Mostrar loading
            this.showLoading();
            
            // Carregar conteúdo da página
            const response = await fetch(this.pages[pageName].file);
            const html = await response.text();
            
            // Extrair apenas o conteúdo do body
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const bodyContent = doc.body.innerHTML;
            
            // Verificar se estamos no main.html ou em uma página individual
            const appContainer = document.getElementById('app-container');
            if (appContainer) {
                // Estamos no main.html - atualizar apenas o container
                appContainer.innerHTML = bodyContent;
            } else {
                // Estamos em uma página individual - atualizar todo o body
                document.body.innerHTML = bodyContent;
            }
            
            // Atualizar título
            document.title = this.pages[pageName].title;
            
            // Atualizar URL sem recarregar a página
            window.history.pushState({}, '', `#${pageName}`);
            
            // Atualizar estado atual
            this.currentPage = pageName;
            
            // Reconfigurar eventos após mudança de conteúdo
            this.setupNavigationButtons();
            this.setupLinkInterception();
            
            // Executar scripts específicos da página
            this.executePageScripts(pageName);
            
            // Esconder loading
            this.hideLoading();
            
        } catch (error) {
            console.error('Erro ao carregar página:', error);
            this.hideLoading();
        }
    }

    showLoading() {
        // Criar overlay de loading se não existir
        if (!document.getElementById('loading-overlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'loading-overlay';
            overlay.innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Carregando...</p>
                </div>
            `;
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            `;
            document.body.appendChild(overlay);
        }
        
        document.getElementById('loading-overlay').style.display = 'flex';
    }

    hideLoading() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }

    executePageScripts(pageName) {
        // Executar scripts específicos baseados na página
        switch (pageName) {
            case 'home':
                this.initHomePage();
                break;
            case 'login':
                this.initLoginPage();
                break;
            case 'demo':
                this.initDemoPage();
                break;
        }
    }

    initHomePage() {
        // Smooth scrolling para links de navegação
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = 'none';
                }
            });
        }

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu) {
                    navMenu.classList.toggle('active');
                }
            });
        }
    }

    initLoginPage() {
        // Configurar formulário de login
        const loginForm = document.querySelector('.login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Configurar toggle de visibilidade da senha
        const togglePassword = document.querySelector('.toggle-password');
        if (togglePassword) {
            togglePassword.addEventListener('click', () => {
                const passwordInput = document.querySelector('input[type="password"]');
                if (passwordInput) {
                    const type = passwordInput.type === 'password' ? 'text' : 'password';
                    passwordInput.type = type;
                    togglePassword.innerHTML = type === 'password' ? 
                        '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
                }
            });
        }
    }

    initDemoPage() {
        // Configurar funcionalidades específicas da demo
        this.setupDemoDashboard();
        this.setupDemoNavigation();
    }

    setupDemoDashboard() {
        // Simular dados dinâmicos do dashboard
        const updateDashboardData = () => {
            const cards = document.querySelectorAll('.dashboard-card');
            cards.forEach(card => {
                const valueElement = card.querySelector('.card-value');
                if (valueElement) {
                    // Simular pequenas variações nos valores
                    const currentValue = valueElement.textContent;
                    const numericValue = parseFloat(currentValue.replace(/[^\d.,]/g, '').replace(',', '.'));
                    const variation = (Math.random() - 0.5) * 0.1; // ±5% variação
                    const newValue = numericValue * (1 + variation);
                    
                    if (currentValue.includes('R$')) {
                        valueElement.textContent = `R$ ${newValue.toFixed(2).replace('.', ',')}`;
                    } else if (currentValue.includes('%')) {
                        valueElement.textContent = `${newValue.toFixed(1)}%`;
                    }
                }
            });
        };

        // Atualizar dados a cada 30 segundos
        setInterval(updateDashboardData, 30000);
    }

    setupDemoNavigation() {
        // Configurar navegação interna da demo
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Scroll suave para a seção
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Atualizar navegação ativa
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    handleLogin() {
        const email = document.querySelector('input[type="email"]')?.value;
        const password = document.querySelector('input[type="password"]')?.value;
        
        if (!email || !password) {
            this.showMessage('Por favor, preencha todos os campos', 'error');
            return;
        }
        
        // Simular login bem-sucedido
        this.showMessage('Login realizado com sucesso!', 'success');
        
        // Redirecionar para demo após 1 segundo
        setTimeout(() => {
            this.navigateTo('demo');
        }, 1000);
    }

    showMessage(message, type = 'info') {
        // Criar elemento de mensagem
        const messageElement = document.createElement('div');
        messageElement.className = `message message-${type}`;
        messageElement.textContent = message;
        messageElement.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        // Estilos baseados no tipo
        if (type === 'success') {
            messageElement.style.background = '#4CAF50';
        } else if (type === 'error') {
            messageElement.style.background = '#f44336';
        } else {
            messageElement.style.background = '#2196F3';
        }
        
        document.body.appendChild(messageElement);
        
        // Remover após 3 segundos
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
}

// Inicializar aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.capyVaultApp = new CapyVaultApp();
});

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .loading-spinner {
        text-align: center;
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #FFD700;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 10px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .nav-list a.active {
        color: #FFD700;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
