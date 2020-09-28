import gql from 'graphql-tag';

export const CONFIRM_ADOPTION = gql`
  mutation ConfirmAdoption($id: Int!) {
    confirmAdoption(adopteeId: $id) {
        id
    }

  }
`;
export const CANCEL_ADOPTION = gql`
mutation CancelAdoption($id: Int!) {
    cancelAdoption(adopteeId: $id) {
      id
  }
}
`;
