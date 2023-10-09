import styled, { css } from "styled-components";
export const BottomSheetStyled = styled.div`
  ${({ theme }) => css`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    background: white;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 30%);
    border-radius: 8px;
    margin: auto;
    width: auto;
    height: 100%;
    padding: 0px 12px;
    z-index: 3;
    position: relative;
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    backgroundcolor: pink;
    cursor: pointer;
    border: none;
    padding: 8px;
    border-radius: 100%;
    position: absolute;
    right: 16px;
    &:hover {
      background: ${theme.surfaceHover};
    }
  `}
`;

export const DebugLog = styled.p`
  ${({ theme }) => css`
    color: ${theme.onSurface};
  `}
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding-bottom: 16px;
`;

export const HeaderTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    & h1 {
      color: ${theme.onSurface};
      font-size: 1.125rem;
      line-height: 1.5;
      margin: 0;
    }
    & h2 {
      color: ${theme.onSurfaceSecondary};
      font-size: 0.875rem;
      line-height: 1;
      font-weight: 600;
      margin: 0;
    }
  `}
`;

type TSheetBodyProps = {
  bodyheight: number;
};

export const SheetBody = styled.div<TSheetBodyProps>`
  ${({ bodyheight }) => css`
    width: calc(100vw - 24px);
    height: ${bodyheight}px;
    transition: height 200ms;
  `}
`;

export const ThumbBarWrapper = styled.div<{ dragging: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: move; /* fallback if grab cursor is unsupported */
  ${(p) =>
    p.dragging
      ? css`
          cursor: grabbing;
          cursor: -moz-grabbing;
          cursor: -webkit-grabbing;
        `
      : css`
          cursor: grab;
          cursor: -moz-grab;
          cursor: -webkit-grab;
        `}
`;

export const ThumbBar = styled.div`
  ${({ theme }) => css`
    background: #ddd;
    width: 64px;
    margin: 8px auto;
    height: 0.25rem;
    border-radius: 4px;
  `}
`;
