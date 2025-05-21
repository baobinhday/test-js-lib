/**
 * Options for configuring a Button
 */
export interface ButtonOptions {
  /**
   * Text to display on the button
   */
  buttonText?: string;

  /**
   * ID of the container element
   */
  containerId?: string;

  /**
   * Optional callback invoked when the button is clicked
   */
  onClick?: () => void;
}

/**
 * Type for content that can be displayed
 */
export type ButtonContent = string | HTMLElement;

/**
 * Interface for the main library export
 */
export interface ButtonLibrary {
  Button: typeof import('./Button').Button;
  createButton(options?: ButtonOptions): import('./Button').Button;
}
