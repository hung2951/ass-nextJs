import React from 'react'


type Props = {}

const Comment = (props: Props) => {
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="d-flex flex-column">
                    <div className="coment-bottom bg-white p-2 px-4">
                        <form action="">
                            <div className="d-flex flex-row add-comment-section mt-4 mb-4">

                                <img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38" />

                                <input type="text" className="form-control mr-3" placeholder="Add comment" />
                                <button className="btn btn-primary" type="button">Comment</button>



                            </div>
                        </form>
                        <div className="commented-section mt-2">
                            <div className="d-flex flex-row align-items-center commented-user">
                                <h5 className="mr-2">Le The Tam</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">20/12/2020</span></div>
                            <div className="comment-text-sm"><span>San pham tot</span></div>
                            <div
                                className="reply-section">
                                <div className="d-flex flex-row align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span className="ml-2">25</span><span className="dot ml-2"></span>
                                    <h6 className="ml-2 mt-1">Reply</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment