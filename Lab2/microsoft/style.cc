body {
    display: flex;
    flex-direction: column;
    padding: 0%;
    margin: 0%;
}

.login {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 54px;
    font-size: 13px;
    padding: 0 5%;
}

.log01 {
    display: flex;
    flex-direction: row;
    font-family: 'Segoe UI',SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
}
.log01 img {
    height: 23px;
    padding: 6px;
}

.log01 div {
    padding: 12px;
    text-decoration: none;
}

.log02 {
    display: flex;
    flex-direction: row;
    padding-left: 450px;
    font-family: 'Segoe UI',SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
}

.log02 div {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.log02 div img {
    height: 10px;
    padding-left: 5px;
}

.log01 div a{
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: #000000;
}

.log02 div a{
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: #000000;
}

.log01 div a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}
.log01 div a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.log02 div a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}
.log02 div a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}



.microsoft365 {
    width: 100%;
    height: 480px;
    background-image: url('assets/Highlight-Hero-Windows11-GlobalLaunch-VP5-1920x600.jpeg');
    background-size: 100% 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

}


.m365-text1 {
    padding: 60px;
    margin-left: 60px;
    width: 450px;
    height: 340px;
    color: #fff;
    font-family: "Segoe UI",SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;

    display: flex;
    flex-direction: column;
    justify-content:center;
    line-height: 1.5;
}

.m365-text1 h1 {
    font-size: 2.3125rem;
    margin-bottom: 25px;
}

.m365-text1 span {
    font-size: 1rem;
}

/* CSS */
.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: rgb(40, 91, 160);
  border-radius: 3px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 10px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 60%;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}

/* CSS */
.button-66 {
  background-color: rgb(40, 91, 160);
  border-radius: 3px;
  border: 0;
  box-shadow: rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inherit;
  font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 100%;
  font-weight: 500;
  line-height: 24px;
  margin-top: 15px;
  min-height: 56px;
  min-width: 120px;
  padding: 16px 20px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);
}

.button-66:hover {
  background-color: #065dd8;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .button-66 {
    padding: 16px 44px;
    min-width: 150px;
  }
}




.news {
    margin: 50px;
    margin-top: 80px;
    padding-left: 10px;
    padding-right: 10px;

    display: flex;
    flex-direction: row;

}


.news div {
    margin-left: 12px;
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    width: 306px;
    line-height: 1.5;
}

.news div h1 {
    font-family: "Segoe UI",SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 10px;
}

.news div span {
    font-family: "Segoe UI",SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif
}



.n-link {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
}

.n-link img {
    height: 15px;
    width: 15px;
    margin: 10px;
}

.n-link a {
    margin: 0%;
    padding: 0%;
    text-decoration: none;
    color:rgb(40, 91, 160);
    font-family: "Segoe UI",SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
}