class UIStore {
  
  constructor() {
    this.theme = THEMES.dark;
  }

  toggle() {
    (this.theme === THEMES.light) ? (this.theme = THEMES.dark) : (this.theme = THEMES.light);
  }

  get themeClass() {
    switch(this.theme) {
      case THEMES.dark : 
        return '';
      case THEMES.light:
        return 'lightMode';
      default : 
        return '';
    }
  }
  
}

const THEMES = {
  dark: 'dark',
  light: 'light'
};

export default UIStore;
