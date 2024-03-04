function order() { //按下我要訂購後跳出的訊息
  let yourName = document.getElementById("typeYourName").value;
    if (yourName == "") {
      return alert("煩請填寫您的大名。")
    } else {
      document.getElementById("customerName").textContent = yourName;

    }

  let genderMenu = document.getElementById("gender");
  let genderIndex = genderMenu.selectedIndex;
  let genderValue = genderMenu.options[genderIndex].value;
  let genderText = genderMenu.options[genderIndex].text;
  document.getElementById("customerGender").textContent = genderText;

  let clothTypeMenu = document.getElementById("clothType");
  let clothTypeIndex = clothTypeMenu.selectedIndex;
  let clothTypeValue = clothTypeMenu.options[clothTypeIndex].value;
  let clothTypeText = clothTypeMenu.options[clothTypeIndex].text;
  document.getElementById("customerClothType").textContent = clothTypeText;



  let orderCount = document.getElementById("typeOrderCount").value;
  if (orderCount == "") {
    return alert("煩請輸入訂購數量。");
  } else if (orderCount <= 99) {
    return alert("抱歉，我們工廠的最低出貨量是 100 件。");
  } else if (orderCount >= 5001) {
    return alert("抱歉，我們工廠的最高出貨量是 5,000 件。");
  }

  alert(yourName + "您好！謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！");

  document.getElementById("customerOrderCount").textContent = orderCount;

  let menPrice = 600;
  let womenPrice = 500;
  if (genderValue == "men") {
    let menTotalPrice = menPrice * parseInt(orderCount);
    document.getElementById("totalPrice").textContent = menTotalPrice;
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您帥氣領帶！");
  } else {
    let womenTotalPrice = womenPrice * parseInt(orderCount);
    document.getElementById("totalPrice").textContent = womenTotalPrice;
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您美麗圍巾！");
  }
}

function information() { //按下認識工廠後跳出的訊息
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！")
}