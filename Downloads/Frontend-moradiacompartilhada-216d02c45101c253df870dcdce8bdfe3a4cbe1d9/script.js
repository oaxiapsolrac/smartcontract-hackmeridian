// Smooth scrolling para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
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
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Create mobile menu if it doesn't exist
            let mobileMenu = document.querySelector('.mobile-menu');
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = `
                    <div class="mobile-menu-content">
                        <ul class="mobile-nav-menu">
                            <li><a href="#home">Início</a></li>
                            <li><a href="#features">Recursos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                        <div class="mobile-nav-buttons">
                            <button class="btn btn-outline">Entrar</button>
                            <button class="btn btn-primary">Começar Grátis</button>
                        </div>
                    </div>
                `;
                
                // Add mobile menu styles
                const style = document.createElement('style');
                style.textContent = `
                    .mobile-menu {
                        position: fixed;
                        top: 80px;
                        left: 0;
                        right: 0;
                        background: rgba(255, 255, 255, 0.98);
                        backdrop-filter: blur(10px);
                        border-bottom: 1px solid var(--border-color);
                        transform: translateY(-100%);
                        transition: transform 0.3s ease;
                        z-index: 999;
                    }
                    
                    .mobile-menu.active {
                        transform: translateY(0);
                    }
                    
                    .mobile-menu-content {
                        padding: 20px;
                    }
                    
                    .mobile-nav-menu {
                        list-style: none;
                        margin-bottom: 20px;
                    }
                    
                    .mobile-nav-menu li {
                        margin-bottom: 16px;
                    }
                    
                    .mobile-nav-menu a {
                        text-decoration: none;
                        color: var(--text-primary);
                        font-weight: 500;
                        font-size: 18px;
                        display: block;
                        padding: 12px 0;
                        border-bottom: 1px solid var(--border-color);
                    }
                    
                    .mobile-nav-menu a:last-child {
                        border-bottom: none;
                    }
                    
                    .mobile-nav-buttons {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }
                    
                    .hamburger.active span:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }
                    
                    .hamburger.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .hamburger.active span:nth-child(3) {
                        transform: rotate(-45deg) translate(7px, -6px);
                    }
                `;
                document.head.appendChild(style);
                document.body.appendChild(mobileMenu);
            }
            
            mobileMenu.classList.toggle('active');
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .hero-content, .hero-image');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .feature-card, .pricing-card, .hero-content, .hero-image {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-content.animate-in {
            animation: slideInLeft 0.8s ease;
        }
        
        .hero-image.animate-in {
            animation: slideInRight 0.8s ease;
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(animationStyle);

    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
        }, 30);
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                let numericValue = parseInt(text.replace(/[^0-9]/g, ''));
                
                if (text.includes('k')) {
                    numericValue *= 1000;
                }
                
                animateCounter(target, numericValue);
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Chart animation
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.height = bar.style.height || '60%';
        }, index * 200);
    });

    // Form validation (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your form submission logic here
            console.log('Form submitted');
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Mensagem enviada com sucesso!';
            successMessage.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-color);
                color: var(--secondary-color);
                padding: 16px 24px;
                border-radius: 8px;
                font-weight: 600;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
            `;
            
            document.body.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        const loadingStyle = document.createElement('style');
        loadingStyle.textContent = `
            body {
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            
            body.loaded {
                opacity: 1;
            }
        `;
        document.head.appendChild(loadingStyle);
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Add any additional scroll-based functionality here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Demo Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the demo page
    if (window.location.pathname.includes('demo.html')) {
        initializeDemoPage();
    }
});

function initializeDemoPage() {
    // Generate default user name
    generateDefaultName();
    
    // Initialize smooth scrolling for navigation
    initializeSmoothScrolling();
    
    // Initialize chat functionality
    initializeChat();
    
    // Initialize interactive elements
    initializeInteractiveElements();
    
    // Add scroll animations
    initializeScrollAnimations();
}

function generateDefaultName() {
    const defaultNames = [
        'José Silva Santos',
        'Maria Oliveira Costa',
        'Carlos Ferreira Lima',
        'Ana Paula Rodrigues',
        'Pedro Almeida Souza'
    ];
    
    const randomName = defaultNames[Math.floor(Math.random() * defaultNames.length)];
    const userNameElement = document.getElementById('userName');
    
    if (userNameElement) {
        userNameElement.textContent = randomName;
    }
}

function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeChat() {
    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!chatButton || !chatModal) return;
    
    // Open chat
    chatButton.addEventListener('click', function() {
        chatModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        chatInput.focus();
    });
    
    // Close chat
    function closeChat() {
        chatModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    chatClose.addEventListener('click', closeChat);
    
    // Close on overlay click
    chatModal.addEventListener('click', function(e) {
        if (e.target === chatModal) {
            closeChat();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatModal.classList.contains('active')) {
            closeChat();
        }
    });
    
    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const botResponse = generateBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000);
    }
    
    chatSend.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
        <span class="message-time">${timeString}</span>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
    const responses = {
        'oi': 'Olá! Como posso te ajudar hoje?',
        'olá': 'Oi! Em que posso ser útil?',
        'ajuda': 'Claro! Posso te ajudar com dúvidas sobre a plataforma, funcionalidades, ou qualquer outra questão. O que você gostaria de saber?',
        'funcionalidades': 'Nossa plataforma oferece várias funcionalidades: Dashboard com visão geral, Agenda financeira, Gestão de finanças, Relatórios e análises. Qual te interessa mais?',
        'preço': 'Temos diferentes planos disponíveis. Você pode conferir na página principal do site. Posso te ajudar com mais detalhes sobre algum plano específico?',
        'suporte': 'Para suporte técnico, você pode entrar em contato conosco pelo email capyvault@gmail.com ou continuar conversando comigo aqui!',
        'demo': 'Você está atualmente na versão demo da plataforma! Aqui você pode explorar todas as funcionalidades sem compromisso.',
        'conta': 'Para criar uma conta real, acesse nossa página principal e clique em "Começar Grátis". É muito simples e rápido!'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    // Default responses
    const defaultResponses = [
        'Interessante! Posso te ajudar com mais detalhes sobre isso.',
        'Entendi sua dúvida. Deixe-me te ajudar com isso.',
        'Ótima pergunta! Vou te explicar melhor.',
        'Posso te dar mais informações sobre isso. O que especificamente você gostaria de saber?',
        'Claro! Estou aqui para ajudar. Pode me perguntar qualquer coisa sobre a plataforma.'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function initializeInteractiveElements() {
    // Agenda item actions
    const agendaItems = document.querySelectorAll('.agenda-item');
    agendaItems.forEach(item => {
        const editBtn = item.querySelector('.btn-icon:first-child');
        const checkBtn = item.querySelector('.btn-icon:last-child');
        
        if (editBtn) {
            editBtn.addEventListener('click', function() {
                showNotification('Funcionalidade de edição em desenvolvimento!');
            });
        }
        
        if (checkBtn) {
            checkBtn.addEventListener('click', function() {
                item.style.opacity = '0.5';
                item.style.textDecoration = 'line-through';
                showNotification('Item marcado como concluído!');
            });
        }
    });
    
    // Dashboard cards hover effects
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    dashboardCards.forEach(card => {
        card.addEventListener('click', function() {
            showNotification('Detalhes expandidos em desenvolvimento!');
        });
    });
    
    // Progress bars animation
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
    
    // Filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            showNotification('Filtros aplicados!');
        });
    });
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('.demo-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'demo-notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add demo button functionality to main page
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for demo button if it exists
    const demoButtons = document.querySelectorAll('button, a');
    demoButtons.forEach(button => {
        if (button.textContent.toLowerCase().includes('demo')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'demo.html';
            });
        }
    });
});

