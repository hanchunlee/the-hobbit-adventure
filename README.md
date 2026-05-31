# The Hobbit Adventure — 中土世界互動地圖

一個以《哈比人冒險記》為基礎的互動式文字冒險遊戲，搭配中土世界互動地圖。

🎮 **[立即遊玩](https://hanchunlee.github.io/the-hobbit-adventure/adventure.html)**

## 功能

- **文字冒險遊戲**：以畢爾博·巴金斯的視角體驗《哈比人冒險記》的完整故事，包含 82 個場景
- **互動地圖**：以 Leaflet 呈現中土世界地圖，標記超過 100 個歷史事件
- **時間軸**：瀏覽從遠古到第四紀元的中土世界歷史
- **場景插圖**：每個重要場景配有 AI 生成的插圖

## 頁面

| 頁面 | 說明 |
|------|------|
| [adventure.html](https://hanchunlee.github.io/the-hobbit-adventure/adventure.html) | 冒險遊戲主頁 |
| [index.html](https://hanchunlee.github.io/the-hobbit-adventure/index.html) | 中土世界互動地圖 |
| [timeline.html](https://hanchunlee.github.io/the-hobbit-adventure/timeline.html) | 歷史時間軸 |

## 致謝 / Attribution

本專案基於 [Fraser Marlow](https://github.com/frasermarlow) 的 [middle-earth-map](https://github.com/frasermarlow/middle-earth-map) 專案。原始專案提供了中土世界地圖的互動式視覺化基礎，包括地圖瓦片與事件資料。

在此基礎上，本專案新增了：
- 《哈比人冒險記》文字冒險遊戲引擎
- 場景插圖系統（含 SVG fallback）
- 遊戲存檔/讀檔功能
- 簡化的使用者介面

## 授權

本專案的原創程式碼以 [MIT License](LICENSE) 授權。

> ⚠️ **注意**：上游專案 [frasermarlow/middle-earth-map](https://github.com/frasermarlow/middle-earth-map) 未聲明授權條款。地圖瓦片與事件資料的使用權益，請參考原始專案。

## 技術架構

- **地圖引擎**：Leaflet.js with `L.CRS.Simple`（自訂座標系統）
- **遊戲引擎**：純 JavaScript，無框架依賴
- **場景資料**：`adventure-data.js`（82 個場景物件）
- **藝術資源**：`art/` 目錄（PNG）+ `scene-art.js`（SVG fallback）
- **部署**：GitHub Pages（靜態託管）
