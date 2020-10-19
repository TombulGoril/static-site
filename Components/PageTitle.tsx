import Head from "next/head";
import { ReactNode } from "react";

// Props Interface
// Children: React JSX
// Tab Title?: Title which will be used in <head> (The tab title)
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