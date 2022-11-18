initializeStoragevalues()

var isDisplayed_Welcome = localStorage.getItem("isDisplayed_Welcome");
var isDisplayed_Oshirase = localStorage.getItem("isDisplayed_Oshirase");
var isDisplayed_Calendar = localStorage.getItem("isDisplayed_Calendar");
var isDisplayed_Timetable = localStorage.getItem("isDisplayed_Timetable");
var isDisplayed_Corona = localStorage.getItem("isDisplayed_Corona");
var isDisplayed_Prevent = localStorage.getItem("isDisplayed_Prevent");
var isDisplayed_KokaWNET = localStorage.getItem("isDisplayed_KokaWNET");
var isMoved_AttendSystem = localStorage.getItem("isMoved_AttendSystem");

window.addEventListener("load", main, false);

function main(e) {

    const checkboxTimer = setInterval(load_checkbox, 100);
    
    function load_checkbox() {
        // It seems that the Side menu bar DOM construction is delayed.
        if (document.getElementById("side_dock") != null) {

            clearInterval(checkboxTimer);

            const Sections  = document.getElementsByClassName("content-part content-plugin");
            const Field = document.getElementById("panel-index"); 
            const Menu = document.getElementById("side_dock");    //side menu.
            
            var Welcome = KokaWNET = Oshirase = Calendar = 
                Timetable = Corona = Prevent = null;
            // Caution: To avoid attendance problems, you cannot hide Attend System. 
            // It's only used to move to the top of sections.
            var AttendSystem = null;


            const Footer = document.getElementById("global-header");
            const Div = document.createElement("div"); 

            const checkbox_Wel = document.createElement("input");
            const checkbox_Osh = document.createElement("input");
            const checkbox_Cal = document.createElement("input");
            const checkbox_Tim = document.createElement("input");
            const checkbox_Cor = document.createElement("input");
            const checkbox_Pre = document.createElement("input");
            const checkbox_Kok = document.createElement("input");
            const checkbox_MoveAttend = document.createElement("input");

            const WelDesc = document.createElement("p");
            const OshDesc = document.createElement("p");
            const CalDesc = document.createElement("p");
            const TimDesc = document.createElement("p");
            const CorDesc = document.createElement("p");
            const PreDesc = document.createElement("p");
            const KokDesc = document.createElement("p");
            const MoveDesc = document.createElement("p");

            Div.id = "div_checkboxs";

            checkbox_Wel.type = checkbox_Osh.type = checkbox_Cal.type = 
            checkbox_Tim.type = checkbox_Cor.type = checkbox_Pre.type = 
            checkbox_Kok.type = checkbox_MoveAttend.type = "checkbox";

            WelDesc.innerText = "Welcome to TUT Portal";
            OshDesc.innerText = "大学からのお知らせ";
            CalDesc.innerText = "大学カレンダー";
            TimDesc.innerText = "時間割";
            CorDesc.innerText = "新型コロナウイルス対応について";
            PreDesc.innerText = "感染症対策にご協力ください";
            KokDesc.innerText = "KOKADAI-WNET利用時のお願い";
            MoveDesc.innerText = "「出席管理システム」をトップに移動"

            WelDesc.style.display = OshDesc.style.display = 
            CalDesc.style.display = TimDesc.style.display = 
            CorDesc.style.display = PreDesc.style.display = 
            PreDesc.style.display = KokDesc.style.display =
            MoveDesc.style.display = 
             "none";

            checkbox_MoveAttend.style = "accent-color: red;"

            
          
        
            Div.appendChild(checkbox_Wel);
            Div.appendChild(checkbox_Osh);
            Div.appendChild(checkbox_Cal);
            Div.appendChild(checkbox_Tim);
            Div.appendChild(checkbox_Cor);
            Div.appendChild(checkbox_Pre);
            Div.appendChild(checkbox_Kok);
            Div.appendChild(checkbox_MoveAttend);
            Footer.appendChild(Div);
            Field.appendChild(Menu);// Evacuate sideMenu 
            
            Footer.appendChild(WelDesc);
            Footer.appendChild(OshDesc);
            Footer.appendChild(CalDesc);
            Footer.appendChild(TimDesc);
            Footer.appendChild(CorDesc);
            Footer.appendChild(PreDesc);
            Footer.appendChild(KokDesc);
            Footer.appendChild(MoveDesc);

            checkbox_Wel.onchange = () => {
                if (checkbox_Wel.checked) {
                    Welcome.style.display ="block";
                    localStorage.setItem("isDisplayed_Welcome", true);
                } else {
                    Welcome.style.display ="none";
                    localStorage.setItem("isDisplayed_Welcome", false);
                }
            }
            
            checkbox_Osh.onchange = () => {
                if (checkbox_Osh.checked) {
                    Oshirase.style.display ="block";
                    localStorage.setItem("isDisplayed_Oshirase", true);
                } else {
                    Oshirase.style.display ="none";
                    localStorage.setItem("isDisplayed_Oshirase", false);
                }
            }

            checkbox_Cal.onchange = () => {
                if (checkbox_Cal.checked) {
                    Calendar.style.display ="block";
                    localStorage.setItem("isDisplayed_Calendar", true);
                } else {
                    Calendar.style.display ="none";
                    localStorage.setItem("isDisplayed_Calendar", false);
                }
            }
            
            checkbox_Tim.onchange = () => {
                if (checkbox_Tim.checked) {
                    Timetable.style.display ="block";
                    localStorage.setItem("isDisplayed_Timetable", true);
                } else {
                    Timetable.style.display ="none";
                    localStorage.setItem("isDisplayed_Timetable", false);
                }
            }

            checkbox_Cor.onchange = () => {
                if (checkbox_Cor.checked) {
                    Corona.style.display ="block";
                    localStorage.setItem("isDisplayed_Corona", true);
                } else {
                    Corona.style.display ="none";
                    localStorage.setItem("isDisplayed_Corona", false);
                }
            }

            checkbox_Pre.onchange = () => {
                if (checkbox_Pre.checked) {
                    Prevent.style.display ="block";
                    localStorage.setItem("isDisplayed_Prevent", true);
                } else {
                    Prevent.style.display ="none";
                    localStorage.setItem("isDisplayed_Prevent", false);
                }
            }

            checkbox_Kok.onchange = () => {
                if (checkbox_Kok.checked) {
                    if (KokaWNET != null) {
                    KokaWNET.style.display ="block";
                    }
                    localStorage.setItem("isDisplayed_KokaWNET", true);
                } else {
                    if (KokaWNET != null) {
                    KokaWNET.style.display ="none";
                    }
                    localStorage.setItem("isDisplayed_KokaWNET", false);
                }
            }

            checkbox_MoveAttend.onchange = () => {
                if (checkbox_MoveAttend.checked) {
                    Welcome.before(AttendSystem);
                    localStorage.setItem("isMoved_AttendSystem", true);
                } else {
                    document.getElementsByClassName("vimana-plugins flex-wrap")[0].appendChild(AttendSystem);
                    localStorage.setItem("isMoved_AttendSystem", false);
                }
            }


            checkbox_Wel.addEventListener("mouseover", ()=>{
                WelDesc.style.display = "block";
            });
            checkbox_Wel.addEventListener("mouseleave", ()=>{
                WelDesc.style.display = "none";
            });

            checkbox_Osh.addEventListener("mouseover", ()=>{
                OshDesc.style.display = "block";
            });
            checkbox_Osh.addEventListener("mouseleave", ()=>{
                OshDesc.style.display = "none";
            });

            checkbox_Cal.addEventListener("mouseover", ()=>{
                CalDesc.style.display = "block";
            });
            checkbox_Cal.addEventListener("mouseleave", ()=>{
                CalDesc.style.display = "none";
            });

            checkbox_Tim.addEventListener("mouseover", ()=>{
                TimDesc.style.display = "block";
            });
            checkbox_Tim.addEventListener("mouseleave", ()=>{
                TimDesc.style.display = "none";
            });

            checkbox_Cor.addEventListener("mouseover", ()=>{
                CorDesc.style.display = "block";
            });
            checkbox_Cor.addEventListener("mouseleave", ()=>{
                CorDesc.style.display = "none";
            });

            checkbox_Pre.addEventListener("mouseover", ()=>{
                PreDesc.style.display = "block";
            });
            checkbox_Pre.addEventListener("mouseleave", ()=>{
                PreDesc.style.display = "none";
            });

            checkbox_Kok.addEventListener("mouseover", ()=>{
                KokDesc.style.display = "block";
            });
            checkbox_Kok.addEventListener("mouseleave", ()=>{
                KokDesc.style.display = "none";
            });

            checkbox_MoveAttend.addEventListener("mouseover", ()=>{
                MoveDesc.style.display = "block";
            });
            checkbox_MoveAttend.addEventListener("mouseleave", ()=>{
                MoveDesc.style.display = "none";
            });

            for (var i=0; i < Sections.length; i++) {
                switch (Sections[i].children[0].innerText) {
                    case "Welcome to TUT Portal": 
                        Welcome = Sections[i];
                        break;
                    
                    case "KOKADAI-WNET利用時のお願い":
                        KokaWNET = Sections[i];
                        break;
                    
                    case "新型コロナウイルス対応について":
                        Corona = Sections[i];
                        break;
                    
                    case "感染症対策にご協力ください":
                        Prevent = Sections[i];
                        break;
            
                    case "大学からのお知らせ":
                        Oshirase = Sections[i];
                        break;
            
                    case "大学カレンダー":
                        Calendar = Sections[i];
                        break;
            
                    case "時間割:ピン留めクイックアクセス(β)":
                        Timetable = Sections[i];
                        break;
            
                    case "出席管理システム":
                        AttendSystem = Sections[i];
                        break;
            
                }
            }

            
            // Reads values in LocalStrage and restores the previous state.
            (isDisplayed_Welcome == "true") 
            ? checkbox_Wel.checked = true
            : Welcome.style.display ="none";
        
            (isDisplayed_Oshirase == "true") 
            ? checkbox_Osh.checked = true 
            : Oshirase.style.display ="none";
        
            (isDisplayed_Calendar == "true") 
            ? checkbox_Cal.checked = true
            : Calendar.style.display ="none";
        
            (isDisplayed_Timetable == "true") 
            ? checkbox_Tim.checked = true
            : Timetable.style.display ="none";
        
            (isDisplayed_Corona == "true") 
            ? checkbox_Cor.checked = true
            : Corona.style.display ="none";
        
            (isDisplayed_Prevent == "true") 
            ? checkbox_Pre.checked = true
            : Prevent.style.display ="none";

            if (KokaWNET != null) {
            (isDisplayed_KokaWNET == "true")
            ? checkbox_Kok.checked = true
            : KokaWNET.style.display = "none";
            }

            if (isMoved_AttendSystem == "true") {
                checkbox_MoveAttend.checked = true
                Welcome.before(AttendSystem);
            } else {
                document.getElementsByClassName("vimana-plugins flex-wrap")[0].appendChild(AttendSystem);
            }

        }
    }
};

