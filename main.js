import {
  verifiedProjects,
  verifiedExperiences,
  verifiedPublication,
  verifiedAchievements,
  verifiedCertifications
} from './src/data/portfolioData.js';

// DOM Elements
const projectsContainer = document.getElementById('projects-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('project-search');
const emptyState = document.getElementById('projects-empty');

// State
let currentFilter = 'all';
let searchQuery = '';

/**
 * Render Project Card HTML
 */
function createProjectCard(project) {
  const badgeClass =
    project.category === 'embedded' ? 'badge-embedded' :
    project.category === 'hardware' ? 'badge-hardware' :
    project.category === 'ai-ml' ? 'badge-aiml' : 'badge-fullstack';

  const archItems = project.hardwareAndArch.map(item => `<li>${item}</li>`).join('');
  const tags = project.techStack.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

  const demoAction = project.demoUrl
    ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-blue" aria-label="Live Demo for ${project.title}">
         <i class="fas fa-arrow-up-right-from-square"></i> Live Demo
       </a>`
    : '';

  return `
    <article class="project-card" data-category="${project.category}">
      <div class="project-top">
        <span class="project-badge ${badgeClass}">${project.categoryLabel}</span>
        ${project.featured ? '<span class="domain-chip" style="color: var(--accent); font-weight:700;">Featured</span>' : ''}
      </div>

      <h3 class="project-title">${project.title}</h3>
      <p class="project-tagline">${project.tagline}</p>
      
      <p class="project-desc-block"><strong>Overview:</strong> ${project.contribution}</p>

      <div class="project-subhead">Key Architecture & Hardware:</div>
      <ul class="project-arch-list">
        ${archItems}
      </ul>

      ${project.results ? `<div class="project-results"><strong>Engineering Result:</strong> ${project.results}</div>` : ''}

      <div class="project-tags">
        ${tags}
      </div>

      <div class="project-actions">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" aria-label="View source repository for ${project.title}">
          <i class="fab fa-github"></i> Repository
        </a>
        ${demoAction}
      </div>
    </article>
  `;
}

/**
 * Filter & Search projects
 */
function renderProjects() {
  if (!projectsContainer) return;

  const filtered = verifiedProjects.filter(p => {
    const matchesFilter = (currentFilter === 'all') || (p.category === currentFilter);
    const searchTarget = (p.title + ' ' + p.tagline + ' ' + p.contribution + ' ' + p.techStack.join(' ')).toLowerCase();
    const matchesSearch = !searchQuery || searchTarget.includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    projectsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    projectsContainer.innerHTML = filtered.map(createProjectCard).join('');
  }
}

// Initialize Interactive Controls
document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderProjects();

  // Filters
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProjects();
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on navigation click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Navbar shadow on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
});
