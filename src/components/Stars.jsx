import { useEffect, useRef } from "react";

const Stars = () => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);
    const mousePosRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);

        starsRef.current = Array.from({ length: 400 }, () => createStar(canvas.width, canvas.height));
        starsRef.current.forEach(star => drawStar(context, star));

        const animate = () => {
            context.fillStyle = 'black';
            context.fillRect(0, 0, canvas.width, canvas.height);

            starsRef.current = starsRef.current.map(star => {
                let { x, y, vx, vy, size, forceX = 0, forceY = 0 } = star;
            
                const dx = x - mousePosRef.current.x;
                const dy = y - mousePosRef.current.y;
                const dist = Math.hypot(dx, dy);
                const mouseRadius = 100;
                if (dist < mouseRadius) {
                    const forceDirectionX = dx / dist;
                    const forceDirectionY = dy / dist;
                    const force = (mouseRadius - dist) / mouseRadius;
                    forceX += forceDirectionX * force * 0.2;
                    forceY += forceDirectionY * force * 0.2;
                }
            
                x += vx + forceX;
                y += vy + forceY;
            
                forceX *= 0.97; // Decrease the force
                forceY *= 0.97; // Decrease the force
            
                if (x < 0) {
                    vx = Math.abs(vx) + 0.005; // Increase the velocity
                } else if (x > canvas.width) {
                    vx = -Math.abs(vx) - 0.005; // Increase the velocity
                } else {
                    vx = vx > 0 ? Math.max(0.05, vx - 0.005) : Math.min(-0.05, vx + 0.005); // Slow down to normal behavior
                }
                if (y < 0) {
                    vy = Math.abs(vy) + 0.005; // Increase the velocity
                } else if (y > canvas.height) {
                    vy = -Math.abs(vy) - 0.005; // Increase the velocity
                } else {
                    vy = vy > 0 ? Math.max(0.05, vy - 0.005) : Math.min(-0.05, vy + 0.005); // Slow down to normal behavior
                }
            
                return { x, y, vx, vy, size, forceX, forceY };
            });

            starsRef.current.forEach(star => drawStar(context, star));
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    const handleMouseMove = (event) => {
        mousePosRef.current = { x: event.clientX, y: event.clientY };
    };

    const createStar = (width, height) => {
        const size = Math.random() * 4;
        const vx = (Math.random() - 0.5) * 0.05;
        const vy = (Math.random() - 0.5) * 0.05;

        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: vx,
            vy: vy,
            size: size
        };
    };

    const drawStar = (context, star) => {
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2, false);
        context.fillStyle = 'white';
        context.fill();
    };

    return (
        <canvas ref={canvasRef} onMouseMove={handleMouseMove} width={window.innerWidth} height={window.innerHeight} />);
};

export default Stars;