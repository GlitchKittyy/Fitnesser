function updateWeight(unit) {
  if (unit === "kg") {
    const kgValue = document.getElementById("kgInput").value;
    const lbsInput = document.getElementById("lbsInput");
    const result = document.getElementById("result");

    if (kgValue === "") {
      lbsInput.value = "";
      result.innerText = "";
    } else {
      const lbsValue = kgValue * 2.20462;
      lbsInput.value = lbsValue.toFixed(2);
      result.innerText = `${kgValue} KG is ${lbsValue.toFixed(2)} LBS`;
    }
  } else if (unit === "lbs") {
    const lbsValue = document.getElementById("lbsInput").value;
    const kgInput = document.getElementById("kgInput");
    const result = document.getElementById("result");

    if (lbsValue === "") {
      kgInput.value = "";
      result.innerText = "";
    } else {
      const kgValue = lbsValue / 2.20462;
      kgInput.value = kgValue.toFixed(2);
      result.innerText = `${lbsValue} LBS is ${kgValue.toFixed(2)} KG`;
    }
  }
}
