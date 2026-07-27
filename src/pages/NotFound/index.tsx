// src/pages/NotFound/index.tsx

import { Result, Button } from "antd";

export default function NotFoundPage() {

    return (

        <Result

            status="404"

            title="404"

            subTitle="Không tìm thấy trang."

            extra={<Button type="primary">Trang chủ</Button>}

        />

    );

}