// AI Resume Analyzer - Main JavaScript
class ResumeAnalyzer {
    constructor() {
        this.isAnalyzing = false;
        this.uploadedFile = null;
        this.analysisData = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.createParticleBackground();
        this.animateCounters();
    }

    setupEventListeners() {
        // File upload handling
        const uploadZone = document.getElementById('uploadZone');
        const fileInput = document.getElementById('resumeFile');

        uploadZone.addEventListener('click', () => fileInput.click());
        uploadZone.addEventListener('dragover', this.handleDragOver.bind(this));
        uploadZone.addEventListener('dragleave', this.handleDragLeave.bind(this));
        uploadZone.addEventListener('drop', this.handleDrop.bind(this));
        fileInput.addEventListener('change', this.handleFileSelect.bind(this));

        // Job role selection
        document.getElementById('jobRole').addEventListener('change', this.updateSkillTags.bind(this));

        // Skill tags interaction
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('click', this.animateSkillTag.bind(this));
        });
    }

    initializeAnimations() {
        // Animate hero text
        Splitting();
        
        anime({
            targets: '[data-splitting] .char',
            translateY: [100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1400,
            delay: anime.stagger(30)
        });

        // Animate cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 800
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card-hover').forEach(card => {
            observer.observe(card);
        });
    }

    createParticleBackground() {
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.window.innerHeight;
        });
    }

    animateCounters() {
        const counters = [
            { element: document.getElementById('resumesCount'), target: 1247, duration: 2000 }
        ];

        counters.forEach(counter => {
            anime({
                targets: { count: 0 },
                count: counter.target,
                duration: counter.duration,
                easing: 'easeOutExpo',
                update: function(anim) {
                    counter.element.textContent = Math.floor(anim.animatables[0].target.count).toLocaleString();
                }
            });
        });
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('dragover');
    }

    handleDragLeave(e) {
        e.currentTarget.classList.remove('dragover');
    }

    handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            this.processFile(files[0]);
        }
    }

    handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            this.processFile(file);
        }
    }

    processFile(file) {
        if (file.type === 'application/pdf') {
            this.uploadedFile = file;
            this.showFilePreview(file.name);
            this.enableAnalysis();
        } else {
            this.showError('Please upload a PDF file.');
        }
    }

    showFilePreview(fileName) {
        document.getElementById('uploadContent').classList.add('hidden');
        document.getElementById('fileName').textContent = fileName;
        document.getElementById('filePreview').classList.remove('hidden');

        // Animate file preview
        anime({
            targets: '#filePreview',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutBack'
        });
    }

    enableAnalysis() {
        const analyzeBtn = document.getElementById('analyzeBtn');
        analyzeBtn.disabled = false;
        analyzeBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        
        // Animate button
        anime({
            targets: analyzeBtn,
            scale: [1, 1.05, 1],
            duration: 300,
            easing: 'easeInOutQuad'
        });
    }

    updateSkillTags() {
        const jobRole = document.getElementById('jobRole').value;
        const skillTags = document.querySelectorAll('.skill-tag');
        
        // Simulate skill matching based on job role
        const roleSkills = {
            'software-engineer': ['JavaScript', 'Python', 'React', 'SQL', 'Docker'],
            'data-scientist': ['Python', 'SQL', 'Machine Learning', 'AWS', 'R'],
            'product-manager': ['SQL', 'AWS', 'Business Analysis', 'Strategy'],
            'ux-designer': ['Figma', 'Adobe Creative Suite', 'User Research'],
            'marketing-manager': ['Google Analytics', 'SEO', 'Content Marketing'],
            'business-analyst': ['SQL', 'Excel', 'Tableau', 'Business Analysis']
        };

        skillTags.forEach(tag => {
            const skill = tag.textContent;
            const isRelevant = roleSkills[jobRole]?.includes(skill);
            
            if (isRelevant) {
                tag.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))';
                tag.style.borderColor = 'rgba(16, 185, 129, 0.3)';
            } else {
                tag.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))';
                tag.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }
        });
    }

    animateSkillTag(e) {
        anime({
            targets: e.target,
            scale: [1, 1.1, 1],
            duration: 200,
            easing: 'easeInOutQuad'
        });
    }

    async startAnalysis() {
        if (this.isAnalyzing) return;
        
        const jobRole = document.getElementById('jobRole').value;
        if (!jobRole) {
            this.showError('Please select a job role.');
            return;
        }

        this.isAnalyzing = true;
        this.showAnalysisProgress();
        
        try {
            await this.simulateAnalysis();
            this.analysisData = this.generateAnalysisData();
            this.redirectToResults();
        } catch (error) {
            this.showError('Analysis failed. Please try again.');
        } finally {
            this.isAnalyzing = false;
        }
    }

    showAnalysisProgress() {
        const progressSection = document.getElementById('analysisProgress');
        progressSection.classList.remove('hidden');
        
        // Animate progress section
        anime({
            targets: progressSection,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutExpo'
        });

        // Animate progress steps
        const steps = progressSection.querySelectorAll('.analysis-step');
        let currentStep = 0;

        const progressInterval = setInterval(() => {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                step.classList.add('active');
                step.classList.remove('completed');
                
                if (currentStep > 0) {
                    steps[currentStep - 1].classList.remove('active');
                    steps[currentStep - 1].classList.add('completed');
                    steps[currentStep - 1].querySelector('.w-8').classList.remove('bg-gray-300');
                    steps[currentStep - 1].querySelector('.w-8').classList.add('bg-green-500');
                    steps[currentStep - 1].querySelector('.w-8').innerHTML = '✓';
                }
                
                currentStep++;
            } else {
                clearInterval(progressInterval);
                steps.forEach(step => {
                    step.classList.remove('active');
                    step.classList.add('completed');
                    step.querySelector('.w-8').classList.remove('bg-gray-300');
                    step.querySelector('.w-8').classList.add('bg-green-500');
                    step.querySelector('.w-8').innerHTML = '✓';
                });
            }
        }, 1500);
    }

    simulateAnalysis() {
        return new Promise((resolve) => {
            setTimeout(resolve, 6000); // Simulate 6-second analysis
        });
    }

    generateAnalysisData() {
        const jobRole = document.getElementById('jobRole').value;
        const jobDescription = document.getElementById('jobDescription').value;
        
        // Generate realistic analysis data
        const scores = {
            overall: Math.floor(Math.random() * 25) + 70, // 70-95%
            skills: Math.floor(Math.random() * 30) + 65,
            experience: Math.floor(Math.random() * 25) + 70,
            education: Math.floor(Math.random() * 20) + 75,
            keywords: Math.floor(Math.random() * 35) + 60
        };

        const matchedSkills = [
            'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Agile',
            'Problem Solving', 'Communication', 'Team Leadership'
        ];

        const missingSkills = [
            'Docker', 'Kubernetes', 'AWS', 'TypeScript', 'GraphQL'
        ];

        const recommendations = [
            'Add more quantifiable achievements to your experience section',
            'Include Docker and Kubernetes in your skills section',
            'Optimize your summary section with relevant keywords',
            'Consider adding a projects section to showcase technical abilities',
            'Use action verbs like "implemented", "designed", "optimized"'
        ];

        return {
            fileName: this.uploadedFile?.name || 'resume.pdf',
            jobRole,
            jobDescription,
            scores,
            matchedSkills,
            missingSkills,
            recommendations,
            timestamp: new Date().toISOString()
        };
    }

    redirectToResults() {
        // Store analysis data in localStorage for the results page
        localStorage.setItem('analysisData', JSON.stringify(this.analysisData));
        
        // Animate transition
        anime({
            targets: 'body',
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInExpo',
            complete: () => {
                window.location.href = 'results.html';
            }
        });
    }

    showError(message) {
        // Create and show error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        // Animate error notification
        anime({
            targets: errorDiv,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutExpo'
        });

        // Remove after 5 seconds
        setTimeout(() => {
            anime({
                targets: errorDiv,
                translateX: [0, 300],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInExpo',
                complete: () => {
                    document.body.removeChild(errorDiv);
                }
            });
        }, 5000);
    }
}

