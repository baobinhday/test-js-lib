import './styles.css';
import { ButtonOptions, ButtonContent } from './types';
/**
 * Button component that displays content when clicked
 */
export declare class Button {
    private buttonText;
    private containerId;
    private content;
    isContentVisible: boolean;
    private container;
    private button;
    private contentElement;
    /**
     * Create a new Button instance
     * @param options - Configuration options
     */
    constructor(options?: ButtonOptions);
    /**
     * Initialize the button and content container
     */
    init(): Button;
    /**
     * Set the content to be displayed
     * @param content - Content to display
     */
    setContent(content: ButtonContent): Button;
    /**
     * Toggle content visibility
     */
    toggleContent(): Button;
}
