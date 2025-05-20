<div>
  <h1 align="center">Selfie App</h1>
  <h2 align="center">Lesson 1</h2>
  <br /><br />
  <h1>1. Environment Setup</h1>
  <br />
  <h2>1.1 Getting Started with React Native</h2>
  <br />
  <h3>1.1.1 Start a new React Native project with Expo</h3>
  <br />
  <p>
    Expo is a production-grade React Native Framework. It makes developer
    easier:- file-based routing, a standard library of native modules, and much
    more. Expo is an open-source Framework with an active community on GitHub
    and Discord. Expo team works in close collaboration with the React Native
    team at Meta to bring the latest React Native features to the Expo SDK.<br> The
    team at Expo also provides Expo Application Services (EAS), an optional set
    of services that complements Expo, the Framework, in each step of the
    development process.<br> To create a new Expo project, run the following in your
    terminal:
  </p>
  <br />
  <img
    src="./screenshots/Screenshot 2025-05-19 153745.png"
    alt="expo-cli" />
  <br />
  <p>Figure 1: creating expo-app1</p><br>
  <img
    src="./screenshots/Screenshot 2025-05-19 154255.png"
    alt="expo-cli" />
    <br>
    <p>Figure 2: creating expo-app2</p>
  <br />
  <img
    src="./screenshots/Screenshot 2025-05-19 175830.png"
    alt="expo-cli" />
    <br>
    <p>Figure 3: creating expo-app3</p>
    <br>
    <p>In the command npx create-expo-app@latest --template blank . , dot (.) is crucial because it represents the current directory where you want the new Expo project to be created. Without it, you might be facing nested folders or errors. Always double-check your working directory before running the command.</p>
  <br />
  <p>To run the project on local server:</p><br>
  <img
    src="./screenshots/Screenshot 2025-05-19 154441.png"
    alt="expo-cli" />
    <br>
    <p>Make sure you are inside the project before running this command.</p>
    <img src="./screenshots/Screenshot 2025-05-19 175941.png" alt="expo-cli"/> <br>
    <p>Figure 4: project successfully started</p><br>
    <img
    src="./screenshots/Screenshot 2025-05-19 155019.png" alt="expo-cli" /><br>
    <p>Scan QR</p><br>
    <img
    src="./screenshots/Screenshot 2025-05-19 175941.png" alt="expo-cli" /><br>
    <p>OR</p><br>
    <p>Manually Enter --> exp://192.168.1.67:8081</p><br>
    <img
    src="./screenshots/Screenshot 2025-05-19 155141.png" alt="expo-cli" /><br>
    <img src="./screenshots/Screenshot 2025-05-19 155230.png" alt="expo-cli" /><br>
    <p>Click on Connect</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 155921.png" alt="expo-cli"><br>
    <p>Figure 4: app running on phone</p><br>
    <p>Congratulations! You have successfully created a mobile app.</p><br>
    <p>Open a project on code editor of your choice. I prefer Visual Studio Code Editor.</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 180039.png" alt="expo-cli"><br>
    <p>Figure 5: project on vs code editor</p><br>
    <table>
        <caption>Project File/Folder Structure</caption>
        <thead>
          <tr>
            <th>File/Folder</th>
            <th>Purpose</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>.expo/</td>
            <td>Local Expo configs and cache</td>
          </tr>
          <tr>
            <td>assets/</td>
            <td>Images, fonts, static files</td>  
          </tr>
          <tr>
            <td>node_modules/</td>
            <td>Installed JS packages</td>  
          </tr>
          <tr>
            <td>.gitignore</td>
            <td>Git exclusion rules</td>  
          </tr>
          <tr>
            <td>App.js</td>
            <td>Main UI app component</td>  
          </tr>
          <tr>
            <td>app.json</td>
            <td>Expo app configuration</td>  
          </tr>
          <tr>
            <td>Package.json</td>
            <td>Project dependencies and scripts</td>  
          </tr>
          <tr>
            <td>Package-lock.json</td>
            <td>Locked versions of packages</td>  
          </tr>
        </tbody>
    </table><br>
    <p>Table 1: Folder structure</p><br>
    <strong>Now,</strong><br>
    <p>1. Go to App.js:</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 161841.png" alt="expo-cli"><br>
    <p>Figure 6: text before updated</p><br>
    <p>2. I am updating App.js:</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 162105.png" alt="expo-cli"><br>
    <p>Figure 7: text after updated</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 161912.png" alt="expo-cli"><br>
    <p>Figure 8: updated text UI</p><br>
    <p>3. I deleted App.js and index.js from the project.</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 180217.png" alt="expo-cli"><br>
    <p>Create a folder named app and create a file named index.jsx in it.</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 180305.png" alt="expo-cli"><br>
    <p>4. Write these in index.jsx: </p><br>
    <img src="./screenshots/Screenshot 2025-05-19 180618.png" alt="expo-cli"><br>
    <p>Figure 9: index.jsx</p><br>
    <p>5. Go to app.json:</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 181611.png" alt="expo-cli"><br>
    <p>Figure 10: app.json before updated</p><br>
    <p>Add scheme: </p><br>
    <img src="./screenshots/Screenshot 2025-05-19 180718.png" alt="expo-cli"><br>
    <p>Figure 11: app.json after updated</p><br>
    <p>Default package.json: </p><br>
    <img src="./screenshots/Screenshot 2025-05-19 181127.png" alt="expo-cli"><br>
    <p>Figure 12: Default package.json</p><br>
    <p>Go to this link: https://docs.expo.dev/router/installation/#manual-installation</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 164129.png" alt="expo-cli"><br>
    <p>7. Copy and paste the command in the terminal (make sure you are inside the project directory) and hit Enter button.</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 182432.png" alt="expo-cli"><br>
    <p>Current package.json: </p><br>
    <img src="./screenshots/Screenshot 2025-05-19 182627.png" alt="expo-cli"><br>
    <p>Figure 13: current package.json</p><br>start
    <p>Now, the app/index.jsx will be the entry file of the project. Re-run the project: npx expo start</p><br>
    <img src="./screenshots/Screenshot 2025-05-19 165512.png" alt="expo-cli"><br>
    <p>Congratulations! Worked it successfully!</p><br>
</div>
