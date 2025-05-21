import './styles.css';
import { ButtonOptions, ButtonContent } from './types';

/**
 * Button component that displays content when clicked
 */
export class Button {
  private buttonText: string;
  private containerId: string;
  private content: ButtonContent | null;
  public isContentVisible: boolean;
  private container: HTMLElement | null;
  private button: HTMLButtonElement | null;
  private contentElement: HTMLElement | null;
  private fileInput: HTMLInputElement | null;
  private onClickCallback?: (fileName: string) => void;

  /**
   * Create a new Button instance
   * @param options - Configuration options
   */
  constructor(options: ButtonOptions = {}) {
    this.buttonText = options.buttonText || 'Click Me';
    this.containerId = options.containerId || 'button-lib-container';
    this.content = null;
    this.isContentVisible = false;
    this.container = null;
    this.button = null;
    this.contentElement = null;
    this.fileInput = null;
    this.onClickCallback = options.onClick;
  }

  /**
   * Initialize the button and content container
   */
  public init(): Button {
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

    // Create hidden file input
    this.fileInput = document.createElement('input');
    this.fileInput.type = 'file';
    this.fileInput.style.display = 'none';
    this.container.appendChild(this.fileInput);

    // Create content container (initially hidden)
    this.contentElement = document.createElement('div');
    this.contentElement.className = 'button-lib-content';
    this.contentElement.style.display = 'none';
    this.container.appendChild(this.contentElement);

    // On file selection, pass filename to callback
    this.fileInput.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files && target.files[0];
      if (file && this.onClickCallback) {
        // Call the callback with the selected file name
        this.onClickCallback(`File: ${file.name}`);
      }
      // Optionally toggle content after file is picked
      this.toggleContent();
      // Reset input for next click
      if (this.fileInput) {
        this.fileInput.value = '';
      }
    });

    // On button click, trigger file input dialog
    this.button.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      if (this.fileInput) {
        this.fileInput.click();
      }
    });

    return this;
  }

  /**
   * Set the content to be displayed
   * @param content - Content to display
   */
  public setContent(content: ButtonContent): Button {
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
  public toggleContent(): Button {
    this.isContentVisible = !this.isContentVisible;
    
    if (this.contentElement) {
      this.contentElement.style.display = this.isContentVisible ? 'block' : 'none';
    }
    
    return this;
  }
}