// The default value is set only once.
function initializeStoragevalues() {
    if (localStorage.getItem("isDisplayed_Welcome") == null) {
        localStorage.setItem("isDisplayed_Welcome", true);
    }
    if (localStorage.getItem("isDisplayed_Oshirase") == null) {
        localStorage.setItem("isDisplayed_Oshirase", true);
    }
    if (localStorage.getItem("isDisplayed_Calendar") == null) {
        localStorage.setItem("isDisplayed_Calendar", true);
    }
    if (localStorage.getItem("isDisplayed_Timetable") == null) {
        localStorage.setItem("isDisplayed_Timetable", true);
    }
    if (localStorage.getItem("isDisplayed_Corona") == null) {
        localStorage.setItem("isDisplayed_Corona", true);
    }
    if (localStorage.getItem("isDisplayed_Prevent") == null) {
        localStorage.setItem("isDisplayed_Prevent", true);
    }
    if (localStorage.getItem("isDisplayed_KokaWNET" == null)) {
        localStorage.setItem("isDisplayed_KokaWNET", true);
    }
    if (localStorage.getItem("isMoved_AttendSystem") == null) {
        localStorage.setItem("isMoved_AttendSystem", false);
    }
    
    
    /*
      // Use these snippets to remove all keys and values!!
      localStorage.removeItem("isDisplayed_Welcome");
      localStorage.removeItem("isDisplayed_Oshirase");
      localStorage.removeItem("isDisplayed_Calendar");
      localStorage.removeItem("isDisplayed_Timetable");
      localStorage.removeItem("isDisplayed_Corona");
      localStorage.removeItem("isDisplayed_Prevent");
      localStorage.removeItem("isMoved_AttendSystem");
    */
}


/* 

// Section part.
Sections  = document.getElementsByClassName("content-part content-plugin");

// notes
Welcome to TUT Portal: Welcome
大学からのお知らせ: Oshirase
大学カレンダー: Calendar
時間割: Timetable
新型コロナウイルス対応について: Corona
感染症対策にご協力ください: Prevent

*/ 