import React, {useState} from 'react';
import DisplayPhrasal from './DisplayPhrasal';
import styled from 'styled-components';
import StyleSecondMod from './Styled/StyledSecondMod';
import StyledSelect  from './Styled/StyledSelect';
import StyledTd from './Styled/StyledTd';



export default function Verb({verbs, listverbprep, verbprepadv, meaning, verbMeaning, newMeaning}){
    
    const [verbName, setVerbName] = useState(null);

    const onChangeComboVerb = (e) =>{
        console.log("entre a cambio combo")
        const verbid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        console.log("verbid")
        console.log(verbid);

        console.log("index")
        console.log(index);
        setVerbName(e.target.options[index].text);//get text of selected option
        console.log(verbName);
        listverbprep(verbid);
    }

    
    

    function filteredVerbPrep(){
        return(
           <DisplayPhrasal  verbprepadv={verbprepadv} verbName={verbName} meaning={meaning} verbMeaning={verbMeaning} newMeaning={newMeaning}/>
        )
    }

   
    console.log("en vErb")
    console.log(verbs)
    return(
        <StyleSecondMod>
            <tr height={"5px"}>
                <StyledTd fontsize={"25px"}>Verb : 
                </StyledTd>
                <td>
                    <StyledSelect onChange={(e)=>{
                        onChangeComboVerb(e)}} >
                        <option value='0'>--Choose Verb--</option>
                        {verbs.map((v) =>
                            <option key={v.id} value={v.id}>{v.name}</option>         
                        )}
                    </StyledSelect>
                </td>
            </tr> 
            {verbprepadv &&  filteredVerbPrep() }  
      
        </StyleSecondMod>
    )
    
}