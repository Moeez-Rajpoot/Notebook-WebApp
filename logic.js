const inputbox = document.getElementById("txtbox");
const Display = document.getElementsByClassName("rightin")[0];
const Right = document.getElementsByClassName("right")[0];
let task =0;

function Save(params) {

    let val = inputbox.value;

    if (val.trim() === "") {
        alert("Enter Text First");
        
    }
    else {

        let para = document.createElement("p");
        let di = document.createElement("div");
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        para.innerText = inputbox.value;
        di.classList.add("singlebox");
        btn1.id = "btn2";
        btn2.id = "btn3";
        btn1.innerText = "Edit";
        btn2.innerText = "Delete";
        img1.id = "img2";
        img1.src = "./images/edit.png";
        img2.id = "img3";
        img2.src = "./images/trash.png";
        Display.appendChild(di);
        inputbox.value = "";
        task++;
        di.appendChild(para);
        di.appendChild(btn1).appendChild(img1);
        di.appendChild(btn2).appendChild(img2);
        Right.style.display = "block";
        
        btn2.addEventListener('click' , (e)=>{
            return Del(di);


        });

        btn1.addEventListener('click' , (e)=>{

            return Editing(di , para);
        });
    }


    function Del(SelectedBox) {

        SelectedBox.remove();
        task--;
        if (task === 0) {
          Right.style.display="none";
            
        }
        
    }

    function Editing(SelectedBox, TxtEdit) {
        inputbox.value = TxtEdit.innerText;
        task--;
        SelectedBox.remove();
        
    }

    

}



    
       
    
