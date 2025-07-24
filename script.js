document.addEventListener('DOMContentLoaded', function() {
    // Stars background creation (keep your existing code)
    const starsContainer = document.getElementById('stars-container');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random() * 0.5 + 0.1;
        star.style.setProperty('--duration', `${Math.random() * 5 + 3}s`);
        
        starsContainer.appendChild(star);
    }

    // Mobile menu toggle (keep your existing code)
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Header scroll effect (keep your existing code)
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll to top button (keep your existing code)
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Adicione esta função para animar os elementos 3D


// Chame a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    animate3DObjects();
    
    // Adicione os cards da seção CEO para animar
    //document.querySelectorAll('.ceo-photo-frame, .ceo-quote, .timeline-item, .ceo-stats .stat-item').forEach(el => {
        //el.style.opacity = '0';
        //el.style.transform = 'translateY(20px)';
        //el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    //});
    
    // Atualize a função animateOnScroll para incluir os novos elementos
    //const animateOnScroll = function() {
        //const elements = document.querySelectorAll(
        //    '.service-card, .portfolio-item, .stat-item, .mission-statement, ' +
         //   '.ceo-photo-frame, .ceo-quote, .timeline-item, .ceo-stats .stat-item'
        //);
        
        //elements.forEach(element => {
            //const elementPosition = element.getBoundingClientRect().top;
            //const windowHeight = window.innerHeight;
            
            //if (elementPosition < windowHeight - 100) {
            //    element.style.opacity = '1';
            //    element.style.transform = 'translateY(0)';
           //}
        //});
    //};
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez no carregamento
});

    // Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const sendToWhatsapp = document.getElementById('send_to_whatsapp');

    // Show modal function
    function showModal(title, message) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalMessage').textContent = message;
        document.getElementById('successModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close modal function
    function closeModal() {
        document.getElementById('successModal').style.display = 'none';
        document.body.style.overflow = '';
    }

    // Modal event listeners
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.querySelector('.close-modal-btn').addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        if (e.target === document.getElementById('successModal')) {
            closeModal();
        }
    });

    // WhatsApp button handler
    whatsappBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const company = document.getElementById('company').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate required fields
        if (!name || !email || !message) {
            showModal('⚠️ Campos obrigatórios', 'Por favor, preencha todos os campos marcados com *');
            return;
        }
        
        // Format WhatsApp message
        const whatsappMessage = 
            `*Nova Mensagem do Site Nexy Corp*%0A%0A` +
            `*Nome:* ${name}%0A` +
            `*Email:* ${email}%0A` +
            (company ? `*Empresa:* ${company}%0A` : '') +
            `*Mensagem:*%0A${message}`;
        
        // Open WhatsApp with prefilled message
        window.open(`https://wa.me/5561996062004?text=${whatsappMessage}`, '_blank');
        
        // Set flag to indicate WhatsApp was used
        sendToWhatsapp.value = 'yes';
        
        // Submit the form (will skip FormSubmit if WhatsApp was used)
        contactForm.dispatchEvent(new Event('submit'));
    });

    // Form submission handler
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const isWhatsapp = sendToWhatsapp.value === 'yes';
        
        // Validate required fields
        if (!isWhatsapp && (!name || !email || !message)) {
            showModal('⚠️ Campos obrigatórios', 'Por favor, preencha todos os campos marcados com *');
            return;
        }
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        submitBtn.disabled = true;
        
        try {
            if (!isWhatsapp) {
                // Send via FormSubmit
                const formData = new FormData(contactForm);
                
                const response = await fetch('https://formsubmit.co/ajax/nexycorporationn@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Erro na rede');
                }
                
                const result = await response.json();
                
                if (result.success) {
                    showModal('🚀 Mensagem Enviada!', 'Obrigado por entrar em contato. Responderemos em breve!');
                    contactForm.reset();
                } else {
                    throw new Error('Erro no envio');
                }
            } else {
                // For WhatsApp, just show success
                showModal('📱 Mensagem Enviada!', 'Sua mensagem foi enviada para nosso WhatsApp. Responderemos em breve!');
                contactForm.reset();
                sendToWhatsapp.value = 'no';
            }
        } catch (error) {
            console.error('Error:', error);
            showModal('⚠️ Erro no Envio', 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
        } finally {
            // Reset button state
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
        }
    });

    // Animate elements when they come into view (keep your existing code)
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .mission-statement');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .mission-statement').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});