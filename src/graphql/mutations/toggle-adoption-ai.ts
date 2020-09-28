import gql from 'graphql-tag';
import {useMutation} from "@apollo/react-hooks";

const TOGGLE_ADOPTION_AI = gql`
  mutation ToggleAdoptionAi {
    toggleAdoptionAI
  }
`;

const useToggleAdoptionAI = () => {
  return useMutation<{}, {}>(TOGGLE_ADOPTION_AI);
};

export {useToggleAdoptionAI};
