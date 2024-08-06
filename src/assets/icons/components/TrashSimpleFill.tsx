import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrashSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#trash-simple-fill_svg__a)"><path fill="#000" d="M14 3.5a.5.5 0 0 1-.5.5H13v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4h-.5a.5.5 0 1 1 0-1h11a.5.5 0 0 1 .5.5M5.5 2h5a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1" /></g><defs><clipPath id="trash-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrashSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;