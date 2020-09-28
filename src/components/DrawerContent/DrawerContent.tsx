import React from 'react'
import ContentWrapper from '@bit/ofek.catdog.content-wrapper';
import {AdoptersData, Adopter, GET_ADOPTERS } from '../../graphql/queries/adopters';
import ListItem from '@bit/ofek.catdog.list-item';
import {TiAttachment} from 'react-icons/ti'
import { useQuery } from '@apollo/react-hooks'
const MAX_ITEMS = 100
interface DrawerContentProps {
    onItemSelected: (adopter: Adopter) => void;
}


const DrawerContent: React.FC<DrawerContentProps> = ({onItemSelected}) => {
    const { loading, error, data } = useQuery<AdoptersData>(GET_ADOPTERS, {
        pollInterval: 1000
    })
    if (loading) return <div>loading...</div>;
    else if (error) return <div>Error...</div>
    else {
        return (
            <div>
                <ContentWrapper header={`מאמצים : ${ data && data.adopters && data.adopters.length ? data.adopters.length : 0}`}>
                  {
                    data && data.adopters && data.adopters.slice(0, MAX_ITEMS).map(adopter => {
                        const actions = [{
                            icon: TiAttachment,
                            onClick: () => onItemSelected(adopter)
                        }]
                        return <ContentWrapper>
                            <ListItem
                            heading={adopter.name}
                            subtitle1={adopter.preferred.description}
                            subtitle2={adopter.secondpreferred ? adopter.secondpreferred.description : 'אין'}
                            actions={actions} />
                        </ContentWrapper>
                    })
                }   
                </ContentWrapper>
               
               
              

            </div >
        )

    }


}

export default DrawerContent;
