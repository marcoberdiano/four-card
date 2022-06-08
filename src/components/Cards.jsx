import Card from "./Card";
const Cards = () => {
    return ( 
        <div className="cards-container">
            <Card
                title='Supervisor'
                desc='Monitors activity to identify project roadblocks'
                icon='supervisor'
                color='hsl(180, 62%, 55%)'
            />
            <div className="cards-center">   
                <Card
                title='Team Builder'
                desc='Scans our talent network to create the optimal team for your project'
                icon='team-builder'
                color='hsl(0, 78%, 62%)'/>
                <Card
                title='Karma'
                desc='Regularly evaluates our talent to ensure quality'
                icon='karma'
                color='hsl(34, 97%, 64%)'/>
            </div>
            <Card
                title='Calculator'
                desc='Uses data from past projects to provide better delivery estimates'
                icon='calculator'
                color='hsl(212, 86%, 64%)'
                />
        </div> 
    );
}
 
export default Cards;