import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCheckFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#check-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-.646 2.854-6 6a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6.5 10.293l5.646-5.647a.5.5 0 0 1 .708.708" /></g><defs><clipPath id="check-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCheckFill);
const Memo = memo(ForwardRef);
export default Memo;