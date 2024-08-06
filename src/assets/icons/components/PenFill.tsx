import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pen-fill_svg__a)"><path fill="#000" d="m14.208 4.585-2.794-2.792a1 1 0 0 0-1.414 0L2.293 9.5a1 1 0 0 0-.293.707V13a1 1 0 0 0 1 1h2.793a.99.99 0 0 0 .707-.293l5.23-5.229.217.869-2.3 2.3a.5.5 0 1 0 .707.707l2.5-2.5a.5.5 0 0 0 .132-.475l-.432-1.726L14.207 6a1 1 0 0 0 0-1.415M12 6.793 9.208 4l1.5-1.5L13.5 5.293z" /></g><defs><clipPath id="pen-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPenFill);
const Memo = memo(ForwardRef);
export default Memo;