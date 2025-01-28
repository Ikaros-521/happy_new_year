const wishes = [
    "愿新的一年里,你的快乐比树叶还多,烦恼比肉眼能看见的细菌还少。",
    "祝福你在新的一年里,心想事成,万事如意!",
    "愿你的新年,充满温暖如春,洋溢喜悦如夏,硕果累累如秋,冷静睿智如冬。",
    "愿新年为你携来温暖的阳光、芬芳的花香、灿烂的笑。",
    "愿你在新的一年里,梦想成真,事业有成,爱情甜蜜,家庭幸福。",
    "祝你新年快乐,身体健康,工作顺利,生活美满,万事如意!",
    "愿新的一年里,你的生活如蜜般甜,如花般美,如诗般雅。",
    "祝愿你在新的一年里,每一天都充满欢笑,每一刻都洋溢幸福。",
    "愿新年带给你无限的希望,无尽的快乐,无处不在的温暖。",
    "祝你新年快乐,前程似锦,万事顺心,喜气洋洋!",
]

const backgrounds = [
    "linear-gradient(to bottom right, #3b82f6, #8b5cf6)",
    "linear-gradient(to bottom right, #10b981, #3b82f6)",
    "linear-gradient(to bottom right, #f472b6, #fbbf24)",
    "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
    "linear-gradient(to bottom right, #ef4444, #f97316)",
]

const wishDisplay = document.getElementById("wishDisplay")
const changeWishBtn = document.getElementById("changeWishBtn")
const canvas = document.getElementById("backgroundCanvas")
const ctx = canvas.getContext("2d")

const particles = []

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((particle, index) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.size -= 0.1

        if (particle.size <= 0.2) {
            particles.splice(index, 1)
        }
    })

    while (particles.length < 100) {
        particles.push(createParticle())
    }

    requestAnimationFrame(drawParticles)
}

function setRandomBackground() {
    const background = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    canvas.style.background = background
}

function displayWish(wish) {
    wishDisplay.style.opacity = "0"
    setTimeout(() => {
        wishDisplay.textContent = wish
        wishDisplay.style.opacity = "1"
    }, 500)
}

function getRandomWish() {
    const wish = wishes[Math.floor(Math.random() * wishes.length)]
    displayWish(wish)
}

changeWishBtn.addEventListener("click", getRandomWish)

window.addEventListener("resize", resizeCanvas)

// 初始化
resizeCanvas()
setRandomBackground()
getRandomWish()
drawParticles()

// 每10秒更换背景
setInterval(setRandomBackground, 10000)

