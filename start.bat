@echo off
echo Starting Art Beginning...
start "Backend" cmd /k "cd /d "%~dp0backend" && npm run dev"
timeout /t 2 /nobreak >nul
start "Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"
echo.
echo Backend: http://localhost:5010
echo Frontend: http://localhost:5173
