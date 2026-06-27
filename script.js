let form=document.querySelector("form");
let username=document.querySelector("#name");
let role=document.querySelector("#role");
let bio=document.querySelector("#bio");
let img=document.querySelector("#img");

const usermanager={
    user:[],
    init:function(){
        form.addEventListener("submit",this.submitform.bind(this));
    },
    submitform:function(e){
        e.preventDefault();
        this.addUser();
        this.renderUi();
    },
    addUser:function(){
        this.user.push({
            username:username.value,
            role:role.value,
            bio:bio.value,
            img:img.value,
        });
        
        form.reset();
    },
    
    renderUi:function(){
        document.querySelector(".card-holder").innerHTML="";
        this.user.forEach((usr,index)=>{
            let card=document.createElement("div");
            card.classList.add("card");
            
            let image=document.createElement("img");
            image.classList.add("cardIg");
            image.src=usr.img;
            card.appendChild(image);
            
            let h4=document.createElement("h4");
            h4.classList.add("cardh4");
            h4.textContent=usr.username;
            card.appendChild(h4);
            
            let h5=document.createElement("h5");
            h5.classList.add("cardh5");
            h5.textContent=usr.role;
            card.appendChild(h5);
            
            let h6=document.createElement("h6");
            h6.textContent=usr.bio;
            card.appendChild(h6);
            
            let btn=document.createElement("button");
            btn.classList.add("btn");
            btn.textContent='x';

            btn.addEventListener("click",()=>{
                this.removeUser(index);
            });

            card.appendChild(btn);

            document.querySelector(".card-holder").appendChild(card);
        });
    },
    removeUser:function(idx){
        this.user.splice(idx,1);
        this.renderUi();
    },
};

usermanager.init();

