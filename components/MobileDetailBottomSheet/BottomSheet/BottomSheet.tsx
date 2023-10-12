import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import {
  BottomSheetStyled,
  Header,
  HeaderTitle,
  SheetBody,
  ThumbBar,
  ThumbBarWrapper,
  // @ts-ignore
} from "./BottomSheetStyles.tsx";
import {
  bottomSheetEvents,
  syncHeight,
  TBottomSheetEventsKey,
  useReduceMotion,
  // @ts-ignore
} from "./utils.ts";

//  TODO - account for resizing the window
// const DRAWER_HEIGHT = window.innerHeight;
const INITIAL_DRAWER_DISTANCE_FROM_TOP = -9;
const MAX_WIDTH = 580;
const DRAWER_SNAP_MARGIN = 10;
const COLLAPSED_HEIGHT = 75;
const THUMB_HEIGHT = 135;

type TBottomSheetProps = {
  /**
   * nested children
   */
  children: React.JSX.Element;
  /**
   * optional specific aria label for close button
   */
  closeButtonAriaLabel?: string;
  /**
   * Custom initial expanded height
   */
  initialDrawerDistanceTop?: number;
  /**
   * Do you want to see logs instead of children in the BottomSheet?
   */
  isDebugMode: boolean;
  /**
   * img
   */
  imgSrc: string;
  /**
   * Is the BottomSheet visible on the scren?
   */
  isOpen: boolean;
  /**
   * Optional custom maxWidth for the BottomSheet in px
   */
  maxWidth?: string;
  /**
   * Fires when close button is fired
   */
  onClose: () => void;
  /**
   * Fires when the status changes
   */
  onStatusChange?: (status: string) => void;
  /**
   * Optional Subtitle for the BottomSheet
   */
  subtitle?: string;
  /**
   * Optional Title for the BottomSheet
   */
  title?: string;
};

