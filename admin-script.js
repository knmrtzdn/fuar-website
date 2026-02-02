// Admin Panel JavaScript

// Sample Data Structure
const defaultData = {
    hero: {
        title: "FUAR STANDLARINIZI HAYATA GEÇİRİYORUZ",
        subtitle: "Yaratıcı tasarım ve mükemmel uygulamayla markanızı öne çıkarın",
        btn1: "Teklif Alın",
        btn2: "Projelerimiz",
        background: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
    },
    services: [
        {
            id: 1,
            icon: "📐",
            title: "Konsept ve Tasarım",
            description: "Markanızın kimliğini yansıtan, etkileyici ve işlevsel stand tasarımları oluşturuyoruz."
        },
        {
            id: 2,
            icon: "🏗️",
            title: "Üretim ve Uygulama",
            description: "En kaliteli malzemelerle, deneyimli ekibimiz tarafından zamanında ve kusursuz montaj hizmeti sunuyoruz."
        },
        {
            id: 3,
            icon: "💡",
            title: "Anahtar Teslim Çözümler",
            description: "Tasarımdan montaja, dekorasyon ve demontaja kadar tüm süreçleri yönetiyoruz."
        }
    ],
    portfolio: [
        {
            id: 1,
            category: "teknoloji",
            title: "TechVision 2025",
            size: "300 m²",
            location: "İstanbul Fuar Merkezi",
            description: "Modern ve minimalist tasarım yaklaşımı"
        },
        {
            id: 2,
            category: "otomotiv",
            title: "AutoExpo Premium",
            size: "450 m²",
            location: "İzmir Fuar Alanı",
            description: "Lüks otomotiv standı"
        }
    ],
    testimonials: [
        {
            id: 1,
            text: "ExpoCraft ile çalışmak harika bir deneyimdi. Tasarımdan uygulamaya kadar her aşamada profesyonelliklerini gördük.",
            author: "Ahmet Yılmaz",
            position: "TechVision CEO"
        },
        {
            id: 2,
            text: "3 farklı fuarda birlikte çalıştık. Her seferinde beklentilerimizi aşan sonuçlar aldık.",
            author: "Elif Demir",
            position: "AutoExpo Pazarlama Müdürü"
        }
    ],
    stats: {
        projects: "500+",
        experience: "15+",
        clients: "250+",
        satisfaction: "%98"
    },
    contact: {
        address: "Atatürk Mahallesi, Fuar Caddesi No:123\nŞişli / İstanbul, 34000\nTürkiye",
        phone1: "+90 212 XXX XX XX",
        phone2: "+90 555 XXX XX XX",
        email1: "info@expocraft.com",
        email2: "satis@expocraft.com",
        hoursWeekday: "Pazartesi - Cuma: 09:00 - 18:00",
        hoursSaturday: "Cumartesi: 09:00 - 14:00"
    },
    settings: {
        siteName: "EXPOCRAFT",
        siteSlogan: "Fuar Tasarım & Uygulama",
        footerText: "Fuar standlarınızı profesyonelce tasarlıyor ve uyguluyoruz.",
        copyright: "© 2026 ExpoCraft - Tüm Hakları Saklıdır",
        colorPrimary: "#1a1a1a",
        colorSecondary: "#e74c3c"
    }
};

// Initialize data from localStorage or use defaults
let siteData = JSON.parse(localStorage.getItem('expocraft-data')) || defaultData;

// Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Load initial section
    loadSection('dashboard');
    
    // Navigation click handlers
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            
            // Update active state
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Load section
            loadSection(section);
        });
    });
    
    // Save button
    document.getElementById('saveChanges').addEventListener('click', saveChanges);
    
    // Export button
    document.getElementById('exportData').addEventListener('click', exportData);
    
    // Load services
    loadServices();
    
    // Load portfolio
    loadPortfolio();
    
    // Load testimonials
    loadTestimonials();
    
    // Add button handlers
    document.getElementById('addService')?.addEventListener('click', addService);
    document.getElementById('addProject')?.addEventListener('click', addProject);
    document.getElementById('addTestimonial')?.addEventListener('click', addTestimonial);
});

function loadSection(section) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`section-${section}`)?.classList.add('active');
    
    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'hero': 'Ana Sayfa Hero',
        'about': 'Hakkımızda',
        'services': 'Hizmetler',
        'portfolio': 'Portföy',
        'process': 'Süreç',
        'testimonials': 'Yorumlar',
        'contact': 'İletişim Bilgileri',
        'stats': 'İstatistikler',
        'settings': 'Genel Ayarlar'
    };
    document.getElementById('page-title').textContent = titles[section] || section;
    
    // Load section data
    loadSectionData(section);
}

