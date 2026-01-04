const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const timeBox = document.getElementById("timeBox");
const input = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const defaultArtikel = document.getElementById('defaultArtikel');
const detailArtikel = document.getElementById('detailArtikel');

function updateTime() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(now);

  const offset = -now.getTimezoneOffset() / 60;
  let zone = offset === 7 ? "WIB" : offset === 8 ? "WITA" : offset === 9 ? "WIT" : "Local";

  if (timeBox) {
    timeBox.textContent = `${time} ${zone}`;
  }
}
setInterval(updateTime, 1000);
updateTime();

if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
}

document.querySelectorAll('#sideMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove("menu-open");
  });
});

const legends = {
  kuntilanak: {
    title: "Kuntilanak",
    img: "img/kunitlanak.jpg",
    text: "Dalam folklor Nusantara, Kuntilanak dipercaya sebagai arwah perempuan yang meninggal dengan penderitaan mendalam dan tidak mendapatkan ketenangan. Ceritanya diwariskan secara lisan sebagai pengingat tentang kematian yang tidak wajar, kesedihan yang terpendam, dan emosi yang tidak pernah tersampaikan. Di beberapa daerah, ia dikaitkan dengan perempuan yang meninggal saat melahirkan atau kehilangan kehormatan, menjadikannya simbol duka yang membeku di dunia manusia.\n\nKuntilanak tidak selalu menampakkan diri secara langsung. Dalam cerita rakyat, kehadirannya diawali tanda-tanda halus: bau melati yang muncul tiba-tiba, udara menjadi dingin, dan perasaan diawasi dari arah yang tidak terlihat. Orang-orang tua percaya bahwa ia lebih sering membuat manusia merasa takut sebelum terlihat, seolah ingin memastikan korbannya benar-benar sadar akan keberadaannya.\n\nPenampakan Kuntilanak digambarkan sebagai perempuan berambut panjang, berpakaian pucat, dengan wajah yang sulit dilihat jelas dalam gelap. Ia sering terlihat berdiri diam di bawah pohon, di sudut bangunan tua, atau di jalan sepi pada malam hari. Dalam folklor, tatapannya bukan sekadar menakutkan, melainkan membawa rasa kehilangan yang mendalam."
  },

  pocong: {
    title: "Pocong",
    img: "img/pocong.jpg",
    text: "Pocong berasal dari kepercayaan masyarakat tentang kematian yang belum sempurna. Ia dipercaya sebagai jasad yang arwahnya belum dilepaskan karena kafannya belum dibuka atau masih memiliki urusan duniawi. Cerita Pocong sering digunakan sebagai pengingat pentingnya ritual kematian agar arwah tidak terjebak di antara dua alam.\n\nDalam folklor, Pocong bukan makhluk yang selalu agresif. Ia lebih sering digambarkan sebagai sosok bingung dan terikat, berjalan tanpa tujuan jelas. Kehadirannya dipercaya muncul di tempat-tempat yang memiliki ikatan emosional dengan kehidupannya semasa hidup.\n\nPenampakan Pocong digambarkan berdiri kaku dengan kain kafan yang kotor oleh tanah kubur. Matanya terbuka kosong, dan gerakannya melompat perlahan dalam keheningan. Banyak cerita rakyat menyebutkan bahwa melihat Pocong membawa rasa takut bercampur iba."
  },

  leak: {
    title: "Leak",
    img: "img/leak.jpg",
    text: "Leak merupakan bagian dari folklor Bali yang berkaitan dengan ilmu hitam dan keseimbangan spiritual. Ia dipercaya bukan makhluk lahiriah, melainkan manusia yang mempelajari ajaran terlarang demi kekuatan dan keabadian. Kisah Leak berfungsi sebagai peringatan tentang pengetahuan yang disalahgunakan.\n\nDalam cerita lisan, Leak hidup seperti manusia biasa di siang hari, namun berubah saat malam tiba. Transformasi ini diyakini sebagai pelepasan wujud manusia untuk mencari kekuatan dari dunia gaib.\n\nPenampakan Leak digambarkan sangat mengerikan: kepala melayang dengan mata menyala dan organ tubuh menggantung di bawahnya. Udara terasa berat dan berbau amis. Melihat Leak dipercaya membawa bahaya, bukan hanya pada tubuh, tetapi juga pada jiwa."
  },

  genderuwo: {
    title: "Genderuwo",
    img: "img/genderuwo.jpg",
    text: "Genderuwo adalah makhluk tua dalam folklor Jawa yang dipercaya telah menghuni alam sebelum manusia berkembang. Ia sering digambarkan sebagai penjaga wilayah liar seperti hutan, gua, dan bangunan kosong. Ceritanya mengajarkan tentang batas antara manusia dan alam.\n\nDalam kepercayaan rakyat, Genderuwo tidak selalu jahat. Ia muncul ketika manusia melanggar aturan tak tertulis atau bersikap tidak sopan terhadap tempat yang bukan miliknya.\n\nPenampakan Genderuwo berupa sosok besar berbulu dengan mata menyala samar. Kehadirannya sering ditandai suara tawa berat, bau tanah basah, dan perasaan seolah ada sesuatu yang sangat dekat namun tak terlihat."
  },

  kuyang: {
    title: "Kuyang",
    img: "img/kuyang.jpg",
    text: "Kuyang berasal dari folklor Kalimantan dan dikenal sebagai perempuan yang mengikat diri pada ilmu terlarang demi kecantikan dan umur panjang. Cerita ini menjadi peringatan tentang obsesi terhadap tubuh dan penolakan terhadap proses alami kehidupan.\n\nDalam cerita rakyat, Kuyang menjalani kehidupan normal di siang hari, namun melepaskan kepalanya pada malam hari untuk mencari darah sebagai sumber kekuatan. Aktivitas ini dilakukan secara sembunyi-sembunyi.\n\nPenampakan Kuyang digambarkan sebagai kepala melayang dengan rambut panjang dan organ tubuh menggantung. Ia bergerak sunyi di udara malam, dan kehadirannya sering hanya dirasakan melalui rasa dingin dan ketakutan mendadak."
  },

  tuyul: {
    title: "Tuyul",
    img: "img/tuyul.jpg",
    text: "Dalam folklor Jawa, Tuyul dipercaya sebagai arwah anak yang diikat melalui perjanjian gaib untuk melayani manusia. Kisahnya sering diceritakan sebagai peringatan tentang kekayaan yang diperoleh dengan cara tidak wajar.\n\nCerita rakyat menggambarkan Tuyul sebagai makhluk kecil yang patuh, namun kehilangan kebebasan. Ia bekerja diam-diam, sering tanpa disadari oleh pemilik rumah.\n\nPenampakan Tuyul jarang terlihat jelas. Biasanya berupa bayangan kecil, suara langkah ringan, atau perasaan tidak nyaman yang muncul setelah benda berharga menghilang."
  },

  wewe_gombel: {
    title: "Wewe Gombel",
    img: "img/wewe gombel.jpg",
    text: "Wewe Gombel adalah figur penting dalam folklor Jawa yang sering digunakan untuk menakuti anak-anak agar tidak bermain saat senja. Ia digambarkan sebagai sosok yang menculik anak-anak terlantar.\n\nDalam cerita lisan, Wewe Gombel bukan sepenuhnya jahat. Ia dipercaya merawat anak-anak yang diabaikan, meski dengan cara yang menakutkan.\n\nPenampakannya digambarkan sebagai perempuan membungkuk dengan rambut kusut dan tubuh besar. Ia muncul saat senja, waktu yang dipercaya sebagai batas antara terang dan gelap."
  },

  sundel_bolong: {
    title: "Sundel Bolong",
    img: "img/sundel bolong.jpg",
    text: "Sundel Bolong berasal dari folklor tentang perempuan yang mengalami pengkhianatan dan kematian tragis. Ceritanya diwariskan sebagai peringatan tentang kekerasan dan ketidakadilan.\n\nDalam cerita rakyat, ia sering digambarkan memikat untuk menipu, mencerminkan ketakutan terhadap keindahan yang menyesatkan.\n\nPenampakannya terkenal dengan lubang besar di punggungnya, simbol luka dan dendam yang tak pernah sembuh."
  },

  banaspati: {
    title: "Banaspati",
    img: "img/banaspati.jpg",
    text: "Banaspati dikenal dalam folklor Jawa sebagai manifestasi api gaib dan energi destruktif. Ia sering dikaitkan dengan ilmu hitam dan tempat terlarang.\n\nCerita rakyat menyebutkan bahwa Banaspati muncul akibat amarah, kutukan, atau ritual yang gagal.\n\nPenampakannya berupa bola api melayang yang muncul tanpa suara. Kehadirannya dipercaya sebagai pertanda bahaya dan pelanggaran batas gaib."
  },

  jelangkung: {
    title: "Jelangkung",
    img: "img/jelangkung.jpg",
    text: "Jelangkung merupakan bagian dari folklor pemanggilan arwah yang dikenal luas di Indonesia. Kisahnya berfungsi sebagai peringatan tentang bahaya bermain dengan dunia gaib.\n\nDalam cerita rakyat, ritual Jelangkung membuka jalan antara manusia dan arwah, sering tanpa pengetahuan tentang cara menutupnya.\n\nPenampakan dimulai dari benda mati yang bergerak sendiri, suara aneh, dan kehadiran tak terlihat yang terasa sangat nyata."
  }
};





