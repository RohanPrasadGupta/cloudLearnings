# Setup Script for Image Upload Application

Write-Host "🚀 Setting up Image Upload Application..." -ForegroundColor Green

# Check if Node.js is installed
if (Get-Command "node" -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js is installed: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
if (Get-Command "npm" -ErrorAction SilentlyContinue) {
    $npmVersion = npm --version
    Write-Host "✅ npm is installed: $npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ npm is not installed." -ForegroundColor Red
    exit 1
}

Write-Host "`n📦 Installing Backend Dependencies..." -ForegroundColor Yellow
Set-Location "backend"
npm install

Write-Host "`n📦 Installing Frontend Dependencies..." -ForegroundColor Yellow
Set-Location "../frontend"
npm install

Write-Host "`n✅ Setup Complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Set up your Cloudinary credentials in backend/.env" -ForegroundColor White
Write-Host "2. Start MongoDB service" -ForegroundColor White
Write-Host "3. Run 'npm run dev' in backend directory" -ForegroundColor White
Write-Host "4. Run 'npm run dev' in frontend directory" -ForegroundColor White
Write-Host "5. Open http://localhost:3000 in your browser" -ForegroundColor White
