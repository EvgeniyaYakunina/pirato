import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShovelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shovel-fill_svg__a)"><path fill="#000" d="M15.354 4.354a.5.5 0 0 1-.708 0L13.5 3.207 9.063 7.644l-.71-.706L12.792 2.5l-1.145-1.146a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708M5.5 11a.5.5 0 0 1-.354-.854l3.208-3.208-2.147-2.145a1 1 0 0 0-1.414 0l-3.5 3.5A1 1 0 0 0 1 9v5a1 1 0 0 0 1 1h5a.99.99 0 0 0 .707-.293l3.5-3.5a1 1 0 0 0 0-1.414L9.062 7.646l-3.208 3.208A.5.5 0 0 1 5.5 11" /></g><defs><clipPath id="shovel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShovelFill);
const Memo = memo(ForwardRef);
export default Memo;