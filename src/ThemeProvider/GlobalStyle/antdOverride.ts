import { Theme, css } from 'antd-style';
import { readableColor, rgba } from 'polished';

export default (token: Theme) => css`
  .${token.prefixCls}-checkbox-inner:after {
    border-color: ${readableColor(token.colorPrimary)} !important;
  }

  .${token.prefixCls}-btn {
    box-shadow: none;
  }

  .${token.prefixCls}-btn-primary:not(:disabled) {
    color: ${readableColor(token.colorPrimary)} !important;

    &:hover {
      color: ${readableColor(token.colorPrimary)} !important;
    }

    &:active {
      color: ${readableColor(token.colorPrimaryActive)} !important;
    }
  }

  .${token.prefixCls}-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding: 4px 8px;

    color: ${token.colorBgLayout} !important;

    background-color: ${token.colorText} !important;
    border-radius: ${token.borderRadiusSM}px !important;
  }

  .${token.prefixCls}-tooltip-arrow {
    &::before,
    &::after {
      background: ${token.colorText} !important;
    }
  }

  .${token.prefixCls}-switch-handle::before {
    background: ${token.colorBgContainer} !important;
  }

  .${token.prefixCls}-image-preview-close,
    .${token.prefixCls}-image-preview-switch-right,.${token.prefixCls}-image-preview-switch-left {
    ${token.stylish.blur};
    border-radius: ${token.borderRadiusLG}px;
    background: ${rgba(token.colorBgMask, 0.1)};

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .${token.prefixCls}-dropdown {
    .${token.prefixCls}-dropdown-menu {
      border: 1px solid ${token.colorBorderSecondary};
      border-radius: ${token.borderRadius}px !important;
      box-shadow: ${token.boxShadowSecondary};
    }
  }

  @media (max-width: 575px) {
    .${token.prefixCls}-tooltip {
      display: none !important;
    }
  }
`;
