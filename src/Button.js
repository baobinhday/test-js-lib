import './styles.css';

/**
 * Button component that displays content when clicked
 */
export class Button {
  /**
   * Create a new Button instance
   * @param {Object} options - Configuration options
   * @param {string} options.buttonText - Text to display on the button
   * @param {string} options.containerId - ID of the container element
   */
  constructor(options = {}) {
    this.buttonText = options.buttonText || 'Click Me';
    this.containerId = options.containerId || 'button-lib-container';
    this.content = null;
    this.isContentVisible = false;
    this.container = null;
    this.button = null;
    this.contentElement = null;
  }

  /**
   * Initialize the button and content container
   */
  init() {
    // Find or create container
    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = this.containerId;
      document.body.appendChild(this.container);
    }
    
    // Clear container
    this.container.innerHTML = '';
    
    // Create button
    this.button = document.createElement('button');
    this.button.textContent = this.buttonText;
    this.button.className = 'button-lib-button';
    this.container.appendChild(this.button);
    
    // Create content container (initially hidden)
    this.contentElement = document.createElement('div');
    this.contentElement.className = 'button-lib-content';
    this.contentElement.style.display = 'none';
    this.container.appendChild(this.contentElement);
    
    // Add click event listener
    this.button.addEventListener('click', this.toggleContent.bind(this));
    
    return this;
  }

  /**
   * Set the content to be displayed
   * @param {string|HTMLElement} content - Content to display
   */
  setContent(content) {
    this.content = content;
    
    if (this.contentElement) {
      if (typeof content === 'string') {
        this.contentElement.innerHTML = content;
      } else if (content instanceof HTMLElement) {
        this.contentElement.innerHTML = '';
        this.contentElement.appendChild(content);
      }
    }
    
    return this;
  }

  /**
   * Toggle content visibility
   */
  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
    
    if (this.contentElement) {
      this.contentElement.style.display = this.isContentVisible ? 'block' : 'none';
    }
    
    return this;
  }
}