export const BottomSheet: React.FC<TBottomSheetProps> = ({
  children,
  closeButtonAriaLabel = "Close",
  initialDrawerDistanceTop = INITIAL_DRAWER_DISTANCE_FROM_TOP,
  isDebugMode,
  imgSrc,
  isOpen,
  maxWidth = MAX_WIDTH,
  onClose,
  onStatusChange,
  subtitle,
  title,
}) => {
  // STATE
  const scrollRef = useRef<HTMLDivElement>(null);
  const [bottom, setBottom] = React.useState(0);
  const [draggingPosition, setDraggingPosition] = React.useState<number | null>(
    null
  );
  const [showImg, setShowImg] = React.useState(false);
  const [moveUp, setMoveUp] = React.useState(true);
  const [DRAWER_HEIGHT, setDrawerHeight] = React.useState(0);

  useEffect(() => {
    setDrawerHeight(window.innerHeight);
    setBottom(-window.innerHeight);
  }, []);

  useEffect(() => {
    // resize listener
    window.addEventListener("resize", syncHeight);
    syncHeight();
  }, []);

  // ANIMATION
  const prefersReducedMotion = useReduceMotion();
  const styles = useSpring({
    bottom,
    immediate: prefersReducedMotion,
    config: { friction: 20 },
  });

  // HANDLERS
  const handlePointerDown = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    // @ts-ignore
    const event = (e?.touches != null ? e.touches[0] : e) as MouseEvent;
    // handle safari body scroll bug
    document.documentElement.classList.add("is-locked");
    const newDraggingPosition =
      (e.currentTarget.parentElement?.getBoundingClientRect().bottom ?? 0) -
      event.clientY -
      158;
    setMoveUp(bottom !== 9);
    setDraggingPosition(newDraggingPosition);
  };

  const handlePointerMove = React.useCallback(
    (e: TouchEvent | MouseEvent) => {
      // @ts-ignore
      const event = e?.touches != null ? e?.touches[0] : e;
      if (draggingPosition != null) {
        const newBottom = DRAWER_HEIGHT - event.clientY - draggingPosition;
        if (newBottom !== bottom) {
          setBottom(newBottom);
        }
      }
    },
    [bottom, draggingPosition, DRAWER_HEIGHT]
  );

  const handleScrollRepositioning = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const handleStatusChange = React.useCallback(
    (status: TBottomSheetEventsKey) => {
      const newStatus = bottomSheetEvents[status];
      onStatusChange && onStatusChange(newStatus);
    },
    [onStatusChange]
  );

  // LISTENERS

  // toggling the bottom sheet
  useEffect(() => {
    if (isOpen) {
      setShowImg(true);
      handleStatusChange("expanded");
      handleScrollRepositioning();
      setBottom(-initialDrawerDistanceTop);
    } else {
      handleStatusChange("collapsed");
      setBottom(-DRAWER_HEIGHT + COLLAPSED_HEIGHT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // dragging
  useEffect(() => {
    const handlePointerUp = () => {
      document.documentElement.classList.remove("is-locked");

      if (draggingPosition == null) {
        return;
      }

      // snap logic
      if (bottom > -DRAWER_SNAP_MARGIN) {
        setShowImg(true);
        handleStatusChange("snapToTop");
        setBottom(-initialDrawerDistanceTop);
      } else if (bottom - 158 < -DRAWER_HEIGHT + COLLAPSED_HEIGHT) {
        setShowImg(false);
        handleStatusChange("dismissed");
        onClose();
        setBottom(-DRAWER_HEIGHT + 158);
      } else {
        if (moveUp) {
          setShowImg(true);
          handleStatusChange("snapToTop");
          setBottom(-initialDrawerDistanceTop);
        } else {
          setShowImg(false);
          handleStatusChange("collapsed");
          setBottom(-DRAWER_HEIGHT + COLLAPSED_HEIGHT);
        }
      }

      setDraggingPosition(null);
    };

    document.addEventListener("touchend", handlePointerUp);
    document.addEventListener("touchmove", handlePointerMove);
    document.addEventListener("mouseup", handlePointerUp);
    document.addEventListener("mousemove", handlePointerMove);
    return () => {
      document.removeEventListener("touchend", handlePointerUp);
      document.removeEventListener("touchmove", handlePointerMove);
      document.removeEventListener("mouseup", handlePointerUp);
      document.removeEventListener("mousemove", handlePointerMove);
    };
  }, [
    initialDrawerDistanceTop,
    moveUp,
    bottom,
    draggingPosition,
    handlePointerMove,
    handleStatusChange,
    onClose,
  ]);

  return (
    <>
      <animated.div
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          position: "fixed",
          width: "100%",
          height: DRAWER_HEIGHT,
          transition: "height 200ms",
          zIndex: 2,
          ...styles,
        }}
      >
        {showImg && (
          <img
            src={imgSrc}
            alt="dorm"
            style={{
              transform: "translate(0, 8px)",
              width: "100%",
              height: "150px",
              objectFit: "cover",
              backgroundColor: "pink",
            }}
          />
        )}
        <BottomSheetStyled
          aria-modal="true"
          role="dialog"
          aria-labelledby="BottomSheet-title"
        >
          <div onMouseDown={handlePointerDown} onTouchStart={handlePointerDown}>
            <ThumbBarWrapper
              dragging={draggingPosition != null}
              onDragStart={(e: any) => {
                e.preventDefault();
                // get rid of the ghost drag image in the view
                e.dataTransfer.setDragImage(new Image(), 0, 0);
              }}
              draggable={true}
            >
              <ThumbBar />
            </ThumbBarWrapper>
            <Header>
              <HeaderTitle>
                {title && <h1 id="BottomSheet-title">{title}</h1>}
                {subtitle && <h2>{subtitle}</h2>}
              </HeaderTitle>
            </Header>
          </div>
          <SheetBody
            ref={scrollRef}
            tabIndex={0}
            bodyheight={
              DRAWER_HEIGHT +
              bottom -
              (title || subtitle ? COLLAPSED_HEIGHT : THUMB_HEIGHT)
            }
          >
            {children}
          </SheetBody>
        </BottomSheetStyled>
      </animated.div>
    </>
  );
};