// Global functions
function scrollToAnalyzer() {
    document.getElementById('analyzer').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function startAnalysis() {
    if (window.resumeAnalyzer) {
        window.resumeAnalyzer.startAnalysis();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.resumeAnalyzer = new ResumeAnalyzer();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        anime.running.forEach(anim => anim.pause());
    } else {
        // Resume animations when page becomes visible
        anime.running.forEach(anim => anim.play());
    }
});

// Utility functions for other pages
window.AnalyzerUtils = {
    formatScore: (score) => {
        return Math.round(score);
    },
    
    getScoreColor: (score) => {
        if (score >= 80) return '#10b981'; // green
        if (score >= 60) return '#f59e0b'; // amber
        return '#ef4444'; // red
    },
    
    getScoreLabel: (score) => {
        if (score >= 80) return 'Excellent';
        if (score >= 60) return 'Good';
        if (score >= 40) return 'Fair';
        return 'Needs Improvement';
    },
    
    saveToHistory: (analysisData) => {
        const history = JSON.parse(localStorage.getItem('analysisHistory') || '[]');
        history.unshift({
            ...analysisData,
            id: Date.now().toString()
        });
        
        // Keep only last 50 analyses
        if (history.length > 50) {
            history.splice(50);
        }
        
        localStorage.setItem('analysisHistory', JSON.stringify(history));
    },
    
    getHistory: () => {
        return JSON.parse(localStorage.getItem('analysisHistory') || '[]');
    }
};