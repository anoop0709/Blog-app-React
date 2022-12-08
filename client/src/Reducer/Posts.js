
export default (posts = [], action)=>{

    switch (action.type) {
        case 'FETCHALL':
            return action.payload;
        case 'CREATE':
            posts.push(action.payload);
            return posts
    
        default:
            return posts;
    }
}