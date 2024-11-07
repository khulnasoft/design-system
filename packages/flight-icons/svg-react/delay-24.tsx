import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconDelay24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 008.747-5.788.75.75 0 111.382.583c-.072.17-.148.338-.23.506v.002A11 11 0 0112 23C5.925 23 1 18.075 1 12S5.925 1 12 1c.186 0 .371.005.555.014a.75.75 0 01-.079 1.498A9.14 9.14 0 0012 2.5zM14.822 2.136a.75.75 0 01.971-.427c.346.135.683.287 1.01.455a.75.75 0 01-.687 1.334 9.08 9.08 0 00-.866-.39.75.75 0 01-.428-.972zM18.414 4.112a.75.75 0 011.06-.011c.263.257.513.527.749.807a.75.75 0 11-1.147.966 10.025 10.025 0 00-.651-.702.75.75 0 01-.01-1.06zM20.977 7.315a.75.75 0 01.99.381c.149.335.282.677.398 1.026a.75.75 0 11-1.422.476c-.102-.303-.218-.601-.347-.893a.75.75 0 01.38-.99zM22.174 11.239a.75.75 0 01.768.73c.01.368 0 .737-.029 1.107a.75.75 0 01-1.495-.118c.025-.317.033-.634.025-.95a.75.75 0 01.73-.77z" />
                    <path d="M12.5 5.75a.75.75 0 00-1.5 0V12c0 .284.16.544.415.67l4.5 2.25a.75.75 0 10.67-1.34L12.5 11.536V5.75z" />
                </g>
            </svg>
        );
    }
);
