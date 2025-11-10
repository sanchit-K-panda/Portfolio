# Portfolio Setup Script for Windows PowerShell
# This script automates the installation of the Next.js portfolio

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  Sanchit's Portfolio Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking for Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green

# Navigate to project directory
$projectPath = "C:\Users\Sanchit\OneDrive\Desktop\Portfolio\next-portfolio"
Write-Host ""
Write-Host "Navigating to project directory..." -ForegroundColor Yellow
Set-Location $projectPath

# Install dependencies
Write-Host ""
Write-Host "Installing dependencies (this may take a few minutes)..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Create .env.local if it doesn't exist
if (!(Test-Path ".env.local")) {
    Write-Host ""
    Write-Host "Creating .env.local file..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env.local"
    Write-Host "✅ Environment file created!" -ForegroundColor Green
    Write-Host "⚠️  Please update .env.local with your actual values" -ForegroundColor Yellow
}

# Summary
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "  Setup Complete! 🎉" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Update .env.local with your configuration" -ForegroundColor White
Write-Host "2. Customize the content in src/components/sections/" -ForegroundColor White
Write-Host "3. Replace placeholder images in public/" -ForegroundColor White
Write-Host "4. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host ""
Write-Host "To start the development server now, run:" -ForegroundColor Cyan
Write-Host "  npm run dev" -ForegroundColor Green
Write-Host ""
Write-Host "The site will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""

# Ask if user wants to start dev server
$response = Read-Host "Would you like to start the development server now? (Y/N)"
if ($response -eq 'Y' -or $response -eq 'y') {
    Write-Host ""
    Write-Host "Starting development server..." -ForegroundColor Green
    npm run dev
}
