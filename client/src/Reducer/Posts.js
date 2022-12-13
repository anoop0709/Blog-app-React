const intialArray = [];
export default (posts = intialArray, action)=>{
    console.log(action.payload);
    switch (action.type) {
      
           
        case 'DELETE' :
            return posts.filter((post)=>post._id !== action.payload)
            case 'LIKEPOST':
            case 'UPDATE' :
                console.log(action.payload);
            const pat =  posts.map((post)=> {
                if (post._id === action.payload._id) {
                    console.log('mTXH');
                    post = action.payload 
                    console.log(post);
                   
                }
                return post
            }

             )
             posts = pat
             console.log(posts);
             return [...posts]
        case 'FETCHALL':
            return action.payload
        case 'CREATE':   
            return [...posts,action.payload]
            
    default:
        return posts
       
    }
}