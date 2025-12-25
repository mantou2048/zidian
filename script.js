// 中华字典数据
const dictionary = {
    '人': {
        pinyin: 'rén',
        strokes: '2',
        radicals: '人',
        meaning: '能制造工具并使用工具进行劳动的高等动物。',
        examples: '人民、人类、人生、为人处世',
        composition: '象形字。甲骨文字形，象侧面站立的人形。',
        idioms: '人山人海、人才济济、人定胜天'
    },
    '天': {
        pinyin: 'tiān',
        strokes: '4',
        radicals: '大',
        meaning: '在地面以上的高空；日、月、星辰罗列的广大空间；自然界；一昼夜；季节、气候。',
        examples: '天空、天气、春天、天天、天地',
        composition: '会意字。甲骨文字形，像正面的人形，用方框突出人的头部。',
        idioms: '天长地久、天衣无缝、天马行空'
    },
    '地': {
        pinyin: 'dì',
        strokes: '6',
        radicals: '土',
        meaning: '人类生长活动的所在；地球；土地；地面；区域；所在空间的部分。',
        examples: '土地、地方、地球、天地、草地',
        composition: '形声字。从土，也声。',
        idioms: '天崩地裂、地久天长、地大物博'
    },
    '水': {
        pinyin: 'shuǐ',
        strokes: '4',
        radicals: '水',
        meaning: '一种无色、无臭、透明的液体；河流；江河湖海的统称。',
        examples: '水果、河水、开水、水面、水平',
        composition: '象形字。甲骨文字形，像水流形状。',
        idioms: '水到渠成、水深火热、水落石出'
    },
    '火': {
        pinyin: 'huǒ',
        strokes: '4',
        radicals: '火',
        meaning: '燃烧，物质燃烧时所发出的光和焰；紧急；愤怒；中医指发炎、红肿等症状。',
        examples: '火焰、火车、火山、火热、火力',
        composition: '象形字。甲骨文字形，像火焰形状。',
        idioms: '火上浇油、火烧眉毛、火眼金睛'
    },
    '木': {
        pinyin: 'mù',
        strokes: '4',
        radicals: '木',
        meaning: '树木；木头；木制的；质朴；呆板。',
        examples: '木头、树木、木材、木板、木工',
        composition: '象形字。甲骨文字形，像树木形状。',
        idioms: '木已成舟、木本水源、呆若木鸡'
    },
    '金': {
        pinyin: 'jīn',
        strokes: '8',
        radicals: '金',
        meaning: '一种化学元素，符号Au，原子序数79；金属；金黄色；珍贵的；货币。',
        examples: '金子、黄金、金色、金钱、金属',
        composition: '会意字。金文字形，像在泥土中的金块。',
        idioms: '金玉良言、金榜题名、金碧辉煌'
    },
    '土': {
        pinyin: 'tǔ',
        strokes: '3',
        radicals: '土',
        meaning: '地面上的泥沙混合物；土地；本地的；民间生产的。',
        examples: '土地、泥土、土壤、本土、土豆',
        composition: '象形字。甲骨文字形，像土堆形状。',
        idioms: '土崩瓦解、入土为安、土生土长'
    },
    '山': {
        pinyin: 'shān',
        strokes: '3',
        radicals: '山',
        meaning: '地面上由土石构成的隆起部分；形状像山的东西。',
        examples: '山峰、高山、山水、山林、山区',
        composition: '象形字。甲骨文字形，像山峰并立的形状。',
        idioms: '山穷水尽、山明水秀、开门见山'
    },
    '日': {
        pinyin: 'rì',
        strokes: '4',
        radicals: '日',
        meaning: '太阳；白天；一天；时间的计算单位；每天。',
        examples: '日子、日期、日光、生日、日常',
        composition: '象形字。甲骨文字形，像太阳形状。',
        idioms: '日新月异、日积月累、日理万机'
    },
    '月': {
        pinyin: 'yuè',
        strokes: '4',
        radicals: '月',
        meaning: '月球；月亮；月光；时间单位，一年分为十二个月。',
        examples: '月亮、月光、月份、一月、岁月',
        composition: '象形字。甲骨文字形，像月牙形状。',
        idioms: '月白风清、月圆花好、花好月圆'
    },
    '风': {
        pinyin: 'fēng',
        strokes: '4',
        radicals: '风',
        meaning: '空气流动的现象；风气；风度；消息；习俗。',
        examples: '风景、大风、风格、风气、风俗',
        composition: '会意字。从虫，凡声，原指风神。',
        idioms: '风调雨顺、风和日丽、乘风破浪'
    },
    '雨': {
        pinyin: 'yǔ',
        strokes: '8',
        radicals: '雨',
        meaning: '从云层中降落的水滴；下雨；雨水；像雨一样的东西。',
        examples: '下雨、雨水、雨天、雨季、暴雨',
        composition: '象形字。甲骨文字形，像雨点从天而降。',
        idioms: '雨后春笋、风雨同舟、和风细雨'
    },
    '云': {
        pinyin: 'yún',
        strokes: '4',
        radicals: '二',
        meaning: '说；悬浮在空中的水滴、冰晶的集合体；云南的简称。',
        examples: '云朵、白云、云彩、风云、乌云',
        composition: '象形字。甲骨文字形，像云气形状。',
        idioms: '云开雾散、腾云驾雾、拨云见日'
    },
    '石': {
        pinyin: 'shí',
        strokes: '5',
        radicals: '石',
        meaning: '构成地壳的矿物质硬块；石头；石制的；坚硬。',
        examples: '石头、岩石、石块、石油、化石',
        composition: '象形字。甲骨文字形，像石块形状。',
        idioms: '石破天惊、水滴石穿、点石成金'
    },
    '竹': {
        pinyin: 'zhú',
        strokes: '6',
        radicals: '竹',
        meaning: '常绿多年生植物，茎圆柱形，有节，中空；竹制品。',
        examples: '竹子、竹林、竹笋、竹竿、竹篮',
        composition: '象形字。甲骨文字形，像竹叶形状。',
        idioms: '胸有成竹、竹报平安、青梅竹马'
    },
    '花': {
        pinyin: 'huā',
        strokes: '7',
        radicals: '艹',
        meaning: '植物的繁殖器官；开花或供观赏的植物；形状像花的东西；颜色或种类复杂的。',
        examples: '花朵、鲜花、开花、花园、花生',
        composition: '形声字。从艹，化声。',
        idioms: '花好月圆、花团锦簇、锦上添花'
    },
    '草': {
        pinyin: 'cǎo',
        strokes: '9',
        radicals: '艹',
        meaning: '对高等植物中除了树木、庄稼、蔬菜以外的茎叶柔软植物的统称；草本植物。',
        examples: '小草、青草、草地、草原、草木',
        composition: '形声字。从艹，早声。',
        idioms: '草木皆兵、寸草春晖、斩草除根'
    },
    '林': {
        pinyin: 'lín',
        strokes: '8',
        radicals: '木',
        meaning: '成片的树木；聚集在一起的同类的人或事物。',
        examples: '森林、树林、林业、林地、林区',
        composition: '会意字。从二木，表示树木丛生。',
        idioms: '林林总总、独木不成林、枪林弹雨'
    },
    '田': {
        pinyin: 'tián',
        strokes: '5',
        radicals: '田',
        meaning: '种植农作物的土地；和农业有关的。',
        examples: '田地、农田、水田、田野、田园',
        composition: '象形字。甲骨文字形，像田地的形状。',
        idioms: '沧海桑田、田园风光、瓜田李下'
    }
};

