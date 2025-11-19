import { useState } from "react";

export default function MainSection(props){

    const [singleIngredient, setIngredient] = useState([]);


    const ingredientList =  singleIngredient.map(item => (
        <li>{item}</li>
    ))

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient=formData.get("ingredient");
        if(newIngredient==''){
            alert("enter an ingredient")
            return;
        }
        setIngredient(prevIngredientList => [...prevIngredientList, newIngredient]);
        event.currentTarget.reset();
    }

    return(
        <>
            < div className ="flex flex-col justify-between h-[370px] ">
                <div className="flex flex-col">
                    <form onSubmit={handleSubmit}
                    className="pt-3 flex flex-row justify-between m-3 flex-1 gap-2">

                    <input name="ingredient" type="text" placeholder="eg.carrot" className=" bg-white rounded-md px-3 py-1 shadow-md text-[12px] flex-1" /> 
                    <button type="submit" className="border-0 rounded-md pl-2 pr-2 pt-1 pb-1  bg-[#ff383c] text-white text-[12px] hover:bg-white hover:text-black hover:border-0 shadow-md" 
                    > + Add Ingrediant</button>
                    </form>
                    

                    {ingredientList.length>0  && <h1 className="pl-5">The Ingredient List:</h1>}
                    <ul className="list-disc pl-10 pt-3 max-h-[180px] overflow-y-auto text-[#]">
                        {ingredientList}
                    </ul>
                </div>

                {/* insert at least four ingredients */}
                {ingredientList.length < 4 ? <p className="mx-auto opacity-35 p-5">Insert at least four ingredients</p> 
                :
                <section className="flex flex-row p-4 bg-white m-3 rounded-2xl justify-between">
                    <div>
                        <h3 className="text-[#ff383c] text-[18px]">Find a recipie</h3>
                        <p className="text-[9px]">Use AI to look for a recipie with the ingredients</p>
                    </div>
                    <button type="button" onClick={props.handleRecipieButtonPress} className="bg-[#ff383c] px-5 py-0.5 rounded-xl text-white flex flex-column text-[12px] items-center shadow-emerald-100">
                        <img src="./src/assets/brain.png" alt="search button" className="w-5 h-5 pr-1 "/>
                    Search</button>
                </section>
                }
            </div>
    </>
    )
}