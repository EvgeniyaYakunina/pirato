import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTargetFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#target-fill_svg__a)"><path fill="#000" d="M13.2 4.962a.5.5 0 0 0-.236.667 5.505 5.505 0 1 1-1.445-1.855l-1.423 1.424a3.5 3.5 0 0 0-4.571 5.277A3.5 3.5 0 0 0 11.494 7.8a.5.5 0 1 0-1 .056 2.5 2.5 0 0 1-3.875 2.23l1.497-1.497 2.359-2.356 3.879-3.875a.5.5 0 1 0-.708-.708L12.23 3.063a6.5 6.5 0 0 0-8.825 9.533 6.5 6.5 0 0 0 10.463-7.398.5.5 0 0 0-.667-.236" /></g><defs><clipPath id="target-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTargetFill);
const Memo = memo(ForwardRef);
export default Memo;