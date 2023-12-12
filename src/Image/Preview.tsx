import { PropsWithChildren, memo, useEffect, useRef } from 'react';

interface PreviewProps extends PropsWithChildren {
  visible?: boolean;
}

const Preview = memo<PreviewProps>(({ children, visible }) => {
  const ref = useRef<any>();
  useEffect(() => {
    const handleDisableZoom = (event: any) => {
      event.preventDefault();
    };

    if (visible) {
      ref.current.addEventListener('wheel', handleDisableZoom, { passive: false });
    } else {
      ref.current.removeEventListener('wheel', handleDisableZoom);
    }
  }, [visible]);

  return <div ref={ref}>{children}</div>;
});

export default Preview;
