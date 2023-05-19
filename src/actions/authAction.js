export const authUser=(user)=> {
    return {
        type: 'ADD_AUTH_USER',
        payload: user
    }
}