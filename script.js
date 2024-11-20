// Dynamic Content Management
document.addEventListener('DOMContentLoaded', () => {
    // Update Tagline
    const tagline = document.getElementById('tagline');
    tagline.textContent = "Passionate Professional | Innovator | Problem Solver";

    // Update About Text
    const aboutText = document.getElementById('about-text');
    aboutText.textContent = "A dedicated professional with a passion for innovation and continuous learning. I thrive on challenges and am committed to making a meaningful impact through my work.";

    // Experience Data
    const experiences = [
        {
            title: "Senior Software Developer",
            company: "Promact Infotech Pvt Ltd",
            duration: "6+ years",
            description: "Leading development teams, implementing enterprise solutions, and managing product development lifecycle.",
            highlights: [
                "Mentoring newer software developers",
                "Requirement gathering and analysis",
                "Process implementation in agile system",
                "Technical leadership and roadblock resolution"
            ]
        }
    ];

    const experienceList = document.getElementById('experience-list');
    experiences.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.classList.add('mb-6', 'border-b', 'pb-4');
        expElement.innerHTML = `
            <h3 class="text-xl font-semibold">${exp.title} at ${exp.company}</h3>
            <p class="text-gray-600">${exp.duration}</p>
            <p class="mt-2">${exp.description}</p>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
                ${exp.highlights.map(highlight => 
                    `<li class="text-sm">${highlight}</li>`
                ).join('')}
            </ul>
        `;
        experienceList.appendChild(expElement);
    });

    // Projects Data
    const projects = [
        {
            name: "IA-Tool-KPMG",
            description: "Internal audit tool for KPMG employees, automating audit processes and strategic analysis.",
            technologies: [".NET Core 3.1", "Angular 8", "SQL Server"],
            highlights: [
                "Automated audit process",
                "Strategic analysis implementation",
                "Dynamic table development",
                "Azure integration"
            ]
        },
        {
            name: "Crompton and MZI",
            description: "CRM for Service Operation Management (SOM) with ticket management and auto claim handling.",
            technologies: [".NET Framework", "AngularJS", "MySQL"],
            highlights: [
                "Ticket management system",
                "Auto claim processing",
                "User role management",
                "Bill generation automation"
            ]
        },
        {
            name: "Billboard Management System",
            description: "Marketing-based aggregator for billboard advertising in Saudi Arabia.",
            technologies: ["Angular 10+", "PostgreSQL", "Flutter"],
            highlights: [
                "Online billboard space management",
                "Advertisement booking system",
                "Multi-platform support",
                "Location-based services"
            ]
        },
        {
            name: "Project Saturn",
            description: "Enterprise solution helping SMEs identify growth opportunities and improve market competitiveness.",
            technologies: ["Abp.io", "C#", "Angular", "PostgreSQL"],
            highlights: [
                "Business analysis tools",
                "Growth opportunity identification",
                "Competitive analysis",
                "Strategic planning features"
            ]
        }
    ];

    const projectsList = document.getElementById('projects-list');
    projects.forEach(proj => {
        const projElement = document.createElement('div');
        projElement.classList.add('bg-gray-50', 'p-6', 'rounded-xl', 'shadow-sm', 'hover:shadow-md', 'transition-shadow', 'duration-300');
        projElement.innerHTML = `
            <h3 class="text-xl font-semibold mb-3">${proj.name}</h3>
            <p class="text-gray-600 mb-4">${proj.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${proj.technologies.map(tech => 
                    `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${tech}</span>`
                ).join('')}
            </div>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
                ${proj.highlights.map(highlight => 
                    `<li class="text-sm">${highlight}</li>`
                ).join('')}
            </ul>
        `;
        projectsList.appendChild(projElement);
    });

    // Initialize any interactive elements
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
