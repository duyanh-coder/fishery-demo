// src/router/ProtectedRoute.tsx

import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

type Props = {

    children: JSX.Element;

};

export default function ProtectedRoute({ children }: Props) {

    const isLogin = true;

    if (!isLogin)

        return <Navigate to="/login" replace />;

    return children;

}