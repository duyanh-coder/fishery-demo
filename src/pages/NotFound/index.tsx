import {
    Result,
    Button,
} from "antd";

import {
    useNavigate,
} from "react-router-dom";

export default function NotFoundPage() {

    const navigate = useNavigate();

    return (

        <Result

            status="404"

            title="404"

            subTitle="Không tìm thấy trang."

            extra={[

                <Button
                    key="home"
                    type="primary"
                    onClick={() => navigate("/")}
                >
                    Dashboard
                </Button>,

                <Button
                    key="back"
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>,

            ]}

        />

    );

}