function showLegend(key) {
  const legend = legends[key];
  if (!legend || !defaultArtikel || !detailArtikel) return;

  defaultArtikel.style.display = "none";
  detailArtikel.hidden = false;
  detailArtikel.style.display = "block";

  const imgElement = document.getElementById('legendImg');
  if (imgElement) {
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = legend.img;
      document.getElementById('legendTitle').innerText = legend.title;
      document.getElementById('legendText').innerText = legend.text;
      imgElement.style.opacity = 1;
      imgElement.style.transition = "opacity 0.5s ease";
    }, 100);
  }

  showRelated(key);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showRelated(current) {
  const list = document.getElementById('relatedList');
  if (!list) return;
  list.innerHTML = "";
  Object.keys(legends)
    .filter(k => k !== current)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .forEach(k => {
      list.innerHTML += `
        <div class="related-item" onclick="showLegend('${k}')" style="cursor:pointer;">
          <img src="${legends[k].img}" style="width:100px; height:130px; object-fit:cover;">
          <p>${legends[k].title}</p>
        </div>
      `;
    });
}

function performSearch() {
  if (!input) return;
  const key = input.value.toLowerCase().trim();

  if (key === "") {
    if (detailArtikel) detailArtikel.style.display = "none";
    if (defaultArtikel) defaultArtikel.style.display = "block";
    return;
  }

  const found = Object.keys(legends).find(k => {
    return legends[k].title.toLowerCase() === key || k === key;
  });

  if (found) {
    showLegend(found);
  } else {
    alert("Legenda '" + input.value + "' tidak ditemukan.");
  }
}

if (searchBtn && input) {
  searchBtn.addEventListener('click', performSearch);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}