function loadSectionData(section) {
    switch(section) {
        case 'hero':
            document.getElementById('hero-title').value = siteData.hero?.title || '';
            document.getElementById('hero-subtitle').value = siteData.hero?.subtitle || '';
            document.getElementById('hero-btn1').value = siteData.hero?.btn1 || '';
            document.getElementById('hero-btn2').value = siteData.hero?.btn2 || '';
            document.getElementById('hero-bg').value = siteData.hero?.background || '';
            break;
            
        case 'stats':
            document.getElementById('stat-projects').value = siteData.stats?.projects || '500+';
            document.getElementById('stat-experience').value = siteData.stats?.experience || '15+';
            document.getElementById('stat-clients').value = siteData.stats?.clients || '250+';
            document.getElementById('stat-satisfaction').value = siteData.stats?.satisfaction || '%98';
            break;
            
        case 'contact':
            document.getElementById('contact-address').value = siteData.contact?.address || '';
            document.getElementById('contact-phone1').value = siteData.contact?.phone1 || '';
            document.getElementById('contact-phone2').value = siteData.contact?.phone2 || '';
            document.getElementById('contact-email1').value = siteData.contact?.email1 || '';
            document.getElementById('contact-email2').value = siteData.contact?.email2 || '';
            document.getElementById('contact-hours-weekday').value = siteData.contact?.hoursWeekday || '';
            document.getElementById('contact-hours-saturday').value = siteData.contact?.hoursSaturday || '';
            break;
            
        case 'settings':
            document.getElementById('site-name').value = siteData.settings?.siteName || '';
            document.getElementById('site-slogan').value = siteData.settings?.siteSlogan || '';
            document.getElementById('footer-text').value = siteData.settings?.footerText || '';
            document.getElementById('copyright-text').value = siteData.settings?.copyright || '';
            document.getElementById('color-primary').value = siteData.settings?.colorPrimary || '';
            document.getElementById('color-secondary').value = siteData.settings?.colorSecondary || '';
            break;
    }
}

function loadServices() {
    const container = document.getElementById('services-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    siteData.services?.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-actions">
                <button class="btn-edit" onclick="editService(${index})">✏️ Düzenle</button>
                <button class="btn-delete" onclick="deleteService(${index})">🗑️ Sil</button>
            </div>
            <h4>${service.icon} ${service.title}</h4>
            <p>${service.description}</p>
        `;
        container.appendChild(card);
    });
}

function loadPortfolio() {
    const container = document.getElementById('portfolio-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    siteData.portfolio?.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-actions">
                <button class="btn-edit" onclick="editProject(${index})">✏️ Düzenle</button>
                <button class="btn-delete" onclick="deleteProject(${index})">🗑️ Sil</button>
            </div>
            <h4>${project.title}</h4>
            <p><strong>Kategori:</strong> ${project.category}</p>
            <p><strong>Boyut:</strong> ${project.size} | <strong>Lokasyon:</strong> ${project.location}</p>
            <p>${project.description}</p>
        `;
        container.appendChild(card);
    });
}

