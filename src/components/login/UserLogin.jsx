import classes from "./UserLogin.module.css";
export default function UserLogin(){
    return(
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#AF52FC" fill-opacity="1" d="M0,128L40,149.3C80,171,160,213,240,208C320,203,400,149,480,154.7C560,160,640,224,720,229.3C800,235,880,181,960,144C1040,107,1120,85,1200,74.7C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <h1 className={classes.title}>Prottect Your Privacy</h1>
        </header>
    );
}