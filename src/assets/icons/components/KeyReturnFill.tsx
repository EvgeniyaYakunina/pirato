import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyReturnFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#key-return-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-2 6a.5.5 0 0 1-.5.5H6.207l.647.646a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 1 1 .708.708L6.207 8H10.5V6.5a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="key-return-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgKeyReturnFill);
const Memo = memo(ForwardRef);
export default Memo;