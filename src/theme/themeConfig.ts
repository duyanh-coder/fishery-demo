
import type { ThemeConfig } from "antd";

import { COLORS } from "./colors";

import { TYPOGRAPHY } from "./typography";

export const themeConfig: ThemeConfig = {

  token: {

    colorPrimary: COLORS.primary,

    colorSuccess: COLORS.success,

    colorWarning: COLORS.warning,

    colorError: COLORS.error,

    colorInfo: COLORS.info,

    colorBgLayout: COLORS.background,

    colorBgContainer: COLORS.backgroundContainer,

    colorBorder: COLORS.border,

    colorText: COLORS.textPrimary,

    colorTextSecondary: COLORS.textSecondary,

    fontFamily: TYPOGRAPHY.fontFamily,

    borderRadius: TYPOGRAPHY.borderRadius,

  },

};