import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignRightSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-right-simple-fill_svg__a)"><path fill="#000" d="M14.5 3.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 1 0m-3 1.5H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h9.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" /></g><defs><clipPath id="align-right-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignRightSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;