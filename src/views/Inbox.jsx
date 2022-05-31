import React from 'react'

export const Inbox = () => {
    const [ postList, setPostList] = useState([]);
    const retreivePosts = async () => 
    {
        setPostList()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.postBody.value)
    }
    useEffect(() =>
    {
        retreivePosts()

    })

 
    return(
        <div className="row">
            <div className="col-md-12">
                <h1>Welcome, Luke Cage!</h1>

                <form onSubmit={  handleSubmit}>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="form-group">
                                <input type="text" className="form-control" name="postBody" aria-descripedby="helpId" placeholder="Post Here" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input className="btn btn-info btn-block" type="submit" value="Post" />
                        </div>
                    </div>
                </form>
            <hr />

            <ul className="list-group">
                {

                    postList.lenght !==0 ?
                    postList.map(post => (
                        <li key={post.id} className="list-group-item">
                            <p>{post.body}</p>
                            <div>
                                <small>
                                    &mdash; {`${ post.author.first_name } ${ post.author.last_name}`}
                                    <span className="float-right"> {moment(new Date(post.date_created)).fromNow()}</span>
                                </small>
                            </div>
                        </li>
                    )):
                    <div className="spinner-boarder text-info mx-auto" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }

            </ul>
        </div>
</div>            
)
}
