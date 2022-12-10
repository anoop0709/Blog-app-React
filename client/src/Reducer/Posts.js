const intialArray = [];
export default (posts = intialArray, action)=>{
  
    switch (action.type) {
       
           
        case 'DELETE' :
            return posts.filter((post)=>post._id !== action.payload)
            case 'LIKEPOST':
            case 'UPDATE' :
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post)
        case 'FETCHALL':
            return action.payload
        case 'CREATE':   
            return [...posts,action.payload]
            
    default:
        return posts
       
    }
}