@echo off
echo Installing Art Beginning...
echo.
echo [1/2] Installing backend dependencies...
cd /d "%~dp0backend"
call npm install
echo.
echo [2/2] Installing frontend dependencies...
cd /d "%~dp0frontend"
call npm install
echo.
echo Done! Run start.bat to launch.
pause
