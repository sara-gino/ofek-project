import React from 'react';
import DashItem from '@bit/ofek.catdog.dash-item';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks'
import { GET_ANIMALS, AnimalsData, Animal } from '../../graphql/queries/animal';
import './Dashboard.css'
const MAX_ITEMS = 100

interface DashboardProps{

    onItemSelected: (animal: Animal) => void;

}

const Dashboard: React.FC<DashboardProps> = ({onItemSelected}) => {
    
    const minimum_items = 28;
    const [spacing] = React.useState<GridSpacing>(2);
    const [chosenItem, setChosenItem] = React.useState();
    const { loading, error, data } = useQuery<AnimalsData>(GET_ANIMALS, {
        variables: {
            adoptionStatusCode: 2
        }, pollInterval: 3000
    })
    const getAdditionalClassValue = (itemKey)=>{
        if(itemKey === chosenItem){
            return 'active-item';
        }
        return '';
    }
    
    if (loading) {
        return <div>"loading"</div>;

    } if (error) {
        return <div>"error" {error}</div>;

    }
    if (data && data.allAdoptees) {
        const itemToFill = Math.max(minimum_items - data.allAdoptees.length, 0)
        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {data.allAdoptees.slice(0,MAX_ITEMS).map(value => {
                            const actions = [
                                { text: 'בחר', onClick: () => {onItemSelected(value)}}
                            ];
                            return (
                                <Grid key={value.id} item>
                                    <div className={`dash-itm ${getAdditionalClassValue(value.id)}`} onClick={()=>{console.log(`change viewed pet to ${value.id}#`); setChosenItem(value.id)}}>
                                        {/* Add DashItem Component here */}
                                    </div>

                                </Grid>
                            )
                        })}
                        {Array.from(new Array(itemToFill).keys()).map(index => (

                            < Grid key={index} item >
                                <div className="dash-itm">
                                    <DashItem
                                        image='http://www.allwhitebackground.com/images/2/2278.jpg'
                                        subtitle1=""
                                        subtitle2=""
                                        actions={[]}
                                    />
                                </div>

                            </Grid>))}

                    </Grid>
                </Grid>

            </Grid >

        );
    }
    else {
        return <div>hi</div>
    }


}
export default Dashboard;
