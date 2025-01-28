const wishes = [
    "新年人设：白天MBTI是‘已读乱回’的ISTP，晚上变身超话里‘啊啊啊我产品是真的’的追星猹，周末切小号当赛博许愿池的王八！",
    "2025功德系统：电子木鱼敲到包浆，微博吃瓜忍住不杠，甲方需求当场开光，功德量怒超全网99%佛系青年！",
    "新年副本开启！主线任务《黑神话·涨薪》，支线成就《奶茶消灭者》，隐藏关卡《三句话让老板主动给年假》！",
    "反向水逆预警：朋友圈发疯必获老板点赞，摸鱼时电脑永不熄屏，吃瓜永远比营销号快0.5秒！",
    "新年玄学：奶茶全糖不胖，抽奖SSR乱爆，周报自动生成，老板深夜绝不钉钉！",
    "2025黑科技祝福：Ctrl+F秒搜人生高光，Alt+Delete粉碎水逆，老板发言自动触发‘您说得对’弹幕护体！",
    "职场皮肤上新！打工模式穿‘自愿加班伪素颜妆’，年会皮肤切‘全公司最阴阳怪气の显眼包’，主打一个赛博变脸！",
    "新年必杀技：用‘尊嘟假嘟’瓦解老板PUA，拿‘啊我死了’暴击心动crush，靠‘笑拥了’称霸亲友表情包大战！",
    "养生朋克公式：熬最野的夜+护肝片当糖磕+保温杯里冰美式，2025继续稳坐脆皮年轻人赛道TOP1！",
    "新年隐藏福利：厕所摸鱼必遇WiFi满格，奶茶下单永远第二杯半价，朋友圈凡尔赛自动触发666连赞！",
    "电子功德拉满：微博吃瓜不站队，外卖必写辛苦了，撤回消息说‘刚被鬼附身’，2025直接功德成神！",
    "AI时代生存指南：用ChatGPT写情书，拿Sora生成旅游照，老板画饼时自动播放《我用AI挣了500万》！",
    "玄学抽奖式祝福：抽到‘老板突然失忆’SSR，解锁‘全年奶茶不胖’皮肤，掉落‘甲方撤回需求’大礼包！",
    "2025发疯指标：朋友圈文学要像《重生之我在公司种蘑菇》，微信群聊人均《职场阴学十级学者》，微博小号变身《离职倒计时bot》！",
    "电子木鱼2.0功能：敲一下=老板撤回需求，敲两下=体重秤数字随机-5，狂敲=自动生成‘听我说谢谢你’周报！",
    "新年BOSS战：用《阴阳怪气语录》对抗PUA，拿《啊对对对》盾牌反弹画饼，终极技能《已读不回》秒杀一切离谱需求！",
    "奶茶玄学：芋泥波波三分糖触发财运，芝士奶盖全糖解锁桃花，点单时默念‘升职加薪’可概率获得双倍小料！",
    "2025社交货币：朋友圈发‘班味去除术’获赞99+，微信群抛‘最新meme图’制霸斗图大赛，微博转发‘电子烧香’保送热搜！",
    "MBTI变异预测：INTP进化为‘已读乱回侠’，ENFP突变‘朋友圈戏精本精’，ISTJ黑化成‘周报生成器成精’！",
    "赛博功德速刷法：撤回消息要说‘刚被附身’，撤回红包要发‘手滑福报’，撤回表白需补‘v我50倾听心碎故事’！",
    "2025祝福加载中……%#&@系统错误！自动替换为：甲方消失术启动！奶茶永动机到账！发疯权永久保留！",
    "新年人设：朋友圈《职场阴学大师》，微博《互联网判官》，抖音《赛博许愿池王八》，现实《脆皮美式续命人》！",
    "功德银行到账通知：忍住一次杠精发言+功德+10，撤回一条阴阳怪气+功德+50，老板画饼时没笑出声→直接晋升功德暴发户！",
    "2025打工皮肤：周一会呼吸的‘嗯嗯侠’，周五变身为‘已读不回刺客’，年会限定皮肤是‘彩虹屁生成器’！",
    "老板，这是你要的狼性精神：月薪三千八，命比咖啡苦，但朋友圈必须‘热爱工作！感恩成长！’（配图凌晨三点办公室）",
    "新年KPI：摸鱼不被监控AI识别，带薪拉屎突破历史时长，把‘啊对对对’练成被动技能！",
    "转发这只电子貔貅：自动吞噬垃圾消息，排泄财运桃花，附带技能‘老板深夜钉钉必卡顿’！",
    "2025抽签结果：上上签→《黑神话·休假》，中签→《年会抽到免裁券》，下签→《老板突然想奋斗》！",
    "电子木鱼Pro Max功能：敲一下=体重-1，敲两下=存款+0，狂敲=自动生成《领导，这真的做不了》PPT！",
    "2025续命套餐：熬鹰式加班配护肝片，爆痘脸敷着面膜骂甲方，保温杯里冰美式泡枸杞，主打一个薛定谔的健康！",
    "新年体检报告预测：20岁的灵魂，30岁的腰，40岁的发际线，但心理年龄永远‘刚满十八岁’（嘴硬版）！",
    "朋克养生指标：熬夜追剧必涂贵妇眼霜，吃火锅狂炫降火茶，啤酒杯里偷偷加党参！",
    "人生游戏2025版本更新：新增副本《反卷联盟》，限定皮肤‘年会显眼包’，通关奖励《带薪抑郁假》！",
    "新年抽卡保底机制：第十次‘我真蚌埠住了’必出SSR《老板失忆》，第二十次‘啊我死了’必掉《财务自由体验卡》！",
    "2025通关秘籍：用‘尊嘟假嘟’破解老板PUA，靠‘笑拥了’免疫亲戚盘问，大招‘自动回复生成器’横扫一切离谱需求！",
    "2025社交人设：白天‘i人装e用mbti糊弄学’，深夜‘超话发疯文学十级学者’，周末‘旅行特种兵之朋友圈影帝’！",
    "微信状态自动切换：周一‘尸变中’，周三‘燃烧殆尽’，周五‘重生之我是周末战神’，周日‘求电子功德救命’！",
    "搭子系统升级：奶茶搭子自动识别‘全糖战士’，摸鱼搭子解锁‘老板雷达功能’，发疯搭子配备‘撤回后悔药’！",
    "AI祝福协议：输入‘2024受的苦’，输出‘2025发的疯’，运行代码‘while(true){ 快乐++; 班味--; }’！",
    "元宇宙新年皮肤：打工用‘社畜仿生人’外观，约会切‘韩剧男女主’滤镜，居家穿‘电子睡衣’开启防打扰模式！",
    "赛博许愿池：投币后触发‘甲方需求撤回术’，连续投币三次解锁隐藏款‘体重秤显示随机数’！"
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

