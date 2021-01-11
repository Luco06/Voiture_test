import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component{
    state = {
        voitures:[
            {name: 'Ford', color : 'red', year: 2000, etat:'occasion'},
            {name: 'Mercedes', color : 'black', year: 2010, etat:'occasion'},
            {name: 'Peugeot', color : 'green', year: 2018, etat:'neuve'},
        ],
        titre: 'Mon Catalogue voitures 2'
    }
    addTenYears =() =>{
        const updateSate = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        this.setState({
            updateSate
        })
    }
    
    render(){
        const  year = new Date().getFullYear();
        return (
       <div>
            <h1>{this.state.titre}</h1>
            <button onClick ={this.addTenYears}> +10 ans</button>

            {
                this.state.voitures.map((voiture,index) =>{
                    return(
                       <div key ={index} >
                    <Car nom={voiture.name} color ={voiture.color} year ={ year - voiture.year +' ans'} etat ={voiture.etat}/>
                    </div>
                    )
                })
            }
       </div>
            
            )
    }
}

export default Mycars;