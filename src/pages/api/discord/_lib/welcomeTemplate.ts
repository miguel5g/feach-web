interface IUser {
  username: string;
  discriminator: string;
  serverNumber: string;
  avatarURL: string;
}

export default function getWelcomeTemplate({
  username, discriminator, serverNumber, avatarURL,
}: IUser) {
  return `<!DOCTYPE html>
  <html lang="pt-br">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <title>Welcome</title>
  
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Roboto&family=Ubuntu&display=swap" rel="stylesheet">
  
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
  
      body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        color: #FFF;
        background: #0D0D2D;
        background-image:
          radial-gradient(circle at 25px 25px, #FC00FF 2%, transparent 0%),
          radial-gradient(circle at 75px 75px, #00DBDE 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
      }
  
      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
  
        padding: 0 40px;
      }
      
      div#user-avatar {
        position: relative;
  
        width: 170px;
        height: 170px;
  
        border-radius: 50%;
      }
  
      div#user-avatar > img {
        position: absolute;
        top: 3px;
        left: 3px;
  
        width: 172px;
        height: 172px;
  
        border-radius: 50%;
  
        z-index: 10;
      }
  
      div#user-avatar > div#background {
        position: absolute;
        top: 0;
        left: 0;
  
        width: calc(100% + 8px);
        height: calc(100% + 8px);
  
        border-radius: 50%;
        background: linear-gradient(130.52deg, #FC00FF 35.73%, #00DBDE 70.45%);
        /* linear-gradient(130.52deg, #FC00FF 35.73%, #00DBDE 70.45%) */
       
        z-index: 1;
      }
  
      div#user-avatar > div#background::after {
        position: absolute;
        top: 4px;
        left: 4px;
  
        width: 170px;
        height: 170px;
  
        border-radius: 50%;
        background: #29305B;
        /* linear-gradient(130.52deg, #FC00FF 35.73%, #00DBDE 70.45%) */
  
        z-index: 0;
        content: '';
      }
  
      div#text {
        margin-left: 23px;
        max-width: 380px;
      }
  
      div#text > span {
        font-family: Fugaz One;
        font-size: 22px;
      }
  
      div#text > h1 {
        color: #E06FF5;
        font-family: Ubuntu;
        font-weight: bold;
        font-size: 48px;
      }
      div#text > h1 > span#user-discriminator {
        color: #543D97;
        font-size: 28px;
      }
  
      div#text > p {
        color: #DEDEDE;
        font-family: 'Ubuntu', sans-serif;
        /* font-weight: bold; */
        font-size: 18px;
      }
  
      div#text > p > span#rules-channel {
        color: #E06FF5;
      }
  
      div#text > span#user-number {
        position: fixed;
        bottom: 15px;
        right: 15px;
  
        color: #DEDEDE;
        font-size: 18px;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
      }
    </style>
  </head>
  
  <body>
    <div id="wrapper">
      <div id="user-avatar">
        <img src="${avatarURL}" alt="User avatar" />
        <div id="background"></div>
      </div>
  
      <div id="text">
        <span>Bem-Vindo</span>
        <h1>${username}<span id="user-discriminator">#${discriminator}</span></h1>
        <p>Visite <span id="rules-channel">#regras</span> para iniciar sua jornada</p>
  
        <span id="user-number">#${serverNumber}</span>
      </div>
    </div>
      
  </body>
  
  </html>`;
}
