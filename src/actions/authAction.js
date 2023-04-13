export const authUser=(user)=> {
    return {
        type: 'ADD_USER',
        payload: user
    }
}