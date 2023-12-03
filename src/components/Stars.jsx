import { useState, useEffect, useRef } from "react";

const Stars = () => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);

        starsRef.current = Array.from({ length: 300 }, () => createStar(canvas.width, canvas.height));
        starsRef.current.forEach(star => drawStar(context, star));

        const animate = () => {
            context.fillStyle = 'black';
            context.fillRect(0, 0, canvas.width, canvas.height);
        
            starsRef.current = starsRef.current.map(star => {
                let { x, y, vx, vy, size } = star;
        
                // Update the star's position based on its velocity
                x += vx;
                y += vy;
        
                // If the star is outside the canvas, adjust its velocity to move it back towards the canvas
                if (x < 0) {
                    vx = Math.abs(vx);
                } else if (x > canvas.width) {
                    vx = -Math.abs(vx);
                }
                if (y < 0) {
                    vy = Math.abs(vy);
                } else if (y > canvas.height) {
                    vy = -Math.abs(vy);
                }
        
                return { x, y, vx, vy, size };
            });
        
            starsRef.current.forEach(star => drawStar(context, star));
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    const createStar = (width, height) => {
        const size = Math.random() * 4;
        const vx = (Math.random() - 0.5) * 0.05; // Decrease the multiplier to make the stars move slower
        const vy = (Math.random() - 0.5) * 0.05; // Decrease the multiplier to make the stars move slower
    
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

    const moveStars = (event) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        starsRef.current = starsRef.current.map(star => {
            const dx = star.x - event.clientX;
            const dy = star.y - event.clientY;
            const dist = Math.hypot(dx, dy);
    
            const mouseRadius = 100; // Increase this value to increase the mouse's area of effect
    
            if (dist < mouseRadius) {
                const forceDirectionX = dx / dist;
                const forceDirectionY = dy / dist;
    
                const force = (mouseRadius - dist) / mouseRadius;
                const directionX = forceDirectionX * force * 1; // Reduced multiplier from 5 to 2
                const directionY = forceDirectionY * force * 1; // Reduced multiplier from 5 to 2
    
                return { ...star, x: star.x + directionX, y: star.y + directionY };
            }
            return star;
        });
    
        starsRef.current.forEach(star => drawStar(context, star));
    };

    return (
        <canvas ref={canvasRef} onMouseMove={moveStars} width={window.innerWidth} height={window.innerHeight} />
    );
};

export default Stars;