// 获取所有汉字键
const allChars = Object.keys(dictionary);

// 页面加载时显示所有常用汉字
window.onload = function() {
    displayAllChars();
};

// 显示所有汉字
function displayAllChars() {
    const charGrid = document.getElementById('charGrid');
    charGrid.innerHTML = '';

    allChars.forEach(char => {
        const charItem = document.createElement('div');
        charItem.className = 'char-item';
        charItem.textContent = char;
        charItem.onclick = () => showCharInfo(char);
        charGrid.appendChild(charItem);
    });
}

// 搜索汉字
function searchChar() {
    const input = document.getElementById('searchInput').value.trim();

    if (!input) {
        alert('请输入一个汉字');
        return;
    }

    showCharInfo(input);
}

// 显示汉字信息
function showCharInfo(char) {
    const resultDiv = document.getElementById('result');
    const charData = dictionary[char];

    if (!charData) {
        resultDiv.innerHTML = `
            <div class="char-display">
                <div class="main-char">${char}</div>
                <div class="char-info">
                    <div class="info-item">
                        <div class="info-content" style="text-align: center; color: #999;">
                            抱歉，字典中暂未收录"${char}"字的详细信息。
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    resultDiv.innerHTML = `
        <div class="char-display">
            <div class="main-char">${char}</div>
            <div class="char-info">
                <div class="info-item">
                    <div class="info-label">拼音</div>
                    <div class="info-content">${charData.pinyin}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">笔画</div>
                    <div class="info-content">${charData.strokes} 画</div>
                </div>
                <div class="info-item">
                    <div class="info-label">部首</div>
                    <div class="info-content">${charData.radicals}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">字义</div>
                    <div class="info-content">${charData.meaning}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">字形结构</div>
                    <div class="info-content">${charData.composition}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">组词</div>
                    <div class="info-content">${charData.examples}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">成语</div>
                    <div class="info-content">${charData.idioms}</div>
                </div>
            </div>
        </div>
    `;

    // 滚动到结果区域
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 回车搜索
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchChar();
        }
    });
});
