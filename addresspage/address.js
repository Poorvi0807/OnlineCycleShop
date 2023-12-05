const indianStates = {
  AN: "Andaman and Nicobar Islands", AP: "Andhra Pradesh", 
  AR: "Arunachal Pradesh", AS: "Assam", BR: "Bihar", CH: "Chandigarh", 
  CT: "Chhattisgarh", DN: "Dadra and Nagar Haveli and Daman and Diu", 
  DL: "Delhi", GA: "Goa", GJ: "Gujarat", HR: "Haryana", HP: "Himachal Pradesh", 
  JK: "Jammu and Kashmir", JH: "Jharkhand", KA: "Karnataka", KL: "Kerala", 
  LD: "Lakshadweep", MP: "Madhya Pradesh", MH: "Maharashtra", MN: "Manipur", 
  ML: "Meghalaya", MZ: "Mizoram", NL: "Nagaland", OR: "Odisha", PY: "Puducherry", 
  PB: "Punjab", RJ: "Rajasthan", SK: "Sikkim", TN: "Tamil Nadu", TG: "Telangana", 
  TR: "Tripura", UP: "Uttar Pradesh", UT: "Uttarakhand", WB: "West Bengal"
};
const state = document.querySelector("#inputState")
for (const stateCode in indianStates) {
  const option = document.createElement("option");
  option.value = stateCode;
  option.textContent = indianStates[stateCode];
  state.appendChild(option);
  const form = document.getElementById("billing-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const billingData = {
      email: form.email.value,
      phoneNumber: form.phoneNumber.value,
      address: form.address.value,
      address2: form.address2.value,
      city: form.city.value,
      inputState: form.inputState.value,
      pincode: form.pincode.value,
    };

    localStorage.setItem("billingData", JSON.stringify(billingData));
  });
}