// Write your Character component here
import React from "react";
import styled from "styled-components";


function character(props){
    
    //console.log(props.character);

    const MyCard = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
    `

    const MyInfo = styled.div`
        width:50%;
        margin: 20px 0;
    `

    // function toggle(){
    //     cards.classList.toggle('hiden');;
    // }

    
    return(
        <div>
            <MyCard>
                {
                props.character.map((individual)=>{
                    return (
                        <MyInfo>
                            <div>Character Name: {individual.name}</div>
                            <div>Status: {individual.status}</div>
                            <div>Species: {individual.species}</div>
                            <div>Gender: {individual.gender}</div>
                            <img src={individual.image}></img>
                        </MyInfo>);
                    })
                } 
            </MyCard>    
        </div>
        
    )
}

export default character;