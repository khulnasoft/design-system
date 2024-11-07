import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconDatabase24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M22 5.75c0-.751-.47-1.34-1.02-1.763-.563-.43-1.329-.787-2.208-1.072C17.005 2.342 14.611 2 12 2c-2.61 0-5.005.342-6.772.915-.88.285-1.646.641-2.207 1.072C2.469 4.41 2 5 2 5.75v12.412c0 .752.454 1.352 1.006 1.79.56.445 1.325.812 2.204 1.106 1.766.59 4.163.942 6.79.942s5.024-.352 6.79-.942c.88-.294 1.644-.66 2.204-1.105.552-.439 1.006-1.039 1.006-1.791V5.75zM3.933 5.177c-.385.296-.433.496-.433.573 0 .077.048.277.433.573.374.286.963.577 1.758.835C7.27 7.67 9.502 8 12 8s4.729-.33 6.31-.842c.794-.258 1.383-.549 1.757-.835.385-.296.433-.496.433-.573 0-.077-.048-.277-.433-.573-.375-.286-.963-.577-1.758-.835C16.73 3.83 14.498 3.5 12 3.5s-4.729.33-6.31.842c-.794.258-1.383.549-1.757.835zM20.5 7.835c-.49.29-1.078.539-1.728.75-1.767.573-4.161.915-6.772.915-2.61 0-5.005-.342-6.772-.915-.65-.211-1.238-.46-1.728-.75v3.915c0 .08.05.281.43.575.372.287.957.577 1.75.834C7.256 13.671 9.486 14 12 14c2.514 0 4.744-.329 6.32-.84.793-.258 1.378-.549 1.75-.835.38-.294.43-.495.43-.575V7.835zm0 6.005c-.486.288-1.07.536-1.716.746-1.764.573-4.159.914-6.784.914s-5.02-.341-6.784-.914c-.646-.21-1.23-.458-1.716-.746v4.322c0 .102.06.315.439.616.371.295.956.593 1.747.857 1.574.527 3.802.865 6.314.865s4.74-.338 6.314-.865c.791-.264 1.376-.563 1.747-.857.379-.3.439-.514.439-.616V13.84z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);