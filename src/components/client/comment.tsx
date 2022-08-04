import { getOne } from '@/api/auth';
import { useComment } from '@/hooks/comment';
import { isAuthenticate } from '@/utils/localStogare';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import useSWR from 'swr';

type Props = {}

const Commentuse = (props: Props) => {

    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(id ? `/cmt/cmtByProduct/${id}` : null)

    if (!data) return <div>loading...</div>
    if (error) return <div>error</div>

    return (
        <div>
            {data.comment.map((item: any) => (
                <div key={item._id}>
                    <div className="d-flex flex-row align-items-center commented-user">
                        <h5 className="mr-2">{item.name}</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">20/12/2020</span></div>
                    <div className="comment-text-sm">
                        <span>{item.content}</span>
                    </div>
                    <div
                        className="reply-section">
                        <div className="d-flex flex-row align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span className="ml-2">25</span><span className="dot ml-2"></span>
                            <h6 className="ml-2 mt-1">Reply</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Commentuse