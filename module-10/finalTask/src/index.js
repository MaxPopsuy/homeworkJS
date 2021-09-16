import './sass/style.scss';
import menu from './menu.json';
import template from './template/items.hbs';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const switchBtnRef = document.querySelector('.theme-switch__toggle');

const onloadTheme = () => {
    if(localStorage.getItem('theme')){
        document.querySelector('body').classList.add(`${localStorage.getItem('theme')}`);
        if(document.querySelector('body').classList.contains('dark-theme')) {
            return switchBtnRef.checked = true;
        }
    }
};

onloadTheme();

const changeThemeFn = () => {
    if(!switchBtnRef.checked) {
        localStorage.setItem('theme', Theme.LIGHT);
        document.querySelector('body').classList.remove(`${Theme.DARK}`);
        document.querySelector('body').classList.add(`${Theme.LIGHT}`);
        switchBtnRef.checked = false;
    }

    if (switchBtnRef.checked) {
        
        localStorage.setItem('theme', Theme.DARK);
        document.querySelector('body').classList.remove(`${Theme.LIGHT}`);
        document.querySelector('body').classList.add(`${Theme.DARK}`);
        switchBtnRef.checked = true;
    }
};


switchBtnRef.addEventListener('change', changeThemeFn);

const menuRef = document.querySelector('.js-menu');

const markup = template(menu);
menuRef.insertAdjacentHTML('beforeend', markup);