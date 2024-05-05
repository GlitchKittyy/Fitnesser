function live() {
  var liveConverter = document.getElementById("liveConverter");
  var listConverter = document.getElementById("listConverter");

  if (listConverter.style.display === "grid") {
    listConverter.classList.add("fade-out");
    setTimeout(function () {
      listConverter.style.display = "none";
    }, 499);
    setTimeout(function () {
      liveConverter.classList.remove("fade-out");
      liveConverter.classList.add("fade-in");
      liveConverter.style.display = "grid";
      liveConverter.scrollIntoView({ behavior: "smooth" });
    }, 500);
  } else {
    liveConverter.classList.remove("fade-out");
    liveConverter.classList.add("fade-in");
    liveConverter.style.display = "grid";
    liveConverter.scrollIntoView({ behavior: "smooth" });
  }
}

function list() {
  var liveConverter = document.getElementById("liveConverter");
  var listConverter = document.getElementById("listConverter");

  if (liveConverter.style.display === "grid") {
    liveConverter.classList.add("fade-out");
    setTimeout(function () {
      liveConverter.style.display = "none";
    }, 499);
    setTimeout(function () {
      listConverter.classList.remove("fade-out");
      listConverter.classList.add("fade-in");
      listConverter.style.display = "grid";
      listConverter.scrollIntoView({ behavior: "smooth" });
    }, 500);
  } else {
    listConverter.classList.remove("fade-out");
    listConverter.classList.add("fade-in");
    listConverter.style.display = "grid";
    listConverter.scrollIntoView({ behavior: "smooth" });
  }
}

function updateWeight(unit) {
  if (unit === "kg") {
    const kgValue = document.getElementById("kgInput").value;
    const lbsValue = kgValue * 2.20462;
    document.getElementById("lbsInput").value = lbsValue.toFixed(2);
    if(kgValue===''){lbsValue=0}
    document.getElementById("result").innerText = `${kgValue} KG is ${lbsValue.toFixed(2)} LBS`;
    
  } else if (unit === "lbs") {
    const lbsValue = document.getElementById("lbsInput").value;
    const kgValue = lbsValue / 2.20462;
    if(lbsValue===''){kgValue=0}
      document.getElementById(
        "result"
      ).innerText = `${lbsValue} LBS is ${kgValue.toFixed(2)} KG`;
    document.getElementById("kgInput").value = kgValue.toFixed(2);
  }
}
