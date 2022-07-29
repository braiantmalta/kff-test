import { Wrapper } from '@components/common/htmlTags';
import { CSSProperties } from 'react';

type PrimaryFlaskProps = {
  primaryColor?: string;
  style?: CSSProperties;
};

export const PrimaryFlask = ({ primaryColor, style }: PrimaryFlaskProps) => {
  return (
    <Wrapper style={style}>
      <svg
        width={552}
        height={552}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path fill="url(#a)" d="M0 0h552v552H0z" />
        <path
          d="M189 119.5c0-.8 3-1 4.5-1 68.499 6 135-.5 136-.5.8 0 2.667 1 3.5 1.5v5.5c0 1-3.5.5-5.5 1-1.6.4-1.333 6.833-1 10l10.5 8c18 14.4 23.167 34 23.5 42v288.5c0 1.2-.333 9.5-.5 13.5-6.5 11-11.5 11.5-43.5 19S211 508 204 507s-29-7-35.5-11c-5.2-3.2-7.167-11.333-7.5-15l-1-279.5c0-11.6 3-24.167 4.5-29-1.6-5.2 18.666-25.5 29-35l2-3c.8-.4.666-5.833.5-8.5-4.4 0-6.5-1-7-1.5v-5Z"
          fill={primaryColor}
          fillOpacity={0.5}
        />
        <defs>
          <pattern
            id="a"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#b" transform="scale(.00025)" />
          </pattern>
          <image
            id="b"
            width={4000}
            height={4000}
          />
        </defs>
      </svg>
    </Wrapper>
  );
};

/**
 *     <svg
        width={201}
        height={393}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29 1.5c0-.8 3-1 4.5-1 68.499 6 135-.5 136-.5.8 0 2.667 1 3.5 1.5V7c0 1-3.5.5-5.5 1-1.6.4-1.333 6.833-1 10l10.5 8c18 14.4 23.167 34 23.5 42v288.5c0 1.2-.333 9.5-.5 13.5-6.5 11-11.5 11.5-43.5 19S51 390 44 389s-29-7-35.5-11c-5.2-3.2-7.167-11.333-7.5-15L0 83.5c0-11.6 3-24.167 4.5-29-1.6-5.2 18.666-25.5 29-35l2-3c.8-.4.666-5.833.5-8.5-4.4 0-6.5-1-7-1.5v-5Z"
          fill={primaryColor}
          fillOpacity={0.5}
        />
      </svg>
 */