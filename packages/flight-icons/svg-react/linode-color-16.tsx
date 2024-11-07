import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconLinodeColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#231F20"
                    d="M14 7.197l-1.993-1.072-1.682.998-.02 1.022-.819-.524-1.112.66-.049-1.117-1.145-.745 1.094-.55c-.008 0 0 .106-.162-3.656L5.524 1 2 2.066l.787 3.686 1.183.894-.9.412.588 2.778.826.755-.59.35.458 2.148L6.206 15c.009-.01.195-.15 2.381-1.845l-.064-1.459.94.776c.013-.014.2-.149 1.921-1.48l.067-1.079.709.479c.012-.013.173-.133 1.562-1.206L14 7.197z"
                />
                <path
                    fill="#000"
                    d="M12.347 8.346L14 7.197l-1.993-1.072-1.682.998 2.022 1.223z"
                />
                <path
                    fill="#004B16"
                    d="M12.163 10.39l.183-2.044-2.02-1.223-.042 1.997 1.88 1.27zM9.466 12.47v-2.118L7.424 8.845l.16 2.08 1.882 1.544z"
                />
                <path
                    fill="#000"
                    d="M9.466 10.352l2.05-1.43-2.03-1.301-2.062 1.224 2.042 1.507z"
                />
                <path
                    fill="#004B16"
                    d="M6.206 14.998l-.326-2.164-1.987-1.894.46 2.148 1.853 1.91z"
                />
                <path
                    fill="#000"
                    d="M5.88 12.834l2.616-1.816L6.47 9.412 3.893 10.94l1.987 1.894z"
                />
                <path
                    fill="#004B16"
                    d="M5.71 11.71L5.28 8.85l-2.213-1.79.592 2.775L5.71 11.71z"
                />
                <path
                    fill="#000"
                    d="M5.279 8.848l3.048-1.684L6.05 5.68 3.066 7.059l2.213 1.79z"
                />
                <path
                    fill="#004B16"
                    d="M5.072 7.482l-.591-3.92L2 2.065l.787 3.686 2.285 1.73z"
                />
                <path
                    fill="#000"
                    d="M4.481 3.563L8.108 2.21 5.524 1 2 2.066l2.481 1.497z"
                />
                <path
                    fill="#1CB35C"
                    d="M13.725 9.184c-1.535 1.185-1.57 1.206-1.563 1.206.19-2.14.174-2.044.183-2.044 1.75-1.219 1.641-1.149 1.653-1.149l-.273 1.987zM11.388 10.99c-1.9 1.47-1.93 1.479-1.922 1.479-.019-2.217-.008-2.118 0-2.118 2.188-1.52 2.043-1.43 2.05-1.43l-.128 2.069zM8.59 13.153c-2.37 1.834-2.392 1.845-2.38 1.845-.337-2.23-.329-2.164-.329-2.164 2.788-1.933 2.612-1.816 2.619-1.816l.09 2.135zM8.108 2.21c.166 3.765.153 3.657.162 3.657-3.137 1.584-3.206 1.615-3.2 1.615-.604-4.007-.595-3.92-.59-3.92L8.107 2.21zM8.325 7.164c.126 2.854.11 2.755.122 2.755-2.714 1.775-2.745 1.794-2.734 1.794-.439-2.94-.439-2.865-.432-2.865l3.044-1.684z"
                />
            </svg>
        );
    }
);