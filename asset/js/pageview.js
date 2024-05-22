function updatePageView() {
    // 获取当前的页面浏览量
    let pageView = localStorage.getItem('pageView');
    let sessionStarted = sessionStorage.getItem('sessionStarted');

    // 如果 sessionStorage 中没有 sessionStarted，表示新的会话
    if (sessionStarted === null) {
        // 更新 sessionStorage，标记会话已开始
        sessionStorage.setItem('sessionStarted', 'true');

        // 如果本地存储中没有 pageView，初始化为0
        if (pageView === null) {
            pageView = 0;
        }

        // 将 pageView 转换为数字并增加1
        pageView = parseInt(pageView) + 1;

        // 将新的页面浏览量存储到本地存储中
        localStorage.setItem('pageView', pageView);
    }

    // 显示页面浏览量
    document.getElementById('page-view').textContent = pageView;
}

// 确保在 DOM 内容加载完成后执行
document.addEventListener('DOMContentLoaded', (event) => {
    updatePageView();
});