function loadTestimonials() {
    const container = document.getElementById('testimonials-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    siteData.testimonials?.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-actions">
                <button class="btn-edit" onclick="editTestimonial(${index})">✏️ Düzenle</button>
                <button class="btn-delete" onclick="deleteTestimonial(${index})">🗑️ Sil</button>
            </div>
            <p>"${testimonial.text}"</p>
            <p><strong>${testimonial.author}</strong> - ${testimonial.position}</p>
        `;
        container.appendChild(card);
    });
}

function saveChanges() {
    // Save hero data
    if (document.getElementById('hero-title')) {
        siteData.hero = {
            title: document.getElementById('hero-title').value,
            subtitle: document.getElementById('hero-subtitle').value,
            btn1: document.getElementById('hero-btn1').value,
            btn2: document.getElementById('hero-btn2').value,
            background: document.getElementById('hero-bg').value
        };
    }
    
    // Save stats data
    if (document.getElementById('stat-projects')) {
        siteData.stats = {
            projects: document.getElementById('stat-projects').value,
            experience: document.getElementById('stat-experience').value,
            clients: document.getElementById('stat-clients').value,
            satisfaction: document.getElementById('stat-satisfaction').value
        };
    }
    
    // Save contact data
    if (document.getElementById('contact-address')) {
        siteData.contact = {
            address: document.getElementById('contact-address').value,
            phone1: document.getElementById('contact-phone1').value,
            phone2: document.getElementById('contact-phone2').value,
            email1: document.getElementById('contact-email1').value,
            email2: document.getElementById('contact-email2').value,
            hoursWeekday: document.getElementById('contact-hours-weekday').value,
            hoursSaturday: document.getElementById('contact-hours-saturday').value
        };
    }
    
    // Save settings data
    if (document.getElementById('site-name')) {
        siteData.settings = {
            siteName: document.getElementById('site-name').value,
            siteSlogan: document.getElementById('site-slogan').value,
            footerText: document.getElementById('footer-text').value,
            copyright: document.getElementById('copyright-text').value,
            colorPrimary: document.getElementById('color-primary').value,
            colorSecondary: document.getElementById('color-secondary').value
        };
    }
    
    // Save to localStorage
    localStorage.setItem('expocraft-data', JSON.stringify(siteData));
    
    // Show notification
    showNotification('Değişiklikler başarıyla kaydedildi!', 'success');
}

function exportData() {
    const dataStr = JSON.stringify(siteData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'expocraft-data-backup.json';
    link.click();
    
    showNotification('Veriler dışa aktarıldı!', 'success');
}

function addService() {
    const title = prompt('Hizmet Başlığı:');
    if (!title) return;
    
    const icon = prompt('Icon (emoji):');
    const description = prompt('Açıklama:');
    
    if (!siteData.services) siteData.services = [];
    
    siteData.services.push({
        id: Date.now(),
        icon: icon || '🔧',
        title: title,
        description: description || ''
    });
    
    loadServices();
    showNotification('Yeni hizmet eklendi!', 'success');
}

function addProject() {
    const title = prompt('Proje Başlığı:');
    if (!title) return;
    
    const category = prompt('Kategori (teknoloji, otomotiv, gida, vb.):');
    const size = prompt('Boyut (örn: 300 m²):');
    const location = prompt('Lokasyon:');
    const description = prompt('Açıklama:');
    
    if (!siteData.portfolio) siteData.portfolio = [];
    
    siteData.portfolio.push({
        id: Date.now(),
        category: category || 'genel',
        title: title,
        size: size || '',
        location: location || '',
        description: description || ''
    });
    
    loadPortfolio();
    showNotification('Yeni proje eklendi!', 'success');
}

function addTestimonial() {
    const text = prompt('Yorum Metni:');
    if (!text) return;
    
    const author = prompt('İsim:');
    const position = prompt('Pozisyon/Firma:');
    
    if (!siteData.testimonials) siteData.testimonials = [];
    
    siteData.testimonials.push({
        id: Date.now(),
        text: text,
        author: author || 'Anonim',
        position: position || ''
    });
    
    loadTestimonials();
    showNotification('Yeni yorum eklendi!', 'success');
}

function deleteService(index) {
    if (confirm('Bu hizmeti silmek istediğinizden emin misiniz?')) {
        siteData.services.splice(index, 1);
        loadServices();
        showNotification('Hizmet silindi!', 'success');
    }
}

function deleteProject(index) {
    if (confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
        siteData.portfolio.splice(index, 1);
        loadPortfolio();
        showNotification('Proje silindi!', 'success');
    }
}

function deleteTestimonial(index) {
    if (confirm('Bu yorumu silmek istediğinizden emin misiniz?')) {
        siteData.testimonials.splice(index, 1);
        loadTestimonials();
        showNotification('Yorum silindi!', 'success');
    }
}

function editService(index) {
    const service = siteData.services[index];
    const newTitle = prompt('Hizmet Başlığı:', service.title);
    if (newTitle) service.title = newTitle;
    
    const newIcon = prompt('Icon:', service.icon);
    if (newIcon) service.icon = newIcon;
    
    const newDesc = prompt('Açıklama:', service.description);
    if (newDesc) service.description = newDesc;
    
    loadServices();
    showNotification('Hizmet güncellendi!', 'success');
}

function editProject(index) {
    const project = siteData.portfolio[index];
    const newTitle = prompt('Proje Başlığı:', project.title);
    if (newTitle) project.title = newTitle;
    
    const newCategory = prompt('Kategori:', project.category);
    if (newCategory) project.category = newCategory;
    
    const newSize = prompt('Boyut:', project.size);
    if (newSize) project.size = newSize;
    
    const newLocation = prompt('Lokasyon:', project.location);
    if (newLocation) project.location = newLocation;
    
    const newDesc = prompt('Açıklama:', project.description);
    if (newDesc) project.description = newDesc;
    
    loadPortfolio();
    showNotification('Proje güncellendi!', 'success');
}

function editTestimonial(index) {
    const testimonial = siteData.testimonials[index];
    const newText = prompt('Yorum:', testimonial.text);
    if (newText) testimonial.text = newText;
    
    const newAuthor = prompt('İsim:', testimonial.author);
    if (newAuthor) testimonial.author = newAuthor;
    
    const newPosition = prompt('Pozisyon:', testimonial.position);
    if (newPosition) testimonial.position = newPosition;
    
    loadTestimonials();
    showNotification('Yorum güncellendi!', 'success');
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

console.log('ExpoCraft Admin Panel Loaded!');
console.log('Stored Data:', siteData);