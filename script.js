const phoneInput = document.getElementById("pN");
const imgAttach = document.getElementById("logo");
const iconAttach = document.getElementById("feedBack");


const validNum = /(?<areacode>\d{3,4})-\d{3}-\d{4}/

MTN = [702, 703, 704, 706, 0803, 0806, 0810,0813, 0814, 0816, 0903, 0906, 0916, 0913]

GLO = [705, 0805, 0807, 0811,  0815, 0905, 0915]

AIRTEL = [701, 708, 0802, 0808, 0812, 0901, 0902, 0904, 0907, 0912]

_9MOBILE = [0809, 0817, 0818, 0908, 0909]

phoneInput.addEventListener("keyup", (e) => {
    if (validNum.test(e.target.value)) {
        iconAttach.innerText = "✅";
        iconAttach.classList.add("valid");
        iconAttach.classList.remove("invalid");

        bron = e.target.value;     
        crook = bron.match(validNum);
        areaCode = crook.groups.areacode;

        if (MTN.includes(parseInt(areaCode))) {
            imgAttach.src = "./New-mtn-logo.jpg";
         } 
         else if (GLO.includes(parseInt(areaCode))) {
                imgAttach.src = "./glo-logo.jfif";
         }
         else if (AIRTEL.includes(parseInt(areaCode))) {
            imgAttach.src = "./airtel-logo.png";
        }
        else if (_9MOBILE.includes(parseInt(areaCode))) {
            imgAttach.src = "./9m-logo.jfif";
        }
        else {
            imgAttach.src = "";
         }   

    } else {
        iconAttach.innerText = "❌ format: 0803-123-4567";
        iconAttach.classList.add("invalid");
        iconAttach.classList.remove("valid");
    }

     }
)

function displayMessage() {
    if (phoneInput.value.includes(0)) {
        alert("Top up was successful ✅")
    } 
}