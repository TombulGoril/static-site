import Head from "next/head";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode
    tabTitle?: string
}

const PageTitle: React.FC<IProps> = ({ children, tabTitle }) => {
    return (
        <h1>
            {tabTitle && 
                <Head>
                    <title>{tabTitle}</title>
                </Head>
            }
            {children}
        </h1>
    )
}

export default PageTitle