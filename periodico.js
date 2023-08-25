const frameContainer = document.getElementById('frameContainer');
const contentFrame = document.getElementById('contentFrame');
const backButton = document.querySelector('button:nth-of-type(1)');
const forwardButton = document.querySelector('button:nth-of-type(2)');

const pages = ['diario1.html', 'page2.html', 'page3.html']; // 각 페이지의 파일명

let currentPageIndex = 0;

function goBack() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        loadPage();
    }
}

function goForward() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        loadPage();
    }
}

function loadPage() {
    contentFrame.src = pages[currentPageIndex];
}

loadPage(); // 초기 페이지 로드