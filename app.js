const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const ten = document.querySelector('.ten')
const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
const e = document.querySelector('.e')
const f = document.querySelector('.f')
const g = document.querySelector('.g')
const h = document.querySelector('.h')
const i = document.querySelector('.i')
const j = document.querySelector('.j')
const openMenu = document.querySelector('.open-menu-bar');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const navMenu = document.querySelector('.nav__menu');
window.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        sections.forEach((section) => {
            section.classList.remove('active-section')
        })
        const element = document.getElementById(id);
        element.classList.add('active-section');
    }
})

// CHANGE THE NAV BAR STYLES ON SCROLL
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('window-scroll');
    } else {
        nav.classList.remove('window-scroll');
    }
})

function click() {

    one.addEventListener('click', () => {
        a.classList.toggle('open')
        b.classList.remove('open')
        c.classList.remove('open')
        d.classList.remove('open')
        e.classList.remove('open')
        f.classList.remove('open')
        g.classList.remove('open')
        h.classList.remove('open')
        i.classList.remove('open')
        j.classList.remove('open')
    })

    two.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.toggle('open')
        c.classList.remove('open')
        d.classList.remove('open')
        e.classList.remove('open')
        f.classList.remove('open')
        g.classList.remove('open')
        h.classList.remove('open')
        i.classList.remove('open')
        j.classList.remove('open')
    })

    three.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.remove('open')
        c.classList.toggle('open')
        d.classList.remove('open')
        e.classList.remove('open')
        f.classList.remove('open')
        g.classList.remove('open')
        h.classList.remove('open')
        i.classList.remove('open')
        j.classList.remove('open')
    })

    four.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.remove('open')
        c.classList.remove('open')
        d.classList.toggle('open')
        e.classList.remove('open')
        f.classList.remove('open')
        g.classList.remove('open')
        h.classList.remove('open')
        i.classList.remove('open')
        j.classList.remove('open')
    })

    five.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.remove('open')
        c.classList.remove('open')
        d.classList.remove('open')
        e.classList.toggle('open')
        f.classList.remove('open')
        g.classList.remove('open')
        h.classList.remove('open')
        i.classList.remove('open')
        j.classList.remove('open')
    })

    six.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.remove('open')
        c.classList.remove('open')
        d.classList.remove('open')
        e.classList.remove('open')
        f.classList.toggle('open')
        g.classList.remove('open')
        h.classList.remove('open')
        i.classList.remove('open')
        j.classList.remove('open')
    })

    seven.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.remove('open')
        c.classList.remove('open')
        d.classList.remove('open')
        e.classList.remove('open')
        f.classList.remove('open')
        g.classList.toggle('open')
        h.classList.remove('open')
        i.classList.remove('open')
        j.classList.remove('open')
    })

    eight.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.remove('open')
        c.classList.remove('open')
        d.classList.remove('open')
        e.classList.remove('open')
        f.classList.remove('open')
        g.classList.remove('open')
        h.classList.toggle('open')
        i.classList.remove('open')
        j.classList.remove('open')
    })

    nine.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.remove('open')
        c.classList.remove('open')
        d.classList.remove('open')
        e.classList.remove('open')
        f.classList.remove('open')
        g.classList.remove('open')
        h.classList.remove('open')
        i.classList.toggle('open')
        j.classList.remove('open')
    })

    ten.addEventListener('click', () => {
        a.classList.remove('open')
        b.classList.remove('open')
        c.classList.remove('open')
        d.classList.remove('open')
        e.classList.remove('open')
        f.classList.remove('open')
        g.classList.remove('open')
        h.classList.remove('open')
        i.classList.remove('open')
        j.classList.toggle('open')
    })
}

window.addEventListener('DOMContentLoaded', click);

openMenu.addEventListener('click', () => {
    first.classList.toggle('flat');
    second.classList.toggle('remove');
    third.classList.toggle('flip');
    navMenu.classList.toggle('show');
})

navMenu.addEventListener('click', () => {
    first.classList.remove('flat');
    second.classList.toggle('remove');
    third.classList.remove('flip');
    navMenu.classList.remove('show');
})

const eha = document.querySelectorAll('.eha');
eha.forEach((item) => {
    item.addEventListener('click', () => {
        first.classList.remove('flat');
        second.classList.remove('remove');
        third.classList.remove('flip');
        navMenu.classList.remove('show');
    })
})