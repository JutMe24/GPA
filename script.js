// JavaScript for GPA Assurances Website

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Smooth Scrolling
function scrollToDevis() {
    document.getElementById('devis').scrollIntoView({ behavior: 'smooth' });
}

function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Navigation Active State
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-400');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-blue-400');
        }
    });
});

// Quote System
let selectedQuoteType = null;
let currentFormStep = 0;

const quoteForms = {
    auto: {
        title: "Assurance Auto",
        icon: "fas fa-car",
        color: "blue",
        fields: [
            {
                name: "vehicle_info",
                label: "Informations du véhicule",
                type: "section",
                fields: [
                    { name: "brand", label: "Marque", type: "text", required: true },
                    { name: "model", label: "Modèle", type: "text", required: true },
                    { name: "year", label: "Année", type: "number", min: "1900", max: "2024", required: true },
                    { name: "immatriculation", label: "Immatriculation", type: "text", required: true }
                ]
            },
            {
                name: "driver_info",
                label: "Informations du conducteur",
                type: "section",
                fields: [
                    { name: "name", label: "Nom complet", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Téléphone", type: "tel", required: true },
                    { name: "birth_date", label: "Date de naissance", type: "date", required: true },
                    { name: "license_date", label: "Date du permis", type: "date", required: true },
                    { name: "bonus_malus", label: "Bonus/Malus", type: "number", step: "0.01", required: true }
                ]
            },
            {
                name: "coverage",
                label: "Niveau de couverture souhaité",
                type: "radio",
                options: [
                    { value: "tiers", label: "Au tiers" },
                    { value: "tiers_plus", label: "Tiers +" },
                    { value: "tout_risque", label: "Tous risques" }
                ],
                required: true
            },
            {
                name: "usage",
                label: "Usage du véhicule",
                type: "select",
                options: [
                    { value: "personnel", label: "Usage personnel" },
                    { value: "professionnel", label: "Usage professionnel" },
                    { value: "mixte", label: "Usage mixte" }
                ],
                required: true
            }
        ]
    },
    moto: {
        title: "Assurance Moto",
        icon: "fas fa-motorcycle",
        color: "purple",
        fields: [
            {
                name: "vehicle_info",
                label: "Informations du deux-roues",
                type: "section",
                fields: [
                    { name: "brand", label: "Marque", type: "text", required: true },
                    { name: "model", label: "Modèle", type: "text", required: true },
                    { name: "year", label: "Année", type: "number", min: "1900", max: "2024", required: true },
                    { name: "cylinder", label: "Cylindrée (cm³)", type: "number", required: true },
                    { name: "immatriculation", label: "Immatriculation", type: "text", required: true }
                ]
            },
            {
                name: "driver_info",
                label: "Informations du conducteur",
                type: "section",
                fields: [
                    { name: "name", label: "Nom complet", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Téléphone", type: "tel", required: true },
                    { name: "birth_date", label: "Date de naissance", type: "date", required: true },
                    { name: "license_date", label: "Date du permis", type: "date", required: true },
                    { name: "experience", label: "Années d'expérience", type: "number", required: true }
                ]
            },
            {
                name: "coverage",
                label: "Niveau de couverture souhaité",
                type: "radio",
                options: [
                    { value: "tiers", label: "Au tiers" },
                    { value: "tiers_plus", label: "Tiers +" },
                    { value: "tout_risque", label: "Tous risques" }
                ],
                required: true
            }
        ]
    },
    habitation: {
        title: "Assurance Habitation",
        icon: "fas fa-home",
        color: "green",
        fields: [
            {
                name: "property_info",
                label: "Informations du logement",
                type: "section",
                fields: [
                    { name: "type", label: "Type de logement", type: "select", options: [
                        { value: "appartement", label: "Appartement" },
                        { value: "maison", label: "Maison" },
                        { value: "studio", label: "Studio" }
                    ], required: true },
                    { name: "surface", label: "Surface (m²)", type: "number", required: true },
                    { name: "rooms", label: "Nombre de pièces", type: "number", required: true },
                    { name: "address", label: "Adresse", type: "text", required: true },
                    { name: "postal_code", label: "Code postal", type: "text", required: true },
                    { name: "city", label: "Ville", type: "text", required: true }
                ]
            },
            {
                name: "occupancy",
                label: "Occupation",
                type: "radio",
                options: [
                    { value: "principal", label: "Résidence principale" },
                    { value: "secondary", label: "Résidence secondaire" },
                    { value: "rental", label: "Location" }
                ],
                required: true
            },
            {
                name: "personal_info",
                label: "Informations personnelles",
                type: "section",
                fields: [
                    { name: "name", label: "Nom complet", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Téléphone", type: "tel", required: true }
                ]
            },
            {
                name: "coverage",
                label: "Niveau de couverture",
                type: "checkbox",
                options: [
                    { value: "incendie", label: "Incendie" },
                    { value: "vol", label: "Vol" },
                    { value: "degats_eaux", label: "Dégâts des eaux" },
                    { value: "responsabilite_civile", label: "Responsabilité civile" },
                    { value: "valeur_a_neuf", label: "Valeur à neuf" }
                ],
                required: true
            }
        ]
    },
    decennale: {
        title: "Responsabilité Civile Décennale",
        icon: "fas fa-hard-hat",
        color: "red",
        fields: [
            {
                name: "company_info",
                label: "Informations de l'entreprise",
                type: "section",
                fields: [
                    { name: "company_name", label: "Nom de l'entreprise", type: "text", required: true },
                    { name: "siret", label: "N° SIRET", type: "text", required: true },
                    { name: "address", label: "Adresse", type: "text", required: true },
                    { name: "postal_code", label: "Code postal", type: "text", required: true },
                    { name: "city", label: "Ville", type: "text", required: true }
                ]
            },
            {
                name: "activity",
                label: "Type d'activité",
                type: "select",
                options: [
                    { value: "maconnerie", label: "Maçonnerie" },
                    { value: "charpente", label: "Charpente" },
                    { value: "couverture", label: "Couverture" },
                    { value: "plomberie", label: "Plomberie" },
                    { value: "electricite", label: "Électricité" },
                    { value: "menuiserie", label: "Menuiserie" },
                    { value: "peinture", label: "Peinture" },
                    { value: "autre", label: "Autre" }
                ],
                required: true
            },
            {
                name: "contact_info",
                label: "Coordonnées",
                type: "section",
                fields: [
                    { name: "name", label: "Nom complet", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Téléphone", type: "tel", required: true }
                ]
            },
            {
                name: "turnover",
                label: "Chiffre d'affaires annuel",
                type: "select",
                options: [
                    { value: "0-50000", label: "Moins de 50 000€" },
                    { value: "50000-100000", label: "50 000€ - 100 000€" },
                    { value: "100000-250000", label: "100 000€ - 250 000€" },
                    { value: "250000+", label: "Plus de 250 000€" }
                ],
                required: true
            }
        ]
    },
    vtc: {
        title: "Assurance VTC",
        icon: "fas fa-taxi",
        color: "yellow",
        fields: [
            {
                name: "driver_info",
                label: "Informations du chauffeur",
                type: "section",
                fields: [
                    { name: "name", label: "Nom complet", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Téléphone", type: "tel", required: true },
                    { name: "birth_date", label: "Date de naissance", type: "date", required: true },
                    { name: "license_number", label: "N° de permis", type: "text", required: true },
                    { name: "vtc_license", label: "N° de licence VTC", type: "text", required: true }
                ]
            },
            {
                name: "vehicle_info",
                label: "Informations du véhicule",
                type: "section",
                fields: [
                    { name: "brand", label: "Marque", type: "text", required: true },
                    { name: "model", label: "Modèle", type: "text", required: true },
                    { name: "year", label: "Année", type: "number", min: "1900", max: "2024", required: true },
                    { name: "immatriculation", label: "Immatriculation", type: "text", required: true },
                    { name: "passengers", label: "Nombre de places", type: "number", required: true }
                ]
            },
            {
                name: "platform",
                label: "Plateforme(s) utilisée(s)",
                type: "checkbox",
                options: [
                    { value: "uber", label: "Uber" },
                    { value: "bolt", label: "Bolt" },
                    { value: "heetch", label: "Heetch" },
                    { value: "g7", label: "G7" },
                    { value: "autre", label: "Autre" }
                ],
                required: true
            },
            {
                name: "coverage",
                label: "Type de couverture",
                type: "radio",
                options: [
                    { value: "basic", label: "Basique" },
                    { value: "premium", label: "Premium" },
                    { value: "full", label: "Tous risques" }
                ],
                required: true
            }
        ]
    },
    rcpro: {
        title: "Responsabilité Civile Professionnelle",
        icon: "fas fa-briefcase",
        color: "indigo",
        fields: [
            {
                name: "company_info",
                label: "Informations de l'entreprise",
                type: "section",
                fields: [
                    { name: "company_name", label: "Nom de l'entreprise", type: "text", required: true },
                    { name: "legal_form", label: "Forme juridique", type: "select", options: [
                        { value: "auto_entrepreneur", label: "Auto-entrepreneur" },
                        { value: "sas", label: "SAS" },
                        { value: "sarl", label: "SARL" },
                        { value: "ei", label: "Entreprise individuelle" },
                        { value: "autre", label: "Autre" }
                    ], required: true },
                    { name: "siret", label: "N° SIRET", type: "text", required: true },
                    { name: "address", label: "Adresse", type: "text", required: true },
                    { name: "postal_code", label: "Code postal", type: "text", required: true },
                    { name: "city", label: "Ville", type: "text", required: true }
                ]
            },
            {
                name: "activity",
                label: "Secteur d'activité",
                type: "select",
                options: [
                    { value: "conseil", label: "Conseil" },
                    { value: "informatique", label: "Informatique" },
                    { value: "communication", label: "Communication" },
                    { value: "formation", label: "Formation" },
                    { value: "sante", label: "Santé" },
                    { value: "beaute", label: "Beauté" },
                    { value: "artisanat", label: "Artisanat" },
                    { value: "autre", label: "Autre" }
                ],
                required: true
            },
            {
                name: "contact_info",
                label: "Coordonnées",
                type: "section",
                fields: [
                    { name: "name", label: "Nom complet", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Téléphone", type: "tel", required: true }
                ]
            },
            {
                name: "turnover",
                label: "Chiffre d'affaires annuel",
                type: "select",
                options: [
                    { value: "0-25000", label: "Moins de 25 000€" },
                    { value: "25000-50000", label: "25 000€ - 50 000€" },
                    { value: "50000-100000", label: "50 000€ - 100 000€" },
                    { value: "100000+", label: "Plus de 100 000€" }
                ],
                required: true
            },
            {
                name: "employees",
                label: "Nombre d'employés",
                type: "number", required: true
            }
        ]
    }
};

function selectQuoteType(type) {
    selectedQuoteType = type;
    currentFormStep = 0;
    
    // Update UI
    document.querySelectorAll('.quote-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.quote-type-btn').classList.add('active');
    
    // Show form
    document.getElementById('quoteTypeSelection').classList.add('hidden');
    document.getElementById('quoteForm').classList.remove('hidden');
    
    // Generate form
    generateForm(type);
}

function generateForm(type) {
    const formConfig = quoteForms[type];
    const formContent = document.getElementById('formContent');
    
    let html = `
        <div class="mb-6">
            <h3 class="text-2xl font-bold mb-2 flex items-center">
                <i class="${formConfig.icon} text-${formConfig.color}-400 mr-3"></i>
                ${formConfig.title}
            </h3>
            <div class="form-progress">
                <div class="form-progress-bar" style="width: ${(currentFormStep + 1) / formConfig.fields.length * 100}%"></div>
            </div>
        </div>
    `;
    
    // Add current step fields
    const currentField = formConfig.fields[currentFormStep];
    html += generateField(currentField, type);
    
    // Add navigation buttons
    html += `
        <div class="flex justify-between mt-8">
            ${currentFormStep > 0 ? `
                <button type="button" onclick="previousStep()" class="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-700 transition-colors">
                    <i class="fas fa-arrow-left mr-2"></i> Précédent
                </button>
            ` : '<div></div>'}
            
            ${currentFormStep < formConfig.fields.length - 1 ? `
                <button type="button" onclick="nextStep()" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    Suivant <i class="fas fa-arrow-right ml-2"></i>
                </button>
            ` : `
                <button type="submit" class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all">
                    <i class="fas fa-check mr-2"></i> Envoyer la demande
                </button>
            `}
        </div>
    `;
    
    formContent.innerHTML = html;
}

function generateField(field, formType) {
    let html = `<div class="space-y-4">`;
    
    if (field.type === 'section') {
        html += `<h4 class="text-lg font-semibold mb-4 text-${quoteForms[formType].color}-400">${field.label}</h4>`;
        field.fields.forEach(subField => {
            html += generateInput(subField);
        });
    } else if (field.type === 'radio') {
        html += `<h4 class="text-lg font-semibold mb-4">${field.label}</h4>`;
        field.options.forEach(option => {
            html += `
                <label class="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 cursor-pointer transition-colors">
                    <input type="radio" name="${field.name}" value="${option.value}" class="mr-3" required>
                    <span>${option.label}</span>
                </label>
            `;
        });
    } else if (field.type === 'checkbox') {
        html += `<h4 class="text-lg font-semibold mb-4">${field.label}</h4>`;
        field.options.forEach(option => {
            html += `
                <label class="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 cursor-pointer transition-colors">
                    <input type="checkbox" name="${field.name}[]" value="${option.value}" class="mr-3">
                    <span>${option.label}</span>
                </label>
            `;
        });
    } else if (field.type === 'select') {
        html += generateInput(field);
    }
    
    html += `</div>`;
    return html;
}

function generateInput(field) {
    let html = `
        <div>
            <label class="block text-sm font-medium mb-2 text-white">${field.label}${field.required ? ' *' : ''}</label>
    `;
    
    if (field.type === 'select') {
        html += `
            <select name="${field.name}" class="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:border-blue-400 focus:outline-none transition-colors text-black" ${field.required ? 'required' : ''}>
                <option value="">Sélectionnez...</option>
        `;
        if (field.options) {
            field.options.forEach(option => {
                html += `<option value="${option.value}">${option.label}</option>`;
            });
        }
        html += `</select>`;
    } else {
        html += `
            <input type="${field.type}" name="${field.name}" 
                   class="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:border-blue-400 focus:outline-none transition-colors text-black" 
                   ${field.required ? 'required' : ''}
                   ${field.min ? `min="${field.min}"` : ''}
                   ${field.max ? `max="${field.max}"` : ''}
                   ${field.step ? `step="${field.step}"` : ''}>
        `;
    }
    
    html += `</div>`;
    return html;
}

function nextStep() {
    if (validateCurrentStep()) {
        currentFormStep++;
        generateForm(selectedQuoteType);
    }
}

function previousStep() {
    currentFormStep--;
    generateForm(selectedQuoteType);
}

function validateCurrentStep() {
    const currentField = quoteForms[selectedQuoteType].fields[currentFormStep];
    const form = document.getElementById('devisForm');
    
    if (currentField.type === 'section') {
        for (let subField of currentField.fields) {
            const input = form.querySelector(`[name="${subField.name}"]`);
            if (input && !input.value && subField.required) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                input.focus();
                return false;
            }
        }
    } else {
        const inputs = form.querySelectorAll(`[name="${currentField.name}"]`);
        let valid = false;
        
        inputs.forEach(input => {
            if (input.checked || input.value) {
                valid = true;
            }
        });
        
        if (!valid && currentField.required) {
            showNotification('Veuillez sélectionner une option', 'error');
            return false;
        }
    }
    
    return true;
}

function resetQuoteForm() {
    selectedQuoteType = null;
    currentFormStep = 0;
    document.getElementById('quoteTypeSelection').classList.remove('hidden');
    document.getElementById('quoteForm').classList.add('hidden');
    document.querySelectorAll('.quote-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

function submitQuote(event) {
    // FormSubmit handles the email sending automatically
    // Just show loading state and let the form submit normally
    
    if (!validateCurrentStep()) {
        event.preventDefault();
        return;
    }
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="loading-spinner mx-auto"></div> Envoi en cours...';
    submitBtn.disabled = true;
    
    // Show success message after submission
    setTimeout(() => {
        showNotification('Votre demande de devis a été envoyée avec succès! Nous vous contacterons dans les plus brefs délais.', 'success');
        resetQuoteForm();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

function submitContact(event) {
    // FormSubmit handles the email sending automatically
    // Just show loading state and let the form submit normally
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="loading-spinner mx-auto"></div> Envoi en cours...';
    submitBtn.disabled = true;
    
    // Show success message after submission
    setTimeout(() => {
        showNotification('Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.', 'success');
        event.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-xl shadow-lg transform translate-x-full transition-transform duration-300`;
    
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
        notification.innerHTML = `
            <div class="flex items-center">
                <div class="success-checkmark mr-3">
                    <i class="fas fa-check text-white"></i>
                </div>
                <div>
                    <div class="font-semibold">Succès</div>
                    <div class="text-sm">${message}</div>
                </div>
            </div>
        `;
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
        notification.innerHTML = `
            <div class="flex items-center">
                <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <i class="fas fa-exclamation text-white"></i>
                </div>
                <div>
                    <div class="font-semibold">Erreur</div>
                    <div class="text-sm">${message}</div>
                </div>
            </div>
        `;
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('translate-x-0');
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Open quote form from service cards
function openQuoteForm(type) {
    scrollToDevis();
    setTimeout(() => {
        selectQuoteType(type);
    }, 500);
}

// Particle Background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Initialize particles
createParticles();

// Magnetic Button Effect
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Form Field Animation
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', () => {
        if (!field.value) {
            field.parentElement.classList.remove('focused');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .glass-effect').forEach(el => {
    observer.observe(el);
});
