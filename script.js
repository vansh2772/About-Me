document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section and make it active
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Populate skills section
    const softSkills = [
        "Problem-Solving",
        "Collaboration & Teamwork",
        "Time Management",
        "Communication",
        "Adaptability",
        "Attention to Detail",
        "Creativity",
        "Continuous Learning"
    ];
    
    // Add tools and technologies skills
    const techSkills = [
        "Git",
        "VS Code",
        "npm",
        "Webpack",
        "Figma",
        "Firebase",
        "Basic Python",
        "Canva"
    ];
    
    const techSkillsList = document.querySelector('#skills .skill-category:nth-child(2) .skills-list');
    if (techSkillsList) {
        techSkillsList.innerHTML = '';
        techSkills.forEach(skill => {
            const skillItem = document.createElement('li');
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillItem.appendChild(skillTag);
            techSkillsList.appendChild(skillItem);
        });
    }
    
    const softSkillsList = document.querySelector('#skills .skill-category:nth-child(3) .skills-list');
    if (softSkillsList) {
        softSkillsList.innerHTML = '';
        softSkills.forEach(skill => {
            const skillItem = document.createElement('li');
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillItem.appendChild(skillTag);
            softSkillsList.appendChild(skillItem);
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const formLoading = document.querySelector('.form-loading');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Redirect to external form
            window.open('https://fb8sto14.forms.app/contact-us', '_blank');
            
            // Show success message
            formStatus.textContent = 'Redirecting you to the contact form...';
            formStatus.className = 'form-status success';
            
            // Reset the form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        });
    }
});