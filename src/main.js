// Cursor follow + smooth secondary cursor
const cur = document.getElementById('cur'), curR = document.getElementById('curR');
let mx = 0, my = 0, rx = 0, ry = 0;
if (cur && curR) {
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function tick() {
        cur.style.left = mx + 'px'; cur.style.top = my + 'px';
        rx += (mx - rx) * .1; ry += (my - ry) * .1;
        curR.style.left = rx + 'px'; curR.style.top = ry + 'px';
        requestAnimationFrame(tick);
    })();
}

// Reveal animation using IntersectionObserver
const els = document.querySelectorAll('.r,.rL');
if (els && els.length) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const sibs = [...e.target.parentElement.querySelectorAll('.r,.rL')];
                const i = sibs.indexOf(e.target);
                setTimeout(() => e.target.classList.add('v'), i * 80);
                io.unobserve(e.target);
            }
        });
    }, { threshold: .1 });
    els.forEach(el => io.observe(el));
}
