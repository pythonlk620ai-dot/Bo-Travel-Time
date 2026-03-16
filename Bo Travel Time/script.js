const photos = [
  {
    id: "tokyo",
    name: "東京塔，東京",
    url: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg",
    info:
      "【交通】\n- 搭乘東京地鐵日比谷線或都營大江戶線至「六本木站」，步行約 10 分鐘即可抵達東京塔周邊。\n- 也可搭乘都營巴士（新橋方向）在東京塔前下車。\n【觀光】\n- 推薦登上展望台俯瞰東京夜景。\n- 附近還有增上寺、芝公園，可以安排慢步散策。",
  },
  {
    id: "kyoto",
    name: "伏見稻荷大社，京都",
    url: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
    info:
      "【交通】\n- 從京都站搭乘 JR 奈良線至「稻荷站」下車即達，車程約 5 分鐘。\n- 也可搭乘京阪電車至「伏見稻荷站」，步行約 5 分鐘。\n【觀光】\n- 成千上萬的朱紅色鳥居是必看亮點。\n- 沿山路一路向上還可以俯瞰京都市景，建議預留 2–3 小時慢慢走。",
  },
  {
    id: "osaka",
    name: "大阪城，大阪",
    url: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    info:
      "【交通】\n- 搭乘大阪地下鐵中央線或長堀鶴見綠地線到「森之宮站」或「大阪商務公園站」，步行約 10 分鐘即可進入大阪城公園。\n【觀光】\n- 可以參觀天守閣，了解豐臣秀吉的歷史。\n- 春季的櫻花與秋季紅葉都非常有名，周邊還有大阪歷史博物館可順道參觀。",
  },
  {
    id: "sapporo",
    name: "雪祭，札幌",
    url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
    info:
      "【交通】\n- 從札幌站步行即可到達大通公園主會場。\n- 也可搭乘札幌地下鐵南北線／東西線在「大通站」下車。\n- 部分會場需搭乘地下鐵至「薄野站」或其他指定車站轉乘。\n【觀光】\n- 每年 2 月舉辦的大型冰雪祭，有巨型雪雕與燈光秀。\n- 建議傍晚到夜間前往，記得準備保暖衣物和防滑鞋。",
  },
  {
    id: "nara",
    name: "東大寺，奈良",
    url: "https://images.pexels.com/photos/208642/pexels-photo-208642.jpeg",
    info:
      "【交通】\n- 從京都或大阪搭乘 JR 至「奈良站」，再步行或轉乘巴士前往東大寺。\n- 也可搭乘近鐵電車至「近鐵奈良站」，步行約 20 分鐘抵達。\n【觀光】\n- 世界文化遺產東大寺擁有巨大的佛像和莊嚴的大殿。\n- 周邊奈良公園內有許多溫馴的小鹿，可以購買鹿仙貝與牠們互動。",
  },
  {
    id: "hakone",
    name: "箱根溫泉，神奈川",
    url: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg",
    info:
      "【交通】\n- 從新宿搭乘小田急浪漫特快到「箱根湯本站」。\n- 或先搭 JR 到小田原站，再轉乘箱根登山鐵路前往。\n【觀光】\n- 箱根以溫泉和富士山景觀著稱。\n- 可以搭乘觀光船遊芦之湖、搭乘纜車俯瞰山谷，再回溫泉旅館泡湯休息。",
  },
  {
    id: "okinawa",
    name: "青之洞窟，沖繩",
    url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    info:
      "【交通】\n- 從那霸市區自駕或搭乘巴士至恩納村真榮田岬。\n- 參加潛水或浮潛行程，由教練帶領前往青之洞窟。\n【觀光】\n- 以夢幻的藍色海水聞名，可以選擇浮潛或潛水近距離欣賞海底世界。\n- 建議在天氣晴朗、海況良好時前往，視野更清晰。",
  },
  {
    id: "hiroshima",
    name: "嚴島神社，宮島",
    url: "https://images.pexels.com/photos/208588/pexels-photo-208588.jpeg",
    info:
      "【交通】\n- 從廣島站搭乘 JR 山陽本線到「宮島口站」。\n- 之後再搭乘渡輪約 10 分鐘即可抵達宮島。\n【觀光】\n- 海上大鳥居是嚴島神社的象徵，漲潮時鳥居彷彿漂浮在海面上。\n- 島上街道有許多牡蠣料理和楓葉饅頭等廣島名產可以品嚐。",
  },
  {
    id: "fuji",
    name: "富士山，山梨／靜岡",
    url: "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg",
    info:
      "【交通】\n- 從東京可搭乘高速巴士或 JR 電車前往河口湖、富士山車站等周邊地區。\n- 自駕經中央自動車道或東名高速也很方便，沿途有多處休息站可停留。\n【觀光】\n- 可在河口湖、山中湖周邊眺望富士山倒影，是攝影熱門地點。\n- 夏季可選擇登山健行，其他季節則適合搭纜車、泡溫泉，一邊欣賞富士山景色。",
  },
];

const imgEl = document.getElementById("japan-photo");
const nameEl = document.getElementById("photo-name");
const buttonEl = document.getElementById("next-photo");
const infoEl = document.getElementById("place-info");

let currentIndex = 0;
let isRotating = false;
let rotateIntervalId = null;

function showPhoto(index) {
  const photo = photos[index];
  if (!photo) return;

  imgEl.classList.add("is-animating");
  imgEl.src = photo.url;
  imgEl.alt = photo.name;
  nameEl.textContent = photo.name;

  // 輪播時不自動顯示資訊面板
  if (!isRotating && photo.info && infoEl) {
    infoEl.textContent = photo.info;
  }

  setTimeout(() => {
    imgEl.classList.remove("is-animating");
  }, 650);
}

function startRotation() {
  if (isRotating) return;
  isRotating = true;
  buttonEl.textContent = "🐱";

  // 開始旋轉時隱藏資訊
  if (infoEl) {
    infoEl.style.display = "none";
    infoEl.textContent = "";
  }

  rotateIntervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto(currentIndex);
  }, 100);
}

function stopRotation() {
  if (!isRotating) return;
  isRotating = false;
  buttonEl.textContent = "🐱";

  if (rotateIntervalId !== null) {
    clearInterval(rotateIntervalId);
    rotateIntervalId = null;
  }

  // 停止旋轉時，顯示目前地點資訊
  const currentPhoto = photos[currentIndex];
  if (infoEl && currentPhoto && currentPhoto.info) {
    infoEl.style.display = "block";
    infoEl.textContent = currentPhoto.info;
  }
}

buttonEl.addEventListener("click", () => {
  if (!isRotating) {
    startRotation();
  } else {
    stopRotation();
  }
});

// Optional: allow clicking nav links to jump to that area photo
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").replace("#", "");
    const idx = photos.findIndex((p) => p.id === targetId);
    if (idx !== -1) {
      currentIndex = idx;
      showPhoto(currentIndex);
    }
  });
});

