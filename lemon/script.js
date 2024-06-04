	

setTimeout(function() {
  console.log('This is executed after 2 seconds.');
  // ここに5秒待ってから実行したいコードを書く
    
    // 壁紙の状態をロード
    let wallpaper_load = () => {
      let form1 = document.getElementById("form1");
form1.style.backgroundImage = 'url(https://upload-os-bbs.hoyolab.com/upload/2024/03/28/3ebf13798d3d402da99b0cd22dd5c275_349051803432104521.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80)';
      
    };
    //文字の色を変更
    const styleElement = document.createElement('style');
    styleElement.textContent = `
    div.row{
      color: #9cffaf !important;
    }
    }
    `;
    document.head.appendChild(styleElement);
    
    // 壁紙の初期化
  wallpaper_load();
  
}, 2000);


  