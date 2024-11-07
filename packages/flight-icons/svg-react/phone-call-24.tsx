import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPhoneCall24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M14.833.005a.75.75 0 00-.166 1.49 8.873 8.873 0 017.838 7.828.75.75 0 001.49-.167A10.373 10.373 0 0014.833.005zM14.894 4.29a.75.75 0 10-.287 1.473 4.596 4.596 0 013.63 3.63.75.75 0 101.473-.287 6.096 6.096 0 00-4.816-4.815z" />
                    <path
                        fillRule="evenodd"
                        d="M8.755 1.678A2.814 2.814 0 006.898 1H3.81a2.815 2.815 0 00-2.662 1.911c-.124.37-.17.76-.136 1.15l.002.011a21.082 21.082 0 003.28 9.248c1.8 2.773 3.642 4.604 6.407 6.393a21.173 21.173 0 009.222 3.274l.013.002a2.817 2.817 0 002.829-1.671c.157-.359.237-.746.236-1.137v-.105c-.003-.539-.012-2.508 0-2.96a2.805 2.805 0 00-2.419-2.849h-.007c-.933-.123-1.85-.351-2.731-.68a2.816 2.816 0 00-2.964.632l-.901.899a15.726 15.726 0 01-5.123-5.112l.896-.895.003-.003a2.806 2.806 0 00.633-2.961 12.436 12.436 0 01-.68-2.726l-.001-.007a2.806 2.806 0 00-.951-1.736zM6.909 2.5A1.314 1.314 0 018.22 3.622c.138 1.042.394 2.066.762 3.05v.002a1.304 1.304 0 01-.293 1.377L7.382 9.356a.75.75 0 00-.122.902 17.225 17.225 0 006.466 6.454.75.75 0 00.9-.122l1.306-1.303.002-.002a1.312 1.312 0 011.383-.293h.001c.987.368 2.013.623 3.057.761A1.312 1.312 0 0121.5 17.08c-.012.479-.003 2.48 0 3.007v.101a1.302 1.302 0 01-.425.968 1.313 1.313 0 01-1 .34 19.676 19.676 0 01-8.56-3.041c-2.59-1.675-4.279-3.356-5.963-5.95A19.582 19.582 0 012.505 3.92a1.303 1.303 0 01.776-1.308c.167-.074.347-.112.53-.112h3.098zm3.478 3.647v-.001l-.702.264.702-.263z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);