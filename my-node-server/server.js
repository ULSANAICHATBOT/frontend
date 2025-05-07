const express = require("express");
const path = require("path");
const cors = require("cors"); // CORS 패키지 추가
const app = express();
const port = 3000; // 원하는 포트 번호

// CORS 설정
app.use(
  cors({
    origin: "http://example.com", // 허용할 도메인
  })
);

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, "dist"))); // Vite의 경우

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html")); // Vite의 경우
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
