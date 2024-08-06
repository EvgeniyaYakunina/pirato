import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlameFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flame-fill_svg__a)"><path fill="#000" d="M10.862 3.218A13.8 13.8 0 0 0 8.258 1.07a.5.5 0 0 0-.515 0 13.8 13.8 0 0 0-2.605 2.147C3.412 5.03 2.5 7.03 2.5 9a5.5 5.5 0 1 0 11 0c0-1.97-.912-3.97-2.638-5.782M6 11.5c0-1.73 1.408-2.955 2-3.394.592.438 2 1.665 2 3.394a2 2 0 0 1-4 0" /></g><defs><clipPath id="flame-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlameFill);
const Memo = memo(ForwardRef);
export default Memo;