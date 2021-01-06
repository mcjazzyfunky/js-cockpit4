export = JSX

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sl-button': any
      'sl-select': any
      'sl-menu-item': any
      'sl-element': any
    }
  }
}
