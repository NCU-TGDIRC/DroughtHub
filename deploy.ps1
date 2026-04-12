# 當發生錯誤時終止腳本運行
$ErrorActionPreference = "Stop"

# 打包
Write-Host "Running: npm run build..." -ForegroundColor Cyan
npm run build

# 移動至到打包後的dist目錄 
if (Test-Path "dist") {
    Set-Location "dist"
} else {
    Write-Error "dist directory not found after build."
    exit 1
}

# 因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
Write-Host "Initializing git in dist..." -ForegroundColor Cyan
git init
git add -A
git commit -m 'deploy'

# 部署到 https://github.com/NCU-TGDIRC/DroughtHub.git 分支為 gh-pages
Write-Host "Pushing to gh-pages..." -ForegroundColor Cyan
git push -f https://github.com/NCU-TGDIRC/DroughtHub.git master:gh-pages

# 將路徑切換回原本的目錄
Set-Location ..

Write-Host "Deployment completed successfully!" -ForegroundColor Green
