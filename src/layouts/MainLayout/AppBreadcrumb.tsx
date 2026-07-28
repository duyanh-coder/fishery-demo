import { Breadcrumb } from "antd";
import { Link, useMatches } from "react-router-dom";

export default function AppBreadcrumb() {
    const matches = useMatches();

    const items = [
        {
            title: <Link to="/">Dashboard</Link>,
        },
        ...matches
            .filter(
                (match) =>
                    match.handle &&
                    (match.handle as any).breadcrumb
            )
            .map((match) => ({
                title: (match.handle as any).breadcrumb,
            })),
    ];

    return <Breadcrumb items={items} />;
}