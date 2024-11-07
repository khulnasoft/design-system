import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGoogleForms16 = forwardRef<SVGSVGElement, IconProps>(
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
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M12.063 15H3.937A.949.949 0 013 14.046V1.955C3 1.43 3.422 1 3.938 1h5.624L13 4.5v9.546a.949.949 0 01-.938.954zM6.75 7.205h4.063v-.796H6.75v.796zm0 1.113h4.063v.796H6.75v-.796zm0 1.91h4.063v.795H6.75v-.796zm-.781-3.421a.434.434 0 01-.43.437.434.434 0 01-.43-.437c0-.242.193-.438.43-.438s.43.196.43.438zm-.43 2.346c.237 0 .43-.195.43-.437a.434.434 0 00-.43-.438.434.434 0 00-.43.438c0 .242.193.437.43.437zm.43 1.472a.434.434 0 01-.43.438.434.434 0 01-.43-.438c0-.242.193-.438.43-.438s.43.196.43.438z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
