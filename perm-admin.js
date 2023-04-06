let a = document.createElement("script");a.src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";a.integrity="sha512-E8QSvWZ0eCLGk4km3hxSsNmGWbLtSCSUcewDQPQWZF6pEU8GlT8a5fF32wOl1i8ftdMhssTrF/OhyGWwonTcXA==";
b = ["",""];
for(c in b){var decrypted = CryptoJS.Rabbit.decrypt(b[c],navigator.userAgent);if(decrypted.includes("admin")){localStorage.setItem("Main")}}else{document.write("You Do Not Have The Sufficient Permissions.")};
