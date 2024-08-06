import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVignetteFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#vignette-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1 5.5c0 1.933-2.015 3.5-4.5 3.5S3.5 9.933 3.5 8 5.515 4.5 8 4.5s4.5 1.567 4.5 3.5" /></g><defs><clipPath id="vignette-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVignetteFill);
const Memo = memo(ForwardRef);
export default Memo;