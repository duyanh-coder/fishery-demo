import type { PropsWithChildren } from "react";


import "./style.scss";

interface Props extends PropsWithChildren {
    className?: string;
}

const PageContainer = ({
    children,
    className,
}: Props) => {

    return (
        <div
            className={`page-container ${className ?? ""}`}
        >
            {children}
        </div>
    );

};

export default PageContainer;