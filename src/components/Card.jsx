import { Top } from '../stylecomponents/Top';
const Card = ({title, desc, icon, color}) => {
    return ( 
        <div className='card-container'>
            <Top bg={color}>
                <h3 className='card-title'>{title}</h3>
                <p className='card-desc'>{desc}</p>
                <div className='card-img-container'>
                    <img className='card-img' src={require(`../images/icon-${icon}.svg`)} alt={title} />
                </div>
            </Top>            
        </div>
     );
}
 
export default Card;