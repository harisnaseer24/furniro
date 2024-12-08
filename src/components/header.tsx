import { Banner } from "./banner";
import { Navbar } from "./navbar";

export function Header (){
    return(
        <>
        
        <Navbar />
        <Banner text="banner"/>
        </>
    );
}