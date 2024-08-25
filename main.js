const devInfo = {
    jazzie: {
        name: "Jazzie",
        role: "Lead Developer and Owner",
        bio: "Jazzie is the leader behind Kaino Executor, having over a decade of exploiting experience.",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/334467683896524800" },
        ]
    },
    aurora: {
        name: "aurora",
        role: "Bypass Developer",
        bio: "Aurora is the Bypass Developer. With years of experience in programming she is assistant in keeping Kaino undetected.",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/658096702741282836" },
        ]
    },
    anilsa: {
        name: "anilsa",
        role: "Security and Decompiling",
        bio: "Anilsa is our security, ensuring Kaino Executor remains safe and undetectable.",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/1014984974065205290" },
        ]
    },
    danmark3110: {
        name: "danmark3110",
        role: "retarded",
        bio: "Best coder fr",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/696398306430943272" },
        ]
    },
    xiel: {
        name: "Xiel",
        role: "idfk",
        bio: "this dude just here honestly.",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/1041361197355761795" },
        ]
    }
};

function animatecontent() {
    gsap.to('.content', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
}

function animatetitle() {
    gsap.to('.title', { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: 'power2.out' });
}

function animatesubtitle() {
    gsap.to('.subtitle', { opacity: 1, y: 0, duration: 0.5, delay: 0.4, ease: 'power2.out' });
}

function animatekeyfeatures() {
    gsap.to('.key-features li', { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.key-features',
            start: 'top 80%'
        }
    });
}

function animateimagecards() {
    gsap.to('.image-card', { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.image-gallery',
            start: 'top 80%'
        }
    });
}

function animatedevcards() {
    gsap.to('.dev-card', { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.dev-grid',
            start: 'top 80%'
        }
    });
}

function animatedownloadcontent() {
    gsap.to('.download-content', { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.download-content',
            start: 'top 80%'
        }
    });
}

function openFullImage(img, index) {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    const fullImage = document.getElementById('fullImage');
    
    fullImage.src = img.src;
    fullImageOverlay.style.display = 'flex';
    currentImageIndex = index;

    gsap.fromTo(fullImage, 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
    );
}

function closeFullImage() {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    const fullImage = document.getElementById('fullImage');

    gsap.to(fullImage, { 
        opacity: 0, 
        scale: 0.9, 
        duration: 0.3, 
        ease: 'power2.in',
        onComplete: () => {
            fullImageOverlay.style.display = 'none';
        }
    });
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    const fullImage = document.getElementById('fullImage');
    gsap.to(fullImage, { 
        opacity: 0, 
        scale: 0.9, 
        duration: 0.3, 
        ease: 'power2.in',
        onComplete: () => {
            fullImage.src = images[currentImageIndex].src;
            gsap.to(fullImage, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
        }
    });
}

function setupdevmodal() {
    const modal = document.getElementById("devModal");
    const devCards = document.querySelectorAll(".dev-card");
    const closeBtn = document.querySelector(".close");

    devCards.forEach(card => {
        card.addEventListener("click", () => {
            const devId = card.getAttribute("data-dev-id");
            openDevModal(devId);
        });
    });

    closeBtn.addEventListener("click", closeDevModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeDevModal();
        }
    });
}

function openDevModal(devId) {
    const modal = document.getElementById("devModal");
    const dev = devInfo[devId];
    document.getElementById("devModalImage").src = `images/${devId}.png`;
    document.getElementById("devModalName").textContent = dev.name;
    document.getElementById("devModalRole").textContent = dev.role;
    document.getElementById("devModalBio").textContent = dev.bio;
    
    const linksContainer = document.getElementById("devModalLinks");
    linksContainer.innerHTML = "";
    dev.links.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        linkElement.className = "dev-link";
        linkElement.target = "_blank";
        linksContainer.appendChild(linkElement);
    });

    modal.style.display = "block";
    gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(".modal-content", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, delay: 0.1 });
}

function closeDevModal() {
    const modal = document.getElementById("devModal");
    gsap.to(modal, { opacity: 0, duration: 0.3, onComplete: () => {
        modal.style.display = "none";
    }});
}

let currentImageIndex = 0;
const images = document.querySelectorAll('.image-card img');

document.addEventListener('DOMContentLoaded', () => {
    animatecontent();
    animatetitle();
    animatesubtitle();
    animatekeyfeatures();
    animateimagecards();
    animatedevcards();
    animatedownloadcontent();
    setupdevmodal();
});

document.getElementById('fullImageOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'fullImageOverlay') {
        closeFullImage();
    }
});

document.addEventListener('keydown', (e) => {
    if (document.getElementById('fullImageOverlay')?.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeFullImage();
        }
    }
});