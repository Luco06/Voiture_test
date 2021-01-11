import React from 'react';


const Car = ({color, nom, year,etat}) => {
    const colorInfo = color ? (<p>Couleur : {color} </p>) : (<p>Couleur: Néant</p>);

    if(nom){
        return (
            <div  id='car'>
                <p>Marque : {nom} </p>
                <p>Age : {year} </p>
                <p>Etat: {etat}</p>
                {colorInfo}
            </div>
        )
    }else{
        return null;
    }

  
}


export default Car;