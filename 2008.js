// efek kilau lembut
for (let i = 0; i < 25; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.background = "rgba(255,255,255,0.7)";
    star.style.borderRadius = "50%";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animation = `twinkle ${Math.random()*3 + 2}s infinite alternate`;
    document.body.appendChild(star);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes twinkle {
    from { opacity: 0.2; }
    to { opacity: 1; }
}`;
document.head.appendChild(style);
