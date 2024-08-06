import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPencilSimpleLineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pencil-simple-line-fill_svg__a)"><path fill="#000" d="m14.208 4.585-2.794-2.792a1 1 0 0 0-1.414 0L2.293 9.5a1 1 0 0 0-.293.707V13a1 1 0 0 0 1 1h10.5a.5.5 0 1 0 0-1H7.208l7-7a1 1 0 0 0 0-1.415M12 6.793 9.208 4l1.5-1.5L13.5 5.293z" /></g><defs><clipPath id="pencil-simple-line-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPencilSimpleLineFill);
const Memo = memo(ForwardRef);
export default Memo;