import { COLORS } from "./colors";
import { SHADOW } from "./shadow";

export const panelStyle = {
    borderRadius: 16,
    border: `1px solid ${COLORS.border}`,
    boxShadow: SHADOW.lg,
};

export const panelHeaderStyle =
{
    styles: {
        header: {
            background: COLORS.primary,
            color: "#fff",
            borderBottom: "none",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            fontWeight: 600,
            fontSize: 16,
        },
    },
}
export const panelHeaderStyleSecondary =
{
    styles: {
        header: {
            background: COLORS.secondary,
            color: "#fff",
            borderBottom: "none",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            fontWeight: 600,
            fontSize: 16,
        },
    },
}
export const panelHeaderStyleWarning =
{
    styles: {
        header: {
            background: COLORS.warning,
            color: "#fff",
            borderBottom: "none",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            fontWeight: 600,
            fontSize: 16,
        },
    },
}
export const panelHeaderStyleSuccess =
{
    styles: {
        header: {
            background: COLORS.success,
            color: "#fff",
            borderBottom: "none",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            fontWeight: 600,
            fontSize: 16,
        },
    },
}
export const panelHeaderStyleInfo =
{
    styles: {
        header: {
            background: COLORS.info,
            color: "#fff",
            borderBottom: "none",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            fontWeight: 600,
            fontSize: 16,
        },
    },
}