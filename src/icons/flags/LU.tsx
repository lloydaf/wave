// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const LU: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="LU__Ebene_1"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.LU__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path d="M2 0h24c1.1 0 2 .9 2 2v15.5c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#fff" />
            <defs>
                <filter
                    id="LU__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={6.7} id="LU__mask-2_1_">
                <g filter="url(#LU__Adobe_OpacityMaskFilter)">
                    <path
                        id="LU__path-1_1_"
                        className="LU__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="LU__Rectangle-2"
                mask="url(#LU__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#f14455"
                d="M0 0h28v6.7H0z"
            />
            <defs>
                <filter
                    id="LU__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={13.3}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={13.3} width={28} height={6.7} id="LU__mask-2_2_">
                <g filter="url(#LU__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="LU__path-1_2_"
                        className="LU__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#LU__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#29b4ee"
                d="M0 13.3h28V20H0z"
            />
        </svg>
    );
};

LU.defaultProps = {};
export default LU;