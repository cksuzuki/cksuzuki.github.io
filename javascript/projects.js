const body = document.body;
const header = document.querySelector('.page-header #sticky-header');
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const projectDescription = document.getElementById('project-description');
    if (currentScroll == 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);

    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }

    if (currentScroll < projectDescription.scrollHeight && body.classList.contains(scrollUp)) {
        body.classList.remove(scrollUp);
    }

    lastScroll = currentScroll;
});