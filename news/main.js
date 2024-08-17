const canvas = document.getElementById('crack-effect');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawCracks() {
    const crackLines = 1;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 2;

    for (let i = 0; i < crackLines; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        for (let j = 0; j < 2; j++) {
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        }
        ctx.stroke();
    }
}

function animateCracks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCracks();
    requestAnimationFrame(animateCracks);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateCracks();
