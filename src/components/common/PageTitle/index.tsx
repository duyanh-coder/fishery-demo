import { Typography } from "antd";

import "./style.scss";

const { Title, Text } = Typography;

interface Props {

    title: string;

    subTitle?: string;

}

const PageTitle = ({
    title,
    subTitle,
}: Props) => {

    return (

        <div className="page-title">

            <Title
                level={2}
                className="page-title__title"
            >
                {title}
            </Title>

            {subTitle && (

                <Text
                    type="secondary"
                    className="page-title__subtitle"
                >
                    {subTitle}
                </Text>

            )}

        </div>

    );

};

export default PageTitle;