import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCricketFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cricket-fill_svg__a)"><path fill="#000" d="m15.207 5.085-3.293-3.292a1 1 0 0 0-1.414 0L3.793 8.5a1 1 0 0 0 0 1.414l1.293 1.293-2.938 2.937a.5.5 0 0 0 .708.708l2.937-2.938 1.293 1.293a1 1 0 0 0 1.414 0L15.207 6.5a1 1 0 0 0 0-1.415M7.793 12.5 6.5 11.207l1.854-1.853a.5.5 0 1 0-.708-.708L5.793 10.5 4.5 9.207 6.707 7H10v3.293zM2 3.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0" /></g><defs><clipPath id="cricket-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCricketFill);
const Memo = memo(ForwardRef);
export default Memo;