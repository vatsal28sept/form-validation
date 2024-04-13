function val1() {
  var x = document.getElementById("txt1").value;
  if (x === "") {
    // alert("Enter Your Name");
    document.getElementById("f").innerText = "*Enter Your Name";
    return false;
  }
  document.getElementById("f").innerText = "";
  // return true;

  var mno = document.getElementById("num").value;
  if (mno === "") {
    // alert("Enter Your Number");
    document.getElementById("o").innerText = "*Enter Your Number";
    return false;
  } else if (isNaN(mno)) {
    // alert("Enter Digits Only");
    document.getElementById("o").innerText = "*Enter Digits Only";
    return false;
  } else if (mno.length !== 10) {
    // alert("Enter Correct 10-digit Number");
    document.getElementById("o").innerText = "*Enter Correct 10-digit Number";
    return false;
  }
  document.getElementById("o").innerText = "";
  // return true;

  if (
    document.frm.gender[0].checked == false &&
    document.frm.gender[1].checked == false
  ) {
    // alert("Select Your Gender");
    document.getElementById("g").innerHTML = "*Select Your Gender";
    return false;
  }
  document.getElementById("g").innerHTML = "";
  // return true;

  if (
    document.frm.type[0].checked == false &&
    document.frm.type[1].checked == false &&
    document.frm.type[2].checked == false
  ) {
    // alert("Select Your Car Type");
    document.getElementById("t").innerText = "*Select Your Car Type";
    return false;
  }
  document.getElementById("t").innerText = "";
  // return true;

  if (document.frm.car.value == "-1") {
    // alert("Select Your Car");
    document.getElementById("e").innerText = "*Select Your Car";
    return false;
  }
  document.getElementById("e").innerText = "";
  // return true;
}
