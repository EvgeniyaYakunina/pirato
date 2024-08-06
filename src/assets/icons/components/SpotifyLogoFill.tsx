import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpotifyLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#spotify-logo-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m1.942 9.109a.5.5 0 0 1-.676.208 2.67 2.67 0 0 0-2.532 0 .5.5 0 0 1-.468-.884 3.71 3.71 0 0 1 3.468 0 .5.5 0 0 1 .208.676m1-1.75a.5.5 0 0 1-.676.206 4.82 4.82 0 0 0-4.53 0 .5.5 0 0 1-.47-.883 5.81 5.81 0 0 1 5.47 0 .5.5 0 0 1 .205.678zm1-1.75a.5.5 0 0 1-.677.205 6.91 6.91 0 0 0-6.529 0 .5.5 0 1 1-.471-.882 7.92 7.92 0 0 1 7.471 0 .5.5 0 0 1 .205.678z" /></g><defs><clipPath id="spotify-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpotifyLogoFill);
const Memo = memo(ForwardRef);
export default Memo;