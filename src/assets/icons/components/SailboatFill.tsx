import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSailboatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sailboat-fill_svg__a)"><path fill="#000" d="M10 8.75V4.553a.25.25 0 0 1 .437-.168l3.438 3.779A.5.5 0 0 1 13.49 9h-3.24a.25.25 0 0 1-.25-.25m5.45 2.033A.5.5 0 0 0 15 10.5H9V.5a.5.5 0 0 0-.888-.313l-6.5 8A.5.5 0 0 0 2 9h6v1.5H1a.5.5 0 0 0-.39.813l1.85 2.312a1 1 0 0 0 .78.375h9.52a1 1 0 0 0 .78-.375l1.85-2.312a.5.5 0 0 0 .06-.53" /></g><defs><clipPath id="sailboat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSailboatFill);
const Memo = memo(ForwardRef);
export default Memo;