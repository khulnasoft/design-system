import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconOktaColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#191919"
                    d="M8.708 1.1l-.29 3.545a3.892 3.892 0 00-.928.014l-.163-1.72c-.007-.056.035-.099.092-.099h.29L7.569 1.1c-.007-.058.035-.1.092-.1h.956c.057 0 .1.05.092.1zM6.3 1.275c-.014-.05-.071-.085-.12-.064l-.893.326c-.05.021-.071.078-.05.127l.73 1.586-.276.099a.096.096 0 00-.05.127l.744 1.557c.269-.148.56-.261.871-.332L6.3 1.276zm-2.196.984l2.061 2.902c-.262.17-.496.375-.701.608L4.23 4.56a.092.092 0 01.007-.134l.227-.184-1.226-1.239a.092.092 0 01.008-.134l.73-.61c.035-.049.091-.042.127 0zM2.375 3.937a.1.1 0 00-.134.029l-.475.82a.091.091 0 00.035.128l1.58.743-.149.255a.088.088 0 00.043.127l1.58.73c.113-.29.262-.567.453-.807L2.375 3.937zM1.213 6.181c.008-.057.064-.085.114-.07l3.443.898a3.29 3.29 0 00-.15.92L2.9 7.788a.095.095 0 01-.086-.107l.05-.29-1.736-.17a.095.095 0 01-.085-.106l.17-.934zM1.086 8.51A.095.095 0 001 8.616l.17.934c.007.057.064.085.113.07l1.686-.438.05.29c.007.057.064.085.113.071l1.665-.46c-.1-.29-.163-.595-.177-.913l-3.535.34zm.552 2.463a.091.091 0 01.036-.128L4.89 9.324c.12.29.283.559.482.8l-1.41 1.004c-.042.029-.106.022-.135-.028l-.148-.255-1.438.991a.1.1 0 01-.135-.028l-.468-.835zm3.897-.673l-2.501 2.534a.092.092 0 00.007.135l.73.608c.042.036.099.029.134-.014l1.013-1.423.227.192c.043.035.106.028.135-.022l.977-1.422a3.597 3.597 0 01-.722-.588zm-.496 4.07a.096.096 0 01-.05-.127l1.48-3.235c.27.142.568.248.88.304l-.44 1.67c-.014.05-.07.086-.12.065l-.277-.1-.46 1.685c-.014.05-.071.085-.12.064l-.893-.326zm2.55-3.015L7.3 14.9c-.007.056.035.099.092.099h.956c.057 0 .1-.05.092-.1l-.141-1.74h.29c.057 0 .1-.05.092-.1l-.163-1.72c-.17.03-.34.036-.517.036-.135.007-.27-.007-.41-.021zm3.436-9.605a.096.096 0 00-.05-.127l-.892-.326c-.05-.021-.107.014-.12.064l-.461 1.685-.276-.1c-.05-.02-.107.015-.12.064l-.44 1.67c.312.064.602.17.878.305l1.48-3.235zm1.955 1.416L10.48 5.7a3.408 3.408 0 00-.723-.588l.978-1.43c.028-.042.092-.056.134-.02l.227.19 1.013-1.422c.028-.043.092-.05.134-.014l.73.608c.043.036.042.1.007.142zm1.353 1.989c.05-.022.064-.085.036-.128l-.482-.82c-.028-.05-.092-.057-.135-.029l-1.438.99-.149-.254c-.028-.05-.092-.064-.134-.028L10.62 5.89c.191.24.354.51.482.8l3.23-1.536zm.503 1.288l.163.934c.007.057-.028.1-.085.106l-3.549.333a3.262 3.262 0 00-.177-.913l1.665-.46c.05-.014.106.021.113.07l.05.29 1.686-.438c.05-.014.106.021.113.07l.021.008zM14.68 9.89c.05.014.107-.021.114-.071l.163-.934c.007-.057-.029-.1-.085-.106l-1.743-.163.05-.29c.007-.057-.029-.1-.085-.107l-1.722-.141a3.33 3.33 0 01-.149.92l3.457.892zm-.92 2.137c-.029.05-.093.057-.135.029l-2.933-2.025c.184-.247.34-.516.453-.807l1.573.722c.05.022.07.085.043.128l-.15.255 1.58.743c.05.021.064.085.036.127l-.468.828zm-3.918-1.196l2.061 2.902c.029.042.092.05.135.014l.73-.608a.092.092 0 00.007-.135l-1.226-1.239.227-.184a.092.092 0 00.007-.134l-1.233-1.21c-.22.219-.453.424-.708.594zm-.021 3.95c-.05.02-.107-.015-.12-.064l-.943-3.433c.305-.07.602-.184.871-.333l.744 1.558c.021.05 0 .106-.05.127l-.276.1.73 1.584c.021.05 0 .107-.05.128l-.906.333z"
                />
            </svg>
        );
    }
);