class NavigationDropdown extends HTMLElement {
    constructor() {
      super();
      
      // Get the initial expanded state from the attribute, default to false
      const initialExpanded = this.getAttribute('expanded') === 'true';
      
      this.innerHTML = `
        <div>
          <button class="dropdown-button" aria-expanded="${initialExpanded}">
            <span><strong>Navigation</strong></span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <div class="dropdown-content${initialExpanded ? ' open' : ''}">
    <nav class="chapter-nav">
      <div class="section">
        <h3>Introductions</h3>
        <ol start="1">
          <li><a href="c/01-introduction.html">Introduction</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Form</h3>
        <ol start="2">
          <li><a href="c/03-00-form-intro.html">Form Intro</a></li>
          <li><a href="c/03-01-charisma.html">Charisma</a></li>
          <li><a href="c/03-02-sound.html">Sound</a></li>
          <li><a href="c/03-03-organization.html">Organization</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Arguments</h3>
        <ol start="6">
          <li><a href="c/04-00-arguments-intro.html">Arguments Intro</a></li>
          <li><a href="c/04-01-arguments.html">Arguments</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Macro-arguments</h3>
        <ol start="8">
          <li><a href="c/05-00-macroarguments-intro.html">Macro-arguments Intro</a></li>
          <li><a href="c/05-01-disadvantage.html">Disadvantage</a></li>
          <li><a href="c/05-02-affirmative.html">Affirmative</a></li>
          <li><a href="c/05-03-counterplan.html">Counterplan</a></li>
          <li><a href="c/05-04-topicality.html">Topicality</a></li>
          <li><a href="c/05-05-theory.html">Theory</a></li>
          <li><a href="c/05-06-kritik.html">Kritik</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Research</h3>
        <ol start="15">
          <li><a href="c/06-research.html">Research</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Strategy</h3>
        <ol start="16">
          <li><a href="c/07-strategy.html">Strategy</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Conclusion</h3>
        <ol start="17">
          <li><a href="c/08-conclusion.html">Conclusion</a></li>
          <li><a href="c/09-goals.html">Goals</a></li>
        </ol>
      </div>
            <div class="section">
        <h3>Extra</h3>
        <ol start="19">
          <li><a href="c/XX-glossary.html">Glossary</a></li>
          <li><a href="c/ZZ-appendices.html">Appendices</a></li>
        </ol>
      </div>
    </nav>
  </div>
</div>
      `;
  
      // Set up click handler
      const button = this.querySelector('.dropdown-button');
      const content = this.querySelector('.dropdown-content');
      
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('open');
      });
    }
    
    // Add attribute change observer
    static get observedAttributes() {
      return ['expanded'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'expanded') {
        const button = this.querySelector('.dropdown-button');
        const content = this.querySelector('.dropdown-content');
        const isExpanded = newValue === 'true';
        
        if (button && content) {
          button.setAttribute('aria-expanded', isExpanded);
          content.classList.toggle('open', isExpanded);
        }
      }
    }
}

// Only define the component once
if (!customElements.get('navigation-dropdown')) {
  customElements.define('navigation-dropdown', NavigationDropdown);
}
