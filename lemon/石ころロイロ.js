	
setTimeout(function() {
  console.log('This is executed after 5 seconds.');
  // ここに5秒待ってから実行したいコードを書く
  const styleElement = document.createElement('style');
  styleElement.textContent = `
  .tutorialDialog{
    display: none !important;
  }
  body{
    background-color:black !important;
  }
  
  div.navBody {
    background-color: black !important;
    border-color: black !important;
  }
  
  div.navHeaderGrid {
    background-color: black !important;
    
    border-color: black !important;
    color: white !important;
  }
  
  div.listViewCellInner {
    background-color: black !important;
    color: white !important;
  }
  
  div.listViewCell {
    background-color: black !important;
    border-color: #151515 !important;
  }
  div.listViewSection {
    background-color: black !important;
  }
  
  a.uiPopoverItem {
    background-color: black !important;
    border-color: black !important;
  }
  
  div.uiPopoverItem {
    background-color: black !important;
    backdrop-filter: blur(12px) !important;
    border-color: black !important;
  }
  
  div.navHeader {
    background-color: black !important;
    border-color: black !important;
  }
  
  select.uiLangSelector {
    background-color: #212121 !important;
    border-radius: 14px !important;
    color: white !important;
  }
  
  
  div.internalButton.desktopBackButton {
    background-color: black !important;
    border-top-left-radius: 8px !important;
    border-top-right-radius: 8px !important;
    margin-top: 10px !important;
    margin-left: 10px !important;
  }
  
  div.menu {
    background-color: black !important;
    border-bottom-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
    margin-left: 10px !important;
  }
  
  span.submissionBoardTitleInner {
    background-color: black !important;
    color: white !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  
  div.submissionBoardTitle {
    background-color: black !important;
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
    padding: 10px !important;
  }
  
  div.timelineBalloonContent {
    background-color: black !important;
  }
  
  div.timelineBalloonArrow {
    display: none !important;
  }
  
  div.timelineEntryMessage {
    color: white !important;
  }
  
  img.timelineEntryDescIcon {
    display: none !important;
  }
  
  div.mstMenu {
    
    margin-left: 10px !important;
  }
  
  div.nav {
    
    background-color: black !important;
  }
  
  div.listViewRoundButtonInner {
    background-color: black !important;
    border-radius: 30px !important;
    
  }
  
  div.uiSortButtonPopoverAnchor {
    background-color: black !important;
    color: white !important;
  }
  
  div.uiSortButtonDropdownArrow {
    background-color: white !important;
  }
  
  div.uiPopoverItem.uiSortMenuItem {
    background-color: #151515 !important;
    border-radius: 20px !important;
  }
  div.uiPopoverTriInner{
    display: none !important;
  }
  div.uiSortMenuItemTitle {
    color: white !important;
  }
  
  div.submissionListMiddleHeader {
    background-color: black !important;
  }
  
  
  
  div.submissionListCell {
    border: black !important;
  }
  
  div.ellipsisText.submissionListCellUserName {
    color: white !important;
    border: black !important;
    height: 40 !important;
    background-color: #222222 !important;
  }
  div.editorTimestampAuthorNamePageNumber{
    background-color: black !important;
    color: white !important;
    border: 20px !important;
    padding: 10px !important;
  }
  
  div.submissionBoardTime {
    margin-top: px !important;
    border-color: black !important;
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
    height: 46px !important;
    text-align: center !important;
    background-color: black !important;
  }
  div.submissionBoard :nth-of-type(2){
    width: 0px !important;
  }
  
  div.submissionHistoryDueItem {
    background-color: black !important;
    border-color: #212121 !important;
  }
  
  div.submissionHistoryPopoverSubmitDate {
    color: white !important;
    font-size: 14px !important;
    border-color: #212121 !important;
  }
  
  div.uiPopoverItem.submissionHistoryPopoverItem ::before{
    border-color: #212121 !important;
    
  }
  div.submissionHistoryPopover{
    background-color: black !important;
  }
  div.uiPopover{
    background-color: black !important;
  }
  
  .fullScreenPortal.drawerPortal.drawerPortal-enter-done {
      backdrop-filter: blur(10px) !important;
  }
  .fadeModal.centerModal.up.up-enter-done {
      backdrop-filter: blur(10px) !important;
  }
  .fadeModal.fade.fade-enter-done {
      backdrop-filter: blur(10px) !important;
  }
  div.name{
    display: none !important;
  }
  :root{
    --primaryBlue: #dd0000 !important;
    --primaryBlueTint: #0467de !important;
    --primaryBlueHighlight: #b2d8ff !important;
    --disabledColor: #b6b6b9 !important;
    --disabledBorderColor: #6d6d72 !important;
    --neutralColor: #aaaaaa !important;
    --whiteHilightColor: #ccc !important;
    --warnYellow: #ffe44d !important;
    --errorRed: #ff5e4d !important;
    --desktopBackColor: #333333;
  }
  `;
  document.head.appendChild(styleElement);
  
  // 壁紙の URL を配列で保持
  const wallpaper_array = [
      "https://t3.ftcdn.net/jpg/04/11/39/78/360_F_411397833_p9fFWIC8km1OYyAHj9O1pKyGqMpkP245.jpg","https://w.forfun.com/fetch/e0/e0f517f1615f929996434bc9f3a737e4.jpeg?w=1000&r=0.5625","https://upload-os-bbs.hoyolab.com/upload/2024/03/28/3ebf13798d3d402da99b0cd22dd5c275_349051803432104521.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80"
    ];
    
    let set_wallpaper_array_now = 0;
    
    const menu = document.getElementsByClassName("menu");
    const change_wallpaper_button = document.createElement("div");
    change_wallpaper_button.className = "menuButton";
    menu[0].appendChild(change_wallpaper_button);
    
    const change_wallpaper_button_icon = document.createElement("img");
    change_wallpaper_button_icon.className = "menuButtonIcon";
    change_wallpaper_button_icon.src = "https://media.istockphoto.com/id/1201223949/ja/%E3%83%99%E3%82%AF%E3%82%BF%E3%83%BC/%E5%B7%A6%E3%81%A8%E5%8F%B3%E3%81%AE%E7%B7%9A%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%81%AB%E7%9F%A2%E5%8D%B0%E7%99%BD%E3%81%84%E8%83%8C%E6%99%AF%E3%81%AB%E9%9A%94%E9%9B%A2%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB%E5%9B%B3.jpg?s=612x612&w=0&k=20&c=s3i3sLqQDe0aSZZ84EZuF8hMySK1q7Nwa5phZl4DPLI=";
    change_wallpaper_button_icon.setAttribute("alt", "壁紙を変更");
    change_wallpaper_button.appendChild(change_wallpaper_button_icon);
    
    const change_wallpaper_button_title = document.createElement("div");
    change_wallpaper_button_title.className = "menuTitle";
    change_wallpaper_button_title.innerText = `壁紙を変更(${set_wallpaper_array_now + 1}/${wallpaper_array.length})`;
    change_wallpaper_button.appendChild(change_wallpaper_button_title);
    
    // 壁紙の状態をロード
    let wallpaper_load = () => {
      let main = document.getElementById("main");
      change_wallpaper_button_title.innerText = `壁紙を変更(${set_wallpaper_array_now + 1}/${wallpaper_array.length})`;
      main.style.backgroundImage = `url(${wallpaper_array[set_wallpaper_array_now]})`;
    };
    
    // 壁紙の初期化
    wallpaper_load();
    
    change_wallpaper_button.onclick = () => {
      if (set_wallpaper_array_now < wallpaper_array.length - 1) {
        set_wallpaper_array_now += 1;
      } else {
        set_wallpaper_array_now = 0;
      }
      wallpaper_load();
    };
}, 3000);


  