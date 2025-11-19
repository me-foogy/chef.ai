import Header from "./Header/header.jsx"
import MainSection from "./main/mainSection.jsx"
import Recipie from "./main/recipieSection.jsx"
import {useState} from 'react';
// import getRecipeFromMistral from './aiCall.js'


export default function App(){
    const [recipieShown, setRecipieShown] = useState(false);
    //setter function handler
    function showRecipie(){
        setRecipieShown((prevRecipie)=> prevRecipie?false:true)
    }

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-[#edecec] h-[450px] w-[360px] m-auto rounded-2xl items-center shadow-md">
                <Header/>
                {!recipieShown?<MainSection handleRecipieButtonPress={showRecipie}/>:<Recipie/>}
            </div>
        </div>
    )
}