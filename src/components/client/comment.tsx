import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';
import moment from 'moment';

type Props = {}

const Commentuse = (props: Props) => {

    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(id ? `/cmt/cmtByProduct/${id}` : null)

    if (!data) return <div>loading...</div>
    if (error) return <div>error</div>

    return (
        <div>
            {data.comment.sort((a:any, b:any) => a.createdAt < b.createdAt ? 1 : -1).map((item: any) => (
                <div key={item._id}>
                    <div className="d-flex flex-row align-items-center commented-user">
                        <h5 className="mr-2">{item.name}</h5>
                        <span className="dot mb-1"></span>
                        <span className="mb-1 ml-2 text-sm">{moment(item.createdAt).format("DD-MM-YYYY, h:mm:ss a")}</span>
                    </div>
                    <div className="comment-text-sm">
                        <span>{item.content}</span>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default Commentuse