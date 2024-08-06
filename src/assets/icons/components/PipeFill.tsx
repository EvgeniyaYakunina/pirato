import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPipeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pipe-fill_svg__a)"><path fill="#000" d="M14.5 6.5H13v-3h1.5a.5.5 0 0 0 0-1h-1.636A1 1 0 0 0 12 2h-1a1 1 0 0 0-.864.5H9A6.507 6.507 0 0 0 2.5 9v1.135A1 1 0 0 0 2 11v1a1 1 0 0 0 .5.865V14.5a.5.5 0 0 0 1 0V13h3v1.5a.5.5 0 0 0 1 0v-1.635A1 1 0 0 0 8 12v-1a1 1 0 0 0-.5-.865V9A1.5 1.5 0 0 1 9 7.5h1.136A1 1 0 0 0 11 8h1a1 1 0 0 0 .864-.5H14.5a.5.5 0 0 0 0-1M7 12H3v-1h4zm4-5V3h1v4z" /></g><defs><clipPath id="pipe-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPipeFill);
const Memo = memo(ForwardRef);
export default Memo;