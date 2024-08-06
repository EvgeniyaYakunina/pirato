import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAcornFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#acorn-fill_svg__a)"><path fill="#000" d="M14.5 6.5A3.504 3.504 0 0 0 11 3H8.5A1.5 1.5 0 0 1 10 1.5a.5.5 0 0 0 0-1A2.5 2.5 0 0 0 7.5 3H5a3.504 3.504 0 0 0-3.5 3.5 1 1 0 0 0 .5.865V8c0 2.22 2.07 3.883 3.734 5.218C6.479 13.817 7.5 14.636 7.5 15a.5.5 0 0 0 1 0c0-.364 1.021-1.183 1.766-1.782C11.93 11.883 14 10.221 14 8v-.635a1 1 0 0 0 .5-.865m-4.86 5.938c-.663.532-1.25 1-1.64 1.46-.39-.457-.977-.928-1.64-1.46C4.861 11.237 3 9.74 3 8v-.5h10V8c0 1.741-1.863 3.237-3.36 4.438" /></g><defs><clipPath id="acorn-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAcornFill);
const Memo = memo(ForwardRef);
export default Memo;