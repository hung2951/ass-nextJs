import { LayoutProps } from '@/models/layout'
import React from 'react'

type Props = {}

const EmptyLayout = (props: LayoutProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default EmptyLayout